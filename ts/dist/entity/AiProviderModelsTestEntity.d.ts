import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AiProviderModelsTest, AiProviderModelsTestCreateData } from '../BaserowTypes';
declare class AiProviderModelsTestEntity extends BaserowEntityBase<AiProviderModelsTest> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AiProviderModelsTestEntity): AiProviderModelsTestEntity;
    create(this: any, reqdata?: AiProviderModelsTestCreateData, ctrl?: Control): Promise<AiProviderModelsTestEntity>;
}
export { AiProviderModelsTestEntity };
