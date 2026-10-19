import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Table, TableLoadMatch, TableCreateData, TableUpdateData } from '../BaserowTypes';
declare class TableEntity extends BaserowEntityBase<Table> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: TableEntity): TableEntity;
    load(this: any, reqmatch?: TableLoadMatch, ctrl?: Control): Promise<TableEntity>;
    create(this: any, reqdata?: TableCreateData, ctrl?: Control): Promise<TableEntity>;
    update(this: any, reqdata?: TableUpdateData, ctrl?: Control): Promise<TableEntity>;
}
export { TableEntity };
