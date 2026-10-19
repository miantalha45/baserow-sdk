

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


describe('AiProviderModelsTestEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.AiProviderModelsTest()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AiProviderModelsTest().create({"workspace_id":"x","model_ids":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ai_provider_models_test.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"model_ids":{"a":true,"h":"Model Ids","n":"model_ids","r":true,"t":"`$ARRAY`","key$":"model_ids","index$":0},"results":{"a":true,"h":"Results","n":"results","r":true,"t":"`$ARRAY`","key$":"results","index$":1}},"name":"ai_provider_models_test","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["model_ids"],"co":{"id":"POST /api/ai-providers/models/test/","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"workspace_id","or":"workspace_id","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/ai-providers/models/test/","q":{},"r":{},"rb":{"alternatives":[{"fields":[{"list":true,"name":"model_ids"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"list":true,"name":"model_ids"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"ai-providers"},{"lit":"models"},{"lit":"test"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"ai_provider_models_test","name__orig":"ai_provider_models_test","Name":"AiProviderModelsTest","name_":"ai_provider_models_test","name-":"ai-provider-models-test","NAME":"AI_PROVIDER_MODELS_TEST","index$":14}, {"active":true,"entity":"ai_provider_models_test","key$":"BasicAiProviderModelsTestFlow","kind":"basic","name":"BasicAiProviderModelsTestFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ai_provider_models_test_ref01"},"m":{},"o":"create","s":[],"v":[]}]}, 'AiProviderModelsTest', {"POST /api/ai-providers/models/test/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"model_ids":{"type":"array","items":{"type":"integer","minimum":1},"key$":"model_ids"}},"required":["model_ids"],"x-ref":"#/components/schemas/AIProviderModelsTestRequest","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"model_ids":{"type":"array","items":{"type":"integer","minimum":1},"key$":"model_ids"}},"required":["model_ids"],"x-ref":"#/components/schemas/AIProviderModelsTestRequest"}},"multipart/form-data":{"schema":{"type":"object","properties":{"model_ids":{"type":"array","items":{"type":"integer","minimum":1},"key$":"model_ids"}},"required":["model_ids"],"x-ref":"#/components/schemas/AIProviderModelsTestRequest"}}},"required":true},"parameters":[{"in":"query","name":"workspace_id","schema":{"type":"integer","minimum":1},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const ai_provider_models_test_ref01_ent = client.AiProviderModelsTest()
    let ai_provider_models_test_ref01_data = setup.data.new.ai_provider_models_test['ai_provider_models_test_ref01']

    ai_provider_models_test_ref01_data = (await ai_provider_models_test_ref01_ent.create(ai_provider_models_test_ref01_data)).data()
    assert(null != ai_provider_models_test_ref01_data)


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
      '../../../../.sdk/test/entity/ai_provider_models_test/AiProviderModelsTestTestData.json')

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
    ['ai_provider_models_test01','ai_provider_models_test02','ai_provider_models_test03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_AI_PROVIDER_MODELS_TEST_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_AI_PROVIDER_MODELS_TEST_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_AI_PROVIDER_MODELS_TEST_ENTID']
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
  
