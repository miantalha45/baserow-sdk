

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


describe('FieldPermissionSubjectOptionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.FieldPermissionSubjectOption()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.FieldPermissionSubjectOption().list({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'field_permission_subject_option.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"field_permission_subject_option","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/field-permissions/{field_id}/subjects/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"field_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"exclude_agent_id","or":"exclude_agent_ids","r":false,"t":"`$ARRAY`","index$":0},{"a":true,"k":"query","n":"exclude_team_id","or":"exclude_team_ids","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"exclude_user_id","or":"exclude_user_ids","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":20,"k":"query","n":"size","or":"size","r":false,"t":"`$INTEGER`","index$":5}]},"k":"http","m":"GET","o":"/api/field-permissions/{field_id}/subjects/","q":{"$action":"subjects","exist":["id"]},"r":{"param":{"field_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"field-permissions"},{"var":"id"},{"lit":"subjects"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"field_permission_subject_option","name__orig":"field_permission_subject_option","Name":"FieldPermissionSubjectOption","name_":"field_permission_subject_option","name-":"field-permission-subject-option","NAME":"FIELD_PERMISSION_SUBJECT_OPTION","index$":82}, {"active":true,"entity":"field_permission_subject_option","key$":"BasicFieldPermissionSubjectOptionFlow","kind":"basic","name":"BasicFieldPermissionSubjectOptionFlow","param":{},"step":[{"a":false,"d":{},"i":{},"m":{"field_id":"field01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"field_permission_subject_option_ref01"}}],"unreachable":true}]}, 'FieldPermissionSubjectOption', {"GET /api/field-permissions/{field_id}/subjects/":{"protocol":"http","parameters":[{"in":"query","name":"exclude_agent_ids","schema":{"type":"array","items":{"type":"integer","minimum":1}},"index$":0},{"in":"query","name":"exclude_team_ids","schema":{"type":"array","items":{"type":"integer","minimum":1}},"index$":1},{"in":"query","name":"exclude_user_ids","schema":{"type":"array","items":{"type":"integer","minimum":1}},"index$":2},{"in":"path","name":"field_id","schema":{"type":"string","pattern":"^[0-9]+$"},"required":true,"index$":3},{"in":"query","name":"page","schema":{"type":"integer","minimum":1,"default":1},"index$":4},{"in":"query","name":"search","schema":{"type":"string","nullable":true},"index$":5},{"in":"query","name":"size","schema":{"type":"integer","maximum":100,"minimum":1,"default":20},"index$":6}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let field_permission_subject_option_ref01_data = Object.values(setup.data.existing.field_permission_subject_option)[0] as any

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
      '../../../../.sdk/test/entity/field_permission_subject_option/FieldPermissionSubjectOptionTestData.json')

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
    ['field_permission_subject_option01','field_permission_subject_option02','field_permission_subject_option03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_FIELD_PERMISSION_SUBJECT_OPTION_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_FIELD_PERMISSION_SUBJECT_OPTION_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_FIELD_PERMISSION_SUBJECT_OPTION_ENTID']
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
  
