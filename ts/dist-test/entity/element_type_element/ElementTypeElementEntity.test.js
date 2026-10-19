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
(0, node_test_1.describe)('ElementTypeElementEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.ElementTypeElement();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.ElementTypeElement().update({ "id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'element_type_element.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id" }, "name": "element_type_element", "op": { "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["place_in_container", "position", "reference_element_id", "target_page_id"], "co": { "id": "PATCH /api/builder/element/{element_id}/move/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "element_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/builder/element/{element_id}/move/", "q": { "$action": "move", "exist": ["id"] }, "r": { "param": { "element_id": "id" } }, "rb": { "alternatives": [{ "fields": [{ "name": "place_in_container" }, { "name": "position" }, { "name": "reference_element_id" }, { "name": "target_page_id" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "place_in_container" }, { "name": "position" }, { "name": "reference_element_id" }, { "name": "target_page_id" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "builder" }, { "lit": "element" }, { "var": "id" }, { "lit": "move" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "element_type_element", "name__orig": "element_type_element", "Name": "ElementTypeElement", "name_": "element_type_element", "name-": "element-type-element", "NAME": "ELEMENT_TYPE_ELEMENT", "index$": 70 }, { "active": true, "entity": "element_type_element", "key$": "BasicElementTypeElementFlow", "kind": "basic", "name": "BasicElementTypeElementFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "element_type_element_ref01", "srcdatavar": "element_type_element_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-element_type_element_ref01" } }], "v": [] }] }, 'ElementTypeElement', { "PATCH /api/builder/element/{element_id}/move/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "reference_element_id": { "type": "integer", "nullable": true, "description": "If provided, the element is moved as a child of the element with the given id." }, "position": { "description": "The new position relative to the reference element.\n\n* `north` - North\n* `south` - South\n* `child` - Child", "oneOf": [{ "enum": ["north", "south", "child"], "type": "string", "description": "* `north` - North\n* `south` - South\n* `child` - Child", "x-ref": "#/components/schemas/PositionEnum" }, { "enum": [""], "x-ref": "#/components/schemas/BlankEnum" }] }, "place_in_container": { "type": "string", "nullable": true, "default": "", "description": "The place in the container." }, "target_page_id": { "type": "integer", "nullable": true, "description": "If provided, the new target page for the element." } }, "x-ref": "#/components/schemas/PatchedMoveElement" } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "reference_element_id": { "type": "integer", "nullable": true, "description": "If provided, the element is moved as a child of the element with the given id." }, "position": { "description": "The new position relative to the reference element.\n\n* `north` - North\n* `south` - South\n* `child` - Child", "oneOf": [{ "enum": ["north", "south", "child"], "type": "string", "description": "* `north` - North\n* `south` - South\n* `child` - Child", "x-ref": "#/components/schemas/PositionEnum" }, { "enum": [""], "x-ref": "#/components/schemas/BlankEnum" }] }, "place_in_container": { "type": "string", "nullable": true, "default": "", "description": "The place in the container." }, "target_page_id": { "type": "integer", "nullable": true, "description": "If provided, the new target page for the element." } }, "x-ref": "#/components/schemas/PatchedMoveElement" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "reference_element_id": { "type": "integer", "nullable": true, "description": "If provided, the element is moved as a child of the element with the given id." }, "position": { "description": "The new position relative to the reference element.\n\n* `north` - North\n* `south` - South\n* `child` - Child", "oneOf": [{ "enum": ["north", "south", "child"], "type": "string", "description": "* `north` - North\n* `south` - South\n* `child` - Child", "x-ref": "#/components/schemas/PositionEnum" }, { "enum": [""], "x-ref": "#/components/schemas/BlankEnum" }] }, "place_in_container": { "type": "string", "nullable": true, "default": "", "description": "The place in the container." }, "target_page_id": { "type": "integer", "nullable": true, "description": "If provided, the new target page for the element." } }, "x-ref": "#/components/schemas/PatchedMoveElement" } } } }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "element_id", "schema": { "type": "integer" }, "description": "The id of the element to move", "required": true, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let element_type_element_ref01_data = Object.values(setup.data.existing.element_type_element)[0];
        // UPDATE
        const element_type_element_ref01_ent = client.ElementTypeElement();
        const element_type_element_ref01_data_up0 = {};
        element_type_element_ref01_data_up0.id = element_type_element_ref01_data.id;
        const element_type_element_ref01_resdata_up0 = (await element_type_element_ref01_ent.update(element_type_element_ref01_data_up0)).data();
        (0, node_assert_1.default)(element_type_element_ref01_resdata_up0.id === element_type_element_ref01_data_up0.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/element_type_element/ElementTypeElementTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['element_type_element01', 'element_type_element02', 'element_type_element03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_ELEMENT_TYPE_ELEMENT_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_ELEMENT_TYPE_ELEMENT_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_ELEMENT_TYPE_ELEMENT_ENTID'];
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
//# sourceMappingURL=ElementTypeElementEntity.test.js.map