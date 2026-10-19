import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { PaginationSerializerTrashContent, PaginationSerializerTrashContentLoadMatch } from '../BaserowTypes';
declare class PaginationSerializerTrashContentEntity extends BaserowEntityBase<PaginationSerializerTrashContent> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: PaginationSerializerTrashContentEntity): PaginationSerializerTrashContentEntity;
    load(this: any, reqmatch?: PaginationSerializerTrashContentLoadMatch, ctrl?: Control): Promise<PaginationSerializerTrashContentEntity>;
}
export { PaginationSerializerTrashContentEntity };
