import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { ListDataSyncProperty, ListDataSyncPropertyListMatch, ListDataSyncPropertyCreateData } from '../BaserowTypes';
declare class ListDataSyncPropertyEntity extends BaserowEntityBase<ListDataSyncProperty> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ListDataSyncPropertyEntity): ListDataSyncPropertyEntity;
    list(this: any, reqmatch?: ListDataSyncPropertyListMatch, ctrl?: Control): Promise<ListDataSyncPropertyEntity[]>;
    create(this: any, reqdata?: ListDataSyncPropertyCreateData, ctrl?: Control): Promise<ListDataSyncPropertyEntity>;
}
export { ListDataSyncPropertyEntity };
