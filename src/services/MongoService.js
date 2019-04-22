import mongoose from 'mongoose';
import logger from 'logger';
import { MONGO_URI } from 'config';

class MongoService {
  constructor() {
    logger.info("MongoDB - constructor");
    mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    this.connection = mongoose.connection;
    this.connection.on("error", err => {
      throw err;
    });
    this.connection.once("open", () => {
      logger.info("Connected to MongoDB");
    });
  }

  saveElement({ element, model }) {
    return new Promise((resolve, reject) => {
      const newElement = new model(element);
      newElement.save((err, savedElement) => {
        if (err) reject(err);
        resolve(savedElement);
      });
    }).catch(err => {
      logger.error(err);
    });
  }
}

export default new MongoService();