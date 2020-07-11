"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var login_dao_1 = require("../data-access-object/login.dao");
var logger_1 = __importDefault(require("../utilities/logger"));
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.authenticate = function (req, res, next) {
        logger_1.default.info('authenticate :: user');
        var loginDAO = new login_dao_1.LoginDAO();
        loginDAO.authenticate(req, res, next);
    };
    return LoginController;
}());
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map