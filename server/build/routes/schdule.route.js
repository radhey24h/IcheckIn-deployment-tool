"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schdule_controller_1 = require("../controllers/schdule.controller");
var SchduleRoutes = /** @class */ (function () {
    function SchduleRoutes() {
        this.schduleController = new schdule_controller_1.SchduleController();
    }
    SchduleRoutes.prototype.routes = function (app) {
        app.route('/api/getAllSchedule').get(this.schduleController.getAllConfiguration);
        app.route('/api/getDeployScheduleById').get(this.schduleController.getDeployScheduleById);
    };
    return SchduleRoutes;
}());
exports.SchduleRoutes = SchduleRoutes;
//# sourceMappingURL=schdule.route.js.map