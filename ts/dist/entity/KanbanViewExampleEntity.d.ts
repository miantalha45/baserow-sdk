import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { KanbanViewExample, KanbanViewExampleListMatch } from '../BaserowTypes';
declare class KanbanViewExampleEntity extends BaserowEntityBase<KanbanViewExample> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: KanbanViewExampleEntity): KanbanViewExampleEntity;
    list(this: any, reqmatch?: KanbanViewExampleListMatch, ctrl?: Control): Promise<KanbanViewExampleEntity[]>;
}
export { KanbanViewExampleEntity };
