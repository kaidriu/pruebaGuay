"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCliente = exports.updateCliente = exports.getClienteById = exports.createCliente = exports.getAllClientes = void 0;
const typeorm_1 = require("typeorm");
const Cliente_1 = require("../entities/Cliente");
const getAllClientes = async (req, res) => {
    try {
        const clienteRepository = (0, typeorm_1.getRepository)(Cliente_1.Cliente);
        const clientes = await clienteRepository.find({ relations: ["departamento"] });
        return res.status(200).json(clientes);
    }
    catch (error) {
        return res.status(500).json({ message: "Error al obtener clientes" });
    }
};
exports.getAllClientes = getAllClientes;
const createCliente = async (req, res) => {
    try {
        const clienteRepository = (0, typeorm_1.getRepository)(Cliente_1.Cliente);
        const cliente = clienteRepository.create(req.body);
        const savedCliente = await clienteRepository.save(cliente);
        return res.status(201).json(savedCliente);
    }
    catch (error) {
        return res.status(500).json({ message: "Error al crear el cliente" });
    }
};
exports.createCliente = createCliente;
const getClienteById = async (req, res) => {
    try {
        const clienteRepository = (0, typeorm_1.getRepository)(Cliente_1.Cliente);
        const clienteId = parseInt(req.params.id, 10);
        const cliente = await clienteRepository.findOne({ where: { id: clienteId }, relations: ["departamento"] });
        if (!cliente) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }
        return res.status(200).json(cliente);
    }
    catch (error) {
        return res.status(500).json({ message: "Error al obtener el cliente" });
    }
};
exports.getClienteById = getClienteById;
const updateCliente = async (req, res) => {
    try {
        const clienteRepository = (0, typeorm_1.getRepository)(Cliente_1.Cliente);
        const clienteId = parseInt(req.params.id, 10);
        const cliente = await clienteRepository.findOne({ where: { id: clienteId } });
        if (!cliente) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }
        clienteRepository.merge(cliente, req.body);
        const updatedCliente = await clienteRepository.save(cliente);
        return res.status(200).json(updatedCliente);
    }
    catch (error) {
        return res.status(500).json({ message: "Error al actualizar el cliente" });
    }
};
exports.updateCliente = updateCliente;
const deleteCliente = async (req, res) => {
    try {
        const clienteRepository = (0, typeorm_1.getRepository)(Cliente_1.Cliente);
        const clienteId = parseInt(req.params.id, 10);
        const cliente = await clienteRepository.findOne({ where: { id: clienteId } });
        if (!cliente) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }
        await clienteRepository.remove(cliente);
        return res.status(204).json({ message: "Cliente eliminado" });
    }
    catch (error) {
        return res.status(500).json({ message: "Error al eliminar el cliente" });
    }
};
exports.deleteCliente = deleteCliente;
