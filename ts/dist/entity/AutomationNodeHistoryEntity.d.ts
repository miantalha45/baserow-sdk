import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AutomationNodeHistory, AutomationNodeHistoryListMatch } from '../BaserowTypes';
declare class AutomationNodeHistoryEntity extends BaserowEntityBase<AutomationNodeHistory> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AutomationNodeHistoryEntity): AutomationNodeHistoryEntity;
    list(this: any, reqmatch?: AutomationNodeHistoryListMatch, ctrl?: Control): Promise<AutomationNodeHistoryEntity[]>;
}
export { AutomationNodeHistoryEntity };
