import { SchduleController } from '../controllers/schdule.controller';
import express = require('express');

export class SchduleRoutes {

    schduleController: SchduleController = new SchduleController();
    public routes(app: express.Application): void {
        app.route('/api/getAllSchedule').get(this.schduleController.getAllConfiguration);
        app.route('/api/getSchedule').post(this.schduleController.getConfiguration);
        app.route('/api/getDeployScheduleById').post(this.schduleController.getDeployScheduleById);
        app.route('/api/getConfigurationBySchedulerStatus').post(this.schduleController.getConfigurationBySchedulerStatus);
        app.route('/api/deleteSchedule').post(this.schduleController.deleteSchedule);
        app.route('/api/updateSchedule').post(this.schduleController.updateSchedule);
    }
}