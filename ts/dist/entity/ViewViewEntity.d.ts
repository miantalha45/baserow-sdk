import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { ViewView, ViewViewLoadMatch, ViewViewCreateData } from '../BaserowTypes';
declare class ViewViewEntity extends BaserowEntityBase<ViewView> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ViewViewEntity): ViewViewEntity;
    load(this: any, reqmatch?: ViewViewLoadMatch, ctrl?: Control): Promise<ViewViewEntity>;
    create(this: any, reqdata?: ViewViewCreateData, ctrl?: Control): Promise<ViewViewEntity>;
}
export { ViewViewEntity };
