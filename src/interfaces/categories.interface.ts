import { z } from "zod";
import { createCategorySchema, readAllCategoriesSchema } from "../schemas/categories.schema";
import { Repository } from "typeorm";
import  Category  from "../entities/category.entities";

export type CreateCategory = z.infer<typeof createCategorySchema>;

export type ReadAllCategory = z.infer<typeof readAllCategoriesSchema>;

export type CategoryRepo = Repository<Category>;
