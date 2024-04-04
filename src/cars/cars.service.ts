import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}

  async create(createCarDto: CreateCarDto) {
    return await this.carRepository.save(createCarDto);
  }

  async findAll() {
    return await this.carRepository.find();
  }

  async findOne(id: number) {
    return await this.carRepository.findOneBy({ id });
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    await this.carRepository.update(id, updateCarDto);
    return `Auto con ID ${id} actualizado exitosamente.`;
  }

  async remove(id: number) {
    await this.carRepository.softDelete(id);
    console.log(`Auto con ID ${id} eliminado de forma lógica.`);
    return `Auto con ID ${id} eliminado exitosamente.`;
  }
}
