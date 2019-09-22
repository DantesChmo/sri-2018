import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {createElement} from 'react';
import {renderToString} from 'react-dom/server';
import {db} from './db';
import {apiRouter} from './middlewares/api-router';
import {staticRouter} from './middlewares/static-router';
import {IndexPage} from './index-page';

const port = 3000;

const app = express();

function prepareString(): string {
    const html = createElement(IndexPage, {
        title: 'SRI'
    });
    return renderToString(html);
}

app
    .use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json)
    .use(cors())
    .use(staticRouter)
    .use('/api', apiRouter)
    .get('/ping', (_req, res) => res.sendStatus(200))
    .get('/', (_req, res) => {
        res.send(prepareString());
    });

db.on('error', () => {});

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listen on port: ${port}`);
});
