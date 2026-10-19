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
(0, node_test_1.describe)('WorkspaceUserWorkspaceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.WorkspaceUserWorkspace();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'workspace_user_workspace.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "ai_features": { "a": true, "h": "Ai Features", "n": "ai_features", "r": true, "ro": true, "t": "`$STRING`", "key$": "ai_features", "index$": 0 }, "generative_ai_models_enabled": { "a": true, "h": "Generative Ai Models Enabled", "n": "generative_ai_models_enabled", "r": true, "ro": true, "sh": "Generative AI models available in this workspace.", "t": "`$STRING`", "key$": "generative_ai_models_enabled", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "ro": true, "sh": "Workspace id.", "t": "`$INTEGER`", "key$": "id", "index$": 2 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "ro": true, "sh": "Workspace name.", "t": "`$STRING`", "key$": "name", "index$": 3 }, "order": { "a": true, "h": "Order", "n": "order", "r": true, "ro": true, "sh": "The requesting user's order within the workspace users.", "t": "`$INTEGER`", "key$": "order", "index$": 4 }, "permissions": { "a": true, "h": "Permissions", "n": "permissions", "r": true, "ro": true, "sh": "The requesting user's permissions for the workspace.", "t": "`$STRING`", "key$": "permissions", "index$": 5 }, "unread_notifications_count": { "a": true, "h": "Unread Notifications Count", "n": "unread_notifications_count", "r": true, "ro": true, "sh": "The number of unread notifications for the requesting user.", "t": "`$INTEGER`", "key$": "unread_notifications_count", "index$": 6 }, "users": { "a": true, "h": "Users", "n": "users", "r": true, "ro": true, "sh": "List of all workspace users.", "t": "`$ARRAY`", "key$": "users", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "workspace_user_workspace", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/workspaces/invitations/{workspace_invitation_id}/accept/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "invitation_id", "or": "workspace_invitation_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/workspaces/invitations/{workspace_invitation_id}/accept/", "q": { "exist": ["invitation_id"] }, "r": { "param": { "workspace_invitation_id": "invitation_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "workspaces" }, { "lit": "invitations" }, { "var": "invitation_id" }, { "lit": "accept" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/workspaces/create-initial-workspace/", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/workspaces/create-initial-workspace/", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "workspaces" }, { "lit": "create-initial-workspace" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "workspace_user_workspace", "name__orig": "workspace_user_workspace", "Name": "WorkspaceUserWorkspace", "name_": "workspace_user_workspace", "name-": "workspace-user-workspace", "NAME": "WORKSPACE_USER_WORKSPACE", "index$": 172 }, { "active": true, "entity": "workspace_user_workspace", "key$": "BasicWorkspaceUserWorkspaceFlow", "kind": "basic", "name": "BasicWorkspaceUserWorkspaceFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "workspace_user_workspace_ref01" }, "m": {}, "o": "create", "s": [], "v": [] }] }, 'WorkspaceUserWorkspace', { "POST /api/workspaces/invitations/{workspace_invitation_id}/accept/": { "protocol": "http", "parameters": [{ "in": "path", "name": "workspace_invitation_id", "schema": { "type": "integer" }, "description": "Accepts the workspace invitation related to the provided value.", "required": true, "index$": 0 }] }, "POST /api/workspaces/create-initial-workspace/": { "protocol": "http", "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const workspace_user_workspace_ref01_ent = client.WorkspaceUserWorkspace();
        let workspace_user_workspace_ref01_data = setup.data.new.workspace_user_workspace['workspace_user_workspace_ref01'];
        workspace_user_workspace_ref01_data = (await workspace_user_workspace_ref01_ent.create(workspace_user_workspace_ref01_data)).data();
        (0, node_assert_1.default)(null != workspace_user_workspace_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/workspace_user_workspace/WorkspaceUserWorkspaceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['workspace_user_workspace01', 'workspace_user_workspace02', 'workspace_user_workspace03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_WORKSPACE_USER_WORKSPACE_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_WORKSPACE_USER_WORKSPACE_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_WORKSPACE_USER_WORKSPACE_ENTID'];
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
//# sourceMappingURL=WorkspaceUserWorkspaceEntity.test.js.map