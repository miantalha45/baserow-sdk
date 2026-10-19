import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { WorkspaceStructure, WorkspaceStructureLoadMatch } from '../BaserowTypes';
declare class WorkspaceStructureEntity extends BaserowEntityBase<WorkspaceStructure> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: WorkspaceStructureEntity): WorkspaceStructureEntity;
    load(this: any, reqmatch?: WorkspaceStructureLoadMatch, ctrl?: Control): Promise<WorkspaceStructureEntity>;
}
export { WorkspaceStructureEntity };
