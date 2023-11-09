import { Request, Response } from "express";
import { createCategoryService, readAllCategoryService, readCategoryService } from "../services/categories.service";

export const createCategoryController = async (req: Request, res: Response): Promise<Response> => {

    const category = await createCategoryService(req.body);

    return res.status(201).json(category);
    
}


export const readCategoryController = async (req: Request, res: Response): Promise<Response> => {

    const category = await readCategoryService();

    return res.status(200).json(category);
    
}


export const readRealEstatesCategoryController = async (req: Request, res: Response): Promise<Response> => {

    const  categoryId  = parseInt(req.params.id);

    const realEstate = await readAllCategoryService(categoryId);

    return res.status(200).json(realEstate);
    
}