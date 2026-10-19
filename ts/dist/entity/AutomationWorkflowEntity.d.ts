import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AutomationWorkflow, AutomationWorkflowLoadMatch, AutomationWorkflowCreateData, AutomationWorkflowUpdateData, AutomationWorkflowRemoveMatch } from '../BaserowTypes';
declare class AutomationWorkflowEntity extends BaserowEntityBase<AutomationWorkflow> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AutomationWorkflowEntity): AutomationWorkflowEntity;
    load(this: any, reqmatch?: AutomationWorkflowLoadMatch, ctrl?: Control): Promise<AutomationWorkflowEntity>;
    create(this: any, reqdata?: AutomationWorkflowCreateData, ctrl?: Control): Promise<AutomationWorkflowEntity>;
    update(this: any, reqdata?: AutomationWorkflowUpdateData, ctrl?: Control): Promise<AutomationWorkflowEntity>;
    remove(this: any, reqmatch?: AutomationWorkflowRemoveMatch, ctrl?: Control): Promise<AutomationWorkflowEntity>;
}
export { AutomationWorkflowEntity };
