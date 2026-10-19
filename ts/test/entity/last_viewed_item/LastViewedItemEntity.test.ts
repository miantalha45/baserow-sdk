

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


describe('LastViewedItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.LastViewedItem()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('last_viewed_item hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of BaserowSDK.test(offline).LastViewedItem().stream('list')) { }
    }, /offline/)

    for await (const _item of BaserowSDK.test(offline).LastViewedItem()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = BaserowSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.LastViewedItem().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of BaserowSDK.test().LastViewedItem().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new BaserowSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.LastViewedItem().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.LastViewedItem().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.LastViewedItem().list({"cursor":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'last_viewed_item.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"application":{"a":true,"h":"Application","n":"application","r":true,"t":"`$OBJECT`","key$":"application","index$":0},"item":{"a":true,"h":"Item","n":"item","r":true,"ro":true,"sh":"The `id` and `name` of the item, plus what the type adds.","t":"`$ANY`","union":{"branches":4,"count":1,"depth":2},"key$":"item","index$":1},"last_viewed":{"a":true,"fo":"date-time","h":"Last Viewed","n":"last_viewed","r":true,"t":"`$STRING`","key$":"last_viewed","index$":2},"sub_type":{"a":true,"h":"Sub Type","n":"sub_type","r":true,"sh":"Set for polymorphic types, like the view type of a database view.","t":"`$STRING`","key$":"sub_type","index$":3},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":4},"workspace":{"a":true,"h":"Workspace","n":"workspace","r":true,"t":"`$OBJECT`","key$":"workspace","index$":5}},"name":"last_viewed_item","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/last-viewed/items/","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"type","or":"types","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"workspace_id","or":"workspace_ids","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/api/last-viewed/items/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"last-viewed"},{"lit":"items"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"last_viewed_item","name__orig":"last_viewed_item","Name":"LastViewedItem","name_":"last_viewed_item","name-":"last-viewed-item","NAME":"LAST_VIEWED_ITEM","index$":103}, {"active":true,"entity":"last_viewed_item","key$":"BasicLastViewedItemFlow","kind":"basic","name":"BasicLastViewedItemFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"last_viewed_item_ref01"}}]}]}, 'LastViewedItem', {"GET /api/last-viewed/items/":{"protocol":"http","parameters":[{"in":"query","name":"cursor","schema":{"type":"string"},"description":"The `next_cursor` of the previous page, omitted for the first page. The next page continues after the last item of the previous one, even when items were viewed in between.","index$":0},{"in":"query","name":"limit","schema":{"type":"integer"},"description":"Maximum number of items to return, 20 by default and 100 at most.","index$":1},{"in":"query","name":"types","schema":{"type":"string"},"description":"Comma separated item types, optionally limited to a sub type with `type:sub_type`, like `database_view:grid,builder_page`. Defaults to every type.","index$":2},{"in":"query","name":"workspace_ids","schema":{"type":"string"},"description":"Comma separated ids of the workspaces to list items of. Defaults to every workspace the user is a member of.","index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let last_viewed_item_ref01_data = Object.values(setup.data.existing.last_viewed_item)[0] as any

    // LIST
    const last_viewed_item_ref01_ent = client.LastViewedItem()
    const last_viewed_item_ref01_match: any = {}

    const last_viewed_item_ref01_list = (await last_viewed_item_ref01_ent.list(last_viewed_item_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/last_viewed_item/LastViewedItemTestData.json')

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
    ['last_viewed_item01','last_viewed_item02','last_viewed_item03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_LAST_VIEWED_ITEM_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_LAST_VIEWED_ITEM_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_LAST_VIEWED_ITEM_ENTID']
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
  
