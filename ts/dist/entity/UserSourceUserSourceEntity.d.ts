import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { UserSourceUserSource, UserSourceUserSourceUpdateData } from '../BaserowTypes';
declare class UserSourceUserSourceEntity extends BaserowEntityBase<UserSourceUserSource> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: UserSourceUserSourceEntity): UserSourceUserSourceEntity;
    update(this: any, reqdata?: UserSourceUserSourceUpdateData, ctrl?: Control): Promise<UserSourceUserSourceEntity>;
}
export { UserSourceUserSourceEntity };
