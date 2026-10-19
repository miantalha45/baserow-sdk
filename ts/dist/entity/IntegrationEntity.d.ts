import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Integration, IntegrationListMatch, IntegrationCreateData, IntegrationUpdateData, IntegrationRemoveMatch } from '../BaserowTypes';
declare class IntegrationEntity extends BaserowEntityBase<Integration> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: IntegrationEntity): IntegrationEntity;
    list(this: any, reqmatch?: IntegrationListMatch, ctrl?: Control): Promise<IntegrationEntity[]>;
    create(this: any, reqdata?: IntegrationCreateData, ctrl?: Control): Promise<IntegrationEntity>;
    update(this: any, reqdata?: IntegrationUpdateData, ctrl?: Control): Promise<IntegrationEntity>;
    remove(this: any, reqmatch?: IntegrationRemoveMatch, ctrl?: Control): Promise<IntegrationEntity>;
}
export { IntegrationEntity };
