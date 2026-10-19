import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { DatabaseTableViewDecoration, DatabaseTableViewDecorationRemoveMatch } from '../BaserowTypes';
declare class DatabaseTableViewDecorationEntity extends BaserowEntityBase<DatabaseTableViewDecoration> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: DatabaseTableViewDecorationEntity): DatabaseTableViewDecorationEntity;
    remove(this: any, reqmatch?: DatabaseTableViewDecorationRemoveMatch, ctrl?: Control): Promise<DatabaseTableViewDecorationEntity>;
}
export { DatabaseTableViewDecorationEntity };
