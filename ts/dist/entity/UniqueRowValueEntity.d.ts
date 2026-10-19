import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { UniqueRowValue, UniqueRowValueListMatch } from '../BaserowTypes';
declare class UniqueRowValueEntity extends BaserowEntityBase<UniqueRowValue> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: UniqueRowValueEntity): UniqueRowValueEntity;
    list(this: any, reqmatch?: UniqueRowValueListMatch, ctrl?: Control): Promise<UniqueRowValueEntity[]>;
}
export { UniqueRowValueEntity };
