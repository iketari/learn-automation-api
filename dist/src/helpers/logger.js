"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../../config");
var fs_1 = require("fs");
var winston_1 = require("winston");
winston_1.setLevels(winston_1.config.syslog.levels);
winston_1.addColors(winston_1.config.syslog.colors);
if (!fs_1.existsSync("logs"))
    fs_1.mkdirSync("logs");
var consoleTransport = new winston_1.transports.Console({
    colorize: true,
    handleExceptions: true,
    json: false,
    level: "debug"
});
var fileTransport = new winston_1.transports.File({
    colorize: false,
    filename: "logs/log",
    handleExceptions: true,
    json: true,
    level: "info",
    maxFiles: 5,
    maxsize: 1024 * 1024 * 10 // 10 MB
});
var logger = new winston_1.Logger();
exports.logger = logger;
if (config_1.node.env === "test")
    exports.logger = logger = new winston_1.Logger({ exitOnError: false, transports: [fileTransport] });
if (config_1.node.env === "development")
    exports.logger = logger = new winston_1.Logger({ exitOnError: false, transports: [consoleTransport] });
if (config_1.node.env === "production")
    exports.logger = logger = new winston_1.Logger({
        exitOnError: false,
        transports: [consoleTransport, fileTransport]
    });
//# sourceMappingURL=logger.js.map