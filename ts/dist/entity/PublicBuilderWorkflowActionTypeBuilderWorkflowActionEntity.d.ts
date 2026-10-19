import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { PublicBuilderWorkflowActionTypeBuilderWorkflowAction, PublicBuilderWorkflowActionTypeBuilderWorkflowActionListMatch } from '../BaserowTypes';
declare class PublicBuilderWorkflowActionTypeBuilderWorkflowActionEntity extends BaserowEntityBase<PublicBuilderWorkflowActionTypeBuilderWorkflowAction> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: PublicBuilderWorkflowActionTypeBuilderWorkflowActionEntity): PublicBuilderWorkflowActionTypeBuilderWorkflowActionEntity;
    list(this: any, reqmatch?: PublicBuilderWorkflowActionTypeBuilderWorkflowActionListMatch, ctrl?: Control): Promise<PublicBuilderWorkflowActionTypeBuilderWorkflowActionEntity[]>;
}
export { PublicBuilderWorkflowActionTypeBuilderWorkflowActionEntity };
