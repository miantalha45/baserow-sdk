import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { UserWorkspaceInvitation, UserWorkspaceInvitationLoadMatch } from '../BaserowTypes';
declare class UserWorkspaceInvitationEntity extends BaserowEntityBase<UserWorkspaceInvitation> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: UserWorkspaceInvitationEntity): UserWorkspaceInvitationEntity;
    load(this: any, reqmatch?: UserWorkspaceInvitationLoadMatch, ctrl?: Control): Promise<UserWorkspaceInvitationEntity>;
}
export { UserWorkspaceInvitationEntity };
