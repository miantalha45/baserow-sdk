import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AiProvider, AiProviderListMatch, AiProviderCreateData, AiProviderUpdateData, AiProviderRemoveMatch } from '../BaserowTypes';
declare class AiProviderEntity extends BaserowEntityBase<AiProvider> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AiProviderEntity): AiProviderEntity;
    list(this: any, reqmatch?: AiProviderListMatch, ctrl?: Control): Promise<AiProviderEntity[]>;
    create(this: any, reqdata?: AiProviderCreateData, ctrl?: Control): Promise<AiProviderEntity>;
    update(this: any, reqdata?: AiProviderUpdateData, ctrl?: Control): Promise<AiProviderEntity>;
    remove(this: any, reqmatch?: AiProviderRemoveMatch, ctrl?: Control): Promise<AiProviderEntity>;
}
export { AiProviderEntity };
