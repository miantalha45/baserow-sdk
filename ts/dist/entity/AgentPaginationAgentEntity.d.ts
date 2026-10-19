import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { AgentPaginationAgent, AgentPaginationAgentLoadMatch } from '../BaserowTypes';
declare class AgentPaginationAgentEntity extends BaserowEntityBase<AgentPaginationAgent> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: AgentPaginationAgentEntity): AgentPaginationAgentEntity;
    load(this: any, reqmatch?: AgentPaginationAgentLoadMatch, ctrl?: Control): Promise<AgentPaginationAgentEntity>;
}
export { AgentPaginationAgentEntity };
