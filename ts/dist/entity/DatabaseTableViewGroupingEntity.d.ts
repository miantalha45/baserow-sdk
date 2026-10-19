import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { DatabaseTableViewGrouping, DatabaseTableViewGroupingCreateData, DatabaseTableViewGroupingRemoveMatch } from '../BaserowTypes';
declare class DatabaseTableViewGroupingEntity extends BaserowEntityBase<DatabaseTableViewGrouping> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: DatabaseTableViewGroupingEntity): DatabaseTableViewGroupingEntity;
    create(this: any, reqdata?: DatabaseTableViewGroupingCreateData, ctrl?: Control): Promise<DatabaseTableViewGroupingEntity>;
    remove(this: any, reqmatch?: DatabaseTableViewGroupingRemoveMatch, ctrl?: Control): Promise<DatabaseTableViewGroupingEntity>;
}
export { DatabaseTableViewGroupingEntity };
