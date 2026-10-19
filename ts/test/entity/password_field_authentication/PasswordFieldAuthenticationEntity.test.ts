

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


describe('PasswordFieldAuthenticationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.PasswordFieldAuthentication()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PasswordFieldAuthentication().create({"field_id":"x","password":"x","row_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'password_field_authentication.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"field_id":{"a":true,"h":"Field Id","n":"field_id","r":true,"sh":"The field where to check the password for.","t":"`$INTEGER`","key$":"field_id","index$":0},"is_correct":{"a":true,"h":"Is Correct","n":"is_correct","r":true,"sh":"Indicates whether the provided password is correct.","t":"`$BOOLEAN`","key$":"is_correct","index$":1},"password":{"a":true,"h":"Password","n":"password","r":true,"sh":"The password to check.","t":"`$STRING`","key$":"password","index$":2},"row_id":{"a":true,"h":"Row Id","n":"row_id","r":true,"sh":"The row where to check the password for.","t":"`$INTEGER`","key$":"row_id","index$":3}},"name":"password_field_authentication","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["field_id","password","row_id"],"co":{"id":"POST /api/database/fields/password-authentication/","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/database/fields/password-authentication/","q":{},"r":{},"rb":{"alternatives":[{"fields":[{"name":"field_id"},{"name":"password"},{"name":"row_id"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"field_id"},{"name":"password"},{"name":"row_id"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"fields"},{"lit":"password-authentication"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"password_field_authentication","name__orig":"password_field_authentication","Name":"PasswordFieldAuthentication","name_":"password_field_authentication","name-":"password-field-authentication","NAME":"PASSWORD_FIELD_AUTHENTICATION","index$":124}, {"active":true,"entity":"password_field_authentication","key$":"BasicPasswordFieldAuthenticationFlow","kind":"basic","name":"BasicPasswordFieldAuthenticationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"password_field_authentication_ref01"},"m":{},"o":"create","s":[],"v":[]}]}, 'PasswordFieldAuthentication', {"POST /api/database/fields/password-authentication/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"field_id":{"type":"integer","description":"The field where to check the password for.","key$":"field_id"},"row_id":{"type":"integer","description":"The row where to check the password for.","key$":"row_id"},"password":{"type":"string","description":"The password to check.","key$":"password"}},"required":["field_id","password","row_id"],"x-ref":"#/components/schemas/PasswordFieldAuthentication","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"field_id":{"type":"integer","description":"The field where to check the password for.","key$":"field_id"},"row_id":{"type":"integer","description":"The row where to check the password for.","key$":"row_id"},"password":{"type":"string","description":"The password to check.","key$":"password"}},"required":["field_id","password","row_id"],"x-ref":"#/components/schemas/PasswordFieldAuthentication"}},"multipart/form-data":{"schema":{"type":"object","properties":{"field_id":{"type":"integer","description":"The field where to check the password for.","key$":"field_id"},"row_id":{"type":"integer","description":"The row where to check the password for.","key$":"row_id"},"password":{"type":"string","description":"The password to check.","key$":"password"}},"required":["field_id","password","row_id"],"x-ref":"#/components/schemas/PasswordFieldAuthentication"}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const password_field_authentication_ref01_ent = client.PasswordFieldAuthentication()
    let password_field_authentication_ref01_data = setup.data.new.password_field_authentication['password_field_authentication_ref01']

    password_field_authentication_ref01_data = (await password_field_authentication_ref01_ent.create(password_field_authentication_ref01_data)).data()
    assert(null != password_field_authentication_ref01_data)


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
      '../../../../.sdk/test/entity/password_field_authentication/PasswordFieldAuthenticationTestData.json')

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
    ['password_field_authentication01','password_field_authentication02','password_field_authentication03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_PASSWORD_FIELD_AUTHENTICATION_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_PASSWORD_FIELD_AUTHENTICATION_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_PASSWORD_FIELD_AUTHENTICATION_ENTID']
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
  
