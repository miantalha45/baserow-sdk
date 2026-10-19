import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { TableWebhook, TableWebhookLoadMatch, TableWebhookUpdateData } from '../BaserowTypes';
declare class TableWebhookEntity extends BaserowEntityBase<TableWebhook> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: TableWebhookEntity): TableWebhookEntity;
    load(this: any, reqmatch?: TableWebhookLoadMatch, ctrl?: Control): Promise<TableWebhookEntity>;
    update(this: any, reqdata?: TableWebhookUpdateData, ctrl?: Control): Promise<TableWebhookEntity>;
}
export { TableWebhookEntity };
