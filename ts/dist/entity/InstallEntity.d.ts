import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Install, InstallCreateData } from '../BaserowTypes';
declare class InstallEntity extends BaserowEntityBase<Install> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: InstallEntity): InstallEntity;
    create(this: any, reqdata?: InstallCreateData, ctrl?: Control): Promise<InstallEntity>;
}
export { InstallEntity };
