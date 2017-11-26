"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var acl = require("acl");
var mongoose = require("mongoose");
var ACL = new acl(new acl.mongodbBackend(mongoose.connection.db));
ACL.addRoleParents("root", "admin");
ACL.addRoleParents("admin", "user");
ACL.allow([
    {
        roles: ["admin"],
        allows: [{ resources: "/users/index", permissions: "get" }]
    },
    {
        roles: ["root"],
        allows: [{ resources: "/admins/index", permissions: "get" }]
    }
]);
exports.default = ACL;
//# sourceMappingURL=acl.js.map