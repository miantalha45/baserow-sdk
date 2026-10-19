import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { BuilderElement, BuilderElementRemoveMatch } from '../BaserowTypes';
declare class BuilderElementEntity extends BaserowEntityBase<BuilderElement> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: BuilderElementEntity): BuilderElementEntity;
    remove(this: any, reqmatch?: BuilderElementRemoveMatch, ctrl?: Control): Promise<BuilderElementEntity>;
}
export { BuilderElementEntity };
