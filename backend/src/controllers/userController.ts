import { Request, Response } from 'express';
import pool from '../config/database';

// Get all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM users');
    connection.release();
    res.json({ status: 'ok', data: rows });
  } catch (error: any) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// Get user by ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM users WHERE id = ?', [id]);
    connection.release();

    if (Array.isArray(rows) && rows.length === 0) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }

    res.json({ status: 'ok', data: (rows as any[])[0] });
  } catch (error: any) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// Create user
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email) {
      return res.status(400).json({ status: 'error', message: 'Name and email are required' });
    }

    const connection = await pool.getConnection();
    const [result] = await connection.query(
      'INSERT INTO users (name, email, phone) VALUES (?, ?, ?)',
      [name, email, phone || null]
    );
    connection.release();

    res.status(201).json({ status: 'ok', message: 'User created', data: result });
  } catch (error: any) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// Update user
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    const connection = await pool.getConnection();
    const [result] = await connection.query(
      'UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?',
      [name, email, phone || null, id]
    );
    connection.release();

    if ((result as any).affectedRows === 0) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }

    res.json({ status: 'ok', message: 'User updated' });
  } catch (error: any) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// Delete user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const connection = await pool.getConnection();
    const [result] = await connection.query('DELETE FROM users WHERE id = ?', [id]);
    connection.release();

    if ((result as any).affectedRows === 0) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }

    res.json({ status: 'ok', message: 'User deleted' });
  } catch (error: any) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};
