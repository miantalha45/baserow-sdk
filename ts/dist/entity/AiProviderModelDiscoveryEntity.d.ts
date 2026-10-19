import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AiProviderModelDiscovery, AiProviderModelDiscoveryListMatch } from '../BaserowTypes';
declare class AiProviderModelDiscoveryEntity extends BaserowEntityBase<AiProviderModelDiscovery> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AiProviderModelDiscoveryEntity): AiProviderModelDiscoveryEntity;
    list(this: any, reqmatch?: AiProviderModelDiscoveryListMatch, ctrl?: Control): Promise<AiProviderModelDiscoveryEntity[]>;
}
export { AiProviderModelDiscoveryEntity };
