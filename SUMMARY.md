# Baserow API spec

> For more information about our REST API, please visit [this page](https://baserow.io/docs/apis%2Frest-api).
>
> For more information about our deprecation policy, please visit [this page](https://baserow.io/docs/apis%2Fdeprecations).

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 173 entities and 424 HTTP routes. There are 1 SDK targets.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### AbuseReport

Results: No response body.

SDK operations: `create`.

Key fields to recognise:

- `captcha_token`: The captcha response token, required when captcha is enabled.
- `description`: A detailed description of why the resource is abusive.
- `email`: The email address of the person reporting the abuse.
- `identifier`: The public identifier of the reported resource, for example the slug of a publicly shared view.
- `name`: The name of the person reporting the abuse.

### Admin

Results: No response body.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `access_token`: &#39;`access_token`&#39; can be used to authorize for other endpoints that require authorization. This token will be valid for 10 minutes.
- `application_users`: The amount of application builder users permitted in this license.
- `application_users_taken`: The amount of application builder users used so far in this license.
- `free_users_count`: The amount of free users that are currently using the license.
- `is_active`: Indicates if the backend deems the license valid.

### AdminDashboard

SDK operations: `list`.

### AdminDataScanner

Results: No response body.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `created_on`: The date and time when the export job was created.
- `csv_column_separator`: The value used to separate columns in the resulting csv file. * `,` - , * `;` - ; * `|` - | * `tab` - * `record_separator` -  * `unit_separator` - 
- `csv_first_row_header`: Whether or not to generate a header row at the top of the csv file.
- `export_charset`: The character set to use when creating the export file. * `utf-8` - utf-8 * `iso-8859-6` - iso-8859-6 * `windows-1256` - windows-1256 * `iso-8859-4` - iso-8859-4 * `windows-1257` - windows-1257 * `iso-8859-14` - iso-8859-14 * `iso-8859-2` - iso-8859-2 * `windows-1250` - windows-1250 * `gbk` - gbk * `gb18030` - gb18030 * `big5` - big5 * `koi8-r` - koi8-r * `koi8-u` - koi8-u * `iso-8859-5` - iso-8859-5 * `windows-1251` - windows-1251 * `x-mac-cyrillic` - mac-cyrillic * `iso-8859-7` - iso-8859-7 * `windows-1253` - windows-1253 * `iso-8859-8` - iso-8859-8 * `windows-1255` - windows-1255 * `euc-jp` - euc-jp * `iso-2022-jp` - iso-2022-jp * `shift-jis` - shift-jis * `euc-kr` - euc-kr * `macintosh` - macintosh * `iso-8859-10` - iso-8859-10 * `iso-8859-16` - iso-8859-16 * `windows-874` - cp874 * `windows-1254` - windows-1254 * `windows-1258` - windows-1258 * `iso-8859-1` - iso-8859-1 * `windows-1252` - windows-1252 * `iso-8859-3` - iso-8859-3
- `exported_file_name`: The name of the file that was created by the export job.

### AdminView

SDK operations: `create`, `list`, `update`.

Key fields to recognise:

- `ownership_type`: Indicates how the access to the view is determined. By default, views are collaborative and shared for all users that have access to the table.
- `public`: Indicates whether the view is publicly accessible to visitors.
- `slug`: The unique slug where the view can be accessed publicly on.

### AdminWorkspaceOption

SDK operations: `list`.

### Agent

Results: No response body.

SDK operations: `create`, `remove`, `update`.

### AgentPaginationAgent

SDK operations: `load`.

Key fields to recognise:

- `count`: The total amount of results.
- `next`: URL to the next page.
- `previous`: URL to the previous page.

### AiAssistant

Results: A text/event-stream of the assistant’s partial responses; Message generation cancelled; No response body.

SDK operations: `create`, `remove`, `update`.

Key fields to recognise:

- `content`: The content of the message.
- `ui_context`: The UI context related to what the user was looking at when the message was sent.

### AiProvider

Results: No response body.

SDK operations: `create`, `list`, `remove`, `update`.

### AiProviderFeatureSetting

SDK operations: `list`, `update`.

Key fields to recognise:

- `inherited_state`: The state of the instance selection this workspace inherits, or null at instance scope. * `configured` - configured * `disabled` - disabled * `unconfigured` - unconfigured * `invalid` - invalid
- `mode`: * `inherit` - inherit * `legacy` - legacy * `model` - model * `disabled` - disabled
- `state`: * `configured` - configured * `inherited` - inherited * `overridden` - overridden * `disabled` - disabled * `unconfigured` - unconfigured * `invalid` - invalid

### AiProviderModel

SDK operations: `create`, `update`.

Key fields to recognise:

- `feature_types`: The AI features allowed to select this model. This controls eligibility, not which features currently use the model.

### AiProviderModelDiscovery

SDK operations: `list`.

### AiProviderModelUsageEntry

SDK operations: `list`.

### AiProviderModelsTest

SDK operations: `create`.

### AiProviderType

SDK operations: `list`.

### Application

Results: No response body.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `application_ids`: Application ids in the desired order.

### ApplicationApplication

SDK operations: `create`, `load`.

### AssistantChat

SDK operations: `list`.

Key fields to recognise:

- `status`: * `idle` - Idle * `in_progress` - In progress * `canceling` - Canceling
- `title`: The title of the chat.
- `user_id`: The user who owns the chat.
- `uuid`: Unique identifier for the chat. Can be provided by the client.
- `workspace_id`: The workspace the chat belongs to.

### AuditLog

SDK operations: `create`, `list`.

### AuditLogActionType

SDK operations: `list`.

Key fields to recognise:

- `id`: * `create_group` - `create_group` * `delete_group` - `delete_group` * `update_group` - `update_group` * `order_groups` - `order_groups` * `create_application` - `create_application` * `update_application` - `update_application` * `delete_application` - `delete_application` * `order_applications` - `order_applications` * `duplicate_application` - `duplicate_application` * `install_template` - `install_template` * `create_group_invitation` - `create_group_invitation` * `delete_group_invitation` - `delete_group_invitation` * `accept_group_invitation` - `accept_group_invitation` * `reject_group_invitation` - `reject_group_invitation` * `update_group_invitation_permissions` - `update_group_invitation_permissions` * `leave_group` - `leave_group` * `create_initial_workspace` - `create_initial_workspace` * `export_applications` - `export_applications` * `import_applications` - `import_applications` * `create_snapshot` - `create_snapshot` * `delete_snapshot` - `delete_snapshot` * `restore_snapshot` - `restore_snapshot` * `empty_trash` - `empty_trash` * `restore_from_trash` - `restore_from_trash` * `create_mcp_endpoint` - `create_mcp_endpoint` * `update_mcp_endpoint` - `update_mcp_endpoint` * `delete_mcp_endpoint` - `delete_mcp_endpoint` * `create_user` - `create_user` * `update_user` - `update_user` * `schedule_user_deletion` - `schedule_user_deletion` * `cancel_user_deletion` - `cancel_user_deletion` * `sign_in_user` - `sign_in_user` * `change_user_password` - `change_user_password` * `send_reset_user_password` - `send_reset_user_password` * `reset_user_password` - `reset_user_password` * `send_verify_email` - `send_verify_email` * `verify_email` - `verify_email` * `send_change_email_confirmation` - `send_change_email_confirmation` * `change_email` - `change_email` * `configure_two_factor_auth` - `configure_two_factor_auth` * `disable_two_factor_auth` - `disable_two_factor_auth` * `admin_disable_two_factor_auth` - `admin_disable_two_factor_auth` * `submit_abuse_report` - `submit_abuse_report` * `create_integration` - `create_integration` * `update_integration` - `update_integration` * `delete_integration` - `delete_integration` * `move_integration` - `move_integration` * `create_user_source` - `create_user_source` * `update_user_source` - `update_user_source` * `delete_user_source` - `delete_user_source` * `move_user_source` - `move_user_source` * `create_db_token` - `create_db_token` * `update_db_token_name` - `update_db_token_name` * `update_db_token_permissions` - `update_db_token_permissions` * `rotate_db_token_key` - `rotate_db_token_key` * `delete_db_token_key` - `delete_db_token_key` * `create_webhook` - `create_webhook` * `delete_webhook` - `delete_webhook` * `update_webhook` - `update_webhook` * `export_table` - `export_table` * `dispatch_button_field` - `dispatch_button_field` * `import_database_from_airtable` - `import_database_from_airtable` * `create_table` - `create_table` * `delete_table` - `delete_table` * `order_tables` - `order_tables` * `update_table` - `update_table` * `duplicate_table` - `duplicate_table` * `create_row` - `create_row` * `create_rows` - `create_rows` * `import_rows` - `import_rows` * `delete_row` - `delete_row` * `delete_rows` - `delete_rows` * `move_row` - `move_row` * `update_row` - `update_row` * `update_rows` - `update_rows` * `create_view` - `create_view` * `duplicate_view` - `duplicate_view` * `copy_view_configuration` - `copy_view_configuration` * `delete_view` - `delete_view` * `order_views` - `order_views` * `update_view` - `update_view` * `create_view_filter` - `create_view_filter` * `update_view_filter` - `update_view_filter` * `delete_view_filter` - `delete_view_filter` * `create_view_sort` - `create_view_sort` * `update_view_sort` - `update_view_sort` * `delete_view_sort` - `delete_view_sort` * `prioritize_view_sortings` - `prioritize_view_sortings` * `create_view_group` - `create_view_group` * `update_view_group` - `update_view_group` * `delete_view_group` - `delete_view_group` * `prioritize_view_group_bys` - `prioritize_view_group_bys` * `submit_form` - `submit_form` * `edit_form_row` - `edit_form_row` * `rotate_view_slug` - `rotate_view_slug` * `update_view_field_options` - `update_view_field_options` * `update_view_default_values` - `update_view_default_values` * `create_decoration` - `create_decoration` * `update_decoration` - `update_decoration` * `delete_decoration` - `delete_decoration` * `create_view_filter_group` - `create_view_filter_group` * `update_view_filter_group` - `update_view_filter_group` * `delete_view_filter_group` - `delete_view_filter_group` * `admin_update_view_public` - `admin_update_view_public` * `admin_rotate_view_slug` - `admin_rotate_view_slug` * `create_data_sync_table` - `create_data_sync_table` * `update_data_sync_table` - `update_data_sync_table` * `sync_data_sync_table` - `sync_data_sync_table` * `create_field` - `create_field` * `delete_field` - `delete_field` * `update_field` - `update_field` * `duplicate_field` - `duplicate_field` * `change_primary_field` - `change_primary_field` * `create_database_workflow_action` - `create_database_workflow_action` * `update_database_workflow_action` - `update_database_workflow_action` * `delete_database_workflow_action` - `delete_database_workflow_action` * `order_database_workflow_actions` - `order_database_workflow_actions` * `create_field_rule` - `create_field_rule` * `update_field_rule` - `update_field_rule` * `delete_field_rule` - `delete_field_rule` * `create_page` - `create_page` * `update_page` - `update_page` * `delete_page` - `delete_page` * `duplicate_page` - `duplicate_page` * `order_pages` - `order_pages` * `create_element` - `create_element` * `update_element` - `update_element` * `delete_element` - `delete_element` * `duplicate_element` - `duplicate_element` * `move_element` - `move_element` * `create_data_source` - `create_data_source` * `update_data_source` - `update_data_source` * `delete_data_source` - `delete_data_source` * `move_data_source` - `move_data_source` * `create_builder_workflow_action` - `create_builder_workflow_action` * `update_builder_workflow_action` - `update_builder_workflow_action` * `delete_builder_workflow_action` - `delete_builder_workflow_action` * `order_builder_workflow_actions` - `order_builder_workflow_actions` * `create_widget` - `create_widget` * `update_widget` - `update_widget` * `update_widget_layout` - `update_widget_layout` * `delete_widget` - `delete_widget` * `update_dashboard_data_source` - `update_dashboard_data_source` * `create_automation_workflow` - `create_automation_workflow` * `update_automation_workflow` - `update_automation_workflow` * `delete_automation_workflow` - `delete_automation_workflow` * `duplicate_automation_workflow` - `duplicate_automation_workflow` * `order_automation_workflows` - `order_automation_workflows` * `create_automation_node` - `create_automation_node` * `update_automation_node` - `update_automation_node` * `delete_automation_node` - `delete_automation_node` * `duplicate_automation_node` - `duplicate_automation_node` * `replace_automation_node` - `replace_automation_node` * `move_automation_node` - `move_automation_node` * `generate_formula_with_ai` - `generate_formula_with_ai` * `create_row_comment` - `create_row_comment` * `delete_row_comment` - `delete_row_comment` * `update_row_comment` - `update_row_comment` * `rotate_calendar_ical_view_slug` - `rotate_calendar_ical_view_slug` * `create_team` - `create_team` * `update_team` - `update_team` * `delete_team` - `delete_team` * `create_team_subject` - `create_team_subject` * `delete_team_subject` - `delete_team_subject` * `batch_assign_role` - `batch_assign_role` * `update_field_permissions` - `update_field_permissions` * `update_periodic_data_sync_interval` - `update_periodic_data_sync_interval` * `create_data_scan` - `create_data_scan` * `update_data_scan` - `update_data_scan` * `delete_data_scan` - `delete_data_scan`
- `value`: Given the *incoming* primitive data, return the value for this field that should be validated and transformed to a native value.

### AuditLogUser

SDK operations: `list`.

### Auth

Results: No response body.

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `RelayState`: The frontend URL where redirect the authenticated user.
- `SAMLResponse`: The encoded SAML response from the IdP.
- `email`: Deprecated.

### AuthenticationProviderAuthProvider

SDK operations: `create`, `list`, `load`, `update`.

### AutomationNode

Results: No response body.

SDK operations: `remove`.

### AutomationNodeHistory

SDK operations: `list`.

Key fields to recognise:

- `status`: * `success` - Success * `error` - Error * `disabled` - Disabled * `started` - Started * `skipped` - Skipped * `cancelled` - Cancelled

### AutomationNodeResult

SDK operations: `load`.

Key fields to recognise:

- `result`: Contains node results.

### AutomationNodeTypeAutomationNode

SDK operations: `create`, `list`, `update`.

Key fields to recognise:

- `new_type`: The type of the new automation node * `local_baserow_create_row` - `local_baserow_create_row` * `local_baserow_create_rows` - `local_baserow_create_rows` * `local_baserow_update_row` - `local_baserow_update_row` * `local_baserow_update_rows` -…
- `output`: The new output.
- `position`: The new position relative to the reference node.
- `reference_node_id`: The reference node.

### AutomationWorkflow

Results: No response body.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `allow_test_run`: If provided, enables the workflow to be triggerable for the next 5 minutes.
- `error_code`: A machine readable error code indicating why the job failed.
- `graph`: A JSON serialized graph containing the points and edges.
- `human_readable_error`: A human readable error message indicating what went wrong.
- `notification_recipient_ids`: The user IDs of the workspace members that should receive notifications related to this workflow.

### AutomationWorkflowHistory

SDK operations: `create`, `list`.

Key fields to recognise:

- `cancellation_requested_on`: When the cancellation of this run was requested.
- `is_test_run`: True when the workflow is being simulated.
- `status`: * `success` - Success * `error` - Error * `disabled` - Disabled * `started` - Started * `skipped` - Skipped * `cancelled` - Cancelled

### BuilderDataSource

Results: No response body.

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `metadata`: Metadata of the dispatch payload.

### BuilderDomain

Results: No response body.

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `domain_ids`: The ids of the domains in the order they are supposed to be set in

### BuilderElement

Results: No response body.

SDK operations: `remove`.

### BuilderPage

Results: No response body.

SDK operations: `create`, `remove`.

Key fields to recognise:

- `error_code`: A machine readable error code indicating why the job failed.
- `human_readable_error`: A human readable error message indicating what went wrong.
- `page_ids`: The ids of the pages in the order they are supposed to be set in
- `progress_percentage`: A percentage indicating how far along the job is. 100 means that it&#39;s finished.
- `state`: Indicates the state of the import job.

### BuilderPreview

SDK operations: `load`.

### BuilderPreviewGrant

SDK operations: `create`.

### BuilderPreviewHandoff

SDK operations: `create`.

### BuilderPublic

SDK operations: `load`.

### BuilderWorkflowAction

Results: No response body.

SDK operations: `create`, `remove`.

Key fields to recognise:

- `element_id`: The element the workflow actions belong to
- `workflow_action_ids`: The ids of the workflow actions in the order they are supposed to be set in

### BuilderWorkflowActionTypeBuilderWorkflowAction

SDK operations: `create`, `list`, `update`.

### ById

SDK operations: `load`.

### ByName

SDK operations: `load`.

### Calendar

SDK operations: `load`.

Key fields to recognise:

- `id`: The unique identifier of the row in the table.
- `row_metadata`: An object keyed by row id with a value being an object containing additional metadata about that row. A row might not have metadata and will not be present as a key if so.
- `rows`: Every date bucket (for example &#39;2023-01-01&#39;) related to the view&#39;s date field can have its own entry like this.

### CalendarViewExample

SDK operations: `list`.

Key fields to recognise:

- `hidden`: Whether or not the field should be hidden in the card.
- `order`: Indicates the position of the row, lowest first and highest last.

### Callback

SDK operations: `load`.

### Cancel

SDK operations: `list`.

### ColorTypographyButtonImagePageInputTableLinklinkActiveText

SDK operations: `update`.

Key fields to recognise:

- `body_font_weight`: * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra Black
- `body_text_alignment`: * `left` - Left * `center` - Center * `right` - Right
- `button_active_background_color`: The background color of buttons when active
- `button_active_border_color`: The border color of buttons when active
- `button_active_text_color`: The text color of buttons when active

### CoreWebhook

Results: No response body.

SDK operations: `create`, `load`, `patch`, `remove`, `update`.

### DashboardDataSource

SDK operations: `create`.

### DashboardWidget

Results: No response body.

SDK operations: `remove`.

### DashboardWidgetWidget

SDK operations: `create`, `list`, `update`.

Key fields to recognise:

- `widgets`: The complete layout of the dashboard widgets visible to the current user.

### DataScan

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `frequency`: * `manual` - Manual * `hourly` - Hourly * `daily` - Daily * `weekly` - Weekly
- `scan_type`: * `pattern` - Pattern * `list_of_values` - List of values * `list_table` - List Table

### DataSync

SDK operations: `load`, `update`.

Key fields to recognise:

- `auto_add_new_properties`: If enabled and new properties are detected on sync, then they&#39;re automatically added. Note that this means all properties will always be added.
- `delete_unmatched_rows`: If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. If disabled, those rows are kept and reused if the matching source row reappears.
- `last_sync`: Timestamp when the table was last synced.
- `table_id`: The table where the data is synced into.
- `two_way_sync`: If enabled, then it&#39;s possible to make changes to the synced table. They will automatically be synced with the source data. Note that this is only possible if the data sync type has a two-way sync strategy.

### DatabaseTable

Results: No response body.

SDK operations: `create`, `remove`.

Key fields to recognise:

- `configuration`: Additional table import configuration.
- `data`: A list of rows you want to add to the specified table.
- `database_id`: Database id where the table will be created.
- `error_code`: A machine readable error code indicating why the job failed.
- `human_readable_error`: A human readable error message indicating what went wrong.

### DatabaseTableField

Results: No response body.

SDK operations: `create`, `remove`.

Key fields to recognise:

- `element_id`: The element the workflow actions belong to
- `error_code`: A machine readable error code indicating why the job failed.
- `field_id`: The ID of the AI field to generate values for.
- `human_readable_error`: A human readable error message indicating what went wrong.
- `is_auto_update`: Indicates if the job has been created because values in a dependent field changed.

### DatabaseTableGridView

SDK operations: `load`.

Key fields to recognise:

- `total`: The total value count. Only returned if `include=total` is specified as GET parameter.

### DatabaseTableRow

Results: No response body.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `mode`: The mode to use to receive notifications for new comments on a table row.
- `row_id`: the name of the row with id `row_id` from table with id `table_id`.

### DatabaseTableView

Results: No response body.

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `view_ids`: View ids in the desired order.

### DatabaseTableViewDecoration

Results: No response body.

SDK operations: `remove`.

### DatabaseTableViewFilter

Results: No response body.

SDK operations: `remove`.

### DatabaseTableViewGrouping

Results: No response body.

SDK operations: `create`, `remove`.

Key fields to recognise:

- `view_group_by_ids`: View group by ids in the desired priority order.

### DatabaseTableViewSorting

Results: No response body.

SDK operations: `create`, `remove`.

Key fields to recognise:

- `view_sort_ids`: View sort ids in the desired priority order.

### DatabaseTableWebhook

SDK operations: `remove`.

### DatabaseToken

Results: No response body.

SDK operations: `load`, `remove`.

### DatabaseWorkflowActionTypeDatabaseWorkflowAction

SDK operations: `create`, `list`, `update`.

### DecoratorValueProviderTypeViewDecoration

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `id`: A unique identifier for this condition.

### Dispatch

SDK operations: `create`.

Key fields to recognise:

- `client_actions`: Actions the browser runs itself, in order, after the server actions have completed.
- `results`: One result per server action that ran, once the click finished.
- `row_id`: A formula for defining the intended row.

### Domain

SDK operations: `create`, `list`, `update`.

Key fields to recognise:

- `type`: The type of the domain.

### Duplicate

SDK operations: `create`.

Key fields to recognise:

- `elements`: The duplicated elements.
- `graph`: The updated page graph.
- `workflow_actions`: The duplicated workflow actions

### Element

SDK operations: `create`, `list`, `update`.

### ElementTypeElement

SDK operations: `update`.

### Email

SDK operations: `create`.

Key fields to recognise:

- `error`: A short message describing the error that occured if the test email failed
- `error_stack`: The full stack trace and error message if the test email failed.
- `error_type`: The type of error that occurred if the test email failed.
- `succeeded`: Whether or not the test email was sent successfully.

### ExampleBatchRow

SDK operations: `create`.

### ExampleBatchUpdateRow

SDK operations: `update`.

Key fields to recognise:

- `metadata`: An optional object containing metadata information about the operation

### ExamplePublicRowResponseSerializerWithUserFieldName

SDK operations: `load`.

Key fields to recognise:

- `field_1`: This field represents the `text` field. The number in `field_1` is in a normal request or response the id of the field. If the GET parameter `user_field_names` is provided and its value is one of the following: `y`, `yes`, `true`, `t`, `on`, `1`, or empty, then the key will instead be the actual name of the field.
- `field_10`: This field represents the `last_modified_by` field. The number in `field_10` is in a normal request or response the id of the field. If the GET parameter `user_field_names` is provided and its value is one of the following: `y`, `yes`, `true`, `t`, `on`, `1`, or empty, then the key will instead be the actual name of the field.
- `field_11`: This field represents the `created_on` field. The number in `field_11` is in a normal request or response the id of the field. If the GET parameter `user_field_names` is provided and its value is one of the following: `y`, `yes`, `true`, `t`, `on`, `1`, or empty, then the key will instead be the actual name of the field.
- `field_12`: This field represents the `created_by` field. The number in `field_12` is in a normal request or response the id of the field. If the GET parameter `user_field_names` is provided and its value is one of the following: `y`, `yes`, `true`, `t`, `on`, `1`, or empty, then the key will instead be the actual name of the field.
- `field_13`: This field represents the `duration` field. The number in `field_13` is in a normal request or response the id of the field. If the GET parameter `user_field_names` is provided and its value is one of the following: `y`, `yes`, `true`, `t`, `on`, `1`, or empty, then the key will instead be the actual name of the field. The provided value can be a string in one of the available formats or a number representing the duration in seconds. In any case, the value will be rounded to match the field&#39;s duration format.

### ExampleRow

SDK operations: `create`, `load`.

Key fields to recognise:

- `field_1`: This field represents the `text` field. The number in `field_1` is in a normal request or response the id of the field.
- `field_10`: This field represents the `last_modified_by` field. The number in `field_10` is in a normal request or response the id of the field.
- `field_11`: This field represents the `created_on` field. The number in `field_11` is in a normal request or response the id of the field.
- `field_12`: This field represents the `created_by` field. The number in `field_12` is in a normal request or response the id of the field.
- `field_13`: This field represents the `duration` field. The number in `field_13` is in a normal request or response the id of the field. The provided value can be a string in one of the available formats or a number representing the duration in seconds. In any case, the value will be rounded to match the field&#39;s duration format.

### ExampleRowResponseSerializerWithUserFieldName

Results: No response body.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `baserow_id`: The unique identifier of the row in the table.
- `field_1`: This field represents the `text` field. The number in `field_1` is in a normal request or response the id of the field. If the GET parameter `user_field_names` is provided and its value is one of the following: `y`, `yes`, `true`, `t`, `on`, `1`, or empty, then the key will instead be the actual name of the field.
- `field_10`: This field represents the `last_modified_by` field. The number in `field_10` is in a normal request or response the id of the field. If the GET parameter `user_field_names` is provided and its value is one of the following: `y`, `yes`, `true`, `t`, `on`, `1`, or empty, then the key will instead be the actual name of the field.
- `field_11`: This field represents the `created_on` field. The number in `field_11` is in a normal request or response the id of the field. If the GET parameter `user_field_names` is provided and its value is one of the following: `y`, `yes`, `true`, `t`, `on`, `1`, or empty, then the key will instead be the actual name of the field.
- `field_12`: This field represents the `created_by` field. The number in `field_12` is in a normal request or response the id of the field. If the GET parameter `user_field_names` is provided and its value is one of the following: `y`, `yes`, `true`, `t`, `on`, `1`, or empty, then the key will instead be the actual name of the field.

### Export

SDK operations: `list`, `load`.

Key fields to recognise:

- `error_code`: A machine readable error code indicating why the job failed.
- `human_readable_error`: A human readable error message indicating what went wrong.
- `progress_percentage`: A percentage indicating how far along the job is. 100 means that it&#39;s finished.
- `state`: Indicates the state of the import job.
- `status`: DEPRECATED: Use state instead

### ExportJob

SDK operations: `create`, `load`.

Key fields to recognise:

- `state`: * `pending` - pending * `exporting` - exporting * `cancelled` - cancelled * `finished` - finished * `failed` - failed * `expired` - expired
- `status`: DEPRECATED: Use state instead

### Field

SDK operations: `load`, `update`.

### FieldField

SDK operations: `create`, `load`.

Key fields to recognise:

- `new_primary_field_id`: The ID of the new primary field.

### FieldFieldSerializerWithRelatedField

SDK operations: `create`.

### FieldPermissionSubjectOption

SDK operations: `list`.

### FieldRule

Results: No response body.

SDK operations: `create`, `load`, `remove`.

### FieldRulesResponseFieldRule

SDK operations: `update`.

### FormViewSubmitted

SDK operations: `create`, `update`.

Key fields to recognise:

- `field_1`: This field represents the `text` field.
- `field_13`: This field represents the `duration` field.
- `field_14`: This field represents the `link_row` field.
- `field_15`: This field represents the `file` field.
- `field_16`: Accepts one of the following option ids as integer value This field accepts an `integer` representing the chosen select option id related to the field.

### Full

SDK operations: `load`.

Key fields to recognise:

- `celery_export_queue_size`: The number of enqueued celery export worker tasks.
- `celery_queue_size`: The number of enqueued celery tasks.
- `checks`: An object keyed by the name of the health check and the value being the result.
- `passing`: False if any of the critical service health checks are failing, true otherwise.

### GenerateFormulaWithAi

SDK operations: `create`.

Key fields to recognise:

- `ai_model`: The AI model that must be used when generating the formula.
- `ai_prompt`: The human readable input used to generate the formula.
- `ai_temperature`: Between 0 and 2, adjusts response randomness, lower values yield focused answers, while higher values increase creativity.
- `ai_type`: The AI model type that must be used when generating the formula.
- `formula`: The formula generated by the AI.

### GridViewGroupByData

SDK operations: `list`.

Key fields to recognise:

- `parent`: The serialized parent group path requested for this page.

### Health

Results: No response body.

SDK operations: `load`.

### InboundEmail

Results: No response body.

SDK operations: `create`.

### Install

SDK operations: `create`.

### InstanceId

SDK operations: `load`.

### Integration

Results: No response body.

SDK operations: `create`, `list`, `remove`, `update`.

### IntegrationIntegration

SDK operations: `update`.

### IntegrationServiceDashboardDataSource

SDK operations: `list`, `update`.

Key fields to recognise:

- `id`: Data source id.

### IntegrationServiceDataSource

SDK operations: `create`, `list`, `update`.

Key fields to recognise:

- `before_id`: If provided, the `data_source` is moved before the `data_source` with this Id.
- `id`: Data source id.

### IntegrationServicePublicDataSource

SDK operations: `list`.

### InvalidRow

SDK operations: `list`.

### Job

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `count`: The number of matching jobs, or null when polling explicit job IDs.
- `created_on`: The date and time when the export job was created.
- `error_code`: A machine readable error code indicating why the job failed.
- `human_readable_error`: A human readable error message indicating what went wrong.
- `progress_percentage`: A percentage indicating how far along the job is. 100 means that it&#39;s finished.

### JobTypeJob

SDK operations: `create`.

### Kanban

SDK operations: `load`.

Key fields to recognise:

- `id`: The unique identifier of the row in the table.
- `row_metadata`: An object keyed by row id with a value being an object containing additional metadata about that row. A row might not have metadata and will not be present as a key if so.
- `rows`: Every select option related to the view&#39;s single select field can have its own entry like this.

### KanbanViewExample

SDK operations: `list`.

Key fields to recognise:

- `hidden`: Whether or not the field should be hidden in the card.
- `order`: Indicates the position of the row, lowest first and highest last.

### LastViewedItem

SDK operations: `list`.

Key fields to recognise:

- `item`: The `id` and `name` of the item, plus what the type adds. A database view also carries its `table` (`id`, `name`).
- `sub_type`: Set for polymorphic types, like the view type of a database view.

### License

SDK operations: `create`, `load`.

Key fields to recognise:

- `application_users`: The amount of application builder users permitted in this license.
- `application_users_taken`: The amount of application builder users used so far in this license.
- `free_users_count`: The amount of free users that are currently using the license.
- `is_active`: Indicates if the backend deems the license valid.
- `issued_on`: The date when the license was issued. It could be that a new license is issued with the same `license_id` because it was updated. In that case, the one that has been issued last should be used.

### LicenseUser

SDK operations: `create`.

### LicenseUserLookup

SDK operations: `list`.

Key fields to recognise:

- `value`: The name and the email address of the user.

### LicenseWithUser

SDK operations: `list`.

### ListDataSyncProperty

SDK operations: `create`, `list`.

### Login

SDK operations: `load`.

### McpEndpoint

Results: No response body.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `key`: The unique endpoint key that can be used to authorize for the MCP service.
- `name`: The human readable name of the MCP endpoint for the user.

### Message

SDK operations: `list`.

### Notification

Results: No response body.

SDK operations: `create`, `remove`, `update`.

Key fields to recognise:

- `baserow_id`: The id of the notification.
- `created_on`: The date and time that the notification was created.
- `data`: The data associated with the notification.
- `id`: The id of the notification.
- `read`: If True, then the notification has been read by the user.

### OnboardingPromptSuggestion

SDK operations: `create`.

Key fields to recognise:

- `industry`: The industry the user works in.
- `language`: ISO 639 language code the suggestions must be written in.
- `team`: The team the user is part of.

### OpenApiRoleAssignment

Results: No response body.

SDK operations: `create`, `load`.

Key fields to recognise:

- `role`: The uid of the role assigned to the user or team in the given workspace.
- `scope_id`: The unique scope ID.
- `scope_type`: The type of the scope object. The scope object limit the role assignment to this scope and all its descendants. * `core` - core * `application` - application * `workspace` - workspace * `workspace_invitation` - `workspace_invitation` * `snapshot` - snapshot * `workspace_user` - `workspace_user` * `integration` - integration * `user_source` - `user_source` * `mcp_endpoint` - `mcp_endpoint` * `database` - database * `database_table` - `database_table` * `database_field` - `database_field` * `database_view` - `database_view` * `database_view_decoration` - `database_view_decoration` * `database_view_sort` - `database_view_sort` * `database_view_group` - `database_view_group` * `database_view_filter` - `database_view_filter` * `database_view_filter_group` - `database_view_filter_group` * `token` - token * `builder` - builder * `builder_page` - `builder_page` * `builder_element` - `builder_element` * `builder_domain` - `builder_domain` * `builder_data_source` - `builder_data_source` * `builder_workflow_action` - `builder_workflow_action` * `dashboard` - dashboard * `dashboard_data_source` - `dashboard_data_source` * `dashboard_widget` - `dashboard_widget` * `automation` - automation * `automation_workflow` - `automation_workflow` * `automation_node` - `automation_node` * `team` - team * `team_subject` - `team_subject` * `license` - license
- `subject`: The structure of the subject field depends on the subject typereturned and will have additional fields accordingly
- `subject_id`: The subject ID.

### Page

SDK operations: `create`, `update`.

Key fields to recognise:

- `graph`: A JSON serialized graph containing the points and edges.
- `name`: The name of the parameter.
- `order`: Lowest first.
- `role_type`: Role type is used in conjunction with roles to control access to this page. * `allow_all` - Allow All * `allow_all_except` - Allow All Except * `disallow_all_except` - Disallow All Except
- `roles`: List of user roles that are associated with this page. Used in conjunction with `role_type`.

### PaginationSerializerExampleRowResponseSerializerWithUser

SDK operations: `load`.

Key fields to recognise:

- `count`: The total amount of results.
- `next`: URL to the next page.
- `previous`: URL to the previous page.

### PaginationSerializerLinkRowValue

SDK operations: `load`.

Key fields to recognise:

- `count`: The total amount of results.
- `next`: URL to the next page.
- `previous`: URL to the previous page.

### PaginationSerializerNotificationRecipient

SDK operations: `load`.

Key fields to recognise:

- `count`: The total amount of results.
- `next`: URL to the next page.
- `previous`: URL to the previous page.

### PaginationSerializerRowComment

SDK operations: `load`.

Key fields to recognise:

- `count`: The total amount of results.
- `next`: URL to the next page.
- `previous`: URL to the previous page.

### PaginationSerializerTrashContent

SDK operations: `load`.

Key fields to recognise:

- `count`: The total amount of results.
- `next`: URL to the next page.
- `previous`: URL to the previous page.

### PaginationSerializerWithGalleryViewFieldOptionsExampleRow

SDK operations: `load`.

Key fields to recognise:

- `count`: The total amount of results.
- `field_options`: An object containing the field id as key and the properties related to view as value.
- `next`: URL to the next page.
- `previous`: URL to the previous page.
- `row_metadata`: An object keyed by row id with a value being an object containing additional metadata about that row. A row might not have metadata and will not be present as a key if so.

### PaginationSerializerWithGridViewFieldOptionsExampleRow

SDK operations: `load`.

Key fields to recognise:

- `count`: The total amount of results.
- `field_options`: An object containing the field id as key and the properties related to view as value.
- `next`: URL to the next page.
- `previous`: URL to the previous page.
- `row_metadata`: An object keyed by row id with a value being an object containing additional metadata about that row. A row might not have metadata and will not be present as a key if so.

### PaginationSerializerWithTimelineViewFieldOptionsExampleRow

SDK operations: `load`.

Key fields to recognise:

- `count`: The total amount of results.
- `field_options`: An object containing the field id as key and the properties related to view as value.
- `next`: URL to the next page.
- `previous`: URL to the previous page.
- `row_metadata`: An object keyed by row id with a value being an object containing additional metadata about that row. A row might not have metadata and will not be present as a key if so.

### PasswordFieldAuthentication

SDK operations: `create`.

Key fields to recognise:

- `field_id`: The field where to check the password for.
- `is_correct`: Indicates whether the provided password is correct.
- `password`: The password to check.
- `row_id`: The row where to check the password for.

### PeriodicDataSyncInterval

SDK operations: `load`, `update`.

Key fields to recognise:

- `automatically_deactivated`: Indicates whether the periodic data sync has been deactivated.
- `interval`: * `MANUAL` - MANUAL * `DAILY` - DAILY * `HOURLY` - HOURLY

### Permission

SDK operations: `list`.

Key fields to recognise:

- `name`: The permission manager name.
- `permissions`: The content of the permission object for this permission manager.

### PublicBuilderWorkflowActionTypeBuilderWorkflowAction

SDK operations: `list`.

### PublicFormView

SDK operations: `list`.

Key fields to recognise:

- `condition_type`: Indicates whether all (AND) or any (OR) of the conditions should match before shown. * `AND` - And * `OR` - Or
- `description`: The description that is displayed at the beginning of the form.
- `field`: The properties of the related field. These can be used to construct the correct input. Additional properties could be added depending on the field type.
- `field_component`: Indicates which field input component is used in the form. The value is only used in the frontend, and can differ per field.
- `name`: If provided, then this value will be visible above the field input.

### PublicPaginationSerializerWithGalleryViewFieldOptions

SDK operations: `list`.

Key fields to recognise:

- `field_1`: This field represents the `text` field. The number in `field_1` is in a normal request or response the id of the field.
- `field_10`: This field represents the `last_modified_by` field. The number in `field_10` is in a normal request or response the id of the field.
- `field_11`: This field represents the `created_on` field. The number in `field_11` is in a normal request or response the id of the field.
- `field_12`: This field represents the `created_by` field. The number in `field_12` is in a normal request or response the id of the field.
- `field_13`: This field represents the `duration` field. The number in `field_13` is in a normal request or response the id of the field. The provided value can be a string in one of the available formats or a number representing the duration in seconds. In any case, the value will be rounded to match the field&#39;s duration format.

### PublicPaginationSerializerWithGridViewFieldOptionsExample

SDK operations: `list`.

Key fields to recognise:

- `field_1`: This field represents the `text` field. The number in `field_1` is in a normal request or response the id of the field.
- `field_10`: This field represents the `last_modified_by` field. The number in `field_10` is in a normal request or response the id of the field.
- `field_11`: This field represents the `created_on` field. The number in `field_11` is in a normal request or response the id of the field.
- `field_12`: This field represents the `created_by` field. The number in `field_12` is in a normal request or response the id of the field.
- `field_13`: This field represents the `duration` field. The number in `field_13` is in a normal request or response the id of the field. The provided value can be a string in one of the available formats or a number representing the duration in seconds. In any case, the value will be rounded to match the field&#39;s duration format.

### PublicPaginationSerializerWithTimelineViewFieldOptions

SDK operations: `list`.

Key fields to recognise:

- `field_1`: This field represents the `text` field. The number in `field_1` is in a normal request or response the id of the field.
- `field_10`: This field represents the `last_modified_by` field. The number in `field_10` is in a normal request or response the id of the field.
- `field_11`: This field represents the `created_on` field. The number in `field_11` is in a normal request or response the id of the field.
- `field_12`: This field represents the `created_by` field. The number in `field_12` is in a normal request or response the id of the field.
- `field_13`: This field represents the `duration` field. The number in `field_13` is in a normal request or response the id of the field. The provided value can be a string in one of the available formats or a number representing the duration in seconds. In any case, the value will be rounded to match the field&#39;s duration format.

### PublicViewAuth

SDK operations: `create`.

### PublicViewInfo

SDK operations: `list`.

Key fields to recognise:

- `db_index`: If true, then an index will be added to the Baserow field to increase lookup and filter speed. Note that this comes at a performance cost when creating the row and updating the cell.
- `description`: Field description
- `field_constraints`: The constraints applied to this field.
- `immutable_properties`: Indicates whether the field properties are immutable. If true, then it won&#39;t be possible to change the properties and the type via the API.
- `immutable_type`: Indicates whether the field type is immutable. If true, then it won&#39;t be possible to change the field type via the API.

### RelatedField

SDK operations: `remove`.

### RowComment

SDK operations: `create`, `remove`, `update`.

Key fields to recognise:

- `message`: The rich text comment content.
- `row_id`: The id of the row the comment is for.
- `table_id`: The table the row this comment is for is found in.
- `user_id`: The user who made the comment.

### RowHistory

Results: No response body.

SDK operations: `list`.

Key fields to recognise:

- `action_command_type`: The type of command that was performed. * `DO` - DO * `UNDO` - UNDO * `REDO` - REDO
- `action_type`: The type of the action that was performed.
- `after`: The mapping between `field_ids` and values for the row after the action was performed.
- `before`: The mapping between `field_ids` and values for the row before the action was performed.
- `fields_metadata`: The metadata of the fields that were changed.

### SecureFileServe

SDK operations: `load`.

### Setting

SDK operations: `load`, `update`.

Key fields to recognise:

- `account_deletion_grace_delay`: Number of days after the last login for an account pending deletion to be deleted
- `allow_global_workspace_creation`: Indicates whether all users can create workspaces, or just staff.
- `allow_new_signups`: Indicates whether new users can create a new account when signing up.
- `allow_reporting_abuse`: Indicates whether anonymous visitors can report publicly shared resources, like views and forms, for abuse.
- `allow_reset_password`: Indicates whether users can request a password reset link.

### Snapshot

Results: No response body.

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `error_code`: A machine readable error code indicating why the job failed.
- `human_readable_error`: A human readable error message indicating what went wrong.
- `progress_percentage`: A percentage indicating how far along the job is. 100 means that it&#39;s finished.
- `state`: Indicates the state of the import job.
- `type`: The type of the job.

### Table

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `active`: Indicates whether the web hook is active. When a webhook has failed multiple times, it will automatically be deactivated.
- `calls`: All the calls that this webhook made.
- `data`: A list of rows that needs to be created as initial table data.
- `event_config`: A list containing the addition event options.
- `events`: A list containing the events that will trigger this webhook.

### TableWebhook

SDK operations: `load`, `update`.

Key fields to recognise:

- `active`: Indicates whether the web hook is active. When a webhook has failed multiple times, it will automatically be deactivated.
- `calls`: All the calls that this webhook made.
- `event_config`: A list containing the addition event options.
- `events`: A list containing the events that will trigger this webhook.
- `failed_triggers`: The amount of failed webhook calls.

### TableWebhookTestCall

SDK operations: `create`.

Key fields to recognise:

- `event_type`: The event type that must be used for the test call.
- `headers`: The additional headers as an object where the key is the name and the value the value.
- `is_unreachable`: Indicates whether the provided URL could be reached.
- `request`: A text copy of the request headers and body.
- `request_method`: The request method that be used when the event occurs.

### TableWithoutDataSync

SDK operations: `list`.

Key fields to recognise:

- `order`: Lowest first.

### Team

Results: No response body.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `default_role`: The uid of the role this team has in its workspace.
- `name`: A human friendly name for this team.
- `subject_count`: The amount of subjects (for example users) that are currently assigned to this team.
- `subject_sample`: A sample, by default 10, of the most recent subjects to join this team.
- `subjects`: An array of subject ID/type objects to be used during team create and update.

### TeamSubject

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `subject_id`: The unique subject ID.
- `subject_type`: Returns the TeamSubject&#39;s `subject_type` natural key. :param obj: The TeamSubject record. :return: The subject&#39;s content type natural key.
- `subject_user_email`: The user subject&#39;s email address.
- `team`: The team this subject belongs to.

### Template

SDK operations: `create`, `list`.

Key fields to recognise:

- `error_code`: A machine readable error code indicating why the job failed.
- `human_readable_error`: A human readable error message indicating what went wrong.
- `progress_percentage`: A percentage indicating how far along the job is. 100 means that it&#39;s finished.
- `state`: Indicates the state of the import job.
- `type`: The type of the job.

### Token

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `key`: The unique token key that can be used to authorize for the table row endpoints.
- `name`: The human readable name of the database token for the user.
- `permissions`: Indicates per operation which permissions the database token has within the whole workspace. If the value of for example `create` is `true`, then the token can create rows in all tables related to the workspace. If a list is provided with for example `[[&quot;table&quot;, 1]]` then the token only has create permissions for the table with id 1. Same goes for if a database references is provided. `[[&#39;database&#39;, 1]]` means create permissions for all tables in the database with id 1. Example: ```json &#123; &quot;create&quot;: true// Allows creating rows in all tables. // Allows reading rows from database 1 and table 10. &quot;read&quot;: [[&quot;database&quot;, 1], [&quot;table&quot;, 10]], &quot;update&quot;: false // Denies updating rows in all tables. &quot;delete&quot;: [] // Denies deleting rows in all tables. &#125; ```
- `rotate_key`: Indicates if a new key must be generated.
- `workspace`: Only the tables of the workspace can be accessed.

### Trash

Results: No response body.

SDK operations: `list`, `remove`, `update`.

### TwoFactorAuthTypeTwoFactorAuth

SDK operations: `create`, `load`.

### Type

SDK operations: `create`.

Key fields to recognise:

- `date_force_timezone`: Force a timezone for the field overriding user profile settings.
- `date_format`: EU (day/month/year), US (month/day/year), or ISO (year-month-day) * `EU` - European (D/M/Y) * `US` - US (M/D/Y) * `ISO` - ISO (Y-M-D)
- `date_include_time`: Indicates if the field also includes a time.
- `date_show_tzinfo`: Indicates if the time zone should be shown.
- `date_time_format`: 24 (14:30) or 12 (02:30 PM) * `24` - 24 hour * `12` - 12 hour

### UniqueRowValue

SDK operations: `list`.

### UpdateFieldPermission

SDK operations: `load`, `update`.

Key fields to recognise:

- `allow_in_forms`: Whether to allow this field to be shown in forms. Default is False. This setting is only relevant if the role is not &#39;EDITOR&#39;.
- `can_write_values`: Whether the user can write values to this field.
- `field_id`: The ID of the field whose permissions were updated.
- `role`: The role required to update the data for this field. * `ADMIN` - Admin * `BUILDER` - Builder * `EDITOR` - Editor * `CUSTOM` - Custom * `NOBODY` - Nobody

### User

Results: No response body.

SDK operations: `create`, `list`, `update`.

Key fields to recognise:

- `authenticate`: Indicates whether an authentication JWT should be generated and be included in the response.
- `captcha_token`: The captcha response token, required when captcha is enabled.
- `email`: The email address of the user that the invitation is meant for. Only a user with that email address can accept it.
- `is_active`: Designates whether this user should be treated as active. Set this to false instead of deleting accounts.
- `is_staff`: Designates whether this user is an admin and has access to all workspaces and Baserow&#39;s admin areas.

### UserFile

SDK operations: `create`.

### UserSource

Results: No response body.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `RelayState`: The frontend URL where redirect the authenticated user.
- `SAMLResponse`: The encoded SAML response from the IdP.
- `access_token`: &#39;`access_token`&#39; can be used to authorize for other endpoints that require authorization. This token will be valid for 10 minutes.

### UserSourceUserSource

SDK operations: `update`.

### UserSourceUserSourceRole

SDK operations: `load`.

### UserWorkspaceInvitation

SDK operations: `load`.

Key fields to recognise:

- `email`: The email address of the user that the invitation is meant for. Only a user with that email address can accept it.

### UsersPerUserSource

SDK operations: `load`.

### View

SDK operations: `load`, `update`.

Key fields to recognise:

- `allow_public_export`: Indicates whether it&#39;s allowed to export a publicly shared view.
- `filter_type`: Indicates whether all the rows should apply to all filters (AND) or to any filter (OR). * `AND` - And * `OR` - Or
- `filters_disabled`: Allows users to see results unfiltered while still keeping the filters saved for the view.
- `order`: Lowest first.
- `public_view_has_password`: Indicates whether the public view is password protected or not. :return: True if the public view is password protected, False otherwise.

### ViewDefaultValue

SDK operations: `update`.

### ViewFieldOption

SDK operations: `load`, `update`.

### ViewFilter

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `field`: The field of which the value must be compared to the filter value.
- `group`: The id of the filter group this filter belongs to. If this is null, the filter is not part of a filter group.
- `preload_values`: Can contain unique preloaded values per filter. This is for example used by the `link_row_has` filter to communicate the display name if a value is provided.
- `type`: Indicates how the field&#39;s value must be compared to the filter&#39;s value. The filter is always in this order `field` `type` `value` (example: `field_1` `contains` `Test`).
- `value`: The filter value that must be compared to the field&#39;s value.

### ViewFilterGroup

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `filter_type`: Indicates whether all the rows should apply to all filters (AND) or to any filter (OR) in the group to be shown. * `AND` - And * `OR` - Or
- `view`: The view to which the filter group applies to. Each view can have its own filter groups.

### ViewGroupBy

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `field`: The field that must be grouped by.
- `order`: Indicates the sort order direction. ASC (Ascending) is from A to Z and DESC (Descending) is from Z to A. * `ASC` - Ascending * `DESC` - Descending
- `priority`: Position of this group by in the ordering chain. The group by with the lowest priority is applied first.
- `type`: Indicates the sort type. Will automatically fall back to `default` if incompatible with field type.
- `view`: The view to which the group by applies. Each view can have his own group bys.

### ViewSort

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `field`: The field that must be sorted on.
- `order`: Indicates the sort order direction. ASC (Ascending) is from A to Z and DESC (Descending) is from Z to A. * `ASC` - Ascending * `DESC` - Descending
- `priority`: Position of this sorting in the ordering chain. The sorting with the lowest priority is applied first.
- `type`: Indicates the sort type. Will automatically fall back to `default` if incompatible with field type.
- `view`: The view to which the sort applies. Each view can have his own sortings.

### ViewView

SDK operations: `create`, `load`.

### Workspace

Results: No response body.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `base_url`: The base URL where the user can publicly accept his invitation.
- `captcha_token`: The captcha response token, required when captcha is enabled.
- `email`: The email address of the user that the invitation is meant for. Only a user with that email address can accept it.
- `generative_ai_models_enabled`: Generative AI models available in this workspace.
- `has_more`: Whether there are more results available for pagination

### WorkspaceInvitation

Results: No response body.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `email`: The email address of the user that the invitation is meant for. Only a user with that email address can accept it.
- `permissions`: The permissions that the user is going to get within the workspace after accepting the invitation.
- `workspace`: The workspace that the user will get access to once the invitation is accepted.

### WorkspaceStructure

SDK operations: `load`.

### WorkspaceUser

SDK operations: `update`.

Key fields to recognise:

- `email`: User email.
- `name`: User defined name.
- `permissions`: The permissions that the user has within the workspace.
- `to_be_deleted`: True if user account is pending deletion.
- `user_id`: The user that has access to the workspace.

### WorkspaceUserWorkspace

SDK operations: `create`.

Key fields to recognise:

- `generative_ai_models_enabled`: Generative AI models available in this workspace.
- `id`: Workspace id.
- `name`: Workspace name.
- `order`: The requesting user&#39;s order within the workspace users.
- `permissions`: The requesting user&#39;s permissions for the workspace.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| AbuseReport | `create` | `POST /api/abuse-reports/` | Not required |
| Admin | `create` | `POST /api/licenses/{id}/remove-all-users/` | Required |
| Admin | `create` | `POST /api/admin/users/impersonate/` | Required |
| Admin | `create` | `POST /api/licenses/` | Required |
| Admin | `list` | `GET /api/admin/workspaces/` | Required |
| Admin | `list` | `GET /api/licenses/` | Required |
| Admin | `remove` | `DELETE /api/licenses/{id}/{user_id}/` | Required |
| Admin | `remove` | `DELETE /api/licenses/{id}/` | Required |
| Admin | `remove` | `DELETE /api/admin/users/{user_id}/` | Required |
| Admin | `remove` | `DELETE /api/admin/users/{user_id}/two-factor-auth/` | Required |
| Admin | `remove` | `DELETE /api/admin/workspaces/{workspace_id}/` | Required |
| AdminDashboard | `list` | `GET /api/admin/dashboard/` | Required |
| AdminDataScanner | `create` | `POST /api/admin/data-scanner/scans/{scan_id}/trigger/` | Required |
| AdminDataScanner | `create` | `POST /api/admin/data-scanner/results/export/` | Required |
| AdminDataScanner | `list` | `GET /api/admin/data-scanner/results/` | Required |
| AdminDataScanner | `remove` | `DELETE /api/admin/data-scanner/results/{result_id}/` | Required |
| AdminDataScanner | `remove` | `DELETE /api/admin/data-scanner/scans/{scan_id}/` | Required |
| AdminView | `create` | `POST /api/database/admin/views/{view_id}/rotate-slug/` | Required |
| AdminView | `list` | `GET /api/database/admin/views/` | Required |
| AdminView | `update` | `PATCH /api/database/admin/views/{view_id}/` | Required |
| AdminWorkspaceOption | `list` | `GET /api/admin/workspaces/options/` | Required |
| Agent | `create` | `POST /api/agents/workspace/{workspace_id}/` | Required |
| Agent | `remove` | `DELETE /api/agents/{agent_id}/` | Required |
| Agent | `update` | `PATCH /api/agents/{agent_id}/` | Required |
| AgentPaginationAgent | `load` | `GET /api/agents/workspace/{workspace_id}/` | Required |
| AiAssistant | `create` | `POST /assistant/chat/{chat_uuid}/cancel/` | Required |
| AiAssistant | `create` | `POST /assistant/chat/{chat_uuid}/messages/` | Required |
| AiAssistant | `remove` | `DELETE /assistant/chat/{chat_uuid}/cancel/` | Required |
| AiAssistant | `remove` | `DELETE /assistant/chat/{chat_uuid}/messages/` | Required |
| AiAssistant | `update` | `PUT /assistant/messages/{message_id}/feedback/` | Required |
| AiProvider | `create` | `POST /api/ai-providers/` | Required |
| AiProvider | `list` | `GET /api/ai-providers/` | Required |
| AiProvider | `remove` | `DELETE /api/ai-providers/{provider_id}/` | Required |
| AiProvider | `remove` | `DELETE /api/ai-providers/models/{model_id}/` | Required |
| AiProvider | `update` | `PATCH /api/ai-providers/{provider_id}/` | Required |
| AiProviderFeatureSetting | `list` | `GET /api/ai-providers/features/` | Required |
| AiProviderFeatureSetting | `update` | `PUT /api/ai-providers/features/{feature_type}/` | Required |
| AiProviderModel | `create` | `POST /api/ai-providers/{provider_id}/models/` | Required |
| AiProviderModel | `update` | `PATCH /api/ai-providers/models/{model_id}/` | Required |
| AiProviderModelDiscovery | `list` | `GET /api/ai-providers/models/discover/` | Required |
| AiProviderModelUsageEntry | `list` | `GET /api/ai-providers/models/{model_id}/usage/` | Required |
| AiProviderModelsTest | `create` | `POST /api/ai-providers/models/test/` | Required |
| AiProviderType | `list` | `GET /api/ai-providers/types/` | Required |
| Application | `create` | `POST /api/applications/{application_id}/duplicate/async/` | Required |
| Application | `create` | `POST /api/applications/workspace/{workspace_id}/order/` | Required |
| Application | `list` | `GET /api/applications/` | Required |
| Application | `load` | `GET /api/applications/{application_id}/` | Required |
| Application | `remove` | `DELETE /api/applications/{application_id}/` | Required |
| Application | `update` | `PATCH /api/applications/{application_id}/` | Required |
| ApplicationApplication | `create` | `POST /api/applications/workspace/{workspace_id}/` | Required |
| ApplicationApplication | `load` | `GET /api/applications/workspace/{workspace_id}/` | Not required |
| AssistantChat | `list` | `GET /assistant/chat/` | Required |
| AuditLog | `create` | `POST /api/admin/audit-log/export/` | Required |
| AuditLog | `create` | `POST /api/audit-log/export/` | Required |
| AuditLog | `list` | `GET /api/admin/audit-log/` | Required |
| AuditLog | `list` | `GET /api/audit-log/` | Required |
| AuditLogActionType | `list` | `GET /api/admin/audit-log/action-types/` | Required |
| AuditLogActionType | `list` | `GET /api/audit-log/action-types/` | Required |
| AuditLogUser | `list` | `GET /api/admin/audit-log/users/` | Required |
| AuditLogUser | `list` | `GET /api/audit-log/users/` | Required |
| Auth | `create` | `POST /api/sso/saml/acs/` | See reference |
| Auth | `create` | `POST /api/two-factor-auth/disable/` | Required |
| Auth | `create` | `POST /api/two-factor-auth/verify/` | See reference |
| Auth | `load` | `GET /api/auth-provider/login-options/` | Not required |
| Auth | `load` | `GET /api/sso/saml/login-url/` | See reference |
| Auth | `load` | `GET /api/sso/saml/login/` | See reference |
| Auth | `remove` | `DELETE /api/admin/auth-provider/{auth_provider_id}/` | Required |
| AuthenticationProviderAuthProvider | `create` | `POST /api/admin/auth-provider/` | Required |
| AuthenticationProviderAuthProvider | `list` | `GET /api/admin/auth-provider/` | Required |
| AuthenticationProviderAuthProvider | `load` | `GET /api/admin/auth-provider/{auth_provider_id}/` | Required |
| AuthenticationProviderAuthProvider | `update` | `PATCH /api/admin/auth-provider/{auth_provider_id}/` | Required |
| AutomationNode | `remove` | `DELETE /api/automation/node/{node_id}/` | Required |
| AutomationNodeHistory | `list` | `GET /api/automation/workflow_histories/{workflow_history_id}/node_histories/` | Required |
| AutomationNodeResult | `load` | `GET /api/automation/node_histories/{node_history_id}/result/` | Required |
| AutomationNodeTypeAutomationNode | `create` | `POST /api/automation/node/{node_id}/duplicate/` | Required |
| AutomationNodeTypeAutomationNode | `create` | `POST /api/automation/node/{node_id}/move/` | Required |
| AutomationNodeTypeAutomationNode | `create` | `POST /api/automation/node/{node_id}/replace/` | Required |
| AutomationNodeTypeAutomationNode | `create` | `POST /api/automation/node/{node_id}/simulate-dispatch/` | Required |
| AutomationNodeTypeAutomationNode | `create` | `POST /api/automation/workflow/{workflow_id}/nodes/` | Required |
| AutomationNodeTypeAutomationNode | `list` | `GET /api/automation/workflow/{workflow_id}/nodes/` | Not required |
| AutomationNodeTypeAutomationNode | `update` | `PATCH /api/automation/node/{node_id}/` | Required |
| AutomationWorkflow | `create` | `POST /api/automation/{automation_id}/workflows/order/` | Required |
| AutomationWorkflow | `create` | `POST /api/automation/{automation_id}/workflows/` | Required |
| AutomationWorkflow | `create` | `POST /api/automation/workflows/{workflow_id}/duplicate/async/` | Required |
| AutomationWorkflow | `create` | `POST /api/automation/workflows/{workflow_id}/publish/async/` | Required |
| AutomationWorkflow | `create` | `POST /api/automation/workflows/{workflow_id}/test/` | Required |
| AutomationWorkflow | `load` | `GET /api/automation/workflows/{workflow_id}/` | Required |
| AutomationWorkflow | `remove` | `DELETE /api/automation/workflows/{workflow_id}/` | Required |
| AutomationWorkflow | `update` | `PATCH /api/automation/workflows/{workflow_id}/` | Required |
| AutomationWorkflowHistory | `create` | `POST /api/automation/workflow_histories/{workflow_history_id}/cancel/` | Required |
| AutomationWorkflowHistory | `list` | `GET /api/automation/workflows/{workflow_id}/history/` | Required |
| BuilderDataSource | `create` | `POST /api/builder/data-source/{data_source_id}/dispatch/` | Required |
| BuilderDataSource | `create` | `POST /api/builder/domains/published/data-source/{data_source_id}/dispatch/` | Not required |
| BuilderDataSource | `create` | `POST /api/builder/domains/published/page/{page_id}/dispatch-data-sources/` | Not required |
| BuilderDataSource | `create` | `POST /api/builder/page/{page_id}/dispatch-data-sources/` | Required |
| BuilderDataSource | `load` | `GET /api/builder/data-source/{data_source_id}/record-names/` | Not required |
| BuilderDataSource | `remove` | `DELETE /api/builder/data-source/{data_source_id}/` | Required |
| BuilderDomain | `create` | `POST /api/builder/{builder_id}/domains/order/` | Required |
| BuilderDomain | `create` | `POST /api/builder/domains/{domain_id}/publish/async/` | Required |
| BuilderDomain | `load` | `GET /api/builder/domains/ask-public-domain-exists/` | Not required |
| BuilderDomain | `remove` | `DELETE /api/builder/domains/{domain_id}/` | Required |
| BuilderElement | `remove` | `DELETE /api/builder/element/{element_id}/` | Required |
| BuilderPage | `create` | `POST /api/builder/{builder_id}/pages/order/` | Required |
| BuilderPage | `create` | `POST /api/builder/pages/{page_id}/duplicate/async/` | Required |
| BuilderPage | `remove` | `DELETE /api/builder/pages/{page_id}/` | Required |
| BuilderPreview | `load` | `GET /api/builder/preview/exchange/{token}/` | Not required |
| BuilderPreviewGrant | `create` | `POST /api/builder/preview/{builder_id}/grant/` | Required |
| BuilderPreviewHandoff | `create` | `POST /api/builder/preview/handoff/` | Not required |
| BuilderPublic | `load` | `GET /api/custom_code/{builder_id}/css/public/` | Not required |
| BuilderPublic | `load` | `GET /api/custom_code/{builder_id}/js/public/` | Not required |
| BuilderPublic | `load` | `GET /api/builder/preview/{builder_id}/custom-code/css/` | Not required |
| BuilderPublic | `load` | `GET /api/builder/preview/{builder_id}/custom-code/js/` | Not required |
| BuilderWorkflowAction | `create` | `POST /api/builder/page/{page_id}/workflow_actions/order/` | Required |
| BuilderWorkflowAction | `create` | `POST /api/builder/workflow_action/{workflow_action_id}/dispatch/` | Not required |
| BuilderWorkflowAction | `remove` | `DELETE /api/builder/workflow_action/{workflow_action_id}/` | Required |
| BuilderWorkflowActionTypeBuilderWorkflowAction | `create` | `POST /api/builder/page/{page_id}/workflow_actions/` | Required |
| BuilderWorkflowActionTypeBuilderWorkflowAction | `list` | `GET /api/builder/page/{page_id}/workflow_actions/` | Not required |
| BuilderWorkflowActionTypeBuilderWorkflowAction | `update` | `PATCH /api/builder/workflow_action/{workflow_action_id}/` | Required |
| ById | `load` | `GET /api/builder/domains/published/by_id/{builder_id}/` | Not required |
| ByName | `load` | `GET /api/builder/domains/published/by_name/{domain_name}/` | Not required |
| Calendar | `load` | `GET /api/database/views/calendar/{view_id}/` | Not required |
| CalendarViewExample | `list` | `GET /api/database/views/calendar/{slug}/public/rows/` | Not required |
| Callback | `load` | `GET /api/sso/oauth2/callback/{provider_id}/` | See reference |
| Cancel | `list` | `GET /assistant/chat/{chat_uuid}/cancel/` | Required |
| ColorTypographyButtonImagePageInputTableLinklinkActiveText | `update` | `PATCH /api/builder/{builder_id}/theme/` | Required |
| CoreWebhook | `create` | `POST /api/webhooks/{webhook_uid}/` | Not required |
| CoreWebhook | `load` | `GET /api/webhooks/{webhook_uid}/` | Not required |
| CoreWebhook | `patch` | `PATCH /api/webhooks/{webhook_uid}/` | Not required |
| CoreWebhook | `remove` | `DELETE /api/webhooks/{webhook_uid}/` | Not required |
| CoreWebhook | `update` | `PUT /api/webhooks/{webhook_uid}/` | Not required |
| DashboardDataSource | `create` | `POST /api/dashboard/data-sources/{data_source_id}/dispatch/` | Required |
| DashboardWidget | `remove` | `DELETE /api/dashboard/widgets/{widget_id}/` | Required |
| DashboardWidgetWidget | `create` | `POST /api/dashboard/{dashboard_id}/widgets/` | Required |
| DashboardWidgetWidget | `list` | `GET /api/dashboard/{dashboard_id}/widgets/` | Required |
| DashboardWidgetWidget | `update` | `PATCH /api/dashboard/{dashboard_id}/widgets/layout/` | Required |
| DashboardWidgetWidget | `update` | `PATCH /api/dashboard/widgets/{widget_id}/` | Required |
| DataScan | `create` | `POST /api/admin/data-scanner/scans/` | Required |
| DataScan | `list` | `GET /api/admin/data-scanner/scans/` | Required |
| DataScan | `load` | `GET /api/admin/data-scanner/scans/{scan_id}/` | Required |
| DataScan | `update` | `PATCH /api/admin/data-scanner/scans/{scan_id}/` | Required |
| DataSync | `load` | `GET /api/database/data-sync/{data_sync_id}/` | Required |
| DataSync | `update` | `PATCH /api/database/data-sync/{data_sync_id}/` | Required |
| DatabaseTable | `create` | `POST /api/database/data-sync/{data_sync_id}/sync/async/` | Required |
| DatabaseTable | `create` | `POST /api/database/tables/database/{database_id}/async/` | Required |
| DatabaseTable | `create` | `POST /api/database/tables/database/{database_id}/order/` | Required |
| DatabaseTable | `create` | `POST /api/database/tables/{table_id}/duplicate/async/` | Required |
| DatabaseTable | `create` | `POST /api/database/tables/{table_id}/import/async/` | Required |
| DatabaseTable | `remove` | `DELETE /api/database/tables/{table_id}/` | Required |
| DatabaseTableField | `create` | `POST /api/database/field/{field_id}/workflow_actions/order/` | Required |
| DatabaseTableField | `create` | `POST /api/database/fields/{field_id}/duplicate/async/` | Required |
| DatabaseTableField | `create` | `POST /api/database/fields/{field_id}/generate-ai-field-values/` | Required |
| DatabaseTableField | `remove` | `DELETE /api/database/workflow_action/{workflow_action_id}/` | Required |
| DatabaseTableGridView | `load` | `GET /api/database/views/grid/{view_id}/aggregation/{field_id}/` | Not required |
| DatabaseTableGridView | `load` | `GET /api/database/views/grid/{slug}/public/aggregations/` | Not required |
| DatabaseTableGridView | `load` | `GET /api/database/views/grid/{view_id}/aggregations/` | Not required |
| DatabaseTableRow | `create` | `POST /api/database/rows/table/{table_id}/batch-delete/` | Required |
| DatabaseTableRow | `load` | `GET /api/database/rows/names/` | Required |
| DatabaseTableRow | `remove` | `DELETE /api/database/rows/table/{table_id}/{row_id}/` | Required |
| DatabaseTableRow | `update` | `PUT /api/row_comments/{table_id}/{row_id}/notification-mode/` | Required |
| DatabaseTableView | `create` | `POST /api/database/views/table/{table_id}/order/` | Required |
| DatabaseTableView | `load` | `GET /api/database/views/calendar/{ical_slug}.ics` | Not required |
| DatabaseTableView | `remove` | `DELETE /api/database/views/{view_id}/` | Required |
| DatabaseTableViewDecoration | `remove` | `DELETE /api/database/views/decoration/{view_decoration_id}/` | Required |
| DatabaseTableViewFilter | `remove` | `DELETE /api/database/views/filter/{view_filter_id}/` | Required |
| DatabaseTableViewFilter | `remove` | `DELETE /api/database/views/filter-group/{view_filter_group_id}/` | Required |
| DatabaseTableViewGrouping | `create` | `POST /api/database/views/{view_id}/group_bys/prioritize/` | Required |
| DatabaseTableViewGrouping | `remove` | `DELETE /api/database/views/group_by/{view_group_by_id}/` | Required |
| DatabaseTableViewSorting | `create` | `POST /api/database/views/{view_id}/sortings/prioritize/` | Required |
| DatabaseTableViewSorting | `remove` | `DELETE /api/database/views/sort/{view_sort_id}/` | Required |
| DatabaseTableWebhook | `remove` | `DELETE /api/database/webhooks/{webhook_id}/` | Required |
| DatabaseToken | `load` | `GET /api/database/tokens/check/` | Required |
| DatabaseToken | `remove` | `DELETE /api/database/tokens/{token_id}/` | Required |
| DatabaseWorkflowActionTypeDatabaseWorkflowAction | `create` | `POST /api/database/field/{field_id}/workflow_actions/` | Required |
| DatabaseWorkflowActionTypeDatabaseWorkflowAction | `list` | `GET /api/database/field/{field_id}/workflow_actions/` | Required |
| DatabaseWorkflowActionTypeDatabaseWorkflowAction | `update` | `PATCH /api/database/workflow_action/{workflow_action_id}/` | Required |
| DecoratorValueProviderTypeViewDecoration | `create` | `POST /api/database/views/{view_id}/decorations/` | Required |
| DecoratorValueProviderTypeViewDecoration | `list` | `GET /api/database/views/{view_id}/decorations/` | Required |
| DecoratorValueProviderTypeViewDecoration | `load` | `GET /api/database/views/decoration/{view_decoration_id}/` | Required |
| DecoratorValueProviderTypeViewDecoration | `update` | `PATCH /api/database/views/decoration/{view_decoration_id}/` | Required |
| Dispatch | `create` | `POST /api/database/field/{field_id}/workflow_actions/dispatch/` | Required |
| Domain | `create` | `POST /api/builder/{builder_id}/domains/` | Required |
| Domain | `list` | `GET /api/builder/{builder_id}/domains/` | Required |
| Domain | `update` | `PATCH /api/builder/domains/{domain_id}/` | Required |
| Duplicate | `create` | `POST /api/builder/element/{element_id}/duplicate/` | Required |
| Element | `create` | `POST /api/builder/page/{page_id}/elements/` | Required |
| Element | `list` | `GET /api/builder/domains/published/page/{page_id}/elements/` | Not required |
| Element | `list` | `GET /api/builder/page/{page_id}/elements/` | Not required |
| Element | `update` | `PATCH /api/builder/element/{element_id}/` | Required |
| ElementTypeElement | `update` | `PATCH /api/builder/element/{element_id}/move/` | Required |
| Email | `create` | `POST /api/_health/email/` | Required |
| ExampleBatchRow | `create` | `POST /api/database/rows/table/{table_id}/batch/` | Required |
| ExampleBatchUpdateRow | `update` | `PATCH /api/database/rows/table/{table_id}/batch/` | Required |
| ExamplePublicRowResponseSerializerWithUserFieldName | `load` | `GET /api/database/views/{slug}/row/{row_id}/` | Not required |
| ExampleRow | `create` | `POST /api/database/views/grid/{view_id}/` | Required |
| ExampleRow | `load` | `GET /api/database/views/form/{slug}/edit-row/{row_token}/` | Not required |
| ExampleRowResponseSerializerWithUserFieldName | `create` | `POST /api/database/rows/table/{table_id}/` | Required |
| ExampleRowResponseSerializerWithUserFieldName | `list` | `GET /api/database/rows/table/{table_id}/{row_id}/adjacent/` | Required |
| ExampleRowResponseSerializerWithUserFieldName | `load` | `GET /api/database/rows/table/{table_id}/{row_id}/` | Required |
| ExampleRowResponseSerializerWithUserFieldName | `update` | `PATCH /api/database/rows/table/{table_id}/{row_id}/` | Required |
| ExampleRowResponseSerializerWithUserFieldName | `update` | `PATCH /api/database/rows/table/{table_id}/{row_id}/move/` | Required |
| Export | `list` | `GET /api/workspaces/{workspace_id}/export/` | Required |
| Export | `load` | `GET /api/database/export/{job_id}/` | Required |
| ExportJob | `create` | `POST /api/database/view/{slug}/export-public-view/` | Not required |
| ExportJob | `create` | `POST /api/database/export/table/{table_id}/` | Required |
| ExportJob | `load` | `GET /api/database/view/get-public-view-export/{job_id}/` | Not required |
| Field | `load` | `GET /api/database/fields/{field_id}/` | Required |
| Field | `update` | `PATCH /api/database/fields/{field_id}/` | Required |
| FieldField | `create` | `POST /api/database/fields/table/{table_id}/change-primary-field/` | Required |
| FieldField | `load` | `GET /api/database/fields/table/{table_id}/` | Not required |
| FieldFieldSerializerWithRelatedField | `create` | `POST /api/database/fields/table/{table_id}/` | Required |
| FieldPermissionSubjectOption | `list` | `GET /api/field-permissions/{field_id}/subjects/` | Required |
| FieldRule | `create` | `POST /api/database/field-rules/{table_id}/` | Required |
| FieldRule | `load` | `GET /api/database/field-rules/{table_id}/` | Required |
| FieldRule | `remove` | `DELETE /api/database/field-rules/{table_id}/rule/{rule_id}/` | Required |
| FieldRulesResponseFieldRule | `update` | `PUT /api/database/field-rules/{table_id}/rule/{rule_id}/` | Required |
| FormViewSubmitted | `create` | `POST /api/database/views/form/{slug}/submit/` | Not required |
| FormViewSubmitted | `update` | `PATCH /api/database/views/form/{slug}/edit-row/{row_token}/` | Not required |
| Full | `load` | `GET /api/_health/full/` | Required |
| GenerateFormulaWithAi | `create` | `POST /api/database/fields/table/{table_id}/generate-ai-formula/` | Required |
| GridViewGroupByData | `list` | `GET /api/database/views/grid/{slug}/public/group-by-data/` | Not required |
| GridViewGroupByData | `list` | `GET /api/database/views/grid/{view_id}/group-by-data/` | Not required |
| Health | `load` | `GET /api/_health/celery-queue/` | Not required |
| InboundEmail | `create` | `POST /api/inbound-email/` | Not required |
| Install | `create` | `POST /api/templates/install/{workspace_id}/{template_id}/` | Required |
| InstanceId | `load` | `GET /api/settings/instance-id/` | Required |
| Integration | `create` | `POST /api/application/{application_id}/integrations/` | Required |
| Integration | `list` | `GET /api/application/{application_id}/integrations/` | Not required |
| Integration | `remove` | `DELETE /api/integration/{integration_id}/` | Required |
| Integration | `update` | `PATCH /api/integration/{integration_id}/` | Required |
| IntegrationIntegration | `update` | `PATCH /api/integration/{integration_id}/move/` | Required |
| IntegrationServiceDashboardDataSource | `list` | `GET /api/dashboard/{dashboard_id}/data-sources/` | Required |
| IntegrationServiceDashboardDataSource | `update` | `PATCH /api/dashboard/data-sources/{data_source_id}/` | Required |
| IntegrationServiceDataSource | `create` | `POST /api/builder/page/{page_id}/data-sources/` | Required |
| IntegrationServiceDataSource | `list` | `GET /api/builder/page/{page_id}/data-sources/` | Not required |
| IntegrationServiceDataSource | `update` | `PATCH /api/builder/data-source/{data_source_id}/move/` | Required |
| IntegrationServiceDataSource | `update` | `PATCH /api/builder/data-source/{data_source_id}/` | Required |
| IntegrationServicePublicDataSource | `list` | `GET /api/builder/domains/published/page/{page_id}/data_sources/` | Not required |
| InvalidRow | `list` | `GET /api/database/field-rules/{table_id}/invalid-rows/` | Required |
| Job | `create` | `POST /api/snapshots/{snapshot_id}/restore/` | Required |
| Job | `create` | `POST /api/jobs/` | Required |
| Job | `list` | `GET /api/jobs/` | Required |
| Job | `load` | `GET /api/jobs/{job_id}/` | Required |
| JobTypeJob | `create` | `POST /api/jobs/{job_id}/cancel/` | Required |
| Kanban | `load` | `GET /api/database/views/kanban/{view_id}/` | Not required |
| KanbanViewExample | `list` | `GET /api/database/views/kanban/{slug}/public/rows/` | Not required |
| LastViewedItem | `list` | `GET /api/last-viewed/items/` | Required |
| License | `create` | `POST /api/licenses/{id}/{user_id}/` | Required |
| License | `load` | `GET /api/licenses/{id}/` | Required |
| LicenseUser | `create` | `POST /api/licenses/{id}/fill-seats/` | Required |
| LicenseUserLookup | `list` | `GET /api/licenses/{id}/lookup-users/` | Required |
| LicenseWithUser | `list` | `GET /api/licenses/{id}/check/` | Required |
| ListDataSyncProperty | `create` | `POST /api/database/data-sync/database/{database_id}/properties/` | Required |
| ListDataSyncProperty | `list` | `GET /api/database/data-sync/{data_sync_id}/properties/` | Required |
| Login | `load` | `GET /api/sso/oauth2/login/{provider_id}/` | See reference |
| McpEndpoint | `create` | `POST /api/mcp/endpoints/` | Required |
| McpEndpoint | `list` | `GET /api/mcp/endpoints/` | Required |
| McpEndpoint | `load` | `GET /api/mcp/endpoint/{endpoint_id}/` | Required |
| McpEndpoint | `remove` | `DELETE /api/mcp/endpoint/{endpoint_id}/` | Required |
| McpEndpoint | `update` | `PATCH /api/mcp/endpoint/{endpoint_id}/` | Required |
| Message | `list` | `GET /assistant/chat/{chat_uuid}/messages/` | Required |
| Notification | `create` | `POST /api/notifications/{workspace_id}/mark-all-as-read/` | Required |
| Notification | `remove` | `DELETE /api/notifications/{workspace_id}/` | Required |
| Notification | `update` | `PATCH /api/notifications/{workspace_id}/{notification_id}/` | Required |
| OnboardingPromptSuggestion | `create` | `POST /assistant/onboarding/prompt-suggestions/` | Required |
| OpenApiRoleAssignment | `create` | `POST /api/role/{workspace_id}/` | Required |
| OpenApiRoleAssignment | `create` | `POST /api/role/{workspace_id}/batch/` | Required |
| OpenApiRoleAssignment | `load` | `GET /api/role/{workspace_id}/` | Required |
| Page | `create` | `POST /api/builder/{builder_id}/pages/` | Required |
| Page | `update` | `PATCH /api/builder/pages/{page_id}/` | Required |
| PaginationSerializerExampleRowResponseSerializerWithUser | `load` | `GET /api/database/rows/table/{table_id}/` | Required |
| PaginationSerializerLinkRowValue | `load` | `GET /api/database/views/{slug}/link-row-field-lookup/{field_id}/` | Not required |
| PaginationSerializerNotificationRecipient | `load` | `GET /api/notifications/{workspace_id}/` | Required |
| PaginationSerializerRowComment | `load` | `GET /api/row_comments/{table_id}/{row_id}/` | Required |
| PaginationSerializerTrashContent | `load` | `GET /api/trash/workspace/{workspace_id}/` | Required |
| PaginationSerializerWithGalleryViewFieldOptionsExampleRow | `load` | `GET /api/database/views/gallery/{view_id}/` | Not required |
| PaginationSerializerWithGridViewFieldOptionsExampleRow | `load` | `GET /api/database/views/grid/{view_id}/` | Not required |
| PaginationSerializerWithTimelineViewFieldOptionsExampleRow | `load` | `GET /api/database/views/timeline/{view_id}/` | Not required |
| PasswordFieldAuthentication | `create` | `POST /api/database/fields/password-authentication/` | Required |
| PeriodicDataSyncInterval | `load` | `GET /api/data-sync/{data_sync_id}/periodic-interval/` | Required |
| PeriodicDataSyncInterval | `update` | `PATCH /api/data-sync/{data_sync_id}/periodic-interval/` | Required |
| Permission | `list` | `GET /api/workspaces/{workspace_id}/permissions/` | Required |
| PublicBuilderWorkflowActionTypeBuilderWorkflowAction | `list` | `GET /api/builder/domains/published/page/{page_id}/workflow_actions/` | Not required |
| PublicFormView | `list` | `GET /api/database/views/form/{slug}/submit/` | Not required |
| PublicPaginationSerializerWithGalleryViewFieldOptions | `list` | `GET /api/database/views/gallery/{slug}/public/rows/` | Not required |
| PublicPaginationSerializerWithGridViewFieldOptionsExample | `list` | `GET /api/database/views/grid/{slug}/public/rows/` | Not required |
| PublicPaginationSerializerWithTimelineViewFieldOptions | `list` | `GET /api/database/views/timeline/{slug}/public/rows/` | Not required |
| PublicViewAuth | `create` | `POST /api/database/views/{slug}/public/auth/` | Not required |
| PublicViewInfo | `list` | `GET /api/database/views/{slug}/public/info/` | Not required |
| RelatedField | `remove` | `DELETE /api/database/fields/{field_id}/` | Required |
| RowComment | `create` | `POST /api/row_comments/{table_id}/{row_id}/` | Required |
| RowComment | `remove` | `DELETE /api/row_comments/{table_id}/comment/{comment_id}/` | Required |
| RowComment | `update` | `PATCH /api/row_comments/{table_id}/comment/{comment_id}/` | Required |
| RowHistory | `list` | `GET /api/database/rows/table/{table_id}/{row_id}/history/` | Required |
| SecureFileServe | `load` | `GET /api/files/{signed_data}` | See reference |
| Setting | `load` | `GET /api/settings/` | See reference |
| Setting | `update` | `PATCH /api/settings/update/` | Required |
| Snapshot | `create` | `POST /api/snapshots/application/{application_id}/` | Required |
| Snapshot | `load` | `GET /api/snapshots/application/{application_id}/` | Required |
| Snapshot | `remove` | `DELETE /api/snapshots/{snapshot_id}/` | Required |
| Table | `create` | `POST /api/database/data-sync/database/{database_id}/` | Required |
| Table | `create` | `POST /api/database/tables/database/{database_id}/` | Required |
| Table | `create` | `POST /api/database/webhooks/table/{table_id}/` | Required |
| Table | `load` | `GET /api/database/tables/database/{database_id}/` | Required |
| Table | `load` | `GET /api/database/tables/{table_id}/` | Required |
| Table | `load` | `GET /api/database/webhooks/table/{table_id}/` | Required |
| Table | `update` | `PATCH /api/database/tables/{table_id}/` | Required |
| TableWebhook | `load` | `GET /api/database/webhooks/{webhook_id}/` | Required |
| TableWebhook | `update` | `PATCH /api/database/webhooks/{webhook_id}/` | Required |
| TableWebhookTestCall | `create` | `POST /api/database/webhooks/table/{table_id}/test-call/` | Required |
| TableWithoutDataSync | `list` | `GET /api/database/tables/all-tables/` | Required |
| Team | `create` | `POST /api/teams/workspace/{workspace_id}/` | Required |
| Team | `load` | `GET /api/teams/{team_id}/` | Required |
| Team | `load` | `GET /api/teams/workspace/{workspace_id}/` | Required |
| Team | `remove` | `DELETE /api/teams/{team_id}/subjects/{subject_id}/` | Required |
| Team | `remove` | `DELETE /api/teams/{team_id}/` | Required |
| Team | `update` | `PUT /api/teams/{team_id}/` | Required |
| TeamSubject | `create` | `POST /api/teams/{team_id}/subjects/` | Required |
| TeamSubject | `list` | `GET /api/teams/{team_id}/subjects/` | Required |
| TeamSubject | `load` | `GET /api/teams/{team_id}/subjects/{subject_id}/` | Required |
| Template | `create` | `POST /api/templates/install/{workspace_id}/{template_id}/async/` | Required |
| Template | `list` | `GET /api/templates/` | Not required |
| Token | `create` | `POST /api/database/tokens/` | Required |
| Token | `list` | `GET /api/database/tokens/` | Required |
| Token | `load` | `GET /api/database/tokens/{token_id}/` | Required |
| Token | `update` | `PATCH /api/database/tokens/{token_id}/` | Required |
| Trash | `list` | `GET /api/trash/` | Required |
| Trash | `remove` | `DELETE /api/trash/workspace/{workspace_id}/` | Required |
| Trash | `update` | `PATCH /api/trash/restore/` | Required |
| TwoFactorAuthTypeTwoFactorAuth | `create` | `POST /api/two-factor-auth/configuration/` | Required |
| TwoFactorAuthTypeTwoFactorAuth | `load` | `GET /api/two-factor-auth/configuration/` | Required |
| Type | `create` | `POST /api/database/formula/{table_id}/type/` | Required |
| UniqueRowValue | `list` | `GET /api/database/fields/{field_id}/unique_row_values/` | Required |
| UpdateFieldPermission | `load` | `GET /api/field-permissions/{field_id}/` | Required |
| UpdateFieldPermission | `update` | `PATCH /api/field-permissions/{field_id}/` | Required |
| User | `create` | `POST /api/admin/users/` | Required |
| User | `create` | `POST /api/user/` | See reference |
| User | `create` | `POST /api/user/change-email/` | See reference |
| User | `create` | `POST /api/user/change-password/` | Required |
| User | `create` | `POST /api/user/reset-password/` | See reference |
| User | `create` | `POST /api/user/schedule-account-deletion/` | Required |
| User | `create` | `POST /api/user/send-change-email-confirmation/` | Required |
| User | `create` | `POST /api/user/send-reset-password-email/` | See reference |
| User | `create` | `POST /api/user/send-verify-email/` | Not required |
| User | `create` | `POST /api/user/token-auth/` | See reference |
| User | `create` | `POST /api/user/token-blacklist/` | See reference |
| User | `create` | `POST /api/user/token-refresh/` | See reference |
| User | `create` | `POST /api/user/token-verify/` | See reference |
| User | `create` | `POST /api/user/verify-email/` | Not required |
| User | `list` | `GET /api/admin/users/` | Required |
| User | `list` | `GET /api/user/dashboard/` | Required |
| User | `update` | `PATCH /api/user/redo/` | Required |
| User | `update` | `PATCH /api/user/undo/` | Required |
| User | `update` | `PATCH /api/admin/users/{user_id}/` | Required |
| User | `update` | `PATCH /api/user/account/` | Required |
| User | `update` | `PATCH /api/user/preferences/` | Required |
| UserFile | `create` | `POST /api/database/views/form/{slug}/upload-file/` | Not required |
| UserFile | `create` | `POST /api/user-files/upload-file/` | Required |
| UserFile | `create` | `POST /api/user-files/upload-via-url/` | Required |
| UserSource | `create` | `POST /api/application/{application_id}/user-sources/` | Required |
| UserSource | `create` | `POST /api/user-source/{user_source_id}/force-token-auth` | Required |
| UserSource | `create` | `POST /api/user-source/{user_source_id}/token-auth` | Not required |
| UserSource | `create` | `POST /api/user-source-auth-refresh/` | Not required |
| UserSource | `create` | `POST /api/user-source-token-blacklist/` | See reference |
| UserSource | `create` | `POST /api/user-source/sso/saml/acs/` | See reference |
| UserSource | `list` | `GET /api/application/{application_id}/user-sources/` | Not required |
| UserSource | `load` | `GET /api/user-source/{user_source_uid}/sso/oauth2/openid_connect/callback/` | See reference |
| UserSource | `load` | `GET /api/user-source/{user_source_uid}/sso/oauth2/openid_connect/login/` | See reference |
| UserSource | `load` | `GET /api/user-source/{user_source_uid}/sso/saml/login/` | See reference |
| UserSource | `remove` | `DELETE /api/user-source/{user_source_id}/` | Required |
| UserSource | `update` | `PATCH /api/user-source/{user_source_id}/` | Required |
| UserSourceUserSource | `update` | `PATCH /api/user-source/{user_source_id}/move/` | Required |
| UserSourceUserSourceRole | `load` | `GET /api/application/{application_id}/user-sources/roles/` | Not required |
| UserWorkspaceInvitation | `load` | `GET /api/workspaces/invitations/token/{token}/` | Not required |
| UsersPerUserSource | `load` | `GET /api/application/{application_id}/list-user-source-users/` | Required |
| View | `load` | `GET /api/database/views/{view_id}/` | Required |
| View | `update` | `PATCH /api/database/view/{view_id}/premium` | Required |
| View | `update` | `PATCH /api/database/views/{view_id}/` | Required |
| ViewDefaultValue | `update` | `PATCH /api/database/views/{view_id}/default-values/` | Required |
| ViewFieldOption | `load` | `GET /api/database/views/{view_id}/field-options/` | Not required |
| ViewFieldOption | `update` | `PATCH /api/database/views/{view_id}/field-options/` | Required |
| ViewFilter | `create` | `POST /api/database/views/{view_id}/filters/` | Required |
| ViewFilter | `list` | `GET /api/database/views/{view_id}/filters/` | Required |
| ViewFilter | `load` | `GET /api/database/views/filter/{view_filter_id}/` | Required |
| ViewFilter | `update` | `PATCH /api/database/views/filter/{view_filter_id}/` | Required |
| ViewFilterGroup | `create` | `POST /api/database/views/{view_id}/filter-groups/` | Required |
| ViewFilterGroup | `load` | `GET /api/database/views/filter-group/{view_filter_group_id}/` | Required |
| ViewFilterGroup | `update` | `PATCH /api/database/views/filter-group/{view_filter_group_id}/` | Required |
| ViewGroupBy | `create` | `POST /api/database/views/{view_id}/group_bys/` | Required |
| ViewGroupBy | `list` | `GET /api/database/views/{view_id}/group_bys/` | Required |
| ViewGroupBy | `load` | `GET /api/database/views/group_by/{view_group_by_id}/` | Required |
| ViewGroupBy | `update` | `PATCH /api/database/views/group_by/{view_group_by_id}/` | Required |
| ViewSort | `create` | `POST /api/database/views/{view_id}/sortings/` | Required |
| ViewSort | `list` | `GET /api/database/views/{view_id}/sortings/` | Required |
| ViewSort | `load` | `GET /api/database/views/sort/{view_sort_id}/` | Required |
| ViewSort | `update` | `PATCH /api/database/views/sort/{view_sort_id}/` | Required |
| ViewView | `create` | `POST /api/database/views/calendar/{view_id}/ical_slug_rotate/` | Required |
| ViewView | `create` | `POST /api/database/views/{view_id}/copy-configuration/` | Required |
| ViewView | `create` | `POST /api/database/views/{view_id}/duplicate/` | Required |
| ViewView | `create` | `POST /api/database/views/{view_id}/rotate-slug/` | Required |
| ViewView | `create` | `POST /api/database/views/table/{table_id}/` | Required |
| ViewView | `load` | `GET /api/database/views/table/{table_id}/` | Not required |
| Workspace | `create` | `POST /api/workspaces/invitations/workspace/{workspace_id}/` | Required |
| Workspace | `create` | `POST /api/workspaces/{workspace_id}/export/async/` | Required |
| Workspace | `create` | `POST /api/workspaces/{workspace_id}/import/async/` | Required |
| Workspace | `create` | `POST /api/workspaces/{workspace_id}/import/upload-file/` | Required |
| Workspace | `create` | `POST /api/workspaces/{workspace_id}/leave/` | Required |
| Workspace | `create` | `POST /api/workspaces/` | Required |
| Workspace | `create` | `POST /api/workspaces/order/` | Required |
| Workspace | `list` | `GET /api/workspaces/` | Required |
| Workspace | `load` | `GET /api/search/workspace/{workspace_id}/` | Required |
| Workspace | `load` | `GET /api/workspaces/invitations/workspace/{workspace_id}/` | Required |
| Workspace | `load` | `GET /api/workspaces/users/workspace/{workspace_id}/` | Required |
| Workspace | `remove` | `DELETE /api/workspaces/{workspace_id}/import/{resource_id}/` | Required |
| Workspace | `remove` | `DELETE /api/workspaces/{workspace_id}/` | Required |
| Workspace | `remove` | `DELETE /api/workspaces/users/{workspace_user_id}/` | Required |
| Workspace | `update` | `PATCH /api/workspaces/{workspace_id}/` | Required |
| WorkspaceInvitation | `create` | `POST /api/workspaces/invitations/{workspace_invitation_id}/reject/` | Required |
| WorkspaceInvitation | `load` | `GET /api/workspaces/invitations/{workspace_invitation_id}/` | Required |
| WorkspaceInvitation | `remove` | `DELETE /api/workspaces/invitations/{workspace_invitation_id}/` | Required |
| WorkspaceInvitation | `update` | `PATCH /api/workspaces/invitations/{workspace_invitation_id}/` | Required |
| WorkspaceStructure | `load` | `GET /api/admin/data-scanner/workspace-structure/{workspace_id}/` | Required |
| WorkspaceUser | `update` | `PATCH /api/workspaces/users/{workspace_user_id}/` | Required |
| WorkspaceUserWorkspace | `create` | `POST /api/workspaces/invitations/{workspace_invitation_id}/accept/` | Required |
| WorkspaceUserWorkspace | `create` | `POST /api/workspaces/create-initial-workspace/` | Required |

## Connect to the API

- API server: `{base}`

The default credential is sent in the `Authorization` header with the `Bearer` prefix.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `test`: In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

