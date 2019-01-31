import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import server from './src/server';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors(), bodyParser.json());

server.applyMiddleware({
  app
});

app.listen(PORT, () =>
  console.log(
    `Server is running on http://127.0.0.1:${PORT}${server.graphqlPath}`
  )
);
