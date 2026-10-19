import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Team, TeamLoadMatch, TeamCreateData, TeamUpdateData, TeamRemoveMatch } from '../BaserowTypes';
declare class TeamEntity extends BaserowEntityBase<Team> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: TeamEntity): TeamEntity;
    load(this: any, reqmatch?: TeamLoadMatch, ctrl?: Control): Promise<TeamEntity>;
    create(this: any, reqdata?: TeamCreateData, ctrl?: Control): Promise<TeamEntity>;
    update(this: any, reqdata?: TeamUpdateData, ctrl?: Control): Promise<TeamEntity>;
    remove(this: any, reqmatch?: TeamRemoveMatch, ctrl?: Control): Promise<TeamEntity>;
}
export { TeamEntity };
