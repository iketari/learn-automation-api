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
    travis_id: { required: true, type: Schema.Types.Number, unique: true },
    name: { required: true, type: Schema.Types.String },
    number: { required: true, type: Schema.Types.Number }
  },
  { timestamps: true }
);

export const buildModel = model<IBuild>("Build", buildSchema);
