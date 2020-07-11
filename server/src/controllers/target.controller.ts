import { Request, Response, NextFunction } from 'express';
import { TargetDAO } from '../data-access-object/target.dao';
import Logger from '../utilities/logger';

export class TargetController {
    
    public getAllTargets(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        
        Logger.info('getalltargets :: targetcontroller');

        let targetDAO = new TargetDAO();
        targetDAO.getAllTargets(req, res, next);
    }
    public getTarget(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        
        Logger.info('gettarget :: targetcontroller');

        let targetDAO = new TargetDAO();
        targetDAO.getTarget(req, res, next);
    }
    public getTargetsByMachineIdAndType(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        
        Logger.info('getTargetsByMachineIdAndType :: targetcontroller');

        let targetDAO = new TargetDAO();
        targetDAO.getTargetsByMachineIdAndType(req, res, next);
    }
    public getTargetsByType(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        
        Logger.info('getTargetsByType :: targetcontroller');

        let targetDAO = new TargetDAO();
        targetDAO.getTargetsByType(req, res, next);
    }
    
    public getTargetsByMachineId(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        Logger.info('getTargetsByMachineId :: targetcontroller');

        let targetDAO = new TargetDAO();
        targetDAO.getTargetsByMachineId(req, res, next);
    }
    public deleteTarget(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        Logger.info('deleteTarget :: targetcontroller');

        let targetDAO = new TargetDAO();
        targetDAO.deleteTarget(req, res, next);
    }
    public saveTarget(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        Logger.info('saveTarget :: targetcontroller');

        let targetDAO = new TargetDAO();
        targetDAO.saveTarget(req, res, next);
    }
    
}
