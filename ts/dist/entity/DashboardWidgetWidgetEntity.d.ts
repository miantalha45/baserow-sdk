import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { DashboardWidgetWidget, DashboardWidgetWidgetListMatch, DashboardWidgetWidgetCreateData, DashboardWidgetWidgetUpdateData } from '../BaserowTypes';
declare class DashboardWidgetWidgetEntity extends BaserowEntityBase<DashboardWidgetWidget> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: DashboardWidgetWidgetEntity): DashboardWidgetWidgetEntity;
    list(this: any, reqmatch?: DashboardWidgetWidgetListMatch, ctrl?: Control): Promise<DashboardWidgetWidgetEntity[]>;
    create(this: any, reqdata?: DashboardWidgetWidgetCreateData, ctrl?: Control): Promise<DashboardWidgetWidgetEntity>;
    update(this: any, reqdata?: DashboardWidgetWidgetUpdateData, ctrl?: Control): Promise<DashboardWidgetWidgetEntity>;
}
export { DashboardWidgetWidgetEntity };
