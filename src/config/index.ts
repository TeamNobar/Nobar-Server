import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const apiConfig = {
  prefix: "/api",
  version: 1
}

export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT as string, 10) as number,

  /**
   * MongoDB URI
   */
  mongoURI: process.env.MONGODB_URI as string,
  apipath: `${apiConfig.prefix}/v${apiConfig.version}`,
  jwtSecret: process.env.JWT_SERCRET as string,
  jwtAlgo: process.env.JWT_ALGO as string
};