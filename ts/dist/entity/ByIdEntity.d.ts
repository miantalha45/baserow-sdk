import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { ById, ByIdLoadMatch } from '../BaserowTypes';
declare class ByIdEntity extends BaserowEntityBase<ById> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ByIdEntity): ByIdEntity;
    load(this: any, reqmatch?: ByIdLoadMatch, ctrl?: Control): Promise<ByIdEntity>;
}
export { ByIdEntity };
