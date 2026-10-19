import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { ExportJob, ExportJobLoadMatch, ExportJobCreateData } from '../BaserowTypes';
declare class ExportJobEntity extends BaserowEntityBase<ExportJob> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ExportJobEntity): ExportJobEntity;
    load(this: any, reqmatch?: ExportJobLoadMatch, ctrl?: Control): Promise<ExportJobEntity>;
    create(this: any, reqdata?: ExportJobCreateData, ctrl?: Control): Promise<ExportJobEntity>;
}
export { ExportJobEntity };
