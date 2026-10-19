import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { ViewFieldOption, ViewFieldOptionLoadMatch, ViewFieldOptionUpdateData } from '../BaserowTypes';
declare class ViewFieldOptionEntity extends BaserowEntityBase<ViewFieldOption> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ViewFieldOptionEntity): ViewFieldOptionEntity;
    load(this: any, reqmatch?: ViewFieldOptionLoadMatch, ctrl?: Control): Promise<ViewFieldOptionEntity>;
    update(this: any, reqdata?: ViewFieldOptionUpdateData, ctrl?: Control): Promise<ViewFieldOptionEntity>;
}
export { ViewFieldOptionEntity };
