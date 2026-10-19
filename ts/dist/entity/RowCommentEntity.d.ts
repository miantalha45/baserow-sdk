import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { RowComment, RowCommentCreateData, RowCommentUpdateData, RowCommentRemoveMatch } from '../BaserowTypes';
declare class RowCommentEntity extends BaserowEntityBase<RowComment> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: RowCommentEntity): RowCommentEntity;
    create(this: any, reqdata?: RowCommentCreateData, ctrl?: Control): Promise<RowCommentEntity>;
    update(this: any, reqdata?: RowCommentUpdateData, ctrl?: Control): Promise<RowCommentEntity>;
    remove(this: any, reqmatch?: RowCommentRemoveMatch, ctrl?: Control): Promise<RowCommentEntity>;
}
export { RowCommentEntity };
