import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { ByName, ByNameLoadMatch } from '../BaserowTypes';
declare class ByNameEntity extends BaserowEntityBase<ByName> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ByNameEntity): ByNameEntity;
    load(this: any, reqmatch?: ByNameLoadMatch, ctrl?: Control): Promise<ByNameEntity>;
}
export { ByNameEntity };
