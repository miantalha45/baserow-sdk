import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { ColorTypographyButtonImagePageInputTableLinklinkActiveText, ColorTypographyButtonImagePageInputTableLinklinkActiveTextUpdateData } from '../BaserowTypes';
declare class ColorTypographyButtonImagePageInputTableLinklinkActiveTextEntity extends BaserowEntityBase<ColorTypographyButtonImagePageInputTableLinklinkActiveText> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: ColorTypographyButtonImagePageInputTableLinklinkActiveTextEntity): ColorTypographyButtonImagePageInputTableLinklinkActiveTextEntity;
    update(this: any, reqdata?: ColorTypographyButtonImagePageInputTableLinklinkActiveTextUpdateData, ctrl?: Control): Promise<ColorTypographyButtonImagePageInputTableLinklinkActiveTextEntity>;
}
export { ColorTypographyButtonImagePageInputTableLinklinkActiveTextEntity };
