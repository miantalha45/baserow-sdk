import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { PaginationSerializerWithGridViewFieldOptionsExampleRow, PaginationSerializerWithGridViewFieldOptionsExampleRowLoadMatch } from '../BaserowTypes';
declare class PaginationSerializerWithGridViewFieldOptionsExampleRowEntity extends BaserowEntityBase<PaginationSerializerWithGridViewFieldOptionsExampleRow> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: PaginationSerializerWithGridViewFieldOptionsExampleRowEntity): PaginationSerializerWithGridViewFieldOptionsExampleRowEntity;
    load(this: any, reqmatch?: PaginationSerializerWithGridViewFieldOptionsExampleRowLoadMatch, ctrl?: Control): Promise<PaginationSerializerWithGridViewFieldOptionsExampleRowEntity>;
}
export { PaginationSerializerWithGridViewFieldOptionsExampleRowEntity };
