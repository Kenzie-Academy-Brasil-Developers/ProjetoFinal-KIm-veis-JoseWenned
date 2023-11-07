import { z } from "zod";

export const realEstatesSchema = z.object({

    id: z.number().positive(),
    sold: z.boolean().default(false),
    value: z.number().or(z.string()).default(0),
    size: z.number().int(),
    createAt: z.string(),
    updateAt: z.string(),
    addresses: z.object({
        street: z.string().max(45),
        zipCode: z.string().max(8),
        number: z.number().int(),
        city: z.string().max(20),
    }),
    categoriesId: z.number().int().positive()
    
});

export const createRealEstatesSchema = realEstatesSchema.omit({id: true, sold: true,createAt: true, updateAt: true, });