import { Column, Entity } from "typeorm";

@Entity()
export class Plan {
    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    name: string;

    @Column()
    car: string;

    @Column()
    salesPrice: number;

    @Column()
    gracePeriods: string;

    @Column()
    saldoInicial: number;

    @Column()
    interes: number;

    @Column()
    cuota: number;

    @Column()
    amortizacion: number;

    @Column()
    seguroDesgravamen: number;

    @Column()
    seguroVehicular: number;

    @Column()
    gastosAdministrativos: number;

    @Column()
    saldoFinal: number;

}
