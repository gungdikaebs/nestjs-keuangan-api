import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        email: string;
        name: string | null;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    login(dto: LoginDto): Promise<{
        token: string;
    }>;
}
