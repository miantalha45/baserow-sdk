import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AutomationNodeTypeAutomationNode, AutomationNodeTypeAutomationNodeListMatch, AutomationNodeTypeAutomationNodeCreateData, AutomationNodeTypeAutomationNodeUpdateData } from '../BaserowTypes';
declare class AutomationNodeTypeAutomationNodeEntity extends BaserowEntityBase<AutomationNodeTypeAutomationNode> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AutomationNodeTypeAutomationNodeEntity): AutomationNodeTypeAutomationNodeEntity;
    list(this: any, reqmatch?: AutomationNodeTypeAutomationNodeListMatch, ctrl?: Control): Promise<AutomationNodeTypeAutomationNodeEntity[]>;
    create(this: any, reqdata?: AutomationNodeTypeAutomationNodeCreateData, ctrl?: Control): Promise<AutomationNodeTypeAutomationNodeEntity>;
    update(this: any, reqdata?: AutomationNodeTypeAutomationNodeUpdateData, ctrl?: Control): Promise<AutomationNodeTypeAutomationNodeEntity>;
}
export { AutomationNodeTypeAutomationNodeEntity };
