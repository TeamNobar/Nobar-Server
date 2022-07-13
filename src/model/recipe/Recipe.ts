import mongoose from "mongoose";

export interface Recipe {
  name: string,
  enName: string,
  version: string[],
  base: mongoose.Schema.Types.ObjectId, 
  proof: number,
  skill: {
    id: string,
    name: string,
    url: string,
  },
  glass: {
    id: string,
    name: string,
    url: string,
  },
  ingredients: object[],
  steps: string[],
}

