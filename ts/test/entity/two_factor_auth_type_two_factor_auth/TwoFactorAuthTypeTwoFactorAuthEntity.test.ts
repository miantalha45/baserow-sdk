

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


describe('TwoFactorAuthTypeTwoFactorAuthEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.TwoFactorAuthTypeTwoFactorAuth()
    assert(null != ent)
  })




  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'two_factor_auth_type_two_factor_auth.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"two_factor_auth_type_two_factor_auth","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["backup_codes","provisioning_qr_code","provisioning_url","type"],"co":{"id":"POST /api/two-factor-auth/configuration/","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/two-factor-auth/configuration/","q":{},"r":{},"rb":{"alternatives":[{"kind":"multipart","media":"multipart/form-data"},{"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"two-factor-auth"},{"lit":"configuration"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/two-factor-auth/configuration/","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/two-factor-auth/configuration/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"two-factor-auth"},{"lit":"configuration"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"two_factor_auth_type_two_factor_auth","name__orig":"two_factor_auth_type_two_factor_auth","Name":"TwoFactorAuthTypeTwoFactorAuth","name_":"two_factor_auth_type_two_factor_auth","name-":"two-factor-auth-type-two-factor-auth","NAME":"TWO_FACTOR_AUTH_TYPE_TWO_FACTOR_AUTH","index$":149}, {"active":true,"entity":"two_factor_auth_type_two_factor_auth","key$":"BasicTwoFactorAuthTypeTwoFactorAuthFlow","kind":"basic","name":"BasicTwoFactorAuthTypeTwoFactorAuthFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"two_factor_auth_type_two_factor_auth_ref01"},"m":{},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{"ref":"two_factor_auth_type_two_factor_auth_ref01","srcdatavar":"two_factor_auth_type_two_factor_auth_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-two_factor_auth_type_two_factor_auth_ref01"}}]}]}, 'TwoFactorAuthTypeTwoFactorAuth', {"POST /api/two-factor-auth/configuration/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"oneOf":[{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the two factor auth.\n\n* `totp` - totp"},"provisioning_url":{"type":"string"},"provisioning_qr_code":{"type":"string"},"backup_codes":{"type":"array","items":{"type":"string"}}},"required":["backup_codes","provisioning_qr_code","provisioning_url","type"],"x-ref":"#/components/schemas/TOTPAuthProviderModelCreateTwoFactorAuth"}],"discriminator":{"propertyName":"type","mapping":{"totp":"#/components/schemas/TOTPAuthProviderModelCreateTwoFactorAuth"}},"x-ref":"#/components/schemas/Two_Factor_Auth_TypeCreateTwoFactorAuth","index$":1}},"application/x-www-form-urlencoded":{"schema":{"oneOf":[{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the two factor auth.\n\n* `totp` - totp"},"provisioning_url":{"type":"string"},"provisioning_qr_code":{"type":"string"},"backup_codes":{"type":"array","items":{"type":"string"}}},"required":["backup_codes","provisioning_qr_code","provisioning_url","type"],"x-ref":"#/components/schemas/TOTPAuthProviderModelCreateTwoFactorAuth"}],"discriminator":{"propertyName":"type","mapping":{"totp":"#/components/schemas/TOTPAuthProviderModelCreateTwoFactorAuth"}},"x-ref":"#/components/schemas/Two_Factor_Auth_TypeCreateTwoFactorAuth"}},"multipart/form-data":{"schema":{"oneOf":[{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the two factor auth.\n\n* `totp` - totp"},"provisioning_url":{"type":"string"},"provisioning_qr_code":{"type":"string"},"backup_codes":{"type":"array","items":{"type":"string"}}},"required":["backup_codes","provisioning_qr_code","provisioning_url","type"],"x-ref":"#/components/schemas/TOTPAuthProviderModelCreateTwoFactorAuth"}],"discriminator":{"propertyName":"type","mapping":{"totp":"#/components/schemas/TOTPAuthProviderModelCreateTwoFactorAuth"}},"x-ref":"#/components/schemas/Two_Factor_Auth_TypeCreateTwoFactorAuth"}}}},"parameters":[]},"GET /api/two-factor-auth/configuration/":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const two_factor_auth_type_two_factor_auth_ref01_ent = client.TwoFactorAuthTypeTwoFactorAuth()
    let two_factor_auth_type_two_factor_auth_ref01_data = setup.data.new.two_factor_auth_type_two_factor_auth['two_factor_auth_type_two_factor_auth_ref01']

    two_factor_auth_type_two_factor_auth_ref01_data = (await two_factor_auth_type_two_factor_auth_ref01_ent.create(two_factor_auth_type_two_factor_auth_ref01_data)).data()
    assert(null != two_factor_auth_type_two_factor_auth_ref01_data)


    // LOAD
    const two_factor_auth_type_two_factor_auth_ref01_match_dt0: any = {}
    const two_factor_auth_type_two_factor_auth_ref01_data_dt0 = (await two_factor_auth_type_two_factor_auth_ref01_ent.load(two_factor_auth_type_two_factor_auth_ref01_match_dt0)).data()
    assert(null != two_factor_auth_type_two_factor_auth_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/two_factor_auth_type_two_factor_auth/TwoFactorAuthTypeTwoFactorAuthTestData.json')

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
    ['two_factor_auth_type_two_factor_auth01','two_factor_auth_type_two_factor_auth02','two_factor_auth_type_two_factor_auth03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_TWO_FACTOR_AUTH_TYPE_TWO_FACTOR_AUTH_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_TWO_FACTOR_AUTH_TYPE_TWO_FACTOR_AUTH_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_TWO_FACTOR_AUTH_TYPE_TWO_FACTOR_AUTH_ENTID']
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
  
