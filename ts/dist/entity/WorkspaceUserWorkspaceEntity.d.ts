import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { WorkspaceUserWorkspace, WorkspaceUserWorkspaceCreateData } from '../BaserowTypes';
declare class WorkspaceUserWorkspaceEntity extends BaserowEntityBase<WorkspaceUserWorkspace> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: WorkspaceUserWorkspaceEntity): WorkspaceUserWorkspaceEntity;
    create(this: any, reqdata?: WorkspaceUserWorkspaceCreateData, ctrl?: Control): Promise<WorkspaceUserWorkspaceEntity>;
}
export { WorkspaceUserWorkspaceEntity };
