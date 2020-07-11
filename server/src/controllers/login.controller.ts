import { Request, Response, NextFunction } from 'express';
import { LoginDAO } from '../data-access-object/login.dao';
import Logger from '../utilities/logger';

export class LoginController {

    public authenticate(req: Request, res: Response, next: NextFunction) {
        
        Logger.info('authenticate :: user');
        
        let loginDAO = new LoginDAO();
        loginDAO.authenticate(req, res, next);
    }
}
