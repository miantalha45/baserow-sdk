

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


describe('DecoratorValueProviderTypeViewDecorationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.DecoratorValueProviderTypeViewDecoration()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.DecoratorValueProviderTypeViewDecoration().list({"view_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'decorator_value_provider_type_view_decoration.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"decorator_value_provider_type_view_decoration","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["order","type","value_provider_conf","value_provider_type"],"co":{"id":"POST /api/database/views/{view_id}/decorations/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"client_undo_redo_action_group_id","or":"ClientUndoRedoActionGroupId","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"k":"param","n":"view_id","or":"view_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/database/views/{view_id}/decorations/","q":{"exist":["view_id"]},"r":{},"rb":{"alternatives":[{"kind":"multipart","media":"multipart/form-data"},{"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"var":"view_id"},{"lit":"decorations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/database/views/{view_id}/decorations/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"view_id","or":"view_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/database/views/{view_id}/decorations/","q":{"exist":["view_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"var":"view_id"},{"lit":"decorations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/database/views/decoration/{view_decoration_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"view_decoration_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/database/views/decoration/{view_decoration_id}/","q":{"exist":["id"]},"r":{"param":{"view_decoration_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"lit":"decoration"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["order","type","value_provider_conf","value_provider_type"],"co":{"id":"PATCH /api/database/views/decoration/{view_decoration_id}/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"client_undo_redo_action_group_id","or":"ClientUndoRedoActionGroupId","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"k":"param","n":"id","or":"view_decoration_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/database/views/decoration/{view_decoration_id}/","q":{"exist":["id"]},"r":{"param":{"view_decoration_id":"id"}},"rb":{"alternatives":[{"kind":"multipart","media":"multipart/form-data"},{"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"views"},{"lit":"decoration"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.view"]]},"key$":"decorator_value_provider_type_view_decoration","name__orig":"decorator_value_provider_type_view_decoration","Name":"DecoratorValueProviderTypeViewDecoration","name_":"decorator_value_provider_type_view_decoration","name-":"decorator-value-provider-type-view-decoration","NAME":"DECORATOR_VALUE_PROVIDER_TYPE_VIEW_DECORATION","index$":65}, {"active":true,"entity":"decorator_value_provider_type_view_decoration","key$":"BasicDecoratorValueProviderTypeViewDecorationFlow","kind":"basic","name":"BasicDecoratorValueProviderTypeViewDecorationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"decorator_value_provider_type_view_decoration_ref01"},"m":{"view_id":"view01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{"view_id":"view01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"decorator_value_provider_type_view_decoration_ref01"}}]},{"a":true,"d":{},"i":{"ref":"decorator_value_provider_type_view_decoration_ref01","srcdatavar":"decorator_value_provider_type_view_decoration_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-decorator_value_provider_type_view_decoration_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"decorator_value_provider_type_view_decoration_ref01","srcdatavar":"decorator_value_provider_type_view_decoration_ref01_data","suffix":"_dt0"},"m":{"id":"decorator_value_provider_type_view_decoration01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-decorator_value_provider_type_view_decoration_ref01"}}]}]}, 'DecoratorValueProviderTypeViewDecoration', {"POST /api/database/views/{view_id}/decorations/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"oneOf":[{"type":"object","properties":{"type":{"allOf":[{}],"description":"The decorator type. This is then interpreted by the frontend to display the decoration.\n\n* `left_border_color` - left_border_color\n* `background_color` - background_color"},"value_provider_type":{"default":"","description":"The value provider type that gives the value to the decorator.\n\n* `` - \n* `single_select_color` - single_select_color\n* `conditional_color` - conditional_color","oneOf":[{},{}]},"value_provider_conf":{"allOf":[{}],"description":"The configuration of the value provider"},"order":{"type":"integer","maximum":32767,"minimum":-32768,"description":"The position of the decorator has within the view, lowest first. If there is another decorator with the same order value then the decorator with the lowest id must be shown first."}},"required":["type"],"x-ref":"#/components/schemas/GeneratedSingle_select_colorCreateViewDecoration"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The decorator type. This is then interpreted by the frontend to display the decoration.\n\n* `left_border_color` - left_border_color\n* `background_color` - background_color"},"value_provider_type":{"default":"","description":"The value provider type that gives the value to the decorator.\n\n* `` - \n* `single_select_color` - single_select_color\n* `conditional_color` - conditional_color","oneOf":[{},{}]},"value_provider_conf":{"allOf":[{}],"description":"The configuration of the value provider"},"order":{"type":"integer","maximum":32767,"minimum":-32768,"description":"The position of the decorator has within the view, lowest first. If there is another decorator with the same order value then the decorator with the lowest id must be shown first."}},"required":["type"],"x-ref":"#/components/schemas/GeneratedConditional_colorCreateViewDecoration"}],"discriminator":{"propertyName":"value_provider_type","mapping":{"single_select_color":"#/components/schemas/GeneratedSingle_select_colorCreateViewDecoration","conditional_color":"#/components/schemas/GeneratedConditional_colorCreateViewDecoration"}},"x-ref":"#/components/schemas/Decorator_Value_Provider_TypeCreateViewDecoration","index$":1}},"application/x-www-form-urlencoded":{"schema":{"oneOf":[{"type":"object","properties":{"type":{"allOf":[{}],"description":"The decorator type. This is then interpreted by the frontend to display the decoration.\n\n* `left_border_color` - left_border_color\n* `background_color` - background_color"},"value_provider_type":{"default":"","description":"The value provider type that gives the value to the decorator.\n\n* `` - \n* `single_select_color` - single_select_color\n* `conditional_color` - conditional_color","oneOf":[{},{}]},"value_provider_conf":{"allOf":[{}],"description":"The configuration of the value provider"},"order":{"type":"integer","maximum":32767,"minimum":-32768,"description":"The position of the decorator has within the view, lowest first. If there is another decorator with the same order value then the decorator with the lowest id must be shown first."}},"required":["type"],"x-ref":"#/components/schemas/GeneratedSingle_select_colorCreateViewDecoration"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The decorator type. This is then interpreted by the frontend to display the decoration.\n\n* `left_border_color` - left_border_color\n* `background_color` - background_color"},"value_provider_type":{"default":"","description":"The value provider type that gives the value to the decorator.\n\n* `` - \n* `single_select_color` - single_select_color\n* `conditional_color` - conditional_color","oneOf":[{},{}]},"value_provider_conf":{"allOf":[{}],"description":"The configuration of the value provider"},"order":{"type":"integer","maximum":32767,"minimum":-32768,"description":"The position of the decorator has within the view, lowest first. If there is another decorator with the same order value then the decorator with the lowest id must be shown first."}},"required":["type"],"x-ref":"#/components/schemas/GeneratedConditional_colorCreateViewDecoration"}],"discriminator":{"propertyName":"value_provider_type","mapping":{"single_select_color":"#/components/schemas/GeneratedSingle_select_colorCreateViewDecoration","conditional_color":"#/components/schemas/GeneratedConditional_colorCreateViewDecoration"}},"x-ref":"#/components/schemas/Decorator_Value_Provider_TypeCreateViewDecoration"}},"multipart/form-data":{"schema":{"oneOf":[{"type":"object","properties":{"type":{"allOf":[{}],"description":"The decorator type. This is then interpreted by the frontend to display the decoration.\n\n* `left_border_color` - left_border_color\n* `background_color` - background_color"},"value_provider_type":{"default":"","description":"The value provider type that gives the value to the decorator.\n\n* `` - \n* `single_select_color` - single_select_color\n* `conditional_color` - conditional_color","oneOf":[{},{}]},"value_provider_conf":{"allOf":[{}],"description":"The configuration of the value provider"},"order":{"type":"integer","maximum":32767,"minimum":-32768,"description":"The position of the decorator has within the view, lowest first. If there is another decorator with the same order value then the decorator with the lowest id must be shown first."}},"required":["type"],"x-ref":"#/components/schemas/GeneratedSingle_select_colorCreateViewDecoration"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The decorator type. This is then interpreted by the frontend to display the decoration.\n\n* `left_border_color` - left_border_color\n* `background_color` - background_color"},"value_provider_type":{"default":"","description":"The value provider type that gives the value to the decorator.\n\n* `` - \n* `single_select_color` - single_select_color\n* `conditional_color` - conditional_color","oneOf":[{},{}]},"value_provider_conf":{"allOf":[{}],"description":"The configuration of the value provider"},"order":{"type":"integer","maximum":32767,"minimum":-32768,"description":"The position of the decorator has within the view, lowest first. If there is another decorator with the same order value then the decorator with the lowest id must be shown first."}},"required":["type"],"x-ref":"#/components/schemas/GeneratedConditional_colorCreateViewDecoration"}],"discriminator":{"propertyName":"value_provider_type","mapping":{"single_select_color":"#/components/schemas/GeneratedSingle_select_colorCreateViewDecoration","conditional_color":"#/components/schemas/GeneratedConditional_colorCreateViewDecoration"}},"x-ref":"#/components/schemas/Decorator_Value_Provider_TypeCreateViewDecoration"}}}},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"header","name":"ClientUndoRedoActionGroupId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.","index$":1},{"in":"path","name":"view_id","schema":{"type":"integer"},"description":"Creates a decoration for the view related to the given value.","required":true,"index$":2}]},"GET /api/database/views/{view_id}/decorations/":{"protocol":"http","parameters":[{"in":"path","name":"view_id","schema":{"type":"integer"},"description":"Returns only decoration of the view given to the provided value.","required":true,"index$":0}]},"GET /api/database/views/decoration/{view_decoration_id}/":{"protocol":"http","parameters":[{"in":"path","name":"view_decoration_id","schema":{"type":"integer"},"description":"Returns the view decoration related to the provided id.","required":true,"index$":0}]},"PATCH /api/database/views/decoration/{view_decoration_id}/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"oneOf":[{"type":"object","properties":{"type":{"allOf":[{}],"description":"The decorator type. This is then interpreted by the frontend to display the decoration.\n\n* `left_border_color` - left_border_color\n* `background_color` - background_color"},"value_provider_type":{"description":"The value provider type that gives the value to the decorator.\n\n* `` - \n* `single_select_color` - single_select_color\n* `conditional_color` - conditional_color","oneOf":[{},{}]},"value_provider_conf":{"allOf":[{}],"description":"The configuration of the value provider"},"order":{"type":"integer","maximum":32767,"minimum":-32768,"description":"The position of the decorator has within the view, lowest first. If there is another decorator with the same order value then the decorator with the lowest id must be shown first."}},"x-ref":"#/components/schemas/GeneratedSingle_select_colorUpdateViewDecoration"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The decorator type. This is then interpreted by the frontend to display the decoration.\n\n* `left_border_color` - left_border_color\n* `background_color` - background_color"},"value_provider_type":{"description":"The value provider type that gives the value to the decorator.\n\n* `` - \n* `single_select_color` - single_select_color\n* `conditional_color` - conditional_color","oneOf":[{},{}]},"value_provider_conf":{"allOf":[{}],"description":"The configuration of the value provider"},"order":{"type":"integer","maximum":32767,"minimum":-32768,"description":"The position of the decorator has within the view, lowest first. If there is another decorator with the same order value then the decorator with the lowest id must be shown first."}},"x-ref":"#/components/schemas/GeneratedConditional_colorUpdateViewDecoration"}],"discriminator":{"propertyName":"value_provider_type","mapping":{"single_select_color":"#/components/schemas/GeneratedSingle_select_colorUpdateViewDecoration","conditional_color":"#/components/schemas/GeneratedConditional_colorUpdateViewDecoration"}},"x-ref":"#/components/schemas/PatchedDecorator_Value_Provider_TypeUpdateViewDecoration","index$":1}},"application/x-www-form-urlencoded":{"schema":{"oneOf":[{"type":"object","properties":{"type":{"allOf":[{}],"description":"The decorator type. This is then interpreted by the frontend to display the decoration.\n\n* `left_border_color` - left_border_color\n* `background_color` - background_color"},"value_provider_type":{"description":"The value provider type that gives the value to the decorator.\n\n* `` - \n* `single_select_color` - single_select_color\n* `conditional_color` - conditional_color","oneOf":[{},{}]},"value_provider_conf":{"allOf":[{}],"description":"The configuration of the value provider"},"order":{"type":"integer","maximum":32767,"minimum":-32768,"description":"The position of the decorator has within the view, lowest first. If there is another decorator with the same order value then the decorator with the lowest id must be shown first."}},"x-ref":"#/components/schemas/GeneratedSingle_select_colorUpdateViewDecoration"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The decorator type. This is then interpreted by the frontend to display the decoration.\n\n* `left_border_color` - left_border_color\n* `background_color` - background_color"},"value_provider_type":{"description":"The value provider type that gives the value to the decorator.\n\n* `` - \n* `single_select_color` - single_select_color\n* `conditional_color` - conditional_color","oneOf":[{},{}]},"value_provider_conf":{"allOf":[{}],"description":"The configuration of the value provider"},"order":{"type":"integer","maximum":32767,"minimum":-32768,"description":"The position of the decorator has within the view, lowest first. If there is another decorator with the same order value then the decorator with the lowest id must be shown first."}},"x-ref":"#/components/schemas/GeneratedConditional_colorUpdateViewDecoration"}],"discriminator":{"propertyName":"value_provider_type","mapping":{"single_select_color":"#/components/schemas/GeneratedSingle_select_colorUpdateViewDecoration","conditional_color":"#/components/schemas/GeneratedConditional_colorUpdateViewDecoration"}},"x-ref":"#/components/schemas/PatchedDecorator_Value_Provider_TypeUpdateViewDecoration"}},"multipart/form-data":{"schema":{"oneOf":[{"type":"object","properties":{"type":{"allOf":[{}],"description":"The decorator type. This is then interpreted by the frontend to display the decoration.\n\n* `left_border_color` - left_border_color\n* `background_color` - background_color"},"value_provider_type":{"description":"The value provider type that gives the value to the decorator.\n\n* `` - \n* `single_select_color` - single_select_color\n* `conditional_color` - conditional_color","oneOf":[{},{}]},"value_provider_conf":{"allOf":[{}],"description":"The configuration of the value provider"},"order":{"type":"integer","maximum":32767,"minimum":-32768,"description":"The position of the decorator has within the view, lowest first. If there is another decorator with the same order value then the decorator with the lowest id must be shown first."}},"x-ref":"#/components/schemas/GeneratedSingle_select_colorUpdateViewDecoration"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The decorator type. This is then interpreted by the frontend to display the decoration.\n\n* `left_border_color` - left_border_color\n* `background_color` - background_color"},"value_provider_type":{"description":"The value provider type that gives the value to the decorator.\n\n* `` - \n* `single_select_color` - single_select_color\n* `conditional_color` - conditional_color","oneOf":[{},{}]},"value_provider_conf":{"allOf":[{}],"description":"The configuration of the value provider"},"order":{"type":"integer","maximum":32767,"minimum":-32768,"description":"The position of the decorator has within the view, lowest first. If there is another decorator with the same order value then the decorator with the lowest id must be shown first."}},"x-ref":"#/components/schemas/GeneratedConditional_colorUpdateViewDecoration"}],"discriminator":{"propertyName":"value_provider_type","mapping":{"single_select_color":"#/components/schemas/GeneratedSingle_select_colorUpdateViewDecoration","conditional_color":"#/components/schemas/GeneratedConditional_colorUpdateViewDecoration"}},"x-ref":"#/components/schemas/PatchedDecorator_Value_Provider_TypeUpdateViewDecoration"}}}},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"header","name":"ClientUndoRedoActionGroupId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.","index$":1},{"in":"path","name":"view_decoration_id","schema":{"type":"integer"},"description":"Updates the view decoration related to the provided value.","required":true,"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const decorator_value_provider_type_view_decoration_ref01_ent = client.DecoratorValueProviderTypeViewDecoration()
    let decorator_value_provider_type_view_decoration_ref01_data = setup.data.new.decorator_value_provider_type_view_decoration['decorator_value_provider_type_view_decoration_ref01']
    decorator_value_provider_type_view_decoration_ref01_data['view_id'] = setup.idmap['view01']

    decorator_value_provider_type_view_decoration_ref01_data = (await decorator_value_provider_type_view_decoration_ref01_ent.create(decorator_value_provider_type_view_decoration_ref01_data)).data()
    assert(null != decorator_value_provider_type_view_decoration_ref01_data.id)


    // LIST
    const decorator_value_provider_type_view_decoration_ref01_match: any = {}
    decorator_value_provider_type_view_decoration_ref01_match['view_id'] = setup.idmap['view01']

    const decorator_value_provider_type_view_decoration_ref01_list = (await decorator_value_provider_type_view_decoration_ref01_ent.list(decorator_value_provider_type_view_decoration_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(decorator_value_provider_type_view_decoration_ref01_list, { id: decorator_value_provider_type_view_decoration_ref01_data.id })))


    // UPDATE
    const decorator_value_provider_type_view_decoration_ref01_data_up0: any = {}
    decorator_value_provider_type_view_decoration_ref01_data_up0.id = decorator_value_provider_type_view_decoration_ref01_data.id

    const decorator_value_provider_type_view_decoration_ref01_resdata_up0 = (await decorator_value_provider_type_view_decoration_ref01_ent.update(decorator_value_provider_type_view_decoration_ref01_data_up0)).data()
    assert(decorator_value_provider_type_view_decoration_ref01_resdata_up0.id === decorator_value_provider_type_view_decoration_ref01_data_up0.id)


    // LOAD
    const decorator_value_provider_type_view_decoration_ref01_match_dt0: any = {}
    decorator_value_provider_type_view_decoration_ref01_match_dt0.id = decorator_value_provider_type_view_decoration_ref01_data.id
    const decorator_value_provider_type_view_decoration_ref01_data_dt0 = (await decorator_value_provider_type_view_decoration_ref01_ent.load(decorator_value_provider_type_view_decoration_ref01_match_dt0)).data()
    assert(decorator_value_provider_type_view_decoration_ref01_data_dt0.id === decorator_value_provider_type_view_decoration_ref01_data.id)


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
      '../../../../.sdk/test/entity/decorator_value_provider_type_view_decoration/DecoratorValueProviderTypeViewDecorationTestData.json')

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
    ['decorator_value_provider_type_view_decoration01','decorator_value_provider_type_view_decoration02','decorator_value_provider_type_view_decoration03','view01','view02','view03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_DECORATOR_VALUE_PROVIDER_TYPE_VIEW_DECORATION_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_DECORATOR_VALUE_PROVIDER_TYPE_VIEW_DECORATION_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_DECORATOR_VALUE_PROVIDER_TYPE_VIEW_DECORATION_ENTID']
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
  
