import { TargetController } from '../controllers/target.controller';
import express = require('express');

export class TargetRoutes {

    targetController: TargetController = new TargetController();
    public routes(app: express.Application): void {
        app.route('/api/getAllTargets').get(this.targetController.getAllTargets);
        app.route('/api/getTarget').post(this.targetController.getTarget);
        app.route('/api/getTargetsByMachineId').post(this.targetController.getTargetsByMachineId);
        app.route('/api/getTargetsByType').post(this.targetController.getTargetsByType);
        app.route('/api/getTargetsByMachineIdAndType').post(this.targetController.getTargetsByMachineIdAndType);
        app.route('/api/saveTarget').post(this.targetController.saveTarget);
        app.route('/api/deleteTarget').post(this.targetController.deleteTarget);
    }
}