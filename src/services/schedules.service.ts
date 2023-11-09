import  RealEstate  from "../entities/realEstate.entities";
import  User  from "../entities/user.entities";
import AppError from "../errors/AppError.error";
import { CreateSchedule } from "../interfaces/schedules.interface";
import { realEstatesRepo, schedulesRepo, usersRepo } from "../repositories";

export const createSchedulesService = async (data: CreateSchedule, userId: number): Promise<void> => {
   
    const newDate = new Date(data.date).getDay();

    if((newDate === 0) || (newDate === 6)) throw new AppError("Invalid date, work days are monday to friday", 400);

    const time = Number(data.hour.split(":")[0]);

    if((time < 8) || (time > 18)) throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);

    const realEstate: RealEstate | null = await realEstatesRepo.findOneBy({ id: data.realEstateId });

    const user: User | null = await usersRepo.findOneBy({ id: userId });

    await schedulesRepo.save({ ...data, realEstate: realEstate!, user: user! });

};

export const readAllSchedulesService = async (realEstateId: number): Promise<RealEstate> => {
    
    const realEstate: RealEstate | null = await realEstatesRepo.findOne({
        where: {
            id: realEstateId
        },
        relations: {
            address: true,
            category: true,
            schedules: {
                user: true
            },
        },
    });

    if(!realEstate) throw new AppError("RealEstate not found", 404);

    return realEstate;

};