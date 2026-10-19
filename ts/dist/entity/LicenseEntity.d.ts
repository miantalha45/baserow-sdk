import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { License, LicenseLoadMatch, LicenseCreateData } from '../BaserowTypes';
declare class LicenseEntity extends BaserowEntityBase<License> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: LicenseEntity): LicenseEntity;
    load(this: any, reqmatch?: LicenseLoadMatch, ctrl?: Control): Promise<LicenseEntity>;
    create(this: any, reqdata?: LicenseCreateData, ctrl?: Control): Promise<LicenseEntity>;
}
export { LicenseEntity };
