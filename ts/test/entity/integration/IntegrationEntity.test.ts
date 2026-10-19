

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


describe('IntegrationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.Integration()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Integration().list({"application_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'integration.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"integration","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["ai_settings","before_id","host","name","password","port","token","type","use_ssl","use_tls","username"],"co":{"id":"POST /api/application/{application_id}/integrations/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"application_id","or":"application_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/application/{application_id}/integrations/","q":{"exist":["application_id"]},"r":{},"rb":{"alternatives":[{"kind":"multipart","media":"multipart/form-data"},{"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"application"},{"var":"application_id"},{"lit":"integrations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/application/{application_id}/integrations/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"application_id","or":"application_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/application/{application_id}/integrations/","q":{"exist":["application_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"application"},{"var":"application_id"},{"lit":"integrations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/integration/{integration_id}/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"integration_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/api/integration/{integration_id}/","q":{"exist":["id"]},"r":{"param":{"integration_id":"id"}},"s":[{"lit":"api"},{"lit":"integration"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["ai_settings","host","name","password","port","token","use_ssl","use_tls","username"],"co":{"id":"PATCH /api/integration/{integration_id}/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"integration_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/integration/{integration_id}/","q":{"exist":["id"]},"r":{"param":{"integration_id":"id"}},"rb":{"alternatives":[{"kind":"multipart","media":"multipart/form-data"},{"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"integration"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.application"]]},"key$":"integration","name__orig":"integration","Name":"Integration","name_":"integration","name-":"integration","NAME":"INTEGRATION","index$":93}, {"active":true,"entity":"integration","key$":"BasicIntegrationFlow","kind":"basic","name":"BasicIntegrationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"integration_ref01"},"m":{"application_id":"application01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{"application_id":"application01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"integration_ref01"}}]},{"a":true,"d":{},"i":{"ref":"integration_ref01","srcdatavar":"integration_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-integration_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"integration_ref01","suffix":"_rm0"},"m":{"id":"integration01"},"o":"remove","s":[],"v":[]},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"application_id":"application01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"integration_ref01"}}]}]}, 'Integration', {"POST /api/application/{application_id}/integrations/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"oneOf":[{"type":"object","description":"This serializer allow to set the type of an integration and the integration id\nbefore which we want to insert the new integration.","properties":{"before_id":{"type":"integer","description":"If provided, creates the integration before the integration with the given id."},"type":{"allOf":[{}],"description":"The type of the integration.\n\n* `local_baserow` - local_baserow\n* `smtp` - smtp\n* `ai` - ai\n* `slack_bot` - slack_bot"},"name":{"type":"string","maxLength":255}},"required":["name","type"],"x-ref":"#/components/schemas/LocalBaserowIntegrationCreateIntegration"},{"type":"object","description":"This serializer allow to set the type of an integration and the integration id\nbefore which we want to insert the new integration.","properties":{"before_id":{"type":"integer","description":"If provided, creates the integration before the integration with the given id."},"type":{"allOf":[{}],"description":"The type of the integration.\n\n* `local_baserow` - local_baserow\n* `smtp` - smtp\n* `ai` - ai\n* `slack_bot` - slack_bot"},"name":{"type":"string","maxLength":255},"host":{"type":"string","description":"The SMTP server hostname or IP address.","maxLength":255},"port":{"type":"integer","maximum":2147483647,"minimum":0,"description":"The SMTP server port."},"use_tls":{"type":"boolean","description":"Whether to upgrade the connection with STARTTLS."},"use_ssl":{"type":"boolean","description":"Whether to connect with implicit SSL/TLS, usually on port 465."},"username":{"type":"string","nullable":true,"description":"The SMTP username for authentication.","maxLength":255},"password":{"type":"string","nullable":true,"description":"The SMTP password. Write-only: it is never returned, see `has_password`. Omit it to keep the stored password; send an empty string or null to clear it.","maxLength":255}},"required":["host","name","type"],"x-ref":"#/components/schemas/SMTPIntegrationCreateIntegration"},{"type":"object","description":"This serializer allow to set the type of an integration and the integration id\nbefore which we want to insert the new integration.","properties":{"before_id":{"type":"integer","description":"If provided, creates the integration before the integration with the given id."},"type":{"allOf":[{}],"description":"The type of the integration.\n\n* `local_baserow` - local_baserow\n* `smtp` - smtp\n* `ai` - ai\n* `slack_bot` - slack_bot"},"name":{"type":"string","maxLength":255},"ai_settings":{}},"required":["name","type"],"x-ref":"#/components/schemas/AIIntegrationCreateIntegration"},{"type":"object","description":"This serializer allow to set the type of an integration and the integration id\nbefore which we want to insert the new integration.","properties":{"before_id":{"type":"integer","description":"If provided, creates the integration before the integration with the given id."},"type":{"allOf":[{}],"description":"The type of the integration.\n\n* `local_baserow` - local_baserow\n* `smtp` - smtp\n* `ai` - ai\n* `slack_bot` - slack_bot"},"name":{"type":"string","maxLength":255},"token":{"type":"string","description":"The Bot User OAuth Token. Write-only: it is never returned, see `has_token`. Omit it on an update to keep the stored token.","maxLength":255}},"required":["name","token","type"],"x-ref":"#/components/schemas/SlackBotIntegrationCreateIntegration"}],"discriminator":{"propertyName":"type","mapping":{"local_baserow":"#/components/schemas/LocalBaserowIntegrationCreateIntegration","smtp":"#/components/schemas/SMTPIntegrationCreateIntegration","ai":"#/components/schemas/AIIntegrationCreateIntegration","slack_bot":"#/components/schemas/SlackBotIntegrationCreateIntegration"}},"x-ref":"#/components/schemas/IntegrationCreateIntegration","index$":1}},"application/x-www-form-urlencoded":{"schema":{"oneOf":[{"type":"object","description":"This serializer allow to set the type of an integration and the integration id\nbefore which we want to insert the new integration.","properties":{"before_id":{"type":"integer","description":"If provided, creates the integration before the integration with the given id."},"type":{"allOf":[{}],"description":"The type of the integration.\n\n* `local_baserow` - local_baserow\n* `smtp` - smtp\n* `ai` - ai\n* `slack_bot` - slack_bot"},"name":{"type":"string","maxLength":255}},"required":["name","type"],"x-ref":"#/components/schemas/LocalBaserowIntegrationCreateIntegration"},{"type":"object","description":"This serializer allow to set the type of an integration and the integration id\nbefore which we want to insert the new integration.","properties":{"before_id":{"type":"integer","description":"If provided, creates the integration before the integration with the given id."},"type":{"allOf":[{}],"description":"The type of the integration.\n\n* `local_baserow` - local_baserow\n* `smtp` - smtp\n* `ai` - ai\n* `slack_bot` - slack_bot"},"name":{"type":"string","maxLength":255},"host":{"type":"string","description":"The SMTP server hostname or IP address.","maxLength":255},"port":{"type":"integer","maximum":2147483647,"minimum":0,"description":"The SMTP server port."},"use_tls":{"type":"boolean","description":"Whether to upgrade the connection with STARTTLS."},"use_ssl":{"type":"boolean","description":"Whether to connect with implicit SSL/TLS, usually on port 465."},"username":{"type":"string","nullable":true,"description":"The SMTP username for authentication.","maxLength":255},"password":{"type":"string","nullable":true,"description":"The SMTP password. Write-only: it is never returned, see `has_password`. Omit it to keep the stored password; send an empty string or null to clear it.","maxLength":255}},"required":["host","name","type"],"x-ref":"#/components/schemas/SMTPIntegrationCreateIntegration"},{"type":"object","description":"This serializer allow to set the type of an integration and the integration id\nbefore which we want to insert the new integration.","properties":{"before_id":{"type":"integer","description":"If provided, creates the integration before the integration with the given id."},"type":{"allOf":[{}],"description":"The type of the integration.\n\n* `local_baserow` - local_baserow\n* `smtp` - smtp\n* `ai` - ai\n* `slack_bot` - slack_bot"},"name":{"type":"string","maxLength":255},"ai_settings":{}},"required":["name","type"],"x-ref":"#/components/schemas/AIIntegrationCreateIntegration"},{"type":"object","description":"This serializer allow to set the type of an integration and the integration id\nbefore which we want to insert the new integration.","properties":{"before_id":{"type":"integer","description":"If provided, creates the integration before the integration with the given id."},"type":{"allOf":[{}],"description":"The type of the integration.\n\n* `local_baserow` - local_baserow\n* `smtp` - smtp\n* `ai` - ai\n* `slack_bot` - slack_bot"},"name":{"type":"string","maxLength":255},"token":{"type":"string","description":"The Bot User OAuth Token. Write-only: it is never returned, see `has_token`. Omit it on an update to keep the stored token.","maxLength":255}},"required":["name","token","type"],"x-ref":"#/components/schemas/SlackBotIntegrationCreateIntegration"}],"discriminator":{"propertyName":"type","mapping":{"local_baserow":"#/components/schemas/LocalBaserowIntegrationCreateIntegration","smtp":"#/components/schemas/SMTPIntegrationCreateIntegration","ai":"#/components/schemas/AIIntegrationCreateIntegration","slack_bot":"#/components/schemas/SlackBotIntegrationCreateIntegration"}},"x-ref":"#/components/schemas/IntegrationCreateIntegration"}},"multipart/form-data":{"schema":{"oneOf":[{"type":"object","description":"This serializer allow to set the type of an integration and the integration id\nbefore which we want to insert the new integration.","properties":{"before_id":{"type":"integer","description":"If provided, creates the integration before the integration with the given id."},"type":{"allOf":[{}],"description":"The type of the integration.\n\n* `local_baserow` - local_baserow\n* `smtp` - smtp\n* `ai` - ai\n* `slack_bot` - slack_bot"},"name":{"type":"string","maxLength":255}},"required":["name","type"],"x-ref":"#/components/schemas/LocalBaserowIntegrationCreateIntegration"},{"type":"object","description":"This serializer allow to set the type of an integration and the integration id\nbefore which we want to insert the new integration.","properties":{"before_id":{"type":"integer","description":"If provided, creates the integration before the integration with the given id."},"type":{"allOf":[{}],"description":"The type of the integration.\n\n* `local_baserow` - local_baserow\n* `smtp` - smtp\n* `ai` - ai\n* `slack_bot` - slack_bot"},"name":{"type":"string","maxLength":255},"host":{"type":"string","description":"The SMTP server hostname or IP address.","maxLength":255},"port":{"type":"integer","maximum":2147483647,"minimum":0,"description":"The SMTP server port."},"use_tls":{"type":"boolean","description":"Whether to upgrade the connection with STARTTLS."},"use_ssl":{"type":"boolean","description":"Whether to connect with implicit SSL/TLS, usually on port 465."},"username":{"type":"string","nullable":true,"description":"The SMTP username for authentication.","maxLength":255},"password":{"type":"string","nullable":true,"description":"The SMTP password. Write-only: it is never returned, see `has_password`. Omit it to keep the stored password; send an empty string or null to clear it.","maxLength":255}},"required":["host","name","type"],"x-ref":"#/components/schemas/SMTPIntegrationCreateIntegration"},{"type":"object","description":"This serializer allow to set the type of an integration and the integration id\nbefore which we want to insert the new integration.","properties":{"before_id":{"type":"integer","description":"If provided, creates the integration before the integration with the given id."},"type":{"allOf":[{}],"description":"The type of the integration.\n\n* `local_baserow` - local_baserow\n* `smtp` - smtp\n* `ai` - ai\n* `slack_bot` - slack_bot"},"name":{"type":"string","maxLength":255},"ai_settings":{}},"required":["name","type"],"x-ref":"#/components/schemas/AIIntegrationCreateIntegration"},{"type":"object","description":"This serializer allow to set the type of an integration and the integration id\nbefore which we want to insert the new integration.","properties":{"before_id":{"type":"integer","description":"If provided, creates the integration before the integration with the given id."},"type":{"allOf":[{}],"description":"The type of the integration.\n\n* `local_baserow` - local_baserow\n* `smtp` - smtp\n* `ai` - ai\n* `slack_bot` - slack_bot"},"name":{"type":"string","maxLength":255},"token":{"type":"string","description":"The Bot User OAuth Token. Write-only: it is never returned, see `has_token`. Omit it on an update to keep the stored token.","maxLength":255}},"required":["name","token","type"],"x-ref":"#/components/schemas/SlackBotIntegrationCreateIntegration"}],"discriminator":{"propertyName":"type","mapping":{"local_baserow":"#/components/schemas/LocalBaserowIntegrationCreateIntegration","smtp":"#/components/schemas/SMTPIntegrationCreateIntegration","ai":"#/components/schemas/AIIntegrationCreateIntegration","slack_bot":"#/components/schemas/SlackBotIntegrationCreateIntegration"}},"x-ref":"#/components/schemas/IntegrationCreateIntegration"}}}},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"application_id","schema":{"type":"integer"},"description":"Creates an integration for the application related to the provided value.","required":true,"index$":1}]},"GET /api/application/{application_id}/integrations/":{"protocol":"http","parameters":[{"in":"path","name":"application_id","schema":{"type":"integer"},"description":"Returns only the integrations of the application related to the provided Id.","required":true,"index$":0}]},"DELETE /api/integration/{integration_id}/":{"protocol":"http","parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"integration_id","schema":{"type":"integer"},"description":"The id of the integration","required":true,"index$":1}]},"PATCH /api/integration/{integration_id}/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"anyOf":[{"type":"object","properties":{"name":{"type":"string","maxLength":255}},"x-ref":"#/components/schemas/PatchedLocalBaserowIntegrationUpdateIntegration"},{"type":"object","properties":{"name":{"type":"string","maxLength":255},"host":{"type":"string","description":"The SMTP server hostname or IP address.","maxLength":255},"port":{"type":"integer","maximum":2147483647,"minimum":0,"description":"The SMTP server port."},"use_tls":{"type":"boolean","description":"Whether to upgrade the connection with STARTTLS."},"use_ssl":{"type":"boolean","description":"Whether to connect with implicit SSL/TLS, usually on port 465."},"username":{"type":"string","nullable":true,"description":"The SMTP username for authentication.","maxLength":255},"password":{"type":"string","nullable":true,"description":"The SMTP password. Write-only: it is never returned, see `has_password`. Omit it to keep the stored password; send an empty string or null to clear it.","maxLength":255}},"x-ref":"#/components/schemas/PatchedSMTPIntegrationUpdateIntegration"},{"type":"object","properties":{"name":{"type":"string","maxLength":255},"ai_settings":{}},"x-ref":"#/components/schemas/PatchedAIIntegrationUpdateIntegration"},{"type":"object","properties":{"name":{"type":"string","maxLength":255},"token":{"type":"string","description":"The Bot User OAuth Token. Write-only: it is never returned, see `has_token`. Omit it on an update to keep the stored token.","maxLength":255}},"x-ref":"#/components/schemas/PatchedSlackBotIntegrationUpdateIntegration"}],"x-ref":"#/components/schemas/PatchedIntegrationUpdateIntegration","index$":1}},"application/x-www-form-urlencoded":{"schema":{"anyOf":[{"type":"object","properties":{"name":{"type":"string","maxLength":255}},"x-ref":"#/components/schemas/PatchedLocalBaserowIntegrationUpdateIntegration"},{"type":"object","properties":{"name":{"type":"string","maxLength":255},"host":{"type":"string","description":"The SMTP server hostname or IP address.","maxLength":255},"port":{"type":"integer","maximum":2147483647,"minimum":0,"description":"The SMTP server port."},"use_tls":{"type":"boolean","description":"Whether to upgrade the connection with STARTTLS."},"use_ssl":{"type":"boolean","description":"Whether to connect with implicit SSL/TLS, usually on port 465."},"username":{"type":"string","nullable":true,"description":"The SMTP username for authentication.","maxLength":255},"password":{"type":"string","nullable":true,"description":"The SMTP password. Write-only: it is never returned, see `has_password`. Omit it to keep the stored password; send an empty string or null to clear it.","maxLength":255}},"x-ref":"#/components/schemas/PatchedSMTPIntegrationUpdateIntegration"},{"type":"object","properties":{"name":{"type":"string","maxLength":255},"ai_settings":{}},"x-ref":"#/components/schemas/PatchedAIIntegrationUpdateIntegration"},{"type":"object","properties":{"name":{"type":"string","maxLength":255},"token":{"type":"string","description":"The Bot User OAuth Token. Write-only: it is never returned, see `has_token`. Omit it on an update to keep the stored token.","maxLength":255}},"x-ref":"#/components/schemas/PatchedSlackBotIntegrationUpdateIntegration"}],"x-ref":"#/components/schemas/PatchedIntegrationUpdateIntegration"}},"multipart/form-data":{"schema":{"anyOf":[{"type":"object","properties":{"name":{"type":"string","maxLength":255}},"x-ref":"#/components/schemas/PatchedLocalBaserowIntegrationUpdateIntegration"},{"type":"object","properties":{"name":{"type":"string","maxLength":255},"host":{"type":"string","description":"The SMTP server hostname or IP address.","maxLength":255},"port":{"type":"integer","maximum":2147483647,"minimum":0,"description":"The SMTP server port."},"use_tls":{"type":"boolean","description":"Whether to upgrade the connection with STARTTLS."},"use_ssl":{"type":"boolean","description":"Whether to connect with implicit SSL/TLS, usually on port 465."},"username":{"type":"string","nullable":true,"description":"The SMTP username for authentication.","maxLength":255},"password":{"type":"string","nullable":true,"description":"The SMTP password. Write-only: it is never returned, see `has_password`. Omit it to keep the stored password; send an empty string or null to clear it.","maxLength":255}},"x-ref":"#/components/schemas/PatchedSMTPIntegrationUpdateIntegration"},{"type":"object","properties":{"name":{"type":"string","maxLength":255},"ai_settings":{}},"x-ref":"#/components/schemas/PatchedAIIntegrationUpdateIntegration"},{"type":"object","properties":{"name":{"type":"string","maxLength":255},"token":{"type":"string","description":"The Bot User OAuth Token. Write-only: it is never returned, see `has_token`. Omit it on an update to keep the stored token.","maxLength":255}},"x-ref":"#/components/schemas/PatchedSlackBotIntegrationUpdateIntegration"}],"x-ref":"#/components/schemas/PatchedIntegrationUpdateIntegration"}}}},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"integration_id","schema":{"type":"integer"},"description":"The id of the integration","required":true,"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const integration_ref01_ent = client.Integration()
    let integration_ref01_data = setup.data.new.integration['integration_ref01']
    integration_ref01_data['application_id'] = setup.idmap['application01']

    integration_ref01_data = (await integration_ref01_ent.create(integration_ref01_data)).data()
    assert(null != integration_ref01_data.id)


    // LIST
    const integration_ref01_match: any = {}
    integration_ref01_match['application_id'] = setup.idmap['application01']

    const integration_ref01_list = (await integration_ref01_ent.list(integration_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(integration_ref01_list, { id: integration_ref01_data.id })))


    // UPDATE
    const integration_ref01_data_up0: any = {}
    integration_ref01_data_up0.id = integration_ref01_data.id

    const integration_ref01_resdata_up0 = (await integration_ref01_ent.update(integration_ref01_data_up0)).data()
    assert(integration_ref01_resdata_up0.id === integration_ref01_data_up0.id)


    // REMOVE
    const integration_ref01_match_rm0: any = { id: integration_ref01_data.id }
    await integration_ref01_ent.remove(integration_ref01_match_rm0)
  

    // LIST
    const integration_ref01_match_rt0: any = {}
    integration_ref01_match_rt0['application_id'] = setup.idmap['application01']

    const integration_ref01_list_rt0 = (await integration_ref01_ent.list(integration_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(integration_ref01_list_rt0, { id: integration_ref01_data.id })))


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
      '../../../../.sdk/test/entity/integration/IntegrationTestData.json')

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
    ['integration01','integration02','integration03','application01','application02','application03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_INTEGRATION_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_INTEGRATION_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_INTEGRATION_ENTID']
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
  
