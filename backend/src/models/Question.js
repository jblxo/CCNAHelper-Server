import { Schema, model } from 'mongoose';

const QuestionSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  module: {
    type: Schema.Types.ObjectId,
    ref: 'Module'
  }
});

export default model('Question', QuestionSchema);
