import {Router, static as staticMiddleware} from 'express';
import favicon from 'serve-static';
import {resolve} from 'path';

export const staticRouter = Router()
    .use(favicon(resolve('resources/favicon/favicon.ico')))
    .use(staticMiddleware(resolve('out/client')));
