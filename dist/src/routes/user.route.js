"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers");
var validations_1 = require("../validations");
var router = express_1.Router();
router
    .route("/")
    .get(validations_1.userValidation.index, controllers_1.userController.index)
    .post(validations_1.userValidation.create, controllers_1.userController.create);
router
    .route("/:id")
    .get(validations_1.userValidation.show, controllers_1.userController.show)
    .put(validations_1.userValidation.update, controllers_1.userController.update)
    .delete(validations_1.userValidation.destroy, controllers_1.userController.destroy);
exports.default = router;
//# sourceMappingURL=user.route.js.map