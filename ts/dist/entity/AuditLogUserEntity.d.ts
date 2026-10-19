import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AuditLogUser, AuditLogUserListMatch } from '../BaserowTypes';
declare class AuditLogUserEntity extends BaserowEntityBase<AuditLogUser> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AuditLogUserEntity): AuditLogUserEntity;
    list(this: any, reqmatch?: AuditLogUserListMatch, ctrl?: Control): Promise<AuditLogUserEntity[]>;
}
export { AuditLogUserEntity };
