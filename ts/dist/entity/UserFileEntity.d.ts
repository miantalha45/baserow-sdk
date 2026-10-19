import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { UserFile, UserFileCreateData } from '../BaserowTypes';
declare class UserFileEntity extends BaserowEntityBase<UserFile> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: UserFileEntity): UserFileEntity;
    create(this: any, reqdata?: UserFileCreateData, ctrl?: Control): Promise<UserFileEntity>;
}
export { UserFileEntity };
