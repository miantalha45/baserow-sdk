import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { IntegrationIntegration, IntegrationIntegrationUpdateData } from '../BaserowTypes';
declare class IntegrationIntegrationEntity extends BaserowEntityBase<IntegrationIntegration> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: IntegrationIntegrationEntity): IntegrationIntegrationEntity;
    update(this: any, reqdata?: IntegrationIntegrationUpdateData, ctrl?: Control): Promise<IntegrationIntegrationEntity>;
}
export { IntegrationIntegrationEntity };
