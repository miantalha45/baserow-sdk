

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


describe('AutomationWorkflowHistoryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.AutomationWorkflowHistory()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AutomationWorkflowHistory().list({"workflow_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'automation_workflow_history.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"cancellation_requested_on":{"a":true,"fo":"date-time","h":"Cancellation Requested On","n":"cancellation_requested_on","r":false,"sh":"When the cancellation of this run was requested.","t":"`$STRING`","key$":"cancellation_requested_on","index$":0},"completed_on":{"a":true,"fo":"date-time","h":"Completed On","n":"completed_on","r":false,"t":"`$STRING`","key$":"completed_on","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":2},"is_test_run":{"a":true,"h":"Is Test Run","n":"is_test_run","r":true,"sh":"True when the workflow is being simulated.","t":"`$BOOLEAN`","key$":"is_test_run","index$":3},"message":{"a":true,"h":"Message","n":"message","r":true,"t":"`$STRING`","key$":"message","index$":4},"plugin_data":{"a":true,"h":"Plugin Data","n":"plugin_data","r":true,"ro":true,"t":"`$OBJECT`","key$":"plugin_data","index$":5},"simulate_until_node":{"a":true,"h":"Simulate Until Node","n":"simulate_until_node","r":false,"t":"`$INTEGER`","key$":"simulate_until_node","index$":6},"started_on":{"a":true,"fo":"date-time","h":"Started On","n":"started_on","r":true,"t":"`$STRING`","key$":"started_on","index$":7},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"* `success` - Success * `error` - Error * `disabled` - Disabled * `started` - Started * `skipped` - Skipped * `cancelled` - Cancelled","t":"`$STRING`","key$":"status","index$":8},"triggered_by":{"a":true,"h":"Triggered By","n":"triggered_by","r":true,"ro":true,"t":"`$ANY`","key$":"triggered_by","index$":9}},"id":{"field":"id","name":"id"},"name":"automation_workflow_history","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/automation/workflow_histories/{workflow_history_id}/cancel/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"workflow_history_id","or":"workflow_history_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/automation/workflow_histories/{workflow_history_id}/cancel/","q":{"exist":["workflow_history_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"automation"},{"lit":"workflow_histories"},{"var":"workflow_history_id"},{"lit":"cancel"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/automation/workflows/{workflow_id}/history/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"workflow_id","or":"workflow_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/automation/workflows/{workflow_id}/history/","q":{"exist":["workflow_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"automation"},{"lit":"workflows"},{"var":"workflow_id"},{"lit":"history"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"automation_workflow_history","name__orig":"automation_workflow_history","Name":"AutomationWorkflowHistory","name_":"automation_workflow_history","name-":"automation-workflow-history","NAME":"AUTOMATION_WORKFLOW_HISTORY","index$":29}, {"active":true,"entity":"automation_workflow_history","key$":"BasicAutomationWorkflowHistoryFlow","kind":"basic","name":"BasicAutomationWorkflowHistoryFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"automation_workflow_history_ref01"},"m":{"workflow_history_id":"workflow_history01","workflow_id":"workflow01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{"workflow_id":"workflow01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"automation_workflow_history_ref01"}}]}]}, 'AutomationWorkflowHistory', {"POST /api/automation/workflow_histories/{workflow_history_id}/cancel/":{"protocol":"http","parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"workflow_history_id","schema":{"type":"integer"},"description":"The id of the workflow history to cancel.","required":true,"index$":1}]},"GET /api/automation/workflows/{workflow_id}/history/":{"protocol":"http","parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"workflow_id","schema":{"type":"integer"},"description":"The id of the workflow.","required":true,"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const automation_workflow_history_ref01_ent = client.AutomationWorkflowHistory()
    let automation_workflow_history_ref01_data = setup.data.new.automation_workflow_history['automation_workflow_history_ref01']
    automation_workflow_history_ref01_data['workflow_history_id'] = setup.idmap['workflow_history01']
    automation_workflow_history_ref01_data['workflow_id'] = setup.idmap['workflow01']

    automation_workflow_history_ref01_data = (await automation_workflow_history_ref01_ent.create(automation_workflow_history_ref01_data)).data()
    assert(null != automation_workflow_history_ref01_data.id)


    // LIST
    const automation_workflow_history_ref01_match: any = {}
    automation_workflow_history_ref01_match['workflow_id'] = setup.idmap['workflow01']

    const automation_workflow_history_ref01_list = (await automation_workflow_history_ref01_ent.list(automation_workflow_history_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(automation_workflow_history_ref01_list, { id: automation_workflow_history_ref01_data.id })))


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
      '../../../../.sdk/test/entity/automation_workflow_history/AutomationWorkflowHistoryTestData.json')

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
    ['automation_workflow_history01','automation_workflow_history02','automation_workflow_history03','workflow_history01','workflow01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_AUTOMATION_WORKFLOW_HISTORY_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_AUTOMATION_WORKFLOW_HISTORY_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_AUTOMATION_WORKFLOW_HISTORY_ENTID']
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
  
