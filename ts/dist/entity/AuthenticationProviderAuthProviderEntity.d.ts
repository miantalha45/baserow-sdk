import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AuthenticationProviderAuthProvider, AuthenticationProviderAuthProviderLoadMatch, AuthenticationProviderAuthProviderListMatch, AuthenticationProviderAuthProviderCreateData, AuthenticationProviderAuthProviderUpdateData } from '../BaserowTypes';
declare class AuthenticationProviderAuthProviderEntity extends BaserowEntityBase<AuthenticationProviderAuthProvider> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AuthenticationProviderAuthProviderEntity): AuthenticationProviderAuthProviderEntity;
    load(this: any, reqmatch?: AuthenticationProviderAuthProviderLoadMatch, ctrl?: Control): Promise<AuthenticationProviderAuthProviderEntity>;
    list(this: any, reqmatch?: AuthenticationProviderAuthProviderListMatch, ctrl?: Control): Promise<AuthenticationProviderAuthProviderEntity[]>;
    create(this: any, reqdata?: AuthenticationProviderAuthProviderCreateData, ctrl?: Control): Promise<AuthenticationProviderAuthProviderEntity>;
    update(this: any, reqdata?: AuthenticationProviderAuthProviderUpdateData, ctrl?: Control): Promise<AuthenticationProviderAuthProviderEntity>;
}
export { AuthenticationProviderAuthProviderEntity };
