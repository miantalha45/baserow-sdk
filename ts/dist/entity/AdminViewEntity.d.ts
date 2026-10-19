import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AdminView, AdminViewListMatch, AdminViewCreateData, AdminViewUpdateData } from '../BaserowTypes';
declare class AdminViewEntity extends BaserowEntityBase<AdminView> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AdminViewEntity): AdminViewEntity;
    list(this: any, reqmatch?: AdminViewListMatch, ctrl?: Control): Promise<AdminViewEntity[]>;
    create(this: any, reqdata?: AdminViewCreateData, ctrl?: Control): Promise<AdminViewEntity>;
    update(this: any, reqdata?: AdminViewUpdateData, ctrl?: Control): Promise<AdminViewEntity>;
}
export { AdminViewEntity };
