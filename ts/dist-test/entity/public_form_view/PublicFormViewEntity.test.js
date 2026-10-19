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
(0, node_test_1.describe)('PublicFormViewEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.PublicFormView();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PublicFormView().list({ "slug": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'public_form_view.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "condition_groups": { "a": true, "h": "Condition Groups", "n": "condition_groups", "r": false, "t": "`$ARRAY`", "key$": "condition_groups", "index$": 0 }, "condition_type": { "a": true, "h": "Condition Type", "n": "condition_type", "r": false, "sh": "Indicates whether all (AND) or any (OR) of the conditions should match before shown.", "t": "`$STRING`", "key$": "condition_type", "index$": 1 }, "conditions": { "a": true, "h": "Conditions", "n": "conditions", "r": false, "t": "`$ARRAY`", "key$": "conditions", "index$": 2 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "If provided, then this value be will be shown under the field name.", "t": "`$STRING`", "key$": "description", "index$": 3 }, "field": { "a": true, "h": "Field", "n": "field", "r": true, "ro": true, "sh": "The properties of the related field.", "t": "`$ANY`", "key$": "field", "index$": 4 }, "field_component": { "a": true, "h": "Field Component", "n": "field_component", "r": false, "sh": "Indicates which field input component is used in the form.", "t": "`$STRING`", "key$": "field_component", "index$": 5 }, "groups": { "a": true, "h": "Groups", "n": "groups", "r": false, "t": "`$ARRAY`", "key$": "groups", "index$": 6 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "ro": true, "sh": "If provided, then this value will be visible above the field input.", "t": "`$STRING`", "key$": "name", "index$": 7 }, "order": { "a": true, "h": "Order", "n": "order", "r": false, "sh": "The order that the field has in the form.", "t": "`$INTEGER`", "key$": "order", "index$": 8 }, "required": { "a": true, "h": "Required", "n": "required", "r": false, "sh": "Indicates whether the field is required for the visitor to fill out.", "t": "`$BOOLEAN`", "key$": "required", "index$": 9 }, "show_when_matching_conditions": { "a": true, "h": "Show When Matching Conditions", "n": "show_when_matching_conditions", "r": false, "sh": "Indicates whether this field is visible when the conditions are met.", "t": "`$BOOLEAN`", "key$": "show_when_matching_conditions", "index$": 10 } }, "name": "public_form_view", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/database/views/form/{slug}/submit/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "slug", "or": "slug", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/database/views/form/{slug}/submit/", "q": { "exist": ["slug"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "views" }, { "lit": "form" }, { "var": "slug" }, { "lit": "submit" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "public_form_view", "name__orig": "public_form_view", "Name": "PublicFormView", "name_": "public_form_view", "name-": "public-form-view", "NAME": "PUBLIC_FORM_VIEW", "index$": 128 }, { "active": true, "entity": "public_form_view", "key$": "BasicPublicFormViewFlow", "kind": "basic", "name": "BasicPublicFormViewFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "slug": "slug01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "public_form_view_ref01" } }] }] }, 'PublicFormView', { "GET /api/database/views/form/{slug}/submit/": { "protocol": "http", "parameters": [{ "in": "path", "name": "slug", "schema": { "type": "string" }, "description": "The slug related to the form form.", "required": true, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let public_form_view_ref01_data = Object.values(setup.data.existing.public_form_view)[0];
        // LIST
        const public_form_view_ref01_ent = client.PublicFormView();
        const public_form_view_ref01_match = {};
        public_form_view_ref01_match['slug'] = setup.idmap['slug01'];
        const public_form_view_ref01_list = (await public_form_view_ref01_ent.list(public_form_view_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/public_form_view/PublicFormViewTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['public_form_view01', 'public_form_view02', 'public_form_view03', 'slug01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_PUBLIC_FORM_VIEW_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_PUBLIC_FORM_VIEW_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_PUBLIC_FORM_VIEW_ENTID'];
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
//# sourceMappingURL=PublicFormViewEntity.test.js.map