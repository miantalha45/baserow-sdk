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
(0, node_test_1.describe)('PageEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.Page();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Page().create({ "builder_id": "x", "name": "x", "path": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['create', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'page.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "builder_id": { "a": true, "h": "Builder Id", "n": "builder_id", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "builder_id", "index$": 0 }, "graph": { "a": true, "h": "Graph", "n": "graph", "r": true, "ro": true, "sh": "A JSON serialized graph containing the points and edges.", "t": "`$ANY`", "key$": "graph", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "id", "index$": 2 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "t": "`$STRING`", "key$": "name", "index$": 3 }, "order": { "a": true, "h": "Order", "n": "order", "r": true, "sh": "Lowest first.", "t": "`$INTEGER`", "key$": "order", "index$": 4 }, "path": { "a": true, "h": "Path", "n": "path", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "t": "`$STRING`", "key$": "path", "index$": 5 }, "path_params": { "a": true, "h": "Path Params", "n": "path_params", "r": false, "t": "`$ARRAY`", "key$": "path_params", "index$": 6 }, "query_params": { "a": true, "h": "Query Params", "n": "query_params", "r": false, "t": "`$ARRAY`", "key$": "query_params", "index$": 7 }, "role_type": { "a": true, "h": "Role Type", "n": "role_type", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "ro": true, "sh": "Role type is used in conjunction with roles to control access to this page.", "t": "`$STRING`", "key$": "role_type", "index$": 8 }, "roles": { "a": true, "h": "Roles", "n": "roles", "op": { "update": { "req": false, "type": "`$ANY`" } }, "r": true, "ro": true, "sh": "List of user roles that are associated with this page.", "t": "`$ANY`", "key$": "roles", "index$": 9 }, "shared": { "a": true, "h": "Shared", "n": "shared", "r": true, "ro": true, "t": "`$BOOLEAN`", "key$": "shared", "index$": 10 }, "visibility": { "a": true, "h": "Visibility", "n": "visibility", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "ro": true, "sh": "Controls the page's visibility.", "t": "`$STRING`", "key$": "visibility", "index$": 11 } }, "id": { "field": "id", "name": "id" }, "name": "page", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["name", "path", "path_params", "query_params"], "co": { "id": "POST /api/builder/{builder_id}/pages/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "builder_id", "or": "builder_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/builder/{builder_id}/pages/", "q": { "exist": ["builder_id"] }, "r": {}, "rb": { "alternatives": [{ "fields": [{ "name": "name" }, { "name": "path" }, { "list": true, "name": "path_params" }, { "list": true, "name": "query_params" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "name" }, { "name": "path" }, { "list": true, "name": "path_params" }, { "list": true, "name": "query_params" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "builder" }, { "var": "builder_id" }, { "lit": "pages" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["name", "path", "path_params", "query_params", "role_type", "roles", "visibility"], "co": { "id": "PATCH /api/builder/pages/{page_id}/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "page_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/builder/pages/{page_id}/", "q": { "exist": ["id"] }, "r": { "param": { "page_id": "id" } }, "rb": { "alternatives": [{ "fields": [{ "name": "name" }, { "name": "path" }, { "list": true, "name": "path_params" }, { "list": true, "name": "query_params" }, { "name": "role_type" }, { "name": "roles" }, { "name": "visibility" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "name" }, { "name": "path" }, { "list": true, "name": "path_params" }, { "list": true, "name": "query_params" }, { "name": "role_type" }, { "name": "roles" }, { "name": "visibility" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "builder" }, { "lit": "pages" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "page", "name__orig": "page", "Name": "Page", "name_": "page", "name-": "page", "NAME": "PAGE", "index$": 115 }, { "active": true, "entity": "page", "key$": "BasicPageFlow", "kind": "basic", "name": "BasicPageFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "page_ref01" }, "m": { "builder_id": "builder01" }, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": { "ref": "page_ref01", "srcdatavar": "page_ref01_data", "suffix": "_up0", "textfield": "name" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-page_ref01" } }], "v": [] }] }, 'Page', { "POST /api/builder/{builder_id}/pages/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 255, "key$": "name" }, "path": { "type": "string", "maxLength": 255, "key$": "path" }, "path_params": { "type": "array", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "The name of the parameter.", "maxLength": 255 }, "type": { "allOf": [], "description": "The type of the parameter.\n\n* `text` - text\n* `numeric` - numeric" } }, "required": ["name", "type"], "x-ref": "#/components/schemas/PathParam" }, "key$": "path_params" }, "query_params": { "type": "array", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "The name of the parameter.", "maxLength": 255 }, "type": { "allOf": [], "description": "The type of the parameter.\n\n* `text` - text\n* `numeric` - numeric" } }, "required": ["name", "type"], "x-ref": "#/components/schemas/PathParam" }, "key$": "query_params" } }, "required": ["name", "path"], "x-ref": "#/components/schemas/CreatePage", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 255, "key$": "name" }, "path": { "type": "string", "maxLength": 255, "key$": "path" }, "path_params": { "type": "array", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "The name of the parameter.", "maxLength": 255 }, "type": { "allOf": [], "description": "The type of the parameter.\n\n* `text` - text\n* `numeric` - numeric" } }, "required": ["name", "type"], "x-ref": "#/components/schemas/PathParam" }, "key$": "path_params" }, "query_params": { "type": "array", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "The name of the parameter.", "maxLength": 255 }, "type": { "allOf": [], "description": "The type of the parameter.\n\n* `text` - text\n* `numeric` - numeric" } }, "required": ["name", "type"], "x-ref": "#/components/schemas/PathParam" }, "key$": "query_params" } }, "required": ["name", "path"], "x-ref": "#/components/schemas/CreatePage" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 255, "key$": "name" }, "path": { "type": "string", "maxLength": 255, "key$": "path" }, "path_params": { "type": "array", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "The name of the parameter.", "maxLength": 255 }, "type": { "allOf": [], "description": "The type of the parameter.\n\n* `text` - text\n* `numeric` - numeric" } }, "required": ["name", "type"], "x-ref": "#/components/schemas/PathParam" }, "key$": "path_params" }, "query_params": { "type": "array", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "The name of the parameter.", "maxLength": 255 }, "type": { "allOf": [], "description": "The type of the parameter.\n\n* `text` - text\n* `numeric` - numeric" } }, "required": ["name", "type"], "x-ref": "#/components/schemas/PathParam" }, "key$": "query_params" } }, "required": ["name", "path"], "x-ref": "#/components/schemas/CreatePage" } } }, "required": true }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "builder_id", "schema": { "type": "integer" }, "description": "Creates a page for the application builder related to the provided value.", "required": true, "index$": 1 }] }, "PATCH /api/builder/pages/{page_id}/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 255, "key$": "name" }, "path": { "type": "string", "maxLength": 255, "key$": "path" }, "path_params": { "type": "array", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "The name of the parameter.", "maxLength": 255 }, "type": { "allOf": [], "description": "The type of the parameter.\n\n* `text` - text\n* `numeric` - numeric" } }, "required": ["name", "type"], "x-ref": "#/components/schemas/PathParam" }, "key$": "path_params" }, "visibility": { "allOf": [{ "enum": ["all", "logged-in"], "type": "string", "description": "* `all` - All\n* `logged-in` - Logged In", "x-ref": "#/components/schemas/VisibilityC5fEnum" }], "description": "Controls the page's visibility. When set to 'logged-in', the builder's login_page must also be set.\n\n* `all` - All\n* `logged-in` - Logged In", "key$": "visibility" }, "role_type": { "allOf": [{ "enum": ["allow_all", "allow_all_except", "disallow_all_except"], "type": "string", "description": "* `allow_all` - Allow All\n* `allow_all_except` - Allow All Except\n* `disallow_all_except` - Disallow All Except", "x-ref": "#/components/schemas/RoleTypeEnum" }], "description": "Role type is used in conjunction with roles to control access to this page.\n\n* `allow_all` - Allow All\n* `allow_all_except` - Allow All Except\n* `disallow_all_except` - Disallow All Except", "key$": "role_type" }, "roles": { "description": "List of user roles that are associated with this page. Used in conjunction with role_type.", "key$": "roles" }, "query_params": { "type": "array", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "The name of the parameter.", "maxLength": 255 }, "type": { "allOf": [], "description": "The type of the parameter.\n\n* `text` - text\n* `numeric` - numeric" } }, "required": ["name", "type"], "x-ref": "#/components/schemas/QueryParam" }, "key$": "query_params" } }, "x-ref": "#/components/schemas/PatchedUpdatePage", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 255, "key$": "name" }, "path": { "type": "string", "maxLength": 255, "key$": "path" }, "path_params": { "type": "array", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "The name of the parameter.", "maxLength": 255 }, "type": { "allOf": [], "description": "The type of the parameter.\n\n* `text` - text\n* `numeric` - numeric" } }, "required": ["name", "type"], "x-ref": "#/components/schemas/PathParam" }, "key$": "path_params" }, "visibility": { "allOf": [{ "enum": ["all", "logged-in"], "type": "string", "description": "* `all` - All\n* `logged-in` - Logged In", "x-ref": "#/components/schemas/VisibilityC5fEnum" }], "description": "Controls the page's visibility. When set to 'logged-in', the builder's login_page must also be set.\n\n* `all` - All\n* `logged-in` - Logged In", "key$": "visibility" }, "role_type": { "allOf": [{ "enum": ["allow_all", "allow_all_except", "disallow_all_except"], "type": "string", "description": "* `allow_all` - Allow All\n* `allow_all_except` - Allow All Except\n* `disallow_all_except` - Disallow All Except", "x-ref": "#/components/schemas/RoleTypeEnum" }], "description": "Role type is used in conjunction with roles to control access to this page.\n\n* `allow_all` - Allow All\n* `allow_all_except` - Allow All Except\n* `disallow_all_except` - Disallow All Except", "key$": "role_type" }, "roles": { "description": "List of user roles that are associated with this page. Used in conjunction with role_type.", "key$": "roles" }, "query_params": { "type": "array", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "The name of the parameter.", "maxLength": 255 }, "type": { "allOf": [], "description": "The type of the parameter.\n\n* `text` - text\n* `numeric` - numeric" } }, "required": ["name", "type"], "x-ref": "#/components/schemas/QueryParam" }, "key$": "query_params" } }, "x-ref": "#/components/schemas/PatchedUpdatePage" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 255, "key$": "name" }, "path": { "type": "string", "maxLength": 255, "key$": "path" }, "path_params": { "type": "array", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "The name of the parameter.", "maxLength": 255 }, "type": { "allOf": [], "description": "The type of the parameter.\n\n* `text` - text\n* `numeric` - numeric" } }, "required": ["name", "type"], "x-ref": "#/components/schemas/PathParam" }, "key$": "path_params" }, "visibility": { "allOf": [{ "enum": ["all", "logged-in"], "type": "string", "description": "* `all` - All\n* `logged-in` - Logged In", "x-ref": "#/components/schemas/VisibilityC5fEnum" }], "description": "Controls the page's visibility. When set to 'logged-in', the builder's login_page must also be set.\n\n* `all` - All\n* `logged-in` - Logged In", "key$": "visibility" }, "role_type": { "allOf": [{ "enum": ["allow_all", "allow_all_except", "disallow_all_except"], "type": "string", "description": "* `allow_all` - Allow All\n* `allow_all_except` - Allow All Except\n* `disallow_all_except` - Disallow All Except", "x-ref": "#/components/schemas/RoleTypeEnum" }], "description": "Role type is used in conjunction with roles to control access to this page.\n\n* `allow_all` - Allow All\n* `allow_all_except` - Allow All Except\n* `disallow_all_except` - Disallow All Except", "key$": "role_type" }, "roles": { "description": "List of user roles that are associated with this page. Used in conjunction with role_type.", "key$": "roles" }, "query_params": { "type": "array", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "The name of the parameter.", "maxLength": 255 }, "type": { "allOf": [], "description": "The type of the parameter.\n\n* `text` - text\n* `numeric` - numeric" } }, "required": ["name", "type"], "x-ref": "#/components/schemas/QueryParam" }, "key$": "query_params" } }, "x-ref": "#/components/schemas/PatchedUpdatePage" } } } }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "page_id", "schema": { "type": "integer" }, "description": "The id of the page", "required": true, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const page_ref01_ent = client.Page();
        let page_ref01_data = setup.data.new.page['page_ref01'];
        page_ref01_data['builder_id'] = setup.idmap['builder01'];
        page_ref01_data = (await page_ref01_ent.create(page_ref01_data)).data();
        (0, node_assert_1.default)(null != page_ref01_data.id);
        // UPDATE
        const page_ref01_data_up0 = {};
        page_ref01_data_up0.id = page_ref01_data.id;
        const page_ref01_markdef_up0 = { name: 'name', value: 'Mark01-page_ref01_' + setup.now };
        page_ref01_data_up0[page_ref01_markdef_up0.name] = page_ref01_markdef_up0.value;
        const page_ref01_resdata_up0 = (await page_ref01_ent.update(page_ref01_data_up0)).data();
        (0, node_assert_1.default)(page_ref01_resdata_up0.id === page_ref01_data_up0.id);
        (0, node_assert_1.default)(page_ref01_resdata_up0[page_ref01_markdef_up0.name] === page_ref01_markdef_up0.value);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/page/PageTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['page01', 'page02', 'page03', 'builder01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_PAGE_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_PAGE_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_PAGE_ENTID'];
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
//# sourceMappingURL=PageEntity.test.js.map