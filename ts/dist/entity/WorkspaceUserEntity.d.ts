import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { WorkspaceUser, WorkspaceUserUpdateData } from '../BaserowTypes';
declare class WorkspaceUserEntity extends BaserowEntityBase<WorkspaceUser> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: WorkspaceUserEntity): WorkspaceUserEntity;
    update(this: any, reqdata?: WorkspaceUserUpdateData, ctrl?: Control): Promise<WorkspaceUserEntity>;
}
export { WorkspaceUserEntity };
