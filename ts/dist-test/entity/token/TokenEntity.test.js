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
(0, node_test_1.describe)('TokenEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.Token();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('token hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.BaserowSDK.test(offline).Token().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.BaserowSDK.test(offline).Token()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.BaserowSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.Token().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.BaserowSDK.test().Token().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.BaserowSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.Token().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.Token().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Token().list({ "id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'token.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "id", "index$": 0 }, "key": { "a": true, "h": "Key", "n": "key", "r": true, "sh": "The unique token key that can be used to authorize for the table row endpoints.", "t": "`$STRING`", "key$": "key", "index$": 1 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "The human readable name of the database token for the user.", "t": "`$STRING`", "key$": "name", "index$": 2 }, "permissions": { "a": true, "h": "Permissions", "n": "permissions", "op": { "update": { "req": false, "type": "`$OBJECT`" } }, "r": true, "sh": "Indicates per operation which permissions the database token has within the whole workspace.", "t": "`$OBJECT`", "union": { "branches": 2, "count": 8, "depth": 6 }, "key$": "permissions", "index$": 3 }, "rotate_key": { "a": true, "h": "Rotate Key", "n": "rotate_key", "r": false, "sh": "Indicates if a new key must be generated.", "t": "`$BOOLEAN`", "key$": "rotate_key", "index$": 4 }, "workspace": { "a": true, "h": "Workspace", "n": "workspace", "r": true, "sh": "Only the tables of the workspace can be accessed.", "t": "`$INTEGER`", "key$": "workspace", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "token", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["name", "workspace"], "co": { "id": "POST /api/database/tokens/", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/database/tokens/", "q": {}, "r": {}, "rb": { "alternatives": [{ "fields": [{ "name": "name" }, { "name": "workspace" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "name" }, { "name": "workspace" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "tokens" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/database/tokens/", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/database/tokens/", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "tokens" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/database/tokens/{token_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "token_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/database/tokens/{token_id}/", "q": { "exist": ["id"] }, "r": { "param": { "token_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "tokens" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["name", "permissions", "rotate_key"], "co": { "id": "PATCH /api/database/tokens/{token_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "token_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/database/tokens/{token_id}/", "q": { "exist": ["id"] }, "r": { "param": { "token_id": "id" } }, "rb": { "alternatives": [{ "fields": [{ "name": "name" }, { "name": "permissions" }, { "name": "rotate_key" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "name" }, { "name": "permissions" }, { "name": "rotate_key" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "tokens" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "token", "name__orig": "token", "Name": "Token", "name_": "token", "name-": "token", "NAME": "TOKEN", "index$": 147 }, { "active": true, "entity": "token", "key$": "BasicTokenFlow", "kind": "basic", "name": "BasicTokenFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "token_ref01" }, "m": {}, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "token_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "token_ref01", "srcdatavar": "token_ref01_data", "suffix": "_up0", "textfield": "key" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-token_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "token_ref01", "srcdatavar": "token_ref01_data", "suffix": "_dt0" }, "m": { "id": "token01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-token_ref01" } }] }] }, 'Token', { "POST /api/database/tokens/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "type": "string", "description": "The human readable name of the database token for the user.", "maxLength": 100, "key$": "name" }, "workspace": { "type": "integer", "description": "Only the tables of the workspace can be accessed.", "key$": "workspace" } }, "required": ["name", "workspace"], "x-ref": "#/components/schemas/TokenCreate", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "name": { "type": "string", "description": "The human readable name of the database token for the user.", "maxLength": 100, "key$": "name" }, "workspace": { "type": "integer", "description": "Only the tables of the workspace can be accessed.", "key$": "workspace" } }, "required": ["name", "workspace"], "x-ref": "#/components/schemas/TokenCreate" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "name": { "type": "string", "description": "The human readable name of the database token for the user.", "maxLength": 100, "key$": "name" }, "workspace": { "type": "integer", "description": "Only the tables of the workspace can be accessed.", "key$": "workspace" } }, "required": ["name", "workspace"], "x-ref": "#/components/schemas/TokenCreate" } } }, "required": true }, "parameters": [] }, "GET /api/database/tokens/": { "protocol": "http", "parameters": [] }, "GET /api/database/tokens/{token_id}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "token_id", "schema": { "type": "integer" }, "description": "Returns the database token related to the provided value.", "required": true, "index$": 0 }] }, "PATCH /api/database/tokens/{token_id}/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "type": "string", "description": "The human readable name of the database token for the user.", "maxLength": 100, "key$": "name" }, "permissions": { "type": "object", "description": "Indicates per operation which permissions the database token has within the whole workspace. If the value of for example `create` is `true`, then the token can create rows in all tables related to the workspace. If a list is provided with for example `[[\"table\", 1]]` then the token only has create permissions for the table with id 1. Same goes for if a database references is provided. `[['database', 1]]` means create permissions for all tables in the database with id 1.\n\nExample:\n```json\n{\n  \"create\": true// Allows creating rows in all tables.\n  // Allows reading rows from database 1 and table 10.\n  \"read\": [[\"database\", 1], [\"table\", 10]],\n  \"update\": false  // Denies updating rows in all tables.\n  \"delete\": []  // Denies deleting rows in all tables.\n }\n```", "properties": { "create": { "anyOf": [{}, {}] }, "read": { "anyOf": [{}, {}] }, "update": { "anyOf": [{}, {}] }, "delete": { "anyOf": [{}, {}] } }, "key$": "permissions" }, "rotate_key": { "type": "boolean", "default": false, "description": "Indicates if a new key must be generated.", "key$": "rotate_key" } }, "x-ref": "#/components/schemas/PatchedTokenUpdate", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "name": { "type": "string", "description": "The human readable name of the database token for the user.", "maxLength": 100, "key$": "name" }, "permissions": { "type": "object", "description": "Indicates per operation which permissions the database token has within the whole workspace. If the value of for example `create` is `true`, then the token can create rows in all tables related to the workspace. If a list is provided with for example `[[\"table\", 1]]` then the token only has create permissions for the table with id 1. Same goes for if a database references is provided. `[['database', 1]]` means create permissions for all tables in the database with id 1.\n\nExample:\n```json\n{\n  \"create\": true// Allows creating rows in all tables.\n  // Allows reading rows from database 1 and table 10.\n  \"read\": [[\"database\", 1], [\"table\", 10]],\n  \"update\": false  // Denies updating rows in all tables.\n  \"delete\": []  // Denies deleting rows in all tables.\n }\n```", "properties": { "create": { "anyOf": [{}, {}] }, "read": { "anyOf": [{}, {}] }, "update": { "anyOf": [{}, {}] }, "delete": { "anyOf": [{}, {}] } }, "key$": "permissions" }, "rotate_key": { "type": "boolean", "default": false, "description": "Indicates if a new key must be generated.", "key$": "rotate_key" } }, "x-ref": "#/components/schemas/PatchedTokenUpdate" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "name": { "type": "string", "description": "The human readable name of the database token for the user.", "maxLength": 100, "key$": "name" }, "permissions": { "type": "object", "description": "Indicates per operation which permissions the database token has within the whole workspace. If the value of for example `create` is `true`, then the token can create rows in all tables related to the workspace. If a list is provided with for example `[[\"table\", 1]]` then the token only has create permissions for the table with id 1. Same goes for if a database references is provided. `[['database', 1]]` means create permissions for all tables in the database with id 1.\n\nExample:\n```json\n{\n  \"create\": true// Allows creating rows in all tables.\n  // Allows reading rows from database 1 and table 10.\n  \"read\": [[\"database\", 1], [\"table\", 10]],\n  \"update\": false  // Denies updating rows in all tables.\n  \"delete\": []  // Denies deleting rows in all tables.\n }\n```", "properties": { "create": { "anyOf": [{}, {}] }, "read": { "anyOf": [{}, {}] }, "update": { "anyOf": [{}, {}] }, "delete": { "anyOf": [{}, {}] } }, "key$": "permissions" }, "rotate_key": { "type": "boolean", "default": false, "description": "Indicates if a new key must be generated.", "key$": "rotate_key" } }, "x-ref": "#/components/schemas/PatchedTokenUpdate" } } } }, "parameters": [{ "in": "path", "name": "token_id", "schema": { "type": "integer" }, "description": "Updates the database token related to the provided value.", "required": true, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const token_ref01_ent = client.Token();
        let token_ref01_data = setup.data.new.token['token_ref01'];
        token_ref01_data = (await token_ref01_ent.create(token_ref01_data)).data();
        (0, node_assert_1.default)(null != token_ref01_data.id);
        // LIST
        const token_ref01_match = {};
        const token_ref01_list = (await token_ref01_ent.list(token_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(token_ref01_list, { id: token_ref01_data.id })));
        // UPDATE
        const token_ref01_data_up0 = {};
        token_ref01_data_up0.id = token_ref01_data.id;
        const token_ref01_markdef_up0 = { name: 'key', value: 'Mark01-token_ref01_' + setup.now };
        token_ref01_data_up0[token_ref01_markdef_up0.name] = token_ref01_markdef_up0.value;
        const token_ref01_resdata_up0 = (await token_ref01_ent.update(token_ref01_data_up0)).data();
        (0, node_assert_1.default)(token_ref01_resdata_up0.id === token_ref01_data_up0.id);
        (0, node_assert_1.default)(token_ref01_resdata_up0[token_ref01_markdef_up0.name] === token_ref01_markdef_up0.value);
        // LOAD
        const token_ref01_match_dt0 = {};
        token_ref01_match_dt0.id = token_ref01_data.id;
        const token_ref01_data_dt0 = (await token_ref01_ent.load(token_ref01_match_dt0)).data();
        (0, node_assert_1.default)(token_ref01_data_dt0.id === token_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/token/TokenTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['token01', 'token02', 'token03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_TOKEN_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_TOKEN_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_TOKEN_ENTID'];
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
//# sourceMappingURL=TokenEntity.test.js.map