import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { PublicPaginationSerializerWithGalleryViewFieldOptions, PublicPaginationSerializerWithGalleryViewFieldOptionsListMatch } from '../BaserowTypes';
declare class PublicPaginationSerializerWithGalleryViewFieldOptionsEntity extends BaserowEntityBase<PublicPaginationSerializerWithGalleryViewFieldOptions> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: PublicPaginationSerializerWithGalleryViewFieldOptionsEntity): PublicPaginationSerializerWithGalleryViewFieldOptionsEntity;
    list(this: any, reqmatch?: PublicPaginationSerializerWithGalleryViewFieldOptionsListMatch, ctrl?: Control): Promise<PublicPaginationSerializerWithGalleryViewFieldOptionsEntity[]>;
}
export { PublicPaginationSerializerWithGalleryViewFieldOptionsEntity };
