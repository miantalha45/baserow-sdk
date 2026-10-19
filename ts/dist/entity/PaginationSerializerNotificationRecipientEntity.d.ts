import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { PaginationSerializerNotificationRecipient, PaginationSerializerNotificationRecipientLoadMatch } from '../BaserowTypes';
declare class PaginationSerializerNotificationRecipientEntity extends BaserowEntityBase<PaginationSerializerNotificationRecipient> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: PaginationSerializerNotificationRecipientEntity): PaginationSerializerNotificationRecipientEntity;
    load(this: any, reqmatch?: PaginationSerializerNotificationRecipientLoadMatch, ctrl?: Control): Promise<PaginationSerializerNotificationRecipientEntity>;
}
export { PaginationSerializerNotificationRecipientEntity };
