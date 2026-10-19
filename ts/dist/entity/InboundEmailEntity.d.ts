import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { InboundEmail, InboundEmailCreateData } from '../BaserowTypes';
declare class InboundEmailEntity extends BaserowEntityBase<InboundEmail> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: InboundEmailEntity): InboundEmailEntity;
    create(this: any, reqdata?: InboundEmailCreateData, ctrl?: Control): Promise<InboundEmailEntity>;
}
export { InboundEmailEntity };
