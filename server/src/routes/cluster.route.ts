import { ClusterController } from '../controllers/cluster.controller';
import express = require('express');

export class ClusterRoutes {

    clusterController: ClusterController = new ClusterController();
    public routes(app: express.Application): void {
        app.route('/api/getAllMachines').get(this.clusterController.getAllMachines);
        app.route('/api/getMachine').post(this.clusterController.getMachine);
        app.route('/api/saveMachine').get(this.clusterController.saveMachine);
        app.route('/api/deleteMachine').post(this.clusterController.deleteMachine);
    }
}