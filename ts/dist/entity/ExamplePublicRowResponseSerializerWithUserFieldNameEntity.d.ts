import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { ExamplePublicRowResponseSerializerWithUserFieldName, ExamplePublicRowResponseSerializerWithUserFieldNameLoadMatch } from '../BaserowTypes';
declare class ExamplePublicRowResponseSerializerWithUserFieldNameEntity extends BaserowEntityBase<ExamplePublicRowResponseSerializerWithUserFieldName> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ExamplePublicRowResponseSerializerWithUserFieldNameEntity): ExamplePublicRowResponseSerializerWithUserFieldNameEntity;
    load(this: any, reqmatch?: ExamplePublicRowResponseSerializerWithUserFieldNameLoadMatch, ctrl?: Control): Promise<ExamplePublicRowResponseSerializerWithUserFieldNameEntity>;
}
export { ExamplePublicRowResponseSerializerWithUserFieldNameEntity };
