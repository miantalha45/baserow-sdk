import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AuditLog, AuditLogListMatch, AuditLogCreateData } from '../BaserowTypes';
declare class AuditLogEntity extends BaserowEntityBase<AuditLog> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AuditLogEntity): AuditLogEntity;
    list(this: any, reqmatch?: AuditLogListMatch, ctrl?: Control): Promise<AuditLogEntity[]>;
    create(this: any, reqdata?: AuditLogCreateData, ctrl?: Control): Promise<AuditLogEntity>;
}
export { AuditLogEntity };
