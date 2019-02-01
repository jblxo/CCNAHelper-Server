export default {
  async modules(parent, args, ctx, info) {
    const res = await ctx.Module.find({});
    return res;
  },
  async questions(parent, args, ctx, info) {
    const res = await ctx.Question.find({});
    return res;
  }
};
