import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { findUserByEmail, createUser } from './userService';

export const registerUser = async (data: any) => {
    const { email, password, name, phone } = data;

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
        throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await createUser({
        email,
        password: hashedPassword,
        name,
        phone,
    });

    return generateToken(user.id);
};

export const loginUser = async (data: any) => {
    const { email, password } = data;

    const user = await findUserByEmail(email);
    if (!user) {
        throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    return generateToken(user.id);
};

const generateToken = (id: number) => {
    return jwt.sign({ id }, process.env.JWT_SECRET as string, {
        expiresIn: '30d',
    });
};
