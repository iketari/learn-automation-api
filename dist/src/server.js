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
var bluebird = require("bluebird");
var bodyParser = require("body-parser");
var compression = require("compression");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var express = require("express");
var helmet = require("helmet");
var mongoose = require("mongoose");
var morgan = require("morgan");
var validator = require("express-validator");
var config_1 = require("../config");
var logger_1 = require("./helpers/logger");
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db, app;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.database()];
                    case 1:
                        db = _a.sent();
                        return [4 /*yield*/, this.configure()];
                    case 2:
                        app = _a.sent();
                        app.listen(config_1.node.port);
                        logger_1.logger.info("Connected to database " + db.databaseName);
                        logger_1.logger.info("Server for " + config_1.node.env + " started on " + config_1.node.port);
                        return [2 /*return*/, { db: db, app: app }];
                }
            });
        });
    };
    Server.prototype.database = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mongoose.Promise = bluebird;
                        mongoose.connection.on("error", function () {
                            logger_1.logger.error("DB connection error on port " + config_1.mongo.port);
                            process.exit(1);
                        });
                        return [4 /*yield*/, mongoose.connect(config_1.mongo.host, { useMongoClient: true })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, mongoose.connection.db];
                }
            });
        });
    };
    Server.prototype.configure = function () {
        return __awaiter(this, void 0, void 0, function () {
            var app, route, router;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        app = express();
                        app.use(cors());
                        app.use(helmet());
                        app.use(compression());
                        app.use(cookieParser());
                        app.use(bodyParser.json());
                        app.use(bodyParser.urlencoded({ extended: true }));
                        app.use(validator());
                        route = "/api";
                        if (config_1.node.env === "development") {
                            route = "/dev/api";
                            app.use(morgan("dev"));
                        }
                        return [4 /*yield*/, Promise.resolve().then(function () { return require("./routes"); })];
                    case 1:
                        router = (_a.sent()).router;
                        app.use(route, router);
                        return [2 /*return*/, app];
                }
            });
        });
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map