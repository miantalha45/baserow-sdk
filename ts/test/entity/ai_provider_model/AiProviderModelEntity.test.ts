

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


describe('AiProviderModelEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.AiProviderModel()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AiProviderModel().create({"id":"x","model_identifier":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ai_provider_model.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"feature_types":{"a":true,"h":"Feature Types","n":"feature_types","r":false,"sh":"The AI features allowed to select this model.","t":"`$ARRAY`","key$":"feature_types","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":1},"is_enabled":{"a":true,"h":"Is Enabled","n":"is_enabled","r":false,"t":"`$BOOLEAN`","key$":"is_enabled","index$":2},"last_test_at":{"a":true,"fo":"date-time","h":"Last Test At","n":"last_test_at","r":true,"ro":true,"t":"`$STRING`","key$":"last_test_at","index$":3},"last_test_error":{"a":true,"h":"Last Test Error","n":"last_test_error","r":true,"ro":true,"t":"`$STRING`","key$":"last_test_error","index$":4},"last_test_feature_results":{"a":true,"h":"Last Test Feature Results","n":"last_test_feature_results","r":true,"ro":true,"t":"`$ARRAY`","key$":"last_test_feature_results","index$":5},"last_test_status":{"a":true,"h":"Last Test Status","n":"last_test_status","r":true,"ro":true,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"last_test_status","index$":6},"model_identifier":{"a":true,"h":"Model Identifier","n":"model_identifier","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"model_identifier","index$":7}},"id":{"field":"id","name":"id"},"name":"ai_provider_model","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["feature_types","is_enabled","model_identifier"],"co":{"id":"POST /api/ai-providers/{provider_id}/models/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"provider_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"k":"query","n":"workspace_id","or":"workspace_id","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/ai-providers/{provider_id}/models/","q":{"exist":["id"]},"r":{"param":{"provider_id":"id"}},"rb":{"alternatives":[{"fields":[{"list":true,"name":"feature_types"},{"name":"is_enabled"},{"name":"model_identifier"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"list":true,"name":"feature_types"},{"name":"is_enabled"},{"name":"model_identifier"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"ai-providers"},{"var":"id"},{"lit":"models"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["feature_types","is_enabled","model_identifier"],"co":{"id":"PATCH /api/ai-providers/models/{model_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"model_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"k":"query","n":"workspace_id","or":"workspace_id","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/ai-providers/models/{model_id}/","q":{"exist":["id"]},"r":{"param":{"model_id":"id"}},"rb":{"alternatives":[{"fields":[{"list":true,"name":"feature_types"},{"name":"is_enabled"},{"name":"model_identifier"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"list":true,"name":"feature_types"},{"name":"is_enabled"},{"name":"model_identifier"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"ai-providers"},{"lit":"models"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"ai_provider_model","name__orig":"ai_provider_model","Name":"AiProviderModel","name_":"ai_provider_model","name-":"ai-provider-model","NAME":"AI_PROVIDER_MODEL","index$":11}, {"active":true,"entity":"ai_provider_model","key$":"BasicAiProviderModelFlow","kind":"basic","name":"BasicAiProviderModelFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"ai_provider_model_ref01"},"m":{"provider_id":"provider01"},"o":"create","s":[],"v":[],"unreachable":true},{"a":true,"d":{},"i":{"ref":"ai_provider_model_ref01","srcdatavar":"ai_provider_model_ref01_data","suffix":"_up0","textfield":"model_identifier"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ai_provider_model_ref01"}}],"v":[]}]}, 'AiProviderModel', {"POST /api/ai-providers/{provider_id}/models/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"model_identifier":{"type":"string","maxLength":255,"key$":"model_identifier"},"is_enabled":{"type":"boolean","default":true,"key$":"is_enabled"},"feature_types":{"type":"array","items":{"type":"string","maxLength":64},"key$":"feature_types"}},"required":["model_identifier"],"x-ref":"#/components/schemas/AIProviderModelWrite","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"model_identifier":{"type":"string","maxLength":255,"key$":"model_identifier"},"is_enabled":{"type":"boolean","default":true,"key$":"is_enabled"},"feature_types":{"type":"array","items":{"type":"string","maxLength":64},"key$":"feature_types"}},"required":["model_identifier"],"x-ref":"#/components/schemas/AIProviderModelWrite"}},"multipart/form-data":{"schema":{"type":"object","properties":{"model_identifier":{"type":"string","maxLength":255,"key$":"model_identifier"},"is_enabled":{"type":"boolean","default":true,"key$":"is_enabled"},"feature_types":{"type":"array","items":{"type":"string","maxLength":64},"key$":"feature_types"}},"required":["model_identifier"],"x-ref":"#/components/schemas/AIProviderModelWrite"}}},"required":true},"parameters":[{"in":"path","name":"provider_id","schema":{"type":"integer"},"required":true,"index$":0},{"in":"query","name":"workspace_id","schema":{"type":"integer","minimum":1},"index$":1}]},"PATCH /api/ai-providers/models/{model_id}/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"model_identifier":{"type":"string","maxLength":255,"key$":"model_identifier"},"is_enabled":{"type":"boolean","key$":"is_enabled"},"feature_types":{"type":"array","items":{"type":"string","maxLength":64},"key$":"feature_types"}},"x-ref":"#/components/schemas/PatchedAIProviderModelUpdate","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"model_identifier":{"type":"string","maxLength":255,"key$":"model_identifier"},"is_enabled":{"type":"boolean","key$":"is_enabled"},"feature_types":{"type":"array","items":{"type":"string","maxLength":64},"key$":"feature_types"}},"x-ref":"#/components/schemas/PatchedAIProviderModelUpdate"}},"multipart/form-data":{"schema":{"type":"object","properties":{"model_identifier":{"type":"string","maxLength":255,"key$":"model_identifier"},"is_enabled":{"type":"boolean","key$":"is_enabled"},"feature_types":{"type":"array","items":{"type":"string","maxLength":64},"key$":"feature_types"}},"x-ref":"#/components/schemas/PatchedAIProviderModelUpdate"}}}},"parameters":[{"in":"path","name":"model_id","schema":{"type":"integer"},"required":true,"index$":0},{"in":"query","name":"workspace_id","schema":{"type":"integer","minimum":1},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ai_provider_model_ref01_data = Object.values(setup.data.existing.ai_provider_model)[0] as any

    // UPDATE
    const ai_provider_model_ref01_ent = client.AiProviderModel()
    const ai_provider_model_ref01_data_up0: any = {}
    ai_provider_model_ref01_data_up0.id = ai_provider_model_ref01_data.id

    const ai_provider_model_ref01_markdef_up0 = { name: 'model_identifier', value: 'Mark01-ai_provider_model_ref01_' + setup.now }
    ;(ai_provider_model_ref01_data_up0 as any)[ai_provider_model_ref01_markdef_up0.name] = ai_provider_model_ref01_markdef_up0.value

    const ai_provider_model_ref01_resdata_up0 = (await ai_provider_model_ref01_ent.update(ai_provider_model_ref01_data_up0)).data()
    assert(ai_provider_model_ref01_resdata_up0.id === ai_provider_model_ref01_data_up0.id)

    assert((ai_provider_model_ref01_resdata_up0 as any)[ai_provider_model_ref01_markdef_up0.name] === ai_provider_model_ref01_markdef_up0.value)


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
      '../../../../.sdk/test/entity/ai_provider_model/AiProviderModelTestData.json')

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
    ['ai_provider_model01','ai_provider_model02','ai_provider_model03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_AI_PROVIDER_MODEL_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_AI_PROVIDER_MODEL_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_AI_PROVIDER_MODEL_ENTID']
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
  
