import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";

export const get = query({
  handler: async (ctx) => {
    // Getting user Id
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("User not authenticated!");
    const userId = identity.subject;

    // Querrying the DB
    const documents = await ctx.db
      .query("documents")
      .withIndex("by_user_parent", (q) => q.eq("userId", userId))
      .filter((q) => q.eq(q.field("isArchived"), false))
      .order("desc")
      .collect();

    return documents;
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    parentDocument: v.optional(v.id("documents")),
  },

  handler: async (ctx, args) => {
    // Getting user Id
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("User not authenticated!");
    const userId = identity.subject;

    // Creating document
    const document = await ctx.db.insert("documents", {
      title: args.title,
      parentDocument: args.parentDocument,
      isArchived: false,
      isPublished: false,
      userId,
    });

    return document;
  },
});
