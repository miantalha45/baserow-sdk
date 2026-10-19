

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


describe('ViewDefaultValueEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.ViewDefaultValue()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ViewDefaultValue().update({"id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'view_default_value.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"view_default_values":{"a":true,"h":"View Default Values","n":"view_default_values","r":false,"t":"`$ARRAY`","key$":"view_default_values","index$":1}},"id":{"field":"id","name":"id"},"name":"view_default_value","op":{"update":{"input":"data","name":"update","points":[{"a":true,"bf":["view_default_values"],"co":{"id":"PATCH /api/database/views/{view_id}/default-values/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"view_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/database/views/{view_id}/default-values/","q":{"exist":["id","view_default_values"]},"r":{"param":{"view_id":"id"}},"rb":{"alternatives":[{"kind":"multipart","media":"multipart/form-data"},{"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"var":"id"},{"lit":"default-values"}],"t":{"req":"`reqdata.view_default_values`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"view_default_value","name__orig":"view_default_value","Name":"ViewDefaultValue","name_":"view_default_value","name-":"view-default-value","NAME":"VIEW_DEFAULT_VALUE","index$":161}, {"active":true,"entity":"view_default_value","key$":"BasicViewDefaultValueFlow","kind":"basic","name":"BasicViewDefaultValueFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"view_default_value_ref01","srcdatavar":"view_default_value_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-view_default_value_ref01"}}],"v":[]}]}, 'ViewDefaultValue', {"PATCH /api/database/views/{view_id}/default-values/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"integer","readOnly":true},"field":{"type":"integer"},"enabled":{"type":"boolean","default":true,"description":"Whether this default value is active."},"value":{"nullable":true,"description":"The raw default value in API request format."},"field_type":{"type":"string","readOnly":true,"nullable":true,"description":"The field type identifier at the time the value was stored. Used to detect incompatibility when the field type changes."},"function":{"type":"string","nullable":true,"description":"Optional function name (e.g. 'now') to resolve the default value dynamically at row creation time instead of using the stored value.","maxLength":64}},"required":["field","field_type","id"],"x-ref":"#/components/schemas/ViewDefaultValue"},"index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"integer","readOnly":true},"field":{"type":"integer"},"enabled":{"type":"boolean","default":true,"description":"Whether this default value is active."},"value":{"nullable":true,"description":"The raw default value in API request format."},"field_type":{"type":"string","readOnly":true,"nullable":true,"description":"The field type identifier at the time the value was stored. Used to detect incompatibility when the field type changes."},"function":{"type":"string","nullable":true,"description":"Optional function name (e.g. 'now') to resolve the default value dynamically at row creation time instead of using the stored value.","maxLength":64}},"required":["field","field_type","id"],"x-ref":"#/components/schemas/ViewDefaultValue"}}},"multipart/form-data":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"integer","readOnly":true},"field":{"type":"integer"},"enabled":{"type":"boolean","default":true,"description":"Whether this default value is active."},"value":{"nullable":true,"description":"The raw default value in API request format."},"field_type":{"type":"string","readOnly":true,"nullable":true,"description":"The field type identifier at the time the value was stored. Used to detect incompatibility when the field type changes."},"function":{"type":"string","nullable":true,"description":"Optional function name (e.g. 'now') to resolve the default value dynamically at row creation time instead of using the stored value.","maxLength":64}},"required":["field","field_type","id"],"x-ref":"#/components/schemas/ViewDefaultValue"}}}},"required":true},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"view_id","schema":{"type":"integer"},"description":"Updates the default row values for the view with the given id.","required":true,"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let view_default_value_ref01_data = Object.values(setup.data.existing.view_default_value)[0] as any

    // UPDATE
    const view_default_value_ref01_ent = client.ViewDefaultValue()
    const view_default_value_ref01_data_up0: any = {}
    view_default_value_ref01_data_up0.id = view_default_value_ref01_data.id

    const view_default_value_ref01_resdata_up0 = (await view_default_value_ref01_ent.update(view_default_value_ref01_data_up0)).data()
    assert(view_default_value_ref01_resdata_up0.id === view_default_value_ref01_data_up0.id)


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
      '../../../../.sdk/test/entity/view_default_value/ViewDefaultValueTestData.json')

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
    ['view_default_value01','view_default_value02','view_default_value03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_VIEW_DEFAULT_VALUE_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_VIEW_DEFAULT_VALUE_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_VIEW_DEFAULT_VALUE_ENTID']
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
  
