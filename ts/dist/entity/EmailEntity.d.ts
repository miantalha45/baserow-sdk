import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Email, EmailCreateData } from '../BaserowTypes';
declare class EmailEntity extends BaserowEntityBase<Email> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: EmailEntity): EmailEntity;
    create(this: any, reqdata?: EmailCreateData, ctrl?: Control): Promise<EmailEntity>;
}
export { EmailEntity };
