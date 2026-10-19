import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Full, FullLoadMatch } from '../BaserowTypes';
declare class FullEntity extends BaserowEntityBase<Full> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: FullEntity): FullEntity;
    load(this: any, reqmatch?: FullLoadMatch, ctrl?: Control): Promise<FullEntity>;
}
export { FullEntity };
