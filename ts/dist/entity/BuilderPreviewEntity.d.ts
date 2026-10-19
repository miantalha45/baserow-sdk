import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { BuilderPreview, BuilderPreviewLoadMatch } from '../BaserowTypes';
declare class BuilderPreviewEntity extends BaserowEntityBase<BuilderPreview> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: BuilderPreviewEntity): BuilderPreviewEntity;
    load(this: any, reqmatch?: BuilderPreviewLoadMatch, ctrl?: Control): Promise<BuilderPreviewEntity>;
}
export { BuilderPreviewEntity };
