

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


describe('TeamSubjectEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.TeamSubject()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.TeamSubject().list({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'team_subject.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":0},"subject_id":{"a":true,"h":"Subject Id","n":"subject_id","op":{"create":{"req":false,"type":"`$INTEGER`"}},"r":true,"sh":"The unique subject ID.","t":"`$INTEGER`","key$":"subject_id","index$":1},"subject_type":{"a":true,"h":"Subject Type","n":"subject_type","r":true,"ro":true,"sh":"Returns the TeamSubject's `subject_type` natural key.","t":"`$STRING`","key$":"subject_type","index$":2},"subject_user_email":{"a":true,"fo":"email","h":"Subject User Email","n":"subject_user_email","r":false,"sh":"The user subject's email address.","t":"`$STRING`","key$":"subject_user_email","index$":3},"team":{"a":true,"h":"Team","n":"team","r":true,"sh":"The team this subject belongs to.","t":"`$INTEGER`","key$":"team","index$":4}},"id":{"field":"id","name":"id"},"name":"team_subject","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["subject_id","subject_type","subject_user_email"],"co":{"id":"POST /api/teams/{team_id}/subjects/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"team_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/teams/{team_id}/subjects/","q":{"exist":["id"]},"r":{"param":{"team_id":"id"}},"rb":{"alternatives":[{"fields":[{"name":"id"},{"name":"subject_id"},{"name":"subject_type"},{"name":"subject_user_email"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"id"},{"name":"subject_id"},{"name":"subject_type"},{"name":"subject_user_email"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"teams"},{"var":"id"},{"lit":"subjects"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/teams/{team_id}/subjects/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"team_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/teams/{team_id}/subjects/","q":{"exist":["id"]},"r":{"param":{"team_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"teams"},{"var":"id"},{"lit":"subjects"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/teams/{team_id}/subjects/{subject_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"subject_id","r":true,"t":"`$INTEGER`","index$":0},{"a":true,"k":"param","n":"team_id","or":"team_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/teams/{team_id}/subjects/{subject_id}/","q":{"exist":["id","team_id"]},"r":{"param":{"subject_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"teams"},{"var":"team_id"},{"lit":"subjects"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.team"]]},"key$":"team_subject","name__orig":"team_subject","Name":"TeamSubject","name_":"team_subject","name-":"team-subject","NAME":"TEAM_SUBJECT","index$":145}, {"active":true,"entity":"team_subject","key$":"BasicTeamSubjectFlow","kind":"basic","name":"BasicTeamSubjectFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"team_subject_ref01"},"m":{"team_id":"team01"},"o":"create","s":[],"v":[],"unreachable":true},{"a":false,"d":{},"i":{},"m":{"team_id":"team01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"team_subject_ref01"}}],"unreachable":true},{"a":true,"d":{},"i":{"ref":"team_subject_ref01","srcdatavar":"team_subject_ref01_data","suffix":"_dt0"},"m":{"id":"team_subject01","team_id":"team01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-team_subject_ref01"}}]}]}, 'TeamSubject', {"POST /api/teams/{team_id}/subjects/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","description":"Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.","properties":{"id":{"type":"integer","readOnly":true,"key$":"id"},"subject_id":{"type":"integer","description":"The subject's unique identifier.","key$":"subject_id"},"subject_user_email":{"type":"string","format":"email","description":"The user subject's email address.","key$":"subject_user_email"},"subject_type":{"allOf":[{"enum":["auth.User","core.Agent"],"type":"string","description":"* `auth.User` - auth.User\n* `core.Agent` - core.Agent","x-ref":"#/components/schemas/SubjectType2e9Enum"}],"description":"The type of subject that is being invited.\n\n* `auth.User` - auth.User\n* `core.Agent` - core.Agent","key$":"subject_type"}},"required":["id","subject_type"],"x-ref":"#/components/schemas/TeamSubject","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","description":"Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.","properties":{"id":{"type":"integer","readOnly":true,"key$":"id"},"subject_id":{"type":"integer","description":"The subject's unique identifier.","key$":"subject_id"},"subject_user_email":{"type":"string","format":"email","description":"The user subject's email address.","key$":"subject_user_email"},"subject_type":{"allOf":[{"enum":["auth.User","core.Agent"],"type":"string","description":"* `auth.User` - auth.User\n* `core.Agent` - core.Agent","x-ref":"#/components/schemas/SubjectType2e9Enum"}],"description":"The type of subject that is being invited.\n\n* `auth.User` - auth.User\n* `core.Agent` - core.Agent","key$":"subject_type"}},"required":["id","subject_type"],"x-ref":"#/components/schemas/TeamSubject"}},"multipart/form-data":{"schema":{"type":"object","description":"Mixin to a DRF serializer class to raise an exception if data with unknown fields\nis provided to the serializer.","properties":{"id":{"type":"integer","readOnly":true,"key$":"id"},"subject_id":{"type":"integer","description":"The subject's unique identifier.","key$":"subject_id"},"subject_user_email":{"type":"string","format":"email","description":"The user subject's email address.","key$":"subject_user_email"},"subject_type":{"allOf":[{"enum":["auth.User","core.Agent"],"type":"string","description":"* `auth.User` - auth.User\n* `core.Agent` - core.Agent","x-ref":"#/components/schemas/SubjectType2e9Enum"}],"description":"The type of subject that is being invited.\n\n* `auth.User` - auth.User\n* `core.Agent` - core.Agent","key$":"subject_type"}},"required":["id","subject_type"],"x-ref":"#/components/schemas/TeamSubject"}}},"required":true},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"team_id","schema":{"type":"string","pattern":"^[0-9]+$"},"required":true,"index$":1}]},"GET /api/teams/{team_id}/subjects/":{"protocol":"http","parameters":[{"in":"path","name":"team_id","schema":{"type":"string","pattern":"^[0-9]+$"},"required":true,"index$":0}]},"GET /api/teams/{team_id}/subjects/{subject_id}/":{"protocol":"http","parameters":[{"in":"path","name":"subject_id","schema":{"type":"integer"},"description":"Returns the subject related to the provided value.","required":true,"index$":0},{"in":"path","name":"team_id","schema":{"type":"string","pattern":"^[0-9]+$"},"required":true,"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let team_subject_ref01_data = Object.values(setup.data.existing.team_subject)[0] as any

    // LOAD
    const team_subject_ref01_ent = client.TeamSubject()
    const team_subject_ref01_match_dt0: any = {}
    team_subject_ref01_match_dt0.id = team_subject_ref01_data.id
    team_subject_ref01_match_dt0['team_id'] = setup.idmap['team_id'] ?? setup.idmap['team01']
    const team_subject_ref01_data_dt0 = (await team_subject_ref01_ent.load(team_subject_ref01_match_dt0)).data()
    assert(team_subject_ref01_data_dt0.id === team_subject_ref01_data.id)


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
      '../../../../.sdk/test/entity/team_subject/TeamSubjectTestData.json')

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
    ['team_subject01','team_subject02','team_subject03','team01','team02','team03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_TEAM_SUBJECT_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_TEAM_SUBJECT_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_TEAM_SUBJECT_ENTID']
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
  
