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
(0, node_test_1.describe)('PublicPaginationSerializerWithTimelineViewFieldOptionsEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.PublicPaginationSerializerWithTimelineViewFieldOptions();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PublicPaginationSerializerWithTimelineViewFieldOptions().list({ "timeline_id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'public_pagination_serializer_with_timeline_view_field_options.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "field_1": { "a": true, "h": "Field 1", "n": "field_1", "r": false, "sh": "This field represents the `text` field.", "t": "`$STRING`", "key$": "field_1", "index$": 0 }, "field_10": { "a": true, "h": "Field 10", "n": "field_10", "r": false, "sh": "This field represents the `last_modified_by` field.", "t": "`$ANY`", "key$": "field_10", "index$": 1 }, "field_11": { "a": true, "fo": "date-time", "h": "Field 11", "n": "field_11", "r": false, "sh": "This field represents the `created_on` field.", "t": "`$STRING`", "key$": "field_11", "index$": 2 }, "field_12": { "a": true, "h": "Field 12", "n": "field_12", "r": false, "sh": "This field represents the `created_by` field.", "t": "`$ANY`", "key$": "field_12", "index$": 3 }, "field_13": { "a": true, "fo": "float", "h": "Field 13", "n": "field_13", "r": false, "sh": "This field represents the `duration` field.", "t": "`$NUMBER`", "key$": "field_13", "index$": 4 }, "field_14": { "a": true, "h": "Field 14", "n": "field_14", "r": false, "sh": "This field represents the `link_row` field.", "t": "`$ARRAY`", "key$": "field_14", "index$": 5 }, "field_15": { "a": true, "h": "Field 15", "n": "field_15", "r": false, "sh": "This field represents the `file` field.", "t": "`$ARRAY`", "key$": "field_15", "index$": 6 }, "field_16": { "a": true, "h": "Field 16", "n": "field_16", "r": false, "sh": "This field represents the `single_select` field.", "t": "`$ANY`", "key$": "field_16", "index$": 7 }, "field_17": { "a": true, "h": "Field 17", "n": "field_17", "r": false, "sh": "This field represents the `multiple_select` field.", "t": "`$ARRAY`", "key$": "field_17", "index$": 8 }, "field_18": { "a": true, "h": "Field 18", "n": "field_18", "r": false, "sh": "This field represents the `phone_number` field.", "t": "`$STRING`", "key$": "field_18", "index$": 9 }, "field_19": { "a": true, "h": "Field 19", "n": "field_19", "r": false, "sh": "This field represents the `formula` field.", "t": "`$STRING`", "key$": "field_19", "index$": 10 }, "field_2": { "a": true, "h": "Field 2", "n": "field_2", "r": false, "sh": "This field represents the `long_text` field.", "t": "`$STRING`", "key$": "field_2", "index$": 11 }, "field_20": { "a": true, "h": "Field 20", "n": "field_20", "r": false, "sh": "This field represents the `count` field.", "t": "`$STRING`", "key$": "field_20", "index$": 12 }, "field_21": { "a": true, "h": "Field 21", "n": "field_21", "r": false, "sh": "This field represents the `rollup` field.", "t": "`$STRING`", "key$": "field_21", "index$": 13 }, "field_22": { "a": true, "h": "Field 22", "n": "field_22", "r": false, "sh": "This field represents the `lookup` field.", "t": "`$STRING`", "key$": "field_22", "index$": 14 }, "field_23": { "a": true, "h": "Field 23", "n": "field_23", "r": false, "sh": "This field represents the `multiple_collaborators` field.", "t": "`$ARRAY`", "key$": "field_23", "index$": 15 }, "field_24": { "a": true, "fo": "uuid", "h": "Field 24", "n": "field_24", "r": false, "sh": "This field represents the `uuid` field.", "t": "`$STRING`", "key$": "field_24", "index$": 16 }, "field_25": { "a": true, "h": "Field 25", "n": "field_25", "r": false, "sh": "This field represents the `autonumber` field.", "t": "`$INTEGER`", "key$": "field_25", "index$": 17 }, "field_26": { "a": true, "h": "Field 26", "n": "field_26", "r": false, "sh": "This field represents the `password` field.", "t": "`$BOOLEAN`", "key$": "field_26", "index$": 18 }, "field_27": { "a": true, "h": "Field 27", "n": "field_27", "r": true, "ro": true, "sh": "This field represents the `form_view_edit_row` field.", "t": "`$STRING`", "key$": "field_27", "index$": 19 }, "field_28": { "a": true, "h": "Field 28", "n": "field_28", "r": false, "sh": "This field represents the `button` field.", "t": "`$STRING`", "key$": "field_28", "index$": 20 }, "field_29": { "a": true, "h": "Field 29", "n": "field_29", "r": false, "sh": "This field represents the `ai` field.", "t": "`$STRING`", "key$": "field_29", "index$": 21 }, "field_3": { "a": true, "h": "Field 3", "n": "field_3", "r": false, "sh": "This field represents the `url` field.", "t": "`$STRING`", "key$": "field_3", "index$": 22 }, "field_4": { "a": true, "h": "Field 4", "n": "field_4", "r": false, "sh": "This field represents the `email` field.", "t": "`$STRING`", "key$": "field_4", "index$": 23 }, "field_5": { "a": true, "fo": "decimal", "h": "Field 5", "n": "field_5", "r": false, "sh": "This field represents the `number` field.", "t": "`$STRING`", "key$": "field_5", "index$": 24 }, "field_6": { "a": true, "h": "Field 6", "n": "field_6", "r": false, "sh": "This field represents the `rating` field.", "t": "`$INTEGER`", "key$": "field_6", "index$": 25 }, "field_7": { "a": true, "h": "Field 7", "n": "field_7", "r": false, "sh": "This field represents the `boolean` field.", "t": "`$BOOLEAN`", "key$": "field_7", "index$": 26 }, "field_8": { "a": true, "fo": "date", "h": "Field 8", "n": "field_8", "r": false, "sh": "This field represents the `date` field.", "t": "`$STRING`", "key$": "field_8", "index$": 27 }, "field_9": { "a": true, "fo": "date-time", "h": "Field 9", "n": "field_9", "r": false, "sh": "This field represents the `last_modified` field.", "t": "`$STRING`", "key$": "field_9", "index$": 28 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "The unique identifier of the row in the table.", "t": "`$INTEGER`", "key$": "id", "index$": 29 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": false, "sh": "Additional metadata for the row, if `include=metadata' is provided as query parameter.", "t": "`$ANY`", "key$": "metadata", "index$": 30 }, "order": { "a": true, "fo": "decimal", "h": "Order", "n": "order", "r": false, "sh": "Indicates the position of the row, lowest first and highest last.", "t": "`$STRING`", "key$": "order", "index$": 31 } }, "id": { "field": "id", "name": "id" }, "name": "public_pagination_serializer_with_timeline_view_field_options", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/database/views/timeline/{slug}/public/rows/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "timeline_id", "or": "slug", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "count", "or": "count", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "k": "query", "n": "exclude_field", "or": "exclude_fields", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "filter", "or": "filters", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "filter_type", "or": "filter_type", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "filter_{field}_{filter}", "or": "filter__{field}__{filter}", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "include", "or": "include", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "include_field", "or": "include_fields", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 7 }, { "a": true, "k": "query", "n": "limit_linked_item", "or": "limit_linked_items", "r": false, "t": "`$INTEGER`", "index$": 8 }, { "a": true, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$INTEGER`", "index$": 9 }, { "a": true, "k": "query", "n": "order_by", "or": "order_by", "r": false, "t": "`$STRING`", "index$": 10 }, { "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 11 }, { "a": true, "k": "query", "n": "search", "or": "search", "r": false, "t": "`$STRING`", "index$": 12 }, { "a": true, "k": "query", "n": "search_mode", "or": "search_mode", "r": false, "t": "`$STRING`", "index$": 13 }, { "a": true, "k": "query", "n": "size", "or": "size", "r": false, "t": "`$INTEGER`", "index$": 14 }] }, "k": "http", "m": "GET", "o": "/api/database/views/timeline/{slug}/public/rows/", "q": { "exist": ["timeline_id"] }, "r": { "param": { "slug": "timeline_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "views" }, { "lit": "timeline" }, { "var": "timeline_id" }, { "lit": "public" }, { "lit": "rows" }], "t": { "req": "`reqdata`", "res": "`body.results`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "public_pagination_serializer_with_timeline_view_field_options", "name__orig": "public_pagination_serializer_with_timeline_view_field_options", "Name": "PublicPaginationSerializerWithTimelineViewFieldOptions", "name_": "public_pagination_serializer_with_timeline_view_field_options", "name-": "public-pagination-serializer-with-timeline-view-field-options", "NAME": "PUBLIC_PAGINATION_SERIALIZER_WITH_TIMELINE_VIEW_FIELD_OPTIONS", "index$": 131 }, { "active": true, "entity": "public_pagination_serializer_with_timeline_view_field_options", "key$": "BasicPublicPaginationSerializerWithTimelineViewFieldOptionsFlow", "kind": "basic", "name": "BasicPublicPaginationSerializerWithTimelineViewFieldOptionsFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "timeline_id": "timeline01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "public_pagination_serializer_with_timeline_view_field_options_ref01" } }] }] }, 'PublicPaginationSerializerWithTimelineViewFieldOptions', { "GET /api/database/views/timeline/{slug}/public/rows/": { "protocol": "http", "parameters": [{ "in": "query", "name": "count", "schema": { "type": "boolean" }, "description": "If provided only the count will be returned.", "index$": 0 }, { "in": "query", "name": "exclude_fields", "schema": { "type": "string" }, "description": "All the fields are included in the response by default. You can select a subset of fields by providing the exclude_fields query parameter. If you for example provide the following GET parameter `exclude_fields=field_1,field_2` then the fields with id `1` and id `2` are going to be excluded from the selection and response. ", "index$": 1 }, { "in": "query", "name": "filter__{field}__{filter}", "schema": { "type": "string" }, "description": "The rows can optionally be filtered by the same view filters available for the views. Multiple filters can be provided if they follow the same format. The field and filter variable indicate how to filter and the value indicates where to filter on.\n\nFor example if you provide the following GET parameter `filter__field_1__equal=test` then only rows where the value of field_1 is equal to test are going to be returned.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, starts_with, length_is_lower_than, higher_than, higher_than_or_equal, lower_than, lower_than_or_equal, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, date_is, date_is_not, date_is_before, date_is_on_or_before, date_is_after, date_is_on_or_after, date_is_within, single_select_equal, single_select_not_equal, single_select_is_any_of, single_select_is_none_of, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not, has_value_equal, has_not_value_equal, has_value_contains, has_not_value_contains, has_value_contains_word, has_not_value_contains_word, has_value_length_is_lower_than, has_all_values_equal, has_empty_value, has_not_empty_value, has_any_select_option_equal, has_none_select_option_equal, has_value_lower, has_value_lower_or_equal, has_value_higher, has_value_higher_or_equal, has_not_value_higher_or_equal, has_not_value_higher, has_not_value_lower_or_equal, has_not_value_lower, has_date_equal, has_not_date_equal, has_date_before, has_not_date_before, has_date_on_or_before, has_not_date_on_or_before, has_date_on_or_after, has_not_date_on_or_after, has_date_after, has_not_date_after, has_date_within, has_not_date_within.\n\n**Please note that if the `filters` parameter is provided, this parameter will be ignored.** \n\n", "index$": 2 }, { "in": "query", "name": "filter_type", "schema": { "type": "string" }, "description": "`AND`: Indicates that the rows must match all the provided filters.\n\n`OR`: Indicates that the rows only have to match one of the filters.\n\nThis works only if two or more filters are provided.\n\n**Please note that if the `filters` parameter is provided, this parameter will be ignored.**", "index$": 3 }, { "in": "query", "name": "filters", "schema": { "type": "string" }, "description": "A JSON serialized string containing the filter tree to apply to this view. The filter tree is a nested structure containing the filters that need to be applied. \n\nAn example of a valid filter tree is the following:`{\"filter_type\": \"AND\", \"filters\": [{\"field\": 1, \"type\": \"equal\", \"value\": \"test\"}]}`. The `field` value must be the ID of the field to filter on, or the name of the field if `user_field_names` is true.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, starts_with, length_is_lower_than, higher_than, higher_than_or_equal, lower_than, lower_than_or_equal, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, date_is, date_is_not, date_is_before, date_is_on_or_before, date_is_after, date_is_on_or_after, date_is_within, single_select_equal, single_select_not_equal, single_select_is_any_of, single_select_is_none_of, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not, has_value_equal, has_not_value_equal, has_value_contains, has_not_value_contains, has_value_contains_word, has_not_value_contains_word, has_value_length_is_lower_than, has_all_values_equal, has_empty_value, has_not_empty_value, has_any_select_option_equal, has_none_select_option_equal, has_value_lower, has_value_lower_or_equal, has_value_higher, has_value_higher_or_equal, has_not_value_higher_or_equal, has_not_value_higher, has_not_value_lower_or_equal, has_not_value_lower, has_date_equal, has_not_date_equal, has_date_before, has_not_date_before, has_date_on_or_before, has_not_date_on_or_before, has_date_on_or_after, has_not_date_on_or_after, has_date_after, has_not_date_after, has_date_within, has_not_date_within.\n\n**Please note that if this parameter is provided, all other `filter__{field}__{filter}` will be ignored, as well as the `filter_type` parameter.**", "index$": 4 }, { "in": "query", "name": "include", "schema": { "type": "string" }, "description": "A comma separated list allowing the values of `field_options` which will add the object/objects with the same name to the response if included. The `field_options` object contains user defined view settings for each field. For example the field's width is included in here.", "index$": 5 }, { "in": "query", "name": "include_fields", "schema": { "type": "string" }, "description": "All the fields are included in the response by default. You can select a subset of fields by providing the fields query parameter. If you for example provide the following GET parameter `include_fields=field_1,field_2` then only the fields with id `1` and id `2` are going to be selected and included in the response.", "index$": 6 }, { "in": "query", "name": "limit", "schema": { "type": "integer" }, "description": "Defines how many rows should be returned.", "index$": 7 }, { "in": "query", "name": "limit_linked_items", "schema": { "type": "integer" }, "description": "if provided, the maximum number of relationships per link row field in the response. If not provided, all the relationships will be returned.", "index$": 8 }, { "in": "query", "name": "offset", "schema": { "type": "integer" }, "description": "Can only be used in combination with the `limit` parameter and defines from which offset the rows should be returned.", "index$": 9 }, { "in": "query", "name": "order_by", "schema": { "type": "string" }, "description": "Optionally the rows can be ordered by provided field ids separated by comma. By default a field is ordered in ascending (A-Z) order, but by prepending the field with a '-' it can be ordered descending (Z-A).", "index$": 10 }, { "in": "query", "name": "page", "schema": { "type": "integer" }, "description": "Defines which page of rows should be returned. Either the `page` or `limit` can be provided, not both.", "index$": 11 }, { "in": "query", "name": "search", "schema": { "type": "string" }, "description": "If provided only rows with data that matches the search query are going to be returned.", "index$": 12 }, { "in": "query", "name": "search_mode", "schema": { "type": "string" }, "description": "If provided, allows API consumers to determine what kind of search experience they wish to have. If the default `SearchMode.FT_WITH_COUNT` is used, then Postgres full-text search is used. If `SearchMode.COMPAT` is provided then the search term will be exactly searched for including whitespace on each cell. This is the Baserow legacy search behaviour.", "index$": 13 }, { "in": "query", "name": "size", "schema": { "type": "integer" }, "description": "Can only be used in combination with the `page` parameter and defines how many rows should be returned.", "index$": 14 }, { "in": "path", "name": "slug", "schema": { "type": "string" }, "description": "Returns only rows that belong to the related view.", "required": true, "index$": 15 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let public_pagination_serializer_with_timeline_view_field_options_ref01_data = Object.values(setup.data.existing.public_pagination_serializer_with_timeline_view_field_options)[0];
        // LIST
        const public_pagination_serializer_with_timeline_view_field_options_ref01_ent = client.PublicPaginationSerializerWithTimelineViewFieldOptions();
        const public_pagination_serializer_with_timeline_view_field_options_ref01_match = {};
        public_pagination_serializer_with_timeline_view_field_options_ref01_match['timeline_id'] = setup.idmap['timeline01'];
        const public_pagination_serializer_with_timeline_view_field_options_ref01_list = (await public_pagination_serializer_with_timeline_view_field_options_ref01_ent.list(public_pagination_serializer_with_timeline_view_field_options_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/public_pagination_serializer_with_timeline_view_field_options/PublicPaginationSerializerWithTimelineViewFieldOptionsTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['public_pagination_serializer_with_timeline_view_field_options01', 'public_pagination_serializer_with_timeline_view_field_options02', 'public_pagination_serializer_with_timeline_view_field_options03', 'timeline01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_PUBLIC_PAGINATION_SERIALIZER_WITH_TIMELINE_VIEW_FIELD_OPTIONS_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_PUBLIC_PAGINATION_SERIALIZER_WITH_TIMELINE_VIEW_FIELD_OPTIONS_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_PUBLIC_PAGINATION_SERIALIZER_WITH_TIMELINE_VIEW_FIELD_OPTIONS_ENTID'];
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
//# sourceMappingURL=PublicPaginationSerializerWithTimelineViewFieldOptionsEntity.test.js.map