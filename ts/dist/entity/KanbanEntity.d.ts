import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Kanban, KanbanLoadMatch } from '../BaserowTypes';
declare class KanbanEntity extends BaserowEntityBase<Kanban> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: KanbanEntity): KanbanEntity;
    load(this: any, reqmatch?: KanbanLoadMatch, ctrl?: Control): Promise<KanbanEntity>;
}
export { KanbanEntity };
