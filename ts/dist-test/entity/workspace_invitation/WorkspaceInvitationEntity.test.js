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
(0, node_test_1.describe)('WorkspaceInvitationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.WorkspaceInvitation();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.WorkspaceInvitation().load({ "id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['create', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'workspace_invitation.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_on": { "a": true, "fo": "date-time", "h": "Created On", "n": "created_on", "r": true, "ro": true, "t": "`$STRING`", "key$": "created_on", "index$": 0 }, "email": { "a": true, "fo": "email", "h": "Email", "n": "email", "r": true, "sh": "The email address of the user that the invitation is meant for.", "t": "`$STRING`", "key$": "email", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "id", "index$": 2 }, "permissions": { "a": true, "h": "Permissions", "n": "permissions", "r": false, "sh": "The permissions that the user is going to get within the workspace after accepting the invitation.", "t": "`$STRING`", "key$": "permissions", "index$": 3 }, "workspace": { "a": true, "h": "Workspace", "n": "workspace", "r": true, "sh": "The workspace that the user will get access to once the invitation is accepted.", "t": "`$INTEGER`", "key$": "workspace", "index$": 4 } }, "id": { "field": "id", "name": "id" }, "name": "workspace_invitation", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/workspaces/invitations/{workspace_invitation_id}/reject/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "invitation_id", "or": "workspace_invitation_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/workspaces/invitations/{workspace_invitation_id}/reject/", "q": { "exist": ["invitation_id"] }, "r": { "param": { "workspace_invitation_id": "invitation_id" } }, "s": [{ "lit": "api" }, { "lit": "workspaces" }, { "lit": "invitations" }, { "var": "invitation_id" }, { "lit": "reject" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/workspaces/invitations/{workspace_invitation_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "workspace_invitation_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/workspaces/invitations/{workspace_invitation_id}/", "q": { "exist": ["id"] }, "r": { "param": { "workspace_invitation_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "workspaces" }, { "lit": "invitations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/workspaces/invitations/{workspace_invitation_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "workspace_invitation_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/workspaces/invitations/{workspace_invitation_id}/", "q": { "exist": ["id"] }, "r": { "param": { "workspace_invitation_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "workspaces" }, { "lit": "invitations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["permissions"], "co": { "id": "PATCH /api/workspaces/invitations/{workspace_invitation_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "workspace_invitation_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/workspaces/invitations/{workspace_invitation_id}/", "q": { "exist": ["id"] }, "r": { "param": { "workspace_invitation_id": "id" } }, "rb": { "alternatives": [{ "fields": [{ "name": "permissions" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "permissions" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "workspaces" }, { "lit": "invitations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "workspace_invitation", "name__orig": "workspace_invitation", "Name": "WorkspaceInvitation", "name_": "workspace_invitation", "name-": "workspace-invitation", "NAME": "WORKSPACE_INVITATION", "index$": 169 }, { "active": true, "entity": "workspace_invitation", "key$": "BasicWorkspaceInvitationFlow", "kind": "basic", "name": "BasicWorkspaceInvitationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "workspace_invitation_ref01" }, "m": { "invitation_id": "invitation01" }, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": { "ref": "workspace_invitation_ref01", "srcdatavar": "workspace_invitation_ref01_data", "suffix": "_up0", "textfield": "email" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-workspace_invitation_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "workspace_invitation_ref01", "srcdatavar": "workspace_invitation_ref01_data", "suffix": "_dt0" }, "m": { "id": "workspace_invitation01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-workspace_invitation_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "workspace_invitation_ref01", "suffix": "_rm0" }, "m": { "id": "workspace_invitation01" }, "o": "remove", "s": [], "v": [] }] }, 'WorkspaceInvitation', { "POST /api/workspaces/invitations/{workspace_invitation_id}/reject/": { "protocol": "http", "parameters": [{ "in": "path", "name": "workspace_invitation_id", "schema": { "type": "integer" }, "description": "Rejects the workspace invitation related to the provided value.", "required": true, "index$": 0 }] }, "GET /api/workspaces/invitations/{workspace_invitation_id}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "workspace_invitation_id", "schema": { "type": "integer" }, "description": "Returns the workspace invitation related to the provided value.", "required": true, "index$": 0 }] }, "DELETE /api/workspaces/invitations/{workspace_invitation_id}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "workspace_invitation_id", "schema": { "type": "integer" }, "description": "Deletes the workspace invitation related to the provided value.", "required": true, "index$": 0 }] }, "PATCH /api/workspaces/invitations/{workspace_invitation_id}/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "permissions": { "type": "string", "description": "The permissions that the user is going to get within the workspace after accepting the invitation.", "maxLength": 32, "key$": "permissions" } }, "x-ref": "#/components/schemas/PatchedUpdateWorkspaceInvitation", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "permissions": { "type": "string", "description": "The permissions that the user is going to get within the workspace after accepting the invitation.", "maxLength": 32, "key$": "permissions" } }, "x-ref": "#/components/schemas/PatchedUpdateWorkspaceInvitation" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "permissions": { "type": "string", "description": "The permissions that the user is going to get within the workspace after accepting the invitation.", "maxLength": 32, "key$": "permissions" } }, "x-ref": "#/components/schemas/PatchedUpdateWorkspaceInvitation" } } } }, "parameters": [{ "in": "path", "name": "workspace_invitation_id", "schema": { "type": "integer" }, "description": "Updates the workspace invitation related to the provided value.", "required": true, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const workspace_invitation_ref01_ent = client.WorkspaceInvitation();
        let workspace_invitation_ref01_data = setup.data.new.workspace_invitation['workspace_invitation_ref01'];
        workspace_invitation_ref01_data['invitation_id'] = setup.idmap['invitation01'];
        workspace_invitation_ref01_data = (await workspace_invitation_ref01_ent.create(workspace_invitation_ref01_data)).data();
        (0, node_assert_1.default)(null != workspace_invitation_ref01_data.id);
        // UPDATE
        const workspace_invitation_ref01_data_up0 = {};
        workspace_invitation_ref01_data_up0.id = workspace_invitation_ref01_data.id;
        const workspace_invitation_ref01_markdef_up0 = { name: 'email', value: 'Mark01-workspace_invitation_ref01_' + setup.now };
        workspace_invitation_ref01_data_up0[workspace_invitation_ref01_markdef_up0.name] = workspace_invitation_ref01_markdef_up0.value;
        const workspace_invitation_ref01_resdata_up0 = (await workspace_invitation_ref01_ent.update(workspace_invitation_ref01_data_up0)).data();
        (0, node_assert_1.default)(workspace_invitation_ref01_resdata_up0.id === workspace_invitation_ref01_data_up0.id);
        (0, node_assert_1.default)(workspace_invitation_ref01_resdata_up0[workspace_invitation_ref01_markdef_up0.name] === workspace_invitation_ref01_markdef_up0.value);
        // LOAD
        const workspace_invitation_ref01_match_dt0 = {};
        workspace_invitation_ref01_match_dt0.id = workspace_invitation_ref01_data.id;
        const workspace_invitation_ref01_data_dt0 = (await workspace_invitation_ref01_ent.load(workspace_invitation_ref01_match_dt0)).data();
        (0, node_assert_1.default)(workspace_invitation_ref01_data_dt0.id === workspace_invitation_ref01_data.id);
        // REMOVE
        const workspace_invitation_ref01_match_rm0 = { id: workspace_invitation_ref01_data.id };
        await workspace_invitation_ref01_ent.remove(workspace_invitation_ref01_match_rm0);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/workspace_invitation/WorkspaceInvitationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['workspace_invitation01', 'workspace_invitation02', 'workspace_invitation03', 'invitation01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_WORKSPACE_INVITATION_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_WORKSPACE_INVITATION_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_WORKSPACE_INVITATION_ENTID'];
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
//# sourceMappingURL=WorkspaceInvitationEntity.test.js.map