// src/entities/Departamento.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
import { Cliente } from "./Cliente";

@Entity()
export class Departamento extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @OneToMany(() => Cliente, (cliente) => cliente.departamento)
  clientes!: Cliente[];
}
