export default {
  async modules(parent, args, ctx, info) {
    const res = await ctx.Module.find({});
    return res;
  }
};
