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
(0, node_test_1.describe)('UserFileEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.UserFile();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.UserFile().create({ "slug": 1, "original_name": "x", "size": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of []) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'user_file.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "image_height": { "a": true, "h": "Image Height", "n": "image_height", "r": false, "t": "`$INTEGER`", "key$": "image_height", "index$": 0 }, "image_width": { "a": true, "h": "Image Width", "n": "image_width", "r": false, "t": "`$INTEGER`", "key$": "image_width", "index$": 1 }, "is_image": { "a": true, "h": "Is Image", "n": "is_image", "r": false, "t": "`$BOOLEAN`", "key$": "is_image", "index$": 2 }, "mime_type": { "a": true, "h": "Mime Type", "n": "mime_type", "r": false, "t": "`$STRING`", "key$": "mime_type", "index$": 3 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "ro": true, "t": "`$STRING`", "key$": "name", "index$": 4 }, "original_name": { "a": true, "h": "Original Name", "n": "original_name", "r": true, "t": "`$STRING`", "key$": "original_name", "index$": 5 }, "size": { "a": true, "fo": "int64", "h": "Size", "n": "size", "r": true, "t": "`$INTEGER`", "key$": "size", "index$": 6 }, "thumbnails": { "a": true, "h": "Thumbnails", "n": "thumbnails", "r": true, "ro": true, "t": "`$OBJECT`", "key$": "thumbnails", "index$": 7 }, "uploaded_at": { "a": true, "fo": "date-time", "h": "Uploaded At", "n": "uploaded_at", "r": true, "ro": true, "t": "`$STRING`", "key$": "uploaded_at", "index$": 8 }, "url": { "a": true, "fo": "uri", "h": "Url", "n": "url", "r": true, "ro": true, "t": "`$STRING`", "key$": "url", "index$": 9 } }, "name": "user_file", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/database/views/form/{slug}/upload-file/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "slug", "or": "slug", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/database/views/form/{slug}/upload-file/", "q": { "exist": ["slug"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "views" }, { "lit": "form" }, { "var": "slug" }, { "lit": "upload-file" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/user-files/upload-file/", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/user-files/upload-file/", "q": { "$action": "upload_file" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "user-files" }, { "lit": "upload-file" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "bf": ["url"], "co": { "id": "POST /api/user-files/upload-via-url/", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/user-files/upload-via-url/", "q": { "$action": "upload_via_url" }, "r": {}, "rb": { "alternatives": [{ "fields": [{ "name": "url" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "url" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "user-files" }, { "lit": "upload-via-url" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "user_file", "name__orig": "user_file", "Name": "UserFile", "name_": "user_file", "name-": "user-file", "NAME": "USER_FILE", "index$": 154 }, { "active": true, "entity": "user_file", "key$": "BasicUserFileFlow", "kind": "basic", "name": "BasicUserFileFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "user_file_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "unreachable": true }] }, 'UserFile', { "POST /api/database/views/form/{slug}/upload-file/": { "protocol": "http", "parameters": [{ "in": "path", "name": "slug", "schema": { "type": "string" }, "description": "Submits files only if the view with the provided slughas a public file field.", "required": true, "index$": 0 }] }, "POST /api/user-files/upload-file/": { "protocol": "http", "parameters": [] }, "POST /api/user-files/upload-via-url/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "url": { "type": "string", "format": "uri" } }, "required": ["url"], "x-ref": "#/components/schemas/UserFileUploadViaURLRequest" } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "url": { "type": "string", "format": "uri" } }, "required": ["url"], "x-ref": "#/components/schemas/UserFileUploadViaURLRequest" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "url": { "type": "string", "format": "uri" } }, "required": ["url"], "x-ref": "#/components/schemas/UserFileUploadViaURLRequest" } } }, "required": true }, "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let user_file_ref01_data = Object.values(setup.data.existing.user_file)[0];
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/user_file/UserFileTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['user_file01', 'user_file02', 'user_file03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_USER_FILE_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_USER_FILE_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_USER_FILE_ENTID'];
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
//# sourceMappingURL=UserFileEntity.test.js.map