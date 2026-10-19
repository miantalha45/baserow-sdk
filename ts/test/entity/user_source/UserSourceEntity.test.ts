

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


describe('UserSourceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.UserSource()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.UserSource().list({"application_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'user_source.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"RelayState":{"a":true,"h":"Relay State","n":"RelayState","r":true,"sh":"The frontend URL where redirect the authenticated user.","t":"`$STRING`","key$":"RelayState","index$":0},"SAMLResponse":{"a":true,"h":"Saml Response","n":"SAMLResponse","r":true,"sh":"The encoded SAML response from the IdP.","t":"`$STRING`","key$":"SAMLResponse","index$":1},"access_token":{"a":true,"h":"Access Token","n":"access_token","r":false,"sh":"'access_token' can be used to authorize for other endpoints that require authorization.","t":"`$STRING`","key$":"access_token","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"refresh":{"a":true,"h":"Refresh","n":"refresh","r":true,"t":"`$STRING`","wo":true,"key$":"refresh","index$":4}},"id":{"field":"id","name":"id"},"name":"user_source","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["auth_providers","before_id","email_field_id","integration_id","name","name_field_id","role_field_id","table_id","type"],"co":{"id":"POST /api/application/{application_id}/user-sources/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"application_id","or":"application_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/application/{application_id}/user-sources/","q":{"exist":["application_id"]},"r":{},"rb":{"alternatives":[{"kind":"multipart","media":"multipart/form-data"},{"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"application"},{"var":"application_id"},{"lit":"user-sources"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/user-source/{user_source_id}/force-token-auth","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"user_source_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/user-source/{user_source_id}/force-token-auth","q":{"$action":"force_token_auth","exist":["id"]},"r":{"param":{"user_source_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"user-source"},{"var":"id"},{"lit":"force-token-auth"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"bf":["password","username"],"co":{"id":"POST /api/user-source/{user_source_id}/token-auth","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"user_source_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/user-source/{user_source_id}/token-auth","q":{"$action":"token_auth","exist":["id"]},"r":{"param":{"user_source_id":"id"}},"rb":{"alternatives":[{"fields":[{"name":"access"},{"name":"password"},{"name":"refresh"},{"name":"username"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"access"},{"name":"password"},{"name":"refresh"},{"name":"username"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"user-source"},{"var":"id"},{"lit":"token-auth"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /api/user-source-auth-refresh/","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/user-source-auth-refresh/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"user-source-auth-refresh"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"bf":["refresh"],"co":{"id":"POST /api/user-source-token-blacklist/","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/user-source-token-blacklist/","q":{},"r":{},"rb":{"alternatives":[{"fields":[{"name":"refresh"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"refresh"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"user-source-token-blacklist"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"bf":["RelayState","SAMLResponse"],"co":{"id":"POST /api/user-source/sso/saml/acs/","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/user-source/sso/saml/acs/","q":{},"r":{},"rb":{"alternatives":[{"fields":[{"name":"RelayState"},{"name":"SAMLResponse"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"RelayState"},{"name":"SAMLResponse"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"user-source"},{"lit":"sso"},{"lit":"saml"},{"lit":"acs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/application/{application_id}/user-sources/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"application_id","or":"application_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/application/{application_id}/user-sources/","q":{"exist":["application_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"application"},{"var":"application_id"},{"lit":"user-sources"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/user-source/{user_source_uid}/sso/oauth2/openid_connect/callback/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"user_source_uid","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"k":"query","n":"code","or":"code","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"state","or":"state","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/user-source/{user_source_uid}/sso/oauth2/openid_connect/callback/","q":{"exist":["id"]},"r":{"param":{"user_source_uid":"id"}},"s":[{"lit":"api"},{"lit":"user-source"},{"var":"id"},{"lit":"sso"},{"lit":"oauth2"},{"lit":"openid_connect"},{"lit":"callback"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/user-source/{user_source_uid}/sso/oauth2/openid_connect/login/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"user_source_uid","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"k":"query","n":"iss","or":"iss","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"original","or":"original","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/user-source/{user_source_uid}/sso/oauth2/openid_connect/login/","q":{"exist":["id"]},"r":{"param":{"user_source_uid":"id"}},"s":[{"lit":"api"},{"lit":"user-source"},{"var":"id"},{"lit":"sso"},{"lit":"oauth2"},{"lit":"openid_connect"},{"lit":"login"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/user-source/{user_source_uid}/sso/saml/login/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"user_source_uid","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"email","or":"email","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"original","or":"original","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/user-source/{user_source_uid}/sso/saml/login/","q":{"exist":["id"]},"r":{"param":{"user_source_uid":"id"}},"s":[{"lit":"api"},{"lit":"user-source"},{"var":"id"},{"lit":"sso"},{"lit":"saml"},{"lit":"login"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/user-source/{user_source_id}/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"user_source_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/api/user-source/{user_source_id}/","q":{"exist":["id"]},"r":{"param":{"user_source_id":"id"}},"s":[{"lit":"api"},{"lit":"user-source"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["auth_providers","email_field_id","integration_id","name","name_field_id","role_field_id","table_id"],"co":{"id":"PATCH /api/user-source/{user_source_id}/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"user_source_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/user-source/{user_source_id}/","q":{"exist":["id"]},"r":{"param":{"user_source_id":"id"}},"rb":{"alternatives":[{"kind":"multipart","media":"multipart/form-data"},{"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"user-source"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.application"]]},"key$":"user_source","name__orig":"user_source","Name":"UserSource","name_":"user_source","name-":"user-source","NAME":"USER_SOURCE","index$":155}, {"active":true,"entity":"user_source","key$":"BasicUserSourceFlow","kind":"basic","name":"BasicUserSourceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"user_source_ref01"},"m":{"application_id":"application01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{"application_id":"application01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"user_source_ref01"}}]},{"a":true,"d":{},"i":{"ref":"user_source_ref01","srcdatavar":"user_source_ref01_data","suffix":"_up0","textfield":"RelayState"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-user_source_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"user_source_ref01","srcdatavar":"user_source_ref01_data","suffix":"_dt0"},"m":{"id":"user_source01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-user_source_ref01"}}]},{"a":true,"d":{},"i":{"ref":"user_source_ref01","suffix":"_rm0"},"m":{"id":"user_source01"},"o":"remove","s":[],"v":[]},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"application_id":"application01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"user_source_ref01"}}]}]}, 'UserSource', {"POST /api/application/{application_id}/user-sources/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"oneOf":[{"type":"object","description":"This serializer allow to set the type of an user_source and the user_source id\nbefore which we want to insert the new user_source.","properties":{"before_id":{"type":"integer","description":"If provided, creates the user_source before the user_source with the given id."},"type":{"allOf":[{}],"description":"The type of the user_source.\n\n* `local_baserow` - local_baserow"},"name":{"type":"string","maxLength":255},"integration_id":{"type":"integer","description":"The related integration id."},"auth_providers":{"type":"array","items":{"oneOf":[],"discriminator":{},"x-ref":"#/components/schemas/App_Auth_ProviderBaseAppAuthProvider"},"description":"Auth providers related to this user source."},"table_id":{"type":"integer","nullable":true,"description":"The id of the Baserow table we want the data for."},"email_field_id":{"type":"integer","nullable":true,"description":"The id of the field to use as email for the user account."},"name_field_id":{"type":"integer","nullable":true,"description":"The id of the field that contains the user name."},"role_field_id":{"type":"integer","nullable":true,"description":"The id of the field that contains the user role."}},"required":["integration_id","name","type"],"x-ref":"#/components/schemas/LocalBaserowUserSourceCreateUserSource"}],"discriminator":{"propertyName":"type","mapping":{"local_baserow":"#/components/schemas/LocalBaserowUserSourceCreateUserSource"}},"x-ref":"#/components/schemas/User_SourceCreateUserSource","index$":1}},"application/x-www-form-urlencoded":{"schema":{"oneOf":[{"type":"object","description":"This serializer allow to set the type of an user_source and the user_source id\nbefore which we want to insert the new user_source.","properties":{"before_id":{"type":"integer","description":"If provided, creates the user_source before the user_source with the given id."},"type":{"allOf":[{}],"description":"The type of the user_source.\n\n* `local_baserow` - local_baserow"},"name":{"type":"string","maxLength":255},"integration_id":{"type":"integer","description":"The related integration id."},"auth_providers":{"type":"array","items":{"oneOf":[],"discriminator":{},"x-ref":"#/components/schemas/App_Auth_ProviderBaseAppAuthProvider"},"description":"Auth providers related to this user source."},"table_id":{"type":"integer","nullable":true,"description":"The id of the Baserow table we want the data for."},"email_field_id":{"type":"integer","nullable":true,"description":"The id of the field to use as email for the user account."},"name_field_id":{"type":"integer","nullable":true,"description":"The id of the field that contains the user name."},"role_field_id":{"type":"integer","nullable":true,"description":"The id of the field that contains the user role."}},"required":["integration_id","name","type"],"x-ref":"#/components/schemas/LocalBaserowUserSourceCreateUserSource"}],"discriminator":{"propertyName":"type","mapping":{"local_baserow":"#/components/schemas/LocalBaserowUserSourceCreateUserSource"}},"x-ref":"#/components/schemas/User_SourceCreateUserSource"}},"multipart/form-data":{"schema":{"oneOf":[{"type":"object","description":"This serializer allow to set the type of an user_source and the user_source id\nbefore which we want to insert the new user_source.","properties":{"before_id":{"type":"integer","description":"If provided, creates the user_source before the user_source with the given id."},"type":{"allOf":[{}],"description":"The type of the user_source.\n\n* `local_baserow` - local_baserow"},"name":{"type":"string","maxLength":255},"integration_id":{"type":"integer","description":"The related integration id."},"auth_providers":{"type":"array","items":{"oneOf":[],"discriminator":{},"x-ref":"#/components/schemas/App_Auth_ProviderBaseAppAuthProvider"},"description":"Auth providers related to this user source."},"table_id":{"type":"integer","nullable":true,"description":"The id of the Baserow table we want the data for."},"email_field_id":{"type":"integer","nullable":true,"description":"The id of the field to use as email for the user account."},"name_field_id":{"type":"integer","nullable":true,"description":"The id of the field that contains the user name."},"role_field_id":{"type":"integer","nullable":true,"description":"The id of the field that contains the user role."}},"required":["integration_id","name","type"],"x-ref":"#/components/schemas/LocalBaserowUserSourceCreateUserSource"}],"discriminator":{"propertyName":"type","mapping":{"local_baserow":"#/components/schemas/LocalBaserowUserSourceCreateUserSource"}},"x-ref":"#/components/schemas/User_SourceCreateUserSource"}}}},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"application_id","schema":{"type":"integer"},"description":"Creates an user_source for the application related to the provided value.","required":true,"index$":1}]},"POST /api/user-source/{user_source_id}/force-token-auth":{"protocol":"http","parameters":[{"in":"path","name":"user_source_id","schema":{"type":"integer"},"description":"The user source to use to authenticate the user.","required":true,"index$":0}]},"POST /api/user-source/{user_source_id}/token-auth":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"username":{"type":"string","writeOnly":true},"password":{"type":"string","writeOnly":true},"access":{"type":"string","readOnly":true},"refresh":{"type":"string","readOnly":true}},"required":["access","password","refresh","username"],"x-ref":"#/components/schemas/TokenObtainPair"}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"username":{"type":"string","writeOnly":true},"password":{"type":"string","writeOnly":true},"access":{"type":"string","readOnly":true},"refresh":{"type":"string","readOnly":true}},"required":["access","password","refresh","username"],"x-ref":"#/components/schemas/TokenObtainPair"}},"multipart/form-data":{"schema":{"type":"object","properties":{"username":{"type":"string","writeOnly":true},"password":{"type":"string","writeOnly":true},"access":{"type":"string","readOnly":true},"refresh":{"type":"string","readOnly":true}},"required":["access","password","refresh","username"],"x-ref":"#/components/schemas/TokenObtainPair"}}},"required":true},"parameters":[{"in":"path","name":"user_source_id","schema":{"type":"integer"},"description":"The id of the user_source to move","required":true,"index$":0}]},"POST /api/user-source-auth-refresh/":{"protocol":"http","parameters":[]},"POST /api/user-source-token-blacklist/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"refresh":{"type":"string","writeOnly":true,"key$":"refresh"}},"required":["refresh"],"x-ref":"#/components/schemas/TokenBlacklist","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"refresh":{"type":"string","writeOnly":true,"key$":"refresh"}},"required":["refresh"],"x-ref":"#/components/schemas/TokenBlacklist"}},"multipart/form-data":{"schema":{"type":"object","properties":{"refresh":{"type":"string","writeOnly":true,"key$":"refresh"}},"required":["refresh"],"x-ref":"#/components/schemas/TokenBlacklist"}}},"required":true},"parameters":[]},"POST /api/user-source/sso/saml/acs/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"SAMLResponse":{"type":"string","description":"The encoded SAML response from the IdP.","key$":"SAMLResponse"},"RelayState":{"type":"string","description":"The frontend URL where redirect the authenticated user.","key$":"RelayState"}},"required":["RelayState","SAMLResponse"],"x-ref":"#/components/schemas/CommonSAMLResponse","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"SAMLResponse":{"type":"string","description":"The encoded SAML response from the IdP.","key$":"SAMLResponse"},"RelayState":{"type":"string","description":"The frontend URL where redirect the authenticated user.","key$":"RelayState"}},"required":["RelayState","SAMLResponse"],"x-ref":"#/components/schemas/CommonSAMLResponse"}},"multipart/form-data":{"schema":{"type":"object","properties":{"SAMLResponse":{"type":"string","description":"The encoded SAML response from the IdP.","key$":"SAMLResponse"},"RelayState":{"type":"string","description":"The frontend URL where redirect the authenticated user.","key$":"RelayState"}},"required":["RelayState","SAMLResponse"],"x-ref":"#/components/schemas/CommonSAMLResponse"}}},"required":true},"parameters":[]},"GET /api/application/{application_id}/user-sources/":{"protocol":"http","parameters":[{"in":"path","name":"application_id","schema":{"type":"integer"},"description":"Returns only the user_sources of the application related to the provided Id.","required":true,"index$":0}]},"GET /api/user-source/{user_source_uid}/sso/oauth2/openid_connect/callback/":{"protocol":"http","parameters":[{"in":"query","name":"code","schema":{"type":"string"},"description":"The code returned by the IDP.","index$":0},{"in":"query","name":"state","schema":{"type":"string"},"description":"The oauth state returned by the IDP.","index$":1},{"in":"path","name":"user_source_uid","schema":{"type":"integer"},"description":"The uid of the user source for which to process the callback.","required":true,"index$":2}]},"GET /api/user-source/{user_source_uid}/sso/oauth2/openid_connect/login/":{"protocol":"http","parameters":[{"in":"query","name":"iss","schema":{"type":"string"},"description":"The issuer of the authentication.","index$":0},{"in":"query","name":"original","schema":{"type":"string"},"description":"The URL that the user wants to access.","index$":1},{"in":"path","name":"user_source_uid","schema":{"type":"integer"},"description":"The uid of the user source to use for authentication.","required":true,"index$":2}]},"GET /api/user-source/{user_source_uid}/sso/saml/login/":{"protocol":"http","parameters":[{"in":"query","name":"email","schema":{"type":"string"},"description":"The email address of the user that want to sign in using SAML.","index$":0},{"in":"query","name":"original","schema":{"type":"string"},"description":"The url to which the user should be redirected after a successful login or sign up.","index$":1},{"in":"path","name":"user_source_uid","schema":{"type":"string"},"required":true,"index$":2}]},"DELETE /api/user-source/{user_source_id}/":{"protocol":"http","parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"user_source_id","schema":{"type":"integer"},"description":"The id of the user_source","required":true,"index$":1}]},"PATCH /api/user-source/{user_source_id}/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"anyOf":[{"type":"object","description":"A serializer to update a user source.","properties":{"name":{"type":"string","maxLength":255},"integration_id":{"type":"integer","description":"The related integration id."},"auth_providers":{"type":"array","items":{"oneOf":[],"discriminator":{},"x-ref":"#/components/schemas/App_Auth_ProviderBaseAppAuthProvider"},"description":"Auth providers related to this user source."},"table_id":{"type":"integer","nullable":true,"description":"The id of the Baserow table we want the data for."},"email_field_id":{"type":"integer","nullable":true,"description":"The id of the field to use as email for the user account."},"name_field_id":{"type":"integer","nullable":true,"description":"The id of the field that contains the user name."},"role_field_id":{"type":"integer","nullable":true,"description":"The id of the field that contains the user role."}},"x-ref":"#/components/schemas/LocalBaserowUserSourceUpdateUserSource"}],"x-ref":"#/components/schemas/PatchedUser_SourceUpdateUserSource","index$":1}},"application/x-www-form-urlencoded":{"schema":{"anyOf":[{"type":"object","description":"A serializer to update a user source.","properties":{"name":{"type":"string","maxLength":255},"integration_id":{"type":"integer","description":"The related integration id."},"auth_providers":{"type":"array","items":{"oneOf":[],"discriminator":{},"x-ref":"#/components/schemas/App_Auth_ProviderBaseAppAuthProvider"},"description":"Auth providers related to this user source."},"table_id":{"type":"integer","nullable":true,"description":"The id of the Baserow table we want the data for."},"email_field_id":{"type":"integer","nullable":true,"description":"The id of the field to use as email for the user account."},"name_field_id":{"type":"integer","nullable":true,"description":"The id of the field that contains the user name."},"role_field_id":{"type":"integer","nullable":true,"description":"The id of the field that contains the user role."}},"x-ref":"#/components/schemas/LocalBaserowUserSourceUpdateUserSource"}],"x-ref":"#/components/schemas/PatchedUser_SourceUpdateUserSource"}},"multipart/form-data":{"schema":{"anyOf":[{"type":"object","description":"A serializer to update a user source.","properties":{"name":{"type":"string","maxLength":255},"integration_id":{"type":"integer","description":"The related integration id."},"auth_providers":{"type":"array","items":{"oneOf":[],"discriminator":{},"x-ref":"#/components/schemas/App_Auth_ProviderBaseAppAuthProvider"},"description":"Auth providers related to this user source."},"table_id":{"type":"integer","nullable":true,"description":"The id of the Baserow table we want the data for."},"email_field_id":{"type":"integer","nullable":true,"description":"The id of the field to use as email for the user account."},"name_field_id":{"type":"integer","nullable":true,"description":"The id of the field that contains the user name."},"role_field_id":{"type":"integer","nullable":true,"description":"The id of the field that contains the user role."}},"x-ref":"#/components/schemas/LocalBaserowUserSourceUpdateUserSource"}],"x-ref":"#/components/schemas/PatchedUser_SourceUpdateUserSource"}}}},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"user_source_id","schema":{"type":"integer"},"description":"The id of the user_source","required":true,"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const user_source_ref01_ent = client.UserSource()
    let user_source_ref01_data = setup.data.new.user_source['user_source_ref01']
    user_source_ref01_data['application_id'] = setup.idmap['application01']

    user_source_ref01_data = (await user_source_ref01_ent.create(user_source_ref01_data)).data()
    assert(null != user_source_ref01_data.id)


    // LIST
    const user_source_ref01_match: any = {}
    user_source_ref01_match['application_id'] = setup.idmap['application01']

    const user_source_ref01_list = (await user_source_ref01_ent.list(user_source_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(user_source_ref01_list, { id: user_source_ref01_data.id })))


    // UPDATE
    const user_source_ref01_data_up0: any = {}
    user_source_ref01_data_up0.id = user_source_ref01_data.id

    const user_source_ref01_markdef_up0 = { name: 'RelayState', value: 'Mark01-user_source_ref01_' + setup.now }
    ;(user_source_ref01_data_up0 as any)[user_source_ref01_markdef_up0.name] = user_source_ref01_markdef_up0.value

    const user_source_ref01_resdata_up0 = (await user_source_ref01_ent.update(user_source_ref01_data_up0)).data()
    assert(user_source_ref01_resdata_up0.id === user_source_ref01_data_up0.id)

    assert((user_source_ref01_resdata_up0 as any)[user_source_ref01_markdef_up0.name] === user_source_ref01_markdef_up0.value)


    // LOAD
    const user_source_ref01_match_dt0: any = {}
    user_source_ref01_match_dt0.id = user_source_ref01_data.id
    const user_source_ref01_data_dt0 = (await user_source_ref01_ent.load(user_source_ref01_match_dt0)).data()
    assert(user_source_ref01_data_dt0.id === user_source_ref01_data.id)


    // REMOVE
    const user_source_ref01_match_rm0: any = { id: user_source_ref01_data.id }
    await user_source_ref01_ent.remove(user_source_ref01_match_rm0)
  

    // LIST
    const user_source_ref01_match_rt0: any = {}
    user_source_ref01_match_rt0['application_id'] = setup.idmap['application01']

    const user_source_ref01_list_rt0 = (await user_source_ref01_ent.list(user_source_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(user_source_ref01_list_rt0, { id: user_source_ref01_data.id })))


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
      '../../../../.sdk/test/entity/user_source/UserSourceTestData.json')

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
    ['user_source01','user_source02','user_source03','application01','application02','application03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_USER_SOURCE_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_USER_SOURCE_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_USER_SOURCE_ENTID']
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
  
