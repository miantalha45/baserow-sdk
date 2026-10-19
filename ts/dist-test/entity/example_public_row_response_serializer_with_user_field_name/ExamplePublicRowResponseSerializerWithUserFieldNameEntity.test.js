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
(0, node_test_1.describe)('ExamplePublicRowResponseSerializerWithUserFieldNameEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.ExamplePublicRowResponseSerializerWithUserFieldName();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.ExamplePublicRowResponseSerializerWithUserFieldName().load({ "row_id": "x", "view_id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of []) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'example_public_row_response_serializer_with_user_field_name.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "field_1": { "a": true, "h": "Field 1", "n": "field_1", "r": false, "sh": "This field represents the `text` field.", "t": "`$STRING`", "key$": "field_1", "index$": 0 }, "field_10": { "a": true, "h": "Field 10", "n": "field_10", "r": false, "sh": "This field represents the `last_modified_by` field.", "t": "`$ANY`", "key$": "field_10", "index$": 1 }, "field_11": { "a": true, "fo": "date-time", "h": "Field 11", "n": "field_11", "r": false, "sh": "This field represents the `created_on` field.", "t": "`$STRING`", "key$": "field_11", "index$": 2 }, "field_12": { "a": true, "h": "Field 12", "n": "field_12", "r": false, "sh": "This field represents the `created_by` field.", "t": "`$ANY`", "key$": "field_12", "index$": 3 }, "field_13": { "a": true, "fo": "float", "h": "Field 13", "n": "field_13", "r": false, "sh": "This field represents the `duration` field.", "t": "`$NUMBER`", "key$": "field_13", "index$": 4 }, "field_14": { "a": true, "h": "Field 14", "n": "field_14", "r": false, "sh": "This field represents the `link_row` field.", "t": "`$ARRAY`", "key$": "field_14", "index$": 5 }, "field_15": { "a": true, "h": "Field 15", "n": "field_15", "r": false, "sh": "This field represents the `file` field.", "t": "`$ARRAY`", "key$": "field_15", "index$": 6 }, "field_16": { "a": true, "h": "Field 16", "n": "field_16", "r": false, "sh": "This field represents the `single_select` field.", "t": "`$ANY`", "key$": "field_16", "index$": 7 }, "field_17": { "a": true, "h": "Field 17", "n": "field_17", "r": false, "sh": "This field represents the `multiple_select` field.", "t": "`$ARRAY`", "key$": "field_17", "index$": 8 }, "field_18": { "a": true, "h": "Field 18", "n": "field_18", "r": false, "sh": "This field represents the `phone_number` field.", "t": "`$STRING`", "key$": "field_18", "index$": 9 }, "field_19": { "a": true, "h": "Field 19", "n": "field_19", "r": false, "sh": "This field represents the `formula` field.", "t": "`$STRING`", "key$": "field_19", "index$": 10 }, "field_2": { "a": true, "h": "Field 2", "n": "field_2", "r": false, "sh": "This field represents the `long_text` field.", "t": "`$STRING`", "key$": "field_2", "index$": 11 }, "field_20": { "a": true, "h": "Field 20", "n": "field_20", "r": false, "sh": "This field represents the `count` field.", "t": "`$STRING`", "key$": "field_20", "index$": 12 }, "field_21": { "a": true, "h": "Field 21", "n": "field_21", "r": false, "sh": "This field represents the `rollup` field.", "t": "`$STRING`", "key$": "field_21", "index$": 13 }, "field_22": { "a": true, "h": "Field 22", "n": "field_22", "r": false, "sh": "This field represents the `lookup` field.", "t": "`$STRING`", "key$": "field_22", "index$": 14 }, "field_23": { "a": true, "h": "Field 23", "n": "field_23", "r": false, "sh": "This field represents the `multiple_collaborators` field.", "t": "`$ARRAY`", "key$": "field_23", "index$": 15 }, "field_24": { "a": true, "fo": "uuid", "h": "Field 24", "n": "field_24", "r": false, "sh": "This field represents the `uuid` field.", "t": "`$STRING`", "key$": "field_24", "index$": 16 }, "field_25": { "a": true, "h": "Field 25", "n": "field_25", "r": false, "sh": "This field represents the `autonumber` field.", "t": "`$INTEGER`", "key$": "field_25", "index$": 17 }, "field_26": { "a": true, "h": "Field 26", "n": "field_26", "r": false, "sh": "This field represents the `password` field.", "t": "`$BOOLEAN`", "key$": "field_26", "index$": 18 }, "field_27": { "a": true, "h": "Field 27", "n": "field_27", "r": true, "ro": true, "sh": "This field represents the `form_view_edit_row` field.", "t": "`$STRING`", "key$": "field_27", "index$": 19 }, "field_28": { "a": true, "h": "Field 28", "n": "field_28", "r": false, "sh": "This field represents the `button` field.", "t": "`$STRING`", "key$": "field_28", "index$": 20 }, "field_29": { "a": true, "h": "Field 29", "n": "field_29", "r": false, "sh": "This field represents the `ai` field.", "t": "`$STRING`", "key$": "field_29", "index$": 21 }, "field_3": { "a": true, "h": "Field 3", "n": "field_3", "r": false, "sh": "This field represents the `url` field.", "t": "`$STRING`", "key$": "field_3", "index$": 22 }, "field_4": { "a": true, "h": "Field 4", "n": "field_4", "r": false, "sh": "This field represents the `email` field.", "t": "`$STRING`", "key$": "field_4", "index$": 23 }, "field_5": { "a": true, "fo": "decimal", "h": "Field 5", "n": "field_5", "r": false, "sh": "This field represents the `number` field.", "t": "`$STRING`", "key$": "field_5", "index$": 24 }, "field_6": { "a": true, "h": "Field 6", "n": "field_6", "r": false, "sh": "This field represents the `rating` field.", "t": "`$INTEGER`", "key$": "field_6", "index$": 25 }, "field_7": { "a": true, "h": "Field 7", "n": "field_7", "r": false, "sh": "This field represents the `boolean` field.", "t": "`$BOOLEAN`", "key$": "field_7", "index$": 26 }, "field_8": { "a": true, "fo": "date", "h": "Field 8", "n": "field_8", "r": false, "sh": "This field represents the `date` field.", "t": "`$STRING`", "key$": "field_8", "index$": 27 }, "field_9": { "a": true, "fo": "date-time", "h": "Field 9", "n": "field_9", "r": false, "sh": "This field represents the `last_modified` field.", "t": "`$STRING`", "key$": "field_9", "index$": 28 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the row in the table.", "t": "`$INTEGER`", "key$": "id", "index$": 29 }, "order": { "a": true, "fo": "decimal", "h": "Order", "n": "order", "r": false, "sh": "Indicates the position of the row, lowest first and highest last.", "t": "`$STRING`", "key$": "order", "index$": 30 } }, "id": { "field": "id", "name": "id" }, "name": "example_public_row_response_serializer_with_user_field_name", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/database/views/{slug}/row/{row_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "row_id", "or": "row_id", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "param", "n": "view_id", "or": "slug", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/database/views/{slug}/row/{row_id}/", "q": { "exist": ["row_id", "view_id"] }, "r": { "param": { "slug": "view_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "views" }, { "var": "view_id" }, { "lit": "row" }, { "var": "row_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.view"]] }, "key$": "example_public_row_response_serializer_with_user_field_name", "name__orig": "example_public_row_response_serializer_with_user_field_name", "Name": "ExamplePublicRowResponseSerializerWithUserFieldName", "name_": "example_public_row_response_serializer_with_user_field_name", "name-": "example-public-row-response-serializer-with-user-field-name", "NAME": "EXAMPLE_PUBLIC_ROW_RESPONSE_SERIALIZER_WITH_USER_FIELD_NAME", "index$": 74 }, { "active": true, "entity": "example_public_row_response_serializer_with_user_field_name", "key$": "BasicExamplePublicRowResponseSerializerWithUserFieldNameFlow", "kind": "basic", "name": "BasicExamplePublicRowResponseSerializerWithUserFieldNameFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "example_public_row_response_serializer_with_user_field_name_ref01", "srcdatavar": "example_public_row_response_serializer_with_user_field_name_ref01_data", "suffix": "_dt0" }, "m": { "id": "example_public_row_response_serializer_with_user_field_name01", "view_id": "view01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-example_public_row_response_serializer_with_user_field_name_ref01" } }], "unreachable": true }] }, 'ExamplePublicRowResponseSerializerWithUserFieldName', { "GET /api/database/views/{slug}/row/{row_id}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "row_id", "schema": { "type": "integer" }, "description": "The ID of the row to retrieve from the public view.", "required": true, "index$": 0 }, { "in": "path", "name": "slug", "schema": { "type": "string" }, "description": "The slug of the view from which to get the row data.", "required": true, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let example_public_row_response_serializer_with_user_field_name_ref01_data = Object.values(setup.data.existing.example_public_row_response_serializer_with_user_field_name)[0];
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/example_public_row_response_serializer_with_user_field_name/ExamplePublicRowResponseSerializerWithUserFieldNameTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['example_public_row_response_serializer_with_user_field_name01', 'example_public_row_response_serializer_with_user_field_name02', 'example_public_row_response_serializer_with_user_field_name03', 'view01', 'view02', 'view03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_EXAMPLE_PUBLIC_ROW_RESPONSE_SERIALIZER_WITH_USER_FIELD_NAME_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_EXAMPLE_PUBLIC_ROW_RESPONSE_SERIALIZER_WITH_USER_FIELD_NAME_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_EXAMPLE_PUBLIC_ROW_RESPONSE_SERIALIZER_WITH_USER_FIELD_NAME_ENTID'];
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
//# sourceMappingURL=ExamplePublicRowResponseSerializerWithUserFieldNameEntity.test.js.map