"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiRoutes = /** @class */ (function () {
    function ApiRoutes() {
    }
    ApiRoutes.prototype.routes = function (app) {
        app.route('/').get(function (req, res) {
            res.status(200).send('This is iCheck In deployment tool rest api..!!!');
        });
    };
    return ApiRoutes;
}());
exports.ApiRoutes = ApiRoutes;
//# sourceMappingURL=api.route.js.map