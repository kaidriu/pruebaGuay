import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { Cliente } from "../entities/Cliente";
import { Departamento } from "../entities/Departamento";

const typeOrmConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "solsito28",
  database: process.env.DB_NAME || "postgres",
  synchronize: true,
  logging: false,
  entities: [Cliente, Departamento]
};

export { typeOrmConfig };