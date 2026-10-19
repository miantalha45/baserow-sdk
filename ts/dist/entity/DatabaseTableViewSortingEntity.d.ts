import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { DatabaseTableViewSorting, DatabaseTableViewSortingCreateData, DatabaseTableViewSortingRemoveMatch } from '../BaserowTypes';
declare class DatabaseTableViewSortingEntity extends BaserowEntityBase<DatabaseTableViewSorting> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: DatabaseTableViewSortingEntity): DatabaseTableViewSortingEntity;
    create(this: any, reqdata?: DatabaseTableViewSortingCreateData, ctrl?: Control): Promise<DatabaseTableViewSortingEntity>;
    remove(this: any, reqmatch?: DatabaseTableViewSortingRemoveMatch, ctrl?: Control): Promise<DatabaseTableViewSortingEntity>;
}
export { DatabaseTableViewSortingEntity };
