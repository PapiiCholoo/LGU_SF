"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./config/database"));
const api_1 = __importDefault(require("./routes/api"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const allowedOrigins = (process.env.FRONTEND_ORIGINS || 'http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim());
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({ origin: allowedOrigins, credentials: true }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});
app.get('/db-test', async (req, res) => {
    try {
        const connection = await database_1.default.getConnection();
        const [rows] = await connection.query('SELECT 1 AS test');
        connection.release();
        res.json({ status: 'ok', message: 'Database connection successful', data: rows });
    }
    catch (error) {
        res.status(500).json({ status: 'error', message: 'Database connection failed', error });
    }
});
app.use('/api', api_1.default);
app.use((req, res) => {
    res.status(404).json({ status: 'error', message: 'Route not found' });
});
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ status: 'error', message: 'Internal server error', error: err.message });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
exports.default = app;
