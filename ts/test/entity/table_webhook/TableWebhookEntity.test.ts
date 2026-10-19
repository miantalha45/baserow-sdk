

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


describe('TableWebhookEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.TableWebhook()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.TableWebhook().load({"id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'table_webhook.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":false,"sh":"Indicates whether the web hook is active.","t":"`$BOOLEAN`","key$":"active","index$":0},"calls":{"a":true,"h":"Calls","n":"calls","r":true,"sh":"All the calls that this webhook made.","t":"`$ARRAY`","key$":"calls","index$":1},"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":true,"ro":true,"t":"`$STRING`","key$":"created_on","index$":2},"event_config":{"a":true,"h":"Event Config","n":"event_config","op":{"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"ro":true,"sh":"A list containing the addition event options.","t":"`$ARRAY`","key$":"event_config","index$":3},"events":{"a":true,"h":"Events","n":"events","op":{"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"ro":true,"sh":"A list containing the events that will trigger this webhook.","t":"`$OBJECT`","key$":"events","index$":4},"failed_triggers":{"a":true,"h":"Failed Triggers","n":"failed_triggers","r":false,"sh":"The amount of failed webhook calls.","t":"`$INTEGER`","key$":"failed_triggers","index$":5},"headers":{"a":true,"h":"Headers","n":"headers","op":{"update":{"req":false,"type":"`$OBJECT`"}},"r":true,"ro":true,"sh":"The additional headers as an object where the key is the name and the value the value.","t":"`$OBJECT`","key$":"headers","index$":6},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":7},"include_all_events":{"a":true,"h":"Include All Events","n":"include_all_events","r":false,"sh":"Indicates whether this webhook should listen to all events.","t":"`$BOOLEAN`","key$":"include_all_events","index$":8},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"An internal name of the webhook.","t":"`$STRING`","key$":"name","index$":9},"request_method":{"a":true,"h":"Request Method","n":"request_method","r":false,"sh":"The request method that be used when the event occurs.","t":"`$STRING`","key$":"request_method","index$":10},"updated_on":{"a":true,"fo":"date-time","h":"Updated On","n":"updated_on","r":true,"ro":true,"t":"`$STRING`","key$":"updated_on","index$":11},"url":{"a":true,"h":"Url","n":"url","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The URL that must be called when the webhook is triggered.","t":"`$STRING`","key$":"url","index$":12},"use_user_field_names":{"a":true,"h":"Use User Field Names","n":"use_user_field_names","r":false,"sh":"Indicates whether the field names must be used as payload key instead of the id.","t":"`$BOOLEAN`","key$":"use_user_field_names","index$":13}},"id":{"field":"id","name":"id"},"name":"table_webhook","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/database/webhooks/{webhook_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"webhook_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/database/webhooks/{webhook_id}/","q":{"exist":["id"]},"r":{"param":{"webhook_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"webhooks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["active","event_config","events","headers","include_all_events","name","request_method","url","use_user_field_names"],"co":{"id":"PATCH /api/database/webhooks/{webhook_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"webhook_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/database/webhooks/{webhook_id}/","q":{"exist":["id"]},"r":{"param":{"webhook_id":"id"}},"rb":{"alternatives":[{"fields":[{"name":"active"},{"list":true,"name":"event_config"},{"list":true,"name":"events"},{"name":"headers"},{"name":"include_all_events"},{"name":"name"},{"name":"request_method"},{"name":"url"},{"name":"use_user_field_names"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"active"},{"list":true,"name":"event_config"},{"list":true,"name":"events"},{"name":"headers"},{"name":"include_all_events"},{"name":"name"},{"name":"request_method"},{"name":"url"},{"name":"use_user_field_names"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"webhooks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"table_webhook","name__orig":"table_webhook","Name":"TableWebhook","name_":"table_webhook","name-":"table-webhook","NAME":"TABLE_WEBHOOK","index$":141}, {"active":true,"entity":"table_webhook","key$":"BasicTableWebhookFlow","kind":"basic","name":"BasicTableWebhookFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"table_webhook_ref01","srcdatavar":"table_webhook_ref01_data","suffix":"_up0","textfield":"name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-table_webhook_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"table_webhook_ref01","srcdatavar":"table_webhook_ref01_data","suffix":"_dt0"},"m":{"id":"table_webhook01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-table_webhook_ref01"}}]}]}, 'TableWebhook', {"GET /api/database/webhooks/{webhook_id}/":{"protocol":"http","parameters":[{"in":"path","name":"webhook_id","schema":{"type":"integer"},"description":"Returns the webhook related to the provided value.","required":true,"index$":0}]},"PATCH /api/database/webhooks/{webhook_id}/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"url":{"type":"string","description":"The URL that must be called when the webhook is triggered.","maxLength":2000,"key$":"url"},"include_all_events":{"type":"boolean","description":"Indicates whether this webhook should listen to all events.","key$":"include_all_events"},"events":{"type":"array","items":{"enum":["rows.created","rows.updated","rows.deleted","field.created","field.updated","field.deleted","view.created","view.updated","view.deleted","view.rows_entered"],"type":"string","description":"* `rows.created` - rows.created\n* `rows.updated` - rows.updated\n* `rows.deleted` - rows.deleted\n* `field.created` - field.created\n* `field.updated` - field.updated\n* `field.deleted` - field.deleted\n* `view.created` - view.created\n* `view.updated` - view.updated\n* `view.deleted` - view.deleted\n* `view.rows_entered` - view.rows_entered","x-ref":"#/components/schemas/EventsEnum"},"description":"A list containing the events that will trigger this webhook.","key$":"events"},"event_config":{"type":"array","items":{"type":"object","properties":{"event_type":{"allOf":[],"description":"The type of the event.\n\n* `rows.created` - rows.created\n* `rows.updated` - rows.updated\n* `rows.deleted` - rows.deleted\n* `field.created` - field.created\n* `field.updated` - field.updated\n* `field.deleted` - field.deleted\n* `view.created` - view.created\n* `view.updated` - view.updated\n* `view.deleted` - view.deleted\n* `view.rows_entered` - view.rows_entered"},"fields":{"type":"array","items":{},"description":"A list of field IDs that are related to the event."},"views":{"type":"array","items":{},"description":"A list of view IDs that are related to the event."}},"required":["event_type"],"x-ref":"#/components/schemas/TableWebhookEventConfig"},"description":"A list containing the addition event options.","key$":"event_config"},"request_method":{"allOf":[{"enum":["POST","GET","PUT","PATCH","DELETE"],"type":"string","description":"* `POST` - Post\n* `GET` - Get\n* `PUT` - Put\n* `PATCH` - Patch\n* `DELETE` - Delete","x-ref":"#/components/schemas/RequestMethodEnum"}],"description":"The request method that be used when the event occurs.\n\n* `POST` - Post\n* `GET` - Get\n* `PUT` - Put\n* `PATCH` - Patch\n* `DELETE` - Delete","key$":"request_method"},"headers":{"type":"object","additionalProperties":{},"description":"The additional headers as an object where the key is the name and the value the value.","key$":"headers"},"name":{"type":"string","description":"An internal name of the webhook.","maxLength":255,"key$":"name"},"active":{"type":"boolean","description":"Indicates whether the web hook is active. When a webhook has failed multiple times, it will automatically be deactivated.","key$":"active"},"use_user_field_names":{"type":"boolean","description":"Indicates whether the field names must be used as payload key instead of the id.","key$":"use_user_field_names"}},"x-ref":"#/components/schemas/PatchedTableWebhookUpdateRequest","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"url":{"type":"string","description":"The URL that must be called when the webhook is triggered.","maxLength":2000,"key$":"url"},"include_all_events":{"type":"boolean","description":"Indicates whether this webhook should listen to all events.","key$":"include_all_events"},"events":{"type":"array","items":{"enum":["rows.created","rows.updated","rows.deleted","field.created","field.updated","field.deleted","view.created","view.updated","view.deleted","view.rows_entered"],"type":"string","description":"* `rows.created` - rows.created\n* `rows.updated` - rows.updated\n* `rows.deleted` - rows.deleted\n* `field.created` - field.created\n* `field.updated` - field.updated\n* `field.deleted` - field.deleted\n* `view.created` - view.created\n* `view.updated` - view.updated\n* `view.deleted` - view.deleted\n* `view.rows_entered` - view.rows_entered","x-ref":"#/components/schemas/EventsEnum"},"description":"A list containing the events that will trigger this webhook.","key$":"events"},"event_config":{"type":"array","items":{"type":"object","properties":{"event_type":{"allOf":[],"description":"The type of the event.\n\n* `rows.created` - rows.created\n* `rows.updated` - rows.updated\n* `rows.deleted` - rows.deleted\n* `field.created` - field.created\n* `field.updated` - field.updated\n* `field.deleted` - field.deleted\n* `view.created` - view.created\n* `view.updated` - view.updated\n* `view.deleted` - view.deleted\n* `view.rows_entered` - view.rows_entered"},"fields":{"type":"array","items":{},"description":"A list of field IDs that are related to the event."},"views":{"type":"array","items":{},"description":"A list of view IDs that are related to the event."}},"required":["event_type"],"x-ref":"#/components/schemas/TableWebhookEventConfig"},"description":"A list containing the addition event options.","key$":"event_config"},"request_method":{"allOf":[{"enum":["POST","GET","PUT","PATCH","DELETE"],"type":"string","description":"* `POST` - Post\n* `GET` - Get\n* `PUT` - Put\n* `PATCH` - Patch\n* `DELETE` - Delete","x-ref":"#/components/schemas/RequestMethodEnum"}],"description":"The request method that be used when the event occurs.\n\n* `POST` - Post\n* `GET` - Get\n* `PUT` - Put\n* `PATCH` - Patch\n* `DELETE` - Delete","key$":"request_method"},"headers":{"type":"object","additionalProperties":{},"description":"The additional headers as an object where the key is the name and the value the value.","key$":"headers"},"name":{"type":"string","description":"An internal name of the webhook.","maxLength":255,"key$":"name"},"active":{"type":"boolean","description":"Indicates whether the web hook is active. When a webhook has failed multiple times, it will automatically be deactivated.","key$":"active"},"use_user_field_names":{"type":"boolean","description":"Indicates whether the field names must be used as payload key instead of the id.","key$":"use_user_field_names"}},"x-ref":"#/components/schemas/PatchedTableWebhookUpdateRequest"}},"multipart/form-data":{"schema":{"type":"object","properties":{"url":{"type":"string","description":"The URL that must be called when the webhook is triggered.","maxLength":2000,"key$":"url"},"include_all_events":{"type":"boolean","description":"Indicates whether this webhook should listen to all events.","key$":"include_all_events"},"events":{"type":"array","items":{"enum":["rows.created","rows.updated","rows.deleted","field.created","field.updated","field.deleted","view.created","view.updated","view.deleted","view.rows_entered"],"type":"string","description":"* `rows.created` - rows.created\n* `rows.updated` - rows.updated\n* `rows.deleted` - rows.deleted\n* `field.created` - field.created\n* `field.updated` - field.updated\n* `field.deleted` - field.deleted\n* `view.created` - view.created\n* `view.updated` - view.updated\n* `view.deleted` - view.deleted\n* `view.rows_entered` - view.rows_entered","x-ref":"#/components/schemas/EventsEnum"},"description":"A list containing the events that will trigger this webhook.","key$":"events"},"event_config":{"type":"array","items":{"type":"object","properties":{"event_type":{"allOf":[],"description":"The type of the event.\n\n* `rows.created` - rows.created\n* `rows.updated` - rows.updated\n* `rows.deleted` - rows.deleted\n* `field.created` - field.created\n* `field.updated` - field.updated\n* `field.deleted` - field.deleted\n* `view.created` - view.created\n* `view.updated` - view.updated\n* `view.deleted` - view.deleted\n* `view.rows_entered` - view.rows_entered"},"fields":{"type":"array","items":{},"description":"A list of field IDs that are related to the event."},"views":{"type":"array","items":{},"description":"A list of view IDs that are related to the event."}},"required":["event_type"],"x-ref":"#/components/schemas/TableWebhookEventConfig"},"description":"A list containing the addition event options.","key$":"event_config"},"request_method":{"allOf":[{"enum":["POST","GET","PUT","PATCH","DELETE"],"type":"string","description":"* `POST` - Post\n* `GET` - Get\n* `PUT` - Put\n* `PATCH` - Patch\n* `DELETE` - Delete","x-ref":"#/components/schemas/RequestMethodEnum"}],"description":"The request method that be used when the event occurs.\n\n* `POST` - Post\n* `GET` - Get\n* `PUT` - Put\n* `PATCH` - Patch\n* `DELETE` - Delete","key$":"request_method"},"headers":{"type":"object","additionalProperties":{},"description":"The additional headers as an object where the key is the name and the value the value.","key$":"headers"},"name":{"type":"string","description":"An internal name of the webhook.","maxLength":255,"key$":"name"},"active":{"type":"boolean","description":"Indicates whether the web hook is active. When a webhook has failed multiple times, it will automatically be deactivated.","key$":"active"},"use_user_field_names":{"type":"boolean","description":"Indicates whether the field names must be used as payload key instead of the id.","key$":"use_user_field_names"}},"x-ref":"#/components/schemas/PatchedTableWebhookUpdateRequest"}}}},"parameters":[{"in":"path","name":"webhook_id","schema":{"type":"integer"},"description":"Updates the webhook related to the provided value.","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let table_webhook_ref01_data = Object.values(setup.data.existing.table_webhook)[0] as any

    // UPDATE
    const table_webhook_ref01_ent = client.TableWebhook()
    const table_webhook_ref01_data_up0: any = {}
    table_webhook_ref01_data_up0.id = table_webhook_ref01_data.id

    const table_webhook_ref01_markdef_up0 = { name: 'name', value: 'Mark01-table_webhook_ref01_' + setup.now }
    ;(table_webhook_ref01_data_up0 as any)[table_webhook_ref01_markdef_up0.name] = table_webhook_ref01_markdef_up0.value

    const table_webhook_ref01_resdata_up0 = (await table_webhook_ref01_ent.update(table_webhook_ref01_data_up0)).data()
    assert(table_webhook_ref01_resdata_up0.id === table_webhook_ref01_data_up0.id)

    assert((table_webhook_ref01_resdata_up0 as any)[table_webhook_ref01_markdef_up0.name] === table_webhook_ref01_markdef_up0.value)


    // LOAD
    const table_webhook_ref01_match_dt0: any = {}
    table_webhook_ref01_match_dt0.id = table_webhook_ref01_data.id
    const table_webhook_ref01_data_dt0 = (await table_webhook_ref01_ent.load(table_webhook_ref01_match_dt0)).data()
    assert(table_webhook_ref01_data_dt0.id === table_webhook_ref01_data.id)


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
      '../../../../.sdk/test/entity/table_webhook/TableWebhookTestData.json')

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
    ['table_webhook01','table_webhook02','table_webhook03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_TABLE_WEBHOOK_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_TABLE_WEBHOOK_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_TABLE_WEBHOOK_ENTID']
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
  
