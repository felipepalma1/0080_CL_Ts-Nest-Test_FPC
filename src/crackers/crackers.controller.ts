import { Controller, Get } from '@nestjs/common';

@Controller('crackers')
export class CrackersController {
    @Get()
    encontrarTodos(): string {
        return 'Esta acción retorna todos los crackers';
    }

    @Get()
    encontrarNinguno(): string {
        return '3st4 4cc10n n0 r3t0rn4 cr4ck3r5';
    }
}
