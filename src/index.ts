import express       from "express";
import "reflect-metadata";
import config        from "./config";
import ProjectLoader from "./loaders";
import Logger        from "./loaders/Logger";

const SERVER_START_MESSAGE = `
    ################################################
     🛡️ Server listening on port ${config.port} 🛡️
    ################################################
 `;

async function startServer() {
  const app = express();
  await ProjectLoader.initalize(app);
  app.listen(config.port, () => {
    Logger.info(SERVER_START_MESSAGE);
  }).on("error", (err) => {
    Logger.error(err);
    process.exit(1);
  });
}

startServer().catch(() => {
  Logger.info("can not start server");
});