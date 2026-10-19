import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Domain, DomainListMatch, DomainCreateData, DomainUpdateData } from '../BaserowTypes';
declare class DomainEntity extends BaserowEntityBase<Domain> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: DomainEntity): DomainEntity;
    list(this: any, reqmatch?: DomainListMatch, ctrl?: Control): Promise<DomainEntity[]>;
    create(this: any, reqdata?: DomainCreateData, ctrl?: Control): Promise<DomainEntity>;
    update(this: any, reqdata?: DomainUpdateData, ctrl?: Control): Promise<DomainEntity>;
}
export { DomainEntity };
