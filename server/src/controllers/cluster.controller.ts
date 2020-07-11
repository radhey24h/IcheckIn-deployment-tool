import { Request, Response, NextFunction } from 'express';
import { ClusterDAO } from '../data-access-object/cluster.dao';
import Logger from '../utilities/logger';

export class ClusterController {
    public getAllMachines(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        
        Logger.info('getallmachine :: clustercontroller');

        let clusterDAO = new ClusterDAO();
        clusterDAO.getAllMachines(req, res, next);
    }

    public getMachine(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        
        Logger.info('getMachine :: clustercontroller');

        let clusterDAO = new ClusterDAO();
        clusterDAO.getMachine(req, res, next);
    }

    public saveMachine(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        Logger.info('saveMachine :: clustercontroller');

        let clusterDAO = new ClusterDAO();
        clusterDAO.saveMachine(req, res, next);
    }

    public deleteMachine(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        Logger.info('deleteMachine :: clustercontroller');
        
        let clusterDAO = new ClusterDAO();
        clusterDAO.deleteMachine(req, res, next);
    }
}
