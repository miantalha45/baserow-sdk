import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { UserSourceUserSourceRole, UserSourceUserSourceRoleLoadMatch } from '../BaserowTypes';
declare class UserSourceUserSourceRoleEntity extends BaserowEntityBase<UserSourceUserSourceRole> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: UserSourceUserSourceRoleEntity): UserSourceUserSourceRoleEntity;
    load(this: any, reqmatch?: UserSourceUserSourceRoleLoadMatch, ctrl?: Control): Promise<UserSourceUserSourceRoleEntity>;
}
export { UserSourceUserSourceRoleEntity };
