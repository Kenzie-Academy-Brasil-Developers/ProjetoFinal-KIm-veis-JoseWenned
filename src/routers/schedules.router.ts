import { Router } from "express";
import { verifyAdmin, verifyBody, verifyToken } from "../middlewares/globals.middlewares";
import { verifyRealEstatesExists, verifyScheduleRealEstatesExists, verifyUserScheduleExists } from "../middlewares/schedules.middlewares";
import { createScheduleController, readAllScheduleController } from "../controllers/schedules.controller";
import { createNewScheduleSchema } from "../schemas/schedules.schema";

export const schedulesRouter: Router = Router()

schedulesRouter.post("/",

    verifyToken,
    verifyBody(createNewScheduleSchema),
    verifyRealEstatesExists,
    verifyScheduleRealEstatesExists,
    verifyUserScheduleExists,
    createScheduleController

);
schedulesRouter.get("/realEstate/:id",

    verifyToken,
    verifyAdmin,
    readAllScheduleController
    
);