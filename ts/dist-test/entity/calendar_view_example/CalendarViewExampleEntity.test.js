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
(0, node_test_1.describe)('CalendarViewExampleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BASEROW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BaserowSDK.test();
        const ent = testsdk.CalendarViewExample();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.BaserowSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.CalendarViewExample().list({ "calendar_id": 1, "from_timestamp": "x", "to_timestamp": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BASEROW_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'calendar_view_example.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "hidden": { "a": true, "h": "Hidden", "n": "hidden", "r": false, "sh": "Whether or not the field should be hidden in the card.", "t": "`$BOOLEAN`", "key$": "hidden", "index$": 0 }, "order": { "a": true, "h": "Order", "n": "order", "r": false, "sh": "The order that the field has in the view.", "t": "`$INTEGER`", "key$": "order", "index$": 1 } }, "name": "calendar_view_example", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/database/views/calendar/{slug}/public/rows/", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "calendar_id", "or": "slug", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "filter", "or": "filters", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "filter_type", "or": "filter_type", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "filter_{field}_{filter}", "or": "filter__{field}__{filter}", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "from_timestamp", "or": "from_timestamp", "r": true, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "limit_linked_item", "or": "limit_linked_items", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$INTEGER`", "index$": 6 }, { "a": true, "k": "query", "n": "to_timestamp", "or": "to_timestamp", "r": true, "t": "`$STRING`", "index$": 7 }, { "a": true, "ex": "UTC", "k": "query", "n": "user_timezone", "or": "user_timezone", "r": false, "t": "`$STRING`", "index$": 8 }] }, "k": "http", "m": "GET", "o": "/api/database/views/calendar/{slug}/public/rows/", "q": { "exist": ["calendar_id", "from_timestamp", "to_timestamp"] }, "r": { "param": { "slug": "calendar_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "api" }, { "lit": "database" }, { "lit": "views" }, { "lit": "calendar" }, { "var": "calendar_id" }, { "lit": "public" }, { "lit": "rows" }], "t": { "req": "`reqdata`", "res": "`body.field_options`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.calendar"]] }, "key$": "calendar_view_example", "name__orig": "calendar_view_example", "Name": "CalendarViewExample", "name_": "calendar_view_example", "name-": "calendar-view-example", "NAME": "CALENDAR_VIEW_EXAMPLE", "index$": 43 }, { "active": true, "entity": "calendar_view_example", "key$": "BasicCalendarViewExampleFlow", "kind": "basic", "name": "BasicCalendarViewExampleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "calendar_id": "calendar01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "calendar_view_example_ref01" } }] }] }, 'CalendarViewExample', { "GET /api/database/views/calendar/{slug}/public/rows/": { "protocol": "http", "parameters": [{ "in": "query", "name": "filter__{field}__{filter}", "schema": { "type": "string" }, "description": "The rows can optionally be filtered by the same view filters available for the views. Multiple filters can be provided if they follow the same format. The field and filter variable indicate how to filter and the value indicates where to filter on.\n\nFor example if you provide the following GET parameter `filter__field_1__equal=test` then only rows where the value of field_1 is equal to test are going to be returned.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, starts_with, length_is_lower_than, higher_than, higher_than_or_equal, lower_than, lower_than_or_equal, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, date_is, date_is_not, date_is_before, date_is_on_or_before, date_is_after, date_is_on_or_after, date_is_within, single_select_equal, single_select_not_equal, single_select_is_any_of, single_select_is_none_of, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not, has_value_equal, has_not_value_equal, has_value_contains, has_not_value_contains, has_value_contains_word, has_not_value_contains_word, has_value_length_is_lower_than, has_all_values_equal, has_empty_value, has_not_empty_value, has_any_select_option_equal, has_none_select_option_equal, has_value_lower, has_value_lower_or_equal, has_value_higher, has_value_higher_or_equal, has_not_value_higher_or_equal, has_not_value_higher, has_not_value_lower_or_equal, has_not_value_lower, has_date_equal, has_not_date_equal, has_date_before, has_not_date_before, has_date_on_or_before, has_not_date_on_or_before, has_date_on_or_after, has_not_date_on_or_after, has_date_after, has_not_date_after, has_date_within, has_not_date_within.\n\n**Please note that if the `filters` parameter is provided, this parameter will be ignored.** \n\n", "index$": 0 }, { "in": "query", "name": "filter_type", "schema": { "type": "string" }, "description": "`AND`: Indicates that the rows must match all the provided filters.\n\n`OR`: Indicates that the rows only have to match one of the filters.\n\nThis works only if two or more filters are provided.\n\n**Please note that if the `filters` parameter is provided, this parameter will be ignored.**", "index$": 1 }, { "in": "query", "name": "filters", "schema": { "type": "string" }, "description": "A JSON serialized string containing the filter tree to apply to this view. The filter tree is a nested structure containing the filters that need to be applied. \n\nAn example of a valid filter tree is the following:`{\"filter_type\": \"AND\", \"filters\": [{\"field\": 1, \"type\": \"equal\", \"value\": \"test\"}]}`. The `field` value must be the ID of the field to filter on, or the name of the field if `user_field_names` is true.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, starts_with, length_is_lower_than, higher_than, higher_than_or_equal, lower_than, lower_than_or_equal, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, date_is, date_is_not, date_is_before, date_is_on_or_before, date_is_after, date_is_on_or_after, date_is_within, single_select_equal, single_select_not_equal, single_select_is_any_of, single_select_is_none_of, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not, has_value_equal, has_not_value_equal, has_value_contains, has_not_value_contains, has_value_contains_word, has_not_value_contains_word, has_value_length_is_lower_than, has_all_values_equal, has_empty_value, has_not_empty_value, has_any_select_option_equal, has_none_select_option_equal, has_value_lower, has_value_lower_or_equal, has_value_higher, has_value_higher_or_equal, has_not_value_higher_or_equal, has_not_value_higher, has_not_value_lower_or_equal, has_not_value_lower, has_date_equal, has_not_date_equal, has_date_before, has_not_date_before, has_date_on_or_before, has_not_date_on_or_before, has_date_on_or_after, has_not_date_on_or_after, has_date_after, has_not_date_after, has_date_within, has_not_date_within.\n\n**Please note that if this parameter is provided, all other `filter__{field}__{filter}` will be ignored, as well as the `filter_type` parameter.**", "index$": 2 }, { "in": "query", "name": "from_timestamp", "schema": { "type": "string", "format": "date-time" }, "description": "Restricts results based on the calendar date field.", "required": true, "index$": 3 }, { "in": "query", "name": "limit", "schema": { "type": "integer" }, "description": "Defines how many rows per day should be returned by default. This value can be overwritten per select option.", "index$": 4 }, { "in": "query", "name": "limit_linked_items", "schema": { "type": "integer" }, "description": "if provided, the maximum number of relationships per link row field in the response. If not provided, all the relationships will be returned.", "index$": 5 }, { "in": "query", "name": "offset", "schema": { "type": "integer" }, "description": "Defines from which offset the rows should be returned.This value can be overwritten per select option.", "index$": 6 }, { "in": "path", "name": "slug", "schema": { "type": "string" }, "description": "Returns only rows that belong to the related view.", "required": true, "index$": 7 }, { "in": "query", "name": "to_timestamp", "schema": { "type": "string", "format": "date-time" }, "description": "Restricts results based on the calendar date field.", "required": true, "index$": 8 }, { "in": "query", "name": "user_timezone", "schema": { "type": "string", "default": "UTC" }, "description": "User's timezone will be taken into account for date fieldtypes that have a time and don't enforce a timezone. The timezone will be used for aggregating the dates. For date fields without a time this will be ignored and UTC will be forced. ", "index$": 9 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let calendar_view_example_ref01_data = Object.values(setup.data.existing.calendar_view_example)[0];
        // LIST
        const calendar_view_example_ref01_ent = client.CalendarViewExample();
        const calendar_view_example_ref01_match = {};
        calendar_view_example_ref01_match['calendar_id'] = setup.idmap['calendar01'];
        const calendar_view_example_ref01_list = (await calendar_view_example_ref01_ent.list(calendar_view_example_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/calendar_view_example/CalendarViewExampleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BaserowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['calendar_view_example01', 'calendar_view_example02', 'calendar_view_example03', 'calendar01', 'calendar02', 'calendar03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BASEROW_TEST_CALENDAR_VIEW_EXAMPLE_ENTID': idmap,
        'BASEROW_TEST_LIVE': 'FALSE',
        'BASEROW_TEST_EXPLAIN': 'FALSE',
        'BASEROW_APIKEY': '',
        'BASEROW_SERVER_BASE': "",
    });
    idmap = env['BASEROW_TEST_CALENDAR_VIEW_EXAMPLE_ENTID'];
    const live = 'TRUE' === env.BASEROW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BASEROW_TEST_CALENDAR_VIEW_EXAMPLE_ENTID'];
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
//# sourceMappingURL=CalendarViewExampleEntity.test.js.map