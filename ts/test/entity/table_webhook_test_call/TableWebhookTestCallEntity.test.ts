

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


describe('TableWebhookTestCallEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.TableWebhookTestCall()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.TableWebhookTestCall().create({"id":"x","event_type":"x","url":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'table_webhook_test_call.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"event_type":{"a":true,"h":"Event Type","n":"event_type","r":true,"sh":"The event type that must be used for the test call.","t":"`$STRING`","key$":"event_type","index$":0},"headers":{"a":true,"h":"Headers","n":"headers","r":false,"sh":"The additional headers as an object where the key is the name and the value the value.","t":"`$OBJECT`","key$":"headers","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"is_unreachable":{"a":true,"h":"Is Unreachable","n":"is_unreachable","r":true,"ro":true,"sh":"Indicates whether the provided URL could be reached.","t":"`$BOOLEAN`","key$":"is_unreachable","index$":3},"request":{"a":true,"h":"Request","n":"request","r":true,"ro":true,"sh":"A text copy of the request headers and body.","t":"`$STRING`","key$":"request","index$":4},"request_method":{"a":true,"h":"Request Method","n":"request_method","r":false,"sh":"The request method that be used when the event occurs.","t":"`$STRING`","key$":"request_method","index$":5},"response":{"a":true,"h":"Response","n":"response","r":true,"ro":true,"sh":"A text copy of the response headers and body.","t":"`$STRING`","key$":"response","index$":6},"status_code":{"a":true,"h":"Status Code","n":"status_code","r":true,"ro":true,"sh":"The HTTP response status code.","t":"`$INTEGER`","key$":"status_code","index$":7},"url":{"a":true,"h":"Url","n":"url","r":true,"sh":"The URL that must be called when the webhook is triggered.","t":"`$STRING`","key$":"url","index$":8},"use_user_field_names":{"a":true,"h":"Use User Field Names","n":"use_user_field_names","r":false,"sh":"Indicates whether the field names must be used as payload key instead of the id.","t":"`$BOOLEAN`","key$":"use_user_field_names","index$":9}},"id":{"field":"id","name":"id"},"name":"table_webhook_test_call","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["event_type","headers","request_method","url","use_user_field_names"],"co":{"id":"POST /api/database/webhooks/table/{table_id}/test-call/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"table_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/database/webhooks/table/{table_id}/test-call/","q":{"exist":["id"]},"r":{"param":{"table_id":"id"}},"rb":{"alternatives":[{"fields":[{"name":"event_type"},{"name":"headers"},{"name":"request_method"},{"name":"url"},{"name":"use_user_field_names"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"event_type"},{"name":"headers"},{"name":"request_method"},{"name":"url"},{"name":"use_user_field_names"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"webhooks"},{"lit":"table"},{"var":"id"},{"lit":"test-call"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"table_webhook_test_call","name__orig":"table_webhook_test_call","Name":"TableWebhookTestCall","name_":"table_webhook_test_call","name-":"table-webhook-test-call","NAME":"TABLE_WEBHOOK_TEST_CALL","index$":142}, {"active":true,"entity":"table_webhook_test_call","key$":"BasicTableWebhookTestCallFlow","kind":"basic","name":"BasicTableWebhookTestCallFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"table_webhook_test_call_ref01"},"m":{"table_id":"table01"},"o":"create","s":[],"v":[],"unreachable":true}]}, 'TableWebhookTestCall', {"POST /api/database/webhooks/table/{table_id}/test-call/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"url":{"type":"string","description":"The URL that must be called when the webhook is triggered.","maxLength":2000,"key$":"url"},"event_type":{"allOf":[{"enum":["rows.created","rows.updated","rows.deleted","field.created","field.updated","field.deleted","view.created","view.updated","view.deleted","view.rows_entered"],"type":"string","description":"* `rows.created` - rows.created\n* `rows.updated` - rows.updated\n* `rows.deleted` - rows.deleted\n* `field.created` - field.created\n* `field.updated` - field.updated\n* `field.deleted` - field.deleted\n* `view.created` - view.created\n* `view.updated` - view.updated\n* `view.deleted` - view.deleted\n* `view.rows_entered` - view.rows_entered","x-ref":"#/components/schemas/EventTypeEnum"}],"description":"The event type that must be used for the test call.\n\n* `rows.created` - rows.created\n* `rows.updated` - rows.updated\n* `rows.deleted` - rows.deleted\n* `field.created` - field.created\n* `field.updated` - field.updated\n* `field.deleted` - field.deleted\n* `view.created` - view.created\n* `view.updated` - view.updated\n* `view.deleted` - view.deleted\n* `view.rows_entered` - view.rows_entered","key$":"event_type"},"request_method":{"allOf":[{"enum":["POST","GET","PUT","PATCH","DELETE"],"type":"string","description":"* `POST` - Post\n* `GET` - Get\n* `PUT` - Put\n* `PATCH` - Patch\n* `DELETE` - Delete","x-ref":"#/components/schemas/RequestMethodEnum"}],"description":"The request method that be used when the event occurs.\n\n* `POST` - Post\n* `GET` - Get\n* `PUT` - Put\n* `PATCH` - Patch\n* `DELETE` - Delete","key$":"request_method"},"headers":{"type":"object","additionalProperties":{},"description":"The additional headers as an object where the key is the name and the value the value.","key$":"headers"},"use_user_field_names":{"type":"boolean","description":"Indicates whether the field names must be used as payload key instead of the id.","key$":"use_user_field_names"}},"required":["event_type","url"],"x-ref":"#/components/schemas/TableWebhookTestCallRequest","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"url":{"type":"string","description":"The URL that must be called when the webhook is triggered.","maxLength":2000,"key$":"url"},"event_type":{"allOf":[{"enum":["rows.created","rows.updated","rows.deleted","field.created","field.updated","field.deleted","view.created","view.updated","view.deleted","view.rows_entered"],"type":"string","description":"* `rows.created` - rows.created\n* `rows.updated` - rows.updated\n* `rows.deleted` - rows.deleted\n* `field.created` - field.created\n* `field.updated` - field.updated\n* `field.deleted` - field.deleted\n* `view.created` - view.created\n* `view.updated` - view.updated\n* `view.deleted` - view.deleted\n* `view.rows_entered` - view.rows_entered","x-ref":"#/components/schemas/EventTypeEnum"}],"description":"The event type that must be used for the test call.\n\n* `rows.created` - rows.created\n* `rows.updated` - rows.updated\n* `rows.deleted` - rows.deleted\n* `field.created` - field.created\n* `field.updated` - field.updated\n* `field.deleted` - field.deleted\n* `view.created` - view.created\n* `view.updated` - view.updated\n* `view.deleted` - view.deleted\n* `view.rows_entered` - view.rows_entered","key$":"event_type"},"request_method":{"allOf":[{"enum":["POST","GET","PUT","PATCH","DELETE"],"type":"string","description":"* `POST` - Post\n* `GET` - Get\n* `PUT` - Put\n* `PATCH` - Patch\n* `DELETE` - Delete","x-ref":"#/components/schemas/RequestMethodEnum"}],"description":"The request method that be used when the event occurs.\n\n* `POST` - Post\n* `GET` - Get\n* `PUT` - Put\n* `PATCH` - Patch\n* `DELETE` - Delete","key$":"request_method"},"headers":{"type":"object","additionalProperties":{},"description":"The additional headers as an object where the key is the name and the value the value.","key$":"headers"},"use_user_field_names":{"type":"boolean","description":"Indicates whether the field names must be used as payload key instead of the id.","key$":"use_user_field_names"}},"required":["event_type","url"],"x-ref":"#/components/schemas/TableWebhookTestCallRequest"}},"multipart/form-data":{"schema":{"type":"object","properties":{"url":{"type":"string","description":"The URL that must be called when the webhook is triggered.","maxLength":2000,"key$":"url"},"event_type":{"allOf":[{"enum":["rows.created","rows.updated","rows.deleted","field.created","field.updated","field.deleted","view.created","view.updated","view.deleted","view.rows_entered"],"type":"string","description":"* `rows.created` - rows.created\n* `rows.updated` - rows.updated\n* `rows.deleted` - rows.deleted\n* `field.created` - field.created\n* `field.updated` - field.updated\n* `field.deleted` - field.deleted\n* `view.created` - view.created\n* `view.updated` - view.updated\n* `view.deleted` - view.deleted\n* `view.rows_entered` - view.rows_entered","x-ref":"#/components/schemas/EventTypeEnum"}],"description":"The event type that must be used for the test call.\n\n* `rows.created` - rows.created\n* `rows.updated` - rows.updated\n* `rows.deleted` - rows.deleted\n* `field.created` - field.created\n* `field.updated` - field.updated\n* `field.deleted` - field.deleted\n* `view.created` - view.created\n* `view.updated` - view.updated\n* `view.deleted` - view.deleted\n* `view.rows_entered` - view.rows_entered","key$":"event_type"},"request_method":{"allOf":[{"enum":["POST","GET","PUT","PATCH","DELETE"],"type":"string","description":"* `POST` - Post\n* `GET` - Get\n* `PUT` - Put\n* `PATCH` - Patch\n* `DELETE` - Delete","x-ref":"#/components/schemas/RequestMethodEnum"}],"description":"The request method that be used when the event occurs.\n\n* `POST` - Post\n* `GET` - Get\n* `PUT` - Put\n* `PATCH` - Patch\n* `DELETE` - Delete","key$":"request_method"},"headers":{"type":"object","additionalProperties":{},"description":"The additional headers as an object where the key is the name and the value the value.","key$":"headers"},"use_user_field_names":{"type":"boolean","description":"Indicates whether the field names must be used as payload key instead of the id.","key$":"use_user_field_names"}},"required":["event_type","url"],"x-ref":"#/components/schemas/TableWebhookTestCallRequest"}}},"required":true},"parameters":[{"in":"path","name":"table_id","schema":{"type":"integer"},"description":"The id of the table that must be tested.","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let table_webhook_test_call_ref01_data = Object.values(setup.data.existing.table_webhook_test_call)[0] as any

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
      '../../../../.sdk/test/entity/table_webhook_test_call/TableWebhookTestCallTestData.json')

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
    ['table_webhook_test_call01','table_webhook_test_call02','table_webhook_test_call03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_TABLE_WEBHOOK_TEST_CALL_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_TABLE_WEBHOOK_TEST_CALL_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_TABLE_WEBHOOK_TEST_CALL_ENTID']
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
  
