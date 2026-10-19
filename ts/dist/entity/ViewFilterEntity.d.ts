import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { ViewFilter, ViewFilterLoadMatch, ViewFilterListMatch, ViewFilterCreateData, ViewFilterUpdateData } from '../BaserowTypes';
declare class ViewFilterEntity extends BaserowEntityBase<ViewFilter> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ViewFilterEntity): ViewFilterEntity;
    load(this: any, reqmatch?: ViewFilterLoadMatch, ctrl?: Control): Promise<ViewFilterEntity>;
    list(this: any, reqmatch?: ViewFilterListMatch, ctrl?: Control): Promise<ViewFilterEntity[]>;
    create(this: any, reqdata?: ViewFilterCreateData, ctrl?: Control): Promise<ViewFilterEntity>;
    update(this: any, reqdata?: ViewFilterUpdateData, ctrl?: Control): Promise<ViewFilterEntity>;
}
export { ViewFilterEntity };
