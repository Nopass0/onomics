import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { Prisma } from "@prisma/client";
import { prisma } from "~/server/db";
import bcrypt from 'bcrypt';

function createToken() : string {
    return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);;
}

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

});
