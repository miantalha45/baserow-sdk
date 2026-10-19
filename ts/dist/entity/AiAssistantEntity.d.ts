import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AiAssistant, AiAssistantCreateData, AiAssistantUpdateData, AiAssistantRemoveMatch } from '../BaserowTypes';
declare class AiAssistantEntity extends BaserowEntityBase<AiAssistant> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AiAssistantEntity): AiAssistantEntity;
    create(this: any, reqdata?: AiAssistantCreateData, ctrl?: Control): Promise<AiAssistantEntity>;
    update(this: any, reqdata?: AiAssistantUpdateData, ctrl?: Control): Promise<AiAssistantEntity>;
    remove(this: any, reqmatch?: AiAssistantRemoveMatch, ctrl?: Control): Promise<AiAssistantEntity>;
}
export { AiAssistantEntity };
