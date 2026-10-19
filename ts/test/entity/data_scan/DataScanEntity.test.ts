

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


describe('DataScanEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.DataScan()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('data_scan hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of BaserowSDK.test(offline).DataScan().stream('list')) { }
    }, /offline/)

    for await (const _item of BaserowSDK.test(offline).DataScan()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = BaserowSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.DataScan().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of BaserowSDK.test().DataScan().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new BaserowSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.DataScan().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.DataScan().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.DataScan().list({"ids":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'data_scan.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":true,"ro":true,"t":"`$STRING`","key$":"created_on","index$":0},"frequency":{"a":true,"h":"Frequency","n":"frequency","r":false,"sh":"* `manual` - Manual * `hourly` - Hourly * `daily` - Daily * `weekly` - Weekly","t":"`$STRING`","key$":"frequency","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":2},"is_running":{"a":true,"h":"Is Running","n":"is_running","r":false,"t":"`$BOOLEAN`","key$":"is_running","index$":3},"last_error":{"a":true,"h":"Last Error","n":"last_error","r":false,"t":"`$STRING`","key$":"last_error","index$":4},"last_run_finished_at":{"a":true,"fo":"date-time","h":"Last Run Finished At","n":"last_run_finished_at","r":false,"t":"`$STRING`","key$":"last_run_finished_at","index$":5},"last_run_started_at":{"a":true,"fo":"date-time","h":"Last Run Started At","n":"last_run_started_at","r":false,"t":"`$STRING`","key$":"last_run_started_at","index$":6},"list_items":{"a":true,"h":"List Items","n":"list_items","op":{"create":{"req":false,"type":"`$ARRAY`"},"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"ro":true,"t":"`$STRING`","key$":"list_items","index$":7},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"name","index$":8},"pattern":{"a":true,"h":"Pattern","n":"pattern","r":false,"t":"`$STRING`","key$":"pattern","index$":9},"results_count":{"a":true,"h":"Results Count","n":"results_count","r":true,"ro":true,"t":"`$STRING`","key$":"results_count","index$":10},"scan_all_workspaces":{"a":true,"h":"Scan All Workspaces","n":"scan_all_workspaces","r":false,"t":"`$BOOLEAN`","key$":"scan_all_workspaces","index$":11},"scan_type":{"a":true,"h":"Scan Type","n":"scan_type","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"* `pattern` - Pattern * `list_of_values` - List of values * `list_table` - List Table","t":"`$STRING`","key$":"scan_type","index$":12},"source_database_id":{"a":true,"h":"Source Database Id","n":"source_database_id","r":true,"ro":true,"t":"`$STRING`","key$":"source_database_id","index$":13},"source_field_id":{"a":true,"h":"Source Field Id","n":"source_field_id","op":{"create":{"req":false,"type":"`$INTEGER`"},"update":{"req":false,"type":"`$INTEGER`"}},"r":true,"ro":true,"t":"`$STRING`","key$":"source_field_id","index$":14},"source_table_id":{"a":true,"h":"Source Table Id","n":"source_table_id","op":{"create":{"req":false,"type":"`$INTEGER`"},"update":{"req":false,"type":"`$INTEGER`"}},"r":true,"ro":true,"t":"`$STRING`","key$":"source_table_id","index$":15},"source_workspace_id":{"a":true,"h":"Source Workspace Id","n":"source_workspace_id","r":true,"ro":true,"t":"`$STRING`","key$":"source_workspace_id","index$":16},"updated_on":{"a":true,"fo":"date-time","h":"Updated On","n":"updated_on","r":true,"ro":true,"t":"`$STRING`","key$":"updated_on","index$":17},"whole_words":{"a":true,"h":"Whole Words","n":"whole_words","r":false,"t":"`$BOOLEAN`","key$":"whole_words","index$":18},"workspace_ids":{"a":true,"h":"Workspace Ids","n":"workspace_ids","op":{"create":{"req":false,"type":"`$ARRAY`"},"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"ro":true,"t":"`$STRING`","key$":"workspace_ids","index$":19}},"id":{"field":"id","name":"id"},"name":"data_scan","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["frequency","list_items","name","pattern","scan_all_workspaces","scan_type","source_field_id","source_table_id","whole_words","workspace_ids"],"co":{"id":"POST /api/admin/data-scanner/scans/","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/admin/data-scanner/scans/","q":{},"r":{},"rb":{"alternatives":[{"fields":[{"name":"frequency"},{"list":true,"name":"list_items"},{"name":"name"},{"name":"pattern"},{"name":"scan_all_workspaces"},{"name":"scan_type"},{"name":"source_field_id"},{"name":"source_table_id"},{"name":"whole_words"},{"list":true,"name":"workspace_ids"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"frequency"},{"list":true,"name":"list_items"},{"name":"name"},{"name":"pattern"},{"name":"scan_all_workspaces"},{"name":"scan_type"},{"name":"source_field_id"},{"name":"source_table_id"},{"name":"whole_words"},{"list":true,"name":"workspace_ids"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"data-scanner"},{"lit":"scans"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/data-scanner/scans/","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ids","or":"ids","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"size","or":"size","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"sort","or":"sorts","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/api/admin/data-scanner/scans/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"data-scanner"},{"lit":"scans"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/admin/data-scanner/scans/{scan_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"scan_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/admin/data-scanner/scans/{scan_id}/","q":{"exist":["id"]},"r":{"param":{"scan_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"data-scanner"},{"lit":"scans"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["frequency","list_items","name","pattern","scan_all_workspaces","scan_type","source_field_id","source_table_id","whole_words","workspace_ids"],"co":{"id":"PATCH /api/admin/data-scanner/scans/{scan_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"scan_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/api/admin/data-scanner/scans/{scan_id}/","q":{"exist":["id"]},"r":{"param":{"scan_id":"id"}},"rb":{"alternatives":[{"fields":[{"name":"frequency"},{"list":true,"name":"list_items"},{"name":"name"},{"name":"pattern"},{"name":"scan_all_workspaces"},{"name":"scan_type"},{"name":"source_field_id"},{"name":"source_table_id"},{"name":"whole_words"},{"list":true,"name":"workspace_ids"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"frequency"},{"list":true,"name":"list_items"},{"name":"name"},{"name":"pattern"},{"name":"scan_all_workspaces"},{"name":"scan_type"},{"name":"source_field_id"},{"name":"source_table_id"},{"name":"whole_words"},{"list":true,"name":"workspace_ids"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"data-scanner"},{"lit":"scans"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"data_scan","name__orig":"data_scan","Name":"DataScan","name_":"data_scan","name-":"data-scan","NAME":"DATA_SCAN","index$":51}, {"active":true,"entity":"data_scan","key$":"BasicDataScanFlow","kind":"basic","name":"BasicDataScanFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"data_scan_ref01"},"m":{},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"data_scan_ref01"}}]},{"a":true,"d":{},"i":{"ref":"data_scan_ref01","srcdatavar":"data_scan_ref01_data","suffix":"_up0","textfield":"frequency"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-data_scan_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"data_scan_ref01","srcdatavar":"data_scan_ref01_data","suffix":"_dt0"},"m":{"id":"data_scan01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-data_scan_ref01"}}]}]}, 'DataScan', {"POST /api/admin/data-scanner/scans/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","maxLength":255,"key$":"name"},"scan_type":{"enum":["pattern","list_of_values","list_table"],"type":"string","description":"* `pattern` - Pattern\n* `list_of_values` - List of values\n* `list_table` - List Table","x-ref":"#/components/schemas/ScanTypeEnum","key$":"scan_type"},"pattern":{"type":"string","maxLength":100,"key$":"pattern"},"frequency":{"allOf":[{"enum":["manual","hourly","daily","weekly"],"type":"string","description":"* `manual` - Manual\n* `hourly` - Hourly\n* `daily` - Daily\n* `weekly` - Weekly","x-ref":"#/components/schemas/FrequencyEnum"}],"default":"manual","key$":"frequency"},"scan_all_workspaces":{"type":"boolean","default":true,"key$":"scan_all_workspaces"},"workspace_ids":{"type":"array","items":{"type":"integer"},"key$":"workspace_ids"},"list_items":{"type":"array","items":{"type":"string"},"key$":"list_items"},"source_table_id":{"type":"integer","nullable":true,"key$":"source_table_id"},"source_field_id":{"type":"integer","nullable":true,"key$":"source_field_id"},"whole_words":{"type":"boolean","default":true,"key$":"whole_words"}},"required":["name","scan_type"],"x-ref":"#/components/schemas/DataScanCreate","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"name":{"type":"string","maxLength":255,"key$":"name"},"scan_type":{"enum":["pattern","list_of_values","list_table"],"type":"string","description":"* `pattern` - Pattern\n* `list_of_values` - List of values\n* `list_table` - List Table","x-ref":"#/components/schemas/ScanTypeEnum","key$":"scan_type"},"pattern":{"type":"string","maxLength":100,"key$":"pattern"},"frequency":{"allOf":[{"enum":["manual","hourly","daily","weekly"],"type":"string","description":"* `manual` - Manual\n* `hourly` - Hourly\n* `daily` - Daily\n* `weekly` - Weekly","x-ref":"#/components/schemas/FrequencyEnum"}],"default":"manual","key$":"frequency"},"scan_all_workspaces":{"type":"boolean","default":true,"key$":"scan_all_workspaces"},"workspace_ids":{"type":"array","items":{"type":"integer"},"key$":"workspace_ids"},"list_items":{"type":"array","items":{"type":"string"},"key$":"list_items"},"source_table_id":{"type":"integer","nullable":true,"key$":"source_table_id"},"source_field_id":{"type":"integer","nullable":true,"key$":"source_field_id"},"whole_words":{"type":"boolean","default":true,"key$":"whole_words"}},"required":["name","scan_type"],"x-ref":"#/components/schemas/DataScanCreate"}},"multipart/form-data":{"schema":{"type":"object","properties":{"name":{"type":"string","maxLength":255,"key$":"name"},"scan_type":{"enum":["pattern","list_of_values","list_table"],"type":"string","description":"* `pattern` - Pattern\n* `list_of_values` - List of values\n* `list_table` - List Table","x-ref":"#/components/schemas/ScanTypeEnum","key$":"scan_type"},"pattern":{"type":"string","maxLength":100,"key$":"pattern"},"frequency":{"allOf":[{"enum":["manual","hourly","daily","weekly"],"type":"string","description":"* `manual` - Manual\n* `hourly` - Hourly\n* `daily` - Daily\n* `weekly` - Weekly","x-ref":"#/components/schemas/FrequencyEnum"}],"default":"manual","key$":"frequency"},"scan_all_workspaces":{"type":"boolean","default":true,"key$":"scan_all_workspaces"},"workspace_ids":{"type":"array","items":{"type":"integer"},"key$":"workspace_ids"},"list_items":{"type":"array","items":{"type":"string"},"key$":"list_items"},"source_table_id":{"type":"integer","nullable":true,"key$":"source_table_id"},"source_field_id":{"type":"integer","nullable":true,"key$":"source_field_id"},"whole_words":{"type":"boolean","default":true,"key$":"whole_words"}},"required":["name","scan_type"],"x-ref":"#/components/schemas/DataScanCreate"}}},"required":true},"parameters":[]},"GET /api/admin/data-scanner/scans/":{"protocol":"http","parameters":[{"in":"query","name":"ids","schema":{"type":"string"},"description":"A comma-separated list of data scans IDs to filter by. When provided, only data scans with those IDs are returned.","index$":0},{"in":"query","name":"page","schema":{"type":"integer"},"description":"Defines which page should be returned.","index$":1},{"in":"query","name":"search","schema":{"type":"string"},"description":"If provided only data scans with name that match the query will be returned.","index$":2},{"in":"query","name":"size","schema":{"type":"integer"},"description":"Defines how many data scans should be returned per page.","index$":3},{"in":"query","name":"sorts","schema":{"type":"string"},"description":"A comma separated string of attributes to sort by, each attribute must be prefixed with `+` for a descending sort or a `-` for an ascending sort. The accepted attribute names are: `name, scan_type, frequency, created_on`. For example `sorts=-name,-scan_type` will sort the data scans first by descending name and then ascending scan_type. A sortparameter with multiple instances of the same sort attribute will respond with the ERROR_INVALID_SORT_ATTRIBUTE error.","index$":4}]},"GET /api/admin/data-scanner/scans/{scan_id}/":{"protocol":"http","parameters":[{"in":"path","name":"scan_id","schema":{"type":"string","pattern":"^[0-9]+$"},"required":true,"index$":0}]},"PATCH /api/admin/data-scanner/scans/{scan_id}/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","maxLength":255,"key$":"name"},"scan_type":{"enum":["pattern","list_of_values","list_table"],"type":"string","description":"* `pattern` - Pattern\n* `list_of_values` - List of values\n* `list_table` - List Table","x-ref":"#/components/schemas/ScanTypeEnum","key$":"scan_type"},"pattern":{"type":"string","nullable":true,"maxLength":100,"key$":"pattern"},"frequency":{"enum":["manual","hourly","daily","weekly"],"type":"string","description":"* `manual` - Manual\n* `hourly` - Hourly\n* `daily` - Daily\n* `weekly` - Weekly","x-ref":"#/components/schemas/FrequencyEnum","key$":"frequency"},"scan_all_workspaces":{"type":"boolean","key$":"scan_all_workspaces"},"workspace_ids":{"type":"array","items":{"type":"integer"},"key$":"workspace_ids"},"list_items":{"type":"array","items":{"type":"string"},"key$":"list_items"},"source_table_id":{"type":"integer","nullable":true,"key$":"source_table_id"},"source_field_id":{"type":"integer","nullable":true,"key$":"source_field_id"},"whole_words":{"type":"boolean","key$":"whole_words"}},"x-ref":"#/components/schemas/PatchedDataScanUpdate","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"name":{"type":"string","maxLength":255,"key$":"name"},"scan_type":{"enum":["pattern","list_of_values","list_table"],"type":"string","description":"* `pattern` - Pattern\n* `list_of_values` - List of values\n* `list_table` - List Table","x-ref":"#/components/schemas/ScanTypeEnum","key$":"scan_type"},"pattern":{"type":"string","nullable":true,"maxLength":100,"key$":"pattern"},"frequency":{"enum":["manual","hourly","daily","weekly"],"type":"string","description":"* `manual` - Manual\n* `hourly` - Hourly\n* `daily` - Daily\n* `weekly` - Weekly","x-ref":"#/components/schemas/FrequencyEnum","key$":"frequency"},"scan_all_workspaces":{"type":"boolean","key$":"scan_all_workspaces"},"workspace_ids":{"type":"array","items":{"type":"integer"},"key$":"workspace_ids"},"list_items":{"type":"array","items":{"type":"string"},"key$":"list_items"},"source_table_id":{"type":"integer","nullable":true,"key$":"source_table_id"},"source_field_id":{"type":"integer","nullable":true,"key$":"source_field_id"},"whole_words":{"type":"boolean","key$":"whole_words"}},"x-ref":"#/components/schemas/PatchedDataScanUpdate"}},"multipart/form-data":{"schema":{"type":"object","properties":{"name":{"type":"string","maxLength":255,"key$":"name"},"scan_type":{"enum":["pattern","list_of_values","list_table"],"type":"string","description":"* `pattern` - Pattern\n* `list_of_values` - List of values\n* `list_table` - List Table","x-ref":"#/components/schemas/ScanTypeEnum","key$":"scan_type"},"pattern":{"type":"string","nullable":true,"maxLength":100,"key$":"pattern"},"frequency":{"enum":["manual","hourly","daily","weekly"],"type":"string","description":"* `manual` - Manual\n* `hourly` - Hourly\n* `daily` - Daily\n* `weekly` - Weekly","x-ref":"#/components/schemas/FrequencyEnum","key$":"frequency"},"scan_all_workspaces":{"type":"boolean","key$":"scan_all_workspaces"},"workspace_ids":{"type":"array","items":{"type":"integer"},"key$":"workspace_ids"},"list_items":{"type":"array","items":{"type":"string"},"key$":"list_items"},"source_table_id":{"type":"integer","nullable":true,"key$":"source_table_id"},"source_field_id":{"type":"integer","nullable":true,"key$":"source_field_id"},"whole_words":{"type":"boolean","key$":"whole_words"}},"x-ref":"#/components/schemas/PatchedDataScanUpdate"}}}},"parameters":[{"in":"path","name":"scan_id","schema":{"type":"string","pattern":"^[0-9]+$"},"required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const data_scan_ref01_ent = client.DataScan()
    let data_scan_ref01_data = setup.data.new.data_scan['data_scan_ref01']

    data_scan_ref01_data = (await data_scan_ref01_ent.create(data_scan_ref01_data)).data()
    assert(null != data_scan_ref01_data.id)


    // LIST
    const data_scan_ref01_match: any = {}

    const data_scan_ref01_list = (await data_scan_ref01_ent.list(data_scan_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(data_scan_ref01_list, { id: data_scan_ref01_data.id })))


    // UPDATE
    const data_scan_ref01_data_up0: any = {}
    data_scan_ref01_data_up0.id = data_scan_ref01_data.id

    const data_scan_ref01_markdef_up0 = { name: 'frequency', value: 'Mark01-data_scan_ref01_' + setup.now }
    ;(data_scan_ref01_data_up0 as any)[data_scan_ref01_markdef_up0.name] = data_scan_ref01_markdef_up0.value

    const data_scan_ref01_resdata_up0 = (await data_scan_ref01_ent.update(data_scan_ref01_data_up0)).data()
    assert(data_scan_ref01_resdata_up0.id === data_scan_ref01_data_up0.id)

    assert((data_scan_ref01_resdata_up0 as any)[data_scan_ref01_markdef_up0.name] === data_scan_ref01_markdef_up0.value)


    // LOAD
    const data_scan_ref01_match_dt0: any = {}
    data_scan_ref01_match_dt0.id = data_scan_ref01_data.id
    const data_scan_ref01_data_dt0 = (await data_scan_ref01_ent.load(data_scan_ref01_match_dt0)).data()
    assert(data_scan_ref01_data_dt0.id === data_scan_ref01_data.id)


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
      '../../../../.sdk/test/entity/data_scan/DataScanTestData.json')

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
    ['data_scan01','data_scan02','data_scan03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_DATA_SCAN_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_DATA_SCAN_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_DATA_SCAN_ENTID']
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
  
