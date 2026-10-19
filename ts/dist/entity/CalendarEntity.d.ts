import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { Calendar, CalendarLoadMatch } from '../BaserowTypes';
declare class CalendarEntity extends BaserowEntityBase<Calendar> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: CalendarEntity): CalendarEntity;
    load(this: any, reqmatch?: CalendarLoadMatch, ctrl?: Control): Promise<CalendarEntity>;
}
export { CalendarEntity };
