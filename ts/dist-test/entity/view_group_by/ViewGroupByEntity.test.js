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
(0, node_test_1.describe)('ViewGroupByEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.ViewGroupBy();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.ViewGroupBy().list({ "id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'view_group_by.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "field": { "a": true, "h": "Field", "n": "field", "op": { "update": { "req": false, "type": "`$INTEGER`" } }, "r": true, "sh": "The field that must be grouped by.", "t": "`$INTEGER`", "key$": "field", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "id", "index$": 1 }, "order": { "a": true, "h": "Order", "n": "order", "r": false, "sh": "Indicates the sort order direction.", "t": "`$STRING`", "key$": "order", "index$": 2 }, "priority": { "a": true, "h": "Priority", "n": "priority", "r": true, "ro": true, "sh": "Position of this group by in the ordering chain.", "t": "`$INTEGER`", "key$": "priority", "index$": 3 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "Indicates the sort type.", "t": "`$STRING`", "key$": "type", "index$": 4 }, "view": { "a": true, "h": "View", "n": "view", "r": true, "sh": "The view to which the group by applies.", "t": "`$INTEGER`", "key$": "view", "index$": 5 }, "width": { "a": true, "h": "Width", "n": "width", "r": false, "sh": "The pixel width of the group by in the related view.", "t": "`$INTEGER`", "key$": "width", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "view_group_by", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["field", "order", "type", "width"], "co": { "id": "POST /api/database/views/{view_id}/group_bys/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "client_undo_redo_action_group_id", "or": "ClientUndoRedoActionGroupId", "r": false, "t": "`$STRING`", "index$": 1 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "view_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/database/views/{view_id}/group_bys/", "q": { "exist": ["id"] }, "r": { "param": { "view_id": "id" } }, "rb": { "alternatives": [{ "fields": [{ "name": "field" }, { "name": "order" }, { "name": "type" }, { "name": "width" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "field" }, { "name": "order" }, { "name": "type" }, { "name": "width" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "views" }, { "var": "id" }, { "lit": "group_bys" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/database/views/{view_id}/group_bys/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "view_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/database/views/{view_id}/group_bys/", "q": { "exist": ["id"] }, "r": { "param": { "view_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "views" }, { "var": "id" }, { "lit": "group_bys" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/database/views/group_by/{view_group_by_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "view_group_by_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/database/views/group_by/{view_group_by_id}/", "q": { "exist": ["id"] }, "r": { "param": { "view_group_by_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "views" }, { "lit": "group_by" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["field", "order", "type", "width"], "co": { "id": "PATCH /api/database/views/group_by/{view_group_by_id}/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "client_undo_redo_action_group_id", "or": "ClientUndoRedoActionGroupId", "r": false, "t": "`$STRING`", "index$": 1 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "view_group_by_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/database/views/group_by/{view_group_by_id}/", "q": { "exist": ["id"] }, "r": { "param": { "view_group_by_id": "id" } }, "rb": { "alternatives": [{ "fields": [{ "name": "field" }, { "name": "order" }, { "name": "type" }, { "name": "width" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "field" }, { "name": "order" }, { "name": "type" }, { "name": "width" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "views" }, { "lit": "group_by" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "view_group_by", "name__orig": "view_group_by", "Name": "ViewGroupBy", "name_": "view_group_by", "name-": "view-group-by", "NAME": "VIEW_GROUP_BY", "index$": 165 }, { "active": true, "entity": "view_group_by", "key$": "BasicViewGroupByFlow", "kind": "basic", "name": "BasicViewGroupByFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "view_group_by_ref01" }, "m": { "view_id": "view01" }, "o": "create", "s": [], "v": [], "unreachable": true }, { "a": false, "d": {}, "i": {}, "m": { "view_id": "view01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "view_group_by_ref01" } }], "unreachable": true }, { "a": true, "d": {}, "i": { "ref": "view_group_by_ref01", "srcdatavar": "view_group_by_ref01_data", "suffix": "_up0", "textfield": "order" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-view_group_by_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "view_group_by_ref01", "srcdatavar": "view_group_by_ref01_data", "suffix": "_dt0" }, "m": { "id": "view_group_by01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-view_group_by_ref01" } }] }] }, 'ViewGroupBy', { "POST /api/database/views/{view_id}/group_bys/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "field": { "type": "integer", "description": "The field that must be grouped by.", "key$": "field" }, "order": { "allOf": [{ "enum": ["ASC", "DESC"], "type": "string", "description": "* `ASC` - Ascending\n* `DESC` - Descending", "x-ref": "#/components/schemas/OrderEnum" }], "default": "ASC", "description": "Indicates the sort order direction. ASC (Ascending) is from A to Z and DESC (Descending) is from Z to A.\n\n* `ASC` - Ascending\n* `DESC` - Descending", "key$": "order" }, "width": { "type": "integer", "maximum": 2147483647, "minimum": 0, "default": 200, "description": "The pixel width of the group by in the related view.", "key$": "width" }, "type": { "type": "string", "default": "default", "description": "Indicates the sort type. Will automatically fall back to `default` if incompatible with field type.", "maxLength": 32, "key$": "type" } }, "required": ["field"], "x-ref": "#/components/schemas/CreateViewGroupBy", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "field": { "type": "integer", "description": "The field that must be grouped by.", "key$": "field" }, "order": { "allOf": [{ "enum": ["ASC", "DESC"], "type": "string", "description": "* `ASC` - Ascending\n* `DESC` - Descending", "x-ref": "#/components/schemas/OrderEnum" }], "default": "ASC", "description": "Indicates the sort order direction. ASC (Ascending) is from A to Z and DESC (Descending) is from Z to A.\n\n* `ASC` - Ascending\n* `DESC` - Descending", "key$": "order" }, "width": { "type": "integer", "maximum": 2147483647, "minimum": 0, "default": 200, "description": "The pixel width of the group by in the related view.", "key$": "width" }, "type": { "type": "string", "default": "default", "description": "Indicates the sort type. Will automatically fall back to `default` if incompatible with field type.", "maxLength": 32, "key$": "type" } }, "required": ["field"], "x-ref": "#/components/schemas/CreateViewGroupBy" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "field": { "type": "integer", "description": "The field that must be grouped by.", "key$": "field" }, "order": { "allOf": [{ "enum": ["ASC", "DESC"], "type": "string", "description": "* `ASC` - Ascending\n* `DESC` - Descending", "x-ref": "#/components/schemas/OrderEnum" }], "default": "ASC", "description": "Indicates the sort order direction. ASC (Ascending) is from A to Z and DESC (Descending) is from Z to A.\n\n* `ASC` - Ascending\n* `DESC` - Descending", "key$": "order" }, "width": { "type": "integer", "maximum": 2147483647, "minimum": 0, "default": 200, "description": "The pixel width of the group by in the related view.", "key$": "width" }, "type": { "type": "string", "default": "default", "description": "Indicates the sort type. Will automatically fall back to `default` if incompatible with field type.", "maxLength": 32, "key$": "type" } }, "required": ["field"], "x-ref": "#/components/schemas/CreateViewGroupBy" } } }, "required": true }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "header", "name": "ClientUndoRedoActionGroupId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.", "index$": 1 }, { "in": "path", "name": "view_id", "schema": { "type": "integer" }, "description": "Creates a group by for the view related to the provided value.", "required": true, "index$": 2 }] }, "GET /api/database/views/{view_id}/group_bys/": { "protocol": "http", "parameters": [{ "in": "path", "name": "view_id", "schema": { "type": "integer" }, "description": "Returns only groupings of the view related to the provided value.", "required": true, "index$": 0 }] }, "GET /api/database/views/group_by/{view_group_by_id}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "view_group_by_id", "schema": { "type": "integer" }, "description": "Returns the view group by related to the provided value.", "required": true, "index$": 0 }] }, "PATCH /api/database/views/group_by/{view_group_by_id}/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "field": { "type": "integer", "description": "The field that must be grouped by.", "key$": "field" }, "order": { "allOf": [{ "enum": ["ASC", "DESC"], "type": "string", "description": "* `ASC` - Ascending\n* `DESC` - Descending", "x-ref": "#/components/schemas/OrderEnum" }], "description": "Indicates the sort order direction. ASC (Ascending) is from A to Z and DESC (Descending) is from Z to A.\n\n* `ASC` - Ascending\n* `DESC` - Descending", "key$": "order" }, "width": { "type": "integer", "maximum": 2147483647, "minimum": 0, "description": "The pixel width of the group by in the related view.", "key$": "width" }, "type": { "type": "string", "description": "Indicates the sort type. Will automatically fall back to `default` if incompatible with field type.", "maxLength": 32, "key$": "type" } }, "x-ref": "#/components/schemas/PatchedUpdateViewGroupBy", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "field": { "type": "integer", "description": "The field that must be grouped by.", "key$": "field" }, "order": { "allOf": [{ "enum": ["ASC", "DESC"], "type": "string", "description": "* `ASC` - Ascending\n* `DESC` - Descending", "x-ref": "#/components/schemas/OrderEnum" }], "description": "Indicates the sort order direction. ASC (Ascending) is from A to Z and DESC (Descending) is from Z to A.\n\n* `ASC` - Ascending\n* `DESC` - Descending", "key$": "order" }, "width": { "type": "integer", "maximum": 2147483647, "minimum": 0, "description": "The pixel width of the group by in the related view.", "key$": "width" }, "type": { "type": "string", "description": "Indicates the sort type. Will automatically fall back to `default` if incompatible with field type.", "maxLength": 32, "key$": "type" } }, "x-ref": "#/components/schemas/PatchedUpdateViewGroupBy" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "field": { "type": "integer", "description": "The field that must be grouped by.", "key$": "field" }, "order": { "allOf": [{ "enum": ["ASC", "DESC"], "type": "string", "description": "* `ASC` - Ascending\n* `DESC` - Descending", "x-ref": "#/components/schemas/OrderEnum" }], "description": "Indicates the sort order direction. ASC (Ascending) is from A to Z and DESC (Descending) is from Z to A.\n\n* `ASC` - Ascending\n* `DESC` - Descending", "key$": "order" }, "width": { "type": "integer", "maximum": 2147483647, "minimum": 0, "description": "The pixel width of the group by in the related view.", "key$": "width" }, "type": { "type": "string", "description": "Indicates the sort type. Will automatically fall back to `default` if incompatible with field type.", "maxLength": 32, "key$": "type" } }, "x-ref": "#/components/schemas/PatchedUpdateViewGroupBy" } } } }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "header", "name": "ClientUndoRedoActionGroupId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.", "index$": 1 }, { "in": "path", "name": "view_group_by_id", "schema": { "type": "integer" }, "description": "Updates the view group by related to the provided value.", "required": true, "index$": 2 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let view_group_by_ref01_data = Object.values(setup.data.existing.view_group_by)[0];
        // UPDATE
        const view_group_by_ref01_ent = client.ViewGroupBy();
        const view_group_by_ref01_data_up0 = {};
        view_group_by_ref01_data_up0.id = view_group_by_ref01_data.id;
        const view_group_by_ref01_markdef_up0 = { name: 'order', value: 'Mark01-view_group_by_ref01_' + setup.now };
        view_group_by_ref01_data_up0[view_group_by_ref01_markdef_up0.name] = view_group_by_ref01_markdef_up0.value;
        const view_group_by_ref01_resdata_up0 = (await view_group_by_ref01_ent.update(view_group_by_ref01_data_up0)).data();
        (0, node_assert_1.default)(view_group_by_ref01_resdata_up0.id === view_group_by_ref01_data_up0.id);
        (0, node_assert_1.default)(view_group_by_ref01_resdata_up0[view_group_by_ref01_markdef_up0.name] === view_group_by_ref01_markdef_up0.value);
        // LOAD
        const view_group_by_ref01_match_dt0 = {};
        view_group_by_ref01_match_dt0.id = view_group_by_ref01_data.id;
        const view_group_by_ref01_data_dt0 = (await view_group_by_ref01_ent.load(view_group_by_ref01_match_dt0)).data();
        (0, node_assert_1.default)(view_group_by_ref01_data_dt0.id === view_group_by_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/view_group_by/ViewGroupByTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['view_group_by01', 'view_group_by02', 'view_group_by03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_VIEW_GROUP_BY_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_VIEW_GROUP_BY_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_VIEW_GROUP_BY_ENTID'];
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
//# sourceMappingURL=ViewGroupByEntity.test.js.map