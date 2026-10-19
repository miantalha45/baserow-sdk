import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { ElementTypeElement, ElementTypeElementUpdateData } from '../BaserowTypes';
declare class ElementTypeElementEntity extends BaserowEntityBase<ElementTypeElement> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ElementTypeElementEntity): ElementTypeElementEntity;
    update(this: any, reqdata?: ElementTypeElementUpdateData, ctrl?: Control): Promise<ElementTypeElementEntity>;
}
export { ElementTypeElementEntity };
