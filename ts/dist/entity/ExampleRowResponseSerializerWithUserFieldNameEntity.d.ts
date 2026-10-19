import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { ExampleRowResponseSerializerWithUserFieldName, ExampleRowResponseSerializerWithUserFieldNameLoadMatch, ExampleRowResponseSerializerWithUserFieldNameListMatch, ExampleRowResponseSerializerWithUserFieldNameCreateData, ExampleRowResponseSerializerWithUserFieldNameUpdateData } from '../BaserowTypes';
declare class ExampleRowResponseSerializerWithUserFieldNameEntity extends BaserowEntityBase<ExampleRowResponseSerializerWithUserFieldName> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ExampleRowResponseSerializerWithUserFieldNameEntity): ExampleRowResponseSerializerWithUserFieldNameEntity;
    load(this: any, reqmatch?: ExampleRowResponseSerializerWithUserFieldNameLoadMatch, ctrl?: Control): Promise<ExampleRowResponseSerializerWithUserFieldNameEntity>;
    list(this: any, reqmatch?: ExampleRowResponseSerializerWithUserFieldNameListMatch, ctrl?: Control): Promise<ExampleRowResponseSerializerWithUserFieldNameEntity[]>;
    create(this: any, reqdata?: ExampleRowResponseSerializerWithUserFieldNameCreateData, ctrl?: Control): Promise<ExampleRowResponseSerializerWithUserFieldNameEntity>;
    update(this: any, reqdata?: ExampleRowResponseSerializerWithUserFieldNameUpdateData, ctrl?: Control): Promise<ExampleRowResponseSerializerWithUserFieldNameEntity>;
}
export { ExampleRowResponseSerializerWithUserFieldNameEntity };
