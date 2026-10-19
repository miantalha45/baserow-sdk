import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AdminDashboard, AdminDashboardListMatch } from '../BaserowTypes';
declare class AdminDashboardEntity extends BaserowEntityBase<AdminDashboard> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AdminDashboardEntity): AdminDashboardEntity;
    list(this: any, reqmatch?: AdminDashboardListMatch, ctrl?: Control): Promise<AdminDashboardEntity[]>;
}
export { AdminDashboardEntity };
