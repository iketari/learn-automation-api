"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("../helpers/validator");
var UserValidation = /** @class */ (function () {
    function UserValidation() {
        this.index = validator_1.validator({
            limit: {
                in: "query",
                isInt: {
                    errorMessage: "Please Provide An Integer Value Less Than 50",
                    options: [{ max: 50 }]
                },
                optional: true
            },
            skip: { in: "query", isInt: true, optional: true }
        });
        this.create = validator_1.validator({
            email: {
                in: "body",
                isEmail: {
                    errorMessage: "Invalid Email Address"
                },
                notEmpty: true
            },
            name: {
                in: "body",
                isLength: {
                    errorMessage: "Must Be Between 2 & 20 Characters Long!",
                    options: [{ min: 2, max: 10 }]
                },
                notEmpty: true
            },
            password: { in: "body", notEmpty: true }
        });
        this.show = validator_1.validator({
            id: {
                in: "params",
                notEmpty: true,
                isMongoId: true,
                errorMessage: "Please provide a valid ID"
            }
        });
        this.update = validator_1.validator({
            id: {
                in: "params",
                notEmpty: true,
                isMongoId: true,
                errorMessage: "Please provide a valid ID"
            }
        });
        this.destroy = validator_1.validator({
            id: {
                in: "params",
                notEmpty: true,
                isMongoId: true,
                errorMessage: "Please provide a valid ID"
            }
        });
    }
    return UserValidation;
}());
exports.userValidation = new UserValidation();
//# sourceMappingURL=user.validation.js.map