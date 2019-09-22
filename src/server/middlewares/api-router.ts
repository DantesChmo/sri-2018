import {Router} from 'express';
import testApi from '../api/get-test-api-method';

export const apiRouter = Router()
    .get('/test', testApi);
