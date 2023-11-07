import { Category, RealEstate, Schedule } from "./entities/index.entities";
import { AppDataSource } from "./data-source";
import { Address } from "./entities/index.entities";
import { User } from "./entities/index.entities";
import { ScheduleRepo } from "./interfaces/schedules.interface";
import { AddressRepo, RealEstatesRepo } from "./interfaces/realEstates.interface"
import { UserRepo } from "./interfaces/users.interfaces";
import { CategoryRepo } from "./interfaces/categories.interface";

export const categoryRepo: CategoryRepo = AppDataSource.getRepository(Category);
export const addressRepo: AddressRepo = AppDataSource.getRepository(Address);
export const usersRepo: UserRepo = AppDataSource.getRepository(User);
export const schedulesRepo: ScheduleRepo = AppDataSource.getRepository(Schedule);
export const realEstatesRepo: RealEstatesRepo = AppDataSource.getRepository(RealEstate);