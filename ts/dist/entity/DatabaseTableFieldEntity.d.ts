import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { DatabaseTableField, DatabaseTableFieldCreateData, DatabaseTableFieldRemoveMatch } from '../BaserowTypes';
declare class DatabaseTableFieldEntity extends BaserowEntityBase<DatabaseTableField> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: DatabaseTableFieldEntity): DatabaseTableFieldEntity;
    create(this: any, reqdata?: DatabaseTableFieldCreateData, ctrl?: Control): Promise<DatabaseTableFieldEntity>;
    remove(this: any, reqmatch?: DatabaseTableFieldRemoveMatch, ctrl?: Control): Promise<DatabaseTableFieldEntity>;
}
export { DatabaseTableFieldEntity };
