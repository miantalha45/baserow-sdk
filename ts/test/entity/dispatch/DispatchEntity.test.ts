

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


describe('DispatchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.Dispatch()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Dispatch().create({"field_id":"x","row_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dispatch.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"client_actions":{"a":true,"h":"Client Actions","n":"client_actions","r":true,"ro":true,"sh":"Actions the browser runs itself, in order, after the server actions have completed.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":12},"key$":"client_actions","index$":0},"results":{"a":true,"h":"Results","n":"results","r":true,"t":"`$ARRAY`","key$":"results","index$":1},"row_id":{"a":true,"h":"Row Id","n":"row_id","r":true,"sh":"The id of the row the button was clicked on.","t":"`$INTEGER`","key$":"row_id","index$":2}},"name":"dispatch","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["row_id"],"co":{"id":"POST /api/database/field/{field_id}/workflow_actions/dispatch/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"field_id","or":"field_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/database/field/{field_id}/workflow_actions/dispatch/","q":{"exist":["field_id"]},"r":{},"rb":{"alternatives":[{"fields":[{"name":"row_id"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"row_id"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"field"},{"var":"field_id"},{"lit":"workflow_actions"},{"lit":"dispatch"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.field"]]},"key$":"dispatch","name__orig":"dispatch","Name":"Dispatch","name_":"dispatch","name-":"dispatch","NAME":"DISPATCH","index$":66}, {"active":true,"entity":"dispatch","key$":"BasicDispatchFlow","kind":"basic","name":"BasicDispatchFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"dispatch_ref01"},"m":{"field_id":"field01"},"o":"create","s":[],"v":[]}]}, 'Dispatch', {"POST /api/database/field/{field_id}/workflow_actions/dispatch/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"row_id":{"type":"integer","description":"The id of the row the button was clicked on.","key$":"row_id"}},"required":["row_id"],"x-ref":"#/components/schemas/DispatchWorkflowActions","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"row_id":{"type":"integer","description":"The id of the row the button was clicked on.","key$":"row_id"}},"required":["row_id"],"x-ref":"#/components/schemas/DispatchWorkflowActions"}},"multipart/form-data":{"schema":{"type":"object","properties":{"row_id":{"type":"integer","description":"The id of the row the button was clicked on.","key$":"row_id"}},"required":["row_id"],"x-ref":"#/components/schemas/DispatchWorkflowActions"}}},"required":true},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"field_id","schema":{"type":"integer"},"description":"Runs the button field's actions, in order, for the provided row.","required":true,"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const dispatch_ref01_ent = client.Dispatch()
    let dispatch_ref01_data = setup.data.new.dispatch['dispatch_ref01']
    dispatch_ref01_data['field_id'] = setup.idmap['field01']

    dispatch_ref01_data = (await dispatch_ref01_ent.create(dispatch_ref01_data)).data()
    assert(null != dispatch_ref01_data)


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
      '../../../../.sdk/test/entity/dispatch/DispatchTestData.json')

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
    ['dispatch01','dispatch02','dispatch03','field01','field02','field03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_DISPATCH_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_DISPATCH_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_DISPATCH_ENTID']
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
  
