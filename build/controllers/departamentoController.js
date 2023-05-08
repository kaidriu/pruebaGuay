"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDepartamento = exports.updateDepartamento = exports.getDepartamentoById = exports.createDepartamento = exports.getAllDepartamentos = void 0;
const typeorm_1 = require("typeorm");
const Departamento_1 = require("../entities/Departamento");
const getAllDepartamentos = async (req, res) => {
    try {
        const departamentoRepository = (0, typeorm_1.getRepository)(Departamento_1.Departamento);
        const departamentos = await departamentoRepository.find();
        return res.status(200).json(departamentos);
    }
    catch (error) {
        return res.status(500).json({ message: "Error al obtener departamentos" });
    }
};
exports.getAllDepartamentos = getAllDepartamentos;
const createDepartamento = async (req, res) => {
    try {
        const departamentoRepository = (0, typeorm_1.getRepository)(Departamento_1.Departamento);
        const departamento = departamentoRepository.create(req.body);
        const savedDepartamento = await departamentoRepository.save(departamento);
        return res.status(201).json(savedDepartamento);
    }
    catch (error) {
        return res.status(500).json({ message: "Error al crear el departamento" });
    }
};
exports.createDepartamento = createDepartamento;
const getDepartamentoById = async (req, res) => {
    try {
        const departamentoRepository = (0, typeorm_1.getRepository)(Departamento_1.Departamento);
        const departamentoId = parseInt(req.params.id, 10);
        const departamento = await departamentoRepository.findOne({ where: { id: departamentoId } });
        if (!departamento) {
            return res.status(404).json({ message: "Departamento no encontrado" });
        }
        return res.status(200).json(departamento);
    }
    catch (error) {
        return res.status(500).json({ message: "Error al obtener el departamento" });
    }
};
exports.getDepartamentoById = getDepartamentoById;
const updateDepartamento = async (req, res) => {
    try {
        const departamentoRepository = (0, typeorm_1.getRepository)(Departamento_1.Departamento);
        const departamentoId = parseInt(req.params.id, 10);
        const departamento = await departamentoRepository.findOne({ where: { id: departamentoId } });
        if (!departamento) {
            return res.status(404).json({ message: "Departamento no encontrado" });
        }
        departamentoRepository.merge(departamento, req.body);
        const updatedDepartamento = await departamentoRepository.save(departamento);
        return res.status(200).json(updatedDepartamento);
    }
    catch (error) {
        return res.status(500).json({ message: "Error al actualizar el departamento" });
    }
};
exports.updateDepartamento = updateDepartamento;
const deleteDepartamento = async (req, res) => {
    try {
        const departamentoRepository = (0, typeorm_1.getRepository)(Departamento_1.Departamento);
        const departamentoId = parseInt(req.params.id, 10);
        const departamento = await departamentoRepository.findOne({ where: { id: departamentoId } });
        if (!departamento) {
            return res.status(404).json({ message: "Departamento no encontrado" });
        }
        await departamentoRepository.remove(departamento);
        return res.status(204).json({ message: "Departamento eliminado" });
    }
    catch (error) {
        return res.status(500).json({ message: "Error al eliminar el departamento" });
    }
};
exports.deleteDepartamento = deleteDepartamento;
