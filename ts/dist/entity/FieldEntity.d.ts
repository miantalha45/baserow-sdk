import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Field, FieldLoadMatch, FieldUpdateData } from '../BaserowTypes';
declare class FieldEntity extends BaserowEntityBase<Field> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: FieldEntity): FieldEntity;
    load(this: any, reqmatch?: FieldLoadMatch, ctrl?: Control): Promise<FieldEntity>;
    update(this: any, reqdata?: FieldUpdateData, ctrl?: Control): Promise<FieldEntity>;
}
export { FieldEntity };
