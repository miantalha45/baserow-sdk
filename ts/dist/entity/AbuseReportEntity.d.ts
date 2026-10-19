import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AbuseReport, AbuseReportCreateData } from '../BaserowTypes';
declare class AbuseReportEntity extends BaserowEntityBase<AbuseReport> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AbuseReportEntity): AbuseReportEntity;
    create(this: any, reqdata?: AbuseReportCreateData, ctrl?: Control): Promise<AbuseReportEntity>;
}
export { AbuseReportEntity };
