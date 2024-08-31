import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './service.entity';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,
  ) {}

  findAll(): Promise<Service[]> {
    return this.serviceRepository.find();
  }

  findOne(id: number): Promise<Service> {
    return this.serviceRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.serviceRepository.delete(id);
  }

  async update(id: number, updateData: Partial<Service>): Promise<Service> {
    await this.serviceRepository.update(id, updateData);
    return this.serviceRepository.findOne({ where: { id } });
  }
}
