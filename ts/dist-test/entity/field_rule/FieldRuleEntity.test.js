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
(0, node_test_1.describe)('FieldRuleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.FieldRule();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.FieldRule().load({ "id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'field_rule.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id" }, "name": "field_rule", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["dependency_linkrow_field_id", "duration_field_id", "end_date_field_id", "is_active", "start_date_field_id", "type"], "co": { "id": "POST /api/database/field-rules/{table_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "table_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/database/field-rules/{table_id}/", "q": { "exist": ["id"] }, "r": { "param": { "table_id": "id" } }, "rb": { "alternatives": [{ "kind": "multipart", "media": "multipart/form-data" }, { "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "field-rules" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/database/field-rules/{table_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "table_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/database/field-rules/{table_id}/", "q": { "exist": ["id"] }, "r": { "param": { "table_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "field-rules" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/database/field-rules/{table_id}/rule/{rule_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "table_id", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "param", "n": "rule_id", "or": "rule_id", "r": true, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/api/database/field-rules/{table_id}/rule/{rule_id}/", "q": { "exist": ["id", "rule_id"] }, "r": { "param": { "table_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "field-rules" }, { "var": "id" }, { "lit": "rule" }, { "var": "rule_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "field_rule", "name__orig": "field_rule", "Name": "FieldRule", "name_": "field_rule", "name-": "field-rule", "NAME": "FIELD_RULE", "index$": 83 }, { "active": true, "entity": "field_rule", "key$": "BasicFieldRuleFlow", "kind": "basic", "name": "BasicFieldRuleFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "field_rule_ref01" }, "m": { "table_id": "table01" }, "o": "create", "s": [], "v": [], "unreachable": true }, { "a": true, "d": {}, "i": { "ref": "field_rule_ref01", "srcdatavar": "field_rule_ref01_data", "suffix": "_dt0" }, "m": { "id": "field_rule01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-field_rule_ref01" } }] }, { "a": false, "d": {}, "i": { "ref": "field_rule_ref01", "suffix": "_rm0" }, "m": { "id": "field_rule01" }, "o": "remove", "s": [], "v": [], "unreachable": true }] }, 'FieldRule', { "POST /api/database/field-rules/{table_id}/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "oneOf": [{ "type": "object", "description": "Serializes inbound date dependency configuration. Requires `table` in the context.", "properties": { "is_active": { "type": "boolean", "description": "Whether the date dependency is active or not. If set to false, all other values in the payload will be ignored." }, "type": { "allOf": [{}], "description": "The type of the field rule that must be created.\n\n* `date_dependency` - date_dependency" }, "start_date_field_id": { "type": "integer", "description": "Start date field id" }, "end_date_field_id": { "type": "integer", "description": "End date field id" }, "duration_field_id": { "type": "integer", "description": "Duration field id" }, "dependency_linkrow_field_id": { "type": "integer", "nullable": true, "description": "Linkrow field id" } }, "required": ["is_active", "type"], "x-ref": "#/components/schemas/DateDependencyRequestFieldRule" }], "discriminator": { "propertyName": "type", "mapping": { "date_dependency": "#/components/schemas/DateDependencyRequestFieldRule" } }, "x-ref": "#/components/schemas/Field_RulesRequestFieldRule", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "oneOf": [{ "type": "object", "description": "Serializes inbound date dependency configuration. Requires `table` in the context.", "properties": { "is_active": { "type": "boolean", "description": "Whether the date dependency is active or not. If set to false, all other values in the payload will be ignored." }, "type": { "allOf": [{}], "description": "The type of the field rule that must be created.\n\n* `date_dependency` - date_dependency" }, "start_date_field_id": { "type": "integer", "description": "Start date field id" }, "end_date_field_id": { "type": "integer", "description": "End date field id" }, "duration_field_id": { "type": "integer", "description": "Duration field id" }, "dependency_linkrow_field_id": { "type": "integer", "nullable": true, "description": "Linkrow field id" } }, "required": ["is_active", "type"], "x-ref": "#/components/schemas/DateDependencyRequestFieldRule" }], "discriminator": { "propertyName": "type", "mapping": { "date_dependency": "#/components/schemas/DateDependencyRequestFieldRule" } }, "x-ref": "#/components/schemas/Field_RulesRequestFieldRule" } }, "multipart/form-data": { "schema": { "oneOf": [{ "type": "object", "description": "Serializes inbound date dependency configuration. Requires `table` in the context.", "properties": { "is_active": { "type": "boolean", "description": "Whether the date dependency is active or not. If set to false, all other values in the payload will be ignored." }, "type": { "allOf": [{}], "description": "The type of the field rule that must be created.\n\n* `date_dependency` - date_dependency" }, "start_date_field_id": { "type": "integer", "description": "Start date field id" }, "end_date_field_id": { "type": "integer", "description": "End date field id" }, "duration_field_id": { "type": "integer", "description": "Duration field id" }, "dependency_linkrow_field_id": { "type": "integer", "nullable": true, "description": "Linkrow field id" } }, "required": ["is_active", "type"], "x-ref": "#/components/schemas/DateDependencyRequestFieldRule" }], "discriminator": { "propertyName": "type", "mapping": { "date_dependency": "#/components/schemas/DateDependencyRequestFieldRule" } }, "x-ref": "#/components/schemas/Field_RulesRequestFieldRule" } } } }, "parameters": [{ "in": "path", "name": "table_id", "schema": { "type": "integer" }, "description": "The ID of the table to set a field rule.", "required": true, "index$": 0 }] }, "GET /api/database/field-rules/{table_id}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "table_id", "schema": { "type": "integer" }, "description": "The ID of the table to get field rules.", "required": true, "index$": 0 }] }, "DELETE /api/database/field-rules/{table_id}/rule/{rule_id}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "rule_id", "schema": { "type": "integer" }, "description": "The ID of the rule to delete.", "required": true, "index$": 0 }, { "in": "path", "name": "table_id", "schema": { "type": "integer" }, "description": "The ID of the table.", "required": true, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let field_rule_ref01_data = Object.values(setup.data.existing.field_rule)[0];
        // LOAD
        const field_rule_ref01_ent = client.FieldRule();
        const field_rule_ref01_match_dt0 = {};
        field_rule_ref01_match_dt0.id = field_rule_ref01_data.id;
        const field_rule_ref01_data_dt0 = (await field_rule_ref01_ent.load(field_rule_ref01_match_dt0)).data();
        (0, node_assert_1.default)(field_rule_ref01_data_dt0.id === field_rule_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/field_rule/FieldRuleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['field_rule01', 'field_rule02', 'field_rule03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_FIELD_RULE_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_FIELD_RULE_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_FIELD_RULE_ENTID'];
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
//# sourceMappingURL=FieldRuleEntity.test.js.map