"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var target_controller_1 = require("../controllers/target.controller");
var TargetRoutes = /** @class */ (function () {
    function TargetRoutes() {
        this.targetController = new target_controller_1.TargetController();
    }
    TargetRoutes.prototype.routes = function (app) {
        app.route('/api/getAllTargets').get(this.targetController.getAllTargets);
        app.route('/api/getTarget').post(this.targetController.getTarget);
        app.route('/api/getTargetsByMachineId').post(this.targetController.getTargetsByMachineId);
        app.route('/api/getTargetsByType').post(this.targetController.getTargetsByType);
        app.route('/api/getTargetsByMachineIdAndType').post(this.targetController.getTargetsByMachineIdAndType);
        app.route('/api/saveTarget').post(this.targetController.saveTarget);
        app.route('/api/deleteTarget').post(this.targetController.deleteTarget);
    };
    return TargetRoutes;
}());
exports.TargetRoutes = TargetRoutes;
//# sourceMappingURL=target.route.js.map