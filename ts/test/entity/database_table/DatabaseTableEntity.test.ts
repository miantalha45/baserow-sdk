

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


describe('DatabaseTableEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BASEROW_TEST_LIVE=TRUE.
  afterEach(liveDelay('BASEROW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BaserowSDK.test()
    const ent = testsdk.DatabaseTable()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = BaserowSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.DatabaseTable().create({"data_sync_id":"x","data":"x","database_id":1,"progress_percentage":1,"report":"x","state":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BASEROW_TEST_LIVE
    for (const op of ['create', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'database_table.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"configuration":{"a":true,"h":"Configuration","n":"configuration","r":false,"sh":"Additional table import configuration.","t":"`$OBJECT`","key$":"configuration","index$":0},"created_on":{"a":true,"fo":"date-time","h":"Created On","n":"created_on","r":true,"ro":true,"t":"`$STRING`","key$":"created_on","index$":1},"data":{"a":true,"h":"Data","n":"data","r":true,"sh":"A list of rows you want to add to the specified table.","t":"`$ARRAY`","key$":"data","index$":2},"data_sync":{"a":true,"h":"Data Sync","n":"data_sync","r":true,"ro":true,"t":"`$ANY`","key$":"data_sync","index$":3},"database_id":{"a":true,"h":"Database Id","n":"database_id","r":true,"sh":"Database id where the table will be created.","t":"`$INTEGER`","key$":"database_id","index$":4},"duplicated_table":{"a":true,"h":"Duplicated Table","n":"duplicated_table","r":true,"ro":true,"t":"`$ANY`","key$":"duplicated_table","index$":5},"error_code":{"a":true,"h":"Error Code","n":"error_code","r":false,"sh":"A machine readable error code indicating why the job failed.","t":"`$STRING`","key$":"error_code","index$":6},"first_row_header":{"a":true,"h":"First Row Header","n":"first_row_header","r":false,"t":"`$BOOLEAN`","key$":"first_row_header","index$":7},"human_readable_error":{"a":true,"h":"Human Readable Error","n":"human_readable_error","r":false,"sh":"A human readable error message indicating what went wrong.","t":"`$STRING`","key$":"human_readable_error","index$":8},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":9},"importer_type":{"a":true,"h":"Importer Type","n":"importer_type","r":false,"sh":"The frontend importer identifier used to parse the file.","t":"`$STRING`","key$":"importer_type","index$":10},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the new table.","t":"`$STRING`","key$":"name","index$":11},"original_file_name":{"a":true,"h":"Original File Name","n":"original_file_name","r":false,"sh":"The original name of the uploaded file.","t":"`$STRING`","key$":"original_file_name","index$":12},"original_table":{"a":true,"h":"Original Table","n":"original_table","r":true,"ro":true,"t":"`$ANY`","key$":"original_table","index$":13},"progress_percentage":{"a":true,"h":"Progress Percentage","n":"progress_percentage","r":true,"sh":"A percentage indicating how far along the job is.","t":"`$INTEGER`","key$":"progress_percentage","index$":14},"report":{"a":true,"h":"Report","n":"report","r":true,"sh":"Import error report.","t":"`$ANY`","key$":"report","index$":15},"state":{"a":true,"h":"State","n":"state","r":true,"sh":"Indicates the state of the import job.","t":"`$STRING`","key$":"state","index$":16},"table_id":{"a":true,"h":"Table Id","n":"table_id","r":false,"sh":"Table id where the data will be imported.","t":"`$INTEGER`","key$":"table_id","index$":17},"triggered_by":{"a":true,"h":"Triggered By","n":"triggered_by","r":true,"ro":true,"sh":"Whether this sync run was started manually or periodically.","t":"`$STRING`","key$":"triggered_by","index$":18},"type":{"a":true,"h":"Type","n":"type","r":true,"ro":true,"sh":"The type of the job.","t":"`$STRING`","key$":"type","index$":19},"updated_on":{"a":true,"fo":"date-time","h":"Updated On","n":"updated_on","r":true,"ro":true,"t":"`$STRING`","key$":"updated_on","index$":20},"user_name":{"a":true,"h":"User Name","n":"user_name","r":true,"ro":true,"sh":"The name of the user that started this sync run.","t":"`$STRING`","key$":"user_name","index$":21}},"id":{"field":"id","name":"id"},"name":"database_table","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/database/data-sync/{data_sync_id}/sync/async/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"data_sync_id","or":"data_sync_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/database/data-sync/{data_sync_id}/sync/async/","q":{"exist":["data_sync_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"data-sync"},{"var":"data_sync_id"},{"lit":"sync"},{"lit":"async"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["data","first_row_header","importer_type","name","original_file_name"],"co":{"id":"POST /api/database/tables/database/{database_id}/async/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"k":"param","n":"id","or":"database_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/database/tables/database/{database_id}/async/","q":{"$action":"async","exist":["id"]},"r":{"param":{"database_id":"id"}},"rb":{"alternatives":[{"fields":[{"list":true,"name":"data"},{"name":"first_row_header"},{"name":"importer_type"},{"name":"name"},{"name":"original_file_name"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"list":true,"name":"data"},{"name":"first_row_header"},{"name":"importer_type"},{"name":"name"},{"name":"original_file_name"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"tables"},{"lit":"database"},{"var":"id"},{"lit":"async"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"bf":["table_ids"],"co":{"id":"POST /api/database/tables/database/{database_id}/order/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"client_undo_redo_action_group_id","or":"ClientUndoRedoActionGroupId","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"k":"param","n":"id","or":"database_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/database/tables/database/{database_id}/order/","q":{"$action":"order","exist":["id"]},"r":{"param":{"database_id":"id"}},"rb":{"alternatives":[{"fields":[{"list":true,"name":"table_ids"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"list":true,"name":"table_ids"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"tables"},{"lit":"database"},{"var":"id"},{"lit":"order"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /api/database/tables/{table_id}/duplicate/async/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"client_undo_redo_action_group_id","or":"ClientUndoRedoActionGroupId","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"k":"param","n":"table_id","or":"table_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/database/tables/{table_id}/duplicate/async/","q":{"exist":["table_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"tables"},{"var":"table_id"},{"lit":"duplicate"},{"lit":"async"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"bf":["configuration","data","importer_type","original_file_name"],"co":{"id":"POST /api/database/tables/{table_id}/import/async/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"table_id","or":"table_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"POST","o":"/api/database/tables/{table_id}/import/async/","q":{"exist":["table_id"]},"r":{},"rb":{"alternatives":[{"fields":[{"name":"configuration"},{"list":true,"name":"data"},{"name":"importer_type"},{"name":"original_file_name"}],"kind":"multipart","media":"multipart/form-data"},{"fields":[{"name":"configuration"},{"list":true,"name":"data"},{"name":"importer_type"},{"name":"original_file_name"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"database"},{"lit":"tables"},{"var":"table_id"},{"lit":"import"},{"lit":"async"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/database/tables/{table_id}/","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"client_session_id","or":"ClientSessionId","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"client_undo_redo_action_group_id","or":"ClientUndoRedoActionGroupId","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"k":"param","n":"id","or":"table_id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"DELETE","o":"/api/database/tables/{table_id}/","q":{"exist":["id"]},"r":{"param":{"table_id":"id"}},"s":[{"lit":"api"},{"lit":"database"},{"lit":"tables"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.data_sync"],["$.main.kit.entity.table"]]},"key$":"database_table","name__orig":"database_table","Name":"DatabaseTable","name_":"database_table","name-":"database-table","NAME":"DATABASE_TABLE","index$":53}, {"active":true,"entity":"database_table","key$":"BasicDatabaseTableFlow","kind":"basic","name":"BasicDatabaseTableFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"database_table_ref01"},"m":{"table_id":"table01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{"ref":"database_table_ref01","suffix":"_rm0"},"m":{"id":"database_table01"},"o":"remove","s":[],"v":[]}]}, 'DatabaseTable', {"POST /api/database/data-sync/{data_sync_id}/sync/async/":{"protocol":"http","parameters":[{"in":"path","name":"data_sync_id","schema":{"type":"integer"},"description":"Starts a job to sync the data sync table related to the provided value.","required":true,"index$":0}]},"POST /api/database/tables/database/{database_id}/async/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","maxLength":255,"key$":"name"},"data":{"type":"array","items":{"type":"array","items":{}},"description":"A list of rows that needs to be created as initial table data. Each row is a list of values that are going to be added in the new table in the same order as provided.\n\nEx: \n```json\n[\n  [\"row1_field1_value\", \"row1_field2_value\"],\n  [\"row2_field1_value\", \"row2_field2_value\"],\n]\n```\nfor creating a two rows table with two fields.\n\nIf not provided, some example data is going to be created.","minItems":1,"key$":"data"},"first_row_header":{"type":"boolean","default":false,"description":"Indicates if the first provided row is the header. If true the field names are going to be the values of the first row. Otherwise they will be called \"Field N\"","key$":"first_row_header"},"importer_type":{"type":"string","default":"","description":"The frontend importer identifier used to parse the file.","maxLength":32,"key$":"importer_type"},"original_file_name":{"type":"string","default":"","description":"The original name of the uploaded file.","maxLength":255,"key$":"original_file_name"}},"required":["name"],"x-ref":"#/components/schemas/TableCreate"}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"name":{"type":"string","maxLength":255,"key$":"name"},"data":{"type":"array","items":{"type":"array","items":{}},"description":"A list of rows that needs to be created as initial table data. Each row is a list of values that are going to be added in the new table in the same order as provided.\n\nEx: \n```json\n[\n  [\"row1_field1_value\", \"row1_field2_value\"],\n  [\"row2_field1_value\", \"row2_field2_value\"],\n]\n```\nfor creating a two rows table with two fields.\n\nIf not provided, some example data is going to be created.","minItems":1,"key$":"data"},"first_row_header":{"type":"boolean","default":false,"description":"Indicates if the first provided row is the header. If true the field names are going to be the values of the first row. Otherwise they will be called \"Field N\"","key$":"first_row_header"},"importer_type":{"type":"string","default":"","description":"The frontend importer identifier used to parse the file.","maxLength":32,"key$":"importer_type"},"original_file_name":{"type":"string","default":"","description":"The original name of the uploaded file.","maxLength":255,"key$":"original_file_name"}},"required":["name"],"x-ref":"#/components/schemas/TableCreate"}},"multipart/form-data":{"schema":{"type":"object","properties":{"name":{"type":"string","maxLength":255,"key$":"name"},"data":{"type":"array","items":{"type":"array","items":{}},"description":"A list of rows that needs to be created as initial table data. Each row is a list of values that are going to be added in the new table in the same order as provided.\n\nEx: \n```json\n[\n  [\"row1_field1_value\", \"row1_field2_value\"],\n  [\"row2_field1_value\", \"row2_field2_value\"],\n]\n```\nfor creating a two rows table with two fields.\n\nIf not provided, some example data is going to be created.","minItems":1,"key$":"data"},"first_row_header":{"type":"boolean","default":false,"description":"Indicates if the first provided row is the header. If true the field names are going to be the values of the first row. Otherwise they will be called \"Field N\"","key$":"first_row_header"},"importer_type":{"type":"string","default":"","description":"The frontend importer identifier used to parse the file.","maxLength":32,"key$":"importer_type"},"original_file_name":{"type":"string","default":"","description":"The original name of the uploaded file.","maxLength":255,"key$":"original_file_name"}},"required":["name"],"x-ref":"#/components/schemas/TableCreate"}}},"required":true},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"path","name":"database_id","schema":{"type":"integer"},"description":"Creates a table for the database related to the provided value.","required":true,"index$":1}]},"POST /api/database/tables/database/{database_id}/order/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"table_ids":{"type":"array","items":{"type":"integer"},"description":"Table ids in the desired order."}},"required":["table_ids"],"x-ref":"#/components/schemas/OrderTables"}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"table_ids":{"type":"array","items":{"type":"integer"},"description":"Table ids in the desired order."}},"required":["table_ids"],"x-ref":"#/components/schemas/OrderTables"}},"multipart/form-data":{"schema":{"type":"object","properties":{"table_ids":{"type":"array","items":{"type":"integer"},"description":"Table ids in the desired order."}},"required":["table_ids"],"x-ref":"#/components/schemas/OrderTables"}}},"required":true},"parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"header","name":"ClientUndoRedoActionGroupId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.","index$":1},{"in":"path","name":"database_id","schema":{"type":"integer"},"description":"Updates the order of the tables in the database related to the provided value.","required":true,"index$":2}]},"POST /api/database/tables/{table_id}/duplicate/async/":{"protocol":"http","parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"header","name":"ClientUndoRedoActionGroupId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.","index$":1},{"in":"path","name":"table_id","schema":{"type":"integer"},"description":"The table to duplicate.","required":true,"index$":2}]},"POST /api/database/tables/{table_id}/import/async/":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"data":{"type":"array","items":{"type":"array","items":{}},"description":"A list of rows you want to add to the specified table. Each row is a list of values, one for each **writable** field. The field values must be ordered according to the field order in the table, or according to `configuration.import_fields` when provided. All values must be compatible with the corresponding field type.\n\nEx: \n```json\n[\n  [\"row1_field1_value\", \"row1_field2_value\"],\n  [\"row2_field1_value\", \"row2_field2_value\"],\n]\n```\nfor adding two rows to a table with two writable fields.","minItems":1,"key$":"data"},"configuration":{"type":"object","description":"Additional table import configuration.","properties":{"import_fields":{"type":"array","items":{"type":"integer","minimum":1},"nullable":true,"description":"The ordered field IDs corresponding to the values in each imported row. This snapshots the import schema so field reordering or permission changes cannot reinterpret positional values while the job is queued.","minItems":1},"upsert_fields":{"type":"array","items":{"type":"integer","minimum":1},"nullable":true,"description":"<function TableImportConfiguration.<lambda> at 0x7fd617b3f480>","minItems":1},"upsert_values":{"type":"array","items":{"type":"array","items":{},"minItems":1},"nullable":true,"description":"A list of values that are identifying rows in imported data.\n The number of rows in `upsert_values` should be equal to the number of rows in imported data. Each row in `upsert_values` should contain a list of values that match the number and field types of fields selected in `upsert_fields`. Based on `upsert_fields`, a similar upsert values will be calculated for each row in the table.\n There's no guarantee of uniqueness of row identification calculated from `upsert_values` nor from the table. Repeated upsert values are compared in order with matching values in the table. The imported data must be in the same order as the table rows for correct matching."},"skipped_fields":{"type":"array","items":{"type":"integer","minimum":1},"nullable":true,"description":"A list of field IDs that should not be overwritten during upsert operations."}},"x-ref":"#/components/schemas/TableImportConfiguration","key$":"configuration"},"importer_type":{"type":"string","default":"","description":"The frontend importer identifier used to parse the file.","maxLength":32,"key$":"importer_type"},"original_file_name":{"type":"string","default":"","description":"The original name of the uploaded file.","maxLength":255,"key$":"original_file_name"}},"required":["data"],"x-ref":"#/components/schemas/TableImport","index$":1}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"data":{"type":"array","items":{"type":"array","items":{}},"description":"A list of rows you want to add to the specified table. Each row is a list of values, one for each **writable** field. The field values must be ordered according to the field order in the table, or according to `configuration.import_fields` when provided. All values must be compatible with the corresponding field type.\n\nEx: \n```json\n[\n  [\"row1_field1_value\", \"row1_field2_value\"],\n  [\"row2_field1_value\", \"row2_field2_value\"],\n]\n```\nfor adding two rows to a table with two writable fields.","minItems":1,"key$":"data"},"configuration":{"type":"object","description":"Additional table import configuration.","properties":{"import_fields":{"type":"array","items":{"type":"integer","minimum":1},"nullable":true,"description":"The ordered field IDs corresponding to the values in each imported row. This snapshots the import schema so field reordering or permission changes cannot reinterpret positional values while the job is queued.","minItems":1},"upsert_fields":{"type":"array","items":{"type":"integer","minimum":1},"nullable":true,"description":"<function TableImportConfiguration.<lambda> at 0x7fd617b3f480>","minItems":1},"upsert_values":{"type":"array","items":{"type":"array","items":{},"minItems":1},"nullable":true,"description":"A list of values that are identifying rows in imported data.\n The number of rows in `upsert_values` should be equal to the number of rows in imported data. Each row in `upsert_values` should contain a list of values that match the number and field types of fields selected in `upsert_fields`. Based on `upsert_fields`, a similar upsert values will be calculated for each row in the table.\n There's no guarantee of uniqueness of row identification calculated from `upsert_values` nor from the table. Repeated upsert values are compared in order with matching values in the table. The imported data must be in the same order as the table rows for correct matching."},"skipped_fields":{"type":"array","items":{"type":"integer","minimum":1},"nullable":true,"description":"A list of field IDs that should not be overwritten during upsert operations."}},"x-ref":"#/components/schemas/TableImportConfiguration","key$":"configuration"},"importer_type":{"type":"string","default":"","description":"The frontend importer identifier used to parse the file.","maxLength":32,"key$":"importer_type"},"original_file_name":{"type":"string","default":"","description":"The original name of the uploaded file.","maxLength":255,"key$":"original_file_name"}},"required":["data"],"x-ref":"#/components/schemas/TableImport"}},"multipart/form-data":{"schema":{"type":"object","properties":{"data":{"type":"array","items":{"type":"array","items":{}},"description":"A list of rows you want to add to the specified table. Each row is a list of values, one for each **writable** field. The field values must be ordered according to the field order in the table, or according to `configuration.import_fields` when provided. All values must be compatible with the corresponding field type.\n\nEx: \n```json\n[\n  [\"row1_field1_value\", \"row1_field2_value\"],\n  [\"row2_field1_value\", \"row2_field2_value\"],\n]\n```\nfor adding two rows to a table with two writable fields.","minItems":1,"key$":"data"},"configuration":{"type":"object","description":"Additional table import configuration.","properties":{"import_fields":{"type":"array","items":{"type":"integer","minimum":1},"nullable":true,"description":"The ordered field IDs corresponding to the values in each imported row. This snapshots the import schema so field reordering or permission changes cannot reinterpret positional values while the job is queued.","minItems":1},"upsert_fields":{"type":"array","items":{"type":"integer","minimum":1},"nullable":true,"description":"<function TableImportConfiguration.<lambda> at 0x7fd617b3f480>","minItems":1},"upsert_values":{"type":"array","items":{"type":"array","items":{},"minItems":1},"nullable":true,"description":"A list of values that are identifying rows in imported data.\n The number of rows in `upsert_values` should be equal to the number of rows in imported data. Each row in `upsert_values` should contain a list of values that match the number and field types of fields selected in `upsert_fields`. Based on `upsert_fields`, a similar upsert values will be calculated for each row in the table.\n There's no guarantee of uniqueness of row identification calculated from `upsert_values` nor from the table. Repeated upsert values are compared in order with matching values in the table. The imported data must be in the same order as the table rows for correct matching."},"skipped_fields":{"type":"array","items":{"type":"integer","minimum":1},"nullable":true,"description":"A list of field IDs that should not be overwritten during upsert operations."}},"x-ref":"#/components/schemas/TableImportConfiguration","key$":"configuration"},"importer_type":{"type":"string","default":"","description":"The frontend importer identifier used to parse the file.","maxLength":32,"key$":"importer_type"},"original_file_name":{"type":"string","default":"","description":"The original name of the uploaded file.","maxLength":255,"key$":"original_file_name"}},"required":["data"],"x-ref":"#/components/schemas/TableImport"}}},"required":true},"parameters":[{"in":"path","name":"table_id","schema":{"type":"integer"},"description":"Import data into the table related to the provided value.","required":true,"index$":0}]},"DELETE /api/database/tables/{table_id}/":{"protocol":"http","parameters":[{"in":"header","name":"ClientSessionId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular client session. Then using the undo/redo endpoints with the same ClientSessionId header this action can be undone/redone.","index$":0},{"in":"header","name":"ClientUndoRedoActionGroupId","schema":{"type":"string","format":"uuid"},"description":"An optional header that marks the action performed by this request as having occurred in a particular action group.Then calling the undo/redo endpoint with the same ClientSessionId header, all the actions belonging to the same action group can be undone/redone together in a single API call.","index$":1},{"in":"path","name":"table_id","schema":{"type":"integer"},"description":"Deletes the table related to the provided value.","required":true,"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const database_table_ref01_ent = client.DatabaseTable()
    let database_table_ref01_data = setup.data.new.database_table['database_table_ref01']
    database_table_ref01_data['table_id'] = setup.idmap['table01']

    database_table_ref01_data = (await database_table_ref01_ent.create(database_table_ref01_data)).data()
    assert(null != database_table_ref01_data.id)


    // REMOVE
    const database_table_ref01_match_rm0: any = { id: database_table_ref01_data.id }
    await database_table_ref01_ent.remove(database_table_ref01_match_rm0)
  

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
      '../../../../.sdk/test/entity/database_table/DatabaseTableTestData.json')

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
    ['database_table01','database_table02','database_table03','data_sync01','data_sync02','data_sync03','table01','table02','table03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BASEROW_TEST_DATABASE_TABLE_ENTID': idmap,
    'BASEROW_TEST_LIVE': 'FALSE',
    'BASEROW_TEST_EXPLAIN': 'FALSE',
    'BASEROW_APIKEY': '',
    'BASEROW_SERVER_BASE': "",
  })

  idmap = env['BASEROW_TEST_DATABASE_TABLE_ENTID']

  const live = 'TRUE' === env.BASEROW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BASEROW_TEST_DATABASE_TABLE_ENTID']
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
  
