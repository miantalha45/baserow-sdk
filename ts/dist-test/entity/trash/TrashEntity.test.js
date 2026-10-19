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
(0, node_test_1.describe)('TrashEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.Trash();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('trash hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.BaserowSDK.test(offline).Trash().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.BaserowSDK.test(offline).Trash()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.BaserowSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.Trash().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.BaserowSDK.test().Trash().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.BaserowSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.Trash().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.Trash().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Trash().list({ "id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'trash.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "applications": { "a": true, "h": "Applications", "n": "applications", "r": true, "t": "`$ARRAY`", "key$": "applications", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "t": "`$INTEGER`", "key$": "id", "index$": 1 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "t": "`$STRING`", "key$": "name", "index$": 2 }, "trashed": { "a": true, "h": "Trashed", "n": "trashed", "r": true, "t": "`$BOOLEAN`", "key$": "trashed", "index$": 3 } }, "id": { "field": "id", "name": "id" }, "name": "trash", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/trash/", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/trash/", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "trash" }], "t": { "req": "`reqdata`", "res": "`body.workspaces`" }, "index$": 0 }], "key$": "list" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/trash/workspace/{workspace_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "workspace_id", "or": "workspace_id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "application_id", "or": "application_id", "r": false, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/trash/workspace/{workspace_id}/", "q": { "exist": ["workspace_id"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "trash" }, { "lit": "workspace" }, { "var": "workspace_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["parent_trash_item_id", "trash_item_id", "trash_item_type"], "co": { "id": "PATCH /api/trash/restore/", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "PATCH", "o": "/api/trash/restore/", "q": { "$action": "restore" }, "r": {}, "rb": { "alternatives": [{ "fields": [{ "name": "parent_trash_item_id" }, { "name": "trash_item_id" }, { "name": "trash_item_type" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "parent_trash_item_id" }, { "name": "trash_item_id" }, { "name": "trash_item_type" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "trash" }, { "lit": "restore" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.workspace"]] }, "key$": "trash", "name__orig": "trash", "Name": "Trash", "name_": "trash", "name-": "trash", "NAME": "TRASH", "index$": 148 }, { "active": true, "entity": "trash", "key$": "BasicTrashFlow", "kind": "basic", "name": "BasicTrashFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "trash_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "trash_ref01", "srcdatavar": "trash_ref01_data", "suffix": "_up0", "textfield": "name" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-trash_ref01" } }], "v": [] }] }, 'Trash', { "GET /api/trash/": { "protocol": "http", "parameters": [] }, "DELETE /api/trash/workspace/{workspace_id}/": { "protocol": "http", "parameters": [{ "in": "query", "name": "application_id", "schema": { "type": "integer" }, "description": "Optionally filters down the trash to delete to only items for this application in the workspace.", "index$": 0 }, { "in": "path", "name": "workspace_id", "schema": { "type": "integer" }, "description": "The workspace whose trash contents to empty, including the workspace itself if it is also trashed.", "required": true, "index$": 1 }] }, "PATCH /api/trash/restore/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "description": "Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.", "properties": { "trash_item_id": { "type": "integer", "minimum": 0 }, "parent_trash_item_id": { "type": "integer", "minimum": 0, "nullable": true }, "trash_item_type": { "enum": ["workspace", "application", "agent", "integration", "user_source", "table", "field", "row", "rows", "view", "database_workflow_action", "builder_domain", "builder_page", "builder_element", "builder_data_source", "builder_workflow_action", "widget", "automation", "automation_workflow", "automation_node", "row_comment", "team"], "type": "string", "description": "* `workspace` - workspace\n* `application` - application\n* `agent` - agent\n* `integration` - integration\n* `user_source` - user_source\n* `table` - table\n* `field` - field\n* `row` - row\n* `rows` - rows\n* `view` - view\n* `database_workflow_action` - database_workflow_action\n* `builder_domain` - builder_domain\n* `builder_page` - builder_page\n* `builder_element` - builder_element\n* `builder_data_source` - builder_data_source\n* `builder_workflow_action` - builder_workflow_action\n* `widget` - widget\n* `automation` - automation\n* `automation_workflow` - automation_workflow\n* `automation_node` - automation_node\n* `row_comment` - row_comment\n* `team` - team", "x-ref": "#/components/schemas/TrashItemTypeEnum" } }, "x-ref": "#/components/schemas/PatchedTrashEntryRequest" } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "description": "Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.", "properties": { "trash_item_id": { "type": "integer", "minimum": 0 }, "parent_trash_item_id": { "type": "integer", "minimum": 0, "nullable": true }, "trash_item_type": { "enum": ["workspace", "application", "agent", "integration", "user_source", "table", "field", "row", "rows", "view", "database_workflow_action", "builder_domain", "builder_page", "builder_element", "builder_data_source", "builder_workflow_action", "widget", "automation", "automation_workflow", "automation_node", "row_comment", "team"], "type": "string", "description": "* `workspace` - workspace\n* `application` - application\n* `agent` - agent\n* `integration` - integration\n* `user_source` - user_source\n* `table` - table\n* `field` - field\n* `row` - row\n* `rows` - rows\n* `view` - view\n* `database_workflow_action` - database_workflow_action\n* `builder_domain` - builder_domain\n* `builder_page` - builder_page\n* `builder_element` - builder_element\n* `builder_data_source` - builder_data_source\n* `builder_workflow_action` - builder_workflow_action\n* `widget` - widget\n* `automation` - automation\n* `automation_workflow` - automation_workflow\n* `automation_node` - automation_node\n* `row_comment` - row_comment\n* `team` - team", "x-ref": "#/components/schemas/TrashItemTypeEnum" } }, "x-ref": "#/components/schemas/PatchedTrashEntryRequest" } }, "multipart/form-data": { "schema": { "type": "object", "description": "Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.", "properties": { "trash_item_id": { "type": "integer", "minimum": 0 }, "parent_trash_item_id": { "type": "integer", "minimum": 0, "nullable": true }, "trash_item_type": { "enum": ["workspace", "application", "agent", "integration", "user_source", "table", "field", "row", "rows", "view", "database_workflow_action", "builder_domain", "builder_page", "builder_element", "builder_data_source", "builder_workflow_action", "widget", "automation", "automation_workflow", "automation_node", "row_comment", "team"], "type": "string", "description": "* `workspace` - workspace\n* `application` - application\n* `agent` - agent\n* `integration` - integration\n* `user_source` - user_source\n* `table` - table\n* `field` - field\n* `row` - row\n* `rows` - rows\n* `view` - view\n* `database_workflow_action` - database_workflow_action\n* `builder_domain` - builder_domain\n* `builder_page` - builder_page\n* `builder_element` - builder_element\n* `builder_data_source` - builder_data_source\n* `builder_workflow_action` - builder_workflow_action\n* `widget` - widget\n* `automation` - automation\n* `automation_workflow` - automation_workflow\n* `automation_node` - automation_node\n* `row_comment` - row_comment\n* `team` - team", "x-ref": "#/components/schemas/TrashItemTypeEnum" } }, "x-ref": "#/components/schemas/PatchedTrashEntryRequest" } } } }, "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let trash_ref01_data = Object.values(setup.data.existing.trash)[0];
        // LIST
        const trash_ref01_ent = client.Trash();
        const trash_ref01_match = {};
        const trash_ref01_list = (await trash_ref01_ent.list(trash_ref01_match)).map((e) => e.data());
        // UPDATE
        const trash_ref01_data_up0 = {};
        trash_ref01_data_up0.id = trash_ref01_data.id;
        const trash_ref01_markdef_up0 = { name: 'name', value: 'Mark01-trash_ref01_' + setup.now };
        trash_ref01_data_up0[trash_ref01_markdef_up0.name] = trash_ref01_markdef_up0.value;
        const trash_ref01_resdata_up0 = (await trash_ref01_ent.update(trash_ref01_data_up0)).data();
        (0, node_assert_1.default)(trash_ref01_resdata_up0.id === trash_ref01_data_up0.id);
        (0, node_assert_1.default)(trash_ref01_resdata_up0[trash_ref01_markdef_up0.name] === trash_ref01_markdef_up0.value);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/trash/TrashTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['trash01', 'trash02', 'trash03', 'workspace01', 'workspace02', 'workspace03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_TRASH_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_TRASH_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_TRASH_ENTID'];
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
//# sourceMappingURL=TrashEntity.test.js.map