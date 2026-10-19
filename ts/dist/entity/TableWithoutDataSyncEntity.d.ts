import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { TableWithoutDataSync, TableWithoutDataSyncListMatch } from '../BaserowTypes';
declare class TableWithoutDataSyncEntity extends BaserowEntityBase<TableWithoutDataSync> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: TableWithoutDataSyncEntity): TableWithoutDataSyncEntity;
    list(this: any, reqmatch?: TableWithoutDataSyncListMatch, ctrl?: Control): Promise<TableWithoutDataSyncEntity[]>;
}
export { TableWithoutDataSyncEntity };
