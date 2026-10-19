

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


describe('NotificationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.Notification()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Notification().create({"id":"x","baserow_id":1,"created_on":"x","data":"x","sender":"x","type":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'notification.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{"baserow_id":"id"}},"fields":{"baserow_id":{"a":true,"h":"Baserow Id","n":"baserow_id","r":true,"sh":"The id of the notification.","t":"`$INTEGER`","key$":"baserow_id","index$":0},"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":true,"sh":"The date and time that the notification was created.","t":"`$STRING`","key$":"created_on","index$":1},"data":{"a":true,"h":"Data","n":"data","r":true,"sh":"The data associated with the notification.","t":"`$ANY`","key$":"data","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The id of the notification.","t":"`$STRING`","key$":"id","index$":3},"read":{"a":true,"h":"Read","n":"read","r":false,"sh":"If True, then the notification has been read by the user.","t":"`$BOOLEAN`","key$":"read","index$":4},"sender":{"a":true,"h":"Sender","n":"sender","r":true,"sh":"The user that sent the notification.","t":"`$ANY`","key$":"sender","index$":5},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"The type of notification","t":"`$STRING`","key$":"type","index$":6},"workspace":{"a":true,"h":"Workspace","n":"workspace","r":true,"ro":true,"sh":"The workspace that the notification is in (if any).","t":"`$STRING`","key$":"workspace","index$":7}},"id":{"field":"id","name":"id","parts":["workspace_id","notification_id"],"sep":"/"},"name":"notification","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/notifications/{workspace_id}/mark-all-as-read/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"workspace_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/notifications/{workspace_id}/mark-all-as-read/","q":{"$action":"mark_all_as_read","exist":["id"]},"r":{"param":{"workspace_id":"id"}},"s":[{"lit":"api"},{"lit":"notifications"},{"var":"id"},{"lit":"mark-all-as-read"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/notifications/{workspace_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"workspace_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/api/notifications/{workspace_id}/","q":{"exist":["id"]},"r":{"param":{"workspace_id":"id"}},"s":[{"lit":"api"},{"lit":"notifications"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/notifications/{workspace_id}/{notification_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"notification_id","or":"notification_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"workspace_id","or":"workspace_id","r":true,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"PATCH","o":"/api/notifications/{workspace_id}/{notification_id}/","q":{"exist":["notification_id","workspace_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"notifications"},{"var":"workspace_id"},{"var":"notification_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"notification","name__orig":"notification","Name":"Notification","name_":"notification","name-":"notification","NAME":"NOTIFICATION","index$":112}, {"active":true,"entity":"notification","key$":"BasicNotificationFlow","kind":"basic","name":"BasicNotificationFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"notification_ref01"},"m":{"workspace_id":"workspace01"},"o":"create","s":[],"v":[],"unreachable":true},{"a":false,"d":{"workspace_id":"workspace01"},"i":{"ref":"notification_ref01","srcdatavar":"notification_ref01_data","suffix":"_up0","textfield":"created_on"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-notification_ref01"}}],"v":[],"unreachable":true},{"a":true,"d":{},"i":{"ref":"notification_ref01","suffix":"_rm0"},"m":{"id":"notification01"},"o":"remove","s":[],"v":[]}]}, 'Notification', {"POST /api/notifications/{workspace_id}/mark-all-as-read/":{"protocol":"http","parameters":[{"in":"path","name":"workspace_id","schema":{"type":"integer"},"description":"The workspace the notifications are in.","required":true,"index$":0}]},"DELETE /api/notifications/{workspace_id}/":{"protocol":"http","parameters":[{"in":"path","name":"workspace_id","schema":{"type":"integer"},"description":"The workspace the notifications are in.","required":true,"index$":0}]},"PATCH /api/notifications/{workspace_id}/{notification_id}/":{"protocol":"http","parameters":[{"in":"path","name":"notification_id","schema":{"type":"integer"},"description":"The notification id to update.","required":true,"index$":0},{"in":"path","name":"workspace_id","schema":{"type":"integer"},"description":"The workspace the notification is in.","required":true,"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let notification_ref01_data = Object.values(setup.data.existing.notification)[0] as any

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
      '../../../../.sdk/test/entity/notification/NotificationTestData.json')

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
    ['notification01','notification02','notification03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_NOTIFICATION_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_NOTIFICATION_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_NOTIFICATION_ENTID']
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
  
