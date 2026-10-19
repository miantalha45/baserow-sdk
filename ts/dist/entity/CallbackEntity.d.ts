import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Callback, CallbackLoadMatch } from '../BaserowTypes';
declare class CallbackEntity extends BaserowEntityBase<Callback> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: CallbackEntity): CallbackEntity;
    load(this: any, reqmatch?: CallbackLoadMatch, ctrl?: Control): Promise<CallbackEntity>;
}
export { CallbackEntity };
