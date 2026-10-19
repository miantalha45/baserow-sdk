import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { DatabaseTableWebhook, DatabaseTableWebhookRemoveMatch } from '../BaserowTypes';
declare class DatabaseTableWebhookEntity extends BaserowEntityBase<DatabaseTableWebhook> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: DatabaseTableWebhookEntity): DatabaseTableWebhookEntity;
    remove(this: any, reqmatch?: DatabaseTableWebhookRemoveMatch, ctrl?: Control): Promise<DatabaseTableWebhookEntity>;
}
export { DatabaseTableWebhookEntity };
