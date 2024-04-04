import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plan } from './entities/plan.entity';

@Injectable()
export class PlansService {
  constructor(
    @InjectRepository(Plan)
    private readonly planRepository: Repository<Plan>,
  ) {}

  async create(createPlanDto: CreatePlanDto) {
    return await this.planRepository.save(createPlanDto);
  }

  async findAll() {
    return await this.planRepository.find();
  }

  async findOne(id: number) {
    return await this.planRepository.findOneBy({ id });
  }

  async update(id: number, updatePlanDto: UpdatePlanDto) {
    await this.planRepository.update(id, updatePlanDto);
    return `Plan con ID ${id} actualizado exitosamente.`;
  }

  async remove(id: number) {
    await this.planRepository.softDelete(id);
    return `Plan con ID ${id} eliminado exitosamente.`;
  }
}
