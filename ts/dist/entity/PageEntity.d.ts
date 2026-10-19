import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Page, PageCreateData, PageUpdateData } from '../BaserowTypes';
declare class PageEntity extends BaserowEntityBase<Page> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: PageEntity): PageEntity;
    create(this: any, reqdata?: PageCreateData, ctrl?: Control): Promise<PageEntity>;
    update(this: any, reqdata?: PageUpdateData, ctrl?: Control): Promise<PageEntity>;
}
export { PageEntity };
