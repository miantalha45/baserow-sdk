import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { RowHistory, RowHistoryListMatch } from '../BaserowTypes';
declare class RowHistoryEntity extends BaserowEntityBase<RowHistory> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: RowHistoryEntity): RowHistoryEntity;
    list(this: any, reqmatch?: RowHistoryListMatch, ctrl?: Control): Promise<RowHistoryEntity[]>;
}
export { RowHistoryEntity };
