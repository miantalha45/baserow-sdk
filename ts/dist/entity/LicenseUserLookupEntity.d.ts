import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { LicenseUserLookup, LicenseUserLookupListMatch } from '../BaserowTypes';
declare class LicenseUserLookupEntity extends BaserowEntityBase<LicenseUserLookup> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: LicenseUserLookupEntity): LicenseUserLookupEntity;
    list(this: any, reqmatch?: LicenseUserLookupListMatch, ctrl?: Control): Promise<LicenseUserLookupEntity[]>;
}
export { LicenseUserLookupEntity };
