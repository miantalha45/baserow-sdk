

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


describe('DatabaseTableRowEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.DatabaseTableRow()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.DatabaseTableRow().load({"table_{id}":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'database_table_row.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"items":{"a":true,"h":"Items","n":"items","r":true,"t":"`$ARRAY`","key$":"items","index$":1},"mode":{"a":true,"h":"Mode","n":"mode","r":true,"sh":"The mode to use to receive notifications for new comments on a table row.","t":"`$STRING`","key$":"mode","index$":2},"row_id":{"a":true,"h":"Row Id","n":"row_id","r":false,"sh":"the name of the row with id `row_id` from table with id `table_id`.","t":"`$STRING`","key$":"row_id","index$":3}},"id":{"field":"id","name":"id","parts":["table_id","row_id"],"sep":"/"},"name":"database_table_row","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["items"],"co":{"id":"POST /api/database/rows/table/{table_id}/batch-delete/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"client_undo_redo_action_group_id","or":"ClientUndoRedoActionGroupId","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"k":"param","n":"table_id","or":"table_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"k":"query","n":"send_webhook_event","or":"send_webhook_events","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"view","or":"view","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"POST","o":"/api/database/rows/table/{table_id}/batch-delete/","q":{"exist":["table_id"]},"r":{},"rb":{"alternatives":[{"fields":[{"list":true,"name":"items"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"list":true,"name":"items"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"rows"},{"lit":"table"},{"var":"table_id"},{"lit":"batch-delete"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/database/rows/names/","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"table_{id}","or":"table__{id}","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/database/rows/names/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"rows"},{"lit":"names"}],"t":{"req":"`reqdata`","res":"`body.{table_id}*`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/database/rows/table/{table_id}/{row_id}/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"client_undo_redo_action_group_id","or":"ClientUndoRedoActionGroupId","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"k":"param","n":"row_id","or":"row_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"table_id","or":"table_id","r":true,"t":"`$INTEGER`","index$":1}],"query":[{"a":true,"k":"query","n":"send_webhook_event","or":"send_webhook_events","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"view","or":"view","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"DELETE","o":"/api/database/rows/table/{table_id}/{row_id}/","q":{"exist":["row_id","table_id"]},"r":{},"s":[{"lit":"api"},{"lit":"database"},{"lit":"rows"},{"lit":"table"},{"var":"table_id"},{"var":"row_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["mode"],"co":{"id":"PUT /api/row_comments/{table_id}/{row_id}/notification-mode/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"row_comment_id","or":"table_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"row_id","or":"row_id","r":true,"t":"`$INTEGER`","index$":1}],"query":[{"a":true,"k":"query","n":"view","or":"view","r":false,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PUT","o":"/api/row_comments/{table_id}/{row_id}/notification-mode/","q":{"exist":["row_comment_id","row_id"]},"r":{"param":{"table_id":"row_comment_id"}},"rb":{"alternatives":[{"fields":[{"name":"mode"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"mode"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"row_comments"},{"var":"row_comment_id"},{"var":"row_id"},{"lit":"notification-mode"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.table"],["$.main.kit.entity.row_comment"]]},"key$":"database_table_row","name__orig":"database_table_row","Name":"DatabaseTableRow","name_":"database_table_row","name-":"database-table-row","NAME":"DATABASE_TABLE_ROW","index$":56}, {"active":true,"entity":"database_table_row","key$":"BasicDatabaseTableRowFlow","kind":"basic","name":"BasicDatabaseTableRowFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"database_table_row_ref01"},"m":{"row_comment_id":"row_comment01","table_id":"table01"},"o":"create","s":[],"v":[]},{"a":true,"d":{"row_comment_id":"row_comment01"},"i":{"ref":"database_table_row_ref01","srcdatavar":"database_table_row_ref01_data","suffix":"_up0","textfield":"mode"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-database_table_row_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"database_table_row_ref01","srcdatavar":"database_table_row_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-database_table_row_ref01"}}]},{"a":true,"d":{},"i":{"ref":"database_table_row_ref01","suffix":"_rm0"},"m":{"id":"database_table_row01","table_id":"table01"},"o":"remove","s":[],"v":[]}]}, 'DatabaseTableRow', {"POST /api/database/rows/table/{table_id}/batch-delete/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"items":{"type":"array","items":{"type":"integer"},"maxItems":200,"minItems":1,"key$":"items"}},"required":["items"],"x-ref":"#/components/schemas/BatchDeleteRows","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"items":{"type":"array","items":{"type":"integer"},"maxItems":200,"minItems":1,"key$":"items"}},"required":["items"],"x-ref":"#/components/schemas/BatchDeleteRows"}},"multipart/form-data":{"schema":{"type":"object","properties":{"items":{"type":"array","items":{"type":"integer"},"maxItems":200,"minItems":1,"key$":"items"}},"required":["items"],"x-ref":"#/components/schemas/BatchDeleteRows"}}},"required":true},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"header","name":"ClientUndoRedoActionGroupId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.","index$":1},{"in":"query","name":"send_webhook_events","schema":{"type":"boolean"},"description":"A flag query parameter that triggers webhooks after the operation, if set to `y`, `yes`, `true`, `t`, `on`, `1`, or left empty. Defaults to `true`","index$":2},{"in":"path","name":"table_id","schema":{"type":"integer"},"description":"Deletes the rows in the table related to the value.","required":true,"index$":3},{"in":"query","name":"view","schema":{"type":"integer"},"description":"Provide if the rows are deleted in a view. This can result in different permission checking and default values.","index$":4}]},"GET /api/database/rows/names/":{"protocol":"http","parameters":[{"in":"query","name":"table__{id}","schema":{"type":"string"},"description":"A list of comma separated row ids to query from the table with id {id}. For example, if you want the name of row `42` and `43` from table `28` this parameter will be `table__28=42,43`. You can specify multiple rows for different tables but every tables must be in the same database. You need at least read permission on all specified tables.","index$":0}]},"DELETE /api/database/rows/table/{table_id}/{row_id}/":{"protocol":"http","parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"header","name":"ClientUndoRedoActionGroupId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.","index$":1},{"in":"path","name":"row_id","schema":{"type":"integer"},"description":"Deletes the row related to the value.","required":true,"index$":2},{"in":"query","name":"send_webhook_events","schema":{"type":"boolean"},"description":"A flag query parameter that triggers webhooks after the operation, if set to `y`, `yes`, `true`, `t`, `on`, `1`, or left empty. Defaults to `true`","index$":3},{"in":"path","name":"table_id","schema":{"type":"integer"},"description":"Deletes the row in the table related to the value.","required":true,"index$":4},{"in":"query","name":"view","schema":{"type":"integer"},"description":"Provide if the row is deleted in a view. This can result in different permission checking and default values.","index$":5}]},"PUT /api/row_comments/{table_id}/{row_id}/notification-mode/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"mode":{"allOf":[{"enum":["all","mentions"],"type":"string","description":"* `all` - all\n* `mentions` - mentions","x-ref":"#/components/schemas/Mode884Enum"}],"description":"The mode to use to receive notifications for new comments on a table row.\n\n* `all` - all\n* `mentions` - mentions","key$":"mode"}},"required":["mode"],"x-ref":"#/components/schemas/RowCommentsNotificationMode","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"mode":{"allOf":[{"enum":["all","mentions"],"type":"string","description":"* `all` - all\n* `mentions` - mentions","x-ref":"#/components/schemas/Mode884Enum"}],"description":"The mode to use to receive notifications for new comments on a table row.\n\n* `all` - all\n* `mentions` - mentions","key$":"mode"}},"required":["mode"],"x-ref":"#/components/schemas/RowCommentsNotificationMode"}},"multipart/form-data":{"schema":{"type":"object","properties":{"mode":{"allOf":[{"enum":["all","mentions"],"type":"string","description":"* `all` - all\n* `mentions` - mentions","x-ref":"#/components/schemas/Mode884Enum"}],"description":"The mode to use to receive notifications for new comments on a table row.\n\n* `all` - all\n* `mentions` - mentions","key$":"mode"}},"required":["mode"],"x-ref":"#/components/schemas/RowCommentsNotificationMode"}}},"required":true},"parameters":[{"in":"path","name":"row_id","schema":{"type":"integer"},"description":"The row on which to manage the comment subscription.","required":true,"index$":0},{"in":"path","name":"table_id","schema":{"type":"integer"},"description":"The table id where the row is in.","required":true,"index$":1},{"in":"query","name":"view","schema":{"type":"integer"},"description":"Optionally provide a view id. If the user doesn't have table-level permissions, the system will check if the user has view-level permissions as a fallback.","index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const database_table_row_ref01_ent = client.DatabaseTableRow()
    let database_table_row_ref01_data = setup.data.new.database_table_row['database_table_row_ref01']
    database_table_row_ref01_data['row_comment_id'] = setup.idmap['row_comment01']
    database_table_row_ref01_data['table_id'] = setup.idmap['table01']

    database_table_row_ref01_data = (await database_table_row_ref01_ent.create(database_table_row_ref01_data)).data()
    assert(null != database_table_row_ref01_data.id)


    // UPDATE
    const database_table_row_ref01_data_up0: any = {}
    database_table_row_ref01_data_up0.id = database_table_row_ref01_data.id
    database_table_row_ref01_data_up0['row_comment_id'] = setup.idmap['row_comment_id'] ?? setup.idmap['row_comment01']

    const database_table_row_ref01_markdef_up0 = { name: 'mode', value: 'Mark01-database_table_row_ref01_' + setup.now }
    ;(database_table_row_ref01_data_up0 as any)[database_table_row_ref01_markdef_up0.name] = database_table_row_ref01_markdef_up0.value

    const database_table_row_ref01_resdata_up0 = (await database_table_row_ref01_ent.update(database_table_row_ref01_data_up0)).data()
    assert(database_table_row_ref01_resdata_up0.id === database_table_row_ref01_data_up0.id)

    assert((database_table_row_ref01_resdata_up0 as any)[database_table_row_ref01_markdef_up0.name] === database_table_row_ref01_markdef_up0.value)


    // LOAD
    const database_table_row_ref01_match_dt0: any = {}
    database_table_row_ref01_match_dt0.id = database_table_row_ref01_data.id
    const database_table_row_ref01_data_dt0 = (await database_table_row_ref01_ent.load(database_table_row_ref01_match_dt0)).data()
    assert(database_table_row_ref01_data_dt0.id === database_table_row_ref01_data.id)


    // REMOVE
    const database_table_row_ref01_match_rm0: any = { id: database_table_row_ref01_data.id }
    database_table_row_ref01_match_rm0['table_id'] = setup.idmap['table_id'] ?? setup.idmap['table01']
    await database_table_row_ref01_ent.remove(database_table_row_ref01_match_rm0)
  

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
      '../../../../.sdk/test/entity/database_table_row/DatabaseTableRowTestData.json')

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
    ['database_table_row01','database_table_row02','database_table_row03','table01','table02','table03','row_comment01','row_comment02','row_comment03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_DATABASE_TABLE_ROW_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_DATABASE_TABLE_ROW_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_DATABASE_TABLE_ROW_ENTID']
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
  
