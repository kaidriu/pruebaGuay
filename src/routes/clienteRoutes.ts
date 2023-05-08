import express from "express";
import { auth } from "../middleware/auth";
import {
  getAllClientes,
  createCliente,
  getClienteById,
  updateCliente,
  deleteCliente,
} from "../controllers/clienteController";

const router = express.Router();

// Obtener todos los clientes
router.get("/", getAllClientes);

// Crear un nuevo cliente
router.post("/", createCliente);

// Obtener un cliente por ID
router.get("/:id", getClienteById);

// Actualizar un cliente por ID
router.put("/:id", updateCliente);

// Eliminar un cliente por ID
router.delete("/:id", deleteCliente);

export default router;
