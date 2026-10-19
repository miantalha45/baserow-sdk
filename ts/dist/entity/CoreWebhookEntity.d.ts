import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { CoreWebhook, CoreWebhookLoadMatch, CoreWebhookCreateData, CoreWebhookUpdateData, CoreWebhookPatchData, CoreWebhookRemoveMatch } from '../BaserowTypes';
declare class CoreWebhookEntity extends BaserowEntityBase<CoreWebhook> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: CoreWebhookEntity): CoreWebhookEntity;
    load(this: any, reqmatch?: CoreWebhookLoadMatch, ctrl?: Control): Promise<CoreWebhookEntity>;
    create(this: any, reqdata?: CoreWebhookCreateData, ctrl?: Control): Promise<CoreWebhookEntity>;
    update(this: any, reqdata?: CoreWebhookUpdateData, ctrl?: Control): Promise<CoreWebhookEntity>;
    patch(this: any, reqdata?: CoreWebhookPatchData, ctrl?: Control): Promise<CoreWebhookEntity>;
    remove(this: any, reqmatch?: CoreWebhookRemoveMatch, ctrl?: Control): Promise<CoreWebhookEntity>;
}
export { CoreWebhookEntity };
