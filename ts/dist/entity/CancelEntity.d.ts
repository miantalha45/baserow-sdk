import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Cancel, CancelListMatch } from '../BaserowTypes';
declare class CancelEntity extends BaserowEntityBase<Cancel> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: CancelEntity): CancelEntity;
    list(this: any, reqmatch?: CancelListMatch, ctrl?: Control): Promise<CancelEntity[]>;
}
export { CancelEntity };
