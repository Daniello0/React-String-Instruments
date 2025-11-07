import express, {Express} from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const APP_PORT= process.env.APP_PORT;

app.listen(APP_PORT, () => {
    console.log(`Listening on ${APP_PORT}...`);
})
