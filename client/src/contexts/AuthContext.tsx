import React, { createContext, useContext, useState, useEffect } from 'react';

// Types
export interface User {
  id: number | string;
  name: string | null;
  email: string | null;
  username: string | null;
  avatar: string;
  credits: number;
  totalPoints?: number;
  rank?: number;
  joinedContests?: string[]; // IDs of joined contests
  teams?: Team[];
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
  login: (user: User) => void;
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

  const login = (userData: User) => {
    // Set the authenticated user
    setUser({
      ...userData,
      totalPoints: userData.totalPoints || 0,
      rank: userData.rank || 0,
      joinedContests: userData.joinedContests || [],
      teams: userData.teams || [],
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_token');
  };

  const saveTeam = (newTeam: Team) => {
    if (!user) return;
    
    const updatedUser = {
      ...user,
      teams: [...(user.teams || []), newTeam]
    };
    setUser(updatedUser);
  };

  const joinContest = (contestId: string) => {
    if (!user) return;
    if (user.joinedContests?.includes(contestId)) return;

    const updatedUser = {
      ...user,
      joinedContests: [...(user.joinedContests || []), contestId]
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
