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
(0, node_test_1.describe)('TeamEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.Team();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Team().load({ "id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['create', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'team.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_on": { "a": true, "fo": "date-time", "h": "Created On", "n": "created_on", "r": true, "ro": true, "t": "`$STRING`", "key$": "created_on", "index$": 0 }, "default_role": { "a": true, "h": "Default Role", "n": "default_role", "r": false, "sh": "The uid of the role this team has in its workspace.", "t": "`$STRING`", "key$": "default_role", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "ro": true, "t": "`$INTEGER`", "key$": "id", "index$": 2 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "A human friendly name for this team.", "t": "`$STRING`", "key$": "name", "index$": 3 }, "subject_count": { "a": true, "h": "Subject Count", "n": "subject_count", "r": true, "sh": "The amount of subjects (e.g.", "t": "`$INTEGER`", "key$": "subject_count", "index$": 4 }, "subject_sample": { "a": true, "h": "Subject Sample", "n": "subject_sample", "r": false, "sh": "A sample, by default 10, of the most recent subjects to join this team.", "t": "`$ARRAY`", "key$": "subject_sample", "index$": 5 }, "subjects": { "a": true, "h": "Subjects", "n": "subjects", "r": false, "sh": "An array of subject ID/type objects to be used during team create and update.", "t": "`$ARRAY`", "key$": "subjects", "index$": 6 }, "updated_on": { "a": true, "fo": "date-time", "h": "Updated On", "n": "updated_on", "r": true, "ro": true, "t": "`$STRING`", "key$": "updated_on", "index$": 7 }, "workspace": { "a": true, "h": "Workspace", "n": "workspace", "r": true, "sh": "The workspace that this team belongs to.", "t": "`$INTEGER`", "key$": "workspace", "index$": 8 } }, "id": { "field": "id", "name": "id" }, "name": "team", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["default_role", "name", "subjects"], "co": { "id": "POST /api/teams/workspace/{workspace_id}/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "workspace_id", "or": "workspace_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/teams/workspace/{workspace_id}/", "q": { "exist": ["workspace_id"] }, "r": {}, "rb": { "alternatives": [{ "fields": [{ "name": "default_role" }, { "name": "name" }, { "list": true, "name": "subjects" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "default_role" }, { "name": "name" }, { "list": true, "name": "subjects" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "teams" }, { "lit": "workspace" }, { "var": "workspace_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/teams/{team_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "team_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/teams/{team_id}/", "q": { "exist": ["id"] }, "r": { "param": { "team_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "teams" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/teams/workspace/{workspace_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "workspace_id", "or": "workspace_id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "search", "or": "search", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "sort", "or": "sorts", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/teams/workspace/{workspace_id}/", "q": { "exist": ["workspace_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "teams" }, { "lit": "workspace" }, { "var": "workspace_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/teams/{team_id}/subjects/{subject_id}/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "team_id", "r": true, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "param", "n": "subject_id", "or": "subject_id", "r": true, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/api/teams/{team_id}/subjects/{subject_id}/", "q": { "exist": ["id", "subject_id"] }, "r": { "param": { "team_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "teams" }, { "var": "id" }, { "lit": "subjects" }, { "var": "subject_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /api/teams/{team_id}/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "team_id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/api/teams/{team_id}/", "q": { "exist": ["id"] }, "r": { "param": { "team_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "teams" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["default_role", "name", "subjects"], "co": { "id": "PUT /api/teams/{team_id}/", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "client_session_id", "or": "ClientSessionId", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "k": "param", "n": "id", "or": "team_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/teams/{team_id}/", "q": { "exist": ["id"] }, "r": { "param": { "team_id": "id" } }, "rb": { "alternatives": [{ "fields": [{ "name": "default_role" }, { "name": "name" }, { "list": true, "name": "subjects" }], "kind": "multipart", "media": "multipart/form-data" }, { "fields": [{ "name": "default_role" }, { "name": "name" }, { "list": true, "name": "subjects" }], "kind": "form", "media": "application/x-www-form-urlencoded" }], "kind": "json", "media": "application/json" }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "teams" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.workspace"]] }, "key$": "team", "name__orig": "team", "Name": "Team", "name_": "team", "name-": "team", "NAME": "TEAM", "index$": 144 }, { "active": true, "entity": "team", "key$": "BasicTeamFlow", "kind": "basic", "name": "BasicTeamFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "team_ref01" }, "m": { "workspace_id": "workspace01" }, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": { "ref": "team_ref01", "srcdatavar": "team_ref01_data", "suffix": "_up0", "textfield": "default_role" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-team_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "team_ref01", "srcdatavar": "team_ref01_data", "suffix": "_dt0" }, "m": { "id": "team01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-team_ref01" } }] }, { "a": true, "d": {}, "i": { "ref": "team_ref01", "suffix": "_rm0" }, "m": { "id": "team01" }, "o": "remove", "s": [], "v": [] }] }, 'Team', { "POST /api/teams/workspace/{workspace_id}/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "description": "Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.", "properties": { "name": { "type": "string", "description": "A human friendly name for this team.", "maxLength": 160, "key$": "name" }, "default_role": { "type": "string", "nullable": true, "description": "The uid of the role you want to assign to the team in the given workspace. You can omit this property if you want to remove the role.", "key$": "default_role" }, "subjects": { "type": "array", "items": { "type": "object", "description": "Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.", "properties": { "id": { "type": "integer", "readOnly": true, "key$": "id" }, "subject_id": { "type": "integer", "description": "The subject's unique identifier.", "key$": "subject_id" }, "subject_user_email": { "type": "string", "format": "email", "description": "The user subject's email address.", "key$": "subject_user_email" }, "subject_type": { "allOf": [], "description": "The type of subject that is being invited.\n\n* `auth.User` - auth.User\n* `core.Agent` - core.Agent", "key$": "subject_type" } }, "required": ["id", "subject_type"], "x-ref": "#/components/schemas/TeamSubject" }, "default": [], "description": "An array of subject ID/type objects to be used during team create and update.", "key$": "subjects" } }, "required": ["name"], "x-ref": "#/components/schemas/Team", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "description": "Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.", "properties": { "name": { "type": "string", "description": "A human friendly name for this team.", "maxLength": 160, "key$": "name" }, "default_role": { "type": "string", "nullable": true, "description": "The uid of the role you want to assign to the team in the given workspace. You can omit this property if you want to remove the role.", "key$": "default_role" }, "subjects": { "type": "array", "items": { "type": "object", "description": "Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.", "properties": { "id": { "type": "integer", "readOnly": true, "key$": "id" }, "subject_id": { "type": "integer", "description": "The subject's unique identifier.", "key$": "subject_id" }, "subject_user_email": { "type": "string", "format": "email", "description": "The user subject's email address.", "key$": "subject_user_email" }, "subject_type": { "allOf": [], "description": "The type of subject that is being invited.\n\n* `auth.User` - auth.User\n* `core.Agent` - core.Agent", "key$": "subject_type" } }, "required": ["id", "subject_type"], "x-ref": "#/components/schemas/TeamSubject" }, "default": [], "description": "An array of subject ID/type objects to be used during team create and update.", "key$": "subjects" } }, "required": ["name"], "x-ref": "#/components/schemas/Team" } }, "multipart/form-data": { "schema": { "type": "object", "description": "Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.", "properties": { "name": { "type": "string", "description": "A human friendly name for this team.", "maxLength": 160, "key$": "name" }, "default_role": { "type": "string", "nullable": true, "description": "The uid of the role you want to assign to the team in the given workspace. You can omit this property if you want to remove the role.", "key$": "default_role" }, "subjects": { "type": "array", "items": { "type": "object", "description": "Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.", "properties": { "id": { "type": "integer", "readOnly": true, "key$": "id" }, "subject_id": { "type": "integer", "description": "The subject's unique identifier.", "key$": "subject_id" }, "subject_user_email": { "type": "string", "format": "email", "description": "The user subject's email address.", "key$": "subject_user_email" }, "subject_type": { "allOf": [], "description": "The type of subject that is being invited.\n\n* `auth.User` - auth.User\n* `core.Agent` - core.Agent", "key$": "subject_type" } }, "required": ["id", "subject_type"], "x-ref": "#/components/schemas/TeamSubject" }, "default": [], "description": "An array of subject ID/type objects to be used during team create and update.", "key$": "subjects" } }, "required": ["name"], "x-ref": "#/components/schemas/Team" } } }, "required": true }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "workspace_id", "schema": { "type": "string", "pattern": "^[0-9]+$" }, "required": true, "index$": 1 }] }, "GET /api/teams/{team_id}/": { "protocol": "http", "parameters": [{ "in": "path", "name": "team_id", "schema": { "type": "integer" }, "description": "Returns the team related to the provided value.", "required": true, "index$": 0 }] }, "GET /api/teams/workspace/{workspace_id}/": { "protocol": "http", "parameters": [{ "in": "query", "name": "search", "schema": { "type": "string" }, "description": "Search for teams by their name.", "index$": 0 }, { "in": "query", "name": "sorts", "schema": { "type": "string" }, "description": "Sort teams by name or subjects.", "index$": 1 }, { "in": "path", "name": "workspace_id", "schema": { "type": "integer" }, "description": "Lists all teams in a given workspace.", "required": true, "index$": 2 }] }, "DELETE /api/teams/{team_id}/subjects/{subject_id}/": { "protocol": "http", "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "subject_id", "schema": { "type": "integer" }, "description": "The subject id to remove from the team.", "required": true, "index$": 1 }, { "in": "path", "name": "team_id", "schema": { "type": "integer" }, "description": "The team id which the subject will be removed from.", "required": true, "index$": 2 }] }, "DELETE /api/teams/{team_id}/": { "protocol": "http", "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "team_id", "schema": { "type": "integer" }, "description": "Deletes the team related to the provided value.", "required": true, "index$": 1 }] }, "PUT /api/teams/{team_id}/": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "description": "Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.", "properties": { "name": { "type": "string", "description": "A human friendly name for this team.", "maxLength": 160, "key$": "name" }, "default_role": { "type": "string", "nullable": true, "description": "The uid of the role you want to assign to the team in the given workspace. You can omit this property if you want to remove the role.", "key$": "default_role" }, "subjects": { "type": "array", "items": { "type": "object", "description": "Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.", "properties": { "id": { "type": "integer", "readOnly": true, "key$": "id" }, "subject_id": { "type": "integer", "description": "The subject's unique identifier.", "key$": "subject_id" }, "subject_user_email": { "type": "string", "format": "email", "description": "The user subject's email address.", "key$": "subject_user_email" }, "subject_type": { "allOf": [], "description": "The type of subject that is being invited.\n\n* `auth.User` - auth.User\n* `core.Agent` - core.Agent", "key$": "subject_type" } }, "required": ["id", "subject_type"], "x-ref": "#/components/schemas/TeamSubject" }, "default": [], "description": "An array of subject ID/type objects to be used during team create and update.", "key$": "subjects" } }, "required": ["name"], "x-ref": "#/components/schemas/Team", "index$": 1 } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "description": "Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.", "properties": { "name": { "type": "string", "description": "A human friendly name for this team.", "maxLength": 160, "key$": "name" }, "default_role": { "type": "string", "nullable": true, "description": "The uid of the role you want to assign to the team in the given workspace. You can omit this property if you want to remove the role.", "key$": "default_role" }, "subjects": { "type": "array", "items": { "type": "object", "description": "Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.", "properties": { "id": { "type": "integer", "readOnly": true, "key$": "id" }, "subject_id": { "type": "integer", "description": "The subject's unique identifier.", "key$": "subject_id" }, "subject_user_email": { "type": "string", "format": "email", "description": "The user subject's email address.", "key$": "subject_user_email" }, "subject_type": { "allOf": [], "description": "The type of subject that is being invited.\n\n* `auth.User` - auth.User\n* `core.Agent` - core.Agent", "key$": "subject_type" } }, "required": ["id", "subject_type"], "x-ref": "#/components/schemas/TeamSubject" }, "default": [], "description": "An array of subject ID/type objects to be used during team create and update.", "key$": "subjects" } }, "required": ["name"], "x-ref": "#/components/schemas/Team" } }, "multipart/form-data": { "schema": { "type": "object", "description": "Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.", "properties": { "name": { "type": "string", "description": "A human friendly name for this team.", "maxLength": 160, "key$": "name" }, "default_role": { "type": "string", "nullable": true, "description": "The uid of the role you want to assign to the team in the given workspace. You can omit this property if you want to remove the role.", "key$": "default_role" }, "subjects": { "type": "array", "items": { "type": "object", "description": "Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.", "properties": { "id": { "type": "integer", "readOnly": true, "key$": "id" }, "subject_id": { "type": "integer", "description": "The subject's unique identifier.", "key$": "subject_id" }, "subject_user_email": { "type": "string", "format": "email", "description": "The user subject's email address.", "key$": "subject_user_email" }, "subject_type": { "allOf": [], "description": "The type of subject that is being invited.\n\n* `auth.User` - auth.User\n* `core.Agent` - core.Agent", "key$": "subject_type" } }, "required": ["id", "subject_type"], "x-ref": "#/components/schemas/TeamSubject" }, "default": [], "description": "An array of subject ID/type objects to be used during team create and update.", "key$": "subjects" } }, "required": ["name"], "x-ref": "#/components/schemas/Team" } } }, "required": true }, "parameters": [{ "in": "header", "name": "ClientSessionId", "schema": { "type": "string", "format": "uuid" }, "description": "An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.", "index$": 0 }, { "in": "path", "name": "team_id", "schema": { "type": "string", "pattern": "^[0-9]+$" }, "required": true, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const team_ref01_ent = client.Team();
        let team_ref01_data = setup.data.new.team['team_ref01'];
        team_ref01_data['workspace_id'] = setup.idmap['workspace01'];
        team_ref01_data = (await team_ref01_ent.create(team_ref01_data)).data();
        (0, node_assert_1.default)(null != team_ref01_data.id);
        // UPDATE
        const team_ref01_data_up0 = {};
        team_ref01_data_up0.id = team_ref01_data.id;
        const team_ref01_markdef_up0 = { name: 'default_role', value: 'Mark01-team_ref01_' + setup.now };
        team_ref01_data_up0[team_ref01_markdef_up0.name] = team_ref01_markdef_up0.value;
        const team_ref01_resdata_up0 = (await team_ref01_ent.update(team_ref01_data_up0)).data();
        (0, node_assert_1.default)(team_ref01_resdata_up0.id === team_ref01_data_up0.id);
        (0, node_assert_1.default)(team_ref01_resdata_up0[team_ref01_markdef_up0.name] === team_ref01_markdef_up0.value);
        // LOAD
        const team_ref01_match_dt0 = {};
        team_ref01_match_dt0.id = team_ref01_data.id;
        const team_ref01_data_dt0 = (await team_ref01_ent.load(team_ref01_match_dt0)).data();
        (0, node_assert_1.default)(team_ref01_data_dt0.id === team_ref01_data.id);
        // REMOVE
        const team_ref01_match_rm0 = { id: team_ref01_data.id };
        await team_ref01_ent.remove(team_ref01_match_rm0);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/team/TeamTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['team01', 'team02', 'team03', 'workspace01', 'workspace02', 'workspace03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_TEAM_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_TEAM_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_TEAM_ENTID'];
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
//# sourceMappingURL=TeamEntity.test.js.map