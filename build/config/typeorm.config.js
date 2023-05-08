"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const Cliente_1 = require("../entities/Cliente");
const Departamento_1 = require("../entities/Departamento");
const typeOrmConfig = {
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "solsito28",
    database: process.env.DB_NAME || "postgres",
    synchronize: true,
    logging: false,
    entities: [Cliente_1.Cliente, Departamento_1.Departamento]
};
exports.typeOrmConfig = typeOrmConfig;
