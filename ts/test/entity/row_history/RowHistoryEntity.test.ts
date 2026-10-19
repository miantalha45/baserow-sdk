

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


describe('RowHistoryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.RowHistory()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.RowHistory().list({"row_id":"x","table_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'row_history.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"action_command_type":{"a":true,"h":"Action Command Type","n":"action_command_type","r":false,"sh":"The type of command that was performed.","t":"`$STRING`","key$":"action_command_type","index$":0},"action_type":{"a":true,"h":"Action Type","n":"action_type","r":true,"sh":"The type of the action that was performed.","t":"`$STRING`","key$":"action_type","index$":1},"after":{"a":true,"h":"After","n":"after","r":true,"sh":"The mapping between field_ids and values for the row after the action was performed.","t":"`$ANY`","key$":"after","index$":2},"before":{"a":true,"h":"Before","n":"before","r":true,"sh":"The mapping between field_ids and values for the row before the action was performed.","t":"`$ANY`","key$":"before","index$":3},"fields_metadata":{"a":true,"h":"Fields Metadata","n":"fields_metadata","r":true,"sh":"The metadata of the fields that were changed.","t":"`$ANY`","key$":"fields_metadata","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":5},"timestamp":{"a":true,"fo":"date-time","h":"Timestamp","n":"timestamp","r":true,"sh":"The timestamp of the action that was performed.","t":"`$STRING`","key$":"timestamp","index$":6},"user":{"a":true,"h":"User","n":"user","r":true,"sh":"The user that performed the action.","t":"`$ANY`","key$":"user","index$":7}},"id":{"field":"id","name":"id"},"name":"row_history","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/database/rows/table/{table_id}/{row_id}/history/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"row_id","or":"row_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"table_id","or":"table_id","r":true,"t":"`$INTEGER`","index$":1}],"query":[{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/database/rows/table/{table_id}/{row_id}/history/","q":{"exist":["row_id","table_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"rows"},{"lit":"table"},{"var":"table_id"},{"var":"row_id"},{"lit":"history"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.table"]]},"key$":"row_history","name__orig":"row_history","Name":"RowHistory","name_":"row_history","name-":"row-history","NAME":"ROW_HISTORY","index$":136}, {"active":true,"entity":"row_history","key$":"BasicRowHistoryFlow","kind":"basic","name":"BasicRowHistoryFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"row_id":"row01","table_id":"table01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"row_history_ref01"}}]}]}, 'RowHistory', {"GET /api/database/rows/table/{table_id}/{row_id}/history/":{"protocol":"http","parameters":[{"in":"query","name":"limit","schema":{"type":"integer"},"description":"The maximum number of row change history entries to return.","index$":0},{"in":"query","name":"offset","schema":{"type":"integer"},"description":"The offset of the row change history entries to return.","index$":1},{"in":"path","name":"row_id","schema":{"type":"integer"},"description":"The id of the row to fetch the change history from.","required":true,"index$":2},{"in":"path","name":"table_id","schema":{"type":"integer"},"description":"The id of the table to fetch the row change history from.","required":true,"index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let row_history_ref01_data = Object.values(setup.data.existing.row_history)[0] as any

    // LIST
    const row_history_ref01_ent = client.RowHistory()
    const row_history_ref01_match: any = {}
    row_history_ref01_match['row_id'] = setup.idmap['row01']
    row_history_ref01_match['table_id'] = setup.idmap['table01']

    const row_history_ref01_list = (await row_history_ref01_ent.list(row_history_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/row_history/RowHistoryTestData.json')

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
    ['row_history01','row_history02','row_history03','table01','table02','table03','row01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_ROW_HISTORY_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_ROW_HISTORY_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_ROW_HISTORY_ENTID']
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
  
