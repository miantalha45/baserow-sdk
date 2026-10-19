

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


describe('ViewFilterGroupEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.ViewFilterGroup()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ViewFilterGroup().load({"id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'view_filter_group.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"filter_type":{"a":true,"h":"Filter Type","n":"filter_type","r":false,"sh":"Indicates whether all the rows should apply to all filters (AND) or to any filter (OR) in the group to be shown.","t":"`$STRING`","key$":"filter_type","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":1},"parent_group":{"a":true,"h":"Parent Group","n":"parent_group","r":false,"t":"`$INTEGER`","key$":"parent_group","index$":2},"view":{"a":true,"h":"View","n":"view","r":true,"sh":"The view to which the filter group applies to.","t":"`$INTEGER`","key$":"view","index$":3}},"id":{"field":"id","name":"id"},"name":"view_filter_group","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["filter_type","parent_group"],"co":{"id":"POST /api/database/views/{view_id}/filter-groups/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"client_undo_redo_action_group_id","or":"ClientUndoRedoActionGroupId","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"k":"param","n":"id","or":"view_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/database/views/{view_id}/filter-groups/","q":{"exist":["id"]},"r":{"param":{"view_id":"id"}},"rb":{"alternatives":[{"fields":[{"name":"filter_type"},{"name":"parent_group"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"filter_type"},{"name":"parent_group"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"var":"id"},{"lit":"filter-groups"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/database/views/filter-group/{view_filter_group_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"view_filter_group_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/database/views/filter-group/{view_filter_group_id}/","q":{"exist":["id"]},"r":{"param":{"view_filter_group_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"lit":"filter-group"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["filter_type"],"co":{"id":"PATCH /api/database/views/filter-group/{view_filter_group_id}/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"client_undo_redo_action_group_id","or":"ClientUndoRedoActionGroupId","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"k":"param","n":"id","or":"view_filter_group_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/database/views/filter-group/{view_filter_group_id}/","q":{"exist":["id"]},"r":{"param":{"view_filter_group_id":"id"}},"rb":{"alternatives":[{"fields":[{"name":"filter_type"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"filter_type"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"lit":"filter-group"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"view_filter_group","name__orig":"view_filter_group","Name":"ViewFilterGroup","name_":"view_filter_group","name-":"view-filter-group","NAME":"VIEW_FILTER_GROUP","index$":164}, {"active":true,"entity":"view_filter_group","key$":"BasicViewFilterGroupFlow","kind":"basic","name":"BasicViewFilterGroupFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"view_filter_group_ref01"},"m":{"view_id":"view01"},"o":"create","s":[],"v":[],"unreachable":true},{"a":true,"d":{},"i":{"ref":"view_filter_group_ref01","srcdatavar":"view_filter_group_ref01_data","suffix":"_up0","textfield":"filter_type"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-view_filter_group_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"view_filter_group_ref01","srcdatavar":"view_filter_group_ref01_data","suffix":"_dt0"},"m":{"id":"view_filter_group01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-view_filter_group_ref01"}}]}]}, 'ViewFilterGroup', {"POST /api/database/views/{view_id}/filter-groups/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"filter_type":{"allOf":[{"enum":["AND","OR"],"type":"string","description":"* `AND` - And\n* `OR` - Or","x-ref":"#/components/schemas/ConditionTypeEnum"}],"description":"Indicates whether all the rows should apply to all filters (AND) or to any filter (OR) in the group to be shown.\n\n* `AND` - And\n* `OR` - Or","key$":"filter_type"},"parent_group":{"type":"integer","nullable":true,"key$":"parent_group"}},"x-ref":"#/components/schemas/CreateViewFilterGroup","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"filter_type":{"allOf":[{"enum":["AND","OR"],"type":"string","description":"* `AND` - And\n* `OR` - Or","x-ref":"#/components/schemas/ConditionTypeEnum"}],"description":"Indicates whether all the rows should apply to all filters (AND) or to any filter (OR) in the group to be shown.\n\n* `AND` - And\n* `OR` - Or","key$":"filter_type"},"parent_group":{"type":"integer","nullable":true,"key$":"parent_group"}},"x-ref":"#/components/schemas/CreateViewFilterGroup"}},"multipart/form-data":{"schema":{"type":"object","properties":{"filter_type":{"allOf":[{"enum":["AND","OR"],"type":"string","description":"* `AND` - And\n* `OR` - Or","x-ref":"#/components/schemas/ConditionTypeEnum"}],"description":"Indicates whether all the rows should apply to all filters (AND) or to any filter (OR) in the group to be shown.\n\n* `AND` - And\n* `OR` - Or","key$":"filter_type"},"parent_group":{"type":"integer","nullable":true,"key$":"parent_group"}},"x-ref":"#/components/schemas/CreateViewFilterGroup"}}}},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"header","name":"ClientUndoRedoActionGroupId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.","index$":1},{"in":"path","name":"view_id","schema":{"type":"integer"},"description":"The ID of the view where create the new filter group.","required":true,"index$":2}]},"GET /api/database/views/filter-group/{view_filter_group_id}/":{"protocol":"http","parameters":[{"in":"path","name":"view_filter_group_id","schema":{"type":"integer"},"description":"The ID of the view filter group to return.","required":true,"index$":0}]},"PATCH /api/database/views/filter-group/{view_filter_group_id}/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"filter_type":{"allOf":[{"enum":["AND","OR"],"type":"string","description":"* `AND` - And\n* `OR` - Or","x-ref":"#/components/schemas/ConditionTypeEnum"}],"description":"Indicates whether all the rows should apply to all filters (AND) or to any filter (OR) in the group to be shown.\n\n* `AND` - And\n* `OR` - Or","key$":"filter_type"}},"x-ref":"#/components/schemas/PatchedUpdateViewFilterGroup","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"filter_type":{"allOf":[{"enum":["AND","OR"],"type":"string","description":"* `AND` - And\n* `OR` - Or","x-ref":"#/components/schemas/ConditionTypeEnum"}],"description":"Indicates whether all the rows should apply to all filters (AND) or to any filter (OR) in the group to be shown.\n\n* `AND` - And\n* `OR` - Or","key$":"filter_type"}},"x-ref":"#/components/schemas/PatchedUpdateViewFilterGroup"}},"multipart/form-data":{"schema":{"type":"object","properties":{"filter_type":{"allOf":[{"enum":["AND","OR"],"type":"string","description":"* `AND` - And\n* `OR` - Or","x-ref":"#/components/schemas/ConditionTypeEnum"}],"description":"Indicates whether all the rows should apply to all filters (AND) or to any filter (OR) in the group to be shown.\n\n* `AND` - And\n* `OR` - Or","key$":"filter_type"}},"x-ref":"#/components/schemas/PatchedUpdateViewFilterGroup"}}}},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"header","name":"ClientUndoRedoActionGroupId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.","index$":1},{"in":"path","name":"view_filter_group_id","schema":{"type":"integer"},"description":"The ID of the view filter group to update.","required":true,"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let view_filter_group_ref01_data = Object.values(setup.data.existing.view_filter_group)[0] as any

    // UPDATE
    const view_filter_group_ref01_ent = client.ViewFilterGroup()
    const view_filter_group_ref01_data_up0: any = {}
    view_filter_group_ref01_data_up0.id = view_filter_group_ref01_data.id

    const view_filter_group_ref01_markdef_up0 = { name: 'filter_type', value: 'Mark01-view_filter_group_ref01_' + setup.now }
    ;(view_filter_group_ref01_data_up0 as any)[view_filter_group_ref01_markdef_up0.name] = view_filter_group_ref01_markdef_up0.value

    const view_filter_group_ref01_resdata_up0 = (await view_filter_group_ref01_ent.update(view_filter_group_ref01_data_up0)).data()
    assert(view_filter_group_ref01_resdata_up0.id === view_filter_group_ref01_data_up0.id)

    assert((view_filter_group_ref01_resdata_up0 as any)[view_filter_group_ref01_markdef_up0.name] === view_filter_group_ref01_markdef_up0.value)


    // LOAD
    const view_filter_group_ref01_match_dt0: any = {}
    view_filter_group_ref01_match_dt0.id = view_filter_group_ref01_data.id
    const view_filter_group_ref01_data_dt0 = (await view_filter_group_ref01_ent.load(view_filter_group_ref01_match_dt0)).data()
    assert(view_filter_group_ref01_data_dt0.id === view_filter_group_ref01_data.id)


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
      '../../../../.sdk/test/entity/view_filter_group/ViewFilterGroupTestData.json')

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
    ['view_filter_group01','view_filter_group02','view_filter_group03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_VIEW_FILTER_GROUP_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_VIEW_FILTER_GROUP_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_VIEW_FILTER_GROUP_ENTID']
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
  
