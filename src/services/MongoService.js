import mongoose from 'mongoose';
import logger from 'logger';
import { MONGO_URI } from 'config';
import bookModel from 'models/book';

class MongoService {
  constructor() {
    logger.info('MongoDB - constructor');
    mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    this.connection = mongoose.connection;
    this.connection.on('error', err => { throw err });
    this.connection.once('open', () => {
      logger.info('Connected to MongoDB');
    });
  }

  saveBook({ book }) {
    try {
      return new Promise((resolve, reject) => {
        const newBook = new bookModel(book);
        newBook.save((err, savedBook) => {
          if (err) reject(err);
          logger.info('Book saved successfully');
          resolve(savedBook);
        });
      })
    } catch (e) {
      logger.error(e);
    }
  }
}

export default new MongoService();