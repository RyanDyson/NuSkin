import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  userParams: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const userSlug = await ctx.db.user.findFirst({
        where: {
          id: input.id,
        },
      });

      return userSlug;
    }),
  userCart: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const userCart = await ctx.db.user.findMany({
        where: {
          id: input.id,
        },
        select: {
          Cart: {
            select: {
              id: true,
              product: {
                select: {
                  id: true,
                  name: true,
                  price: true,
                  description: true,
                  images: true,
                },
              },
            },
          },
        },
      });
      return userCart;
    }),
  createUser: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        phone: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.create({
        data: {
          name: input.name,
          email: input.email,
          phone: input.phone,
        },
      });

      return user;
    }),
});
