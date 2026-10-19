import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Auth, AuthLoadMatch, AuthCreateData, AuthRemoveMatch } from '../BaserowTypes';
declare class AuthEntity extends BaserowEntityBase<Auth> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AuthEntity): AuthEntity;
    load(this: any, reqmatch?: AuthLoadMatch, ctrl?: Control): Promise<AuthEntity>;
    create(this: any, reqdata?: AuthCreateData, ctrl?: Control): Promise<AuthEntity>;
    remove(this: any, reqmatch?: AuthRemoveMatch, ctrl?: Control): Promise<AuthEntity>;
}
export { AuthEntity };
