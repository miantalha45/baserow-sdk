

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


describe('SettingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.Setting()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Setting().load({"account_deletion_grace_delay":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'setting.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"account_deletion_grace_delay":{"a":true,"h":"Account Deletion Grace Delay","n":"account_deletion_grace_delay","r":false,"sh":"Number of days after the last login for an account pending deletion to be deleted","t":"`$INTEGER`","key$":"account_deletion_grace_delay","index$":0},"allow_global_workspace_creation":{"a":true,"h":"Allow Global Workspace Creation","n":"allow_global_workspace_creation","r":false,"sh":"Indicates whether all users can create workspaces, or just staff.","t":"`$BOOLEAN`","key$":"allow_global_workspace_creation","index$":1},"allow_new_signups":{"a":true,"h":"Allow New Signups","n":"allow_new_signups","r":false,"sh":"Indicates whether new users can create a new account when signing up.","t":"`$BOOLEAN`","key$":"allow_new_signups","index$":2},"allow_reporting_abuse":{"a":true,"h":"Allow Reporting Abuse","n":"allow_reporting_abuse","r":false,"sh":"Indicates whether anonymous visitors can report publicly shared resources, like views and forms, for abuse.","t":"`$BOOLEAN`","key$":"allow_reporting_abuse","index$":3},"allow_reset_password":{"a":true,"h":"Allow Reset Password","n":"allow_reset_password","r":false,"sh":"Indicates whether users can request a password reset link.","t":"`$BOOLEAN`","key$":"allow_reset_password","index$":4},"allow_signups_via_workspace_invitations":{"a":true,"h":"Allow Signups Via Workspace Invitations","n":"allow_signups_via_workspace_invitations","r":false,"sh":"Indicates whether invited users can create an account when signing up, even if allow_new_signups is disabled.","t":"`$BOOLEAN`","key$":"allow_signups_via_workspace_invitations","index$":5},"co_branding_logo":{"a":true,"h":"Co Branding Logo","n":"co_branding_logo","r":false,"sh":"Co-branding logo that's placed next to the Baserow logo (176x29).","t":"`$ANY`","key$":"co_branding_logo","index$":6},"email_verification":{"a":true,"h":"Email Verification","n":"email_verification","r":false,"sh":"Controls whether user email addresses have to be verified.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"email_verification","index$":7},"inbound_email_enabled":{"a":true,"h":"Inbound Email Enabled","n":"inbound_email_enabled","r":true,"ro":true,"sh":"Whether this instance is configured to receive inbound email for the automation email trigger.","t":"`$BOOLEAN`","key$":"inbound_email_enabled","index$":8},"show_admin_signup_page":{"a":true,"h":"Show Admin Signup Page","n":"show_admin_signup_page","r":false,"sh":"Indicates that there are no admin users in the database yet, so in the frontend the signup form will be shown instead of the login page.","t":"`$BOOLEAN`","key$":"show_admin_signup_page","index$":9},"show_baserow_help_request":{"a":true,"h":"Show Baserow Help Request","n":"show_baserow_help_request","r":false,"sh":"Indicates whether the `We need your help!` message will be shown on the dashboard","t":"`$BOOLEAN`","key$":"show_baserow_help_request","index$":10},"track_workspace_usage":{"a":true,"h":"Track Workspace Usage","n":"track_workspace_usage","r":false,"sh":"Runs a job once per day which calculates per workspace row counts and file storage usage, displayed on the admin workspace page.","t":"`$BOOLEAN`","key$":"track_workspace_usage","index$":11},"verify_import_signature":{"a":true,"h":"Verify Import Signature","n":"verify_import_signature","r":false,"sh":"Indicates whether the signature of imported files should be verified.","t":"`$BOOLEAN`","key$":"verify_import_signature","index$":12}},"name":"setting","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/settings/","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/settings/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"settings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["account_deletion_grace_delay","allow_global_workspace_creation","allow_new_signups","allow_reporting_abuse","allow_reset_password","allow_signups_via_workspace_invitations","co_branding_logo","email_verification","show_admin_signup_page","show_baserow_help_request","track_workspace_usage","verify_import_signature"],"co":{"id":"PATCH /api/settings/update/","source":"openapi3","version":2},"g":{},"k":"http","m":"PATCH","o":"/api/settings/update/","q":{"$action":"update"},"r":{},"rb":{"alternatives":[{"fields":[{"name":"account_deletion_grace_delay"},{"name":"allow_global_workspace_creation"},{"name":"allow_new_signups"},{"name":"allow_reporting_abuse"},{"name":"allow_reset_password"},{"name":"allow_signups_via_workspace_invitations"},{"name":"co_branding_logo"},{"name":"email_verification"},{"name":"inbound_email_enabled"},{"name":"show_admin_signup_page"},{"name":"show_baserow_help_request"},{"name":"track_workspace_usage"},{"name":"verify_import_signature"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"account_deletion_grace_delay"},{"name":"allow_global_workspace_creation"},{"name":"allow_new_signups"},{"name":"allow_reporting_abuse"},{"name":"allow_reset_password"},{"name":"allow_signups_via_workspace_invitations"},{"name":"co_branding_logo"},{"name":"email_verification"},{"name":"inbound_email_enabled"},{"name":"show_admin_signup_page"},{"name":"show_baserow_help_request"},{"name":"track_workspace_usage"},{"name":"verify_import_signature"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"settings"},{"lit":"update"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"setting","name__orig":"setting","Name":"Setting","name_":"setting","name-":"setting","NAME":"SETTING","index$":138}, {"active":true,"entity":"setting","key$":"BasicSettingFlow","kind":"basic","name":"BasicSettingFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"setting_ref01","srcdatavar":"setting_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-setting_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"setting_ref01","srcdatavar":"setting_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-setting_ref01"}}]}]}, 'Setting', {"GET /api/settings/":{"protocol":"http","parameters":[]},"PATCH /api/settings/update/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"allow_new_signups":{"type":"boolean","description":"Indicates whether new users can create a new account when signing up."},"allow_signups_via_workspace_invitations":{"type":"boolean","description":"Indicates whether invited users can create an account when signing up, even if allow_new_signups is disabled."},"allow_reset_password":{"type":"boolean","description":"Indicates whether users can request a password reset link."},"allow_global_workspace_creation":{"type":"boolean","description":"Indicates whether all users can create workspaces, or just staff."},"account_deletion_grace_delay":{"type":"integer","maximum":32767,"minimum":0,"description":"Number of days after the last login for an account pending deletion to be deleted"},"show_admin_signup_page":{"type":"boolean","description":"Indicates that there are no admin users in the database yet, so in the frontend the signup form will be shown instead of the login page."},"track_workspace_usage":{"type":"boolean","description":"Runs a job once per day which calculates per workspace row counts and file storage usage, displayed on the admin workspace page."},"show_baserow_help_request":{"type":"boolean","description":"Indicates whether the `We need your help!` message will be shown on the dashboard"},"co_branding_logo":{"allOf":[{"type":"object","properties":{"size":{},"mime_type":{},"is_image":{},"image_width":{},"image_height":{},"uploaded_at":{},"url":{},"thumbnails":{},"name":{},"original_name":{}},"required":["name","original_name","size","thumbnails","uploaded_at","url"],"x-ref":"#/components/schemas/UserFile"}],"nullable":true,"description":"Co-branding logo that's placed next to the Baserow logo (176x29)."},"email_verification":{"nullable":true,"description":"Controls whether user email addresses have to be verified.\n\n* `no_verification` - no_verification\n* `recommended` - recommended\n* `enforced` - enforced","oneOf":[{"enum":["no_verification","recommended","enforced"],"type":"string","description":"* `no_verification` - no_verification\n* `recommended` - recommended\n* `enforced` - enforced","x-ref":"#/components/schemas/EmailVerificationEnum"},{"enum":[null],"x-ref":"#/components/schemas/NullEnum"}]},"verify_import_signature":{"type":"boolean","description":"Indicates whether the signature of imported files should be verified."},"allow_reporting_abuse":{"type":"boolean","description":"Indicates whether anonymous visitors can report publicly shared resources, like views and forms, for abuse."},"inbound_email_enabled":{"type":"boolean","readOnly":true,"description":"Whether this instance is configured to receive inbound email for the automation email trigger. Derived from the instance's environment and read-only."}},"x-ref":"#/components/schemas/PatchedSettings"}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"allow_new_signups":{"type":"boolean","description":"Indicates whether new users can create a new account when signing up."},"allow_signups_via_workspace_invitations":{"type":"boolean","description":"Indicates whether invited users can create an account when signing up, even if allow_new_signups is disabled."},"allow_reset_password":{"type":"boolean","description":"Indicates whether users can request a password reset link."},"allow_global_workspace_creation":{"type":"boolean","description":"Indicates whether all users can create workspaces, or just staff."},"account_deletion_grace_delay":{"type":"integer","maximum":32767,"minimum":0,"description":"Number of days after the last login for an account pending deletion to be deleted"},"show_admin_signup_page":{"type":"boolean","description":"Indicates that there are no admin users in the database yet, so in the frontend the signup form will be shown instead of the login page."},"track_workspace_usage":{"type":"boolean","description":"Runs a job once per day which calculates per workspace row counts and file storage usage, displayed on the admin workspace page."},"show_baserow_help_request":{"type":"boolean","description":"Indicates whether the `We need your help!` message will be shown on the dashboard"},"co_branding_logo":{"allOf":[{"type":"object","properties":{"size":{},"mime_type":{},"is_image":{},"image_width":{},"image_height":{},"uploaded_at":{},"url":{},"thumbnails":{},"name":{},"original_name":{}},"required":["name","original_name","size","thumbnails","uploaded_at","url"],"x-ref":"#/components/schemas/UserFile"}],"nullable":true,"description":"Co-branding logo that's placed next to the Baserow logo (176x29)."},"email_verification":{"nullable":true,"description":"Controls whether user email addresses have to be verified.\n\n* `no_verification` - no_verification\n* `recommended` - recommended\n* `enforced` - enforced","oneOf":[{"enum":["no_verification","recommended","enforced"],"type":"string","description":"* `no_verification` - no_verification\n* `recommended` - recommended\n* `enforced` - enforced","x-ref":"#/components/schemas/EmailVerificationEnum"},{"enum":[null],"x-ref":"#/components/schemas/NullEnum"}]},"verify_import_signature":{"type":"boolean","description":"Indicates whether the signature of imported files should be verified."},"allow_reporting_abuse":{"type":"boolean","description":"Indicates whether anonymous visitors can report publicly shared resources, like views and forms, for abuse."},"inbound_email_enabled":{"type":"boolean","readOnly":true,"description":"Whether this instance is configured to receive inbound email for the automation email trigger. Derived from the instance's environment and read-only."}},"x-ref":"#/components/schemas/PatchedSettings"}},"multipart/form-data":{"schema":{"type":"object","properties":{"allow_new_signups":{"type":"boolean","description":"Indicates whether new users can create a new account when signing up."},"allow_signups_via_workspace_invitations":{"type":"boolean","description":"Indicates whether invited users can create an account when signing up, even if allow_new_signups is disabled."},"allow_reset_password":{"type":"boolean","description":"Indicates whether users can request a password reset link."},"allow_global_workspace_creation":{"type":"boolean","description":"Indicates whether all users can create workspaces, or just staff."},"account_deletion_grace_delay":{"type":"integer","maximum":32767,"minimum":0,"description":"Number of days after the last login for an account pending deletion to be deleted"},"show_admin_signup_page":{"type":"boolean","description":"Indicates that there are no admin users in the database yet, so in the frontend the signup form will be shown instead of the login page."},"track_workspace_usage":{"type":"boolean","description":"Runs a job once per day which calculates per workspace row counts and file storage usage, displayed on the admin workspace page."},"show_baserow_help_request":{"type":"boolean","description":"Indicates whether the `We need your help!` message will be shown on the dashboard"},"co_branding_logo":{"allOf":[{"type":"object","properties":{"size":{},"mime_type":{},"is_image":{},"image_width":{},"image_height":{},"uploaded_at":{},"url":{},"thumbnails":{},"name":{},"original_name":{}},"required":["name","original_name","size","thumbnails","uploaded_at","url"],"x-ref":"#/components/schemas/UserFile"}],"nullable":true,"description":"Co-branding logo that's placed next to the Baserow logo (176x29)."},"email_verification":{"nullable":true,"description":"Controls whether user email addresses have to be verified.\n\n* `no_verification` - no_verification\n* `recommended` - recommended\n* `enforced` - enforced","oneOf":[{"enum":["no_verification","recommended","enforced"],"type":"string","description":"* `no_verification` - no_verification\n* `recommended` - recommended\n* `enforced` - enforced","x-ref":"#/components/schemas/EmailVerificationEnum"},{"enum":[null],"x-ref":"#/components/schemas/NullEnum"}]},"verify_import_signature":{"type":"boolean","description":"Indicates whether the signature of imported files should be verified."},"allow_reporting_abuse":{"type":"boolean","description":"Indicates whether anonymous visitors can report publicly shared resources, like views and forms, for abuse."},"inbound_email_enabled":{"type":"boolean","readOnly":true,"description":"Whether this instance is configured to receive inbound email for the automation email trigger. Derived from the instance's environment and read-only."}},"x-ref":"#/components/schemas/PatchedSettings"}}}},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let setting_ref01_data = Object.values(setup.data.existing.setting)[0] as any

    // UPDATE
    const setting_ref01_ent = client.Setting()
    const setting_ref01_data_up0: any = {}

    const setting_ref01_resdata_up0 = (await setting_ref01_ent.update(setting_ref01_data_up0)).data()
    assert(null != setting_ref01_resdata_up0)


    // LOAD
    const setting_ref01_match_dt0: any = {}
    const setting_ref01_data_dt0 = (await setting_ref01_ent.load(setting_ref01_match_dt0)).data()
    assert(null != setting_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/setting/SettingTestData.json')

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
    ['setting01','setting02','setting03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_SETTING_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_SETTING_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_SETTING_ENTID']
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
  
