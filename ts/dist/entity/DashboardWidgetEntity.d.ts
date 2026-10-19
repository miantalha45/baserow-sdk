import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { DashboardWidget, DashboardWidgetRemoveMatch } from '../BaserowTypes';
declare class DashboardWidgetEntity extends BaserowEntityBase<DashboardWidget> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: DashboardWidgetEntity): DashboardWidgetEntity;
    remove(this: any, reqmatch?: DashboardWidgetRemoveMatch, ctrl?: Control): Promise<DashboardWidgetEntity>;
}
export { DashboardWidgetEntity };
