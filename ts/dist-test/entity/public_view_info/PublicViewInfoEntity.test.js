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
(0, node_test_1.describe)('PublicViewInfoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.PublicViewInfo();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PublicViewInfo().list({ "view_id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'public_view_info.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "database_id": { "a": true, "h": "Database Id", "n": "database_id", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "database_id", "index$": 0 }, "db_index": { "a": true, "h": "Db Index", "n": "db_index", "r": false, "sh": "If true, then an index will be added to the Baserow field to increase lookup and filter speed.", "t": "`$BOOLEAN`", "key$": "db_index", "index$": 1 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Field description", "t": "`$STRING`", "key$": "description", "index$": 2 }, "field_constraints": { "a": true, "h": "Field Constraints", "n": "field_constraints", "r": true, "ro": true, "sh": "The constraints applied to this field.", "t": "`$STRING`", "key$": "field_constraints", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "id", "index$": 4 }, "immutable_properties": { "a": true, "h": "Immutable Properties", "n": "immutable_properties", "r": true, "ro": true, "sh": "Indicates whether the field properties are immutable.", "t": "`$BOOLEAN`", "key$": "immutable_properties", "index$": 5 }, "immutable_type": { "a": true, "h": "Immutable Type", "n": "immutable_type", "r": true, "ro": true, "sh": "Indicates whether the field type is immutable.", "t": "`$BOOLEAN`", "key$": "immutable_type", "index$": 6 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "t": "`$STRING`", "key$": "name", "index$": 7 }, "order": { "a": true, "h": "Order", "n": "order", "r": true, "sh": "Lowest first.", "t": "`$INTEGER`", "key$": "order", "index$": 8 }, "primary": { "a": true, "h": "Primary", "n": "primary", "r": false, "sh": "Indicates if the field is a primary field.", "t": "`$BOOLEAN`", "key$": "primary", "index$": 9 }, "read_only": { "a": true, "h": "Read Only", "n": "read_only", "r": true, "ro": true, "sh": "Indicates whether the field is a read only field.", "t": "`$BOOLEAN`", "key$": "read_only", "index$": 10 }, "table_id": { "a": true, "h": "Table Id", "n": "table_id", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "table_id", "index$": 11 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "ro": true, "sh": "The type of the related field.", "t": "`$STRING`", "key$": "type", "index$": 12 }, "workspace_id": { "a": true, "h": "Workspace Id", "n": "workspace_id", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "workspace_id", "index$": 13 } }, "id": { "field": "id", "name": "id" }, "name": "public_view_info", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/database/views/{slug}/public/info/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "view_id", "or": "slug", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/database/views/{slug}/public/info/", "q": { "exist": ["view_id"] }, "r": { "param": { "slug": "view_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "views" }, { "var": "view_id" }, { "lit": "public" }, { "lit": "info" }], "t": { "req": "`reqdata`", "res": "`body.fields`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.view"]] }, "key$": "public_view_info", "name__orig": "public_view_info", "Name": "PublicViewInfo", "name_": "public_view_info", "name-": "public-view-info", "NAME": "PUBLIC_VIEW_INFO", "index$": 133 }, { "active": true, "entity": "public_view_info", "key$": "BasicPublicViewInfoFlow", "kind": "basic", "name": "BasicPublicViewInfoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "view_id": "view01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "public_view_info_ref01" } }] }] }, 'PublicViewInfo', { "GET /api/database/views/{slug}/public/info/": { "protocol": "http", "parameters": [{ "in": "path", "name": "slug", "schema": { "type": "string" }, "description": "The slug of the view to get public information about.", "required": true, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let public_view_info_ref01_data = Object.values(setup.data.existing.public_view_info)[0];
        // LIST
        const public_view_info_ref01_ent = client.PublicViewInfo();
        const public_view_info_ref01_match = {};
        public_view_info_ref01_match['view_id'] = setup.idmap['view01'];
        const public_view_info_ref01_list = (await public_view_info_ref01_ent.list(public_view_info_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/public_view_info/PublicViewInfoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['public_view_info01', 'public_view_info02', 'public_view_info03', 'view01', 'view02', 'view03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_PUBLIC_VIEW_INFO_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_PUBLIC_VIEW_INFO_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_PUBLIC_VIEW_INFO_ENTID'];
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
//# sourceMappingURL=PublicViewInfoEntity.test.js.map