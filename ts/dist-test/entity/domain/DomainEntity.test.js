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
(0, node_test_1.describe)('DomainEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.Domain();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Domain().list({ "builder_id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['create', 'list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'domain.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "domain_name": { "a": true, "h": "Domain Name", "n": "domain_name", "r": false, "t": "`$STRING`", "key$": "domain_name", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 1 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "The type of the domain.", "t": "`$STRING`", "key$": "type", "index$": 2 } }, "id": { "field": "id", "name": "id" }, "name": "domain", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["domain_name", "type"], "co": { "id": "POST /api/builder/{builder_id}/domains/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "builder_id", "or": "builder_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/builder/{builder_id}/domains/", "q": { "exist": ["builder_id"] }, "r": {}, "rb": { "alternatives": [{ "kind": "multipart", "media": "multipart/form-data" }, { "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "builder" }, { "var": "builder_id" }, { "lit": "domains" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/builder/{builder_id}/domains/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "builder_id", "or": "builder_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/builder/{builder_id}/domains/", "q": { "exist": ["builder_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "builder" }, { "var": "builder_id" }, { "lit": "domains" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["domain_name", "type"], "co": { "id": "PATCH /api/builder/domains/{domain_id}/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "domain_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/builder/domains/{domain_id}/", "q": { "exist": ["id"] }, "r": { "param": { "domain_id": "id" } }, "rb": { "alternatives": [{ "fields": [{ "name": "domain_name" }, { "name": "type" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "domain_name" }, { "name": "type" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "builder" }, { "lit": "domains" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "domain", "name__orig": "domain", "Name": "Domain", "name_": "domain", "name-": "domain", "NAME": "DOMAIN", "index$": 67 }, { "active": true, "entity": "domain", "key$": "BasicDomainFlow", "kind": "basic", "name": "BasicDomainFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "domain_ref01" }, "m": { "builder_id": "builder01" }, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": {}, "m": { "builder_id": "builder01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "domain_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "domain_ref01", "srcdatavar": "domain_ref01_data", "suffix": "_up0", "textfield": "domain_name" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-domain_ref01" } }], "v": [] }] }, 'Domain', { "POST /api/builder/{builder_id}/domains/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "oneOf": [{ "type": "object", "properties": { "type": { "allOf": [{}], "description": "The type of the domain.\n\n* `custom` - custom\n* `sub_domain` - sub_domain" }, "domain_name": { "type": "string", "maxLength": 255 } }, "required": ["domain_name", "type"], "x-ref": "#/components/schemas/CustomDomainCreateDomain" }, { "type": "object", "properties": { "type": { "allOf": [{}], "description": "The type of the domain.\n\n* `custom` - custom\n* `sub_domain` - sub_domain" }, "domain_name": { "type": "string", "maxLength": 255 } }, "required": ["domain_name", "type"], "x-ref": "#/components/schemas/SubDomainCreateDomain" }], "discriminator": { "propertyName": "type", "mapping": { "custom": "#/components/schemas/CustomDomainCreateDomain", "sub_domain": "#/components/schemas/SubDomainCreateDomain" } }, "x-ref": "#/components/schemas/Domain_TypeCreateDomain", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "oneOf": [{ "type": "object", "properties": { "type": { "allOf": [{}], "description": "The type of the domain.\n\n* `custom` - custom\n* `sub_domain` - sub_domain" }, "domain_name": { "type": "string", "maxLength": 255 } }, "required": ["domain_name", "type"], "x-ref": "#/components/schemas/CustomDomainCreateDomain" }, { "type": "object", "properties": { "type": { "allOf": [{}], "description": "The type of the domain.\n\n* `custom` - custom\n* `sub_domain` - sub_domain" }, "domain_name": { "type": "string", "maxLength": 255 } }, "required": ["domain_name", "type"], "x-ref": "#/components/schemas/SubDomainCreateDomain" }], "discriminator": { "propertyName": "type", "mapping": { "custom": "#/components/schemas/CustomDomainCreateDomain", "sub_domain": "#/components/schemas/SubDomainCreateDomain" } }, "x-ref": "#/components/schemas/Domain_TypeCreateDomain" } }, "multipart/form-data": { "schema": { "oneOf": [{ "type": "object", "properties": { "type": { "allOf": [{}], "description": "The type of the domain.\n\n* `custom` - custom\n* `sub_domain` - sub_domain" }, "domain_name": { "type": "string", "maxLength": 255 } }, "required": ["domain_name", "type"], "x-ref": "#/components/schemas/CustomDomainCreateDomain" }, { "type": "object", "properties": { "type": { "allOf": [{}], "description": "The type of the domain.\n\n* `custom` - custom\n* `sub_domain` - sub_domain" }, "domain_name": { "type": "string", "maxLength": 255 } }, "required": ["domain_name", "type"], "x-ref": "#/components/schemas/SubDomainCreateDomain" }], "discriminator": { "propertyName": "type", "mapping": { "custom": "#/components/schemas/CustomDomainCreateDomain", "sub_domain": "#/components/schemas/SubDomainCreateDomain" } }, "x-ref": "#/components/schemas/Domain_TypeCreateDomain" } } } }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "builder_id", "schema": { "type": "integer" }, "description": "Creates a domain for the application builder related tothe provided value", "required": true, "index$": 1 }] }, "GET /api/builder/{builder_id}/domains/": { "protocol": "http", "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "builder_id", "schema": { "type": "integer" }, "description": "Gets all the domains for the specified builder", "required": true, "index$": 1 }] }, "PATCH /api/builder/domains/{domain_id}/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "type": { "allOf": [{ "enum": ["custom", "sub_domain"], "type": "string", "description": "* `custom` - custom\n* `sub_domain` - sub_domain", "x-ref": "#/components/schemas/Type509Enum" }], "description": "The type of the domain.\n\n* `custom` - custom\n* `sub_domain` - sub_domain", "key$": "type" }, "domain_name": { "type": "string", "key$": "domain_name" } }, "x-ref": "#/components/schemas/PatchedUpdateDomain", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "type": { "allOf": [{ "enum": ["custom", "sub_domain"], "type": "string", "description": "* `custom` - custom\n* `sub_domain` - sub_domain", "x-ref": "#/components/schemas/Type509Enum" }], "description": "The type of the domain.\n\n* `custom` - custom\n* `sub_domain` - sub_domain", "key$": "type" }, "domain_name": { "type": "string", "key$": "domain_name" } }, "x-ref": "#/components/schemas/PatchedUpdateDomain" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "type": { "allOf": [{ "enum": ["custom", "sub_domain"], "type": "string", "description": "* `custom` - custom\n* `sub_domain` - sub_domain", "x-ref": "#/components/schemas/Type509Enum" }], "description": "The type of the domain.\n\n* `custom` - custom\n* `sub_domain` - sub_domain", "key$": "type" }, "domain_name": { "type": "string", "key$": "domain_name" } }, "x-ref": "#/components/schemas/PatchedUpdateDomain" } } } }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "domain_id", "schema": { "type": "integer" }, "description": "The id of the domain", "required": true, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const domain_ref01_ent = client.Domain();
        let domain_ref01_data = setup.data.new.domain['domain_ref01'];
        domain_ref01_data['builder_id'] = setup.idmap['builder01'];
        domain_ref01_data = (await domain_ref01_ent.create(domain_ref01_data)).data();
        (0, node_assert_1.default)(null != domain_ref01_data.id);
        // LIST
        const domain_ref01_match = {};
        domain_ref01_match['builder_id'] = setup.idmap['builder01'];
        const domain_ref01_list = (await domain_ref01_ent.list(domain_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(domain_ref01_list, { id: domain_ref01_data.id })));
        // UPDATE
        const domain_ref01_data_up0 = {};
        domain_ref01_data_up0.id = domain_ref01_data.id;
        const domain_ref01_markdef_up0 = { name: 'domain_name', value: 'Mark01-domain_ref01_' + setup.now };
        domain_ref01_data_up0[domain_ref01_markdef_up0.name] = domain_ref01_markdef_up0.value;
        const domain_ref01_resdata_up0 = (await domain_ref01_ent.update(domain_ref01_data_up0)).data();
        (0, node_assert_1.default)(domain_ref01_resdata_up0.id === domain_ref01_data_up0.id);
        (0, node_assert_1.default)(domain_ref01_resdata_up0[domain_ref01_markdef_up0.name] === domain_ref01_markdef_up0.value);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/domain/DomainTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['domain01', 'domain02', 'domain03', 'builder01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_DOMAIN_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_DOMAIN_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_DOMAIN_ENTID'];
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
//# sourceMappingURL=DomainEntity.test.js.map