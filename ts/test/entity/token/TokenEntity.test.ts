

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


describe('TokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.Token()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('token hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of BaserowSDK.test(offline).Token().stream('list')) { }
    }, /offline/)

    for await (const _item of BaserowSDK.test(offline).Token()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = BaserowSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Token().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of BaserowSDK.test().Token().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new BaserowSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Token().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Token().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Token().list({"id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'token.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":0},"key":{"a":true,"h":"Key","n":"key","r":true,"sh":"The unique token key that can be used to authorize for the table row endpoints.","t":"`$STRING`","key$":"key","index$":1},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The human readable name of the database token for the user.","t":"`$STRING`","key$":"name","index$":2},"permissions":{"a":true,"h":"Permissions","n":"permissions","op":{"update":{"req":false,"type":"`$OBJECT`"}},"r":true,"sh":"Indicates per operation which permissions the database token has within the whole workspace.","t":"`$OBJECT`","union":{"branches":2,"count":8,"depth":6},"key$":"permissions","index$":3},"rotate_key":{"a":true,"h":"Rotate Key","n":"rotate_key","r":false,"sh":"Indicates if a new key must be generated.","t":"`$BOOLEAN`","key$":"rotate_key","index$":4},"workspace":{"a":true,"h":"Workspace","n":"workspace","r":true,"sh":"Only the tables of the workspace can be accessed.","t":"`$INTEGER`","key$":"workspace","index$":5}},"id":{"field":"id","name":"id"},"name":"token","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["name","workspace"],"co":{"id":"POST /api/database/tokens/","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/database/tokens/","q":{},"r":{},"rb":{"alternatives":[{"fields":[{"name":"name"},{"name":"workspace"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"name"},{"name":"workspace"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"tokens"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/database/tokens/","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/database/tokens/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"tokens"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/database/tokens/{token_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"token_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/database/tokens/{token_id}/","q":{"exist":["id"]},"r":{"param":{"token_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"tokens"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["name","permissions","rotate_key"],"co":{"id":"PATCH /api/database/tokens/{token_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"token_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/database/tokens/{token_id}/","q":{"exist":["id"]},"r":{"param":{"token_id":"id"}},"rb":{"alternatives":[{"fields":[{"name":"name"},{"name":"permissions"},{"name":"rotate_key"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"name"},{"name":"permissions"},{"name":"rotate_key"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"tokens"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"token","name__orig":"token","Name":"Token","name_":"token","name-":"token","NAME":"TOKEN","index$":147}, {"active":true,"entity":"token","key$":"BasicTokenFlow","kind":"basic","name":"BasicTokenFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"token_ref01"},"m":{},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"token_ref01"}}]},{"a":true,"d":{},"i":{"ref":"token_ref01","srcdatavar":"token_ref01_data","suffix":"_up0","textfield":"key"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-token_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"token_ref01","srcdatavar":"token_ref01_data","suffix":"_dt0"},"m":{"id":"token01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-token_ref01"}}]}]}, 'Token', {"POST /api/database/tokens/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"The human readable name of the database token for the user.","maxLength":100,"key$":"name"},"workspace":{"type":"integer","description":"Only the tables of the workspace can be accessed.","key$":"workspace"}},"required":["name","workspace"],"x-ref":"#/components/schemas/TokenCreate","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"The human readable name of the database token for the user.","maxLength":100,"key$":"name"},"workspace":{"type":"integer","description":"Only the tables of the workspace can be accessed.","key$":"workspace"}},"required":["name","workspace"],"x-ref":"#/components/schemas/TokenCreate"}},"multipart/form-data":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"The human readable name of the database token for the user.","maxLength":100,"key$":"name"},"workspace":{"type":"integer","description":"Only the tables of the workspace can be accessed.","key$":"workspace"}},"required":["name","workspace"],"x-ref":"#/components/schemas/TokenCreate"}}},"required":true},"parameters":[]},"GET /api/database/tokens/":{"protocol":"http","parameters":[]},"GET /api/database/tokens/{token_id}/":{"protocol":"http","parameters":[{"in":"path","name":"token_id","schema":{"type":"integer"},"description":"Returns the database token related to the provided value.","required":true,"index$":0}]},"PATCH /api/database/tokens/{token_id}/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"The human readable name of the database token for the user.","maxLength":100,"key$":"name"},"permissions":{"type":"object","description":"Indicates per operation which permissions the database token has within the whole workspace. If the value of for example `create` is `true`, then the token can create rows in all tables related to the workspace. If a list is provided with for example `[[\"table\", 1]]` then the token only has create permissions for the table with id 1. Same goes for if a database references is provided. `[['database', 1]]` means create permissions for all tables in the database with id 1.\n\nExample:\n```json\n{\n  \"create\": true// Allows creating rows in all tables.\n  // Allows reading rows from database 1 and table 10.\n  \"read\": [[\"database\", 1], [\"table\", 10]],\n  \"update\": false  // Denies updating rows in all tables.\n  \"delete\": []  // Denies deleting rows in all tables.\n }\n```","properties":{"create":{"anyOf":[{},{}]},"read":{"anyOf":[{},{}]},"update":{"anyOf":[{},{}]},"delete":{"anyOf":[{},{}]}},"key$":"permissions"},"rotate_key":{"type":"boolean","default":false,"description":"Indicates if a new key must be generated.","key$":"rotate_key"}},"x-ref":"#/components/schemas/PatchedTokenUpdate","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"The human readable name of the database token for the user.","maxLength":100,"key$":"name"},"permissions":{"type":"object","description":"Indicates per operation which permissions the database token has within the whole workspace. If the value of for example `create` is `true`, then the token can create rows in all tables related to the workspace. If a list is provided with for example `[[\"table\", 1]]` then the token only has create permissions for the table with id 1. Same goes for if a database references is provided. `[['database', 1]]` means create permissions for all tables in the database with id 1.\n\nExample:\n```json\n{\n  \"create\": true// Allows creating rows in all tables.\n  // Allows reading rows from database 1 and table 10.\n  \"read\": [[\"database\", 1], [\"table\", 10]],\n  \"update\": false  // Denies updating rows in all tables.\n  \"delete\": []  // Denies deleting rows in all tables.\n }\n```","properties":{"create":{"anyOf":[{},{}]},"read":{"anyOf":[{},{}]},"update":{"anyOf":[{},{}]},"delete":{"anyOf":[{},{}]}},"key$":"permissions"},"rotate_key":{"type":"boolean","default":false,"description":"Indicates if a new key must be generated.","key$":"rotate_key"}},"x-ref":"#/components/schemas/PatchedTokenUpdate"}},"multipart/form-data":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"The human readable name of the database token for the user.","maxLength":100,"key$":"name"},"permissions":{"type":"object","description":"Indicates per operation which permissions the database token has within the whole workspace. If the value of for example `create` is `true`, then the token can create rows in all tables related to the workspace. If a list is provided with for example `[[\"table\", 1]]` then the token only has create permissions for the table with id 1. Same goes for if a database references is provided. `[['database', 1]]` means create permissions for all tables in the database with id 1.\n\nExample:\n```json\n{\n  \"create\": true// Allows creating rows in all tables.\n  // Allows reading rows from database 1 and table 10.\n  \"read\": [[\"database\", 1], [\"table\", 10]],\n  \"update\": false  // Denies updating rows in all tables.\n  \"delete\": []  // Denies deleting rows in all tables.\n }\n```","properties":{"create":{"anyOf":[{},{}]},"read":{"anyOf":[{},{}]},"update":{"anyOf":[{},{}]},"delete":{"anyOf":[{},{}]}},"key$":"permissions"},"rotate_key":{"type":"boolean","default":false,"description":"Indicates if a new key must be generated.","key$":"rotate_key"}},"x-ref":"#/components/schemas/PatchedTokenUpdate"}}}},"parameters":[{"in":"path","name":"token_id","schema":{"type":"integer"},"description":"Updates the database token related to the provided value.","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const token_ref01_ent = client.Token()
    let token_ref01_data = setup.data.new.token['token_ref01']

    token_ref01_data = (await token_ref01_ent.create(token_ref01_data)).data()
    assert(null != token_ref01_data.id)


    // LIST
    const token_ref01_match: any = {}

    const token_ref01_list = (await token_ref01_ent.list(token_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(token_ref01_list, { id: token_ref01_data.id })))


    // UPDATE
    const token_ref01_data_up0: any = {}
    token_ref01_data_up0.id = token_ref01_data.id

    const token_ref01_markdef_up0 = { name: 'key', value: 'Mark01-token_ref01_' + setup.now }
    ;(token_ref01_data_up0 as any)[token_ref01_markdef_up0.name] = token_ref01_markdef_up0.value

    const token_ref01_resdata_up0 = (await token_ref01_ent.update(token_ref01_data_up0)).data()
    assert(token_ref01_resdata_up0.id === token_ref01_data_up0.id)

    assert((token_ref01_resdata_up0 as any)[token_ref01_markdef_up0.name] === token_ref01_markdef_up0.value)


    // LOAD
    const token_ref01_match_dt0: any = {}
    token_ref01_match_dt0.id = token_ref01_data.id
    const token_ref01_data_dt0 = (await token_ref01_ent.load(token_ref01_match_dt0)).data()
    assert(token_ref01_data_dt0.id === token_ref01_data.id)


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
      '../../../../.sdk/test/entity/token/TokenTestData.json')

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
    ['token01','token02','token03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_TOKEN_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_TOKEN_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_TOKEN_ENTID']
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
  
