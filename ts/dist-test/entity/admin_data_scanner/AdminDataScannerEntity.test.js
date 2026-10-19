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
(0, node_test_1.describe)('AdminDataScannerEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.AdminDataScanner();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('admin_data_scanner hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.BaserowSDK.test(offline).AdminDataScanner().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.BaserowSDK.test(offline).AdminDataScanner()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.BaserowSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.AdminDataScanner().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.BaserowSDK.test().AdminDataScanner().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.BaserowSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.AdminDataScanner().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.AdminDataScanner().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.AdminDataScanner().list({ "ids": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['create', 'list', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'admin_data_scanner.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_on": { "a": true, "fo": "date-time", "h": "Created On", "n": "created_on", "r": true, "ro": true, "sh": "The date and time when the export job was created.", "t": "`$STRING`", "key$": "created_on", "index$": 0 }, "csv_column_separator": { "a": true, "h": "Csv Column Separator", "n": "csv_column_separator", "r": false, "sh": "The value used to separate columns in the resulting csv file.", "t": "`$STRING`", "key$": "csv_column_separator", "index$": 1 }, "csv_first_row_header": { "a": true, "h": "Csv First Row Header", "n": "csv_first_row_header", "r": false, "sh": "Whether or not to generate a header row at the top of the csv file.", "t": "`$BOOLEAN`", "key$": "csv_first_row_header", "index$": 2 }, "database_id": { "a": true, "h": "Database Id", "n": "database_id", "r": true, "ro": true, "t": "`$STRING`", "key$": "database_id", "index$": 3 }, "database_name": { "a": true, "h": "Database Name", "n": "database_name", "r": true, "ro": true, "t": "`$STRING`", "key$": "database_name", "index$": 4 }, "export_charset": { "a": true, "h": "Export Charset", "n": "export_charset", "r": false, "sh": "The character set to use when creating the export file.", "t": "`$STRING`", "key$": "export_charset", "index$": 5 }, "exported_file_name": { "a": true, "h": "Exported File Name", "n": "exported_file_name", "r": true, "ro": true, "sh": "The name of the file that was created by the export job.", "t": "`$STRING`", "key$": "exported_file_name", "index$": 6 }, "field_name": { "a": true, "h": "Field Name", "n": "field_name", "r": true, "ro": true, "t": "`$STRING`", "key$": "field_name", "index$": 7 }, "filter_scan_id": { "a": true, "h": "Filter Scan Id", "n": "filter_scan_id", "r": false, "sh": "Optional: Filter results by scan ID.", "t": "`$INTEGER`", "key$": "filter_scan_id", "index$": 8 }, "first_identified_on": { "a": true, "fo": "date-time", "h": "First Identified On", "n": "first_identified_on", "r": true, "t": "`$STRING`", "key$": "first_identified_on", "index$": 9 }, "frequency": { "a": true, "h": "Frequency", "n": "frequency", "r": false, "sh": "* `manual` - Manual * `hourly` - Hourly * `daily` - Daily * `weekly` - Weekly", "t": "`$STRING`", "key$": "frequency", "index$": 10 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "id", "index$": 11 }, "is_running": { "a": true, "h": "Is Running", "n": "is_running", "r": false, "t": "`$BOOLEAN`", "key$": "is_running", "index$": 12 }, "last_error": { "a": true, "h": "Last Error", "n": "last_error", "r": false, "t": "`$STRING`", "key$": "last_error", "index$": 13 }, "last_identified_on": { "a": true, "fo": "date-time", "h": "Last Identified On", "n": "last_identified_on", "r": true, "t": "`$STRING`", "key$": "last_identified_on", "index$": 14 }, "last_run_finished_at": { "a": true, "fo": "date-time", "h": "Last Run Finished At", "n": "last_run_finished_at", "r": false, "t": "`$STRING`", "key$": "last_run_finished_at", "index$": 15 }, "last_run_started_at": { "a": true, "fo": "date-time", "h": "Last Run Started At", "n": "last_run_started_at", "r": false, "t": "`$STRING`", "key$": "last_run_started_at", "index$": 16 }, "list_items": { "a": true, "h": "List Items", "n": "list_items", "r": true, "ro": true, "t": "`$STRING`", "key$": "list_items", "index$": 17 }, "matched_value": { "a": true, "h": "Matched Value", "n": "matched_value", "r": true, "t": "`$STRING`", "key$": "matched_value", "index$": 18 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "t": "`$STRING`", "key$": "name", "index$": 19 }, "pattern": { "a": true, "h": "Pattern", "n": "pattern", "r": false, "t": "`$STRING`", "key$": "pattern", "index$": 20 }, "results_count": { "a": true, "h": "Results Count", "n": "results_count", "r": true, "ro": true, "t": "`$STRING`", "key$": "results_count", "index$": 21 }, "row_id": { "a": true, "h": "Row Id", "n": "row_id", "r": true, "t": "`$INTEGER`", "key$": "row_id", "index$": 22 }, "scan_all_workspaces": { "a": true, "h": "Scan All Workspaces", "n": "scan_all_workspaces", "r": false, "t": "`$BOOLEAN`", "key$": "scan_all_workspaces", "index$": 23 }, "scan_id": { "a": true, "h": "Scan Id", "n": "scan_id", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "scan_id", "index$": 24 }, "scan_name": { "a": true, "h": "Scan Name", "n": "scan_name", "r": true, "ro": true, "t": "`$STRING`", "key$": "scan_name", "index$": 25 }, "scan_type": { "a": true, "h": "Scan Type", "n": "scan_type", "r": true, "sh": "* `pattern` - Pattern * `list_of_values` - List of values * `list_table` - List Table", "t": "`$STRING`", "key$": "scan_type", "index$": 26 }, "source_database_id": { "a": true, "h": "Source Database Id", "n": "source_database_id", "r": true, "ro": true, "t": "`$STRING`", "key$": "source_database_id", "index$": 27 }, "source_field_id": { "a": true, "h": "Source Field Id", "n": "source_field_id", "r": true, "ro": true, "t": "`$STRING`", "key$": "source_field_id", "index$": 28 }, "source_table_id": { "a": true, "h": "Source Table Id", "n": "source_table_id", "r": true, "ro": true, "t": "`$STRING`", "key$": "source_table_id", "index$": 29 }, "source_workspace_id": { "a": true, "h": "Source Workspace Id", "n": "source_workspace_id", "r": true, "ro": true, "t": "`$STRING`", "key$": "source_workspace_id", "index$": 30 }, "table_id": { "a": true, "h": "Table Id", "n": "table_id", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "table_id", "index$": 31 }, "table_name": { "a": true, "h": "Table Name", "n": "table_name", "r": true, "ro": true, "t": "`$STRING`", "key$": "table_name", "index$": 32 }, "updated_on": { "a": true, "fo": "date-time", "h": "Updated On", "n": "updated_on", "r": true, "ro": true, "t": "`$STRING`", "key$": "updated_on", "index$": 33 }, "url": { "a": true, "fo": "uri", "h": "Url", "n": "url", "r": true, "ro": true, "sh": "The URL to download the exported file.", "t": "`$STRING`", "key$": "url", "index$": 34 }, "whole_words": { "a": true, "h": "Whole Words", "n": "whole_words", "r": false, "t": "`$BOOLEAN`", "key$": "whole_words", "index$": 35 }, "workspace_ids": { "a": true, "h": "Workspace Ids", "n": "workspace_ids", "r": true, "ro": true, "t": "`$STRING`", "key$": "workspace_ids", "index$": 36 }, "workspace_name": { "a": true, "h": "Workspace Name", "n": "workspace_name", "r": true, "ro": true, "t": "`$STRING`", "key$": "workspace_name", "index$": 37 } }, "id": { "field": "id", "name": "id" }, "name": "admin_data_scanner", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/admin/data-scanner/scans/{scan_id}/trigger/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "scan_id", "or": "scan_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/admin/data-scanner/scans/{scan_id}/trigger/", "q": { "exist": ["scan_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "data-scanner" }, { "lit": "scans" }, { "var": "scan_id" }, { "lit": "trigger" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["csv_column_separator", "csv_first_row_header", "export_charset", "filter_scan_id"], "co": { "id": "POST /api/admin/data-scanner/results/export/", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/admin/data-scanner/results/export/", "q": {}, "r": {}, "rb": { "alternatives": [{ "fields": [{ "name": "csv_column_separator" }, { "name": "csv_first_row_header" }, { "name": "export_charset" }, { "name": "filter_scan_id" }, { "name": "url" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "csv_column_separator" }, { "name": "csv_first_row_header" }, { "name": "export_charset" }, { "name": "filter_scan_id" }, { "name": "url" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "data-scanner" }, { "lit": "results" }, { "lit": "export" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/admin/data-scanner/results/", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "ids", "or": "ids", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "search", "or": "search", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "size", "or": "size", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "k": "query", "n": "sort", "or": "sorts", "r": false, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/api/admin/data-scanner/results/", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "data-scanner" }, { "lit": "results" }], "t": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }], "key$": "list" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/admin/data-scanner/results/{result_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "result_id", "or": "result_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/admin/data-scanner/results/{result_id}/", "q": { "exist": ["result_id"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "data-scanner" }, { "lit": "results" }, { "var": "result_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /api/admin/data-scanner/scans/{scan_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "scan_id", "or": "scan_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/admin/data-scanner/scans/{scan_id}/", "q": { "exist": ["scan_id"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "admin" }, { "lit": "data-scanner" }, { "lit": "scans" }, { "var": "scan_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "admin_data_scanner", "name__orig": "admin_data_scanner", "Name": "AdminDataScanner", "name_": "admin_data_scanner", "name-": "admin-data-scanner", "NAME": "ADMIN_DATA_SCANNER", "index$": 3 }, { "active": true, "entity": "admin_data_scanner", "key$": "BasicAdminDataScannerFlow", "kind": "basic", "name": "BasicAdminDataScannerFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "admin_data_scanner_ref01" }, "m": {}, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "admin_data_scanner_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "admin_data_scanner_ref01", "suffix": "_rm0" }, "m": { "id": "admin_data_scanner01" }, "o": "remove", "s": [], "v": [] }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "admin_data_scanner_ref01" } }] }] }, 'AdminDataScanner', { "POST /api/admin/data-scanner/scans/{scan_id}/trigger/": { "protocol": "http", "parameters": [{ "in": "path", "name": "scan_id", "schema": { "type": "string", "pattern": "^[0-9]+$" }, "required": true, "index$": 0 }] }, "POST /api/admin/data-scanner/results/export/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "description": "When mixed in to a model serializer for an ExportJob this will add an url field\nwith the actual usable url of the export job's file (if it has one).", "properties": { "url": { "type": "string", "format": "uri", "readOnly": true, "key$": "url" }, "export_charset": { "allOf": [{ "enum": ["utf-8", "iso-8859-6", "windows-1256", "iso-8859-4", "windows-1257", "iso-8859-14", "iso-8859-2", "windows-1250", "gbk", "gb18030", "big5", "koi8-r", "koi8-u", "iso-8859-5", "windows-1251", "x-mac-cyrillic", "iso-8859-7", "windows-1253", "iso-8859-8", "windows-1255", "euc-jp", "iso-2022-jp", "shift-jis", "euc-kr", "macintosh", "iso-8859-10", "iso-8859-16", "windows-874", "windows-1254", "windows-1258", "iso-8859-1", "windows-1252", "iso-8859-3"], "type": "string", "description": "* `utf-8` - utf-8\n* `iso-8859-6` - iso-8859-6\n* `windows-1256` - windows-1256\n* `iso-8859-4` - iso-8859-4\n* `windows-1257` - windows-1257\n* `iso-8859-14` - iso-8859-14\n* `iso-8859-2` - iso-8859-2\n* `windows-1250` - windows-1250\n* `gbk` - gbk\n* `gb18030` - gb18030\n* `big5` - big5\n* `koi8-r` - koi8-r\n* `koi8-u` - koi8-u\n* `iso-8859-5` - iso-8859-5\n* `windows-1251` - windows-1251\n* `x-mac-cyrillic` - mac-cyrillic\n* `iso-8859-7` - iso-8859-7\n* `windows-1253` - windows-1253\n* `iso-8859-8` - iso-8859-8\n* `windows-1255` - windows-1255\n* `euc-jp` - euc-jp\n* `iso-2022-jp` - iso-2022-jp\n* `shift-jis` - shift-jis\n* `euc-kr` - euc-kr\n* `macintosh` - macintosh\n* `iso-8859-10` - iso-8859-10\n* `iso-8859-16` - iso-8859-16\n* `windows-874` - cp874\n* `windows-1254` - windows-1254\n* `windows-1258` - windows-1258\n* `iso-8859-1` - iso-8859-1\n* `windows-1252` - windows-1252\n* `iso-8859-3` - iso-8859-3", "x-ref": "#/components/schemas/ExportCharsetEnum" }], "default": "utf-8", "description": "The character set to use when creating the export file.\n\n* `utf-8` - utf-8\n* `iso-8859-6` - iso-8859-6\n* `windows-1256` - windows-1256\n* `iso-8859-4` - iso-8859-4\n* `windows-1257` - windows-1257\n* `iso-8859-14` - iso-8859-14\n* `iso-8859-2` - iso-8859-2\n* `windows-1250` - windows-1250\n* `gbk` - gbk\n* `gb18030` - gb18030\n* `big5` - big5\n* `koi8-r` - koi8-r\n* `koi8-u` - koi8-u\n* `iso-8859-5` - iso-8859-5\n* `windows-1251` - windows-1251\n* `x-mac-cyrillic` - mac-cyrillic\n* `iso-8859-7` - iso-8859-7\n* `windows-1253` - windows-1253\n* `iso-8859-8` - iso-8859-8\n* `windows-1255` - windows-1255\n* `euc-jp` - euc-jp\n* `iso-2022-jp` - iso-2022-jp\n* `shift-jis` - shift-jis\n* `euc-kr` - euc-kr\n* `macintosh` - macintosh\n* `iso-8859-10` - iso-8859-10\n* `iso-8859-16` - iso-8859-16\n* `windows-874` - cp874\n* `windows-1254` - windows-1254\n* `windows-1258` - windows-1258\n* `iso-8859-1` - iso-8859-1\n* `windows-1252` - windows-1252\n* `iso-8859-3` - iso-8859-3", "key$": "export_charset" }, "csv_column_separator": { "allOf": [{ "enum": [",", ";", "|", "tab", "record_separator", "unit_separator"], "type": "string", "description": "* `,` - ,\n* `;` - ;\n* `|` - |\n* `tab` - \t\n* `record_separator` - \u001e\n* `unit_separator` - \u001f", "x-ref": "#/components/schemas/CsvColumnSeparatorEnum" }], "default": ",", "description": "The value used to separate columns in the resulting csv file.\n\n* `,` - ,\n* `;` - ;\n* `|` - |\n* `tab` - \t\n* `record_separator` - \u001e\n* `unit_separator` - \u001f", "key$": "csv_column_separator" }, "csv_first_row_header": { "type": "boolean", "default": true, "description": "Whether or not to generate a header row at the top of the csv file.", "key$": "csv_first_row_header" }, "filter_scan_id": { "type": "integer", "minimum": 0, "description": "Optional: Filter results by scan ID.", "key$": "filter_scan_id" } }, "required": ["url"], "x-ref": "#/components/schemas/SingleDataScanResultExportJobRequest", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "description": "When mixed in to a model serializer for an ExportJob this will add an url field\nwith the actual usable url of the export job's file (if it has one).", "properties": { "url": { "type": "string", "format": "uri", "readOnly": true, "key$": "url" }, "export_charset": { "allOf": [{ "enum": ["utf-8", "iso-8859-6", "windows-1256", "iso-8859-4", "windows-1257", "iso-8859-14", "iso-8859-2", "windows-1250", "gbk", "gb18030", "big5", "koi8-r", "koi8-u", "iso-8859-5", "windows-1251", "x-mac-cyrillic", "iso-8859-7", "windows-1253", "iso-8859-8", "windows-1255", "euc-jp", "iso-2022-jp", "shift-jis", "euc-kr", "macintosh", "iso-8859-10", "iso-8859-16", "windows-874", "windows-1254", "windows-1258", "iso-8859-1", "windows-1252", "iso-8859-3"], "type": "string", "description": "* `utf-8` - utf-8\n* `iso-8859-6` - iso-8859-6\n* `windows-1256` - windows-1256\n* `iso-8859-4` - iso-8859-4\n* `windows-1257` - windows-1257\n* `iso-8859-14` - iso-8859-14\n* `iso-8859-2` - iso-8859-2\n* `windows-1250` - windows-1250\n* `gbk` - gbk\n* `gb18030` - gb18030\n* `big5` - big5\n* `koi8-r` - koi8-r\n* `koi8-u` - koi8-u\n* `iso-8859-5` - iso-8859-5\n* `windows-1251` - windows-1251\n* `x-mac-cyrillic` - mac-cyrillic\n* `iso-8859-7` - iso-8859-7\n* `windows-1253` - windows-1253\n* `iso-8859-8` - iso-8859-8\n* `windows-1255` - windows-1255\n* `euc-jp` - euc-jp\n* `iso-2022-jp` - iso-2022-jp\n* `shift-jis` - shift-jis\n* `euc-kr` - euc-kr\n* `macintosh` - macintosh\n* `iso-8859-10` - iso-8859-10\n* `iso-8859-16` - iso-8859-16\n* `windows-874` - cp874\n* `windows-1254` - windows-1254\n* `windows-1258` - windows-1258\n* `iso-8859-1` - iso-8859-1\n* `windows-1252` - windows-1252\n* `iso-8859-3` - iso-8859-3", "x-ref": "#/components/schemas/ExportCharsetEnum" }], "default": "utf-8", "description": "The character set to use when creating the export file.\n\n* `utf-8` - utf-8\n* `iso-8859-6` - iso-8859-6\n* `windows-1256` - windows-1256\n* `iso-8859-4` - iso-8859-4\n* `windows-1257` - windows-1257\n* `iso-8859-14` - iso-8859-14\n* `iso-8859-2` - iso-8859-2\n* `windows-1250` - windows-1250\n* `gbk` - gbk\n* `gb18030` - gb18030\n* `big5` - big5\n* `koi8-r` - koi8-r\n* `koi8-u` - koi8-u\n* `iso-8859-5` - iso-8859-5\n* `windows-1251` - windows-1251\n* `x-mac-cyrillic` - mac-cyrillic\n* `iso-8859-7` - iso-8859-7\n* `windows-1253` - windows-1253\n* `iso-8859-8` - iso-8859-8\n* `windows-1255` - windows-1255\n* `euc-jp` - euc-jp\n* `iso-2022-jp` - iso-2022-jp\n* `shift-jis` - shift-jis\n* `euc-kr` - euc-kr\n* `macintosh` - macintosh\n* `iso-8859-10` - iso-8859-10\n* `iso-8859-16` - iso-8859-16\n* `windows-874` - cp874\n* `windows-1254` - windows-1254\n* `windows-1258` - windows-1258\n* `iso-8859-1` - iso-8859-1\n* `windows-1252` - windows-1252\n* `iso-8859-3` - iso-8859-3", "key$": "export_charset" }, "csv_column_separator": { "allOf": [{ "enum": [",", ";", "|", "tab", "record_separator", "unit_separator"], "type": "string", "description": "* `,` - ,\n* `;` - ;\n* `|` - |\n* `tab` - \t\n* `record_separator` - \u001e\n* `unit_separator` - \u001f", "x-ref": "#/components/schemas/CsvColumnSeparatorEnum" }], "default": ",", "description": "The value used to separate columns in the resulting csv file.\n\n* `,` - ,\n* `;` - ;\n* `|` - |\n* `tab` - \t\n* `record_separator` - \u001e\n* `unit_separator` - \u001f", "key$": "csv_column_separator" }, "csv_first_row_header": { "type": "boolean", "default": true, "description": "Whether or not to generate a header row at the top of the csv file.", "key$": "csv_first_row_header" }, "filter_scan_id": { "type": "integer", "minimum": 0, "description": "Optional: Filter results by scan ID.", "key$": "filter_scan_id" } }, "required": ["url"], "x-ref": "#/components/schemas/SingleDataScanResultExportJobRequest" } }, "multipart/form-data": { "schema": { "type": "object", "description": "When mixed in to a model serializer for an ExportJob this will add an url field\nwith the actual usable url of the export job's file (if it has one).", "properties": { "url": { "type": "string", "format": "uri", "readOnly": true, "key$": "url" }, "export_charset": { "allOf": [{ "enum": ["utf-8", "iso-8859-6", "windows-1256", "iso-8859-4", "windows-1257", "iso-8859-14", "iso-8859-2", "windows-1250", "gbk", "gb18030", "big5", "koi8-r", "koi8-u", "iso-8859-5", "windows-1251", "x-mac-cyrillic", "iso-8859-7", "windows-1253", "iso-8859-8", "windows-1255", "euc-jp", "iso-2022-jp", "shift-jis", "euc-kr", "macintosh", "iso-8859-10", "iso-8859-16", "windows-874", "windows-1254", "windows-1258", "iso-8859-1", "windows-1252", "iso-8859-3"], "type": "string", "description": "* `utf-8` - utf-8\n* `iso-8859-6` - iso-8859-6\n* `windows-1256` - windows-1256\n* `iso-8859-4` - iso-8859-4\n* `windows-1257` - windows-1257\n* `iso-8859-14` - iso-8859-14\n* `iso-8859-2` - iso-8859-2\n* `windows-1250` - windows-1250\n* `gbk` - gbk\n* `gb18030` - gb18030\n* `big5` - big5\n* `koi8-r` - koi8-r\n* `koi8-u` - koi8-u\n* `iso-8859-5` - iso-8859-5\n* `windows-1251` - windows-1251\n* `x-mac-cyrillic` - mac-cyrillic\n* `iso-8859-7` - iso-8859-7\n* `windows-1253` - windows-1253\n* `iso-8859-8` - iso-8859-8\n* `windows-1255` - windows-1255\n* `euc-jp` - euc-jp\n* `iso-2022-jp` - iso-2022-jp\n* `shift-jis` - shift-jis\n* `euc-kr` - euc-kr\n* `macintosh` - macintosh\n* `iso-8859-10` - iso-8859-10\n* `iso-8859-16` - iso-8859-16\n* `windows-874` - cp874\n* `windows-1254` - windows-1254\n* `windows-1258` - windows-1258\n* `iso-8859-1` - iso-8859-1\n* `windows-1252` - windows-1252\n* `iso-8859-3` - iso-8859-3", "x-ref": "#/components/schemas/ExportCharsetEnum" }], "default": "utf-8", "description": "The character set to use when creating the export file.\n\n* `utf-8` - utf-8\n* `iso-8859-6` - iso-8859-6\n* `windows-1256` - windows-1256\n* `iso-8859-4` - iso-8859-4\n* `windows-1257` - windows-1257\n* `iso-8859-14` - iso-8859-14\n* `iso-8859-2` - iso-8859-2\n* `windows-1250` - windows-1250\n* `gbk` - gbk\n* `gb18030` - gb18030\n* `big5` - big5\n* `koi8-r` - koi8-r\n* `koi8-u` - koi8-u\n* `iso-8859-5` - iso-8859-5\n* `windows-1251` - windows-1251\n* `x-mac-cyrillic` - mac-cyrillic\n* `iso-8859-7` - iso-8859-7\n* `windows-1253` - windows-1253\n* `iso-8859-8` - iso-8859-8\n* `windows-1255` - windows-1255\n* `euc-jp` - euc-jp\n* `iso-2022-jp` - iso-2022-jp\n* `shift-jis` - shift-jis\n* `euc-kr` - euc-kr\n* `macintosh` - macintosh\n* `iso-8859-10` - iso-8859-10\n* `iso-8859-16` - iso-8859-16\n* `windows-874` - cp874\n* `windows-1254` - windows-1254\n* `windows-1258` - windows-1258\n* `iso-8859-1` - iso-8859-1\n* `windows-1252` - windows-1252\n* `iso-8859-3` - iso-8859-3", "key$": "export_charset" }, "csv_column_separator": { "allOf": [{ "enum": [",", ";", "|", "tab", "record_separator", "unit_separator"], "type": "string", "description": "* `,` - ,\n* `;` - ;\n* `|` - |\n* `tab` - \t\n* `record_separator` - \u001e\n* `unit_separator` - \u001f", "x-ref": "#/components/schemas/CsvColumnSeparatorEnum" }], "default": ",", "description": "The value used to separate columns in the resulting csv file.\n\n* `,` - ,\n* `;` - ;\n* `|` - |\n* `tab` - \t\n* `record_separator` - \u001e\n* `unit_separator` - \u001f", "key$": "csv_column_separator" }, "csv_first_row_header": { "type": "boolean", "default": true, "description": "Whether or not to generate a header row at the top of the csv file.", "key$": "csv_first_row_header" }, "filter_scan_id": { "type": "integer", "minimum": 0, "description": "Optional: Filter results by scan ID.", "key$": "filter_scan_id" } }, "required": ["url"], "x-ref": "#/components/schemas/SingleDataScanResultExportJobRequest" } } } }, "parameters": [] }, "GET /api/admin/data-scanner/results/": { "protocol": "http", "parameters": [{ "in": "query", "name": "ids", "schema": { "type": "string" }, "description": "A comma-separated list of data scan results IDs to filter by. When provided, only data scan results with those IDs are returned.", "index$": 0 }, { "in": "query", "name": "page", "schema": { "type": "integer" }, "description": "Defines which page should be returned.", "index$": 1 }, { "in": "query", "name": "search", "schema": { "type": "string" }, "description": "If provided only data scan results with matched_value that match the query will be returned.", "index$": 2 }, { "in": "query", "name": "size", "schema": { "type": "integer" }, "description": "Defines how many data scan results should be returned per page.", "index$": 3 }, { "in": "query", "name": "sorts", "schema": { "type": "string" }, "description": "A comma separated string of attributes to sort by, each attribute must be prefixed with `+` for a descending sort or a `-` for an ascending sort. The accepted attribute names are: `first_identified_on, last_identified_on`. For example `sorts=-first_identified_on,-last_identified_on` will sort the data scan results first by descending first_identified_on and then ascending last_identified_on. A sortparameter with multiple instances of the same sort attribute will respond with the ERROR_INVALID_SORT_ATTRIBUTE error.", "index$": 4 }] }, "DELETE /api/admin/data-scanner/results/{result_id}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "result_id", "schema": { "type": "string", "pattern": "^[0-9]+$" }, "required": true, "index$": 0 }] }, "DELETE /api/admin/data-scanner/scans/{scan_id}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "scan_id", "schema": { "type": "string", "pattern": "^[0-9]+$" }, "required": true, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const admin_data_scanner_ref01_ent = client.AdminDataScanner();
        let admin_data_scanner_ref01_data = setup.data.new.admin_data_scanner['admin_data_scanner_ref01'];
        admin_data_scanner_ref01_data = (await admin_data_scanner_ref01_ent.create(admin_data_scanner_ref01_data)).data();
        (0, node_assert_1.default)(null != admin_data_scanner_ref01_data.id);
        // LIST
        const admin_data_scanner_ref01_match = {};
        const admin_data_scanner_ref01_list = (await admin_data_scanner_ref01_ent.list(admin_data_scanner_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(admin_data_scanner_ref01_list, { id: admin_data_scanner_ref01_data.id })));
        // REMOVE
        const admin_data_scanner_ref01_match_rm0 = { id: admin_data_scanner_ref01_data.id };
        await admin_data_scanner_ref01_ent.remove(admin_data_scanner_ref01_match_rm0);
        // LIST
        const admin_data_scanner_ref01_match_rt0 = {};
        const admin_data_scanner_ref01_list_rt0 = (await admin_data_scanner_ref01_ent.list(admin_data_scanner_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(admin_data_scanner_ref01_list_rt0, { id: admin_data_scanner_ref01_data.id })));
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/admin_data_scanner/AdminDataScannerTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['admin_data_scanner01', 'admin_data_scanner02', 'admin_data_scanner03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_ADMIN_DATA_SCANNER_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_ADMIN_DATA_SCANNER_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_ADMIN_DATA_SCANNER_ENTID'];
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
//# sourceMappingURL=AdminDataScannerEntity.test.js.map