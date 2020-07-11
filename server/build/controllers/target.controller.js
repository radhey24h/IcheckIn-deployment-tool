"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var target_dao_1 = require("../data-access-object/target.dao");
var logger_1 = __importDefault(require("../utilities/logger"));
var TargetController = /** @class */ (function () {
    function TargetController() {
    }
    TargetController.prototype.getAllTargets = function (req, res, next) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        logger_1.default.info('getalltargets :: targetcontroller');
        var targetDAO = new target_dao_1.TargetDAO();
        targetDAO.getAllTargets(req, res, next);
    };
    TargetController.prototype.getTarget = function (req, res, next) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        logger_1.default.info('gettarget :: targetcontroller');
        var targetDAO = new target_dao_1.TargetDAO();
        targetDAO.getTarget(req, res, next);
    };
    TargetController.prototype.getTargetsByMachineIdAndType = function (req, res, next) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        logger_1.default.info('getTargetsByMachineIdAndType :: targetcontroller');
        var targetDAO = new target_dao_1.TargetDAO();
        targetDAO.getTargetsByMachineIdAndType(req, res, next);
    };
    TargetController.prototype.getTargetsByType = function (req, res, next) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        logger_1.default.info('getTargetsByType :: targetcontroller');
        var targetDAO = new target_dao_1.TargetDAO();
        targetDAO.getTargetsByType(req, res, next);
    };
    TargetController.prototype.getTargetsByMachineId = function (req, res, next) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        logger_1.default.info('getTargetsByMachineId :: targetcontroller');
        var targetDAO = new target_dao_1.TargetDAO();
        targetDAO.getTargetsByMachineId(req, res, next);
    };
    TargetController.prototype.deleteTarget = function (req, res, next) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        logger_1.default.info('deleteTarget :: targetcontroller');
        var targetDAO = new target_dao_1.TargetDAO();
        targetDAO.deleteTarget(req, res, next);
    };
    TargetController.prototype.saveTarget = function (req, res, next) {
        if (!req.headers.token)
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        logger_1.default.info('saveTarget :: targetcontroller');
        var targetDAO = new target_dao_1.TargetDAO();
        targetDAO.saveTarget(req, res, next);
    };
    return TargetController;
}());
exports.TargetController = TargetController;
//# sourceMappingURL=target.controller.js.map