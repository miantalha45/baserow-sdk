import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { DatabaseToken, DatabaseTokenLoadMatch, DatabaseTokenRemoveMatch } from '../BaserowTypes';
declare class DatabaseTokenEntity extends BaserowEntityBase<DatabaseToken> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: DatabaseTokenEntity): DatabaseTokenEntity;
    load(this: any, reqmatch?: DatabaseTokenLoadMatch, ctrl?: Control): Promise<DatabaseTokenEntity>;
    remove(this: any, reqmatch?: DatabaseTokenRemoveMatch, ctrl?: Control): Promise<DatabaseTokenEntity>;
}
export { DatabaseTokenEntity };
