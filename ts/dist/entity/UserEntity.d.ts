import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { User, UserListMatch, UserCreateData, UserUpdateData } from '../BaserowTypes';
declare class UserEntity extends BaserowEntityBase<User> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: UserEntity): UserEntity;
    list(this: any, reqmatch?: UserListMatch, ctrl?: Control): Promise<UserEntity[]>;
    create(this: any, reqdata?: UserCreateData, ctrl?: Control): Promise<UserEntity>;
    update(this: any, reqdata?: UserUpdateData, ctrl?: Control): Promise<UserEntity>;
}
export { UserEntity };
