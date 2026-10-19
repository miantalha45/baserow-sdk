import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { DatabaseTableGridView, DatabaseTableGridViewLoadMatch } from '../BaserowTypes';
declare class DatabaseTableGridViewEntity extends BaserowEntityBase<DatabaseTableGridView> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: DatabaseTableGridViewEntity): DatabaseTableGridViewEntity;
    load(this: any, reqmatch?: DatabaseTableGridViewLoadMatch, ctrl?: Control): Promise<DatabaseTableGridViewEntity>;
}
export { DatabaseTableGridViewEntity };
