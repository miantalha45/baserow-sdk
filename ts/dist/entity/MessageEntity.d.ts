import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Message, MessageListMatch } from '../BaserowTypes';
declare class MessageEntity extends BaserowEntityBase<Message> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: MessageEntity): MessageEntity;
    list(this: any, reqmatch?: MessageListMatch, ctrl?: Control): Promise<MessageEntity[]>;
}
export { MessageEntity };
