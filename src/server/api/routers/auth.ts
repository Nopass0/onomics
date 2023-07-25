import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { Prisma } from "@prisma/client";
import { prisma } from "~/server/db";
import bcrypt from 'bcrypt';

function createToken() : string {
    return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);;
}

export const authRouter = createTRPCRouter({
  signin: publicProcedure
    .input( z.object( { email: z.string(), password: z.string() } ) )
    .query( async ({ input }) => {
        if(!input?.email || !input?.password)
            throw new Error("Invalid credentials");
        
        const user = await prisma.user.findUnique({ where: {
            email: input?.email
        } });

        if(!user)
            throw new Error("Invalid credentials");
        
        const isValidPassword = await bcrypt.compareSync(input?.password, user?.password);

        if(!isValidPassword)
            throw new Error("Invalid credentials");

        //check is session exists
        const session = await prisma.session.findFirst({
            where: {
                user: user
            }
        });

        if(session)
            return { token: session.token };
        else {
            const createdSession = await prisma.session.create({
                data: {
                    userId: user.id,
                    token: createToken()
                }
            });
            return { token: createdSession.token };
        }
    }),

  signup: publicProcedure
    .input( z.object( { email: z.string(), username: z.string(), password: z.string() } ) )
    .query( async ({input}) => {
        if(!input?.email || !input?.password || !input?.username)
            throw new Error("Invalid credentials");
        
        const user = await prisma.user.findUnique({
            where: {
                email: input?.email
            }
        });

        if(user)
            throw new Error("User is already exists");

        const token = createToken();

        const createdUser = await prisma.user.create({
            data: {
                email: input?.email,
                username: input?.username,
                password: bcrypt.hashSync(input?.password, 10)
            }
        });

        const createdSession = await prisma.session.create({
            data: {
                userId: createdUser.id,
                token: token
            }
        });

        return { token: createdSession ? token : null };
    }),

    logout: publicProcedure
      .input( z.object( { token: z.string() } ) )
      .query( async ({input}) => {
        if(!input?.token)
            throw new Error("Invalid token")

        const session = prisma.session.delete({
            where: {
                token: input?.token
            }
        })
        return { ok: "ok" }
      })
});
