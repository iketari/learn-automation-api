"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose_2 = require("mongoose");
var buildSchema = new mongoose_1.Schema({
    travis_id: { required: false, type: mongoose_1.Schema.Types.Number, unique: true },
    name: { required: false, type: mongoose_1.Schema.Types.String },
    number: { required: false, type: mongoose_1.Schema.Types.Number },
    request: { required: false, type: Object }
}, { timestamps: true });
exports.buildModel = mongoose_2.model("Build", buildSchema);
//# sourceMappingURL=build.model.js.map