import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { IntegrationServiceDataSource, IntegrationServiceDataSourceListMatch, IntegrationServiceDataSourceCreateData, IntegrationServiceDataSourceUpdateData } from '../BaserowTypes';
declare class IntegrationServiceDataSourceEntity extends BaserowEntityBase<IntegrationServiceDataSource> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: IntegrationServiceDataSourceEntity): IntegrationServiceDataSourceEntity;
    list(this: any, reqmatch?: IntegrationServiceDataSourceListMatch, ctrl?: Control): Promise<IntegrationServiceDataSourceEntity[]>;
    create(this: any, reqdata?: IntegrationServiceDataSourceCreateData, ctrl?: Control): Promise<IntegrationServiceDataSourceEntity>;
    update(this: any, reqdata?: IntegrationServiceDataSourceUpdateData, ctrl?: Control): Promise<IntegrationServiceDataSourceEntity>;
}
export { IntegrationServiceDataSourceEntity };
