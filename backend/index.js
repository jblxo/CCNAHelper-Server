import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import schema from './graphql/graphql';

const app = express();
const PORT = process.env.PORT || 8080;
const mongoURL = 'mongodb://localhost/ccnahelper';

mongoose.connect(mongoURL, {
    useCreateIndex: true,
    useNewUrlParser: true
}).then(() => console.log("MongoDB connected!")).catch(err => console.log(err));

app.use('/graphql', cors(), bodyParser.json(), expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(PORT, () => console.log(`Server is running on http://127.0.0.1:${PORT}`));