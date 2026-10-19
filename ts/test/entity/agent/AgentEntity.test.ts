

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


describe('AgentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.Agent()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Agent().create({"workspace_id":"x","name":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create', 'update', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'agent.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":true,"ro":true,"t":"`$STRING`","key$":"created_on","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":1},"last_active":{"a":true,"fo":"date-time","h":"Last Active","n":"last_active","r":false,"t":"`$STRING`","key$":"last_active","index$":2},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"name","index$":3},"role_uid":{"a":true,"h":"Role Uid","n":"role_uid","r":false,"t":"`$STRING`","key$":"role_uid","index$":4},"team_ids":{"a":true,"h":"Team Ids","n":"team_ids","r":false,"t":"`$ARRAY`","key$":"team_ids","index$":5},"teams":{"a":true,"h":"Teams","n":"teams","r":true,"ro":true,"t":"`$ARRAY`","key$":"teams","index$":6},"updated_on":{"a":true,"fo":"date-time","h":"Updated On","n":"updated_on","r":true,"ro":true,"t":"`$STRING`","key$":"updated_on","index$":7},"workspace_id":{"a":true,"h":"Workspace Id","n":"workspace_id","r":true,"ro":true,"t":"`$INTEGER`","key$":"workspace_id","index$":8}},"id":{"field":"id","name":"id"},"name":"agent","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["name","role_uid","team_ids"],"co":{"id":"POST /api/agents/workspace/{workspace_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"workspace_id","or":"workspace_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/agents/workspace/{workspace_id}/","q":{"exist":["workspace_id"]},"r":{},"rb":{"alternatives":[{"fields":[{"name":"name"},{"name":"role_uid"},{"list":true,"name":"team_ids"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"name"},{"name":"role_uid"},{"list":true,"name":"team_ids"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"agents"},{"lit":"workspace"},{"var":"workspace_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/agents/{agent_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"agent_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/api/agents/{agent_id}/","q":{"exist":["id"]},"r":{"param":{"agent_id":"id"}},"s":[{"lit":"api"},{"lit":"agents"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["name","role_uid","team_ids"],"co":{"id":"PATCH /api/agents/{agent_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"agent_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/agents/{agent_id}/","q":{"exist":["id"]},"r":{"param":{"agent_id":"id"}},"rb":{"alternatives":[{"fields":[{"name":"name"},{"name":"role_uid"},{"list":true,"name":"team_ids"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"name"},{"name":"role_uid"},{"list":true,"name":"team_ids"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"agents"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.workspace"]]},"key$":"agent","name__orig":"agent","Name":"Agent","name_":"agent","name-":"agent","NAME":"AGENT","index$":6}, {"active":true,"entity":"agent","key$":"BasicAgentFlow","kind":"basic","name":"BasicAgentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"agent_ref01"},"m":{"workspace_id":"workspace01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{"ref":"agent_ref01","srcdatavar":"agent_ref01_data","suffix":"_up0","textfield":"last_active"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-agent_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"agent_ref01","suffix":"_rm0"},"m":{"id":"agent01"},"o":"remove","s":[],"v":[]}]}, 'Agent', {"POST /api/agents/workspace/{workspace_id}/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","description":"Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.","properties":{"name":{"type":"string","maxLength":160,"key$":"name"},"role_uid":{"type":"string","maxLength":32,"key$":"role_uid"},"team_ids":{"type":"array","items":{"type":"integer"},"key$":"team_ids"}},"required":["name"],"x-ref":"#/components/schemas/AgentRequest","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","description":"Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.","properties":{"name":{"type":"string","maxLength":160,"key$":"name"},"role_uid":{"type":"string","maxLength":32,"key$":"role_uid"},"team_ids":{"type":"array","items":{"type":"integer"},"key$":"team_ids"}},"required":["name"],"x-ref":"#/components/schemas/AgentRequest"}},"multipart/form-data":{"schema":{"type":"object","description":"Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.","properties":{"name":{"type":"string","maxLength":160,"key$":"name"},"role_uid":{"type":"string","maxLength":32,"key$":"role_uid"},"team_ids":{"type":"array","items":{"type":"integer"},"key$":"team_ids"}},"required":["name"],"x-ref":"#/components/schemas/AgentRequest"}}},"required":true},"parameters":[{"in":"path","name":"workspace_id","schema":{"type":"integer"},"description":"The workspace whose agents are being managed.","required":true,"index$":0}]},"DELETE /api/agents/{agent_id}/":{"protocol":"http","parameters":[{"in":"path","name":"agent_id","schema":{"type":"integer"},"description":"The agent being managed.","required":true,"index$":0}]},"PATCH /api/agents/{agent_id}/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","description":"Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.","properties":{"name":{"type":"string","maxLength":160,"key$":"name"},"role_uid":{"type":"string","maxLength":32,"key$":"role_uid"},"team_ids":{"type":"array","items":{"type":"integer"},"key$":"team_ids"}},"x-ref":"#/components/schemas/PatchedUpdateAgentRequest","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","description":"Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.","properties":{"name":{"type":"string","maxLength":160,"key$":"name"},"role_uid":{"type":"string","maxLength":32,"key$":"role_uid"},"team_ids":{"type":"array","items":{"type":"integer"},"key$":"team_ids"}},"x-ref":"#/components/schemas/PatchedUpdateAgentRequest"}},"multipart/form-data":{"schema":{"type":"object","description":"Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.","properties":{"name":{"type":"string","maxLength":160,"key$":"name"},"role_uid":{"type":"string","maxLength":32,"key$":"role_uid"},"team_ids":{"type":"array","items":{"type":"integer"},"key$":"team_ids"}},"x-ref":"#/components/schemas/PatchedUpdateAgentRequest"}}}},"parameters":[{"in":"path","name":"agent_id","schema":{"type":"integer"},"description":"The agent being managed.","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const agent_ref01_ent = client.Agent()
    let agent_ref01_data = setup.data.new.agent['agent_ref01']
    agent_ref01_data['workspace_id'] = setup.idmap['workspace01']

    agent_ref01_data = (await agent_ref01_ent.create(agent_ref01_data)).data()
    assert(null != agent_ref01_data.id)


    // UPDATE
    const agent_ref01_data_up0: any = {}
    agent_ref01_data_up0.id = agent_ref01_data.id

    const agent_ref01_markdef_up0 = { name: 'last_active', value: 'Mark01-agent_ref01_' + setup.now }
    ;(agent_ref01_data_up0 as any)[agent_ref01_markdef_up0.name] = agent_ref01_markdef_up0.value

    const agent_ref01_resdata_up0 = (await agent_ref01_ent.update(agent_ref01_data_up0)).data()
    assert(agent_ref01_resdata_up0.id === agent_ref01_data_up0.id)

    assert((agent_ref01_resdata_up0 as any)[agent_ref01_markdef_up0.name] === agent_ref01_markdef_up0.value)


    // REMOVE
    const agent_ref01_match_rm0: any = { id: agent_ref01_data.id }
    await agent_ref01_ent.remove(agent_ref01_match_rm0)
  

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
      '../../../../.sdk/test/entity/agent/AgentTestData.json')

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
    ['agent01','agent02','agent03','workspace01','workspace02','workspace03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_AGENT_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_AGENT_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_AGENT_ENTID']
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
  
