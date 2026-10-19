import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { ApplicationApplication, ApplicationApplicationLoadMatch, ApplicationApplicationCreateData } from '../BaserowTypes';
declare class ApplicationApplicationEntity extends BaserowEntityBase<ApplicationApplication> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ApplicationApplicationEntity): ApplicationApplicationEntity;
    load(this: any, reqmatch?: ApplicationApplicationLoadMatch, ctrl?: Control): Promise<ApplicationApplicationEntity>;
    create(this: any, reqdata?: ApplicationApplicationCreateData, ctrl?: Control): Promise<ApplicationApplicationEntity>;
}
export { ApplicationApplicationEntity };
