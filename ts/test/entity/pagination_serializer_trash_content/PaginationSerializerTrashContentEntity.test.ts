

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


describe('PaginationSerializerTrashContentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.PaginationSerializerTrashContent()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PaginationSerializerTrashContent().load({"workspace_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'pagination_serializer_trash_content.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"count":{"a":true,"h":"Count","n":"count","r":true,"sh":"The total amount of results.","t":"`$INTEGER`","key$":"count","index$":0},"next":{"a":true,"fo":"uri","h":"Next","n":"next","r":true,"sh":"URL to the next page.","t":"`$STRING`","key$":"next","index$":1},"previous":{"a":true,"fo":"uri","h":"Previous","n":"previous","r":true,"sh":"URL to the previous page.","t":"`$STRING`","key$":"previous","index$":2},"results":{"a":true,"h":"Results","n":"results","r":true,"t":"`$ARRAY`","key$":"results","index$":3}},"name":"pagination_serializer_trash_content","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/trash/workspace/{workspace_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"workspace_id","or":"workspace_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"k":"query","n":"application_id","or":"application_id","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/trash/workspace/{workspace_id}/","q":{"exist":["workspace_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"trash"},{"lit":"workspace"},{"var":"workspace_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.workspace"]]},"key$":"pagination_serializer_trash_content","name__orig":"pagination_serializer_trash_content","Name":"PaginationSerializerTrashContent","name_":"pagination_serializer_trash_content","name-":"pagination-serializer-trash-content","NAME":"PAGINATION_SERIALIZER_TRASH_CONTENT","index$":120}, {"active":true,"entity":"pagination_serializer_trash_content","key$":"BasicPaginationSerializerTrashContentFlow","kind":"basic","name":"BasicPaginationSerializerTrashContentFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"pagination_serializer_trash_content_ref01","srcdatavar":"pagination_serializer_trash_content_ref01_data","suffix":"_dt0"},"m":{"id":"pagination_serializer_trash_content01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-pagination_serializer_trash_content_ref01"}}],"unreachable":true}]}, 'PaginationSerializerTrashContent', {"GET /api/trash/workspace/{workspace_id}/":{"protocol":"http","parameters":[{"in":"query","name":"application_id","schema":{"type":"integer"},"description":"Optionally filters down the trash to only items for this application in the workspace.","index$":0},{"in":"query","name":"page","schema":{"type":"integer"},"description":"Selects which page of trash contents should be returned.","index$":1},{"in":"path","name":"workspace_id","schema":{"type":"integer"},"description":"Returns the trash for the workspace with this id.","required":true,"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let pagination_serializer_trash_content_ref01_data = Object.values(setup.data.existing.pagination_serializer_trash_content)[0] as any

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
      '../../../../.sdk/test/entity/pagination_serializer_trash_content/PaginationSerializerTrashContentTestData.json')

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
    ['pagination_serializer_trash_content01','pagination_serializer_trash_content02','pagination_serializer_trash_content03','workspace01','workspace02','workspace03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_PAGINATION_SERIALIZER_TRASH_CONTENT_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_PAGINATION_SERIALIZER_TRASH_CONTENT_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_PAGINATION_SERIALIZER_TRASH_CONTENT_ENTID']
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
  
