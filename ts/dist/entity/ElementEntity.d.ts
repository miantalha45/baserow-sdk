import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Element, ElementListMatch, ElementCreateData, ElementUpdateData } from '../BaserowTypes';
declare class ElementEntity extends BaserowEntityBase<Element> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ElementEntity): ElementEntity;
    list(this: any, reqmatch?: ElementListMatch, ctrl?: Control): Promise<ElementEntity[]>;
    create(this: any, reqdata?: ElementCreateData, ctrl?: Control): Promise<ElementEntity>;
    update(this: any, reqdata?: ElementUpdateData, ctrl?: Control): Promise<ElementEntity>;
}
export { ElementEntity };
