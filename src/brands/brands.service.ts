import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BrandsService {
constructor(
  @InjectRepository(Brand)
  private readonly brandRepository: Repository<Brand>,
) {}

  async create(createBrandDto: CreateBrandDto) {
    return await this.brandRepository.save(createBrandDto);
  }

  async findAll() {
    return await this.brandRepository.find();
  }

  async findOne(id: number) {
    return await this.brandRepository.findOneBy({ id });
  }

  async update(id: number, updateBrandDto: UpdateBrandDto) {
    await this.brandRepository.update(id, updateBrandDto);
    console.log(`Brand con ID ${id} actualizado con los datos:`, updateBrandDto); 
    return `Brand con ID ${id} actualizado exitosamente.`;
  }

  async remove(id: number) {
    await this.brandRepository.softDelete(id);
    console.log(`Brand con ID ${id} eliminado de forma lógica.`);
    return `Brand con ID ${id} eliminado exitosamente.`;
  }
}
