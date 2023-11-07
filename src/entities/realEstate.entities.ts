import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Schedule from "./schedule.entities";
import Address from "./address.entities";
import Category from "./category.entities";

@Entity("realEstates")
class RealEstate {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ default: false })
    sold: boolean;

    @Column({ type: "decimal", precision: 12, scale: 2, default: 0})
    value: number

    @Column({ type: "int" })
    size: number

    @CreateDateColumn({ type: "date" })
    createAt: string;

    @UpdateDateColumn({ type: "date" })
    updateAt: string;

    @OneToMany(() => Schedule, (schedule) => schedule.realEstates)
    schedules: Schedule[];

    @OneToOne(() => Address, (address) => address.realEstates)
    @JoinColumn()
    addresses: Address;

    @ManyToOne(() => Category, (category) => category.realEstates)
    categories: Category;

};

export default RealEstate;