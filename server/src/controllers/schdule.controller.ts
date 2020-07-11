import { Request, Response, NextFunction } from 'express';
import { SchduleDAO } from '../data-access-object/schdule.dao';
import Logger from '../utilities/logger';

export class SchduleController {
   
    public getAllConfiguration(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        Logger.info('getAllConfiguration :: schdulecontroller');

        let schduleDAO = new SchduleDAO();
        schduleDAO.getAllConfiguration(req, res, next);
    }

    getDeployScheduleById(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        Logger.info('getDeployScheduleById :: schdulecontroller');

        let schduleDAO = new SchduleDAO();
        schduleDAO.getDeployScheduleById(req, res, next);
    }
    
    getConfiguration(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        Logger.info('getConfiguration :: schdulecontroller');

        let schduleDAO = new SchduleDAO();
        schduleDAO.getConfiguration(req, res, next);
    }
    getConfigurationBySchedulerStatus(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        Logger.info('getConfigurationBySchedulerStatus :: schdulecontroller');

        let schduleDAO = new SchduleDAO();
        schduleDAO.getConfigurationBySchedulerStatus(req, res, next);
    }
    updateSchedule(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    Logger.info('updateSchedule :: schdulecontroller');

    let schduleDAO = new SchduleDAO();
    schduleDAO.updateSchedule(req, res, next);
    }

    deleteSchedule(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    Logger.info('deleteSchedule :: schdulecontroller');

    let schduleDAO = new SchduleDAO();
    schduleDAO.deleteSchedule(req, res, next);
    }
}
