import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { PeriodicDataSyncInterval, PeriodicDataSyncIntervalLoadMatch, PeriodicDataSyncIntervalUpdateData } from '../BaserowTypes';
declare class PeriodicDataSyncIntervalEntity extends BaserowEntityBase<PeriodicDataSyncInterval> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: PeriodicDataSyncIntervalEntity): PeriodicDataSyncIntervalEntity;
    load(this: any, reqmatch?: PeriodicDataSyncIntervalLoadMatch, ctrl?: Control): Promise<PeriodicDataSyncIntervalEntity>;
    update(this: any, reqdata?: PeriodicDataSyncIntervalUpdateData, ctrl?: Control): Promise<PeriodicDataSyncIntervalEntity>;
}
export { PeriodicDataSyncIntervalEntity };
