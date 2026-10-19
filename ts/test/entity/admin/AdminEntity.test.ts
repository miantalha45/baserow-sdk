

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


describe('AdminEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.Admin()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('admin hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of BaserowSDK.test(offline).Admin().stream('list')) { }
    }, /offline/)

    for await (const _item of BaserowSDK.test(offline).Admin()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = BaserowSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Admin().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of BaserowSDK.test().Admin().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new BaserowSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Admin().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Admin().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Admin().list({"access_token":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create', 'list', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'admin.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"access_token":{"a":true,"h":"Access Token","n":"access_token","r":false,"sh":"'access_token' can be used to authorize for other endpoints that require authorization.","t":"`$STRING`","key$":"access_token","index$":0},"application_count":{"a":true,"h":"Application Count","n":"application_count","r":true,"t":"`$INTEGER`","key$":"application_count","index$":1},"application_users":{"a":true,"h":"Application Users","n":"application_users","r":true,"sh":"The amount of application builder users permitted in this license.","t":"`$INTEGER`","key$":"application_users","index$":2},"application_users_taken":{"a":true,"h":"Application Users Taken","n":"application_users_taken","r":true,"ro":true,"sh":"The amount of application builder users used so far in this license.","t":"`$INTEGER`","key$":"application_users_taken","index$":3},"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":true,"ro":true,"t":"`$STRING`","key$":"created_on","index$":4},"free_users":{"a":true,"h":"Free Users","n":"free_users","r":true,"ro":true,"t":"`$INTEGER`","key$":"free_users","index$":5},"free_users_count":{"a":true,"h":"Free Users Count","n":"free_users_count","r":true,"ro":true,"sh":"The amount of free users that are currently using the license.","t":"`$INTEGER`","key$":"free_users_count","index$":6},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":7},"is_active":{"a":true,"h":"Is Active","n":"is_active","r":true,"sh":"Indicates if the backend deems the license valid.","t":"`$BOOLEAN`","key$":"is_active","index$":8},"issued_on":{"a":true,"fo":"date-time","h":"Issued On","n":"issued_on","r":true,"sh":"The date when the license was issued.","t":"`$STRING`","key$":"issued_on","index$":9},"issued_to_email":{"a":true,"fo":"email","h":"Issued To Email","n":"issued_to_email","r":true,"sh":"Indicates to which email address the license has been issued.","t":"`$STRING`","key$":"issued_to_email","index$":10},"issued_to_name":{"a":true,"h":"Issued To Name","n":"issued_to_name","r":true,"sh":"Indicates to whom the license has been issued.","t":"`$STRING`","key$":"issued_to_name","index$":11},"last_check":{"a":true,"fo":"date-time","h":"Last Check","n":"last_check","r":false,"t":"`$STRING`","key$":"last_check","index$":12},"license":{"a":true,"h":"License","n":"license","r":true,"sh":"The license that you want to register.","t":"`$STRING`","key$":"license","index$":13},"license_id":{"a":true,"h":"License Id","n":"license_id","r":true,"sh":"Unique identifier of the license.","t":"`$STRING`","key$":"license_id","index$":14},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":15},"product_code":{"a":true,"h":"Product Code","n":"product_code","r":true,"sh":"The product code that indicates what the license unlocks.","t":"`$STRING`","key$":"product_code","index$":16},"row_count":{"a":true,"h":"Row Count","n":"row_count","r":true,"ro":true,"t":"`$INTEGER`","key$":"row_count","index$":17},"seats":{"a":true,"h":"Seats","n":"seats","r":true,"sh":"The maximum amount of users that can use the license.","t":"`$INTEGER`","key$":"seats","index$":18},"seats_taken":{"a":true,"h":"Seats Taken","n":"seats_taken","r":true,"ro":true,"sh":"The amount of users that are currently using the license.","t":"`$INTEGER`","key$":"seats_taken","index$":19},"storage_usage":{"a":true,"h":"Storage Usage","n":"storage_usage","r":false,"t":"`$INTEGER`","key$":"storage_usage","index$":20},"token":{"a":true,"de":true,"h":"Token","n":"token","r":false,"sh":"Deprecated.","t":"`$STRING`","key$":"token","index$":21},"user":{"a":true,"h":"User","n":"user","op":{"create":{"req":true,"type":"`$INTEGER`"}},"r":false,"sh":"An object containing information related to the user.","t":"`$OBJECT`","key$":"user","index$":22},"users":{"a":true,"h":"Users","n":"users","r":true,"t":"`$ARRAY`","key$":"users","index$":23},"valid_from":{"a":true,"fo":"date-time","h":"Valid From","n":"valid_from","r":true,"sh":"From which timestamp the license becomes active.","t":"`$STRING`","key$":"valid_from","index$":24},"valid_through":{"a":true,"fo":"date-time","h":"Valid Through","n":"valid_through","r":true,"sh":"Until which timestamp the license is active.","t":"`$STRING`","key$":"valid_through","index$":25}},"id":{"field":"id","name":"id"},"name":"admin","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/licenses/{id}/remove-all-users/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"license_id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/licenses/{id}/remove-all-users/","q":{"exist":["license_id"]},"r":{"param":{"id":"license_id"}},"s":[{"lit":"api"},{"lit":"licenses"},{"var":"license_id"},{"lit":"remove-all-users"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["user"],"co":{"id":"POST /api/admin/users/impersonate/","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/admin/users/impersonate/","q":{},"r":{},"rb":{"alternatives":[{"fields":[{"name":"user"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"user"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"lit":"impersonate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"bf":["license"],"co":{"id":"POST /api/licenses/","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/licenses/","q":{},"r":{},"rb":{"alternatives":[{"fields":[{"name":"license"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"license"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"licenses"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/workspaces/","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ids","or":"ids","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"size","or":"size","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"sort","or":"sorts","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/api/admin/workspaces/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"workspaces"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0},{"a":true,"co":{"id":"GET /api/licenses/","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/licenses/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"licenses"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/licenses/{id}/{user_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"DELETE","o":"/api/licenses/{id}/{user_id}/","q":{"exist":["id","user_id"]},"r":{},"s":[{"lit":"api"},{"lit":"licenses"},{"var":"id"},{"var":"user_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /api/licenses/{id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/api/licenses/{id}/","q":{"exist":["id"]},"r":{},"s":[{"lit":"api"},{"lit":"licenses"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"DELETE /api/admin/users/{user_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/api/admin/users/{user_id}/","q":{"exist":["user_id"]},"r":{},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"DELETE /api/admin/users/{user_id}/two-factor-auth/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/api/admin/users/{user_id}/two-factor-auth/","q":{"exist":["user_id"]},"r":{},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"users"},{"var":"user_id"},{"lit":"two-factor-auth"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"DELETE /api/admin/workspaces/{workspace_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"workspace_id","or":"workspace_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/api/admin/workspaces/{workspace_id}/","q":{"exist":["workspace_id"]},"r":{},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"workspaces"},{"var":"workspace_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.user"],["$.main.kit.entity.workspace"],["$.main.kit.entity.license"]]},"key$":"admin","name__orig":"admin","Name":"Admin","name_":"admin","name-":"admin","NAME":"ADMIN","index$":1}, {"active":true,"entity":"admin","key$":"BasicAdminFlow","kind":"basic","name":"BasicAdminFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"admin_ref01"},"m":{},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"admin_ref01"}}]},{"a":true,"d":{},"i":{"ref":"admin_ref01","suffix":"_rm0"},"m":{"id":"admin01"},"o":"remove","s":[],"v":[]},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"admin_ref01"}}]}]}, 'Admin', {"POST /api/licenses/{id}/remove-all-users/":{"protocol":"http","parameters":[{"in":"path","name":"id","schema":{"type":"integer"},"description":"The internal identifier of the license, this is `id` and not `license_id`.","required":true,"index$":0}]},"POST /api/admin/users/impersonate/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","description":"Serializer used for impersonation.","properties":{"user":{"type":"integer","key$":"user"}},"required":["user"],"x-ref":"#/components/schemas/BaserowImpersonateAuthToken","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","description":"Serializer used for impersonation.","properties":{"user":{"type":"integer","key$":"user"}},"required":["user"],"x-ref":"#/components/schemas/BaserowImpersonateAuthToken"}},"multipart/form-data":{"schema":{"type":"object","description":"Serializer used for impersonation.","properties":{"user":{"type":"integer","key$":"user"}},"required":["user"],"x-ref":"#/components/schemas/BaserowImpersonateAuthToken"}}},"required":true},"parameters":[]},"POST /api/licenses/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"license":{"type":"string","description":"The license that you want to register.","key$":"license"}},"required":["license"],"x-ref":"#/components/schemas/RegisterLicense","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"license":{"type":"string","description":"The license that you want to register.","key$":"license"}},"required":["license"],"x-ref":"#/components/schemas/RegisterLicense"}},"multipart/form-data":{"schema":{"type":"object","properties":{"license":{"type":"string","description":"The license that you want to register.","key$":"license"}},"required":["license"],"x-ref":"#/components/schemas/RegisterLicense"}}},"required":true},"parameters":[]},"GET /api/admin/workspaces/":{"protocol":"http","parameters":[{"in":"query","name":"ids","schema":{"type":"string"},"description":"A comma-separated list of workspaces IDs to filter by. When provided, only workspaces with those IDs are returned.","index$":0},{"in":"query","name":"page","schema":{"type":"integer"},"description":"Defines which page should be returned.","index$":1},{"in":"query","name":"search","schema":{"type":"string"},"description":"If provided only workspaces with id or name that match the query will be returned.","index$":2},{"in":"query","name":"size","schema":{"type":"integer"},"description":"Defines how many workspaces should be returned per page.","index$":3},{"in":"query","name":"sorts","schema":{"type":"string"},"description":"A comma separated string of attributes to sort by, each attribute must be prefixed with `+` for a descending sort or a `-` for an ascending sort. The accepted attribute names are: `id, name, application_count, created_on, row_count, storage_usage`. For example `sorts=-id,-name` will sort the workspaces first by descending id and then ascending name. A sortparameter with multiple instances of the same sort attribute will respond with the ERROR_INVALID_SORT_ATTRIBUTE error.","index$":4}]},"GET /api/licenses/":{"protocol":"http","parameters":[]},"DELETE /api/licenses/{id}/{user_id}/":{"protocol":"http","parameters":[{"in":"path","name":"id","schema":{"type":"integer"},"description":"The internal identifier of the license, this is `id` and not `license_id`.","required":true,"index$":0},{"in":"path","name":"user_id","schema":{"type":"integer"},"description":"The ID of the user that must be removed from the license.","required":true,"index$":1}]},"DELETE /api/licenses/{id}/":{"protocol":"http","parameters":[{"in":"path","name":"id","schema":{"type":"integer"},"description":"The internal identifier of the license, this is `id` and not `license_id`.","required":true,"index$":0}]},"DELETE /api/admin/users/{user_id}/":{"protocol":"http","parameters":[{"in":"path","name":"user_id","schema":{"type":"integer"},"description":"The id of the user to delete","required":true,"index$":0}]},"DELETE /api/admin/users/{user_id}/two-factor-auth/":{"protocol":"http","parameters":[{"in":"path","name":"user_id","schema":{"type":"integer"},"description":"The id of the user whose two-factor authentication must be removed.","required":true,"index$":0}]},"DELETE /api/admin/workspaces/{workspace_id}/":{"protocol":"http","parameters":[{"in":"path","name":"workspace_id","schema":{"type":"integer"},"description":"The id of the workspace to delete","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const admin_ref01_ent = client.Admin()
    let admin_ref01_data = setup.data.new.admin['admin_ref01']

    admin_ref01_data = (await admin_ref01_ent.create(admin_ref01_data)).data()
    assert(null != admin_ref01_data.id)


    // LIST
    const admin_ref01_match: any = {}

    const admin_ref01_list = (await admin_ref01_ent.list(admin_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(admin_ref01_list, { id: admin_ref01_data.id })))


    // REMOVE
    const admin_ref01_match_rm0: any = { id: admin_ref01_data.id }
    await admin_ref01_ent.remove(admin_ref01_match_rm0)
  

    // LIST
    const admin_ref01_match_rt0: any = {}

    const admin_ref01_list_rt0 = (await admin_ref01_ent.list(admin_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(admin_ref01_list_rt0, { id: admin_ref01_data.id })))


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
      '../../../../.sdk/test/entity/admin/AdminTestData.json')

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
    ['admin01','admin02','admin03','user01','user02','user03','workspace01','workspace02','workspace03','license01','license02','license03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_ADMIN_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_ADMIN_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_ADMIN_ENTID']
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
  
