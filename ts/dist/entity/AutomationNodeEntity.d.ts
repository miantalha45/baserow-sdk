import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AutomationNode, AutomationNodeRemoveMatch } from '../BaserowTypes';
declare class AutomationNodeEntity extends BaserowEntityBase<AutomationNode> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AutomationNodeEntity): AutomationNodeEntity;
    remove(this: any, reqmatch?: AutomationNodeRemoveMatch, ctrl?: Control): Promise<AutomationNodeEntity>;
}
export { AutomationNodeEntity };
