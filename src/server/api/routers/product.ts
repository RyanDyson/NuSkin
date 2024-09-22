import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
  productById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const product = await ctx.db.product.findFirst({
        where: {
          id: input.id,
        },
      });
      return product;
    }),
  productByCategory: publicProcedure
    .input(
      z.object({
        category: z.string(),
        limit: z.number().nullish(),
        cursor: z.string().nullish(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 4;
      const { cursor } = input;

      const products = await ctx.db.product.findMany({
        take: limit + 1,
        cursor: cursor ? { id: cursor } : undefined,
        where: {
          Categories: {
            some: {
              name: input.category,
            },
          },
        },
        select: {
          id: true,
          name: true,
          price: true,
          description: true,
          images: true,
        },
      });

      let nextCursor: typeof cursor | undefined = undefined;
      if (products.length > limit) {
        const nextProduct = products.pop();
        nextCursor = nextProduct?.id;
      }

      return { products, nextCursor };
    }),
});
