"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cluster_dao_1 = require("../data-access-object/cluster.dao");
var logger_1 = __importDefault(require("../utilities/logger"));
var ClusterController = /** @class */ (function () {
    function ClusterController() {
    }
    ClusterController.prototype.getAllMachines = function (req, res, next) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        logger_1.default.info('getallmachine :: clustercontroller');
        var clusterDAO = new cluster_dao_1.ClusterDAO();
        clusterDAO.getAllMachines(req, res, next);
    };
    ClusterController.prototype.getMachine = function (req, res, next) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        logger_1.default.info('getMachine :: clustercontroller');
        var clusterDAO = new cluster_dao_1.ClusterDAO();
        clusterDAO.getMachine(req, res, next);
    };
    ClusterController.prototype.saveMachine = function (req, res, next) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        logger_1.default.info('saveMachine :: clustercontroller');
        var clusterDAO = new cluster_dao_1.ClusterDAO();
        clusterDAO.saveMachine(req, res, next);
    };
    ClusterController.prototype.deleteMachine = function (req, res, next) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        logger_1.default.info('deleteMachine :: clustercontroller');
        var clusterDAO = new cluster_dao_1.ClusterDAO();
        clusterDAO.deleteMachine(req, res, next);
    };
    return ClusterController;
}());
exports.ClusterController = ClusterController;
//# sourceMappingURL=cluster.controller.js.map