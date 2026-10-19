import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { DataSync, DataSyncLoadMatch, DataSyncUpdateData } from '../BaserowTypes';
declare class DataSyncEntity extends BaserowEntityBase<DataSync> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: DataSyncEntity): DataSyncEntity;
    load(this: any, reqmatch?: DataSyncLoadMatch, ctrl?: Control): Promise<DataSyncEntity>;
    update(this: any, reqdata?: DataSyncUpdateData, ctrl?: Control): Promise<DataSyncEntity>;
}
export { DataSyncEntity };
