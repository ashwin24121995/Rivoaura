import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import SuperJSON from 'superjson';

// Initialize tRPC
const t = initTRPC.create({
  transformer: SuperJSON,
});

export const appRouter = t.router({
  // Health check
  health: t.procedure.query(() => {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }),

  // Example procedure - can be expanded later
  hello: t.procedure
    .input(z.object({ name: z.string().optional() }))
    .query(({ input }) => {
      return { message: `Hello ${input.name || 'World'}!` };
    }),
});

export type AppRouter = typeof appRouter;
