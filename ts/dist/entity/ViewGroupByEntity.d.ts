import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { ViewGroupBy, ViewGroupByLoadMatch, ViewGroupByListMatch, ViewGroupByCreateData, ViewGroupByUpdateData } from '../BaserowTypes';
declare class ViewGroupByEntity extends BaserowEntityBase<ViewGroupBy> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ViewGroupByEntity): ViewGroupByEntity;
    load(this: any, reqmatch?: ViewGroupByLoadMatch, ctrl?: Control): Promise<ViewGroupByEntity>;
    list(this: any, reqmatch?: ViewGroupByListMatch, ctrl?: Control): Promise<ViewGroupByEntity[]>;
    create(this: any, reqdata?: ViewGroupByCreateData, ctrl?: Control): Promise<ViewGroupByEntity>;
    update(this: any, reqdata?: ViewGroupByUpdateData, ctrl?: Control): Promise<ViewGroupByEntity>;
}
export { ViewGroupByEntity };
