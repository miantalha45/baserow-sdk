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
(0, node_test_1.describe)('ApplicationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.Application();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('application hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.BaserowSDK.test(offline).Application().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.BaserowSDK.test(offline).Application()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.BaserowSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.Application().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.BaserowSDK.test().Application().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.BaserowSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.Application().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.Application().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Application().list({ "id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'application.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "application_ids": { "a": true, "h": "Application Ids", "n": "application_ids", "r": true, "sh": "Application ids in the desired order.", "t": "`$ARRAY`", "key$": "application_ids", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 1 } }, "id": { "field": "id", "name": "id" }, "name": "application", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/applications/{application_id}/duplicate/async/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "client_undo_redo_action_group_id", "or": "ClientUndoRedoActionGroupId", "r": false, "t": "`$STRING`", "index$": 1 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "application_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/applications/{application_id}/duplicate/async/", "q": { "$action": "duplicate_async", "exist": ["id"] }, "r": { "param": { "application_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "applications" }, { "var": "id" }, { "lit": "duplicate" }, { "lit": "async" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["application_ids"], "co": { "id": "POST /api/applications/workspace/{workspace_id}/order/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "client_undo_redo_action_group_id", "or": "ClientUndoRedoActionGroupId", "r": false, "t": "`$STRING`", "index$": 1 }], "params": [{ "a": true, "k": "param", "n": "workspace_id", "or": "workspace_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/applications/workspace/{workspace_id}/order/", "q": { "exist": ["workspace_id"] }, "r": {}, "rb": { "alternatives": [{ "fields": [{ "list": true, "name": "application_ids" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "list": true, "name": "application_ids" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "applications" }, { "lit": "workspace" }, { "var": "workspace_id" }, { "lit": "order" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/applications/", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/applications/", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "applications" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/applications/{application_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "application_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/applications/{application_id}/", "q": { "exist": ["id"] }, "r": { "param": { "application_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "applications" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/applications/{application_id}/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "client_undo_redo_action_group_id", "or": "ClientUndoRedoActionGroupId", "r": false, "t": "`$STRING`", "index$": 1 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "application_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/applications/{application_id}/", "q": { "exist": ["id"] }, "r": { "param": { "application_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "applications" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["breakpoints", "custom_code", "description", "favicon_file", "login_page_id", "name", "scripts"], "co": { "id": "PATCH /api/applications/{application_id}/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "client_undo_redo_action_group_id", "or": "ClientUndoRedoActionGroupId", "r": false, "t": "`$STRING`", "index$": 1 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "application_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/applications/{application_id}/", "q": { "exist": ["id"] }, "r": { "param": { "application_id": "id" } }, "rb": { "alternatives": [{ "kind": "multipart", "media": "multipart/form-data" }, { "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "applications" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.workspace"]] }, "key$": "application", "name__orig": "application", "Name": "Application", "name_": "application", "name-": "application", "NAME": "APPLICATION", "index$": 16 }, { "active": true, "entity": "application", "key$": "BasicApplicationFlow", "kind": "basic", "name": "BasicApplicationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "application_ref01" }, "m": { "workspace_id": "workspace01" }, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "application_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "application_ref01", "srcdatavar": "application_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-application_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "application_ref01", "srcdatavar": "application_ref01_data", "suffix": "_dt0" }, "m": { "id": "application01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-application_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "application_ref01", "suffix": "_rm0" }, "m": { "id": "application01" }, "o": "remove", "s": [], "v": [] }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "application_ref01" } }] }] }, 'Application', { "POST /api/applications/{application_id}/duplicate/async/": { "protocol": "http", "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "header", "name": "ClientUndoRedoActionGroupId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.", "index$": 1 }, { "in": "path", "name": "application_id", "schema": { "type": "integer" }, "description": "The id of the application to duplicate.", "required": true, "index$": 2 }] }, "POST /api/applications/workspace/{workspace_id}/order/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "application_ids": { "type": "array", "items": { "type": "integer" }, "description": "Application ids in the desired order.", "key$": "application_ids" } }, "required": ["application_ids"], "x-ref": "#/components/schemas/OrderApplications", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "application_ids": { "type": "array", "items": { "type": "integer" }, "description": "Application ids in the desired order.", "key$": "application_ids" } }, "required": ["application_ids"], "x-ref": "#/components/schemas/OrderApplications" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "application_ids": { "type": "array", "items": { "type": "integer" }, "description": "Application ids in the desired order.", "key$": "application_ids" } }, "required": ["application_ids"], "x-ref": "#/components/schemas/OrderApplications" } } }, "required": true }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "header", "name": "ClientUndoRedoActionGroupId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.", "index$": 1 }, { "in": "path", "name": "workspace_id", "schema": { "type": "integer" }, "description": "Updates the order of the applications in the workspace related to the provided value.", "required": true, "index$": 2 }] }, "GET /api/applications/": { "protocol": "http", "parameters": [] }, "GET /api/applications/{application_id}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "application_id", "schema": { "type": "integer" }, "description": "Returns the application related to the provided value.", "required": true, "index$": 0 }] }, "DELETE /api/applications/{application_id}/": { "protocol": "http", "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "header", "name": "ClientUndoRedoActionGroupId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.", "index$": 1 }, { "in": "path", "name": "application_id", "schema": { "type": "integer" }, "description": "Deletes the application related to the provided value.", "required": true, "index$": 2 }] }, "PATCH /api/applications/{application_id}/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "anyOf": [{ "type": "object", "properties": { "name": { "type": "string", "maxLength": 160 } }, "required": ["name"], "x-ref": "#/components/schemas/DatabaseBaseApplicationUpdatePolymorphic" }, { "type": "object", "properties": { "name": { "type": "string", "maxLength": 160 }, "description": { "type": "string" } }, "required": ["name"], "x-ref": "#/components/schemas/DashboardBaseApplicationUpdatePolymorphic" }, { "type": "object", "description": "The Automation serializer.", "properties": { "name": { "type": "string", "maxLength": 160 } }, "required": ["name"], "x-ref": "#/components/schemas/AutomationBaseApplicationUpdatePolymorphic" }, { "type": "object", "properties": { "name": { "type": "string", "maxLength": 160 }, "favicon_file": { "allOf": [{}], "nullable": true, "description": "The favicon image file" }, "login_page_id": { "type": "integer", "nullable": true, "description": "The login page for this application. This is related to the visibility settings of builder pages." }, "breakpoints": { "type": "object", "additionalProperties": { "type": "integer", "maximum": 1920, "minimum": 320 }, "description": "The maximum widths in pixels for the responsive layouts, between 320 and 1920 pixels. Mobile and tablet breakpoints are required." }, "scripts": { "type": "array", "items": { "type": "object", "properties": {}, "required": [], "x-ref": "#/components/schemas/CustomScript" }, "description": "Custom CSS/JS scripts for this builder" }, "custom_code": { "allOf": [{}], "description": "Custom CSS/JS code for this builder" } }, "required": ["name"], "x-ref": "#/components/schemas/BuilderBaseApplicationUpdatePolymorphic" }], "x-ref": "#/components/schemas/PatchedApplicationBaseApplicationUpdatePolymorphic", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "anyOf": [{ "type": "object", "properties": { "name": { "type": "string", "maxLength": 160 } }, "required": ["name"], "x-ref": "#/components/schemas/DatabaseBaseApplicationUpdatePolymorphic" }, { "type": "object", "properties": { "name": { "type": "string", "maxLength": 160 }, "description": { "type": "string" } }, "required": ["name"], "x-ref": "#/components/schemas/DashboardBaseApplicationUpdatePolymorphic" }, { "type": "object", "description": "The Automation serializer.", "properties": { "name": { "type": "string", "maxLength": 160 } }, "required": ["name"], "x-ref": "#/components/schemas/AutomationBaseApplicationUpdatePolymorphic" }, { "type": "object", "properties": { "name": { "type": "string", "maxLength": 160 }, "favicon_file": { "allOf": [{}], "nullable": true, "description": "The favicon image file" }, "login_page_id": { "type": "integer", "nullable": true, "description": "The login page for this application. This is related to the visibility settings of builder pages." }, "breakpoints": { "type": "object", "additionalProperties": { "type": "integer", "maximum": 1920, "minimum": 320 }, "description": "The maximum widths in pixels for the responsive layouts, between 320 and 1920 pixels. Mobile and tablet breakpoints are required." }, "scripts": { "type": "array", "items": { "type": "object", "properties": {}, "required": [], "x-ref": "#/components/schemas/CustomScript" }, "description": "Custom CSS/JS scripts for this builder" }, "custom_code": { "allOf": [{}], "description": "Custom CSS/JS code for this builder" } }, "required": ["name"], "x-ref": "#/components/schemas/BuilderBaseApplicationUpdatePolymorphic" }], "x-ref": "#/components/schemas/PatchedApplicationBaseApplicationUpdatePolymorphic" } }, "multipart/form-data": { "schema": { "anyOf": [{ "type": "object", "properties": { "name": { "type": "string", "maxLength": 160 } }, "required": ["name"], "x-ref": "#/components/schemas/DatabaseBaseApplicationUpdatePolymorphic" }, { "type": "object", "properties": { "name": { "type": "string", "maxLength": 160 }, "description": { "type": "string" } }, "required": ["name"], "x-ref": "#/components/schemas/DashboardBaseApplicationUpdatePolymorphic" }, { "type": "object", "description": "The Automation serializer.", "properties": { "name": { "type": "string", "maxLength": 160 } }, "required": ["name"], "x-ref": "#/components/schemas/AutomationBaseApplicationUpdatePolymorphic" }, { "type": "object", "properties": { "name": { "type": "string", "maxLength": 160 }, "favicon_file": { "allOf": [{}], "nullable": true, "description": "The favicon image file" }, "login_page_id": { "type": "integer", "nullable": true, "description": "The login page for this application. This is related to the visibility settings of builder pages." }, "breakpoints": { "type": "object", "additionalProperties": { "type": "integer", "maximum": 1920, "minimum": 320 }, "description": "The maximum widths in pixels for the responsive layouts, between 320 and 1920 pixels. Mobile and tablet breakpoints are required." }, "scripts": { "type": "array", "items": { "type": "object", "properties": {}, "required": [], "x-ref": "#/components/schemas/CustomScript" }, "description": "Custom CSS/JS scripts for this builder" }, "custom_code": { "allOf": [{}], "description": "Custom CSS/JS code for this builder" } }, "required": ["name"], "x-ref": "#/components/schemas/BuilderBaseApplicationUpdatePolymorphic" }], "x-ref": "#/components/schemas/PatchedApplicationBaseApplicationUpdatePolymorphic" } } } }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "header", "name": "ClientUndoRedoActionGroupId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.", "index$": 1 }, { "in": "path", "name": "application_id", "schema": { "type": "integer" }, "description": "Updates the application related to the provided value.", "required": true, "index$": 2 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const application_ref01_ent = client.Application();
        let application_ref01_data = setup.data.new.application['application_ref01'];
        application_ref01_data['workspace_id'] = setup.idmap['workspace01'];
        application_ref01_data = (await application_ref01_ent.create(application_ref01_data)).data();
        (0, node_assert_1.default)(null != application_ref01_data.id);
        // LIST
        const application_ref01_match = {};
        const application_ref01_list = (await application_ref01_ent.list(application_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(application_ref01_list, { id: application_ref01_data.id })));
        // UPDATE
        const application_ref01_data_up0 = {};
        application_ref01_data_up0.id = application_ref01_data.id;
        const application_ref01_resdata_up0 = (await application_ref01_ent.update(application_ref01_data_up0)).data();
        (0, node_assert_1.default)(application_ref01_resdata_up0.id === application_ref01_data_up0.id);
        // LOAD
        const application_ref01_match_dt0 = {};
        application_ref01_match_dt0.id = application_ref01_data.id;
        const application_ref01_data_dt0 = (await application_ref01_ent.load(application_ref01_match_dt0)).data();
        (0, node_assert_1.default)(application_ref01_data_dt0.id === application_ref01_data.id);
        // REMOVE
        const application_ref01_match_rm0 = { id: application_ref01_data.id };
        await application_ref01_ent.remove(application_ref01_match_rm0);
        // LIST
        const application_ref01_match_rt0 = {};
        const application_ref01_list_rt0 = (await application_ref01_ent.list(application_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(application_ref01_list_rt0, { id: application_ref01_data.id })));
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/application/ApplicationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['application01', 'application02', 'application03', 'workspace01', 'workspace02', 'workspace03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_APPLICATION_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_APPLICATION_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_APPLICATION_ENTID'];
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
//# sourceMappingURL=ApplicationEntity.test.js.map