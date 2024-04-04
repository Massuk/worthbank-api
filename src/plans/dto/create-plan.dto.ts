import { IsNumber, IsString } from "class-validator";

export class CreatePlanDto {

    @IsString()
    name: string;

    @IsString()
    car: string;

    @IsNumber()
    salesPrice: number;

    @IsString()
    gracePeriods: string;

    @IsNumber()
    saldoInicial: number;

    @IsNumber()
    interes: number;

    @IsNumber()
    cuota: number;

    @IsNumber()
    amortizacion: number;

    @IsNumber()
    seguroDesgravamen: number;

    @IsNumber()
    seguroVehicular: number;

    @IsNumber()
    gastosAdministrativos: number;

    @IsNumber()
    saldoFinal: number;
}
