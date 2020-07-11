"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cluster_controller_1 = require("../controllers/cluster.controller");
var ClusterRoutes = /** @class */ (function () {
    function ClusterRoutes() {
        this.clusterController = new cluster_controller_1.ClusterController();
    }
    ClusterRoutes.prototype.routes = function (app) {
        app.route('/api/getAllMachines').get(this.clusterController.getAllMachines);
        app.route('/api/getMachine').post(this.clusterController.getMachine);
        app.route('/api/saveMachine').get(this.clusterController.saveMachine);
        app.route('/api/deleteMachine').post(this.clusterController.deleteMachine);
    };
    return ClusterRoutes;
}());
exports.ClusterRoutes = ClusterRoutes;
//# sourceMappingURL=cluster.route.js.map