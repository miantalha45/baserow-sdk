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
(0, node_test_1.describe)('DatabaseTableFieldEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.DatabaseTableField();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.DatabaseTableField().create({ "field_id": "x", "progress_percentage": 1, "row_ids": "x", "state": "x", "workflow_action_ids": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'database_table_field.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_on": { "a": true, "fo": "date-time", "h": "Created On", "n": "created_on", "r": true, "ro": true, "t": "`$STRING`", "key$": "created_on", "index$": 0 }, "duplicated_field": { "a": true, "h": "Duplicated Field", "n": "duplicated_field", "r": true, "ro": true, "t": "`$ANY`", "key$": "duplicated_field", "index$": 1 }, "element_id": { "a": true, "h": "Element Id", "n": "element_id", "r": false, "sh": "The element the workflow actions belong to", "t": "`$INTEGER`", "key$": "element_id", "index$": 2 }, "error_code": { "a": true, "h": "Error Code", "n": "error_code", "r": false, "sh": "A machine readable error code indicating why the job failed.", "t": "`$STRING`", "key$": "error_code", "index$": 3 }, "field_id": { "a": true, "h": "Field Id", "n": "field_id", "r": true, "sh": "The ID of the AI field to generate values for.", "t": "`$INTEGER`", "key$": "field_id", "index$": 4 }, "human_readable_error": { "a": true, "h": "Human Readable Error", "n": "human_readable_error", "r": false, "sh": "A human readable error message indicating what went wrong.", "t": "`$STRING`", "key$": "human_readable_error", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "id", "index$": 6 }, "is_auto_update": { "a": true, "h": "Is Auto Update", "n": "is_auto_update", "r": true, "ro": true, "sh": "Indicates if the job has been created because values in a dependent field changed.", "t": "`$BOOLEAN`", "key$": "is_auto_update", "index$": 7 }, "only_empty": { "a": true, "h": "Only Empty", "n": "only_empty", "r": false, "sh": "Whether to only generate AI values for rows where the field is empty.", "t": "`$BOOLEAN`", "key$": "only_empty", "index$": 8 }, "original_field": { "a": true, "h": "Original Field", "n": "original_field", "r": true, "ro": true, "t": "`$ANY`", "key$": "original_field", "index$": 9 }, "progress_percentage": { "a": true, "h": "Progress Percentage", "n": "progress_percentage", "r": true, "sh": "A percentage indicating how far along the job is.", "t": "`$INTEGER`", "key$": "progress_percentage", "index$": 10 }, "row_ids": { "a": true, "h": "Row Ids", "n": "row_ids", "op": { "create": { "req": true, "type": "`$ARRAY`" } }, "r": false, "sh": "The IDs of the rows to generate AI values for.", "t": "`$ARRAY`", "key$": "row_ids", "index$": 11 }, "state": { "a": true, "h": "State", "n": "state", "r": true, "sh": "Indicates the state of the import job.", "t": "`$STRING`", "key$": "state", "index$": 12 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "ro": true, "sh": "The type of the job.", "t": "`$STRING`", "key$": "type", "index$": 13 }, "updated_on": { "a": true, "fo": "date-time", "h": "Updated On", "n": "updated_on", "r": true, "ro": true, "t": "`$STRING`", "key$": "updated_on", "index$": 14 }, "view_id": { "a": true, "h": "View Id", "n": "view_id", "r": false, "sh": "The ID of the view to generate AI values for.", "t": "`$INTEGER`", "key$": "view_id", "index$": 15 }, "workflow_action_ids": { "a": true, "h": "Workflow Action Ids", "n": "workflow_action_ids", "r": true, "sh": "The ids of the workflow actions in the order they are supposed to be set in", "t": "`$ARRAY`", "key$": "workflow_action_ids", "index$": 16 } }, "id": { "field": "id", "name": "id" }, "name": "database_table_field", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["element_id", "workflow_action_ids"], "co": { "id": "POST /api/database/field/{field_id}/workflow_actions/order/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "field_id", "or": "field_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/database/field/{field_id}/workflow_actions/order/", "q": { "exist": ["field_id"] }, "r": {}, "rb": { "alternatives": [{ "fields": [{ "name": "element_id" }, { "list": true, "name": "workflow_action_ids" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "element_id" }, { "list": true, "name": "workflow_action_ids" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "field" }, { "var": "field_id" }, { "lit": "workflow_actions" }, { "lit": "order" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/database/fields/{field_id}/duplicate/async/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "client_undo_redo_action_group_id", "or": "ClientUndoRedoActionGroupId", "r": false, "t": "`$STRING`", "index$": 1 }], "params": [{ "a": true, "k": "param", "n": "field_id", "or": "field_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/database/fields/{field_id}/duplicate/async/", "q": { "exist": ["field_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "fields" }, { "var": "field_id" }, { "lit": "duplicate" }, { "lit": "async" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "bf": ["row_ids"], "co": { "id": "POST /api/database/fields/{field_id}/generate-ai-field-values/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "client_undo_redo_action_group_id", "or": "ClientUndoRedoActionGroupId", "r": false, "t": "`$STRING`", "index$": 1 }], "params": [{ "a": true, "k": "param", "n": "field_id", "or": "field_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/database/fields/{field_id}/generate-ai-field-values/", "q": { "exist": ["field_id"] }, "r": {}, "rb": { "alternatives": [{ "fields": [{ "list": true, "name": "row_ids" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "list": true, "name": "row_ids" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "fields" }, { "var": "field_id" }, { "lit": "generate-ai-field-values" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "create" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/database/workflow_action/{workflow_action_id}/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "workflow_action_id", "or": "workflow_action_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/database/workflow_action/{workflow_action_id}/", "q": { "exist": ["workflow_action_id"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "workflow_action" }, { "var": "workflow_action_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.field"]] }, "key$": "database_table_field", "name__orig": "database_table_field", "Name": "DatabaseTableField", "name_": "database_table_field", "name-": "database-table-field", "NAME": "DATABASE_TABLE_FIELD", "index$": 54 }, { "active": true, "entity": "database_table_field", "key$": "BasicDatabaseTableFieldFlow", "kind": "basic", "name": "BasicDatabaseTableFieldFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "database_table_field_ref01" }, "m": { "field_id": "field01" }, "o": "create", "s": [], "v": [] }, { "a": false, "d": {}, "i": { "ref": "database_table_field_ref01", "suffix": "_rm0" }, "m": { "id": "database_table_field01" }, "o": "remove", "s": [], "v": [], "unreachable": true }] }, 'DatabaseTableField', { "POST /api/database/field/{field_id}/workflow_actions/order/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "workflow_action_ids": { "type": "array", "items": { "type": "integer" }, "description": "The ids of the workflow actions in the order they are supposed to be set in", "key$": "workflow_action_ids" }, "element_id": { "type": "integer", "description": "The element the workflow actions belong to", "key$": "element_id" } }, "required": ["workflow_action_ids"], "x-ref": "#/components/schemas/OrderWorkflowActions", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "workflow_action_ids": { "type": "array", "items": { "type": "integer" }, "description": "The ids of the workflow actions in the order they are supposed to be set in", "key$": "workflow_action_ids" }, "element_id": { "type": "integer", "description": "The element the workflow actions belong to", "key$": "element_id" } }, "required": ["workflow_action_ids"], "x-ref": "#/components/schemas/OrderWorkflowActions" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "workflow_action_ids": { "type": "array", "items": { "type": "integer" }, "description": "The ids of the workflow actions in the order they are supposed to be set in", "key$": "workflow_action_ids" }, "element_id": { "type": "integer", "description": "The element the workflow actions belong to", "key$": "element_id" } }, "required": ["workflow_action_ids"], "x-ref": "#/components/schemas/OrderWorkflowActions" } } }, "required": true }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "field_id", "schema": { "type": "integer" }, "description": "The button field the workflow actions belong to.", "required": true, "index$": 1 }] }, "POST /api/database/fields/{field_id}/duplicate/async/": { "protocol": "http", "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "header", "name": "ClientUndoRedoActionGroupId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.", "index$": 1 }, { "in": "path", "name": "field_id", "schema": { "type": "integer" }, "description": "The field to duplicate.", "required": true, "index$": 2 }] }, "POST /api/database/fields/{field_id}/generate-ai-field-values/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "row_ids": { "type": "array", "items": { "type": "integer" }, "description": "The ids of the rows that the values should be generated for.", "maxItems": 200, "key$": "row_ids" } }, "required": ["row_ids"], "x-ref": "#/components/schemas/GenerateAIFieldValueView", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "row_ids": { "type": "array", "items": { "type": "integer" }, "description": "The ids of the rows that the values should be generated for.", "maxItems": 200, "key$": "row_ids" } }, "required": ["row_ids"], "x-ref": "#/components/schemas/GenerateAIFieldValueView" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "row_ids": { "type": "array", "items": { "type": "integer" }, "description": "The ids of the rows that the values should be generated for.", "maxItems": 200, "key$": "row_ids" } }, "required": ["row_ids"], "x-ref": "#/components/schemas/GenerateAIFieldValueView" } } }, "required": true }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "header", "name": "ClientUndoRedoActionGroupId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.", "index$": 1 }, { "in": "path", "name": "field_id", "schema": { "type": "integer" }, "description": "The field to generate the value for.", "required": true, "index$": 2 }] }, "DELETE /api/database/workflow_action/{workflow_action_id}/": { "protocol": "http", "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "workflow_action_id", "schema": { "type": "integer" }, "description": "The id of the workflow action.", "required": true, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const database_table_field_ref01_ent = client.DatabaseTableField();
        let database_table_field_ref01_data = setup.data.new.database_table_field['database_table_field_ref01'];
        database_table_field_ref01_data['field_id'] = setup.idmap['field01'];
        database_table_field_ref01_data = (await database_table_field_ref01_ent.create(database_table_field_ref01_data)).data();
        (0, node_assert_1.default)(null != database_table_field_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/database_table_field/DatabaseTableFieldTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['database_table_field01', 'database_table_field02', 'database_table_field03', 'field01', 'field02', 'field03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_DATABASE_TABLE_FIELD_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_DATABASE_TABLE_FIELD_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_DATABASE_TABLE_FIELD_ENTID'];
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
//# sourceMappingURL=DatabaseTableFieldEntity.test.js.map