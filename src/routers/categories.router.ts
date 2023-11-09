import { Router } from "express";
import { verifyAdmin, verifyBody, verifyToken } from "../middlewares/globals.middlewares";
import { verifyCategoryExists, verifyUniqueCategoryName } from "../middlewares/categories.middlewares";
import { createCategoryController, readCategoryController, readRealEstatesCategoryController } from "../controllers/category.controller";
import { createCategorySchema } from "../schemas/categories.schema";

export const categoriesRouter: Router = Router()

categoriesRouter.post("/",

    verifyBody(createCategorySchema),
    verifyToken,
    verifyUniqueCategoryName,
    verifyAdmin,
    createCategoryController

);  

categoriesRouter.get("/", readCategoryController);
categoriesRouter.get("/:id/realEstate", verifyCategoryExists, readRealEstatesCategoryController);
