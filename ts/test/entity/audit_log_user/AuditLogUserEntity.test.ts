

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


describe('AuditLogUserEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.AuditLogUser()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('audit_log_user hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of BaserowSDK.test(offline).AuditLogUser().stream('list')) { }
    }, /offline/)

    for await (const _item of BaserowSDK.test(offline).AuditLogUser()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = BaserowSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.AuditLogUser().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of BaserowSDK.test().AuditLogUser().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new BaserowSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.AuditLogUser().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.AuditLogUser().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AuditLogUser().list({"ids":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'audit_log_user.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":0},"value":{"a":true,"h":"Value","n":"value","r":true,"t":"`$STRING`","key$":"value","index$":1}},"id":{"field":"id","name":"id"},"name":"audit_log_user","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/audit-log/users/","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ids","or":"ids","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"size","or":"size","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"workspace_id","or":"workspace_id","r":false,"t":"`$INTEGER`","index$":4}]},"k":"http","m":"GET","o":"/api/admin/audit-log/users/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"audit-log"},{"lit":"users"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0},{"a":true,"co":{"id":"GET /api/audit-log/users/","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"ids","or":"ids","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"size","or":"size","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"workspace_id","or":"workspace_id","r":false,"t":"`$INTEGER`","index$":4}]},"k":"http","m":"GET","o":"/api/audit-log/users/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"audit-log"},{"lit":"users"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"audit_log_user","name__orig":"audit_log_user","Name":"AuditLogUser","name_":"audit_log_user","name-":"audit-log-user","NAME":"AUDIT_LOG_USER","index$":21}, {"active":true,"entity":"audit_log_user","key$":"BasicAuditLogUserFlow","kind":"basic","name":"BasicAuditLogUserFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"audit_log_user_ref01"}}]}]}, 'AuditLogUser', {"GET /api/admin/audit-log/users/":{"protocol":"http","parameters":[{"in":"query","name":"ids","schema":{"type":"string"},"description":"A comma-separated list of users IDs to filter by. When provided, only users with those IDs are returned.","index$":0},{"in":"query","name":"page","schema":{"type":"integer"},"description":"Defines which page should be returned.","index$":1},{"in":"query","name":"search","schema":{"type":"string"},"description":"If provided only users with email that match the query will be returned.","index$":2},{"in":"query","name":"size","schema":{"type":"integer"},"description":"Defines how many users should be returned per page.","index$":3},{"in":"query","name":"workspace_id","schema":{"type":"integer"},"description":"Return users belonging to the given workspace_id.","index$":4}]},"GET /api/audit-log/users/":{"protocol":"http","parameters":[{"in":"query","name":"ids","schema":{"type":"string"},"description":"A comma-separated list of users IDs to filter by. When provided, only users with those IDs are returned.","index$":0},{"in":"query","name":"page","schema":{"type":"integer"},"description":"Defines which page should be returned.","index$":1},{"in":"query","name":"search","schema":{"type":"string"},"description":"If provided only users with email that match the query will be returned.","index$":2},{"in":"query","name":"size","schema":{"type":"integer"},"description":"Defines how many users should be returned per page.","index$":3},{"in":"query","name":"workspace_id","schema":{"type":"integer"},"description":"Return users belonging to the given workspace_id.","index$":4}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let audit_log_user_ref01_data = Object.values(setup.data.existing.audit_log_user)[0] as any

    // LIST
    const audit_log_user_ref01_ent = client.AuditLogUser()
    const audit_log_user_ref01_match: any = {}

    const audit_log_user_ref01_list = (await audit_log_user_ref01_ent.list(audit_log_user_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/audit_log_user/AuditLogUserTestData.json')

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
    ['audit_log_user01','audit_log_user02','audit_log_user03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_AUDIT_LOG_USER_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_AUDIT_LOG_USER_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_AUDIT_LOG_USER_ENTID']
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
  
