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
(0, node_test_1.describe)('TableWebhookTestCallEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.TableWebhookTestCall();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.TableWebhookTestCall().create({ "id": "x", "event_type": "x", "url": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of []) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'table_webhook_test_call.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "event_type": { "a": true, "h": "Event Type", "n": "event_type", "r": true, "sh": "The event type that must be used for the test call.", "t": "`$STRING`", "key$": "event_type", "index$": 0 }, "headers": { "a": true, "h": "Headers", "n": "headers", "r": false, "sh": "The additional headers as an object where the key is the name and the value the value.", "t": "`$OBJECT`", "key$": "headers", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 2 }, "is_unreachable": { "a": true, "h": "Is Unreachable", "n": "is_unreachable", "r": true, "ro": true, "sh": "Indicates whether the provided URL could be reached.", "t": "`$BOOLEAN`", "key$": "is_unreachable", "index$": 3 }, "request": { "a": true, "h": "Request", "n": "request", "r": true, "ro": true, "sh": "A text copy of the request headers and body.", "t": "`$STRING`", "key$": "request", "index$": 4 }, "request_method": { "a": true, "h": "Request Method", "n": "request_method", "r": false, "sh": "The request method that be used when the event occurs.", "t": "`$STRING`", "key$": "request_method", "index$": 5 }, "response": { "a": true, "h": "Response", "n": "response", "r": true, "ro": true, "sh": "A text copy of the response headers and body.", "t": "`$STRING`", "key$": "response", "index$": 6 }, "status_code": { "a": true, "h": "Status Code", "n": "status_code", "r": true, "ro": true, "sh": "The HTTP response status code.", "t": "`$INTEGER`", "key$": "status_code", "index$": 7 }, "url": { "a": true, "h": "Url", "n": "url", "r": true, "sh": "The URL that must be called when the webhook is triggered.", "t": "`$STRING`", "key$": "url", "index$": 8 }, "use_user_field_names": { "a": true, "h": "Use User Field Names", "n": "use_user_field_names", "r": false, "sh": "Indicates whether the field names must be used as payload key instead of the id.", "t": "`$BOOLEAN`", "key$": "use_user_field_names", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "table_webhook_test_call", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["event_type", "headers", "request_method", "url", "use_user_field_names"], "co": { "id": "POST /api/database/webhooks/table/{table_id}/test-call/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "table_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/database/webhooks/table/{table_id}/test-call/", "q": { "exist": ["id"] }, "r": { "param": { "table_id": "id" } }, "rb": { "alternatives": [{ "fields": [{ "name": "event_type" }, { "name": "headers" }, { "name": "request_method" }, { "name": "url" }, { "name": "use_user_field_names" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "event_type" }, { "name": "headers" }, { "name": "request_method" }, { "name": "url" }, { "name": "use_user_field_names" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "webhooks" }, { "lit": "table" }, { "var": "id" }, { "lit": "test-call" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "table_webhook_test_call", "name__orig": "table_webhook_test_call", "Name": "TableWebhookTestCall", "name_": "table_webhook_test_call", "name-": "table-webhook-test-call", "NAME": "TABLE_WEBHOOK_TEST_CALL", "index$": 142 }, { "active": true, "entity": "table_webhook_test_call", "key$": "BasicTableWebhookTestCallFlow", "kind": "basic", "name": "BasicTableWebhookTestCallFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "table_webhook_test_call_ref01" }, "m": { "table_id": "table01" }, "o": "create", "s": [], "v": [], "unreachable": true }] }, 'TableWebhookTestCall', { "POST /api/database/webhooks/table/{table_id}/test-call/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "url": { "type": "string", "description": "The URL that must be called when the webhook is triggered.", "maxLength": 2000, "key$": "url" }, "event_type": { "allOf": [{ "enum": ["rows.created", "rows.updated", "rows.deleted", "field.created", "field.updated", "field.deleted", "view.created", "view.updated", "view.deleted", "view.rows_entered"], "type": "string", "description": "* `rows.created` - rows.created\n* `rows.updated` - rows.updated\n* `rows.deleted` - rows.deleted\n* `field.created` - field.created\n* `field.updated` - field.updated\n* `field.deleted` - field.deleted\n* `view.created` - view.created\n* `view.updated` - view.updated\n* `view.deleted` - view.deleted\n* `view.rows_entered` - view.rows_entered", "x-ref": "#/components/schemas/EventTypeEnum" }], "description": "The event type that must be used for the test call.\n\n* `rows.created` - rows.created\n* `rows.updated` - rows.updated\n* `rows.deleted` - rows.deleted\n* `field.created` - field.created\n* `field.updated` - field.updated\n* `field.deleted` - field.deleted\n* `view.created` - view.created\n* `view.updated` - view.updated\n* `view.deleted` - view.deleted\n* `view.rows_entered` - view.rows_entered", "key$": "event_type" }, "request_method": { "allOf": [{ "enum": ["POST", "GET", "PUT", "PATCH", "DELETE"], "type": "string", "description": "* `POST` - Post\n* `GET` - Get\n* `PUT` - Put\n* `PATCH` - Patch\n* `DELETE` - Delete", "x-ref": "#/components/schemas/RequestMethodEnum" }], "description": "The request method that be used when the event occurs.\n\n* `POST` - Post\n* `GET` - Get\n* `PUT` - Put\n* `PATCH` - Patch\n* `DELETE` - Delete", "key$": "request_method" }, "headers": { "type": "object", "additionalProperties": {}, "description": "The additional headers as an object where the key is the name and the value the value.", "key$": "headers" }, "use_user_field_names": { "type": "boolean", "description": "Indicates whether the field names must be used as payload key instead of the id.", "key$": "use_user_field_names" } }, "required": ["event_type", "url"], "x-ref": "#/components/schemas/TableWebhookTestCallRequest", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "url": { "type": "string", "description": "The URL that must be called when the webhook is triggered.", "maxLength": 2000, "key$": "url" }, "event_type": { "allOf": [{ "enum": ["rows.created", "rows.updated", "rows.deleted", "field.created", "field.updated", "field.deleted", "view.created", "view.updated", "view.deleted", "view.rows_entered"], "type": "string", "description": "* `rows.created` - rows.created\n* `rows.updated` - rows.updated\n* `rows.deleted` - rows.deleted\n* `field.created` - field.created\n* `field.updated` - field.updated\n* `field.deleted` - field.deleted\n* `view.created` - view.created\n* `view.updated` - view.updated\n* `view.deleted` - view.deleted\n* `view.rows_entered` - view.rows_entered", "x-ref": "#/components/schemas/EventTypeEnum" }], "description": "The event type that must be used for the test call.\n\n* `rows.created` - rows.created\n* `rows.updated` - rows.updated\n* `rows.deleted` - rows.deleted\n* `field.created` - field.created\n* `field.updated` - field.updated\n* `field.deleted` - field.deleted\n* `view.created` - view.created\n* `view.updated` - view.updated\n* `view.deleted` - view.deleted\n* `view.rows_entered` - view.rows_entered", "key$": "event_type" }, "request_method": { "allOf": [{ "enum": ["POST", "GET", "PUT", "PATCH", "DELETE"], "type": "string", "description": "* `POST` - Post\n* `GET` - Get\n* `PUT` - Put\n* `PATCH` - Patch\n* `DELETE` - Delete", "x-ref": "#/components/schemas/RequestMethodEnum" }], "description": "The request method that be used when the event occurs.\n\n* `POST` - Post\n* `GET` - Get\n* `PUT` - Put\n* `PATCH` - Patch\n* `DELETE` - Delete", "key$": "request_method" }, "headers": { "type": "object", "additionalProperties": {}, "description": "The additional headers as an object where the key is the name and the value the value.", "key$": "headers" }, "use_user_field_names": { "type": "boolean", "description": "Indicates whether the field names must be used as payload key instead of the id.", "key$": "use_user_field_names" } }, "required": ["event_type", "url"], "x-ref": "#/components/schemas/TableWebhookTestCallRequest" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "url": { "type": "string", "description": "The URL that must be called when the webhook is triggered.", "maxLength": 2000, "key$": "url" }, "event_type": { "allOf": [{ "enum": ["rows.created", "rows.updated", "rows.deleted", "field.created", "field.updated", "field.deleted", "view.created", "view.updated", "view.deleted", "view.rows_entered"], "type": "string", "description": "* `rows.created` - rows.created\n* `rows.updated` - rows.updated\n* `rows.deleted` - rows.deleted\n* `field.created` - field.created\n* `field.updated` - field.updated\n* `field.deleted` - field.deleted\n* `view.created` - view.created\n* `view.updated` - view.updated\n* `view.deleted` - view.deleted\n* `view.rows_entered` - view.rows_entered", "x-ref": "#/components/schemas/EventTypeEnum" }], "description": "The event type that must be used for the test call.\n\n* `rows.created` - rows.created\n* `rows.updated` - rows.updated\n* `rows.deleted` - rows.deleted\n* `field.created` - field.created\n* `field.updated` - field.updated\n* `field.deleted` - field.deleted\n* `view.created` - view.created\n* `view.updated` - view.updated\n* `view.deleted` - view.deleted\n* `view.rows_entered` - view.rows_entered", "key$": "event_type" }, "request_method": { "allOf": [{ "enum": ["POST", "GET", "PUT", "PATCH", "DELETE"], "type": "string", "description": "* `POST` - Post\n* `GET` - Get\n* `PUT` - Put\n* `PATCH` - Patch\n* `DELETE` - Delete", "x-ref": "#/components/schemas/RequestMethodEnum" }], "description": "The request method that be used when the event occurs.\n\n* `POST` - Post\n* `GET` - Get\n* `PUT` - Put\n* `PATCH` - Patch\n* `DELETE` - Delete", "key$": "request_method" }, "headers": { "type": "object", "additionalProperties": {}, "description": "The additional headers as an object where the key is the name and the value the value.", "key$": "headers" }, "use_user_field_names": { "type": "boolean", "description": "Indicates whether the field names must be used as payload key instead of the id.", "key$": "use_user_field_names" } }, "required": ["event_type", "url"], "x-ref": "#/components/schemas/TableWebhookTestCallRequest" } } }, "required": true }, "parameters": [{ "in": "path", "name": "table_id", "schema": { "type": "integer" }, "description": "The id of the table that must be tested.", "required": true, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let table_webhook_test_call_ref01_data = Object.values(setup.data.existing.table_webhook_test_call)[0];
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/table_webhook_test_call/TableWebhookTestCallTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['table_webhook_test_call01', 'table_webhook_test_call02', 'table_webhook_test_call03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_TABLE_WEBHOOK_TEST_CALL_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_TABLE_WEBHOOK_TEST_CALL_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_TABLE_WEBHOOK_TEST_CALL_ENTID'];
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
//# sourceMappingURL=TableWebhookTestCallEntity.test.js.map