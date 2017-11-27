import { NextFunction, Request, Response } from "express";
import { IBuild } from "../models";

import { BAD_REQUEST, NOT_FOUND, OK } from "http-status-codes";
import { buildModel } from "../models";

class BuildController {
  public async index(req: Request, res: Response, next: NextFunction) {
    const { limit = 50, skip = 0 } = req.query;
    const builds = await buildModel
      .find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit);

    res.status(OK).json(builds);
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    const payload = req.body.payload;
    const { state, status, result, number, id } = payload;

    console.log(payload);

    const build = new buildModel({
        state,
        status,
        result,
        travis_id: id,
        number,
        payload: req.body.payload
    });

    try {
      res.json(await build.save());
    } catch (error) {
      res.status(BAD_REQUEST).send(error);
    }
  }
}

export const buildController = new BuildController();
