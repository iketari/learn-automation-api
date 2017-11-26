"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("../helpers/validator");
var AuthValidation = /** @class */ (function () {
    function AuthValidation() {
        this.login = validator_1.validator({
            username: { in: "body", notEmpty: true, errorMessage: "Empty Username" },
            password: { in: "body", notEmpty: true, errorMessage: "Empty Password" }
        });
    }
    return AuthValidation;
}());
exports.authValidation = new AuthValidation();
//# sourceMappingURL=auth.validation.js.map