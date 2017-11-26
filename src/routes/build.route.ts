import { Router } from "express";
import { buildController } from "../controllers";
import { userValidation } from "../validations";

const router = Router();

router
  .route("/")
  /**
   * @api {get} /builds Index All Builds
   * @apiName Index
   * @apiGroup Build
   */
  .get(buildController.index)
  /**
   * @api {post} /users Create New User
   * @apiName Create
   * @apiGroup User
   *
   * @apiSuccess {String} firstname Firstname of the User.
   * @apiSuccess {String} lastname  Lastname of the User.
   */
  .post(buildController.create);

export default router;
