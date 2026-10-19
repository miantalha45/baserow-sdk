import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { McpEndpoint, McpEndpointLoadMatch, McpEndpointListMatch, McpEndpointCreateData, McpEndpointUpdateData, McpEndpointRemoveMatch } from '../BaserowTypes';
declare class McpEndpointEntity extends BaserowEntityBase<McpEndpoint> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: McpEndpointEntity): McpEndpointEntity;
    load(this: any, reqmatch?: McpEndpointLoadMatch, ctrl?: Control): Promise<McpEndpointEntity>;
    list(this: any, reqmatch?: McpEndpointListMatch, ctrl?: Control): Promise<McpEndpointEntity[]>;
    create(this: any, reqdata?: McpEndpointCreateData, ctrl?: Control): Promise<McpEndpointEntity>;
    update(this: any, reqdata?: McpEndpointUpdateData, ctrl?: Control): Promise<McpEndpointEntity>;
    remove(this: any, reqmatch?: McpEndpointRemoveMatch, ctrl?: Control): Promise<McpEndpointEntity>;
}
export { McpEndpointEntity };
