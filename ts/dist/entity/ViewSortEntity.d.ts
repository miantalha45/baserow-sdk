import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { ViewSort, ViewSortLoadMatch, ViewSortListMatch, ViewSortCreateData, ViewSortUpdateData } from '../BaserowTypes';
declare class ViewSortEntity extends BaserowEntityBase<ViewSort> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ViewSortEntity): ViewSortEntity;
    load(this: any, reqmatch?: ViewSortLoadMatch, ctrl?: Control): Promise<ViewSortEntity>;
    list(this: any, reqmatch?: ViewSortListMatch, ctrl?: Control): Promise<ViewSortEntity[]>;
    create(this: any, reqdata?: ViewSortCreateData, ctrl?: Control): Promise<ViewSortEntity>;
    update(this: any, reqdata?: ViewSortUpdateData, ctrl?: Control): Promise<ViewSortEntity>;
}
export { ViewSortEntity };
