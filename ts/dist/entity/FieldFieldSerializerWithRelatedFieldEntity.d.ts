import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { FieldFieldSerializerWithRelatedField, FieldFieldSerializerWithRelatedFieldCreateData } from '../BaserowTypes';
declare class FieldFieldSerializerWithRelatedFieldEntity extends BaserowEntityBase<FieldFieldSerializerWithRelatedField> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: FieldFieldSerializerWithRelatedFieldEntity): FieldFieldSerializerWithRelatedFieldEntity;
    create(this: any, reqdata?: FieldFieldSerializerWithRelatedFieldCreateData, ctrl?: Control): Promise<FieldFieldSerializerWithRelatedFieldEntity>;
}
export { FieldFieldSerializerWithRelatedFieldEntity };
