import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./realEstate.entities";

@Entity("addresses")
class Address {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45 })
    street: string;
    
    @Column({ length: 8 })
    zipCode: string;

    @Column({ type: "int" })
    number: number;

    @Column({ length: 20 })
    city: string;

    @Column({ length: 2 })
    state: string;

    @OneToOne(() => RealEstate, (realEstate) => realEstate.addresses)
    realEstates: RealEstate;

};

export default Address;