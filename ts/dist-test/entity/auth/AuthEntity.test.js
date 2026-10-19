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
(0, node_test_1.describe)('AuthEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.Auth();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Auth().load({ "RelayState": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'auth.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "RelayState": { "a": true, "h": "Relay State", "n": "RelayState", "r": true, "sh": "The frontend URL where redirect the authenticated user.", "t": "`$STRING`", "key$": "RelayState", "index$": 0 }, "SAMLResponse": { "a": true, "h": "Saml Response", "n": "SAMLResponse", "r": true, "sh": "The encoded SAML response from the IdP.", "t": "`$STRING`", "key$": "SAMLResponse", "index$": 1 }, "backup_code": { "a": true, "h": "Backup Code", "n": "backup_code", "r": false, "t": "`$STRING`", "key$": "backup_code", "index$": 2 }, "code": { "a": true, "h": "Code", "n": "code", "r": false, "t": "`$STRING`", "key$": "code", "index$": 3 }, "email": { "a": true, "fo": "email", "h": "Email", "n": "email", "r": false, "sh": "Deprecated.", "t": "`$STRING`", "key$": "email", "index$": 4 }, "password": { "a": true, "h": "Password", "n": "password", "r": true, "t": "`$STRING`", "key$": "password", "index$": 5 } }, "name": "auth", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["RelayState", "SAMLResponse"], "co": { "id": "POST /api/sso/saml/acs/", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/sso/saml/acs/", "q": {}, "r": {}, "rb": { "alternatives": [{ "fields": [{ "name": "RelayState" }, { "name": "SAMLResponse" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "RelayState" }, { "name": "SAMLResponse" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "sso" }, { "lit": "saml" }, { "lit": "acs" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["password"], "co": { "id": "POST /api/two-factor-auth/disable/", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/two-factor-auth/disable/", "q": {}, "r": {}, "rb": { "alternatives": [{ "fields": [{ "name": "password" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "password" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "two-factor-auth" }, { "lit": "disable" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "bf": ["backup_code", "code", "email"], "co": { "id": "POST /api/two-factor-auth/verify/", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/two-factor-auth/verify/", "q": {}, "r": {}, "rb": { "alternatives": [{ "fields": [{ "name": "backup_code" }, { "name": "code" }, { "name": "email" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "backup_code" }, { "name": "code" }, { "name": "email" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "two-factor-auth" }, { "lit": "verify" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/auth-provider/login-options/", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/auth-provider/login-options/", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "auth-provider" }, { "lit": "login-options" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/sso/saml/login-url/", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "email", "or": "email", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "language", "or": "language", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "original", "or": "original", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "workspace_invitation_token", "or": "workspace_invitation_token", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/api/sso/saml/login-url/", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "sso" }, { "lit": "saml" }, { "lit": "login-url" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /api/sso/saml/login/", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "email", "or": "email", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "language", "or": "language", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "original", "or": "original", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "workspace_invitation_token", "or": "workspace_invitation_token", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/api/sso/saml/login/", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "sso" }, { "lit": "saml" }, { "lit": "login" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/admin/auth-provider/{auth_provider_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "auth_provider_id", "or": "auth_provider_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/admin/auth-provider/{auth_provider_id}/", "q": { "exist": ["auth_provider_id"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "auth-provider" }, { "var": "auth_provider_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "auth", "name__orig": "auth", "Name": "Auth", "name_": "auth", "name-": "auth", "NAME": "AUTH", "index$": 22 }, { "active": true, "entity": "auth", "key$": "BasicAuthFlow", "kind": "basic", "name": "BasicAuthFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "auth_ref01" }, "m": {}, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": { "ref": "auth_ref01", "srcdatavar": "auth_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-auth_ref01" } }] }, { "a": false, "d": {}, "i": { "ref": "auth_ref01", "suffix": "_rm0" }, "m": { "id": "auth01" }, "o": "remove", "s": [], "v": [], "unreachable": true }] }, 'Auth', { "POST /api/sso/saml/acs/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "SAMLResponse": { "type": "string", "description": "The encoded SAML response from the IdP.", "key$": "SAMLResponse" }, "RelayState": { "type": "string", "description": "The frontend URL where redirect the authenticated user.", "key$": "RelayState" } }, "required": ["RelayState", "SAMLResponse"], "x-ref": "#/components/schemas/SAMLResponse", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "SAMLResponse": { "type": "string", "description": "The encoded SAML response from the IdP.", "key$": "SAMLResponse" }, "RelayState": { "type": "string", "description": "The frontend URL where redirect the authenticated user.", "key$": "RelayState" } }, "required": ["RelayState", "SAMLResponse"], "x-ref": "#/components/schemas/SAMLResponse" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "SAMLResponse": { "type": "string", "description": "The encoded SAML response from the IdP.", "key$": "SAMLResponse" }, "RelayState": { "type": "string", "description": "The frontend URL where redirect the authenticated user.", "key$": "RelayState" } }, "required": ["RelayState", "SAMLResponse"], "x-ref": "#/components/schemas/SAMLResponse" } } }, "required": true }, "parameters": [] }, "POST /api/two-factor-auth/disable/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "password": { "type": "string", "key$": "password" } }, "required": ["password"], "x-ref": "#/components/schemas/DisableTwoFactorAuth", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "password": { "type": "string", "key$": "password" } }, "required": ["password"], "x-ref": "#/components/schemas/DisableTwoFactorAuth" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "password": { "type": "string", "key$": "password" } }, "required": ["password"], "x-ref": "#/components/schemas/DisableTwoFactorAuth" } } }, "required": true }, "parameters": [] }, "POST /api/two-factor-auth/verify/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "email": { "type": "string", "format": "email", "description": "Deprecated. User identity is resolved from the 2FA token. This field is ignored and will be removed in a future version.", "key$": "email" }, "code": { "type": "string", "key$": "code" }, "backup_code": { "type": "string", "key$": "backup_code" } }, "x-ref": "#/components/schemas/VerifyTOTP", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "email": { "type": "string", "format": "email", "description": "Deprecated. User identity is resolved from the 2FA token. This field is ignored and will be removed in a future version.", "key$": "email" }, "code": { "type": "string", "key$": "code" }, "backup_code": { "type": "string", "key$": "backup_code" } }, "x-ref": "#/components/schemas/VerifyTOTP" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "email": { "type": "string", "format": "email", "description": "Deprecated. User identity is resolved from the 2FA token. This field is ignored and will be removed in a future version.", "key$": "email" }, "code": { "type": "string", "key$": "code" }, "backup_code": { "type": "string", "key$": "backup_code" } }, "x-ref": "#/components/schemas/VerifyTOTP" } } } }, "parameters": [] }, "GET /api/auth-provider/login-options/": { "protocol": "http", "parameters": [] }, "GET /api/sso/saml/login-url/": { "protocol": "http", "parameters": [{ "in": "query", "name": "email", "schema": { "type": "string" }, "description": "The email address of the user that want to sign in using SAML.", "index$": 0 }, { "in": "query", "name": "language", "schema": { "type": "string" }, "description": "An ISO 639 language code (with optional variant) selected by the user. Ex: en-GB.", "index$": 1 }, { "in": "query", "name": "original", "schema": { "type": "string" }, "description": "The url to which the user should be redirected after a successful login.", "index$": 2 }, { "in": "query", "name": "workspace_invitation_token", "schema": { "type": "string" }, "description": "If provided and valid, the user accepts the workspace invitation and will have access to the workspace after login or signing up.", "index$": 3 }] }, "GET /api/sso/saml/login/": { "protocol": "http", "parameters": [{ "in": "query", "name": "email", "schema": { "type": "string" }, "description": "The email address of the user that want to sign in using SAML.", "index$": 0 }, { "in": "query", "name": "language", "schema": { "type": "string" }, "description": "An ISO 639 language code (with optional variant) selected by the user. Ex: en-GB.", "index$": 1 }, { "in": "query", "name": "original", "schema": { "type": "string" }, "description": "The url to which the user should be redirected after a successful login or sign up.", "index$": 2 }, { "in": "query", "name": "workspace_invitation_token", "schema": { "type": "string" }, "description": "If provided and valid, the user accepts the workspace invitation and will have access to the workspace after login or signing up.", "index$": 3 }] }, "DELETE /api/admin/auth-provider/{auth_provider_id}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "auth_provider_id", "schema": { "type": "integer" }, "description": "The authentication provider id to delete.", "required": true, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const auth_ref01_ent = client.Auth();
        let auth_ref01_data = setup.data.new.auth['auth_ref01'];
        auth_ref01_data = (await auth_ref01_ent.create(auth_ref01_data)).data();
        (0, node_assert_1.default)(null != auth_ref01_data);
        // LOAD
        const auth_ref01_match_dt0 = {};
        const auth_ref01_data_dt0 = (await auth_ref01_ent.load(auth_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != auth_ref01_data_dt0);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/auth/AuthTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['auth01', 'auth02', 'auth03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_AUTH_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_AUTH_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_AUTH_ENTID'];
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
//# sourceMappingURL=AuthEntity.test.js.map