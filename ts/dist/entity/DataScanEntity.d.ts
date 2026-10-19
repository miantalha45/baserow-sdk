import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { DataScan, DataScanLoadMatch, DataScanListMatch, DataScanCreateData, DataScanUpdateData } from '../BaserowTypes';
declare class DataScanEntity extends BaserowEntityBase<DataScan> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: DataScanEntity): DataScanEntity;
    load(this: any, reqmatch?: DataScanLoadMatch, ctrl?: Control): Promise<DataScanEntity>;
    list(this: any, reqmatch?: DataScanListMatch, ctrl?: Control): Promise<DataScanEntity[]>;
    create(this: any, reqdata?: DataScanCreateData, ctrl?: Control): Promise<DataScanEntity>;
    update(this: any, reqdata?: DataScanUpdateData, ctrl?: Control): Promise<DataScanEntity>;
}
export { DataScanEntity };
