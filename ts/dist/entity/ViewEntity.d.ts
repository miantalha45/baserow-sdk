import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { View, ViewLoadMatch, ViewUpdateData } from '../BaserowTypes';
declare class ViewEntity extends BaserowEntityBase<View> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ViewEntity): ViewEntity;
    load(this: any, reqmatch?: ViewLoadMatch, ctrl?: Control): Promise<ViewEntity>;
    update(this: any, reqdata?: ViewUpdateData, ctrl?: Control): Promise<ViewEntity>;
}
export { ViewEntity };
