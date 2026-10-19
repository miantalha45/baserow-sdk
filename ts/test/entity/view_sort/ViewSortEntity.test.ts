

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


describe('ViewSortEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.ViewSort()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ViewSort().list({"id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'view_sort.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"field":{"a":true,"h":"Field","n":"field","op":{"update":{"req":false,"type":"`$INTEGER`"}},"r":true,"sh":"The field that must be sorted on.","t":"`$INTEGER`","key$":"field","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":1},"order":{"a":true,"h":"Order","n":"order","r":false,"sh":"Indicates the sort order direction.","t":"`$STRING`","key$":"order","index$":2},"priority":{"a":true,"h":"Priority","n":"priority","r":true,"ro":true,"sh":"Position of this sorting in the ordering chain.","t":"`$INTEGER`","key$":"priority","index$":3},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Indicates the sort type.","t":"`$STRING`","key$":"type","index$":4},"view":{"a":true,"h":"View","n":"view","r":true,"sh":"The view to which the sort applies.","t":"`$INTEGER`","key$":"view","index$":5}},"id":{"field":"id","name":"id"},"name":"view_sort","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["field","order","type"],"co":{"id":"POST /api/database/views/{view_id}/sortings/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"client_undo_redo_action_group_id","or":"ClientUndoRedoActionGroupId","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"k":"param","n":"id","or":"view_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/database/views/{view_id}/sortings/","q":{"$action":"sortings","exist":["id"]},"r":{"param":{"view_id":"id"}},"rb":{"alternatives":[{"fields":[{"name":"field"},{"name":"order"},{"name":"type"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"field"},{"name":"order"},{"name":"type"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"var":"id"},{"lit":"sortings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/database/views/{view_id}/sortings/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"view_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/database/views/{view_id}/sortings/","q":{"$action":"sortings","exist":["id"]},"r":{"param":{"view_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"var":"id"},{"lit":"sortings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/database/views/sort/{view_sort_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"view_sort_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/database/views/sort/{view_sort_id}/","q":{"exist":["id"]},"r":{"param":{"view_sort_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"lit":"sort"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["field","order","type"],"co":{"id":"PATCH /api/database/views/sort/{view_sort_id}/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"client_undo_redo_action_group_id","or":"ClientUndoRedoActionGroupId","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"k":"param","n":"id","or":"view_sort_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/database/views/sort/{view_sort_id}/","q":{"exist":["id"]},"r":{"param":{"view_sort_id":"id"}},"rb":{"alternatives":[{"fields":[{"name":"field"},{"name":"order"},{"name":"type"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"field"},{"name":"order"},{"name":"type"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"lit":"sort"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"view_sort","name__orig":"view_sort","Name":"ViewSort","name_":"view_sort","name-":"view-sort","NAME":"VIEW_SORT","index$":166}, {"active":true,"entity":"view_sort","key$":"BasicViewSortFlow","kind":"basic","name":"BasicViewSortFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"view_sort_ref01"},"m":{"view_id":"view01"},"o":"create","s":[],"v":[],"unreachable":true},{"a":false,"d":{},"i":{},"m":{"view_id":"view01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"view_sort_ref01"}}],"unreachable":true},{"a":true,"d":{},"i":{"ref":"view_sort_ref01","srcdatavar":"view_sort_ref01_data","suffix":"_up0","textfield":"order"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-view_sort_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"view_sort_ref01","srcdatavar":"view_sort_ref01_data","suffix":"_dt0"},"m":{"id":"view_sort01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-view_sort_ref01"}}]}]}, 'ViewSort', {"POST /api/database/views/{view_id}/sortings/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"field":{"type":"integer","description":"The field that must be sorted on."},"order":{"allOf":[{"enum":["ASC","DESC"],"type":"string","description":"* `ASC` - Ascending\n* `DESC` - Descending","x-ref":"#/components/schemas/OrderEnum"}],"default":"ASC","description":"Indicates the sort order direction. ASC (Ascending) is from A to Z and DESC (Descending) is from Z to A.\n\n* `ASC` - Ascending\n* `DESC` - Descending"},"type":{"type":"string","description":"Indicates the sort type. Will automatically fall back to `default` if incompatible with field type.","maxLength":32}},"required":["field"],"x-ref":"#/components/schemas/CreateViewSort"}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"field":{"type":"integer","description":"The field that must be sorted on."},"order":{"allOf":[{"enum":["ASC","DESC"],"type":"string","description":"* `ASC` - Ascending\n* `DESC` - Descending","x-ref":"#/components/schemas/OrderEnum"}],"default":"ASC","description":"Indicates the sort order direction. ASC (Ascending) is from A to Z and DESC (Descending) is from Z to A.\n\n* `ASC` - Ascending\n* `DESC` - Descending"},"type":{"type":"string","description":"Indicates the sort type. Will automatically fall back to `default` if incompatible with field type.","maxLength":32}},"required":["field"],"x-ref":"#/components/schemas/CreateViewSort"}},"multipart/form-data":{"schema":{"type":"object","properties":{"field":{"type":"integer","description":"The field that must be sorted on."},"order":{"allOf":[{"enum":["ASC","DESC"],"type":"string","description":"* `ASC` - Ascending\n* `DESC` - Descending","x-ref":"#/components/schemas/OrderEnum"}],"default":"ASC","description":"Indicates the sort order direction. ASC (Ascending) is from A to Z and DESC (Descending) is from Z to A.\n\n* `ASC` - Ascending\n* `DESC` - Descending"},"type":{"type":"string","description":"Indicates the sort type. Will automatically fall back to `default` if incompatible with field type.","maxLength":32}},"required":["field"],"x-ref":"#/components/schemas/CreateViewSort"}}},"required":true},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"header","name":"ClientUndoRedoActionGroupId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.","index$":1},{"in":"path","name":"view_id","schema":{"type":"integer"},"description":"Creates a sort for the view related to the provided value.","required":true,"index$":2}]},"GET /api/database/views/{view_id}/sortings/":{"protocol":"http","parameters":[{"in":"path","name":"view_id","schema":{"type":"integer"},"description":"Returns only sortings of the view related to the provided value.","required":true,"index$":0}]},"GET /api/database/views/sort/{view_sort_id}/":{"protocol":"http","parameters":[{"in":"path","name":"view_sort_id","schema":{"type":"integer"},"description":"Returns the view sort related to the provided value.","required":true,"index$":0}]},"PATCH /api/database/views/sort/{view_sort_id}/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"field":{"type":"integer","description":"The field that must be sorted on.","key$":"field"},"order":{"allOf":[{"enum":["ASC","DESC"],"type":"string","description":"* `ASC` - Ascending\n* `DESC` - Descending","x-ref":"#/components/schemas/OrderEnum"}],"description":"Indicates the sort order direction. ASC (Ascending) is from A to Z and DESC (Descending) is from Z to A.\n\n* `ASC` - Ascending\n* `DESC` - Descending","key$":"order"},"type":{"type":"string","description":"Indicates the sort type. Will automatically fall back to `default` if incompatible with field type.","maxLength":32,"key$":"type"}},"x-ref":"#/components/schemas/PatchedUpdateViewSort","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"field":{"type":"integer","description":"The field that must be sorted on.","key$":"field"},"order":{"allOf":[{"enum":["ASC","DESC"],"type":"string","description":"* `ASC` - Ascending\n* `DESC` - Descending","x-ref":"#/components/schemas/OrderEnum"}],"description":"Indicates the sort order direction. ASC (Ascending) is from A to Z and DESC (Descending) is from Z to A.\n\n* `ASC` - Ascending\n* `DESC` - Descending","key$":"order"},"type":{"type":"string","description":"Indicates the sort type. Will automatically fall back to `default` if incompatible with field type.","maxLength":32,"key$":"type"}},"x-ref":"#/components/schemas/PatchedUpdateViewSort"}},"multipart/form-data":{"schema":{"type":"object","properties":{"field":{"type":"integer","description":"The field that must be sorted on.","key$":"field"},"order":{"allOf":[{"enum":["ASC","DESC"],"type":"string","description":"* `ASC` - Ascending\n* `DESC` - Descending","x-ref":"#/components/schemas/OrderEnum"}],"description":"Indicates the sort order direction. ASC (Ascending) is from A to Z and DESC (Descending) is from Z to A.\n\n* `ASC` - Ascending\n* `DESC` - Descending","key$":"order"},"type":{"type":"string","description":"Indicates the sort type. Will automatically fall back to `default` if incompatible with field type.","maxLength":32,"key$":"type"}},"x-ref":"#/components/schemas/PatchedUpdateViewSort"}}}},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"header","name":"ClientUndoRedoActionGroupId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.","index$":1},{"in":"path","name":"view_sort_id","schema":{"type":"integer"},"description":"Updates the view sort related to the provided value.","required":true,"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let view_sort_ref01_data = Object.values(setup.data.existing.view_sort)[0] as any

    // UPDATE
    const view_sort_ref01_ent = client.ViewSort()
    const view_sort_ref01_data_up0: any = {}
    view_sort_ref01_data_up0.id = view_sort_ref01_data.id

    const view_sort_ref01_markdef_up0 = { name: 'order', value: 'Mark01-view_sort_ref01_' + setup.now }
    ;(view_sort_ref01_data_up0 as any)[view_sort_ref01_markdef_up0.name] = view_sort_ref01_markdef_up0.value

    const view_sort_ref01_resdata_up0 = (await view_sort_ref01_ent.update(view_sort_ref01_data_up0)).data()
    assert(view_sort_ref01_resdata_up0.id === view_sort_ref01_data_up0.id)

    assert((view_sort_ref01_resdata_up0 as any)[view_sort_ref01_markdef_up0.name] === view_sort_ref01_markdef_up0.value)


    // LOAD
    const view_sort_ref01_match_dt0: any = {}
    view_sort_ref01_match_dt0.id = view_sort_ref01_data.id
    const view_sort_ref01_data_dt0 = (await view_sort_ref01_ent.load(view_sort_ref01_match_dt0)).data()
    assert(view_sort_ref01_data_dt0.id === view_sort_ref01_data.id)


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
      '../../../../.sdk/test/entity/view_sort/ViewSortTestData.json')

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
    ['view_sort01','view_sort02','view_sort03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_VIEW_SORT_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_VIEW_SORT_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_VIEW_SORT_ENTID']
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
  
