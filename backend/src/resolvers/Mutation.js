export default {
  async addModule(parent, args, { Module }, info) {
    const module = new Module({ ...args });
    module.save();
    return module;
  },
  addQuestion(parent, args, { Question }, info) {
    const question = new Question({ body: args.body });
    question.c
    question.save();
    return question;
  }
};
