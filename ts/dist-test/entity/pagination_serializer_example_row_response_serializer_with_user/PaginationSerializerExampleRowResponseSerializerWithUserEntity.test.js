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
(0, node_test_1.describe)('PaginationSerializerExampleRowResponseSerializerWithUserEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.PaginationSerializerExampleRowResponseSerializerWithUser();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PaginationSerializerExampleRowResponseSerializerWithUser().load({ "table_id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of []) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'pagination_serializer_example_row_response_serializer_with_user.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "count": { "a": true, "h": "Count", "n": "count", "r": true, "sh": "The total amount of results.", "t": "`$INTEGER`", "key$": "count", "index$": 0 }, "next": { "a": true, "fo": "uri", "h": "Next", "n": "next", "r": true, "sh": "URL to the next page.", "t": "`$STRING`", "key$": "next", "index$": 1 }, "previous": { "a": true, "fo": "uri", "h": "Previous", "n": "previous", "r": true, "sh": "URL to the previous page.", "t": "`$STRING`", "key$": "previous", "index$": 2 }, "results": { "a": true, "h": "Results", "n": "results", "r": true, "t": "`$ARRAY`", "key$": "results", "index$": 3 } }, "name": "pagination_serializer_example_row_response_serializer_with_user", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/database/rows/table/{table_id}/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "table_id", "or": "table_id", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "exclude", "or": "exclude", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "filter", "or": "filters", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "filter_type", "or": "filter_type", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "filter_{field}_{filter}", "or": "filter__{field}__{filter}", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "include", "or": "include", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "order_by", "or": "order_by", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 6 }, { "a": true, "k": "query", "n": "search", "or": "search", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "search_mode", "or": "search_mode", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "k": "query", "n": "size", "or": "size", "r": false, "t": "`$INTEGER`", "index$": 9 }, { "a": true, "k": "query", "n": "user_field_name", "or": "user_field_names", "r": false, "t": "`$BOOLEAN`", "index$": 10 }, { "a": true, "k": "query", "n": "view_id", "or": "view_id", "r": false, "t": "`$INTEGER`", "index$": 11 }, { "a": true, "k": "query", "n": "{link_row_field}_join={target_field},{target_field2}", "or": "{link_row_field}__join={target_field},{target_field2}", "r": false, "t": "`$STRING`", "index$": 12 }] }, "k": "http", "m": "GET", "o": "/api/database/rows/table/{table_id}/", "q": { "exist": ["table_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "rows" }, { "lit": "table" }, { "var": "table_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.table"]] }, "key$": "pagination_serializer_example_row_response_serializer_with_user", "name__orig": "pagination_serializer_example_row_response_serializer_with_user", "Name": "PaginationSerializerExampleRowResponseSerializerWithUser", "name_": "pagination_serializer_example_row_response_serializer_with_user", "name-": "pagination-serializer-example-row-response-serializer-with-user", "NAME": "PAGINATION_SERIALIZER_EXAMPLE_ROW_RESPONSE_SERIALIZER_WITH_USER", "index$": 116 }, { "active": true, "entity": "pagination_serializer_example_row_response_serializer_with_user", "key$": "BasicPaginationSerializerExampleRowResponseSerializerWithUserFlow", "kind": "basic", "name": "BasicPaginationSerializerExampleRowResponseSerializerWithUserFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "pagination_serializer_example_row_response_serializer_with_user_ref01", "srcdatavar": "pagination_serializer_example_row_response_serializer_with_user_ref01_data", "suffix": "_dt0" }, "m": { "id": "pagination_serializer_example_row_response_serializer_with_user01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-pagination_serializer_example_row_response_serializer_with_user_ref01" } }], "unreachable": true }] }, 'PaginationSerializerExampleRowResponseSerializerWithUser', { "GET /api/database/rows/table/{table_id}/": { "protocol": "http", "parameters": [{ "in": "query", "name": "exclude", "schema": { "type": "string" }, "description": "All the fields are included in the response by default. You can select a subset of fields by providing the exclude query parameter. If you for example provide the following GET parameter `exclude=field_1,field_2` then the fields with id `1` and id `2` are going to be excluded from the selection and response. If the `user_field_names` parameter is provided then instead exclude should be a comma separated list of the actual field names. For field names with commas you should surround the name with quotes like so: `exclude=My Field,\"Field With , \"`. A backslash can be used to escape field names which contain double quotes like so: `exclude=My Field,Field with \\\"`.", "index$": 0 }, { "in": "query", "name": "filter__{field}__{filter}", "schema": { "type": "string" }, "description": "The rows can optionally be filtered by the same view filters available for the views. Multiple filters can be provided if they follow the same format. The field and filter variable indicate how to filter and the value indicates where to filter on.\n\nFor example if you provide the following GET parameter `filter__field_1__equal=test` then only rows where the value of field_1 is equal to test are going to be returned.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, starts_with, length_is_lower_than, higher_than, higher_than_or_equal, lower_than, lower_than_or_equal, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, date_is, date_is_not, date_is_before, date_is_on_or_before, date_is_after, date_is_on_or_after, date_is_within, single_select_equal, single_select_not_equal, single_select_is_any_of, single_select_is_none_of, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not, has_value_equal, has_not_value_equal, has_value_contains, has_not_value_contains, has_value_contains_word, has_not_value_contains_word, has_value_length_is_lower_than, has_all_values_equal, has_empty_value, has_not_empty_value, has_any_select_option_equal, has_none_select_option_equal, has_value_lower, has_value_lower_or_equal, has_value_higher, has_value_higher_or_equal, has_not_value_higher_or_equal, has_not_value_higher, has_not_value_lower_or_equal, has_not_value_lower, has_date_equal, has_not_date_equal, has_date_before, has_not_date_before, has_date_on_or_before, has_not_date_on_or_before, has_date_on_or_after, has_not_date_on_or_after, has_date_after, has_not_date_after, has_date_within, has_not_date_within.\n\n**Please note that if the `filters` parameter is provided, this parameter will be ignored.** \n\n", "index$": 1 }, { "in": "query", "name": "filter_type", "schema": { "type": "string" }, "description": "`AND`: Indicates that the rows must match all the provided filters.\n\n`OR`: Indicates that the rows only have to match one of the filters.\n\nThis works only if two or more filters are provided.\n\n**Please note that if the `filters` parameter is provided, this parameter will be ignored.**", "index$": 2 }, { "in": "query", "name": "filters", "schema": { "type": "string" }, "description": "A JSON serialized string containing the filter tree to apply to this view. The filter tree is a nested structure containing the filters that need to be applied. \n\nAn example of a valid filter tree is the following:`{\"filter_type\": \"AND\", \"filters\": [{\"field\": 1, \"type\": \"equal\", \"value\": \"test\"}]}`. The `field` value must be the ID of the field to filter on, or the name of the field if `user_field_names` is true.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, starts_with, length_is_lower_than, higher_than, higher_than_or_equal, lower_than, lower_than_or_equal, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, date_is, date_is_not, date_is_before, date_is_on_or_before, date_is_after, date_is_on_or_after, date_is_within, single_select_equal, single_select_not_equal, single_select_is_any_of, single_select_is_none_of, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not, has_value_equal, has_not_value_equal, has_value_contains, has_not_value_contains, has_value_contains_word, has_not_value_contains_word, has_value_length_is_lower_than, has_all_values_equal, has_empty_value, has_not_empty_value, has_any_select_option_equal, has_none_select_option_equal, has_value_lower, has_value_lower_or_equal, has_value_higher, has_value_higher_or_equal, has_not_value_higher_or_equal, has_not_value_higher, has_not_value_lower_or_equal, has_not_value_lower, has_date_equal, has_not_date_equal, has_date_before, has_not_date_before, has_date_on_or_before, has_not_date_on_or_before, has_date_on_or_after, has_not_date_on_or_after, has_date_after, has_not_date_after, has_date_within, has_not_date_within.\n\n**Please note that if this parameter is provided, all other `filter__{field}__{filter}` will be ignored, as well as the `filter_type` parameter.**", "index$": 3 }, { "in": "query", "name": "include", "schema": { "type": "string" }, "description": "All the fields are included in the response by default. You can select a subset of fields by providing the include query parameter. If you for example provide the following GET parameter `include=field_1,field_2` then only the fields withid `1` and id `2` are going to be selected and included in the response. If the `user_field_names` parameter is provided then instead include should be a comma separated list of the actual field names. For field names with commas you should surround the name with quotes like so: `include=My Field,\"Field With , \"`. A backslash can be used to escape field names which contain double quotes like so: `include=My Field,Field with \\\"`.", "index$": 4 }, { "in": "query", "name": "order_by", "schema": { "type": "string" }, "description": "Optionally the rows can be ordered by provided field ids separated by comma. By default a field is ordered in ascending (A-Z) order, but by prepending the field with a '-' it can be ordered descending (Z-A). If the `user_field_names` parameter is provided then instead order_by should be a comma separated list of the actual field names. For field names with commas you should surround the name with quotes like so: `order_by=My Field,\"Field With , \"`. A backslash can be used to escape field names which contain double quotes like so: `order_by=My Field,Field with \\\"`.", "index$": 5 }, { "in": "query", "name": "page", "schema": { "type": "integer" }, "description": "Defines which page of rows should be returned.", "index$": 6 }, { "in": "query", "name": "search", "schema": { "type": "string" }, "description": "If provided only rows with data that matches the search query are going to be returned.", "index$": 7 }, { "in": "query", "name": "search_mode", "schema": { "type": "string" }, "description": "If provided, allows API consumers to determine what kind of search experience they wish to have. If the default `SearchMode.FT_WITH_COUNT` is used, then Postgres full-text search is used. If `SearchMode.COMPAT` is provided then the search term will be exactly searched for including whitespace on each cell. This is the Baserow legacy search behaviour.", "index$": 8 }, { "in": "query", "name": "size", "schema": { "type": "integer" }, "description": "Defines how many rows should be returned per page.", "index$": 9 }, { "in": "path", "name": "table_id", "schema": { "type": "integer" }, "description": "Returns the rows of the table related to the provided value.", "required": true, "index$": 10 }, { "in": "query", "name": "user_field_names", "schema": { "type": "boolean" }, "description": "A flag query parameter that, if provided with one of the following values: `y`, `yes`, `true`, `t`, `on`, `1`, or an empty value, will cause the returned JSON to use the user-specified field names instead of the internal Baserow field names (e.g., field_123).", "index$": 11 }, { "in": "query", "name": "view_id", "schema": { "type": "integer" }, "description": "Includes all the filters and sorts of the provided view.", "index$": 12 }, { "in": "query", "name": "{link_row_field}__join={target_field},{target_field2}", "schema": { "type": "string" }, "description": "This parameter allows you to request a lookup of field values from a target table through existing link row fields. The parameter name has to be the name of an existing link row field, followed by `__join`. The value should be a list of field names for which we want to lookup additional values. You can provide one or multiple target fields. It is not possible to lookup a value of a link row field in the target table. If `user_field_names` parameter is set, the names of the fields should be user field names. In this case the resulting field names in the output will also be user field names. The used link row field has to be among the requested fields if using the `include` or `exclude` parameters.", "index$": 13 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let pagination_serializer_example_row_response_serializer_with_user_ref01_data = Object.values(setup.data.existing.pagination_serializer_example_row_response_serializer_with_user)[0];
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/pagination_serializer_example_row_response_serializer_with_user/PaginationSerializerExampleRowResponseSerializerWithUserTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['pagination_serializer_example_row_response_serializer_with_user01', 'pagination_serializer_example_row_response_serializer_with_user02', 'pagination_serializer_example_row_response_serializer_with_user03', 'table01', 'table02', 'table03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_PAGINATION_SERIALIZER_EXAMPLE_ROW_RESPONSE_SERIALIZER_WITH_USER_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_PAGINATION_SERIALIZER_EXAMPLE_ROW_RESPONSE_SERIALIZER_WITH_USER_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_PAGINATION_SERIALIZER_EXAMPLE_ROW_RESPONSE_SERIALIZER_WITH_USER_ENTID'];
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
//# sourceMappingURL=PaginationSerializerExampleRowResponseSerializerWithUserEntity.test.js.map