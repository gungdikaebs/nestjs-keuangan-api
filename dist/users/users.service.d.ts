import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getMe(userId: number): Promise<{
        id: number;
        name: string | null;
        email: string;
    } | null>;
}
