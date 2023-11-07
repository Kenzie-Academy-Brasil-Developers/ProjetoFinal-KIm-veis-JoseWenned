import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Schedule from "./schedule.entities";

@Entity("users")
class User {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45 })
    name: string;

    @Column({ length: 45, unique: true })
    email: string;

    @Column({ default: false })
    admin: boolean;

    @Column({ length: 120 })
    password: string;

    @CreateDateColumn({ type: "date" })
    createAt: string;

    @UpdateDateColumn({ type: "date" })
    updateAt: string;

    @DeleteDateColumn({ type: "date", nullable: true })
    deleteAt: string | null;

    @OneToMany(() => Schedule, (schedule) => schedule.users)
    schedules: Schedule[]

};

export default User;