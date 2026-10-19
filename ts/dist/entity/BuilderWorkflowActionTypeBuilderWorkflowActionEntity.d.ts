import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { BuilderWorkflowActionTypeBuilderWorkflowAction, BuilderWorkflowActionTypeBuilderWorkflowActionListMatch, BuilderWorkflowActionTypeBuilderWorkflowActionCreateData, BuilderWorkflowActionTypeBuilderWorkflowActionUpdateData } from '../BaserowTypes';
declare class BuilderWorkflowActionTypeBuilderWorkflowActionEntity extends BaserowEntityBase<BuilderWorkflowActionTypeBuilderWorkflowAction> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: BuilderWorkflowActionTypeBuilderWorkflowActionEntity): BuilderWorkflowActionTypeBuilderWorkflowActionEntity;
    list(this: any, reqmatch?: BuilderWorkflowActionTypeBuilderWorkflowActionListMatch, ctrl?: Control): Promise<BuilderWorkflowActionTypeBuilderWorkflowActionEntity[]>;
    create(this: any, reqdata?: BuilderWorkflowActionTypeBuilderWorkflowActionCreateData, ctrl?: Control): Promise<BuilderWorkflowActionTypeBuilderWorkflowActionEntity>;
    update(this: any, reqdata?: BuilderWorkflowActionTypeBuilderWorkflowActionUpdateData, ctrl?: Control): Promise<BuilderWorkflowActionTypeBuilderWorkflowActionEntity>;
}
export { BuilderWorkflowActionTypeBuilderWorkflowActionEntity };
