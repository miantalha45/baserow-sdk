import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { FieldRule, FieldRuleLoadMatch, FieldRuleCreateData, FieldRuleRemoveMatch } from '../BaserowTypes';
declare class FieldRuleEntity extends BaserowEntityBase<FieldRule> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: FieldRuleEntity): FieldRuleEntity;
    load(this: any, reqmatch?: FieldRuleLoadMatch, ctrl?: Control): Promise<FieldRuleEntity>;
    create(this: any, reqdata?: FieldRuleCreateData, ctrl?: Control): Promise<FieldRuleEntity>;
    remove(this: any, reqmatch?: FieldRuleRemoveMatch, ctrl?: Control): Promise<FieldRuleEntity>;
}
export { FieldRuleEntity };
