

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


describe('DatabaseTableViewGroupingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.DatabaseTableViewGrouping()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.DatabaseTableViewGrouping().create({"view_id":"x","view_group_by_ids":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'database_table_view_grouping.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"view_group_by_ids":{"a":true,"h":"View Group By Ids","n":"view_group_by_ids","r":true,"sh":"View group by ids in the desired priority order.","t":"`$ARRAY`","key$":"view_group_by_ids","index$":0}},"name":"database_table_view_grouping","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["view_group_by_ids"],"co":{"id":"POST /api/database/views/{view_id}/group_bys/prioritize/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"client_undo_redo_action_group_id","or":"ClientUndoRedoActionGroupId","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"k":"param","n":"view_id","or":"view_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/database/views/{view_id}/group_bys/prioritize/","q":{"exist":["view_id"]},"r":{},"rb":{"alternatives":[{"fields":[{"list":true,"name":"view_group_by_ids"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"list":true,"name":"view_group_by_ids"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"var":"view_id"},{"lit":"group_bys"},{"lit":"prioritize"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/database/views/group_by/{view_group_by_id}/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"client_undo_redo_action_group_id","or":"ClientUndoRedoActionGroupId","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"k":"param","n":"view_group_by_id","or":"view_group_by_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/api/database/views/group_by/{view_group_by_id}/","q":{"exist":["view_group_by_id"]},"r":{},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"lit":"group_by"},{"var":"view_group_by_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.view"]]},"key$":"database_table_view_grouping","name__orig":"database_table_view_grouping","Name":"DatabaseTableViewGrouping","name_":"database_table_view_grouping","name-":"database-table-view-grouping","NAME":"DATABASE_TABLE_VIEW_GROUPING","index$":60}, {"active":true,"entity":"database_table_view_grouping","key$":"BasicDatabaseTableViewGroupingFlow","kind":"basic","name":"BasicDatabaseTableViewGroupingFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"database_table_view_grouping_ref01"},"m":{"view_id":"view01"},"o":"create","s":[],"v":[]},{"a":false,"d":{},"i":{"ref":"database_table_view_grouping_ref01","suffix":"_rm0"},"m":{"id":"database_table_view_grouping01"},"o":"remove","s":[],"v":[],"unreachable":true}]}, 'DatabaseTableViewGrouping', {"POST /api/database/views/{view_id}/group_bys/prioritize/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"view_group_by_ids":{"type":"array","items":{"type":"integer"},"description":"View group by ids in the desired priority order. The group by with the lowest position in the list is applied first.","minItems":1,"key$":"view_group_by_ids"}},"required":["view_group_by_ids"],"x-ref":"#/components/schemas/PrioritizeViewGroupBys","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"view_group_by_ids":{"type":"array","items":{"type":"integer"},"description":"View group by ids in the desired priority order. The group by with the lowest position in the list is applied first.","minItems":1,"key$":"view_group_by_ids"}},"required":["view_group_by_ids"],"x-ref":"#/components/schemas/PrioritizeViewGroupBys"}},"multipart/form-data":{"schema":{"type":"object","properties":{"view_group_by_ids":{"type":"array","items":{"type":"integer"},"description":"View group by ids in the desired priority order. The group by with the lowest position in the list is applied first.","minItems":1,"key$":"view_group_by_ids"}},"required":["view_group_by_ids"],"x-ref":"#/components/schemas/PrioritizeViewGroupBys"}}},"required":true},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"header","name":"ClientUndoRedoActionGroupId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.","index$":1},{"in":"path","name":"view_id","schema":{"type":"integer"},"description":"Updates the priority of the group bys in the view related to the provided value.","required":true,"index$":2}]},"DELETE /api/database/views/group_by/{view_group_by_id}/":{"protocol":"http","parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"header","name":"ClientUndoRedoActionGroupId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.","index$":1},{"in":"path","name":"view_group_by_id","schema":{"type":"integer"},"description":"Deletes the group by related to the provided value.","required":true,"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const database_table_view_grouping_ref01_ent = client.DatabaseTableViewGrouping()
    let database_table_view_grouping_ref01_data = setup.data.new.database_table_view_grouping['database_table_view_grouping_ref01']
    database_table_view_grouping_ref01_data['view_id'] = setup.idmap['view01']

    database_table_view_grouping_ref01_data = (await database_table_view_grouping_ref01_ent.create(database_table_view_grouping_ref01_data)).data()
    assert(null != database_table_view_grouping_ref01_data)


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
      '../../../../.sdk/test/entity/database_table_view_grouping/DatabaseTableViewGroupingTestData.json')

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
    ['database_table_view_grouping01','database_table_view_grouping02','database_table_view_grouping03','view01','view02','view03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_DATABASE_TABLE_VIEW_GROUPING_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_DATABASE_TABLE_VIEW_GROUPING_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_DATABASE_TABLE_VIEW_GROUPING_ENTID']
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
  
