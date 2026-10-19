import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { DatabaseTableViewFilter, DatabaseTableViewFilterRemoveMatch } from '../BaserowTypes';
declare class DatabaseTableViewFilterEntity extends BaserowEntityBase<DatabaseTableViewFilter> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: DatabaseTableViewFilterEntity): DatabaseTableViewFilterEntity;
    remove(this: any, reqmatch?: DatabaseTableViewFilterRemoveMatch, ctrl?: Control): Promise<DatabaseTableViewFilterEntity>;
}
export { DatabaseTableViewFilterEntity };
