import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { GridViewGroupByData, GridViewGroupByDataListMatch } from '../BaserowTypes';
declare class GridViewGroupByDataEntity extends BaserowEntityBase<GridViewGroupByData> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: GridViewGroupByDataEntity): GridViewGroupByDataEntity;
    list(this: any, reqmatch?: GridViewGroupByDataListMatch, ctrl?: Control): Promise<GridViewGroupByDataEntity[]>;
}
export { GridViewGroupByDataEntity };
