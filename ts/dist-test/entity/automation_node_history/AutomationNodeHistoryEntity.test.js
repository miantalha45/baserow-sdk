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
(0, node_test_1.describe)('AutomationNodeHistoryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.AutomationNodeHistory();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.AutomationNodeHistory().list({ "workflow_history_id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'automation_node_history.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "completed_on": { "a": true, "fo": "date-time", "h": "Completed On", "n": "completed_on", "r": false, "t": "`$STRING`", "key$": "completed_on", "index$": 0 }, "destination_label": { "a": true, "h": "Destination Label", "n": "destination_label", "r": true, "ro": true, "t": "`$STRING`", "key$": "destination_label", "index$": 1 }, "destination_node_id": { "a": true, "h": "Destination Node Id", "n": "destination_node_id", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "destination_node_id", "index$": 2 }, "destination_node_type": { "a": true, "h": "Destination Node Type", "n": "destination_node_type", "r": true, "ro": true, "t": "`$STRING`", "key$": "destination_node_type", "index$": 3 }, "edge_label": { "a": true, "h": "Edge Label", "n": "edge_label", "r": true, "ro": true, "t": "`$STRING`", "key$": "edge_label", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "id", "index$": 5 }, "iteration": { "a": true, "h": "Iteration", "n": "iteration", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "iteration", "index$": 6 }, "iteration_path": { "a": true, "h": "Iteration Path", "n": "iteration_path", "r": true, "ro": true, "t": "`$STRING`", "key$": "iteration_path", "index$": 7 }, "message": { "a": true, "h": "Message", "n": "message", "r": true, "t": "`$STRING`", "key$": "message", "index$": 8 }, "node": { "a": true, "h": "Node", "n": "node", "r": true, "t": "`$INTEGER`", "key$": "node", "index$": 9 }, "node_label": { "a": true, "h": "Node Label", "n": "node_label", "r": true, "ro": true, "t": "`$STRING`", "key$": "node_label", "index$": 10 }, "node_type": { "a": true, "h": "Node Type", "n": "node_type", "r": true, "ro": true, "t": "`$STRING`", "key$": "node_type", "index$": 11 }, "parent_node_id": { "a": true, "h": "Parent Node Id", "n": "parent_node_id", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "parent_node_id", "index$": 12 }, "started_on": { "a": true, "fo": "date-time", "h": "Started On", "n": "started_on", "r": true, "t": "`$STRING`", "key$": "started_on", "index$": 13 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "* `success` - Success * `error` - Error * `disabled` - Disabled * `started` - Started * `skipped` - Skipped * `cancelled` - Cancelled", "t": "`$STRING`", "key$": "status", "index$": 14 }, "workflow_history": { "a": true, "h": "Workflow History", "n": "workflow_history", "r": true, "t": "`$INTEGER`", "key$": "workflow_history", "index$": 15 } }, "id": { "field": "id", "name": "id" }, "name": "automation_node_history", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/automation/workflow_histories/{workflow_history_id}/node_histories/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "workflow_history_id", "or": "workflow_history_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/automation/workflow_histories/{workflow_history_id}/node_histories/", "q": { "exist": ["workflow_history_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "automation" }, { "lit": "workflow_histories" }, { "var": "workflow_history_id" }, { "lit": "node_histories" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "automation_node_history", "name__orig": "automation_node_history", "Name": "AutomationNodeHistory", "name_": "automation_node_history", "name-": "automation-node-history", "NAME": "AUTOMATION_NODE_HISTORY", "index$": 25 }, { "active": true, "entity": "automation_node_history", "key$": "BasicAutomationNodeHistoryFlow", "kind": "basic", "name": "BasicAutomationNodeHistoryFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "workflow_history_id": "workflow_history01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "automation_node_history_ref01" } }] }] }, 'AutomationNodeHistory', { "GET /api/automation/workflow_histories/{workflow_history_id}/node_histories/": { "protocol": "http", "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "workflow_history_id", "schema": { "type": "integer" }, "description": "The id of the workflow history.", "required": true, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let automation_node_history_ref01_data = Object.values(setup.data.existing.automation_node_history)[0];
        // LIST
        const automation_node_history_ref01_ent = client.AutomationNodeHistory();
        const automation_node_history_ref01_match = {};
        automation_node_history_ref01_match['workflow_history_id'] = setup.idmap['workflow_history01'];
        const automation_node_history_ref01_list = (await automation_node_history_ref01_ent.list(automation_node_history_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/automation_node_history/AutomationNodeHistoryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['automation_node_history01', 'automation_node_history02', 'automation_node_history03', 'workflow_history01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_AUTOMATION_NODE_HISTORY_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_AUTOMATION_NODE_HISTORY_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_AUTOMATION_NODE_HISTORY_ENTID'];
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
//# sourceMappingURL=AutomationNodeHistoryEntity.test.js.map