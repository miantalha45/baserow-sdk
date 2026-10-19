import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Job, JobLoadMatch, JobListMatch, JobCreateData } from '../BaserowTypes';
declare class JobEntity extends BaserowEntityBase<Job> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: JobEntity): JobEntity;
    load(this: any, reqmatch?: JobLoadMatch, ctrl?: Control): Promise<JobEntity>;
    list(this: any, reqmatch?: JobListMatch, ctrl?: Control): Promise<JobEntity[]>;
    create(this: any, reqdata?: JobCreateData, ctrl?: Control): Promise<JobEntity>;
}
export { JobEntity };
