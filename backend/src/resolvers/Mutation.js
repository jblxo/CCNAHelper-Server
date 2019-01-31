export default {
  async addModule(parent, args, { Module }, info) {
    const module = new Module({ ...args });
    module.save();
    return module;
  }
};
