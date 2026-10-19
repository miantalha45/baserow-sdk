

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


describe('ExampleRowEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.ExampleRow()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ExampleRow().load({"form_id":1,"row_token":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'example_row.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"field_1":{"a":true,"h":"Field 1","n":"field_1","r":false,"sh":"This field represents the `text` field.","t":"`$STRING`","key$":"field_1","index$":0},"field_10":{"a":true,"h":"Field 10","n":"field_10","r":false,"sh":"This field represents the `last_modified_by` field.","t":"`$ANY`","key$":"field_10","index$":1},"field_11":{"a":true,"fo":"date-time","h":"Field 11","n":"field_11","r":false,"sh":"This field represents the `created_on` field.","t":"`$STRING`","key$":"field_11","index$":2},"field_12":{"a":true,"h":"Field 12","n":"field_12","r":false,"sh":"This field represents the `created_by` field.","t":"`$ANY`","key$":"field_12","index$":3},"field_13":{"a":true,"fo":"float","h":"Field 13","n":"field_13","r":false,"sh":"This field represents the `duration` field.","t":"`$NUMBER`","key$":"field_13","index$":4},"field_14":{"a":true,"h":"Field 14","n":"field_14","r":false,"sh":"This field represents the `link_row` field.","t":"`$ARRAY`","key$":"field_14","index$":5},"field_15":{"a":true,"h":"Field 15","n":"field_15","r":false,"sh":"This field represents the `file` field.","t":"`$ARRAY`","key$":"field_15","index$":6},"field_16":{"a":true,"h":"Field 16","n":"field_16","r":false,"sh":"This field represents the `single_select` field.","t":"`$ANY`","key$":"field_16","index$":7},"field_17":{"a":true,"h":"Field 17","n":"field_17","r":false,"sh":"This field represents the `multiple_select` field.","t":"`$ARRAY`","key$":"field_17","index$":8},"field_18":{"a":true,"h":"Field 18","n":"field_18","r":false,"sh":"This field represents the `phone_number` field.","t":"`$STRING`","key$":"field_18","index$":9},"field_19":{"a":true,"h":"Field 19","n":"field_19","r":false,"sh":"This field represents the `formula` field.","t":"`$STRING`","key$":"field_19","index$":10},"field_2":{"a":true,"h":"Field 2","n":"field_2","r":false,"sh":"This field represents the `long_text` field.","t":"`$STRING`","key$":"field_2","index$":11},"field_20":{"a":true,"h":"Field 20","n":"field_20","r":false,"sh":"This field represents the `count` field.","t":"`$STRING`","key$":"field_20","index$":12},"field_21":{"a":true,"h":"Field 21","n":"field_21","r":false,"sh":"This field represents the `rollup` field.","t":"`$STRING`","key$":"field_21","index$":13},"field_22":{"a":true,"h":"Field 22","n":"field_22","r":false,"sh":"This field represents the `lookup` field.","t":"`$STRING`","key$":"field_22","index$":14},"field_23":{"a":true,"h":"Field 23","n":"field_23","r":false,"sh":"This field represents the `multiple_collaborators` field.","t":"`$ARRAY`","key$":"field_23","index$":15},"field_24":{"a":true,"fo":"uuid","h":"Field 24","n":"field_24","r":false,"sh":"This field represents the `uuid` field.","t":"`$STRING`","key$":"field_24","index$":16},"field_25":{"a":true,"h":"Field 25","n":"field_25","r":false,"sh":"This field represents the `autonumber` field.","t":"`$INTEGER`","key$":"field_25","index$":17},"field_26":{"a":true,"h":"Field 26","n":"field_26","r":false,"sh":"This field represents the `password` field.","t":"`$BOOLEAN`","key$":"field_26","index$":18},"field_27":{"a":true,"h":"Field 27","n":"field_27","r":true,"ro":true,"sh":"This field represents the `form_view_edit_row` field.","t":"`$STRING`","key$":"field_27","index$":19},"field_28":{"a":true,"h":"Field 28","n":"field_28","r":false,"sh":"This field represents the `button` field.","t":"`$STRING`","key$":"field_28","index$":20},"field_29":{"a":true,"h":"Field 29","n":"field_29","r":false,"sh":"This field represents the `ai` field.","t":"`$STRING`","key$":"field_29","index$":21},"field_3":{"a":true,"h":"Field 3","n":"field_3","r":false,"sh":"This field represents the `url` field.","t":"`$STRING`","key$":"field_3","index$":22},"field_4":{"a":true,"h":"Field 4","n":"field_4","r":false,"sh":"This field represents the `email` field.","t":"`$STRING`","key$":"field_4","index$":23},"field_5":{"a":true,"fo":"decimal","h":"Field 5","n":"field_5","r":false,"sh":"This field represents the `number` field.","t":"`$STRING`","key$":"field_5","index$":24},"field_6":{"a":true,"h":"Field 6","n":"field_6","r":false,"sh":"This field represents the `rating` field.","t":"`$INTEGER`","key$":"field_6","index$":25},"field_7":{"a":true,"h":"Field 7","n":"field_7","r":false,"sh":"This field represents the `boolean` field.","t":"`$BOOLEAN`","key$":"field_7","index$":26},"field_8":{"a":true,"fo":"date","h":"Field 8","n":"field_8","r":false,"sh":"This field represents the `date` field.","t":"`$STRING`","key$":"field_8","index$":27},"field_9":{"a":true,"fo":"date-time","h":"Field 9","n":"field_9","r":false,"sh":"This field represents the `last_modified` field.","t":"`$STRING`","key$":"field_9","index$":28},"field_ids":{"a":true,"h":"Field Ids","n":"field_ids","r":false,"sh":"Only the fields related to the provided ids are added to the response.","t":"`$ARRAY`","key$":"field_ids","index$":29},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the row in the table.","t":"`$INTEGER`","key$":"id","index$":30},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Additional metadata for the row, if `include=metadata' is provided as query parameter.","t":"`$ANY`","key$":"metadata","index$":31},"order":{"a":true,"fo":"decimal","h":"Order","n":"order","r":false,"sh":"Indicates the position of the row, lowest first and highest last.","t":"`$STRING`","key$":"order","index$":32},"row_ids":{"a":true,"h":"Row Ids","n":"row_ids","r":true,"sh":"Only rows related to the provided ids are added to the response.","t":"`$ARRAY`","key$":"row_ids","index$":33}},"id":{"field":"id","name":"id"},"name":"example_row","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["field_ids","row_ids"],"co":{"id":"POST /api/database/views/grid/{view_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"view_id","or":"view_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/database/views/grid/{view_id}/","q":{"exist":["view_id"]},"r":{},"rb":{"alternatives":[{"fields":[{"list":true,"name":"field_ids"},{"list":true,"name":"row_ids"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"list":true,"name":"field_ids"},{"list":true,"name":"row_ids"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"lit":"grid"},{"var":"view_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/database/views/form/{slug}/edit-row/{row_token}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"form_id","or":"slug","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"row_token","or":"row_token","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/database/views/form/{slug}/edit-row/{row_token}/","q":{"exist":["form_id","row_token"]},"r":{"param":{"slug":"form_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"lit":"form"},{"var":"form_id"},{"lit":"edit-row"},{"var":"row_token"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"example_row","name__orig":"example_row","Name":"ExampleRow","name_":"example_row","name-":"example-row","NAME":"EXAMPLE_ROW","index$":75}, {"active":true,"entity":"example_row","key$":"BasicExampleRowFlow","kind":"basic","name":"BasicExampleRowFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"example_row_ref01"},"m":{"form_id":"form01","view_id":"view01"},"o":"create","s":[],"v":[]},{"a":false,"d":{},"i":{"ref":"example_row_ref01","srcdatavar":"example_row_ref01_data","suffix":"_dt0"},"m":{"form_id":"form01","id":"example_row01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-example_row_ref01"}}],"unreachable":true}]}, 'ExampleRow', {"POST /api/database/views/grid/{view_id}/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"field_ids":{"type":"array","items":{"type":"integer"},"description":"Only the fields related to the provided ids are added to the response. If None are provided all fields will be returned.","key$":"field_ids"},"row_ids":{"type":"array","items":{"type":"integer"},"description":"Only rows related to the provided ids are added to the response.","key$":"row_ids"}},"required":["row_ids"],"x-ref":"#/components/schemas/GridViewFilter","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"field_ids":{"type":"array","items":{"type":"integer"},"description":"Only the fields related to the provided ids are added to the response. If None are provided all fields will be returned.","key$":"field_ids"},"row_ids":{"type":"array","items":{"type":"integer"},"description":"Only rows related to the provided ids are added to the response.","key$":"row_ids"}},"required":["row_ids"],"x-ref":"#/components/schemas/GridViewFilter"}},"multipart/form-data":{"schema":{"type":"object","properties":{"field_ids":{"type":"array","items":{"type":"integer"},"description":"Only the fields related to the provided ids are added to the response. If None are provided all fields will be returned.","key$":"field_ids"},"row_ids":{"type":"array","items":{"type":"integer"},"description":"Only rows related to the provided ids are added to the response.","key$":"row_ids"}},"required":["row_ids"],"x-ref":"#/components/schemas/GridViewFilter"}}},"required":true},"parameters":[{"in":"path","name":"view_id","schema":{"type":"integer"},"description":"Returns only rows that belong to the related view's table.","required":true,"index$":0}]},"GET /api/database/views/form/{slug}/edit-row/{row_token}/":{"protocol":"http","parameters":[{"in":"path","name":"row_token","schema":{"type":"string"},"description":"The signed edit token that identifies the row to edit.","required":true,"index$":0},{"in":"path","name":"slug","schema":{"type":"string"},"description":"The slug of the form view.","required":true,"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const example_row_ref01_ent = client.ExampleRow()
    let example_row_ref01_data = setup.data.new.example_row['example_row_ref01']
    example_row_ref01_data['form_id'] = setup.idmap['form01']
    example_row_ref01_data['view_id'] = setup.idmap['view01']

    example_row_ref01_data = (await example_row_ref01_ent.create(example_row_ref01_data)).data()
    assert(null != example_row_ref01_data.id)


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
      '../../../../.sdk/test/entity/example_row/ExampleRowTestData.json')

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
    ['example_row01','example_row02','example_row03','form01','view01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_EXAMPLE_ROW_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_EXAMPLE_ROW_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_EXAMPLE_ROW_ENTID']
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
  
