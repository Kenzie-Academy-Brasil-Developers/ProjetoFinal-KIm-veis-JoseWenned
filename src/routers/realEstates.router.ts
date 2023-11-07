import { Router } from "express";
import { verifyAdmin, verifyBody, verifyToken } from "../middlewares/globals.middlewares";
import { verifyAdressExists } from "../middlewares/realEstates.middlewares";

export const realEstatesRouter: Router = Router()

realEstatesRouter.post("/",

    verifyToken,
    verifyAdmin, 
    verifyBody,
    verifyAdressExists

);
realEstatesRouter.get("/",);