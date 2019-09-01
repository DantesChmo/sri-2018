import {Request, Response} from 'express';

export default async function (req: Request, res: Response): Promise<any> {
    // eslint-disable-next-line no-console
    console.log('I am test api method');
}
