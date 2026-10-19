import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Duplicate, DuplicateCreateData } from '../BaserowTypes';
declare class DuplicateEntity extends BaserowEntityBase<Duplicate> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: DuplicateEntity): DuplicateEntity;
    create(this: any, reqdata?: DuplicateCreateData, ctrl?: Control): Promise<DuplicateEntity>;
}
export { DuplicateEntity };
