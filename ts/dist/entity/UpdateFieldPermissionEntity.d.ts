import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { UpdateFieldPermission, UpdateFieldPermissionLoadMatch, UpdateFieldPermissionUpdateData } from '../BaserowTypes';
declare class UpdateFieldPermissionEntity extends BaserowEntityBase<UpdateFieldPermission> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: UpdateFieldPermissionEntity): UpdateFieldPermissionEntity;
    load(this: any, reqmatch?: UpdateFieldPermissionLoadMatch, ctrl?: Control): Promise<UpdateFieldPermissionEntity>;
    update(this: any, reqdata?: UpdateFieldPermissionUpdateData, ctrl?: Control): Promise<UpdateFieldPermissionEntity>;
}
export { UpdateFieldPermissionEntity };
