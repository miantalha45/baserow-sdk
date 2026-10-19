

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


describe('UpdateFieldPermissionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.UpdateFieldPermission()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.UpdateFieldPermission().load({"id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'update_field_permission.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"allow_in_forms":{"a":true,"h":"Allow In Forms","n":"allow_in_forms","r":false,"sh":"Whether to allow this field to be shown in forms.","t":"`$BOOLEAN`","key$":"allow_in_forms","index$":0},"can_write_values":{"a":true,"h":"Can Write Values","n":"can_write_values","r":false,"sh":"Whether the user can write values to this field.","t":"`$BOOLEAN`","key$":"can_write_values","index$":1},"field_id":{"a":true,"h":"Field Id","n":"field_id","r":true,"sh":"The ID of the field whose permissions were updated.","t":"`$INTEGER`","key$":"field_id","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"role":{"a":true,"h":"Role","n":"role","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The role required to update the data for this field.","t":"`$STRING`","key$":"role","index$":4},"subjects":{"a":true,"h":"Subjects","n":"subjects","op":{"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"ro":true,"t":"`$ARRAY`","key$":"subjects","index$":5}},"id":{"field":"id","name":"id"},"name":"update_field_permission","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/field-permissions/{field_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"field_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/field-permissions/{field_id}/","q":{"exist":["id"]},"r":{"param":{"field_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"field-permissions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["allow_in_forms","role","subjects"],"co":{"id":"PATCH /api/field-permissions/{field_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"field_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/field-permissions/{field_id}/","q":{"exist":["id"]},"r":{"param":{"field_id":"id"}},"rb":{"alternatives":[{"fields":[{"name":"allow_in_forms"},{"name":"role"},{"list":true,"name":"subjects"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"allow_in_forms"},{"name":"role"},{"list":true,"name":"subjects"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"field-permissions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"update_field_permission","name__orig":"update_field_permission","Name":"UpdateFieldPermission","name_":"update_field_permission","name-":"update-field-permission","NAME":"UPDATE_FIELD_PERMISSION","index$":152}, {"active":true,"entity":"update_field_permission","key$":"BasicUpdateFieldPermissionFlow","kind":"basic","name":"BasicUpdateFieldPermissionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"update_field_permission_ref01","srcdatavar":"update_field_permission_ref01_data","suffix":"_up0","textfield":"role"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-update_field_permission_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"update_field_permission_ref01","srcdatavar":"update_field_permission_ref01_data","suffix":"_dt0"},"m":{"id":"update_field_permission01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-update_field_permission_ref01"}}]}]}, 'UpdateFieldPermission', {"GET /api/field-permissions/{field_id}/":{"protocol":"http","parameters":[{"in":"path","name":"field_id","schema":{"type":"integer"},"description":"The ID of the field to get the permissions for.","required":true,"index$":0}]},"PATCH /api/field-permissions/{field_id}/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"role":{"allOf":[{"enum":["ADMIN","BUILDER","EDITOR","CUSTOM","NOBODY"],"type":"string","description":"* `ADMIN` - Admin\n* `BUILDER` - Builder\n* `EDITOR` - Editor\n* `CUSTOM` - Custom\n* `NOBODY` - Nobody","x-ref":"#/components/schemas/RoleEnum"}],"description":"The role required to update the data for this field.\n\n* `ADMIN` - Admin\n* `BUILDER` - Builder\n* `EDITOR` - Editor\n* `CUSTOM` - Custom\n* `NOBODY` - Nobody","key$":"role"},"allow_in_forms":{"type":"boolean","default":false,"description":"Whether to allow this field to be shown in forms. Default is False. This setting is only relevant if the role is not 'EDITOR'. ","key$":"allow_in_forms"},"subjects":{"type":"array","items":{"type":"object","properties":{"subject_id":{"type":"integer","minimum":1},"subject_type":{"enum":[],"type":"string","description":"* `auth.User` - auth.User\n* `baserow_enterprise.Team` - baserow_enterprise.Team\n* `core.Agent` - core.Agent","x-ref":"#/components/schemas/SubjectTypeB01Enum"}},"required":["subject_id","subject_type"],"x-ref":"#/components/schemas/FieldPermissionSubjectRequest"},"key$":"subjects"}},"x-ref":"#/components/schemas/PatchedUpdateFieldPermissionsRequest","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"role":{"allOf":[{"enum":["ADMIN","BUILDER","EDITOR","CUSTOM","NOBODY"],"type":"string","description":"* `ADMIN` - Admin\n* `BUILDER` - Builder\n* `EDITOR` - Editor\n* `CUSTOM` - Custom\n* `NOBODY` - Nobody","x-ref":"#/components/schemas/RoleEnum"}],"description":"The role required to update the data for this field.\n\n* `ADMIN` - Admin\n* `BUILDER` - Builder\n* `EDITOR` - Editor\n* `CUSTOM` - Custom\n* `NOBODY` - Nobody","key$":"role"},"allow_in_forms":{"type":"boolean","default":false,"description":"Whether to allow this field to be shown in forms. Default is False. This setting is only relevant if the role is not 'EDITOR'. ","key$":"allow_in_forms"},"subjects":{"type":"array","items":{"type":"object","properties":{"subject_id":{"type":"integer","minimum":1},"subject_type":{"enum":[],"type":"string","description":"* `auth.User` - auth.User\n* `baserow_enterprise.Team` - baserow_enterprise.Team\n* `core.Agent` - core.Agent","x-ref":"#/components/schemas/SubjectTypeB01Enum"}},"required":["subject_id","subject_type"],"x-ref":"#/components/schemas/FieldPermissionSubjectRequest"},"key$":"subjects"}},"x-ref":"#/components/schemas/PatchedUpdateFieldPermissionsRequest"}},"multipart/form-data":{"schema":{"type":"object","properties":{"role":{"allOf":[{"enum":["ADMIN","BUILDER","EDITOR","CUSTOM","NOBODY"],"type":"string","description":"* `ADMIN` - Admin\n* `BUILDER` - Builder\n* `EDITOR` - Editor\n* `CUSTOM` - Custom\n* `NOBODY` - Nobody","x-ref":"#/components/schemas/RoleEnum"}],"description":"The role required to update the data for this field.\n\n* `ADMIN` - Admin\n* `BUILDER` - Builder\n* `EDITOR` - Editor\n* `CUSTOM` - Custom\n* `NOBODY` - Nobody","key$":"role"},"allow_in_forms":{"type":"boolean","default":false,"description":"Whether to allow this field to be shown in forms. Default is False. This setting is only relevant if the role is not 'EDITOR'. ","key$":"allow_in_forms"},"subjects":{"type":"array","items":{"type":"object","properties":{"subject_id":{"type":"integer","minimum":1},"subject_type":{"enum":[],"type":"string","description":"* `auth.User` - auth.User\n* `baserow_enterprise.Team` - baserow_enterprise.Team\n* `core.Agent` - core.Agent","x-ref":"#/components/schemas/SubjectTypeB01Enum"}},"required":["subject_id","subject_type"],"x-ref":"#/components/schemas/FieldPermissionSubjectRequest"},"key$":"subjects"}},"x-ref":"#/components/schemas/PatchedUpdateFieldPermissionsRequest"}}}},"parameters":[{"in":"path","name":"field_id","schema":{"type":"integer"},"description":"The ID of the field to update the permissions for.","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let update_field_permission_ref01_data = Object.values(setup.data.existing.update_field_permission)[0] as any

    // UPDATE
    const update_field_permission_ref01_ent = client.UpdateFieldPermission()
    const update_field_permission_ref01_data_up0: any = {}
    update_field_permission_ref01_data_up0.id = update_field_permission_ref01_data.id

    const update_field_permission_ref01_markdef_up0 = { name: 'role', value: 'Mark01-update_field_permission_ref01_' + setup.now }
    ;(update_field_permission_ref01_data_up0 as any)[update_field_permission_ref01_markdef_up0.name] = update_field_permission_ref01_markdef_up0.value

    const update_field_permission_ref01_resdata_up0 = (await update_field_permission_ref01_ent.update(update_field_permission_ref01_data_up0)).data()
    assert(update_field_permission_ref01_resdata_up0.id === update_field_permission_ref01_data_up0.id)

    assert((update_field_permission_ref01_resdata_up0 as any)[update_field_permission_ref01_markdef_up0.name] === update_field_permission_ref01_markdef_up0.value)


    // LOAD
    const update_field_permission_ref01_match_dt0: any = {}
    update_field_permission_ref01_match_dt0.id = update_field_permission_ref01_data.id
    const update_field_permission_ref01_data_dt0 = (await update_field_permission_ref01_ent.load(update_field_permission_ref01_match_dt0)).data()
    assert(update_field_permission_ref01_data_dt0.id === update_field_permission_ref01_data.id)


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
      '../../../../.sdk/test/entity/update_field_permission/UpdateFieldPermissionTestData.json')

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
    ['update_field_permission01','update_field_permission02','update_field_permission03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_UPDATE_FIELD_PERMISSION_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_UPDATE_FIELD_PERMISSION_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_UPDATE_FIELD_PERMISSION_ENTID']
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
  
