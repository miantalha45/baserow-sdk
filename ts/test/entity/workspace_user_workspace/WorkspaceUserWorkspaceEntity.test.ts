

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


describe('WorkspaceUserWorkspaceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.WorkspaceUserWorkspace()
    assert(null != ent)
  })




  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'workspace_user_workspace.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"ai_features":{"a":true,"h":"Ai Features","n":"ai_features","r":true,"ro":true,"t":"`$STRING`","key$":"ai_features","index$":0},"generative_ai_models_enabled":{"a":true,"h":"Generative Ai Models Enabled","n":"generative_ai_models_enabled","r":true,"ro":true,"sh":"Generative AI models available in this workspace.","t":"`$STRING`","key$":"generative_ai_models_enabled","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"sh":"Workspace id.","t":"`$INTEGER`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"ro":true,"sh":"Workspace name.","t":"`$STRING`","key$":"name","index$":3},"order":{"a":true,"h":"Order","n":"order","r":true,"ro":true,"sh":"The requesting user's order within the workspace users.","t":"`$INTEGER`","key$":"order","index$":4},"permissions":{"a":true,"h":"Permissions","n":"permissions","r":true,"ro":true,"sh":"The requesting user's permissions for the workspace.","t":"`$STRING`","key$":"permissions","index$":5},"unread_notifications_count":{"a":true,"h":"Unread Notifications Count","n":"unread_notifications_count","r":true,"ro":true,"sh":"The number of unread notifications for the requesting user.","t":"`$INTEGER`","key$":"unread_notifications_count","index$":6},"users":{"a":true,"h":"Users","n":"users","r":true,"ro":true,"sh":"List of all workspace users.","t":"`$ARRAY`","key$":"users","index$":7}},"id":{"field":"id","name":"id"},"name":"workspace_user_workspace","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/workspaces/invitations/{workspace_invitation_id}/accept/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"invitation_id","or":"workspace_invitation_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/workspaces/invitations/{workspace_invitation_id}/accept/","q":{"exist":["invitation_id"]},"r":{"param":{"workspace_invitation_id":"invitation_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"workspaces"},{"lit":"invitations"},{"var":"invitation_id"},{"lit":"accept"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/workspaces/create-initial-workspace/","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/workspaces/create-initial-workspace/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"workspaces"},{"lit":"create-initial-workspace"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"workspace_user_workspace","name__orig":"workspace_user_workspace","Name":"WorkspaceUserWorkspace","name_":"workspace_user_workspace","name-":"workspace-user-workspace","NAME":"WORKSPACE_USER_WORKSPACE","index$":172}, {"active":true,"entity":"workspace_user_workspace","key$":"BasicWorkspaceUserWorkspaceFlow","kind":"basic","name":"BasicWorkspaceUserWorkspaceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"workspace_user_workspace_ref01"},"m":{},"o":"create","s":[],"v":[]}]}, 'WorkspaceUserWorkspace', {"POST /api/workspaces/invitations/{workspace_invitation_id}/accept/":{"protocol":"http","parameters":[{"in":"path","name":"workspace_invitation_id","schema":{"type":"integer"},"description":"Accepts the workspace invitation related to the provided value.","required":true,"index$":0}]},"POST /api/workspaces/create-initial-workspace/":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const workspace_user_workspace_ref01_ent = client.WorkspaceUserWorkspace()
    let workspace_user_workspace_ref01_data = setup.data.new.workspace_user_workspace['workspace_user_workspace_ref01']

    workspace_user_workspace_ref01_data = (await workspace_user_workspace_ref01_ent.create(workspace_user_workspace_ref01_data)).data()
    assert(null != workspace_user_workspace_ref01_data.id)


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
      '../../../../.sdk/test/entity/workspace_user_workspace/WorkspaceUserWorkspaceTestData.json')

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
    ['workspace_user_workspace01','workspace_user_workspace02','workspace_user_workspace03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_WORKSPACE_USER_WORKSPACE_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_WORKSPACE_USER_WORKSPACE_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_WORKSPACE_USER_WORKSPACE_ENTID']
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
  
