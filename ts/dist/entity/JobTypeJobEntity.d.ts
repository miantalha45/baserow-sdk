import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { JobTypeJob, JobTypeJobCreateData } from '../BaserowTypes';
declare class JobTypeJobEntity extends BaserowEntityBase<JobTypeJob> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: JobTypeJobEntity): JobTypeJobEntity;
    create(this: any, reqdata?: JobTypeJobCreateData, ctrl?: Control): Promise<JobTypeJobEntity>;
}
export { JobTypeJobEntity };
