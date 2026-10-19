import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AiProviderModel, AiProviderModelCreateData, AiProviderModelUpdateData } from '../BaserowTypes';
declare class AiProviderModelEntity extends BaserowEntityBase<AiProviderModel> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AiProviderModelEntity): AiProviderModelEntity;
    create(this: any, reqdata?: AiProviderModelCreateData, ctrl?: Control): Promise<AiProviderModelEntity>;
    update(this: any, reqdata?: AiProviderModelUpdateData, ctrl?: Control): Promise<AiProviderModelEntity>;
}
export { AiProviderModelEntity };
