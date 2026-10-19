

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


describe('DashboardWidgetWidgetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.DashboardWidgetWidget()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.DashboardWidgetWidget().list({"id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dashboard_widget_widget.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"widgets":{"a":true,"h":"Widgets","n":"widgets","r":false,"sh":"The complete layout of the dashboard widgets visible to the current user.","t":"`$ARRAY`","key$":"widgets","index$":1}},"id":{"field":"id","name":"id"},"name":"dashboard_widget_widget","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["default_series_chart_type","description","series_config","title","type"],"co":{"id":"POST /api/dashboard/{dashboard_id}/widgets/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"client_undo_redo_action_group_id","or":"ClientUndoRedoActionGroupId","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"k":"param","n":"id","or":"dashboard_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/dashboard/{dashboard_id}/widgets/","q":{"exist":["id"]},"r":{"param":{"dashboard_id":"id"}},"rb":{"alternatives":[{"kind":"multipart","media":"multipart/form-data"},{"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"dashboard"},{"var":"id"},{"lit":"widgets"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/dashboard/{dashboard_id}/widgets/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"dashboard_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/dashboard/{dashboard_id}/widgets/","q":{"exist":["id"]},"r":{"param":{"dashboard_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"dashboard"},{"var":"id"},{"lit":"widgets"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["widgets"],"co":{"id":"PATCH /api/dashboard/{dashboard_id}/widgets/layout/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"client_undo_redo_action_group_id","or":"ClientUndoRedoActionGroupId","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"k":"param","n":"dashboard_id","or":"dashboard_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/dashboard/{dashboard_id}/widgets/layout/","q":{"exist":["dashboard_id"]},"r":{},"rb":{"alternatives":[{"fields":[{"list":true,"name":"widgets"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"list":true,"name":"widgets"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"dashboard"},{"var":"dashboard_id"},{"lit":"widgets"},{"lit":"layout"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["default_series_chart_type","description","series_config","title"],"co":{"id":"PATCH /api/dashboard/widgets/{widget_id}/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"client_undo_redo_action_group_id","or":"ClientUndoRedoActionGroupId","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"k":"param","n":"id","or":"widget_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/dashboard/widgets/{widget_id}/","q":{"exist":["id"]},"r":{"param":{"widget_id":"id"}},"rb":{"alternatives":[{"kind":"multipart","media":"multipart/form-data"},{"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"dashboard"},{"lit":"widgets"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"dashboard_widget_widget","name__orig":"dashboard_widget_widget","Name":"DashboardWidgetWidget","name_":"dashboard_widget_widget","name-":"dashboard-widget-widget","NAME":"DASHBOARD_WIDGET_WIDGET","index$":50}, {"active":true,"entity":"dashboard_widget_widget","key$":"BasicDashboardWidgetWidgetFlow","kind":"basic","name":"BasicDashboardWidgetWidgetFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"dashboard_widget_widget_ref01"},"m":{"dashboard_id":"dashboard01"},"o":"create","s":[],"v":[],"unreachable":true},{"a":false,"d":{},"i":{},"m":{"dashboard_id":"dashboard01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"dashboard_widget_widget_ref01"}}],"unreachable":true},{"a":true,"d":{},"i":{"ref":"dashboard_widget_widget_ref01","srcdatavar":"dashboard_widget_widget_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dashboard_widget_widget_ref01"}}],"v":[]}]}, 'DashboardWidgetWidget', {"POST /api/dashboard/{dashboard_id}/widgets/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"oneOf":[{"type":"object","description":"This serializer allow to set the type of the new widget.","properties":{"title":{"type":"string","maxLength":255},"description":{"type":"string","maxLength":255},"type":{"allOf":[{}],"description":"The type of the widget.\n\n* `summary` - summary\n* `chart` - chart\n* `pie_chart` - pie_chart"}},"required":["title","type"],"x-ref":"#/components/schemas/SummaryWidgetCreateWidget"},{"type":"object","description":"This serializer allow to set the type of the new widget.","properties":{"title":{"type":"string","maxLength":255},"description":{"type":"string","maxLength":255},"type":{"allOf":[{}],"description":"The type of the widget.\n\n* `summary` - summary\n* `chart` - chart\n* `pie_chart` - pie_chart"},"series_config":{"type":"array","items":{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/ChartSeriesConfig"},"description":"Provides series configuration."},"default_series_chart_type":{"allOf":[{}],"description":"Default chart type.\n\n* `BAR` - Bar\n* `LINE` - Line"}},"required":["title","type"],"x-ref":"#/components/schemas/ChartWidgetCreateWidget"},{"type":"object","description":"This serializer allow to set the type of the new widget.","properties":{"title":{"type":"string","maxLength":255},"description":{"type":"string","maxLength":255},"type":{"allOf":[{}],"description":"The type of the widget.\n\n* `summary` - summary\n* `chart` - chart\n* `pie_chart` - pie_chart"},"series_config":{"type":"array","items":{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/PieChartSeriesConfig"},"description":"Provides series configuration."},"default_series_chart_type":{"allOf":[{}],"description":"Default chart type.\n\n* `PIE` - Pie\n* `DOUGHNUT` - Doughnut"}},"required":["title","type"],"x-ref":"#/components/schemas/PieChartWidgetCreateWidget"}],"discriminator":{"propertyName":"type","mapping":{"summary":"#/components/schemas/SummaryWidgetCreateWidget","chart":"#/components/schemas/ChartWidgetCreateWidget","pie_chart":"#/components/schemas/PieChartWidgetCreateWidget"}},"x-ref":"#/components/schemas/Dashboard_WidgetCreateWidget","index$":1}},"application/x-www-form-urlencoded":{"schema":{"oneOf":[{"type":"object","description":"This serializer allow to set the type of the new widget.","properties":{"title":{"type":"string","maxLength":255},"description":{"type":"string","maxLength":255},"type":{"allOf":[{}],"description":"The type of the widget.\n\n* `summary` - summary\n* `chart` - chart\n* `pie_chart` - pie_chart"}},"required":["title","type"],"x-ref":"#/components/schemas/SummaryWidgetCreateWidget"},{"type":"object","description":"This serializer allow to set the type of the new widget.","properties":{"title":{"type":"string","maxLength":255},"description":{"type":"string","maxLength":255},"type":{"allOf":[{}],"description":"The type of the widget.\n\n* `summary` - summary\n* `chart` - chart\n* `pie_chart` - pie_chart"},"series_config":{"type":"array","items":{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/ChartSeriesConfig"},"description":"Provides series configuration."},"default_series_chart_type":{"allOf":[{}],"description":"Default chart type.\n\n* `BAR` - Bar\n* `LINE` - Line"}},"required":["title","type"],"x-ref":"#/components/schemas/ChartWidgetCreateWidget"},{"type":"object","description":"This serializer allow to set the type of the new widget.","properties":{"title":{"type":"string","maxLength":255},"description":{"type":"string","maxLength":255},"type":{"allOf":[{}],"description":"The type of the widget.\n\n* `summary` - summary\n* `chart` - chart\n* `pie_chart` - pie_chart"},"series_config":{"type":"array","items":{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/PieChartSeriesConfig"},"description":"Provides series configuration."},"default_series_chart_type":{"allOf":[{}],"description":"Default chart type.\n\n* `PIE` - Pie\n* `DOUGHNUT` - Doughnut"}},"required":["title","type"],"x-ref":"#/components/schemas/PieChartWidgetCreateWidget"}],"discriminator":{"propertyName":"type","mapping":{"summary":"#/components/schemas/SummaryWidgetCreateWidget","chart":"#/components/schemas/ChartWidgetCreateWidget","pie_chart":"#/components/schemas/PieChartWidgetCreateWidget"}},"x-ref":"#/components/schemas/Dashboard_WidgetCreateWidget"}},"multipart/form-data":{"schema":{"oneOf":[{"type":"object","description":"This serializer allow to set the type of the new widget.","properties":{"title":{"type":"string","maxLength":255},"description":{"type":"string","maxLength":255},"type":{"allOf":[{}],"description":"The type of the widget.\n\n* `summary` - summary\n* `chart` - chart\n* `pie_chart` - pie_chart"}},"required":["title","type"],"x-ref":"#/components/schemas/SummaryWidgetCreateWidget"},{"type":"object","description":"This serializer allow to set the type of the new widget.","properties":{"title":{"type":"string","maxLength":255},"description":{"type":"string","maxLength":255},"type":{"allOf":[{}],"description":"The type of the widget.\n\n* `summary` - summary\n* `chart` - chart\n* `pie_chart` - pie_chart"},"series_config":{"type":"array","items":{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/ChartSeriesConfig"},"description":"Provides series configuration."},"default_series_chart_type":{"allOf":[{}],"description":"Default chart type.\n\n* `BAR` - Bar\n* `LINE` - Line"}},"required":["title","type"],"x-ref":"#/components/schemas/ChartWidgetCreateWidget"},{"type":"object","description":"This serializer allow to set the type of the new widget.","properties":{"title":{"type":"string","maxLength":255},"description":{"type":"string","maxLength":255},"type":{"allOf":[{}],"description":"The type of the widget.\n\n* `summary` - summary\n* `chart` - chart\n* `pie_chart` - pie_chart"},"series_config":{"type":"array","items":{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/PieChartSeriesConfig"},"description":"Provides series configuration."},"default_series_chart_type":{"allOf":[{}],"description":"Default chart type.\n\n* `PIE` - Pie\n* `DOUGHNUT` - Doughnut"}},"required":["title","type"],"x-ref":"#/components/schemas/PieChartWidgetCreateWidget"}],"discriminator":{"propertyName":"type","mapping":{"summary":"#/components/schemas/SummaryWidgetCreateWidget","chart":"#/components/schemas/ChartWidgetCreateWidget","pie_chart":"#/components/schemas/PieChartWidgetCreateWidget"}},"x-ref":"#/components/schemas/Dashboard_WidgetCreateWidget"}}}},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"header","name":"ClientUndoRedoActionGroupId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.","index$":1},{"in":"path","name":"dashboard_id","schema":{"type":"integer"},"description":"Creates a widget for the dashboard related to the provided value.","required":true,"index$":2}]},"GET /api/dashboard/{dashboard_id}/widgets/":{"protocol":"http","parameters":[{"in":"path","name":"dashboard_id","schema":{"type":"integer"},"description":"Returns only the widgets of the dashboard related to the provided Id.","required":true,"index$":0}]},"PATCH /api/dashboard/{dashboard_id}/widgets/layout/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"widgets":{"type":"array","items":{"type":"object","properties":{"id":{"type":"integer","minimum":1},"grid_x":{"type":"integer","minimum":0},"grid_y":{"type":"integer","minimum":0},"grid_width":{"type":"integer","minimum":1},"grid_height":{"type":"integer","minimum":1}},"required":["grid_height","grid_width","grid_x","grid_y","id"],"x-ref":"#/components/schemas/WidgetLayoutItem"},"description":"The complete layout of the dashboard widgets visible to the current user. It is vertically compacted before being persisted.","key$":"widgets"}},"x-ref":"#/components/schemas/PatchedUpdateWidgetLayout","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"widgets":{"type":"array","items":{"type":"object","properties":{"id":{"type":"integer","minimum":1},"grid_x":{"type":"integer","minimum":0},"grid_y":{"type":"integer","minimum":0},"grid_width":{"type":"integer","minimum":1},"grid_height":{"type":"integer","minimum":1}},"required":["grid_height","grid_width","grid_x","grid_y","id"],"x-ref":"#/components/schemas/WidgetLayoutItem"},"description":"The complete layout of the dashboard widgets visible to the current user. It is vertically compacted before being persisted.","key$":"widgets"}},"x-ref":"#/components/schemas/PatchedUpdateWidgetLayout"}},"multipart/form-data":{"schema":{"type":"object","properties":{"widgets":{"type":"array","items":{"type":"object","properties":{"id":{"type":"integer","minimum":1},"grid_x":{"type":"integer","minimum":0},"grid_y":{"type":"integer","minimum":0},"grid_width":{"type":"integer","minimum":1},"grid_height":{"type":"integer","minimum":1}},"required":["grid_height","grid_width","grid_x","grid_y","id"],"x-ref":"#/components/schemas/WidgetLayoutItem"},"description":"The complete layout of the dashboard widgets visible to the current user. It is vertically compacted before being persisted.","key$":"widgets"}},"x-ref":"#/components/schemas/PatchedUpdateWidgetLayout"}}}},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"header","name":"ClientUndoRedoActionGroupId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.","index$":1},{"in":"path","name":"dashboard_id","schema":{"type":"integer"},"description":"The id of the dashboard whose widget layout is updated.","required":true,"index$":2}]},"PATCH /api/dashboard/widgets/{widget_id}/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"anyOf":[{"type":"object","properties":{"title":{"type":"string","maxLength":255},"description":{"type":"string","maxLength":255}},"x-ref":"#/components/schemas/SummaryWidgetUpdateWidget"},{"type":"object","properties":{"title":{"type":"string","maxLength":255},"description":{"type":"string","maxLength":255},"series_config":{"type":"array","items":{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/ChartSeriesConfig"},"description":"Provides series configuration."},"default_series_chart_type":{"allOf":[{}],"description":"Default chart type.\n\n* `BAR` - Bar\n* `LINE` - Line"}},"x-ref":"#/components/schemas/ChartWidgetUpdateWidget"},{"type":"object","properties":{"title":{"type":"string","maxLength":255},"description":{"type":"string","maxLength":255},"series_config":{"type":"array","items":{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/PieChartSeriesConfig"},"description":"Provides series configuration."},"default_series_chart_type":{"allOf":[{}],"description":"Default chart type.\n\n* `PIE` - Pie\n* `DOUGHNUT` - Doughnut"}},"x-ref":"#/components/schemas/PieChartWidgetUpdateWidget"}],"x-ref":"#/components/schemas/PatchedDashboard_WidgetUpdateWidget","index$":1}},"application/x-www-form-urlencoded":{"schema":{"anyOf":[{"type":"object","properties":{"title":{"type":"string","maxLength":255},"description":{"type":"string","maxLength":255}},"x-ref":"#/components/schemas/SummaryWidgetUpdateWidget"},{"type":"object","properties":{"title":{"type":"string","maxLength":255},"description":{"type":"string","maxLength":255},"series_config":{"type":"array","items":{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/ChartSeriesConfig"},"description":"Provides series configuration."},"default_series_chart_type":{"allOf":[{}],"description":"Default chart type.\n\n* `BAR` - Bar\n* `LINE` - Line"}},"x-ref":"#/components/schemas/ChartWidgetUpdateWidget"},{"type":"object","properties":{"title":{"type":"string","maxLength":255},"description":{"type":"string","maxLength":255},"series_config":{"type":"array","items":{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/PieChartSeriesConfig"},"description":"Provides series configuration."},"default_series_chart_type":{"allOf":[{}],"description":"Default chart type.\n\n* `PIE` - Pie\n* `DOUGHNUT` - Doughnut"}},"x-ref":"#/components/schemas/PieChartWidgetUpdateWidget"}],"x-ref":"#/components/schemas/PatchedDashboard_WidgetUpdateWidget"}},"multipart/form-data":{"schema":{"anyOf":[{"type":"object","properties":{"title":{"type":"string","maxLength":255},"description":{"type":"string","maxLength":255}},"x-ref":"#/components/schemas/SummaryWidgetUpdateWidget"},{"type":"object","properties":{"title":{"type":"string","maxLength":255},"description":{"type":"string","maxLength":255},"series_config":{"type":"array","items":{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/ChartSeriesConfig"},"description":"Provides series configuration."},"default_series_chart_type":{"allOf":[{}],"description":"Default chart type.\n\n* `BAR` - Bar\n* `LINE` - Line"}},"x-ref":"#/components/schemas/ChartWidgetUpdateWidget"},{"type":"object","properties":{"title":{"type":"string","maxLength":255},"description":{"type":"string","maxLength":255},"series_config":{"type":"array","items":{"type":"object","properties":{},"required":[],"x-ref":"#/components/schemas/PieChartSeriesConfig"},"description":"Provides series configuration."},"default_series_chart_type":{"allOf":[{}],"description":"Default chart type.\n\n* `PIE` - Pie\n* `DOUGHNUT` - Doughnut"}},"x-ref":"#/components/schemas/PieChartWidgetUpdateWidget"}],"x-ref":"#/components/schemas/PatchedDashboard_WidgetUpdateWidget"}}}},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"header","name":"ClientUndoRedoActionGroupId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.","index$":1},{"in":"path","name":"widget_id","schema":{"type":"integer"},"description":"The id of the widget","required":true,"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let dashboard_widget_widget_ref01_data = Object.values(setup.data.existing.dashboard_widget_widget)[0] as any

    // UPDATE
    const dashboard_widget_widget_ref01_ent = client.DashboardWidgetWidget()
    const dashboard_widget_widget_ref01_data_up0: any = {}
    dashboard_widget_widget_ref01_data_up0.id = dashboard_widget_widget_ref01_data.id

    const dashboard_widget_widget_ref01_resdata_up0 = (await dashboard_widget_widget_ref01_ent.update(dashboard_widget_widget_ref01_data_up0)).data()
    assert(dashboard_widget_widget_ref01_resdata_up0.id === dashboard_widget_widget_ref01_data_up0.id)


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
      '../../../../.sdk/test/entity/dashboard_widget_widget/DashboardWidgetWidgetTestData.json')

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
    ['dashboard_widget_widget01','dashboard_widget_widget02','dashboard_widget_widget03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_DASHBOARD_WIDGET_WIDGET_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_DASHBOARD_WIDGET_WIDGET_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_DASHBOARD_WIDGET_WIDGET_ENTID']
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
  
