// src/controllers/clienteController.ts
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Cliente } from "../entities/Cliente";

export const getAllClientes = async (req: Request, res: Response) => {
  try {
    const clienteRepository = getRepository(Cliente);
    const clientes = await clienteRepository.find({ relations: ["departamento"] });
    return res.status(200).json(clientes);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener clientes" });
  }
};

export const createCliente = async (req: Request, res: Response) => {
  try {
    const clienteRepository = getRepository(Cliente);
    const cliente = clienteRepository.create(req.body);
    const savedCliente = await clienteRepository.save(cliente);
    return res.status(201).json(savedCliente);
  } catch (error) {
    return res.status(500).json({ message: "Error al crear el cliente" });
  }
};

export const getClienteById = async (req: Request, res: Response) => {
    try {
      const clienteRepository = getRepository(Cliente);
      const clienteId = parseInt(req.params.id, 10);
      const cliente = await clienteRepository.findOne({ where: { id: clienteId }, relations: ["departamento"] });
      if (!cliente) {
        return res.status(404).json({ message: "Cliente no encontrado" });
      }
      return res.status(200).json(cliente);
    } catch (error) {
      return res.status(500).json({ message: "Error al obtener el cliente" });
    }
  };

export const updateCliente = async (req: Request, res: Response) => {
  try {
    const clienteRepository = getRepository(Cliente);
    const clienteId = parseInt(req.params.id, 10);
    const cliente = await clienteRepository.findOne({ where: { id: clienteId }});
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    clienteRepository.merge(cliente, req.body);
    const updatedCliente = await clienteRepository.save(cliente);
    return res.status(200).json(updatedCliente);
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar el cliente" });
  }
};

export const deleteCliente = async (req: Request, res: Response) => {
  try {
    const clienteRepository = getRepository(Cliente);
    const clienteId = parseInt(req.params.id, 10);
    const cliente = await clienteRepository.findOne({ where: { id: clienteId }});
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    await clienteRepository.remove(cliente);
    return res.status(204).json({ message: "Cliente eliminado" });
  } catch (error) {
    return res.status(500).json({ message: "Error al eliminar el cliente" });
  }
};
