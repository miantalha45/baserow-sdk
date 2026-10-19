import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { ViewFilterGroup, ViewFilterGroupLoadMatch, ViewFilterGroupCreateData, ViewFilterGroupUpdateData } from '../BaserowTypes';
declare class ViewFilterGroupEntity extends BaserowEntityBase<ViewFilterGroup> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ViewFilterGroupEntity): ViewFilterGroupEntity;
    load(this: any, reqmatch?: ViewFilterGroupLoadMatch, ctrl?: Control): Promise<ViewFilterGroupEntity>;
    create(this: any, reqdata?: ViewFilterGroupCreateData, ctrl?: Control): Promise<ViewFilterGroupEntity>;
    update(this: any, reqdata?: ViewFilterGroupUpdateData, ctrl?: Control): Promise<ViewFilterGroupEntity>;
}
export { ViewFilterGroupEntity };
