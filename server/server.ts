import express from "express";
import logger from "./utils/logger";
import router from "./routes";

const app = express();

// Bodyparser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

const port = 3000;
app.listen(port, () => logger.info(`Server up and running on port ${port}!`));
