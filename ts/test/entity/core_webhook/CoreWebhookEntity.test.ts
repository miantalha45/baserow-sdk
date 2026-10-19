

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


describe('CoreWebhookEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.CoreWebhook()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CoreWebhook().load({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'core_webhook.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"core_webhook","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/webhooks/{webhook_uid}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"webhook_uid","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/webhooks/{webhook_uid}/","q":{"exist":["id"]},"r":{"param":{"webhook_uid":"id"}},"s":[{"lit":"api"},{"lit":"webhooks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/webhooks/{webhook_uid}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"webhook_uid","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/webhooks/{webhook_uid}/","q":{"exist":["id"]},"r":{"param":{"webhook_uid":"id"}},"s":[{"lit":"api"},{"lit":"webhooks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"a":true,"co":{"id":"PATCH /api/webhooks/{webhook_uid}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"webhook_uid","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/api/webhooks/{webhook_uid}/","q":{"exist":["id"]},"r":{"param":{"webhook_uid":"id"}},"s":[{"lit":"api"},{"lit":"webhooks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"patch"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/webhooks/{webhook_uid}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"webhook_uid","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/api/webhooks/{webhook_uid}/","q":{"exist":["id"]},"r":{"param":{"webhook_uid":"id"}},"s":[{"lit":"api"},{"lit":"webhooks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/webhooks/{webhook_uid}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"webhook_uid","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/api/webhooks/{webhook_uid}/","q":{"exist":["id"]},"r":{"param":{"webhook_uid":"id"}},"s":[{"lit":"api"},{"lit":"webhooks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"core_webhook","name__orig":"core_webhook","Name":"CoreWebhook","name_":"core_webhook","name-":"core-webhook","NAME":"CORE_WEBHOOK","index$":47}, {"active":true,"entity":"core_webhook","key$":"BasicCoreWebhookFlow","kind":"basic","name":"BasicCoreWebhookFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"core_webhook_ref01"},"m":{"webhook_uid":"webhook_uid01"},"o":"create","s":[],"v":[],"unreachable":true},{"a":true,"d":{},"i":{"ref":"core_webhook_ref01","srcdatavar":"core_webhook_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-core_webhook_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"core_webhook_ref01","srcdatavar":"core_webhook_ref01_data","suffix":"_dt0"},"m":{"id":"core_webhook01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-core_webhook_ref01"}}]},{"a":true,"d":{},"i":{"ref":"core_webhook_ref01","suffix":"_rm0"},"m":{"id":"core_webhook01"},"o":"remove","s":[],"v":[]}]}, 'CoreWebhook', {"POST /api/webhooks/{webhook_uid}/":{"protocol":"http","parameters":[{"in":"path","name":"webhook_uid","schema":{"type":"string","format":"uuid"},"required":true,"index$":0}]},"GET /api/webhooks/{webhook_uid}/":{"protocol":"http","parameters":[{"in":"path","name":"webhook_uid","schema":{"type":"string","format":"uuid"},"required":true,"index$":0}]},"PATCH /api/webhooks/{webhook_uid}/":{"protocol":"http","parameters":[{"in":"path","name":"webhook_uid","schema":{"type":"string","format":"uuid"},"required":true,"index$":0}]},"DELETE /api/webhooks/{webhook_uid}/":{"protocol":"http","parameters":[{"in":"path","name":"webhook_uid","schema":{"type":"string","format":"uuid"},"required":true,"index$":0}]},"PUT /api/webhooks/{webhook_uid}/":{"protocol":"http","parameters":[{"in":"path","name":"webhook_uid","schema":{"type":"string","format":"uuid"},"required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let core_webhook_ref01_data = Object.values(setup.data.existing.core_webhook)[0] as any

    // UPDATE
    const core_webhook_ref01_ent = client.CoreWebhook()
    const core_webhook_ref01_data_up0: any = {}
    core_webhook_ref01_data_up0.id = core_webhook_ref01_data.id

    const core_webhook_ref01_resdata_up0 = (await core_webhook_ref01_ent.update(core_webhook_ref01_data_up0)).data()
    assert(core_webhook_ref01_resdata_up0.id === core_webhook_ref01_data_up0.id)


    // LOAD
    const core_webhook_ref01_match_dt0: any = {}
    core_webhook_ref01_match_dt0.id = core_webhook_ref01_data.id
    const core_webhook_ref01_data_dt0 = (await core_webhook_ref01_ent.load(core_webhook_ref01_match_dt0)).data()
    assert(core_webhook_ref01_data_dt0.id === core_webhook_ref01_data.id)


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
      '../../../../.sdk/test/entity/core_webhook/CoreWebhookTestData.json')

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
    ['core_webhook01','core_webhook02','core_webhook03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_CORE_WEBHOOK_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_CORE_WEBHOOK_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_CORE_WEBHOOK_ENTID']
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
  
