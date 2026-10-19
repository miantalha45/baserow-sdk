import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { PublicViewAuth, PublicViewAuthCreateData } from '../BaserowTypes';
declare class PublicViewAuthEntity extends BaserowEntityBase<PublicViewAuth> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: PublicViewAuthEntity): PublicViewAuthEntity;
    create(this: any, reqdata?: PublicViewAuthCreateData, ctrl?: Control): Promise<PublicViewAuthEntity>;
}
export { PublicViewAuthEntity };
