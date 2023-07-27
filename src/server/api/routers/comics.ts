import { z, number } from 'zod';
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { Prisma } from "@prisma/client";
import { prisma } from "~/server/db";
import bcrypt from 'bcrypt';

interface IGenre {
    name: string | null
}

interface IComics {
    title: string | null,
    description: string | null,
    genres: IGenre[] | null,
}

export const comicsRouter = createTRPCRouter({
    add: publicProcedure
        .input( z.object( { token: z.string(), title: z.string(), description: z.string() || null } ) )
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


            const comics = prisma.comics.create({
                data: {
                    title: input?.title,
                    description: input?.description,
                    authorId: user.id
                }
            })

            return comics || null
        }),

    remove: publicProcedure
        .input( z.object( { token: z.string(), id: z.number() } ) )
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


            const comics = prisma.comics.delete({
                where: {
                    id: input?.id
                }
            })

            return comics || null
        }),


    // Функция обновления комикса
    update: publicProcedure
        .input(
            z.object({
            token: z.string(),
            id: z.number(),
            title: z.string().optional(),
            description: z.string().optional(),
            })
        )
        .query(async ({ input }) => {
            if (!input?.token) throw new Error("Invalid token");

            const session = await prisma.session.findUnique({
            where: {
                token: input?.token,
            },
            });

            if (!session) throw new Error("Session has not exists");

            const user = await prisma.user.findUnique({
            where: {
                id: session?.userId,
            },
            });

            if (!user) throw new Error("User has not exists");

            // Проверка, что комикс с указанным id существует и принадлежит пользователю
            const existingComics = await prisma.comics.findUnique({
            where: {
                id: input.id,
            },
            });

            if (!existingComics || existingComics.authorId !== user.id) {
            throw new Error("Comics not found or doesn't belong to the user");
            }

            // Обновление комикса с переданными данными
            const updatedComics = await prisma.comics.update({
            where: {
                id: input.id,
            },
            data: {
                title: input?.title,
                description: input?.description,
            },
            });

            return updatedComics || null;
        }),

        // Функция получения списка последних обновленных комиксов
    getLatestComics: publicProcedure
        .input(z.object({ count: z.number() }))
        .query(async ({ input }) => {
            const latestComics = await prisma.comics.findMany({
            take: input.count, // Получаем указанное количество комиксов
            orderBy: {
                updatedAt: "desc", // Сортируем по убыванию даты обновления
            },
            select: {
                id: true,
                title: true,
                description: true,
                createdAt: true,
                updatedAt: true,
                // Добавьте другие поля, которые вы хотите включить
            },
            });

            return latestComics || null;
        }),

    // // Функция получения самых просматриваемых комиксов
    // getMostViewedComics: publicProcedure
    //     .input(z.object({ count: z.number() }))
    //     .query(async ({ input }) => {
    //     const mostViewedComics = await prisma.comics.findMany({
    //         take: input.count, // Получаем указанное количество комиксов
    //         orderBy: {
    //         views: {
    //             // Сортируем по убыванию количества просмотров
    //             descending: true,
    //         },
    //         },
    //         select: {
    //         id: true,
    //         title: true,
    //         description: true,
    //         createdAt: true,
    //         updatedAt: true,
    //         // Добавьте другие поля, которые вы хотите включить
    //         },
    //     });

    //     return mostViewedComics || null;
    //     }),

    getById: publicProcedure
        .input( z.object( { token: z.string(), id: z.number() } ) )
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


            const comics = prisma.comics.findUnique({
                where: {
                    id: input?.id
                }
            })

            return comics || null
        }),

    getManyByTitle: publicProcedure
        .input( z.object( { token: z.string(), title: z.string() } ) )
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


            const comics = prisma.comics.findMany({
                where: {
                    title: input?.title
                }
            })

            return comics || null
        }),

    getManyByAuthor: publicProcedure
        .input( z.object( { token: z.string(), authorId: z.number() } ) )
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


            const comics = prisma.comics.findMany({
                where: {
                    authorId: input?.authorId
                }
            })

            return comics || null
        }),

});
