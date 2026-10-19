

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


describe('PublicViewAuthEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.PublicViewAuth()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PublicViewAuth().create({"view_id":1,"password":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'public_view_auth.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"access_token":{"a":true,"h":"Access Token","n":"access_token","r":true,"t":"`$STRING`","key$":"access_token","index$":0},"password":{"a":true,"h":"Password","n":"password","r":true,"t":"`$STRING`","key$":"password","index$":1}},"name":"public_view_auth","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["password"],"co":{"id":"POST /api/database/views/{slug}/public/auth/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"view_id","or":"slug","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/database/views/{slug}/public/auth/","q":{"exist":["view_id"]},"r":{"param":{"slug":"view_id"}},"rb":{"alternatives":[{"fields":[{"name":"password"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"password"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"var":"view_id"},{"lit":"public"},{"lit":"auth"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.view"]]},"key$":"public_view_auth","name__orig":"public_view_auth","Name":"PublicViewAuth","name_":"public_view_auth","name-":"public-view-auth","NAME":"PUBLIC_VIEW_AUTH","index$":132}, {"active":true,"entity":"public_view_auth","key$":"BasicPublicViewAuthFlow","kind":"basic","name":"BasicPublicViewAuthFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"public_view_auth_ref01"},"m":{"view_id":"view01"},"o":"create","s":[],"v":[]}]}, 'PublicViewAuth', {"POST /api/database/views/{slug}/public/auth/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"password":{"type":"string","key$":"password"}},"required":["password"],"x-ref":"#/components/schemas/PublicViewAuthRequest","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"password":{"type":"string","key$":"password"}},"required":["password"],"x-ref":"#/components/schemas/PublicViewAuthRequest"}},"multipart/form-data":{"schema":{"type":"object","properties":{"password":{"type":"string","key$":"password"}},"required":["password"],"x-ref":"#/components/schemas/PublicViewAuthRequest"}}},"required":true},"parameters":[{"in":"path","name":"slug","schema":{"type":"string"},"description":"The slug of the grid view to get public information about.","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const public_view_auth_ref01_ent = client.PublicViewAuth()
    let public_view_auth_ref01_data = setup.data.new.public_view_auth['public_view_auth_ref01']
    public_view_auth_ref01_data['view_id'] = setup.idmap['view01']

    public_view_auth_ref01_data = (await public_view_auth_ref01_ent.create(public_view_auth_ref01_data)).data()
    assert(null != public_view_auth_ref01_data)


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
      '../../../../.sdk/test/entity/public_view_auth/PublicViewAuthTestData.json')

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
    ['public_view_auth01','public_view_auth02','public_view_auth03','view01','view02','view03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_PUBLIC_VIEW_AUTH_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_PUBLIC_VIEW_AUTH_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_PUBLIC_VIEW_AUTH_ENTID']
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
  
