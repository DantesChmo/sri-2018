import express from 'express';
import {createElement} from 'react';
import {renderToString} from 'react-dom/server';
import {staticRouter} from './middlewares/static-router';
import {IndexPage} from './index-page';

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

const port = 3000;

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listen on port: ${port}`);
});
