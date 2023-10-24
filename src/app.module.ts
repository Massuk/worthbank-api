import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '1234',
      username: 'postgres',
      //entities: [], Este comando permite que 
      // se carguen las entidades de forma manual
      autoLoadEntities: true, // Reemplaza a entities[]
      database: 'worthbank',
      synchronize: true,
      logging: true,
    }),

    // Module imports
    CarsModule,
    BrandsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
