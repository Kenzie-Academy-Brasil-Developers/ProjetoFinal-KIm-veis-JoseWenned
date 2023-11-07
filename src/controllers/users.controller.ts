import { Request, Response } from "express";
import { UserReturn } from "../interfaces/users.interfaces"
import { createUserService, deleteUserService, readAllUserService, updateUserService } from "../services/users.service"

export const createUserController = async (req: Request, res: Response): Promise<Response> => {

    const user: UserReturn = await createUserService(req.body);

    return res.status(201).json(user);

};

export const realAllUserController = async (req: Request, res: Response): Promise<Response> => {

    const user = await readAllUserService();

    return res.status(200).json(user);

};

export const updateController = async (req: Request, res: Response): Promise<Response> => {

    const { user } = res.locals

    const newUser = await updateUserService(req.body, user);

    return res.status(200).json(newUser);

};

export const deleteUserController = async (req: Request, res: Response): Promise<Response> => {

    const { user } = res.locals;

    await deleteUserService(user);

    return res.status(204).json();

};