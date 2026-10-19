import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { BuilderWorkflowAction, BuilderWorkflowActionCreateData, BuilderWorkflowActionRemoveMatch } from '../BaserowTypes';
declare class BuilderWorkflowActionEntity extends BaserowEntityBase<BuilderWorkflowAction> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: BuilderWorkflowActionEntity): BuilderWorkflowActionEntity;
    create(this: any, reqdata?: BuilderWorkflowActionCreateData, ctrl?: Control): Promise<BuilderWorkflowActionEntity>;
    remove(this: any, reqmatch?: BuilderWorkflowActionRemoveMatch, ctrl?: Control): Promise<BuilderWorkflowActionEntity>;
}
export { BuilderWorkflowActionEntity };
