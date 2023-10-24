import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { Brand } from 'src/brands/entities/brand.entity';

@Module({
  // Es importante agregar en imports el TypeOrmModule.forFeature([Car])
  imports: [TypeOrmModule.forFeature([Car, Brand])], // Lee el typeorm de BrandsModule
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
