import { createMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    messagesService: MessagesService;
    constructor();
    listMessages(): Promise<any>;
    createMessage(body: createMessageDto): Promise<void>;
    getMessage(id: string): Promise<any>;
}
