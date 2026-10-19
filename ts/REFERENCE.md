# Baserow TypeScript SDK Reference

Complete API reference for the Baserow TypeScript SDK.


## BaserowSDK

### Constructor

```ts
new BaserowSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `BaserowSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = BaserowSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `BaserowSDK` instance in test mode.


### Instance Methods

#### `AbuseReport(data?: object)`

Create a new `AbuseReport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AbuseReportEntity` instance.

#### `Admin(data?: object)`

Create a new `Admin` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminEntity` instance.

#### `AdminDashboard(data?: object)`

Create a new `AdminDashboard` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminDashboardEntity` instance.

#### `AdminDataScanner(data?: object)`

Create a new `AdminDataScanner` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminDataScannerEntity` instance.

#### `AdminView(data?: object)`

Create a new `AdminView` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminViewEntity` instance.

#### `AdminWorkspaceOption(data?: object)`

Create a new `AdminWorkspaceOption` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminWorkspaceOptionEntity` instance.

#### `Agent(data?: object)`

Create a new `Agent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentEntity` instance.

#### `AgentPaginationAgent(data?: object)`

Create a new `AgentPaginationAgent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AgentPaginationAgentEntity` instance.

#### `AiAssistant(data?: object)`

Create a new `AiAssistant` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiAssistantEntity` instance.

#### `AiProvider(data?: object)`

Create a new `AiProvider` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiProviderEntity` instance.

#### `AiProviderFeatureSetting(data?: object)`

Create a new `AiProviderFeatureSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiProviderFeatureSettingEntity` instance.

#### `AiProviderModel(data?: object)`

Create a new `AiProviderModel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiProviderModelEntity` instance.

#### `AiProviderModelDiscovery(data?: object)`

Create a new `AiProviderModelDiscovery` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiProviderModelDiscoveryEntity` instance.

#### `AiProviderModelUsageEntry(data?: object)`

Create a new `AiProviderModelUsageEntry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiProviderModelUsageEntryEntity` instance.

#### `AiProviderModelsTest(data?: object)`

Create a new `AiProviderModelsTest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiProviderModelsTestEntity` instance.

#### `AiProviderType(data?: object)`

Create a new `AiProviderType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AiProviderTypeEntity` instance.

#### `Application(data?: object)`

Create a new `Application` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApplicationEntity` instance.

#### `ApplicationApplication(data?: object)`

Create a new `ApplicationApplication` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApplicationApplicationEntity` instance.

#### `AssistantChat(data?: object)`

Create a new `AssistantChat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssistantChatEntity` instance.

#### `AuditLog(data?: object)`

Create a new `AuditLog` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuditLogEntity` instance.

#### `AuditLogActionType(data?: object)`

Create a new `AuditLogActionType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuditLogActionTypeEntity` instance.

#### `AuditLogUser(data?: object)`

Create a new `AuditLogUser` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuditLogUserEntity` instance.

#### `Auth(data?: object)`

Create a new `Auth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuthEntity` instance.

#### `AuthenticationProviderAuthProvider(data?: object)`

Create a new `AuthenticationProviderAuthProvider` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuthenticationProviderAuthProviderEntity` instance.

#### `AutomationNode(data?: object)`

Create a new `AutomationNode` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AutomationNodeEntity` instance.

#### `AutomationNodeHistory(data?: object)`

Create a new `AutomationNodeHistory` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AutomationNodeHistoryEntity` instance.

#### `AutomationNodeResult(data?: object)`

Create a new `AutomationNodeResult` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AutomationNodeResultEntity` instance.

#### `AutomationNodeTypeAutomationNode(data?: object)`

Create a new `AutomationNodeTypeAutomationNode` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AutomationNodeTypeAutomationNodeEntity` instance.

#### `AutomationWorkflow(data?: object)`

Create a new `AutomationWorkflow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AutomationWorkflowEntity` instance.

#### `AutomationWorkflowHistory(data?: object)`

Create a new `AutomationWorkflowHistory` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AutomationWorkflowHistoryEntity` instance.

#### `BuilderDataSource(data?: object)`

Create a new `BuilderDataSource` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BuilderDataSourceEntity` instance.

#### `BuilderDomain(data?: object)`

Create a new `BuilderDomain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BuilderDomainEntity` instance.

#### `BuilderElement(data?: object)`

Create a new `BuilderElement` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BuilderElementEntity` instance.

#### `BuilderPage(data?: object)`

Create a new `BuilderPage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BuilderPageEntity` instance.

#### `BuilderPreview(data?: object)`

Create a new `BuilderPreview` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BuilderPreviewEntity` instance.

#### `BuilderPreviewGrant(data?: object)`

Create a new `BuilderPreviewGrant` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BuilderPreviewGrantEntity` instance.

#### `BuilderPreviewHandoff(data?: object)`

Create a new `BuilderPreviewHandoff` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BuilderPreviewHandoffEntity` instance.

#### `BuilderPublic(data?: object)`

Create a new `BuilderPublic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BuilderPublicEntity` instance.

#### `BuilderWorkflowAction(data?: object)`

Create a new `BuilderWorkflowAction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BuilderWorkflowActionEntity` instance.

#### `BuilderWorkflowActionTypeBuilderWorkflowAction(data?: object)`

Create a new `BuilderWorkflowActionTypeBuilderWorkflowAction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BuilderWorkflowActionTypeBuilderWorkflowActionEntity` instance.

#### `ById(data?: object)`

Create a new `ById` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ByIdEntity` instance.

#### `ByName(data?: object)`

Create a new `ByName` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ByNameEntity` instance.

#### `Calendar(data?: object)`

Create a new `Calendar` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CalendarEntity` instance.

#### `CalendarViewExample(data?: object)`

Create a new `CalendarViewExample` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CalendarViewExampleEntity` instance.

#### `Callback(data?: object)`

Create a new `Callback` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CallbackEntity` instance.

#### `Cancel(data?: object)`

Create a new `Cancel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CancelEntity` instance.

#### `ColorTypographyButtonImagePageInputTableLinklinkActiveText(data?: object)`

Create a new `ColorTypographyButtonImagePageInputTableLinklinkActiveText` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ColorTypographyButtonImagePageInputTableLinklinkActiveTextEntity` instance.

#### `CoreWebhook(data?: object)`

Create a new `CoreWebhook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CoreWebhookEntity` instance.

#### `DashboardDataSource(data?: object)`

Create a new `DashboardDataSource` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DashboardDataSourceEntity` instance.

#### `DashboardWidget(data?: object)`

Create a new `DashboardWidget` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DashboardWidgetEntity` instance.

#### `DashboardWidgetWidget(data?: object)`

Create a new `DashboardWidgetWidget` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DashboardWidgetWidgetEntity` instance.

#### `DataScan(data?: object)`

Create a new `DataScan` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DataScanEntity` instance.

#### `DataSync(data?: object)`

Create a new `DataSync` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DataSyncEntity` instance.

#### `DatabaseTable(data?: object)`

Create a new `DatabaseTable` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DatabaseTableEntity` instance.

#### `DatabaseTableField(data?: object)`

Create a new `DatabaseTableField` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DatabaseTableFieldEntity` instance.

#### `DatabaseTableGridView(data?: object)`

Create a new `DatabaseTableGridView` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DatabaseTableGridViewEntity` instance.

#### `DatabaseTableRow(data?: object)`

Create a new `DatabaseTableRow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DatabaseTableRowEntity` instance.

#### `DatabaseTableView(data?: object)`

Create a new `DatabaseTableView` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DatabaseTableViewEntity` instance.

#### `DatabaseTableViewDecoration(data?: object)`

Create a new `DatabaseTableViewDecoration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DatabaseTableViewDecorationEntity` instance.

#### `DatabaseTableViewFilter(data?: object)`

Create a new `DatabaseTableViewFilter` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DatabaseTableViewFilterEntity` instance.

#### `DatabaseTableViewGrouping(data?: object)`

Create a new `DatabaseTableViewGrouping` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DatabaseTableViewGroupingEntity` instance.

#### `DatabaseTableViewSorting(data?: object)`

Create a new `DatabaseTableViewSorting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DatabaseTableViewSortingEntity` instance.

#### `DatabaseTableWebhook(data?: object)`

Create a new `DatabaseTableWebhook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DatabaseTableWebhookEntity` instance.

#### `DatabaseToken(data?: object)`

Create a new `DatabaseToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DatabaseTokenEntity` instance.

#### `DatabaseWorkflowActionTypeDatabaseWorkflowAction(data?: object)`

Create a new `DatabaseWorkflowActionTypeDatabaseWorkflowAction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DatabaseWorkflowActionTypeDatabaseWorkflowActionEntity` instance.

#### `DecoratorValueProviderTypeViewDecoration(data?: object)`

Create a new `DecoratorValueProviderTypeViewDecoration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DecoratorValueProviderTypeViewDecorationEntity` instance.

#### `Dispatch(data?: object)`

Create a new `Dispatch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DispatchEntity` instance.

#### `Domain(data?: object)`

Create a new `Domain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DomainEntity` instance.

#### `Duplicate(data?: object)`

Create a new `Duplicate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DuplicateEntity` instance.

#### `Element(data?: object)`

Create a new `Element` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ElementEntity` instance.

#### `ElementTypeElement(data?: object)`

Create a new `ElementTypeElement` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ElementTypeElementEntity` instance.

#### `Email(data?: object)`

Create a new `Email` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmailEntity` instance.

#### `ExampleBatchRow(data?: object)`

Create a new `ExampleBatchRow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExampleBatchRowEntity` instance.

#### `ExampleBatchUpdateRow(data?: object)`

Create a new `ExampleBatchUpdateRow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExampleBatchUpdateRowEntity` instance.

#### `ExamplePublicRowResponseSerializerWithUserFieldName(data?: object)`

Create a new `ExamplePublicRowResponseSerializerWithUserFieldName` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExamplePublicRowResponseSerializerWithUserFieldNameEntity` instance.

#### `ExampleRow(data?: object)`

Create a new `ExampleRow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExampleRowEntity` instance.

#### `ExampleRowResponseSerializerWithUserFieldName(data?: object)`

Create a new `ExampleRowResponseSerializerWithUserFieldName` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExampleRowResponseSerializerWithUserFieldNameEntity` instance.

#### `Export(data?: object)`

Create a new `Export` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExportEntity` instance.

#### `ExportJob(data?: object)`

Create a new `ExportJob` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExportJobEntity` instance.

#### `Field(data?: object)`

Create a new `Field` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FieldEntity` instance.

#### `FieldField(data?: object)`

Create a new `FieldField` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FieldFieldEntity` instance.

#### `FieldFieldSerializerWithRelatedField(data?: object)`

Create a new `FieldFieldSerializerWithRelatedField` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FieldFieldSerializerWithRelatedFieldEntity` instance.

#### `FieldPermissionSubjectOption(data?: object)`

Create a new `FieldPermissionSubjectOption` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FieldPermissionSubjectOptionEntity` instance.

#### `FieldRule(data?: object)`

Create a new `FieldRule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FieldRuleEntity` instance.

#### `FieldRulesResponseFieldRule(data?: object)`

Create a new `FieldRulesResponseFieldRule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FieldRulesResponseFieldRuleEntity` instance.

#### `FormViewSubmitted(data?: object)`

Create a new `FormViewSubmitted` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FormViewSubmittedEntity` instance.

#### `Full(data?: object)`

Create a new `Full` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FullEntity` instance.

#### `GenerateFormulaWithAi(data?: object)`

Create a new `GenerateFormulaWithAi` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenerateFormulaWithAiEntity` instance.

#### `GridViewGroupByData(data?: object)`

Create a new `GridViewGroupByData` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GridViewGroupByDataEntity` instance.

#### `Health(data?: object)`

Create a new `Health` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HealthEntity` instance.

#### `InboundEmail(data?: object)`

Create a new `InboundEmail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InboundEmailEntity` instance.

#### `Install(data?: object)`

Create a new `Install` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InstallEntity` instance.

#### `InstanceId(data?: object)`

Create a new `InstanceId` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InstanceIdEntity` instance.

#### `Integration(data?: object)`

Create a new `Integration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IntegrationEntity` instance.

#### `IntegrationIntegration(data?: object)`

Create a new `IntegrationIntegration` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IntegrationIntegrationEntity` instance.

#### `IntegrationServiceDashboardDataSource(data?: object)`

Create a new `IntegrationServiceDashboardDataSource` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IntegrationServiceDashboardDataSourceEntity` instance.

#### `IntegrationServiceDataSource(data?: object)`

Create a new `IntegrationServiceDataSource` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IntegrationServiceDataSourceEntity` instance.

#### `IntegrationServicePublicDataSource(data?: object)`

Create a new `IntegrationServicePublicDataSource` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IntegrationServicePublicDataSourceEntity` instance.

#### `InvalidRow(data?: object)`

Create a new `InvalidRow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InvalidRowEntity` instance.

#### `Job(data?: object)`

Create a new `Job` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `JobEntity` instance.

#### `JobTypeJob(data?: object)`

Create a new `JobTypeJob` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `JobTypeJobEntity` instance.

#### `Kanban(data?: object)`

Create a new `Kanban` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `KanbanEntity` instance.

#### `KanbanViewExample(data?: object)`

Create a new `KanbanViewExample` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `KanbanViewExampleEntity` instance.

#### `LastViewedItem(data?: object)`

Create a new `LastViewedItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LastViewedItemEntity` instance.

#### `License(data?: object)`

Create a new `License` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LicenseEntity` instance.

#### `LicenseUser(data?: object)`

Create a new `LicenseUser` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LicenseUserEntity` instance.

#### `LicenseUserLookup(data?: object)`

Create a new `LicenseUserLookup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LicenseUserLookupEntity` instance.

#### `LicenseWithUser(data?: object)`

Create a new `LicenseWithUser` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LicenseWithUserEntity` instance.

#### `ListDataSyncProperty(data?: object)`

Create a new `ListDataSyncProperty` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListDataSyncPropertyEntity` instance.

#### `Login(data?: object)`

Create a new `Login` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LoginEntity` instance.

#### `McpEndpoint(data?: object)`

Create a new `McpEndpoint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `McpEndpointEntity` instance.

#### `Message(data?: object)`

Create a new `Message` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MessageEntity` instance.

#### `Notification(data?: object)`

Create a new `Notification` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NotificationEntity` instance.

#### `OnboardingPromptSuggestion(data?: object)`

Create a new `OnboardingPromptSuggestion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OnboardingPromptSuggestionEntity` instance.

#### `OpenApiRoleAssignment(data?: object)`

Create a new `OpenApiRoleAssignment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OpenApiRoleAssignmentEntity` instance.

#### `Page(data?: object)`

Create a new `Page` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PageEntity` instance.

#### `PaginationSerializerExampleRowResponseSerializerWithUser(data?: object)`

Create a new `PaginationSerializerExampleRowResponseSerializerWithUser` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginationSerializerExampleRowResponseSerializerWithUserEntity` instance.

#### `PaginationSerializerLinkRowValue(data?: object)`

Create a new `PaginationSerializerLinkRowValue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginationSerializerLinkRowValueEntity` instance.

#### `PaginationSerializerNotificationRecipient(data?: object)`

Create a new `PaginationSerializerNotificationRecipient` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginationSerializerNotificationRecipientEntity` instance.

#### `PaginationSerializerRowComment(data?: object)`

Create a new `PaginationSerializerRowComment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginationSerializerRowCommentEntity` instance.

#### `PaginationSerializerTrashContent(data?: object)`

Create a new `PaginationSerializerTrashContent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginationSerializerTrashContentEntity` instance.

#### `PaginationSerializerWithGalleryViewFieldOptionsExampleRow(data?: object)`

Create a new `PaginationSerializerWithGalleryViewFieldOptionsExampleRow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginationSerializerWithGalleryViewFieldOptionsExampleRowEntity` instance.

#### `PaginationSerializerWithGridViewFieldOptionsExampleRow(data?: object)`

Create a new `PaginationSerializerWithGridViewFieldOptionsExampleRow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginationSerializerWithGridViewFieldOptionsExampleRowEntity` instance.

#### `PaginationSerializerWithTimelineViewFieldOptionsExampleRow(data?: object)`

Create a new `PaginationSerializerWithTimelineViewFieldOptionsExampleRow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PaginationSerializerWithTimelineViewFieldOptionsExampleRowEntity` instance.

#### `PasswordFieldAuthentication(data?: object)`

Create a new `PasswordFieldAuthentication` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PasswordFieldAuthenticationEntity` instance.

#### `PeriodicDataSyncInterval(data?: object)`

Create a new `PeriodicDataSyncInterval` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PeriodicDataSyncIntervalEntity` instance.

#### `Permission(data?: object)`

Create a new `Permission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PermissionEntity` instance.

#### `PublicBuilderWorkflowActionTypeBuilderWorkflowAction(data?: object)`

Create a new `PublicBuilderWorkflowActionTypeBuilderWorkflowAction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PublicBuilderWorkflowActionTypeBuilderWorkflowActionEntity` instance.

#### `PublicFormView(data?: object)`

Create a new `PublicFormView` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PublicFormViewEntity` instance.

#### `PublicPaginationSerializerWithGalleryViewFieldOptions(data?: object)`

Create a new `PublicPaginationSerializerWithGalleryViewFieldOptions` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PublicPaginationSerializerWithGalleryViewFieldOptionsEntity` instance.

#### `PublicPaginationSerializerWithGridViewFieldOptionsExample(data?: object)`

Create a new `PublicPaginationSerializerWithGridViewFieldOptionsExample` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PublicPaginationSerializerWithGridViewFieldOptionsExampleEntity` instance.

#### `PublicPaginationSerializerWithTimelineViewFieldOptions(data?: object)`

Create a new `PublicPaginationSerializerWithTimelineViewFieldOptions` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PublicPaginationSerializerWithTimelineViewFieldOptionsEntity` instance.

#### `PublicViewAuth(data?: object)`

Create a new `PublicViewAuth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PublicViewAuthEntity` instance.

#### `PublicViewInfo(data?: object)`

Create a new `PublicViewInfo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PublicViewInfoEntity` instance.

#### `RelatedField(data?: object)`

Create a new `RelatedField` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RelatedFieldEntity` instance.

#### `RowComment(data?: object)`

Create a new `RowComment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RowCommentEntity` instance.

#### `RowHistory(data?: object)`

Create a new `RowHistory` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RowHistoryEntity` instance.

#### `SecureFileServe(data?: object)`

Create a new `SecureFileServe` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecureFileServeEntity` instance.

#### `Setting(data?: object)`

Create a new `Setting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SettingEntity` instance.

#### `Snapshot(data?: object)`

Create a new `Snapshot` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SnapshotEntity` instance.

#### `Table(data?: object)`

Create a new `Table` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TableEntity` instance.

#### `TableWebhook(data?: object)`

Create a new `TableWebhook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TableWebhookEntity` instance.

#### `TableWebhookTestCall(data?: object)`

Create a new `TableWebhookTestCall` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TableWebhookTestCallEntity` instance.

#### `TableWithoutDataSync(data?: object)`

Create a new `TableWithoutDataSync` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TableWithoutDataSyncEntity` instance.

#### `Team(data?: object)`

Create a new `Team` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamEntity` instance.

#### `TeamSubject(data?: object)`

Create a new `TeamSubject` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamSubjectEntity` instance.

#### `Template(data?: object)`

Create a new `Template` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TemplateEntity` instance.

#### `Token(data?: object)`

Create a new `Token` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TokenEntity` instance.

#### `Trash(data?: object)`

Create a new `Trash` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TrashEntity` instance.

#### `TwoFactorAuthTypeTwoFactorAuth(data?: object)`

Create a new `TwoFactorAuthTypeTwoFactorAuth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TwoFactorAuthTypeTwoFactorAuthEntity` instance.

#### `Type(data?: object)`

Create a new `Type` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TypeEntity` instance.

#### `UniqueRowValue(data?: object)`

Create a new `UniqueRowValue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UniqueRowValueEntity` instance.

#### `UpdateFieldPermission(data?: object)`

Create a new `UpdateFieldPermission` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateFieldPermissionEntity` instance.

#### `User(data?: object)`

Create a new `User` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserEntity` instance.

#### `UserFile(data?: object)`

Create a new `UserFile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserFileEntity` instance.

#### `UserSource(data?: object)`

Create a new `UserSource` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserSourceEntity` instance.

#### `UserSourceUserSource(data?: object)`

Create a new `UserSourceUserSource` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserSourceUserSourceEntity` instance.

#### `UserSourceUserSourceRole(data?: object)`

Create a new `UserSourceUserSourceRole` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserSourceUserSourceRoleEntity` instance.

#### `UserWorkspaceInvitation(data?: object)`

Create a new `UserWorkspaceInvitation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserWorkspaceInvitationEntity` instance.

#### `UsersPerUserSource(data?: object)`

Create a new `UsersPerUserSource` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UsersPerUserSourceEntity` instance.

#### `View(data?: object)`

Create a new `View` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ViewEntity` instance.

#### `ViewDefaultValue(data?: object)`

Create a new `ViewDefaultValue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ViewDefaultValueEntity` instance.

#### `ViewFieldOption(data?: object)`

Create a new `ViewFieldOption` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ViewFieldOptionEntity` instance.

#### `ViewFilter(data?: object)`

Create a new `ViewFilter` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ViewFilterEntity` instance.

#### `ViewFilterGroup(data?: object)`

Create a new `ViewFilterGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ViewFilterGroupEntity` instance.

#### `ViewGroupBy(data?: object)`

Create a new `ViewGroupBy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ViewGroupByEntity` instance.

#### `ViewSort(data?: object)`

Create a new `ViewSort` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ViewSortEntity` instance.

#### `ViewView(data?: object)`

Create a new `ViewView` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ViewViewEntity` instance.

#### `Workspace(data?: object)`

Create a new `Workspace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkspaceEntity` instance.

#### `WorkspaceInvitation(data?: object)`

Create a new `WorkspaceInvitation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkspaceInvitationEntity` instance.

#### `WorkspaceStructure(data?: object)`

Create a new `WorkspaceStructure` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkspaceStructureEntity` instance.

#### `WorkspaceUser(data?: object)`

Create a new `WorkspaceUser` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkspaceUserEntity` instance.

#### `WorkspaceUserWorkspace(data?: object)`

Create a new `WorkspaceUserWorkspace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkspaceUserWorkspaceEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |
| `fetchargs.ctrl.signal` | `AbortSignal` | Aborts the request in flight: `ok` is then `false` and `err.code` is `request_aborted`. |

**Returns:** `Promise<{ ok, status, headers, data }>`. On a failure
`ok` is `false` and `err` holds the error.

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `BaserowSDK.test()`.

**Returns:** `BaserowSDK` instance in test mode.

#### Cancelling a call

Every entity operation takes an optional `ctrl` object after its match or
data, and an `AbortSignal` in `ctrl.signal` cancels the request in flight.
The operation then rejects with an error whose `code` is
`request_aborted` and whose `cause` is the signal's reason. A request
whose signal has already aborted is not sent. `stream()` takes the signal
as `callopts.signal`, and ends when it aborts.


---

## AbuseReportEntity

```ts
const abuse_report = client.AbuseReport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `captcha_token` | `string` | No | The captcha response token, required when captcha is enabled. |
| `description` | `string` | Yes | A detailed description of why the resource is abusive. |
| `email` | `string` | Yes | The email address of the person reporting the abuse. |
| `identifier` | `string` | Yes | The public identifier of the reported resource, for example the slug of a publicly shared view. |
| `name` | `string` | Yes | The name of the person reporting the abuse. |
| `resource_type` | `string` | Yes | The type of publicly shared resource that is being reported. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AbuseReport().create({
  description: 'example_description',
  email: 'example_email',
  identifier: 'example_identifier',
  name: 'example_name',
  resource_type: 'example_resource_type',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AbuseReportEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminEntity

```ts
const admin = client.Admin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_token` | `string` | No | 'access_token' can be used to authorize for other endpoints that require authorization. |
| `application_count` | `number` | Yes |  |
| `application_users` | `number` | Yes | The amount of application builder users permitted in this license. |
| `application_users_taken` | `number` | Yes | The amount of application builder users used so far in this license. |
| `created_on` | `string` | Yes |  |
| `free_users` | `number` | Yes |  |
| `free_users_count` | `number` | Yes | The amount of free users that are currently using the license. |
| `id` | `number` | Yes |  |
| `is_active` | `boolean` | Yes | Indicates if the backend deems the license valid. |
| `issued_on` | `string` | Yes | The date when the license was issued. |
| `issued_to_email` | `string` | Yes | Indicates to which email address the license has been issued. |
| `issued_to_name` | `string` | Yes | Indicates to whom the license has been issued. |
| `last_check` | `string` | No |  |
| `license` | `string` | Yes | The license that you want to register. |
| `license_id` | `string` | Yes | Unique identifier of the license. |
| `name` | `string` | Yes |  |
| `product_code` | `string` | Yes | The product code that indicates what the license unlocks. |
| `row_count` | `number` | Yes |  |
| `seats` | `number` | Yes | The maximum amount of users that can use the license. |
| `seats_taken` | `number` | Yes | The amount of users that are currently using the license. |
| `storage_usage` | `number` | No |  |
| `token` | `string` | No | Deprecated. |
| `user` | `Record<string, any>` | No | An object containing information related to the user. |
| `users` | `any[]` | Yes |  |
| `valid_from` | `string` | Yes | From which timestamp the license becomes active. |
| `valid_through` | `string` | Yes | Until which timestamp the license is active. |

### Field Usage by Operation

| Field | list | create | remove |
| --- | --- | --- | --- |
| `access_token` | - | - | - |
| `application_count` | - | - | - |
| `application_users` | - | - | - |
| `application_users_taken` | - | - | - |
| `created_on` | - | - | - |
| `free_users` | - | - | - |
| `free_users_count` | - | - | - |
| `id` | - | - | - |
| `is_active` | - | - | - |
| `issued_on` | - | - | - |
| `issued_to_email` | - | - | - |
| `issued_to_name` | - | - | - |
| `last_check` | - | - | - |
| `license` | - | - | - |
| `license_id` | - | - | - |
| `name` | - | - | - |
| `product_code` | - | - | - |
| `row_count` | - | - | - |
| `seats` | - | - | - |
| `seats_taken` | - | - | - |
| `storage_usage` | - | - | - |
| `token` | - | - | - |
| `user` | - | Yes | - |
| `users` | - | - | - |
| `valid_from` | - | - | - |
| `valid_through` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Admin().create({
  application_count: 1,
  application_users: 1,
  is_active: true,
  issued_on: 'example_issued_on',
  issued_to_email: 'example_issued_to_email',
  issued_to_name: 'example_issued_to_name',
  license: 'example_license',
  license_id: 'example_license_id',
  name: 'example_name',
  product_code: 'example_product_code',
  seats: 1,
  user: {},
  users: [],
  valid_from: 'example_valid_from',
  valid_through: 'example_valid_through',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Admin().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Admin().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminDashboardEntity

```ts
const admin_dashboard = client.AdminDashboard()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active_users_last_24_hours` | `number` | Yes |  |
| `active_users_last_30_days` | `number` | Yes |  |
| `active_users_last_7_days` | `number` | Yes |  |
| `active_users_per_day` | `any[]` | Yes |  |
| `new_users_last_24_hours` | `number` | Yes |  |
| `new_users_last_30_days` | `number` | Yes |  |
| `new_users_last_7_days` | `number` | Yes |  |
| `new_users_per_day` | `any[]` | Yes |  |
| `previous_active_users_last_24_hours` | `number` | Yes |  |
| `previous_active_users_last_30_days` | `number` | Yes |  |
| `previous_active_users_last_7_days` | `number` | Yes |  |
| `previous_new_users_last_24_hours` | `number` | Yes |  |
| `previous_new_users_last_30_days` | `number` | Yes |  |
| `previous_new_users_last_7_days` | `number` | Yes |  |
| `total_applications` | `number` | Yes |  |
| `total_users` | `number` | Yes |  |
| `total_workspaces` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AdminDashboard().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminDashboardEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminDataScannerEntity

```ts
const admin_data_scanner = client.AdminDataScanner()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | Yes | The date and time when the export job was created. |
| `csv_column_separator` | `string` | No | The value used to separate columns in the resulting csv file. |
| `csv_first_row_header` | `boolean` | No | Whether or not to generate a header row at the top of the csv file. |
| `database_id` | `string` | Yes |  |
| `database_name` | `string` | Yes |  |
| `export_charset` | `string` | No | The character set to use when creating the export file. |
| `exported_file_name` | `string` | Yes | The name of the file that was created by the export job. |
| `field_name` | `string` | Yes |  |
| `filter_scan_id` | `number` | No | Optional: Filter results by scan ID. |
| `first_identified_on` | `string` | Yes |  |
| `frequency` | `string` | No | * `manual` - Manual * `hourly` - Hourly * `daily` - Daily * `weekly` - Weekly |
| `id` | `number` | Yes |  |
| `is_running` | `boolean` | No |  |
| `last_error` | `string` | No |  |
| `last_identified_on` | `string` | Yes |  |
| `last_run_finished_at` | `string` | No |  |
| `last_run_started_at` | `string` | No |  |
| `list_items` | `string` | Yes |  |
| `matched_value` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `pattern` | `string` | No |  |
| `results_count` | `string` | Yes |  |
| `row_id` | `number` | Yes |  |
| `scan_all_workspaces` | `boolean` | No |  |
| `scan_id` | `number` | Yes |  |
| `scan_name` | `string` | Yes |  |
| `scan_type` | `string` | Yes | * `pattern` - Pattern * `list_of_values` - List of values * `list_table` - List Table |
| `source_database_id` | `string` | Yes |  |
| `source_field_id` | `string` | Yes |  |
| `source_table_id` | `string` | Yes |  |
| `source_workspace_id` | `string` | Yes |  |
| `table_id` | `number` | Yes |  |
| `table_name` | `string` | Yes |  |
| `updated_on` | `string` | Yes |  |
| `url` | `string` | Yes | The URL to download the exported file. |
| `whole_words` | `boolean` | No |  |
| `workspace_ids` | `string` | Yes |  |
| `workspace_name` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AdminDataScanner().create({
  first_identified_on: 'example_first_identified_on',
  last_identified_on: 'example_last_identified_on',
  matched_value: 'example_matched_value',
  name: 'example_name',
  row_id: 1,
  scan_type: 'example_scan_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AdminDataScanner().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.AdminDataScanner().remove({ result_id: 'result_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminDataScannerEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminViewEntity

```ts
const admin_view = client.AdminView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | Yes |  |
| `database_id` | `number` | Yes |  |
| `database_name` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `owned_by_id` | `number` | Yes |  |
| `owned_by_username` | `string` | Yes |  |
| `ownership_type` | `string` | No | Indicates how the access to the view is determined. |
| `public` | `boolean` | No | Indicates whether the view is publicly accessible to visitors. |
| `public_view_has_password` | `boolean` | Yes |  |
| `slug` | `string` | No | The unique slug where the view can be accessed publicly on. |
| `table_id` | `number` | Yes |  |
| `table_name` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `workspace_id` | `number` | Yes |  |
| `workspace_name` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AdminView().create({
  view_id: 1,
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AdminView().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AdminView().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminWorkspaceOptionEntity

```ts
const admin_workspace_option = client.AdminWorkspaceOption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `value` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AdminWorkspaceOption().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminWorkspaceOptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentEntity

```ts
const agent = client.Agent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `last_active` | `string` | No |  |
| `name` | `string` | Yes |  |
| `role_uid` | `string` | No |  |
| `team_ids` | `any[]` | No |  |
| `teams` | `any[]` | Yes |  |
| `updated_on` | `string` | Yes |  |
| `workspace_id` | `number` | Yes |  |

### Field Usage by Operation

| Field | create | update | remove |
| --- | --- | --- | --- |
| `created_on` | - | - | - |
| `id` | - | - | - |
| `last_active` | - | - | - |
| `name` | - | Yes | - |
| `role_uid` | - | - | - |
| `team_ids` | - | - | - |
| `teams` | - | - | - |
| `updated_on` | - | - | - |
| `workspace_id` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Agent().create({
  workspace_id: 1,
  name: 'example_name',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Agent().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Agent().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AgentPaginationAgentEntity

```ts
const agent_pagination_agent = client.AgentPaginationAgent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes | The total amount of results. |
| `next` | `string` | Yes | URL to the next page. |
| `previous` | `string` | Yes | URL to the previous page. |
| `results` | `any[]` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AgentPaginationAgent().load({ workspace_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AgentPaginationAgentEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiAssistantEntity

```ts
const ai_assistant = client.AiAssistant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | Yes | The content of the message. |
| `ui_context` | `any` | Yes | The UI context related to what the user was looking at when the message was sent. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AiAssistant().create({
  chat_id: 'example_chat_id',
  content: 'example_content',
  ui_context: 'example_ui_context',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.AiAssistant().remove({ chat_id: 'chat_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AiAssistant().update({
  message_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiAssistantEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiProviderEntity

```ts
const ai_provider = client.AiProvider()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_key` | `string` | No |  |
| `extra_settings` | `Record<string, any>` | No |  |
| `id` | `string` | No |  |
| `is_active` | `boolean` | No |  |
| `models` | `any[]` | No |  |
| `provider_type` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AiProvider().create({
  provider_type: 'example_provider_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AiProvider().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.AiProvider().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AiProvider().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiProviderEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiProviderFeatureSettingEntity

```ts
const ai_provider_feature_setting = client.AiProviderFeatureSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `feature_type` | `string` | Yes |  |
| `inherited_model` | `any` | Yes |  |
| `inherited_state` | `any` | Yes | The state of the instance selection this workspace inherits, or null at instance scope. |
| `mode` | `string` | Yes | * `inherit` - inherit * `legacy` - legacy * `model` - model * `disabled` - disabled |
| `model` | `any` | Yes |  |
| `model_id` | `number` | No |  |
| `state` | `string` | Yes | * `configured` - configured * `inherited` - inherited * `overridden` - overridden * `disabled` - disabled * `unconfigured` - unconfigured * `invalid` - invalid |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AiProviderFeatureSetting().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AiProviderFeatureSetting().update({
  feature_type: 'feature_type',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiProviderFeatureSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiProviderModelEntity

```ts
const ai_provider_model = client.AiProviderModel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `feature_types` | `any[]` | No | The AI features allowed to select this model. |
| `id` | `number` | Yes |  |
| `is_enabled` | `boolean` | No |  |
| `last_test_at` | `string` | Yes |  |
| `last_test_error` | `string` | Yes |  |
| `last_test_feature_results` | `any[]` | Yes |  |
| `last_test_status` | `any` | Yes |  |
| `model_identifier` | `string` | Yes |  |

### Field Usage by Operation

| Field | create | update |
| --- | --- | --- |
| `feature_types` | - | - |
| `id` | - | - |
| `is_enabled` | - | - |
| `last_test_at` | - | - |
| `last_test_error` | - | - |
| `last_test_feature_results` | - | - |
| `last_test_status` | - | - |
| `model_identifier` | - | Yes |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AiProviderModel().create({
  id: 1,
  model_identifier: 'example_model_identifier',
})
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AiProviderModel().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiProviderModelEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiProviderModelDiscoveryEntity

```ts
const ai_provider_model_discovery = client.AiProviderModelDiscovery()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `models` | `any[]` | Yes |  |
| `supported` | `boolean` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AiProviderModelDiscovery().list({ provider_type: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiProviderModelDiscoveryEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiProviderModelUsageEntryEntity

```ts
const ai_provider_model_usage_entry = client.AiProviderModelUsageEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes |  |
| `feature_type` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AiProviderModelUsageEntry().list({ model_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiProviderModelUsageEntryEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiProviderModelsTestEntity

```ts
const ai_provider_models_test = client.AiProviderModelsTest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `model_ids` | `any[]` | Yes |  |
| `results` | `any[]` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AiProviderModelsTest().create({
  model_ids: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiProviderModelsTestEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AiProviderTypeEntity

```ts
const ai_provider_type = client.AiProviderType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `extra_fields` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `uses_api_key` | `boolean` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AiProviderType().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AiProviderTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApplicationEntity

```ts
const application = client.Application()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application_ids` | `any[]` | Yes | Application ids in the desired order. |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `duplicate_async` | `/api/applications/{application_id}/duplicate/async/` | `client.Application().create({ $action: 'duplicate_async', ... })` |

An action returns that action's OWN response, which is not necessarily a
Application record — check the API definition for its shape.

```ts
const result = await client.Application().create({
  $action: 'duplicate_async',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Application().create({
  workspace_id: 1,
  application_ids: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Application().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Application().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Application().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Application().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApplicationApplicationEntity

```ts
const application_application = client.ApplicationApplication()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ApplicationApplication().create({
  workspace_id: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ApplicationApplication().load({ workspace_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApplicationApplicationEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssistantChatEntity

```ts
const assistant_chat = client.AssistantChat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | Yes |  |
| `status` | `string` | No | * `idle` - Idle * `in_progress` - In progress * `canceling` - Canceling |
| `title` | `string` | No | The title of the chat. |
| `updated_on` | `string` | Yes |  |
| `user_id` | `number` | Yes | The user who owns the chat. |
| `uuid` | `string` | No | Unique identifier for the chat. |
| `workspace_id` | `number` | Yes | The workspace the chat belongs to. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AssistantChat().list({ workspace_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssistantChatEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuditLogEntity

```ts
const audit_log = client.AuditLog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_type` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `ip_address` | `string` | Yes |  |
| `timestamp` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `user` | `string` | Yes |  |
| `workspace` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `export` | `/api/admin/audit-log/export/` | `client.AuditLog().create({ $action: 'export', ... })` |
| `export` | `/api/audit-log/export/` | `client.AuditLog().create({ $action: 'export', ... })` |

An action returns that action's OWN response, which is not necessarily a
AuditLog record — check the API definition for its shape.

```ts
const result = await client.AuditLog().create({
  $action: 'export',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AuditLog().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuditLogEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuditLogActionTypeEntity

```ts
const audit_log_action_type = client.AuditLogActionType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | * `create_group` - create_group * `delete_group` - delete_group * `update_group` - update_group * `order_groups` - order_groups * `create_application` - create_application * `update_application` - update_application * `delete_application`… |
| `value` | `string` | Yes | Given the *incoming* primitive data, return the value for this field that should be validated and transformed to a native value. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AuditLogActionType().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuditLogActionTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuditLogUserEntity

```ts
const audit_log_user = client.AuditLogUser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `value` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AuditLogUser().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuditLogUserEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuthEntity

```ts
const auth = client.Auth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `RelayState` | `string` | Yes | The frontend URL where redirect the authenticated user. |
| `SAMLResponse` | `string` | Yes | The encoded SAML response from the IdP. |
| `backup_code` | `string` | No |  |
| `code` | `string` | No |  |
| `email` | `string` | No | Deprecated. |
| `password` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Auth().create({
  RelayState: 'example_RelayState',
  SAMLResponse: 'example_SAMLResponse',
  password: 'example_password',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Auth().load()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Auth().remove({ auth_provider_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuthEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuthenticationProviderAuthProviderEntity

```ts
const authentication_provider_auth_provider = client.AuthenticationProviderAuthProvider()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AuthenticationProviderAuthProvider().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AuthenticationProviderAuthProvider().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AuthenticationProviderAuthProvider().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AuthenticationProviderAuthProvider().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuthenticationProviderAuthProviderEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AutomationNodeEntity

```ts
const automation_node = client.AutomationNode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.AutomationNode().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AutomationNodeEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AutomationNodeHistoryEntity

```ts
const automation_node_history = client.AutomationNodeHistory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_on` | `string` | No |  |
| `destination_label` | `string` | Yes |  |
| `destination_node_id` | `number` | Yes |  |
| `destination_node_type` | `string` | Yes |  |
| `edge_label` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `iteration` | `number` | Yes |  |
| `iteration_path` | `string` | Yes |  |
| `message` | `string` | Yes |  |
| `node` | `number` | Yes |  |
| `node_label` | `string` | Yes |  |
| `node_type` | `string` | Yes |  |
| `parent_node_id` | `number` | Yes |  |
| `started_on` | `string` | Yes |  |
| `status` | `string` | Yes | * `success` - Success * `error` - Error * `disabled` - Disabled * `started` - Started * `skipped` - Skipped * `cancelled` - Cancelled |
| `workflow_history` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AutomationNodeHistory().list({ workflow_history_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AutomationNodeHistoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AutomationNodeResultEntity

```ts
const automation_node_result = client.AutomationNodeResult()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any` | Yes | Contains node results. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AutomationNodeResult().load({ node_history_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AutomationNodeResultEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AutomationNodeTypeAutomationNodeEntity

```ts
const automation_node_type_automation_node = client.AutomationNodeTypeAutomationNode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `new_type` | `string` | Yes | The type of the new automation node * `local_baserow_create_row` - local_baserow_create_row * `local_baserow_create_rows` - local_baserow_create_rows * `local_baserow_update_row` - local_baserow_update_row * `local_baserow_update_rows` -… |
| `output` | `string` | No | The new output. |
| `position` | `any` | No | The new position relative to the reference node. |
| `reference_node_id` | `number` | No | The reference node. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AutomationNodeTypeAutomationNode().create({
  node_id: 1,
  new_type: 'example_new_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AutomationNodeTypeAutomationNode().list({ workflow_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AutomationNodeTypeAutomationNode().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AutomationNodeTypeAutomationNodeEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AutomationWorkflowEntity

```ts
const automation_workflow = client.AutomationWorkflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_test_run` | `boolean` | No | If provided, enables the workflow to be triggerable for the next 5 minutes. |
| `allow_test_run_until` | `boolean` | No |  |
| `automation_id` | `number` | Yes |  |
| `created_on` | `string` | Yes |  |
| `duplicated_automation_workflow` | `any` | Yes |  |
| `error_code` | `string` | No | A machine readable error code indicating why the job failed. |
| `graph` | `any` | No | A JSON serialized graph containing the points and edges. |
| `human_readable_error` | `string` | No | A human readable error message indicating what went wrong. |
| `id` | `number` | Yes |  |
| `immediate_dispatch` | `boolean` | Yes |  |
| `name` | `string` | Yes |  |
| `notification_recipient_ids` | `any[]` | Yes | The user IDs of the workspace members that should receive notifications related to this workflow. |
| `order` | `number` | Yes | Lowest first. |
| `original_automation_workflow` | `any` | Yes |  |
| `progress_percentage` | `number` | Yes | A percentage indicating how far along the job is. |
| `published_on` | `string` | Yes |  |
| `simulate_until_node_id` | `number` | Yes | When set, upon the next workflow run, simulates the dispatch of the workflow until this node and updates the sample_data of the node's service. |
| `state` | `string` | Yes | Indicates the state of the import job. |
| `type` | `string` | Yes | The type of the job. |
| `updated_on` | `string` | Yes |  |
| `workflow_ids` | `any[]` | Yes | The ids of the workflows in the order they are supposed to be set in. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `allow_test_run` | - | - | - | - |
| `allow_test_run_until` | - | - | - | - |
| `automation_id` | - | - | - | - |
| `created_on` | - | - | - | - |
| `duplicated_automation_workflow` | - | - | - | - |
| `error_code` | - | - | - | - |
| `graph` | - | - | - | - |
| `human_readable_error` | - | - | - | - |
| `id` | - | - | - | - |
| `immediate_dispatch` | - | - | - | - |
| `name` | - | - | Yes | - |
| `notification_recipient_ids` | - | - | Yes | - |
| `order` | - | - | - | - |
| `original_automation_workflow` | - | - | - | - |
| `progress_percentage` | - | - | - | - |
| `published_on` | - | - | - | - |
| `simulate_until_node_id` | - | - | - | - |
| `state` | - | - | Yes | - |
| `type` | - | - | - | - |
| `updated_on` | - | - | - | - |
| `workflow_ids` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AutomationWorkflow().create({
  id: 1,
  name: 'example_name',
  order: 1,
  progress_percentage: 1,
  workflow_ids: [],
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AutomationWorkflow().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.AutomationWorkflow().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AutomationWorkflow().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AutomationWorkflowEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AutomationWorkflowHistoryEntity

```ts
const automation_workflow_history = client.AutomationWorkflowHistory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_requested_on` | `string` | No | When the cancellation of this run was requested. |
| `completed_on` | `string` | No |  |
| `id` | `number` | Yes |  |
| `is_test_run` | `boolean` | Yes | True when the workflow is being simulated. |
| `message` | `string` | Yes |  |
| `plugin_data` | `Record<string, any>` | Yes |  |
| `simulate_until_node` | `number` | No |  |
| `started_on` | `string` | Yes |  |
| `status` | `string` | Yes | * `success` - Success * `error` - Error * `disabled` - Disabled * `started` - Started * `skipped` - Skipped * `cancelled` - Cancelled |
| `triggered_by` | `any` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AutomationWorkflowHistory().create({
  workflow_history_id: 1,
  is_test_run: true,
  message: 'example_message',
  started_on: 'example_started_on',
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AutomationWorkflowHistory().list({ workflow_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AutomationWorkflowHistoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BuilderDataSourceEntity

```ts
const builder_data_source = client.BuilderDataSource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `1` | `string` | No |  |
| `2` | `string` | No |  |
| `id` | `string` | No |  |
| `key` | `string` | No |  |
| `metadata` | `any` | No | Metadata of the dispatch payload. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.BuilderDataSource().create({
  data_source_id: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.BuilderDataSource().load({ data_source_id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.BuilderDataSource().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BuilderDataSourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BuilderDomainEntity

```ts
const builder_domain = client.BuilderDomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain_ids` | `any[]` | Yes | The ids of the domains in the order they are supposed to be set in |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.BuilderDomain().create({
  builder_id: 1,
  domain_ids: [],
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.BuilderDomain().load()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.BuilderDomain().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BuilderDomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BuilderElementEntity

```ts
const builder_element = client.BuilderElement()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.BuilderElement().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BuilderElementEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BuilderPageEntity

```ts
const builder_page = client.BuilderPage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | Yes |  |
| `duplicated_page` | `any` | Yes |  |
| `error_code` | `string` | No | A machine readable error code indicating why the job failed. |
| `human_readable_error` | `string` | No | A human readable error message indicating what went wrong. |
| `id` | `number` | Yes |  |
| `original_page` | `any` | Yes |  |
| `page_ids` | `any[]` | Yes | The ids of the pages in the order they are supposed to be set in |
| `progress_percentage` | `number` | Yes | A percentage indicating how far along the job is. |
| `state` | `string` | Yes | Indicates the state of the import job. |
| `type` | `string` | Yes | The type of the job. |
| `updated_on` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.BuilderPage().create({
  builder_id: 1,
  page_ids: [],
  progress_percentage: 1,
  state: 'example_state',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.BuilderPage().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BuilderPageEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BuilderPreviewEntity

```ts
const builder_preview = client.BuilderPreview()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.BuilderPreview().load({ token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BuilderPreviewEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BuilderPreviewGrantEntity

```ts
const builder_preview_grant = client.BuilderPreviewGrant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `path` | `string` | No |  |
| `url` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.BuilderPreviewGrant().create({
  preview_id: 'example_preview_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BuilderPreviewGrantEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BuilderPreviewHandoffEntity

```ts
const builder_preview_handoff = client.BuilderPreviewHandoff()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `builder_id` | `number` | Yes |  |
| `expires_in` | `number` | Yes |  |
| `preview_handoff` | `string` | Yes |  |
| `preview_session` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.BuilderPreviewHandoff().create({
  builder_id: 1,
  preview_handoff: 'example_preview_handoff',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BuilderPreviewHandoffEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BuilderPublicEntity

```ts
const builder_public = client.BuilderPublic()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.BuilderPublic().load({ custom_code_id: 1, type: 'type' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BuilderPublicEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BuilderWorkflowActionEntity

```ts
const builder_workflow_action = client.BuilderWorkflowAction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `element_id` | `number` | No | The element the workflow actions belong to |
| `id` | `string` | No |  |
| `workflow_action_ids` | `any[]` | Yes | The ids of the workflow actions in the order they are supposed to be set in |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.BuilderWorkflowAction().create({
  workflow_action_id: 1,
  workflow_action_ids: [],
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.BuilderWorkflowAction().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BuilderWorkflowActionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BuilderWorkflowActionTypeBuilderWorkflowActionEntity

```ts
const builder_workflow_action_type_builder_workflow_action = client.BuilderWorkflowActionTypeBuilderWorkflowAction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.BuilderWorkflowActionTypeBuilderWorkflowAction().create({
  page_id: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.BuilderWorkflowActionTypeBuilderWorkflowAction().list({ page_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.BuilderWorkflowActionTypeBuilderWorkflowAction().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BuilderWorkflowActionTypeBuilderWorkflowActionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ByIdEntity

```ts
const by_id = client.ById()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ById().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ByIdEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ByNameEntity

```ts
const by_name = client.ByName()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ByName().load({ id: 'by_name_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ByNameEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CalendarEntity

```ts
const calendar = client.Calendar()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field_options` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `row_metadata` | `Record<string, any>` | No | An object keyed by row id with a value being an object containing additional metadata about that row. |
| `rows` | `Record<string, any>` | Yes | Every date bucket (e.g. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Calendar().load({ id: 1, from_timestamp: 'from_timestamp', to_timestamp: 'to_timestamp' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CalendarEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CalendarViewExampleEntity

```ts
const calendar_view_example = client.CalendarViewExample()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hidden` | `boolean` | No | Whether or not the field should be hidden in the card. |
| `order` | `number` | No | The order that the field has in the view. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.CalendarViewExample().list({ calendar_id: "example", from_timestamp: "example", to_timestamp: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CalendarViewExampleEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CallbackEntity

```ts
const callback = client.Callback()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Callback().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CallbackEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CancelEntity

```ts
const cancel = client.Cancel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `messages` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Cancel().list({ chat_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CancelEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ColorTypographyButtonImagePageInputTableLinklinkActiveTextEntity

```ts
const color_typography_button_image_page_input_table_linklink_active_text = client.ColorTypographyButtonImagePageInputTableLinklinkActiveText()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body_font_family` | `string` | No |  |
| `body_font_size` | `number` | No |  |
| `body_font_weight` | `string` | No | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `body_text_alignment` | `string` | No | * `left` - Left * `center` - Center * `right` - Right |
| `body_text_color` | `string` | No |  |
| `border_color` | `string` | No |  |
| `button_active_background_color` | `string` | No | The background color of buttons when active |
| `button_active_border_color` | `string` | No | The border color of buttons when active |
| `button_active_text_color` | `string` | No | The text color of buttons when active |
| `button_alignment` | `string` | No | * `left` - Left * `center` - Center * `right` - Right |
| `button_background_color` | `string` | No | The background color of buttons |
| `button_border_color` | `string` | No | The border color of buttons |
| `button_border_radius` | `number` | No | Button border radius |
| `button_border_size` | `number` | No | Button border size |
| `button_font_family` | `string` | No |  |
| `button_font_size` | `number` | No |  |
| `button_font_weight` | `string` | No | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `button_horizontal_padding` | `number` | No | Button horizontal padding |
| `button_hover_background_color` | `string` | No | The background color of buttons when hovered |
| `button_hover_border_color` | `string` | No | The border color of buttons when hovered |
| `button_hover_text_color` | `string` | No | The text color of buttons when hovered |
| `button_text_alignment` | `string` | No | * `left` - Left * `center` - Center * `right` - Right |
| `button_text_color` | `string` | No | The text color of buttons |
| `button_vertical_padding` | `number` | No | Button vertical padding |
| `button_width` | `string` | No | * `auto` - Auto * `full` - Full |
| `custom_colors` | `any` | No |  |
| `heading_1_font_family` | `string` | No |  |
| `heading_1_font_size` | `number` | No |  |
| `heading_1_font_weight` | `string` | No | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `heading_1_text_alignment` | `string` | No | * `left` - Left * `center` - Center * `right` - Right |
| `heading_1_text_color` | `string` | No |  |
| `heading_1_text_decoration` | `any[]` | No | Text decoration: [underline, stroke, uppercase, italic] |
| `heading_2_font_family` | `string` | No |  |
| `heading_2_font_size` | `number` | No |  |
| `heading_2_font_weight` | `string` | No | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `heading_2_text_alignment` | `string` | No | * `left` - Left * `center` - Center * `right` - Right |
| `heading_2_text_color` | `string` | No |  |
| `heading_2_text_decoration` | `any[]` | No | Text decoration: [underline, stroke, uppercase, italic] |
| `heading_3_font_family` | `string` | No |  |
| `heading_3_font_size` | `number` | No |  |
| `heading_3_font_weight` | `string` | No | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `heading_3_text_alignment` | `string` | No | * `left` - Left * `center` - Center * `right` - Right |
| `heading_3_text_color` | `string` | No |  |
| `heading_3_text_decoration` | `any[]` | No | Text decoration: [underline, stroke, uppercase, italic] |
| `heading_4_font_family` | `string` | No |  |
| `heading_4_font_size` | `number` | No |  |
| `heading_4_font_weight` | `string` | No | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `heading_4_text_alignment` | `string` | No | * `left` - Left * `center` - Center * `right` - Right |
| `heading_4_text_color` | `string` | No |  |
| `heading_4_text_decoration` | `any[]` | No | Text decoration: [underline, stroke, uppercase, italic] |
| `heading_5_font_family` | `string` | No |  |
| `heading_5_font_size` | `number` | No |  |
| `heading_5_font_weight` | `string` | No | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `heading_5_text_alignment` | `string` | No | * `left` - Left * `center` - Center * `right` - Right |
| `heading_5_text_color` | `string` | No |  |
| `heading_5_text_decoration` | `any[]` | No | Text decoration: [underline, stroke, uppercase, italic] |
| `heading_6_font_family` | `string` | No |  |
| `heading_6_font_size` | `number` | No |  |
| `heading_6_font_weight` | `string` | No | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `heading_6_text_alignment` | `string` | No | * `left` - Left * `center` - Center * `right` - Right |
| `heading_6_text_color` | `string` | No |  |
| `heading_6_text_decoration` | `any[]` | No | Text decoration: [underline, stroke, uppercase, italic] |
| `image_alignment` | `string` | No | * `left` - Left * `center` - Center * `right` - Right |
| `image_border_radius` | `number` | No | The border radius for this image element. |
| `image_constraint` | `string` | No | The image constraint to apply to this image * `cover` - Cover * `contain` - Contain * `full-width` - Full Width |
| `image_max_height` | `number` | No | The image max height |
| `image_max_width` | `number` | No | The max-width for this image element. |
| `input_background_color` | `string` | No | The background color of the input |
| `input_border_color` | `string` | No | The color of the input border |
| `input_border_radius` | `number` | No | Input border radius |
| `input_border_size` | `number` | No | Input border size |
| `input_font_family` | `string` | No | The font family of the input |
| `input_font_size` | `number` | No |  |
| `input_font_weight` | `string` | No | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `input_horizontal_padding` | `number` | No | Input horizontal padding |
| `input_text_color` | `string` | No | The text color of the input |
| `input_vertical_padding` | `number` | No | Input vertical padding |
| `label_font_family` | `string` | No | The font family of the label |
| `label_font_size` | `number` | No | The font size of the label |
| `label_font_weight` | `string` | No | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `label_text_color` | `string` | No | The text color of the label |
| `link_active_text_color` | `string` | No | The hover color of links when active |
| `link_active_text_decoration` | `any[]` | No | Active text decoration: [underline, stroke, uppercase, italic] |
| `link_default_text_decoration` | `any[]` | No | Default text decoration: [underline, stroke, uppercase, italic] |
| `link_font_family` | `string` | No |  |
| `link_font_size` | `number` | No |  |
| `link_font_weight` | `string` | No | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `link_hover_text_color` | `string` | No | The hover color of links when hovered |
| `link_hover_text_decoration` | `any[]` | No | Hover text decoration: [underline, stroke, uppercase, italic] |
| `link_text_alignment` | `string` | No | * `left` - Left * `center` - Center * `right` - Right |
| `link_text_color` | `string` | No | The text color of links |
| `main_error_color` | `string` | No |  |
| `main_success_color` | `string` | No |  |
| `main_warning_color` | `string` | No |  |
| `page_background_color` | `string` | No | The background color of the page |
| `page_background_file` | `any` | No | The image file |
| `page_background_mode` | `string` | No | The mode of the background image * `tile` - Tile * `fill` - Fill * `fit` - Fit |
| `primary_color` | `string` | No |  |
| `secondary_color` | `string` | No |  |
| `table_border_color` | `string` | No | The color of the table border |
| `table_border_radius` | `number` | No | Table border radius |
| `table_border_size` | `number` | No | Table border size |
| `table_cell_alignment` | `string` | No | * `left` - Left * `center` - Center * `right` - Right |
| `table_cell_alternate_background_color` | `string` | No | The alternate background color of the table cells |
| `table_cell_background_color` | `string` | No | The background color of the table cells |
| `table_cell_horizontal_padding` | `number` | No | Table cell horizontal padding |
| `table_cell_vertical_padding` | `number` | No | Table cell vertical padding |
| `table_header_background_color` | `string` | No | The background color of the table header cells |
| `table_header_font_family` | `string` | No | The font family of the table header cells |
| `table_header_font_size` | `number` | No | The font size of the header cells |
| `table_header_font_weight` | `string` | No | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `table_header_text_alignment` | `string` | No | * `left` - Left * `center` - Center * `right` - Right |
| `table_header_text_color` | `string` | No | The text color of the table header cells |
| `table_horizontal_separator_color` | `string` | No | The color of the table horizontal separator |
| `table_horizontal_separator_size` | `number` | No | Table horizontal separator size |
| `table_vertical_separator_color` | `string` | No | The color of the table vertical separator |
| `table_vertical_separator_size` | `number` | No | Table vertical separator size |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.ColorTypographyButtonImagePageInputTableLinklinkActiveText().update({
  builder_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ColorTypographyButtonImagePageInputTableLinklinkActiveTextEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CoreWebhookEntity

```ts
const core_webhook = client.CoreWebhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CoreWebhook().create({
  id: 'example_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.CoreWebhook().load({ id: 'core_webhook_id' })
```

#### `patch(data: object, ctrl?: object)`

Change part of an existing entity: only the fields given are sent. The data must include the entity `id`. Resolves to the patched entity.

```ts
const result = await client.CoreWebhook().patch({
  id: 'core_webhook_id',
  // Only the fields to change
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.CoreWebhook().remove({ id: 'core_webhook_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.CoreWebhook().update({
  id: 'core_webhook_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CoreWebhookEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DashboardDataSourceEntity

```ts
const dashboard_data_source = client.DashboardDataSource()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.DashboardDataSource().create({
  data_source_id: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DashboardDataSourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DashboardWidgetEntity

```ts
const dashboard_widget = client.DashboardWidget()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.DashboardWidget().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DashboardWidgetEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DashboardWidgetWidgetEntity

```ts
const dashboard_widget_widget = client.DashboardWidgetWidget()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `widgets` | `any[]` | No | The complete layout of the dashboard widgets visible to the current user. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.DashboardWidgetWidget().create({
  id: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.DashboardWidgetWidget().list({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.DashboardWidgetWidget().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DashboardWidgetWidgetEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DataScanEntity

```ts
const data_scan = client.DataScan()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | Yes |  |
| `frequency` | `string` | No | * `manual` - Manual * `hourly` - Hourly * `daily` - Daily * `weekly` - Weekly |
| `id` | `number` | Yes |  |
| `is_running` | `boolean` | No |  |
| `last_error` | `string` | No |  |
| `last_run_finished_at` | `string` | No |  |
| `last_run_started_at` | `string` | No |  |
| `list_items` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `pattern` | `string` | No |  |
| `results_count` | `string` | Yes |  |
| `scan_all_workspaces` | `boolean` | No |  |
| `scan_type` | `string` | Yes | * `pattern` - Pattern * `list_of_values` - List of values * `list_table` - List Table |
| `source_database_id` | `string` | Yes |  |
| `source_field_id` | `string` | Yes |  |
| `source_table_id` | `string` | Yes |  |
| `source_workspace_id` | `string` | Yes |  |
| `updated_on` | `string` | Yes |  |
| `whole_words` | `boolean` | No |  |
| `workspace_ids` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `created_on` | - | - | - | - |
| `frequency` | - | - | - | - |
| `id` | - | - | - | - |
| `is_running` | - | - | - | - |
| `last_error` | - | - | - | - |
| `last_run_finished_at` | - | - | - | - |
| `last_run_started_at` | - | - | - | - |
| `list_items` | - | - | Yes | Yes |
| `name` | - | - | - | Yes |
| `pattern` | - | - | - | - |
| `results_count` | - | - | - | - |
| `scan_all_workspaces` | - | - | - | - |
| `scan_type` | - | - | - | Yes |
| `source_database_id` | - | - | - | - |
| `source_field_id` | - | - | Yes | Yes |
| `source_table_id` | - | - | Yes | Yes |
| `source_workspace_id` | - | - | - | - |
| `updated_on` | - | - | - | - |
| `whole_words` | - | - | - | - |
| `workspace_ids` | - | - | Yes | Yes |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.DataScan().create({
  name: 'example_name',
  scan_type: 'example_scan_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.DataScan().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.DataScan().load({ id: 'data_scan_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.DataScan().update({
  id: 'data_scan_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DataScanEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DataSyncEntity

```ts
const data_sync = client.DataSync()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_add_new_properties` | `boolean` | No | If enabled and new properties are detected on sync, then they're automatically added. |
| `database_id` | `string` | Yes |  |
| `delete_unmatched_rows` | `boolean` | No | If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. |
| `id` | `number` | Yes |  |
| `last_error` | `string` | No |  |
| `last_sync` | `string` | No | Timestamp when the table was last synced. |
| `synced_properties` | `any[]` | Yes |  |
| `table_id` | `number` | Yes | The table where the data is synced into. |
| `two_way_sync` | `boolean` | No | If enabled, then it's possible to make changes to the synced table. |
| `type` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.DataSync().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.DataSync().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DataSyncEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DatabaseTableEntity

```ts
const database_table = client.DatabaseTable()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configuration` | `Record<string, any>` | No | Additional table import configuration. |
| `created_on` | `string` | Yes |  |
| `data` | `any[]` | Yes | A list of rows you want to add to the specified table. |
| `data_sync` | `any` | Yes |  |
| `database_id` | `number` | Yes | Database id where the table will be created. |
| `duplicated_table` | `any` | Yes |  |
| `error_code` | `string` | No | A machine readable error code indicating why the job failed. |
| `first_row_header` | `boolean` | No |  |
| `human_readable_error` | `string` | No | A human readable error message indicating what went wrong. |
| `id` | `number` | Yes |  |
| `importer_type` | `string` | No | The frontend importer identifier used to parse the file. |
| `name` | `string` | No | The name of the new table. |
| `original_file_name` | `string` | No | The original name of the uploaded file. |
| `original_table` | `any` | Yes |  |
| `progress_percentage` | `number` | Yes | A percentage indicating how far along the job is. |
| `report` | `any` | Yes | Import error report. |
| `state` | `string` | Yes | Indicates the state of the import job. |
| `table_id` | `number` | No | Table id where the data will be imported. |
| `triggered_by` | `string` | Yes | Whether this sync run was started manually or periodically. |
| `type` | `string` | Yes | The type of the job. |
| `updated_on` | `string` | Yes |  |
| `user_name` | `string` | Yes | The name of the user that started this sync run. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `async` | `/api/database/tables/database/{database_id}/async/` | `client.DatabaseTable().create({ $action: 'async', ... })` |
| `order` | `/api/database/tables/database/{database_id}/order/` | `client.DatabaseTable().create({ $action: 'order', ... })` |

An action returns that action's OWN response, which is not necessarily a
DatabaseTable record — check the API definition for its shape.

```ts
const result = await client.DatabaseTable().create({
  $action: 'async',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.DatabaseTable().create({
  data_sync_id: 1,
  data: [],
  database_id: 1,
  progress_percentage: 1,
  report: 'example_report',
  state: 'example_state',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.DatabaseTable().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DatabaseTableEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DatabaseTableFieldEntity

```ts
const database_table_field = client.DatabaseTableField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | Yes |  |
| `duplicated_field` | `any` | Yes |  |
| `element_id` | `number` | No | The element the workflow actions belong to |
| `error_code` | `string` | No | A machine readable error code indicating why the job failed. |
| `field_id` | `number` | Yes | The ID of the AI field to generate values for. |
| `human_readable_error` | `string` | No | A human readable error message indicating what went wrong. |
| `id` | `number` | Yes |  |
| `is_auto_update` | `boolean` | Yes | Indicates if the job has been created because values in a dependent field changed. |
| `only_empty` | `boolean` | No | Whether to only generate AI values for rows where the field is empty. |
| `original_field` | `any` | Yes |  |
| `progress_percentage` | `number` | Yes | A percentage indicating how far along the job is. |
| `row_ids` | `any[]` | No | The IDs of the rows to generate AI values for. |
| `state` | `string` | Yes | Indicates the state of the import job. |
| `type` | `string` | Yes | The type of the job. |
| `updated_on` | `string` | Yes |  |
| `view_id` | `number` | No | The ID of the view to generate AI values for. |
| `workflow_action_ids` | `any[]` | Yes | The ids of the workflow actions in the order they are supposed to be set in |

### Field Usage by Operation

| Field | create | remove |
| --- | --- | --- |
| `created_on` | - | - |
| `duplicated_field` | - | - |
| `element_id` | - | - |
| `error_code` | - | - |
| `field_id` | - | - |
| `human_readable_error` | - | - |
| `id` | - | - |
| `is_auto_update` | - | - |
| `only_empty` | - | - |
| `original_field` | - | - |
| `progress_percentage` | - | - |
| `row_ids` | Yes | - |
| `state` | - | - |
| `type` | - | - |
| `updated_on` | - | - |
| `view_id` | - | - |
| `workflow_action_ids` | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.DatabaseTableField().create({
  field_id: 1,
  progress_percentage: 1,
  row_ids: [],
  state: 'example_state',
  workflow_action_ids: [],
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.DatabaseTableField().remove({ workflow_action_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DatabaseTableFieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DatabaseTableGridViewEntity

```ts
const database_table_grid_view = client.DatabaseTableGridView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field_id` | `string` | No |  |
| `total` | `number` | No | The total value count. |
| `value` | `any` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.DatabaseTableGridView().load({ grid_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DatabaseTableGridViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DatabaseTableRowEntity

```ts
const database_table_row = client.DatabaseTableRow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `items` | `any[]` | Yes |  |
| `mode` | `string` | Yes | The mode to use to receive notifications for new comments on a table row. |
| `row_id` | `string` | No | the name of the row with id `row_id` from table with id `table_id`. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.DatabaseTableRow().create({
  table_id: 1,
  items: [],
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.DatabaseTableRow().load()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.DatabaseTableRow().remove({ row_id: 1, table_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.DatabaseTableRow().update({
  row_comment_id: 1,
  row_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DatabaseTableRowEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DatabaseTableViewEntity

```ts
const database_table_view = client.DatabaseTableView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `view_ids` | `any[]` | Yes | View ids in the desired order. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.DatabaseTableView().create({
  table_id: 1,
  view_ids: [],
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.DatabaseTableView().load({ ical_slug: 'ical_slug' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.DatabaseTableView().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DatabaseTableViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DatabaseTableViewDecorationEntity

```ts
const database_table_view_decoration = client.DatabaseTableViewDecoration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.DatabaseTableViewDecoration().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DatabaseTableViewDecorationEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DatabaseTableViewFilterEntity

```ts
const database_table_view_filter = client.DatabaseTableViewFilter()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.DatabaseTableViewFilter().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DatabaseTableViewFilterEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DatabaseTableViewGroupingEntity

```ts
const database_table_view_grouping = client.DatabaseTableViewGrouping()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `view_group_by_ids` | `any[]` | Yes | View group by ids in the desired priority order. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.DatabaseTableViewGrouping().create({
  view_id: 1,
  view_group_by_ids: [],
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.DatabaseTableViewGrouping().remove({ view_group_by_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DatabaseTableViewGroupingEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DatabaseTableViewSortingEntity

```ts
const database_table_view_sorting = client.DatabaseTableViewSorting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `view_sort_ids` | `any[]` | Yes | View sort ids in the desired priority order. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.DatabaseTableViewSorting().create({
  view_id: 1,
  view_sort_ids: [],
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.DatabaseTableViewSorting().remove({ view_sort_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DatabaseTableViewSortingEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DatabaseTableWebhookEntity

```ts
const database_table_webhook = client.DatabaseTableWebhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.DatabaseTableWebhook().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DatabaseTableWebhookEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DatabaseTokenEntity

```ts
const database_token = client.DatabaseToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.DatabaseToken().load({ id: 'database_token_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.DatabaseToken().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DatabaseTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DatabaseWorkflowActionTypeDatabaseWorkflowActionEntity

```ts
const database_workflow_action_type_database_workflow_action = client.DatabaseWorkflowActionTypeDatabaseWorkflowAction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.DatabaseWorkflowActionTypeDatabaseWorkflowAction().create({
  field_id: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.DatabaseWorkflowActionTypeDatabaseWorkflowAction().list({ field_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.DatabaseWorkflowActionTypeDatabaseWorkflowAction().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DatabaseWorkflowActionTypeDatabaseWorkflowActionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DecoratorValueProviderTypeViewDecorationEntity

```ts
const decorator_value_provider_type_view_decoration = client.DecoratorValueProviderTypeViewDecoration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.DecoratorValueProviderTypeViewDecoration().create({
  view_id: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.DecoratorValueProviderTypeViewDecoration().list({ view_id: 1 })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.DecoratorValueProviderTypeViewDecoration().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.DecoratorValueProviderTypeViewDecoration().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DecoratorValueProviderTypeViewDecorationEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DispatchEntity

```ts
const dispatch = client.Dispatch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_actions` | `any` | Yes | Actions the browser runs itself, in order, after the server actions have completed. |
| `results` | `any[]` | Yes |  |
| `row_id` | `number` | Yes | The id of the row the button was clicked on. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Dispatch().create({
  field_id: 1,
  row_id: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DispatchEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DomainEntity

```ts
const domain = client.Domain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `domain_name` | `string` | No |  |
| `id` | `string` | No |  |
| `type` | `string` | No | The type of the domain. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Domain().create({
  builder_id: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Domain().list({ builder_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Domain().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DuplicateEntity

```ts
const duplicate = client.Duplicate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `elements` | `any[]` | Yes | The duplicated elements. |
| `graph` | `string` | Yes | The updated page graph. |
| `workflow_actions` | `any[]` | Yes | The duplicated workflow actions |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Duplicate().create({
  element_id: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DuplicateEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ElementEntity

```ts
const element = client.Element()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Element().create({
  page_id: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Element().list({ page_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Element().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ElementEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ElementTypeElementEntity

```ts
const element_type_element = client.ElementTypeElement()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `move` | `/api/builder/element/{element_id}/move/` | `client.ElementTypeElement().update({ $action: 'move', ... })` |

An action returns that action's OWN response, which is not necessarily a
ElementTypeElement record — check the API definition for its shape.

```ts
const result = await client.ElementTypeElement().update({
  $action: 'move',
  /* ...the action's own arguments */
})
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.ElementTypeElement().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ElementTypeElementEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmailEntity

```ts
const email = client.Email()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error` | `string` | No | A short message describing the error that occured if the test email failed |
| `error_stack` | `string` | No | The full stack trace and error message if the test email failed. |
| `error_type` | `string` | No | The type of error that occurred if the test email failed. |
| `succeeded` | `boolean` | Yes | Whether or not the test email was sent successfully. |
| `target_email` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Email().create({
  target_email: 'example_target_email',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmailEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ExampleBatchRowEntity

```ts
const example_batch_row = client.ExampleBatchRow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | `any[]` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ExampleBatchRow().create({
  table_id: 1,
  items: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExampleBatchRowEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ExampleBatchUpdateRowEntity

```ts
const example_batch_update_row = client.ExampleBatchUpdateRow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | `any[]` | Yes |  |
| `metadata` | `any` | No | An optional object containing metadata information about the operation |

### Field Usage by Operation

| Field | update |
| --- | --- |
| `items` | Yes |
| `metadata` | - |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.ExampleBatchUpdateRow().update({
  table_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExampleBatchUpdateRowEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ExamplePublicRowResponseSerializerWithUserFieldNameEntity

```ts
const example_public_row_response_serializer_with_user_field_name = client.ExamplePublicRowResponseSerializerWithUserFieldName()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field_1` | `string` | No | This field represents the `text` field. |
| `field_10` | `any` | No | This field represents the `last_modified_by` field. |
| `field_11` | `string` | No | This field represents the `created_on` field. |
| `field_12` | `any` | No | This field represents the `created_by` field. |
| `field_13` | `number` | No | This field represents the `duration` field. |
| `field_14` | `any[]` | No | This field represents the `link_row` field. |
| `field_15` | `any[]` | No | This field represents the `file` field. |
| `field_16` | `any` | No | This field represents the `single_select` field. |
| `field_17` | `any[]` | No | This field represents the `multiple_select` field. |
| `field_18` | `string` | No | This field represents the `phone_number` field. |
| `field_19` | `string` | No | This field represents the `formula` field. |
| `field_2` | `string` | No | This field represents the `long_text` field. |
| `field_20` | `string` | No | This field represents the `count` field. |
| `field_21` | `string` | No | This field represents the `rollup` field. |
| `field_22` | `string` | No | This field represents the `lookup` field. |
| `field_23` | `any[]` | No | This field represents the `multiple_collaborators` field. |
| `field_24` | `string` | No | This field represents the `uuid` field. |
| `field_25` | `number` | No | This field represents the `autonumber` field. |
| `field_26` | `boolean` | No | This field represents the `password` field. |
| `field_27` | `string` | Yes | This field represents the `form_view_edit_row` field. |
| `field_28` | `string` | No | This field represents the `button` field. |
| `field_29` | `string` | No | This field represents the `ai` field. |
| `field_3` | `string` | No | This field represents the `url` field. |
| `field_4` | `string` | No | This field represents the `email` field. |
| `field_5` | `string` | No | This field represents the `number` field. |
| `field_6` | `number` | No | This field represents the `rating` field. |
| `field_7` | `boolean` | No | This field represents the `boolean` field. |
| `field_8` | `string` | No | This field represents the `date` field. |
| `field_9` | `string` | No | This field represents the `last_modified` field. |
| `id` | `number` | Yes | The unique identifier of the row in the table. |
| `order` | `string` | No | Indicates the position of the row, lowest first and highest last. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ExamplePublicRowResponseSerializerWithUserFieldName().load({ row_id: 1, view_id: 'view_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExamplePublicRowResponseSerializerWithUserFieldNameEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ExampleRowEntity

```ts
const example_row = client.ExampleRow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field_1` | `string` | No | This field represents the `text` field. |
| `field_10` | `any` | No | This field represents the `last_modified_by` field. |
| `field_11` | `string` | No | This field represents the `created_on` field. |
| `field_12` | `any` | No | This field represents the `created_by` field. |
| `field_13` | `number` | No | This field represents the `duration` field. |
| `field_14` | `any[]` | No | This field represents the `link_row` field. |
| `field_15` | `any[]` | No | This field represents the `file` field. |
| `field_16` | `any` | No | This field represents the `single_select` field. |
| `field_17` | `any[]` | No | This field represents the `multiple_select` field. |
| `field_18` | `string` | No | This field represents the `phone_number` field. |
| `field_19` | `string` | No | This field represents the `formula` field. |
| `field_2` | `string` | No | This field represents the `long_text` field. |
| `field_20` | `string` | No | This field represents the `count` field. |
| `field_21` | `string` | No | This field represents the `rollup` field. |
| `field_22` | `string` | No | This field represents the `lookup` field. |
| `field_23` | `any[]` | No | This field represents the `multiple_collaborators` field. |
| `field_24` | `string` | No | This field represents the `uuid` field. |
| `field_25` | `number` | No | This field represents the `autonumber` field. |
| `field_26` | `boolean` | No | This field represents the `password` field. |
| `field_27` | `string` | Yes | This field represents the `form_view_edit_row` field. |
| `field_28` | `string` | No | This field represents the `button` field. |
| `field_29` | `string` | No | This field represents the `ai` field. |
| `field_3` | `string` | No | This field represents the `url` field. |
| `field_4` | `string` | No | This field represents the `email` field. |
| `field_5` | `string` | No | This field represents the `number` field. |
| `field_6` | `number` | No | This field represents the `rating` field. |
| `field_7` | `boolean` | No | This field represents the `boolean` field. |
| `field_8` | `string` | No | This field represents the `date` field. |
| `field_9` | `string` | No | This field represents the `last_modified` field. |
| `field_ids` | `any[]` | No | Only the fields related to the provided ids are added to the response. |
| `id` | `number` | Yes | The unique identifier of the row in the table. |
| `metadata` | `any` | No | Additional metadata for the row, if `include=metadata' is provided as query parameter. |
| `order` | `string` | No | Indicates the position of the row, lowest first and highest last. |
| `row_ids` | `any[]` | Yes | Only rows related to the provided ids are added to the response. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ExampleRow().create({
  view_id: 1,
  row_ids: [],
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ExampleRow().load({ form_id: 'form_id', row_token: 'row_token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExampleRowEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ExampleRowResponseSerializerWithUserFieldNameEntity

```ts
const example_row_response_serializer_with_user_field_name = client.ExampleRowResponseSerializerWithUserFieldName()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `baserow_id` | `number` | Yes | The unique identifier of the row in the table. |
| `field_1` | `string` | No | This field represents the `text` field. |
| `field_10` | `any` | No | This field represents the `last_modified_by` field. |
| `field_11` | `string` | No | This field represents the `created_on` field. |
| `field_12` | `any` | No | This field represents the `created_by` field. |
| `field_13` | `number` | No | This field represents the `duration` field. |
| `field_14` | `any[]` | No | This field represents the `link_row` field. |
| `field_15` | `any[]` | No | This field represents the `file` field. |
| `field_16` | `any` | No | This field represents the `single_select` field. |
| `field_17` | `any[]` | No | This field represents the `multiple_select` field. |
| `field_18` | `string` | No | This field represents the `phone_number` field. |
| `field_19` | `string` | No | This field represents the `formula` field. |
| `field_2` | `string` | No | This field represents the `long_text` field. |
| `field_20` | `string` | No | This field represents the `count` field. |
| `field_21` | `string` | No | This field represents the `rollup` field. |
| `field_22` | `string` | No | This field represents the `lookup` field. |
| `field_23` | `any[]` | No | This field represents the `multiple_collaborators` field. |
| `field_24` | `string` | No | This field represents the `uuid` field. |
| `field_25` | `number` | No | This field represents the `autonumber` field. |
| `field_26` | `boolean` | No | This field represents the `password` field. |
| `field_27` | `string` | Yes | This field represents the `form_view_edit_row` field. |
| `field_28` | `string` | No | This field represents the `button` field. |
| `field_29` | `string` | No | This field represents the `ai` field. |
| `field_3` | `string` | No | This field represents the `url` field. |
| `field_4` | `string` | No | This field represents the `email` field. |
| `field_5` | `string` | No | This field represents the `number` field. |
| `field_6` | `number` | No | This field represents the `rating` field. |
| `field_7` | `boolean` | No | This field represents the `boolean` field. |
| `field_8` | `string` | No | This field represents the `date` field. |
| `field_9` | `string` | No | This field represents the `last_modified` field. |
| `id` | `string` | Yes | The unique identifier of the row in the table. |
| `metadata` | `any` | No | Additional metadata for the row, if `include=metadata' is provided as query parameter. |
| `order` | `string` | No | Indicates the position of the row, lowest first and highest last. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ExampleRowResponseSerializerWithUserFieldName().create({
  table_id: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ExampleRowResponseSerializerWithUserFieldName().list({ row_id: 1, table_id: 1 })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ExampleRowResponseSerializerWithUserFieldName().load({ row_id: 1, table_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.ExampleRowResponseSerializerWithUserFieldName().update({
  row_id: 1,
  table_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExampleRowResponseSerializerWithUserFieldNameEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ExportEntity

```ts
const export_ = client.Export()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `created_on` | `string` | Yes |  |
| `error_code` | `string` | No | A machine readable error code indicating why the job failed. |
| `exported_file_name` | `string` | No |  |
| `exporter_type` | `string` | Yes |  |
| `human_readable_error` | `string` | No | A human readable error message indicating what went wrong. |
| `id` | `number` | Yes |  |
| `progress_percentage` | `number` | No | A percentage indicating how far along the job is. |
| `state` | `string` | Yes | * `pending` - pending * `exporting` - exporting * `cancelled` - cancelled * `finished` - finished * `failed` - failed * `expired` - expired |
| `status` | `string` | Yes | DEPRECATED: Use state instead |
| `table` | `number` | No |  |
| `type` | `string` | Yes | The type of the job. |
| `updated_on` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `view` | `number` | No |  |
| `workspace_id` | `number` | Yes | The workspace that the applications are going to be exported from. |

### Field Usage by Operation

| Field | load | list |
| --- | --- | --- |
| `created_at` | - | - |
| `created_on` | - | - |
| `error_code` | - | - |
| `exported_file_name` | - | Yes |
| `exporter_type` | - | - |
| `human_readable_error` | - | - |
| `id` | - | - |
| `progress_percentage` | - | Yes |
| `state` | - | - |
| `status` | - | - |
| `table` | - | - |
| `type` | - | - |
| `updated_on` | - | - |
| `url` | - | - |
| `view` | - | - |
| `workspace_id` | - | - |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Export().list({ workspace_id: 1 })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Export().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExportEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ExportJobEntity

```ts
const export_job = client.ExportJob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `exported_file_name` | `string` | No |  |
| `exporter_type` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `progress_percentage` | `number` | No |  |
| `state` | `string` | Yes | * `pending` - pending * `exporting` - exporting * `cancelled` - cancelled * `finished` - finished * `failed` - failed * `expired` - expired |
| `status` | `string` | Yes | DEPRECATED: Use state instead |
| `table` | `number` | No |  |
| `url` | `string` | Yes |  |
| `view` | `number` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ExportJob().create({
  table_id: 1,
  exporter_type: 'example_exporter_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ExportJob().load({ job_id: 'job_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExportJobEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FieldEntity

```ts
const field = client.Field()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Field().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Field().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FieldFieldEntity

```ts
const field_field = client.FieldField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `new_primary_field_id` | `number` | Yes | The ID of the new primary field. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.FieldField().create({
  table_id: 1,
  new_primary_field_id: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.FieldField().load({ table_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FieldFieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FieldFieldSerializerWithRelatedFieldEntity

```ts
const field_field_serializer_with_related_field = client.FieldFieldSerializerWithRelatedField()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.FieldFieldSerializerWithRelatedField().create({
  table_id: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FieldFieldSerializerWithRelatedFieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FieldPermissionSubjectOptionEntity

```ts
const field_permission_subject_option = client.FieldPermissionSubjectOption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `subjects` | `/api/field-permissions/{field_id}/subjects/` | `client.FieldPermissionSubjectOption().list({ $action: 'subjects', ... })` |

An action returns that action's OWN response, which is not necessarily a
FieldPermissionSubjectOption record — check the API definition for its shape.

```ts
const result = await client.FieldPermissionSubjectOption().list({
  $action: 'subjects',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.FieldPermissionSubjectOption().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FieldPermissionSubjectOptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FieldRuleEntity

```ts
const field_rule = client.FieldRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.FieldRule().create({
  id: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.FieldRule().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.FieldRule().remove({ id: 1, rule_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FieldRuleEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FieldRulesResponseFieldRuleEntity

```ts
const field_rules_response_field_rule = client.FieldRulesResponseFieldRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.FieldRulesResponseFieldRule().update({
  field_rule_id: 1,
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FieldRulesResponseFieldRuleEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FormViewSubmittedEntity

```ts
const form_view_submitted = client.FormViewSubmitted()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field_1` | `string` | No | This field represents the `text` field. |
| `field_13` | `number` | No | This field represents the `duration` field. |
| `field_14` | `any[]` | No | This field represents the `link_row` field. |
| `field_15` | `any[]` | No | This field represents the `file` field. |
| `field_16` | `number` | No | Accepts one of the following option ids as integer value This field accepts an `integer` representing the chosen select option id related to the field. |
| `field_17` | `any[]` | No | This field represents the `multiple_select` field. |
| `field_18` | `string` | No | This field represents the `phone_number` field. |
| `field_2` | `string` | No | This field represents the `long_text` field. |
| `field_23` | `any[]` | No | This field represents the `multiple_collaborators` field. |
| `field_26` | `string` | No | This field represents the `password` field. |
| `field_29` | `string` | No | This field represents the `ai` field. |
| `field_3` | `string` | No | This field represents the `url` field. |
| `field_4` | `string` | No | This field represents the `email` field. |
| `field_5` | `string` | No | This field represents the `number` field. |
| `field_6` | `number` | No | This field represents the `rating` field. |
| `field_7` | `boolean` | No | This field represents the `boolean` field. |
| `field_8` | `string` | No | This field represents the `date` field. |
| `row_id` | `number` | Yes |  |
| `submit_action` | `string` | No | The action that must be performed after the visitor has filled out the form. |
| `submit_action_message` | `string` | No | If the `submit_action` is MESSAGE, then this message will be shown to the visitor after submitting the form. |
| `submit_action_redirect_url` | `any` | No | If the `submit_action` is REDIRECT,then the visitors will be redirected to the this URL after submitting the form. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.FormViewSubmitted().create({
  slug: 'example_slug',
})
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.FormViewSubmitted().update({
  row_token: 'row_token',
  slug: 'slug',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FormViewSubmittedEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FullEntity

```ts
const full = client.Full()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `celery_export_queue_size` | `number` | Yes | The number of enqueued celery export worker tasks. |
| `celery_queue_size` | `number` | Yes | The number of enqueued celery tasks. |
| `checks` | `Record<string, any>` | Yes | An object keyed by the name of the health check and the value being the result. |
| `passing` | `boolean` | Yes | False if any of the critical service health checks are failing, true otherwise. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Full().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FullEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GenerateFormulaWithAiEntity

```ts
const generate_formula_with_ai = client.GenerateFormulaWithAi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_model` | `string` | Yes | The AI model that must be used when generating the formula. |
| `ai_prompt` | `string` | Yes | The human readable input used to generate the formula. |
| `ai_temperature` | `number` | No | Between 0 and 2, adjusts response randomness—lower values yield focused answers, while higher values increase creativity. |
| `ai_type` | `string` | Yes | The AI model type that must be used when generating the formula. |
| `formula` | `string` | Yes | The formula generated by the AI. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.GenerateFormulaWithAi().create({
  table_id: 1,
  ai_model: 'example_ai_model',
  ai_prompt: 'example_ai_prompt',
  ai_type: 'example_ai_type',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenerateFormulaWithAiEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GridViewGroupByDataEntity

```ts
const grid_view_group_by_data = client.GridViewGroupByData()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `group_count` | `number` | Yes |  |
| `groups` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `limit` | `number` | Yes |  |
| `offset` | `number` | Yes |  |
| `parent` | `Record<string, any>` | Yes | The serialized parent group path requested for this page. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.GridViewGroupByData().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GridViewGroupByDataEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HealthEntity

```ts
const health = client.Health()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `celery_queue` | `/api/_health/celery-queue/` | `client.Health().load({ $action: 'celery_queue', ... })` |

An action returns that action's OWN response, which is not necessarily a
Health record — check the API definition for its shape.

```ts
const result = await client.Health().load({
  $action: 'celery_queue',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Health().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HealthEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InboundEmailEntity

```ts
const inbound_email = client.InboundEmail()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.InboundEmail().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InboundEmailEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InstallEntity

```ts
const install = client.Install()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Install().create({
  template_id: 1,
  workspace_id: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InstallEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InstanceIdEntity

```ts
const instance_id = client.InstanceId()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instance_id` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.InstanceId().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InstanceIdEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IntegrationEntity

```ts
const integration = client.Integration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Integration().create({
  application_id: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Integration().list({ application_id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Integration().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Integration().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IntegrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IntegrationIntegrationEntity

```ts
const integration_integration = client.IntegrationIntegration()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `move` | `/api/integration/{integration_id}/move/` | `client.IntegrationIntegration().update({ $action: 'move', ... })` |

An action returns that action's OWN response, which is not necessarily a
IntegrationIntegration record — check the API definition for its shape.

```ts
const result = await client.IntegrationIntegration().update({
  $action: 'move',
  /* ...the action's own arguments */
})
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.IntegrationIntegration().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IntegrationIntegrationEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IntegrationServiceDashboardDataSourceEntity

```ts
const integration_service_dashboard_data_source = client.IntegrationServiceDashboardDataSource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.IntegrationServiceDashboardDataSource().list({ dashboard_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.IntegrationServiceDashboardDataSource().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IntegrationServiceDashboardDataSourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IntegrationServiceDataSourceEntity

```ts
const integration_service_data_source = client.IntegrationServiceDataSource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `before_id` | `number` | No | If provided, the data_source is moved before the data_source with this Id. |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.IntegrationServiceDataSource().create({
  page_id: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.IntegrationServiceDataSource().list({ page_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.IntegrationServiceDataSource().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IntegrationServiceDataSourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IntegrationServicePublicDataSourceEntity

```ts
const integration_service_public_data_source = client.IntegrationServicePublicDataSource()
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.IntegrationServicePublicDataSource().list({ page_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IntegrationServicePublicDataSourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InvalidRowEntity

```ts
const invalid_row = client.InvalidRow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.InvalidRow().list({ field_rule_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InvalidRowEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## JobEntity

```ts
const job = client.Job()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes | The number of matching jobs, or null when polling explicit job IDs. |
| `created_on` | `string` | Yes |  |
| `error_code` | `string` | No | A machine readable error code indicating why the job failed. |
| `human_readable_error` | `string` | No | A human readable error message indicating what went wrong. |
| `id` | `number` | Yes |  |
| `jobs` | `any[]` | Yes |  |
| `progress_percentage` | `number` | Yes | A percentage indicating how far along the job is. |
| `state` | `string` | Yes | Indicates the state of the import job. |
| `type` | `string` | Yes | The type of the job. |
| `updated_on` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Job().create({
  count: 1,
  jobs: [],
  progress_percentage: 1,
  state: 'example_state',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Job().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Job().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `JobEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## JobTypeJobEntity

```ts
const job_type_job = client.JobTypeJob()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel` | `/api/jobs/{job_id}/cancel/` | `client.JobTypeJob().create({ $action: 'cancel', ... })` |

An action returns that action's OWN response, which is not necessarily a
JobTypeJob record — check the API definition for its shape.

```ts
const result = await client.JobTypeJob().create({
  $action: 'cancel',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.JobTypeJob().create({
  id: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `JobTypeJobEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## KanbanEntity

```ts
const kanban = client.Kanban()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field_options` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `row_metadata` | `Record<string, any>` | No | An object keyed by row id with a value being an object containing additional metadata about that row. |
| `rows` | `Record<string, any>` | Yes | Every select option related to the view's single select field can have its own entry like this. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Kanban().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `KanbanEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## KanbanViewExampleEntity

```ts
const kanban_view_example = client.KanbanViewExample()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hidden` | `boolean` | No | Whether or not the field should be hidden in the card. |
| `order` | `number` | No | The order that the field has in the view. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.KanbanViewExample().list({ kanban_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `KanbanViewExampleEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LastViewedItemEntity

```ts
const last_viewed_item = client.LastViewedItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application` | `Record<string, any>` | Yes |  |
| `item` | `any` | Yes | The `id` and `name` of the item, plus what the type adds. |
| `last_viewed` | `string` | Yes |  |
| `sub_type` | `string` | Yes | Set for polymorphic types, like the view type of a database view. |
| `type` | `string` | Yes |  |
| `workspace` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.LastViewedItem().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LastViewedItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LicenseEntity

```ts
const license = client.License()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `application_users` | `number` | Yes | The amount of application builder users permitted in this license. |
| `application_users_taken` | `number` | Yes | The amount of application builder users used so far in this license. |
| `email` | `string` | No |  |
| `first_name` | `string` | No |  |
| `free_users_count` | `number` | Yes | The amount of free users that are currently using the license. |
| `id` | `number` | Yes |  |
| `is_active` | `boolean` | Yes | Indicates if the backend deems the license valid. |
| `issued_on` | `string` | Yes | The date when the license was issued. |
| `issued_to_email` | `string` | Yes | Indicates to which email address the license has been issued. |
| `issued_to_name` | `string` | Yes | Indicates to whom the license has been issued. |
| `last_check` | `string` | No |  |
| `license_id` | `string` | Yes | Unique identifier of the license. |
| `product_code` | `string` | Yes | The product code that indicates what the license unlocks. |
| `seats` | `number` | Yes | The maximum amount of users that can use the license. |
| `seats_taken` | `number` | Yes | The amount of users that are currently using the license. |
| `users` | `any[]` | Yes |  |
| `valid_from` | `string` | Yes | From which timestamp the license becomes active. |
| `valid_through` | `string` | Yes | Until which timestamp the license is active. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.License().create({
  id: 1,
  user_id: 1,
  application_users: 1,
  is_active: true,
  issued_on: 'example_issued_on',
  issued_to_email: 'example_issued_to_email',
  issued_to_name: 'example_issued_to_name',
  license_id: 'example_license_id',
  product_code: 'example_product_code',
  seats: 1,
  valid_from: 'example_valid_from',
  valid_through: 'example_valid_through',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.License().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LicenseEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LicenseUserEntity

```ts
const license_user = client.LicenseUser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `fill-seats` | `/api/licenses/{id}/fill-seats/` | `client.LicenseUser().create({ $action: 'fill-seats', ... })` |

An action returns that action's OWN response, which is not necessarily a
LicenseUser record — check the API definition for its shape.

```ts
const result = await client.LicenseUser().create({
  $action: 'fill-seats',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.LicenseUser().create({
  id: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LicenseUserEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LicenseUserLookupEntity

```ts
const license_user_lookup = client.LicenseUserLookup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `value` | `string` | Yes | The name and the email address of the user. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `lookup-users` | `/api/licenses/{id}/lookup-users/` | `client.LicenseUserLookup().list({ $action: 'lookup-users', ... })` |

An action returns that action's OWN response, which is not necessarily a
LicenseUserLookup record — check the API definition for its shape.

```ts
const result = await client.LicenseUserLookup().list({
  $action: 'lookup-users',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.LicenseUserLookup().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LicenseUserLookupEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LicenseWithUserEntity

```ts
const license_with_user = client.LicenseWithUser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `check` | `/api/licenses/{id}/check/` | `client.LicenseWithUser().list({ $action: 'check', ... })` |

An action returns that action's OWN response, which is not necessarily a
LicenseWithUser record — check the API definition for its shape.

```ts
const result = await client.LicenseWithUser().list({
  $action: 'check',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.LicenseWithUser().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LicenseWithUserEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListDataSyncPropertyEntity

```ts
const list_data_sync_property = client.ListDataSyncProperty()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field_type` | `string` | Yes |  |
| `initially_selected` | `boolean` | Yes |  |
| `key` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `unique_primary` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ListDataSyncProperty().create({
  database_id: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ListDataSyncProperty().list({ data_sync_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListDataSyncPropertyEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LoginEntity

```ts
const login = client.Login()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Login().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LoginEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## McpEndpointEntity

```ts
const mcp_endpoint = client.McpEndpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `key` | `string` | Yes | The unique endpoint key that can be used to authorize for the MCP service. |
| `name` | `string` | Yes | The human readable name of the MCP endpoint for the user. |
| `workspace_id` | `number` | Yes |  |
| `workspace_name` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `created` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `key` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `workspace_id` | - | - | - | - | - |
| `workspace_name` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.McpEndpoint().create({
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.McpEndpoint().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.McpEndpoint().load({ id: 'mcp_endpoint_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.McpEndpoint().remove({ id: 'mcp_endpoint_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.McpEndpoint().update({
  id: 'mcp_endpoint_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `McpEndpointEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MessageEntity

```ts
const message = client.Message()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `messages` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Message().list({ chat_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MessageEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NotificationEntity

```ts
const notification = client.Notification()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `baserow_id` | `number` | Yes | The id of the notification. |
| `created_on` | `string` | Yes | The date and time that the notification was created. |
| `data` | `any` | Yes | The data associated with the notification. |
| `id` | `string` | Yes | The id of the notification. |
| `read` | `boolean` | No | If True, then the notification has been read by the user. |
| `sender` | `any` | Yes | The user that sent the notification. |
| `type` | `string` | Yes | The type of notification |
| `workspace` | `string` | Yes | The workspace that the notification is in (if any). |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `mark_all_as_read` | `/api/notifications/{workspace_id}/mark-all-as-read/` | `client.Notification().create({ $action: 'mark_all_as_read', ... })` |

An action returns that action's OWN response, which is not necessarily a
Notification record — check the API definition for its shape.

```ts
const result = await client.Notification().create({
  $action: 'mark_all_as_read',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Notification().create({
  id: 1,
  baserow_id: 1,
  created_on: 'example_created_on',
  data: 'example_data',
  sender: 'example_sender',
  type: 'example_type',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Notification().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Notification().update({
  id: 'notification_id',
  notification_id: 1,
  workspace_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NotificationEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OnboardingPromptSuggestionEntity

```ts
const onboarding_prompt_suggestion = client.OnboardingPromptSuggestion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `industry` | `string` | No | The industry the user works in. |
| `language` | `string` | No | ISO 639 language code the suggestions must be written in. |
| `suggestions` | `any[]` | Yes |  |
| `team` | `string` | No | The team the user is part of. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.OnboardingPromptSuggestion().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OnboardingPromptSuggestionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OpenApiRoleAssignmentEntity

```ts
const open_api_role_assignment = client.OpenApiRoleAssignment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `items` | `any[]` | Yes |  |
| `role` | `string` | Yes | The uid of the role assigned to the user or team in the given workspace. |
| `scope_id` | `number` | Yes | The unique scope ID. |
| `scope_type` | `string` | Yes | The type of the scope object. |
| `subject` | `any` | Yes | The structure of the subject field depends on the subject typereturned and will have additional fields accordingly |
| `subject_id` | `number` | Yes | The subject ID. |
| `subject_type` | `string` | Yes | The subject type. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.OpenApiRoleAssignment().create({
  workspace_id: 1,
  items: [],
  role: 'example_role',
  scope_id: 1,
  scope_type: 'example_scope_type',
  subject_id: 1,
  subject_type: 'example_subject_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.OpenApiRoleAssignment().load({ workspace_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OpenApiRoleAssignmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PageEntity

```ts
const page = client.Page()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `builder_id` | `number` | Yes |  |
| `graph` | `any` | Yes | A JSON serialized graph containing the points and edges. |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `order` | `number` | Yes | Lowest first. |
| `path` | `string` | Yes |  |
| `path_params` | `any[]` | No |  |
| `query_params` | `any[]` | No |  |
| `role_type` | `string` | Yes | Role type is used in conjunction with roles to control access to this page. |
| `roles` | `any` | Yes | List of user roles that are associated with this page. |
| `shared` | `boolean` | Yes |  |
| `visibility` | `string` | Yes | Controls the page's visibility. |

### Field Usage by Operation

| Field | create | update |
| --- | --- | --- |
| `builder_id` | - | - |
| `graph` | - | - |
| `id` | - | - |
| `name` | - | Yes |
| `order` | - | - |
| `path` | - | Yes |
| `path_params` | - | - |
| `query_params` | - | - |
| `role_type` | - | Yes |
| `roles` | - | Yes |
| `shared` | - | - |
| `visibility` | - | Yes |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Page().create({
  builder_id: 1,
  name: 'example_name',
  path: 'example_path',
})
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Page().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PageEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginationSerializerExampleRowResponseSerializerWithUserEntity

```ts
const pagination_serializer_example_row_response_serializer_with_user = client.PaginationSerializerExampleRowResponseSerializerWithUser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes | The total amount of results. |
| `next` | `string` | Yes | URL to the next page. |
| `previous` | `string` | Yes | URL to the previous page. |
| `results` | `any[]` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PaginationSerializerExampleRowResponseSerializerWithUser().load({ table_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginationSerializerExampleRowResponseSerializerWithUserEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginationSerializerLinkRowValueEntity

```ts
const pagination_serializer_link_row_value = client.PaginationSerializerLinkRowValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes | The total amount of results. |
| `next` | `string` | Yes | URL to the next page. |
| `previous` | `string` | Yes | URL to the previous page. |
| `results` | `any[]` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PaginationSerializerLinkRowValue().load({ field_id: 1, view_id: 'view_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginationSerializerLinkRowValueEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginationSerializerNotificationRecipientEntity

```ts
const pagination_serializer_notification_recipient = client.PaginationSerializerNotificationRecipient()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes | The total amount of results. |
| `next` | `string` | Yes | URL to the next page. |
| `previous` | `string` | Yes | URL to the previous page. |
| `results` | `any[]` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PaginationSerializerNotificationRecipient().load({ workspace_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginationSerializerNotificationRecipientEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginationSerializerRowCommentEntity

```ts
const pagination_serializer_row_comment = client.PaginationSerializerRowComment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes | The total amount of results. |
| `id` | `string` | No |  |
| `next` | `string` | Yes | URL to the next page. |
| `previous` | `string` | Yes | URL to the previous page. |
| `results` | `any[]` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PaginationSerializerRowComment().load({ row_id: 1, table_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginationSerializerRowCommentEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginationSerializerTrashContentEntity

```ts
const pagination_serializer_trash_content = client.PaginationSerializerTrashContent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes | The total amount of results. |
| `next` | `string` | Yes | URL to the next page. |
| `previous` | `string` | Yes | URL to the previous page. |
| `results` | `any[]` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PaginationSerializerTrashContent().load({ workspace_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginationSerializerTrashContentEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginationSerializerWithGalleryViewFieldOptionsExampleRowEntity

```ts
const pagination_serializer_with_gallery_view_field_options_example_row = client.PaginationSerializerWithGalleryViewFieldOptionsExampleRow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes | The total amount of results. |
| `field_options` | `Record<string, any>` | No | An object containing the field id as key and the properties related to view as value. |
| `next` | `string` | Yes | URL to the next page. |
| `previous` | `string` | Yes | URL to the previous page. |
| `results` | `any[]` | Yes |  |
| `row_metadata` | `Record<string, any>` | No | An object keyed by row id with a value being an object containing additional metadata about that row. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PaginationSerializerWithGalleryViewFieldOptionsExampleRow().load({ view_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginationSerializerWithGalleryViewFieldOptionsExampleRowEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginationSerializerWithGridViewFieldOptionsExampleRowEntity

```ts
const pagination_serializer_with_grid_view_field_options_example_row = client.PaginationSerializerWithGridViewFieldOptionsExampleRow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes | The total amount of results. |
| `field_options` | `Record<string, any>` | No | An object containing the field id as key and the properties related to view as value. |
| `next` | `string` | Yes | URL to the next page. |
| `previous` | `string` | Yes | URL to the previous page. |
| `results` | `any[]` | Yes |  |
| `row_metadata` | `Record<string, any>` | No | An object keyed by row id with a value being an object containing additional metadata about that row. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PaginationSerializerWithGridViewFieldOptionsExampleRow().load({ view_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginationSerializerWithGridViewFieldOptionsExampleRowEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PaginationSerializerWithTimelineViewFieldOptionsExampleRowEntity

```ts
const pagination_serializer_with_timeline_view_field_options_example_row = client.PaginationSerializerWithTimelineViewFieldOptionsExampleRow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes | The total amount of results. |
| `field_options` | `Record<string, any>` | No | An object containing the field id as key and the properties related to view as value. |
| `next` | `string` | Yes | URL to the next page. |
| `previous` | `string` | Yes | URL to the previous page. |
| `results` | `any[]` | Yes |  |
| `row_metadata` | `Record<string, any>` | No | An object keyed by row id with a value being an object containing additional metadata about that row. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PaginationSerializerWithTimelineViewFieldOptionsExampleRow().load({ view_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PaginationSerializerWithTimelineViewFieldOptionsExampleRowEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PasswordFieldAuthenticationEntity

```ts
const password_field_authentication = client.PasswordFieldAuthentication()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field_id` | `number` | Yes | The field where to check the password for. |
| `is_correct` | `boolean` | Yes | Indicates whether the provided password is correct. |
| `password` | `string` | Yes | The password to check. |
| `row_id` | `number` | Yes | The row where to check the password for. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.PasswordFieldAuthentication().create({
  field_id: 1,
  password: 'example_password',
  row_id: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PasswordFieldAuthenticationEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PeriodicDataSyncIntervalEntity

```ts
const periodic_data_sync_interval = client.PeriodicDataSyncInterval()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `automatically_deactivated` | `boolean` | Yes | Indicates whether the periodic data sync has been deactivated. |
| `interval` | `string` | No | * `MANUAL` - MANUAL * `DAILY` - DAILY * `HOURLY` - HOURLY |
| `when` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `automatically_deactivated` | - | Yes |
| `interval` | - | - |
| `when` | - | Yes |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PeriodicDataSyncInterval().load({ data_sync_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.PeriodicDataSyncInterval().update({
  data_sync_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PeriodicDataSyncIntervalEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PermissionEntity

```ts
const permission = client.Permission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The permission manager name. |
| `permissions` | `any` | Yes | The content of the permission object for this permission manager. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Permission().list({ workspace_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PermissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PublicBuilderWorkflowActionTypeBuilderWorkflowActionEntity

```ts
const public_builder_workflow_action_type_builder_workflow_action = client.PublicBuilderWorkflowActionTypeBuilderWorkflowAction()
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PublicBuilderWorkflowActionTypeBuilderWorkflowAction().list({ page_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PublicBuilderWorkflowActionTypeBuilderWorkflowActionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PublicFormViewEntity

```ts
const public_form_view = client.PublicFormView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition_groups` | `any[]` | No |  |
| `condition_type` | `string` | No | Indicates whether all (AND) or any (OR) of the conditions should match before shown. |
| `conditions` | `any[]` | No |  |
| `description` | `string` | No | If provided, then this value be will be shown under the field name. |
| `field` | `any` | Yes | The properties of the related field. |
| `field_component` | `string` | No | Indicates which field input component is used in the form. |
| `groups` | `any[]` | No |  |
| `name` | `string` | Yes | If provided, then this value will be visible above the field input. |
| `order` | `number` | No | The order that the field has in the form. |
| `required` | `boolean` | No | Indicates whether the field is required for the visitor to fill out. |
| `show_when_matching_conditions` | `boolean` | No | Indicates whether this field is visible when the conditions are met. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PublicFormView().list({ slug: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PublicFormViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PublicPaginationSerializerWithGalleryViewFieldOptionsEntity

```ts
const public_pagination_serializer_with_gallery_view_field_options = client.PublicPaginationSerializerWithGalleryViewFieldOptions()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field_1` | `string` | No | This field represents the `text` field. |
| `field_10` | `any` | No | This field represents the `last_modified_by` field. |
| `field_11` | `string` | No | This field represents the `created_on` field. |
| `field_12` | `any` | No | This field represents the `created_by` field. |
| `field_13` | `number` | No | This field represents the `duration` field. |
| `field_14` | `any[]` | No | This field represents the `link_row` field. |
| `field_15` | `any[]` | No | This field represents the `file` field. |
| `field_16` | `any` | No | This field represents the `single_select` field. |
| `field_17` | `any[]` | No | This field represents the `multiple_select` field. |
| `field_18` | `string` | No | This field represents the `phone_number` field. |
| `field_19` | `string` | No | This field represents the `formula` field. |
| `field_2` | `string` | No | This field represents the `long_text` field. |
| `field_20` | `string` | No | This field represents the `count` field. |
| `field_21` | `string` | No | This field represents the `rollup` field. |
| `field_22` | `string` | No | This field represents the `lookup` field. |
| `field_23` | `any[]` | No | This field represents the `multiple_collaborators` field. |
| `field_24` | `string` | No | This field represents the `uuid` field. |
| `field_25` | `number` | No | This field represents the `autonumber` field. |
| `field_26` | `boolean` | No | This field represents the `password` field. |
| `field_27` | `string` | Yes | This field represents the `form_view_edit_row` field. |
| `field_28` | `string` | No | This field represents the `button` field. |
| `field_29` | `string` | No | This field represents the `ai` field. |
| `field_3` | `string` | No | This field represents the `url` field. |
| `field_4` | `string` | No | This field represents the `email` field. |
| `field_5` | `string` | No | This field represents the `number` field. |
| `field_6` | `number` | No | This field represents the `rating` field. |
| `field_7` | `boolean` | No | This field represents the `boolean` field. |
| `field_8` | `string` | No | This field represents the `date` field. |
| `field_9` | `string` | No | This field represents the `last_modified` field. |
| `id` | `number` | Yes | The unique identifier of the row in the table. |
| `metadata` | `any` | No | Additional metadata for the row, if `include=metadata' is provided as query parameter. |
| `order` | `string` | No | Indicates the position of the row, lowest first and highest last. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PublicPaginationSerializerWithGalleryViewFieldOptions().list({ gallery_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PublicPaginationSerializerWithGalleryViewFieldOptionsEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PublicPaginationSerializerWithGridViewFieldOptionsExampleEntity

```ts
const public_pagination_serializer_with_grid_view_field_options_example = client.PublicPaginationSerializerWithGridViewFieldOptionsExample()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field_1` | `string` | No | This field represents the `text` field. |
| `field_10` | `any` | No | This field represents the `last_modified_by` field. |
| `field_11` | `string` | No | This field represents the `created_on` field. |
| `field_12` | `any` | No | This field represents the `created_by` field. |
| `field_13` | `number` | No | This field represents the `duration` field. |
| `field_14` | `any[]` | No | This field represents the `link_row` field. |
| `field_15` | `any[]` | No | This field represents the `file` field. |
| `field_16` | `any` | No | This field represents the `single_select` field. |
| `field_17` | `any[]` | No | This field represents the `multiple_select` field. |
| `field_18` | `string` | No | This field represents the `phone_number` field. |
| `field_19` | `string` | No | This field represents the `formula` field. |
| `field_2` | `string` | No | This field represents the `long_text` field. |
| `field_20` | `string` | No | This field represents the `count` field. |
| `field_21` | `string` | No | This field represents the `rollup` field. |
| `field_22` | `string` | No | This field represents the `lookup` field. |
| `field_23` | `any[]` | No | This field represents the `multiple_collaborators` field. |
| `field_24` | `string` | No | This field represents the `uuid` field. |
| `field_25` | `number` | No | This field represents the `autonumber` field. |
| `field_26` | `boolean` | No | This field represents the `password` field. |
| `field_27` | `string` | Yes | This field represents the `form_view_edit_row` field. |
| `field_28` | `string` | No | This field represents the `button` field. |
| `field_29` | `string` | No | This field represents the `ai` field. |
| `field_3` | `string` | No | This field represents the `url` field. |
| `field_4` | `string` | No | This field represents the `email` field. |
| `field_5` | `string` | No | This field represents the `number` field. |
| `field_6` | `number` | No | This field represents the `rating` field. |
| `field_7` | `boolean` | No | This field represents the `boolean` field. |
| `field_8` | `string` | No | This field represents the `date` field. |
| `field_9` | `string` | No | This field represents the `last_modified` field. |
| `id` | `number` | Yes | The unique identifier of the row in the table. |
| `metadata` | `any` | No | Additional metadata for the row, if `include=metadata' is provided as query parameter. |
| `order` | `string` | No | Indicates the position of the row, lowest first and highest last. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PublicPaginationSerializerWithGridViewFieldOptionsExample().list({ grid_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PublicPaginationSerializerWithGridViewFieldOptionsExampleEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PublicPaginationSerializerWithTimelineViewFieldOptionsEntity

```ts
const public_pagination_serializer_with_timeline_view_field_options = client.PublicPaginationSerializerWithTimelineViewFieldOptions()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field_1` | `string` | No | This field represents the `text` field. |
| `field_10` | `any` | No | This field represents the `last_modified_by` field. |
| `field_11` | `string` | No | This field represents the `created_on` field. |
| `field_12` | `any` | No | This field represents the `created_by` field. |
| `field_13` | `number` | No | This field represents the `duration` field. |
| `field_14` | `any[]` | No | This field represents the `link_row` field. |
| `field_15` | `any[]` | No | This field represents the `file` field. |
| `field_16` | `any` | No | This field represents the `single_select` field. |
| `field_17` | `any[]` | No | This field represents the `multiple_select` field. |
| `field_18` | `string` | No | This field represents the `phone_number` field. |
| `field_19` | `string` | No | This field represents the `formula` field. |
| `field_2` | `string` | No | This field represents the `long_text` field. |
| `field_20` | `string` | No | This field represents the `count` field. |
| `field_21` | `string` | No | This field represents the `rollup` field. |
| `field_22` | `string` | No | This field represents the `lookup` field. |
| `field_23` | `any[]` | No | This field represents the `multiple_collaborators` field. |
| `field_24` | `string` | No | This field represents the `uuid` field. |
| `field_25` | `number` | No | This field represents the `autonumber` field. |
| `field_26` | `boolean` | No | This field represents the `password` field. |
| `field_27` | `string` | Yes | This field represents the `form_view_edit_row` field. |
| `field_28` | `string` | No | This field represents the `button` field. |
| `field_29` | `string` | No | This field represents the `ai` field. |
| `field_3` | `string` | No | This field represents the `url` field. |
| `field_4` | `string` | No | This field represents the `email` field. |
| `field_5` | `string` | No | This field represents the `number` field. |
| `field_6` | `number` | No | This field represents the `rating` field. |
| `field_7` | `boolean` | No | This field represents the `boolean` field. |
| `field_8` | `string` | No | This field represents the `date` field. |
| `field_9` | `string` | No | This field represents the `last_modified` field. |
| `id` | `number` | Yes | The unique identifier of the row in the table. |
| `metadata` | `any` | No | Additional metadata for the row, if `include=metadata' is provided as query parameter. |
| `order` | `string` | No | Indicates the position of the row, lowest first and highest last. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PublicPaginationSerializerWithTimelineViewFieldOptions().list({ timeline_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PublicPaginationSerializerWithTimelineViewFieldOptionsEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PublicViewAuthEntity

```ts
const public_view_auth = client.PublicViewAuth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_token` | `string` | Yes |  |
| `password` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.PublicViewAuth().create({
  view_id: 'example_view_id',
  password: 'example_password',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PublicViewAuthEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PublicViewInfoEntity

```ts
const public_view_info = client.PublicViewInfo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `database_id` | `number` | Yes |  |
| `db_index` | `boolean` | No | If true, then an index will be added to the Baserow field to increase lookup and filter speed. |
| `description` | `string` | No | Field description |
| `field_constraints` | `string` | Yes | The constraints applied to this field. |
| `id` | `number` | Yes |  |
| `immutable_properties` | `boolean` | Yes | Indicates whether the field properties are immutable. |
| `immutable_type` | `boolean` | Yes | Indicates whether the field type is immutable. |
| `name` | `string` | Yes |  |
| `order` | `number` | Yes | Lowest first. |
| `primary` | `boolean` | No | Indicates if the field is a primary field. |
| `read_only` | `boolean` | Yes | Indicates whether the field is a read only field. |
| `table_id` | `number` | Yes |  |
| `type` | `string` | Yes | The type of the related field. |
| `workspace_id` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PublicViewInfo().list({ view_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PublicViewInfoEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RelatedFieldEntity

```ts
const related_field = client.RelatedField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.RelatedField().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RelatedFieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RowCommentEntity

```ts
const row_comment = client.RowComment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | Yes |  |
| `edited` | `string` | Yes |  |
| `first_name` | `string` | No |  |
| `id` | `number` | Yes |  |
| `message` | `string` | Yes | The rich text comment content. |
| `row_id` | `number` | Yes | The id of the row the comment is for. |
| `table_id` | `number` | Yes | The table the row this comment is for is found in. |
| `trashed` | `boolean` | No |  |
| `updated_on` | `string` | Yes |  |
| `user_id` | `number` | Yes | The user who made the comment. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.RowComment().create({
  row_id: 1,
  table_id: 1,
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.RowComment().remove({ id: 1, comment_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.RowComment().update({
  id: 1,
  comment_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RowCommentEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RowHistoryEntity

```ts
const row_history = client.RowHistory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_command_type` | `string` | No | The type of command that was performed. |
| `action_type` | `string` | Yes | The type of the action that was performed. |
| `after` | `any` | Yes | The mapping between field_ids and values for the row after the action was performed. |
| `before` | `any` | Yes | The mapping between field_ids and values for the row before the action was performed. |
| `fields_metadata` | `any` | Yes | The metadata of the fields that were changed. |
| `id` | `number` | Yes |  |
| `timestamp` | `string` | Yes | The timestamp of the action that was performed. |
| `user` | `any` | Yes | The user that performed the action. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.RowHistory().list({ row_id: 1, table_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RowHistoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecureFileServeEntity

```ts
const secure_file_serve = client.SecureFileServe()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.SecureFileServe().load({ signed_data: 'signed_data' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecureFileServeEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SettingEntity

```ts
const setting = client.Setting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_deletion_grace_delay` | `number` | No | Number of days after the last login for an account pending deletion to be deleted |
| `allow_global_workspace_creation` | `boolean` | No | Indicates whether all users can create workspaces, or just staff. |
| `allow_new_signups` | `boolean` | No | Indicates whether new users can create a new account when signing up. |
| `allow_reporting_abuse` | `boolean` | No | Indicates whether anonymous visitors can report publicly shared resources, like views and forms, for abuse. |
| `allow_reset_password` | `boolean` | No | Indicates whether users can request a password reset link. |
| `allow_signups_via_workspace_invitations` | `boolean` | No | Indicates whether invited users can create an account when signing up, even if allow_new_signups is disabled. |
| `co_branding_logo` | `any` | No | Co-branding logo that's placed next to the Baserow logo (176x29). |
| `email_verification` | `any` | No | Controls whether user email addresses have to be verified. |
| `inbound_email_enabled` | `boolean` | Yes | Whether this instance is configured to receive inbound email for the automation email trigger. |
| `show_admin_signup_page` | `boolean` | No | Indicates that there are no admin users in the database yet, so in the frontend the signup form will be shown instead of the login page. |
| `show_baserow_help_request` | `boolean` | No | Indicates whether the `We need your help!` message will be shown on the dashboard |
| `track_workspace_usage` | `boolean` | No | Runs a job once per day which calculates per workspace row counts and file storage usage, displayed on the admin workspace page. |
| `verify_import_signature` | `boolean` | No | Indicates whether the signature of imported files should be verified. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `update` | `/api/settings/update/` | `client.Setting().update({ $action: 'update', ... })` |

An action returns that action's OWN response, which is not necessarily a
Setting record — check the API definition for its shape.

```ts
const result = await client.Setting().update({
  $action: 'update',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Setting().load()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Setting().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SnapshotEntity

```ts
const snapshot = client.Snapshot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `created_by` | `any` | Yes |  |
| `created_on` | `string` | Yes |  |
| `error_code` | `string` | No | A machine readable error code indicating why the job failed. |
| `human_readable_error` | `string` | No | A human readable error message indicating what went wrong. |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `progress_percentage` | `number` | Yes | A percentage indicating how far along the job is. |
| `snapshot_from_application` | `number` | Yes |  |
| `state` | `string` | Yes | Indicates the state of the import job. |
| `type` | `string` | Yes | The type of the job. |
| `updated_on` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Snapshot().create({
  application_id: 1,
  name: 'example_name',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Snapshot().load({ application_id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Snapshot().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SnapshotEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TableEntity

```ts
const table = client.Table()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No | Indicates whether the web hook is active. |
| `calls` | `any[]` | Yes | All the calls that this webhook made. |
| `created_on` | `string` | Yes |  |
| `data` | `any[]` | No | A list of rows that needs to be created as initial table data. |
| `data_sync` | `Record<string, any>` | Yes |  |
| `database_id` | `number` | Yes |  |
| `event_config` | `any[]` | Yes | A list containing the addition event options. |
| `events` | `Record<string, any>` | Yes | A list containing the events that will trigger this webhook. |
| `failed_triggers` | `number` | No | The amount of failed webhook calls. |
| `first_row_header` | `boolean` | No | Indicates if the first provided row is the header. |
| `headers` | `Record<string, any>` | Yes | The additional headers as an object where the key is the name and the value the value. |
| `id` | `number` | Yes |  |
| `importer_type` | `string` | No | The frontend importer identifier used to parse the file. |
| `include_all_events` | `boolean` | No | Indicates whether this webhook should listen to all events. |
| `name` | `string` | Yes | An internal name of the webhook. |
| `order` | `number` | Yes | Lowest first. |
| `original_file_name` | `string` | No | The original name of the uploaded file. |
| `request_method` | `string` | No | The request method that be used when the event occurs. |
| `updated_on` | `string` | Yes |  |
| `url` | `string` | Yes | The URL that must be called when the webhook is triggered. |
| `use_user_field_names` | `boolean` | No | Indicates whether the field names must be used as payload key instead of the id. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `active` | - | - | - |
| `calls` | - | - | - |
| `created_on` | - | - | - |
| `data` | - | - | - |
| `data_sync` | - | - | - |
| `database_id` | - | - | - |
| `event_config` | - | Yes | - |
| `events` | - | Yes | - |
| `failed_triggers` | - | - | - |
| `first_row_header` | - | - | - |
| `headers` | - | Yes | - |
| `id` | - | - | - |
| `importer_type` | - | - | - |
| `include_all_events` | - | - | - |
| `name` | - | - | Yes |
| `order` | - | - | - |
| `original_file_name` | - | - | - |
| `request_method` | - | - | - |
| `updated_on` | - | - | - |
| `url` | - | - | - |
| `use_user_field_names` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Table().create({
  database_id: 1,
  name: 'example_name',
  url: 'example_url',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Table().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Table().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TableEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TableWebhookEntity

```ts
const table_webhook = client.TableWebhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No | Indicates whether the web hook is active. |
| `calls` | `any[]` | Yes | All the calls that this webhook made. |
| `created_on` | `string` | Yes |  |
| `event_config` | `any[]` | Yes | A list containing the addition event options. |
| `events` | `Record<string, any>` | Yes | A list containing the events that will trigger this webhook. |
| `failed_triggers` | `number` | No | The amount of failed webhook calls. |
| `headers` | `Record<string, any>` | Yes | The additional headers as an object where the key is the name and the value the value. |
| `id` | `number` | Yes |  |
| `include_all_events` | `boolean` | No | Indicates whether this webhook should listen to all events. |
| `name` | `string` | Yes | An internal name of the webhook. |
| `request_method` | `string` | No | The request method that be used when the event occurs. |
| `updated_on` | `string` | Yes |  |
| `url` | `string` | Yes | The URL that must be called when the webhook is triggered. |
| `use_user_field_names` | `boolean` | No | Indicates whether the field names must be used as payload key instead of the id. |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `active` | - | - |
| `calls` | - | - |
| `created_on` | - | - |
| `event_config` | - | Yes |
| `events` | - | Yes |
| `failed_triggers` | - | - |
| `headers` | - | Yes |
| `id` | - | - |
| `include_all_events` | - | - |
| `name` | - | Yes |
| `request_method` | - | - |
| `updated_on` | - | - |
| `url` | - | Yes |
| `use_user_field_names` | - | - |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.TableWebhook().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.TableWebhook().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TableWebhookEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TableWebhookTestCallEntity

```ts
const table_webhook_test_call = client.TableWebhookTestCall()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `event_type` | `string` | Yes | The event type that must be used for the test call. |
| `headers` | `Record<string, any>` | No | The additional headers as an object where the key is the name and the value the value. |
| `id` | `string` | No |  |
| `is_unreachable` | `boolean` | Yes | Indicates whether the provided URL could be reached. |
| `request` | `string` | Yes | A text copy of the request headers and body. |
| `request_method` | `string` | No | The request method that be used when the event occurs. |
| `response` | `string` | Yes | A text copy of the response headers and body. |
| `status_code` | `number` | Yes | The HTTP response status code. |
| `url` | `string` | Yes | The URL that must be called when the webhook is triggered. |
| `use_user_field_names` | `boolean` | No | Indicates whether the field names must be used as payload key instead of the id. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.TableWebhookTestCall().create({
  id: 1,
  event_type: 'example_event_type',
  url: 'example_url',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TableWebhookTestCallEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TableWithoutDataSyncEntity

```ts
const table_without_data_sync = client.TableWithoutDataSync()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `database_id` | `number` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `order` | `number` | Yes | Lowest first. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TableWithoutDataSync().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TableWithoutDataSyncEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamEntity

```ts
const team = client.Team()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | Yes |  |
| `default_role` | `string` | No | The uid of the role this team has in its workspace. |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes | A human friendly name for this team. |
| `subject_count` | `number` | Yes | The amount of subjects (e.g. |
| `subject_sample` | `any[]` | No | A sample, by default 10, of the most recent subjects to join this team. |
| `subjects` | `any[]` | No | An array of subject ID/type objects to be used during team create and update. |
| `updated_on` | `string` | Yes |  |
| `workspace` | `number` | Yes | The workspace that this team belongs to. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Team().create({
  workspace_id: 'example_workspace_id',
  name: 'example_name',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Team().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Team().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Team().update({
  id: 'team_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamSubjectEntity

```ts
const team_subject = client.TeamSubject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `subject_id` | `number` | Yes | The unique subject ID. |
| `subject_type` | `string` | Yes | Returns the TeamSubject's `subject_type` natural key. |
| `subject_user_email` | `string` | No | The user subject's email address. |
| `team` | `number` | Yes | The team this subject belongs to. |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `id` | - | - | - |
| `subject_id` | - | - | Yes |
| `subject_type` | - | - | - |
| `subject_user_email` | - | - | - |
| `team` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.TeamSubject().create({
  id: 'example_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.TeamSubject().list({ id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.TeamSubject().load({ id: 1, team_id: 'team_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamSubjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TemplateEntity

```ts
const template = client.Template()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | Yes |  |
| `error_code` | `string` | No | A machine readable error code indicating why the job failed. |
| `human_readable_error` | `string` | No | A human readable error message indicating what went wrong. |
| `id` | `number` | Yes |  |
| `installed_applications` | `any` | Yes |  |
| `name` | `string` | Yes |  |
| `progress_percentage` | `number` | Yes | A percentage indicating how far along the job is. |
| `state` | `string` | Yes | Indicates the state of the import job. |
| `template` | `any` | Yes |  |
| `templates` | `any[]` | Yes |  |
| `type` | `string` | Yes | The type of the job. |
| `updated_on` | `string` | Yes |  |
| `workspace` | `any` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Template().create({
  install_id: 1,
  template_id: 1,
  name: 'example_name',
  progress_percentage: 1,
  state: 'example_state',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Template().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TokenEntity

```ts
const token = client.Token()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `key` | `string` | Yes | The unique token key that can be used to authorize for the table row endpoints. |
| `name` | `string` | Yes | The human readable name of the database token for the user. |
| `permissions` | `Record<string, any>` | Yes | Indicates per operation which permissions the database token has within the whole workspace. |
| `rotate_key` | `boolean` | No | Indicates if a new key must be generated. |
| `workspace` | `number` | Yes | Only the tables of the workspace can be accessed. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `id` | - | - | - | - |
| `key` | - | - | - | - |
| `name` | - | - | - | Yes |
| `permissions` | - | - | - | Yes |
| `rotate_key` | - | - | - | - |
| `workspace` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Token().create({
  name: 'example_name',
  workspace: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Token().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Token().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Token().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TrashEntity

```ts
const trash = client.Trash()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `applications` | `any[]` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `trashed` | `boolean` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `restore` | `/api/trash/restore/` | `client.Trash().update({ $action: 'restore', ... })` |

An action returns that action's OWN response, which is not necessarily a
Trash record — check the API definition for its shape.

```ts
const result = await client.Trash().update({
  $action: 'restore',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Trash().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Trash().remove({ workspace_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Trash().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TrashEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TwoFactorAuthTypeTwoFactorAuthEntity

```ts
const two_factor_auth_type_two_factor_auth = client.TwoFactorAuthTypeTwoFactorAuth()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.TwoFactorAuthTypeTwoFactorAuth().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.TwoFactorAuthTypeTwoFactorAuth().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TwoFactorAuthTypeTwoFactorAuthEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TypeEntity

```ts
const type = client.Type()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `array_formula_type` | `any` | No |  |
| `date_force_timezone` | `string` | No | Force a timezone for the field overriding user profile settings. |
| `date_format` | `any` | No | EU (20/02/2020), US (02/20/2020) or ISO (2020-02-20) * `EU` - European (D/M/Y) * `US` - US (M/D/Y) * `ISO` - ISO (Y-M-D) |
| `date_include_time` | `boolean` | No | Indicates if the field also includes a time. |
| `date_show_tzinfo` | `boolean` | No | Indicates if the time zone should be shown. |
| `date_time_format` | `any` | No | 24 (14:30) or 12 (02:30 PM) * `24` - 24 hour * `12` - 12 hour |
| `duration_format` | `any` | No | The format of the duration. |
| `error` | `string` | No |  |
| `formula` | `string` | Yes |  |
| `formula_type` | `string` | No | * `invalid` - invalid * `text` - text * `char` - char * `button` - button * `link` - link * `date_interval` - date_interval * `duration` - duration * `date` - date * `boolean` - boolean * `number` - number * `array` - array *… |
| `name` | `string` | Yes |  |
| `nullable` | `boolean` | Yes |  |
| `number_decimal_places` | `any` | No | The amount of digits allowed after the point. |
| `number_prefix` | `string` | No | The prefix to use for the field. |
| `number_separator` | `any` | No | The thousand and decimal separator to use for the field. |
| `number_suffix` | `string` | No | The suffix to use for the field. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Type().create({
  formula_id: 1,
  formula: 'example_formula',
  name: 'example_name',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UniqueRowValueEntity

```ts
const unique_row_value = client.UniqueRowValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `values` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.UniqueRowValue().list({ field_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UniqueRowValueEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateFieldPermissionEntity

```ts
const update_field_permission = client.UpdateFieldPermission()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_in_forms` | `boolean` | No | Whether to allow this field to be shown in forms. |
| `can_write_values` | `boolean` | No | Whether the user can write values to this field. |
| `field_id` | `number` | Yes | The ID of the field whose permissions were updated. |
| `id` | `string` | No |  |
| `role` | `string` | Yes | The role required to update the data for this field. |
| `subjects` | `any[]` | Yes |  |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `allow_in_forms` | - | - |
| `can_write_values` | - | - |
| `field_id` | - | - |
| `id` | - | - |
| `role` | - | Yes |
| `subjects` | - | Yes |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.UpdateFieldPermission().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.UpdateFieldPermission().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateFieldPermissionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserEntity

```ts
const user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authenticate` | `boolean` | No | Indicates whether an authentication JWT should be generated and be included in the response. |
| `captcha_token` | `string` | No | The captcha response token, required when captcha is enabled. |
| `date_joined` | `string` | No |  |
| `email` | `string` | Yes | The email address is also going to be the username. |
| `id` | `number` | Yes |  |
| `is_active` | `boolean` | No | Designates whether this user should be treated as active. |
| `is_staff` | `boolean` | No | Designates whether this user is an admin and has access to all workspaces and Baserow's admin areas. |
| `language` | `string` | No | An ISO 639 language code (with optional variant) selected by the user. |
| `last_login` | `string` | No |  |
| `name` | `string` | Yes |  |
| `password` | `string` | Yes |  |
| `template_id` | `number` | No | The id of the template that must be installed after creating the account. |
| `two_factor_auth` | `Record<string, any>` | Yes | The user's two factor auth provider state, or null when no provider is configured. |
| `username` | `string` | Yes |  |
| `workspace_invitation_token` | `string` | No | If provided and valid, the user accepts the workspace invitation and will have access to the workspace after signing up. |
| `workspaces` | `any[]` | Yes |  |

### Field Usage by Operation

| Field | list | create | update |
| --- | --- | --- | --- |
| `authenticate` | - | - | - |
| `captcha_token` | - | - | - |
| `date_joined` | - | - | - |
| `email` | - | - | - |
| `id` | - | - | - |
| `is_active` | - | - | - |
| `is_staff` | - | - | - |
| `language` | - | - | - |
| `last_login` | - | - | - |
| `name` | - | - | Yes |
| `password` | - | - | Yes |
| `template_id` | - | - | - |
| `two_factor_auth` | - | - | - |
| `username` | - | - | Yes |
| `workspace_invitation_token` | - | - | - |
| `workspaces` | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `change_email` | `/api/user/change-email/` | `client.User().create({ $action: 'change_email', ... })` |
| `change_password` | `/api/user/change-password/` | `client.User().create({ $action: 'change_password', ... })` |
| `reset_password` | `/api/user/reset-password/` | `client.User().create({ $action: 'reset_password', ... })` |
| `schedule_account_deletion` | `/api/user/schedule-account-deletion/` | `client.User().create({ $action: 'schedule_account_deletion', ... })` |
| `send_change_email_confirmation` | `/api/user/send-change-email-confirmation/` | `client.User().create({ $action: 'send_change_email_confirmation', ... })` |
| `send_reset_password_email` | `/api/user/send-reset-password-email/` | `client.User().create({ $action: 'send_reset_password_email', ... })` |
| `send_verify_email` | `/api/user/send-verify-email/` | `client.User().create({ $action: 'send_verify_email', ... })` |
| `token_auth` | `/api/user/token-auth/` | `client.User().create({ $action: 'token_auth', ... })` |
| `token_blacklist` | `/api/user/token-blacklist/` | `client.User().create({ $action: 'token_blacklist', ... })` |
| `token_refresh` | `/api/user/token-refresh/` | `client.User().create({ $action: 'token_refresh', ... })` |
| `token_verify` | `/api/user/token-verify/` | `client.User().create({ $action: 'token_verify', ... })` |
| `verify_email` | `/api/user/verify-email/` | `client.User().create({ $action: 'verify_email', ... })` |
| `dashboard` | `/api/user/dashboard/` | `client.User().list({ $action: 'dashboard', ... })` |
| `account` | `/api/user/account/` | `client.User().update({ $action: 'account', ... })` |
| `preference` | `/api/user/preferences/` | `client.User().update({ $action: 'preference', ... })` |
| `redo` | `/api/user/redo/` | `client.User().update({ $action: 'redo', ... })` |
| `undo` | `/api/user/undo/` | `client.User().update({ $action: 'undo', ... })` |

An action returns that action's OWN response, which is not necessarily a
User record — check the API definition for its shape.

```ts
const result = await client.User().create({
  $action: 'change_email',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.User().create({
  email: 'example_email',
  name: 'example_name',
  password: 'example_password',
  username: 'example_username',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.User().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.User().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserFileEntity

```ts
const user_file = client.UserFile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `image_height` | `number` | No |  |
| `image_width` | `number` | No |  |
| `is_image` | `boolean` | No |  |
| `mime_type` | `string` | No |  |
| `name` | `string` | Yes |  |
| `original_name` | `string` | Yes |  |
| `size` | `number` | Yes |  |
| `thumbnails` | `Record<string, any>` | Yes |  |
| `uploaded_at` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `upload_file` | `/api/user-files/upload-file/` | `client.UserFile().create({ $action: 'upload_file', ... })` |
| `upload_via_url` | `/api/user-files/upload-via-url/` | `client.UserFile().create({ $action: 'upload_via_url', ... })` |

An action returns that action's OWN response, which is not necessarily a
UserFile record — check the API definition for its shape.

```ts
const result = await client.UserFile().create({
  $action: 'upload_file',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.UserFile().create({
  slug: 'example_slug',
  original_name: 'example_original_name',
  size: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserFileEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserSourceEntity

```ts
const user_source = client.UserSource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `RelayState` | `string` | Yes | The frontend URL where redirect the authenticated user. |
| `SAMLResponse` | `string` | Yes | The encoded SAML response from the IdP. |
| `access_token` | `string` | No | 'access_token' can be used to authorize for other endpoints that require authorization. |
| `id` | `string` | No |  |
| `refresh` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `force_token_auth` | `/api/user-source/{user_source_id}/force-token-auth` | `client.UserSource().create({ $action: 'force_token_auth', ... })` |
| `token_auth` | `/api/user-source/{user_source_id}/token-auth` | `client.UserSource().create({ $action: 'token_auth', ... })` |

An action returns that action's OWN response, which is not necessarily a
UserSource record — check the API definition for its shape.

```ts
const result = await client.UserSource().create({
  $action: 'force_token_auth',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.UserSource().create({
  RelayState: 'example_RelayState',
  SAMLResponse: 'example_SAMLResponse',
  refresh: 'example_refresh',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.UserSource().list({ application_id: 1 })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.UserSource().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.UserSource().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.UserSource().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserSourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserSourceUserSourceEntity

```ts
const user_source_user_source = client.UserSourceUserSource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `move` | `/api/user-source/{user_source_id}/move/` | `client.UserSourceUserSource().update({ $action: 'move', ... })` |

An action returns that action's OWN response, which is not necessarily a
UserSourceUserSource record — check the API definition for its shape.

```ts
const result = await client.UserSourceUserSource().update({
  $action: 'move',
  /* ...the action's own arguments */
})
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.UserSourceUserSource().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserSourceUserSourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserSourceUserSourceRoleEntity

```ts
const user_source_user_source_role = client.UserSourceUserSourceRole()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.UserSourceUserSourceRole().load({ application_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserSourceUserSourceRoleEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserWorkspaceInvitationEntity

```ts
const user_workspace_invitation = client.UserWorkspaceInvitation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | Yes |  |
| `email` | `string` | Yes | The email address of the user that the invitation is meant for. |
| `email_exists` | `boolean` | Yes |  |
| `id` | `number` | Yes |  |
| `invited_by` | `string` | Yes |  |
| `workspace` | `string` | Yes |  |
| `workspace_id` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.UserWorkspaceInvitation().load({ token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserWorkspaceInvitationEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UsersPerUserSourceEntity

```ts
const users_per_user_source = client.UsersPerUserSource()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.UsersPerUserSource().load({ application_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UsersPerUserSourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ViewEntity

```ts
const view = client.View()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_public_export` | `boolean` | No | Indicates whether it's allowed to export a publicly shared view. |
| `decorations` | `any[]` | No |  |
| `default_row_values` | `any[]` | No |  |
| `filter_groups` | `any[]` | No |  |
| `filter_type` | `string` | No | Indicates whether all the rows should apply to all filters (AND) or to any filter (OR). |
| `filters` | `any[]` | No |  |
| `filters_disabled` | `boolean` | No | Allows users to see results unfiltered while still keeping the filters saved for the view. |
| `group_bys` | `any[]` | No |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `order` | `number` | Yes |  |
| `owned_by_id` | `number` | No |  |
| `ownership_type` | `string` | Yes |  |
| `public_view_has_password` | `boolean` | Yes | Indicates whether the public view is password protected or not. |
| `show_logo` | `boolean` | No |  |
| `sortings` | `any[]` | No |  |
| `table` | `Record<string, any>` | Yes |  |
| `table_id` | `number` | Yes |  |
| `type` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `premium` | `/api/database/view/{view_id}/premium` | `client.View().update({ $action: 'premium', ... })` |

An action returns that action's OWN response, which is not necessarily a
View record — check the API definition for its shape.

```ts
const result = await client.View().update({
  $action: 'premium',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.View().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.View().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ViewDefaultValueEntity

```ts
const view_default_value = client.ViewDefaultValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `view_default_values` | `any[]` | No |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.ViewDefaultValue().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ViewDefaultValueEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ViewFieldOptionEntity

```ts
const view_field_option = client.ViewFieldOption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ViewFieldOption().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.ViewFieldOption().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ViewFieldOptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ViewFilterEntity

```ts
const view_filter = client.ViewFilter()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field` | `number` | Yes | The field of which the value must be compared to the filter value. |
| `group` | `number` | No | The id of the filter group this filter belongs to. |
| `id` | `number` | Yes |  |
| `preload_values` | `Record<string, any>` | Yes | Can contain unique preloaded values per filter. |
| `type` | `string` | Yes | Indicates how the field's value must be compared to the filter's value. |
| `value` | `string` | No | The filter value that must be compared to the field's value. |
| `view` | `number` | Yes | The view to which the filter applies. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `field` | - | - | - | Yes |
| `group` | - | - | - | - |
| `id` | - | - | - | - |
| `preload_values` | - | - | - | - |
| `type` | - | - | - | Yes |
| `value` | - | - | - | - |
| `view` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ViewFilter().create({
  id: 1,
  field: 1,
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ViewFilter().list({ id: 1 })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ViewFilter().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.ViewFilter().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ViewFilterEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ViewFilterGroupEntity

```ts
const view_filter_group = client.ViewFilterGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `filter_type` | `string` | No | Indicates whether all the rows should apply to all filters (AND) or to any filter (OR) in the group to be shown. |
| `id` | `number` | Yes |  |
| `parent_group` | `number` | No |  |
| `view` | `number` | Yes | The view to which the filter group applies to. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ViewFilterGroup().create({
  id: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ViewFilterGroup().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.ViewFilterGroup().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ViewFilterGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ViewGroupByEntity

```ts
const view_group_by = client.ViewGroupBy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field` | `number` | Yes | The field that must be grouped by. |
| `id` | `number` | Yes |  |
| `order` | `string` | No | Indicates the sort order direction. |
| `priority` | `number` | Yes | Position of this group by in the ordering chain. |
| `type` | `string` | No | Indicates the sort type. |
| `view` | `number` | Yes | The view to which the group by applies. |
| `width` | `number` | No | The pixel width of the group by in the related view. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `field` | - | - | - | Yes |
| `id` | - | - | - | - |
| `order` | - | - | - | - |
| `priority` | - | - | - | - |
| `type` | - | - | - | - |
| `view` | - | - | - | - |
| `width` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ViewGroupBy().create({
  id: 1,
  field: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ViewGroupBy().list({ id: 1 })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ViewGroupBy().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.ViewGroupBy().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ViewGroupByEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ViewSortEntity

```ts
const view_sort = client.ViewSort()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field` | `number` | Yes | The field that must be sorted on. |
| `id` | `number` | Yes |  |
| `order` | `string` | No | Indicates the sort order direction. |
| `priority` | `number` | Yes | Position of this sorting in the ordering chain. |
| `type` | `string` | No | Indicates the sort type. |
| `view` | `number` | Yes | The view to which the sort applies. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `field` | - | - | - | Yes |
| `id` | - | - | - | - |
| `order` | - | - | - | - |
| `priority` | - | - | - | - |
| `type` | - | - | - | - |
| `view` | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `sortings` | `/api/database/views/{view_id}/sortings/` | `client.ViewSort().create({ $action: 'sortings', ... })` |
| `sortings` | `/api/database/views/{view_id}/sortings/` | `client.ViewSort().list({ $action: 'sortings', ... })` |

An action returns that action's OWN response, which is not necessarily a
ViewSort record — check the API definition for its shape.

```ts
const result = await client.ViewSort().create({
  $action: 'sortings',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ViewSort().create({
  id: 1,
  field: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ViewSort().list({ id: 1 })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ViewSort().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.ViewSort().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ViewSortEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ViewViewEntity

```ts
const view_view = client.ViewView()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `copy-configuration` | `/api/database/views/{view_id}/copy-configuration/` | `client.ViewView().create({ $action: 'copy-configuration', ... })` |
| `duplicate` | `/api/database/views/{view_id}/duplicate/` | `client.ViewView().create({ $action: 'duplicate', ... })` |
| `rotate-slug` | `/api/database/views/{view_id}/rotate-slug/` | `client.ViewView().create({ $action: 'rotate-slug', ... })` |

An action returns that action's OWN response, which is not necessarily a
ViewView record — check the API definition for its shape.

```ts
const result = await client.ViewView().create({
  $action: 'copy-configuration',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ViewView().create({
  table_id: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ViewView().load({ table_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ViewViewEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkspaceEntity

```ts
const workspace = client.Workspace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_features` | `string` | Yes |  |
| `base_url` | `string` | Yes | The base URL where the user can publicly accept his invitation.The accept token is going to be appended to the base_url (base_url '/token'). |
| `captcha_token` | `string` | No | The captcha response token, required when captcha is enabled. |
| `created_on` | `string` | Yes |  |
| `email` | `string` | Yes | The email address of the user that the invitation is meant for. |
| `generative_ai_models_enabled` | `string` | Yes | Generative AI models available in this workspace. |
| `has_more` | `boolean` | Yes | Whether there are more results available for pagination |
| `highest_role_uid` | `string` | No | Enterprise or advanced only: the highest role uid assigned to this user in this workspace on anything, including roles from teams. |
| `id` | `number` | Yes | Workspace id. |
| `name` | `string` | Yes | User defined name. |
| `order` | `number` | Yes | The requesting user's order within the workspace users. |
| `permissions` | `string` | No | The permissions that the user is going to get within the workspace after accepting the invitation. |
| `results` | `any[]` | Yes | Priority-ordered search results |
| `role_uid` | `string` | No | Enterprise or advanced only: the uid of the role that is assigned to this workspace user in this workspace. |
| `teams` | `any[]` | No | Enterprise only: a list of team IDs and names, which this workspace user belongs to in this workspace. |
| `to_be_deleted` | `boolean` | Yes | True if user account is pending deletion. |
| `two_factor_auth` | `string` | Yes |  |
| `unread_notifications_count` | `number` | Yes | The number of unread notifications for the requesting user. |
| `user_id` | `number` | Yes | The user that has access to the workspace. |
| `users` | `any[]` | Yes | List of all workspace users. |
| `workspace` | `number` | Yes | The workspace that the user will get access to once the invitation is accepted. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `ai_features` | - | - | - | - | - |
| `base_url` | - | - | - | - | - |
| `captcha_token` | - | - | - | - | - |
| `created_on` | - | - | - | - | - |
| `email` | - | - | - | - | - |
| `generative_ai_models_enabled` | - | - | - | Yes | - |
| `has_more` | - | - | - | - | - |
| `highest_role_uid` | - | - | - | - | - |
| `id` | - | - | - | Yes | - |
| `name` | - | - | - | Yes | - |
| `order` | - | - | - | - | - |
| `permissions` | - | Yes | Yes | - | - |
| `results` | - | - | - | - | - |
| `role_uid` | - | - | - | - | - |
| `teams` | - | - | - | - | - |
| `to_be_deleted` | - | - | - | - | - |
| `two_factor_auth` | - | - | - | - | - |
| `unread_notifications_count` | - | - | - | - | - |
| `user_id` | - | - | - | - | - |
| `users` | - | - | - | - | - |
| `workspace` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `export_async` | `/api/workspaces/{workspace_id}/export/async/` | `client.Workspace().create({ $action: 'export_async', ... })` |
| `import_async` | `/api/workspaces/{workspace_id}/import/async/` | `client.Workspace().create({ $action: 'import_async', ... })` |
| `import_upload_file` | `/api/workspaces/{workspace_id}/import/upload-file/` | `client.Workspace().create({ $action: 'import_upload_file', ... })` |
| `leave` | `/api/workspaces/{workspace_id}/leave/` | `client.Workspace().create({ $action: 'leave', ... })` |
| `order` | `/api/workspaces/order/` | `client.Workspace().create({ $action: 'order', ... })` |

An action returns that action's OWN response, which is not necessarily a
Workspace record — check the API definition for its shape.

```ts
const result = await client.Workspace().create({
  $action: 'export_async',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Workspace().create({
  id: 1,
  base_url: 'example_base_url',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Workspace().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Workspace().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Workspace().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Workspace().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkspaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkspaceInvitationEntity

```ts
const workspace_invitation = client.WorkspaceInvitation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | Yes |  |
| `email` | `string` | Yes | The email address of the user that the invitation is meant for. |
| `id` | `number` | Yes |  |
| `permissions` | `string` | No | The permissions that the user is going to get within the workspace after accepting the invitation. |
| `workspace` | `number` | Yes | The workspace that the user will get access to once the invitation is accepted. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.WorkspaceInvitation().create({
  invitation_id: 1,
  email: 'example_email',
  workspace: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.WorkspaceInvitation().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.WorkspaceInvitation().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.WorkspaceInvitation().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkspaceInvitationEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkspaceStructureEntity

```ts
const workspace_structure = client.WorkspaceStructure()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `tables` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.WorkspaceStructure().load({ id: 'workspace_structure_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkspaceStructureEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkspaceUserEntity

```ts
const workspace_user = client.WorkspaceUser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_on` | `string` | Yes |  |
| `email` | `string` | Yes | User email. |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes | User defined name. |
| `permissions` | `string` | No | The permissions that the user has within the workspace. |
| `to_be_deleted` | `boolean` | Yes | True if user account is pending deletion. |
| `two_factor_auth` | `string` | Yes |  |
| `user_id` | `number` | Yes | The user that has access to the workspace. |
| `workspace` | `number` | Yes | The workspace that the user has access to. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.WorkspaceUser().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkspaceUserEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkspaceUserWorkspaceEntity

```ts
const workspace_user_workspace = client.WorkspaceUserWorkspace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_features` | `string` | Yes |  |
| `generative_ai_models_enabled` | `string` | Yes | Generative AI models available in this workspace. |
| `id` | `number` | Yes | Workspace id. |
| `name` | `string` | Yes | Workspace name. |
| `order` | `number` | Yes | The requesting user's order within the workspace users. |
| `permissions` | `string` | Yes | The requesting user's permissions for the workspace. |
| `unread_notifications_count` | `number` | Yes | The number of unread notifications for the requesting user. |
| `users` | `any[]` | Yes | List of all workspace users. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.WorkspaceUserWorkspace().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkspaceUserWorkspaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `BaserowSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new BaserowSDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

