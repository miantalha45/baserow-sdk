

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


describe('FieldFieldEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.FieldField()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.FieldField().load({"table_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'field_field.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"new_primary_field_id":{"a":true,"h":"New Primary Field Id","n":"new_primary_field_id","r":true,"sh":"The ID of the new primary field.","t":"`$INTEGER`","key$":"new_primary_field_id","index$":0}},"name":"field_field","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["new_primary_field_id"],"co":{"id":"POST /api/database/fields/table/{table_id}/change-primary-field/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"client_undo_redo_action_group_id","or":"ClientUndoRedoActionGroupId","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"k":"param","n":"table_id","or":"table_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/database/fields/table/{table_id}/change-primary-field/","q":{"exist":["table_id"]},"r":{},"rb":{"alternatives":[{"fields":[{"name":"new_primary_field_id"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"new_primary_field_id"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"fields"},{"lit":"table"},{"var":"table_id"},{"lit":"change-primary-field"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/database/fields/table/{table_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"table_id","or":"table_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/database/fields/table/{table_id}/","q":{"exist":["table_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"fields"},{"lit":"table"},{"var":"table_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.table"]]},"key$":"field_field","name__orig":"field_field","Name":"FieldField","name_":"field_field","name-":"field-field","NAME":"FIELD_FIELD","index$":80}, {"active":true,"entity":"field_field","key$":"BasicFieldFieldFlow","kind":"basic","name":"BasicFieldFieldFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"field_field_ref01"},"m":{"table_id":"table01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{"ref":"field_field_ref01","srcdatavar":"field_field_ref01_data","suffix":"_dt0"},"m":{"id":"field_field01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-field_field_ref01"}}]}]}, 'FieldField', {"POST /api/database/fields/table/{table_id}/change-primary-field/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"new_primary_field_id":{"type":"integer","description":"The ID of the new primary field.","key$":"new_primary_field_id"}},"required":["new_primary_field_id"],"x-ref":"#/components/schemas/ChangePrimaryFieldParams","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"new_primary_field_id":{"type":"integer","description":"The ID of the new primary field.","key$":"new_primary_field_id"}},"required":["new_primary_field_id"],"x-ref":"#/components/schemas/ChangePrimaryFieldParams"}},"multipart/form-data":{"schema":{"type":"object","properties":{"new_primary_field_id":{"type":"integer","description":"The ID of the new primary field.","key$":"new_primary_field_id"}},"required":["new_primary_field_id"],"x-ref":"#/components/schemas/ChangePrimaryFieldParams"}}},"required":true},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"header","name":"ClientUndoRedoActionGroupId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.","index$":1},{"in":"path","name":"table_id","schema":{"type":"integer"},"description":"The table where to update the primary field in.","required":true,"index$":2}]},"GET /api/database/fields/table/{table_id}/":{"protocol":"http","parameters":[{"in":"path","name":"table_id","schema":{"type":"integer"},"description":"Returns only the fields of the table related to the provided value.","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const field_field_ref01_ent = client.FieldField()
    let field_field_ref01_data = setup.data.new.field_field['field_field_ref01']
    field_field_ref01_data['table_id'] = setup.idmap['table01']

    field_field_ref01_data = (await field_field_ref01_ent.create(field_field_ref01_data)).data()
    assert(null != field_field_ref01_data)



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
      '../../../../.sdk/test/entity/field_field/FieldFieldTestData.json')

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
    ['field_field01','field_field02','field_field03','table01','table02','table03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_FIELD_FIELD_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_FIELD_FIELD_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_FIELD_FIELD_ENTID']
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
  
