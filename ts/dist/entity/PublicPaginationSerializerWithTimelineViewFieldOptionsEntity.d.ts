import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { PublicPaginationSerializerWithTimelineViewFieldOptions, PublicPaginationSerializerWithTimelineViewFieldOptionsListMatch } from '../BaserowTypes';
declare class PublicPaginationSerializerWithTimelineViewFieldOptionsEntity extends BaserowEntityBase<PublicPaginationSerializerWithTimelineViewFieldOptions> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: PublicPaginationSerializerWithTimelineViewFieldOptionsEntity): PublicPaginationSerializerWithTimelineViewFieldOptionsEntity;
    list(this: any, reqmatch?: PublicPaginationSerializerWithTimelineViewFieldOptionsListMatch, ctrl?: Control): Promise<PublicPaginationSerializerWithTimelineViewFieldOptionsEntity[]>;
}
export { PublicPaginationSerializerWithTimelineViewFieldOptionsEntity };
