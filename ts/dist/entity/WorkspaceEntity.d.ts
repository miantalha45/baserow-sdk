import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Workspace, WorkspaceLoadMatch, WorkspaceListMatch, WorkspaceCreateData, WorkspaceUpdateData, WorkspaceRemoveMatch } from '../BaserowTypes';
declare class WorkspaceEntity extends BaserowEntityBase<Workspace> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: WorkspaceEntity): WorkspaceEntity;
    load(this: any, reqmatch?: WorkspaceLoadMatch, ctrl?: Control): Promise<WorkspaceEntity>;
    list(this: any, reqmatch?: WorkspaceListMatch, ctrl?: Control): Promise<WorkspaceEntity[]>;
    create(this: any, reqdata?: WorkspaceCreateData, ctrl?: Control): Promise<WorkspaceEntity>;
    update(this: any, reqdata?: WorkspaceUpdateData, ctrl?: Control): Promise<WorkspaceEntity>;
    remove(this: any, reqmatch?: WorkspaceRemoveMatch, ctrl?: Control): Promise<WorkspaceEntity>;
}
export { WorkspaceEntity };
