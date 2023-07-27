import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { authRouter } from "./routers/auth";
import { usersRouter } from "./routers/users";
import { comicsRouter } from "./routers/comics";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  auth: authRouter,
  users: usersRouter,
  comics: comicsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
