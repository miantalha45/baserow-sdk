import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { DatabaseTableView, DatabaseTableViewLoadMatch, DatabaseTableViewCreateData, DatabaseTableViewRemoveMatch } from '../BaserowTypes';
declare class DatabaseTableViewEntity extends BaserowEntityBase<DatabaseTableView> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: DatabaseTableViewEntity): DatabaseTableViewEntity;
    load(this: any, reqmatch?: DatabaseTableViewLoadMatch, ctrl?: Control): Promise<DatabaseTableViewEntity>;
    create(this: any, reqdata?: DatabaseTableViewCreateData, ctrl?: Control): Promise<DatabaseTableViewEntity>;
    remove(this: any, reqmatch?: DatabaseTableViewRemoveMatch, ctrl?: Control): Promise<DatabaseTableViewEntity>;
}
export { DatabaseTableViewEntity };
