"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('OnboardingPromptSuggestionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.OnboardingPromptSuggestion();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.OnboardingPromptSuggestion().create({ "industry": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'onboarding_prompt_suggestion.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "industry": { "a": true, "h": "Industry", "n": "industry", "r": false, "sh": "The industry the user works in.", "t": "`$STRING`", "key$": "industry", "index$": 0 }, "language": { "a": true, "h": "Language", "n": "language", "r": false, "sh": "ISO 639 language code the suggestions must be written in.", "t": "`$STRING`", "key$": "language", "index$": 1 }, "suggestions": { "a": true, "h": "Suggestions", "n": "suggestions", "r": true, "t": "`$ARRAY`", "key$": "suggestions", "index$": 2 }, "team": { "a": true, "h": "Team", "n": "team", "r": false, "sh": "The team the user is part of.", "t": "`$STRING`", "key$": "team", "index$": 3 } }, "name": "onboarding_prompt_suggestion", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["industry", "language", "team"], "co": { "id": "POST /assistant/onboarding/prompt-suggestions/", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/assistant/onboarding/prompt-suggestions/", "q": {}, "r": {}, "rb": { "alternatives": [{ "fields": [{ "name": "industry" }, { "name": "language" }, { "name": "team" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "industry" }, { "name": "language" }, { "name": "team" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "assistant" }, { "lit": "onboarding" }, { "lit": "prompt-suggestions" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "onboarding_prompt_suggestion", "name__orig": "onboarding_prompt_suggestion", "Name": "OnboardingPromptSuggestion", "name_": "onboarding_prompt_suggestion", "name-": "onboarding-prompt-suggestion", "NAME": "ONBOARDING_PROMPT_SUGGESTION", "index$": 113 }, { "active": true, "entity": "onboarding_prompt_suggestion", "key$": "BasicOnboardingPromptSuggestionFlow", "kind": "basic", "name": "BasicOnboardingPromptSuggestionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "onboarding_prompt_suggestion_ref01" }, "m": {}, "o": "create", "s": [], "v": [] }] }, 'OnboardingPromptSuggestion', { "POST /assistant/onboarding/prompt-suggestions/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "industry": { "type": "string", "default": "", "description": "The industry the user works in.", "maxLength": 48, "key$": "industry" }, "team": { "type": "string", "default": "", "description": "The team the user is part of.", "maxLength": 48, "key$": "team" }, "language": { "type": "string", "default": "", "description": "ISO 639 language code the suggestions must be written in. Falls back to the language of the user's profile.", "maxLength": 10, "key$": "language" } }, "x-ref": "#/components/schemas/OnboardingPromptSuggestionsRequest", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "industry": { "type": "string", "default": "", "description": "The industry the user works in.", "maxLength": 48, "key$": "industry" }, "team": { "type": "string", "default": "", "description": "The team the user is part of.", "maxLength": 48, "key$": "team" }, "language": { "type": "string", "default": "", "description": "ISO 639 language code the suggestions must be written in. Falls back to the language of the user's profile.", "maxLength": 10, "key$": "language" } }, "x-ref": "#/components/schemas/OnboardingPromptSuggestionsRequest" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "industry": { "type": "string", "default": "", "description": "The industry the user works in.", "maxLength": 48, "key$": "industry" }, "team": { "type": "string", "default": "", "description": "The team the user is part of.", "maxLength": 48, "key$": "team" }, "language": { "type": "string", "default": "", "description": "ISO 639 language code the suggestions must be written in. Falls back to the language of the user's profile.", "maxLength": 10, "key$": "language" } }, "x-ref": "#/components/schemas/OnboardingPromptSuggestionsRequest" } } } }, "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const onboarding_prompt_suggestion_ref01_ent = client.OnboardingPromptSuggestion();
        let onboarding_prompt_suggestion_ref01_data = setup.data.new.onboarding_prompt_suggestion['onboarding_prompt_suggestion_ref01'];
        onboarding_prompt_suggestion_ref01_data = (await onboarding_prompt_suggestion_ref01_ent.create(onboarding_prompt_suggestion_ref01_data)).data();
        (0, node_assert_1.default)(null != onboarding_prompt_suggestion_ref01_data);
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/onboarding_prompt_suggestion/OnboardingPromptSuggestionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['onboarding_prompt_suggestion01', 'onboarding_prompt_suggestion02', 'onboarding_prompt_suggestion03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_ONBOARDING_PROMPT_SUGGESTION_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_ONBOARDING_PROMPT_SUGGESTION_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_ONBOARDING_PROMPT_SUGGESTION_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.BaserowSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.BASEROW_APIKEY,
                server: {
                    base: env.BASEROW_SERVER_BASE,
                },
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.BASEROW_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=OnboardingPromptSuggestionEntity.test.js.map