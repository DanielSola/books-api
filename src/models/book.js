import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true },
});

const Book = mongoose.model('Books', BooksSchema);

export default Book;