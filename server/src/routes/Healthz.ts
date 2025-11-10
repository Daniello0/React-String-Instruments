import {Router} from "express";
import {healthzController} from "../controller/Healthz";


export const healthzRouter = Router();
healthzRouter.get('/healthz', healthzController);
