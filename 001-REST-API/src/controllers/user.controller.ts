import { Request, Response } from 'express';
import log from '@/utils/logger';
import { createUser } from '@/services/user.service';

export async function createUserHandler(req: Request, res: Response) {
    try {
        const user = await createUser(req.body);
        return user;
    }
    catch (error) {
        log.info(error);
        return res.status(409).send(error);
    }
}