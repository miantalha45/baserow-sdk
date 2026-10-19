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
(0, node_test_1.describe)('WorkspaceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.Workspace();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('workspace hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.BaserowSDK.test(offline).Workspace().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.BaserowSDK.test(offline).Workspace()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.BaserowSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.Workspace().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.BaserowSDK.test().Workspace().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.BaserowSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.Workspace().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.Workspace().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Workspace().list({ "ai_features": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'workspace.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "ai_features": { "a": true, "h": "Ai Features", "n": "ai_features", "r": true, "ro": true, "t": "`$STRING`", "key$": "ai_features", "index$": 0 }, "base_url": { "a": true, "fo": "uri", "h": "Base Url", "n": "base_url", "r": true, "sh": "The base URL where the user can publicly accept his invitation.The accept token is going to be appended to the base_url (base_url '/token').", "t": "`$STRING`", "key$": "base_url", "index$": 1 }, "captcha_token": { "a": true, "h": "Captcha Token", "n": "captcha_token", "r": false, "sh": "The captcha response token, required when captcha is enabled.", "t": "`$STRING`", "key$": "captcha_token", "index$": 2 }, "created_on": { "a": true, "fo": "date-time", "h": "Created On", "n": "created_on", "r": true, "ro": true, "t": "`$STRING`", "key$": "created_on", "index$": 3 }, "email": { "a": true, "fo": "email", "h": "Email", "n": "email", "r": true, "ro": true, "sh": "The email address of the user that the invitation is meant for.", "t": "`$STRING`", "key$": "email", "index$": 4 }, "generative_ai_models_enabled": { "a": true, "h": "Generative Ai Models Enabled", "n": "generative_ai_models_enabled", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "ro": true, "sh": "Generative AI models available in this workspace.", "t": "`$STRING`", "key$": "generative_ai_models_enabled", "index$": 5 }, "has_more": { "a": true, "h": "Has More", "n": "has_more", "r": true, "sh": "Whether there are more results available for pagination", "t": "`$BOOLEAN`", "key$": "has_more", "index$": 6 }, "highest_role_uid": { "a": true, "h": "Highest Role Uid", "n": "highest_role_uid", "r": false, "sh": "Enterprise or advanced only: the highest role uid assigned to this user in this workspace on anything, including roles from teams.", "t": "`$STRING`", "key$": "highest_role_uid", "index$": 7 }, "id": { "a": true, "h": "Id", "n": "id", "op": { "update": { "req": false, "type": "`$INTEGER`" } }, "r": true, "ro": true, "sh": "Workspace id.", "t": "`$INTEGER`", "key$": "id", "index$": 8 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "ro": true, "sh": "User defined name.", "t": "`$STRING`", "key$": "name", "index$": 9 }, "order": { "a": true, "h": "Order", "n": "order", "r": true, "ro": true, "sh": "The requesting user's order within the workspace users.", "t": "`$INTEGER`", "key$": "order", "index$": 10 }, "permissions": { "a": true, "h": "Permissions", "n": "permissions", "op": { "create": { "req": true, "type": "`$STRING`" }, "list": { "req": true, "type": "`$STRING`" } }, "r": false, "ro": true, "sh": "The permissions that the user is going to get within the workspace after accepting the invitation.", "t": "`$STRING`", "key$": "permissions", "index$": 11 }, "results": { "a": true, "h": "Results", "n": "results", "r": true, "sh": "Priority-ordered search results", "t": "`$ARRAY`", "key$": "results", "index$": 12 }, "role_uid": { "a": true, "h": "Role Uid", "n": "role_uid", "r": false, "sh": "Enterprise or advanced only: the uid of the role that is assigned to this workspace user in this workspace.", "t": "`$STRING`", "key$": "role_uid", "index$": 13 }, "teams": { "a": true, "h": "Teams", "n": "teams", "r": false, "sh": "Enterprise only: a list of team IDs and names, which this workspace user belongs to in this workspace.", "t": "`$ARRAY`", "key$": "teams", "index$": 14 }, "to_be_deleted": { "a": true, "h": "To Be Deleted", "n": "to_be_deleted", "r": true, "sh": "True if user account is pending deletion.", "t": "`$BOOLEAN`", "key$": "to_be_deleted", "index$": 15 }, "two_factor_auth": { "a": true, "h": "Two Factor Auth", "n": "two_factor_auth", "r": true, "ro": true, "t": "`$STRING`", "key$": "two_factor_auth", "index$": 16 }, "unread_notifications_count": { "a": true, "h": "Unread Notifications Count", "n": "unread_notifications_count", "r": true, "ro": true, "sh": "The number of unread notifications for the requesting user.", "t": "`$INTEGER`", "key$": "unread_notifications_count", "index$": 17 }, "user_id": { "a": true, "h": "User Id", "n": "user_id", "r": true, "ro": true, "sh": "The user that has access to the workspace.", "t": "`$INTEGER`", "key$": "user_id", "index$": 18 }, "users": { "a": true, "h": "Users", "n": "users", "r": true, "ro": true, "sh": "List of all workspace users.", "t": "`$ARRAY`", "key$": "users", "index$": 19 }, "workspace": { "a": true, "h": "Workspace", "n": "workspace", "r": true, "sh": "The workspace that the user will get access to once the invitation is accepted.", "t": "`$INTEGER`", "key$": "workspace", "index$": 20 } }, "id": { "field": "id", "name": "id" }, "name": "workspace", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["base_url", "captcha_token", "email", "permissions"], "co": { "id": "POST /api/workspaces/invitations/workspace/{workspace_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "workspace_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/workspaces/invitations/workspace/{workspace_id}/", "q": { "exist": ["id"] }, "r": { "param": { "workspace_id": "id" } }, "rb": { "alternatives": [{ "fields": [{ "name": "base_url" }, { "name": "captcha_token" }, { "name": "email" }, { "name": "permissions" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "base_url" }, { "name": "captcha_token" }, { "name": "email" }, { "name": "permissions" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "workspaces" }, { "lit": "invitations" }, { "lit": "workspace" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/workspaces/{workspace_id}/export/async/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "workspace_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/workspaces/{workspace_id}/export/async/", "q": { "$action": "export_async", "exist": ["id"] }, "r": { "param": { "workspace_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "workspaces" }, { "var": "id" }, { "lit": "export" }, { "lit": "async" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /api/workspaces/{workspace_id}/import/async/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "workspace_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/workspaces/{workspace_id}/import/async/", "q": { "$action": "import_async", "exist": ["id"] }, "r": { "param": { "workspace_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "workspaces" }, { "var": "id" }, { "lit": "import" }, { "lit": "async" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "POST /api/workspaces/{workspace_id}/import/upload-file/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "workspace_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/workspaces/{workspace_id}/import/upload-file/", "q": { "$action": "import_upload_file", "exist": ["id"] }, "r": { "param": { "workspace_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "workspaces" }, { "var": "id" }, { "lit": "import" }, { "lit": "upload-file" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "co": { "id": "POST /api/workspaces/{workspace_id}/leave/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "workspace_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/workspaces/{workspace_id}/leave/", "q": { "$action": "leave", "exist": ["id"] }, "r": { "param": { "workspace_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "workspaces" }, { "var": "id" }, { "lit": "leave" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }, { "a": true, "bf": ["name"], "co": { "id": "POST /api/workspaces/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/workspaces/", "q": {}, "r": {}, "rb": { "alternatives": [{ "fields": [{ "name": "generative_ai_models_enabled" }, { "name": "id" }, { "name": "name" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "generative_ai_models_enabled" }, { "name": "id" }, { "name": "name" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "workspaces" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 5 }, { "a": true, "bf": ["workspaces"], "co": { "id": "POST /api/workspaces/order/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "client_undo_redo_action_group_id", "or": "ClientUndoRedoActionGroupId", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/api/workspaces/order/", "q": { "$action": "order" }, "r": {}, "rb": { "alternatives": [{ "fields": [{ "list": true, "name": "workspaces" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "list": true, "name": "workspaces" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "workspaces" }, { "lit": "order" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 6 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/workspaces/", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/workspaces/", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "workspaces" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/search/workspace/{workspace_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "workspace_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/search/workspace/{workspace_id}/", "q": { "exist": ["id"] }, "r": { "param": { "workspace_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "search" }, { "lit": "workspace" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/workspaces/invitations/workspace/{workspace_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "workspace_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/workspaces/invitations/workspace/{workspace_id}/", "q": { "exist": ["id"] }, "r": { "param": { "workspace_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "workspaces" }, { "lit": "invitations" }, { "lit": "workspace" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /api/workspaces/users/workspace/{workspace_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "workspace_id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "search", "or": "search", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "sort", "or": "sorts", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/workspaces/users/workspace/{workspace_id}/", "q": { "exist": ["id"] }, "r": { "param": { "workspace_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "workspaces" }, { "lit": "users" }, { "lit": "workspace" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/workspaces/{workspace_id}/import/{resource_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "workspace_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "resource_id", "or": "resource_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/api/workspaces/{workspace_id}/import/{resource_id}/", "q": { "exist": ["id", "resource_id"] }, "r": { "param": { "workspace_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "workspaces" }, { "var": "id" }, { "lit": "import" }, { "var": "resource_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /api/workspaces/{workspace_id}/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "client_undo_redo_action_group_id", "or": "ClientUndoRedoActionGroupId", "r": false, "t": "`$STRING`", "index$": 1 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "workspace_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/workspaces/{workspace_id}/", "q": { "exist": ["id"] }, "r": { "param": { "workspace_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "workspaces" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "DELETE /api/workspaces/users/{workspace_user_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "workspace_user_id", "or": "workspace_user_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/workspaces/users/{workspace_user_id}/", "q": { "exist": ["workspace_user_id"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "workspaces" }, { "lit": "users" }, { "var": "workspace_user_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["name"], "co": { "id": "PATCH /api/workspaces/{workspace_id}/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "client_undo_redo_action_group_id", "or": "ClientUndoRedoActionGroupId", "r": false, "t": "`$STRING`", "index$": 1 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "workspace_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/workspaces/{workspace_id}/", "q": { "exist": ["id"] }, "r": { "param": { "workspace_id": "id" } }, "rb": { "alternatives": [{ "fields": [{ "name": "generative_ai_models_enabled" }, { "name": "id" }, { "name": "name" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "generative_ai_models_enabled" }, { "name": "id" }, { "name": "name" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "workspaces" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.user"]] }, "key$": "workspace", "name__orig": "workspace", "Name": "Workspace", "name_": "workspace", "name-": "workspace", "NAME": "WORKSPACE", "index$": 168 }, { "active": true, "entity": "workspace", "key$": "BasicWorkspaceFlow", "kind": "basic", "name": "BasicWorkspaceFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "workspace_ref01" }, "m": {}, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "workspace_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "workspace_ref01", "srcdatavar": "workspace_ref01_data", "suffix": "_up0", "textfield": "base_url" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-workspace_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "workspace_ref01", "srcdatavar": "workspace_ref01_data", "suffix": "_dt0" }, "m": { "id": "workspace01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-workspace_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "workspace_ref01", "suffix": "_rm0" }, "m": { "id": "workspace01" }, "o": "remove", "s": [], "v": [] }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "workspace_ref01" } }] }] }, 'Workspace', { "POST /api/workspaces/invitations/workspace/{workspace_id}/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "email": { "type": "string", "format": "email", "description": "The email address of the user that the invitation is meant for. Only a user with that email address can accept it.", "maxLength": 254, "key$": "email" }, "permissions": { "type": "string", "description": "The permissions that the user is going to get within the workspace after accepting the invitation.", "maxLength": 32, "key$": "permissions" }, "base_url": { "type": "string", "format": "uri", "description": "The base URL where the user can publicly accept his invitation.The accept token is going to be appended to the base_url (base_url '/token').", "key$": "base_url" }, "captcha_token": { "type": "string", "default": "", "description": "The captcha response token, required when captcha is enabled.", "key$": "captcha_token" } }, "required": ["base_url", "email"], "x-ref": "#/components/schemas/CreateWorkspaceInvitation", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "email": { "type": "string", "format": "email", "description": "The email address of the user that the invitation is meant for. Only a user with that email address can accept it.", "maxLength": 254, "key$": "email" }, "permissions": { "type": "string", "description": "The permissions that the user is going to get within the workspace after accepting the invitation.", "maxLength": 32, "key$": "permissions" }, "base_url": { "type": "string", "format": "uri", "description": "The base URL where the user can publicly accept his invitation.The accept token is going to be appended to the base_url (base_url '/token').", "key$": "base_url" }, "captcha_token": { "type": "string", "default": "", "description": "The captcha response token, required when captcha is enabled.", "key$": "captcha_token" } }, "required": ["base_url", "email"], "x-ref": "#/components/schemas/CreateWorkspaceInvitation" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "email": { "type": "string", "format": "email", "description": "The email address of the user that the invitation is meant for. Only a user with that email address can accept it.", "maxLength": 254, "key$": "email" }, "permissions": { "type": "string", "description": "The permissions that the user is going to get within the workspace after accepting the invitation.", "maxLength": 32, "key$": "permissions" }, "base_url": { "type": "string", "format": "uri", "description": "The base URL where the user can publicly accept his invitation.The accept token is going to be appended to the base_url (base_url '/token').", "key$": "base_url" }, "captcha_token": { "type": "string", "default": "", "description": "The captcha response token, required when captcha is enabled.", "key$": "captcha_token" } }, "required": ["base_url", "email"], "x-ref": "#/components/schemas/CreateWorkspaceInvitation" } } }, "required": true }, "parameters": [{ "in": "path", "name": "workspace_id", "schema": { "type": "integer" }, "description": "Creates a workspace invitation to the workspace related to the provided value.", "required": true, "index$": 0 }] }, "POST /api/workspaces/{workspace_id}/export/async/": { "protocol": "http", "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "workspace_id", "schema": { "type": "integer" }, "description": "The id of the workspace that must be exported.", "required": true, "index$": 1 }] }, "POST /api/workspaces/{workspace_id}/import/async/": { "protocol": "http", "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "workspace_id", "schema": { "type": "integer" }, "description": "The id of the workspace where the application will be imported.", "required": true, "index$": 1 }] }, "POST /api/workspaces/{workspace_id}/import/upload-file/": { "protocol": "http", "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "workspace_id", "schema": { "type": "integer" }, "description": "The id of the workspace for which file is uploaded.", "required": true, "index$": 1 }] }, "POST /api/workspaces/{workspace_id}/leave/": { "protocol": "http", "parameters": [{ "in": "path", "name": "workspace_id", "schema": { "type": "integer" }, "description": "Leaves the workspace related to the value.", "required": true, "index$": 0 }] }, "POST /api/workspaces/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "type": "integer", "readOnly": true, "key$": "id" }, "name": { "type": "string", "maxLength": 165, "key$": "name" }, "generative_ai_models_enabled": { "type": "string", "readOnly": true, "key$": "generative_ai_models_enabled" } }, "required": ["generative_ai_models_enabled", "id", "name"], "x-ref": "#/components/schemas/Workspace", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "id": { "type": "integer", "readOnly": true, "key$": "id" }, "name": { "type": "string", "maxLength": 165, "key$": "name" }, "generative_ai_models_enabled": { "type": "string", "readOnly": true, "key$": "generative_ai_models_enabled" } }, "required": ["generative_ai_models_enabled", "id", "name"], "x-ref": "#/components/schemas/Workspace" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "id": { "type": "integer", "readOnly": true, "key$": "id" }, "name": { "type": "string", "maxLength": 165, "key$": "name" }, "generative_ai_models_enabled": { "type": "string", "readOnly": true, "key$": "generative_ai_models_enabled" } }, "required": ["generative_ai_models_enabled", "id", "name"], "x-ref": "#/components/schemas/Workspace" } } }, "required": true }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }] }, "POST /api/workspaces/order/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "workspaces": { "type": "array", "items": { "type": "integer" }, "description": "Workspace ids in the desired order." } }, "required": ["workspaces"], "x-ref": "#/components/schemas/OrderWorkspaces" } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "workspaces": { "type": "array", "items": { "type": "integer" }, "description": "Workspace ids in the desired order." } }, "required": ["workspaces"], "x-ref": "#/components/schemas/OrderWorkspaces" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "workspaces": { "type": "array", "items": { "type": "integer" }, "description": "Workspace ids in the desired order." } }, "required": ["workspaces"], "x-ref": "#/components/schemas/OrderWorkspaces" } } }, "required": true }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "header", "name": "ClientUndoRedoActionGroupId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.", "index$": 1 }] }, "GET /api/workspaces/": { "protocol": "http", "parameters": [] }, "GET /api/search/workspace/{workspace_id}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "workspace_id", "schema": { "type": "integer" }, "description": "Workspace ID to search within", "required": true, "index$": 0 }] }, "GET /api/workspaces/invitations/workspace/{workspace_id}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "workspace_id", "schema": { "type": "integer" }, "description": "Returns only invitations that are in the workspace related to the provided value.", "required": true, "index$": 0 }] }, "GET /api/workspaces/users/workspace/{workspace_id}/": { "protocol": "http", "parameters": [{ "in": "query", "name": "search", "schema": { "type": "string" }, "description": "Search for workspace users by username, or email.", "index$": 0 }, { "in": "query", "name": "sorts", "schema": { "type": "string" }, "description": "Sort workspace users by name, email or role.", "index$": 1 }, { "in": "path", "name": "workspace_id", "schema": { "type": "integer" }, "description": "Lists workspace users related to the provided workspace value.", "required": true, "index$": 2 }] }, "DELETE /api/workspaces/{workspace_id}/import/{resource_id}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "resource_id", "schema": { "type": "string", "pattern": "^[0-9]+$" }, "required": true, "index$": 0 }, { "in": "path", "name": "workspace_id", "schema": { "type": "string", "pattern": "^[0-9]+$" }, "required": true, "index$": 1 }] }, "DELETE /api/workspaces/{workspace_id}/": { "protocol": "http", "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "header", "name": "ClientUndoRedoActionGroupId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.", "index$": 1 }, { "in": "path", "name": "workspace_id", "schema": { "type": "integer" }, "description": "Deletes the workspace related to the provided value.", "required": true, "index$": 2 }] }, "DELETE /api/workspaces/users/{workspace_user_id}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "workspace_user_id", "schema": { "type": "integer" }, "description": "Deletes the workspace user related to the provided value.", "required": true, "index$": 0 }] }, "PATCH /api/workspaces/{workspace_id}/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "type": "integer", "readOnly": true, "key$": "id" }, "name": { "type": "string", "maxLength": 165, "key$": "name" }, "generative_ai_models_enabled": { "type": "string", "readOnly": true, "key$": "generative_ai_models_enabled" } }, "x-ref": "#/components/schemas/PatchedWorkspace", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "id": { "type": "integer", "readOnly": true, "key$": "id" }, "name": { "type": "string", "maxLength": 165, "key$": "name" }, "generative_ai_models_enabled": { "type": "string", "readOnly": true, "key$": "generative_ai_models_enabled" } }, "x-ref": "#/components/schemas/PatchedWorkspace" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "id": { "type": "integer", "readOnly": true, "key$": "id" }, "name": { "type": "string", "maxLength": 165, "key$": "name" }, "generative_ai_models_enabled": { "type": "string", "readOnly": true, "key$": "generative_ai_models_enabled" } }, "x-ref": "#/components/schemas/PatchedWorkspace" } } } }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "header", "name": "ClientUndoRedoActionGroupId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.", "index$": 1 }, { "in": "path", "name": "workspace_id", "schema": { "type": "integer" }, "description": "Updates the workspace related to the provided value.", "required": true, "index$": 2 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const workspace_ref01_ent = client.Workspace();
        let workspace_ref01_data = setup.data.new.workspace['workspace_ref01'];
        workspace_ref01_data = (await workspace_ref01_ent.create(workspace_ref01_data)).data();
        (0, node_assert_1.default)(null != workspace_ref01_data.id);
        // LIST
        const workspace_ref01_match = {};
        const workspace_ref01_list = (await workspace_ref01_ent.list(workspace_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(workspace_ref01_list, { id: workspace_ref01_data.id })));
        // UPDATE
        const workspace_ref01_data_up0 = {};
        workspace_ref01_data_up0.id = workspace_ref01_data.id;
        const workspace_ref01_markdef_up0 = { name: 'base_url', value: 'Mark01-workspace_ref01_' + setup.now };
        workspace_ref01_data_up0[workspace_ref01_markdef_up0.name] = workspace_ref01_markdef_up0.value;
        const workspace_ref01_resdata_up0 = (await workspace_ref01_ent.update(workspace_ref01_data_up0)).data();
        (0, node_assert_1.default)(workspace_ref01_resdata_up0.id === workspace_ref01_data_up0.id);
        (0, node_assert_1.default)(workspace_ref01_resdata_up0[workspace_ref01_markdef_up0.name] === workspace_ref01_markdef_up0.value);
        // LOAD
        const workspace_ref01_match_dt0 = {};
        workspace_ref01_match_dt0.id = workspace_ref01_data.id;
        const workspace_ref01_data_dt0 = (await workspace_ref01_ent.load(workspace_ref01_match_dt0)).data();
        (0, node_assert_1.default)(workspace_ref01_data_dt0.id === workspace_ref01_data.id);
        // REMOVE
        const workspace_ref01_match_rm0 = { id: workspace_ref01_data.id };
        await workspace_ref01_ent.remove(workspace_ref01_match_rm0);
        // LIST
        const workspace_ref01_match_rt0 = {};
        const workspace_ref01_list_rt0 = (await workspace_ref01_ent.list(workspace_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(workspace_ref01_list_rt0, { id: workspace_ref01_data.id })));
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/workspace/WorkspaceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['workspace01', 'workspace02', 'workspace03', 'user01', 'user02', 'user03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_WORKSPACE_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_WORKSPACE_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_WORKSPACE_ENTID'];
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
//# sourceMappingURL=WorkspaceEntity.test.js.map