import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@UseGuards(JwtAuthGuard)
@Controller('categories')
export class CategoriesController {
    constructor(private service: CategoriesService) { }

    @Post()
    create(@Request() req, @Body() dto: CreateCategoryDto) {
        return this.service.create(req.user.sub, dto.name, dto.type);
    }

    @Get()
    findAll(@Request() req) {
        return this.service.findAll(req.user.sub);
    }
}
