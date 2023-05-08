"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const typeorm_config_1 = require("./config/typeorm.config");
const clienteRoutes_1 = __importDefault(require("./routes/clienteRoutes"));
const departamentoRoutes_1 = __importDefault(require("./routes/departamentoRoutes "));
dotenv_1.default.config(); // Configura dotenv para cargar las variables de entorno del archivo .env
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Configuración de Express
app.use(express_1.default.json());
// Rutas
app.use('/api/clientes', clienteRoutes_1.default);
app.use('/api/departamentos', departamentoRoutes_1.default);
// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API funcionando correctamente');
});
// Inicia la conexión a la base de datos y luego el servidor
(0, typeorm_1.createConnection)(typeorm_config_1.typeOrmConfig)
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
})
    .catch((error) => {
    console.log('Error al conectar con la base de datos:', error);
});
