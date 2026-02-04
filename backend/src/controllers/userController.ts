import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/userService';

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userService.getAllUsers();
    res.json({ status: 'ok', data: users });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.findUserById(Number(req.params.id));
    if (!user) {
      res.status(404);
      throw new Error('User not found');
    }
    res.json({ status: 'ok', data: user });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.updateUser(Number(req.params.id), req.body);
    res.json({ status: 'ok', message: 'User updated', data: user });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await userService.deleteUser(Number(req.params.id));
    res.json({ status: 'ok', message: 'User deleted' });
  } catch (error) {
    next(error);
  }
};
