

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


describe('WorkspaceUserEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.WorkspaceUser()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.WorkspaceUser().update({"id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'workspace_user.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":true,"ro":true,"t":"`$STRING`","key$":"created_on","index$":0},"email":{"a":true,"h":"Email","n":"email","r":true,"ro":true,"sh":"User email.","t":"`$STRING`","key$":"email","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"ro":true,"sh":"User defined name.","t":"`$STRING`","key$":"name","index$":3},"permissions":{"a":true,"h":"Permissions","n":"permissions","r":false,"sh":"The permissions that the user has within the workspace.","t":"`$STRING`","key$":"permissions","index$":4},"to_be_deleted":{"a":true,"h":"To Be Deleted","n":"to_be_deleted","r":true,"sh":"True if user account is pending deletion.","t":"`$BOOLEAN`","key$":"to_be_deleted","index$":5},"two_factor_auth":{"a":true,"h":"Two Factor Auth","n":"two_factor_auth","r":true,"ro":true,"t":"`$STRING`","key$":"two_factor_auth","index$":6},"user_id":{"a":true,"h":"User Id","n":"user_id","r":true,"ro":true,"sh":"The user that has access to the workspace.","t":"`$INTEGER`","key$":"user_id","index$":7},"workspace":{"a":true,"h":"Workspace","n":"workspace","r":true,"sh":"The workspace that the user has access to.","t":"`$INTEGER`","key$":"workspace","index$":8}},"id":{"field":"id","name":"id"},"name":"workspace_user","op":{"update":{"input":"data","name":"update","points":[{"a":true,"bf":["permissions"],"co":{"id":"PATCH /api/workspaces/users/{workspace_user_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"workspace_user_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/workspaces/users/{workspace_user_id}/","q":{"exist":["id"]},"r":{"param":{"workspace_user_id":"id"}},"rb":{"alternatives":[{"fields":[{"name":"permissions"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"permissions"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"workspaces"},{"lit":"users"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"workspace_user","name__orig":"workspace_user","Name":"WorkspaceUser","name_":"workspace_user","name-":"workspace-user","NAME":"WORKSPACE_USER","index$":171}, {"active":true,"entity":"workspace_user","key$":"BasicWorkspaceUserFlow","kind":"basic","name":"BasicWorkspaceUserFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"workspace_user_ref01","srcdatavar":"workspace_user_ref01_data","suffix":"_up0","textfield":"permissions"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-workspace_user_ref01"}}],"v":[]}]}, 'WorkspaceUser', {"PATCH /api/workspaces/users/{workspace_user_id}/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"permissions":{"type":"string","description":"The permissions that the user has within the workspace.","maxLength":32,"key$":"permissions"}},"x-ref":"#/components/schemas/PatchedUpdateWorkspaceUser","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"permissions":{"type":"string","description":"The permissions that the user has within the workspace.","maxLength":32,"key$":"permissions"}},"x-ref":"#/components/schemas/PatchedUpdateWorkspaceUser"}},"multipart/form-data":{"schema":{"type":"object","properties":{"permissions":{"type":"string","description":"The permissions that the user has within the workspace.","maxLength":32,"key$":"permissions"}},"x-ref":"#/components/schemas/PatchedUpdateWorkspaceUser"}}}},"parameters":[{"in":"path","name":"workspace_user_id","schema":{"type":"integer"},"description":"Updates the workspace user related to the provided value.","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let workspace_user_ref01_data = Object.values(setup.data.existing.workspace_user)[0] as any

    // UPDATE
    const workspace_user_ref01_ent = client.WorkspaceUser()
    const workspace_user_ref01_data_up0: any = {}
    workspace_user_ref01_data_up0.id = workspace_user_ref01_data.id

    const workspace_user_ref01_markdef_up0 = { name: 'permissions', value: 'Mark01-workspace_user_ref01_' + setup.now }
    ;(workspace_user_ref01_data_up0 as any)[workspace_user_ref01_markdef_up0.name] = workspace_user_ref01_markdef_up0.value

    const workspace_user_ref01_resdata_up0 = (await workspace_user_ref01_ent.update(workspace_user_ref01_data_up0)).data()
    assert(workspace_user_ref01_resdata_up0.id === workspace_user_ref01_data_up0.id)

    assert((workspace_user_ref01_resdata_up0 as any)[workspace_user_ref01_markdef_up0.name] === workspace_user_ref01_markdef_up0.value)


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
      '../../../../.sdk/test/entity/workspace_user/WorkspaceUserTestData.json')

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
    ['workspace_user01','workspace_user02','workspace_user03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_WORKSPACE_USER_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_WORKSPACE_USER_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_WORKSPACE_USER_ENTID']
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
  
