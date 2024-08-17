import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pasien {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    no_rm: string;

    @Column()
    nama_lengkap: string;

    @Column()
    tempat_lahir: string;

    @Column()
    tanggal_lahir: Date;

    @Column()
    no_identitas: number;

    @Column()
    no_hp: number;
}
