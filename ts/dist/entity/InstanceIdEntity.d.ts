import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { InstanceId, InstanceIdLoadMatch } from '../BaserowTypes';
declare class InstanceIdEntity extends BaserowEntityBase<InstanceId> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: InstanceIdEntity): InstanceIdEntity;
    load(this: any, reqmatch?: InstanceIdLoadMatch, ctrl?: Control): Promise<InstanceIdEntity>;
}
export { InstanceIdEntity };
