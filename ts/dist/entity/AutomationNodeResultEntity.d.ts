import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AutomationNodeResult, AutomationNodeResultLoadMatch } from '../BaserowTypes';
declare class AutomationNodeResultEntity extends BaserowEntityBase<AutomationNodeResult> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AutomationNodeResultEntity): AutomationNodeResultEntity;
    load(this: any, reqmatch?: AutomationNodeResultLoadMatch, ctrl?: Control): Promise<AutomationNodeResultEntity>;
}
export { AutomationNodeResultEntity };
