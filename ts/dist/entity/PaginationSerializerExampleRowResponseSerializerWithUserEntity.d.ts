import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { PaginationSerializerExampleRowResponseSerializerWithUser, PaginationSerializerExampleRowResponseSerializerWithUserLoadMatch } from '../BaserowTypes';
declare class PaginationSerializerExampleRowResponseSerializerWithUserEntity extends BaserowEntityBase<PaginationSerializerExampleRowResponseSerializerWithUser> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: PaginationSerializerExampleRowResponseSerializerWithUserEntity): PaginationSerializerExampleRowResponseSerializerWithUserEntity;
    load(this: any, reqmatch?: PaginationSerializerExampleRowResponseSerializerWithUserLoadMatch, ctrl?: Control): Promise<PaginationSerializerExampleRowResponseSerializerWithUserEntity>;
}
export { PaginationSerializerExampleRowResponseSerializerWithUserEntity };
