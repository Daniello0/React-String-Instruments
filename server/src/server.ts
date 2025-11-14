import express, {Express} from "express";
import * as dotenv from "dotenv";
import {healthzRouter} from "./routes/Healthz";
import cors from 'cors'

dotenv.config();

const app: Express = express();
const APP_PORT: string | undefined = process.env.APP_PORT;

app.use(cors());
app.use(healthzRouter);

app.listen(APP_PORT, () => {
    console.log(`Listening on localhost:${APP_PORT}...`);
})
