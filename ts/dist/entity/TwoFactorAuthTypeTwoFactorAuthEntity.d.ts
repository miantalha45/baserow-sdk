import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { TwoFactorAuthTypeTwoFactorAuth, TwoFactorAuthTypeTwoFactorAuthLoadMatch, TwoFactorAuthTypeTwoFactorAuthCreateData } from '../BaserowTypes';
declare class TwoFactorAuthTypeTwoFactorAuthEntity extends BaserowEntityBase<TwoFactorAuthTypeTwoFactorAuth> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: TwoFactorAuthTypeTwoFactorAuthEntity): TwoFactorAuthTypeTwoFactorAuthEntity;
    load(this: any, reqmatch?: TwoFactorAuthTypeTwoFactorAuthLoadMatch, ctrl?: Control): Promise<TwoFactorAuthTypeTwoFactorAuthEntity>;
    create(this: any, reqdata?: TwoFactorAuthTypeTwoFactorAuthCreateData, ctrl?: Control): Promise<TwoFactorAuthTypeTwoFactorAuthEntity>;
}
export { TwoFactorAuthTypeTwoFactorAuthEntity };
