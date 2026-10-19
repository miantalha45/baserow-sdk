import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { IntegrationServicePublicDataSource, IntegrationServicePublicDataSourceListMatch } from '../BaserowTypes';
declare class IntegrationServicePublicDataSourceEntity extends BaserowEntityBase<IntegrationServicePublicDataSource> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: IntegrationServicePublicDataSourceEntity): IntegrationServicePublicDataSourceEntity;
    list(this: any, reqmatch?: IntegrationServicePublicDataSourceListMatch, ctrl?: Control): Promise<IntegrationServicePublicDataSourceEntity[]>;
}
export { IntegrationServicePublicDataSourceEntity };
