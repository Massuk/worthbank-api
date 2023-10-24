import { Car } from "src/cars/entities/car.entity";
import { Column, Entity, DeleteDateColumn, OneToMany } from "typeorm";

@Entity()
export class Brand {
    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    name: string;

    @Column()
    badge: string;
    
    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(() => Car, (car) => car.brand)
    cars: Car[];
}
