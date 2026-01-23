# LGU_SF Backend API

Node.js Express API backend connected to MySQL database.

## Setup Instructions

### Prerequisites
- Node.js 16+
- MySQL 5.7+
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Create .env file**
   Copy `.env.example` to `.env` and update with your MySQL credentials:
   ```bash
   cp .env.example .env
   ```

   Update these values in `.env`:
   ```
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=lgu_sf_db
   PORT=5000
   NODE_ENV=development
   ```

3. **Create MySQL Database**
   ```sql
   CREATE DATABASE lgu_sf_db;
   USE lgu_sf_db;

   CREATE TABLE users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     email VARCHAR(255) UNIQUE NOT NULL,
     phone VARCHAR(20),
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
   );
   ```

### Running the Server

**Development mode (with auto-reload)**
```bash
npm run dev
```

**Build for production**
```bash
npm run build
```

**Production mode**
```bash
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### Health Check
- `GET /health` - Server health status

### Database Test
- `GET /db-test` - Test MySQL connection

### Users (Example CRUD endpoints)
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Example Request Body (POST/PUT):
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890"
}
```

## CORS Configuration

Frontend URL is configured as `http://localhost:5173` (Vite default). Update in `src/server.ts` if your frontend runs on a different port.

## File Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.ts      # MySQL connection pool
│   ├── controllers/
│   │   └── userController.ts # Business logic
│   ├── routes/
│   │   └── api.ts           # API routes
│   ├── middleware/          # Custom middleware (future)
│   └── server.ts            # Express app setup
├── package.json
├── tsconfig.json
├── .env.example
└── .gitignore
```

## Notes

- TypeScript is configured for strict mode
- Uses connection pooling for database efficiency
- Helmet for security headers
- CORS enabled for frontend communication
