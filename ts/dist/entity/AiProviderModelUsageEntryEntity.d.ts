import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AiProviderModelUsageEntry, AiProviderModelUsageEntryListMatch } from '../BaserowTypes';
declare class AiProviderModelUsageEntryEntity extends BaserowEntityBase<AiProviderModelUsageEntry> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AiProviderModelUsageEntryEntity): AiProviderModelUsageEntryEntity;
    list(this: any, reqmatch?: AiProviderModelUsageEntryListMatch, ctrl?: Control): Promise<AiProviderModelUsageEntryEntity[]>;
}
export { AiProviderModelUsageEntryEntity };
