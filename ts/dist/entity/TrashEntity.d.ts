import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Trash, TrashListMatch, TrashUpdateData, TrashRemoveMatch } from '../BaserowTypes';
declare class TrashEntity extends BaserowEntityBase<Trash> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: TrashEntity): TrashEntity;
    list(this: any, reqmatch?: TrashListMatch, ctrl?: Control): Promise<TrashEntity[]>;
    update(this: any, reqdata?: TrashUpdateData, ctrl?: Control): Promise<TrashEntity>;
    remove(this: any, reqmatch?: TrashRemoveMatch, ctrl?: Control): Promise<TrashEntity>;
}
export { TrashEntity };
