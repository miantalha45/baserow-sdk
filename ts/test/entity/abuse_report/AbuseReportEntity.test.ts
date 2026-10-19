

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


describe('AbuseReportEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.AbuseReport()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AbuseReport().create({"captcha_token":1,"description":"x","email":"x","identifier":"x","name":"x","resource_type":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'abuse_report.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"captcha_token":{"a":true,"h":"Captcha Token","n":"captcha_token","r":false,"sh":"The captcha response token, required when captcha is enabled.","t":"`$STRING`","key$":"captcha_token","index$":0},"description":{"a":true,"h":"Description","n":"description","r":true,"sh":"A detailed description of why the resource is abusive.","t":"`$STRING`","key$":"description","index$":1},"email":{"a":true,"fo":"email","h":"Email","n":"email","r":true,"sh":"The email address of the person reporting the abuse.","t":"`$STRING`","key$":"email","index$":2},"identifier":{"a":true,"h":"Identifier","n":"identifier","r":true,"sh":"The public identifier of the reported resource, for example the slug of a publicly shared view.","t":"`$STRING`","key$":"identifier","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the person reporting the abuse.","t":"`$STRING`","key$":"name","index$":4},"resource_type":{"a":true,"h":"Resource Type","n":"resource_type","r":true,"sh":"The type of publicly shared resource that is being reported.","t":"`$STRING`","key$":"resource_type","index$":5}},"name":"abuse_report","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["captcha_token","description","email","identifier","name","resource_type"],"co":{"id":"POST /api/abuse-reports/","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/abuse-reports/","q":{},"r":{},"rb":{"alternatives":[{"fields":[{"name":"captcha_token"},{"name":"description"},{"name":"email"},{"name":"identifier"},{"name":"name"},{"name":"resource_type"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"captcha_token"},{"name":"description"},{"name":"email"},{"name":"identifier"},{"name":"name"},{"name":"resource_type"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"abuse-reports"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"abuse_report","name__orig":"abuse_report","Name":"AbuseReport","name_":"abuse_report","name-":"abuse-report","NAME":"ABUSE_REPORT","index$":0}, {"active":true,"entity":"abuse_report","key$":"BasicAbuseReportFlow","kind":"basic","name":"BasicAbuseReportFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"abuse_report_ref01"},"m":{},"o":"create","s":[],"v":[]}]}, 'AbuseReport', {"POST /api/abuse-reports/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"resource_type":{"allOf":[{"enum":["database_view"],"type":"string","description":"* `database_view` - database_view","x-ref":"#/components/schemas/ResourceTypeEnum"}],"description":"The type of publicly shared resource that is being reported.\n\n* `database_view` - database_view","key$":"resource_type"},"identifier":{"type":"string","description":"The public identifier of the reported resource, for example the slug of a publicly shared view.","maxLength":255,"key$":"identifier"},"name":{"type":"string","description":"The name of the person reporting the abuse.","maxLength":150,"key$":"name"},"email":{"type":"string","format":"email","description":"The email address of the person reporting the abuse.","maxLength":254,"key$":"email"},"description":{"type":"string","description":"A detailed description of why the resource is abusive.","maxLength":1000,"minLength":100,"key$":"description"},"captcha_token":{"type":"string","default":"","description":"The captcha response token, required when captcha is enabled.","key$":"captcha_token"}},"required":["description","email","identifier","name","resource_type"],"x-ref":"#/components/schemas/AbuseReport","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"resource_type":{"allOf":[{"enum":["database_view"],"type":"string","description":"* `database_view` - database_view","x-ref":"#/components/schemas/ResourceTypeEnum"}],"description":"The type of publicly shared resource that is being reported.\n\n* `database_view` - database_view","key$":"resource_type"},"identifier":{"type":"string","description":"The public identifier of the reported resource, for example the slug of a publicly shared view.","maxLength":255,"key$":"identifier"},"name":{"type":"string","description":"The name of the person reporting the abuse.","maxLength":150,"key$":"name"},"email":{"type":"string","format":"email","description":"The email address of the person reporting the abuse.","maxLength":254,"key$":"email"},"description":{"type":"string","description":"A detailed description of why the resource is abusive.","maxLength":1000,"minLength":100,"key$":"description"},"captcha_token":{"type":"string","default":"","description":"The captcha response token, required when captcha is enabled.","key$":"captcha_token"}},"required":["description","email","identifier","name","resource_type"],"x-ref":"#/components/schemas/AbuseReport"}},"multipart/form-data":{"schema":{"type":"object","properties":{"resource_type":{"allOf":[{"enum":["database_view"],"type":"string","description":"* `database_view` - database_view","x-ref":"#/components/schemas/ResourceTypeEnum"}],"description":"The type of publicly shared resource that is being reported.\n\n* `database_view` - database_view","key$":"resource_type"},"identifier":{"type":"string","description":"The public identifier of the reported resource, for example the slug of a publicly shared view.","maxLength":255,"key$":"identifier"},"name":{"type":"string","description":"The name of the person reporting the abuse.","maxLength":150,"key$":"name"},"email":{"type":"string","format":"email","description":"The email address of the person reporting the abuse.","maxLength":254,"key$":"email"},"description":{"type":"string","description":"A detailed description of why the resource is abusive.","maxLength":1000,"minLength":100,"key$":"description"},"captcha_token":{"type":"string","default":"","description":"The captcha response token, required when captcha is enabled.","key$":"captcha_token"}},"required":["description","email","identifier","name","resource_type"],"x-ref":"#/components/schemas/AbuseReport"}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const abuse_report_ref01_ent = client.AbuseReport()
    let abuse_report_ref01_data = setup.data.new.abuse_report['abuse_report_ref01']

    abuse_report_ref01_data = (await abuse_report_ref01_ent.create(abuse_report_ref01_data)).data()
    assert(null != abuse_report_ref01_data)


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
      '../../../../.sdk/test/entity/abuse_report/AbuseReportTestData.json')

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
    ['abuse_report01','abuse_report02','abuse_report03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_ABUSE_REPORT_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_ABUSE_REPORT_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_ABUSE_REPORT_ENTID']
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
  
