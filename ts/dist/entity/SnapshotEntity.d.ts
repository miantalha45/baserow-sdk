import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Snapshot, SnapshotLoadMatch, SnapshotCreateData, SnapshotRemoveMatch } from '../BaserowTypes';
declare class SnapshotEntity extends BaserowEntityBase<Snapshot> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: SnapshotEntity): SnapshotEntity;
    load(this: any, reqmatch?: SnapshotLoadMatch, ctrl?: Control): Promise<SnapshotEntity>;
    create(this: any, reqdata?: SnapshotCreateData, ctrl?: Control): Promise<SnapshotEntity>;
    remove(this: any, reqmatch?: SnapshotRemoveMatch, ctrl?: Control): Promise<SnapshotEntity>;
}
export { SnapshotEntity };
