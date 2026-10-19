import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { FieldField, FieldFieldLoadMatch, FieldFieldCreateData } from '../BaserowTypes';
declare class FieldFieldEntity extends BaserowEntityBase<FieldField> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: FieldFieldEntity): FieldFieldEntity;
    load(this: any, reqmatch?: FieldFieldLoadMatch, ctrl?: Control): Promise<FieldFieldEntity>;
    create(this: any, reqdata?: FieldFieldCreateData, ctrl?: Control): Promise<FieldFieldEntity>;
}
export { FieldFieldEntity };
