import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Token, TokenLoadMatch, TokenListMatch, TokenCreateData, TokenUpdateData } from '../BaserowTypes';
declare class TokenEntity extends BaserowEntityBase<Token> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: TokenEntity): TokenEntity;
    load(this: any, reqmatch?: TokenLoadMatch, ctrl?: Control): Promise<TokenEntity>;
    list(this: any, reqmatch?: TokenListMatch, ctrl?: Control): Promise<TokenEntity[]>;
    create(this: any, reqdata?: TokenCreateData, ctrl?: Control): Promise<TokenEntity>;
    update(this: any, reqdata?: TokenUpdateData, ctrl?: Control): Promise<TokenEntity>;
}
export { TokenEntity };
