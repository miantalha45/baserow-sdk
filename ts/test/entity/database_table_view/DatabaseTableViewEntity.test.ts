

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


describe('DatabaseTableViewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.DatabaseTableView()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.DatabaseTableView().load({"ical_slug":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'database_table_view.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"view_ids":{"a":true,"h":"View Ids","n":"view_ids","r":true,"sh":"View ids in the desired order.","t":"`$ARRAY`","key$":"view_ids","index$":1}},"id":{"field":"id","name":"id"},"name":"database_table_view","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["view_ids"],"co":{"id":"POST /api/database/views/table/{table_id}/order/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"client_undo_redo_action_group_id","or":"ClientUndoRedoActionGroupId","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"k":"param","n":"table_id","or":"table_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/database/views/table/{table_id}/order/","q":{"exist":["table_id"]},"r":{},"rb":{"alternatives":[{"fields":[{"list":true,"name":"view_ids"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"list":true,"name":"view_ids"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"lit":"table"},{"var":"table_id"},{"lit":"order"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/database/views/calendar/{ical_slug}.ics","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"ical_slug","or":"ical_slug","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/database/views/calendar/{ical_slug}.ics","q":{"exist":["ical_slug"]},"r":{},"rs":{"binary":true,"kind":"raw","media":"text/calendar"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"lit":"calendar"},{"lit":"{ical_slug}.ics"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/database/views/{view_id}/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"client_undo_redo_action_group_id","or":"ClientUndoRedoActionGroupId","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"k":"param","n":"id","or":"view_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/api/database/views/{view_id}/","q":{"exist":["id"]},"r":{"param":{"view_id":"id"}},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.table"]]},"key$":"database_table_view","name__orig":"database_table_view","Name":"DatabaseTableView","name_":"database_table_view","name-":"database-table-view","NAME":"DATABASE_TABLE_VIEW","index$":57}, {"active":true,"entity":"database_table_view","key$":"BasicDatabaseTableViewFlow","kind":"basic","name":"BasicDatabaseTableViewFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"database_table_view_ref01"},"m":{"ical_slug":"ical_slug01","table_id":"table01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{"ref":"database_table_view_ref01","srcdatavar":"database_table_view_ref01_data","suffix":"_dt0"},"m":{"ical_slug":"ical_slug01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-database_table_view_ref01"}}]},{"a":true,"d":{},"i":{"ref":"database_table_view_ref01","suffix":"_rm0"},"m":{"id":"database_table_view01"},"o":"remove","s":[],"v":[]}]}, 'DatabaseTableView', {"POST /api/database/views/table/{table_id}/order/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"view_ids":{"type":"array","items":{"type":"integer"},"description":"View ids in the desired order.","minItems":1,"key$":"view_ids"}},"required":["view_ids"],"x-ref":"#/components/schemas/OrderViews","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"view_ids":{"type":"array","items":{"type":"integer"},"description":"View ids in the desired order.","minItems":1,"key$":"view_ids"}},"required":["view_ids"],"x-ref":"#/components/schemas/OrderViews"}},"multipart/form-data":{"schema":{"type":"object","properties":{"view_ids":{"type":"array","items":{"type":"integer"},"description":"View ids in the desired order.","minItems":1,"key$":"view_ids"}},"required":["view_ids"],"x-ref":"#/components/schemas/OrderViews"}}},"required":true},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"header","name":"ClientUndoRedoActionGroupId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.","index$":1},{"in":"path","name":"table_id","schema":{"type":"integer"},"description":"Updates the order of the views in the table related to the provided value.","required":true,"index$":2}]},"GET /api/database/views/calendar/{ical_slug}.ics":{"protocol":"http","parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"ical_slug","schema":{"type":"string"},"description":"ICal feed unique slug.","required":true,"index$":1}]},"DELETE /api/database/views/{view_id}/":{"protocol":"http","parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"header","name":"ClientUndoRedoActionGroupId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.","index$":1},{"in":"path","name":"view_id","schema":{"type":"integer"},"description":"Deletes the view related to the provided value.","required":true,"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const database_table_view_ref01_ent = client.DatabaseTableView()
    let database_table_view_ref01_data = setup.data.new.database_table_view['database_table_view_ref01']
    database_table_view_ref01_data['ical_slug'] = setup.idmap['ical_slug01']
    database_table_view_ref01_data['table_id'] = setup.idmap['table01']

    database_table_view_ref01_data = (await database_table_view_ref01_ent.create(database_table_view_ref01_data)).data()
    assert(null != database_table_view_ref01_data.id)


    // LOAD
    const database_table_view_ref01_match_dt0: any = {}
    database_table_view_ref01_match_dt0.id = database_table_view_ref01_data.id
    database_table_view_ref01_match_dt0['ical_slug'] = setup.idmap['ical_slug'] ?? setup.idmap['ical_slug01']
    const database_table_view_ref01_data_dt0 = (await database_table_view_ref01_ent.load(database_table_view_ref01_match_dt0)).data()
    assert(database_table_view_ref01_data_dt0.id === database_table_view_ref01_data.id)


    // REMOVE
    const database_table_view_ref01_match_rm0: any = { id: database_table_view_ref01_data.id }
    await database_table_view_ref01_ent.remove(database_table_view_ref01_match_rm0)
  

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
      '../../../../.sdk/test/entity/database_table_view/DatabaseTableViewTestData.json')

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
    ['database_table_view01','database_table_view02','database_table_view03','table01','table02','table03','ical_slug01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_DATABASE_TABLE_VIEW_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_DATABASE_TABLE_VIEW_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_DATABASE_TABLE_VIEW_ENTID']
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
  
