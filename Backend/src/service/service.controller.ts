import { Controller, Get, Param, Delete, Patch, Body } from '@nestjs/common';
import { ServiceService } from './service.service';
import { Service } from './service.entity';

@Controller('services')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get()
  findAll(): Promise<Service[]> {
    return this.serviceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Service> {
    return this.serviceService.findOne(Number(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.serviceService.remove(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateData: Partial<Service>,
  ): Promise<Service> {
    return this.serviceService.update(Number(id), updateData);
  }
}
