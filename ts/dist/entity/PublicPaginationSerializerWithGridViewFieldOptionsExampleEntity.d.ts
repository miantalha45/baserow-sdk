import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { PublicPaginationSerializerWithGridViewFieldOptionsExample, PublicPaginationSerializerWithGridViewFieldOptionsExampleListMatch } from '../BaserowTypes';
declare class PublicPaginationSerializerWithGridViewFieldOptionsExampleEntity extends BaserowEntityBase<PublicPaginationSerializerWithGridViewFieldOptionsExample> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: PublicPaginationSerializerWithGridViewFieldOptionsExampleEntity): PublicPaginationSerializerWithGridViewFieldOptionsExampleEntity;
    list(this: any, reqmatch?: PublicPaginationSerializerWithGridViewFieldOptionsExampleListMatch, ctrl?: Control): Promise<PublicPaginationSerializerWithGridViewFieldOptionsExampleEntity[]>;
}
export { PublicPaginationSerializerWithGridViewFieldOptionsExampleEntity };
