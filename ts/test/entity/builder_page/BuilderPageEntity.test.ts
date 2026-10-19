

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


describe('BuilderPageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.BuilderPage()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.BuilderPage().create({"builder_id":"x","page_ids":"x","progress_percentage":1,"state":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'builder_page.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":true,"ro":true,"t":"`$STRING`","key$":"created_on","index$":0},"duplicated_page":{"a":true,"h":"Duplicated Page","n":"duplicated_page","r":true,"ro":true,"t":"`$ANY`","key$":"duplicated_page","index$":1},"error_code":{"a":true,"h":"Error Code","n":"error_code","r":false,"sh":"A machine readable error code indicating why the job failed.","t":"`$STRING`","key$":"error_code","index$":2},"human_readable_error":{"a":true,"h":"Human Readable Error","n":"human_readable_error","r":false,"sh":"A human readable error message indicating what went wrong.","t":"`$STRING`","key$":"human_readable_error","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":4},"original_page":{"a":true,"h":"Original Page","n":"original_page","r":true,"ro":true,"t":"`$ANY`","key$":"original_page","index$":5},"page_ids":{"a":true,"h":"Page Ids","n":"page_ids","r":true,"sh":"The ids of the pages in the order they are supposed to be set in","t":"`$ARRAY`","key$":"page_ids","index$":6},"progress_percentage":{"a":true,"h":"Progress Percentage","n":"progress_percentage","r":true,"sh":"A percentage indicating how far along the job is.","t":"`$INTEGER`","key$":"progress_percentage","index$":7},"state":{"a":true,"h":"State","n":"state","r":true,"sh":"Indicates the state of the import job.","t":"`$STRING`","key$":"state","index$":8},"type":{"a":true,"h":"Type","n":"type","r":true,"ro":true,"sh":"The type of the job.","t":"`$STRING`","key$":"type","index$":9},"updated_on":{"a":true,"fo":"date-time","h":"Updated On","n":"updated_on","r":true,"ro":true,"t":"`$STRING`","key$":"updated_on","index$":10}},"id":{"field":"id","name":"id"},"name":"builder_page","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["page_ids"],"co":{"id":"POST /api/builder/{builder_id}/pages/order/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"builder_id","or":"builder_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/builder/{builder_id}/pages/order/","q":{"exist":["builder_id"]},"r":{},"rb":{"alternatives":[{"fields":[{"list":true,"name":"page_ids"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"list":true,"name":"page_ids"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"builder"},{"var":"builder_id"},{"lit":"pages"},{"lit":"order"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/builder/pages/{page_id}/duplicate/async/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"page_id","or":"page_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/builder/pages/{page_id}/duplicate/async/","q":{"exist":["page_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"builder"},{"lit":"pages"},{"var":"page_id"},{"lit":"duplicate"},{"lit":"async"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/builder/pages/{page_id}/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"page_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/api/builder/pages/{page_id}/","q":{"exist":["id"]},"r":{"param":{"page_id":"id"}},"s":[{"lit":"api"},{"lit":"builder"},{"lit":"pages"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.page"]]},"key$":"builder_page","name__orig":"builder_page","Name":"BuilderPage","name_":"builder_page","name-":"builder-page","NAME":"BUILDER_PAGE","index$":33}, {"active":true,"entity":"builder_page","key$":"BasicBuilderPageFlow","kind":"basic","name":"BasicBuilderPageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"builder_page_ref01"},"m":{"page_id":"page01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{"ref":"builder_page_ref01","suffix":"_rm0"},"m":{"id":"builder_page01"},"o":"remove","s":[],"v":[]}]}, 'BuilderPage', {"POST /api/builder/{builder_id}/pages/order/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"page_ids":{"type":"array","items":{"type":"integer"},"description":"The ids of the pages in the order they are supposed to be set in","key$":"page_ids"}},"required":["page_ids"],"x-ref":"#/components/schemas/OrderPages","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"page_ids":{"type":"array","items":{"type":"integer"},"description":"The ids of the pages in the order they are supposed to be set in","key$":"page_ids"}},"required":["page_ids"],"x-ref":"#/components/schemas/OrderPages"}},"multipart/form-data":{"schema":{"type":"object","properties":{"page_ids":{"type":"array","items":{"type":"integer"},"description":"The ids of the pages in the order they are supposed to be set in","key$":"page_ids"}},"required":["page_ids"],"x-ref":"#/components/schemas/OrderPages"}}},"required":true},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"builder_id","schema":{"type":"integer"},"description":"The builder the page belongs to","required":true,"index$":1}]},"POST /api/builder/pages/{page_id}/duplicate/async/":{"protocol":"http","parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"page_id","schema":{"type":"integer"},"description":"The page to duplicate.","required":true,"index$":1}]},"DELETE /api/builder/pages/{page_id}/":{"protocol":"http","parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"page_id","schema":{"type":"integer"},"description":"The id of the page","required":true,"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const builder_page_ref01_ent = client.BuilderPage()
    let builder_page_ref01_data = setup.data.new.builder_page['builder_page_ref01']
    builder_page_ref01_data['page_id'] = setup.idmap['page01']

    builder_page_ref01_data = (await builder_page_ref01_ent.create(builder_page_ref01_data)).data()
    assert(null != builder_page_ref01_data.id)


    // REMOVE
    const builder_page_ref01_match_rm0: any = { id: builder_page_ref01_data.id }
    await builder_page_ref01_ent.remove(builder_page_ref01_match_rm0)
  

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
      '../../../../.sdk/test/entity/builder_page/BuilderPageTestData.json')

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
    ['builder_page01','builder_page02','builder_page03','page01','page02','page03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_BUILDER_PAGE_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_BUILDER_PAGE_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_BUILDER_PAGE_ENTID']
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
  
