import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Login, LoginLoadMatch } from '../BaserowTypes';
declare class LoginEntity extends BaserowEntityBase<Login> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: LoginEntity): LoginEntity;
    load(this: any, reqmatch?: LoginLoadMatch, ctrl?: Control): Promise<LoginEntity>;
}
export { LoginEntity };
