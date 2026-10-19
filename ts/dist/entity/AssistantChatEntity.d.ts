import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AssistantChat, AssistantChatListMatch } from '../BaserowTypes';
declare class AssistantChatEntity extends BaserowEntityBase<AssistantChat> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AssistantChatEntity): AssistantChatEntity;
    list(this: any, reqmatch?: AssistantChatListMatch, ctrl?: Control): Promise<AssistantChatEntity[]>;
}
export { AssistantChatEntity };
