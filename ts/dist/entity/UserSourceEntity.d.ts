import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { UserSource, UserSourceLoadMatch, UserSourceListMatch, UserSourceCreateData, UserSourceUpdateData, UserSourceRemoveMatch } from '../BaserowTypes';
declare class UserSourceEntity extends BaserowEntityBase<UserSource> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: UserSourceEntity): UserSourceEntity;
    load(this: any, reqmatch?: UserSourceLoadMatch, ctrl?: Control): Promise<UserSourceEntity>;
    list(this: any, reqmatch?: UserSourceListMatch, ctrl?: Control): Promise<UserSourceEntity[]>;
    create(this: any, reqdata?: UserSourceCreateData, ctrl?: Control): Promise<UserSourceEntity>;
    update(this: any, reqdata?: UserSourceUpdateData, ctrl?: Control): Promise<UserSourceEntity>;
    remove(this: any, reqmatch?: UserSourceRemoveMatch, ctrl?: Control): Promise<UserSourceEntity>;
}
export { UserSourceEntity };
