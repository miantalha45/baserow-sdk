import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { DashboardDataSource, DashboardDataSourceCreateData } from '../BaserowTypes';
declare class DashboardDataSourceEntity extends BaserowEntityBase<DashboardDataSource> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: DashboardDataSourceEntity): DashboardDataSourceEntity;
    create(this: any, reqdata?: DashboardDataSourceCreateData, ctrl?: Control): Promise<DashboardDataSourceEntity>;
}
export { DashboardDataSourceEntity };
