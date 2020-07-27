import { Controller, Get, Post, HttpCode, Header, Redirect } from '@nestjs/common';
/**
 * buff 
 * dork
 * asian
 * white
 * def
 * classic
 * racist
 * mistery
 * psycho
 * dog
 * jewish
 * 
 */
@Controller('niggas')
export class NiggasController {
    @Post()
    @Header('Cache-Control', 'none')
    create() {
        return 'Esta acción crea un nuevo nigga';
    }
    
    /*@Get()
    crear(): string {
        return 'Esta acción creará un nigga';
    }*/

    @Get()
    encontrarTodos(): string {
        return 'Esta acción encontrará todos los niggas';
    }
}
