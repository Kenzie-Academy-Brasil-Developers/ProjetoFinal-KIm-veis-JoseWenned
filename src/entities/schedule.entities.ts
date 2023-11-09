import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./user.entities";
import RealEstate  from "./realEstate.entities";

@Entity("schedules")
export default class Schedule {
    [x: string]: any;

    @PrimaryGeneratedColumn("increment")
    id: number;
    
    @Column({ type: "date" })
    date: string;

    @Column({ type: "time" })
    hour: string;

    @ManyToOne(() => User, (user) => user.schedules)
    user: User;

    @ManyToOne(() => RealEstate, (realestate) => realestate.schedules)
    realEstate: RealEstate;
    
};

