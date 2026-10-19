import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { TeamSubject, TeamSubjectLoadMatch, TeamSubjectListMatch, TeamSubjectCreateData } from '../BaserowTypes';
declare class TeamSubjectEntity extends BaserowEntityBase<TeamSubject> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: TeamSubjectEntity): TeamSubjectEntity;
    load(this: any, reqmatch?: TeamSubjectLoadMatch, ctrl?: Control): Promise<TeamSubjectEntity>;
    list(this: any, reqmatch?: TeamSubjectListMatch, ctrl?: Control): Promise<TeamSubjectEntity[]>;
    create(this: any, reqdata?: TeamSubjectCreateData, ctrl?: Control): Promise<TeamSubjectEntity>;
}
export { TeamSubjectEntity };
