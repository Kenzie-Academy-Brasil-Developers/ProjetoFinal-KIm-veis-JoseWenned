import { z } from "zod";
import { createRealEstatesSchema } from "../schemas/realEstates.schema";
import { Repository } from "typeorm";
import RealEstate from "../entities/realEstate.entities";
import Address from "../entities/address.entities";

export type CreateRealEstates = z.infer<typeof createRealEstatesSchema>;

export type RealEstatesRepo = Repository<RealEstate>;

export type AddressRepo = Repository<Address>;