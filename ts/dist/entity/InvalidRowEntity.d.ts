import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { InvalidRow, InvalidRowListMatch } from '../BaserowTypes';
declare class InvalidRowEntity extends BaserowEntityBase<InvalidRow> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: InvalidRowEntity): InvalidRowEntity;
    list(this: any, reqmatch?: InvalidRowListMatch, ctrl?: Control): Promise<InvalidRowEntity[]>;
}
export { InvalidRowEntity };
