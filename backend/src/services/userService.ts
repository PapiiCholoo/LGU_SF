import prisma from '../config/prisma';

export const findUserByEmail = async (email: string) => {
    return await prisma.user.findUnique({
        where: { email },
    });
};

export const findUserById = async (id: number) => {
    return await prisma.user.findUnique({
        where: { id },
    });
};

export const createUser = async (data: any) => {
    return await prisma.user.create({
        data,
    });
};

export const getAllUsers = async () => {
    return await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            role: true,
            createdAt: true,
        },
    });
};

export const updateUser = async (id: number, data: any) => {
    return await prisma.user.update({
        where: { id },
        data,
    });
};

export const deleteUser = async (id: number) => {
    return await prisma.user.delete({
        where: { id },
    });
};
