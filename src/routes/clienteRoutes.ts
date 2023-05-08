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
router.get("/", auth, getAllClientes);

// Crear un nuevo cliente
router.post("/", auth, createCliente);

// Obtener un cliente por ID
router.get("/:id", auth, getClienteById);

// Actualizar un cliente por ID
router.put("/:id", auth, updateCliente);

// Eliminar un cliente por ID
router.delete("/:id", auth, deleteCliente);

export default router;
