import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { OpenApiRoleAssignment, OpenApiRoleAssignmentLoadMatch, OpenApiRoleAssignmentCreateData } from '../BaserowTypes';
declare class OpenApiRoleAssignmentEntity extends BaserowEntityBase<OpenApiRoleAssignment> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: OpenApiRoleAssignmentEntity): OpenApiRoleAssignmentEntity;
    load(this: any, reqmatch?: OpenApiRoleAssignmentLoadMatch, ctrl?: Control): Promise<OpenApiRoleAssignmentEntity>;
    create(this: any, reqdata?: OpenApiRoleAssignmentCreateData, ctrl?: Control): Promise<OpenApiRoleAssignmentEntity>;
}
export { OpenApiRoleAssignmentEntity };
