import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const addNewUser = mutation({
    args: {username: v.string(), email: v.string(), photoUrl: v.string()},
    handler: async (ctx, args) => {
        const isUserAlreadyThere = await ctx.db.query('users').filter(q => q.eq(q.field('email'), args?.email)).collect()
        // return isUserAlreadyThere

        if (!!isUserAlreadyThere)
        {
            const newUserId = await ctx.db.insert('users', {username: args?.username, email: args?.email, photoUrl: args?.photoUrl})
            return newUserId
        }
        return isUserAlreadyThere
    }
})