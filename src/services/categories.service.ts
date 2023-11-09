import  Category  from "../entities/category.entities";
import AppError from "../errors/AppError.error";
import { CreateCategory, ReadAllCategory } from "../interfaces/categories.interface";
import { categoryRepo } from "../repositories";

export const createCategoryService = async (data: CreateCategory): Promise<Category> => {
    
    return await categoryRepo.save(data);

};

export const readCategoryService = async (): Promise<ReadAllCategory> => {
    
    return await categoryRepo.find();

};

export const readAllCategoryService = async (categoryId: number): Promise<Category> => {
    
    const category : Category | null = await categoryRepo.findOne({
        where: {
            id: categoryId,
        },
        relations: {
            realEstate: true,
        }
    });

    if(!category) throw new AppError("Category not found", 404);

    return category!;

};

