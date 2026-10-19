import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { PaginationSerializerLinkRowValue, PaginationSerializerLinkRowValueLoadMatch } from '../BaserowTypes';
declare class PaginationSerializerLinkRowValueEntity extends BaserowEntityBase<PaginationSerializerLinkRowValue> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: PaginationSerializerLinkRowValueEntity): PaginationSerializerLinkRowValueEntity;
    load(this: any, reqmatch?: PaginationSerializerLinkRowValueLoadMatch, ctrl?: Control): Promise<PaginationSerializerLinkRowValueEntity>;
}
export { PaginationSerializerLinkRowValueEntity };
