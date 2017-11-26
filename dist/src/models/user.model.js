"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose_2 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    email: { required: true, type: mongoose_1.Schema.Types.String, unique: true },
    name: { required: true, type: mongoose_1.Schema.Types.String },
    password: { required: true, type: mongoose_1.Schema.Types.String },
    facebook: { type: mongoose_1.Schema.Types.String },
    tokens: [
        {
            kind: { type: String, enum: ["facebook"] },
            accessToken: { type: mongoose_1.Schema.Types.String }
        }
    ]
}, { timestamps: true });
exports.userModel = mongoose_2.model("User", userSchema);
//# sourceMappingURL=user.model.js.map