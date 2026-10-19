import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { BuilderDomain, BuilderDomainLoadMatch, BuilderDomainCreateData, BuilderDomainRemoveMatch } from '../BaserowTypes';
declare class BuilderDomainEntity extends BaserowEntityBase<BuilderDomain> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: BuilderDomainEntity): BuilderDomainEntity;
    load(this: any, reqmatch?: BuilderDomainLoadMatch, ctrl?: Control): Promise<BuilderDomainEntity>;
    create(this: any, reqdata?: BuilderDomainCreateData, ctrl?: Control): Promise<BuilderDomainEntity>;
    remove(this: any, reqmatch?: BuilderDomainRemoveMatch, ctrl?: Control): Promise<BuilderDomainEntity>;
}
export { BuilderDomainEntity };
