import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pengguna {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    status: boolean;
}
