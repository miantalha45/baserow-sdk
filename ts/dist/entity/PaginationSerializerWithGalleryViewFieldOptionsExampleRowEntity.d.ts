import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { PaginationSerializerWithGalleryViewFieldOptionsExampleRow, PaginationSerializerWithGalleryViewFieldOptionsExampleRowLoadMatch } from '../BaserowTypes';
declare class PaginationSerializerWithGalleryViewFieldOptionsExampleRowEntity extends BaserowEntityBase<PaginationSerializerWithGalleryViewFieldOptionsExampleRow> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: PaginationSerializerWithGalleryViewFieldOptionsExampleRowEntity): PaginationSerializerWithGalleryViewFieldOptionsExampleRowEntity;
    load(this: any, reqmatch?: PaginationSerializerWithGalleryViewFieldOptionsExampleRowLoadMatch, ctrl?: Control): Promise<PaginationSerializerWithGalleryViewFieldOptionsExampleRowEntity>;
}
export { PaginationSerializerWithGalleryViewFieldOptionsExampleRowEntity };
