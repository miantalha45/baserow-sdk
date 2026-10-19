import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { PasswordFieldAuthentication, PasswordFieldAuthenticationCreateData } from '../BaserowTypes';
declare class PasswordFieldAuthenticationEntity extends BaserowEntityBase<PasswordFieldAuthentication> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: PasswordFieldAuthenticationEntity): PasswordFieldAuthenticationEntity;
    create(this: any, reqdata?: PasswordFieldAuthenticationCreateData, ctrl?: Control): Promise<PasswordFieldAuthenticationEntity>;
}
export { PasswordFieldAuthenticationEntity };
