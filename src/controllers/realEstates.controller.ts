import { Request, Response } from "express";
import { createRealEstatesService, readRealEstatesService } from "../services/realEstates.service";

export const createRealEstatesController = async (req: Request, res: Response): Promise<Response> => {

    const realEstate = await createRealEstatesService(req.body);

    return res.status(201).json(realEstate);

}

export const readRealEstatesController = async (req: Request, res: Response): Promise<Response> => {

    const realEstates = await readRealEstatesService();

    return res.status(200).json(realEstates);

}