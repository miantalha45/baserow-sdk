import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Dispatch, DispatchCreateData } from '../BaserowTypes';
declare class DispatchEntity extends BaserowEntityBase<Dispatch> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: DispatchEntity): DispatchEntity;
    create(this: any, reqdata?: DispatchCreateData, ctrl?: Control): Promise<DispatchEntity>;
}
export { DispatchEntity };
