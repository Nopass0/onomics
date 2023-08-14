import { z, number } from 'zod';
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { Prisma } from "@prisma/client";
import { prisma } from "~/server/db";
import bcrypt from 'bcrypt';
import * as fs from 'fs';

export const localeRouter = createTRPCRouter({

    getFlag: publicProcedure
        .input( z.object( { contry: z.string() } ) )
        .query( async ({ input }) => {
            const jsonString = fs.readFileSync(`../../locale/${input.contry}`, 'utf-8');
            const jsonData = JSON.parse(jsonString);
            return jsonData.flag;
        }),

    getLang: publicProcedure
    .input( z.object( { country: z.string() } ) )
    .query( async ({ input }) => {
        const jsonString = fs.readFileSync(`locale/${input.country}.json`, 'utf-8');
        const jsonData = JSON.parse(jsonString);
        return jsonData;
    }),

});
