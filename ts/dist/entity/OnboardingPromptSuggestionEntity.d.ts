import { BaserowEntityBase } from '../BaserowEntityBase';
import type { BaserowSDK } from '../BaserowSDK';
import type { Control } from '../types';
import type { OnboardingPromptSuggestion, OnboardingPromptSuggestionCreateData } from '../BaserowTypes';
declare class OnboardingPromptSuggestionEntity extends BaserowEntityBase<OnboardingPromptSuggestion> {
    constructor(client: BaserowSDK, entopts: any);
    make(this: OnboardingPromptSuggestionEntity): OnboardingPromptSuggestionEntity;
    create(this: any, reqdata?: OnboardingPromptSuggestionCreateData, ctrl?: Control): Promise<OnboardingPromptSuggestionEntity>;
}
export { OnboardingPromptSuggestionEntity };
