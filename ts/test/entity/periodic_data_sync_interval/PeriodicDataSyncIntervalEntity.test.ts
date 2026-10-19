

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


describe('PeriodicDataSyncIntervalEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.PeriodicDataSyncInterval()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PeriodicDataSyncInterval().load({"data_sync_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'periodic_data_sync_interval.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"automatically_deactivated":{"a":true,"h":"Automatically Deactivated","n":"automatically_deactivated","op":{"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"ro":true,"sh":"Indicates whether the periodic data sync has been deactivated.","t":"`$BOOLEAN`","key$":"automatically_deactivated","index$":0},"interval":{"a":true,"h":"Interval","n":"interval","r":false,"sh":"* `MANUAL` - MANUAL * `DAILY` - DAILY * `HOURLY` - HOURLY","t":"`$STRING`","key$":"interval","index$":1},"when":{"a":true,"fo":"time","h":"When","n":"when","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"when","index$":2}},"name":"periodic_data_sync_interval","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/data-sync/{data_sync_id}/periodic-interval/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"data_sync_id","or":"data_sync_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/data-sync/{data_sync_id}/periodic-interval/","q":{"exist":["data_sync_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"data-sync"},{"var":"data_sync_id"},{"lit":"periodic-interval"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["interval","when"],"co":{"id":"PATCH /api/data-sync/{data_sync_id}/periodic-interval/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"data_sync_id","or":"data_sync_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/data-sync/{data_sync_id}/periodic-interval/","q":{"exist":["data_sync_id"]},"r":{},"rb":{"alternatives":[{"fields":[{"name":"automatically_deactivated"},{"name":"interval"},{"name":"when"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"automatically_deactivated"},{"name":"interval"},{"name":"when"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"data-sync"},{"var":"data_sync_id"},{"lit":"periodic-interval"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.data_sync"]]},"key$":"periodic_data_sync_interval","name__orig":"periodic_data_sync_interval","Name":"PeriodicDataSyncInterval","name_":"periodic_data_sync_interval","name-":"periodic-data-sync-interval","NAME":"PERIODIC_DATA_SYNC_INTERVAL","index$":125}, {"active":true,"entity":"periodic_data_sync_interval","key$":"BasicPeriodicDataSyncIntervalFlow","kind":"basic","name":"BasicPeriodicDataSyncIntervalFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"periodic_data_sync_interval_ref01","srcdatavar":"periodic_data_sync_interval_ref01_data","suffix":"_up0","textfield":"interval"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-periodic_data_sync_interval_ref01"}}],"v":[],"unreachable":true},{"a":false,"d":{},"i":{"ref":"periodic_data_sync_interval_ref01","srcdatavar":"periodic_data_sync_interval_ref01_data","suffix":"_dt0"},"m":{"id":"periodic_data_sync_interval01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-periodic_data_sync_interval_ref01"}}],"unreachable":true}]}, 'PeriodicDataSyncInterval', {"GET /api/data-sync/{data_sync_id}/periodic-interval/":{"protocol":"http","parameters":[{"in":"path","name":"data_sync_id","schema":{"type":"integer"},"description":"The data sync where to fetch the periodic settings for.","required":true,"index$":0}]},"PATCH /api/data-sync/{data_sync_id}/periodic-interval/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"interval":{"enum":["MANUAL","DAILY","HOURLY"],"type":"string","description":"* `MANUAL` - MANUAL\n* `DAILY` - DAILY\n* `HOURLY` - HOURLY","x-ref":"#/components/schemas/PeriodicDataSyncIntervalIntervalEnum","key$":"interval"},"when":{"type":"string","format":"time","key$":"when"},"automatically_deactivated":{"type":"boolean","readOnly":true,"description":"Indicates whether the periodic data sync has been deactivated.","key$":"automatically_deactivated"}},"x-ref":"#/components/schemas/PatchedPeriodicDataSyncInterval","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"interval":{"enum":["MANUAL","DAILY","HOURLY"],"type":"string","description":"* `MANUAL` - MANUAL\n* `DAILY` - DAILY\n* `HOURLY` - HOURLY","x-ref":"#/components/schemas/PeriodicDataSyncIntervalIntervalEnum","key$":"interval"},"when":{"type":"string","format":"time","key$":"when"},"automatically_deactivated":{"type":"boolean","readOnly":true,"description":"Indicates whether the periodic data sync has been deactivated.","key$":"automatically_deactivated"}},"x-ref":"#/components/schemas/PatchedPeriodicDataSyncInterval"}},"multipart/form-data":{"schema":{"type":"object","properties":{"interval":{"enum":["MANUAL","DAILY","HOURLY"],"type":"string","description":"* `MANUAL` - MANUAL\n* `DAILY` - DAILY\n* `HOURLY` - HOURLY","x-ref":"#/components/schemas/PeriodicDataSyncIntervalIntervalEnum","key$":"interval"},"when":{"type":"string","format":"time","key$":"when"},"automatically_deactivated":{"type":"boolean","readOnly":true,"description":"Indicates whether the periodic data sync has been deactivated.","key$":"automatically_deactivated"}},"x-ref":"#/components/schemas/PatchedPeriodicDataSyncInterval"}}}},"parameters":[{"in":"path","name":"data_sync_id","schema":{"type":"integer"},"description":"Updates the data sync related to the provided value.","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let periodic_data_sync_interval_ref01_data = Object.values(setup.data.existing.periodic_data_sync_interval)[0] as any

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
      '../../../../.sdk/test/entity/periodic_data_sync_interval/PeriodicDataSyncIntervalTestData.json')

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
    ['periodic_data_sync_interval01','periodic_data_sync_interval02','periodic_data_sync_interval03','data_sync01','data_sync02','data_sync03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_PERIODIC_DATA_SYNC_INTERVAL_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_PERIODIC_DATA_SYNC_INTERVAL_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_PERIODIC_DATA_SYNC_INTERVAL_ENTID']
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
  
