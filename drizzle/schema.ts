import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).unique(),
  username: varchar("username", { length: 50 }).unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }).unique(),
  password: varchar("password", { length: 255 }), // Hashed password for email/password auth
  loginMethod: varchar("loginMethod", { length: 64 }),
  state: varchar("state", { length: 50 }), // Indian state for compliance
  dateOfBirth: timestamp("dateOfBirth"), // For 18+ verification
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  totalPoints: int("totalPoints").default(0).notNull(),
  weeklyPoints: int("weeklyPoints").default(0).notNull(),
  monthlyPoints: int("monthlyPoints").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Matches table
export const matches = mysqlTable("matches", {
  id: int("id").autoincrement().primaryKey(),
  team1: varchar("team1", { length: 100 }).notNull(),
  team2: varchar("team2", { length: 100 }).notNull(),
  matchDate: timestamp("matchDate").notNull(),
  venue: varchar("venue", { length: 200 }),
  series: varchar("series", { length: 200 }),
  matchType: varchar("matchType", { length: 50 }), // T20, ODI, Test
  status: mysqlEnum("status", ["upcoming", "live", "completed"]).default("upcoming").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

// Players table
export const players = mysqlTable("players", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  team: varchar("team", { length: 100 }).notNull(),
  role: mysqlEnum("role", ["WK", "BAT", "AR", "BOW"]).notNull(), // Wicket Keeper, Batsman, All-Rounder, Bowler
  credits: int("credits").notNull(), // Fantasy credit value (1-10)
  imageUrl: text("imageUrl"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

// User Teams table
export const userTeams = mysqlTable("userTeams", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  matchId: int("matchId").notNull(),
  teamName: varchar("teamName", { length: 100 }),
  captainId: int("captainId"), // Player ID
  viceCaptainId: int("viceCaptainId"), // Player ID
  totalPoints: int("totalPoints").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

// User Team Players (junction table)
export const userTeamPlayers = mysqlTable("userTeamPlayers", {
  id: int("id").autoincrement().primaryKey(),
  teamId: int("teamId").notNull(),
  playerId: int("playerId").notNull(),
});

// Contests table
export const contests = mysqlTable("contests", {
  id: int("id").autoincrement().primaryKey(),
  matchId: varchar("matchId", { length: 255 }).notNull(), // Cricket API match ID
  name: varchar("name", { length: 255 }).notNull(),
  entryFee: int("entryFee").default(0).notNull(), // Always 0 for free platform
  prizePool: int("prizePool").default(0).notNull(), // Points-based prizes
  maxEntries: int("maxEntries").notNull(),
  currentEntries: int("currentEntries").default(0).notNull(),
  status: mysqlEnum("status", ["upcoming", "live", "completed"]).default("upcoming").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

// Contest Entries table (tracks user participation)
export const contestEntries = mysqlTable("contestEntries", {
  id: int("id").autoincrement().primaryKey(),
  contestId: int("contestId").notNull(),
  userId: int("userId").notNull(),
  teamId: int("teamId").notNull(),
  points: int("points").default(0).notNull(),
  rankPosition: int("rankPosition"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Match = typeof matches.$inferSelect;
export type Player = typeof players.$inferSelect;
export type UserTeam = typeof userTeams.$inferSelect;
export type UserTeamPlayer = typeof userTeamPlayers.$inferSelect;
export type Contest = typeof contests.$inferSelect;
export type ContestEntry = typeof contestEntries.$inferSelect;