import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const categoriesRouter = createTRPCRouter({
  categoriesList: publicProcedure.query(async ({ ctx, input }) => {
    const categories = await ctx.db.categories.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return categories;
  }),
});
