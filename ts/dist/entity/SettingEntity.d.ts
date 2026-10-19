import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Setting, SettingLoadMatch, SettingUpdateData } from '../BaserowTypes';
declare class SettingEntity extends BaserowEntityBase<Setting> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: SettingEntity): SettingEntity;
    load(this: any, reqmatch?: SettingLoadMatch, ctrl?: Control): Promise<SettingEntity>;
    update(this: any, reqdata?: SettingUpdateData, ctrl?: Control): Promise<SettingEntity>;
}
export { SettingEntity };
