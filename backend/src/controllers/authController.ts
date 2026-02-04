import { Request, Response, NextFunction } from 'express';
import { registerUser, loginUser } from '../services/authService';
import { z } from 'zod';

export const registerSchema = z.object({
    body: z.object({
        email: z.string().email(),
        password: z.string().min(6),
        name: z.string(),
        phone: z.string().optional(),
    }),
});

export const loginSchema = z.object({
    body: z.object({
        email: z.string().email(),
        password: z.string(),
    }),
});

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = await registerUser(req.body);
        res.status(201).json({ status: 'ok', token });
    } catch (error) {
        next(error);
    }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = await loginUser(req.body);
        res.json({ status: 'ok', token });
    } catch (error) {
        res.status(401); // Special case for login error
        next(error);
    }
};
