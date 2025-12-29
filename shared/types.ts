// Shared types between client and server

export interface User {
  id: string;
  email: string;
  name: string | null;
  createdAt: Date;
}

export interface Team {
  id: number;
  name: string;
  matchId: string;
  players: number[];
  captain: number;
  viceCaptain: number;
  totalCredits: number;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  message?: string;
}
