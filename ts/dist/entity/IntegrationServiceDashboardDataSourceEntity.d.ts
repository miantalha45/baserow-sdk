import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { IntegrationServiceDashboardDataSource, IntegrationServiceDashboardDataSourceListMatch, IntegrationServiceDashboardDataSourceUpdateData } from '../BaserowTypes';
declare class IntegrationServiceDashboardDataSourceEntity extends BaserowEntityBase<IntegrationServiceDashboardDataSource> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: IntegrationServiceDashboardDataSourceEntity): IntegrationServiceDashboardDataSourceEntity;
    list(this: any, reqmatch?: IntegrationServiceDashboardDataSourceListMatch, ctrl?: Control): Promise<IntegrationServiceDashboardDataSourceEntity[]>;
    update(this: any, reqdata?: IntegrationServiceDashboardDataSourceUpdateData, ctrl?: Control): Promise<IntegrationServiceDashboardDataSourceEntity>;
}
export { IntegrationServiceDashboardDataSourceEntity };
