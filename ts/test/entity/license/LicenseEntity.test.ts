

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


describe('LicenseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.License()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.License().load({"id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'license.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"application_users":{"a":true,"h":"Application Users","n":"application_users","r":true,"sh":"The amount of application builder users permitted in this license.","t":"`$INTEGER`","key$":"application_users","index$":0},"application_users_taken":{"a":true,"h":"Application Users Taken","n":"application_users_taken","r":true,"ro":true,"sh":"The amount of application builder users used so far in this license.","t":"`$INTEGER`","key$":"application_users_taken","index$":1},"email":{"a":true,"h":"Email","n":"email","r":false,"t":"`$STRING`","union":{"branches":2,"count":1,"depth":0},"key$":"email","index$":2},"first_name":{"a":true,"h":"First Name","n":"first_name","r":false,"t":"`$STRING`","key$":"first_name","index$":3},"free_users_count":{"a":true,"h":"Free Users Count","n":"free_users_count","r":true,"ro":true,"sh":"The amount of free users that are currently using the license.","t":"`$INTEGER`","key$":"free_users_count","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":5},"is_active":{"a":true,"h":"Is Active","n":"is_active","r":true,"sh":"Indicates if the backend deems the license valid.","t":"`$BOOLEAN`","key$":"is_active","index$":6},"issued_on":{"a":true,"fo":"date-time","h":"Issued On","n":"issued_on","r":true,"sh":"The date when the license was issued.","t":"`$STRING`","key$":"issued_on","index$":7},"issued_to_email":{"a":true,"fo":"email","h":"Issued To Email","n":"issued_to_email","r":true,"sh":"Indicates to which email address the license has been issued.","t":"`$STRING`","key$":"issued_to_email","index$":8},"issued_to_name":{"a":true,"h":"Issued To Name","n":"issued_to_name","r":true,"sh":"Indicates to whom the license has been issued.","t":"`$STRING`","key$":"issued_to_name","index$":9},"last_check":{"a":true,"fo":"date-time","h":"Last Check","n":"last_check","r":false,"t":"`$STRING`","key$":"last_check","index$":10},"license_id":{"a":true,"h":"License Id","n":"license_id","r":true,"sh":"Unique identifier of the license.","t":"`$STRING`","key$":"license_id","index$":11},"product_code":{"a":true,"h":"Product Code","n":"product_code","r":true,"sh":"The product code that indicates what the license unlocks.","t":"`$STRING`","key$":"product_code","index$":12},"seats":{"a":true,"h":"Seats","n":"seats","r":true,"sh":"The maximum amount of users that can use the license.","t":"`$INTEGER`","key$":"seats","index$":13},"seats_taken":{"a":true,"h":"Seats Taken","n":"seats_taken","r":true,"ro":true,"sh":"The amount of users that are currently using the license.","t":"`$INTEGER`","key$":"seats_taken","index$":14},"users":{"a":true,"h":"Users","n":"users","r":true,"ro":true,"t":"`$ARRAY`","union":{"branches":2,"count":1,"depth":3},"key$":"users","index$":15},"valid_from":{"a":true,"fo":"date-time","h":"Valid From","n":"valid_from","r":true,"sh":"From which timestamp the license becomes active.","t":"`$STRING`","key$":"valid_from","index$":16},"valid_through":{"a":true,"fo":"date-time","h":"Valid Through","n":"valid_through","r":true,"sh":"Until which timestamp the license is active.","t":"`$STRING`","key$":"valid_through","index$":17}},"id":{"field":"id","name":"id"},"name":"license","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/licenses/{id}/{user_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"POST","o":"/api/licenses/{id}/{user_id}/","q":{"exist":["id","user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"licenses"},{"var":"id"},{"var":"user_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/licenses/{id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/licenses/{id}/","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"licenses"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"license","name__orig":"license","Name":"License","name_":"license","name-":"license","NAME":"LICENSE","index$":104}, {"active":true,"entity":"license","key$":"BasicLicenseFlow","kind":"basic","name":"BasicLicenseFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"license_ref01"},"m":{"user_id":"user01"},"o":"create","s":[],"v":[],"unreachable":true},{"a":true,"d":{},"i":{"ref":"license_ref01","srcdatavar":"license_ref01_data","suffix":"_dt0"},"m":{"id":"license01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-license_ref01"}}]}]}, 'License', {"POST /api/licenses/{id}/{user_id}/":{"protocol":"http","parameters":[{"in":"path","name":"id","schema":{"type":"integer"},"description":"The internal identifier of the license, this is `id` and not `license_id`.","required":true,"index$":0},{"in":"path","name":"user_id","schema":{"type":"integer"},"description":"The ID of the user that must be added to the license.","required":true,"index$":1}]},"GET /api/licenses/{id}/":{"protocol":"http","parameters":[{"in":"path","name":"id","schema":{"type":"integer"},"description":"The internal identifier of the license.","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let license_ref01_data = Object.values(setup.data.existing.license)[0] as any

    // LOAD
    const license_ref01_ent = client.License()
    const license_ref01_match_dt0: any = {}
    license_ref01_match_dt0.id = license_ref01_data.id
    const license_ref01_data_dt0 = (await license_ref01_ent.load(license_ref01_match_dt0)).data()
    assert(license_ref01_data_dt0.id === license_ref01_data.id)


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
      '../../../../.sdk/test/entity/license/LicenseTestData.json')

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
    ['license01','license02','license03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_LICENSE_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_LICENSE_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_LICENSE_ENTID']
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
  
