

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


describe('AdminViewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.AdminView()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('admin_view hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of BaserowSDK.test(offline).AdminView().stream('list')) { }
    }, /offline/)

    for await (const _item of BaserowSDK.test(offline).AdminView()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = BaserowSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.AdminView().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of BaserowSDK.test().AdminView().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new BaserowSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.AdminView().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.AdminView().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AdminView().list({"ids":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create', 'list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'admin_view.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":true,"ro":true,"t":"`$STRING`","key$":"created_on","index$":0},"database_id":{"a":true,"h":"Database Id","n":"database_id","r":true,"ro":true,"t":"`$INTEGER`","key$":"database_id","index$":1},"database_name":{"a":true,"h":"Database Name","n":"database_name","r":true,"ro":true,"t":"`$STRING`","key$":"database_name","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":4},"owned_by_id":{"a":true,"h":"Owned By Id","n":"owned_by_id","r":true,"ro":true,"t":"`$INTEGER`","key$":"owned_by_id","index$":5},"owned_by_username":{"a":true,"h":"Owned By Username","n":"owned_by_username","r":true,"ro":true,"t":"`$STRING`","key$":"owned_by_username","index$":6},"ownership_type":{"a":true,"h":"Ownership Type","n":"ownership_type","r":false,"sh":"Indicates how the access to the view is determined.","t":"`$STRING`","key$":"ownership_type","index$":7},"public":{"a":true,"h":"Public","n":"public","r":false,"sh":"Indicates whether the view is publicly accessible to visitors.","t":"`$BOOLEAN`","key$":"public","index$":8},"public_view_has_password":{"a":true,"h":"Public View Has Password","n":"public_view_has_password","r":true,"ro":true,"t":"`$BOOLEAN`","key$":"public_view_has_password","index$":9},"slug":{"a":true,"h":"Slug","n":"slug","r":false,"sh":"The unique slug where the view can be accessed publicly on.","t":"`$STRING`","key$":"slug","index$":10},"table_id":{"a":true,"h":"Table Id","n":"table_id","r":true,"ro":true,"t":"`$INTEGER`","key$":"table_id","index$":11},"table_name":{"a":true,"h":"Table Name","n":"table_name","r":true,"ro":true,"t":"`$STRING`","key$":"table_name","index$":12},"type":{"a":true,"h":"Type","n":"type","r":true,"ro":true,"t":"`$STRING`","key$":"type","index$":13},"workspace_id":{"a":true,"h":"Workspace Id","n":"workspace_id","r":true,"ro":true,"t":"`$INTEGER`","key$":"workspace_id","index$":14},"workspace_name":{"a":true,"h":"Workspace Name","n":"workspace_name","r":true,"ro":true,"t":"`$STRING`","key$":"workspace_name","index$":15}},"id":{"field":"id","name":"id"},"name":"admin_view","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/database/admin/views/{view_id}/rotate-slug/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"view_id","or":"view_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/database/admin/views/{view_id}/rotate-slug/","q":{"exist":["view_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"admin"},{"lit":"views"},{"var":"view_id"},{"lit":"rotate-slug"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/database/admin/views/","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ids","or":"ids","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"only_public","or":"only_public","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"size","or":"size","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"sort","or":"sorts","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"workspace_id","or":"workspace_id","r":false,"t":"`$INTEGER`","index$":6}]},"k":"http","m":"GET","o":"/api/database/admin/views/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"admin"},{"lit":"views"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["public"],"co":{"id":"PATCH /api/database/admin/views/{view_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"view_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/database/admin/views/{view_id}/","q":{"exist":["id"]},"r":{"param":{"view_id":"id"}},"rb":{"alternatives":[{"fields":[{"name":"public"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"public"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"admin"},{"lit":"views"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.view"]]},"key$":"admin_view","name__orig":"admin_view","Name":"AdminView","name_":"admin_view","name-":"admin-view","NAME":"ADMIN_VIEW","index$":4}, {"active":true,"entity":"admin_view","key$":"BasicAdminViewFlow","kind":"basic","name":"BasicAdminViewFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"admin_view_ref01"},"m":{"view_id":"view01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"admin_view_ref01"}}]},{"a":true,"d":{},"i":{"ref":"admin_view_ref01","srcdatavar":"admin_view_ref01_data","suffix":"_up0","textfield":"name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-admin_view_ref01"}}],"v":[]}]}, 'AdminView', {"POST /api/database/admin/views/{view_id}/rotate-slug/":{"protocol":"http","parameters":[{"in":"path","name":"view_id","schema":{"type":"integer"},"description":"The id of the view whose slug must be rotated.","required":true,"index$":0}]},"GET /api/database/admin/views/":{"protocol":"http","parameters":[{"in":"query","name":"ids","schema":{"type":"string"},"description":"A comma-separated list of views IDs to filter by. When provided, only views with those IDs are returned.","index$":0},{"in":"query","name":"only_public","schema":{"type":"boolean"},"description":"If set to `true`, only publicly shared views are returned.","index$":1},{"in":"query","name":"page","schema":{"type":"integer"},"description":"Defines which page should be returned.","index$":2},{"in":"query","name":"search","schema":{"type":"string"},"description":"If provided, only views matching it exactly by slug, by the email address of their owner, or by the id of the view, its table, its database, its workspace or its owner are returned. Names are not searched.","index$":3},{"in":"query","name":"size","schema":{"type":"integer"},"description":"Defines how many views should be returned per page.","index$":4},{"in":"query","name":"sorts","schema":{"type":"string"},"description":"A comma separated string of attributes to sort by, each attribute must be prefixed with `+` for a descending sort or a `-` for an ascending sort. The accepted attribute names are: `id, name, type, database_name, workspace_name, public, owned_by_username, created_on`. For example `sorts=-id,-name` will sort the views first by descending id and then ascending name. A sortparameter with multiple instances of the same sort attribute will respond with the ERROR_INVALID_SORT_ATTRIBUTE error.","index$":5},{"in":"query","name":"workspace_id","schema":{"type":"integer"},"description":"If provided, only views in the workspace with this id are returned.","index$":6}]},"PATCH /api/database/admin/views/{view_id}/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"public":{"type":"boolean","description":"Indicates whether the view must be publicly shared.","key$":"public"}},"x-ref":"#/components/schemas/PatchedAdminViewUpdate","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"public":{"type":"boolean","description":"Indicates whether the view must be publicly shared.","key$":"public"}},"x-ref":"#/components/schemas/PatchedAdminViewUpdate"}},"multipart/form-data":{"schema":{"type":"object","properties":{"public":{"type":"boolean","description":"Indicates whether the view must be publicly shared.","key$":"public"}},"x-ref":"#/components/schemas/PatchedAdminViewUpdate"}}}},"parameters":[{"in":"path","name":"view_id","schema":{"type":"integer"},"description":"The id of the view to update.","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const admin_view_ref01_ent = client.AdminView()
    let admin_view_ref01_data = setup.data.new.admin_view['admin_view_ref01']
    admin_view_ref01_data['view_id'] = setup.idmap['view01']

    admin_view_ref01_data = (await admin_view_ref01_ent.create(admin_view_ref01_data)).data()
    assert(null != admin_view_ref01_data.id)


    // LIST
    const admin_view_ref01_match: any = {}

    const admin_view_ref01_list = (await admin_view_ref01_ent.list(admin_view_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(admin_view_ref01_list, { id: admin_view_ref01_data.id })))


    // UPDATE
    const admin_view_ref01_data_up0: any = {}
    admin_view_ref01_data_up0.id = admin_view_ref01_data.id

    const admin_view_ref01_markdef_up0 = { name: 'name', value: 'Mark01-admin_view_ref01_' + setup.now }
    ;(admin_view_ref01_data_up0 as any)[admin_view_ref01_markdef_up0.name] = admin_view_ref01_markdef_up0.value

    const admin_view_ref01_resdata_up0 = (await admin_view_ref01_ent.update(admin_view_ref01_data_up0)).data()
    assert(admin_view_ref01_resdata_up0.id === admin_view_ref01_data_up0.id)

    assert((admin_view_ref01_resdata_up0 as any)[admin_view_ref01_markdef_up0.name] === admin_view_ref01_markdef_up0.value)


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
      '../../../../.sdk/test/entity/admin_view/AdminViewTestData.json')

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
    ['admin_view01','admin_view02','admin_view03','view01','view02','view03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_ADMIN_VIEW_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_ADMIN_VIEW_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_ADMIN_VIEW_ENTID']
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
  
