import  Category  from "./entities/category.entities";
import  RealEstate  from "./entities/realEstate.entities";
import  Schedule  from "./entities/schedule.entities";
import { AppDataSource } from "./data-source";
import  Address  from "./entities/address.entities";
import  User  from "./entities/user.entities";
import { ScheduleRepo } from "./interfaces/schedules.interface";
import { AddressRepo, RealEstatesRepo } from "./interfaces/realEstates.interface"
import { UserRepo } from "./interfaces/users.interfaces";
import { CategoryRepo } from "./interfaces/categories.interface";

export const categoryRepo: CategoryRepo = AppDataSource.getRepository(Category);
export const addressRepo: AddressRepo = AppDataSource.getRepository(Address);
export const usersRepo: UserRepo = AppDataSource.getRepository(User);
export const schedulesRepo: ScheduleRepo = AppDataSource.getRepository(Schedule);
export const realEstatesRepo: RealEstatesRepo = AppDataSource.getRepository(RealEstate);