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
(0, node_test_1.describe)('ViewFieldOptionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.ViewFieldOption();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.ViewFieldOption().load({ "id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'view_field_option.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id" }, "name": "view_field_option", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/database/views/{view_id}/field-options/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "view_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/database/views/{view_id}/field-options/", "q": { "exist": ["id"] }, "r": { "param": { "view_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "views" }, { "var": "id" }, { "lit": "field-options" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["field_options"], "co": { "id": "PATCH /api/database/views/{view_id}/field-options/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "client_undo_redo_action_group_id", "or": "ClientUndoRedoActionGroupId", "r": false, "t": "`$STRING`", "index$": 1 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "view_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/database/views/{view_id}/field-options/", "q": { "exist": ["id"] }, "r": { "param": { "view_id": "id" } }, "rb": { "alternatives": [{ "kind": "multipart", "media": "multipart/form-data" }, { "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "views" }, { "var": "id" }, { "lit": "field-options" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "view_field_option", "name__orig": "view_field_option", "Name": "ViewFieldOption", "name_": "view_field_option", "name-": "view-field-option", "NAME": "VIEW_FIELD_OPTION", "index$": 162 }, { "active": true, "entity": "view_field_option", "key$": "BasicViewFieldOptionFlow", "kind": "basic", "name": "BasicViewFieldOptionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "view_field_option_ref01", "srcdatavar": "view_field_option_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-view_field_option_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "view_field_option_ref01", "srcdatavar": "view_field_option_ref01_data", "suffix": "_dt0" }, "m": { "id": "view_field_option01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-view_field_option_ref01" } }] }] }, 'ViewFieldOption', { "GET /api/database/views/{view_id}/field-options/": { "protocol": "http", "parameters": [{ "in": "path", "name": "view_id", "schema": { "type": "integer" }, "description": "Responds with field options related to the provided value.", "required": true, "index$": 0 }] }, "PATCH /api/database/views/{view_id}/field-options/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "anyOf": [{ "type": "object", "properties": { "field_options": { "type": "object", "additionalProperties": { "type": "object", "properties": {}, "x-ref": "#/components/schemas/GridViewFieldOptions" }, "description": "An object containing the field id as key and the properties related to view as value." } }, "required": ["field_options"], "x-ref": "#/components/schemas/grid_view_field_options" }, { "type": "object", "properties": { "field_options": { "type": "object", "additionalProperties": { "type": "object", "properties": {}, "x-ref": "#/components/schemas/GalleryViewFieldOptions" }, "description": "An object containing the field id as key and the properties related to view as value." } }, "required": ["field_options"], "x-ref": "#/components/schemas/gallery_view_field_options" }, { "type": "object", "properties": { "field_options": { "type": "object", "additionalProperties": { "type": "object", "properties": {}, "x-ref": "#/components/schemas/FormViewFieldOptions" }, "description": "An object containing the field id as key and the properties related to view as value." } }, "required": ["field_options"], "x-ref": "#/components/schemas/form_view_field_options" }, { "type": "object", "properties": { "field_options": { "type": "object", "additionalProperties": { "type": "object", "properties": {}, "x-ref": "#/components/schemas/KanbanViewFieldOptions" }, "description": "An object containing the field id as key and the properties related to view as value." } }, "required": ["field_options"], "x-ref": "#/components/schemas/kanban_view_field_options" }, { "type": "object", "properties": { "field_options": { "type": "object", "additionalProperties": { "type": "object", "properties": {}, "x-ref": "#/components/schemas/CalendarViewFieldOptions" }, "description": "An object containing the field id as key and the properties related to view as value." } }, "required": ["field_options"], "x-ref": "#/components/schemas/calendar_view_field_options" }, { "type": "object", "properties": { "field_options": { "type": "object", "additionalProperties": { "type": "object", "properties": {}, "x-ref": "#/components/schemas/TimelineViewFieldOptions" }, "description": "An object containing the field id as key and the properties related to view as value." } }, "required": ["field_options"], "x-ref": "#/components/schemas/timeline_view_field_options" }], "x-ref": "#/components/schemas/PatchedViewFieldOptions", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "anyOf": [{ "type": "object", "properties": { "field_options": { "type": "object", "additionalProperties": { "type": "object", "properties": {}, "x-ref": "#/components/schemas/GridViewFieldOptions" }, "description": "An object containing the field id as key and the properties related to view as value." } }, "required": ["field_options"], "x-ref": "#/components/schemas/grid_view_field_options" }, { "type": "object", "properties": { "field_options": { "type": "object", "additionalProperties": { "type": "object", "properties": {}, "x-ref": "#/components/schemas/GalleryViewFieldOptions" }, "description": "An object containing the field id as key and the properties related to view as value." } }, "required": ["field_options"], "x-ref": "#/components/schemas/gallery_view_field_options" }, { "type": "object", "properties": { "field_options": { "type": "object", "additionalProperties": { "type": "object", "properties": {}, "x-ref": "#/components/schemas/FormViewFieldOptions" }, "description": "An object containing the field id as key and the properties related to view as value." } }, "required": ["field_options"], "x-ref": "#/components/schemas/form_view_field_options" }, { "type": "object", "properties": { "field_options": { "type": "object", "additionalProperties": { "type": "object", "properties": {}, "x-ref": "#/components/schemas/KanbanViewFieldOptions" }, "description": "An object containing the field id as key and the properties related to view as value." } }, "required": ["field_options"], "x-ref": "#/components/schemas/kanban_view_field_options" }, { "type": "object", "properties": { "field_options": { "type": "object", "additionalProperties": { "type": "object", "properties": {}, "x-ref": "#/components/schemas/CalendarViewFieldOptions" }, "description": "An object containing the field id as key and the properties related to view as value." } }, "required": ["field_options"], "x-ref": "#/components/schemas/calendar_view_field_options" }, { "type": "object", "properties": { "field_options": { "type": "object", "additionalProperties": { "type": "object", "properties": {}, "x-ref": "#/components/schemas/TimelineViewFieldOptions" }, "description": "An object containing the field id as key and the properties related to view as value." } }, "required": ["field_options"], "x-ref": "#/components/schemas/timeline_view_field_options" }], "x-ref": "#/components/schemas/PatchedViewFieldOptions" } }, "multipart/form-data": { "schema": { "anyOf": [{ "type": "object", "properties": { "field_options": { "type": "object", "additionalProperties": { "type": "object", "properties": {}, "x-ref": "#/components/schemas/GridViewFieldOptions" }, "description": "An object containing the field id as key and the properties related to view as value." } }, "required": ["field_options"], "x-ref": "#/components/schemas/grid_view_field_options" }, { "type": "object", "properties": { "field_options": { "type": "object", "additionalProperties": { "type": "object", "properties": {}, "x-ref": "#/components/schemas/GalleryViewFieldOptions" }, "description": "An object containing the field id as key and the properties related to view as value." } }, "required": ["field_options"], "x-ref": "#/components/schemas/gallery_view_field_options" }, { "type": "object", "properties": { "field_options": { "type": "object", "additionalProperties": { "type": "object", "properties": {}, "x-ref": "#/components/schemas/FormViewFieldOptions" }, "description": "An object containing the field id as key and the properties related to view as value." } }, "required": ["field_options"], "x-ref": "#/components/schemas/form_view_field_options" }, { "type": "object", "properties": { "field_options": { "type": "object", "additionalProperties": { "type": "object", "properties": {}, "x-ref": "#/components/schemas/KanbanViewFieldOptions" }, "description": "An object containing the field id as key and the properties related to view as value." } }, "required": ["field_options"], "x-ref": "#/components/schemas/kanban_view_field_options" }, { "type": "object", "properties": { "field_options": { "type": "object", "additionalProperties": { "type": "object", "properties": {}, "x-ref": "#/components/schemas/CalendarViewFieldOptions" }, "description": "An object containing the field id as key and the properties related to view as value." } }, "required": ["field_options"], "x-ref": "#/components/schemas/calendar_view_field_options" }, { "type": "object", "properties": { "field_options": { "type": "object", "additionalProperties": { "type": "object", "properties": {}, "x-ref": "#/components/schemas/TimelineViewFieldOptions" }, "description": "An object containing the field id as key and the properties related to view as value." } }, "required": ["field_options"], "x-ref": "#/components/schemas/timeline_view_field_options" }], "x-ref": "#/components/schemas/PatchedViewFieldOptions" } } } }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "header", "name": "ClientUndoRedoActionGroupId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.", "index$": 1 }, { "in": "path", "name": "view_id", "schema": { "type": "integer" }, "description": "Updates the field options related to the provided value.", "required": true, "index$": 2 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let view_field_option_ref01_data = Object.values(setup.data.existing.view_field_option)[0];
        // UPDATE
        const view_field_option_ref01_ent = client.ViewFieldOption();
        const view_field_option_ref01_data_up0 = {};
        view_field_option_ref01_data_up0.id = view_field_option_ref01_data.id;
        const view_field_option_ref01_resdata_up0 = (await view_field_option_ref01_ent.update(view_field_option_ref01_data_up0)).data();
        (0, node_assert_1.default)(view_field_option_ref01_resdata_up0.id === view_field_option_ref01_data_up0.id);
        // LOAD
        const view_field_option_ref01_match_dt0 = {};
        view_field_option_ref01_match_dt0.id = view_field_option_ref01_data.id;
        const view_field_option_ref01_data_dt0 = (await view_field_option_ref01_ent.load(view_field_option_ref01_match_dt0)).data();
        (0, node_assert_1.default)(view_field_option_ref01_data_dt0.id === view_field_option_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/view_field_option/ViewFieldOptionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['view_field_option01', 'view_field_option02', 'view_field_option03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_VIEW_FIELD_OPTION_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_VIEW_FIELD_OPTION_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_VIEW_FIELD_OPTION_ENTID'];
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
//# sourceMappingURL=ViewFieldOptionEntity.test.js.map