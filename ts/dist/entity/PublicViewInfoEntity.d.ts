import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { PublicViewInfo, PublicViewInfoListMatch } from '../BaserowTypes';
declare class PublicViewInfoEntity extends BaserowEntityBase<PublicViewInfo> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: PublicViewInfoEntity): PublicViewInfoEntity;
    list(this: any, reqmatch?: PublicViewInfoListMatch, ctrl?: Control): Promise<PublicViewInfoEntity[]>;
}
export { PublicViewInfoEntity };
