import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { UsersPerUserSource, UsersPerUserSourceLoadMatch } from '../BaserowTypes';
declare class UsersPerUserSourceEntity extends BaserowEntityBase<UsersPerUserSource> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: UsersPerUserSourceEntity): UsersPerUserSourceEntity;
    load(this: any, reqmatch?: UsersPerUserSourceLoadMatch, ctrl?: Control): Promise<UsersPerUserSourceEntity>;
}
export { UsersPerUserSourceEntity };
