

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


describe('UserSourceUserSourceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.UserSourceUserSource()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.UserSourceUserSource().update({"id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'user_source_user_source.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"user_source_user_source","op":{"update":{"input":"data","name":"update","points":[{"a":true,"bf":["before_id"],"co":{"id":"PATCH /api/user-source/{user_source_id}/move/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"user_source_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/user-source/{user_source_id}/move/","q":{"$action":"move","exist":["id"]},"r":{"param":{"user_source_id":"id"}},"rb":{"alternatives":[{"fields":[{"name":"before_id"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"before_id"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"user-source"},{"var":"id"},{"lit":"move"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"user_source_user_source","name__orig":"user_source_user_source","Name":"UserSourceUserSource","name_":"user_source_user_source","name-":"user-source-user-source","NAME":"USER_SOURCE_USER_SOURCE","index$":156}, {"active":true,"entity":"user_source_user_source","key$":"BasicUserSourceUserSourceFlow","kind":"basic","name":"BasicUserSourceUserSourceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"user_source_user_source_ref01","srcdatavar":"user_source_user_source_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-user_source_user_source_ref01"}}],"v":[]}]}, 'UserSourceUserSource', {"PATCH /api/user-source/{user_source_id}/move/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","description":"Serializer used when moving a user source.","properties":{"before_id":{"type":"integer","nullable":true,"description":"If provided, the user_source is moved before the user_source with this Id. Otherwise the user_source is placed at the end of the page."}},"x-ref":"#/components/schemas/PatchedMoveUserSource"}},"application/x-www-form-urlencoded":{"schema":{"type":"object","description":"Serializer used when moving a user source.","properties":{"before_id":{"type":"integer","nullable":true,"description":"If provided, the user_source is moved before the user_source with this Id. Otherwise the user_source is placed at the end of the page."}},"x-ref":"#/components/schemas/PatchedMoveUserSource"}},"multipart/form-data":{"schema":{"type":"object","description":"Serializer used when moving a user source.","properties":{"before_id":{"type":"integer","nullable":true,"description":"If provided, the user_source is moved before the user_source with this Id. Otherwise the user_source is placed at the end of the page."}},"x-ref":"#/components/schemas/PatchedMoveUserSource"}}}},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"user_source_id","schema":{"type":"integer"},"description":"The id of the user_source to move","required":true,"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let user_source_user_source_ref01_data = Object.values(setup.data.existing.user_source_user_source)[0] as any

    // UPDATE
    const user_source_user_source_ref01_ent = client.UserSourceUserSource()
    const user_source_user_source_ref01_data_up0: any = {}
    user_source_user_source_ref01_data_up0.id = user_source_user_source_ref01_data.id

    const user_source_user_source_ref01_resdata_up0 = (await user_source_user_source_ref01_ent.update(user_source_user_source_ref01_data_up0)).data()
    assert(user_source_user_source_ref01_resdata_up0.id === user_source_user_source_ref01_data_up0.id)


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
      '../../../../.sdk/test/entity/user_source_user_source/UserSourceUserSourceTestData.json')

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
    ['user_source_user_source01','user_source_user_source02','user_source_user_source03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_USER_SOURCE_USER_SOURCE_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_USER_SOURCE_USER_SOURCE_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_USER_SOURCE_USER_SOURCE_ENTID']
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
  
