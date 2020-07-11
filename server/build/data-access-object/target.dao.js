"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var strong_soap_1 = require("strong-soap");
var deployment_service_settings_1 = require("../configuration/deployment-service-settings");
var fast_xml_parser_1 = __importDefault(require("fast-xml-parser"));
var parser_option_1 = require("../utilities/parser-option");
var lodash_humps_1 = __importDefault(require("lodash-humps"));
var TargetDAO = /** @class */ (function () {
    function TargetDAO() {
    }
    TargetDAO.prototype.getAllTargets = function (req, res, next) {
        var clientOptions = {};
        strong_soap_1.soap.createClient(deployment_service_settings_1.DeploymentServiceSettings.end_point_URL, clientOptions, function (err, client) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, result, envelope, soapHeader, traversalObj, jsonData, jsonResult, err_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (err) {
                                res.status(500).send({ error: 'Internal server error happened' });
                            }
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, client.GetAllTargets()];
                        case 2:
                            _a = _b.sent(), result = _a.result, envelope = _a.envelope, soapHeader = _a.soapHeader;
                            traversalObj = fast_xml_parser_1.default.getTraversalObj(result.Machine, parser_option_1.ParserOption);
                            jsonData = fast_xml_parser_1.default.convertToJson(traversalObj, parser_option_1.ParserOption);
                            jsonResult = lodash_humps_1.default(jsonData);
                            res.json(jsonResult);
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _b.sent();
                            res.status(401).send({ error: err_1 });
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        });
    };
    TargetDAO.prototype.getTarget = function (req, res, next) {
        var args = {
            GetTargetRequest: {
                Id: req.body.id
            }
        };
        var clientOptions = {};
        strong_soap_1.soap.createClient(deployment_service_settings_1.DeploymentServiceSettings.end_point_URL, clientOptions, function (err, client) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, result, envelope, soapHeader, traversalObj, jsonData, jsonResult, err_2;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (err) {
                                res.status(500).send({ error: 'Internal server error happened' });
                            }
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, client.GetTarget(args)];
                        case 2:
                            _a = _b.sent(), result = _a.result, envelope = _a.envelope, soapHeader = _a.soapHeader;
                            traversalObj = fast_xml_parser_1.default.getTraversalObj(result.Target, parser_option_1.ParserOption);
                            jsonData = fast_xml_parser_1.default.convertToJson(traversalObj, parser_option_1.ParserOption);
                            jsonResult = lodash_humps_1.default(jsonData);
                            res.json(jsonResult);
                            return [3 /*break*/, 4];
                        case 3:
                            err_2 = _b.sent();
                            res.status(401).send({ error: err_2 });
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        });
    };
    TargetDAO.prototype.getTargetsByMachineId = function (req, res, next) {
        var args = {
            GetTargetsByMachineIdRequest: {
                Id: req.body.id
            }
        };
        var clientOptions = {};
        strong_soap_1.soap.createClient(deployment_service_settings_1.DeploymentServiceSettings.end_point_URL, clientOptions, function (err, client) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, result, envelope, soapHeader, traversalObj, jsonData, jsonResult, err_3;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (err) {
                                res.status(500).send({ error: 'Internal server error happened' });
                            }
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, client.GetTargetsByMachineId(args)];
                        case 2:
                            _a = _b.sent(), result = _a.result, envelope = _a.envelope, soapHeader = _a.soapHeader;
                            traversalObj = fast_xml_parser_1.default.getTraversalObj(result.Targets, parser_option_1.ParserOption);
                            jsonData = fast_xml_parser_1.default.convertToJson(traversalObj, parser_option_1.ParserOption);
                            jsonResult = lodash_humps_1.default(jsonData);
                            res.json(jsonResult.deployTargetCollection);
                            return [3 /*break*/, 4];
                        case 3:
                            err_3 = _b.sent();
                            res.status(401).send({ error: err_3 });
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        });
    };
    TargetDAO.prototype.getTargetsByType = function (req, res, next) {
        var args = {
            GetTargetsByTypeRequest: {
                Id: req.body.id
            }
        };
        var clientOptions = {};
        strong_soap_1.soap.createClient(deployment_service_settings_1.DeploymentServiceSettings.end_point_URL, clientOptions, function (err, client) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, result, envelope, soapHeader, traversalObj, jsonData, jsonResult, err_4;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (err) {
                                res.status(500).send({ error: 'Internal server error happened' });
                            }
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, client.GetTargetsByType(args)];
                        case 2:
                            _a = _b.sent(), result = _a.result, envelope = _a.envelope, soapHeader = _a.soapHeader;
                            traversalObj = fast_xml_parser_1.default.getTraversalObj(result.Target, parser_option_1.ParserOption);
                            jsonData = fast_xml_parser_1.default.convertToJson(traversalObj, parser_option_1.ParserOption);
                            jsonResult = lodash_humps_1.default(jsonData);
                            res.json(jsonResult);
                            return [3 /*break*/, 4];
                        case 3:
                            err_4 = _b.sent();
                            res.status(401).send({ error: err_4 });
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        });
    };
    TargetDAO.prototype.getTargetsByMachineIdAndType = function (req, res, next) {
        var args = {
            GetTargetsByMachineIdAndTypeRequest: {
                Id: req.body.id,
                Type: req.body.type
            }
        };
        var clientOptions = {};
        strong_soap_1.soap.createClient(deployment_service_settings_1.DeploymentServiceSettings.end_point_URL, clientOptions, function (err, client) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, result, envelope, soapHeader, traversalObj, jsonData, jsonResult, err_5;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (err) {
                                res.status(500).send({ error: 'Internal server error happened' });
                            }
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, client.GetTargetsByMachineIdAndType(args)];
                        case 2:
                            _a = _b.sent(), result = _a.result, envelope = _a.envelope, soapHeader = _a.soapHeader;
                            traversalObj = fast_xml_parser_1.default.getTraversalObj(result.Target, parser_option_1.ParserOption);
                            jsonData = fast_xml_parser_1.default.convertToJson(traversalObj, parser_option_1.ParserOption);
                            jsonResult = lodash_humps_1.default(jsonData);
                            res.json(jsonResult);
                            return [3 /*break*/, 4];
                        case 3:
                            err_5 = _b.sent();
                            res.status(401).send({ error: err_5 });
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        });
    };
    TargetDAO.prototype.saveTarget = function (req, res, next) {
        var args = {
            SaveTargetContractRequest: {
                ClusterMachine: req.body.id
            }
        };
        var clientOptions = {};
        strong_soap_1.soap.createClient(deployment_service_settings_1.DeploymentServiceSettings.end_point_URL, clientOptions, function (err, client) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, result, envelope, soapHeader, err_6;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (err) {
                                res.status(500).send({ error: 'Internal server error happened' });
                            }
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, client.SaveTarget(args)];
                        case 2:
                            _a = _b.sent(), result = _a.result, envelope = _a.envelope, soapHeader = _a.soapHeader;
                            res.json(result);
                            return [3 /*break*/, 4];
                        case 3:
                            err_6 = _b.sent();
                            res.status(401).send({ error: err_6 });
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        });
    };
    TargetDAO.prototype.deleteTarget = function (req, res, next) {
        var args = {
            SaveTargetContractRequest: {
                ClusterMachine: req.body.id
            }
        };
        var clientOptions = {};
        strong_soap_1.soap.createClient(deployment_service_settings_1.DeploymentServiceSettings.end_point_URL, clientOptions, function (err, client) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, result, envelope, soapHeader, err_7;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (err) {
                                res.status(500).send({ error: 'Internal server error happened' });
                            }
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, client.DeleteTarget(args)];
                        case 2:
                            _a = _b.sent(), result = _a.result, envelope = _a.envelope, soapHeader = _a.soapHeader;
                            res.json(result);
                            return [3 /*break*/, 4];
                        case 3:
                            err_7 = _b.sent();
                            res.status(401).send({ error: err_7 });
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        });
    };
    return TargetDAO;
}());
exports.TargetDAO = TargetDAO;
//# sourceMappingURL=target.dao.js.map