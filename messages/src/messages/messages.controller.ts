import { Body, Controller, Get, Post } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {

    }

    @Post()
    createMessage(@Body() body: createMessageDto) {
        console.log(body)
    }

    @Get('/:id')
    getMessage() {

    }
}
