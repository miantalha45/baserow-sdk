import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { PaginationSerializerWithTimelineViewFieldOptionsExampleRow, PaginationSerializerWithTimelineViewFieldOptionsExampleRowLoadMatch } from '../BaserowTypes';
declare class PaginationSerializerWithTimelineViewFieldOptionsExampleRowEntity extends BaserowEntityBase<PaginationSerializerWithTimelineViewFieldOptionsExampleRow> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: PaginationSerializerWithTimelineViewFieldOptionsExampleRowEntity): PaginationSerializerWithTimelineViewFieldOptionsExampleRowEntity;
    load(this: any, reqmatch?: PaginationSerializerWithTimelineViewFieldOptionsExampleRowLoadMatch, ctrl?: Control): Promise<PaginationSerializerWithTimelineViewFieldOptionsExampleRowEntity>;
}
export { PaginationSerializerWithTimelineViewFieldOptionsExampleRowEntity };
