

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


describe('AuthenticationProviderAuthProviderEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.AuthenticationProviderAuthProvider()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('authentication_provider_auth_provider hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of BaserowSDK.test(offline).AuthenticationProviderAuthProvider().stream('list')) { }
    }, /offline/)

    for await (const _item of BaserowSDK.test(offline).AuthenticationProviderAuthProvider()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = BaserowSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.AuthenticationProviderAuthProvider().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of BaserowSDK.test().AuthenticationProviderAuthProvider().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new BaserowSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.AuthenticationProviderAuthProvider().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.AuthenticationProviderAuthProvider().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AuthenticationProviderAuthProvider().list({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'authentication_provider_auth_provider.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"authentication_provider_auth_provider","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/admin/auth-provider/","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/admin/auth-provider/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"auth-provider"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/auth-provider/","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/admin/auth-provider/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"auth-provider"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/admin/auth-provider/{auth_provider_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"auth_provider_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/admin/auth-provider/{auth_provider_id}/","q":{"exist":["id"]},"r":{"param":{"auth_provider_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"auth-provider"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/admin/auth-provider/{auth_provider_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"auth_provider_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/admin/auth-provider/{auth_provider_id}/","q":{"exist":["id"]},"r":{"param":{"auth_provider_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"auth-provider"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"authentication_provider_auth_provider","name__orig":"authentication_provider_auth_provider","Name":"AuthenticationProviderAuthProvider","name_":"authentication_provider_auth_provider","name-":"authentication-provider-auth-provider","NAME":"AUTHENTICATION_PROVIDER_AUTH_PROVIDER","index$":23}, {"active":true,"entity":"authentication_provider_auth_provider","key$":"BasicAuthenticationProviderAuthProviderFlow","kind":"basic","name":"BasicAuthenticationProviderAuthProviderFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"authentication_provider_auth_provider_ref01"},"m":{},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"authentication_provider_auth_provider_ref01"}}]},{"a":true,"d":{},"i":{"ref":"authentication_provider_auth_provider_ref01","srcdatavar":"authentication_provider_auth_provider_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-authentication_provider_auth_provider_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"authentication_provider_auth_provider_ref01","srcdatavar":"authentication_provider_auth_provider_ref01_data","suffix":"_dt0"},"m":{"id":"authentication_provider_auth_provider01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-authentication_provider_auth_provider_ref01"}}]}]}, 'AuthenticationProviderAuthProvider', {"POST /api/admin/auth-provider/":{"protocol":"http","parameters":[]},"GET /api/admin/auth-provider/":{"protocol":"http","parameters":[]},"GET /api/admin/auth-provider/{auth_provider_id}/":{"protocol":"http","parameters":[{"in":"path","name":"auth_provider_id","schema":{"type":"integer"},"description":"The authentication provider id to fetch.","required":true,"index$":0}]},"PATCH /api/admin/auth-provider/{auth_provider_id}/":{"protocol":"http","parameters":[{"in":"path","name":"auth_provider_id","schema":{"type":"integer"},"description":"The authentication provider id to update.","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const authentication_provider_auth_provider_ref01_ent = client.AuthenticationProviderAuthProvider()
    let authentication_provider_auth_provider_ref01_data = setup.data.new.authentication_provider_auth_provider['authentication_provider_auth_provider_ref01']

    authentication_provider_auth_provider_ref01_data = (await authentication_provider_auth_provider_ref01_ent.create(authentication_provider_auth_provider_ref01_data)).data()
    assert(null != authentication_provider_auth_provider_ref01_data.id)


    // LIST
    const authentication_provider_auth_provider_ref01_match: any = {}

    const authentication_provider_auth_provider_ref01_list = (await authentication_provider_auth_provider_ref01_ent.list(authentication_provider_auth_provider_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(authentication_provider_auth_provider_ref01_list, { id: authentication_provider_auth_provider_ref01_data.id })))


    // UPDATE
    const authentication_provider_auth_provider_ref01_data_up0: any = {}
    authentication_provider_auth_provider_ref01_data_up0.id = authentication_provider_auth_provider_ref01_data.id

    const authentication_provider_auth_provider_ref01_resdata_up0 = (await authentication_provider_auth_provider_ref01_ent.update(authentication_provider_auth_provider_ref01_data_up0)).data()
    assert(authentication_provider_auth_provider_ref01_resdata_up0.id === authentication_provider_auth_provider_ref01_data_up0.id)


    // LOAD
    const authentication_provider_auth_provider_ref01_match_dt0: any = {}
    authentication_provider_auth_provider_ref01_match_dt0.id = authentication_provider_auth_provider_ref01_data.id
    const authentication_provider_auth_provider_ref01_data_dt0 = (await authentication_provider_auth_provider_ref01_ent.load(authentication_provider_auth_provider_ref01_match_dt0)).data()
    assert(authentication_provider_auth_provider_ref01_data_dt0.id === authentication_provider_auth_provider_ref01_data.id)


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
      '../../../../.sdk/test/entity/authentication_provider_auth_provider/AuthenticationProviderAuthProviderTestData.json')

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
    ['authentication_provider_auth_provider01','authentication_provider_auth_provider02','authentication_provider_auth_provider03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_AUTHENTICATION_PROVIDER_AUTH_PROVIDER_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_AUTHENTICATION_PROVIDER_AUTH_PROVIDER_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_AUTHENTICATION_PROVIDER_AUTH_PROVIDER_ENTID']
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
  
