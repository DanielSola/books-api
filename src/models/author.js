import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  name: { type: String, required: true },
  origin: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
});

const Author = mongoose.model('Authors', AuthorSchema);

export default Author;