

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


describe('BuilderPreviewHandoffEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.BuilderPreviewHandoff()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.BuilderPreviewHandoff().create({"builder_id":"x","preview_handoff":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'builder_preview_handoff.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"builder_id":{"a":true,"h":"Builder Id","n":"builder_id","r":true,"t":"`$INTEGER`","key$":"builder_id","index$":0},"expires_in":{"a":true,"h":"Expires In","n":"expires_in","r":true,"t":"`$INTEGER`","key$":"expires_in","index$":1},"preview_handoff":{"a":true,"h":"Preview Handoff","n":"preview_handoff","r":true,"t":"`$STRING`","key$":"preview_handoff","index$":2},"preview_session":{"a":true,"h":"Preview Session","n":"preview_session","r":true,"t":"`$STRING`","key$":"preview_session","index$":3}},"name":"builder_preview_handoff","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["builder_id","preview_handoff"],"co":{"id":"POST /api/builder/preview/handoff/","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/builder/preview/handoff/","q":{},"r":{},"rb":{"alternatives":[{"fields":[{"name":"builder_id"},{"name":"preview_handoff"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"builder_id"},{"name":"preview_handoff"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"builder"},{"lit":"preview"},{"lit":"handoff"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"builder_preview_handoff","name__orig":"builder_preview_handoff","Name":"BuilderPreviewHandoff","name_":"builder_preview_handoff","name-":"builder-preview-handoff","NAME":"BUILDER_PREVIEW_HANDOFF","index$":36}, {"active":true,"entity":"builder_preview_handoff","key$":"BasicBuilderPreviewHandoffFlow","kind":"basic","name":"BasicBuilderPreviewHandoffFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"builder_preview_handoff_ref01"},"m":{},"o":"create","s":[],"v":[]}]}, 'BuilderPreviewHandoff', {"POST /api/builder/preview/handoff/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"preview_handoff":{"type":"string","key$":"preview_handoff"},"builder_id":{"type":"integer","minimum":1,"key$":"builder_id"}},"required":["builder_id","preview_handoff"],"x-ref":"#/components/schemas/BuilderPreviewHandoffRequest","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"preview_handoff":{"type":"string","key$":"preview_handoff"},"builder_id":{"type":"integer","minimum":1,"key$":"builder_id"}},"required":["builder_id","preview_handoff"],"x-ref":"#/components/schemas/BuilderPreviewHandoffRequest"}},"multipart/form-data":{"schema":{"type":"object","properties":{"preview_handoff":{"type":"string","key$":"preview_handoff"},"builder_id":{"type":"integer","minimum":1,"key$":"builder_id"}},"required":["builder_id","preview_handoff"],"x-ref":"#/components/schemas/BuilderPreviewHandoffRequest"}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const builder_preview_handoff_ref01_ent = client.BuilderPreviewHandoff()
    let builder_preview_handoff_ref01_data = setup.data.new.builder_preview_handoff['builder_preview_handoff_ref01']

    builder_preview_handoff_ref01_data = (await builder_preview_handoff_ref01_ent.create(builder_preview_handoff_ref01_data)).data()
    assert(null != builder_preview_handoff_ref01_data)


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
      '../../../../.sdk/test/entity/builder_preview_handoff/BuilderPreviewHandoffTestData.json')

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
    ['builder_preview_handoff01','builder_preview_handoff02','builder_preview_handoff03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_BUILDER_PREVIEW_HANDOFF_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_BUILDER_PREVIEW_HANDOFF_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_BUILDER_PREVIEW_HANDOFF_ENTID']
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
  
