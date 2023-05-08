"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const clienteController_1 = require("../controllers/clienteController");
const router = express_1.default.Router();
// Obtener todos los clientes
router.get("/", clienteController_1.getAllClientes);
// Crear un nuevo cliente
router.post("/", clienteController_1.createCliente);
// Obtener un cliente por ID
router.get("/:id", auth_1.auth, clienteController_1.getClienteById);
// Actualizar un cliente por ID
router.put("/:id", auth_1.auth, clienteController_1.updateCliente);
// Eliminar un cliente por ID
router.delete("/:id", auth_1.auth, clienteController_1.deleteCliente);
exports.default = router;
