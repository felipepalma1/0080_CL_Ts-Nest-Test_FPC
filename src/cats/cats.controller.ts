import { Controller, Get, Req, Post, Header, Param, Body, Query, Delete } from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto/create-cat.dto';
import { ListAllEntitiesDto } from './dto/list-all-entities.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {

    @Post()
    create(@Body() createCatDto: CreateCatDto){
        return 'Esta acción creará un nuevo gato';
    }

    @Get()
    encontrarTodos(@Query() query: ListAllEntitiesDto){
        return `Esta acción retornará todos los gatos (limite: ${query.limit})`;
    }

    @Get(':id')
    encontrarUno(@Param('id') id: string, @Body() updatecat): UpdateCatDto{
        return `Esta acción actualiza a ${id} gato`;
    }

    @Delete(':id')
    remover(@Param('id') id: string){
        return `Esta acción remueve un #${id} gato`;
    }
 
}
