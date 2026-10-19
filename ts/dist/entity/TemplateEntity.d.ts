import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Template, TemplateListMatch, TemplateCreateData } from '../BaserowTypes';
declare class TemplateEntity extends BaserowEntityBase<Template> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: TemplateEntity): TemplateEntity;
    list(this: any, reqmatch?: TemplateListMatch, ctrl?: Control): Promise<TemplateEntity[]>;
    create(this: any, reqdata?: TemplateCreateData, ctrl?: Control): Promise<TemplateEntity>;
}
export { TemplateEntity };
