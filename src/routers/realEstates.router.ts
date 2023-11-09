import { Router } from "express";
import { verifyAdmin, verifyBody, verifyToken } from "../middlewares/globals.middlewares";
import { verifyAdressExists } from "../middlewares/realEstates.middlewares";
import { createRealEstatesController, readRealEstatesController } from "../controllers/realEstates.controller";
import { createRealEstatesSchema, realEstatesSchema } from "../schemas/realEstates.schema";

export const realEstatesRouter: Router = Router()

realEstatesRouter.post("/",

    verifyToken,
    verifyAdmin, 
    verifyBody(createRealEstatesSchema),
    verifyAdressExists,
    createRealEstatesController

);
realEstatesRouter.get("/", readRealEstatesController);