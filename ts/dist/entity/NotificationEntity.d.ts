import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Notification, NotificationCreateData, NotificationUpdateData, NotificationRemoveMatch } from '../BaserowTypes';
declare class NotificationEntity extends BaserowEntityBase<Notification> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: NotificationEntity): NotificationEntity;
    create(this: any, reqdata?: NotificationCreateData, ctrl?: Control): Promise<NotificationEntity>;
    update(this: any, reqdata?: NotificationUpdateData, ctrl?: Control): Promise<NotificationEntity>;
    remove(this: any, reqmatch?: NotificationRemoveMatch, ctrl?: Control): Promise<NotificationEntity>;
}
export { NotificationEntity };
