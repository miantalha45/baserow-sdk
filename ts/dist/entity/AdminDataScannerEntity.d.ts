import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AdminDataScanner, AdminDataScannerListMatch, AdminDataScannerCreateData, AdminDataScannerRemoveMatch } from '../BaserowTypes';
declare class AdminDataScannerEntity extends BaserowEntityBase<AdminDataScanner> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AdminDataScannerEntity): AdminDataScannerEntity;
    list(this: any, reqmatch?: AdminDataScannerListMatch, ctrl?: Control): Promise<AdminDataScannerEntity[]>;
    create(this: any, reqdata?: AdminDataScannerCreateData, ctrl?: Control): Promise<AdminDataScannerEntity>;
    remove(this: any, reqmatch?: AdminDataScannerRemoveMatch, ctrl?: Control): Promise<AdminDataScannerEntity>;
}
export { AdminDataScannerEntity };
