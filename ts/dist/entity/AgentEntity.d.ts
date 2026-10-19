import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Agent, AgentCreateData, AgentUpdateData, AgentRemoveMatch } from '../BaserowTypes';
declare class AgentEntity extends BaserowEntityBase<Agent> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AgentEntity): AgentEntity;
    create(this: any, reqdata?: AgentCreateData, ctrl?: Control): Promise<AgentEntity>;
    update(this: any, reqdata?: AgentUpdateData, ctrl?: Control): Promise<AgentEntity>;
    remove(this: any, reqmatch?: AgentRemoveMatch, ctrl?: Control): Promise<AgentEntity>;
}
export { AgentEntity };
