import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { BuilderPage, BuilderPageCreateData, BuilderPageRemoveMatch } from '../BaserowTypes';
declare class BuilderPageEntity extends BaserowEntityBase<BuilderPage> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: BuilderPageEntity): BuilderPageEntity;
    create(this: any, reqdata?: BuilderPageCreateData, ctrl?: Control): Promise<BuilderPageEntity>;
    remove(this: any, reqmatch?: BuilderPageRemoveMatch, ctrl?: Control): Promise<BuilderPageEntity>;
}
export { BuilderPageEntity };
