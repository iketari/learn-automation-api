"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("joi");
var dotenv_1 = require("dotenv");
dotenv_1.config();
var schema = Joi.object({
    MONGO_HOST: Joi.string().default("mongodb://localhost/TypeMonPress"),
    MONGO_PORT: Joi.number().default(27017),
    NODE_ENV: Joi.string()
        .allow(["test", "development", "production"])
        .default("development"),
    PORT: Joi.number().default(1234)
})
    .unknown()
    .required();
var _a = Joi.validate(process.env, schema), error = _a.error, env = _a.value;
if (error) {
    throw new Error("Config Validation Error: " + error.message);
}
var mongo = { host: env.MONGO_HOST, port: env.MONGO_PORT };
exports.mongo = mongo;
var node = { env: env.NODE_ENV, port: env.PORT };
exports.node = node;
//# sourceMappingURL=index.js.map