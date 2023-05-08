import express from "express";
import { auth } from "../middleware/auth";
import {Login} from "../controllers/authController";

const router = express.Router();

// Obtener todos los clientes
router.get("/", Login);


export default router;
