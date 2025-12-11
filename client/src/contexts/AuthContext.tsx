import React, { createContext, useContext, useState, useEffect } from 'react';

// Types
export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar: string;
  credits: number;
  totalPoints: number;
  rank: number;
  joinedContests: string[]; // IDs of joined contests
  teams: Team[];
}

export interface Team {
  id: string;
  matchId: number;
  name: string;
  players: number[]; // Player IDs
  captainId: number;
  viceCaptainId: number;
  totalPoints: number;
}

interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  saveTeam: (team: Team) => void;
  joinContest: (contestId: string) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock Initial User
const MOCK_USER: User = {
  id: 'u1',
  name: 'Demo User',
  email: 'demo@elitesquad.com',
  username: 'CricketKing_99',
  avatar: 'CK',
  credits: 500, // Virtual currency for fun
  totalPoints: 1250,
  rank: 45,
  joinedContests: [],
  teams: []
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Load user from local storage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('elite_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Update local storage whenever user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('elite_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('elite_user');
    }
  }, [user]);

  const login = (email: string) => {
    // In a real app, validate credentials here.
    // For now, we just log in the mock user.
    setUser({ ...MOCK_USER, email });
  };

  const logout = () => {
    setUser(null);
  };

  const saveTeam = (newTeam: Team) => {
    if (!user) return;
    
    const updatedUser = {
      ...user,
      teams: [...user.teams, newTeam]
    };
    setUser(updatedUser);
  };

  const joinContest = (contestId: string) => {
    if (!user) return;
    if (user.joinedContests.includes(contestId)) return;

    const updatedUser = {
      ...user,
      joinedContests: [...user.joinedContests, contestId]
    };
    setUser(updatedUser);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      saveTeam, 
      joinContest,
      isAuthenticated: !!user 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
