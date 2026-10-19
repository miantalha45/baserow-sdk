import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AutomationWorkflowHistory, AutomationWorkflowHistoryListMatch, AutomationWorkflowHistoryCreateData } from '../BaserowTypes';
declare class AutomationWorkflowHistoryEntity extends BaserowEntityBase<AutomationWorkflowHistory> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AutomationWorkflowHistoryEntity): AutomationWorkflowHistoryEntity;
    list(this: any, reqmatch?: AutomationWorkflowHistoryListMatch, ctrl?: Control): Promise<AutomationWorkflowHistoryEntity[]>;
    create(this: any, reqdata?: AutomationWorkflowHistoryCreateData, ctrl?: Control): Promise<AutomationWorkflowHistoryEntity>;
}
export { AutomationWorkflowHistoryEntity };
