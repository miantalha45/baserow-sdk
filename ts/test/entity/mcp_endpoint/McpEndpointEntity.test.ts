

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


describe('McpEndpointEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.McpEndpoint()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('mcp_endpoint hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of BaserowSDK.test(offline).McpEndpoint().stream('list')) { }
    }, /offline/)

    for await (const _item of BaserowSDK.test(offline).McpEndpoint()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = BaserowSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.McpEndpoint().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of BaserowSDK.test().McpEndpoint().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new BaserowSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.McpEndpoint().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.McpEndpoint().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.McpEndpoint().list({"created":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'mcp_endpoint.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created":{"a":true,"fo":"date-time","h":"Created","n":"created","r":true,"ro":true,"t":"`$STRING`","key$":"created","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":1},"key":{"a":true,"h":"Key","n":"key","r":true,"ro":true,"sh":"The unique endpoint key that can be used to authorize for the MCP service.","t":"`$STRING`","key$":"key","index$":2},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The human readable name of the MCP endpoint for the user.","t":"`$STRING`","key$":"name","index$":3},"workspace_id":{"a":true,"h":"Workspace Id","n":"workspace_id","r":true,"ro":true,"t":"`$INTEGER`","key$":"workspace_id","index$":4},"workspace_name":{"a":true,"h":"Workspace Name","n":"workspace_name","r":true,"ro":true,"t":"`$STRING`","key$":"workspace_name","index$":5}},"id":{"field":"id","name":"id"},"name":"mcp_endpoint","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["name","workspace_id"],"co":{"id":"POST /api/mcp/endpoints/","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/mcp/endpoints/","q":{},"r":{},"rb":{"alternatives":[{"fields":[{"name":"name"},{"name":"workspace_id"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"name"},{"name":"workspace_id"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"mcp"},{"lit":"endpoints"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/mcp/endpoints/","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/mcp/endpoints/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"mcp"},{"lit":"endpoints"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/mcp/endpoint/{endpoint_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"endpoint_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/mcp/endpoint/{endpoint_id}/","q":{"exist":["id"]},"r":{"param":{"endpoint_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"mcp"},{"lit":"endpoint"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/mcp/endpoint/{endpoint_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"endpoint_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/api/mcp/endpoint/{endpoint_id}/","q":{"exist":["id"]},"r":{"param":{"endpoint_id":"id"}},"s":[{"lit":"api"},{"lit":"mcp"},{"lit":"endpoint"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["name"],"co":{"id":"PATCH /api/mcp/endpoint/{endpoint_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"endpoint_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/api/mcp/endpoint/{endpoint_id}/","q":{"exist":["id"]},"r":{"param":{"endpoint_id":"id"}},"rb":{"alternatives":[{"fields":[{"name":"name"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"name"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"mcp"},{"lit":"endpoint"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"mcp_endpoint","name__orig":"mcp_endpoint","Name":"McpEndpoint","name_":"mcp_endpoint","name-":"mcp-endpoint","NAME":"MCP_ENDPOINT","index$":110}, {"active":true,"entity":"mcp_endpoint","key$":"BasicMcpEndpointFlow","kind":"basic","name":"BasicMcpEndpointFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"mcp_endpoint_ref01"},"m":{},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"mcp_endpoint_ref01"}}]},{"a":true,"d":{},"i":{"ref":"mcp_endpoint_ref01","srcdatavar":"mcp_endpoint_ref01_data","suffix":"_up0","textfield":"name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-mcp_endpoint_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"mcp_endpoint_ref01","srcdatavar":"mcp_endpoint_ref01_data","suffix":"_dt0"},"m":{"id":"mcp_endpoint01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-mcp_endpoint_ref01"}}]},{"a":true,"d":{},"i":{"ref":"mcp_endpoint_ref01","suffix":"_rm0"},"m":{"id":"mcp_endpoint01"},"o":"remove","s":[],"v":[]},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"mcp_endpoint_ref01"}}]}]}, 'McpEndpoint', {"POST /api/mcp/endpoints/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","description":"Used for validating the creation of a new MCP endpoint.","properties":{"name":{"type":"string","description":"The human readable name of the MCP endpoint for the user.","maxLength":100,"key$":"name"},"workspace_id":{"type":"integer","key$":"workspace_id"}},"required":["name","workspace_id"],"x-ref":"#/components/schemas/CreateMCPEndpoint","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","description":"Used for validating the creation of a new MCP endpoint.","properties":{"name":{"type":"string","description":"The human readable name of the MCP endpoint for the user.","maxLength":100,"key$":"name"},"workspace_id":{"type":"integer","key$":"workspace_id"}},"required":["name","workspace_id"],"x-ref":"#/components/schemas/CreateMCPEndpoint"}},"multipart/form-data":{"schema":{"type":"object","description":"Used for validating the creation of a new MCP endpoint.","properties":{"name":{"type":"string","description":"The human readable name of the MCP endpoint for the user.","maxLength":100,"key$":"name"},"workspace_id":{"type":"integer","key$":"workspace_id"}},"required":["name","workspace_id"],"x-ref":"#/components/schemas/CreateMCPEndpoint"}}},"required":true},"parameters":[]},"GET /api/mcp/endpoints/":{"protocol":"http","parameters":[]},"GET /api/mcp/endpoint/{endpoint_id}/":{"protocol":"http","parameters":[{"in":"path","name":"endpoint_id","schema":{"type":"string","pattern":"^[0-9]+$"},"required":true,"index$":0}]},"DELETE /api/mcp/endpoint/{endpoint_id}/":{"protocol":"http","parameters":[{"in":"path","name":"endpoint_id","schema":{"type":"string","pattern":"^[0-9]+$"},"required":true,"index$":0}]},"PATCH /api/mcp/endpoint/{endpoint_id}/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","description":"Used for validating updating an existing MCP endpoint.","properties":{"name":{"type":"string","description":"The human readable name of the MCP endpoint for the user.","maxLength":100,"key$":"name"}},"x-ref":"#/components/schemas/PatchedUpdateMCPEndpoint","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","description":"Used for validating updating an existing MCP endpoint.","properties":{"name":{"type":"string","description":"The human readable name of the MCP endpoint for the user.","maxLength":100,"key$":"name"}},"x-ref":"#/components/schemas/PatchedUpdateMCPEndpoint"}},"multipart/form-data":{"schema":{"type":"object","description":"Used for validating updating an existing MCP endpoint.","properties":{"name":{"type":"string","description":"The human readable name of the MCP endpoint for the user.","maxLength":100,"key$":"name"}},"x-ref":"#/components/schemas/PatchedUpdateMCPEndpoint"}}}},"parameters":[{"in":"path","name":"endpoint_id","schema":{"type":"string","pattern":"^[0-9]+$"},"required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const mcp_endpoint_ref01_ent = client.McpEndpoint()
    let mcp_endpoint_ref01_data = setup.data.new.mcp_endpoint['mcp_endpoint_ref01']

    mcp_endpoint_ref01_data = (await mcp_endpoint_ref01_ent.create(mcp_endpoint_ref01_data)).data()
    assert(null != mcp_endpoint_ref01_data.id)


    // LIST
    const mcp_endpoint_ref01_match: any = {}

    const mcp_endpoint_ref01_list = (await mcp_endpoint_ref01_ent.list(mcp_endpoint_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(mcp_endpoint_ref01_list, { id: mcp_endpoint_ref01_data.id })))


    // UPDATE
    const mcp_endpoint_ref01_data_up0: any = {}
    mcp_endpoint_ref01_data_up0.id = mcp_endpoint_ref01_data.id

    const mcp_endpoint_ref01_markdef_up0 = { name: 'name', value: 'Mark01-mcp_endpoint_ref01_' + setup.now }
    ;(mcp_endpoint_ref01_data_up0 as any)[mcp_endpoint_ref01_markdef_up0.name] = mcp_endpoint_ref01_markdef_up0.value

    const mcp_endpoint_ref01_resdata_up0 = (await mcp_endpoint_ref01_ent.update(mcp_endpoint_ref01_data_up0)).data()
    assert(mcp_endpoint_ref01_resdata_up0.id === mcp_endpoint_ref01_data_up0.id)

    assert((mcp_endpoint_ref01_resdata_up0 as any)[mcp_endpoint_ref01_markdef_up0.name] === mcp_endpoint_ref01_markdef_up0.value)


    // LOAD
    const mcp_endpoint_ref01_match_dt0: any = {}
    mcp_endpoint_ref01_match_dt0.id = mcp_endpoint_ref01_data.id
    const mcp_endpoint_ref01_data_dt0 = (await mcp_endpoint_ref01_ent.load(mcp_endpoint_ref01_match_dt0)).data()
    assert(mcp_endpoint_ref01_data_dt0.id === mcp_endpoint_ref01_data.id)


    // REMOVE
    const mcp_endpoint_ref01_match_rm0: any = { id: mcp_endpoint_ref01_data.id }
    await mcp_endpoint_ref01_ent.remove(mcp_endpoint_ref01_match_rm0)
  

    // LIST
    const mcp_endpoint_ref01_match_rt0: any = {}

    const mcp_endpoint_ref01_list_rt0 = (await mcp_endpoint_ref01_ent.list(mcp_endpoint_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(mcp_endpoint_ref01_list_rt0, { id: mcp_endpoint_ref01_data.id })))


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
      '../../../../.sdk/test/entity/mcp_endpoint/McpEndpointTestData.json')

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
    ['mcp_endpoint01','mcp_endpoint02','mcp_endpoint03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_MCP_ENDPOINT_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_MCP_ENDPOINT_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_MCP_ENDPOINT_ENTID']
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
  
