// Typed models for the Baserow SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface AbuseReport {
  captcha_token?: string
  description: string
  email: string
  identifier: string
  name: string
  resource_type: string
}

export interface AbuseReportCreateData {
  captcha_token?: string
  description: string
  email: string
  identifier: string
  name: string
  resource_type: string
}

export interface Admin {
  access_token?: string
  application_count: number
  application_users: number
  application_users_taken: number
  created_on: string
  free_users: number
  free_users_count: number
  id: number
  is_active: boolean
  issued_on: string
  issued_to_email: string
  issued_to_name: string
  last_check?: string
  license: string
  license_id: string
  name: string
  product_code: string
  row_count: number
  seats: number
  seats_taken: number
  storage_usage?: number
  token?: string
  user?: Record<string, any>
  users: any[]
  valid_from: string
  valid_through: string
}

export interface AdminListMatch {
  access_token?: string
  application_count?: number
  application_users?: number
  application_users_taken?: number
  created_on?: string
  free_users?: number
  free_users_count?: number
  id?: number
  is_active?: boolean
  issued_on?: string
  issued_to_email?: string
  issued_to_name?: string
  last_check?: string
  license?: string
  license_id?: string
  name?: string
  product_code?: string
  row_count?: number
  seats?: number
  seats_taken?: number
  storage_usage?: number
  token?: string
  user?: Record<string, any>
  users?: any[]
  valid_from?: string
  valid_through?: string
}

export interface AdminCreateData {
  access_token?: string
  application_count: number
  application_users: number
  is_active: boolean
  issued_on: string
  issued_to_email: string
  issued_to_name: string
  last_check?: string
  license: string
  license_id: string
  name: string
  product_code: string
  seats: number
  storage_usage?: number
  token?: string
  user: Record<string, any>
  users: any[]
  valid_from: string
  valid_through: string
}

export interface AdminRemoveMatch {
  id: number
}

export interface AdminDashboard {
  active_users_last_24_hours: number
  active_users_last_30_days: number
  active_users_last_7_days: number
  active_users_per_day: any[]
  new_users_last_24_hours: number
  new_users_last_30_days: number
  new_users_last_7_days: number
  new_users_per_day: any[]
  previous_active_users_last_24_hours: number
  previous_active_users_last_30_days: number
  previous_active_users_last_7_days: number
  previous_new_users_last_24_hours: number
  previous_new_users_last_30_days: number
  previous_new_users_last_7_days: number
  total_applications: number
  total_users: number
  total_workspaces: number
}

export interface AdminDashboardListMatch {
  active_users_last_24_hours?: number
  active_users_last_30_days?: number
  active_users_last_7_days?: number
  active_users_per_day?: any[]
  new_users_last_24_hours?: number
  new_users_last_30_days?: number
  new_users_last_7_days?: number
  new_users_per_day?: any[]
  previous_active_users_last_24_hours?: number
  previous_active_users_last_30_days?: number
  previous_active_users_last_7_days?: number
  previous_new_users_last_24_hours?: number
  previous_new_users_last_30_days?: number
  previous_new_users_last_7_days?: number
  total_applications?: number
  total_users?: number
  total_workspaces?: number
}

export interface AdminDataScanner {
  created_on: string
  csv_column_separator?: string
  csv_first_row_header?: boolean
  database_id: string
  database_name: string
  export_charset?: string
  exported_file_name: string
  field_name: string
  filter_scan_id?: number
  first_identified_on: string
  frequency?: string
  id: number
  is_running?: boolean
  last_error?: string
  last_identified_on: string
  last_run_finished_at?: string
  last_run_started_at?: string
  list_items: string
  matched_value: string
  name: string
  pattern?: string
  results_count: string
  row_id: number
  scan_all_workspaces?: boolean
  scan_id: number
  scan_name: string
  scan_type: string
  source_database_id: string
  source_field_id: string
  source_table_id: string
  source_workspace_id: string
  table_id: number
  table_name: string
  updated_on: string
  url: string
  whole_words?: boolean
  workspace_ids: string
  workspace_name: string
}

export interface AdminDataScannerListMatch {
  ids?: string
  page?: number
  search?: string
  size?: number
  sort?: string
}

export interface AdminDataScannerCreateData {
  csv_column_separator?: string
  csv_first_row_header?: boolean
  export_charset?: string
  filter_scan_id?: number
  first_identified_on: string
  frequency?: string
  is_running?: boolean
  last_error?: string
  last_identified_on: string
  last_run_finished_at?: string
  last_run_started_at?: string
  matched_value: string
  name: string
  pattern?: string
  row_id: number
  scan_all_workspaces?: boolean
  scan_type: string
  whole_words?: boolean
}

export interface AdminDataScannerRemoveMatch {
  result_id: string
}

export interface AdminView {
  created_on: string
  database_id: number
  database_name: string
  id: number
  name: string
  owned_by_id: number
  owned_by_username: string
  ownership_type?: string
  public?: boolean
  public_view_has_password: boolean
  slug?: string
  table_id: number
  table_name: string
  type: string
  workspace_id: number
  workspace_name: string
}

export interface AdminViewListMatch {
  ids?: string
  only_public?: boolean
  page?: number
  search?: string
  size?: number
  sort?: string
  workspace_id?: number
}

export interface AdminViewCreateData {
  view_id: number
  name: string
  ownership_type?: string
  public?: boolean
  slug?: string
}

export interface AdminViewUpdateData {
  id: number
  public?: boolean
}

export interface AdminWorkspaceOption {
  id: number
  value: string
}

export interface AdminWorkspaceOptionListMatch {
  ids?: string
  page?: number
  search?: string
  size?: number
}

export interface Agent {
  created_on: string
  id: number
  last_active?: string
  name: string
  role_uid?: string
  team_ids?: any[]
  teams: any[]
  updated_on: string
  workspace_id: number
}

export interface AgentCreateData {
  workspace_id: number
  name: string
  role_uid?: string
  team_ids?: any[]
}

export interface AgentUpdateData {
  id: number
  name?: string
  role_uid?: string
  team_ids?: any[]
}

export interface AgentRemoveMatch {
  id: number
}

export interface AgentPaginationAgent {
  count: number
  next: string
  previous: string
  results: any[]
}

export interface AgentPaginationAgentLoadMatch {
  workspace_id: number
  page?: number
  search?: string
  size?: number
  sort?: string
}

export interface AiAssistant {
  content: string
  ui_context: any
}

export interface AiAssistantCreateData {
  chat_id: string
  content: string
  ui_context: any
}

export interface AiAssistantUpdateData {
  message_id: number
  content?: string
  ui_context?: any
}

export interface AiAssistantRemoveMatch {
  chat_id: string
}

export interface AiProvider {
  api_key?: string
  extra_settings?: Record<string, any>
  id?: string
  is_active?: boolean
  models?: any[]
  provider_type: string
}

export interface AiProviderListMatch {
  workspace_id?: number
}

export interface AiProviderCreateData {
  workspace_id?: number
  api_key?: string
  extra_settings?: Record<string, any>
  models?: any[]
  provider_type: string
}

export interface AiProviderUpdateData {
  id: number
  workspace_id?: number
  api_key?: string
  extra_settings?: Record<string, any>
  is_active?: boolean
}

export interface AiProviderRemoveMatch {
  id: number
  workspace_id?: number
}

export interface AiProviderFeatureSetting {
  feature_type: string
  inherited_model: any
  inherited_state: any
  mode: string
  model: any
  model_id?: number
  state: string
}

export interface AiProviderFeatureSettingListMatch {
  workspace_id?: number
}

export interface AiProviderFeatureSettingUpdateData {
  feature_type: string
  workspace_id?: number
  mode?: string
  model_id?: number
}

export interface AiProviderModel {
  feature_types?: any[]
  id: number
  is_enabled?: boolean
  last_test_at: string
  last_test_error: string
  last_test_feature_results: any[]
  last_test_status: any
  model_identifier: string
}

export interface AiProviderModelCreateData {
  id: number
  workspace_id?: number
  feature_types?: any[]
  is_enabled?: boolean
  model_identifier: string
}

export interface AiProviderModelUpdateData {
  id: number
  workspace_id?: number
  feature_types?: any[]
  is_enabled?: boolean
  model_identifier?: string
}

export interface AiProviderModelDiscovery {
  models: any[]
  supported: boolean
}

export interface AiProviderModelDiscoveryListMatch {
  provider_type: string
  workspace_id?: number
}

export interface AiProviderModelUsageEntry {
  count: number
  feature_type: string
}

export interface AiProviderModelUsageEntryListMatch {
  model_id: number
  workspace_id?: number
}

export interface AiProviderModelsTest {
  model_ids: any[]
  results: any[]
}

export interface AiProviderModelsTestCreateData {
  workspace_id?: number
  model_ids: any[]
}

export interface AiProviderType {
  extra_fields: any[]
  name: string
  type: string
  uses_api_key: boolean
}

export interface AiProviderTypeListMatch {
  workspace_id?: number
}

export interface Application {
  application_ids: any[]
  id?: string
}

export interface ApplicationLoadMatch {
  id: number
}

export interface ApplicationListMatch {
  application_ids?: any[]
  id?: string
}

export interface ApplicationCreateData {
  workspace_id: number
  application_ids: any[]

  // Selects a custom action instead of the plain create:
  //   'duplicate_async'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ApplicationUpdateData {
  id: number
  breakpoints?: any
  custom_code?: any
  description?: any
  favicon_file?: any
  login_page_id?: any
  name?: any
  scripts?: any
}

export interface ApplicationRemoveMatch {
  id: number
}

export interface ApplicationApplication {
}

export interface ApplicationApplicationLoadMatch {
  workspace_id: number
}

export interface ApplicationApplicationCreateData {
  workspace_id: number
  breakpoints?: any
  custom_code?: any
  description?: any
  favicon_file?: any
  init_with_data?: any
  login_page_id?: any
  name?: any
  scripts?: any
  type?: any
}

export interface AssistantChat {
  created_on: string
  status?: string
  title?: string
  updated_on: string
  user_id: number
  uuid?: string
  workspace_id: number
}

export interface AssistantChatListMatch {
  limit?: number
  offset?: number
  workspace_id: number
}

export interface AuditLog {
  action_type: string
  description: string
  id: number
  ip_address: string
  timestamp: string
  type: string
  user: string
  workspace: string
}

export interface AuditLogListMatch {
  action_type?: string
  from_timestamp?: string
  ids?: string
  page?: number
  size?: number
  sort?: string
  to_timestamp?: string
  user_id?: number
  workspace_id?: number
}

export interface AuditLogCreateData {
  csv_column_separator?: any
  csv_first_row_header?: any
  exclude_columns?: any
  export_charset?: any
  filter_action_type?: any
  filter_from_timestamp?: any
  filter_to_timestamp?: any
  filter_user_id?: any
  filter_workspace_id?: any

  // Selects a custom action instead of the plain create:
  //   'export' | 'export'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AuditLogActionType {
  id: string
  value: string
}

export interface AuditLogActionTypeListMatch {
  search?: string
  workspace_id?: number
}

export interface AuditLogUser {
  id: number
  value: string
}

export interface AuditLogUserListMatch {
  ids?: string
  page?: number
  search?: string
  size?: number
  workspace_id?: number
}

export interface Auth {
  RelayState: string
  SAMLResponse: string
  backup_code?: string
  code?: string
  email?: string
  password: string
}

export interface AuthLoadMatch {
  RelayState?: string
  SAMLResponse?: string
  backup_code?: string
  code?: string
  email?: string
  password?: string
}

export interface AuthCreateData {
  RelayState: string
  SAMLResponse: string
  backup_code?: string
  code?: string
  email?: string
  password: string
}

export interface AuthRemoveMatch {
  auth_provider_id: number
}

export interface AuthenticationProviderAuthProvider {
  id?: string
}

export interface AuthenticationProviderAuthProviderLoadMatch {
  id: number
}

export interface AuthenticationProviderAuthProviderListMatch {
  id?: string
}

export interface AuthenticationProviderAuthProviderCreateData {
  id?: string
}

export interface AuthenticationProviderAuthProviderUpdateData {
  id: number
}

export interface AutomationNode {
  id?: string
}

export interface AutomationNodeRemoveMatch {
  id: number
}

export interface AutomationNodeHistory {
  completed_on?: string
  destination_label: string
  destination_node_id: number
  destination_node_type: string
  edge_label: string
  id: number
  iteration: number
  iteration_path: string
  message: string
  node: number
  node_label: string
  node_type: string
  parent_node_id: number
  started_on: string
  status: string
  workflow_history: number
}

export interface AutomationNodeHistoryListMatch {
  workflow_history_id: number
}

export interface AutomationNodeResult {
  result: any
}

export interface AutomationNodeResultLoadMatch {
  node_history_id: number
}

export interface AutomationNodeTypeAutomationNode {
  id?: string
  new_type: string
  output?: string
  position?: any
  reference_node_id?: number
}

export interface AutomationNodeTypeAutomationNodeListMatch {
  workflow_id: number
}

export interface AutomationNodeTypeAutomationNodeCreateData {
  node_id: number
  id?: string
  new_type: string
  output?: string
  position?: any
  reference_node_id?: number
  type?: any
}

export interface AutomationNodeTypeAutomationNodeUpdateData {
  id: number
  label?: any
  service?: any
}

export interface AutomationWorkflow {
  allow_test_run?: boolean
  allow_test_run_until?: boolean
  automation_id: number
  created_on: string
  duplicated_automation_workflow: any
  error_code?: string
  graph?: any
  human_readable_error?: string
  id: number
  immediate_dispatch: boolean
  name: string
  notification_recipient_ids: any[]
  order: number
  original_automation_workflow: any
  progress_percentage: number
  published_on: string
  simulate_until_node_id: number
  state: string
  type: string
  updated_on: string
  workflow_ids: any[]
}

export interface AutomationWorkflowLoadMatch {
  id: number
}

export interface AutomationWorkflowCreateData {
  id: number
  allow_test_run?: boolean
  allow_test_run_until?: boolean
  error_code?: string
  graph?: any
  human_readable_error?: string
  name: string
  order: number
  progress_percentage: number
  workflow_ids: any[]
}

export interface AutomationWorkflowUpdateData {
  id: number
  allow_test_run?: boolean
  name?: string
}

export interface AutomationWorkflowRemoveMatch {
  id: number
}

export interface AutomationWorkflowHistory {
  cancellation_requested_on?: string
  completed_on?: string
  id: number
  is_test_run: boolean
  message: string
  plugin_data: Record<string, any>
  simulate_until_node?: number
  started_on: string
  status: string
  triggered_by: any
}

export interface AutomationWorkflowHistoryListMatch {
  workflow_id: number
}

export interface AutomationWorkflowHistoryCreateData {
  workflow_history_id: number
  cancellation_requested_on?: string
  completed_on?: string
  is_test_run: boolean
  message: string
  simulate_until_node?: number
  started_on: string
  status: string
}

export interface BuilderDataSource {
  "1"?: string
  "2"?: string
  id?: string
  key?: string
  metadata?: any
}

export interface BuilderDataSourceLoadMatch {
  data_source_id: number
  record_id?: string
}

export interface BuilderDataSourceCreateData {
  data_source_id: number
  "1"?: string
  "2"?: string
  id?: string
  key?: string
  metadata?: any
}

export interface BuilderDataSourceRemoveMatch {
  id: number
}

export interface BuilderDomain {
  domain_ids: any[]
  id?: string
}

export interface BuilderDomainLoadMatch {
  domain?: number
}

export interface BuilderDomainCreateData {
  builder_id: number
  domain_ids: any[]
  id?: string
}

export interface BuilderDomainRemoveMatch {
  id: number
}

export interface BuilderElement {
  id?: string
}

export interface BuilderElementRemoveMatch {
  id: number
}

export interface BuilderPage {
  created_on: string
  duplicated_page: any
  error_code?: string
  human_readable_error?: string
  id: number
  original_page: any
  page_ids: any[]
  progress_percentage: number
  state: string
  type: string
  updated_on: string
}

export interface BuilderPageCreateData {
  builder_id: number
  error_code?: string
  human_readable_error?: string
  page_ids: any[]
  progress_percentage: number
  state: string
}

export interface BuilderPageRemoveMatch {
  id: number
}

export interface BuilderPreview {
}

export interface BuilderPreviewLoadMatch {
  token: string
  redirect?: string
}

export interface BuilderPreviewGrant {
  path?: string
  url: string
}

export interface BuilderPreviewGrantCreateData {
  preview_id: string
  path?: string
}

export interface BuilderPreviewHandoff {
  builder_id: number
  expires_in: number
  preview_handoff: string
  preview_session: string
}

export interface BuilderPreviewHandoffCreateData {
  builder_id: number
  preview_handoff: string
}

export interface BuilderPublic {
}

export interface BuilderPublicLoadMatch {
  custom_code_id?: number
  type: string
  preview_id?: number
}

export interface BuilderWorkflowAction {
  element_id?: number
  id?: string
  workflow_action_ids: any[]
}

export interface BuilderWorkflowActionCreateData {
  workflow_action_id: number
  element_id?: number
  id?: string
  workflow_action_ids: any[]
}

export interface BuilderWorkflowActionRemoveMatch {
  id: number
}

export interface BuilderWorkflowActionTypeBuilderWorkflowAction {
  id?: string
}

export interface BuilderWorkflowActionTypeBuilderWorkflowActionListMatch {
  page_id: number
}

export interface BuilderWorkflowActionTypeBuilderWorkflowActionCreateData {
  page_id: number
  data_source_id?: any
  description?: any
  element_id?: any
  event?: any
  navigate_to_page_id?: any
  navigate_to_url?: any
  navigation_type?: any
  page_parameters?: any
  query_parameters?: any
  service?: any
  target?: any
  title?: any
  type?: any
}

export interface BuilderWorkflowActionTypeBuilderWorkflowActionUpdateData {
  id: number
  data_source_id?: any
  description?: any
  navigate_to_page_id?: any
  navigate_to_url?: any
  navigation_type?: any
  page_parameters?: any
  query_parameters?: any
  service?: any
  target?: any
  title?: any
  type?: any
}

export interface ById {
  id?: string
}

export interface ByIdLoadMatch {
  id: number
}

export interface ByName {
  id?: string
}

export interface ByNameLoadMatch {
  id: string
}

export interface Calendar {
  field_options: any[]
  id?: string
  row_metadata?: Record<string, any>
  rows: Record<string, any>
}

export interface CalendarLoadMatch {
  id: number
  filter?: string
  filter_type?: string
  "filter_{field}_{filter}"?: string
  from_timestamp: string
  include?: string
  limit?: number
  limit_linked_item?: number
  offset?: number
  search?: string
  search_mode?: string
  to_timestamp: string
  user_timezone?: string
}

export interface CalendarViewExample {
  hidden?: boolean
  order?: number
}

export interface CalendarViewExampleListMatch {
  calendar_id: string
  filter?: string
  filter_type?: string
  "filter_{field}_{filter}"?: string
  from_timestamp: string
  limit?: number
  limit_linked_item?: number
  offset?: number
  to_timestamp: string
  user_timezone?: string
}

export interface Callback {
  id?: string
}

export interface CallbackLoadMatch {
  id: number
  code?: string
}

export interface Cancel {
  messages: any[]
}

export interface CancelListMatch {
  chat_id: string
}

export interface ColorTypographyButtonImagePageInputTableLinklinkActiveText {
  body_font_family?: string
  body_font_size?: number
  body_font_weight?: string
  body_text_alignment?: string
  body_text_color?: string
  border_color?: string
  button_active_background_color?: string
  button_active_border_color?: string
  button_active_text_color?: string
  button_alignment?: string
  button_background_color?: string
  button_border_color?: string
  button_border_radius?: number
  button_border_size?: number
  button_font_family?: string
  button_font_size?: number
  button_font_weight?: string
  button_horizontal_padding?: number
  button_hover_background_color?: string
  button_hover_border_color?: string
  button_hover_text_color?: string
  button_text_alignment?: string
  button_text_color?: string
  button_vertical_padding?: number
  button_width?: string
  custom_colors?: any
  heading_1_font_family?: string
  heading_1_font_size?: number
  heading_1_font_weight?: string
  heading_1_text_alignment?: string
  heading_1_text_color?: string
  heading_1_text_decoration?: any[]
  heading_2_font_family?: string
  heading_2_font_size?: number
  heading_2_font_weight?: string
  heading_2_text_alignment?: string
  heading_2_text_color?: string
  heading_2_text_decoration?: any[]
  heading_3_font_family?: string
  heading_3_font_size?: number
  heading_3_font_weight?: string
  heading_3_text_alignment?: string
  heading_3_text_color?: string
  heading_3_text_decoration?: any[]
  heading_4_font_family?: string
  heading_4_font_size?: number
  heading_4_font_weight?: string
  heading_4_text_alignment?: string
  heading_4_text_color?: string
  heading_4_text_decoration?: any[]
  heading_5_font_family?: string
  heading_5_font_size?: number
  heading_5_font_weight?: string
  heading_5_text_alignment?: string
  heading_5_text_color?: string
  heading_5_text_decoration?: any[]
  heading_6_font_family?: string
  heading_6_font_size?: number
  heading_6_font_weight?: string
  heading_6_text_alignment?: string
  heading_6_text_color?: string
  heading_6_text_decoration?: any[]
  image_alignment?: string
  image_border_radius?: number
  image_constraint?: string
  image_max_height?: number
  image_max_width?: number
  input_background_color?: string
  input_border_color?: string
  input_border_radius?: number
  input_border_size?: number
  input_font_family?: string
  input_font_size?: number
  input_font_weight?: string
  input_horizontal_padding?: number
  input_text_color?: string
  input_vertical_padding?: number
  label_font_family?: string
  label_font_size?: number
  label_font_weight?: string
  label_text_color?: string
  link_active_text_color?: string
  link_active_text_decoration?: any[]
  link_default_text_decoration?: any[]
  link_font_family?: string
  link_font_size?: number
  link_font_weight?: string
  link_hover_text_color?: string
  link_hover_text_decoration?: any[]
  link_text_alignment?: string
  link_text_color?: string
  main_error_color?: string
  main_success_color?: string
  main_warning_color?: string
  page_background_color?: string
  page_background_file?: any
  page_background_mode?: string
  primary_color?: string
  secondary_color?: string
  table_border_color?: string
  table_border_radius?: number
  table_border_size?: number
  table_cell_alignment?: string
  table_cell_alternate_background_color?: string
  table_cell_background_color?: string
  table_cell_horizontal_padding?: number
  table_cell_vertical_padding?: number
  table_header_background_color?: string
  table_header_font_family?: string
  table_header_font_size?: number
  table_header_font_weight?: string
  table_header_text_alignment?: string
  table_header_text_color?: string
  table_horizontal_separator_color?: string
  table_horizontal_separator_size?: number
  table_vertical_separator_color?: string
  table_vertical_separator_size?: number
}

export interface ColorTypographyButtonImagePageInputTableLinklinkActiveTextUpdateData {
  builder_id: number
  body_font_family?: string
  body_font_size?: number
  body_font_weight?: string
  body_text_alignment?: string
  body_text_color?: string
  border_color?: string
  button_active_background_color?: string
  button_active_border_color?: string
  button_active_text_color?: string
  button_alignment?: string
  button_background_color?: string
  button_border_color?: string
  button_border_radius?: number
  button_border_size?: number
  button_font_family?: string
  button_font_size?: number
  button_font_weight?: string
  button_horizontal_padding?: number
  button_hover_background_color?: string
  button_hover_border_color?: string
  button_hover_text_color?: string
  button_text_alignment?: string
  button_text_color?: string
  button_vertical_padding?: number
  button_width?: string
  custom_colors?: any
  heading_1_font_family?: string
  heading_1_font_size?: number
  heading_1_font_weight?: string
  heading_1_text_alignment?: string
  heading_1_text_color?: string
  heading_1_text_decoration?: any[]
  heading_2_font_family?: string
  heading_2_font_size?: number
  heading_2_font_weight?: string
  heading_2_text_alignment?: string
  heading_2_text_color?: string
  heading_2_text_decoration?: any[]
  heading_3_font_family?: string
  heading_3_font_size?: number
  heading_3_font_weight?: string
  heading_3_text_alignment?: string
  heading_3_text_color?: string
  heading_3_text_decoration?: any[]
  heading_4_font_family?: string
  heading_4_font_size?: number
  heading_4_font_weight?: string
  heading_4_text_alignment?: string
  heading_4_text_color?: string
  heading_4_text_decoration?: any[]
  heading_5_font_family?: string
  heading_5_font_size?: number
  heading_5_font_weight?: string
  heading_5_text_alignment?: string
  heading_5_text_color?: string
  heading_5_text_decoration?: any[]
  heading_6_font_family?: string
  heading_6_font_size?: number
  heading_6_font_weight?: string
  heading_6_text_alignment?: string
  heading_6_text_color?: string
  heading_6_text_decoration?: any[]
  image_alignment?: string
  image_border_radius?: number
  image_constraint?: string
  image_max_height?: number
  image_max_width?: number
  input_background_color?: string
  input_border_color?: string
  input_border_radius?: number
  input_border_size?: number
  input_font_family?: string
  input_font_size?: number
  input_font_weight?: string
  input_horizontal_padding?: number
  input_text_color?: string
  input_vertical_padding?: number
  label_font_family?: string
  label_font_size?: number
  label_font_weight?: string
  label_text_color?: string
  link_active_text_color?: string
  link_active_text_decoration?: any[]
  link_default_text_decoration?: any[]
  link_font_family?: string
  link_font_size?: number
  link_font_weight?: string
  link_hover_text_color?: string
  link_hover_text_decoration?: any[]
  link_text_alignment?: string
  link_text_color?: string
  main_error_color?: string
  main_success_color?: string
  main_warning_color?: string
  page_background_color?: string
  page_background_file?: any
  page_background_mode?: string
  primary_color?: string
  secondary_color?: string
  table_border_color?: string
  table_border_radius?: number
  table_border_size?: number
  table_cell_alignment?: string
  table_cell_alternate_background_color?: string
  table_cell_background_color?: string
  table_cell_horizontal_padding?: number
  table_cell_vertical_padding?: number
  table_header_background_color?: string
  table_header_font_family?: string
  table_header_font_size?: number
  table_header_font_weight?: string
  table_header_text_alignment?: string
  table_header_text_color?: string
  table_horizontal_separator_color?: string
  table_horizontal_separator_size?: number
  table_vertical_separator_color?: string
  table_vertical_separator_size?: number
}

export interface CoreWebhook {
  id?: string
}

export interface CoreWebhookLoadMatch {
  id: string
}

export interface CoreWebhookCreateData {
  id: string
}

export interface CoreWebhookUpdateData {
  id: string
}

export interface CoreWebhookPatchData {
  id: string
}

export interface CoreWebhookRemoveMatch {
  id: string
}

export interface DashboardDataSource {
}

export interface DashboardDataSourceCreateData {
  data_source_id: number
}

export interface DashboardWidget {
  id?: string
}

export interface DashboardWidgetRemoveMatch {
  id: number
}

export interface DashboardWidgetWidget {
  id?: string
  widgets?: any[]
}

export interface DashboardWidgetWidgetListMatch {
  id: number
}

export interface DashboardWidgetWidgetCreateData {
  id: number
  default_series_chart_type?: any
  description?: any
  series_config?: any
  title?: any
  type?: any
}

export interface DashboardWidgetWidgetUpdateData {
  id: number
  widgets?: any[]
  default_series_chart_type?: any
  description?: any
  series_config?: any
  title?: any
}

export interface DataScan {
  created_on: string
  frequency?: string
  id: number
  is_running?: boolean
  last_error?: string
  last_run_finished_at?: string
  last_run_started_at?: string
  list_items: string
  name: string
  pattern?: string
  results_count: string
  scan_all_workspaces?: boolean
  scan_type: string
  source_database_id: string
  source_field_id: string
  source_table_id: string
  source_workspace_id: string
  updated_on: string
  whole_words?: boolean
  workspace_ids: string
}

export interface DataScanLoadMatch {
  id: string
}

export interface DataScanListMatch {
  ids?: string
  page?: number
  search?: string
  size?: number
  sort?: string
}

export interface DataScanCreateData {
  frequency?: string
  name: string
  pattern?: string
  scan_all_workspaces?: boolean
  scan_type: string
  whole_words?: boolean
}

export interface DataScanUpdateData {
  id: string
  frequency?: string
  name?: string
  pattern?: string
  scan_all_workspaces?: boolean
  scan_type?: string
  whole_words?: boolean
}

export interface DataSync {
  auto_add_new_properties?: boolean
  database_id: string
  delete_unmatched_rows?: boolean
  id: number
  last_error?: string
  last_sync?: string
  synced_properties: any[]
  table_id: number
  two_way_sync?: boolean
  type: string
}

export interface DataSyncLoadMatch {
  id: number
}

export interface DataSyncUpdateData {
  id: number
  auto_add_new_properties?: boolean
  delete_unmatched_rows?: boolean
  synced_properties?: any[]
  two_way_sync?: boolean
  github_issues_owner?: any
  github_issues_repo?: any
  gitlab_project_id?: any
  gitlab_url?: any
  ical_url?: any
  jira_authentication?: any
  jira_project_key?: any
  jira_url?: any
  jira_username?: any
  postgresql_database?: any
  postgresql_host?: any
  postgresql_port?: any
  postgresql_schema?: any
  postgresql_sslmode?: any
  postgresql_table?: any
  postgresql_username?: any
  source_table_id?: any
  source_table_view_id?: any
}

export interface DatabaseTable {
  configuration?: Record<string, any>
  created_on: string
  data: any[]
  data_sync: any
  database_id: number
  duplicated_table: any
  error_code?: string
  first_row_header?: boolean
  human_readable_error?: string
  id: number
  importer_type?: string
  name?: string
  original_file_name?: string
  original_table: any
  progress_percentage: number
  report: any
  state: string
  table_id?: number
  triggered_by: string
  type: string
  updated_on: string
  user_name: string
}

export interface DatabaseTableCreateData {
  data_sync_id: number
  configuration?: Record<string, any>
  data: any[]
  database_id: number
  error_code?: string
  first_row_header?: boolean
  human_readable_error?: string
  importer_type?: string
  name?: string
  original_file_name?: string
  progress_percentage: number
  report: any
  state: string
  table_id?: number

  // Selects a custom action instead of the plain create:
  //   'async' | 'order'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DatabaseTableRemoveMatch {
  id: number
}

export interface DatabaseTableField {
  created_on: string
  duplicated_field: any
  element_id?: number
  error_code?: string
  field_id: number
  human_readable_error?: string
  id: number
  is_auto_update: boolean
  only_empty?: boolean
  original_field: any
  progress_percentage: number
  row_ids?: any[]
  state: string
  type: string
  updated_on: string
  view_id?: number
  workflow_action_ids: any[]
}

export interface DatabaseTableFieldCreateData {
  field_id: number
  element_id?: number
  error_code?: string
  human_readable_error?: string
  only_empty?: boolean
  progress_percentage: number
  row_ids: any[]
  state: string
  view_id?: number
  workflow_action_ids: any[]
}

export interface DatabaseTableFieldRemoveMatch {
  workflow_action_id: number
}

export interface DatabaseTableGridView {
  field_id?: string
  total?: number
  value: any
}

export interface DatabaseTableGridViewLoadMatch {
  field_id?: number
  grid_id: number
  include?: string
  type?: string
  filter?: string
  filter_type?: string
  "filter_{field}_{filter}"?: string
  search?: string
  search_mode?: string
}

export interface DatabaseTableRow {
  id?: string
  items: any[]
  mode: string
  row_id?: string
}

export interface DatabaseTableRowLoadMatch {
  "table_{id}"?: string
}

export interface DatabaseTableRowCreateData {
  table_id: number
  send_webhook_event?: boolean
  view?: number
  items: any[]
}

export interface DatabaseTableRowUpdateData {
  row_comment_id: number
  row_id: number
  view?: number
  mode?: string
}

export interface DatabaseTableRowRemoveMatch {
  row_id: number
  table_id: number
  send_webhook_event?: boolean
  view?: number
}

export interface DatabaseTableView {
  id?: string
  view_ids: any[]
}

export interface DatabaseTableViewLoadMatch {
  ical_slug: string
}

export interface DatabaseTableViewCreateData {
  table_id: number
  view_ids: any[]
}

export interface DatabaseTableViewRemoveMatch {
  id: number
}

export interface DatabaseTableViewDecoration {
  id?: string
}

export interface DatabaseTableViewDecorationRemoveMatch {
  id: number
}

export interface DatabaseTableViewFilter {
  id?: string
}

export interface DatabaseTableViewFilterRemoveMatch {
  id: number
}

export interface DatabaseTableViewGrouping {
  view_group_by_ids: any[]
}

export interface DatabaseTableViewGroupingCreateData {
  view_id: number
  view_group_by_ids: any[]
}

export interface DatabaseTableViewGroupingRemoveMatch {
  view_group_by_id: number
}

export interface DatabaseTableViewSorting {
  view_sort_ids: any[]
}

export interface DatabaseTableViewSortingCreateData {
  view_id: number
  view_sort_ids: any[]
}

export interface DatabaseTableViewSortingRemoveMatch {
  view_sort_id: number
}

export interface DatabaseTableWebhook {
  id?: string
}

export interface DatabaseTableWebhookRemoveMatch {
  id: number
}

export interface DatabaseToken {
  id?: string
}

export interface DatabaseTokenLoadMatch {
  id: string
}

export interface DatabaseTokenRemoveMatch {
  id: number
}

export interface DatabaseWorkflowActionTypeDatabaseWorkflowAction {
  id?: string
}

export interface DatabaseWorkflowActionTypeDatabaseWorkflowActionListMatch {
  field_id: number
}

export interface DatabaseWorkflowActionTypeDatabaseWorkflowActionCreateData {
  field_id: number
  service?: any
  target?: any
  type?: any
  url?: any
}

export interface DatabaseWorkflowActionTypeDatabaseWorkflowActionUpdateData {
  id: number
  service?: any
  target?: any
  type?: any
  url?: any
}

export interface DecoratorValueProviderTypeViewDecoration {
  id?: string
}

export interface DecoratorValueProviderTypeViewDecorationLoadMatch {
  id: number
}

export interface DecoratorValueProviderTypeViewDecorationListMatch {
  view_id: number
}

export interface DecoratorValueProviderTypeViewDecorationCreateData {
  view_id: number
  order?: any
  type?: any
  value_provider_conf?: any
  value_provider_type?: any
}

export interface DecoratorValueProviderTypeViewDecorationUpdateData {
  id: number
  order?: any
  type?: any
  value_provider_conf?: any
  value_provider_type?: any
}

export interface Dispatch {
  client_actions: any
  results: any[]
  row_id: number
}

export interface DispatchCreateData {
  field_id: number
  row_id: number
}

export interface Domain {
  domain_name?: string
  id?: string
  type?: string
}

export interface DomainListMatch {
  builder_id: number
}

export interface DomainCreateData {
  builder_id: number
  domain_name?: string
  type?: string
}

export interface DomainUpdateData {
  id: number
  domain_name?: string
  type?: string
}

export interface Duplicate {
  elements: any[]
  graph: string
  workflow_actions: any[]
}

export interface DuplicateCreateData {
  element_id: number
}

export interface Element {
  id?: string
}

export interface ElementListMatch {
  page_id: number
}

export interface ElementCreateData {
  page_id: number
  alignment?: any
  allow_same_origin?: any
  allowed_filetypes?: any
  alt_text?: any
  behaviour?: any
  button_load_more_label?: any
  color?: any
  column_amount?: any
  column_gap?: any
  column_stacking?: any
  column_weights?: any
  css_classes?: any
  data_source_id?: any
  date_format?: any
  default_name?: any
  default_url?: any
  default_value?: any
  embed?: any
  fields?: any
  format?: any
  formula_name?: any
  formula_value?: any
  height?: any
  help_text?: any
  horizontal_gap?: any
  image_file?: any
  image_source_type?: any
  image_url?: any
  include_time?: any
  input_type?: any
  is_multiline?: any
  items_per_page?: any
  items_per_row?: any
  label?: any
  labels?: any
  layout_type?: any
  level?: any
  login_button_label?: any
  max_filesize?: any
  max_value?: any
  menu_items?: any
  multiple?: any
  navigate_to_page_id?: any
  navigate_to_url?: any
  navigation_type?: any
  option_name_suffix?: any
  option_type?: any
  options?: any
  orientation?: any
  page_parameters?: any
  pages?: any
  place_in_container?: any
  placeholder?: any
  position?: any
  preview?: any
  property_options?: any
  query_parameters?: any
  rating_style?: any
  reference_element_id?: any
  required?: any
  reset_initial_values_post_submission?: any
  rows?: any
  schema_property?: any
  series?: any
  share_type?: any
  show_as_dropdown?: any
  source_type?: any
  style_background?: any
  style_background_color?: any
  style_background_file?: any
  style_background_mode?: any
  style_background_radius?: any
  style_border_bottom_color?: any
  style_border_bottom_size?: any
  style_border_left_color?: any
  style_border_left_size?: any
  style_border_radius?: any
  style_border_right_color?: any
  style_border_right_size?: any
  style_border_top_color?: any
  style_border_top_size?: any
  style_margin_bottom?: any
  style_margin_left?: any
  style_margin_right?: any
  style_margin_top?: any
  style_padding_bottom?: any
  style_padding_left?: any
  style_padding_right?: any
  style_padding_top?: any
  style_width?: any
  style_width_child?: any
  styles?: any
  submit_button_label?: any
  target?: any
  time_format?: any
  type?: any
  url?: any
  user_source_id?: any
  validation_type?: any
  value?: any
  variant?: any
  vertical_gap?: any
  visibility?: any
  visibility_condition?: any
}

export interface ElementUpdateData {
  id: number
  alignment?: any
  allow_same_origin?: any
  allowed_filetypes?: any
  alt_text?: any
  behaviour?: any
  button_load_more_label?: any
  color?: any
  column_amount?: any
  column_gap?: any
  column_stacking?: any
  column_weights?: any
  css_classes?: any
  data_source_id?: any
  date_format?: any
  default_name?: any
  default_url?: any
  default_value?: any
  embed?: any
  fields?: any
  format?: any
  formula_name?: any
  formula_value?: any
  height?: any
  help_text?: any
  horizontal_gap?: any
  image_file?: any
  image_source_type?: any
  image_url?: any
  include_time?: any
  input_type?: any
  is_multiline?: any
  items_per_page?: any
  items_per_row?: any
  label?: any
  labels?: any
  layout_type?: any
  level?: any
  login_button_label?: any
  max_filesize?: any
  max_value?: any
  menu_items?: any
  multiple?: any
  navigate_to_page_id?: any
  navigate_to_url?: any
  navigation_type?: any
  option_name_suffix?: any
  option_type?: any
  options?: any
  orientation?: any
  page_parameters?: any
  pages?: any
  placeholder?: any
  preview?: any
  property_options?: any
  query_parameters?: any
  rating_style?: any
  required?: any
  reset_initial_values_post_submission?: any
  role_type?: any
  roles?: any
  rows?: any
  schema_property?: any
  series?: any
  share_type?: any
  show_as_dropdown?: any
  source_type?: any
  style_background?: any
  style_background_color?: any
  style_background_file?: any
  style_background_mode?: any
  style_background_radius?: any
  style_border_bottom_color?: any
  style_border_bottom_size?: any
  style_border_left_color?: any
  style_border_left_size?: any
  style_border_radius?: any
  style_border_right_color?: any
  style_border_right_size?: any
  style_border_top_color?: any
  style_border_top_size?: any
  style_margin_bottom?: any
  style_margin_left?: any
  style_margin_right?: any
  style_margin_top?: any
  style_padding_bottom?: any
  style_padding_left?: any
  style_padding_right?: any
  style_padding_top?: any
  style_width?: any
  style_width_child?: any
  styles?: any
  submit_button_label?: any
  target?: any
  time_format?: any
  url?: any
  user_source_id?: any
  validation_type?: any
  value?: any
  variant?: any
  vertical_gap?: any
  visibility?: any
  visibility_condition?: any
}

export interface ElementTypeElement {
  id?: string
}

export interface ElementTypeElementUpdateData {
  id: number
  place_in_container?: any
  position?: any
  reference_element_id?: any
  target_page_id?: any

  // Selects a custom action instead of the plain update:
  //   'move'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Email {
  error?: string
  error_stack?: string
  error_type?: string
  succeeded: boolean
  target_email: string
}

export interface EmailCreateData {
  target_email: string
}

export interface ExampleBatchRow {
  items: any[]
}

export interface ExampleBatchRowCreateData {
  table_id: number
  before?: number
  include_metadata?: boolean
  send_webhook_event?: boolean
  user_field_name?: boolean
  view?: number
  items: any[]
}

export interface ExampleBatchUpdateRow {
  items: any[]
  metadata?: any
}

export interface ExampleBatchUpdateRowUpdateData {
  table_id: number
  include_metadata?: boolean
  send_webhook_event?: boolean
  user_field_name?: boolean
  view?: number
  items?: any[]
}

export interface ExamplePublicRowResponseSerializerWithUserFieldName {
  field_1?: string
  field_10?: any
  field_11?: string
  field_12?: any
  field_13?: number
  field_14?: any[]
  field_15?: any[]
  field_16?: any
  field_17?: any[]
  field_18?: string
  field_19?: string
  field_2?: string
  field_20?: string
  field_21?: string
  field_22?: string
  field_23?: any[]
  field_24?: string
  field_25?: number
  field_26?: boolean
  field_27: string
  field_28?: string
  field_29?: string
  field_3?: string
  field_4?: string
  field_5?: string
  field_6?: number
  field_7?: boolean
  field_8?: string
  field_9?: string
  id: number
  order?: string
}

export interface ExamplePublicRowResponseSerializerWithUserFieldNameLoadMatch {
  row_id: number
  view_id: string
}

export interface ExampleRow {
  field_1?: string
  field_10?: any
  field_11?: string
  field_12?: any
  field_13?: number
  field_14?: any[]
  field_15?: any[]
  field_16?: any
  field_17?: any[]
  field_18?: string
  field_19?: string
  field_2?: string
  field_20?: string
  field_21?: string
  field_22?: string
  field_23?: any[]
  field_24?: string
  field_25?: number
  field_26?: boolean
  field_27: string
  field_28?: string
  field_29?: string
  field_3?: string
  field_4?: string
  field_5?: string
  field_6?: number
  field_7?: boolean
  field_8?: string
  field_9?: string
  field_ids?: any[]
  id: number
  metadata?: any
  order?: string
  row_ids: any[]
}

export interface ExampleRowLoadMatch {
  form_id: string
  row_token: string
}

export interface ExampleRowCreateData {
  view_id: number
  field_ids?: any[]
  row_ids: any[]
}

export interface ExampleRowResponseSerializerWithUserFieldName {
  baserow_id: number
  field_1?: string
  field_10?: any
  field_11?: string
  field_12?: any
  field_13?: number
  field_14?: any[]
  field_15?: any[]
  field_16?: any
  field_17?: any[]
  field_18?: string
  field_19?: string
  field_2?: string
  field_20?: string
  field_21?: string
  field_22?: string
  field_23?: any[]
  field_24?: string
  field_25?: number
  field_26?: boolean
  field_27: string
  field_28?: string
  field_29?: string
  field_3?: string
  field_4?: string
  field_5?: string
  field_6?: number
  field_7?: boolean
  field_8?: string
  field_9?: string
  id: string
  metadata?: any
  order?: string
}

export interface ExampleRowResponseSerializerWithUserFieldNameLoadMatch {
  row_id: number
  table_id: number
  include?: string
  user_field_name?: boolean
  view?: number
}

export interface ExampleRowResponseSerializerWithUserFieldNameListMatch {
  row_id: number
  table_id: number
  previous?: boolean
  search?: string
  search_mode?: string
  user_field_name?: boolean
  view_id?: number
}

export interface ExampleRowResponseSerializerWithUserFieldNameCreateData {
  table_id: number
  before?: number
  send_webhook_event?: boolean
  user_field_name?: boolean
  view?: number
  field_1?: string
  field_13?: number
  field_14?: any[]
  field_15?: any[]
  field_16?: any
  field_17?: any[]
  field_18?: string
  field_2?: string
  field_23?: any[]
  field_26?: boolean
  field_29?: string
  field_3?: string
  field_4?: string
  field_5?: string
  field_6?: number
  field_7?: boolean
  field_8?: string
}

export interface ExampleRowResponseSerializerWithUserFieldNameUpdateData {
  row_id: number
  table_id: number
  send_webhook_event?: boolean
  user_field_name?: boolean
  view?: number
  before_id?: number
  baserow_id?: number
  field_1?: string
  field_10?: any
  field_11?: string
  field_12?: any
  field_13?: number
  field_14?: any[]
  field_15?: any[]
  field_16?: any
  field_17?: any[]
  field_18?: string
  field_19?: string
  field_2?: string
  field_20?: string
  field_21?: string
  field_22?: string
  field_23?: any[]
  field_24?: string
  field_25?: number
  field_26?: boolean
  field_28?: string
  field_29?: string
  field_3?: string
  field_4?: string
  field_5?: string
  field_6?: number
  field_7?: boolean
  field_8?: string
  field_9?: string
  id?: string
  metadata?: any
  order?: string
}

export interface Export {
  created_at: string
  created_on: string
  error_code?: string
  exported_file_name?: string
  exporter_type: string
  human_readable_error?: string
  id: number
  progress_percentage?: number
  state: string
  status: string
  table?: number
  type: string
  updated_on: string
  url: string
  view?: number
  workspace_id: number
}

export interface ExportLoadMatch {
  id: number
}

export interface ExportListMatch {
  workspace_id: number
}

export interface ExportJob {
  created_at: string
  exported_file_name?: string
  exporter_type: string
  id: number
  progress_percentage?: number
  state: string
  status: string
  table?: number
  url: string
  view?: number
}

export interface ExportJobLoadMatch {
  job_id: string
}

export interface ExportJobCreateData {
  table_id: number
  exporter_type: string
  csv_column_separator?: any
  csv_include_header?: any
  excel_include_header?: any
  export_charset?: any
  fields?: any
  filters?: any
  group_by?: any
  include_primary_field?: any
  include_row_id?: any
  order_by?: any
  organize_files?: any
  view_id?: any
}

export interface Field {
  id?: string
}

export interface FieldLoadMatch {
  id: number
}

export interface FieldUpdateData {
  id: number
  ai_auto_update?: any
  ai_file_field_id?: any
  ai_generative_ai_model?: any
  ai_generative_ai_type?: any
  ai_output_type?: any
  ai_prompt?: any
  ai_temperature?: any
  allow_endpoint_authentication?: any
  array_formula_type?: any
  boolean_default?: any
  color?: any
  date_force_timezone?: any
  date_force_timezone_offset?: any
  date_format?: any
  date_include_time?: any
  date_show_tzinfo?: any
  date_time_format?: any
  db_index?: any
  description?: any
  duration_format?: any
  field_constraints?: any
  form_view_id?: any
  formula?: any
  formula_type?: any
  has_related_field?: any
  label?: any
  link_row_limit_selection_view_id?: any
  link_row_multiple_relationships?: any
  link_row_table?: any
  link_row_table_id?: any
  long_text_enable_rich_text?: any
  max_value?: any
  multiple_select_default?: any
  name?: any
  notify_user_when_added?: any
  number_decimal_places?: any
  number_default?: any
  number_negative?: any
  number_prefix?: any
  number_separator?: any
  number_suffix?: any
  rollup_function?: any
  select_options?: any
  single_select_default?: any
  style?: any
  target_field_id?: any
  target_field_name?: any
  text_default?: any
  through_field_id?: any
  through_field_name?: any
  type?: any
  view_id?: any
}

export interface FieldField {
  new_primary_field_id: number
}

export interface FieldFieldLoadMatch {
  table_id: number
}

export interface FieldFieldCreateData {
  table_id: number
  new_primary_field_id: number
}

export interface FieldFieldSerializerWithRelatedField {
}

export interface FieldFieldSerializerWithRelatedFieldCreateData {
  table_id: number
  ai_auto_update?: any
  ai_file_field_id?: any
  ai_generative_ai_model?: any
  ai_generative_ai_type?: any
  ai_output_type?: any
  ai_prompt?: any
  ai_temperature?: any
  allow_endpoint_authentication?: any
  array_formula_type?: any
  boolean_default?: any
  color?: any
  date_force_timezone?: any
  date_force_timezone_offset?: any
  date_format?: any
  date_include_time?: any
  date_show_tzinfo?: any
  date_time_format?: any
  db_index?: any
  description?: any
  duration_format?: any
  field_constraints?: any
  form_view_id?: any
  formula?: any
  formula_type?: any
  has_related_field?: any
  label?: any
  link_row_limit_selection_view_id?: any
  link_row_multiple_relationships?: any
  link_row_table?: any
  link_row_table_id?: any
  long_text_enable_rich_text?: any
  max_value?: any
  multiple_select_default?: any
  name?: any
  notify_user_when_added?: any
  number_decimal_places?: any
  number_default?: any
  number_negative?: any
  number_prefix?: any
  number_separator?: any
  number_suffix?: any
  rollup_function?: any
  select_options?: any
  single_select_default?: any
  style?: any
  target_field_id?: any
  target_field_name?: any
  text_default?: any
  through_field_id?: any
  through_field_name?: any
  type?: any
  view_id?: any
}

export interface FieldPermissionSubjectOption {
  id?: string
}

export interface FieldPermissionSubjectOptionListMatch {
  id: string
  exclude_agent_id?: any[]
  exclude_team_id?: any[]
  exclude_user_id?: any[]
  page?: number
  search?: string
  size?: number

  // Selects a custom action instead of the plain list:
  //   'subjects'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface FieldRule {
  id?: string
}

export interface FieldRuleLoadMatch {
  id: number
}

export interface FieldRuleCreateData {
  id: number
  dependency_linkrow_field_id?: any
  duration_field_id?: any
  end_date_field_id?: any
  is_active?: any
  start_date_field_id?: any
  type?: any
}

export interface FieldRuleRemoveMatch {
  id: number
  rule_id: number
}

export interface FieldRulesResponseFieldRule {
  id?: string
}

export interface FieldRulesResponseFieldRuleUpdateData {
  field_rule_id: number
  id: number
  dependency_linkrow_field_id?: any
  duration_field_id?: any
  end_date_field_id?: any
  is_active?: any
  start_date_field_id?: any
  type?: any
}

export interface FormViewSubmitted {
  field_1?: string
  field_13?: number
  field_14?: any[]
  field_15?: any[]
  field_16?: number
  field_17?: any[]
  field_18?: string
  field_2?: string
  field_23?: any[]
  field_26?: string
  field_29?: string
  field_3?: string
  field_4?: string
  field_5?: string
  field_6?: number
  field_7?: boolean
  field_8?: string
  row_id: number
  submit_action?: string
  submit_action_message?: string
  submit_action_redirect_url?: any
}

export interface FormViewSubmittedCreateData {
  slug: string
  field_1?: string
  field_13?: number
  field_14?: any[]
  field_15?: any[]
  field_16?: number
  field_17?: any[]
  field_18?: string
  field_2?: string
  field_23?: any[]
  field_26?: string
  field_29?: string
  field_3?: string
  field_4?: string
  field_5?: string
  field_6?: number
  field_7?: boolean
  field_8?: string
}

export interface FormViewSubmittedUpdateData {
  row_token: string
  slug: string
  field_1?: string
  field_13?: number
  field_14?: any[]
  field_15?: any[]
  field_16?: number
  field_17?: any[]
  field_18?: string
  field_2?: string
  field_23?: any[]
  field_26?: string
  field_29?: string
  field_3?: string
  field_4?: string
  field_5?: string
  field_6?: number
  field_7?: boolean
  field_8?: string
}

export interface Full {
  celery_export_queue_size: number
  celery_queue_size: number
  checks: Record<string, any>
  passing: boolean
}

export interface FullLoadMatch {
  celery_export_queue_size?: number
  celery_queue_size?: number
  checks?: Record<string, any>
  passing?: boolean
}

export interface GenerateFormulaWithAi {
  ai_model: string
  ai_prompt: string
  ai_temperature?: number
  ai_type: string
  formula: string
}

export interface GenerateFormulaWithAiCreateData {
  table_id: number
  ai_model: string
  ai_prompt: string
  ai_temperature?: number
  ai_type: string
}

export interface GridViewGroupByData {
  group_count: number
  groups: any[]
  id?: string
  limit: number
  offset: number
  parent: Record<string, any>
}

export interface GridViewGroupByDataListMatch {
  id: number
  aggregations_only?: boolean
  depth?: number
  descendant_limit?: number
  descendant_row_budget?: number
  filter?: string
  filter_type?: string
  "filter_{field}_{filter}"?: string
  group_by?: string
  include_descendant?: boolean
  include_total?: boolean
  limit?: number
  offset?: number
  parent?: string
  search?: string
  search_mode?: string
}

export interface Health {
}

export interface HealthLoadMatch {
  queue?: string

  // Selects a custom action instead of the plain load:
  //   'celery_queue'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface InboundEmail {
}

export interface InboundEmailCreateData {
}

export interface Install {
}

export interface InstallCreateData {
  template_id: number
  workspace_id: number
}

export interface InstanceId {
  instance_id: string
}

export interface InstanceIdLoadMatch {
  instance_id?: string
}

export interface Integration {
  id?: string
}

export interface IntegrationListMatch {
  application_id: number
}

export interface IntegrationCreateData {
  application_id: number
  ai_settings?: any
  before_id?: any
  host?: any
  name?: any
  password?: any
  port?: any
  token?: any
  type?: any
  use_ssl?: any
  use_tls?: any
  username?: any
}

export interface IntegrationUpdateData {
  id: number
  ai_settings?: any
  host?: any
  name?: any
  password?: any
  port?: any
  token?: any
  use_ssl?: any
  use_tls?: any
  username?: any
}

export interface IntegrationRemoveMatch {
  id: number
}

export interface IntegrationIntegration {
  id?: string
}

export interface IntegrationIntegrationUpdateData {
  id: number
  before_id?: any

  // Selects a custom action instead of the plain update:
  //   'move'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface IntegrationServiceDashboardDataSource {
  id?: string
}

export interface IntegrationServiceDashboardDataSourceListMatch {
  dashboard_id: number
}

export interface IntegrationServiceDashboardDataSourceUpdateData {
  id: number
  aggregation_group_bys?: any
  aggregation_series?: any
  aggregation_sorts?: any
  aggregation_type?: any
  ai_choices?: any
  ai_generative_ai_model?: any
  ai_generative_ai_type?: any
  ai_output_type?: any
  ai_prompt?: any
  ai_temperature?: any
  bcc_emails?: any
  body?: any
  body_content?: any
  body_type?: any
  cc_emails?: any
  channel?: any
  code?: any
  condition?: any
  csv?: any
  day_of_month?: any
  day_of_week?: any
  default_edge_label?: any
  default_result_count?: any
  destination_service_id?: any
  edges?: any
  encoding?: any
  exclude_get?: any
  field_id?: any
  field_ids?: any
  field_mappings?: any
  file?: any
  filter_type?: any
  first_line_is_header?: any
  form_data?: any
  from_email?: any
  from_name?: any
  headers?: any
  hour?: any
  http_method?: any
  injections?: any
  input_type?: any
  integration_id?: any
  interval?: any
  is_public?: any
  minute?: any
  name?: any
  query_params?: any
  response_timeout_seconds?: any
  row_id?: any
  rows?: any
  search_query?: any
  separator?: any
  sheet_name?: any
  source?: any
  status_code?: any
  subject?: any
  table_id?: any
  text?: any
  timeout?: any
  timezone?: any
  to_emails?: any
  token?: any
  uid?: any
  url?: any
  use_instance_smtp_settings?: any
  view_id?: any
  wait_for_response?: any
  workflow_id?: any
}

export interface IntegrationServiceDataSource {
  before_id?: number
  id?: string
}

export interface IntegrationServiceDataSourceListMatch {
  page_id: number
}

export interface IntegrationServiceDataSourceCreateData {
  page_id: number
  before_id?: number
  aggregation_group_bys?: any
  aggregation_series?: any
  aggregation_sorts?: any
  aggregation_type?: any
  ai_choices?: any
  ai_generative_ai_model?: any
  ai_generative_ai_type?: any
  ai_output_type?: any
  ai_prompt?: any
  ai_temperature?: any
  bcc_emails?: any
  body?: any
  body_content?: any
  body_type?: any
  cc_emails?: any
  channel?: any
  code?: any
  condition?: any
  csv?: any
  day_of_month?: any
  day_of_week?: any
  default_edge_label?: any
  default_result_count?: any
  destination_service_id?: any
  edges?: any
  encoding?: any
  exclude_get?: any
  field_id?: any
  field_ids?: any
  field_mappings?: any
  file?: any
  filter_type?: any
  first_line_is_header?: any
  form_data?: any
  from_email?: any
  from_name?: any
  headers?: any
  hour?: any
  http_method?: any
  injections?: any
  input_type?: any
  integration_id?: any
  interval?: any
  is_public?: any
  minute?: any
  name?: any
  query_params?: any
  response_timeout_seconds?: any
  row_id?: any
  rows?: any
  search_query?: any
  separator?: any
  sheet_name?: any
  source?: any
  status_code?: any
  subject?: any
  table_id?: any
  text?: any
  timeout?: any
  timezone?: any
  to_emails?: any
  token?: any
  type?: any
  uid?: any
  url?: any
  use_instance_smtp_settings?: any
  view_id?: any
  wait_for_response?: any
  workflow_id?: any
}

export interface IntegrationServiceDataSourceUpdateData {
  id: number
  before_id?: number
  aggregation_group_bys?: any
  aggregation_series?: any
  aggregation_sorts?: any
  aggregation_type?: any
  ai_choices?: any
  ai_generative_ai_model?: any
  ai_generative_ai_type?: any
  ai_output_type?: any
  ai_prompt?: any
  ai_temperature?: any
  bcc_emails?: any
  body?: any
  body_content?: any
  body_type?: any
  cc_emails?: any
  channel?: any
  code?: any
  condition?: any
  csv?: any
  day_of_month?: any
  day_of_week?: any
  default_edge_label?: any
  default_result_count?: any
  destination_service_id?: any
  edges?: any
  encoding?: any
  exclude_get?: any
  field_id?: any
  field_ids?: any
  field_mappings?: any
  file?: any
  filter_type?: any
  first_line_is_header?: any
  form_data?: any
  from_email?: any
  from_name?: any
  headers?: any
  hour?: any
  http_method?: any
  injections?: any
  input_type?: any
  integration_id?: any
  interval?: any
  is_public?: any
  minute?: any
  name?: any
  query_params?: any
  response_timeout_seconds?: any
  row_id?: any
  rows?: any
  search_query?: any
  separator?: any
  sheet_name?: any
  source?: any
  status_code?: any
  subject?: any
  table_id?: any
  text?: any
  timeout?: any
  timezone?: any
  to_emails?: any
  token?: any
  uid?: any
  url?: any
  use_instance_smtp_settings?: any
  view_id?: any
  wait_for_response?: any
  workflow_id?: any
}

export interface IntegrationServicePublicDataSource {
}

export interface IntegrationServicePublicDataSourceListMatch {
  page_id: number
}

export interface InvalidRow {
  id: number
}

export interface InvalidRowListMatch {
  field_rule_id: number
}

export interface Job {
  count: number
  created_on: string
  error_code?: string
  human_readable_error?: string
  id: number
  jobs: any[]
  progress_percentage: number
  state: string
  type: string
  updated_on: string
}

export interface JobLoadMatch {
  id: number
}

export interface JobListMatch {
  generate_ai_values_field_id?: number
  job_id?: string
  limit?: number
  offset?: number
  state?: string
  sync_data_sync_table_data_sync_id?: number
  type?: string
}

export interface JobCreateData {
  count: number
  error_code?: string
  human_readable_error?: string
  jobs: any[]
  progress_percentage: number
  state: string
  airtable_share_url?: any
  application_id?: any
  application_ids?: any
  csv_column_separator?: any
  csv_first_row_header?: any
  data_sync_id?: any
  duplicate_data?: any
  exclude_columns?: any
  export_charset?: any
  filter_action_type?: any
  filter_from_timestamp?: any
  filter_scan_id?: any
  filter_to_timestamp?: any
  filter_user_id?: any
  filter_workspace_id?: any
  only_empty?: any
  only_structure?: any
  page_id?: any
  resource_id?: any
  row_ids?: any
  session?: any
  session_signature?: any
  skip_files?: any
  snapshot?: any
  table_id?: any
  template_id?: any
  view_id?: any
  workflow_id?: any
  workspace_id?: any
}

export interface JobTypeJob {
  id?: string
}

export interface JobTypeJobCreateData {
  id: number

  // Selects a custom action instead of the plain create:
  //   'cancel'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Kanban {
  field_options: any[]
  id?: string
  row_metadata?: Record<string, any>
  rows: Record<string, any>
}

export interface KanbanLoadMatch {
  id: number
  filter?: string
  filter_type?: string
  "filter_{field}_{filter}"?: string
  include?: string
  limit?: number
  limit_linked_item?: number
  offset?: number
  select_option?: string
}

export interface KanbanViewExample {
  hidden?: boolean
  order?: number
}

export interface KanbanViewExampleListMatch {
  kanban_id: string
  filter?: string
  filter_type?: string
  "filter_{field}_{filter}"?: string
  limit?: number
  limit_linked_item?: number
  offset?: number
  order_by?: string
  select_option?: string
}

export interface LastViewedItem {
  application: Record<string, any>
  item: any
  last_viewed: string
  sub_type: string
  type: string
  workspace: Record<string, any>
}

export interface LastViewedItemListMatch {
  cursor?: string
  limit?: number
  type?: string
  workspace_id?: string
}

export interface License {
  application_users: number
  application_users_taken: number
  email?: string
  first_name?: string
  free_users_count: number
  id: number
  is_active: boolean
  issued_on: string
  issued_to_email: string
  issued_to_name: string
  last_check?: string
  license_id: string
  product_code: string
  seats: number
  seats_taken: number
  users: any[]
  valid_from: string
  valid_through: string
}

export interface LicenseLoadMatch {
  id: number
}

export interface LicenseCreateData {
  id: number
  user_id: number
  application_users: number
  email?: string
  first_name?: string
  is_active: boolean
  issued_on: string
  issued_to_email: string
  issued_to_name: string
  last_check?: string
  license_id: string
  product_code: string
  seats: number
  valid_from: string
  valid_through: string
}

export interface LicenseUser {
  id?: string
}

export interface LicenseUserCreateData {
  id: number

  // Selects a custom action instead of the plain create:
  //   'fill-seats'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface LicenseUserLookup {
  id: number
  value: string
}

export interface LicenseUserLookupListMatch {
  id: number
  page?: number
  search?: string
  size?: number

  // Selects a custom action instead of the plain list:
  //   'lookup-users'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface LicenseWithUser {
  id?: string
}

export interface LicenseWithUserListMatch {
  id: number

  // Selects a custom action instead of the plain list:
  //   'check'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ListDataSyncProperty {
  field_type: string
  initially_selected: boolean
  key: string
  name: string
  unique_primary: boolean
}

export interface ListDataSyncPropertyListMatch {
  data_sync_id: number
}

export interface ListDataSyncPropertyCreateData {
  database_id: number
  github_issues_owner?: any
  github_issues_repo?: any
  gitlab_project_id?: any
  gitlab_url?: any
  ical_url?: any
  jira_authentication?: any
  jira_project_key?: any
  jira_url?: any
  jira_username?: any
  postgresql_database?: any
  postgresql_host?: any
  postgresql_port?: any
  postgresql_schema?: any
  postgresql_sslmode?: any
  postgresql_table?: any
  postgresql_username?: any
  source_table_id?: any
  source_table_view_id?: any
  type?: any
}

export interface Login {
  id?: string
}

export interface LoginLoadMatch {
  id: number
  original?: number
  workspace_invitation_token?: string
}

export interface McpEndpoint {
  created: string
  id: number
  key: string
  name: string
  workspace_id: number
  workspace_name: string
}

export interface McpEndpointLoadMatch {
  id: string
}

export interface McpEndpointListMatch {
  created?: string
  id?: number
  key?: string
  name?: string
  workspace_id?: number
  workspace_name?: string
}

export interface McpEndpointCreateData {
  name: string
}

export interface McpEndpointUpdateData {
  id: string
  name?: string
}

export interface McpEndpointRemoveMatch {
  id: string
}

export interface Message {
  messages: any[]
}

export interface MessageListMatch {
  chat_id: string
}

export interface Notification {
  baserow_id: number
  created_on: string
  data: any
  id: string
  read?: boolean
  sender: any
  type: string
  workspace: string
}

export interface NotificationCreateData {
  id: number
  baserow_id: number
  created_on: string
  data: any
  read?: boolean
  sender: any
  type: string

  // Selects a custom action instead of the plain create:
  //   'mark_all_as_read'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface NotificationUpdateData {
  notification_id: number
  workspace_id: number
  baserow_id?: number
  created_on?: string
  data?: any
  id?: string
  read?: boolean
  sender?: any
  type?: string
}

export interface NotificationRemoveMatch {
  id: number
}

export interface OnboardingPromptSuggestion {
  industry?: string
  language?: string
  suggestions: any[]
  team?: string
}

export interface OnboardingPromptSuggestionCreateData {
  industry?: string
  language?: string
  team?: string
}

export interface OpenApiRoleAssignment {
  id: number
  items: any[]
  role: string
  scope_id: number
  scope_type: string
  subject: any
  subject_id: number
  subject_type: string
}

export interface OpenApiRoleAssignmentLoadMatch {
  workspace_id: number
  scope_id?: number
  scope_type?: string
}

export interface OpenApiRoleAssignmentCreateData {
  workspace_id: number
  items: any[]
  role: string
  scope_id: number
  scope_type: string
  subject_id: number
  subject_type: string
}

export interface Page {
  builder_id: number
  graph: any
  id: number
  name: string
  order: number
  path: string
  path_params?: any[]
  query_params?: any[]
  role_type: string
  roles: any
  shared: boolean
  visibility: string
}

export interface PageCreateData {
  builder_id: number
  name: string
  path: string
  path_params?: any[]
  query_params?: any[]
}

export interface PageUpdateData {
  id: number
  name?: string
  path?: string
  path_params?: any[]
  query_params?: any[]
}

export interface PaginationSerializerExampleRowResponseSerializerWithUser {
  count: number
  next: string
  previous: string
  results: any[]
}

export interface PaginationSerializerExampleRowResponseSerializerWithUserLoadMatch {
  table_id: number
  exclude?: string
  filter?: string
  filter_type?: string
  "filter_{field}_{filter}"?: string
  include?: string
  order_by?: string
  page?: number
  search?: string
  search_mode?: string
  size?: number
  user_field_name?: boolean
  view_id?: number
  "{link_row_field}_join={target_field},{target_field2}"?: string
}

export interface PaginationSerializerLinkRowValue {
  count: number
  next: string
  previous: string
  results: any[]
}

export interface PaginationSerializerLinkRowValueLoadMatch {
  field_id: number
  view_id: string
  search?: string
  search_mode?: string
}

export interface PaginationSerializerNotificationRecipient {
  count: number
  next: string
  previous: string
  results: any[]
}

export interface PaginationSerializerNotificationRecipientLoadMatch {
  workspace_id: number
  limit?: number
  offset?: number
}

export interface PaginationSerializerRowComment {
  count: number
  id?: string
  next: string
  previous: string
  results: any[]
}

export interface PaginationSerializerRowCommentLoadMatch {
  row_id: number
  table_id: number
  limit?: number
  offset?: number
  page?: number
  size?: number
  view?: number
}

export interface PaginationSerializerTrashContent {
  count: number
  next: string
  previous: string
  results: any[]
}

export interface PaginationSerializerTrashContentLoadMatch {
  workspace_id: number
  application_id?: number
  page?: number
}

export interface PaginationSerializerWithGalleryViewFieldOptionsExampleRow {
  count: number
  field_options?: Record<string, any>
  next: string
  previous: string
  results: any[]
  row_metadata?: Record<string, any>
}

export interface PaginationSerializerWithGalleryViewFieldOptionsExampleRowLoadMatch {
  view_id: number
  count?: boolean
  exclude_count?: boolean
  filter?: string
  filter_type?: string
  "filter_{field}_{filter}"?: string
  include?: string
  limit?: number
  limit_linked_item?: number
  offset?: number
  order_by?: string
  search?: string
  search_mode?: string
}

export interface PaginationSerializerWithGridViewFieldOptionsExampleRow {
  count: number
  field_options?: Record<string, any>
  next: string
  previous: string
  results: any[]
  row_metadata?: Record<string, any>
}

export interface PaginationSerializerWithGridViewFieldOptionsExampleRowLoadMatch {
  view_id: number
  count?: boolean
  exclude_count?: boolean
  exclude_field?: string
  filter?: string
  filter_type?: string
  "filter_{field}_{filter}"?: string
  group_by?: string
  include?: string
  include_field?: string
  limit?: number
  limit_linked_item?: number
  offset?: number
  order_by?: string
  page?: number
  search?: string
  search_mode?: string
  size?: number
}

export interface PaginationSerializerWithTimelineViewFieldOptionsExampleRow {
  count: number
  field_options?: Record<string, any>
  next: string
  previous: string
  results: any[]
  row_metadata?: Record<string, any>
}

export interface PaginationSerializerWithTimelineViewFieldOptionsExampleRowLoadMatch {
  view_id: number
  count?: boolean
  exclude_count?: boolean
  exclude_field?: string
  filter?: string
  filter_type?: string
  "filter_{field}_{filter}"?: string
  include?: string
  include_field?: string
  limit?: number
  limit_linked_item?: number
  offset?: number
  order_by?: string
  page?: number
  search?: string
  search_mode?: string
  size?: number
}

export interface PasswordFieldAuthentication {
  field_id: number
  is_correct: boolean
  password: string
  row_id: number
}

export interface PasswordFieldAuthenticationCreateData {
  field_id: number
  password: string
  row_id: number
}

export interface PeriodicDataSyncInterval {
  automatically_deactivated: boolean
  interval?: string
  when: string
}

export interface PeriodicDataSyncIntervalLoadMatch {
  data_sync_id: number
}

export interface PeriodicDataSyncIntervalUpdateData {
  data_sync_id: number
  interval?: string
  when?: string
}

export interface Permission {
  name: string
  permissions: any
}

export interface PermissionListMatch {
  workspace_id: number
}

export interface PublicBuilderWorkflowActionTypeBuilderWorkflowAction {
}

export interface PublicBuilderWorkflowActionTypeBuilderWorkflowActionListMatch {
  page_id: number
}

export interface PublicFormView {
  condition_groups?: any[]
  condition_type?: string
  conditions?: any[]
  description?: string
  field: any
  field_component?: string
  groups?: any[]
  name: string
  order?: number
  required?: boolean
  show_when_matching_conditions?: boolean
}

export interface PublicFormViewListMatch {
  slug: string
}

export interface PublicPaginationSerializerWithGalleryViewFieldOptions {
  field_1?: string
  field_10?: any
  field_11?: string
  field_12?: any
  field_13?: number
  field_14?: any[]
  field_15?: any[]
  field_16?: any
  field_17?: any[]
  field_18?: string
  field_19?: string
  field_2?: string
  field_20?: string
  field_21?: string
  field_22?: string
  field_23?: any[]
  field_24?: string
  field_25?: number
  field_26?: boolean
  field_27: string
  field_28?: string
  field_29?: string
  field_3?: string
  field_4?: string
  field_5?: string
  field_6?: number
  field_7?: boolean
  field_8?: string
  field_9?: string
  id: number
  metadata?: any
  order?: string
}

export interface PublicPaginationSerializerWithGalleryViewFieldOptionsListMatch {
  gallery_id: string
  count?: boolean
  exclude_field?: string
  filter?: string
  filter_type?: string
  "filter_{field}_{filter}"?: string
  include?: string
  include_field?: string
  limit?: number
  limit_linked_item?: number
  offset?: number
  order_by?: string
  page?: number
  search?: string
  search_mode?: string
  size?: number
}

export interface PublicPaginationSerializerWithGridViewFieldOptionsExample {
  field_1?: string
  field_10?: any
  field_11?: string
  field_12?: any
  field_13?: number
  field_14?: any[]
  field_15?: any[]
  field_16?: any
  field_17?: any[]
  field_18?: string
  field_19?: string
  field_2?: string
  field_20?: string
  field_21?: string
  field_22?: string
  field_23?: any[]
  field_24?: string
  field_25?: number
  field_26?: boolean
  field_27: string
  field_28?: string
  field_29?: string
  field_3?: string
  field_4?: string
  field_5?: string
  field_6?: number
  field_7?: boolean
  field_8?: string
  field_9?: string
  id: number
  metadata?: any
  order?: string
}

export interface PublicPaginationSerializerWithGridViewFieldOptionsExampleListMatch {
  grid_id: string
  count?: boolean
  exclude_count?: boolean
  exclude_field?: string
  filter?: string
  filter_type?: string
  "filter_{field}_{filter}"?: string
  group_by?: string
  include?: string
  include_field?: string
  limit?: number
  limit_linked_item?: number
  offset?: number
  order_by?: string
  page?: number
  search?: string
  search_mode?: string
  size?: number
}

export interface PublicPaginationSerializerWithTimelineViewFieldOptions {
  field_1?: string
  field_10?: any
  field_11?: string
  field_12?: any
  field_13?: number
  field_14?: any[]
  field_15?: any[]
  field_16?: any
  field_17?: any[]
  field_18?: string
  field_19?: string
  field_2?: string
  field_20?: string
  field_21?: string
  field_22?: string
  field_23?: any[]
  field_24?: string
  field_25?: number
  field_26?: boolean
  field_27: string
  field_28?: string
  field_29?: string
  field_3?: string
  field_4?: string
  field_5?: string
  field_6?: number
  field_7?: boolean
  field_8?: string
  field_9?: string
  id: number
  metadata?: any
  order?: string
}

export interface PublicPaginationSerializerWithTimelineViewFieldOptionsListMatch {
  timeline_id: string
  count?: boolean
  exclude_field?: string
  filter?: string
  filter_type?: string
  "filter_{field}_{filter}"?: string
  include?: string
  include_field?: string
  limit?: number
  limit_linked_item?: number
  offset?: number
  order_by?: string
  page?: number
  search?: string
  search_mode?: string
  size?: number
}

export interface PublicViewAuth {
  access_token: string
  password: string
}

export interface PublicViewAuthCreateData {
  view_id: string
  password: string
}

export interface PublicViewInfo {
  database_id: number
  db_index?: boolean
  description?: string
  field_constraints: string
  id: number
  immutable_properties: boolean
  immutable_type: boolean
  name: string
  order: number
  primary?: boolean
  read_only: boolean
  table_id: number
  type: string
  workspace_id: number
}

export interface PublicViewInfoListMatch {
  view_id: string
}

export interface RelatedField {
  id?: string
}

export interface RelatedFieldRemoveMatch {
  id: number
}

export interface RowComment {
  created_on: string
  edited: string
  first_name?: string
  id: number
  message: string
  row_id: number
  table_id: number
  trashed?: boolean
  updated_on: string
  user_id: number
}

export interface RowCommentCreateData {
  row_id: number
  table_id: number
  view?: number
}

export interface RowCommentUpdateData {
  comment_id: number
  id: number
  view?: number
  first_name?: string
  row_id?: number
  trashed?: boolean
}

export interface RowCommentRemoveMatch {
  comment_id: number
  id: number
  view?: number
}

export interface RowHistory {
  action_command_type?: string
  action_type: string
  after: any
  before: any
  fields_metadata: any
  id: number
  timestamp: string
  user: any
}

export interface RowHistoryListMatch {
  row_id: number
  table_id: number
  limit?: number
  offset?: number
}

export interface SecureFileServe {
}

export interface SecureFileServeLoadMatch {
  signed_data: string
}

export interface Setting {
  account_deletion_grace_delay?: number
  allow_global_workspace_creation?: boolean
  allow_new_signups?: boolean
  allow_reporting_abuse?: boolean
  allow_reset_password?: boolean
  allow_signups_via_workspace_invitations?: boolean
  co_branding_logo?: any
  email_verification?: any
  inbound_email_enabled: boolean
  show_admin_signup_page?: boolean
  show_baserow_help_request?: boolean
  track_workspace_usage?: boolean
  verify_import_signature?: boolean
}

export interface SettingLoadMatch {
  account_deletion_grace_delay?: number
  allow_global_workspace_creation?: boolean
  allow_new_signups?: boolean
  allow_reporting_abuse?: boolean
  allow_reset_password?: boolean
  allow_signups_via_workspace_invitations?: boolean
  co_branding_logo?: any
  email_verification?: any
  inbound_email_enabled?: boolean
  show_admin_signup_page?: boolean
  show_baserow_help_request?: boolean
  track_workspace_usage?: boolean
  verify_import_signature?: boolean
}

export interface SettingUpdateData {
  account_deletion_grace_delay?: number
  allow_global_workspace_creation?: boolean
  allow_new_signups?: boolean
  allow_reporting_abuse?: boolean
  allow_reset_password?: boolean
  allow_signups_via_workspace_invitations?: boolean
  co_branding_logo?: any
  email_verification?: any
  show_admin_signup_page?: boolean
  show_baserow_help_request?: boolean
  track_workspace_usage?: boolean
  verify_import_signature?: boolean

  // Selects a custom action instead of the plain update:
  //   'update'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Snapshot {
  created_at: string
  created_by: any
  created_on: string
  error_code?: string
  human_readable_error?: string
  id: number
  name: string
  progress_percentage: number
  snapshot_from_application: number
  state: string
  type: string
  updated_on: string
}

export interface SnapshotLoadMatch {
  application_id: number
}

export interface SnapshotCreateData {
  application_id: number
  name: string
}

export interface SnapshotRemoveMatch {
  id: number
}

export interface Table {
  active?: boolean
  calls: any[]
  created_on: string
  data?: any[]
  data_sync: Record<string, any>
  database_id: number
  event_config: any[]
  events: Record<string, any>
  failed_triggers?: number
  first_row_header?: boolean
  headers: Record<string, any>
  id: number
  importer_type?: string
  include_all_events?: boolean
  name: string
  order: number
  original_file_name?: string
  request_method?: string
  updated_on: string
  url: string
  use_user_field_names?: boolean
}

export interface TableLoadMatch {
  id: number
}

export interface TableCreateData {
  database_id: number
  data?: any[]
  first_row_header?: boolean
  importer_type?: string
  include_all_events?: boolean
  name: string
  original_file_name?: string
  request_method?: string
  url: string
  use_user_field_names?: boolean
  auto_add_new_properties?: any
  delete_unmatched_rows?: any
  github_issues_owner?: any
  github_issues_repo?: any
  gitlab_project_id?: any
  gitlab_url?: any
  ical_url?: any
  jira_authentication?: any
  jira_project_key?: any
  jira_url?: any
  jira_username?: any
  postgresql_database?: any
  postgresql_host?: any
  postgresql_port?: any
  postgresql_schema?: any
  postgresql_sslmode?: any
  postgresql_table?: any
  postgresql_username?: any
  source_table_id?: any
  source_table_view_id?: any
  synced_properties?: any
  table_name?: any
  two_way_sync?: any
  type?: any
}

export interface TableUpdateData {
  id: number
  name?: string
}

export interface TableWebhook {
  active?: boolean
  calls: any[]
  created_on: string
  event_config: any[]
  events: Record<string, any>
  failed_triggers?: number
  headers: Record<string, any>
  id: number
  include_all_events?: boolean
  name: string
  request_method?: string
  updated_on: string
  url: string
  use_user_field_names?: boolean
}

export interface TableWebhookLoadMatch {
  id: number
}

export interface TableWebhookUpdateData {
  id: number
  active?: boolean
  include_all_events?: boolean
  name?: string
  request_method?: string
  url?: string
  use_user_field_names?: boolean
}

export interface TableWebhookTestCall {
  event_type: string
  headers?: Record<string, any>
  id?: string
  is_unreachable: boolean
  request: string
  request_method?: string
  response: string
  status_code: number
  url: string
  use_user_field_names?: boolean
}

export interface TableWebhookTestCallCreateData {
  id: number
  event_type: string
  headers?: Record<string, any>
  request_method?: string
  url: string
  use_user_field_names?: boolean
}

export interface TableWithoutDataSync {
  database_id: number
  id: number
  name: string
  order: number
}

export interface TableWithoutDataSyncListMatch {
  database_id?: number
  id?: number
  name?: string
  order?: number
}

export interface Team {
  created_on: string
  default_role?: string
  id: number
  name: string
  subject_count: number
  subject_sample?: any[]
  subjects?: any[]
  updated_on: string
  workspace: number
}

export interface TeamLoadMatch {
  id: number
}

export interface TeamCreateData {
  workspace_id: string
  default_role?: string
  name: string
  subjects?: any[]
}

export interface TeamUpdateData {
  id: string
  default_role?: string
  name?: string
  subjects?: any[]
}

export interface TeamRemoveMatch {
  id: number
  subject_id?: number
}

export interface TeamSubject {
  id: number
  subject_id: number
  subject_type: string
  subject_user_email?: string
  team: number
}

export interface TeamSubjectLoadMatch {
  id: number
  team_id: string
}

export interface TeamSubjectListMatch {
  id: string
}

export interface TeamSubjectCreateData {
  id: string
  subject_id?: number
  subject_user_email?: string
}

export interface Template {
  created_on: string
  error_code?: string
  human_readable_error?: string
  id: number
  installed_applications: any
  name: string
  progress_percentage: number
  state: string
  template: any
  templates: any[]
  type: string
  updated_on: string
  workspace: any
}

export interface TemplateListMatch {
  created_on?: string
  error_code?: string
  human_readable_error?: string
  id?: number
  installed_applications?: any
  name?: string
  progress_percentage?: number
  state?: string
  template?: any
  templates?: any[]
  type?: string
  updated_on?: string
  workspace?: any
}

export interface TemplateCreateData {
  install_id: number
  template_id: number
  error_code?: string
  human_readable_error?: string
  name: string
  progress_percentage: number
  state: string
}

export interface Token {
  id: number
  key: string
  name: string
  permissions: Record<string, any>
  rotate_key?: boolean
  workspace: number
}

export interface TokenLoadMatch {
  id: number
}

export interface TokenListMatch {
  id?: number
  key?: string
  name?: string
  permissions?: Record<string, any>
  rotate_key?: boolean
  workspace?: number
}

export interface TokenCreateData {
  name: string
  workspace: number
}

export interface TokenUpdateData {
  id: number
  name?: string
  permissions?: Record<string, any>
  rotate_key?: boolean
}

export interface Trash {
  applications: any[]
  id: number
  name: string
  trashed: boolean
}

export interface TrashListMatch {
  applications?: any[]
  id?: number
  name?: string
  trashed?: boolean
}

export interface TrashUpdateData {
  parent_trash_item_id?: any
  trash_item_id?: any
  trash_item_type?: any

  // Selects a custom action instead of the plain update:
  //   'restore'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface TrashRemoveMatch {
  workspace_id: number
  application_id?: number
}

export interface TwoFactorAuthTypeTwoFactorAuth {
}

export interface TwoFactorAuthTypeTwoFactorAuthLoadMatch {
}

export interface TwoFactorAuthTypeTwoFactorAuthCreateData {
  backup_codes?: any
  provisioning_qr_code?: any
  provisioning_url?: any
  type?: any
}

export interface Type {
  array_formula_type?: any
  date_force_timezone?: string
  date_format?: any
  date_include_time?: boolean
  date_show_tzinfo?: boolean
  date_time_format?: any
  duration_format?: any
  error?: string
  formula: string
  formula_type?: string
  name: string
  nullable: boolean
  number_decimal_places?: any
  number_prefix?: string
  number_separator?: any
  number_suffix?: string
}

export interface TypeCreateData {
  formula_id: number
  formula: string
  name: string
}

export interface UniqueRowValue {
  values: any[]
}

export interface UniqueRowValueListMatch {
  field_id: number
  limit?: number
  split_comma_separated?: boolean
}

export interface UpdateFieldPermission {
  allow_in_forms?: boolean
  can_write_values?: boolean
  field_id: number
  id?: string
  role: string
  subjects: any[]
}

export interface UpdateFieldPermissionLoadMatch {
  id: number
}

export interface UpdateFieldPermissionUpdateData {
  id: number
  allow_in_forms?: boolean
  role?: string
}

export interface User {
  authenticate?: boolean
  captcha_token?: string
  date_joined?: string
  email: string
  id: number
  is_active?: boolean
  is_staff?: boolean
  language?: string
  last_login?: string
  name: string
  password: string
  template_id?: number
  two_factor_auth: Record<string, any>
  username: string
  workspace_invitation_token?: string
  workspaces: any[]
}

export interface UserListMatch {
  ids?: string
  page?: number
  search?: string
  size?: number
  sort?: string

  // Selects a custom action instead of the plain list:
  //   'dashboard'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface UserCreateData {
  authenticate?: boolean
  captcha_token?: string
  email: string
  is_active?: boolean
  is_staff?: boolean
  language?: string
  name: string
  password: string
  template_id?: number
  username: string
  workspace_invitation_token?: string

  // Selects a custom action instead of the plain create:
  //   'change_email' | 'change_password' | 'reset_password' | 'schedule_account_deletion' | 'send_change_email_confirmation' | 'send_reset_password_email' | 'send_verify_email' | 'token_auth' | 'token_blacklist' | 'token_refresh' | 'token_verify' | 'verify_email'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface UserUpdateData {
  id: number
  is_active?: boolean
  is_staff?: boolean
  name?: string
  password?: string
  username?: string

  // Selects a custom action instead of the plain update:
  //   'account' | 'preference' | 'redo' | 'undo'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface UserFile {
  image_height?: number
  image_width?: number
  is_image?: boolean
  mime_type?: string
  name: string
  original_name: string
  size: number
  thumbnails: Record<string, any>
  uploaded_at: string
  url: string
}

export interface UserFileCreateData {
  slug: string
  image_height?: number
  image_width?: number
  is_image?: boolean
  mime_type?: string
  original_name: string
  size: number

  // Selects a custom action instead of the plain create:
  //   'upload_file' | 'upload_via_url'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface UserSource {
  RelayState: string
  SAMLResponse: string
  access_token?: string
  id?: string
  refresh: string
}

export interface UserSourceLoadMatch {
  id: number
  code?: string
  state?: string
  iss?: string
  original?: string
  email?: string
}

export interface UserSourceListMatch {
  application_id: number
}

export interface UserSourceCreateData {
  RelayState: string
  SAMLResponse: string
  access_token?: string
  id?: string
  refresh: string
  auth_providers?: any
  before_id?: any
  email_field_id?: any
  integration_id?: any
  name?: any
  name_field_id?: any
  role_field_id?: any
  table_id?: any
  type?: any

  // Selects a custom action instead of the plain create:
  //   'force_token_auth' | 'token_auth'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface UserSourceUpdateData {
  id: number
  auth_providers?: any
  email_field_id?: any
  integration_id?: any
  name?: any
  name_field_id?: any
  role_field_id?: any
  table_id?: any
}

export interface UserSourceRemoveMatch {
  id: number
}

export interface UserSourceUserSource {
  id?: string
}

export interface UserSourceUserSourceUpdateData {
  id: number
  before_id?: any

  // Selects a custom action instead of the plain update:
  //   'move'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface UserSourceUserSourceRole {
}

export interface UserSourceUserSourceRoleLoadMatch {
  application_id: number
}

export interface UserWorkspaceInvitation {
  created_on: string
  email: string
  email_exists: boolean
  id: number
  invited_by: string
  workspace: string
  workspace_id: number
}

export interface UserWorkspaceInvitationLoadMatch {
  token: string
}

export interface UsersPerUserSource {
}

export interface UsersPerUserSourceLoadMatch {
  application_id: number
}

export interface View {
  allow_public_export?: boolean
  decorations?: any[]
  default_row_values?: any[]
  filter_groups?: any[]
  filter_type?: string
  filters?: any[]
  filters_disabled?: boolean
  group_bys?: any[]
  id: number
  name: string
  order: number
  owned_by_id?: number
  ownership_type: string
  public_view_has_password: boolean
  show_logo?: boolean
  sortings?: any[]
  table: Record<string, any>
  table_id: number
  type: string
}

export interface ViewLoadMatch {
  id: number
  include?: string
}

export interface ViewUpdateData {
  id: number
  include?: string
  filter_type?: string
  filters_disabled?: boolean
  name?: string
  ownership_type?: string
  card_cover_image_field?: any
  cover_image?: any
  date_field?: any
  description?: any
  end_date_field?: any
  frozen_column_count?: any
  group_by_layout?: any
  ical_public?: any
  logo_image?: any
  mode?: any
  public?: any
  public_view_password?: any
  row_height_size?: any
  row_identifier_type?: any
  single_select_field?: any
  start_date_field?: any
  submit_action?: any
  submit_action_message?: any
  submit_action_redirect_url?: any
  submit_text?: any
  timescale?: any
  title?: any

  // Selects a custom action instead of the plain update:
  //   'premium'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ViewDefaultValue {
  id?: string
  view_default_values?: any[]
}

export interface ViewDefaultValueUpdateData {
  id: number
  view_default_values?: any[]
}

export interface ViewFieldOption {
  id?: string
}

export interface ViewFieldOptionLoadMatch {
  id: number
}

export interface ViewFieldOptionUpdateData {
  id: number
  field_options?: any
}

export interface ViewFilter {
  field: number
  group?: number
  id: number
  preload_values: Record<string, any>
  type: string
  value?: string
  view: number
}

export interface ViewFilterLoadMatch {
  id: number
}

export interface ViewFilterListMatch {
  id: number
}

export interface ViewFilterCreateData {
  id: number
  field: number
  group?: number
  type: string
  value?: string
}

export interface ViewFilterUpdateData {
  id: number
  field?: number
  type?: string
  value?: string
}

export interface ViewFilterGroup {
  filter_type?: string
  id: number
  parent_group?: number
  view: number
}

export interface ViewFilterGroupLoadMatch {
  id: number
}

export interface ViewFilterGroupCreateData {
  id: number
  filter_type?: string
  parent_group?: number
}

export interface ViewFilterGroupUpdateData {
  id: number
  filter_type?: string
}

export interface ViewGroupBy {
  field: number
  id: number
  order?: string
  priority: number
  type?: string
  view: number
  width?: number
}

export interface ViewGroupByLoadMatch {
  id: number
}

export interface ViewGroupByListMatch {
  id: number
}

export interface ViewGroupByCreateData {
  id: number
  field: number
  order?: string
  type?: string
  width?: number
}

export interface ViewGroupByUpdateData {
  id: number
  field?: number
  order?: string
  type?: string
  width?: number
}

export interface ViewSort {
  field: number
  id: number
  order?: string
  priority: number
  type?: string
  view: number
}

export interface ViewSortLoadMatch {
  id: number
}

export interface ViewSortListMatch {
  id: number

  // Selects a custom action instead of the plain list:
  //   'sortings'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ViewSortCreateData {
  id: number
  field: number
  order?: string
  type?: string

  // Selects a custom action instead of the plain create:
  //   'sortings'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ViewSortUpdateData {
  id: number
  field?: number
  order?: string
  type?: string
}

export interface ViewView {
  id?: string
}

export interface ViewViewLoadMatch {
  table_id: number
  include?: string
  limit?: number
  type?: string
}

export interface ViewViewCreateData {
  table_id: number
  include?: string
  id?: string
  card_cover_image_field?: any
  cover_image?: any
  date_field?: any
  description?: any
  end_date_field?: any
  filter_type?: any
  filters_disabled?: any
  frozen_column_count?: any
  group_by_layout?: any
  ical_public?: any
  logo_image?: any
  mode?: any
  name?: any
  ownership_type?: any
  public?: any
  row_height_size?: any
  row_identifier_type?: any
  single_select_field?: any
  start_date_field?: any
  submit_action?: any
  submit_action_message?: any
  submit_action_redirect_url?: any
  submit_text?: any
  timescale?: any
  title?: any
  type?: any

  // Selects a custom action instead of the plain create:
  //   'copy-configuration' | 'duplicate' | 'rotate-slug'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Workspace {
  ai_features: string
  base_url: string
  captcha_token?: string
  created_on: string
  email: string
  generative_ai_models_enabled: string
  has_more: boolean
  highest_role_uid?: string
  id: number
  name: string
  order: number
  permissions?: string
  results: any[]
  role_uid?: string
  teams?: any[]
  to_be_deleted: boolean
  two_factor_auth: string
  unread_notifications_count: number
  user_id: number
  users: any[]
  workspace: number
}

export interface WorkspaceLoadMatch {
  id: number
  search?: string
  sort?: string
}

export interface WorkspaceListMatch {
  ai_features?: string
  base_url?: string
  captcha_token?: string
  created_on?: string
  email?: string
  generative_ai_models_enabled?: string
  has_more?: boolean
  highest_role_uid?: string
  id?: number
  name?: string
  order?: number
  permissions?: string
  results?: any[]
  role_uid?: string
  teams?: any[]
  to_be_deleted?: boolean
  two_factor_auth?: string
  unread_notifications_count?: number
  user_id?: number
  users?: any[]
  workspace?: number
}

export interface WorkspaceCreateData {
  id: number
  base_url: string
  captcha_token?: string

  // Selects a custom action instead of the plain create:
  //   'export_async' | 'import_async' | 'import_upload_file' | 'leave' | 'order'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface WorkspaceUpdateData {
  id: number
}

export interface WorkspaceRemoveMatch {
  id: number
}

export interface WorkspaceInvitation {
  created_on: string
  email: string
  id: number
  permissions?: string
  workspace: number
}

export interface WorkspaceInvitationLoadMatch {
  id: number
}

export interface WorkspaceInvitationCreateData {
  invitation_id: number
  email: string
  permissions?: string
  workspace: number
}

export interface WorkspaceInvitationUpdateData {
  id: number
  permissions?: string
}

export interface WorkspaceInvitationRemoveMatch {
  id: number
}

export interface WorkspaceStructure {
  id: number
  name: string
  tables: string
}

export interface WorkspaceStructureLoadMatch {
  id: string
}

export interface WorkspaceUser {
  created_on: string
  email: string
  id: number
  name: string
  permissions?: string
  to_be_deleted: boolean
  two_factor_auth: string
  user_id: number
  workspace: number
}

export interface WorkspaceUserUpdateData {
  id: number
  permissions?: string
}

export interface WorkspaceUserWorkspace {
  ai_features: string
  generative_ai_models_enabled: string
  id: number
  name: string
  order: number
  permissions: string
  unread_notifications_count: number
  users: any[]
}

export interface WorkspaceUserWorkspaceCreateData {
}

