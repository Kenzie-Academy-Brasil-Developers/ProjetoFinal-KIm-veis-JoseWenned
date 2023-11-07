import { Router } from "express";
import { verifyAdmin, verifyBody, verifyToken } from "../middlewares/global.middlewares";
import { verifyRealEstatesExists, verifyScheduleRealEstatesExists, verifyUserScheduleExists } from "../middlewares/schedules.middlewares";

export const schedulesRouter: Router = Router()

schedulesRouter.post("/",

    verifyToken,
    verifyBody,
    verifyRealEstatesExists,
    verifyScheduleRealEstatesExists,
    verifyUserScheduleExists

);
schedulesRouter.get("/realEstate/:id",

    verifyToken,
    verifyAdmin
    
);