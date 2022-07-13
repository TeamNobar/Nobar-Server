import mongoose from "mongoose";

export interface BaseDTO {
  id: string,
  name: string,
  url: string,
  recipes: string[]
} 