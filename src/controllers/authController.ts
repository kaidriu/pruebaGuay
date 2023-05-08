import { getRepository } from 'typeorm';
import { Cliente } from "../entities/Cliente";
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const Login = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const userRepository = getRepository(Cliente);
        const { email, password } = req.body;
        const usuario = await userRepository.findOne({ where: { email } });
        if (!usuario) {
        return res.status(404).json({ message: "Usuario no encontrado" });
        }
        // const isMatch = await bcrypt.compare(password, usuario.password);
        const isMatch = password === usuario.password;
        if (!isMatch) {
        return res.status(401).json({ message: "Contraseña incorrecta" });
        }
        const token = jwt.sign({ id: usuario.id }, process.env.SECRET_KEY!, { expiresIn: 3600 });
        return res.status(200).json({ token });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error al iniciar sesión" });
    }
};
