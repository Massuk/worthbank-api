import { IsBoolean, IsDecimal, IsInt, IsNumber, IsPositive, IsString } from "class-validator";
import { Brand } from "src/brands/entities/brand.entity";

export class CreateCarDto {

    @IsString()
    model: string;

    @IsString()
    description: string;

    @IsString()
    imagePath: string;

    @IsInt()
    @IsPositive()
    year: number;

    @IsString()
    fuelType: string;

    @IsPositive()
    price: number;

    @IsNumber()
    mileage: number;

    @IsString()
    condition: string;

    @IsBoolean()
    available: boolean;

    brand: Brand;
}
