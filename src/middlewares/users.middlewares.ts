import { NextFunction, Request, Response } from "express";
import { User } from "../entities/index.entities";
import { usersRepo } from "../repositories";
import AppError from "../errors/AppError.error";

export const verifyUniqueUserEmail = async (req:Request, res: Response, next: NextFunction): Promise<void> => {
    
    const { name } = req.body;

    const user: User | null = await usersRepo.findOneBy({
        name
    })

    if(user) throw new AppError("User already exists", 409);

    return next();

};

export const verifyUserExists = async (req:Request, res: Response, next: NextFunction): Promise<void> => {
    
    const { id } = req.params;

    const user: User | null = await usersRepo.findOneBy({
        id: Number( id )
    });

    if(!user) throw new AppError("User not found", 404);

    res.locals = { ...res.locals, user }

    return next();

};