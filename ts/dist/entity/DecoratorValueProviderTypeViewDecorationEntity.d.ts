import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { DecoratorValueProviderTypeViewDecoration, DecoratorValueProviderTypeViewDecorationLoadMatch, DecoratorValueProviderTypeViewDecorationListMatch, DecoratorValueProviderTypeViewDecorationCreateData, DecoratorValueProviderTypeViewDecorationUpdateData } from '../BaserowTypes';
declare class DecoratorValueProviderTypeViewDecorationEntity extends BaserowEntityBase<DecoratorValueProviderTypeViewDecoration> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: DecoratorValueProviderTypeViewDecorationEntity): DecoratorValueProviderTypeViewDecorationEntity;
    load(this: any, reqmatch?: DecoratorValueProviderTypeViewDecorationLoadMatch, ctrl?: Control): Promise<DecoratorValueProviderTypeViewDecorationEntity>;
    list(this: any, reqmatch?: DecoratorValueProviderTypeViewDecorationListMatch, ctrl?: Control): Promise<DecoratorValueProviderTypeViewDecorationEntity[]>;
    create(this: any, reqdata?: DecoratorValueProviderTypeViewDecorationCreateData, ctrl?: Control): Promise<DecoratorValueProviderTypeViewDecorationEntity>;
    update(this: any, reqdata?: DecoratorValueProviderTypeViewDecorationUpdateData, ctrl?: Control): Promise<DecoratorValueProviderTypeViewDecorationEntity>;
}
export { DecoratorValueProviderTypeViewDecorationEntity };
