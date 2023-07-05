// ENV variáveis.
require("dotenv").config();

// imports.
import express from "express";
import config from "config";
import router from "./router"
import db from "../config/db"
// Winston Logger.
import Logger from "../config/logger"
// Middlewares.
import morganMiddleware from "./middleware/morganMiddleware";

// Instância Express.
const app = express();

// JSON Middleware.
app.use(express.json());
// Morgan Middleware.
app.use(morganMiddleware);

// Routes Middleware;
/* Prefixo de URL, todas as URL's irão conter /api/. */
app.use("/api/", router);

// App Port.
const appPort = config.get<number>("appPort");

app.listen(appPort, async () => {

    await db();

    Logger.info(`App running on port: ${appPort}`);

});
