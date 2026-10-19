import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { BuilderDataSource, BuilderDataSourceLoadMatch, BuilderDataSourceCreateData, BuilderDataSourceRemoveMatch } from '../BaserowTypes';
declare class BuilderDataSourceEntity extends BaserowEntityBase<BuilderDataSource> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: BuilderDataSourceEntity): BuilderDataSourceEntity;
    load(this: any, reqmatch?: BuilderDataSourceLoadMatch, ctrl?: Control): Promise<BuilderDataSourceEntity>;
    create(this: any, reqdata?: BuilderDataSourceCreateData, ctrl?: Control): Promise<BuilderDataSourceEntity>;
    remove(this: any, reqmatch?: BuilderDataSourceRemoveMatch, ctrl?: Control): Promise<BuilderDataSourceEntity>;
}
export { BuilderDataSourceEntity };
