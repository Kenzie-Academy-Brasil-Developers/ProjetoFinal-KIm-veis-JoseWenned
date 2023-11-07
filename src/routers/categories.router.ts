import { Router } from "express";
import { verifyAdmin, verifyToken } from "../middlewares/globals.middlewares";
import { verifyCategoryExists, verifyUniqueCategoryName } from "../middlewares/categories.middlewares";

export const categoriesRouter: Router = Router()

categoriesRouter.post("/",

    verifyToken,
    verifyUniqueCategoryName,
    verifyAdmin

);  

categoriesRouter.get("/");
categoriesRouter.get("/:id/realEstate", verifyCategoryExists);
