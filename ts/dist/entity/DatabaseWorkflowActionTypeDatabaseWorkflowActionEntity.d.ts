import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { DatabaseWorkflowActionTypeDatabaseWorkflowAction, DatabaseWorkflowActionTypeDatabaseWorkflowActionListMatch, DatabaseWorkflowActionTypeDatabaseWorkflowActionCreateData, DatabaseWorkflowActionTypeDatabaseWorkflowActionUpdateData } from '../BaserowTypes';
declare class DatabaseWorkflowActionTypeDatabaseWorkflowActionEntity extends BaserowEntityBase<DatabaseWorkflowActionTypeDatabaseWorkflowAction> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: DatabaseWorkflowActionTypeDatabaseWorkflowActionEntity): DatabaseWorkflowActionTypeDatabaseWorkflowActionEntity;
    list(this: any, reqmatch?: DatabaseWorkflowActionTypeDatabaseWorkflowActionListMatch, ctrl?: Control): Promise<DatabaseWorkflowActionTypeDatabaseWorkflowActionEntity[]>;
    create(this: any, reqdata?: DatabaseWorkflowActionTypeDatabaseWorkflowActionCreateData, ctrl?: Control): Promise<DatabaseWorkflowActionTypeDatabaseWorkflowActionEntity>;
    update(this: any, reqdata?: DatabaseWorkflowActionTypeDatabaseWorkflowActionUpdateData, ctrl?: Control): Promise<DatabaseWorkflowActionTypeDatabaseWorkflowActionEntity>;
}
export { DatabaseWorkflowActionTypeDatabaseWorkflowActionEntity };
