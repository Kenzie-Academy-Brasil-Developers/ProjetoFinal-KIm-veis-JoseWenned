import { Request, Response } from "express";
import { LoginService } from "../services/login.service";

export const LoginController = async (req: Request, res: Response): Promise<Response> => {

    const token = await LoginService(req.body);

    return res.status(200).json(token);

};