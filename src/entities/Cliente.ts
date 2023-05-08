// src/entities/Cliente.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Departamento } from "./Departamento";

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  email!: string;

  @ManyToOne(() => Departamento, (departamento) => departamento.clientes)
  departamento!: Departamento;
}
