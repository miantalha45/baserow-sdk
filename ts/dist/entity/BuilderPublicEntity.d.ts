import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { BuilderPublic, BuilderPublicLoadMatch } from '../BaserowTypes';
declare class BuilderPublicEntity extends BaserowEntityBase<BuilderPublic> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: BuilderPublicEntity): BuilderPublicEntity;
    load(this: any, reqmatch?: BuilderPublicLoadMatch, ctrl?: Control): Promise<BuilderPublicEntity>;
}
export { BuilderPublicEntity };
