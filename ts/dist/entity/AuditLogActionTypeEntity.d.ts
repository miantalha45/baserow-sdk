import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AuditLogActionType, AuditLogActionTypeListMatch } from '../BaserowTypes';
declare class AuditLogActionTypeEntity extends BaserowEntityBase<AuditLogActionType> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AuditLogActionTypeEntity): AuditLogActionTypeEntity;
    list(this: any, reqmatch?: AuditLogActionTypeListMatch, ctrl?: Control): Promise<AuditLogActionTypeEntity[]>;
}
export { AuditLogActionTypeEntity };
