import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AiProviderFeatureSetting, AiProviderFeatureSettingListMatch, AiProviderFeatureSettingUpdateData } from '../BaserowTypes';
declare class AiProviderFeatureSettingEntity extends BaserowEntityBase<AiProviderFeatureSetting> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AiProviderFeatureSettingEntity): AiProviderFeatureSettingEntity;
    list(this: any, reqmatch?: AiProviderFeatureSettingListMatch, ctrl?: Control): Promise<AiProviderFeatureSettingEntity[]>;
    update(this: any, reqdata?: AiProviderFeatureSettingUpdateData, ctrl?: Control): Promise<AiProviderFeatureSettingEntity>;
}
export { AiProviderFeatureSettingEntity };
