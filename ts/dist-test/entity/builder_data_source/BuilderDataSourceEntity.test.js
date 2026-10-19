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
(0, node_test_1.describe)('BuilderDataSourceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.BuilderDataSource();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.BuilderDataSource().load({ "data_source_id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['create', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'builder_data_source.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "1": { "a": true, "h": "1", "n": "1", "r": false, "t": "`$STRING`", "key$": "1", "index$": 0 }, "2": { "a": true, "h": "2", "n": "2", "r": false, "t": "`$STRING`", "key$": "2", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 2 }, "key": { "a": true, "h": "Key", "n": "key", "r": false, "t": "`$STRING`", "key$": "key", "index$": 3 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": false, "sh": "Metadata of the dispatch payload.", "t": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 8 }, "key$": "metadata", "index$": 4 } }, "id": { "field": "id", "name": "id" }, "name": "builder_data_source", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["metadata"], "co": { "id": "POST /api/builder/data-source/{data_source_id}/dispatch/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "data_source_id", "or": "data_source_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/builder/data-source/{data_source_id}/dispatch/", "q": { "exist": ["data_source_id"] }, "r": {}, "rb": { "alternatives": [{ "fields": [{ "name": "metadata" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "metadata" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "builder" }, { "lit": "data-source" }, { "var": "data_source_id" }, { "lit": "dispatch" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["metadata"], "co": { "id": "POST /api/builder/domains/published/data-source/{data_source_id}/dispatch/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "data_source_id", "or": "data_source_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/builder/domains/published/data-source/{data_source_id}/dispatch/", "q": { "exist": ["data_source_id"] }, "r": {}, "rb": { "alternatives": [{ "fields": [{ "name": "metadata" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "metadata" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "builder" }, { "lit": "domains" }, { "lit": "published" }, { "lit": "data-source" }, { "var": "data_source_id" }, { "lit": "dispatch" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /api/builder/domains/published/page/{page_id}/dispatch-data-sources/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "page_id", "or": "page_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/builder/domains/published/page/{page_id}/dispatch-data-sources/", "q": { "exist": ["page_id"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "builder" }, { "lit": "domains" }, { "lit": "published" }, { "lit": "page" }, { "var": "page_id" }, { "lit": "dispatch-data-sources" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "bf": ["metadata"], "co": { "id": "POST /api/builder/page/{page_id}/dispatch-data-sources/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "page_id", "or": "page_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/builder/page/{page_id}/dispatch-data-sources/", "q": { "exist": ["page_id"] }, "r": {}, "rb": { "alternatives": [{ "fields": [{ "name": "metadata" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "metadata" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "builder" }, { "lit": "page" }, { "var": "page_id" }, { "lit": "dispatch-data-sources" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/builder/data-source/{data_source_id}/record-names/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "data_source_id", "or": "data_source_id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "record_id", "or": "record_ids", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/builder/data-source/{data_source_id}/record-names/", "q": { "exist": ["data_source_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "builder" }, { "lit": "data-source" }, { "var": "data_source_id" }, { "lit": "record-names" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/builder/data-source/{data_source_id}/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "data_source_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/builder/data-source/{data_source_id}/", "q": { "exist": ["id"] }, "r": { "param": { "data_source_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "builder" }, { "lit": "data-source" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.page"]] }, "key$": "builder_data_source", "name__orig": "builder_data_source", "Name": "BuilderDataSource", "name_": "builder_data_source", "name-": "builder-data-source", "NAME": "BUILDER_DATA_SOURCE", "index$": 30 }, { "active": true, "entity": "builder_data_source", "key$": "BasicBuilderDataSourceFlow", "kind": "basic", "name": "BasicBuilderDataSourceFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "builder_data_source_ref01" }, "m": { "page_id": "page01" }, "o": "create", "s": [], "v": [] }, { "a": false, "d": {}, "i": { "ref": "builder_data_source_ref01", "srcdatavar": "builder_data_source_ref01_data", "suffix": "_dt0" }, "m": { "id": "builder_data_source01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-builder_data_source_ref01" } }], "unreachable": true }, { "a": true, "d": {}, "i": { "ref": "builder_data_source_ref01", "suffix": "_rm0" }, "m": { "id": "builder_data_source01" }, "o": "remove", "s": [], "v": [] }] }, 'BuilderDataSource', { "POST /api/builder/data-source/{data_source_id}/dispatch/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "metadata": { "allOf": [{ "type": "object", "description": "A base serializer that builds fields dynamically from the registry.", "properties": { "data_source": {}, "data_source_context": {}, "page_parameter": {}, "current_record": {}, "form_data": {}, "previous_action": {}, "user": {} }, "x-ref": "#/components/schemas/DynamicMetadata" }], "nullable": true, "description": "Metadata of the dispatch payload. Can be either an object or a serialized string.", "key$": "metadata" } }, "x-ref": "#/components/schemas/DispatchDataSourceRequest", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "metadata": { "allOf": [{ "type": "object", "description": "A base serializer that builds fields dynamically from the registry.", "properties": { "data_source": {}, "data_source_context": {}, "page_parameter": {}, "current_record": {}, "form_data": {}, "previous_action": {}, "user": {} }, "x-ref": "#/components/schemas/DynamicMetadata" }], "nullable": true, "description": "Metadata of the dispatch payload. Can be either an object or a serialized string.", "key$": "metadata" } }, "x-ref": "#/components/schemas/DispatchDataSourceRequest" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "metadata": { "allOf": [{ "type": "object", "description": "A base serializer that builds fields dynamically from the registry.", "properties": { "data_source": {}, "data_source_context": {}, "page_parameter": {}, "current_record": {}, "form_data": {}, "previous_action": {}, "user": {} }, "x-ref": "#/components/schemas/DynamicMetadata" }], "nullable": true, "description": "Metadata of the dispatch payload. Can be either an object or a serialized string.", "key$": "metadata" } }, "x-ref": "#/components/schemas/DispatchDataSourceRequest" } } } }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "data_source_id", "schema": { "type": "integer" }, "description": "The id of the data_source you want to call the dispatch for", "required": true, "index$": 1 }] }, "POST /api/builder/domains/published/data-source/{data_source_id}/dispatch/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "metadata": { "allOf": [{ "type": "object", "description": "A base serializer that builds fields dynamically from the registry.", "properties": { "data_source": {}, "data_source_context": {}, "page_parameter": {}, "current_record": {}, "form_data": {}, "previous_action": {}, "user": {} }, "x-ref": "#/components/schemas/DynamicMetadata" }], "nullable": true, "description": "Metadata of the dispatch payload. Can be either an object or a serialized string.", "key$": "metadata" } }, "x-ref": "#/components/schemas/DispatchDataSourceRequest", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "metadata": { "allOf": [{ "type": "object", "description": "A base serializer that builds fields dynamically from the registry.", "properties": { "data_source": {}, "data_source_context": {}, "page_parameter": {}, "current_record": {}, "form_data": {}, "previous_action": {}, "user": {} }, "x-ref": "#/components/schemas/DynamicMetadata" }], "nullable": true, "description": "Metadata of the dispatch payload. Can be either an object or a serialized string.", "key$": "metadata" } }, "x-ref": "#/components/schemas/DispatchDataSourceRequest" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "metadata": { "allOf": [{ "type": "object", "description": "A base serializer that builds fields dynamically from the registry.", "properties": { "data_source": {}, "data_source_context": {}, "page_parameter": {}, "current_record": {}, "form_data": {}, "previous_action": {}, "user": {} }, "x-ref": "#/components/schemas/DynamicMetadata" }], "nullable": true, "description": "Metadata of the dispatch payload. Can be either an object or a serialized string.", "key$": "metadata" } }, "x-ref": "#/components/schemas/DispatchDataSourceRequest" } } } }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "data_source_id", "schema": { "type": "integer" }, "description": "The id of the data_source you want to call the dispatch for", "required": true, "index$": 1 }] }, "POST /api/builder/domains/published/page/{page_id}/dispatch-data-sources/": { "protocol": "http", "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "page_id", "schema": { "type": "integer" }, "description": "The page we want to dispatch the data source for.", "required": true, "index$": 1 }] }, "POST /api/builder/page/{page_id}/dispatch-data-sources/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "metadata": { "allOf": [{ "type": "object", "description": "A base serializer that builds fields dynamically from the registry.", "properties": { "data_source": {}, "data_source_context": {}, "page_parameter": {}, "current_record": {}, "form_data": {}, "previous_action": {}, "user": {} }, "x-ref": "#/components/schemas/DynamicMetadata" }], "nullable": true, "description": "Metadata of the dispatch payload. Can be either an object or a serialized string.", "key$": "metadata" } }, "x-ref": "#/components/schemas/DispatchDataSourceRequest", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "metadata": { "allOf": [{ "type": "object", "description": "A base serializer that builds fields dynamically from the registry.", "properties": { "data_source": {}, "data_source_context": {}, "page_parameter": {}, "current_record": {}, "form_data": {}, "previous_action": {}, "user": {} }, "x-ref": "#/components/schemas/DynamicMetadata" }], "nullable": true, "description": "Metadata of the dispatch payload. Can be either an object or a serialized string.", "key$": "metadata" } }, "x-ref": "#/components/schemas/DispatchDataSourceRequest" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "metadata": { "allOf": [{ "type": "object", "description": "A base serializer that builds fields dynamically from the registry.", "properties": { "data_source": {}, "data_source_context": {}, "page_parameter": {}, "current_record": {}, "form_data": {}, "previous_action": {}, "user": {} }, "x-ref": "#/components/schemas/DynamicMetadata" }], "nullable": true, "description": "Metadata of the dispatch payload. Can be either an object or a serialized string.", "key$": "metadata" } }, "x-ref": "#/components/schemas/DispatchDataSourceRequest" } } } }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "page_id", "schema": { "type": "integer" }, "description": "The page we want to dispatch the data source for.", "required": true, "index$": 1 }] }, "GET /api/builder/data-source/{data_source_id}/record-names/": { "protocol": "http", "parameters": [{ "in": "path", "name": "data_source_id", "schema": { "type": "integer" }, "description": "The id of the data_source to find the record names.", "required": true, "index$": 0 }, { "in": "query", "name": "record_ids", "schema": { "type": "string" }, "description": "A comma separated list of the record ids to search for.", "explode": false, "index$": 1 }] }, "DELETE /api/builder/data-source/{data_source_id}/": { "protocol": "http", "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "data_source_id", "schema": { "type": "integer" }, "description": "The id of the data_source", "required": true, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const builder_data_source_ref01_ent = client.BuilderDataSource();
        let builder_data_source_ref01_data = setup.data.new.builder_data_source['builder_data_source_ref01'];
        builder_data_source_ref01_data['page_id'] = setup.idmap['page01'];
        builder_data_source_ref01_data = (await builder_data_source_ref01_ent.create(builder_data_source_ref01_data)).data();
        (0, node_assert_1.default)(null != builder_data_source_ref01_data.id);
        // REMOVE
        const builder_data_source_ref01_match_rm0 = { id: builder_data_source_ref01_data.id };
        await builder_data_source_ref01_ent.remove(builder_data_source_ref01_match_rm0);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/builder_data_source/BuilderDataSourceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['builder_data_source01', 'builder_data_source02', 'builder_data_source03', 'page01', 'page02', 'page03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_BUILDER_DATA_SOURCE_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_BUILDER_DATA_SOURCE_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_BUILDER_DATA_SOURCE_ENTID'];
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
//# sourceMappingURL=BuilderDataSourceEntity.test.js.map