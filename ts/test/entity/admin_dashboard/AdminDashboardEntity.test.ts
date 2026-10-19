

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


describe('AdminDashboardEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.AdminDashboard()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('admin_dashboard hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of BaserowSDK.test(offline).AdminDashboard().stream('list')) { }
    }, /offline/)

    for await (const _item of BaserowSDK.test(offline).AdminDashboard()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = BaserowSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.AdminDashboard().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of BaserowSDK.test().AdminDashboard().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new BaserowSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.AdminDashboard().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.AdminDashboard().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AdminDashboard().list({"active_users_last_24_hours":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'admin_dashboard.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active_users_last_24_hours":{"a":true,"h":"Active Users Last 24 Hours","n":"active_users_last_24_hours","r":true,"t":"`$INTEGER`","key$":"active_users_last_24_hours","index$":0},"active_users_last_30_days":{"a":true,"h":"Active Users Last 30 Days","n":"active_users_last_30_days","r":true,"t":"`$INTEGER`","key$":"active_users_last_30_days","index$":1},"active_users_last_7_days":{"a":true,"h":"Active Users Last 7 Days","n":"active_users_last_7_days","r":true,"t":"`$INTEGER`","key$":"active_users_last_7_days","index$":2},"active_users_per_day":{"a":true,"h":"Active Users Per Day","n":"active_users_per_day","r":true,"t":"`$ARRAY`","key$":"active_users_per_day","index$":3},"new_users_last_24_hours":{"a":true,"h":"New Users Last 24 Hours","n":"new_users_last_24_hours","r":true,"t":"`$INTEGER`","key$":"new_users_last_24_hours","index$":4},"new_users_last_30_days":{"a":true,"h":"New Users Last 30 Days","n":"new_users_last_30_days","r":true,"t":"`$INTEGER`","key$":"new_users_last_30_days","index$":5},"new_users_last_7_days":{"a":true,"h":"New Users Last 7 Days","n":"new_users_last_7_days","r":true,"t":"`$INTEGER`","key$":"new_users_last_7_days","index$":6},"new_users_per_day":{"a":true,"h":"New Users Per Day","n":"new_users_per_day","r":true,"t":"`$ARRAY`","key$":"new_users_per_day","index$":7},"previous_active_users_last_24_hours":{"a":true,"h":"Previous Active Users Last 24 Hours","n":"previous_active_users_last_24_hours","r":true,"t":"`$INTEGER`","key$":"previous_active_users_last_24_hours","index$":8},"previous_active_users_last_30_days":{"a":true,"h":"Previous Active Users Last 30 Days","n":"previous_active_users_last_30_days","r":true,"t":"`$INTEGER`","key$":"previous_active_users_last_30_days","index$":9},"previous_active_users_last_7_days":{"a":true,"h":"Previous Active Users Last 7 Days","n":"previous_active_users_last_7_days","r":true,"t":"`$INTEGER`","key$":"previous_active_users_last_7_days","index$":10},"previous_new_users_last_24_hours":{"a":true,"h":"Previous New Users Last 24 Hours","n":"previous_new_users_last_24_hours","r":true,"t":"`$INTEGER`","key$":"previous_new_users_last_24_hours","index$":11},"previous_new_users_last_30_days":{"a":true,"h":"Previous New Users Last 30 Days","n":"previous_new_users_last_30_days","r":true,"t":"`$INTEGER`","key$":"previous_new_users_last_30_days","index$":12},"previous_new_users_last_7_days":{"a":true,"h":"Previous New Users Last 7 Days","n":"previous_new_users_last_7_days","r":true,"t":"`$INTEGER`","key$":"previous_new_users_last_7_days","index$":13},"total_applications":{"a":true,"h":"Total Applications","n":"total_applications","r":true,"t":"`$INTEGER`","key$":"total_applications","index$":14},"total_users":{"a":true,"h":"Total Users","n":"total_users","r":true,"t":"`$INTEGER`","key$":"total_users","index$":15},"total_workspaces":{"a":true,"h":"Total Workspaces","n":"total_workspaces","r":true,"t":"`$INTEGER`","key$":"total_workspaces","index$":16}},"name":"admin_dashboard","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/admin/dashboard/","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/admin/dashboard/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"admin"},{"lit":"dashboard"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"admin_dashboard","name__orig":"admin_dashboard","Name":"AdminDashboard","name_":"admin_dashboard","name-":"admin-dashboard","NAME":"ADMIN_DASHBOARD","index$":2}, {"active":true,"entity":"admin_dashboard","key$":"BasicAdminDashboardFlow","kind":"basic","name":"BasicAdminDashboardFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"admin_dashboard_ref01"}}]}]}, 'AdminDashboard', {"GET /api/admin/dashboard/":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let admin_dashboard_ref01_data = Object.values(setup.data.existing.admin_dashboard)[0] as any

    // LIST
    const admin_dashboard_ref01_ent = client.AdminDashboard()
    const admin_dashboard_ref01_match: any = {}

    const admin_dashboard_ref01_list = (await admin_dashboard_ref01_ent.list(admin_dashboard_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/admin_dashboard/AdminDashboardTestData.json')

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
    ['admin_dashboard01','admin_dashboard02','admin_dashboard03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_ADMIN_DASHBOARD_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_ADMIN_DASHBOARD_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_ADMIN_DASHBOARD_ENTID']
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
  
