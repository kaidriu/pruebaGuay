import express from "express";
import { auth } from "../middleware/auth";
import {
  getAllDepartamentos,
  createDepartamento,
  getDepartamentoById,
  updateDepartamento,
  deleteDepartamento,
} from "../controllers/departamentoController";

const router = express.Router();

// Obtener todos los departamentos
router.get("/", auth, getAllDepartamentos);

// Crear un nuevo departamento
router.post("/", createDepartamento);

// Obtener un departamento por ID
router.get("/:id", auth, getDepartamentoById);

// Actualizar un departamento por ID
router.put("/:id", auth, updateDepartamento);

// Eliminar un departamento por ID
router.delete("/:id", auth, deleteDepartamento);

export default router;