import dotenv from 'dotenv';
dotenv.config();

console.log('CRICKET_API_KEY exists:', !!process.env.CRICKET_API_KEY);
console.log('CRICKET_API_KEY length:', process.env.CRICKET_API_KEY?.length);
console.log('First 10 chars:', process.env.CRICKET_API_KEY?.substring(0, 10));
