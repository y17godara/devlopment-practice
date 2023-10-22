import { Request, Response } from 'express';
import log from '@/utils/logger';

export function createsUserHandler(req: Request, res: Response) {
    try {
        // 
    }
    catch (error) {
        log.info(error);
        return res.status(409).send(error);
    }
}