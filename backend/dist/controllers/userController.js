"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const database_1 = __importDefault(require("../config/database"));
// Get all users
const getAllUsers = async (req, res) => {
    try {
        const connection = await database_1.default.getConnection();
        const [rows] = await connection.query('SELECT * FROM users');
        connection.release();
        res.json({ status: 'ok', data: rows });
    }
    catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};
exports.getAllUsers = getAllUsers;
// Get user by ID
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await database_1.default.getConnection();
        const [rows] = await connection.query('SELECT * FROM users WHERE id = ?', [id]);
        connection.release();
        if (Array.isArray(rows) && rows.length === 0) {
            return res.status(404).json({ status: 'error', message: 'User not found' });
        }
        res.json({ status: 'ok', data: rows[0] });
    }
    catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};
exports.getUserById = getUserById;
// Create user
const createUser = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        if (!name || !email) {
            return res.status(400).json({ status: 'error', message: 'Name and email are required' });
        }
        const connection = await database_1.default.getConnection();
        const [result] = await connection.query('INSERT INTO users (name, email, phone) VALUES (?, ?, ?)', [name, email, phone || null]);
        connection.release();
        res.status(201).json({ status: 'ok', message: 'User created', data: result });
    }
    catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};
exports.createUser = createUser;
// Update user
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone } = req.body;
        const connection = await database_1.default.getConnection();
        const [result] = await connection.query('UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?', [name, email, phone || null, id]);
        connection.release();
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'User not found' });
        }
        res.json({ status: 'ok', message: 'User updated' });
    }
    catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};
exports.updateUser = updateUser;
// Delete user
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await database_1.default.getConnection();
        const [result] = await connection.query('DELETE FROM users WHERE id = ?', [id]);
        connection.release();
        if (result.affectedRows === 0) {
            return res.status(404).json({ status: 'error', message: 'User not found' });
        }
        res.json({ status: 'ok', message: 'User deleted' });
    }
    catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};
exports.deleteUser = deleteUser;
