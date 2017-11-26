"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers");
var router = express_1.Router();
router
    .route("/")
    .get(controllers_1.buildController.index)
    .post(controllers_1.buildController.create);
exports.default = router;
//# sourceMappingURL=build.route.js.map