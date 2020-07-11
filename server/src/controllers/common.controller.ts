import { Request, Response, NextFunction } from 'express';
import { CommonDAO } from '../data-access-object/common.dao';
import Logger from '../utilities/logger';

export class CommonController {
    sendAppPackage(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        Logger.info('deleteMachine :: commoncontroller');

        let clusterDAO = new CommonDAO();
        clusterDAO.sendAppPackage(req, res, next);
    }
    getServerDateTime(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        Logger.info('getServerDateTime :: commoncontroller');

        let clusterDAO = new CommonDAO();
        clusterDAO.getServerDateTime(req, res, next);
    }
    getLastExecutedConfigByType(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        Logger.info('getLastExecutedConfigByType :: commoncontroller');

        let clusterDAO = new CommonDAO();
        clusterDAO.getLastExecutedConfigByType(req, res, next);
    }
    getConfigToolURL(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        Logger.info('getConfigToolURL :: commoncontroller');

        let clusterDAO = new CommonDAO();
        clusterDAO.getConfigToolURL(req, res, next);
    }
    executeGenericOperation(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        Logger.info('executeGenericOperation :: commoncontroller');

        let clusterDAO = new CommonDAO();
        clusterDAO.executeGenericOperation(req, res, next);
    }
    getRestorePointInfo(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        Logger.info('getRestorePointInfo :: commoncontroller');

        let clusterDAO = new CommonDAO();
        clusterDAO.getRestorePointInfo(req, res, next);
    }
    restorePointDeploy(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        Logger.info('restorePointDeploy :: commoncontroller');

        let clusterDAO = new CommonDAO();
        clusterDAO.restorePointDeploy(req, res, next);
    }
    getDeployAgentStatus(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        Logger.info('getDeployAgentStatus :: commoncontroller');

        let clusterDAO = new CommonDAO();
        clusterDAO.getDeployAgentStatus(req, res, next);
    }
}
