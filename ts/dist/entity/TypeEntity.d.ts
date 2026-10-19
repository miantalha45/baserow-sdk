import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Type, TypeCreateData } from '../BaserowTypes';
declare class TypeEntity extends BaserowEntityBase<Type> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: TypeEntity): TypeEntity;
    create(this: any, reqdata?: TypeCreateData, ctrl?: Control): Promise<TypeEntity>;
}
export { TypeEntity };
