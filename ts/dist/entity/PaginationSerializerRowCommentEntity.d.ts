import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { PaginationSerializerRowComment, PaginationSerializerRowCommentLoadMatch } from '../BaserowTypes';
declare class PaginationSerializerRowCommentEntity extends BaserowEntityBase<PaginationSerializerRowComment> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: PaginationSerializerRowCommentEntity): PaginationSerializerRowCommentEntity;
    load(this: any, reqmatch?: PaginationSerializerRowCommentLoadMatch, ctrl?: Control): Promise<PaginationSerializerRowCommentEntity>;
}
export { PaginationSerializerRowCommentEntity };
