import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { DatabaseTable, DatabaseTableCreateData, DatabaseTableRemoveMatch } from '../BaserowTypes';
declare class DatabaseTableEntity extends BaserowEntityBase<DatabaseTable> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: DatabaseTableEntity): DatabaseTableEntity;
    create(this: any, reqdata?: DatabaseTableCreateData, ctrl?: Control): Promise<DatabaseTableEntity>;
    remove(this: any, reqmatch?: DatabaseTableRemoveMatch, ctrl?: Control): Promise<DatabaseTableEntity>;
}
export { DatabaseTableEntity };
