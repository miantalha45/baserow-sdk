

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


describe('SnapshotEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.Snapshot()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Snapshot().load({"application_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'snapshot.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"ro":true,"t":"`$STRING`","key$":"created_at","index$":0},"created_by":{"a":true,"h":"Created By","n":"created_by","r":true,"ro":true,"t":"`$ANY`","key$":"created_by","index$":1},"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":true,"ro":true,"t":"`$STRING`","key$":"created_on","index$":2},"error_code":{"a":true,"h":"Error Code","n":"error_code","r":false,"sh":"A machine readable error code indicating why the job failed.","t":"`$STRING`","key$":"error_code","index$":3},"human_readable_error":{"a":true,"h":"Human Readable Error","n":"human_readable_error","r":false,"sh":"A human readable error message indicating what went wrong.","t":"`$STRING`","key$":"human_readable_error","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":5},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":6},"progress_percentage":{"a":true,"h":"Progress Percentage","n":"progress_percentage","r":true,"sh":"A percentage indicating how far along the job is.","t":"`$INTEGER`","key$":"progress_percentage","index$":7},"snapshot_from_application":{"a":true,"h":"Snapshot From Application","n":"snapshot_from_application","r":true,"ro":true,"t":"`$INTEGER`","key$":"snapshot_from_application","index$":8},"state":{"a":true,"h":"State","n":"state","r":true,"sh":"Indicates the state of the import job.","t":"`$STRING`","key$":"state","index$":9},"type":{"a":true,"h":"Type","n":"type","r":true,"ro":true,"sh":"The type of the job.","t":"`$STRING`","key$":"type","index$":10},"updated_on":{"a":true,"fo":"date-time","h":"Updated On","n":"updated_on","r":true,"ro":true,"t":"`$STRING`","key$":"updated_on","index$":11}},"id":{"field":"id","name":"id"},"name":"snapshot","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["name"],"co":{"id":"POST /api/snapshots/application/{application_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"application_id","or":"application_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/snapshots/application/{application_id}/","q":{"exist":["application_id"]},"r":{},"rb":{"alternatives":[{"fields":[{"name":"created_at"},{"name":"created_by"},{"name":"id"},{"name":"name"},{"name":"snapshot_from_application"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"created_at"},{"name":"created_by"},{"name":"id"},{"name":"name"},{"name":"snapshot_from_application"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"snapshots"},{"lit":"application"},{"var":"application_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/snapshots/application/{application_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"application_id","or":"application_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/snapshots/application/{application_id}/","q":{"exist":["application_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"snapshots"},{"lit":"application"},{"var":"application_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/snapshots/{snapshot_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"snapshot_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/api/snapshots/{snapshot_id}/","q":{"exist":["id"]},"r":{"param":{"snapshot_id":"id"}},"s":[{"lit":"api"},{"lit":"snapshots"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.application"]]},"key$":"snapshot","name__orig":"snapshot","Name":"Snapshot","name_":"snapshot","name-":"snapshot","NAME":"SNAPSHOT","index$":139}, {"active":true,"entity":"snapshot","key$":"BasicSnapshotFlow","kind":"basic","name":"BasicSnapshotFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"snapshot_ref01"},"m":{"application_id":"application01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{"ref":"snapshot_ref01","srcdatavar":"snapshot_ref01_data","suffix":"_dt0"},"m":{"id":"snapshot01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-snapshot_ref01"}}]},{"a":true,"d":{},"i":{"ref":"snapshot_ref01","suffix":"_rm0"},"m":{"id":"snapshot01"},"o":"remove","s":[],"v":[]}]}, 'Snapshot', {"POST /api/snapshots/application/{application_id}/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"id":{"type":"integer","readOnly":true,"key$":"id"},"name":{"type":"string","maxLength":160,"key$":"name"},"snapshot_from_application":{"type":"integer","readOnly":true,"key$":"snapshot_from_application"},"created_at":{"type":"string","format":"date-time","readOnly":true,"key$":"created_at"},"created_by":{"allOf":[{"type":"object","properties":{"username":{}},"required":["username"],"x-ref":"#/components/schemas/User"}],"readOnly":true,"key$":"created_by"}},"required":["created_at","created_by","id","name","snapshot_from_application"],"x-ref":"#/components/schemas/Snapshot","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"id":{"type":"integer","readOnly":true,"key$":"id"},"name":{"type":"string","maxLength":160,"key$":"name"},"snapshot_from_application":{"type":"integer","readOnly":true,"key$":"snapshot_from_application"},"created_at":{"type":"string","format":"date-time","readOnly":true,"key$":"created_at"},"created_by":{"allOf":[{"type":"object","properties":{"username":{}},"required":["username"],"x-ref":"#/components/schemas/User"}],"readOnly":true,"key$":"created_by"}},"required":["created_at","created_by","id","name","snapshot_from_application"],"x-ref":"#/components/schemas/Snapshot"}},"multipart/form-data":{"schema":{"type":"object","properties":{"id":{"type":"integer","readOnly":true,"key$":"id"},"name":{"type":"string","maxLength":160,"key$":"name"},"snapshot_from_application":{"type":"integer","readOnly":true,"key$":"snapshot_from_application"},"created_at":{"type":"string","format":"date-time","readOnly":true,"key$":"created_at"},"created_by":{"allOf":[{"type":"object","properties":{"username":{}},"required":["username"],"x-ref":"#/components/schemas/User"}],"readOnly":true,"key$":"created_by"}},"required":["created_at","created_by","id","name","snapshot_from_application"],"x-ref":"#/components/schemas/Snapshot"}}},"required":true},"parameters":[{"in":"path","name":"application_id","schema":{"type":"integer"},"description":"Application ID for which to list snapshots.","required":true,"index$":0}]},"GET /api/snapshots/application/{application_id}/":{"protocol":"http","parameters":[{"in":"path","name":"application_id","schema":{"type":"integer"},"description":"Application ID for which to list snapshots.","required":true,"index$":0}]},"DELETE /api/snapshots/{snapshot_id}/":{"protocol":"http","parameters":[{"in":"path","name":"snapshot_id","schema":{"type":"integer"},"description":"Id of the snapshot to delete.","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const snapshot_ref01_ent = client.Snapshot()
    let snapshot_ref01_data = setup.data.new.snapshot['snapshot_ref01']
    snapshot_ref01_data['application_id'] = setup.idmap['application01']

    snapshot_ref01_data = (await snapshot_ref01_ent.create(snapshot_ref01_data)).data()
    assert(null != snapshot_ref01_data.id)


    // LOAD
    const snapshot_ref01_match_dt0: any = {}
    snapshot_ref01_match_dt0.id = snapshot_ref01_data.id
    const snapshot_ref01_data_dt0 = (await snapshot_ref01_ent.load(snapshot_ref01_match_dt0)).data()
    assert(snapshot_ref01_data_dt0.id === snapshot_ref01_data.id)


    // REMOVE
    const snapshot_ref01_match_rm0: any = { id: snapshot_ref01_data.id }
    await snapshot_ref01_ent.remove(snapshot_ref01_match_rm0)
  

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
      '../../../../.sdk/test/entity/snapshot/SnapshotTestData.json')

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
    ['snapshot01','snapshot02','snapshot03','application01','application02','application03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_SNAPSHOT_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_SNAPSHOT_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_SNAPSHOT_ENTID']
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
  
