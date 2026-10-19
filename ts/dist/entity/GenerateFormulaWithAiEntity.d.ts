import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { GenerateFormulaWithAi, GenerateFormulaWithAiCreateData } from '../BaserowTypes';
declare class GenerateFormulaWithAiEntity extends BaserowEntityBase<GenerateFormulaWithAi> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: GenerateFormulaWithAiEntity): GenerateFormulaWithAiEntity;
    create(this: any, reqdata?: GenerateFormulaWithAiCreateData, ctrl?: Control): Promise<GenerateFormulaWithAiEntity>;
}
export { GenerateFormulaWithAiEntity };
