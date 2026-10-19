import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { LicenseWithUser, LicenseWithUserListMatch } from '../BaserowTypes';
declare class LicenseWithUserEntity extends BaserowEntityBase<LicenseWithUser> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: LicenseWithUserEntity): LicenseWithUserEntity;
    list(this: any, reqmatch?: LicenseWithUserListMatch, ctrl?: Control): Promise<LicenseWithUserEntity[]>;
}
export { LicenseWithUserEntity };
