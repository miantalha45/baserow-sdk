import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Admin, AdminListMatch, AdminCreateData, AdminRemoveMatch } from '../BaserowTypes';
declare class AdminEntity extends BaserowEntityBase<Admin> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AdminEntity): AdminEntity;
    list(this: any, reqmatch?: AdminListMatch, ctrl?: Control): Promise<AdminEntity[]>;
    create(this: any, reqdata?: AdminCreateData, ctrl?: Control): Promise<AdminEntity>;
    remove(this: any, reqmatch?: AdminRemoveMatch, ctrl?: Control): Promise<AdminEntity>;
}
export { AdminEntity };
