

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


describe('ExportEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.Export()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Export().list({"workspace_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'export.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"ro":true,"t":"`$STRING`","key$":"created_at","index$":0},"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":true,"ro":true,"t":"`$STRING`","key$":"created_on","index$":1},"error_code":{"a":true,"h":"Error Code","n":"error_code","r":false,"sh":"A machine readable error code indicating why the job failed.","t":"`$STRING`","key$":"error_code","index$":2},"exported_file_name":{"a":true,"h":"Exported File Name","n":"exported_file_name","op":{"list":{"req":true,"type":"`$STRING`"}},"r":false,"ro":true,"t":"`$STRING`","key$":"exported_file_name","index$":3},"exporter_type":{"a":true,"h":"Exporter Type","n":"exporter_type","r":true,"t":"`$STRING`","key$":"exporter_type","index$":4},"human_readable_error":{"a":true,"h":"Human Readable Error","n":"human_readable_error","r":false,"sh":"A human readable error message indicating what went wrong.","t":"`$STRING`","key$":"human_readable_error","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":6},"progress_percentage":{"a":true,"fo":"double","h":"Progress Percentage","n":"progress_percentage","op":{"list":{"req":true,"type":"`$INTEGER`"}},"r":false,"sh":"A percentage indicating how far along the job is.","t":"`$NUMBER`","key$":"progress_percentage","index$":7},"state":{"a":true,"h":"State","n":"state","r":true,"sh":"* `pending` - pending * `exporting` - exporting * `cancelled` - cancelled * `finished` - finished * `failed` - failed * `expired` - expired","t":"`$STRING`","key$":"state","index$":8},"status":{"a":true,"h":"Status","n":"status","r":true,"ro":true,"sh":"DEPRECATED: Use state instead","t":"`$STRING`","key$":"status","index$":9},"table":{"a":true,"h":"Table","n":"table","r":false,"t":"`$INTEGER`","key$":"table","index$":10},"type":{"a":true,"h":"Type","n":"type","r":true,"ro":true,"sh":"The type of the job.","t":"`$STRING`","key$":"type","index$":11},"updated_on":{"a":true,"fo":"date-time","h":"Updated On","n":"updated_on","r":true,"ro":true,"t":"`$STRING`","key$":"updated_on","index$":12},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":true,"ro":true,"t":"`$STRING`","key$":"url","index$":13},"view":{"a":true,"h":"View","n":"view","r":false,"t":"`$INTEGER`","key$":"view","index$":14},"workspace_id":{"a":true,"h":"Workspace Id","n":"workspace_id","r":true,"ro":true,"sh":"The workspace that the applications are going to be exported from.","t":"`$INTEGER`","key$":"workspace_id","index$":15}},"id":{"field":"id","name":"id"},"name":"export","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/workspaces/{workspace_id}/export/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"workspace_id","or":"workspace_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/workspaces/{workspace_id}/export/","q":{"exist":["workspace_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"workspaces"},{"var":"workspace_id"},{"lit":"export"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/database/export/{job_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"job_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/database/export/{job_id}/","q":{"exist":["id"]},"r":{"param":{"job_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"export"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.workspace"]]},"key$":"export","name__orig":"export","Name":"Export","name_":"export","name-":"export","NAME":"EXPORT","index$":77}, {"active":true,"entity":"export","key$":"BasicExportFlow","kind":"basic","name":"BasicExportFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"workspace_id":"workspace01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"export_ref01"}}]},{"a":true,"d":{},"i":{"ref":"export_ref01","srcdatavar":"export_ref01_data","suffix":"_dt0"},"m":{"id":"export01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-export_ref01"}}]}]}, 'Export', {"GET /api/workspaces/{workspace_id}/export/":{"protocol":"http","parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"workspace_id","schema":{"type":"integer"},"description":"The id of the workspace that is being exported.","required":true,"index$":1}]},"GET /api/database/export/{job_id}/":{"protocol":"http","parameters":[{"in":"path","name":"job_id","schema":{"type":"integer"},"description":"The job id to lookup information about.","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let export_ref01_data = Object.values(setup.data.existing.export)[0] as any

    // LIST
    const export_ref01_ent = client.Export()
    const export_ref01_match: any = {}
    export_ref01_match['workspace_id'] = setup.idmap['workspace01']

    const export_ref01_list = (await export_ref01_ent.list(export_ref01_match)).map((e: any) => e.data())


    // LOAD
    const export_ref01_match_dt0: any = {}
    export_ref01_match_dt0.id = export_ref01_data.id
    const export_ref01_data_dt0 = (await export_ref01_ent.load(export_ref01_match_dt0)).data()
    assert(export_ref01_data_dt0.id === export_ref01_data.id)


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
      '../../../../.sdk/test/entity/export/ExportTestData.json')

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
    ['export01','export02','export03','workspace01','workspace02','workspace03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_EXPORT_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_EXPORT_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_EXPORT_ENTID']
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
  
