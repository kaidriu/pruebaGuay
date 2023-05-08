// src/controllers/departamentoController.ts
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Departamento } from "../entities/Departamento";

export const getAllDepartamentos = async (req: Request, res: Response) => {
  try {
    const departamentoRepository = getRepository(Departamento);
    const departamentos = await departamentoRepository.find();
    return res.status(200).json(departamentos);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener departamentos" });
  }
};

export const createDepartamento = async (req: Request, res: Response) => {
  try {
    const departamentoRepository = getRepository(Departamento);
    const departamento = departamentoRepository.create(req.body);
    const savedDepartamento = await departamentoRepository.save(departamento);
    return res.status(201).json(savedDepartamento);
  } catch (error) {
    return res.status(500).json({ message: "Error al crear el departamento" });
  }
};

export const getDepartamentoById = async (req: Request, res: Response) => {
  try {
    const departamentoRepository = getRepository(Departamento);
    const departamentoId = parseInt(req.params.id, 10);
    const departamento = await departamentoRepository.findOne({ where: { id: departamentoId }});
    if (!departamento) {
      return res.status(404).json({ message: "Departamento no encontrado" });
    }
    return res.status(200).json(departamento);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener el departamento" });
  }
};

export const updateDepartamento = async (req: Request, res: Response) => {
  try {

    const departamentoRepository = getRepository(Departamento);
    const departamentoId = parseInt(req.params.id, 10);
    const departamento = await departamentoRepository.findOne({ where: { id: departamentoId }});
    if (!departamento) {
      return res.status(404).json({ message: "Departamento no encontrado" });
    }
    departamentoRepository.merge(departamento, req.body);
    const updatedDepartamento = await departamentoRepository.save(departamento);
    return res.status(200).json(updatedDepartamento);
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar el departamento" });
  }
};

export const deleteDepartamento = async (req: Request, res: Response) => {
  try {
    const departamentoRepository = getRepository(Departamento);
    const departamentoId = parseInt(req.params.id, 10);
    const departamento = await departamentoRepository.findOne({ where: { id: departamentoId }});
    if (!departamento) {
      return res.status(404).json({ message: "Departamento no encontrado" });
    }
    await departamentoRepository.remove(departamento);
    return res.status(204).json({ message: "Departamento eliminado" });
  } catch (error) {
    return res.status(500).json({ message: "Error al eliminar el departamento" });
  }
};
