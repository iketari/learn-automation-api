import { Router } from "express";
import authRoute from "./auth.route";
import userRoute from "./user.route";
import buildRoute from "./build.route";

const router = Router();

router.use("/auth", authRoute);
router.use("/users", userRoute);
router.use("/builds", buildRoute);

export { router };
