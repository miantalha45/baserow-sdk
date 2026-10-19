

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


describe('BuilderPreviewGrantEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.BuilderPreviewGrant()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.BuilderPreviewGrant().create({"preview_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'builder_preview_grant.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"path":{"a":true,"h":"Path","n":"path","r":false,"t":"`$STRING`","key$":"path","index$":0},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":true,"t":"`$STRING`","key$":"url","index$":1}},"name":"builder_preview_grant","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["path"],"co":{"id":"POST /api/builder/preview/{builder_id}/grant/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"preview_id","or":"builder_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/builder/preview/{builder_id}/grant/","q":{"exist":["preview_id"]},"r":{"param":{"builder_id":"preview_id"}},"rb":{"alternatives":[{"fields":[{"name":"path"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"path"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"builder"},{"lit":"preview"},{"var":"preview_id"},{"lit":"grant"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"builder_preview_grant","name__orig":"builder_preview_grant","Name":"BuilderPreviewGrant","name_":"builder_preview_grant","name-":"builder-preview-grant","NAME":"BUILDER_PREVIEW_GRANT","index$":35}, {"active":true,"entity":"builder_preview_grant","key$":"BasicBuilderPreviewGrantFlow","kind":"basic","name":"BasicBuilderPreviewGrantFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"builder_preview_grant_ref01"},"m":{"preview_id":"preview01"},"o":"create","s":[],"v":[]}]}, 'BuilderPreviewGrant', {"POST /api/builder/preview/{builder_id}/grant/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"path":{"type":"string","default":"/","key$":"path"}},"x-ref":"#/components/schemas/BuilderPreviewGrantRequest","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"path":{"type":"string","default":"/","key$":"path"}},"x-ref":"#/components/schemas/BuilderPreviewGrantRequest"}},"multipart/form-data":{"schema":{"type":"object","properties":{"path":{"type":"string","default":"/","key$":"path"}},"x-ref":"#/components/schemas/BuilderPreviewGrantRequest"}}}},"parameters":[{"in":"path","name":"builder_id","schema":{"type":"string","pattern":"^[0-9]+$"},"required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const builder_preview_grant_ref01_ent = client.BuilderPreviewGrant()
    let builder_preview_grant_ref01_data = setup.data.new.builder_preview_grant['builder_preview_grant_ref01']
    builder_preview_grant_ref01_data['preview_id'] = setup.idmap['preview01']

    builder_preview_grant_ref01_data = (await builder_preview_grant_ref01_ent.create(builder_preview_grant_ref01_data)).data()
    assert(null != builder_preview_grant_ref01_data)


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
      '../../../../.sdk/test/entity/builder_preview_grant/BuilderPreviewGrantTestData.json')

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
    ['builder_preview_grant01','builder_preview_grant02','builder_preview_grant03','preview01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_BUILDER_PREVIEW_GRANT_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_BUILDER_PREVIEW_GRANT_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_BUILDER_PREVIEW_GRANT_ENTID']
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
  
