import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { RelatedField, RelatedFieldRemoveMatch } from '../BaserowTypes';
declare class RelatedFieldEntity extends BaserowEntityBase<RelatedField> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: RelatedFieldEntity): RelatedFieldEntity;
    remove(this: any, reqmatch?: RelatedFieldRemoveMatch, ctrl?: Control): Promise<RelatedFieldEntity>;
}
export { RelatedFieldEntity };
