import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { ExampleBatchRow, ExampleBatchRowCreateData } from '../BaserowTypes';
declare class ExampleBatchRowEntity extends BaserowEntityBase<ExampleBatchRow> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ExampleBatchRowEntity): ExampleBatchRowEntity;
    create(this: any, reqdata?: ExampleBatchRowCreateData, ctrl?: Control): Promise<ExampleBatchRowEntity>;
}
export { ExampleBatchRowEntity };
