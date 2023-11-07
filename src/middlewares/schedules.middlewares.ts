import { NextFunction, Request, Response } from "express";
import { realEstatesRepo, schedulesRepo } from "../repositories";
import Schedule from "../entities/schedule.entities";
import AppError from "../errors/AppError.error";
import RealEstate from "../entities/realEstate.entities";

export const verifyRealEstatesExists = async (req:Request, res: Response, next: NextFunction): Promise<void> => {
    
    const { id }  = req.body;

    const realEstate: RealEstate | null = await realEstatesRepo.findOneBy({
        id: Number( id )
    });

    if(realEstate) throw new AppError("RealEstate not found", 404);

    return next();

};

export const verifyScheduleRealEstatesExists = async (req:Request, res: Response, next: NextFunction): Promise<void> => {
    
    const { realEstatesId, date, hour } = req.body;

    const schedule: Schedule | null = await schedulesRepo.findOne({
        where: {
            realEstates: {
                id: Number(realEstatesId)
            },
            hour,
            date
        }
    });

    if(schedule) throw new AppError("Schedule to this realEstate at this date and time already exists", 409);

    return next();

};

export const verifyUserScheduleExists = async (req:Request, res: Response, next: NextFunction): Promise<void> => {
    
    let { sub } = res.locals.decoded;

    sub = Number(sub);

    const { date, hour } = req.body;

    const schedule: Schedule | null = await schedulesRepo.findOne({
        where: {
            user: {
                id: sub
            },
            hour,
            date
        }
    });

    if(schedule) throw new AppError("User schedule to this realEstate at this date and time already exists", 409);

    return next();

};