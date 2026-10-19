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
(0, node_test_1.describe)('AiProviderEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.AiProvider();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('ai_provider hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.BaserowSDK.test(offline).AiProvider().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.BaserowSDK.test(offline).AiProvider()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.BaserowSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.AiProvider().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.BaserowSDK.test().AiProvider().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.BaserowSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.AiProvider().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.AiProvider().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.AiProvider().list({ "workspace_id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ai_provider.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "api_key": { "a": true, "h": "Api Key", "n": "api_key", "r": false, "t": "`$STRING`", "wo": true, "key$": "api_key", "index$": 0 }, "extra_settings": { "a": true, "h": "Extra Settings", "n": "extra_settings", "r": false, "t": "`$OBJECT`", "key$": "extra_settings", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 2 }, "is_active": { "a": true, "h": "Is Active", "n": "is_active", "r": false, "t": "`$BOOLEAN`", "key$": "is_active", "index$": 3 }, "models": { "a": true, "h": "Models", "n": "models", "r": false, "t": "`$ARRAY`", "key$": "models", "index$": 4 }, "provider_type": { "a": true, "h": "Provider Type", "n": "provider_type", "r": true, "t": "`$STRING`", "key$": "provider_type", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "ai_provider", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["api_key", "extra_settings", "models", "provider_type"], "co": { "id": "POST /api/ai-providers/", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "workspace_id", "or": "workspace_id", "r": false, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/ai-providers/", "q": {}, "r": {}, "rb": { "alternatives": [{ "fields": [{ "name": "api_key" }, { "name": "extra_settings" }, { "list": true, "name": "models" }, { "name": "provider_type" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "api_key" }, { "name": "extra_settings" }, { "list": true, "name": "models" }, { "name": "provider_type" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "ai-providers" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/ai-providers/", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "workspace_id", "or": "workspace_id", "r": false, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/ai-providers/", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "ai-providers" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/ai-providers/{provider_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "provider_id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "workspace_id", "or": "workspace_id", "r": false, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/ai-providers/{provider_id}/", "q": { "exist": ["id"] }, "r": { "param": { "provider_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "ai-providers" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /api/ai-providers/models/{model_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "model_id", "or": "model_id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "workspace_id", "or": "workspace_id", "r": false, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/ai-providers/models/{model_id}/", "q": { "exist": ["model_id"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "ai-providers" }, { "lit": "models" }, { "var": "model_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["api_key", "extra_settings", "is_active"], "co": { "id": "PATCH /api/ai-providers/{provider_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "provider_id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "workspace_id", "or": "workspace_id", "r": false, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/ai-providers/{provider_id}/", "q": { "exist": ["id"] }, "r": { "param": { "provider_id": "id" } }, "rb": { "alternatives": [{ "fields": [{ "name": "api_key" }, { "name": "extra_settings" }, { "name": "is_active" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "api_key" }, { "name": "extra_settings" }, { "name": "is_active" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "ai-providers" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "ai_provider", "name__orig": "ai_provider", "Name": "AiProvider", "name_": "ai_provider", "name-": "ai-provider", "NAME": "AI_PROVIDER", "index$": 9 }, { "active": true, "entity": "ai_provider", "key$": "BasicAiProviderFlow", "kind": "basic", "name": "BasicAiProviderFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "ai_provider_ref01" }, "m": {}, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "ai_provider_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "ai_provider_ref01", "srcdatavar": "ai_provider_ref01_data", "suffix": "_up0", "textfield": "api_key" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-ai_provider_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "ai_provider_ref01", "suffix": "_rm0" }, "m": { "id": "ai_provider01" }, "o": "remove", "s": [], "v": [] }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "ai_provider_ref01" } }] }] }, 'AiProvider', { "POST /api/ai-providers/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "provider_type": { "type": "string", "maxLength": 32, "key$": "provider_type" }, "api_key": { "type": "string", "writeOnly": true, "default": "", "maxLength": 4096, "key$": "api_key" }, "extra_settings": { "type": "object", "additionalProperties": {}, "key$": "extra_settings" }, "models": { "type": "array", "items": { "type": "object", "properties": { "model_identifier": { "type": "string", "maxLength": 255, "key$": "model_identifier" }, "is_enabled": { "type": "boolean", "default": true, "key$": "is_enabled" }, "feature_types": { "type": "array", "items": {}, "key$": "feature_types" } }, "required": ["model_identifier"], "x-ref": "#/components/schemas/AIProviderModelWrite" }, "key$": "models" } }, "required": ["provider_type"], "x-ref": "#/components/schemas/AIProviderCreate", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "provider_type": { "type": "string", "maxLength": 32, "key$": "provider_type" }, "api_key": { "type": "string", "writeOnly": true, "default": "", "maxLength": 4096, "key$": "api_key" }, "extra_settings": { "type": "object", "additionalProperties": {}, "key$": "extra_settings" }, "models": { "type": "array", "items": { "type": "object", "properties": { "model_identifier": { "type": "string", "maxLength": 255, "key$": "model_identifier" }, "is_enabled": { "type": "boolean", "default": true, "key$": "is_enabled" }, "feature_types": { "type": "array", "items": {}, "key$": "feature_types" } }, "required": ["model_identifier"], "x-ref": "#/components/schemas/AIProviderModelWrite" }, "key$": "models" } }, "required": ["provider_type"], "x-ref": "#/components/schemas/AIProviderCreate" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "provider_type": { "type": "string", "maxLength": 32, "key$": "provider_type" }, "api_key": { "type": "string", "writeOnly": true, "default": "", "maxLength": 4096, "key$": "api_key" }, "extra_settings": { "type": "object", "additionalProperties": {}, "key$": "extra_settings" }, "models": { "type": "array", "items": { "type": "object", "properties": { "model_identifier": { "type": "string", "maxLength": 255, "key$": "model_identifier" }, "is_enabled": { "type": "boolean", "default": true, "key$": "is_enabled" }, "feature_types": { "type": "array", "items": {}, "key$": "feature_types" } }, "required": ["model_identifier"], "x-ref": "#/components/schemas/AIProviderModelWrite" }, "key$": "models" } }, "required": ["provider_type"], "x-ref": "#/components/schemas/AIProviderCreate" } } }, "required": true }, "parameters": [{ "in": "query", "name": "workspace_id", "schema": { "type": "integer", "minimum": 1 }, "index$": 0 }] }, "GET /api/ai-providers/": { "protocol": "http", "parameters": [{ "in": "query", "name": "workspace_id", "schema": { "type": "integer", "minimum": 1 }, "index$": 0 }] }, "DELETE /api/ai-providers/{provider_id}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "provider_id", "schema": { "type": "integer" }, "required": true, "index$": 0 }, { "in": "query", "name": "workspace_id", "schema": { "type": "integer", "minimum": 1 }, "index$": 1 }] }, "DELETE /api/ai-providers/models/{model_id}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "model_id", "schema": { "type": "integer" }, "required": true, "index$": 0 }, { "in": "query", "name": "workspace_id", "schema": { "type": "integer", "minimum": 1 }, "index$": 1 }] }, "PATCH /api/ai-providers/{provider_id}/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "api_key": { "type": "string", "writeOnly": true, "maxLength": 4096, "key$": "api_key" }, "extra_settings": { "type": "object", "additionalProperties": {}, "key$": "extra_settings" }, "is_active": { "type": "boolean", "key$": "is_active" } }, "x-ref": "#/components/schemas/PatchedAIProviderUpdate", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "api_key": { "type": "string", "writeOnly": true, "maxLength": 4096, "key$": "api_key" }, "extra_settings": { "type": "object", "additionalProperties": {}, "key$": "extra_settings" }, "is_active": { "type": "boolean", "key$": "is_active" } }, "x-ref": "#/components/schemas/PatchedAIProviderUpdate" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "api_key": { "type": "string", "writeOnly": true, "maxLength": 4096, "key$": "api_key" }, "extra_settings": { "type": "object", "additionalProperties": {}, "key$": "extra_settings" }, "is_active": { "type": "boolean", "key$": "is_active" } }, "x-ref": "#/components/schemas/PatchedAIProviderUpdate" } } } }, "parameters": [{ "in": "path", "name": "provider_id", "schema": { "type": "integer" }, "required": true, "index$": 0 }, { "in": "query", "name": "workspace_id", "schema": { "type": "integer", "minimum": 1 }, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const ai_provider_ref01_ent = client.AiProvider();
        let ai_provider_ref01_data = setup.data.new.ai_provider['ai_provider_ref01'];
        ai_provider_ref01_data = (await ai_provider_ref01_ent.create(ai_provider_ref01_data)).data();
        (0, node_assert_1.default)(null != ai_provider_ref01_data.id);
        // LIST
        const ai_provider_ref01_match = {};
        const ai_provider_ref01_list = (await ai_provider_ref01_ent.list(ai_provider_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(ai_provider_ref01_list, { id: ai_provider_ref01_data.id })));
        // UPDATE
        const ai_provider_ref01_data_up0 = {};
        ai_provider_ref01_data_up0.id = ai_provider_ref01_data.id;
        const ai_provider_ref01_markdef_up0 = { name: 'api_key', value: 'Mark01-ai_provider_ref01_' + setup.now };
        ai_provider_ref01_data_up0[ai_provider_ref01_markdef_up0.name] = ai_provider_ref01_markdef_up0.value;
        const ai_provider_ref01_resdata_up0 = (await ai_provider_ref01_ent.update(ai_provider_ref01_data_up0)).data();
        (0, node_assert_1.default)(ai_provider_ref01_resdata_up0.id === ai_provider_ref01_data_up0.id);
        (0, node_assert_1.default)(ai_provider_ref01_resdata_up0[ai_provider_ref01_markdef_up0.name] === ai_provider_ref01_markdef_up0.value);
        // REMOVE
        const ai_provider_ref01_match_rm0 = { id: ai_provider_ref01_data.id };
        await ai_provider_ref01_ent.remove(ai_provider_ref01_match_rm0);
        // LIST
        const ai_provider_ref01_match_rt0 = {};
        const ai_provider_ref01_list_rt0 = (await ai_provider_ref01_ent.list(ai_provider_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(ai_provider_ref01_list_rt0, { id: ai_provider_ref01_data.id })));
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ai_provider/AiProviderTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ai_provider01', 'ai_provider02', 'ai_provider03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_AI_PROVIDER_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_AI_PROVIDER_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_AI_PROVIDER_ENTID'];
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
//# sourceMappingURL=AiProviderEntity.test.js.map