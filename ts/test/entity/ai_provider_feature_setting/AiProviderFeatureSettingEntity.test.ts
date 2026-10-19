

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


describe('AiProviderFeatureSettingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.AiProviderFeatureSetting()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('ai_provider_feature_setting hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of BaserowSDK.test(offline).AiProviderFeatureSetting().stream('list')) { }
    }, /offline/)

    for await (const _item of BaserowSDK.test(offline).AiProviderFeatureSetting()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = BaserowSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.AiProviderFeatureSetting().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of BaserowSDK.test().AiProviderFeatureSetting().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new BaserowSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.AiProviderFeatureSetting().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.AiProviderFeatureSetting().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AiProviderFeatureSetting().list({"workspace_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ai_provider_feature_setting.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"feature_type":{"a":true,"h":"Feature Type","n":"feature_type","r":true,"t":"`$STRING`","key$":"feature_type","index$":0},"inherited_model":{"a":true,"h":"Inherited Model","n":"inherited_model","r":true,"t":"`$ANY`","key$":"inherited_model","index$":1},"inherited_state":{"a":true,"h":"Inherited State","n":"inherited_state","r":true,"sh":"The state of the instance selection this workspace inherits, or null at instance scope.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"inherited_state","index$":2},"mode":{"a":true,"h":"Mode","n":"mode","r":true,"sh":"* `inherit` - inherit * `legacy` - legacy * `model` - model * `disabled` - disabled","t":"`$STRING`","key$":"mode","index$":3},"model":{"a":true,"h":"Model","n":"model","r":true,"t":"`$ANY`","key$":"model","index$":4},"model_id":{"a":true,"h":"Model Id","n":"model_id","r":false,"t":"`$INTEGER`","key$":"model_id","index$":5},"state":{"a":true,"h":"State","n":"state","r":true,"sh":"* `configured` - configured * `inherited` - inherited * `overridden` - overridden * `disabled` - disabled * `unconfigured` - unconfigured * `invalid` - invalid","t":"`$STRING`","key$":"state","index$":6}},"name":"ai_provider_feature_setting","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/ai-providers/features/","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"workspace_id","or":"workspace_id","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/ai-providers/features/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"ai-providers"},{"lit":"features"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["mode","model_id"],"co":{"id":"PUT /api/ai-providers/features/{feature_type}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"feature_type","or":"feature_type","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"workspace_id","or":"workspace_id","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PUT","o":"/api/ai-providers/features/{feature_type}/","q":{"exist":["feature_type"]},"r":{},"rb":{"alternatives":[{"fields":[{"name":"mode"},{"name":"model_id"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"mode"},{"name":"model_id"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"ai-providers"},{"lit":"features"},{"var":"feature_type"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"ai_provider_feature_setting","name__orig":"ai_provider_feature_setting","Name":"AiProviderFeatureSetting","name_":"ai_provider_feature_setting","name-":"ai-provider-feature-setting","NAME":"AI_PROVIDER_FEATURE_SETTING","index$":10}, {"active":true,"entity":"ai_provider_feature_setting","key$":"BasicAiProviderFeatureSettingFlow","kind":"basic","name":"BasicAiProviderFeatureSettingFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"ai_provider_feature_setting_ref01"}}]},{"a":false,"d":{},"i":{"ref":"ai_provider_feature_setting_ref01","srcdatavar":"ai_provider_feature_setting_ref01_data","suffix":"_up0","textfield":"mode"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ai_provider_feature_setting_ref01"}}],"v":[],"unreachable":true}]}, 'AiProviderFeatureSetting', {"GET /api/ai-providers/features/":{"protocol":"http","parameters":[{"in":"query","name":"workspace_id","schema":{"type":"integer","minimum":1},"index$":0}]},"PUT /api/ai-providers/features/{feature_type}/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"mode":{"enum":["inherit","legacy","model","disabled"],"type":"string","description":"* `inherit` - inherit\n* `legacy` - legacy\n* `model` - model\n* `disabled` - disabled","x-ref":"#/components/schemas/ModeDb5Enum","key$":"mode"},"model_id":{"type":"integer","minimum":1,"nullable":true,"key$":"model_id"}},"required":["mode"],"x-ref":"#/components/schemas/AIProviderFeatureSettingUpdate","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"mode":{"enum":["inherit","legacy","model","disabled"],"type":"string","description":"* `inherit` - inherit\n* `legacy` - legacy\n* `model` - model\n* `disabled` - disabled","x-ref":"#/components/schemas/ModeDb5Enum","key$":"mode"},"model_id":{"type":"integer","minimum":1,"nullable":true,"key$":"model_id"}},"required":["mode"],"x-ref":"#/components/schemas/AIProviderFeatureSettingUpdate"}},"multipart/form-data":{"schema":{"type":"object","properties":{"mode":{"enum":["inherit","legacy","model","disabled"],"type":"string","description":"* `inherit` - inherit\n* `legacy` - legacy\n* `model` - model\n* `disabled` - disabled","x-ref":"#/components/schemas/ModeDb5Enum","key$":"mode"},"model_id":{"type":"integer","minimum":1,"nullable":true,"key$":"model_id"}},"required":["mode"],"x-ref":"#/components/schemas/AIProviderFeatureSettingUpdate"}}},"required":true},"parameters":[{"in":"path","name":"feature_type","schema":{"type":"string"},"required":true,"index$":0},{"in":"query","name":"workspace_id","schema":{"type":"integer","minimum":1},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ai_provider_feature_setting_ref01_data = Object.values(setup.data.existing.ai_provider_feature_setting)[0] as any

    // LIST
    const ai_provider_feature_setting_ref01_ent = client.AiProviderFeatureSetting()
    const ai_provider_feature_setting_ref01_match: any = {}

    const ai_provider_feature_setting_ref01_list = (await ai_provider_feature_setting_ref01_ent.list(ai_provider_feature_setting_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/ai_provider_feature_setting/AiProviderFeatureSettingTestData.json')

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
    ['ai_provider_feature_setting01','ai_provider_feature_setting02','ai_provider_feature_setting03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_AI_PROVIDER_FEATURE_SETTING_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_AI_PROVIDER_FEATURE_SETTING_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_AI_PROVIDER_FEATURE_SETTING_ENTID']
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
  
