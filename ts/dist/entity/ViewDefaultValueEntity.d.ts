import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { ViewDefaultValue, ViewDefaultValueUpdateData } from '../BaserowTypes';
declare class ViewDefaultValueEntity extends BaserowEntityBase<ViewDefaultValue> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ViewDefaultValueEntity): ViewDefaultValueEntity;
    update(this: any, reqdata?: ViewDefaultValueUpdateData, ctrl?: Control): Promise<ViewDefaultValueEntity>;
}
export { ViewDefaultValueEntity };
