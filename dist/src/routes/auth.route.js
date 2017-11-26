"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers");
var validations_1 = require("../validations");
var router = express_1.Router();
router
    .route("/login")
    .post(validations_1.authValidation.login, controllers_1.authController.login);
exports.default = router;
//# sourceMappingURL=auth.route.js.map