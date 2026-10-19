import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { DatabaseTableRow, DatabaseTableRowLoadMatch, DatabaseTableRowCreateData, DatabaseTableRowUpdateData, DatabaseTableRowRemoveMatch } from '../BaserowTypes';
declare class DatabaseTableRowEntity extends BaserowEntityBase<DatabaseTableRow> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: DatabaseTableRowEntity): DatabaseTableRowEntity;
    load(this: any, reqmatch?: DatabaseTableRowLoadMatch, ctrl?: Control): Promise<DatabaseTableRowEntity>;
    create(this: any, reqdata?: DatabaseTableRowCreateData, ctrl?: Control): Promise<DatabaseTableRowEntity>;
    update(this: any, reqdata?: DatabaseTableRowUpdateData, ctrl?: Control): Promise<DatabaseTableRowEntity>;
    remove(this: any, reqmatch?: DatabaseTableRowRemoveMatch, ctrl?: Control): Promise<DatabaseTableRowEntity>;
}
export { DatabaseTableRowEntity };
