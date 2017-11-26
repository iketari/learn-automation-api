"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_route_1 = require("./auth.route");
var user_route_1 = require("./user.route");
var build_route_1 = require("./build.route");
var router = express_1.Router();
exports.router = router;
router.use("/auth", auth_route_1.default);
router.use("/users", user_route_1.default);
router.use("/builds", build_route_1.default);
//# sourceMappingURL=index.js.map