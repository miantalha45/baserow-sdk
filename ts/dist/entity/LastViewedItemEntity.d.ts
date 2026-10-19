import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { LastViewedItem, LastViewedItemListMatch } from '../BaserowTypes';
declare class LastViewedItemEntity extends BaserowEntityBase<LastViewedItem> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: LastViewedItemEntity): LastViewedItemEntity;
    list(this: any, reqmatch?: LastViewedItemListMatch, ctrl?: Control): Promise<LastViewedItemEntity[]>;
}
export { LastViewedItemEntity };
