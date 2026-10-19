

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


describe('AiProviderModelUsageEntryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.AiProviderModelUsageEntry()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AiProviderModelUsageEntry().list({"model_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ai_provider_model_usage_entry.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"count":{"a":true,"h":"Count","n":"count","r":true,"t":"`$INTEGER`","key$":"count","index$":0},"feature_type":{"a":true,"h":"Feature Type","n":"feature_type","r":true,"t":"`$STRING`","key$":"feature_type","index$":1}},"name":"ai_provider_model_usage_entry","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/ai-providers/models/{model_id}/usage/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"model_id","or":"model_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"k":"query","n":"workspace_id","or":"workspace_id","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/ai-providers/models/{model_id}/usage/","q":{"exist":["model_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"ai-providers"},{"lit":"models"},{"var":"model_id"},{"lit":"usage"}],"t":{"req":"`reqdata`","res":"`body.usage`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"ai_provider_model_usage_entry","name__orig":"ai_provider_model_usage_entry","Name":"AiProviderModelUsageEntry","name_":"ai_provider_model_usage_entry","name-":"ai-provider-model-usage-entry","NAME":"AI_PROVIDER_MODEL_USAGE_ENTRY","index$":13}, {"active":true,"entity":"ai_provider_model_usage_entry","key$":"BasicAiProviderModelUsageEntryFlow","kind":"basic","name":"BasicAiProviderModelUsageEntryFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"model_id":"model01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"ai_provider_model_usage_entry_ref01"}}]}]}, 'AiProviderModelUsageEntry', {"GET /api/ai-providers/models/{model_id}/usage/":{"protocol":"http","parameters":[{"in":"path","name":"model_id","schema":{"type":"integer"},"required":true,"index$":0},{"in":"query","name":"workspace_id","schema":{"type":"integer","minimum":1},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ai_provider_model_usage_entry_ref01_data = Object.values(setup.data.existing.ai_provider_model_usage_entry)[0] as any

    // LIST
    const ai_provider_model_usage_entry_ref01_ent = client.AiProviderModelUsageEntry()
    const ai_provider_model_usage_entry_ref01_match: any = {}
    ai_provider_model_usage_entry_ref01_match['model_id'] = setup.idmap['model01']

    const ai_provider_model_usage_entry_ref01_list = (await ai_provider_model_usage_entry_ref01_ent.list(ai_provider_model_usage_entry_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/ai_provider_model_usage_entry/AiProviderModelUsageEntryTestData.json')

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
    ['ai_provider_model_usage_entry01','ai_provider_model_usage_entry02','ai_provider_model_usage_entry03','model01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_AI_PROVIDER_MODEL_USAGE_ENTRY_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_AI_PROVIDER_MODEL_USAGE_ENTRY_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_AI_PROVIDER_MODEL_USAGE_ENTRY_ENTID']
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
  
