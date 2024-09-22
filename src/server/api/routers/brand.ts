import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const brandRoute = createTRPCRouter({
  brandsList: publicProcedure.query(async ({ ctx }) => {
    const brands = await ctx.db.brand.findMany({
      select: {
        id: true,
        name: true,
        logo: true,
      },
    });

    return brands;
  }),
});
