

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


describe('IntegrationIntegrationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.IntegrationIntegration()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.IntegrationIntegration().update({"id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'integration_integration.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"integration_integration","op":{"update":{"input":"data","name":"update","points":[{"a":true,"bf":["before_id"],"co":{"id":"PATCH /api/integration/{integration_id}/move/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"integration_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/integration/{integration_id}/move/","q":{"$action":"move","exist":["id"]},"r":{"param":{"integration_id":"id"}},"rb":{"alternatives":[{"fields":[{"name":"before_id"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"before_id"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"integration"},{"var":"id"},{"lit":"move"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"integration_integration","name__orig":"integration_integration","Name":"IntegrationIntegration","name_":"integration_integration","name-":"integration-integration","NAME":"INTEGRATION_INTEGRATION","index$":94}, {"active":true,"entity":"integration_integration","key$":"BasicIntegrationIntegrationFlow","kind":"basic","name":"BasicIntegrationIntegrationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"integration_integration_ref01","srcdatavar":"integration_integration_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-integration_integration_ref01"}}],"v":[]}]}, 'IntegrationIntegration', {"PATCH /api/integration/{integration_id}/move/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"before_id":{"type":"integer","nullable":true,"description":"If provided, the integration is moved before the integration with this Id. Otherwise the integration is placed at the end of the page."}},"x-ref":"#/components/schemas/PatchedMoveIntegration"}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"before_id":{"type":"integer","nullable":true,"description":"If provided, the integration is moved before the integration with this Id. Otherwise the integration is placed at the end of the page."}},"x-ref":"#/components/schemas/PatchedMoveIntegration"}},"multipart/form-data":{"schema":{"type":"object","properties":{"before_id":{"type":"integer","nullable":true,"description":"If provided, the integration is moved before the integration with this Id. Otherwise the integration is placed at the end of the page."}},"x-ref":"#/components/schemas/PatchedMoveIntegration"}}}},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"integration_id","schema":{"type":"integer"},"description":"The id of the integration to move","required":true,"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let integration_integration_ref01_data = Object.values(setup.data.existing.integration_integration)[0] as any

    // UPDATE
    const integration_integration_ref01_ent = client.IntegrationIntegration()
    const integration_integration_ref01_data_up0: any = {}
    integration_integration_ref01_data_up0.id = integration_integration_ref01_data.id

    const integration_integration_ref01_resdata_up0 = (await integration_integration_ref01_ent.update(integration_integration_ref01_data_up0)).data()
    assert(integration_integration_ref01_resdata_up0.id === integration_integration_ref01_data_up0.id)


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
      '../../../../.sdk/test/entity/integration_integration/IntegrationIntegrationTestData.json')

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
    ['integration_integration01','integration_integration02','integration_integration03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_INTEGRATION_INTEGRATION_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_INTEGRATION_INTEGRATION_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_INTEGRATION_INTEGRATION_ENTID']
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
  
