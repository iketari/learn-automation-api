import { Document } from "mongoose";

import { Schema } from "mongoose";

import { model } from "mongoose";

export interface IBuild extends Document {
  name: string;
  travis_id: number;
  number: number;
  createdAt: Date;
  updateAt: Date;
}

const buildSchema = new Schema(
  {
    travis_id: { required: false, type: Schema.Types.Number },
    state: { required: false, type: Schema.Types.String },
    status: { required: false, type: Schema.Types.Number },
    result: { required: false, type: Schema.Types.Number },
    number: { required: false, type: Schema.Types.Number },
    payload: { required: false, type: Object }
  },
  { timestamps: true }
);

export const buildModel = model<IBuild>("Build", buildSchema);
