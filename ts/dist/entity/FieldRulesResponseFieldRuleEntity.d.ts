import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { FieldRulesResponseFieldRule, FieldRulesResponseFieldRuleUpdateData } from '../BaserowTypes';
declare class FieldRulesResponseFieldRuleEntity extends BaserowEntityBase<FieldRulesResponseFieldRule> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: FieldRulesResponseFieldRuleEntity): FieldRulesResponseFieldRuleEntity;
    update(this: any, reqdata?: FieldRulesResponseFieldRuleUpdateData, ctrl?: Control): Promise<FieldRulesResponseFieldRuleEntity>;
}
export { FieldRulesResponseFieldRuleEntity };
