import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { LicenseUser, LicenseUserCreateData } from '../BaserowTypes';
declare class LicenseUserEntity extends BaserowEntityBase<LicenseUser> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: LicenseUserEntity): LicenseUserEntity;
    create(this: any, reqdata?: LicenseUserCreateData, ctrl?: Control): Promise<LicenseUserEntity>;
}
export { LicenseUserEntity };
