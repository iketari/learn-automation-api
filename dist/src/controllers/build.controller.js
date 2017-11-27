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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_codes_1 = require("http-status-codes");
var models_1 = require("../models");
var BuildController = /** @class */ (function () {
    function BuildController() {
    }
    BuildController.prototype.index = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, limit, _c, skip, builds;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = req.query, _b = _a.limit, limit = _b === void 0 ? 50 : _b, _c = _a.skip, skip = _c === void 0 ? 0 : _c;
                        return [4 /*yield*/, models_1.buildModel
                                .find()
                                .sort({ createdAt: -1 })
                                .skip(+skip)
                                .limit(+limit)];
                    case 1:
                        builds = _d.sent();
                        res.status(http_status_codes_1.OK).json(builds);
                        return [2 /*return*/];
                }
            });
        });
    };
    BuildController.prototype.create = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, state, status, result, number, id, build, _a, _b, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        payload = req.body.payload;
                        state = payload.state, status = payload.status, result = payload.result, number = payload.number, id = payload.id;
                        console.log(state, status, result, number, id);
                        build = new models_1.buildModel({
                            state: state,
                            status: status,
                            result: result,
                            travis_id: id,
                            number: number,
                            payload: req.body.payload
                        });
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        _b = (_a = res).json;
                        return [4 /*yield*/, build.save()];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _c.sent();
                        res.status(http_status_codes_1.BAD_REQUEST).send(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return BuildController;
}());
exports.buildController = new BuildController();
//# sourceMappingURL=build.controller.js.map