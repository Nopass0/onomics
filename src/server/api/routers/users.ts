import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { Prisma } from "@prisma/client";
import { prisma } from "~/server/db";
import bcrypt from 'bcrypt';

export const usersRouter = createTRPCRouter({
  getMyProfile: publicProcedure
    .input( z.object( { token: z.string() } ) )
    .query( async ({ input }) => {
        if(!input?.token)
            throw new Error("Invalid token")

        const session = await prisma.session.findUnique({
            where: {
                token: input?.token
            }
        })

        if(!session)
            throw new Error("Session has not exists")

        const user = await prisma.user.findUnique( {
            where: {
                id: session?.userId
            }
        } )

        if(!user)
            throw new Error("User has not exists")


        return user || {}

    }),

    getUsers: publicProcedure
    .query(async () => {
      // Получить список всех пользователей без чувствительной информации
      const users = await prisma.user.findMany({
        select: {
          id: true,
          email: true,
          username: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return users;
    }),

  getUserById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      // Получить информацию о пользователе по его идентификатору (id)
      const user = await prisma.user.findUnique({
        where: {
          id: input.id,
        },
        select: {
          id: true,
          email: true,
          username: true,
          createdAt: true,
          updatedAt: true,
          // Добавьте другие поля, которые вы хотите включить
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      return user;
    }),

});
