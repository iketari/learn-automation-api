"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require("passport");
var passportLocal = require("passport-local");
var passportFacebook = require("passport-facebook");
var models_1 = require("../src/models");
var LocalStrategy = passportLocal.Strategy;
var FacebookStrategy = passportFacebook.Strategy;
passport.serializeUser(function (user, done) { return done(undefined, user.id); });
passport.deserializeUser(function (id, done) {
    models_1.userModel.findById(id, function (err, user) {
        if (err)
            done(err);
        if (user)
            done(err, user);
        done(new Error("User Not Found"));
    });
});
/**
 * Sign in using Email and Password.
 */
var localStrategy = new LocalStrategy({ usernameField: "email" }, function (email, password, done) {
    models_1.userModel.findOne({ email: email.toLowerCase() }, function (err, user) {
        if (err)
            return done(err);
        if (!user)
            return done(undefined, false, {
                message: "Email " + email + " not found."
            });
        if (user.password === password)
            return done(undefined, user);
        else {
            return done(undefined, false, {
                message: "Invalid email or password."
            });
        }
    });
});
/**
 * Sign in with Facebook.
 */
var facebookStrategy = new FacebookStrategy({
    clientID: process.env.FACEBOOK_ID || 'examplefacebookid',
    clientSecret: process.env.FACEBOOK_SECRET || 'examplefacebooksecret',
    callbackURL: "/auth/facebook/callback",
    profileFields: ["name", "email", "link", "locale", "timezone"],
    passReqToCallback: true
}, function (req, accessToken, refreshToken, profile, done) {
    if (req.user) {
        models_1.userModel.findOne({ facebook: profile.id }, function (err, existingUser) {
            if (err)
                return done(err);
            if (existingUser) {
                return done(new Error("There already is a Facebook account that belongs to you."));
            }
            else {
                models_1.userModel.findById(req.user.id, function (err, user) {
                    if (err)
                        return done(err);
                    if (user) {
                        user.facebook = profile.id;
                        user.tokens.push({ kind: "facebook", accessToken: accessToken });
                        user.profile.name = profile.name
                            ? user.profile.name ||
                                profile.name.givenName + " " + profile.name.familyName
                            : user.profile.name || "";
                        user.profile.gender = user.profile.gender || profile._json.gender;
                        user.profile.picture =
                            user.profile.picture ||
                                "https://graph.facebook.com/" + profile.id + "/picture?type=large";
                        user.save(function (err) { return done(err, user); });
                    }
                });
            }
        });
    }
    else {
        models_1.userModel.findOne({ facebook: profile.id }, function (err, existingUser) {
            if (err)
                return done(err);
            if (existingUser)
                return done(undefined, existingUser);
            models_1.userModel.findOne({ email: profile._json.email }, function (err, existingEmailUser) {
                if (err)
                    return done(err);
                if (existingEmailUser) {
                    return done(new Error("There is already an account using this email address."));
                }
                else {
                    var user_1 = new models_1.userModel();
                    user_1.email = profile._json.email;
                    user_1.facebook = profile.id;
                    user_1.tokens.push({ kind: "facebook", accessToken: accessToken });
                    user_1.profile.name = profile.name
                        ? profile.name.givenName + " " + profile.name.familyName
                        : "";
                    user_1.profile.gender = profile._json.gender;
                    user_1.profile.picture = "https://graph.facebook.com/" + profile.id + "/picture?type=large";
                    user_1.profile.location = profile._json.location
                        ? profile._json.location.name
                        : "";
                    user_1.save(function (err) { return done(err, user_1); });
                }
            });
        });
    }
});
passport.use(localStrategy);
passport.use(facebookStrategy);
//# sourceMappingURL=passport.js.map