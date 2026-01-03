import { z } from 'zod';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { eq } from 'drizzle-orm';
import { getDb } from '@/server/db';
import { users } from '../drizzle/schema';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const SALT_ROUNDS = 10;

// Restricted states for Indian fantasy gaming compliance
const RESTRICTED_STATES = ['Andhra Pradesh', 'Assam', 'Nagaland', 'Odisha', 'Sikkim', 'Telangana'];

export const registerSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  state: z.string().min(1, 'State is required'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  acceptedTerms: z.boolean().refine(val => val === true, 'You must accept the terms'),
  acceptedAgeState: z.boolean().refine(val => val === true, 'You must confirm age and state eligibility'),
});

export const loginSchema = z.object({
  email: z.string().min(1, 'Email or mobile number is required'),
  password: z.string().min(1, 'Password is required'),
});

export async function registerUser(input: z.infer<typeof registerSchema>) {
  const db = await getDb();
  
  // Check if state is restricted
  if (RESTRICTED_STATES.includes(input.state)) {
    throw new Error('Registration is not allowed from your state due to local regulations');
  }
  
  // Check if user is 18+
  const birthDate = new Date(input.dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  if (age < 18) {
    throw new Error('You must be at least 18 years old to register');
  }
  
  // Check if email already exists
  const existingUser = await db.select().from(users).where(eq(users.email, input.email)).limit(1);
  if (existingUser.length > 0) {
    throw new Error('Email already registered');
  }
  
  // Hash password
  const hashedPassword = await bcrypt.hash(input.password, SALT_ROUNDS);
  
  // Create username from email
  const username = input.email.split('@')[0];
  
  // Insert user
  const [newUser] = await db.insert(users).values({
    email: input.email,
    password: hashedPassword,
    username: username,
    name: `${input.firstName} ${input.lastName}`,
    state: input.state,
    dateOfBirth: birthDate,
    loginMethod: 'email',
    role: 'user',
  });
  
  // Generate JWT token
  const token = jwt.sign(
    { userId: newUser.insertId, email: input.email },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
  
  return {
    token,
    user: {
      id: newUser.insertId,
      email: input.email,
      username: username,
      name: `${input.firstName} ${input.lastName}`,
    },
  };
}

export async function loginUser(input: z.infer<typeof loginSchema>) {
  const db = await getDb();
  
  // Find user by email
  const [user] = await db.select().from(users).where(eq(users.email, input.email)).limit(1);
  
  if (!user) {
    throw new Error('Invalid email or password');
  }
  
  // Check if user has a password (email/password login)
  if (!user.password) {
    throw new Error('This account uses a different login method');
  }
  
  // Verify password
  const isPasswordValid = await bcrypt.compare(input.password, user.password);
  
  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }
  
  // Update last signed in
  await db.update(users).set({ lastSignedIn: new Date() }).where(eq(users.id, user.id));
  
  // Generate JWT token
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
  
  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
      name: user.name,
      credits: 1000, // Default credits for now
      avatar: user.username?.substring(0, 2).toUpperCase() || 'U',
    },
  };
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: number; email: string };
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
}
