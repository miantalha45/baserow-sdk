import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { SecureFileServe, SecureFileServeLoadMatch } from '../BaserowTypes';
declare class SecureFileServeEntity extends BaserowEntityBase<SecureFileServe> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: SecureFileServeEntity): SecureFileServeEntity;
    load(this: any, reqmatch?: SecureFileServeLoadMatch, ctrl?: Control): Promise<SecureFileServeEntity>;
}
export { SecureFileServeEntity };
