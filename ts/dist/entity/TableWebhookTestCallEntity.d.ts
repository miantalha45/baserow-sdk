import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { TableWebhookTestCall, TableWebhookTestCallCreateData } from '../BaserowTypes';
declare class TableWebhookTestCallEntity extends BaserowEntityBase<TableWebhookTestCall> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: TableWebhookTestCallEntity): TableWebhookTestCallEntity;
    create(this: any, reqdata?: TableWebhookTestCallCreateData, ctrl?: Control): Promise<TableWebhookTestCallEntity>;
}
export { TableWebhookTestCallEntity };
