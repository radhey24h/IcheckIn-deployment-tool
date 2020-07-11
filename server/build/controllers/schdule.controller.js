"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var schdule_dao_1 = require("../data-access-object/schdule.dao");
var logger_1 = __importDefault(require("../utilities/logger"));
var SchduleController = /** @class */ (function () {
    function SchduleController() {
    }
    SchduleController.prototype.getAllConfiguration = function (req, res, next) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        logger_1.default.info('getAllConfiguration :: schdulecontroller');
        var schduleDAO = new schdule_dao_1.SchduleDAO();
        schduleDAO.getAllConfiguration(req, res, next);
    };
    SchduleController.prototype.getDeployScheduleById = function (req, res, next) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        logger_1.default.info('getDeployScheduleById :: schdulecontroller');
        var schduleDAO = new schdule_dao_1.SchduleDAO();
        schduleDAO.getDeployScheduleById(req, res, next);
    };
    return SchduleController;
}());
exports.SchduleController = SchduleController;
//# sourceMappingURL=schdule.controller.js.map