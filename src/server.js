import express from 'express';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import QueryType from 'graphQL/QueryType';
import { GraphQLSchema } from 'graphql';
import logger from './logger';
import routes from 'routes';
import { PORT } from 'config';

const app = express();
const schema = new GraphQLSchema({ query: QueryType });

app.use(bodyParser.json());
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.get('/', (req, res) => res.send('API is running...') );
app.get('/ping', (req, res) => res.send('pong'));

Object.keys(routes).forEach(key => app.use(`/${key}`, routes[key]));

const start = async() => {
  try {
      app.listen(PORT, () => {
      logger.info(`Running on ${PORT}`);
    });

  } catch (e) {
    logger.error(e);
    process.exit(1);
  }
};

export { app, start };