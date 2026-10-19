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
(0, node_test_1.describe)('CoreWebhookEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.CoreWebhook();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.CoreWebhook().load({ "id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'core_webhook.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id" }, "name": "core_webhook", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/webhooks/{webhook_uid}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "webhook_uid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/webhooks/{webhook_uid}/", "q": { "exist": ["id"] }, "r": { "param": { "webhook_uid": "id" } }, "s": [{ "lit": "api" }, { "lit": "webhooks" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/webhooks/{webhook_uid}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "webhook_uid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/webhooks/{webhook_uid}/", "q": { "exist": ["id"] }, "r": { "param": { "webhook_uid": "id" } }, "s": [{ "lit": "api" }, { "lit": "webhooks" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "patch": { "input": "data", "name": "patch", "points": [{ "a": true, "co": { "id": "PATCH /api/webhooks/{webhook_uid}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "webhook_uid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/webhooks/{webhook_uid}/", "q": { "exist": ["id"] }, "r": { "param": { "webhook_uid": "id" } }, "s": [{ "lit": "api" }, { "lit": "webhooks" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "patch" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/webhooks/{webhook_uid}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "webhook_uid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/webhooks/{webhook_uid}/", "q": { "exist": ["id"] }, "r": { "param": { "webhook_uid": "id" } }, "s": [{ "lit": "api" }, { "lit": "webhooks" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /api/webhooks/{webhook_uid}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "webhook_uid", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/webhooks/{webhook_uid}/", "q": { "exist": ["id"] }, "r": { "param": { "webhook_uid": "id" } }, "s": [{ "lit": "api" }, { "lit": "webhooks" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "core_webhook", "name__orig": "core_webhook", "Name": "CoreWebhook", "name_": "core_webhook", "name-": "core-webhook", "NAME": "CORE_WEBHOOK", "index$": 47 }, { "active": true, "entity": "core_webhook", "key$": "BasicCoreWebhookFlow", "kind": "basic", "name": "BasicCoreWebhookFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "core_webhook_ref01" }, "m": { "webhook_uid": "webhook_uid01" }, "o": "create", "s": [], "v": [], "unreachable": true }, { "a": true, "d": {}, "i": { "ref": "core_webhook_ref01", "srcdatavar": "core_webhook_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-core_webhook_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "core_webhook_ref01", "srcdatavar": "core_webhook_ref01_data", "suffix": "_dt0" }, "m": { "id": "core_webhook01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-core_webhook_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "core_webhook_ref01", "suffix": "_rm0" }, "m": { "id": "core_webhook01" }, "o": "remove", "s": [], "v": [] }] }, 'CoreWebhook', { "POST /api/webhooks/{webhook_uid}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "webhook_uid", "schema": { "type": "string", "format": "uuid" }, "required": true, "index$": 0 }] }, "GET /api/webhooks/{webhook_uid}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "webhook_uid", "schema": { "type": "string", "format": "uuid" }, "required": true, "index$": 0 }] }, "PATCH /api/webhooks/{webhook_uid}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "webhook_uid", "schema": { "type": "string", "format": "uuid" }, "required": true, "index$": 0 }] }, "DELETE /api/webhooks/{webhook_uid}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "webhook_uid", "schema": { "type": "string", "format": "uuid" }, "required": true, "index$": 0 }] }, "PUT /api/webhooks/{webhook_uid}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "webhook_uid", "schema": { "type": "string", "format": "uuid" }, "required": true, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let core_webhook_ref01_data = Object.values(setup.data.existing.core_webhook)[0];
        // UPDATE
        const core_webhook_ref01_ent = client.CoreWebhook();
        const core_webhook_ref01_data_up0 = {};
        core_webhook_ref01_data_up0.id = core_webhook_ref01_data.id;
        const core_webhook_ref01_resdata_up0 = (await core_webhook_ref01_ent.update(core_webhook_ref01_data_up0)).data();
        (0, node_assert_1.default)(core_webhook_ref01_resdata_up0.id === core_webhook_ref01_data_up0.id);
        // LOAD
        const core_webhook_ref01_match_dt0 = {};
        core_webhook_ref01_match_dt0.id = core_webhook_ref01_data.id;
        const core_webhook_ref01_data_dt0 = (await core_webhook_ref01_ent.load(core_webhook_ref01_match_dt0)).data();
        (0, node_assert_1.default)(core_webhook_ref01_data_dt0.id === core_webhook_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/core_webhook/CoreWebhookTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['core_webhook01', 'core_webhook02', 'core_webhook03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_CORE_WEBHOOK_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_CORE_WEBHOOK_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_CORE_WEBHOOK_ENTID'];
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
//# sourceMappingURL=CoreWebhookEntity.test.js.map