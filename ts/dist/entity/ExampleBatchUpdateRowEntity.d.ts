import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { ExampleBatchUpdateRow, ExampleBatchUpdateRowUpdateData } from '../BaserowTypes';
declare class ExampleBatchUpdateRowEntity extends BaserowEntityBase<ExampleBatchUpdateRow> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ExampleBatchUpdateRowEntity): ExampleBatchUpdateRowEntity;
    update(this: any, reqdata?: ExampleBatchUpdateRowUpdateData, ctrl?: Control): Promise<ExampleBatchUpdateRowEntity>;
}
export { ExampleBatchUpdateRowEntity };
