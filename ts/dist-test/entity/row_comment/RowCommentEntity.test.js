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
(0, node_test_1.describe)('RowCommentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.RowComment();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.RowComment().create({ "row_id": "x", "table_id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'row_comment.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_on": { "a": true, "fo": "date-time", "h": "Created On", "n": "created_on", "r": true, "ro": true, "t": "`$STRING`", "key$": "created_on", "index$": 0 }, "edited": { "a": true, "h": "Edited", "n": "edited", "r": true, "ro": true, "t": "`$STRING`", "key$": "edited", "index$": 1 }, "first_name": { "a": true, "h": "First Name", "n": "first_name", "r": false, "t": "`$STRING`", "key$": "first_name", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "id", "index$": 3 }, "message": { "a": true, "h": "Message", "n": "message", "r": true, "ro": true, "sh": "The rich text comment content.", "t": "`$STRING`", "key$": "message", "index$": 4 }, "row_id": { "a": true, "h": "Row Id", "n": "row_id", "r": true, "sh": "The id of the row the comment is for.", "t": "`$INTEGER`", "key$": "row_id", "index$": 5 }, "table_id": { "a": true, "h": "Table Id", "n": "table_id", "r": true, "ro": true, "sh": "The table the row this comment is for is found in.", "t": "`$INTEGER`", "key$": "table_id", "index$": 6 }, "trashed": { "a": true, "h": "Trashed", "n": "trashed", "r": false, "t": "`$BOOLEAN`", "key$": "trashed", "index$": 7 }, "updated_on": { "a": true, "fo": "date-time", "h": "Updated On", "n": "updated_on", "r": true, "ro": true, "t": "`$STRING`", "key$": "updated_on", "index$": 8 }, "user_id": { "a": true, "h": "User Id", "n": "user_id", "r": true, "ro": true, "sh": "The user who made the comment.", "t": "`$INTEGER`", "key$": "user_id", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "row_comment", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["message"], "co": { "id": "POST /api/row_comments/{table_id}/{row_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "row_id", "or": "row_id", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "param", "n": "table_id", "or": "table_id", "r": true, "t": "`$INTEGER`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "view", "or": "view", "r": false, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/row_comments/{table_id}/{row_id}/", "q": { "exist": ["row_id", "table_id"] }, "r": {}, "rb": { "alternatives": [{ "fields": [{ "name": "message" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "message" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "row_comments" }, { "var": "table_id" }, { "var": "row_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/row_comments/{table_id}/comment/{comment_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "comment_id", "or": "comment_id", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "table_id", "r": true, "t": "`$INTEGER`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "view", "or": "view", "r": false, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/row_comments/{table_id}/comment/{comment_id}/", "q": { "exist": ["comment_id", "id"] }, "r": { "param": { "table_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "row_comments" }, { "var": "id" }, { "lit": "comment" }, { "var": "comment_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /api/row_comments/{table_id}/comment/{comment_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "comment_id", "or": "comment_id", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "table_id", "r": true, "t": "`$INTEGER`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "view", "or": "view", "r": false, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/row_comments/{table_id}/comment/{comment_id}/", "q": { "exist": ["comment_id", "id"] }, "r": { "param": { "table_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "row_comments" }, { "var": "id" }, { "lit": "comment" }, { "var": "comment_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "row_comment", "name__orig": "row_comment", "Name": "RowComment", "name_": "row_comment", "name-": "row-comment", "NAME": "ROW_COMMENT", "index$": 135 }, { "active": true, "entity": "row_comment", "key$": "BasicRowCommentFlow", "kind": "basic", "name": "BasicRowCommentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "row_comment_ref01" }, "m": { "row_id": "row01", "table_id": "table01" }, "o": "create", "s": [], "v": [] }, { "a": false, "d": {}, "i": { "ref": "row_comment_ref01", "srcdatavar": "row_comment_ref01_data", "suffix": "_up0", "textfield": "first_name" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-row_comment_ref01" } }], "v": [], "unreachable": true }, { "a": false, "d": {}, "i": { "ref": "row_comment_ref01", "suffix": "_rm0" }, "m": { "id": "row_comment01" }, "o": "remove", "s": [], "v": [], "unreachable": true }] }, 'RowComment', { "POST /api/row_comments/{table_id}/{row_id}/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "message": { "description": "The rich text comment content.", "key$": "message" } }, "required": ["message"], "x-ref": "#/components/schemas/RowCommentCreate", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "message": { "description": "The rich text comment content.", "key$": "message" } }, "required": ["message"], "x-ref": "#/components/schemas/RowCommentCreate" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "message": { "description": "The rich text comment content.", "key$": "message" } }, "required": ["message"], "x-ref": "#/components/schemas/RowCommentCreate" } } }, "required": true }, "parameters": [{ "in": "path", "name": "row_id", "schema": { "type": "integer" }, "description": "The row to create a comment for.", "required": true, "index$": 0 }, { "in": "path", "name": "table_id", "schema": { "type": "integer" }, "description": "The table to find the row to comment on in.", "required": true, "index$": 1 }, { "in": "query", "name": "view", "schema": { "type": "integer" }, "description": "Optionally provide a view id. If the user doesn't have table-level permissions, the system will check if the user has view-level permissions as a fallback.", "index$": 2 }] }, "DELETE /api/row_comments/{table_id}/comment/{comment_id}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "comment_id", "schema": { "type": "integer" }, "description": "The row comment to delete.", "required": true, "index$": 0 }, { "in": "path", "name": "table_id", "schema": { "type": "integer" }, "description": "The table the row is in.", "required": true, "index$": 1 }, { "in": "query", "name": "view", "schema": { "type": "integer" }, "description": "Optionally provide a view id. If the user doesn't have table-level permissions, the system will check if the user has view-level permissions as a fallback.", "index$": 2 }] }, "PATCH /api/row_comments/{table_id}/comment/{comment_id}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "comment_id", "schema": { "type": "integer" }, "description": "The row comment to update.", "required": true, "index$": 0 }, { "in": "path", "name": "table_id", "schema": { "type": "integer" }, "description": "The table the row is in.", "required": true, "index$": 1 }, { "in": "query", "name": "view", "schema": { "type": "integer" }, "description": "Optionally provide a view id. If the user doesn't have table-level permissions, the system will check if the user has view-level permissions as a fallback.", "index$": 2 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const row_comment_ref01_ent = client.RowComment();
        let row_comment_ref01_data = setup.data.new.row_comment['row_comment_ref01'];
        row_comment_ref01_data['row_id'] = setup.idmap['row01'];
        row_comment_ref01_data['table_id'] = setup.idmap['table01'];
        row_comment_ref01_data = (await row_comment_ref01_ent.create(row_comment_ref01_data)).data();
        (0, node_assert_1.default)(null != row_comment_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/row_comment/RowCommentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['row_comment01', 'row_comment02', 'row_comment03', 'row01', 'table01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_ROW_COMMENT_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_ROW_COMMENT_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_ROW_COMMENT_ENTID'];
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
//# sourceMappingURL=RowCommentEntity.test.js.map