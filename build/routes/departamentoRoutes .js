"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const departamentoController_1 = require("../controllers/departamentoController");
const router = express_1.default.Router();
// Obtener todos los departamentos
router.get("/", auth_1.auth, departamentoController_1.getAllDepartamentos);
// Crear un nuevo departamento
router.post("/", departamentoController_1.createDepartamento);
// Obtener un departamento por ID
router.get("/:id", auth_1.auth, departamentoController_1.getDepartamentoById);
// Actualizar un departamento por ID
router.put("/:id", auth_1.auth, departamentoController_1.updateDepartamento);
// Eliminar un departamento por ID
router.delete("/:id", auth_1.auth, departamentoController_1.deleteDepartamento);
exports.default = router;
