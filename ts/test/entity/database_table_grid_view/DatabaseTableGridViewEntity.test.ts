

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { BaserowSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('DatabaseTableGridViewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.DatabaseTableGridView()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.DatabaseTableGridView().load({"field_id":"x","grid_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'database_table_grid_view.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"field_id":{"a":true,"h":"Field Id","n":"field_id","r":false,"t":"`$STRING`","union":{"branches":4,"count":1,"depth":0},"key$":"field_id","index$":0},"total":{"a":true,"h":"Total","n":"total","r":false,"sh":"The total value count.","t":"`$INTEGER`","key$":"total","index$":1},"value":{"a":true,"h":"Value","n":"value","r":true,"t":"`$ANY`","union":{"branches":4,"count":1,"depth":0},"key$":"value","index$":2}},"name":"database_table_grid_view","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/database/views/grid/{view_id}/aggregation/{field_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"field_id","or":"field_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"grid_id","or":"view_id","r":true,"t":"`$INTEGER`","index$":1}],"query":[{"a":true,"k":"query","n":"include","or":"include","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/database/views/grid/{view_id}/aggregation/{field_id}/","q":{"exist":["field_id","grid_id"]},"r":{"param":{"view_id":"grid_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"lit":"grid"},{"var":"grid_id"},{"lit":"aggregation"},{"var":"field_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/database/views/grid/{slug}/public/aggregations/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"grid_id","or":"slug","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"filter","or":"filters","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"filter_type","or":"filter_type","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"filter_{field}_{filter}","or":"filter__{field}__{filter}","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"include","or":"include","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"search_mode","or":"search_mode","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/api/database/views/grid/{slug}/public/aggregations/","q":{"exist":["grid_id"]},"r":{"param":{"slug":"grid_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"lit":"grid"},{"var":"grid_id"},{"lit":"public"},{"lit":"aggregations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/database/views/grid/{view_id}/aggregations/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"grid_id","or":"view_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"k":"query","n":"filter","or":"filters","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"filter_type","or":"filter_type","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"filter_{field}_{filter}","or":"filter__{field}__{filter}","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"include","or":"include","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"search_mode","or":"search_mode","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/api/database/views/grid/{view_id}/aggregations/","q":{"exist":["grid_id"]},"r":{"param":{"view_id":"grid_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"lit":"grid"},{"var":"grid_id"},{"lit":"aggregations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"database_table_grid_view","name__orig":"database_table_grid_view","Name":"DatabaseTableGridView","name_":"database_table_grid_view","name-":"database-table-grid-view","NAME":"DATABASE_TABLE_GRID_VIEW","index$":55}, {"active":true,"entity":"database_table_grid_view","key$":"BasicDatabaseTableGridViewFlow","kind":"basic","name":"BasicDatabaseTableGridViewFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"database_table_grid_view_ref01","srcdatavar":"database_table_grid_view_ref01_data","suffix":"_dt0"},"m":{"id":"database_table_grid_view01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-database_table_grid_view_ref01"}}],"unreachable":true}]}, 'DatabaseTableGridView', {"GET /api/database/views/grid/{view_id}/aggregation/{field_id}/":{"protocol":"http","parameters":[{"in":"path","name":"field_id","schema":{"type":"integer"},"description":"The field id you want to aggregate","required":true,"index$":0},{"in":"query","name":"include","schema":{"type":"string"},"description":"if `include` is set to `total`, the total row count will be returned with the result.","index$":1},{"in":"query","name":"type","schema":{"type":"string"},"description":"The aggregation type you want. Available aggregation types: count, empty_count, not_empty_count, unique_count, min, max, sum, average, median, decile, variance, std_dev, distribution","index$":2},{"in":"path","name":"view_id","schema":{"type":"integer"},"description":"Select the view you want the aggregation for.","required":true,"index$":3}]},"GET /api/database/views/grid/{slug}/public/aggregations/":{"protocol":"http","parameters":[{"in":"query","name":"filter__{field}__{filter}","schema":{"type":"string"},"description":"The aggregation can optionally be filtered by the same view filters available for the views. Multiple filters can be provided if they follow the same format. The field and filter variable indicate how to filter and the value indicates where to filter on.\n\nFor example if you provide the following GET parameter `filter__field_1__equal=test` then only rows where the value of field_1 is equal to test are going to be returned.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, starts_with, length_is_lower_than, higher_than, higher_than_or_equal, lower_than, lower_than_or_equal, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, date_is, date_is_not, date_is_before, date_is_on_or_before, date_is_after, date_is_on_or_after, date_is_within, single_select_equal, single_select_not_equal, single_select_is_any_of, single_select_is_none_of, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not, has_value_equal, has_not_value_equal, has_value_contains, has_not_value_contains, has_value_contains_word, has_not_value_contains_word, has_value_length_is_lower_than, has_all_values_equal, has_empty_value, has_not_empty_value, has_any_select_option_equal, has_none_select_option_equal, has_value_lower, has_value_lower_or_equal, has_value_higher, has_value_higher_or_equal, has_not_value_higher_or_equal, has_not_value_higher, has_not_value_lower_or_equal, has_not_value_lower, has_date_equal, has_not_date_equal, has_date_before, has_not_date_before, has_date_on_or_before, has_not_date_on_or_before, has_date_on_or_after, has_not_date_on_or_after, has_date_after, has_not_date_after, has_date_within, has_not_date_within.\n\n**Please note that if the `filters` parameter is provided, this parameter will be ignored.** \n\n","index$":0},{"in":"query","name":"filter_type","schema":{"type":"string"},"description":"`AND`: Indicates that the aggregated rows must match all the provided filters.\n\n`OR`: Indicates that the aggregated rows only have to match one of the filters.\n\n","index$":1},{"in":"query","name":"filters","schema":{"type":"string"},"description":"A JSON serialized string containing the filter tree to apply for the aggregation. The filter tree is a nested structure containing the filters that need to be applied. \n\nAn example of a valid filter tree is the following:`{\"filter_type\": \"AND\", \"filters\": [{\"field\": 1, \"type\": \"equal\", \"value\": \"test\"}]}`. The `field` value must be the ID of the field to filter on, or the name of the field if `user_field_names` is true.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, starts_with, length_is_lower_than, higher_than, higher_than_or_equal, lower_than, lower_than_or_equal, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, date_is, date_is_not, date_is_before, date_is_on_or_before, date_is_after, date_is_on_or_after, date_is_within, single_select_equal, single_select_not_equal, single_select_is_any_of, single_select_is_none_of, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not, has_value_equal, has_not_value_equal, has_value_contains, has_not_value_contains, has_value_contains_word, has_not_value_contains_word, has_value_length_is_lower_than, has_all_values_equal, has_empty_value, has_not_empty_value, has_any_select_option_equal, has_none_select_option_equal, has_value_lower, has_value_lower_or_equal, has_value_higher, has_value_higher_or_equal, has_not_value_higher_or_equal, has_not_value_higher, has_not_value_lower_or_equal, has_not_value_lower, has_date_equal, has_not_date_equal, has_date_before, has_not_date_before, has_date_on_or_before, has_not_date_on_or_before, has_date_on_or_after, has_not_date_on_or_after, has_date_after, has_not_date_after, has_date_within, has_not_date_within.\n\n**Please note that if this parameter is provided, all other `filter__{field}__{filter}` will be ignored, as well as the `filter_type` parameter.**","index$":2},{"in":"query","name":"include","schema":{"type":"string"},"description":"if `include` is set to `total`, the total row count will be returned with the result.","index$":3},{"in":"query","name":"search","schema":{"type":"string"},"description":"If provided the aggregations are calculated only for matching rows.","index$":4},{"in":"query","name":"search_mode","schema":{"type":"string"},"description":"If provided, allows API consumers to determine what kind of search experience they wish to have. If the default `SearchMode.FT_WITH_COUNT` is used, then Postgres full-text search is used. If `SearchMode.COMPAT` is provided then the search term will be exactly searched for including whitespace on each cell. This is the Baserow legacy search behaviour.","index$":5},{"in":"path","name":"slug","schema":{"type":"string"},"description":"Select the view you want the aggregations for.","required":true,"index$":6}]},"GET /api/database/views/grid/{view_id}/aggregations/":{"protocol":"http","parameters":[{"in":"query","name":"filter__{field}__{filter}","schema":{"type":"string"},"description":"The aggregation can optionally be filtered by the same view filters available for the views. Multiple filters can be provided if they follow the same format. The field and filter variable indicate how to filter and the value indicates where to filter on.\n\nFor example if you provide the following GET parameter `filter__field_1__equal=test` then only rows where the value of field_1 is equal to test are going to be returned.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, starts_with, length_is_lower_than, higher_than, higher_than_or_equal, lower_than, lower_than_or_equal, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, date_is, date_is_not, date_is_before, date_is_on_or_before, date_is_after, date_is_on_or_after, date_is_within, single_select_equal, single_select_not_equal, single_select_is_any_of, single_select_is_none_of, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not, has_value_equal, has_not_value_equal, has_value_contains, has_not_value_contains, has_value_contains_word, has_not_value_contains_word, has_value_length_is_lower_than, has_all_values_equal, has_empty_value, has_not_empty_value, has_any_select_option_equal, has_none_select_option_equal, has_value_lower, has_value_lower_or_equal, has_value_higher, has_value_higher_or_equal, has_not_value_higher_or_equal, has_not_value_higher, has_not_value_lower_or_equal, has_not_value_lower, has_date_equal, has_not_date_equal, has_date_before, has_not_date_before, has_date_on_or_before, has_not_date_on_or_before, has_date_on_or_after, has_not_date_on_or_after, has_date_after, has_not_date_after, has_date_within, has_not_date_within.\n\n**Please note that if the `filters` parameter is provided, this parameter will be ignored.** \n\n\n\n**Please note that by passing the filter parameters the view filters saved for the view itself will be ignored.**","index$":0},{"in":"query","name":"filter_type","schema":{"type":"string"},"description":"`AND`: Indicates that the aggregated rows must match all the provided filters.\n\n`OR`: Indicates that the aggregated rows only have to match one of the filters.\n\n","index$":1},{"in":"query","name":"filters","schema":{"type":"string"},"description":"A JSON serialized string containing the filter tree to apply for the aggregation. The filter tree is a nested structure containing the filters that need to be applied. \n\nAn example of a valid filter tree is the following:`{\"filter_type\": \"AND\", \"filters\": [{\"field\": 1, \"type\": \"equal\", \"value\": \"test\"}]}`. The `field` value must be the ID of the field to filter on, or the name of the field if `user_field_names` is true.\n\nThe following filters are available: equal, not_equal, filename_contains, files_lower_than, has_file_type, contains, contains_not, contains_word, doesnt_contain_word, starts_with, length_is_lower_than, higher_than, higher_than_or_equal, lower_than, lower_than_or_equal, is_even_and_whole, date_equal, date_before, date_before_or_equal, date_after_days_ago, date_after, date_after_or_equal, date_not_equal, date_equals_today, date_before_today, date_after_today, date_within_days, date_within_weeks, date_within_months, date_equals_days_ago, date_equals_months_ago, date_equals_years_ago, date_equals_week, date_equals_month, date_equals_day_of_month, date_equals_year, date_is, date_is_not, date_is_before, date_is_on_or_before, date_is_after, date_is_on_or_after, date_is_within, single_select_equal, single_select_not_equal, single_select_is_any_of, single_select_is_none_of, link_row_has, link_row_has_not, link_row_contains, link_row_not_contains, boolean, empty, not_empty, multiple_select_has, multiple_select_has_not, multiple_collaborators_has, multiple_collaborators_has_not, user_is, user_is_not, has_value_equal, has_not_value_equal, has_value_contains, has_not_value_contains, has_value_contains_word, has_not_value_contains_word, has_value_length_is_lower_than, has_all_values_equal, has_empty_value, has_not_empty_value, has_any_select_option_equal, has_none_select_option_equal, has_value_lower, has_value_lower_or_equal, has_value_higher, has_value_higher_or_equal, has_not_value_higher_or_equal, has_not_value_higher, has_not_value_lower_or_equal, has_not_value_lower, has_date_equal, has_not_date_equal, has_date_before, has_not_date_before, has_date_on_or_before, has_not_date_on_or_before, has_date_on_or_after, has_not_date_on_or_after, has_date_after, has_not_date_after, has_date_within, has_not_date_within.\n\n**Please note that if this parameter is provided, all other `filter__{field}__{filter}` will be ignored, as well as the `filter_type` parameter.**\n\n**Please note that by passing the filters parameter the view filters saved for the view itself will be ignored.**","index$":2},{"in":"query","name":"include","schema":{"type":"string"},"description":"if `include` is set to `total`, the total row count will be returned with the result.","index$":3},{"in":"query","name":"search","schema":{"type":"string"},"description":"If provided the aggregations are calculated only for matching rows.","index$":4},{"in":"query","name":"search_mode","schema":{"type":"string"},"description":"If provided, allows API consumers to determine what kind of search experience they wish to have. If the default `SearchMode.FT_WITH_COUNT` is used, then Postgres full-text search is used. If `SearchMode.COMPAT` is provided then the search term will be exactly searched for including whitespace on each cell. This is the Baserow legacy search behaviour.","index$":5},{"in":"path","name":"view_id","schema":{"type":"integer"},"description":"Select the view you want the aggregations for.","required":true,"index$":6}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let database_table_grid_view_ref01_data = Object.values(setup.data.existing.database_table_grid_view)[0] as any

  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/database_table_grid_view/DatabaseTableGridViewTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = BaserowSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['database_table_grid_view01','database_table_grid_view02','database_table_grid_view03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_DATABASE_TABLE_GRID_VIEW_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_DATABASE_TABLE_GRID_VIEW_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_DATABASE_TABLE_GRID_VIEW_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new BaserowSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
