import express from 'express';
import {createElement} from 'react';
import {renderToString} from 'react-dom/server';
import {staticRouter} from './middlewares/static-router';
import {IndexPage} from './index-page';
import {MongoClient} from 'mongodb';

const port = 3000;
const dbConnectUrl = 'mongodb+srv://Doni-rio:11022011kk@sriproject-otv9c.mongodb.net/test?retryWrites=true&w=majority"';

const app = express();

function prepareString(): string {
    const html = createElement(IndexPage, {
        title: 'SRI'
    });
    return renderToString(html);
}

app
    .get('/ping', (_req, res) => res.sendStatus(200))
    .use(staticRouter)
    .get('/', (_req, res) => {
        res.send(prepareString());
    });

MongoClient.connect(dbConnectUrl, (err, db) => {
    if (err) {
        throw err;
    }
    // eslint-disable-next-line no-console
    console.log('hello world');
});

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listen on port: ${port}`);
});
