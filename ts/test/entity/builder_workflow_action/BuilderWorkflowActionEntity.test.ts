

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


describe('BuilderWorkflowActionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.BuilderWorkflowAction()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.BuilderWorkflowAction().create({"workflow_action_id":"x","workflow_action_ids":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'builder_workflow_action.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"element_id":{"a":true,"h":"Element Id","n":"element_id","r":false,"sh":"The element the workflow actions belong to","t":"`$INTEGER`","key$":"element_id","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"workflow_action_ids":{"a":true,"h":"Workflow Action Ids","n":"workflow_action_ids","r":true,"sh":"The ids of the workflow actions in the order they are supposed to be set in","t":"`$ARRAY`","key$":"workflow_action_ids","index$":2}},"id":{"field":"id","name":"id"},"name":"builder_workflow_action","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["element_id","workflow_action_ids"],"co":{"id":"POST /api/builder/page/{page_id}/workflow_actions/order/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"page_id","or":"page_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/builder/page/{page_id}/workflow_actions/order/","q":{"exist":["page_id"]},"r":{},"rb":{"alternatives":[{"fields":[{"name":"element_id"},{"list":true,"name":"workflow_action_ids"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"element_id"},{"list":true,"name":"workflow_action_ids"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"builder"},{"lit":"page"},{"var":"page_id"},{"lit":"workflow_actions"},{"lit":"order"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/builder/workflow_action/{workflow_action_id}/dispatch/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"workflow_action_id","or":"workflow_action_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/builder/workflow_action/{workflow_action_id}/dispatch/","q":{"exist":["workflow_action_id"]},"r":{},"s":[{"lit":"api"},{"lit":"builder"},{"lit":"workflow_action"},{"var":"workflow_action_id"},{"lit":"dispatch"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/builder/workflow_action/{workflow_action_id}/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"workflow_action_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/api/builder/workflow_action/{workflow_action_id}/","q":{"exist":["id"]},"r":{"param":{"workflow_action_id":"id"}},"s":[{"lit":"api"},{"lit":"builder"},{"lit":"workflow_action"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.page"]]},"key$":"builder_workflow_action","name__orig":"builder_workflow_action","Name":"BuilderWorkflowAction","name_":"builder_workflow_action","name-":"builder-workflow-action","NAME":"BUILDER_WORKFLOW_ACTION","index$":38}, {"active":true,"entity":"builder_workflow_action","key$":"BasicBuilderWorkflowActionFlow","kind":"basic","name":"BasicBuilderWorkflowActionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"builder_workflow_action_ref01"},"m":{"workflow_action_id":"workflow_action01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{"ref":"builder_workflow_action_ref01","suffix":"_rm0"},"m":{"id":"builder_workflow_action01"},"o":"remove","s":[],"v":[]}]}, 'BuilderWorkflowAction', {"POST /api/builder/page/{page_id}/workflow_actions/order/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"workflow_action_ids":{"type":"array","items":{"type":"integer"},"description":"The ids of the workflow actions in the order they are supposed to be set in","key$":"workflow_action_ids"},"element_id":{"type":"integer","description":"The element the workflow actions belong to","key$":"element_id"}},"required":["workflow_action_ids"],"x-ref":"#/components/schemas/OrderWorkflowActions","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"workflow_action_ids":{"type":"array","items":{"type":"integer"},"description":"The ids of the workflow actions in the order they are supposed to be set in","key$":"workflow_action_ids"},"element_id":{"type":"integer","description":"The element the workflow actions belong to","key$":"element_id"}},"required":["workflow_action_ids"],"x-ref":"#/components/schemas/OrderWorkflowActions"}},"multipart/form-data":{"schema":{"type":"object","properties":{"workflow_action_ids":{"type":"array","items":{"type":"integer"},"description":"The ids of the workflow actions in the order they are supposed to be set in","key$":"workflow_action_ids"},"element_id":{"type":"integer","description":"The element the workflow actions belong to","key$":"element_id"}},"required":["workflow_action_ids"],"x-ref":"#/components/schemas/OrderWorkflowActions"}}},"required":true},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"page_id","schema":{"type":"integer"},"description":"The page the workflow actions belong to","required":true,"index$":1}]},"POST /api/builder/workflow_action/{workflow_action_id}/dispatch/":{"protocol":"http","parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"workflow_action_id","schema":{"type":"integer"},"description":"The id of the workflow_action you want to call the dispatch for.","required":true,"index$":1}]},"DELETE /api/builder/workflow_action/{workflow_action_id}/":{"protocol":"http","parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"workflow_action_id","schema":{"type":"integer"},"description":"The id of the workflow action","required":true,"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const builder_workflow_action_ref01_ent = client.BuilderWorkflowAction()
    let builder_workflow_action_ref01_data = setup.data.new.builder_workflow_action['builder_workflow_action_ref01']
    builder_workflow_action_ref01_data['workflow_action_id'] = setup.idmap['workflow_action01']

    builder_workflow_action_ref01_data = (await builder_workflow_action_ref01_ent.create(builder_workflow_action_ref01_data)).data()
    assert(null != builder_workflow_action_ref01_data.id)


    // REMOVE
    const builder_workflow_action_ref01_match_rm0: any = { id: builder_workflow_action_ref01_data.id }
    await builder_workflow_action_ref01_ent.remove(builder_workflow_action_ref01_match_rm0)
  

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
      '../../../../.sdk/test/entity/builder_workflow_action/BuilderWorkflowActionTestData.json')

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
    ['builder_workflow_action01','builder_workflow_action02','builder_workflow_action03','page01','page02','page03','workflow_action01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_BUILDER_WORKFLOW_ACTION_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_BUILDER_WORKFLOW_ACTION_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_BUILDER_WORKFLOW_ACTION_ENTID']
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
  
