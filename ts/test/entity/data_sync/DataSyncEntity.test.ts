

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


describe('DataSyncEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.DataSync()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.DataSync().load({"id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'data_sync.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"auto_add_new_properties":{"a":true,"h":"Auto Add New Properties","n":"auto_add_new_properties","r":false,"sh":"If enabled and new properties are detected on sync, then they're automatically added.","t":"`$BOOLEAN`","key$":"auto_add_new_properties","index$":0},"database_id":{"a":true,"h":"Database Id","n":"database_id","r":true,"ro":true,"t":"`$STRING`","key$":"database_id","index$":1},"delete_unmatched_rows":{"a":true,"h":"Delete Unmatched Rows","n":"delete_unmatched_rows","r":false,"sh":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync.","t":"`$BOOLEAN`","key$":"delete_unmatched_rows","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":3},"last_error":{"a":true,"h":"Last Error","n":"last_error","r":false,"t":"`$STRING`","key$":"last_error","index$":4},"last_sync":{"a":true,"fo":"date-time","h":"Last Sync","n":"last_sync","r":false,"sh":"Timestamp when the table was last synced.","t":"`$STRING`","key$":"last_sync","index$":5},"synced_properties":{"a":true,"h":"Synced Properties","n":"synced_properties","r":true,"t":"`$ARRAY`","key$":"synced_properties","index$":6},"table_id":{"a":true,"h":"Table Id","n":"table_id","r":true,"ro":true,"sh":"The table where the data is synced into.","t":"`$INTEGER`","key$":"table_id","index$":7},"two_way_sync":{"a":true,"h":"Two Way Sync","n":"two_way_sync","r":false,"sh":"If enabled, then it's possible to make changes to the synced table.","t":"`$BOOLEAN`","key$":"two_way_sync","index$":8},"type":{"a":true,"h":"Type","n":"type","r":true,"ro":true,"t":"`$STRING`","key$":"type","index$":9}},"id":{"field":"id","name":"id"},"name":"data_sync","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/database/data-sync/{data_sync_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"data_sync_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/api/database/data-sync/{data_sync_id}/","q":{"exist":["id"]},"r":{"param":{"data_sync_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"data-sync"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["auto_add_new_properties","delete_unmatched_rows","github_issues_owner","github_issues_repo","gitlab_project_id","gitlab_url","ical_url","jira_authentication","jira_project_key","jira_url","jira_username","postgresql_database","postgresql_host","postgresql_port","postgresql_schema","postgresql_sslmode","postgresql_table","postgresql_username","source_table_id","source_table_view_id","synced_properties","two_way_sync"],"co":{"id":"PATCH /api/database/data-sync/{data_sync_id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"data_sync_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"PATCH","o":"/api/database/data-sync/{data_sync_id}/","q":{"exist":["id"]},"r":{"param":{"data_sync_id":"id"}},"rb":{"alternatives":[{"kind":"multipart","media":"multipart/form-data"},{"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"data-sync"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"data_sync","name__orig":"data_sync","Name":"DataSync","name_":"data_sync","name-":"data-sync","NAME":"DATA_SYNC","index$":52}, {"active":true,"entity":"data_sync","key$":"BasicDataSyncFlow","kind":"basic","name":"BasicDataSyncFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"data_sync_ref01","srcdatavar":"data_sync_ref01_data","suffix":"_up0","textfield":"last_error"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-data_sync_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"data_sync_ref01","srcdatavar":"data_sync_ref01_data","suffix":"_dt0"},"m":{"id":"data_sync01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-data_sync_ref01"}}]}]}, 'DataSync', {"GET /api/database/data-sync/{data_sync_id}/":{"protocol":"http","parameters":[{"in":"path","name":"data_sync_id","schema":{"type":"integer"},"description":"The data sync that must be fetched.","required":true,"index$":0}]},"PATCH /api/database/data-sync/{data_sync_id}/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"oneOf":[{"type":"object","properties":{"synced_properties":{"type":"array","items":{"type":"string"}},"auto_add_new_properties":{"type":"boolean","description":"If enabled and new properties are detected on sync, then they're automatically added. Note that this means all properties will always be added."},"delete_unmatched_rows":{"type":"boolean","description":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears."},"two_way_sync":{"type":"boolean","description":"If enabled, then it's possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy."},"ical_url":{"type":"string","format":"uri","maxLength":2000}},"required":["ical_url"],"x-ref":"#/components/schemas/ICalCalendarDataSyncUpdateDataSync"},{"type":"object","properties":{"synced_properties":{"type":"array","items":{"type":"string"}},"auto_add_new_properties":{"type":"boolean","description":"If enabled and new properties are detected on sync, then they're automatically added. Note that this means all properties will always be added."},"delete_unmatched_rows":{"type":"boolean","description":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears."},"two_way_sync":{"type":"boolean","description":"If enabled, then it's possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy."},"source_table_id":{"type":"integer","description":"The ID of the source table that must be synced."},"source_table_view_id":{"type":"integer","nullable":true,"description":"If provided, then only the visible fields and rows matching the filters will be synced."}},"required":["source_table_id"],"x-ref":"#/components/schemas/LocalBaserowTableDataSyncUpdateDataSync"},{"type":"object","properties":{"synced_properties":{"type":"array","items":{"type":"string"}},"auto_add_new_properties":{"type":"boolean","description":"If enabled and new properties are detected on sync, then they're automatically added. Note that this means all properties will always be added."},"delete_unmatched_rows":{"type":"boolean","description":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears."},"two_way_sync":{"type":"boolean","description":"If enabled, then it's possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy."},"jira_url":{"type":"string","format":"uri","description":"The base URL of your Jira instance (e.g., https://your-domain.atlassian.net).","maxLength":2000},"jira_project_key":{"type":"string","description":"The project key of the Jira project (e.g., PROJ).","maxLength":255},"jira_authentication":{"enum":["API_TOKEN","PERSONAL_ACCESS_TOKEN"],"type":"string","description":"* `API_TOKEN` - API_TOKEN\n* `PERSONAL_ACCESS_TOKEN` - PERSONAL_ACCESS_TOKEN","x-ref":"#/components/schemas/JiraAuthenticationEnum"},"jira_username":{"type":"string","description":"The username of the Jira account used to authenticate. Is only used if the `jira_authentication` is equal `API_TOKEN`","maxLength":255}},"required":["jira_url"],"x-ref":"#/components/schemas/JiraIssuesDataSyncUpdateDataSync"},{"type":"object","properties":{"synced_properties":{"type":"array","items":{"type":"string"}},"auto_add_new_properties":{"type":"boolean","description":"If enabled and new properties are detected on sync, then they're automatically added. Note that this means all properties will always be added."},"delete_unmatched_rows":{"type":"boolean","description":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears."},"two_way_sync":{"type":"boolean","description":"If enabled, then it's possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy."},"github_issues_owner":{"type":"string","description":"The owner of the repository on GitHub.","maxLength":255},"github_issues_repo":{"type":"string","description":"The name of the repository on GitHub.","maxLength":255}},"required":["github_issues_owner","github_issues_repo"],"x-ref":"#/components/schemas/GitHubIssuesDataSyncUpdateDataSync"},{"type":"object","properties":{"synced_properties":{"type":"array","items":{"type":"string"}},"auto_add_new_properties":{"type":"boolean","description":"If enabled and new properties are detected on sync, then they're automatically added. Note that this means all properties will always be added."},"delete_unmatched_rows":{"type":"boolean","description":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears."},"two_way_sync":{"type":"boolean","description":"If enabled, then it's possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy."},"gitlab_url":{"type":"string","format":"uri","description":"The base URL to your GitLab instance (e.g. https://gitlab.com)","maxLength":2000},"gitlab_project_id":{"type":"string","description":"The ID of the GitLab project where to sync the issues with.","maxLength":255}},"required":["gitlab_project_id"],"x-ref":"#/components/schemas/GitLabIssuesDataSyncUpdateDataSync"},{"type":"object","properties":{"synced_properties":{"type":"array","items":{"type":"string"}},"auto_add_new_properties":{"type":"boolean","description":"If enabled and new properties are detected on sync, then they're automatically added. Note that this means all properties will always be added."},"delete_unmatched_rows":{"type":"boolean","description":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears."},"two_way_sync":{"type":"boolean","description":"If enabled, then it's possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy."}},"x-ref":"#/components/schemas/HubSpotContactsDataSyncUpdateDataSync"},{"type":"object","properties":{"synced_properties":{"type":"array","items":{"type":"string"}},"auto_add_new_properties":{"type":"boolean","description":"If enabled and new properties are detected on sync, then they're automatically added. Note that this means all properties will always be added."},"delete_unmatched_rows":{"type":"boolean","description":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears."},"two_way_sync":{"type":"boolean","description":"If enabled, then it's possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy."},"postgresql_host":{"type":"string","maxLength":255},"postgresql_username":{"type":"string","maxLength":255},"postgresql_port":{"type":"integer","maximum":32767,"minimum":0},"postgresql_database":{"type":"string","maxLength":255},"postgresql_schema":{"type":"string","maxLength":255},"postgresql_table":{"type":"string","maxLength":255},"postgresql_sslmode":{"enum":["disable","allow","prefer","require","verify-ca","verify-full"],"type":"string","description":"* `disable` - disable\n* `allow` - allow\n* `prefer` - prefer\n* `require` - require\n* `verify-ca` - verify-ca\n* `verify-full` - verify-full","x-ref":"#/components/schemas/PostgresqlSslmodeEnum"}},"required":["postgresql_database","postgresql_host","postgresql_table","postgresql_username"],"x-ref":"#/components/schemas/PostgreSQLDataSyncUpdateDataSync"}],"discriminator":{"propertyName":"type","mapping":{"ical_calendar":"#/components/schemas/ICalCalendarDataSyncUpdateDataSync","local_baserow_table":"#/components/schemas/LocalBaserowTableDataSyncUpdateDataSync","jira_issues":"#/components/schemas/JiraIssuesDataSyncUpdateDataSync","github_issues":"#/components/schemas/GitHubIssuesDataSyncUpdateDataSync","gitlab_issues":"#/components/schemas/GitLabIssuesDataSyncUpdateDataSync","hubspot_contacts":"#/components/schemas/HubSpotContactsDataSyncUpdateDataSync","postgresql":"#/components/schemas/PostgreSQLDataSyncUpdateDataSync"}},"x-ref":"#/components/schemas/PatchedData_SyncUpdateDataSync","index$":1}},"application/x-www-form-urlencoded":{"schema":{"oneOf":[{"type":"object","properties":{"synced_properties":{"type":"array","items":{"type":"string"}},"auto_add_new_properties":{"type":"boolean","description":"If enabled and new properties are detected on sync, then they're automatically added. Note that this means all properties will always be added."},"delete_unmatched_rows":{"type":"boolean","description":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears."},"two_way_sync":{"type":"boolean","description":"If enabled, then it's possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy."},"ical_url":{"type":"string","format":"uri","maxLength":2000}},"required":["ical_url"],"x-ref":"#/components/schemas/ICalCalendarDataSyncUpdateDataSync"},{"type":"object","properties":{"synced_properties":{"type":"array","items":{"type":"string"}},"auto_add_new_properties":{"type":"boolean","description":"If enabled and new properties are detected on sync, then they're automatically added. Note that this means all properties will always be added."},"delete_unmatched_rows":{"type":"boolean","description":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears."},"two_way_sync":{"type":"boolean","description":"If enabled, then it's possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy."},"source_table_id":{"type":"integer","description":"The ID of the source table that must be synced."},"source_table_view_id":{"type":"integer","nullable":true,"description":"If provided, then only the visible fields and rows matching the filters will be synced."}},"required":["source_table_id"],"x-ref":"#/components/schemas/LocalBaserowTableDataSyncUpdateDataSync"},{"type":"object","properties":{"synced_properties":{"type":"array","items":{"type":"string"}},"auto_add_new_properties":{"type":"boolean","description":"If enabled and new properties are detected on sync, then they're automatically added. Note that this means all properties will always be added."},"delete_unmatched_rows":{"type":"boolean","description":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears."},"two_way_sync":{"type":"boolean","description":"If enabled, then it's possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy."},"jira_url":{"type":"string","format":"uri","description":"The base URL of your Jira instance (e.g., https://your-domain.atlassian.net).","maxLength":2000},"jira_project_key":{"type":"string","description":"The project key of the Jira project (e.g., PROJ).","maxLength":255},"jira_authentication":{"enum":["API_TOKEN","PERSONAL_ACCESS_TOKEN"],"type":"string","description":"* `API_TOKEN` - API_TOKEN\n* `PERSONAL_ACCESS_TOKEN` - PERSONAL_ACCESS_TOKEN","x-ref":"#/components/schemas/JiraAuthenticationEnum"},"jira_username":{"type":"string","description":"The username of the Jira account used to authenticate. Is only used if the `jira_authentication` is equal `API_TOKEN`","maxLength":255}},"required":["jira_url"],"x-ref":"#/components/schemas/JiraIssuesDataSyncUpdateDataSync"},{"type":"object","properties":{"synced_properties":{"type":"array","items":{"type":"string"}},"auto_add_new_properties":{"type":"boolean","description":"If enabled and new properties are detected on sync, then they're automatically added. Note that this means all properties will always be added."},"delete_unmatched_rows":{"type":"boolean","description":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears."},"two_way_sync":{"type":"boolean","description":"If enabled, then it's possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy."},"github_issues_owner":{"type":"string","description":"The owner of the repository on GitHub.","maxLength":255},"github_issues_repo":{"type":"string","description":"The name of the repository on GitHub.","maxLength":255}},"required":["github_issues_owner","github_issues_repo"],"x-ref":"#/components/schemas/GitHubIssuesDataSyncUpdateDataSync"},{"type":"object","properties":{"synced_properties":{"type":"array","items":{"type":"string"}},"auto_add_new_properties":{"type":"boolean","description":"If enabled and new properties are detected on sync, then they're automatically added. Note that this means all properties will always be added."},"delete_unmatched_rows":{"type":"boolean","description":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears."},"two_way_sync":{"type":"boolean","description":"If enabled, then it's possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy."},"gitlab_url":{"type":"string","format":"uri","description":"The base URL to your GitLab instance (e.g. https://gitlab.com)","maxLength":2000},"gitlab_project_id":{"type":"string","description":"The ID of the GitLab project where to sync the issues with.","maxLength":255}},"required":["gitlab_project_id"],"x-ref":"#/components/schemas/GitLabIssuesDataSyncUpdateDataSync"},{"type":"object","properties":{"synced_properties":{"type":"array","items":{"type":"string"}},"auto_add_new_properties":{"type":"boolean","description":"If enabled and new properties are detected on sync, then they're automatically added. Note that this means all properties will always be added."},"delete_unmatched_rows":{"type":"boolean","description":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears."},"two_way_sync":{"type":"boolean","description":"If enabled, then it's possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy."}},"x-ref":"#/components/schemas/HubSpotContactsDataSyncUpdateDataSync"},{"type":"object","properties":{"synced_properties":{"type":"array","items":{"type":"string"}},"auto_add_new_properties":{"type":"boolean","description":"If enabled and new properties are detected on sync, then they're automatically added. Note that this means all properties will always be added."},"delete_unmatched_rows":{"type":"boolean","description":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears."},"two_way_sync":{"type":"boolean","description":"If enabled, then it's possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy."},"postgresql_host":{"type":"string","maxLength":255},"postgresql_username":{"type":"string","maxLength":255},"postgresql_port":{"type":"integer","maximum":32767,"minimum":0},"postgresql_database":{"type":"string","maxLength":255},"postgresql_schema":{"type":"string","maxLength":255},"postgresql_table":{"type":"string","maxLength":255},"postgresql_sslmode":{"enum":["disable","allow","prefer","require","verify-ca","verify-full"],"type":"string","description":"* `disable` - disable\n* `allow` - allow\n* `prefer` - prefer\n* `require` - require\n* `verify-ca` - verify-ca\n* `verify-full` - verify-full","x-ref":"#/components/schemas/PostgresqlSslmodeEnum"}},"required":["postgresql_database","postgresql_host","postgresql_table","postgresql_username"],"x-ref":"#/components/schemas/PostgreSQLDataSyncUpdateDataSync"}],"discriminator":{"propertyName":"type","mapping":{"ical_calendar":"#/components/schemas/ICalCalendarDataSyncUpdateDataSync","local_baserow_table":"#/components/schemas/LocalBaserowTableDataSyncUpdateDataSync","jira_issues":"#/components/schemas/JiraIssuesDataSyncUpdateDataSync","github_issues":"#/components/schemas/GitHubIssuesDataSyncUpdateDataSync","gitlab_issues":"#/components/schemas/GitLabIssuesDataSyncUpdateDataSync","hubspot_contacts":"#/components/schemas/HubSpotContactsDataSyncUpdateDataSync","postgresql":"#/components/schemas/PostgreSQLDataSyncUpdateDataSync"}},"x-ref":"#/components/schemas/PatchedData_SyncUpdateDataSync"}},"multipart/form-data":{"schema":{"oneOf":[{"type":"object","properties":{"synced_properties":{"type":"array","items":{"type":"string"}},"auto_add_new_properties":{"type":"boolean","description":"If enabled and new properties are detected on sync, then they're automatically added. Note that this means all properties will always be added."},"delete_unmatched_rows":{"type":"boolean","description":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears."},"two_way_sync":{"type":"boolean","description":"If enabled, then it's possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy."},"ical_url":{"type":"string","format":"uri","maxLength":2000}},"required":["ical_url"],"x-ref":"#/components/schemas/ICalCalendarDataSyncUpdateDataSync"},{"type":"object","properties":{"synced_properties":{"type":"array","items":{"type":"string"}},"auto_add_new_properties":{"type":"boolean","description":"If enabled and new properties are detected on sync, then they're automatically added. Note that this means all properties will always be added."},"delete_unmatched_rows":{"type":"boolean","description":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears."},"two_way_sync":{"type":"boolean","description":"If enabled, then it's possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy."},"source_table_id":{"type":"integer","description":"The ID of the source table that must be synced."},"source_table_view_id":{"type":"integer","nullable":true,"description":"If provided, then only the visible fields and rows matching the filters will be synced."}},"required":["source_table_id"],"x-ref":"#/components/schemas/LocalBaserowTableDataSyncUpdateDataSync"},{"type":"object","properties":{"synced_properties":{"type":"array","items":{"type":"string"}},"auto_add_new_properties":{"type":"boolean","description":"If enabled and new properties are detected on sync, then they're automatically added. Note that this means all properties will always be added."},"delete_unmatched_rows":{"type":"boolean","description":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears."},"two_way_sync":{"type":"boolean","description":"If enabled, then it's possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy."},"jira_url":{"type":"string","format":"uri","description":"The base URL of your Jira instance (e.g., https://your-domain.atlassian.net).","maxLength":2000},"jira_project_key":{"type":"string","description":"The project key of the Jira project (e.g., PROJ).","maxLength":255},"jira_authentication":{"enum":["API_TOKEN","PERSONAL_ACCESS_TOKEN"],"type":"string","description":"* `API_TOKEN` - API_TOKEN\n* `PERSONAL_ACCESS_TOKEN` - PERSONAL_ACCESS_TOKEN","x-ref":"#/components/schemas/JiraAuthenticationEnum"},"jira_username":{"type":"string","description":"The username of the Jira account used to authenticate. Is only used if the `jira_authentication` is equal `API_TOKEN`","maxLength":255}},"required":["jira_url"],"x-ref":"#/components/schemas/JiraIssuesDataSyncUpdateDataSync"},{"type":"object","properties":{"synced_properties":{"type":"array","items":{"type":"string"}},"auto_add_new_properties":{"type":"boolean","description":"If enabled and new properties are detected on sync, then they're automatically added. Note that this means all properties will always be added."},"delete_unmatched_rows":{"type":"boolean","description":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears."},"two_way_sync":{"type":"boolean","description":"If enabled, then it's possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy."},"github_issues_owner":{"type":"string","description":"The owner of the repository on GitHub.","maxLength":255},"github_issues_repo":{"type":"string","description":"The name of the repository on GitHub.","maxLength":255}},"required":["github_issues_owner","github_issues_repo"],"x-ref":"#/components/schemas/GitHubIssuesDataSyncUpdateDataSync"},{"type":"object","properties":{"synced_properties":{"type":"array","items":{"type":"string"}},"auto_add_new_properties":{"type":"boolean","description":"If enabled and new properties are detected on sync, then they're automatically added. Note that this means all properties will always be added."},"delete_unmatched_rows":{"type":"boolean","description":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears."},"two_way_sync":{"type":"boolean","description":"If enabled, then it's possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy."},"gitlab_url":{"type":"string","format":"uri","description":"The base URL to your GitLab instance (e.g. https://gitlab.com)","maxLength":2000},"gitlab_project_id":{"type":"string","description":"The ID of the GitLab project where to sync the issues with.","maxLength":255}},"required":["gitlab_project_id"],"x-ref":"#/components/schemas/GitLabIssuesDataSyncUpdateDataSync"},{"type":"object","properties":{"synced_properties":{"type":"array","items":{"type":"string"}},"auto_add_new_properties":{"type":"boolean","description":"If enabled and new properties are detected on sync, then they're automatically added. Note that this means all properties will always be added."},"delete_unmatched_rows":{"type":"boolean","description":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears."},"two_way_sync":{"type":"boolean","description":"If enabled, then it's possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy."}},"x-ref":"#/components/schemas/HubSpotContactsDataSyncUpdateDataSync"},{"type":"object","properties":{"synced_properties":{"type":"array","items":{"type":"string"}},"auto_add_new_properties":{"type":"boolean","description":"If enabled and new properties are detected on sync, then they're automatically added. Note that this means all properties will always be added."},"delete_unmatched_rows":{"type":"boolean","description":"If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears."},"two_way_sync":{"type":"boolean","description":"If enabled, then it's possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy."},"postgresql_host":{"type":"string","maxLength":255},"postgresql_username":{"type":"string","maxLength":255},"postgresql_port":{"type":"integer","maximum":32767,"minimum":0},"postgresql_database":{"type":"string","maxLength":255},"postgresql_schema":{"type":"string","maxLength":255},"postgresql_table":{"type":"string","maxLength":255},"postgresql_sslmode":{"enum":["disable","allow","prefer","require","verify-ca","verify-full"],"type":"string","description":"* `disable` - disable\n* `allow` - allow\n* `prefer` - prefer\n* `require` - require\n* `verify-ca` - verify-ca\n* `verify-full` - verify-full","x-ref":"#/components/schemas/PostgresqlSslmodeEnum"}},"required":["postgresql_database","postgresql_host","postgresql_table","postgresql_username"],"x-ref":"#/components/schemas/PostgreSQLDataSyncUpdateDataSync"}],"discriminator":{"propertyName":"type","mapping":{"ical_calendar":"#/components/schemas/ICalCalendarDataSyncUpdateDataSync","local_baserow_table":"#/components/schemas/LocalBaserowTableDataSyncUpdateDataSync","jira_issues":"#/components/schemas/JiraIssuesDataSyncUpdateDataSync","github_issues":"#/components/schemas/GitHubIssuesDataSyncUpdateDataSync","gitlab_issues":"#/components/schemas/GitLabIssuesDataSyncUpdateDataSync","hubspot_contacts":"#/components/schemas/HubSpotContactsDataSyncUpdateDataSync","postgresql":"#/components/schemas/PostgreSQLDataSyncUpdateDataSync"}},"x-ref":"#/components/schemas/PatchedData_SyncUpdateDataSync"}}}},"parameters":[{"in":"path","name":"data_sync_id","schema":{"type":"integer"},"description":"Updates the data sync related to the provided value.","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let data_sync_ref01_data = Object.values(setup.data.existing.data_sync)[0] as any

    // UPDATE
    const data_sync_ref01_ent = client.DataSync()
    const data_sync_ref01_data_up0: any = {}
    data_sync_ref01_data_up0.id = data_sync_ref01_data.id

    const data_sync_ref01_markdef_up0 = { name: 'last_error', value: 'Mark01-data_sync_ref01_' + setup.now }
    ;(data_sync_ref01_data_up0 as any)[data_sync_ref01_markdef_up0.name] = data_sync_ref01_markdef_up0.value

    const data_sync_ref01_resdata_up0 = (await data_sync_ref01_ent.update(data_sync_ref01_data_up0)).data()
    assert(data_sync_ref01_resdata_up0.id === data_sync_ref01_data_up0.id)

    assert((data_sync_ref01_resdata_up0 as any)[data_sync_ref01_markdef_up0.name] === data_sync_ref01_markdef_up0.value)


    // LOAD
    const data_sync_ref01_match_dt0: any = {}
    data_sync_ref01_match_dt0.id = data_sync_ref01_data.id
    const data_sync_ref01_data_dt0 = (await data_sync_ref01_ent.load(data_sync_ref01_match_dt0)).data()
    assert(data_sync_ref01_data_dt0.id === data_sync_ref01_data.id)


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
      '../../../../.sdk/test/entity/data_sync/DataSyncTestData.json')

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
    ['data_sync01','data_sync02','data_sync03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_DATA_SYNC_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_DATA_SYNC_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_DATA_SYNC_ENTID']
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
  
