import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { FormViewSubmitted, FormViewSubmittedCreateData, FormViewSubmittedUpdateData } from '../BaserowTypes';
declare class FormViewSubmittedEntity extends BaserowEntityBase<FormViewSubmitted> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: FormViewSubmittedEntity): FormViewSubmittedEntity;
    create(this: any, reqdata?: FormViewSubmittedCreateData, ctrl?: Control): Promise<FormViewSubmittedEntity>;
    update(this: any, reqdata?: FormViewSubmittedUpdateData, ctrl?: Control): Promise<FormViewSubmittedEntity>;
}
export { FormViewSubmittedEntity };
