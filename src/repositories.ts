import { Repository } from "typeorm";
import { Category, RealEstate, Schedule } from "./entities/index.entities";
import { AppDataSource } from "./data-source";
import { Address } from "./entities/index.entities";
import { User } from "./entities/index.entities";

export const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category);
export const addressRepo: Repository<Address> = AppDataSource.getRepository(Address);
export const usersRepo: Repository<User> = AppDataSource.getRepository(User);
export const schedulesRepo: Repository<Schedule> = AppDataSource.getRepository(Schedule);
export const realEstatesRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);