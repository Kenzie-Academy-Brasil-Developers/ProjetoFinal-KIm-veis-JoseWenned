import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./realEstate.entities";

@Entity("categories")
class Category {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45, unique: true })
    name: string;

    @OneToMany(() => RealEstate, (realEstate) => realEstate.categories)
    realEstates: RealEstate[];

};

export default Category;