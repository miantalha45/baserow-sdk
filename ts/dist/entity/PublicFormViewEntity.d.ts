import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { PublicFormView, PublicFormViewListMatch } from '../BaserowTypes';
declare class PublicFormViewEntity extends BaserowEntityBase<PublicFormView> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: PublicFormViewEntity): PublicFormViewEntity;
    list(this: any, reqmatch?: PublicFormViewListMatch, ctrl?: Control): Promise<PublicFormViewEntity[]>;
}
export { PublicFormViewEntity };
