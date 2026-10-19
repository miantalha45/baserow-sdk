

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


describe('ApplicationApplicationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.ApplicationApplication()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ApplicationApplication().load({"workspace_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'application_application.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"application_application","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["breakpoints","custom_code","description","favicon_file","init_with_data","login_page_id","name","scripts","type"],"co":{"id":"POST /api/applications/workspace/{workspace_id}/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"client_undo_redo_action_group_id","or":"ClientUndoRedoActionGroupId","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"k":"param","n":"workspace_id","or":"workspace_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/applications/workspace/{workspace_id}/","q":{"exist":["workspace_id"]},"r":{},"rb":{"alternatives":[{"kind":"multipart","media":"multipart/form-data"},{"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"applications"},{"lit":"workspace"},{"var":"workspace_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/applications/workspace/{workspace_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"workspace_id","or":"workspace_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/applications/workspace/{workspace_id}/","q":{"exist":["workspace_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"applications"},{"lit":"workspace"},{"var":"workspace_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.workspace"]]},"key$":"application_application","name__orig":"application_application","Name":"ApplicationApplication","name_":"application_application","name-":"application-application","NAME":"APPLICATION_APPLICATION","index$":17}, {"active":true,"entity":"application_application","key$":"BasicApplicationApplicationFlow","kind":"basic","name":"BasicApplicationApplicationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"application_application_ref01"},"m":{"workspace_id":"workspace01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{"ref":"application_application_ref01","srcdatavar":"application_application_ref01_data","suffix":"_dt0"},"m":{"id":"application_application01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-application_application_ref01"}}]}]}, 'ApplicationApplication', {"POST /api/applications/workspace/{workspace_id}/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"anyOf":[{"type":"object","properties":{"name":{"type":"string","maxLength":160},"type":{"enum":["database","dashboard","automation","builder"],"type":"string","description":"* `database` - database\n* `dashboard` - dashboard\n* `automation` - automation\n* `builder` - builder","x-ref":"#/components/schemas/Type76dEnum"},"init_with_data":{"type":"boolean","default":false}},"required":["name","type"],"x-ref":"#/components/schemas/DatabaseBaseApplicationCreatePolymorphic"},{"type":"object","properties":{"name":{"type":"string","maxLength":160},"type":{"enum":["database","dashboard","automation","builder"],"type":"string","description":"* `database` - database\n* `dashboard` - dashboard\n* `automation` - automation\n* `builder` - builder","x-ref":"#/components/schemas/Type76dEnum"},"init_with_data":{"type":"boolean","default":false},"description":{"type":"string"}},"required":["name","type"],"x-ref":"#/components/schemas/DashboardBaseApplicationCreatePolymorphic"},{"type":"object","description":"The Automation serializer.","properties":{"name":{"type":"string","maxLength":160},"type":{"enum":["database","dashboard","automation","builder"],"type":"string","description":"* `database` - database\n* `dashboard` - dashboard\n* `automation` - automation\n* `builder` - builder","x-ref":"#/components/schemas/Type76dEnum"},"init_with_data":{"type":"boolean","default":false}},"required":["name","type"],"x-ref":"#/components/schemas/AutomationBaseApplicationCreatePolymorphic"},{"type":"object","properties":{"name":{"type":"string","maxLength":160},"type":{"enum":["database","dashboard","automation","builder"],"type":"string","description":"* `database` - database\n* `dashboard` - dashboard\n* `automation` - automation\n* `builder` - builder","x-ref":"#/components/schemas/Type76dEnum"},"init_with_data":{"type":"boolean","default":false},"favicon_file":{"allOf":[{}],"nullable":true,"description":"The favicon image file"},"login_page_id":{"type":"integer","nullable":true,"description":"The login page for this application. This is related to the visibility settings of builder pages."},"breakpoints":{"type":"object","additionalProperties":{"type":"integer","maximum":1920,"minimum":320},"description":"The maximum widths in pixels for the responsive layouts, between 320 and 1920 pixels. Mobile and tablet breakpoints are required."},"scripts":{"type":"array","items":{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/CustomScript"},"description":"Custom CSS/JS scripts for this builder"},"custom_code":{"allOf":[{}],"description":"Custom CSS/JS code for this builder"}},"required":["name","type"],"x-ref":"#/components/schemas/BuilderBaseApplicationCreatePolymorphic"}],"x-ref":"#/components/schemas/ApplicationBaseApplicationCreatePolymorphic","index$":1}},"application/x-www-form-urlencoded":{"schema":{"anyOf":[{"type":"object","properties":{"name":{"type":"string","maxLength":160},"type":{"enum":["database","dashboard","automation","builder"],"type":"string","description":"* `database` - database\n* `dashboard` - dashboard\n* `automation` - automation\n* `builder` - builder","x-ref":"#/components/schemas/Type76dEnum"},"init_with_data":{"type":"boolean","default":false}},"required":["name","type"],"x-ref":"#/components/schemas/DatabaseBaseApplicationCreatePolymorphic"},{"type":"object","properties":{"name":{"type":"string","maxLength":160},"type":{"enum":["database","dashboard","automation","builder"],"type":"string","description":"* `database` - database\n* `dashboard` - dashboard\n* `automation` - automation\n* `builder` - builder","x-ref":"#/components/schemas/Type76dEnum"},"init_with_data":{"type":"boolean","default":false},"description":{"type":"string"}},"required":["name","type"],"x-ref":"#/components/schemas/DashboardBaseApplicationCreatePolymorphic"},{"type":"object","description":"The Automation serializer.","properties":{"name":{"type":"string","maxLength":160},"type":{"enum":["database","dashboard","automation","builder"],"type":"string","description":"* `database` - database\n* `dashboard` - dashboard\n* `automation` - automation\n* `builder` - builder","x-ref":"#/components/schemas/Type76dEnum"},"init_with_data":{"type":"boolean","default":false}},"required":["name","type"],"x-ref":"#/components/schemas/AutomationBaseApplicationCreatePolymorphic"},{"type":"object","properties":{"name":{"type":"string","maxLength":160},"type":{"enum":["database","dashboard","automation","builder"],"type":"string","description":"* `database` - database\n* `dashboard` - dashboard\n* `automation` - automation\n* `builder` - builder","x-ref":"#/components/schemas/Type76dEnum"},"init_with_data":{"type":"boolean","default":false},"favicon_file":{"allOf":[{}],"nullable":true,"description":"The favicon image file"},"login_page_id":{"type":"integer","nullable":true,"description":"The login page for this application. This is related to the visibility settings of builder pages."},"breakpoints":{"type":"object","additionalProperties":{"type":"integer","maximum":1920,"minimum":320},"description":"The maximum widths in pixels for the responsive layouts, between 320 and 1920 pixels. Mobile and tablet breakpoints are required."},"scripts":{"type":"array","items":{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/CustomScript"},"description":"Custom CSS/JS scripts for this builder"},"custom_code":{"allOf":[{}],"description":"Custom CSS/JS code for this builder"}},"required":["name","type"],"x-ref":"#/components/schemas/BuilderBaseApplicationCreatePolymorphic"}],"x-ref":"#/components/schemas/ApplicationBaseApplicationCreatePolymorphic"}},"multipart/form-data":{"schema":{"anyOf":[{"type":"object","properties":{"name":{"type":"string","maxLength":160},"type":{"enum":["database","dashboard","automation","builder"],"type":"string","description":"* `database` - database\n* `dashboard` - dashboard\n* `automation` - automation\n* `builder` - builder","x-ref":"#/components/schemas/Type76dEnum"},"init_with_data":{"type":"boolean","default":false}},"required":["name","type"],"x-ref":"#/components/schemas/DatabaseBaseApplicationCreatePolymorphic"},{"type":"object","properties":{"name":{"type":"string","maxLength":160},"type":{"enum":["database","dashboard","automation","builder"],"type":"string","description":"* `database` - database\n* `dashboard` - dashboard\n* `automation` - automation\n* `builder` - builder","x-ref":"#/components/schemas/Type76dEnum"},"init_with_data":{"type":"boolean","default":false},"description":{"type":"string"}},"required":["name","type"],"x-ref":"#/components/schemas/DashboardBaseApplicationCreatePolymorphic"},{"type":"object","description":"The Automation serializer.","properties":{"name":{"type":"string","maxLength":160},"type":{"enum":["database","dashboard","automation","builder"],"type":"string","description":"* `database` - database\n* `dashboard` - dashboard\n* `automation` - automation\n* `builder` - builder","x-ref":"#/components/schemas/Type76dEnum"},"init_with_data":{"type":"boolean","default":false}},"required":["name","type"],"x-ref":"#/components/schemas/AutomationBaseApplicationCreatePolymorphic"},{"type":"object","properties":{"name":{"type":"string","maxLength":160},"type":{"enum":["database","dashboard","automation","builder"],"type":"string","description":"* `database` - database\n* `dashboard` - dashboard\n* `automation` - automation\n* `builder` - builder","x-ref":"#/components/schemas/Type76dEnum"},"init_with_data":{"type":"boolean","default":false},"favicon_file":{"allOf":[{}],"nullable":true,"description":"The favicon image file"},"login_page_id":{"type":"integer","nullable":true,"description":"The login page for this application. This is related to the visibility settings of builder pages."},"breakpoints":{"type":"object","additionalProperties":{"type":"integer","maximum":1920,"minimum":320},"description":"The maximum widths in pixels for the responsive layouts, between 320 and 1920 pixels. Mobile and tablet breakpoints are required."},"scripts":{"type":"array","items":{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/CustomScript"},"description":"Custom CSS/JS scripts for this builder"},"custom_code":{"allOf":[{}],"description":"Custom CSS/JS code for this builder"}},"required":["name","type"],"x-ref":"#/components/schemas/BuilderBaseApplicationCreatePolymorphic"}],"x-ref":"#/components/schemas/ApplicationBaseApplicationCreatePolymorphic"}}}},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"header","name":"ClientUndoRedoActionGroupId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.","index$":1},{"in":"path","name":"workspace_id","schema":{"type":"integer"},"description":"Creates an application for the workspace related to the provided value.","required":true,"index$":2}]},"GET /api/applications/workspace/{workspace_id}/":{"protocol":"http","parameters":[{"in":"path","name":"workspace_id","schema":{"type":"integer"},"description":"Returns only applications that are in the workspace related to the provided value.","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const application_application_ref01_ent = client.ApplicationApplication()
    let application_application_ref01_data = setup.data.new.application_application['application_application_ref01']
    application_application_ref01_data['workspace_id'] = setup.idmap['workspace01']

    application_application_ref01_data = (await application_application_ref01_ent.create(application_application_ref01_data)).data()
    assert(null != application_application_ref01_data)



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
      '../../../../.sdk/test/entity/application_application/ApplicationApplicationTestData.json')

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
    ['application_application01','application_application02','application_application03','workspace01','workspace02','workspace03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_APPLICATION_APPLICATION_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_APPLICATION_APPLICATION_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_APPLICATION_APPLICATION_ENTID']
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
  
