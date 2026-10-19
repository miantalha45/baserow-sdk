import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AdminWorkspaceOption, AdminWorkspaceOptionListMatch } from '../BaserowTypes';
declare class AdminWorkspaceOptionEntity extends BaserowEntityBase<AdminWorkspaceOption> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AdminWorkspaceOptionEntity): AdminWorkspaceOptionEntity;
    list(this: any, reqmatch?: AdminWorkspaceOptionListMatch, ctrl?: Control): Promise<AdminWorkspaceOptionEntity[]>;
}
export { AdminWorkspaceOptionEntity };
