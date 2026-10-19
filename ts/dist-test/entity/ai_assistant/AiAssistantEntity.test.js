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
(0, node_test_1.describe)('AiAssistantEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.AiAssistant();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.AiAssistant().create({ "chat_id": 1, "content": "x", "ui_context": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['create', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ai_assistant.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "content": { "a": true, "h": "Content", "n": "content", "r": true, "sh": "The content of the message.", "t": "`$STRING`", "key$": "content", "index$": 0 }, "ui_context": { "a": true, "h": "Ui Context", "n": "ui_context", "r": true, "sh": "The UI context related to what the user was looking at when the message was sent.", "t": "`$ANY`", "key$": "ui_context", "index$": 1 } }, "name": "ai_assistant", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["content", "ui_context"], "co": { "id": "POST /assistant/chat/{chat_uuid}/cancel/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "chat_id", "or": "chat_uuid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/assistant/chat/{chat_uuid}/cancel/", "q": { "exist": ["chat_id"] }, "r": { "param": { "chat_uuid": "chat_id" } }, "rb": { "alternatives": [{ "fields": [{ "name": "content" }, { "name": "ui_context" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "content" }, { "name": "ui_context" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "assistant" }, { "lit": "chat" }, { "var": "chat_id" }, { "lit": "cancel" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["content", "ui_context"], "co": { "id": "POST /assistant/chat/{chat_uuid}/messages/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "chat_id", "or": "chat_uuid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/assistant/chat/{chat_uuid}/messages/", "q": { "exist": ["chat_id"] }, "r": { "param": { "chat_uuid": "chat_id" } }, "rb": { "alternatives": [{ "fields": [{ "name": "content" }, { "name": "ui_context" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "content" }, { "name": "ui_context" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "assistant" }, { "lit": "chat" }, { "var": "chat_id" }, { "lit": "messages" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /assistant/chat/{chat_uuid}/cancel/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "chat_id", "or": "chat_uuid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/assistant/chat/{chat_uuid}/cancel/", "q": { "exist": ["chat_id"] }, "r": { "param": { "chat_uuid": "chat_id" } }, "s": [{ "lit": "assistant" }, { "lit": "chat" }, { "var": "chat_id" }, { "lit": "cancel" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /assistant/chat/{chat_uuid}/messages/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "chat_id", "or": "chat_uuid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/assistant/chat/{chat_uuid}/messages/", "q": { "exist": ["chat_id"] }, "r": { "param": { "chat_uuid": "chat_id" } }, "s": [{ "lit": "assistant" }, { "lit": "chat" }, { "var": "chat_id" }, { "lit": "messages" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /assistant/messages/{message_id}/feedback/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "message_id", "or": "message_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/assistant/messages/{message_id}/feedback/", "q": { "exist": ["message_id"] }, "r": {}, "s": [{ "lit": "assistant" }, { "lit": "messages" }, { "var": "message_id" }, { "lit": "feedback" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.message"]] }, "key$": "ai_assistant", "name__orig": "ai_assistant", "Name": "AiAssistant", "name_": "ai_assistant", "name-": "ai-assistant", "NAME": "AI_ASSISTANT", "index$": 8 }, { "active": true, "entity": "ai_assistant", "key$": "BasicAiAssistantFlow", "kind": "basic", "name": "BasicAiAssistantFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "ai_assistant_ref01" }, "m": { "chat_id": "chat01" }, "o": "create", "s": [], "v": [] }, { "a": false, "d": {}, "i": { "ref": "ai_assistant_ref01", "srcdatavar": "ai_assistant_ref01_data", "suffix": "_up0", "textfield": "content" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-ai_assistant_ref01" } }], "v": [], "unreachable": true }, { "a": true, "d": {}, "i": { "ref": "ai_assistant_ref01", "suffix": "_rm0" }, "m": { "id": "ai_assistant01" }, "o": "remove", "s": [], "v": [] }] }, 'AiAssistant', { "POST /assistant/chat/{chat_uuid}/cancel/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "content": { "type": "string", "description": "The content of the message.", "key$": "content" }, "ui_context": { "allOf": [{ "type": "object", "properties": { "workspace": {}, "database": {}, "table": {}, "view": {}, "application": {}, "page": {}, "automation": {}, "workflow": {}, "dashboard": {}, "timezone": {} }, "required": ["workspace"], "x-ref": "#/components/schemas/UIContext" }], "description": "The UI context related to what the user was looking at when the message was sent.", "key$": "ui_context" } }, "required": ["content", "ui_context"], "x-ref": "#/components/schemas/AssistantMessageRequest", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "content": { "type": "string", "description": "The content of the message.", "key$": "content" }, "ui_context": { "allOf": [{ "type": "object", "properties": { "workspace": {}, "database": {}, "table": {}, "view": {}, "application": {}, "page": {}, "automation": {}, "workflow": {}, "dashboard": {}, "timezone": {} }, "required": ["workspace"], "x-ref": "#/components/schemas/UIContext" }], "description": "The UI context related to what the user was looking at when the message was sent.", "key$": "ui_context" } }, "required": ["content", "ui_context"], "x-ref": "#/components/schemas/AssistantMessageRequest" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "content": { "type": "string", "description": "The content of the message.", "key$": "content" }, "ui_context": { "allOf": [{ "type": "object", "properties": { "workspace": {}, "database": {}, "table": {}, "view": {}, "application": {}, "page": {}, "automation": {}, "workflow": {}, "dashboard": {}, "timezone": {} }, "required": ["workspace"], "x-ref": "#/components/schemas/UIContext" }], "description": "The UI context related to what the user was looking at when the message was sent.", "key$": "ui_context" } }, "required": ["content", "ui_context"], "x-ref": "#/components/schemas/AssistantMessageRequest" } } }, "required": true }, "parameters": [{ "in": "path", "name": "chat_uuid", "schema": { "type": "string", "format": "uuid" }, "required": true, "index$": 0 }] }, "POST /assistant/chat/{chat_uuid}/messages/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "content": { "type": "string", "description": "The content of the message.", "key$": "content" }, "ui_context": { "allOf": [{ "type": "object", "properties": { "workspace": {}, "database": {}, "table": {}, "view": {}, "application": {}, "page": {}, "automation": {}, "workflow": {}, "dashboard": {}, "timezone": {} }, "required": ["workspace"], "x-ref": "#/components/schemas/UIContext" }], "description": "The UI context related to what the user was looking at when the message was sent.", "key$": "ui_context" } }, "required": ["content", "ui_context"], "x-ref": "#/components/schemas/AssistantMessageRequest", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "content": { "type": "string", "description": "The content of the message.", "key$": "content" }, "ui_context": { "allOf": [{ "type": "object", "properties": { "workspace": {}, "database": {}, "table": {}, "view": {}, "application": {}, "page": {}, "automation": {}, "workflow": {}, "dashboard": {}, "timezone": {} }, "required": ["workspace"], "x-ref": "#/components/schemas/UIContext" }], "description": "The UI context related to what the user was looking at when the message was sent.", "key$": "ui_context" } }, "required": ["content", "ui_context"], "x-ref": "#/components/schemas/AssistantMessageRequest" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "content": { "type": "string", "description": "The content of the message.", "key$": "content" }, "ui_context": { "allOf": [{ "type": "object", "properties": { "workspace": {}, "database": {}, "table": {}, "view": {}, "application": {}, "page": {}, "automation": {}, "workflow": {}, "dashboard": {}, "timezone": {} }, "required": ["workspace"], "x-ref": "#/components/schemas/UIContext" }], "description": "The UI context related to what the user was looking at when the message was sent.", "key$": "ui_context" } }, "required": ["content", "ui_context"], "x-ref": "#/components/schemas/AssistantMessageRequest" } } }, "required": true }, "parameters": [{ "in": "path", "name": "chat_uuid", "schema": { "type": "string", "format": "uuid" }, "required": true, "index$": 0 }] }, "DELETE /assistant/chat/{chat_uuid}/cancel/": { "protocol": "http", "parameters": [{ "in": "path", "name": "chat_uuid", "schema": { "type": "string", "format": "uuid" }, "required": true, "index$": 0 }] }, "DELETE /assistant/chat/{chat_uuid}/messages/": { "protocol": "http", "parameters": [{ "in": "path", "name": "chat_uuid", "schema": { "type": "string", "format": "uuid" }, "required": true, "index$": 0 }] }, "PUT /assistant/messages/{message_id}/feedback/": { "protocol": "http", "parameters": [{ "in": "path", "name": "message_id", "schema": { "type": "integer" }, "required": true, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const ai_assistant_ref01_ent = client.AiAssistant();
        let ai_assistant_ref01_data = setup.data.new.ai_assistant['ai_assistant_ref01'];
        ai_assistant_ref01_data['chat_id'] = setup.idmap['chat01'];
        ai_assistant_ref01_data = (await ai_assistant_ref01_ent.create(ai_assistant_ref01_data)).data();
        (0, node_assert_1.default)(null != ai_assistant_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ai_assistant/AiAssistantTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ai_assistant01', 'ai_assistant02', 'ai_assistant03', 'message01', 'message02', 'message03', 'chat01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_AI_ASSISTANT_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_AI_ASSISTANT_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_AI_ASSISTANT_ENTID'];
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
//# sourceMappingURL=AiAssistantEntity.test.js.map