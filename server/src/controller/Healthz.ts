import {Request, Response} from 'express';

export const healthzController = (_req: Request, res: Response) => {
    res.sendStatus(200);
}