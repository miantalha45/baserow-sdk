import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { BuilderPreviewGrant, BuilderPreviewGrantCreateData } from '../BaserowTypes';
declare class BuilderPreviewGrantEntity extends BaserowEntityBase<BuilderPreviewGrant> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: BuilderPreviewGrantEntity): BuilderPreviewGrantEntity;
    create(this: any, reqdata?: BuilderPreviewGrantCreateData, ctrl?: Control): Promise<BuilderPreviewGrantEntity>;
}
export { BuilderPreviewGrantEntity };
