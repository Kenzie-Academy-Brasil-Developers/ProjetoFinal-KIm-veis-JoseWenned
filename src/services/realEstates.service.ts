import  Address  from "../entities/address.entities";
import  Category  from "../entities/category.entities";
import  RealEstate  from "../entities/realEstate.entities";
import AppError from "../errors/AppError.error";
import { CreateRealEstates } from "../interfaces/realEstates.interface";
import { addressRepo, categoryRepo, realEstatesRepo } from "../repositories";

export const createRealEstatesService = async (data: CreateRealEstates): Promise<RealEstate> => {
  
    const category: Category | null = await categoryRepo.findOneBy({ id: data.categoryId });

    if(!category) throw new AppError("Category not found", 404);

    const address: Address = await addressRepo.save(data.address);

    const realEstate: RealEstate = await realEstatesRepo.save({ ...data, address, category: category!});

    return realEstate;

};


export const readRealEstatesService = async (): Promise<RealEstate[]> => {

    return await realEstatesRepo.find({
        relations: {
            address: true
        }
    });

};

