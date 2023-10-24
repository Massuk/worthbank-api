import { Brand } from 'src/brands/entities/brand.entity';
import { Column, DeleteDateColumn, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Car {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  model: string;

  @Column()
  description: string;

  @Column()
  imagePath: string;

  @Column()
  year: number;

  @Column()
  fuelType: string;

  @Column()
  price: number;

  @Column()
  mileage: number;

  @Column()
  condition: string;

  @Column()
  available: boolean;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Brand, (brand) => brand.id, {
    eager: true,
  })
  brand: Brand;
}
