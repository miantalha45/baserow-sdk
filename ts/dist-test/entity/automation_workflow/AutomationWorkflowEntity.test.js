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
(0, node_test_1.describe)('AutomationWorkflowEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.AutomationWorkflow();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.AutomationWorkflow().load({ "id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['create', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'automation_workflow.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "allow_test_run": { "a": true, "h": "Allow Test Run", "n": "allow_test_run", "r": false, "sh": "If provided, enables the workflow to be triggerable for the next 5 minutes.", "t": "`$BOOLEAN`", "key$": "allow_test_run", "index$": 0 }, "allow_test_run_until": { "a": true, "fo": "date-time", "h": "Allow Test Run Until", "n": "allow_test_run_until", "r": false, "t": "`$BOOLEAN`", "key$": "allow_test_run_until", "index$": 1 }, "automation_id": { "a": true, "h": "Automation Id", "n": "automation_id", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "automation_id", "index$": 2 }, "created_on": { "a": true, "fo": "date-time", "h": "Created On", "n": "created_on", "r": true, "ro": true, "t": "`$STRING`", "key$": "created_on", "index$": 3 }, "duplicated_automation_workflow": { "a": true, "h": "Duplicated Automation Workflow", "n": "duplicated_automation_workflow", "r": true, "ro": true, "t": "`$ANY`", "key$": "duplicated_automation_workflow", "index$": 4 }, "error_code": { "a": true, "h": "Error Code", "n": "error_code", "r": false, "sh": "A machine readable error code indicating why the job failed.", "t": "`$STRING`", "key$": "error_code", "index$": 5 }, "graph": { "a": true, "h": "Graph", "n": "graph", "r": false, "sh": "A JSON serialized graph containing the points and edges.", "t": "`$ANY`", "key$": "graph", "index$": 6 }, "human_readable_error": { "a": true, "h": "Human Readable Error", "n": "human_readable_error", "r": false, "sh": "A human readable error message indicating what went wrong.", "t": "`$STRING`", "key$": "human_readable_error", "index$": 7 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "id", "index$": 8 }, "immediate_dispatch": { "a": true, "h": "Immediate Dispatch", "n": "immediate_dispatch", "r": true, "ro": true, "t": "`$BOOLEAN`", "key$": "immediate_dispatch", "index$": 9 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "t": "`$STRING`", "key$": "name", "index$": 10 }, "notification_recipient_ids": { "a": true, "h": "Notification Recipient Ids", "n": "notification_recipient_ids", "op": { "update": { "req": false, "type": "`$ARRAY`" } }, "r": true, "ro": true, "sh": "The user IDs of the workspace members that should receive notifications related to this workflow.", "t": "`$ARRAY`", "key$": "notification_recipient_ids", "index$": 11 }, "order": { "a": true, "h": "Order", "n": "order", "r": true, "sh": "Lowest first.", "t": "`$INTEGER`", "key$": "order", "index$": 12 }, "original_automation_workflow": { "a": true, "h": "Original Automation Workflow", "n": "original_automation_workflow", "r": true, "ro": true, "t": "`$ANY`", "key$": "original_automation_workflow", "index$": 13 }, "progress_percentage": { "a": true, "h": "Progress Percentage", "n": "progress_percentage", "r": true, "sh": "A percentage indicating how far along the job is.", "t": "`$INTEGER`", "key$": "progress_percentage", "index$": 14 }, "published_on": { "a": true, "h": "Published On", "n": "published_on", "r": true, "ro": true, "t": "`$STRING`", "key$": "published_on", "index$": 15 }, "simulate_until_node_id": { "a": true, "h": "Simulate Until Node Id", "n": "simulate_until_node_id", "r": true, "ro": true, "sh": "When set, upon the next workflow run, simulates the dispatch of the workflow until this node and updates the sample_data of the node's service.", "t": "`$INTEGER`", "key$": "simulate_until_node_id", "index$": 16 }, "state": { "a": true, "h": "State", "n": "state", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "ro": true, "sh": "Indicates the state of the import job.", "t": "`$STRING`", "key$": "state", "index$": 17 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "ro": true, "sh": "The type of the job.", "t": "`$STRING`", "key$": "type", "index$": 18 }, "updated_on": { "a": true, "fo": "date-time", "h": "Updated On", "n": "updated_on", "r": true, "ro": true, "t": "`$STRING`", "key$": "updated_on", "index$": 19 }, "workflow_ids": { "a": true, "h": "Workflow Ids", "n": "workflow_ids", "r": true, "sh": "The ids of the workflows in the order they are supposed to be set in.", "t": "`$ARRAY`", "key$": "workflow_ids", "index$": 20 } }, "id": { "field": "id", "name": "id" }, "name": "automation_workflow", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["workflow_ids"], "co": { "id": "POST /api/automation/{automation_id}/workflows/order/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "automation_id", "or": "automation_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/automation/{automation_id}/workflows/order/", "q": { "exist": ["automation_id"] }, "r": {}, "rb": { "alternatives": [{ "fields": [{ "list": true, "name": "workflow_ids" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "list": true, "name": "workflow_ids" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "automation" }, { "var": "automation_id" }, { "lit": "workflows" }, { "lit": "order" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "bf": ["name"], "co": { "id": "POST /api/automation/{automation_id}/workflows/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "automation_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/automation/{automation_id}/workflows/", "q": { "exist": ["id"] }, "r": { "param": { "automation_id": "id" } }, "rb": { "alternatives": [{ "fields": [{ "name": "name" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "name" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "automation" }, { "var": "id" }, { "lit": "workflows" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /api/automation/workflows/{workflow_id}/duplicate/async/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "workflow_id", "or": "workflow_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/automation/workflows/{workflow_id}/duplicate/async/", "q": { "exist": ["workflow_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "automation" }, { "lit": "workflows" }, { "var": "workflow_id" }, { "lit": "duplicate" }, { "lit": "async" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "POST /api/automation/workflows/{workflow_id}/publish/async/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "workflow_id", "or": "workflow_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/automation/workflows/{workflow_id}/publish/async/", "q": { "exist": ["workflow_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "automation" }, { "lit": "workflows" }, { "var": "workflow_id" }, { "lit": "publish" }, { "lit": "async" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "co": { "id": "POST /api/automation/workflows/{workflow_id}/test/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "workflow_id", "or": "workflow_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/automation/workflows/{workflow_id}/test/", "q": { "exist": ["workflow_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "automation" }, { "lit": "workflows" }, { "var": "workflow_id" }, { "lit": "test" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/automation/workflows/{workflow_id}/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "workflow_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/automation/workflows/{workflow_id}/", "q": { "exist": ["id"] }, "r": { "param": { "workflow_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "automation" }, { "lit": "workflows" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/automation/workflows/{workflow_id}/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "workflow_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/automation/workflows/{workflow_id}/", "q": { "exist": ["id"] }, "r": { "param": { "workflow_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "automation" }, { "lit": "workflows" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["allow_test_run", "name", "notification_recipient_ids", "state"], "co": { "id": "PATCH /api/automation/workflows/{workflow_id}/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "workflow_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/api/automation/workflows/{workflow_id}/", "q": { "exist": ["id"] }, "r": { "param": { "workflow_id": "id" } }, "rb": { "alternatives": [{ "fields": [{ "name": "allow_test_run" }, { "name": "name" }, { "list": true, "name": "notification_recipient_ids" }, { "name": "state" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "allow_test_run" }, { "name": "name" }, { "list": true, "name": "notification_recipient_ids" }, { "name": "state" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "automation" }, { "lit": "workflows" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "automation_workflow", "name__orig": "automation_workflow", "Name": "AutomationWorkflow", "name_": "automation_workflow", "name-": "automation-workflow", "NAME": "AUTOMATION_WORKFLOW", "index$": 28 }, { "active": true, "entity": "automation_workflow", "key$": "BasicAutomationWorkflowFlow", "kind": "basic", "name": "BasicAutomationWorkflowFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "automation_workflow_ref01" }, "m": { "workflow_id": "workflow01" }, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": { "ref": "automation_workflow_ref01", "srcdatavar": "automation_workflow_ref01_data", "suffix": "_up0", "textfield": "error_code" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-automation_workflow_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "automation_workflow_ref01", "srcdatavar": "automation_workflow_ref01_data", "suffix": "_dt0" }, "m": { "id": "automation_workflow01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-automation_workflow_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "automation_workflow_ref01", "suffix": "_rm0" }, "m": { "id": "automation_workflow01" }, "o": "remove", "s": [], "v": [] }] }, 'AutomationWorkflow', { "POST /api/automation/{automation_id}/workflows/order/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "workflow_ids": { "type": "array", "items": { "type": "integer" }, "description": "The ids of the workflows in the order they are supposed to be set in.", "key$": "workflow_ids" } }, "required": ["workflow_ids"], "x-ref": "#/components/schemas/OrderAutomationWorkflows", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "workflow_ids": { "type": "array", "items": { "type": "integer" }, "description": "The ids of the workflows in the order they are supposed to be set in.", "key$": "workflow_ids" } }, "required": ["workflow_ids"], "x-ref": "#/components/schemas/OrderAutomationWorkflows" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "workflow_ids": { "type": "array", "items": { "type": "integer" }, "description": "The ids of the workflows in the order they are supposed to be set in.", "key$": "workflow_ids" } }, "required": ["workflow_ids"], "x-ref": "#/components/schemas/OrderAutomationWorkflows" } } }, "required": true }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "automation_id", "schema": { "type": "integer" }, "description": "The automation the workflow belongs to.", "required": true, "index$": 1 }] }, "POST /api/automation/{automation_id}/workflows/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 255, "key$": "name" } }, "required": ["name"], "x-ref": "#/components/schemas/CreateAutomationWorkflow", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 255, "key$": "name" } }, "required": ["name"], "x-ref": "#/components/schemas/CreateAutomationWorkflow" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 255, "key$": "name" } }, "required": ["name"], "x-ref": "#/components/schemas/CreateAutomationWorkflow" } } }, "required": true }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "automation_id", "schema": { "type": "integer" }, "description": "Creates a new Automation Workflow.", "required": true, "index$": 1 }] }, "POST /api/automation/workflows/{workflow_id}/duplicate/async/": { "protocol": "http", "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "workflow_id", "schema": { "type": "integer" }, "description": "The workflow to duplicate.", "required": true, "index$": 1 }] }, "POST /api/automation/workflows/{workflow_id}/publish/async/": { "protocol": "http", "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "workflow_id", "schema": { "type": "integer" }, "description": "The workflow id the user wants to publish.", "required": true, "index$": 1 }] }, "POST /api/automation/workflows/{workflow_id}/test/": { "protocol": "http", "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "workflow_id", "schema": { "type": "integer" }, "description": "The workflow id the user wants to test.", "required": true, "index$": 1 }] }, "GET /api/automation/workflows/{workflow_id}/": { "protocol": "http", "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "workflow_id", "schema": { "type": "integer" }, "description": "The id of the workflow.", "required": true, "index$": 1 }] }, "DELETE /api/automation/workflows/{workflow_id}/": { "protocol": "http", "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "workflow_id", "schema": { "type": "integer" }, "description": "The id of the workflow.", "required": true, "index$": 1 }] }, "PATCH /api/automation/workflows/{workflow_id}/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 255, "key$": "name" }, "allow_test_run": { "type": "boolean", "description": "If provided, enables the workflow to be triggerable for the next 5 minutes.", "key$": "allow_test_run" }, "state": { "enum": ["draft", "live", "paused", "disabled", "test_clone"], "type": "string", "description": "* `draft` - Draft\n* `live` - Live\n* `paused` - Paused\n* `disabled` - Disabled\n* `test_clone` - Test Clone", "x-ref": "#/components/schemas/UpdateAutomationWorkflowStateEnum", "key$": "state" }, "notification_recipient_ids": { "type": "array", "items": { "type": "integer" }, "description": "The user IDs of the workspace members that should receive notifications related to this workflow.", "key$": "notification_recipient_ids" } }, "x-ref": "#/components/schemas/PatchedUpdateAutomationWorkflow", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 255, "key$": "name" }, "allow_test_run": { "type": "boolean", "description": "If provided, enables the workflow to be triggerable for the next 5 minutes.", "key$": "allow_test_run" }, "state": { "enum": ["draft", "live", "paused", "disabled", "test_clone"], "type": "string", "description": "* `draft` - Draft\n* `live` - Live\n* `paused` - Paused\n* `disabled` - Disabled\n* `test_clone` - Test Clone", "x-ref": "#/components/schemas/UpdateAutomationWorkflowStateEnum", "key$": "state" }, "notification_recipient_ids": { "type": "array", "items": { "type": "integer" }, "description": "The user IDs of the workspace members that should receive notifications related to this workflow.", "key$": "notification_recipient_ids" } }, "x-ref": "#/components/schemas/PatchedUpdateAutomationWorkflow" } }, "multipart/form-data": { "schema": { "type": "object", "properties": { "name": { "type": "string", "maxLength": 255, "key$": "name" }, "allow_test_run": { "type": "boolean", "description": "If provided, enables the workflow to be triggerable for the next 5 minutes.", "key$": "allow_test_run" }, "state": { "enum": ["draft", "live", "paused", "disabled", "test_clone"], "type": "string", "description": "* `draft` - Draft\n* `live` - Live\n* `paused` - Paused\n* `disabled` - Disabled\n* `test_clone` - Test Clone", "x-ref": "#/components/schemas/UpdateAutomationWorkflowStateEnum", "key$": "state" }, "notification_recipient_ids": { "type": "array", "items": { "type": "integer" }, "description": "The user IDs of the workspace members that should receive notifications related to this workflow.", "key$": "notification_recipient_ids" } }, "x-ref": "#/components/schemas/PatchedUpdateAutomationWorkflow" } } } }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "workflow_id", "schema": { "type": "integer" }, "description": "The id of the workflow.", "required": true, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const automation_workflow_ref01_ent = client.AutomationWorkflow();
        let automation_workflow_ref01_data = setup.data.new.automation_workflow['automation_workflow_ref01'];
        automation_workflow_ref01_data['workflow_id'] = setup.idmap['workflow01'];
        automation_workflow_ref01_data = (await automation_workflow_ref01_ent.create(automation_workflow_ref01_data)).data();
        (0, node_assert_1.default)(null != automation_workflow_ref01_data.id);
        // UPDATE
        const automation_workflow_ref01_data_up0 = {};
        automation_workflow_ref01_data_up0.id = automation_workflow_ref01_data.id;
        const automation_workflow_ref01_markdef_up0 = { name: 'error_code', value: 'Mark01-automation_workflow_ref01_' + setup.now };
        automation_workflow_ref01_data_up0[automation_workflow_ref01_markdef_up0.name] = automation_workflow_ref01_markdef_up0.value;
        const automation_workflow_ref01_resdata_up0 = (await automation_workflow_ref01_ent.update(automation_workflow_ref01_data_up0)).data();
        (0, node_assert_1.default)(automation_workflow_ref01_resdata_up0.id === automation_workflow_ref01_data_up0.id);
        (0, node_assert_1.default)(automation_workflow_ref01_resdata_up0[automation_workflow_ref01_markdef_up0.name] === automation_workflow_ref01_markdef_up0.value);
        // LOAD
        const automation_workflow_ref01_match_dt0 = {};
        automation_workflow_ref01_match_dt0.id = automation_workflow_ref01_data.id;
        const automation_workflow_ref01_data_dt0 = (await automation_workflow_ref01_ent.load(automation_workflow_ref01_match_dt0)).data();
        (0, node_assert_1.default)(automation_workflow_ref01_data_dt0.id === automation_workflow_ref01_data.id);
        // REMOVE
        const automation_workflow_ref01_match_rm0 = { id: automation_workflow_ref01_data.id };
        await automation_workflow_ref01_ent.remove(automation_workflow_ref01_match_rm0);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/automation_workflow/AutomationWorkflowTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['automation_workflow01', 'automation_workflow02', 'automation_workflow03', 'workflow01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_AUTOMATION_WORKFLOW_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_AUTOMATION_WORKFLOW_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_AUTOMATION_WORKFLOW_ENTID'];
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
//# sourceMappingURL=AutomationWorkflowEntity.test.js.map