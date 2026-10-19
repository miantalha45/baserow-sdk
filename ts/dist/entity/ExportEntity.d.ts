import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Export, ExportLoadMatch, ExportListMatch } from '../BaserowTypes';
declare class ExportEntity extends BaserowEntityBase<Export> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ExportEntity): ExportEntity;
    load(this: any, reqmatch?: ExportLoadMatch, ctrl?: Control): Promise<ExportEntity>;
    list(this: any, reqmatch?: ExportListMatch, ctrl?: Control): Promise<ExportEntity[]>;
}
export { ExportEntity };
