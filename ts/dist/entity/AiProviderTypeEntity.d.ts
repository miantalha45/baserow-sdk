import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AiProviderType, AiProviderTypeListMatch } from '../BaserowTypes';
declare class AiProviderTypeEntity extends BaserowEntityBase<AiProviderType> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AiProviderTypeEntity): AiProviderTypeEntity;
    list(this: any, reqmatch?: AiProviderTypeListMatch, ctrl?: Control): Promise<AiProviderTypeEntity[]>;
}
export { AiProviderTypeEntity };
