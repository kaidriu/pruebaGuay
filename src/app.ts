// src/server.ts
import 'reflect-metadata';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import clienteRoutes from './routes/clienteRoutes';
import departamentoRoutes from './routes/departamentoRoutes';

dotenv.config(); // Configura dotenv para cargar las variables de entorno del archivo .env

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de Express
app.use(express.json());

// Rutas
app.use('/api/clientes', clienteRoutes);
app.use('/api/departamentos', departamentoRoutes);

// Ruta de prueba
app.get('/', (req: Request, res: Response) => {
  res.send('API funcionando correctamente');
});

// Inicia la conexión a la base de datos y luego el servidor
createConnection(typeOrmConfig)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Error al conectar con la base de datos:', error);
  });
