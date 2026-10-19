import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { CalendarViewExample, CalendarViewExampleListMatch } from '../BaserowTypes';
declare class CalendarViewExampleEntity extends BaserowEntityBase<CalendarViewExample> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: CalendarViewExampleEntity): CalendarViewExampleEntity;
    list(this: any, reqmatch?: CalendarViewExampleListMatch, ctrl?: Control): Promise<CalendarViewExampleEntity[]>;
}
export { CalendarViewExampleEntity };
