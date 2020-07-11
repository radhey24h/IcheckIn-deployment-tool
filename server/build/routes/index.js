"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_route_1 = require("./api.route");
var cluster_route_1 = require("./cluster.route");
var login_route_1 = require("./login.route");
var schdule_route_1 = require("./schdule.route");
var target_route_1 = require("./target.route");
var RestRouter = /** @class */ (function () {
    function RestRouter() {
        this.apiRoute = new api_route_1.ApiRoutes();
        this.clusterRoute = new cluster_route_1.ClusterRoutes();
        this.loginRoute = new login_route_1.LoginRoutes();
        this.schduleRoutes = new schdule_route_1.SchduleRoutes();
        this.targetRoutes = new target_route_1.TargetRoutes();
    }
    RestRouter.prototype.routes = function (app) {
        this.apiRoute.routes(app);
        this.loginRoute.routes(app);
        this.clusterRoute.routes(app);
        this.schduleRoutes.routes(app);
        this.targetRoutes.routes(app);
    };
    return RestRouter;
}());
exports.RestRouter = RestRouter;
//# sourceMappingURL=index.js.map