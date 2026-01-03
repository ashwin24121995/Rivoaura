import { initTRPC, TRPCError } from '@trpc/server';
import { z } from 'zod';
import SuperJSON from 'superjson';
import { registerUser, loginUser, registerSchema, loginSchema } from '@/server/auth';
import { matchesRouter } from '@/server/matches';
import { teamsRouter } from '@/server/teams';
import { matchSquadRouter } from '@/server/matchesSquad';

// Initialize tRPC
const t = initTRPC.create({
  transformer: SuperJSON,
});

export const appRouter = t.router({
  // Health check
  health: t.procedure.query(() => {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }),

  // Authentication procedures
  auth: t.router({
    register: t.procedure
      .input(registerSchema)
      .mutation(async ({ input }) => {
        try {
          const result = await registerUser(input);
          return { success: true, ...result };
        } catch (error) {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: error instanceof Error ? error.message : 'Registration failed',
          });
        }
      }),

    login: t.procedure
      .input(loginSchema)
      .mutation(async ({ input }) => {
        try {
          const result = await loginUser(input);
          return { success: true, ...result };
        } catch (error) {
          throw new TRPCError({
            code: 'UNAUTHORIZED',
            message: error instanceof Error ? error.message : 'Login failed',
          });
        }
      }),
  }),

  // Matches procedures
  matches: matchesRouter,

  // Teams procedures
  teams: teamsRouter,

  // Match squad procedures
  matchSquad: matchSquadRouter,

  // Example procedure - can be expanded later
  hello: t.procedure
    .input(z.object({ name: z.string().optional() }))
    .query(({ input }) => {
      return { message: `Hello ${input.name || 'World'}!` };
    }),
});

export type AppRouter = typeof appRouter;
