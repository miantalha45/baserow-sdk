import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { FieldPermissionSubjectOption, FieldPermissionSubjectOptionListMatch } from '../BaserowTypes';
declare class FieldPermissionSubjectOptionEntity extends BaserowEntityBase<FieldPermissionSubjectOption> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: FieldPermissionSubjectOptionEntity): FieldPermissionSubjectOptionEntity;
    list(this: any, reqmatch?: FieldPermissionSubjectOptionListMatch, ctrl?: Control): Promise<FieldPermissionSubjectOptionEntity[]>;
}
export { FieldPermissionSubjectOptionEntity };
