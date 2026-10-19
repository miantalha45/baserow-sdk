import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Permission, PermissionListMatch } from '../BaserowTypes';
declare class PermissionEntity extends BaserowEntityBase<Permission> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: PermissionEntity): PermissionEntity;
    list(this: any, reqmatch?: PermissionListMatch, ctrl?: Control): Promise<PermissionEntity[]>;
}
export { PermissionEntity };
