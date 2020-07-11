"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_controller_1 = require("../controllers/login.controller");
var LoginRoutes = /** @class */ (function () {
    function LoginRoutes() {
        this.loginController = new login_controller_1.LoginController();
    }
    LoginRoutes.prototype.routes = function (app) {
        app.route('/api/authenticate').post(this.loginController.authenticate);
    };
    return LoginRoutes;
}());
exports.LoginRoutes = LoginRoutes;
//# sourceMappingURL=login.route.js.map