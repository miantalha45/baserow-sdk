

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


describe('ListDataSyncPropertyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.ListDataSyncProperty()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ListDataSyncProperty().list({"data_sync_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_data_sync_property.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"field_type":{"a":true,"h":"Field Type","n":"field_type","r":true,"ro":true,"t":"`$STRING`","key$":"field_type","index$":0},"initially_selected":{"a":true,"h":"Initially Selected","n":"initially_selected","r":true,"t":"`$BOOLEAN`","key$":"initially_selected","index$":1},"key":{"a":true,"h":"Key","n":"key","r":true,"t":"`$STRING`","key$":"key","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":3},"unique_primary":{"a":true,"h":"Unique Primary","n":"unique_primary","r":true,"t":"`$BOOLEAN`","key$":"unique_primary","index$":4}},"name":"list_data_sync_property","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["github_issues_owner","github_issues_repo","gitlab_project_id","gitlab_url","ical_url","jira_authentication","jira_project_key","jira_url","jira_username","postgresql_database","postgresql_host","postgresql_port","postgresql_schema","postgresql_sslmode","postgresql_table","postgresql_username","source_table_id","source_table_view_id","type"],"co":{"id":"POST /api/database/data-sync/database/{database_id}/properties/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"database_id","or":"database_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/database/data-sync/database/{database_id}/properties/","q":{"exist":["database_id"]},"r":{},"rb":{"alternatives":[{"kind":"multipart","media":"multipart/form-data"},{"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"data-sync"},{"lit":"database"},{"var":"database_id"},{"lit":"properties"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/database/data-sync/{data_sync_id}/properties/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"data_sync_id","or":"data_sync_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/database/data-sync/{data_sync_id}/properties/","q":{"exist":["data_sync_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"data-sync"},{"var":"data_sync_id"},{"lit":"properties"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.data_sync"]]},"key$":"list_data_sync_property","name__orig":"list_data_sync_property","Name":"ListDataSyncProperty","name_":"list_data_sync_property","name-":"list-data-sync-property","NAME":"LIST_DATA_SYNC_PROPERTY","index$":108}, {"active":true,"entity":"list_data_sync_property","key$":"BasicListDataSyncPropertyFlow","kind":"basic","name":"BasicListDataSyncPropertyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"list_data_sync_property_ref01"},"m":{"data_sync_id":"data_sync01","database_id":"database01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{"data_sync_id":"data_sync01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_data_sync_property_ref01"}}]}]}, 'ListDataSyncProperty', {"POST /api/database/data-sync/database/{database_id}/properties/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"oneOf":[{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the data sync to get the properties from.\n\n* `ical_calendar` - ical_calendar\n* `local_baserow_table` - local_baserow_table\n* `jira_issues` - jira_issues\n* `github_issues` - github_issues\n* `gitlab_issues` - gitlab_issues\n* `hubspot_contacts` - hubspot_contacts\n* `postgresql` - postgresql"},"ical_url":{"type":"string","format":"uri","maxLength":2000}},"required":["ical_url","type"],"x-ref":"#/components/schemas/ICalCalendarDataSyncListDataSyncPropertiesRequest"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the data sync to get the properties from.\n\n* `ical_calendar` - ical_calendar\n* `local_baserow_table` - local_baserow_table\n* `jira_issues` - jira_issues\n* `github_issues` - github_issues\n* `gitlab_issues` - gitlab_issues\n* `hubspot_contacts` - hubspot_contacts\n* `postgresql` - postgresql"},"source_table_id":{"type":"integer","description":"The ID of the source table that must be synced."},"source_table_view_id":{"type":"integer","nullable":true,"description":"If provided, then only the visible fields and rows matching the filters will be synced."}},"required":["source_table_id","type"],"x-ref":"#/components/schemas/LocalBaserowTableDataSyncListDataSyncPropertiesRequest"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the data sync to get the properties from.\n\n* `ical_calendar` - ical_calendar\n* `local_baserow_table` - local_baserow_table\n* `jira_issues` - jira_issues\n* `github_issues` - github_issues\n* `gitlab_issues` - gitlab_issues\n* `hubspot_contacts` - hubspot_contacts\n* `postgresql` - postgresql"},"jira_url":{"type":"string","format":"uri","description":"The base URL of your Jira instance (e.g., https://your-domain.atlassian.net).","maxLength":2000},"jira_project_key":{"type":"string","description":"The project key of the Jira project (e.g., PROJ).","maxLength":255},"jira_authentication":{"enum":["API_TOKEN","PERSONAL_ACCESS_TOKEN"],"type":"string","description":"* `API_TOKEN` - API_TOKEN\n* `PERSONAL_ACCESS_TOKEN` - PERSONAL_ACCESS_TOKEN","x-ref":"#/components/schemas/JiraAuthenticationEnum"},"jira_username":{"type":"string","description":"The username of the Jira account used to authenticate. Is only used if the `jira_authentication` is equal `API_TOKEN`","maxLength":255}},"required":["jira_url","type"],"x-ref":"#/components/schemas/JiraIssuesDataSyncListDataSyncPropertiesRequest"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the data sync to get the properties from.\n\n* `ical_calendar` - ical_calendar\n* `local_baserow_table` - local_baserow_table\n* `jira_issues` - jira_issues\n* `github_issues` - github_issues\n* `gitlab_issues` - gitlab_issues\n* `hubspot_contacts` - hubspot_contacts\n* `postgresql` - postgresql"},"github_issues_owner":{"type":"string","description":"The owner of the repository on GitHub.","maxLength":255},"github_issues_repo":{"type":"string","description":"The name of the repository on GitHub.","maxLength":255}},"required":["github_issues_owner","github_issues_repo","type"],"x-ref":"#/components/schemas/GitHubIssuesDataSyncListDataSyncPropertiesRequest"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the data sync to get the properties from.\n\n* `ical_calendar` - ical_calendar\n* `local_baserow_table` - local_baserow_table\n* `jira_issues` - jira_issues\n* `github_issues` - github_issues\n* `gitlab_issues` - gitlab_issues\n* `hubspot_contacts` - hubspot_contacts\n* `postgresql` - postgresql"},"gitlab_url":{"type":"string","format":"uri","description":"The base URL to your GitLab instance (e.g. https://gitlab.com)","maxLength":2000},"gitlab_project_id":{"type":"string","description":"The ID of the GitLab project where to sync the issues with.","maxLength":255}},"required":["gitlab_project_id","type"],"x-ref":"#/components/schemas/GitLabIssuesDataSyncListDataSyncPropertiesRequest"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the data sync to get the properties from.\n\n* `ical_calendar` - ical_calendar\n* `local_baserow_table` - local_baserow_table\n* `jira_issues` - jira_issues\n* `github_issues` - github_issues\n* `gitlab_issues` - gitlab_issues\n* `hubspot_contacts` - hubspot_contacts\n* `postgresql` - postgresql"}},"required":["type"],"x-ref":"#/components/schemas/HubSpotContactsDataSyncListDataSyncPropertiesRequest"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the data sync to get the properties from.\n\n* `ical_calendar` - ical_calendar\n* `local_baserow_table` - local_baserow_table\n* `jira_issues` - jira_issues\n* `github_issues` - github_issues\n* `gitlab_issues` - gitlab_issues\n* `hubspot_contacts` - hubspot_contacts\n* `postgresql` - postgresql"},"postgresql_host":{"type":"string","maxLength":255},"postgresql_username":{"type":"string","maxLength":255},"postgresql_port":{"type":"integer","maximum":32767,"minimum":0},"postgresql_database":{"type":"string","maxLength":255},"postgresql_schema":{"type":"string","maxLength":255},"postgresql_table":{"type":"string","maxLength":255},"postgresql_sslmode":{"enum":["disable","allow","prefer","require","verify-ca","verify-full"],"type":"string","description":"* `disable` - disable\n* `allow` - allow\n* `prefer` - prefer\n* `require` - require\n* `verify-ca` - verify-ca\n* `verify-full` - verify-full","x-ref":"#/components/schemas/PostgresqlSslmodeEnum"}},"required":["postgresql_database","postgresql_host","postgresql_table","postgresql_username","type"],"x-ref":"#/components/schemas/PostgreSQLDataSyncListDataSyncPropertiesRequest"}],"discriminator":{"propertyName":"type","mapping":{"ical_calendar":"#/components/schemas/ICalCalendarDataSyncListDataSyncPropertiesRequest","local_baserow_table":"#/components/schemas/LocalBaserowTableDataSyncListDataSyncPropertiesRequest","jira_issues":"#/components/schemas/JiraIssuesDataSyncListDataSyncPropertiesRequest","github_issues":"#/components/schemas/GitHubIssuesDataSyncListDataSyncPropertiesRequest","gitlab_issues":"#/components/schemas/GitLabIssuesDataSyncListDataSyncPropertiesRequest","hubspot_contacts":"#/components/schemas/HubSpotContactsDataSyncListDataSyncPropertiesRequest","postgresql":"#/components/schemas/PostgreSQLDataSyncListDataSyncPropertiesRequest"}},"x-ref":"#/components/schemas/Data_SyncListDataSyncPropertiesRequest","index$":1}},"application/x-www-form-urlencoded":{"schema":{"oneOf":[{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the data sync to get the properties from.\n\n* `ical_calendar` - ical_calendar\n* `local_baserow_table` - local_baserow_table\n* `jira_issues` - jira_issues\n* `github_issues` - github_issues\n* `gitlab_issues` - gitlab_issues\n* `hubspot_contacts` - hubspot_contacts\n* `postgresql` - postgresql"},"ical_url":{"type":"string","format":"uri","maxLength":2000}},"required":["ical_url","type"],"x-ref":"#/components/schemas/ICalCalendarDataSyncListDataSyncPropertiesRequest"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the data sync to get the properties from.\n\n* `ical_calendar` - ical_calendar\n* `local_baserow_table` - local_baserow_table\n* `jira_issues` - jira_issues\n* `github_issues` - github_issues\n* `gitlab_issues` - gitlab_issues\n* `hubspot_contacts` - hubspot_contacts\n* `postgresql` - postgresql"},"source_table_id":{"type":"integer","description":"The ID of the source table that must be synced."},"source_table_view_id":{"type":"integer","nullable":true,"description":"If provided, then only the visible fields and rows matching the filters will be synced."}},"required":["source_table_id","type"],"x-ref":"#/components/schemas/LocalBaserowTableDataSyncListDataSyncPropertiesRequest"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the data sync to get the properties from.\n\n* `ical_calendar` - ical_calendar\n* `local_baserow_table` - local_baserow_table\n* `jira_issues` - jira_issues\n* `github_issues` - github_issues\n* `gitlab_issues` - gitlab_issues\n* `hubspot_contacts` - hubspot_contacts\n* `postgresql` - postgresql"},"jira_url":{"type":"string","format":"uri","description":"The base URL of your Jira instance (e.g., https://your-domain.atlassian.net).","maxLength":2000},"jira_project_key":{"type":"string","description":"The project key of the Jira project (e.g., PROJ).","maxLength":255},"jira_authentication":{"enum":["API_TOKEN","PERSONAL_ACCESS_TOKEN"],"type":"string","description":"* `API_TOKEN` - API_TOKEN\n* `PERSONAL_ACCESS_TOKEN` - PERSONAL_ACCESS_TOKEN","x-ref":"#/components/schemas/JiraAuthenticationEnum"},"jira_username":{"type":"string","description":"The username of the Jira account used to authenticate. Is only used if the `jira_authentication` is equal `API_TOKEN`","maxLength":255}},"required":["jira_url","type"],"x-ref":"#/components/schemas/JiraIssuesDataSyncListDataSyncPropertiesRequest"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the data sync to get the properties from.\n\n* `ical_calendar` - ical_calendar\n* `local_baserow_table` - local_baserow_table\n* `jira_issues` - jira_issues\n* `github_issues` - github_issues\n* `gitlab_issues` - gitlab_issues\n* `hubspot_contacts` - hubspot_contacts\n* `postgresql` - postgresql"},"github_issues_owner":{"type":"string","description":"The owner of the repository on GitHub.","maxLength":255},"github_issues_repo":{"type":"string","description":"The name of the repository on GitHub.","maxLength":255}},"required":["github_issues_owner","github_issues_repo","type"],"x-ref":"#/components/schemas/GitHubIssuesDataSyncListDataSyncPropertiesRequest"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the data sync to get the properties from.\n\n* `ical_calendar` - ical_calendar\n* `local_baserow_table` - local_baserow_table\n* `jira_issues` - jira_issues\n* `github_issues` - github_issues\n* `gitlab_issues` - gitlab_issues\n* `hubspot_contacts` - hubspot_contacts\n* `postgresql` - postgresql"},"gitlab_url":{"type":"string","format":"uri","description":"The base URL to your GitLab instance (e.g. https://gitlab.com)","maxLength":2000},"gitlab_project_id":{"type":"string","description":"The ID of the GitLab project where to sync the issues with.","maxLength":255}},"required":["gitlab_project_id","type"],"x-ref":"#/components/schemas/GitLabIssuesDataSyncListDataSyncPropertiesRequest"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the data sync to get the properties from.\n\n* `ical_calendar` - ical_calendar\n* `local_baserow_table` - local_baserow_table\n* `jira_issues` - jira_issues\n* `github_issues` - github_issues\n* `gitlab_issues` - gitlab_issues\n* `hubspot_contacts` - hubspot_contacts\n* `postgresql` - postgresql"}},"required":["type"],"x-ref":"#/components/schemas/HubSpotContactsDataSyncListDataSyncPropertiesRequest"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the data sync to get the properties from.\n\n* `ical_calendar` - ical_calendar\n* `local_baserow_table` - local_baserow_table\n* `jira_issues` - jira_issues\n* `github_issues` - github_issues\n* `gitlab_issues` - gitlab_issues\n* `hubspot_contacts` - hubspot_contacts\n* `postgresql` - postgresql"},"postgresql_host":{"type":"string","maxLength":255},"postgresql_username":{"type":"string","maxLength":255},"postgresql_port":{"type":"integer","maximum":32767,"minimum":0},"postgresql_database":{"type":"string","maxLength":255},"postgresql_schema":{"type":"string","maxLength":255},"postgresql_table":{"type":"string","maxLength":255},"postgresql_sslmode":{"enum":["disable","allow","prefer","require","verify-ca","verify-full"],"type":"string","description":"* `disable` - disable\n* `allow` - allow\n* `prefer` - prefer\n* `require` - require\n* `verify-ca` - verify-ca\n* `verify-full` - verify-full","x-ref":"#/components/schemas/PostgresqlSslmodeEnum"}},"required":["postgresql_database","postgresql_host","postgresql_table","postgresql_username","type"],"x-ref":"#/components/schemas/PostgreSQLDataSyncListDataSyncPropertiesRequest"}],"discriminator":{"propertyName":"type","mapping":{"ical_calendar":"#/components/schemas/ICalCalendarDataSyncListDataSyncPropertiesRequest","local_baserow_table":"#/components/schemas/LocalBaserowTableDataSyncListDataSyncPropertiesRequest","jira_issues":"#/components/schemas/JiraIssuesDataSyncListDataSyncPropertiesRequest","github_issues":"#/components/schemas/GitHubIssuesDataSyncListDataSyncPropertiesRequest","gitlab_issues":"#/components/schemas/GitLabIssuesDataSyncListDataSyncPropertiesRequest","hubspot_contacts":"#/components/schemas/HubSpotContactsDataSyncListDataSyncPropertiesRequest","postgresql":"#/components/schemas/PostgreSQLDataSyncListDataSyncPropertiesRequest"}},"x-ref":"#/components/schemas/Data_SyncListDataSyncPropertiesRequest"}},"multipart/form-data":{"schema":{"oneOf":[{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the data sync to get the properties from.\n\n* `ical_calendar` - ical_calendar\n* `local_baserow_table` - local_baserow_table\n* `jira_issues` - jira_issues\n* `github_issues` - github_issues\n* `gitlab_issues` - gitlab_issues\n* `hubspot_contacts` - hubspot_contacts\n* `postgresql` - postgresql"},"ical_url":{"type":"string","format":"uri","maxLength":2000}},"required":["ical_url","type"],"x-ref":"#/components/schemas/ICalCalendarDataSyncListDataSyncPropertiesRequest"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the data sync to get the properties from.\n\n* `ical_calendar` - ical_calendar\n* `local_baserow_table` - local_baserow_table\n* `jira_issues` - jira_issues\n* `github_issues` - github_issues\n* `gitlab_issues` - gitlab_issues\n* `hubspot_contacts` - hubspot_contacts\n* `postgresql` - postgresql"},"source_table_id":{"type":"integer","description":"The ID of the source table that must be synced."},"source_table_view_id":{"type":"integer","nullable":true,"description":"If provided, then only the visible fields and rows matching the filters will be synced."}},"required":["source_table_id","type"],"x-ref":"#/components/schemas/LocalBaserowTableDataSyncListDataSyncPropertiesRequest"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the data sync to get the properties from.\n\n* `ical_calendar` - ical_calendar\n* `local_baserow_table` - local_baserow_table\n* `jira_issues` - jira_issues\n* `github_issues` - github_issues\n* `gitlab_issues` - gitlab_issues\n* `hubspot_contacts` - hubspot_contacts\n* `postgresql` - postgresql"},"jira_url":{"type":"string","format":"uri","description":"The base URL of your Jira instance (e.g., https://your-domain.atlassian.net).","maxLength":2000},"jira_project_key":{"type":"string","description":"The project key of the Jira project (e.g., PROJ).","maxLength":255},"jira_authentication":{"enum":["API_TOKEN","PERSONAL_ACCESS_TOKEN"],"type":"string","description":"* `API_TOKEN` - API_TOKEN\n* `PERSONAL_ACCESS_TOKEN` - PERSONAL_ACCESS_TOKEN","x-ref":"#/components/schemas/JiraAuthenticationEnum"},"jira_username":{"type":"string","description":"The username of the Jira account used to authenticate. Is only used if the `jira_authentication` is equal `API_TOKEN`","maxLength":255}},"required":["jira_url","type"],"x-ref":"#/components/schemas/JiraIssuesDataSyncListDataSyncPropertiesRequest"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the data sync to get the properties from.\n\n* `ical_calendar` - ical_calendar\n* `local_baserow_table` - local_baserow_table\n* `jira_issues` - jira_issues\n* `github_issues` - github_issues\n* `gitlab_issues` - gitlab_issues\n* `hubspot_contacts` - hubspot_contacts\n* `postgresql` - postgresql"},"github_issues_owner":{"type":"string","description":"The owner of the repository on GitHub.","maxLength":255},"github_issues_repo":{"type":"string","description":"The name of the repository on GitHub.","maxLength":255}},"required":["github_issues_owner","github_issues_repo","type"],"x-ref":"#/components/schemas/GitHubIssuesDataSyncListDataSyncPropertiesRequest"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the data sync to get the properties from.\n\n* `ical_calendar` - ical_calendar\n* `local_baserow_table` - local_baserow_table\n* `jira_issues` - jira_issues\n* `github_issues` - github_issues\n* `gitlab_issues` - gitlab_issues\n* `hubspot_contacts` - hubspot_contacts\n* `postgresql` - postgresql"},"gitlab_url":{"type":"string","format":"uri","description":"The base URL to your GitLab instance (e.g. https://gitlab.com)","maxLength":2000},"gitlab_project_id":{"type":"string","description":"The ID of the GitLab project where to sync the issues with.","maxLength":255}},"required":["gitlab_project_id","type"],"x-ref":"#/components/schemas/GitLabIssuesDataSyncListDataSyncPropertiesRequest"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the data sync to get the properties from.\n\n* `ical_calendar` - ical_calendar\n* `local_baserow_table` - local_baserow_table\n* `jira_issues` - jira_issues\n* `github_issues` - github_issues\n* `gitlab_issues` - gitlab_issues\n* `hubspot_contacts` - hubspot_contacts\n* `postgresql` - postgresql"}},"required":["type"],"x-ref":"#/components/schemas/HubSpotContactsDataSyncListDataSyncPropertiesRequest"},{"type":"object","properties":{"type":{"allOf":[{}],"description":"The type of the data sync to get the properties from.\n\n* `ical_calendar` - ical_calendar\n* `local_baserow_table` - local_baserow_table\n* `jira_issues` - jira_issues\n* `github_issues` - github_issues\n* `gitlab_issues` - gitlab_issues\n* `hubspot_contacts` - hubspot_contacts\n* `postgresql` - postgresql"},"postgresql_host":{"type":"string","maxLength":255},"postgresql_username":{"type":"string","maxLength":255},"postgresql_port":{"type":"integer","maximum":32767,"minimum":0},"postgresql_database":{"type":"string","maxLength":255},"postgresql_schema":{"type":"string","maxLength":255},"postgresql_table":{"type":"string","maxLength":255},"postgresql_sslmode":{"enum":["disable","allow","prefer","require","verify-ca","verify-full"],"type":"string","description":"* `disable` - disable\n* `allow` - allow\n* `prefer` - prefer\n* `require` - require\n* `verify-ca` - verify-ca\n* `verify-full` - verify-full","x-ref":"#/components/schemas/PostgresqlSslmodeEnum"}},"required":["postgresql_database","postgresql_host","postgresql_table","postgresql_username","type"],"x-ref":"#/components/schemas/PostgreSQLDataSyncListDataSyncPropertiesRequest"}],"discriminator":{"propertyName":"type","mapping":{"ical_calendar":"#/components/schemas/ICalCalendarDataSyncListDataSyncPropertiesRequest","local_baserow_table":"#/components/schemas/LocalBaserowTableDataSyncListDataSyncPropertiesRequest","jira_issues":"#/components/schemas/JiraIssuesDataSyncListDataSyncPropertiesRequest","github_issues":"#/components/schemas/GitHubIssuesDataSyncListDataSyncPropertiesRequest","gitlab_issues":"#/components/schemas/GitLabIssuesDataSyncListDataSyncPropertiesRequest","hubspot_contacts":"#/components/schemas/HubSpotContactsDataSyncListDataSyncPropertiesRequest","postgresql":"#/components/schemas/PostgreSQLDataSyncListDataSyncPropertiesRequest"}},"x-ref":"#/components/schemas/Data_SyncListDataSyncPropertiesRequest"}}}},"parameters":[{"in":"path","name":"database_id","schema":{"type":"integer"},"description":"The database in whose workspace the permission check is performed.","required":true,"index$":0}]},"GET /api/database/data-sync/{data_sync_id}/properties/":{"protocol":"http","parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"data_sync_id","schema":{"type":"integer"},"description":"Lists properties related to the provided ID.","required":true,"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const list_data_sync_property_ref01_ent = client.ListDataSyncProperty()
    let list_data_sync_property_ref01_data = setup.data.new.list_data_sync_property['list_data_sync_property_ref01']
    list_data_sync_property_ref01_data['data_sync_id'] = setup.idmap['data_sync01']
    list_data_sync_property_ref01_data['database_id'] = setup.idmap['database01']

    list_data_sync_property_ref01_data = (await list_data_sync_property_ref01_ent.create(list_data_sync_property_ref01_data)).data()
    assert(null != list_data_sync_property_ref01_data)


    // LIST
    const list_data_sync_property_ref01_match: any = {}
    list_data_sync_property_ref01_match['data_sync_id'] = setup.idmap['data_sync01']

    const list_data_sync_property_ref01_list = (await list_data_sync_property_ref01_ent.list(list_data_sync_property_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/list_data_sync_property/ListDataSyncPropertyTestData.json')

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
    ['list_data_sync_property01','list_data_sync_property02','list_data_sync_property03','data_sync01','data_sync02','data_sync03','database01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_LIST_DATA_SYNC_PROPERTY_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_LIST_DATA_SYNC_PROPERTY_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_LIST_DATA_SYNC_PROPERTY_ENTID']
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
  
