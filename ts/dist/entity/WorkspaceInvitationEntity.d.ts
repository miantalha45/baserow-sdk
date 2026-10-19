import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { WorkspaceInvitation, WorkspaceInvitationLoadMatch, WorkspaceInvitationCreateData, WorkspaceInvitationUpdateData, WorkspaceInvitationRemoveMatch } from '../BaserowTypes';
declare class WorkspaceInvitationEntity extends BaserowEntityBase<WorkspaceInvitation> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: WorkspaceInvitationEntity): WorkspaceInvitationEntity;
    load(this: any, reqmatch?: WorkspaceInvitationLoadMatch, ctrl?: Control): Promise<WorkspaceInvitationEntity>;
    create(this: any, reqdata?: WorkspaceInvitationCreateData, ctrl?: Control): Promise<WorkspaceInvitationEntity>;
    update(this: any, reqdata?: WorkspaceInvitationUpdateData, ctrl?: Control): Promise<WorkspaceInvitationEntity>;
    remove(this: any, reqmatch?: WorkspaceInvitationRemoveMatch, ctrl?: Control): Promise<WorkspaceInvitationEntity>;
}
export { WorkspaceInvitationEntity };
