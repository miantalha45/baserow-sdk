

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


describe('TypeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.Type()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Type().create({"formula_id":"x","formula":"x","name":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'type.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"array_formula_type":{"a":true,"h":"Array Formula Type","n":"array_formula_type","r":false,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"array_formula_type","index$":0},"date_force_timezone":{"a":true,"h":"Date Force Timezone","n":"date_force_timezone","r":false,"sh":"Force a timezone for the field overriding user profile settings.","t":"`$STRING`","key$":"date_force_timezone","index$":1},"date_format":{"a":true,"h":"Date Format","n":"date_format","r":false,"sh":"EU (day/month/year), US (month/day/year), or ISO (year-month-day) * `EU` - European (D/M/Y) * `US` - US (M/D/Y) * `ISO` - ISO (Y-M-D)","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"date_format","index$":2},"date_include_time":{"a":true,"h":"Date Include Time","n":"date_include_time","r":false,"sh":"Indicates if the field also includes a time.","t":"`$BOOLEAN`","key$":"date_include_time","index$":3},"date_show_tzinfo":{"a":true,"h":"Date Show Tzinfo","n":"date_show_tzinfo","r":false,"sh":"Indicates if the time zone should be shown.","t":"`$BOOLEAN`","key$":"date_show_tzinfo","index$":4},"date_time_format":{"a":true,"h":"Date Time Format","n":"date_time_format","r":false,"sh":"24 (14:30) or 12 (02:30 PM) * `24` - 24 hour * `12` - 12 hour","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"date_time_format","index$":5},"duration_format":{"a":true,"h":"Duration Format","n":"duration_format","r":false,"sh":"The format of the duration.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"duration_format","index$":6},"error":{"a":true,"h":"Error","n":"error","r":false,"t":"`$STRING`","key$":"error","index$":7},"formula":{"a":true,"h":"Formula","n":"formula","r":true,"t":"`$STRING`","key$":"formula","index$":8},"formula_type":{"a":true,"h":"Formula Type","n":"formula_type","r":false,"sh":"* `invalid` - invalid * `text` - text * `char` - char * `button` - button * `link` - link * `date_interval` - date_interval * `duration` - duration * `date` - date * `boolean` - boolean * `number` - number * `array` - array *…","t":"`$STRING`","key$":"formula_type","index$":9},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":10},"nullable":{"a":true,"h":"Nullable","n":"nullable","r":true,"t":"`$BOOLEAN`","key$":"nullable","index$":11},"number_decimal_places":{"a":true,"h":"Number Decimal Places","n":"number_decimal_places","r":false,"sh":"The amount of digits allowed after the point.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"number_decimal_places","index$":12},"number_prefix":{"a":true,"h":"Number Prefix","n":"number_prefix","r":false,"sh":"The prefix to use for the field.","t":"`$STRING`","key$":"number_prefix","index$":13},"number_separator":{"a":true,"h":"Number Separator","n":"number_separator","r":false,"sh":"The thousand and decimal separator to use for the field.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"number_separator","index$":14},"number_suffix":{"a":true,"h":"Number Suffix","n":"number_suffix","r":false,"sh":"The suffix to use for the field.","t":"`$STRING`","key$":"number_suffix","index$":15}},"name":"type","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["formula","name"],"co":{"id":"POST /api/database/formula/{table_id}/type/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"formula_id","or":"table_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/database/formula/{table_id}/type/","q":{"exist":["formula_id"]},"r":{"param":{"table_id":"formula_id"}},"rb":{"alternatives":[{"fields":[{"name":"formula"},{"name":"name"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"formula"},{"name":"name"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"formula"},{"var":"formula_id"},{"lit":"type"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"type","name__orig":"type","Name":"Type","name_":"type","name-":"type","NAME":"TYPE","index$":150}, {"active":true,"entity":"type","key$":"BasicTypeFlow","kind":"basic","name":"BasicTypeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"type_ref01"},"m":{"formula_id":"formula01"},"o":"create","s":[],"v":[]}]}, 'Type', {"POST /api/database/formula/{table_id}/type/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"formula":{"type":"string","key$":"formula"},"name":{"type":"string","maxLength":255,"key$":"name"}},"required":["formula","name"],"x-ref":"#/components/schemas/TypeFormulaRequest","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"formula":{"type":"string","key$":"formula"},"name":{"type":"string","maxLength":255,"key$":"name"}},"required":["formula","name"],"x-ref":"#/components/schemas/TypeFormulaRequest"}},"multipart/form-data":{"schema":{"type":"object","properties":{"formula":{"type":"string","key$":"formula"},"name":{"type":"string","maxLength":255,"key$":"name"}},"required":["formula","name"],"x-ref":"#/components/schemas/TypeFormulaRequest"}}},"required":true},"parameters":[{"in":"path","name":"table_id","schema":{"type":"integer"},"description":"The table id of the formula field to type.","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const type_ref01_ent = client.Type()
    let type_ref01_data = setup.data.new.type['type_ref01']
    type_ref01_data['formula_id'] = setup.idmap['formula01']

    type_ref01_data = (await type_ref01_ent.create(type_ref01_data)).data()
    assert(null != type_ref01_data)


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
      '../../../../.sdk/test/entity/type/TypeTestData.json')

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
    ['type01','type02','type03','formula01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_TYPE_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_TYPE_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_TYPE_ENTID']
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
  
