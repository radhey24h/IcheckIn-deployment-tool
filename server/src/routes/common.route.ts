import { CommonController } from '../controllers/common.controller';
import express = require('express');

export class CommonRoutes {

    commonController: CommonController = new CommonController();
    public routes(app: express.Application): void {
        app.route('/api/getDeployAgentStatus').get(this.commonController.getDeployAgentStatus);
        app.route('/api/restorePointDeploy').get(this.commonController.restorePointDeploy);
        app.route('/api/getRestorePointInfo').get(this.commonController.getRestorePointInfo);
        app.route('/api/executeGenericOperation').get(this.commonController.executeGenericOperation);
        app.route('/api/getConfigToolURL').get(this.commonController.getConfigToolURL);
        app.route('/api/getLastExecutedConfigByType').get(this.commonController.getLastExecutedConfigByType);
        app.route('/api/getServerDateTime').get(this.commonController.getServerDateTime);
        app.route('/api/sendAppPackage').get(this.commonController.sendAppPackage);
    }
}