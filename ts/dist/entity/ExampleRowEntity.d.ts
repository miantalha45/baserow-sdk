import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { ExampleRow, ExampleRowLoadMatch, ExampleRowCreateData } from '../BaserowTypes';
declare class ExampleRowEntity extends BaserowEntityBase<ExampleRow> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ExampleRowEntity): ExampleRowEntity;
    load(this: any, reqmatch?: ExampleRowLoadMatch, ctrl?: Control): Promise<ExampleRowEntity>;
    create(this: any, reqdata?: ExampleRowCreateData, ctrl?: Control): Promise<ExampleRowEntity>;
}
export { ExampleRowEntity };
