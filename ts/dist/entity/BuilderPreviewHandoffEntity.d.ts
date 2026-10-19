import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { BuilderPreviewHandoff, BuilderPreviewHandoffCreateData } from '../BaserowTypes';
declare class BuilderPreviewHandoffEntity extends BaserowEntityBase<BuilderPreviewHandoff> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: BuilderPreviewHandoffEntity): BuilderPreviewHandoffEntity;
    create(this: any, reqdata?: BuilderPreviewHandoffCreateData, ctrl?: Control): Promise<BuilderPreviewHandoffEntity>;
}
export { BuilderPreviewHandoffEntity };
