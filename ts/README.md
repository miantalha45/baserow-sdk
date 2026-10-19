# Baserow TypeScript SDK



The TypeScript SDK for the Baserow API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.AbuseReport()` — each with a small set of operations (`list`, `load`, `create`, `update`, `patch`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`, see [Tags](https://github.com/voxgig-sdk/baserow-sdk/tags)), or from a
clone, which carries the compiled `dist/`:

```bash
git clone https://github.com/voxgig-sdk/baserow-sdk
npm install ./baserow-sdk/ts
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { BaserowSDK } from '@voxgig-sdk/baserow-sdk'

const client = new BaserowSDK({
  apikey: process.env.BASEROW_APIKEY,
  // Required: this API's server URL is templated on these.
  server: {
    base: '<base>',
  },
})
```

### 3. Load an agentpaginationagent

AgentPaginationAgent is nested under workspace, so provide the `workspace_id`.
`load()` returns the entity and throws on failure; `.data()` reads its record:

```ts
try {
  const agentpaginationagent = await client.AgentPaginationAgent().load({
    workspace_id: 1,
  })
  console.log(agentpaginationagent.data())
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Create — returns the created AbuseReport ENTITY (.data() for the record)
const created = await client.AbuseReport().create({
  description: 'example_description',
  email: 'example_email',
  identifier: 'example_identifier',
  name: 'example_name',
  resource_type: 'example_resource_type',
})

```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const aiprovidertypes = await client.AiProviderType().list()
  console.log(aiprovidertypes.map((item) => item.data()))
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
result envelope. Branch on `ok`; on failure `status` holds the HTTP status
(for error responses) and `err` holds the error:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (!result.ok) {
  console.error('request failed:', result.status, result.err)
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = BaserowSDK.test()

const aiprovidertypes = await client.AiProviderType().list()
// aiprovidertypes is an array of AiProviderType entities, one per mock record
console.log(aiprovidertypes.map((aiprovidertype) => aiprovidertype.data()))
```

You can also use the instance method:

```ts
const client = new BaserowSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.AiProviderType()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new BaserowSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
BASEROW_TEST_LIVE=TRUE
BASEROW_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### BaserowSDK

#### Constructor

```ts
new BaserowSDK(options?: {
  apikey?: string
  server?: { base: string }
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `server` | `object` | **Required.** Values for the server-URL variables: `base`. The API base URL is a template over them. |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `AbuseReport(data?)` | `AbuseReportEntity` | Create an AbuseReport entity instance. |
| `Admin(data?)` | `AdminEntity` | Create an Admin entity instance. |
| `AdminDashboard(data?)` | `AdminDashboardEntity` | Create an AdminDashboard entity instance. |
| `AdminDataScanner(data?)` | `AdminDataScannerEntity` | Create an AdminDataScanner entity instance. |
| `AdminView(data?)` | `AdminViewEntity` | Create an AdminView entity instance. |
| `AdminWorkspaceOption(data?)` | `AdminWorkspaceOptionEntity` | Create an AdminWorkspaceOption entity instance. |
| `Agent(data?)` | `AgentEntity` | Create an Agent entity instance. |
| `AgentPaginationAgent(data?)` | `AgentPaginationAgentEntity` | Create an AgentPaginationAgent entity instance. |
| `AiAssistant(data?)` | `AiAssistantEntity` | Create an AiAssistant entity instance. |
| `AiProvider(data?)` | `AiProviderEntity` | Create an AiProvider entity instance. |
| `AiProviderFeatureSetting(data?)` | `AiProviderFeatureSettingEntity` | Create an AiProviderFeatureSetting entity instance. |
| `AiProviderModel(data?)` | `AiProviderModelEntity` | Create an AiProviderModel entity instance. |
| `AiProviderModelDiscovery(data?)` | `AiProviderModelDiscoveryEntity` | Create an AiProviderModelDiscovery entity instance. |
| `AiProviderModelUsageEntry(data?)` | `AiProviderModelUsageEntryEntity` | Create an AiProviderModelUsageEntry entity instance. |
| `AiProviderModelsTest(data?)` | `AiProviderModelsTestEntity` | Create an AiProviderModelsTest entity instance. |
| `AiProviderType(data?)` | `AiProviderTypeEntity` | Create an AiProviderType entity instance. |
| `Application(data?)` | `ApplicationEntity` | Create an Application entity instance. |
| `ApplicationApplication(data?)` | `ApplicationApplicationEntity` | Create an ApplicationApplication entity instance. |
| `AssistantChat(data?)` | `AssistantChatEntity` | Create an AssistantChat entity instance. |
| `AuditLog(data?)` | `AuditLogEntity` | Create an AuditLog entity instance. |
| `AuditLogActionType(data?)` | `AuditLogActionTypeEntity` | Create an AuditLogActionType entity instance. |
| `AuditLogUser(data?)` | `AuditLogUserEntity` | Create an AuditLogUser entity instance. |
| `Auth(data?)` | `AuthEntity` | Create an Auth entity instance. |
| `AuthenticationProviderAuthProvider(data?)` | `AuthenticationProviderAuthProviderEntity` | Create an AuthenticationProviderAuthProvider entity instance. |
| `AutomationNode(data?)` | `AutomationNodeEntity` | Create an AutomationNode entity instance. |
| `AutomationNodeHistory(data?)` | `AutomationNodeHistoryEntity` | Create an AutomationNodeHistory entity instance. |
| `AutomationNodeResult(data?)` | `AutomationNodeResultEntity` | Create an AutomationNodeResult entity instance. |
| `AutomationNodeTypeAutomationNode(data?)` | `AutomationNodeTypeAutomationNodeEntity` | Create an AutomationNodeTypeAutomationNode entity instance. |
| `AutomationWorkflow(data?)` | `AutomationWorkflowEntity` | Create an AutomationWorkflow entity instance. |
| `AutomationWorkflowHistory(data?)` | `AutomationWorkflowHistoryEntity` | Create an AutomationWorkflowHistory entity instance. |
| `BuilderDataSource(data?)` | `BuilderDataSourceEntity` | Create a BuilderDataSource entity instance. |
| `BuilderDomain(data?)` | `BuilderDomainEntity` | Create a BuilderDomain entity instance. |
| `BuilderElement(data?)` | `BuilderElementEntity` | Create a BuilderElement entity instance. |
| `BuilderPage(data?)` | `BuilderPageEntity` | Create a BuilderPage entity instance. |
| `BuilderPreview(data?)` | `BuilderPreviewEntity` | Create a BuilderPreview entity instance. |
| `BuilderPreviewGrant(data?)` | `BuilderPreviewGrantEntity` | Create a BuilderPreviewGrant entity instance. |
| `BuilderPreviewHandoff(data?)` | `BuilderPreviewHandoffEntity` | Create a BuilderPreviewHandoff entity instance. |
| `BuilderPublic(data?)` | `BuilderPublicEntity` | Create a BuilderPublic entity instance. |
| `BuilderWorkflowAction(data?)` | `BuilderWorkflowActionEntity` | Create a BuilderWorkflowAction entity instance. |
| `BuilderWorkflowActionTypeBuilderWorkflowAction(data?)` | `BuilderWorkflowActionTypeBuilderWorkflowActionEntity` | Create a BuilderWorkflowActionTypeBuilderWorkflowAction entity instance. |
| `ById(data?)` | `ByIdEntity` | Create a ById entity instance. |
| `ByName(data?)` | `ByNameEntity` | Create a ByName entity instance. |
| `Calendar(data?)` | `CalendarEntity` | Create a Calendar entity instance. |
| `CalendarViewExample(data?)` | `CalendarViewExampleEntity` | Create a CalendarViewExample entity instance. |
| `Callback(data?)` | `CallbackEntity` | Create a Callback entity instance. |
| `Cancel(data?)` | `CancelEntity` | Create a Cancel entity instance. |
| `ColorTypographyButtonImagePageInputTableLinklinkActiveText(data?)` | `ColorTypographyButtonImagePageInputTableLinklinkActiveTextEntity` | Create a ColorTypographyButtonImagePageInputTableLinklinkActiveText entity instance. |
| `CoreWebhook(data?)` | `CoreWebhookEntity` | Create a CoreWebhook entity instance. |
| `DashboardDataSource(data?)` | `DashboardDataSourceEntity` | Create a DashboardDataSource entity instance. |
| `DashboardWidget(data?)` | `DashboardWidgetEntity` | Create a DashboardWidget entity instance. |
| `DashboardWidgetWidget(data?)` | `DashboardWidgetWidgetEntity` | Create a DashboardWidgetWidget entity instance. |
| `DataScan(data?)` | `DataScanEntity` | Create a DataScan entity instance. |
| `DataSync(data?)` | `DataSyncEntity` | Create a DataSync entity instance. |
| `DatabaseTable(data?)` | `DatabaseTableEntity` | Create a DatabaseTable entity instance. |
| `DatabaseTableField(data?)` | `DatabaseTableFieldEntity` | Create a DatabaseTableField entity instance. |
| `DatabaseTableGridView(data?)` | `DatabaseTableGridViewEntity` | Create a DatabaseTableGridView entity instance. |
| `DatabaseTableRow(data?)` | `DatabaseTableRowEntity` | Create a DatabaseTableRow entity instance. |
| `DatabaseTableView(data?)` | `DatabaseTableViewEntity` | Create a DatabaseTableView entity instance. |
| `DatabaseTableViewDecoration(data?)` | `DatabaseTableViewDecorationEntity` | Create a DatabaseTableViewDecoration entity instance. |
| `DatabaseTableViewFilter(data?)` | `DatabaseTableViewFilterEntity` | Create a DatabaseTableViewFilter entity instance. |
| `DatabaseTableViewGrouping(data?)` | `DatabaseTableViewGroupingEntity` | Create a DatabaseTableViewGrouping entity instance. |
| `DatabaseTableViewSorting(data?)` | `DatabaseTableViewSortingEntity` | Create a DatabaseTableViewSorting entity instance. |
| `DatabaseTableWebhook(data?)` | `DatabaseTableWebhookEntity` | Create a DatabaseTableWebhook entity instance. |
| `DatabaseToken(data?)` | `DatabaseTokenEntity` | Create a DatabaseToken entity instance. |
| `DatabaseWorkflowActionTypeDatabaseWorkflowAction(data?)` | `DatabaseWorkflowActionTypeDatabaseWorkflowActionEntity` | Create a DatabaseWorkflowActionTypeDatabaseWorkflowAction entity instance. |
| `DecoratorValueProviderTypeViewDecoration(data?)` | `DecoratorValueProviderTypeViewDecorationEntity` | Create a DecoratorValueProviderTypeViewDecoration entity instance. |
| `Dispatch(data?)` | `DispatchEntity` | Create a Dispatch entity instance. |
| `Domain(data?)` | `DomainEntity` | Create a Domain entity instance. |
| `Duplicate(data?)` | `DuplicateEntity` | Create a Duplicate entity instance. |
| `Element(data?)` | `ElementEntity` | Create an Element entity instance. |
| `ElementTypeElement(data?)` | `ElementTypeElementEntity` | Create an ElementTypeElement entity instance. |
| `Email(data?)` | `EmailEntity` | Create an Email entity instance. |
| `ExampleBatchRow(data?)` | `ExampleBatchRowEntity` | Create an ExampleBatchRow entity instance. |
| `ExampleBatchUpdateRow(data?)` | `ExampleBatchUpdateRowEntity` | Create an ExampleBatchUpdateRow entity instance. |
| `ExamplePublicRowResponseSerializerWithUserFieldName(data?)` | `ExamplePublicRowResponseSerializerWithUserFieldNameEntity` | Create an ExamplePublicRowResponseSerializerWithUserFieldName entity instance. |
| `ExampleRow(data?)` | `ExampleRowEntity` | Create an ExampleRow entity instance. |
| `ExampleRowResponseSerializerWithUserFieldName(data?)` | `ExampleRowResponseSerializerWithUserFieldNameEntity` | Create an ExampleRowResponseSerializerWithUserFieldName entity instance. |
| `Export(data?)` | `ExportEntity` | Create an Export entity instance. |
| `ExportJob(data?)` | `ExportJobEntity` | Create an ExportJob entity instance. |
| `Field(data?)` | `FieldEntity` | Create a Field entity instance. |
| `FieldField(data?)` | `FieldFieldEntity` | Create a FieldField entity instance. |
| `FieldFieldSerializerWithRelatedField(data?)` | `FieldFieldSerializerWithRelatedFieldEntity` | Create a FieldFieldSerializerWithRelatedField entity instance. |
| `FieldPermissionSubjectOption(data?)` | `FieldPermissionSubjectOptionEntity` | Create a FieldPermissionSubjectOption entity instance. |
| `FieldRule(data?)` | `FieldRuleEntity` | Create a FieldRule entity instance. |
| `FieldRulesResponseFieldRule(data?)` | `FieldRulesResponseFieldRuleEntity` | Create a FieldRulesResponseFieldRule entity instance. |
| `FormViewSubmitted(data?)` | `FormViewSubmittedEntity` | Create a FormViewSubmitted entity instance. |
| `Full(data?)` | `FullEntity` | Create a Full entity instance. |
| `GenerateFormulaWithAi(data?)` | `GenerateFormulaWithAiEntity` | Create a GenerateFormulaWithAi entity instance. |
| `GridViewGroupByData(data?)` | `GridViewGroupByDataEntity` | Create a GridViewGroupByData entity instance. |
| `Health(data?)` | `HealthEntity` | Create a Health entity instance. |
| `InboundEmail(data?)` | `InboundEmailEntity` | Create an InboundEmail entity instance. |
| `Install(data?)` | `InstallEntity` | Create an Install entity instance. |
| `InstanceId(data?)` | `InstanceIdEntity` | Create an InstanceId entity instance. |
| `Integration(data?)` | `IntegrationEntity` | Create an Integration entity instance. |
| `IntegrationIntegration(data?)` | `IntegrationIntegrationEntity` | Create an IntegrationIntegration entity instance. |
| `IntegrationServiceDashboardDataSource(data?)` | `IntegrationServiceDashboardDataSourceEntity` | Create an IntegrationServiceDashboardDataSource entity instance. |
| `IntegrationServiceDataSource(data?)` | `IntegrationServiceDataSourceEntity` | Create an IntegrationServiceDataSource entity instance. |
| `IntegrationServicePublicDataSource(data?)` | `IntegrationServicePublicDataSourceEntity` | Create an IntegrationServicePublicDataSource entity instance. |
| `InvalidRow(data?)` | `InvalidRowEntity` | Create an InvalidRow entity instance. |
| `Job(data?)` | `JobEntity` | Create a Job entity instance. |
| `JobTypeJob(data?)` | `JobTypeJobEntity` | Create a JobTypeJob entity instance. |
| `Kanban(data?)` | `KanbanEntity` | Create a Kanban entity instance. |
| `KanbanViewExample(data?)` | `KanbanViewExampleEntity` | Create a KanbanViewExample entity instance. |
| `LastViewedItem(data?)` | `LastViewedItemEntity` | Create a LastViewedItem entity instance. |
| `License(data?)` | `LicenseEntity` | Create a License entity instance. |
| `LicenseUser(data?)` | `LicenseUserEntity` | Create a LicenseUser entity instance. |
| `LicenseUserLookup(data?)` | `LicenseUserLookupEntity` | Create a LicenseUserLookup entity instance. |
| `LicenseWithUser(data?)` | `LicenseWithUserEntity` | Create a LicenseWithUser entity instance. |
| `ListDataSyncProperty(data?)` | `ListDataSyncPropertyEntity` | Create a ListDataSyncProperty entity instance. |
| `Login(data?)` | `LoginEntity` | Create a Login entity instance. |
| `McpEndpoint(data?)` | `McpEndpointEntity` | Create a McpEndpoint entity instance. |
| `Message(data?)` | `MessageEntity` | Create a Message entity instance. |
| `Notification(data?)` | `NotificationEntity` | Create a Notification entity instance. |
| `OnboardingPromptSuggestion(data?)` | `OnboardingPromptSuggestionEntity` | Create an OnboardingPromptSuggestion entity instance. |
| `OpenApiRoleAssignment(data?)` | `OpenApiRoleAssignmentEntity` | Create an OpenApiRoleAssignment entity instance. |
| `Page(data?)` | `PageEntity` | Create a Page entity instance. |
| `PaginationSerializerExampleRowResponseSerializerWithUser(data?)` | `PaginationSerializerExampleRowResponseSerializerWithUserEntity` | Create a PaginationSerializerExampleRowResponseSerializerWithUser entity instance. |
| `PaginationSerializerLinkRowValue(data?)` | `PaginationSerializerLinkRowValueEntity` | Create a PaginationSerializerLinkRowValue entity instance. |
| `PaginationSerializerNotificationRecipient(data?)` | `PaginationSerializerNotificationRecipientEntity` | Create a PaginationSerializerNotificationRecipient entity instance. |
| `PaginationSerializerRowComment(data?)` | `PaginationSerializerRowCommentEntity` | Create a PaginationSerializerRowComment entity instance. |
| `PaginationSerializerTrashContent(data?)` | `PaginationSerializerTrashContentEntity` | Create a PaginationSerializerTrashContent entity instance. |
| `PaginationSerializerWithGalleryViewFieldOptionsExampleRow(data?)` | `PaginationSerializerWithGalleryViewFieldOptionsExampleRowEntity` | Create a PaginationSerializerWithGalleryViewFieldOptionsExampleRow entity instance. |
| `PaginationSerializerWithGridViewFieldOptionsExampleRow(data?)` | `PaginationSerializerWithGridViewFieldOptionsExampleRowEntity` | Create a PaginationSerializerWithGridViewFieldOptionsExampleRow entity instance. |
| `PaginationSerializerWithTimelineViewFieldOptionsExampleRow(data?)` | `PaginationSerializerWithTimelineViewFieldOptionsExampleRowEntity` | Create a PaginationSerializerWithTimelineViewFieldOptionsExampleRow entity instance. |
| `PasswordFieldAuthentication(data?)` | `PasswordFieldAuthenticationEntity` | Create a PasswordFieldAuthentication entity instance. |
| `PeriodicDataSyncInterval(data?)` | `PeriodicDataSyncIntervalEntity` | Create a PeriodicDataSyncInterval entity instance. |
| `Permission(data?)` | `PermissionEntity` | Create a Permission entity instance. |
| `PublicBuilderWorkflowActionTypeBuilderWorkflowAction(data?)` | `PublicBuilderWorkflowActionTypeBuilderWorkflowActionEntity` | Create a PublicBuilderWorkflowActionTypeBuilderWorkflowAction entity instance. |
| `PublicFormView(data?)` | `PublicFormViewEntity` | Create a PublicFormView entity instance. |
| `PublicPaginationSerializerWithGalleryViewFieldOptions(data?)` | `PublicPaginationSerializerWithGalleryViewFieldOptionsEntity` | Create a PublicPaginationSerializerWithGalleryViewFieldOptions entity instance. |
| `PublicPaginationSerializerWithGridViewFieldOptionsExample(data?)` | `PublicPaginationSerializerWithGridViewFieldOptionsExampleEntity` | Create a PublicPaginationSerializerWithGridViewFieldOptionsExample entity instance. |
| `PublicPaginationSerializerWithTimelineViewFieldOptions(data?)` | `PublicPaginationSerializerWithTimelineViewFieldOptionsEntity` | Create a PublicPaginationSerializerWithTimelineViewFieldOptions entity instance. |
| `PublicViewAuth(data?)` | `PublicViewAuthEntity` | Create a PublicViewAuth entity instance. |
| `PublicViewInfo(data?)` | `PublicViewInfoEntity` | Create a PublicViewInfo entity instance. |
| `RelatedField(data?)` | `RelatedFieldEntity` | Create a RelatedField entity instance. |
| `RowComment(data?)` | `RowCommentEntity` | Create a RowComment entity instance. |
| `RowHistory(data?)` | `RowHistoryEntity` | Create a RowHistory entity instance. |
| `SecureFileServe(data?)` | `SecureFileServeEntity` | Create a SecureFileServe entity instance. |
| `Setting(data?)` | `SettingEntity` | Create a Setting entity instance. |
| `Snapshot(data?)` | `SnapshotEntity` | Create a Snapshot entity instance. |
| `Table(data?)` | `TableEntity` | Create a Table entity instance. |
| `TableWebhook(data?)` | `TableWebhookEntity` | Create a TableWebhook entity instance. |
| `TableWebhookTestCall(data?)` | `TableWebhookTestCallEntity` | Create a TableWebhookTestCall entity instance. |
| `TableWithoutDataSync(data?)` | `TableWithoutDataSyncEntity` | Create a TableWithoutDataSync entity instance. |
| `Team(data?)` | `TeamEntity` | Create a Team entity instance. |
| `TeamSubject(data?)` | `TeamSubjectEntity` | Create a TeamSubject entity instance. |
| `Template(data?)` | `TemplateEntity` | Create a Template entity instance. |
| `Token(data?)` | `TokenEntity` | Create a Token entity instance. |
| `Trash(data?)` | `TrashEntity` | Create a Trash entity instance. |
| `TwoFactorAuthTypeTwoFactorAuth(data?)` | `TwoFactorAuthTypeTwoFactorAuthEntity` | Create a TwoFactorAuthTypeTwoFactorAuth entity instance. |
| `Type(data?)` | `TypeEntity` | Create a Type entity instance. |
| `UniqueRowValue(data?)` | `UniqueRowValueEntity` | Create an UniqueRowValue entity instance. |
| `UpdateFieldPermission(data?)` | `UpdateFieldPermissionEntity` | Create an UpdateFieldPermission entity instance. |
| `User(data?)` | `UserEntity` | Create an User entity instance. |
| `UserFile(data?)` | `UserFileEntity` | Create an UserFile entity instance. |
| `UserSource(data?)` | `UserSourceEntity` | Create an UserSource entity instance. |
| `UserSourceUserSource(data?)` | `UserSourceUserSourceEntity` | Create an UserSourceUserSource entity instance. |
| `UserSourceUserSourceRole(data?)` | `UserSourceUserSourceRoleEntity` | Create an UserSourceUserSourceRole entity instance. |
| `UserWorkspaceInvitation(data?)` | `UserWorkspaceInvitationEntity` | Create an UserWorkspaceInvitation entity instance. |
| `UsersPerUserSource(data?)` | `UsersPerUserSourceEntity` | Create an UsersPerUserSource entity instance. |
| `View(data?)` | `ViewEntity` | Create a View entity instance. |
| `ViewDefaultValue(data?)` | `ViewDefaultValueEntity` | Create a ViewDefaultValue entity instance. |
| `ViewFieldOption(data?)` | `ViewFieldOptionEntity` | Create a ViewFieldOption entity instance. |
| `ViewFilter(data?)` | `ViewFilterEntity` | Create a ViewFilter entity instance. |
| `ViewFilterGroup(data?)` | `ViewFilterGroupEntity` | Create a ViewFilterGroup entity instance. |
| `ViewGroupBy(data?)` | `ViewGroupByEntity` | Create a ViewGroupBy entity instance. |
| `ViewSort(data?)` | `ViewSortEntity` | Create a ViewSort entity instance. |
| `ViewView(data?)` | `ViewViewEntity` | Create a ViewView entity instance. |
| `Workspace(data?)` | `WorkspaceEntity` | Create a Workspace entity instance. |
| `WorkspaceInvitation(data?)` | `WorkspaceInvitationEntity` | Create a WorkspaceInvitation entity instance. |
| `WorkspaceStructure(data?)` | `WorkspaceStructureEntity` | Create a WorkspaceStructure entity instance. |
| `WorkspaceUser(data?)` | `WorkspaceUserEntity` | Create a WorkspaceUser entity instance. |
| `WorkspaceUserWorkspace(data?)` | `WorkspaceUserWorkspaceEntity` | Create a WorkspaceUserWorkspace entity instance. |
| `tester(testopts?, sdkopts?)` | `BaserowSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `BaserowSDK.test(testopts?, sdkopts?)` | `BaserowSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria, and return it. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria, one per record. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity, and return it. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity, and return it. |
| `patch` | `patch(reqdata?, ctrl?): Promise<Entity>` | Change part of an existing entity, and return it. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<Entity>` | Remove an entity, and return it marked as deleted. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): BaserowSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity itself — there is no result
envelope, and an entity's `data()` reads its record:

- `load`, `create`, `update` and `patch` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to the entity, marked as deleted.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### AbuseReport

| Field | Description |
| --- | --- |
| `captcha_token` | The captcha response token, required when captcha is enabled. |
| `description` | A detailed description of why the resource is abusive. |
| `email` | The email address of the person reporting the abuse. |
| `identifier` | The public identifier of the reported resource, for example the slug of a publicly shared view. |
| `name` | The name of the person reporting the abuse. |
| `resource_type` | The type of publicly shared resource that is being reported. |

Operations: create.

API path: `/api/abuse-reports/`

#### Admin

| Field | Description |
| --- | --- |
| `access_token` | 'access_token' can be used to authorize for other endpoints that require authorization. |
| `application_count` |  |
| `application_users` | The amount of application builder users permitted in this license. |
| `application_users_taken` | The amount of application builder users used so far in this license. |
| `created_on` |  |
| `free_users` |  |
| `free_users_count` | The amount of free users that are currently using the license. |
| `id` |  |
| `is_active` | Indicates if the backend deems the license valid. |
| `issued_on` | The date when the license was issued. |
| `issued_to_email` | Indicates to which email address the license has been issued. |
| `issued_to_name` | Indicates to whom the license has been issued. |
| `last_check` |  |
| `license` | The license that you want to register. |
| `license_id` | Unique identifier of the license. |
| `name` |  |
| `product_code` | The product code that indicates what the license unlocks. |
| `row_count` |  |
| `seats` | The maximum amount of users that can use the license. |
| `seats_taken` | The amount of users that are currently using the license. |
| `storage_usage` |  |
| `token` | Deprecated. |
| `user` | An object containing information related to the user. |
| `users` |  |
| `valid_from` | From which timestamp the license becomes active. |
| `valid_through` | Until which timestamp the license is active. |

Operations: create, list, remove.

API path: `/api/licenses/{id}/remove-all-users/`

#### AdminDashboard

| Field | Description |
| --- | --- |
| `active_users_last_24_hours` |  |
| `active_users_last_30_days` |  |
| `active_users_last_7_days` |  |
| `active_users_per_day` |  |
| `new_users_last_24_hours` |  |
| `new_users_last_30_days` |  |
| `new_users_last_7_days` |  |
| `new_users_per_day` |  |
| `previous_active_users_last_24_hours` |  |
| `previous_active_users_last_30_days` |  |
| `previous_active_users_last_7_days` |  |
| `previous_new_users_last_24_hours` |  |
| `previous_new_users_last_30_days` |  |
| `previous_new_users_last_7_days` |  |
| `total_applications` |  |
| `total_users` |  |
| `total_workspaces` |  |

Operations: list.

API path: `/api/admin/dashboard/`

#### AdminDataScanner

| Field | Description |
| --- | --- |
| `created_on` | The date and time when the export job was created. |
| `csv_column_separator` | The value used to separate columns in the resulting csv file. |
| `csv_first_row_header` | Whether or not to generate a header row at the top of the csv file. |
| `database_id` |  |
| `database_name` |  |
| `export_charset` | The character set to use when creating the export file. |
| `exported_file_name` | The name of the file that was created by the export job. |
| `field_name` |  |
| `filter_scan_id` | Optional: Filter results by scan ID. |
| `first_identified_on` |  |
| `frequency` | * `manual` - Manual * `hourly` - Hourly * `daily` - Daily * `weekly` - Weekly |
| `id` |  |
| `is_running` |  |
| `last_error` |  |
| `last_identified_on` |  |
| `last_run_finished_at` |  |
| `last_run_started_at` |  |
| `list_items` |  |
| `matched_value` |  |
| `name` |  |
| `pattern` |  |
| `results_count` |  |
| `row_id` |  |
| `scan_all_workspaces` |  |
| `scan_id` |  |
| `scan_name` |  |
| `scan_type` | * `pattern` - Pattern * `list_of_values` - List of values * `list_table` - List Table |
| `source_database_id` |  |
| `source_field_id` |  |
| `source_table_id` |  |
| `source_workspace_id` |  |
| `table_id` |  |
| `table_name` |  |
| `updated_on` |  |
| `url` | The URL to download the exported file. |
| `whole_words` |  |
| `workspace_ids` |  |
| `workspace_name` |  |

Operations: create, list, remove.

API path: `/api/admin/data-scanner/scans/{scan_id}/trigger/`

#### AdminView

| Field | Description |
| --- | --- |
| `created_on` |  |
| `database_id` |  |
| `database_name` |  |
| `id` |  |
| `name` |  |
| `owned_by_id` |  |
| `owned_by_username` |  |
| `ownership_type` | Indicates how the access to the view is determined. |
| `public` | Indicates whether the view is publicly accessible to visitors. |
| `public_view_has_password` |  |
| `slug` | The unique slug where the view can be accessed publicly on. |
| `table_id` |  |
| `table_name` |  |
| `type` |  |
| `workspace_id` |  |
| `workspace_name` |  |

Operations: create, list, update.

API path: `/api/database/admin/views/{view_id}/rotate-slug/`

#### AdminWorkspaceOption

| Field | Description |
| --- | --- |
| `id` |  |
| `value` |  |

Operations: list.

API path: `/api/admin/workspaces/options/`

#### Agent

| Field | Description |
| --- | --- |
| `created_on` |  |
| `id` |  |
| `last_active` |  |
| `name` |  |
| `role_uid` |  |
| `team_ids` |  |
| `teams` |  |
| `updated_on` |  |
| `workspace_id` |  |

Operations: create, remove, update.

API path: `/api/agents/workspace/{workspace_id}/`

#### AgentPaginationAgent

| Field | Description |
| --- | --- |
| `count` | The total amount of results. |
| `next` | URL to the next page. |
| `previous` | URL to the previous page. |
| `results` |  |

Operations: load.

API path: `/api/agents/workspace/{workspace_id}/`

#### AiAssistant

| Field | Description |
| --- | --- |
| `content` | The content of the message. |
| `ui_context` | The UI context related to what the user was looking at when the message was sent. |

Operations: create, remove, update.

API path: `/assistant/chat/{chat_uuid}/cancel/`

#### AiProvider

| Field | Description |
| --- | --- |
| `api_key` |  |
| `extra_settings` |  |
| `id` |  |
| `is_active` |  |
| `models` |  |
| `provider_type` |  |

Operations: create, list, remove, update.

API path: `/api/ai-providers/`

#### AiProviderFeatureSetting

| Field | Description |
| --- | --- |
| `feature_type` |  |
| `inherited_model` |  |
| `inherited_state` | The state of the instance selection this workspace inherits, or null at instance scope. |
| `mode` | * `inherit` - inherit * `legacy` - legacy * `model` - model * `disabled` - disabled |
| `model` |  |
| `model_id` |  |
| `state` | * `configured` - configured * `inherited` - inherited * `overridden` - overridden * `disabled` - disabled * `unconfigured` - unconfigured * `invalid` - invalid |

Operations: list, update.

API path: `/api/ai-providers/features/`

#### AiProviderModel

| Field | Description |
| --- | --- |
| `feature_types` | The AI features allowed to select this model. |
| `id` |  |
| `is_enabled` |  |
| `last_test_at` |  |
| `last_test_error` |  |
| `last_test_feature_results` |  |
| `last_test_status` |  |
| `model_identifier` |  |

Operations: create, update.

API path: `/api/ai-providers/{provider_id}/models/`

#### AiProviderModelDiscovery

| Field | Description |
| --- | --- |
| `models` |  |
| `supported` |  |

Operations: list.

API path: `/api/ai-providers/models/discover/`

#### AiProviderModelUsageEntry

| Field | Description |
| --- | --- |
| `count` |  |
| `feature_type` |  |

Operations: list.

API path: `/api/ai-providers/models/{model_id}/usage/`

#### AiProviderModelsTest

| Field | Description |
| --- | --- |
| `model_ids` |  |
| `results` |  |

Operations: create.

API path: `/api/ai-providers/models/test/`

#### AiProviderType

| Field | Description |
| --- | --- |
| `extra_fields` |  |
| `name` |  |
| `type` |  |
| `uses_api_key` |  |

Operations: list.

API path: `/api/ai-providers/types/`

#### Application

| Field | Description |
| --- | --- |
| `application_ids` | Application ids in the desired order. |
| `id` |  |

Operations: create, list, load, remove, update.

API path: `/api/applications/{application_id}/duplicate/async/`

#### ApplicationApplication

| Field | Description |
| --- | --- |

Operations: create, load.

API path: `/api/applications/workspace/{workspace_id}/`

#### AssistantChat

| Field | Description |
| --- | --- |
| `created_on` |  |
| `status` | * `idle` - Idle * `in_progress` - In progress * `canceling` - Canceling |
| `title` | The title of the chat. |
| `updated_on` |  |
| `user_id` | The user who owns the chat. |
| `uuid` | Unique identifier for the chat. |
| `workspace_id` | The workspace the chat belongs to. |

Operations: list.

API path: `/assistant/chat/`

#### AuditLog

| Field | Description |
| --- | --- |
| `action_type` |  |
| `description` |  |
| `id` |  |
| `ip_address` |  |
| `timestamp` |  |
| `type` |  |
| `user` |  |
| `workspace` |  |

Operations: create, list.

API path: `/api/admin/audit-log/export/`

#### AuditLogActionType

| Field | Description |
| --- | --- |
| `id` | * `create_group` - create_group * `delete_group` - delete_group * `update_group` - update_group * `order_groups` - order_groups * `create_application` - create_application * `update_application` - update_application * `delete_application`… |
| `value` | Given the *incoming* primitive data, return the value for this field that should be validated and transformed to a native value. |

Operations: list.

API path: `/api/admin/audit-log/action-types/`

#### AuditLogUser

| Field | Description |
| --- | --- |
| `id` |  |
| `value` |  |

Operations: list.

API path: `/api/admin/audit-log/users/`

#### Auth

| Field | Description |
| --- | --- |
| `RelayState` | The frontend URL where redirect the authenticated user. |
| `SAMLResponse` | The encoded SAML response from the IdP. |
| `backup_code` |  |
| `code` |  |
| `email` | Deprecated. |
| `password` |  |

Operations: create, load, remove.

API path: `/api/sso/saml/acs/`

#### AuthenticationProviderAuthProvider

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, list, load, update.

API path: `/api/admin/auth-provider/`

#### AutomationNode

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/api/automation/node/{node_id}/`

#### AutomationNodeHistory

| Field | Description |
| --- | --- |
| `completed_on` |  |
| `destination_label` |  |
| `destination_node_id` |  |
| `destination_node_type` |  |
| `edge_label` |  |
| `id` |  |
| `iteration` |  |
| `iteration_path` |  |
| `message` |  |
| `node` |  |
| `node_label` |  |
| `node_type` |  |
| `parent_node_id` |  |
| `started_on` |  |
| `status` | * `success` - Success * `error` - Error * `disabled` - Disabled * `started` - Started * `skipped` - Skipped * `cancelled` - Cancelled |
| `workflow_history` |  |

Operations: list.

API path: `/api/automation/workflow_histories/{workflow_history_id}/node_histories/`

#### AutomationNodeResult

| Field | Description |
| --- | --- |
| `result` | Contains node results. |

Operations: load.

API path: `/api/automation/node_histories/{node_history_id}/result/`

#### AutomationNodeTypeAutomationNode

| Field | Description |
| --- | --- |
| `id` |  |
| `new_type` | The type of the new automation node * `local_baserow_create_row` - local_baserow_create_row * `local_baserow_create_rows` - local_baserow_create_rows * `local_baserow_update_row` - local_baserow_update_row * `local_baserow_update_rows` -… |
| `output` | The new output. |
| `position` | The new position relative to the reference node. |
| `reference_node_id` | The reference node. |

Operations: create, list, update.

API path: `/api/automation/node/{node_id}/duplicate/`

#### AutomationWorkflow

| Field | Description |
| --- | --- |
| `allow_test_run` | If provided, enables the workflow to be triggerable for the next 5 minutes. |
| `allow_test_run_until` |  |
| `automation_id` |  |
| `created_on` |  |
| `duplicated_automation_workflow` |  |
| `error_code` | A machine readable error code indicating why the job failed. |
| `graph` | A JSON serialized graph containing the points and edges. |
| `human_readable_error` | A human readable error message indicating what went wrong. |
| `id` |  |
| `immediate_dispatch` |  |
| `name` |  |
| `notification_recipient_ids` | The user IDs of the workspace members that should receive notifications related to this workflow. |
| `order` | Lowest first. |
| `original_automation_workflow` |  |
| `progress_percentage` | A percentage indicating how far along the job is. |
| `published_on` |  |
| `simulate_until_node_id` | When set, upon the next workflow run, simulates the dispatch of the workflow until this node and updates the sample_data of the node's service. |
| `state` | Indicates the state of the import job. |
| `type` | The type of the job. |
| `updated_on` |  |
| `workflow_ids` | The ids of the workflows in the order they are supposed to be set in. |

Operations: create, load, remove, update.

API path: `/api/automation/{automation_id}/workflows/order/`

#### AutomationWorkflowHistory

| Field | Description |
| --- | --- |
| `cancellation_requested_on` | When the cancellation of this run was requested. |
| `completed_on` |  |
| `id` |  |
| `is_test_run` | True when the workflow is being simulated. |
| `message` |  |
| `plugin_data` |  |
| `simulate_until_node` |  |
| `started_on` |  |
| `status` | * `success` - Success * `error` - Error * `disabled` - Disabled * `started` - Started * `skipped` - Skipped * `cancelled` - Cancelled |
| `triggered_by` |  |

Operations: create, list.

API path: `/api/automation/workflow_histories/{workflow_history_id}/cancel/`

#### BuilderDataSource

| Field | Description |
| --- | --- |
| `1` |  |
| `2` |  |
| `id` |  |
| `key` |  |
| `metadata` | Metadata of the dispatch payload. |

Operations: create, load, remove.

API path: `/api/builder/data-source/{data_source_id}/dispatch/`

#### BuilderDomain

| Field | Description |
| --- | --- |
| `domain_ids` | The ids of the domains in the order they are supposed to be set in |
| `id` |  |

Operations: create, load, remove.

API path: `/api/builder/{builder_id}/domains/order/`

#### BuilderElement

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/api/builder/element/{element_id}/`

#### BuilderPage

| Field | Description |
| --- | --- |
| `created_on` |  |
| `duplicated_page` |  |
| `error_code` | A machine readable error code indicating why the job failed. |
| `human_readable_error` | A human readable error message indicating what went wrong. |
| `id` |  |
| `original_page` |  |
| `page_ids` | The ids of the pages in the order they are supposed to be set in |
| `progress_percentage` | A percentage indicating how far along the job is. |
| `state` | Indicates the state of the import job. |
| `type` | The type of the job. |
| `updated_on` |  |

Operations: create, remove.

API path: `/api/builder/{builder_id}/pages/order/`

#### BuilderPreview

| Field | Description |
| --- | --- |

Operations: load.

API path: `/api/builder/preview/exchange/{token}/`

#### BuilderPreviewGrant

| Field | Description |
| --- | --- |
| `path` |  |
| `url` |  |

Operations: create.

API path: `/api/builder/preview/{builder_id}/grant/`

#### BuilderPreviewHandoff

| Field | Description |
| --- | --- |
| `builder_id` |  |
| `expires_in` |  |
| `preview_handoff` |  |
| `preview_session` |  |

Operations: create.

API path: `/api/builder/preview/handoff/`

#### BuilderPublic

| Field | Description |
| --- | --- |

Operations: load.

API path: `/api/custom_code/{builder_id}/css/public/`

#### BuilderWorkflowAction

| Field | Description |
| --- | --- |
| `element_id` | The element the workflow actions belong to |
| `id` |  |
| `workflow_action_ids` | The ids of the workflow actions in the order they are supposed to be set in |

Operations: create, remove.

API path: `/api/builder/page/{page_id}/workflow_actions/order/`

#### BuilderWorkflowActionTypeBuilderWorkflowAction

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, list, update.

API path: `/api/builder/page/{page_id}/workflow_actions/`

#### ById

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

API path: `/api/builder/domains/published/by_id/{builder_id}/`

#### ByName

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

API path: `/api/builder/domains/published/by_name/{domain_name}/`

#### Calendar

| Field | Description |
| --- | --- |
| `field_options` |  |
| `id` |  |
| `row_metadata` | An object keyed by row id with a value being an object containing additional metadata about that row. |
| `rows` | Every date bucket (e.g. |

Operations: load.

API path: `/api/database/views/calendar/{view_id}/`

#### CalendarViewExample

| Field | Description |
| --- | --- |
| `hidden` | Whether or not the field should be hidden in the card. |
| `order` | The order that the field has in the view. |

Operations: list.

API path: `/api/database/views/calendar/{slug}/public/rows/`

#### Callback

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

API path: `/api/sso/oauth2/callback/{provider_id}/`

#### Cancel

| Field | Description |
| --- | --- |
| `messages` |  |

Operations: list.

API path: `/assistant/chat/{chat_uuid}/cancel/`

#### ColorTypographyButtonImagePageInputTableLinklinkActiveText

| Field | Description |
| --- | --- |
| `body_font_family` |  |
| `body_font_size` |  |
| `body_font_weight` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `body_text_alignment` | * `left` - Left * `center` - Center * `right` - Right |
| `body_text_color` |  |
| `border_color` |  |
| `button_active_background_color` | The background color of buttons when active |
| `button_active_border_color` | The border color of buttons when active |
| `button_active_text_color` | The text color of buttons when active |
| `button_alignment` | * `left` - Left * `center` - Center * `right` - Right |
| `button_background_color` | The background color of buttons |
| `button_border_color` | The border color of buttons |
| `button_border_radius` | Button border radius |
| `button_border_size` | Button border size |
| `button_font_family` |  |
| `button_font_size` |  |
| `button_font_weight` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `button_horizontal_padding` | Button horizontal padding |
| `button_hover_background_color` | The background color of buttons when hovered |
| `button_hover_border_color` | The border color of buttons when hovered |
| `button_hover_text_color` | The text color of buttons when hovered |
| `button_text_alignment` | * `left` - Left * `center` - Center * `right` - Right |
| `button_text_color` | The text color of buttons |
| `button_vertical_padding` | Button vertical padding |
| `button_width` | * `auto` - Auto * `full` - Full |
| `custom_colors` |  |
| `heading_1_font_family` |  |
| `heading_1_font_size` |  |
| `heading_1_font_weight` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `heading_1_text_alignment` | * `left` - Left * `center` - Center * `right` - Right |
| `heading_1_text_color` |  |
| `heading_1_text_decoration` | Text decoration: [underline, stroke, uppercase, italic] |
| `heading_2_font_family` |  |
| `heading_2_font_size` |  |
| `heading_2_font_weight` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `heading_2_text_alignment` | * `left` - Left * `center` - Center * `right` - Right |
| `heading_2_text_color` |  |
| `heading_2_text_decoration` | Text decoration: [underline, stroke, uppercase, italic] |
| `heading_3_font_family` |  |
| `heading_3_font_size` |  |
| `heading_3_font_weight` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `heading_3_text_alignment` | * `left` - Left * `center` - Center * `right` - Right |
| `heading_3_text_color` |  |
| `heading_3_text_decoration` | Text decoration: [underline, stroke, uppercase, italic] |
| `heading_4_font_family` |  |
| `heading_4_font_size` |  |
| `heading_4_font_weight` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `heading_4_text_alignment` | * `left` - Left * `center` - Center * `right` - Right |
| `heading_4_text_color` |  |
| `heading_4_text_decoration` | Text decoration: [underline, stroke, uppercase, italic] |
| `heading_5_font_family` |  |
| `heading_5_font_size` |  |
| `heading_5_font_weight` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `heading_5_text_alignment` | * `left` - Left * `center` - Center * `right` - Right |
| `heading_5_text_color` |  |
| `heading_5_text_decoration` | Text decoration: [underline, stroke, uppercase, italic] |
| `heading_6_font_family` |  |
| `heading_6_font_size` |  |
| `heading_6_font_weight` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `heading_6_text_alignment` | * `left` - Left * `center` - Center * `right` - Right |
| `heading_6_text_color` |  |
| `heading_6_text_decoration` | Text decoration: [underline, stroke, uppercase, italic] |
| `image_alignment` | * `left` - Left * `center` - Center * `right` - Right |
| `image_border_radius` | The border radius for this image element. |
| `image_constraint` | The image constraint to apply to this image * `cover` - Cover * `contain` - Contain * `full-width` - Full Width |
| `image_max_height` | The image max height |
| `image_max_width` | The max-width for this image element. |
| `input_background_color` | The background color of the input |
| `input_border_color` | The color of the input border |
| `input_border_radius` | Input border radius |
| `input_border_size` | Input border size |
| `input_font_family` | The font family of the input |
| `input_font_size` |  |
| `input_font_weight` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `input_horizontal_padding` | Input horizontal padding |
| `input_text_color` | The text color of the input |
| `input_vertical_padding` | Input vertical padding |
| `label_font_family` | The font family of the label |
| `label_font_size` | The font size of the label |
| `label_font_weight` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `label_text_color` | The text color of the label |
| `link_active_text_color` | The hover color of links when active |
| `link_active_text_decoration` | Active text decoration: [underline, stroke, uppercase, italic] |
| `link_default_text_decoration` | Default text decoration: [underline, stroke, uppercase, italic] |
| `link_font_family` |  |
| `link_font_size` |  |
| `link_font_weight` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `link_hover_text_color` | The hover color of links when hovered |
| `link_hover_text_decoration` | Hover text decoration: [underline, stroke, uppercase, italic] |
| `link_text_alignment` | * `left` - Left * `center` - Center * `right` - Right |
| `link_text_color` | The text color of links |
| `main_error_color` |  |
| `main_success_color` |  |
| `main_warning_color` |  |
| `page_background_color` | The background color of the page |
| `page_background_file` | The image file |
| `page_background_mode` | The mode of the background image * `tile` - Tile * `fill` - Fill * `fit` - Fit |
| `primary_color` |  |
| `secondary_color` |  |
| `table_border_color` | The color of the table border |
| `table_border_radius` | Table border radius |
| `table_border_size` | Table border size |
| `table_cell_alignment` | * `left` - Left * `center` - Center * `right` - Right |
| `table_cell_alternate_background_color` | The alternate background color of the table cells |
| `table_cell_background_color` | The background color of the table cells |
| `table_cell_horizontal_padding` | Table cell horizontal padding |
| `table_cell_vertical_padding` | Table cell vertical padding |
| `table_header_background_color` | The background color of the table header cells |
| `table_header_font_family` | The font family of the table header cells |
| `table_header_font_size` | The font size of the header cells |
| `table_header_font_weight` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `table_header_text_alignment` | * `left` - Left * `center` - Center * `right` - Right |
| `table_header_text_color` | The text color of the table header cells |
| `table_horizontal_separator_color` | The color of the table horizontal separator |
| `table_horizontal_separator_size` | Table horizontal separator size |
| `table_vertical_separator_color` | The color of the table vertical separator |
| `table_vertical_separator_size` | Table vertical separator size |

Operations: update.

API path: `/api/builder/{builder_id}/theme/`

#### CoreWebhook

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, load, patch, remove, update.

API path: `/api/webhooks/{webhook_uid}/`

#### DashboardDataSource

| Field | Description |
| --- | --- |

Operations: create.

API path: `/api/dashboard/data-sources/{data_source_id}/dispatch/`

#### DashboardWidget

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/api/dashboard/widgets/{widget_id}/`

#### DashboardWidgetWidget

| Field | Description |
| --- | --- |
| `id` |  |
| `widgets` | The complete layout of the dashboard widgets visible to the current user. |

Operations: create, list, update.

API path: `/api/dashboard/{dashboard_id}/widgets/`

#### DataScan

| Field | Description |
| --- | --- |
| `created_on` |  |
| `frequency` | * `manual` - Manual * `hourly` - Hourly * `daily` - Daily * `weekly` - Weekly |
| `id` |  |
| `is_running` |  |
| `last_error` |  |
| `last_run_finished_at` |  |
| `last_run_started_at` |  |
| `list_items` |  |
| `name` |  |
| `pattern` |  |
| `results_count` |  |
| `scan_all_workspaces` |  |
| `scan_type` | * `pattern` - Pattern * `list_of_values` - List of values * `list_table` - List Table |
| `source_database_id` |  |
| `source_field_id` |  |
| `source_table_id` |  |
| `source_workspace_id` |  |
| `updated_on` |  |
| `whole_words` |  |
| `workspace_ids` |  |

Operations: create, list, load, update.

API path: `/api/admin/data-scanner/scans/`

#### DataSync

| Field | Description |
| --- | --- |
| `auto_add_new_properties` | If enabled and new properties are detected on sync, then they're automatically added. |
| `database_id` |  |
| `delete_unmatched_rows` | If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. |
| `id` |  |
| `last_error` |  |
| `last_sync` | Timestamp when the table was last synced. |
| `synced_properties` |  |
| `table_id` | The table where the data is synced into. |
| `two_way_sync` | If enabled, then it's possible to make changes to the synced table. |
| `type` |  |

Operations: load, update.

API path: `/api/database/data-sync/{data_sync_id}/`

#### DatabaseTable

| Field | Description |
| --- | --- |
| `configuration` | Additional table import configuration. |
| `created_on` |  |
| `data` | A list of rows you want to add to the specified table. |
| `data_sync` |  |
| `database_id` | Database id where the table will be created. |
| `duplicated_table` |  |
| `error_code` | A machine readable error code indicating why the job failed. |
| `first_row_header` |  |
| `human_readable_error` | A human readable error message indicating what went wrong. |
| `id` |  |
| `importer_type` | The frontend importer identifier used to parse the file. |
| `name` | The name of the new table. |
| `original_file_name` | The original name of the uploaded file. |
| `original_table` |  |
| `progress_percentage` | A percentage indicating how far along the job is. |
| `report` | Import error report. |
| `state` | Indicates the state of the import job. |
| `table_id` | Table id where the data will be imported. |
| `triggered_by` | Whether this sync run was started manually or periodically. |
| `type` | The type of the job. |
| `updated_on` |  |
| `user_name` | The name of the user that started this sync run. |

Operations: create, remove.

API path: `/api/database/data-sync/{data_sync_id}/sync/async/`

#### DatabaseTableField

| Field | Description |
| --- | --- |
| `created_on` |  |
| `duplicated_field` |  |
| `element_id` | The element the workflow actions belong to |
| `error_code` | A machine readable error code indicating why the job failed. |
| `field_id` | The ID of the AI field to generate values for. |
| `human_readable_error` | A human readable error message indicating what went wrong. |
| `id` |  |
| `is_auto_update` | Indicates if the job has been created because values in a dependent field changed. |
| `only_empty` | Whether to only generate AI values for rows where the field is empty. |
| `original_field` |  |
| `progress_percentage` | A percentage indicating how far along the job is. |
| `row_ids` | The IDs of the rows to generate AI values for. |
| `state` | Indicates the state of the import job. |
| `type` | The type of the job. |
| `updated_on` |  |
| `view_id` | The ID of the view to generate AI values for. |
| `workflow_action_ids` | The ids of the workflow actions in the order they are supposed to be set in |

Operations: create, remove.

API path: `/api/database/field/{field_id}/workflow_actions/order/`

#### DatabaseTableGridView

| Field | Description |
| --- | --- |
| `field_id` |  |
| `total` | The total value count. |
| `value` |  |

Operations: load.

API path: `/api/database/views/grid/{view_id}/aggregation/{field_id}/`

#### DatabaseTableRow

| Field | Description |
| --- | --- |
| `id` |  |
| `items` |  |
| `mode` | The mode to use to receive notifications for new comments on a table row. |
| `row_id` | the name of the row with id `row_id` from table with id `table_id`. |

Operations: create, load, remove, update.

API path: `/api/database/rows/table/{table_id}/batch-delete/`

#### DatabaseTableView

| Field | Description |
| --- | --- |
| `id` |  |
| `view_ids` | View ids in the desired order. |

Operations: create, load, remove.

API path: `/api/database/views/table/{table_id}/order/`

#### DatabaseTableViewDecoration

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/api/database/views/decoration/{view_decoration_id}/`

#### DatabaseTableViewFilter

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/api/database/views/filter/{view_filter_id}/`

#### DatabaseTableViewGrouping

| Field | Description |
| --- | --- |
| `view_group_by_ids` | View group by ids in the desired priority order. |

Operations: create, remove.

API path: `/api/database/views/{view_id}/group_bys/prioritize/`

#### DatabaseTableViewSorting

| Field | Description |
| --- | --- |
| `view_sort_ids` | View sort ids in the desired priority order. |

Operations: create, remove.

API path: `/api/database/views/{view_id}/sortings/prioritize/`

#### DatabaseTableWebhook

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/api/database/webhooks/{webhook_id}/`

#### DatabaseToken

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load, remove.

API path: `/api/database/tokens/check/`

#### DatabaseWorkflowActionTypeDatabaseWorkflowAction

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, list, update.

API path: `/api/database/field/{field_id}/workflow_actions/`

#### DecoratorValueProviderTypeViewDecoration

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, list, load, update.

API path: `/api/database/views/{view_id}/decorations/`

#### Dispatch

| Field | Description |
| --- | --- |
| `client_actions` | Actions the browser runs itself, in order, after the server actions have completed. |
| `results` |  |
| `row_id` | The id of the row the button was clicked on. |

Operations: create.

API path: `/api/database/field/{field_id}/workflow_actions/dispatch/`

#### Domain

| Field | Description |
| --- | --- |
| `domain_name` |  |
| `id` |  |
| `type` | The type of the domain. |

Operations: create, list, update.

API path: `/api/builder/{builder_id}/domains/`

#### Duplicate

| Field | Description |
| --- | --- |
| `elements` | The duplicated elements. |
| `graph` | The updated page graph. |
| `workflow_actions` | The duplicated workflow actions |

Operations: create.

API path: `/api/builder/element/{element_id}/duplicate/`

#### Element

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, list, update.

API path: `/api/builder/page/{page_id}/elements/`

#### ElementTypeElement

| Field | Description |
| --- | --- |
| `id` |  |

Operations: update.

API path: `/api/builder/element/{element_id}/move/`

#### Email

| Field | Description |
| --- | --- |
| `error` | A short message describing the error that occured if the test email failed |
| `error_stack` | The full stack trace and error message if the test email failed. |
| `error_type` | The type of error that occurred if the test email failed. |
| `succeeded` | Whether or not the test email was sent successfully. |
| `target_email` |  |

Operations: create.

API path: `/api/_health/email/`

#### ExampleBatchRow

| Field | Description |
| --- | --- |
| `items` |  |

Operations: create.

API path: `/api/database/rows/table/{table_id}/batch/`

#### ExampleBatchUpdateRow

| Field | Description |
| --- | --- |
| `items` |  |
| `metadata` | An optional object containing metadata information about the operation |

Operations: update.

API path: `/api/database/rows/table/{table_id}/batch/`

#### ExamplePublicRowResponseSerializerWithUserFieldName

| Field | Description |
| --- | --- |
| `field_1` | This field represents the `text` field. |
| `field_10` | This field represents the `last_modified_by` field. |
| `field_11` | This field represents the `created_on` field. |
| `field_12` | This field represents the `created_by` field. |
| `field_13` | This field represents the `duration` field. |
| `field_14` | This field represents the `link_row` field. |
| `field_15` | This field represents the `file` field. |
| `field_16` | This field represents the `single_select` field. |
| `field_17` | This field represents the `multiple_select` field. |
| `field_18` | This field represents the `phone_number` field. |
| `field_19` | This field represents the `formula` field. |
| `field_2` | This field represents the `long_text` field. |
| `field_20` | This field represents the `count` field. |
| `field_21` | This field represents the `rollup` field. |
| `field_22` | This field represents the `lookup` field. |
| `field_23` | This field represents the `multiple_collaborators` field. |
| `field_24` | This field represents the `uuid` field. |
| `field_25` | This field represents the `autonumber` field. |
| `field_26` | This field represents the `password` field. |
| `field_27` | This field represents the `form_view_edit_row` field. |
| `field_28` | This field represents the `button` field. |
| `field_29` | This field represents the `ai` field. |
| `field_3` | This field represents the `url` field. |
| `field_4` | This field represents the `email` field. |
| `field_5` | This field represents the `number` field. |
| `field_6` | This field represents the `rating` field. |
| `field_7` | This field represents the `boolean` field. |
| `field_8` | This field represents the `date` field. |
| `field_9` | This field represents the `last_modified` field. |
| `id` | The unique identifier of the row in the table. |
| `order` | Indicates the position of the row, lowest first and highest last. |

Operations: load.

API path: `/api/database/views/{slug}/row/{row_id}/`

#### ExampleRow

| Field | Description |
| --- | --- |
| `field_1` | This field represents the `text` field. |
| `field_10` | This field represents the `last_modified_by` field. |
| `field_11` | This field represents the `created_on` field. |
| `field_12` | This field represents the `created_by` field. |
| `field_13` | This field represents the `duration` field. |
| `field_14` | This field represents the `link_row` field. |
| `field_15` | This field represents the `file` field. |
| `field_16` | This field represents the `single_select` field. |
| `field_17` | This field represents the `multiple_select` field. |
| `field_18` | This field represents the `phone_number` field. |
| `field_19` | This field represents the `formula` field. |
| `field_2` | This field represents the `long_text` field. |
| `field_20` | This field represents the `count` field. |
| `field_21` | This field represents the `rollup` field. |
| `field_22` | This field represents the `lookup` field. |
| `field_23` | This field represents the `multiple_collaborators` field. |
| `field_24` | This field represents the `uuid` field. |
| `field_25` | This field represents the `autonumber` field. |
| `field_26` | This field represents the `password` field. |
| `field_27` | This field represents the `form_view_edit_row` field. |
| `field_28` | This field represents the `button` field. |
| `field_29` | This field represents the `ai` field. |
| `field_3` | This field represents the `url` field. |
| `field_4` | This field represents the `email` field. |
| `field_5` | This field represents the `number` field. |
| `field_6` | This field represents the `rating` field. |
| `field_7` | This field represents the `boolean` field. |
| `field_8` | This field represents the `date` field. |
| `field_9` | This field represents the `last_modified` field. |
| `field_ids` | Only the fields related to the provided ids are added to the response. |
| `id` | The unique identifier of the row in the table. |
| `metadata` | Additional metadata for the row, if `include=metadata' is provided as query parameter. |
| `order` | Indicates the position of the row, lowest first and highest last. |
| `row_ids` | Only rows related to the provided ids are added to the response. |

Operations: create, load.

API path: `/api/database/views/grid/{view_id}/`

#### ExampleRowResponseSerializerWithUserFieldName

| Field | Description |
| --- | --- |
| `baserow_id` | The unique identifier of the row in the table. |
| `field_1` | This field represents the `text` field. |
| `field_10` | This field represents the `last_modified_by` field. |
| `field_11` | This field represents the `created_on` field. |
| `field_12` | This field represents the `created_by` field. |
| `field_13` | This field represents the `duration` field. |
| `field_14` | This field represents the `link_row` field. |
| `field_15` | This field represents the `file` field. |
| `field_16` | This field represents the `single_select` field. |
| `field_17` | This field represents the `multiple_select` field. |
| `field_18` | This field represents the `phone_number` field. |
| `field_19` | This field represents the `formula` field. |
| `field_2` | This field represents the `long_text` field. |
| `field_20` | This field represents the `count` field. |
| `field_21` | This field represents the `rollup` field. |
| `field_22` | This field represents the `lookup` field. |
| `field_23` | This field represents the `multiple_collaborators` field. |
| `field_24` | This field represents the `uuid` field. |
| `field_25` | This field represents the `autonumber` field. |
| `field_26` | This field represents the `password` field. |
| `field_27` | This field represents the `form_view_edit_row` field. |
| `field_28` | This field represents the `button` field. |
| `field_29` | This field represents the `ai` field. |
| `field_3` | This field represents the `url` field. |
| `field_4` | This field represents the `email` field. |
| `field_5` | This field represents the `number` field. |
| `field_6` | This field represents the `rating` field. |
| `field_7` | This field represents the `boolean` field. |
| `field_8` | This field represents the `date` field. |
| `field_9` | This field represents the `last_modified` field. |
| `id` | The unique identifier of the row in the table. |
| `metadata` | Additional metadata for the row, if `include=metadata' is provided as query parameter. |
| `order` | Indicates the position of the row, lowest first and highest last. |

Operations: create, list, load, update.

API path: `/api/database/rows/table/{table_id}/`

#### Export

| Field | Description |
| --- | --- |
| `created_at` |  |
| `created_on` |  |
| `error_code` | A machine readable error code indicating why the job failed. |
| `exported_file_name` |  |
| `exporter_type` |  |
| `human_readable_error` | A human readable error message indicating what went wrong. |
| `id` |  |
| `progress_percentage` | A percentage indicating how far along the job is. |
| `state` | * `pending` - pending * `exporting` - exporting * `cancelled` - cancelled * `finished` - finished * `failed` - failed * `expired` - expired |
| `status` | DEPRECATED: Use state instead |
| `table` |  |
| `type` | The type of the job. |
| `updated_on` |  |
| `url` |  |
| `view` |  |
| `workspace_id` | The workspace that the applications are going to be exported from. |

Operations: list, load.

API path: `/api/workspaces/{workspace_id}/export/`

#### ExportJob

| Field | Description |
| --- | --- |
| `created_at` |  |
| `exported_file_name` |  |
| `exporter_type` |  |
| `id` |  |
| `progress_percentage` |  |
| `state` | * `pending` - pending * `exporting` - exporting * `cancelled` - cancelled * `finished` - finished * `failed` - failed * `expired` - expired |
| `status` | DEPRECATED: Use state instead |
| `table` |  |
| `url` |  |
| `view` |  |

Operations: create, load.

API path: `/api/database/view/{slug}/export-public-view/`

#### Field

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load, update.

API path: `/api/database/fields/{field_id}/`

#### FieldField

| Field | Description |
| --- | --- |
| `new_primary_field_id` | The ID of the new primary field. |

Operations: create, load.

API path: `/api/database/fields/table/{table_id}/change-primary-field/`

#### FieldFieldSerializerWithRelatedField

| Field | Description |
| --- | --- |

Operations: create.

API path: `/api/database/fields/table/{table_id}/`

#### FieldPermissionSubjectOption

| Field | Description |
| --- | --- |
| `id` |  |

Operations: list.

API path: `/api/field-permissions/{field_id}/subjects/`

#### FieldRule

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, load, remove.

API path: `/api/database/field-rules/{table_id}/`

#### FieldRulesResponseFieldRule

| Field | Description |
| --- | --- |
| `id` |  |

Operations: update.

API path: `/api/database/field-rules/{table_id}/rule/{rule_id}/`

#### FormViewSubmitted

| Field | Description |
| --- | --- |
| `field_1` | This field represents the `text` field. |
| `field_13` | This field represents the `duration` field. |
| `field_14` | This field represents the `link_row` field. |
| `field_15` | This field represents the `file` field. |
| `field_16` | Accepts one of the following option ids as integer value This field accepts an `integer` representing the chosen select option id related to the field. |
| `field_17` | This field represents the `multiple_select` field. |
| `field_18` | This field represents the `phone_number` field. |
| `field_2` | This field represents the `long_text` field. |
| `field_23` | This field represents the `multiple_collaborators` field. |
| `field_26` | This field represents the `password` field. |
| `field_29` | This field represents the `ai` field. |
| `field_3` | This field represents the `url` field. |
| `field_4` | This field represents the `email` field. |
| `field_5` | This field represents the `number` field. |
| `field_6` | This field represents the `rating` field. |
| `field_7` | This field represents the `boolean` field. |
| `field_8` | This field represents the `date` field. |
| `row_id` |  |
| `submit_action` | The action that must be performed after the visitor has filled out the form. |
| `submit_action_message` | If the `submit_action` is MESSAGE, then this message will be shown to the visitor after submitting the form. |
| `submit_action_redirect_url` | If the `submit_action` is REDIRECT,then the visitors will be redirected to the this URL after submitting the form. |

Operations: create, update.

API path: `/api/database/views/form/{slug}/submit/`

#### Full

| Field | Description |
| --- | --- |
| `celery_export_queue_size` | The number of enqueued celery export worker tasks. |
| `celery_queue_size` | The number of enqueued celery tasks. |
| `checks` | An object keyed by the name of the health check and the value being the result. |
| `passing` | False if any of the critical service health checks are failing, true otherwise. |

Operations: load.

API path: `/api/_health/full/`

#### GenerateFormulaWithAi

| Field | Description |
| --- | --- |
| `ai_model` | The AI model that must be used when generating the formula. |
| `ai_prompt` | The human readable input used to generate the formula. |
| `ai_temperature` | Between 0 and 2, adjusts response randomness—lower values yield focused answers, while higher values increase creativity. |
| `ai_type` | The AI model type that must be used when generating the formula. |
| `formula` | The formula generated by the AI. |

Operations: create.

API path: `/api/database/fields/table/{table_id}/generate-ai-formula/`

#### GridViewGroupByData

| Field | Description |
| --- | --- |
| `group_count` |  |
| `groups` |  |
| `id` |  |
| `limit` |  |
| `offset` |  |
| `parent` | The serialized parent group path requested for this page. |

Operations: list.

API path: `/api/database/views/grid/{slug}/public/group-by-data/`

#### Health

| Field | Description |
| --- | --- |

Operations: load.

API path: `/api/_health/celery-queue/`

#### InboundEmail

| Field | Description |
| --- | --- |

Operations: create.

API path: `/api/inbound-email/`

#### Install

| Field | Description |
| --- | --- |

Operations: create.

API path: `/api/templates/install/{workspace_id}/{template_id}/`

#### InstanceId

| Field | Description |
| --- | --- |
| `instance_id` |  |

Operations: load.

API path: `/api/settings/instance-id/`

#### Integration

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, list, remove, update.

API path: `/api/application/{application_id}/integrations/`

#### IntegrationIntegration

| Field | Description |
| --- | --- |
| `id` |  |

Operations: update.

API path: `/api/integration/{integration_id}/move/`

#### IntegrationServiceDashboardDataSource

| Field | Description |
| --- | --- |
| `id` |  |

Operations: list, update.

API path: `/api/dashboard/{dashboard_id}/data-sources/`

#### IntegrationServiceDataSource

| Field | Description |
| --- | --- |
| `before_id` | If provided, the data_source is moved before the data_source with this Id. |
| `id` |  |

Operations: create, list, update.

API path: `/api/builder/page/{page_id}/data-sources/`

#### IntegrationServicePublicDataSource

| Field | Description |
| --- | --- |

Operations: list.

API path: `/api/builder/domains/published/page/{page_id}/data_sources/`

#### InvalidRow

| Field | Description |
| --- | --- |
| `id` |  |

Operations: list.

API path: `/api/database/field-rules/{table_id}/invalid-rows/`

#### Job

| Field | Description |
| --- | --- |
| `count` | The number of matching jobs, or null when polling explicit job IDs. |
| `created_on` |  |
| `error_code` | A machine readable error code indicating why the job failed. |
| `human_readable_error` | A human readable error message indicating what went wrong. |
| `id` |  |
| `jobs` |  |
| `progress_percentage` | A percentage indicating how far along the job is. |
| `state` | Indicates the state of the import job. |
| `type` | The type of the job. |
| `updated_on` |  |

Operations: create, list, load.

API path: `/api/snapshots/{snapshot_id}/restore/`

#### JobTypeJob

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create.

API path: `/api/jobs/{job_id}/cancel/`

#### Kanban

| Field | Description |
| --- | --- |
| `field_options` |  |
| `id` |  |
| `row_metadata` | An object keyed by row id with a value being an object containing additional metadata about that row. |
| `rows` | Every select option related to the view's single select field can have its own entry like this. |

Operations: load.

API path: `/api/database/views/kanban/{view_id}/`

#### KanbanViewExample

| Field | Description |
| --- | --- |
| `hidden` | Whether or not the field should be hidden in the card. |
| `order` | The order that the field has in the view. |

Operations: list.

API path: `/api/database/views/kanban/{slug}/public/rows/`

#### LastViewedItem

| Field | Description |
| --- | --- |
| `application` |  |
| `item` | The `id` and `name` of the item, plus what the type adds. |
| `last_viewed` |  |
| `sub_type` | Set for polymorphic types, like the view type of a database view. |
| `type` |  |
| `workspace` |  |

Operations: list.

API path: `/api/last-viewed/items/`

#### License

| Field | Description |
| --- | --- |
| `application_users` | The amount of application builder users permitted in this license. |
| `application_users_taken` | The amount of application builder users used so far in this license. |
| `email` |  |
| `first_name` |  |
| `free_users_count` | The amount of free users that are currently using the license. |
| `id` |  |
| `is_active` | Indicates if the backend deems the license valid. |
| `issued_on` | The date when the license was issued. |
| `issued_to_email` | Indicates to which email address the license has been issued. |
| `issued_to_name` | Indicates to whom the license has been issued. |
| `last_check` |  |
| `license_id` | Unique identifier of the license. |
| `product_code` | The product code that indicates what the license unlocks. |
| `seats` | The maximum amount of users that can use the license. |
| `seats_taken` | The amount of users that are currently using the license. |
| `users` |  |
| `valid_from` | From which timestamp the license becomes active. |
| `valid_through` | Until which timestamp the license is active. |

Operations: create, load.

API path: `/api/licenses/{id}/{user_id}/`

#### LicenseUser

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create.

API path: `/api/licenses/{id}/fill-seats/`

#### LicenseUserLookup

| Field | Description |
| --- | --- |
| `id` |  |
| `value` | The name and the email address of the user. |

Operations: list.

API path: `/api/licenses/{id}/lookup-users/`

#### LicenseWithUser

| Field | Description |
| --- | --- |
| `id` |  |

Operations: list.

API path: `/api/licenses/{id}/check/`

#### ListDataSyncProperty

| Field | Description |
| --- | --- |
| `field_type` |  |
| `initially_selected` |  |
| `key` |  |
| `name` |  |
| `unique_primary` |  |

Operations: create, list.

API path: `/api/database/data-sync/database/{database_id}/properties/`

#### Login

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

API path: `/api/sso/oauth2/login/{provider_id}/`

#### McpEndpoint

| Field | Description |
| --- | --- |
| `created` |  |
| `id` |  |
| `key` | The unique endpoint key that can be used to authorize for the MCP service. |
| `name` | The human readable name of the MCP endpoint for the user. |
| `workspace_id` |  |
| `workspace_name` |  |

Operations: create, list, load, remove, update.

API path: `/api/mcp/endpoints/`

#### Message

| Field | Description |
| --- | --- |
| `messages` |  |

Operations: list.

API path: `/assistant/chat/{chat_uuid}/messages/`

#### Notification

| Field | Description |
| --- | --- |
| `baserow_id` | The id of the notification. |
| `created_on` | The date and time that the notification was created. |
| `data` | The data associated with the notification. |
| `id` | The id of the notification. |
| `read` | If True, then the notification has been read by the user. |
| `sender` | The user that sent the notification. |
| `type` | The type of notification |
| `workspace` | The workspace that the notification is in (if any). |

Operations: create, remove, update.

API path: `/api/notifications/{workspace_id}/mark-all-as-read/`

#### OnboardingPromptSuggestion

| Field | Description |
| --- | --- |
| `industry` | The industry the user works in. |
| `language` | ISO 639 language code the suggestions must be written in. |
| `suggestions` |  |
| `team` | The team the user is part of. |

Operations: create.

API path: `/assistant/onboarding/prompt-suggestions/`

#### OpenApiRoleAssignment

| Field | Description |
| --- | --- |
| `id` |  |
| `items` |  |
| `role` | The uid of the role assigned to the user or team in the given workspace. |
| `scope_id` | The unique scope ID. |
| `scope_type` | The type of the scope object. |
| `subject` | The structure of the subject field depends on the subject typereturned and will have additional fields accordingly |
| `subject_id` | The subject ID. |
| `subject_type` | The subject type. |

Operations: create, load.

API path: `/api/role/{workspace_id}/`

#### Page

| Field | Description |
| --- | --- |
| `builder_id` |  |
| `graph` | A JSON serialized graph containing the points and edges. |
| `id` |  |
| `name` |  |
| `order` | Lowest first. |
| `path` |  |
| `path_params` |  |
| `query_params` |  |
| `role_type` | Role type is used in conjunction with roles to control access to this page. |
| `roles` | List of user roles that are associated with this page. |
| `shared` |  |
| `visibility` | Controls the page's visibility. |

Operations: create, update.

API path: `/api/builder/{builder_id}/pages/`

#### PaginationSerializerExampleRowResponseSerializerWithUser

| Field | Description |
| --- | --- |
| `count` | The total amount of results. |
| `next` | URL to the next page. |
| `previous` | URL to the previous page. |
| `results` |  |

Operations: load.

API path: `/api/database/rows/table/{table_id}/`

#### PaginationSerializerLinkRowValue

| Field | Description |
| --- | --- |
| `count` | The total amount of results. |
| `next` | URL to the next page. |
| `previous` | URL to the previous page. |
| `results` |  |

Operations: load.

API path: `/api/database/views/{slug}/link-row-field-lookup/{field_id}/`

#### PaginationSerializerNotificationRecipient

| Field | Description |
| --- | --- |
| `count` | The total amount of results. |
| `next` | URL to the next page. |
| `previous` | URL to the previous page. |
| `results` |  |

Operations: load.

API path: `/api/notifications/{workspace_id}/`

#### PaginationSerializerRowComment

| Field | Description |
| --- | --- |
| `count` | The total amount of results. |
| `id` |  |
| `next` | URL to the next page. |
| `previous` | URL to the previous page. |
| `results` |  |

Operations: load.

API path: `/api/row_comments/{table_id}/{row_id}/`

#### PaginationSerializerTrashContent

| Field | Description |
| --- | --- |
| `count` | The total amount of results. |
| `next` | URL to the next page. |
| `previous` | URL to the previous page. |
| `results` |  |

Operations: load.

API path: `/api/trash/workspace/{workspace_id}/`

#### PaginationSerializerWithGalleryViewFieldOptionsExampleRow

| Field | Description |
| --- | --- |
| `count` | The total amount of results. |
| `field_options` | An object containing the field id as key and the properties related to view as value. |
| `next` | URL to the next page. |
| `previous` | URL to the previous page. |
| `results` |  |
| `row_metadata` | An object keyed by row id with a value being an object containing additional metadata about that row. |

Operations: load.

API path: `/api/database/views/gallery/{view_id}/`

#### PaginationSerializerWithGridViewFieldOptionsExampleRow

| Field | Description |
| --- | --- |
| `count` | The total amount of results. |
| `field_options` | An object containing the field id as key and the properties related to view as value. |
| `next` | URL to the next page. |
| `previous` | URL to the previous page. |
| `results` |  |
| `row_metadata` | An object keyed by row id with a value being an object containing additional metadata about that row. |

Operations: load.

API path: `/api/database/views/grid/{view_id}/`

#### PaginationSerializerWithTimelineViewFieldOptionsExampleRow

| Field | Description |
| --- | --- |
| `count` | The total amount of results. |
| `field_options` | An object containing the field id as key and the properties related to view as value. |
| `next` | URL to the next page. |
| `previous` | URL to the previous page. |
| `results` |  |
| `row_metadata` | An object keyed by row id with a value being an object containing additional metadata about that row. |

Operations: load.

API path: `/api/database/views/timeline/{view_id}/`

#### PasswordFieldAuthentication

| Field | Description |
| --- | --- |
| `field_id` | The field where to check the password for. |
| `is_correct` | Indicates whether the provided password is correct. |
| `password` | The password to check. |
| `row_id` | The row where to check the password for. |

Operations: create.

API path: `/api/database/fields/password-authentication/`

#### PeriodicDataSyncInterval

| Field | Description |
| --- | --- |
| `automatically_deactivated` | Indicates whether the periodic data sync has been deactivated. |
| `interval` | * `MANUAL` - MANUAL * `DAILY` - DAILY * `HOURLY` - HOURLY |
| `when` |  |

Operations: load, update.

API path: `/api/data-sync/{data_sync_id}/periodic-interval/`

#### Permission

| Field | Description |
| --- | --- |
| `name` | The permission manager name. |
| `permissions` | The content of the permission object for this permission manager. |

Operations: list.

API path: `/api/workspaces/{workspace_id}/permissions/`

#### PublicBuilderWorkflowActionTypeBuilderWorkflowAction

| Field | Description |
| --- | --- |

Operations: list.

API path: `/api/builder/domains/published/page/{page_id}/workflow_actions/`

#### PublicFormView

| Field | Description |
| --- | --- |
| `condition_groups` |  |
| `condition_type` | Indicates whether all (AND) or any (OR) of the conditions should match before shown. |
| `conditions` |  |
| `description` | If provided, then this value be will be shown under the field name. |
| `field` | The properties of the related field. |
| `field_component` | Indicates which field input component is used in the form. |
| `groups` |  |
| `name` | If provided, then this value will be visible above the field input. |
| `order` | The order that the field has in the form. |
| `required` | Indicates whether the field is required for the visitor to fill out. |
| `show_when_matching_conditions` | Indicates whether this field is visible when the conditions are met. |

Operations: list.

API path: `/api/database/views/form/{slug}/submit/`

#### PublicPaginationSerializerWithGalleryViewFieldOptions

| Field | Description |
| --- | --- |
| `field_1` | This field represents the `text` field. |
| `field_10` | This field represents the `last_modified_by` field. |
| `field_11` | This field represents the `created_on` field. |
| `field_12` | This field represents the `created_by` field. |
| `field_13` | This field represents the `duration` field. |
| `field_14` | This field represents the `link_row` field. |
| `field_15` | This field represents the `file` field. |
| `field_16` | This field represents the `single_select` field. |
| `field_17` | This field represents the `multiple_select` field. |
| `field_18` | This field represents the `phone_number` field. |
| `field_19` | This field represents the `formula` field. |
| `field_2` | This field represents the `long_text` field. |
| `field_20` | This field represents the `count` field. |
| `field_21` | This field represents the `rollup` field. |
| `field_22` | This field represents the `lookup` field. |
| `field_23` | This field represents the `multiple_collaborators` field. |
| `field_24` | This field represents the `uuid` field. |
| `field_25` | This field represents the `autonumber` field. |
| `field_26` | This field represents the `password` field. |
| `field_27` | This field represents the `form_view_edit_row` field. |
| `field_28` | This field represents the `button` field. |
| `field_29` | This field represents the `ai` field. |
| `field_3` | This field represents the `url` field. |
| `field_4` | This field represents the `email` field. |
| `field_5` | This field represents the `number` field. |
| `field_6` | This field represents the `rating` field. |
| `field_7` | This field represents the `boolean` field. |
| `field_8` | This field represents the `date` field. |
| `field_9` | This field represents the `last_modified` field. |
| `id` | The unique identifier of the row in the table. |
| `metadata` | Additional metadata for the row, if `include=metadata' is provided as query parameter. |
| `order` | Indicates the position of the row, lowest first and highest last. |

Operations: list.

API path: `/api/database/views/gallery/{slug}/public/rows/`

#### PublicPaginationSerializerWithGridViewFieldOptionsExample

| Field | Description |
| --- | --- |
| `field_1` | This field represents the `text` field. |
| `field_10` | This field represents the `last_modified_by` field. |
| `field_11` | This field represents the `created_on` field. |
| `field_12` | This field represents the `created_by` field. |
| `field_13` | This field represents the `duration` field. |
| `field_14` | This field represents the `link_row` field. |
| `field_15` | This field represents the `file` field. |
| `field_16` | This field represents the `single_select` field. |
| `field_17` | This field represents the `multiple_select` field. |
| `field_18` | This field represents the `phone_number` field. |
| `field_19` | This field represents the `formula` field. |
| `field_2` | This field represents the `long_text` field. |
| `field_20` | This field represents the `count` field. |
| `field_21` | This field represents the `rollup` field. |
| `field_22` | This field represents the `lookup` field. |
| `field_23` | This field represents the `multiple_collaborators` field. |
| `field_24` | This field represents the `uuid` field. |
| `field_25` | This field represents the `autonumber` field. |
| `field_26` | This field represents the `password` field. |
| `field_27` | This field represents the `form_view_edit_row` field. |
| `field_28` | This field represents the `button` field. |
| `field_29` | This field represents the `ai` field. |
| `field_3` | This field represents the `url` field. |
| `field_4` | This field represents the `email` field. |
| `field_5` | This field represents the `number` field. |
| `field_6` | This field represents the `rating` field. |
| `field_7` | This field represents the `boolean` field. |
| `field_8` | This field represents the `date` field. |
| `field_9` | This field represents the `last_modified` field. |
| `id` | The unique identifier of the row in the table. |
| `metadata` | Additional metadata for the row, if `include=metadata' is provided as query parameter. |
| `order` | Indicates the position of the row, lowest first and highest last. |

Operations: list.

API path: `/api/database/views/grid/{slug}/public/rows/`

#### PublicPaginationSerializerWithTimelineViewFieldOptions

| Field | Description |
| --- | --- |
| `field_1` | This field represents the `text` field. |
| `field_10` | This field represents the `last_modified_by` field. |
| `field_11` | This field represents the `created_on` field. |
| `field_12` | This field represents the `created_by` field. |
| `field_13` | This field represents the `duration` field. |
| `field_14` | This field represents the `link_row` field. |
| `field_15` | This field represents the `file` field. |
| `field_16` | This field represents the `single_select` field. |
| `field_17` | This field represents the `multiple_select` field. |
| `field_18` | This field represents the `phone_number` field. |
| `field_19` | This field represents the `formula` field. |
| `field_2` | This field represents the `long_text` field. |
| `field_20` | This field represents the `count` field. |
| `field_21` | This field represents the `rollup` field. |
| `field_22` | This field represents the `lookup` field. |
| `field_23` | This field represents the `multiple_collaborators` field. |
| `field_24` | This field represents the `uuid` field. |
| `field_25` | This field represents the `autonumber` field. |
| `field_26` | This field represents the `password` field. |
| `field_27` | This field represents the `form_view_edit_row` field. |
| `field_28` | This field represents the `button` field. |
| `field_29` | This field represents the `ai` field. |
| `field_3` | This field represents the `url` field. |
| `field_4` | This field represents the `email` field. |
| `field_5` | This field represents the `number` field. |
| `field_6` | This field represents the `rating` field. |
| `field_7` | This field represents the `boolean` field. |
| `field_8` | This field represents the `date` field. |
| `field_9` | This field represents the `last_modified` field. |
| `id` | The unique identifier of the row in the table. |
| `metadata` | Additional metadata for the row, if `include=metadata' is provided as query parameter. |
| `order` | Indicates the position of the row, lowest first and highest last. |

Operations: list.

API path: `/api/database/views/timeline/{slug}/public/rows/`

#### PublicViewAuth

| Field | Description |
| --- | --- |
| `access_token` |  |
| `password` |  |

Operations: create.

API path: `/api/database/views/{slug}/public/auth/`

#### PublicViewInfo

| Field | Description |
| --- | --- |
| `database_id` |  |
| `db_index` | If true, then an index will be added to the Baserow field to increase lookup and filter speed. |
| `description` | Field description |
| `field_constraints` | The constraints applied to this field. |
| `id` |  |
| `immutable_properties` | Indicates whether the field properties are immutable. |
| `immutable_type` | Indicates whether the field type is immutable. |
| `name` |  |
| `order` | Lowest first. |
| `primary` | Indicates if the field is a primary field. |
| `read_only` | Indicates whether the field is a read only field. |
| `table_id` |  |
| `type` | The type of the related field. |
| `workspace_id` |  |

Operations: list.

API path: `/api/database/views/{slug}/public/info/`

#### RelatedField

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/api/database/fields/{field_id}/`

#### RowComment

| Field | Description |
| --- | --- |
| `created_on` |  |
| `edited` |  |
| `first_name` |  |
| `id` |  |
| `message` | The rich text comment content. |
| `row_id` | The id of the row the comment is for. |
| `table_id` | The table the row this comment is for is found in. |
| `trashed` |  |
| `updated_on` |  |
| `user_id` | The user who made the comment. |

Operations: create, remove, update.

API path: `/api/row_comments/{table_id}/{row_id}/`

#### RowHistory

| Field | Description |
| --- | --- |
| `action_command_type` | The type of command that was performed. |
| `action_type` | The type of the action that was performed. |
| `after` | The mapping between field_ids and values for the row after the action was performed. |
| `before` | The mapping between field_ids and values for the row before the action was performed. |
| `fields_metadata` | The metadata of the fields that were changed. |
| `id` |  |
| `timestamp` | The timestamp of the action that was performed. |
| `user` | The user that performed the action. |

Operations: list.

API path: `/api/database/rows/table/{table_id}/{row_id}/history/`

#### SecureFileServe

| Field | Description |
| --- | --- |

Operations: load.

API path: `/api/files/{signed_data}`

#### Setting

| Field | Description |
| --- | --- |
| `account_deletion_grace_delay` | Number of days after the last login for an account pending deletion to be deleted |
| `allow_global_workspace_creation` | Indicates whether all users can create workspaces, or just staff. |
| `allow_new_signups` | Indicates whether new users can create a new account when signing up. |
| `allow_reporting_abuse` | Indicates whether anonymous visitors can report publicly shared resources, like views and forms, for abuse. |
| `allow_reset_password` | Indicates whether users can request a password reset link. |
| `allow_signups_via_workspace_invitations` | Indicates whether invited users can create an account when signing up, even if allow_new_signups is disabled. |
| `co_branding_logo` | Co-branding logo that's placed next to the Baserow logo (176x29). |
| `email_verification` | Controls whether user email addresses have to be verified. |
| `inbound_email_enabled` | Whether this instance is configured to receive inbound email for the automation email trigger. |
| `show_admin_signup_page` | Indicates that there are no admin users in the database yet, so in the frontend the signup form will be shown instead of the login page. |
| `show_baserow_help_request` | Indicates whether the `We need your help!` message will be shown on the dashboard |
| `track_workspace_usage` | Runs a job once per day which calculates per workspace row counts and file storage usage, displayed on the admin workspace page. |
| `verify_import_signature` | Indicates whether the signature of imported files should be verified. |

Operations: load, update.

API path: `/api/settings/`

#### Snapshot

| Field | Description |
| --- | --- |
| `created_at` |  |
| `created_by` |  |
| `created_on` |  |
| `error_code` | A machine readable error code indicating why the job failed. |
| `human_readable_error` | A human readable error message indicating what went wrong. |
| `id` |  |
| `name` |  |
| `progress_percentage` | A percentage indicating how far along the job is. |
| `snapshot_from_application` |  |
| `state` | Indicates the state of the import job. |
| `type` | The type of the job. |
| `updated_on` |  |

Operations: create, load, remove.

API path: `/api/snapshots/application/{application_id}/`

#### Table

| Field | Description |
| --- | --- |
| `active` | Indicates whether the web hook is active. |
| `calls` | All the calls that this webhook made. |
| `created_on` |  |
| `data` | A list of rows that needs to be created as initial table data. |
| `data_sync` |  |
| `database_id` |  |
| `event_config` | A list containing the addition event options. |
| `events` | A list containing the events that will trigger this webhook. |
| `failed_triggers` | The amount of failed webhook calls. |
| `first_row_header` | Indicates if the first provided row is the header. |
| `headers` | The additional headers as an object where the key is the name and the value the value. |
| `id` |  |
| `importer_type` | The frontend importer identifier used to parse the file. |
| `include_all_events` | Indicates whether this webhook should listen to all events. |
| `name` | An internal name of the webhook. |
| `order` | Lowest first. |
| `original_file_name` | The original name of the uploaded file. |
| `request_method` | The request method that be used when the event occurs. |
| `updated_on` |  |
| `url` | The URL that must be called when the webhook is triggered. |
| `use_user_field_names` | Indicates whether the field names must be used as payload key instead of the id. |

Operations: create, load, update.

API path: `/api/database/data-sync/database/{database_id}/`

#### TableWebhook

| Field | Description |
| --- | --- |
| `active` | Indicates whether the web hook is active. |
| `calls` | All the calls that this webhook made. |
| `created_on` |  |
| `event_config` | A list containing the addition event options. |
| `events` | A list containing the events that will trigger this webhook. |
| `failed_triggers` | The amount of failed webhook calls. |
| `headers` | The additional headers as an object where the key is the name and the value the value. |
| `id` |  |
| `include_all_events` | Indicates whether this webhook should listen to all events. |
| `name` | An internal name of the webhook. |
| `request_method` | The request method that be used when the event occurs. |
| `updated_on` |  |
| `url` | The URL that must be called when the webhook is triggered. |
| `use_user_field_names` | Indicates whether the field names must be used as payload key instead of the id. |

Operations: load, update.

API path: `/api/database/webhooks/{webhook_id}/`

#### TableWebhookTestCall

| Field | Description |
| --- | --- |
| `event_type` | The event type that must be used for the test call. |
| `headers` | The additional headers as an object where the key is the name and the value the value. |
| `id` |  |
| `is_unreachable` | Indicates whether the provided URL could be reached. |
| `request` | A text copy of the request headers and body. |
| `request_method` | The request method that be used when the event occurs. |
| `response` | A text copy of the response headers and body. |
| `status_code` | The HTTP response status code. |
| `url` | The URL that must be called when the webhook is triggered. |
| `use_user_field_names` | Indicates whether the field names must be used as payload key instead of the id. |

Operations: create.

API path: `/api/database/webhooks/table/{table_id}/test-call/`

#### TableWithoutDataSync

| Field | Description |
| --- | --- |
| `database_id` |  |
| `id` |  |
| `name` |  |
| `order` | Lowest first. |

Operations: list.

API path: `/api/database/tables/all-tables/`

#### Team

| Field | Description |
| --- | --- |
| `created_on` |  |
| `default_role` | The uid of the role this team has in its workspace. |
| `id` |  |
| `name` | A human friendly name for this team. |
| `subject_count` | The amount of subjects (e.g. |
| `subject_sample` | A sample, by default 10, of the most recent subjects to join this team. |
| `subjects` | An array of subject ID/type objects to be used during team create and update. |
| `updated_on` |  |
| `workspace` | The workspace that this team belongs to. |

Operations: create, load, remove, update.

API path: `/api/teams/workspace/{workspace_id}/`

#### TeamSubject

| Field | Description |
| --- | --- |
| `id` |  |
| `subject_id` | The unique subject ID. |
| `subject_type` | Returns the TeamSubject's `subject_type` natural key. |
| `subject_user_email` | The user subject's email address. |
| `team` | The team this subject belongs to. |

Operations: create, list, load.

API path: `/api/teams/{team_id}/subjects/`

#### Template

| Field | Description |
| --- | --- |
| `created_on` |  |
| `error_code` | A machine readable error code indicating why the job failed. |
| `human_readable_error` | A human readable error message indicating what went wrong. |
| `id` |  |
| `installed_applications` |  |
| `name` |  |
| `progress_percentage` | A percentage indicating how far along the job is. |
| `state` | Indicates the state of the import job. |
| `template` |  |
| `templates` |  |
| `type` | The type of the job. |
| `updated_on` |  |
| `workspace` |  |

Operations: create, list.

API path: `/api/templates/install/{workspace_id}/{template_id}/async/`

#### Token

| Field | Description |
| --- | --- |
| `id` |  |
| `key` | The unique token key that can be used to authorize for the table row endpoints. |
| `name` | The human readable name of the database token for the user. |
| `permissions` | Indicates per operation which permissions the database token has within the whole workspace. |
| `rotate_key` | Indicates if a new key must be generated. |
| `workspace` | Only the tables of the workspace can be accessed. |

Operations: create, list, load, update.

API path: `/api/database/tokens/`

#### Trash

| Field | Description |
| --- | --- |
| `applications` |  |
| `id` |  |
| `name` |  |
| `trashed` |  |

Operations: list, remove, update.

API path: `/api/trash/`

#### TwoFactorAuthTypeTwoFactorAuth

| Field | Description |
| --- | --- |

Operations: create, load.

API path: `/api/two-factor-auth/configuration/`

#### Type

| Field | Description |
| --- | --- |
| `array_formula_type` |  |
| `date_force_timezone` | Force a timezone for the field overriding user profile settings. |
| `date_format` | EU (day/month/year), US (month/day/year), or ISO (year-month-day) * `EU` - European (D/M/Y) * `US` - US (M/D/Y) * `ISO` - ISO (Y-M-D) |
| `date_include_time` | Indicates if the field also includes a time. |
| `date_show_tzinfo` | Indicates if the time zone should be shown. |
| `date_time_format` | 24 (14:30) or 12 (02:30 PM) * `24` - 24 hour * `12` - 12 hour |
| `duration_format` | The format of the duration. |
| `error` |  |
| `formula` |  |
| `formula_type` | * `invalid` - invalid * `text` - text * `char` - char * `button` - button * `link` - link * `date_interval` - date_interval * `duration` - duration * `date` - date * `boolean` - boolean * `number` - number * `array` - array *… |
| `name` |  |
| `nullable` |  |
| `number_decimal_places` | The amount of digits allowed after the point. |
| `number_prefix` | The prefix to use for the field. |
| `number_separator` | The thousand and decimal separator to use for the field. |
| `number_suffix` | The suffix to use for the field. |

Operations: create.

API path: `/api/database/formula/{table_id}/type/`

#### UniqueRowValue

| Field | Description |
| --- | --- |
| `values` |  |

Operations: list.

API path: `/api/database/fields/{field_id}/unique_row_values/`

#### UpdateFieldPermission

| Field | Description |
| --- | --- |
| `allow_in_forms` | Whether to allow this field to be shown in forms. |
| `can_write_values` | Whether the user can write values to this field. |
| `field_id` | The ID of the field whose permissions were updated. |
| `id` |  |
| `role` | The role required to update the data for this field. |
| `subjects` |  |

Operations: load, update.

API path: `/api/field-permissions/{field_id}/`

#### User

| Field | Description |
| --- | --- |
| `authenticate` | Indicates whether an authentication JWT should be generated and be included in the response. |
| `captcha_token` | The captcha response token, required when captcha is enabled. |
| `date_joined` |  |
| `email` | The email address is also going to be the username. |
| `id` |  |
| `is_active` | Designates whether this user should be treated as active. |
| `is_staff` | Designates whether this user is an admin and has access to all workspaces and Baserow's admin areas. |
| `language` | An ISO 639 language code (with optional variant) selected by the user. |
| `last_login` |  |
| `name` |  |
| `password` |  |
| `template_id` | The id of the template that must be installed after creating the account. |
| `two_factor_auth` | The user's two factor auth provider state, or null when no provider is configured. |
| `username` |  |
| `workspace_invitation_token` | If provided and valid, the user accepts the workspace invitation and will have access to the workspace after signing up. |
| `workspaces` |  |

Operations: create, list, update.

API path: `/api/admin/users/`

#### UserFile

| Field | Description |
| --- | --- |
| `image_height` |  |
| `image_width` |  |
| `is_image` |  |
| `mime_type` |  |
| `name` |  |
| `original_name` |  |
| `size` |  |
| `thumbnails` |  |
| `uploaded_at` |  |
| `url` |  |

Operations: create.

API path: `/api/database/views/form/{slug}/upload-file/`

#### UserSource

| Field | Description |
| --- | --- |
| `RelayState` | The frontend URL where redirect the authenticated user. |
| `SAMLResponse` | The encoded SAML response from the IdP. |
| `access_token` | 'access_token' can be used to authorize for other endpoints that require authorization. |
| `id` |  |
| `refresh` |  |

Operations: create, list, load, remove, update.

API path: `/api/application/{application_id}/user-sources/`

#### UserSourceUserSource

| Field | Description |
| --- | --- |
| `id` |  |

Operations: update.

API path: `/api/user-source/{user_source_id}/move/`

#### UserSourceUserSourceRole

| Field | Description |
| --- | --- |

Operations: load.

API path: `/api/application/{application_id}/user-sources/roles/`

#### UserWorkspaceInvitation

| Field | Description |
| --- | --- |
| `created_on` |  |
| `email` | The email address of the user that the invitation is meant for. |
| `email_exists` |  |
| `id` |  |
| `invited_by` |  |
| `workspace` |  |
| `workspace_id` |  |

Operations: load.

API path: `/api/workspaces/invitations/token/{token}/`

#### UsersPerUserSource

| Field | Description |
| --- | --- |

Operations: load.

API path: `/api/application/{application_id}/list-user-source-users/`

#### View

| Field | Description |
| --- | --- |
| `allow_public_export` | Indicates whether it's allowed to export a publicly shared view. |
| `decorations` |  |
| `default_row_values` |  |
| `filter_groups` |  |
| `filter_type` | Indicates whether all the rows should apply to all filters (AND) or to any filter (OR). |
| `filters` |  |
| `filters_disabled` | Allows users to see results unfiltered while still keeping the filters saved for the view. |
| `group_bys` |  |
| `id` |  |
| `name` |  |
| `order` |  |
| `owned_by_id` |  |
| `ownership_type` |  |
| `public_view_has_password` | Indicates whether the public view is password protected or not. |
| `show_logo` |  |
| `sortings` |  |
| `table` |  |
| `table_id` |  |
| `type` |  |

Operations: load, update.

API path: `/api/database/views/{view_id}/`

#### ViewDefaultValue

| Field | Description |
| --- | --- |
| `id` |  |
| `view_default_values` |  |

Operations: update.

API path: `/api/database/views/{view_id}/default-values/`

#### ViewFieldOption

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load, update.

API path: `/api/database/views/{view_id}/field-options/`

#### ViewFilter

| Field | Description |
| --- | --- |
| `field` | The field of which the value must be compared to the filter value. |
| `group` | The id of the filter group this filter belongs to. |
| `id` |  |
| `preload_values` | Can contain unique preloaded values per filter. |
| `type` | Indicates how the field's value must be compared to the filter's value. |
| `value` | The filter value that must be compared to the field's value. |
| `view` | The view to which the filter applies. |

Operations: create, list, load, update.

API path: `/api/database/views/{view_id}/filters/`

#### ViewFilterGroup

| Field | Description |
| --- | --- |
| `filter_type` | Indicates whether all the rows should apply to all filters (AND) or to any filter (OR) in the group to be shown. |
| `id` |  |
| `parent_group` |  |
| `view` | The view to which the filter group applies to. |

Operations: create, load, update.

API path: `/api/database/views/{view_id}/filter-groups/`

#### ViewGroupBy

| Field | Description |
| --- | --- |
| `field` | The field that must be grouped by. |
| `id` |  |
| `order` | Indicates the sort order direction. |
| `priority` | Position of this group by in the ordering chain. |
| `type` | Indicates the sort type. |
| `view` | The view to which the group by applies. |
| `width` | The pixel width of the group by in the related view. |

Operations: create, list, load, update.

API path: `/api/database/views/{view_id}/group_bys/`

#### ViewSort

| Field | Description |
| --- | --- |
| `field` | The field that must be sorted on. |
| `id` |  |
| `order` | Indicates the sort order direction. |
| `priority` | Position of this sorting in the ordering chain. |
| `type` | Indicates the sort type. |
| `view` | The view to which the sort applies. |

Operations: create, list, load, update.

API path: `/api/database/views/{view_id}/sortings/`

#### ViewView

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, load.

API path: `/api/database/views/calendar/{view_id}/ical_slug_rotate/`

#### Workspace

| Field | Description |
| --- | --- |
| `ai_features` |  |
| `base_url` | The base URL where the user can publicly accept his invitation. |
| `captcha_token` | The captcha response token, required when captcha is enabled. |
| `created_on` |  |
| `email` | The email address of the user that the invitation is meant for. |
| `generative_ai_models_enabled` | Generative AI models available in this workspace. |
| `has_more` | Whether there are more results available for pagination |
| `highest_role_uid` | Enterprise or advanced only: the highest role uid assigned to this user in this workspace on anything, including roles from teams. |
| `id` | Workspace id. |
| `name` | User defined name. |
| `order` | The requesting user's order within the workspace users. |
| `permissions` | The permissions that the user is going to get within the workspace after accepting the invitation. |
| `results` | Priority-ordered search results |
| `role_uid` | Enterprise or advanced only: the uid of the role that is assigned to this workspace user in this workspace. |
| `teams` | Enterprise only: a list of team IDs and names, which this workspace user belongs to in this workspace. |
| `to_be_deleted` | True if user account is pending deletion. |
| `two_factor_auth` |  |
| `unread_notifications_count` | The number of unread notifications for the requesting user. |
| `user_id` | The user that has access to the workspace. |
| `users` | List of all workspace users. |
| `workspace` | The workspace that the user will get access to once the invitation is accepted. |

Operations: create, list, load, remove, update.

API path: `/api/workspaces/invitations/workspace/{workspace_id}/`

#### WorkspaceInvitation

| Field | Description |
| --- | --- |
| `created_on` |  |
| `email` | The email address of the user that the invitation is meant for. |
| `id` |  |
| `permissions` | The permissions that the user is going to get within the workspace after accepting the invitation. |
| `workspace` | The workspace that the user will get access to once the invitation is accepted. |

Operations: create, load, remove, update.

API path: `/api/workspaces/invitations/{workspace_invitation_id}/reject/`

#### WorkspaceStructure

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `tables` |  |

Operations: load.

API path: `/api/admin/data-scanner/workspace-structure/{workspace_id}/`

#### WorkspaceUser

| Field | Description |
| --- | --- |
| `created_on` |  |
| `email` | User email. |
| `id` |  |
| `name` | User defined name. |
| `permissions` | The permissions that the user has within the workspace. |
| `to_be_deleted` | True if user account is pending deletion. |
| `two_factor_auth` |  |
| `user_id` | The user that has access to the workspace. |
| `workspace` | The workspace that the user has access to. |

Operations: update.

API path: `/api/workspaces/users/{workspace_user_id}/`

#### WorkspaceUserWorkspace

| Field | Description |
| --- | --- |
| `ai_features` |  |
| `generative_ai_models_enabled` | Generative AI models available in this workspace. |
| `id` | Workspace id. |
| `name` | Workspace name. |
| `order` | The requesting user's order within the workspace users. |
| `permissions` | The requesting user's permissions for the workspace. |
| `unread_notifications_count` | The number of unread notifications for the requesting user. |
| `users` | List of all workspace users. |

Operations: create.

API path: `/api/workspaces/invitations/{workspace_invitation_id}/accept/`



## Entities


### AbuseReport

Create an instance: `const abuse_report = client.AbuseReport()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `captcha_token` | `string` | The captcha response token, required when captcha is enabled. |
| `description` | `string` | A detailed description of why the resource is abusive. |
| `email` | `string` | The email address of the person reporting the abuse. |
| `identifier` | `string` | The public identifier of the reported resource, for example the slug of a publicly shared view. |
| `name` | `string` | The name of the person reporting the abuse. |
| `resource_type` | `string` | The type of publicly shared resource that is being reported. |

#### Example: Create

```ts
const abuse_report = await client.AbuseReport().create({
  description: 'example_description',
  email: 'example_email',
  identifier: 'example_identifier',
  name: 'example_name',
  resource_type: 'example_resource_type',
})
```


### Admin

Create an instance: `const admin = client.Admin()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_token` | `string` | 'access_token' can be used to authorize for other endpoints that require authorization. |
| `application_count` | `number` |  |
| `application_users` | `number` | The amount of application builder users permitted in this license. |
| `application_users_taken` | `number` | The amount of application builder users used so far in this license. |
| `created_on` | `string` |  |
| `free_users` | `number` |  |
| `free_users_count` | `number` | The amount of free users that are currently using the license. |
| `id` | `number` |  |
| `is_active` | `boolean` | Indicates if the backend deems the license valid. |
| `issued_on` | `string` | The date when the license was issued. |
| `issued_to_email` | `string` | Indicates to which email address the license has been issued. |
| `issued_to_name` | `string` | Indicates to whom the license has been issued. |
| `last_check` | `string` |  |
| `license` | `string` | The license that you want to register. |
| `license_id` | `string` | Unique identifier of the license. |
| `name` | `string` |  |
| `product_code` | `string` | The product code that indicates what the license unlocks. |
| `row_count` | `number` |  |
| `seats` | `number` | The maximum amount of users that can use the license. |
| `seats_taken` | `number` | The amount of users that are currently using the license. |
| `storage_usage` | `number` |  |
| `token` | `string` | Deprecated. |
| `user` | `Record<string, any>` | An object containing information related to the user. |
| `users` | `any[]` |  |
| `valid_from` | `string` | From which timestamp the license becomes active. |
| `valid_through` | `string` | Until which timestamp the license is active. |

#### Example: List

```ts
const admins = await client.Admin().list()
```

#### Example: Create

```ts
const admin = await client.Admin().create({
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


### AdminDashboard

Create an instance: `const admin_dashboard = client.AdminDashboard()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active_users_last_24_hours` | `number` |  |
| `active_users_last_30_days` | `number` |  |
| `active_users_last_7_days` | `number` |  |
| `active_users_per_day` | `any[]` |  |
| `new_users_last_24_hours` | `number` |  |
| `new_users_last_30_days` | `number` |  |
| `new_users_last_7_days` | `number` |  |
| `new_users_per_day` | `any[]` |  |
| `previous_active_users_last_24_hours` | `number` |  |
| `previous_active_users_last_30_days` | `number` |  |
| `previous_active_users_last_7_days` | `number` |  |
| `previous_new_users_last_24_hours` | `number` |  |
| `previous_new_users_last_30_days` | `number` |  |
| `previous_new_users_last_7_days` | `number` |  |
| `total_applications` | `number` |  |
| `total_users` | `number` |  |
| `total_workspaces` | `number` |  |

#### Example: List

```ts
const admin_dashboards = await client.AdminDashboard().list()
```


### AdminDataScanner

Create an instance: `const admin_data_scanner = client.AdminDataScanner()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` | The date and time when the export job was created. |
| `csv_column_separator` | `string` | The value used to separate columns in the resulting csv file. |
| `csv_first_row_header` | `boolean` | Whether or not to generate a header row at the top of the csv file. |
| `database_id` | `string` |  |
| `database_name` | `string` |  |
| `export_charset` | `string` | The character set to use when creating the export file. |
| `exported_file_name` | `string` | The name of the file that was created by the export job. |
| `field_name` | `string` |  |
| `filter_scan_id` | `number` | Optional: Filter results by scan ID. |
| `first_identified_on` | `string` |  |
| `frequency` | `string` | * `manual` - Manual * `hourly` - Hourly * `daily` - Daily * `weekly` - Weekly |
| `id` | `number` |  |
| `is_running` | `boolean` |  |
| `last_error` | `string` |  |
| `last_identified_on` | `string` |  |
| `last_run_finished_at` | `string` |  |
| `last_run_started_at` | `string` |  |
| `list_items` | `string` |  |
| `matched_value` | `string` |  |
| `name` | `string` |  |
| `pattern` | `string` |  |
| `results_count` | `string` |  |
| `row_id` | `number` |  |
| `scan_all_workspaces` | `boolean` |  |
| `scan_id` | `number` |  |
| `scan_name` | `string` |  |
| `scan_type` | `string` | * `pattern` - Pattern * `list_of_values` - List of values * `list_table` - List Table |
| `source_database_id` | `string` |  |
| `source_field_id` | `string` |  |
| `source_table_id` | `string` |  |
| `source_workspace_id` | `string` |  |
| `table_id` | `number` |  |
| `table_name` | `string` |  |
| `updated_on` | `string` |  |
| `url` | `string` | The URL to download the exported file. |
| `whole_words` | `boolean` |  |
| `workspace_ids` | `string` |  |
| `workspace_name` | `string` |  |

#### Example: List

```ts
const admin_data_scanners = await client.AdminDataScanner().list()
```

#### Example: Create

```ts
const admin_data_scanner = await client.AdminDataScanner().create({
  first_identified_on: 'example_first_identified_on',
  last_identified_on: 'example_last_identified_on',
  matched_value: 'example_matched_value',
  name: 'example_name',
  row_id: 1,
  scan_type: 'example_scan_type',
})
```


### AdminView

Create an instance: `const admin_view = client.AdminView()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `database_id` | `number` |  |
| `database_name` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `owned_by_id` | `number` |  |
| `owned_by_username` | `string` |  |
| `ownership_type` | `string` | Indicates how the access to the view is determined. |
| `public` | `boolean` | Indicates whether the view is publicly accessible to visitors. |
| `public_view_has_password` | `boolean` |  |
| `slug` | `string` | The unique slug where the view can be accessed publicly on. |
| `table_id` | `number` |  |
| `table_name` | `string` |  |
| `type` | `string` |  |
| `workspace_id` | `number` |  |
| `workspace_name` | `string` |  |

#### Example: List

```ts
const admin_views = await client.AdminView().list()
```

#### Example: Create

```ts
const admin_view = await client.AdminView().create({
  view_id: 1,
  name: 'example_name',
})
```


### AdminWorkspaceOption

Create an instance: `const admin_workspace_option = client.AdminWorkspaceOption()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `value` | `string` |  |

#### Example: List

```ts
const admin_workspace_options = await client.AdminWorkspaceOption().list()
```


### Agent

Create an instance: `const agent = client.Agent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `id` | `number` |  |
| `last_active` | `string` |  |
| `name` | `string` |  |
| `role_uid` | `string` |  |
| `team_ids` | `any[]` |  |
| `teams` | `any[]` |  |
| `updated_on` | `string` |  |
| `workspace_id` | `number` |  |

#### Example: Create

```ts
const agent = await client.Agent().create({
  workspace_id: 1,
  name: 'example_name',
})
```


### AgentPaginationAgent

Create an instance: `const agent_pagination_agent = client.AgentPaginationAgent()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` | The total amount of results. |
| `next` | `string` | URL to the next page. |
| `previous` | `string` | URL to the previous page. |
| `results` | `any[]` |  |

#### Example: Load

```ts
const agent_pagination_agent = await client.AgentPaginationAgent().load({ workspace_id: 1 })
```


### AiAssistant

Create an instance: `const ai_assistant = client.AiAssistant()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` | The content of the message. |
| `ui_context` | `any` | The UI context related to what the user was looking at when the message was sent. |

#### Example: Create

```ts
const ai_assistant = await client.AiAssistant().create({
  chat_id: 'example_chat_id',
  content: 'example_content',
  ui_context: 'example_ui_context',
})
```


### AiProvider

Create an instance: `const ai_provider = client.AiProvider()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key` | `string` |  |
| `extra_settings` | `Record<string, any>` |  |
| `id` | `string` |  |
| `is_active` | `boolean` |  |
| `models` | `any[]` |  |
| `provider_type` | `string` |  |

#### Example: List

```ts
const ai_providers = await client.AiProvider().list()
```

#### Example: Create

```ts
const ai_provider = await client.AiProvider().create({
  provider_type: 'example_provider_type',
})
```


### AiProviderFeatureSetting

Create an instance: `const ai_provider_feature_setting = client.AiProviderFeatureSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `feature_type` | `string` |  |
| `inherited_model` | `any` |  |
| `inherited_state` | `any` | The state of the instance selection this workspace inherits, or null at instance scope. |
| `mode` | `string` | * `inherit` - inherit * `legacy` - legacy * `model` - model * `disabled` - disabled |
| `model` | `any` |  |
| `model_id` | `number` |  |
| `state` | `string` | * `configured` - configured * `inherited` - inherited * `overridden` - overridden * `disabled` - disabled * `unconfigured` - unconfigured * `invalid` - invalid |

#### Example: List

```ts
const ai_provider_feature_settings = await client.AiProviderFeatureSetting().list()
```


### AiProviderModel

Create an instance: `const ai_provider_model = client.AiProviderModel()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `feature_types` | `any[]` | The AI features allowed to select this model. |
| `id` | `number` |  |
| `is_enabled` | `boolean` |  |
| `last_test_at` | `string` |  |
| `last_test_error` | `string` |  |
| `last_test_feature_results` | `any[]` |  |
| `last_test_status` | `any` |  |
| `model_identifier` | `string` |  |

#### Example: Create

```ts
const ai_provider_model = await client.AiProviderModel().create({
  id: 1,
  model_identifier: 'example_model_identifier',
})
```


### AiProviderModelDiscovery

Create an instance: `const ai_provider_model_discovery = client.AiProviderModelDiscovery()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `models` | `any[]` |  |
| `supported` | `boolean` |  |

#### Example: List

```ts
const ai_provider_model_discoverys = await client.AiProviderModelDiscovery().list({ provider_type: "example" })
```


### AiProviderModelUsageEntry

Create an instance: `const ai_provider_model_usage_entry = client.AiProviderModelUsageEntry()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` |  |
| `feature_type` | `string` |  |

#### Example: List

```ts
const ai_provider_model_usage_entrys = await client.AiProviderModelUsageEntry().list({ model_id: 1 })
```


### AiProviderModelsTest

Create an instance: `const ai_provider_models_test = client.AiProviderModelsTest()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `model_ids` | `any[]` |  |
| `results` | `any[]` |  |

#### Example: Create

```ts
const ai_provider_models_test = await client.AiProviderModelsTest().create({
  model_ids: [],
})
```


### AiProviderType

Create an instance: `const ai_provider_type = client.AiProviderType()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `extra_fields` | `any[]` |  |
| `name` | `string` |  |
| `type` | `string` |  |
| `uses_api_key` | `boolean` |  |

#### Example: List

```ts
const ai_provider_types = await client.AiProviderType().list()
```


### Application

Create an instance: `const application = client.Application()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application_ids` | `any[]` | Application ids in the desired order. |
| `id` | `string` |  |

#### Example: Load

```ts
const application = await client.Application().load({ id: 1 })
```

#### Example: List

```ts
const applications = await client.Application().list()
```

#### Example: Create

```ts
const application = await client.Application().create({
  workspace_id: 1,
  application_ids: [],
})
```


### ApplicationApplication

Create an instance: `const application_application = client.ApplicationApplication()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const application_application = await client.ApplicationApplication().load({ workspace_id: 1 })
```

#### Example: Create

```ts
const application_application = await client.ApplicationApplication().create({
  workspace_id: 1,
})
```


### AssistantChat

Create an instance: `const assistant_chat = client.AssistantChat()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `status` | `string` | * `idle` - Idle * `in_progress` - In progress * `canceling` - Canceling |
| `title` | `string` | The title of the chat. |
| `updated_on` | `string` |  |
| `user_id` | `number` | The user who owns the chat. |
| `uuid` | `string` | Unique identifier for the chat. |
| `workspace_id` | `number` | The workspace the chat belongs to. |

#### Example: List

```ts
const assistant_chats = await client.AssistantChat().list({ workspace_id: 1 })
```


### AuditLog

Create an instance: `const audit_log = client.AuditLog()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_type` | `string` |  |
| `description` | `string` |  |
| `id` | `number` |  |
| `ip_address` | `string` |  |
| `timestamp` | `string` |  |
| `type` | `string` |  |
| `user` | `string` |  |
| `workspace` | `string` |  |

#### Example: List

```ts
const audit_logs = await client.AuditLog().list()
```


### AuditLogActionType

Create an instance: `const audit_log_action_type = client.AuditLogActionType()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | * `create_group` - create_group * `delete_group` - delete_group * `update_group` - update_group * `order_groups` - order_groups * `create_application` - create_application * `update_application` - update_application * `delete_application`… |
| `value` | `string` | Given the *incoming* primitive data, return the value for this field that should be validated and transformed to a native value. |

#### Example: List

```ts
const audit_log_action_types = await client.AuditLogActionType().list()
```


### AuditLogUser

Create an instance: `const audit_log_user = client.AuditLogUser()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `value` | `string` |  |

#### Example: List

```ts
const audit_log_users = await client.AuditLogUser().list()
```


### Auth

Create an instance: `const auth = client.Auth()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `RelayState` | `string` | The frontend URL where redirect the authenticated user. |
| `SAMLResponse` | `string` | The encoded SAML response from the IdP. |
| `backup_code` | `string` |  |
| `code` | `string` |  |
| `email` | `string` | Deprecated. |
| `password` | `string` |  |

#### Example: Load

```ts
const auth = await client.Auth().load()
```

#### Example: Create

```ts
const auth = await client.Auth().create({
  RelayState: 'example_RelayState',
  SAMLResponse: 'example_SAMLResponse',
  password: 'example_password',
})
```


### AuthenticationProviderAuthProvider

Create an instance: `const authentication_provider_auth_provider = client.AuthenticationProviderAuthProvider()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const authentication_provider_auth_provider = await client.AuthenticationProviderAuthProvider().load({ id: 1 })
```

#### Example: List

```ts
const authentication_provider_auth_providers = await client.AuthenticationProviderAuthProvider().list()
```

#### Example: Create

```ts
const authentication_provider_auth_provider = await client.AuthenticationProviderAuthProvider().create({
})
```


### AutomationNode

Create an instance: `const automation_node = client.AutomationNode()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### AutomationNodeHistory

Create an instance: `const automation_node_history = client.AutomationNodeHistory()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_on` | `string` |  |
| `destination_label` | `string` |  |
| `destination_node_id` | `number` |  |
| `destination_node_type` | `string` |  |
| `edge_label` | `string` |  |
| `id` | `number` |  |
| `iteration` | `number` |  |
| `iteration_path` | `string` |  |
| `message` | `string` |  |
| `node` | `number` |  |
| `node_label` | `string` |  |
| `node_type` | `string` |  |
| `parent_node_id` | `number` |  |
| `started_on` | `string` |  |
| `status` | `string` | * `success` - Success * `error` - Error * `disabled` - Disabled * `started` - Started * `skipped` - Skipped * `cancelled` - Cancelled |
| `workflow_history` | `number` |  |

#### Example: List

```ts
const automation_node_historys = await client.AutomationNodeHistory().list({ workflow_history_id: 1 })
```


### AutomationNodeResult

Create an instance: `const automation_node_result = client.AutomationNodeResult()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any` | Contains node results. |

#### Example: Load

```ts
const automation_node_result = await client.AutomationNodeResult().load({ node_history_id: 1 })
```


### AutomationNodeTypeAutomationNode

Create an instance: `const automation_node_type_automation_node = client.AutomationNodeTypeAutomationNode()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `new_type` | `string` | The type of the new automation node * `local_baserow_create_row` - local_baserow_create_row * `local_baserow_create_rows` - local_baserow_create_rows * `local_baserow_update_row` - local_baserow_update_row * `local_baserow_update_rows` -… |
| `output` | `string` | The new output. |
| `position` | `any` | The new position relative to the reference node. |
| `reference_node_id` | `number` | The reference node. |

#### Example: List

```ts
const automation_node_type_automation_nodes = await client.AutomationNodeTypeAutomationNode().list({ workflow_id: 1 })
```

#### Example: Create

```ts
const automation_node_type_automation_node = await client.AutomationNodeTypeAutomationNode().create({
  node_id: 1,
  new_type: 'example_new_type',
})
```


### AutomationWorkflow

Create an instance: `const automation_workflow = client.AutomationWorkflow()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_test_run` | `boolean` | If provided, enables the workflow to be triggerable for the next 5 minutes. |
| `allow_test_run_until` | `boolean` |  |
| `automation_id` | `number` |  |
| `created_on` | `string` |  |
| `duplicated_automation_workflow` | `any` |  |
| `error_code` | `string` | A machine readable error code indicating why the job failed. |
| `graph` | `any` | A JSON serialized graph containing the points and edges. |
| `human_readable_error` | `string` | A human readable error message indicating what went wrong. |
| `id` | `number` |  |
| `immediate_dispatch` | `boolean` |  |
| `name` | `string` |  |
| `notification_recipient_ids` | `any[]` | The user IDs of the workspace members that should receive notifications related to this workflow. |
| `order` | `number` | Lowest first. |
| `original_automation_workflow` | `any` |  |
| `progress_percentage` | `number` | A percentage indicating how far along the job is. |
| `published_on` | `string` |  |
| `simulate_until_node_id` | `number` | When set, upon the next workflow run, simulates the dispatch of the workflow until this node and updates the sample_data of the node's service. |
| `state` | `string` | Indicates the state of the import job. |
| `type` | `string` | The type of the job. |
| `updated_on` | `string` |  |
| `workflow_ids` | `any[]` | The ids of the workflows in the order they are supposed to be set in. |

#### Example: Load

```ts
const automation_workflow = await client.AutomationWorkflow().load({ id: 1 })
```

#### Example: Create

```ts
const automation_workflow = await client.AutomationWorkflow().create({
  id: 1,
  name: 'example_name',
  order: 1,
  progress_percentage: 1,
  workflow_ids: [],
})
```


### AutomationWorkflowHistory

Create an instance: `const automation_workflow_history = client.AutomationWorkflowHistory()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_requested_on` | `string` | When the cancellation of this run was requested. |
| `completed_on` | `string` |  |
| `id` | `number` |  |
| `is_test_run` | `boolean` | True when the workflow is being simulated. |
| `message` | `string` |  |
| `plugin_data` | `Record<string, any>` |  |
| `simulate_until_node` | `number` |  |
| `started_on` | `string` |  |
| `status` | `string` | * `success` - Success * `error` - Error * `disabled` - Disabled * `started` - Started * `skipped` - Skipped * `cancelled` - Cancelled |
| `triggered_by` | `any` |  |

#### Example: List

```ts
const automation_workflow_historys = await client.AutomationWorkflowHistory().list({ workflow_id: 1 })
```

#### Example: Create

```ts
const automation_workflow_history = await client.AutomationWorkflowHistory().create({
  workflow_history_id: 1,
  is_test_run: true,
  message: 'example_message',
  started_on: 'example_started_on',
  status: 'example_status',
})
```


### BuilderDataSource

Create an instance: `const builder_data_source = client.BuilderDataSource()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `1` | `string` |  |
| `2` | `string` |  |
| `id` | `string` |  |
| `key` | `string` |  |
| `metadata` | `any` | Metadata of the dispatch payload. |

#### Example: Load

```ts
const builder_data_source = await client.BuilderDataSource().load({ data_source_id: 1 })
```

#### Example: Create

```ts
const builder_data_source = await client.BuilderDataSource().create({
  data_source_id: 1,
})
```


### BuilderDomain

Create an instance: `const builder_domain = client.BuilderDomain()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain_ids` | `any[]` | The ids of the domains in the order they are supposed to be set in |
| `id` | `string` |  |

#### Example: Load

```ts
const builder_domain = await client.BuilderDomain().load()
```

#### Example: Create

```ts
const builder_domain = await client.BuilderDomain().create({
  builder_id: 1,
  domain_ids: [],
})
```


### BuilderElement

Create an instance: `const builder_element = client.BuilderElement()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### BuilderPage

Create an instance: `const builder_page = client.BuilderPage()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `duplicated_page` | `any` |  |
| `error_code` | `string` | A machine readable error code indicating why the job failed. |
| `human_readable_error` | `string` | A human readable error message indicating what went wrong. |
| `id` | `number` |  |
| `original_page` | `any` |  |
| `page_ids` | `any[]` | The ids of the pages in the order they are supposed to be set in |
| `progress_percentage` | `number` | A percentage indicating how far along the job is. |
| `state` | `string` | Indicates the state of the import job. |
| `type` | `string` | The type of the job. |
| `updated_on` | `string` |  |

#### Example: Create

```ts
const builder_page = await client.BuilderPage().create({
  builder_id: 1,
  page_ids: [],
  progress_percentage: 1,
  state: 'example_state',
})
```


### BuilderPreview

Create an instance: `const builder_preview = client.BuilderPreview()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const builder_preview = await client.BuilderPreview().load({ token: 'token' })
```


### BuilderPreviewGrant

Create an instance: `const builder_preview_grant = client.BuilderPreviewGrant()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `path` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```ts
const builder_preview_grant = await client.BuilderPreviewGrant().create({
  preview_id: 'example_preview_id',
})
```


### BuilderPreviewHandoff

Create an instance: `const builder_preview_handoff = client.BuilderPreviewHandoff()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `builder_id` | `number` |  |
| `expires_in` | `number` |  |
| `preview_handoff` | `string` |  |
| `preview_session` | `string` |  |

#### Example: Create

```ts
const builder_preview_handoff = await client.BuilderPreviewHandoff().create({
  builder_id: 1,
  preview_handoff: 'example_preview_handoff',
})
```


### BuilderPublic

Create an instance: `const builder_public = client.BuilderPublic()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const builder_public = await client.BuilderPublic().load({ custom_code_id: 1, type: 'type' })
```


### BuilderWorkflowAction

Create an instance: `const builder_workflow_action = client.BuilderWorkflowAction()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `element_id` | `number` | The element the workflow actions belong to |
| `id` | `string` |  |
| `workflow_action_ids` | `any[]` | The ids of the workflow actions in the order they are supposed to be set in |

#### Example: Create

```ts
const builder_workflow_action = await client.BuilderWorkflowAction().create({
  workflow_action_id: 1,
  workflow_action_ids: [],
})
```


### BuilderWorkflowActionTypeBuilderWorkflowAction

Create an instance: `const builder_workflow_action_type_builder_workflow_action = client.BuilderWorkflowActionTypeBuilderWorkflowAction()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```ts
const builder_workflow_action_type_builder_workflow_actions = await client.BuilderWorkflowActionTypeBuilderWorkflowAction().list({ page_id: 1 })
```

#### Example: Create

```ts
const builder_workflow_action_type_builder_workflow_action = await client.BuilderWorkflowActionTypeBuilderWorkflowAction().create({
  page_id: 1,
})
```


### ById

Create an instance: `const by_id = client.ById()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const by_id = await client.ById().load({ id: 1 })
```


### ByName

Create an instance: `const by_name = client.ByName()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const by_name = await client.ByName().load({ id: 'by_name_id' })
```


### Calendar

Create an instance: `const calendar = client.Calendar()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `field_options` | `any[]` |  |
| `id` | `string` |  |
| `row_metadata` | `Record<string, any>` | An object keyed by row id with a value being an object containing additional metadata about that row. |
| `rows` | `Record<string, any>` | Every date bucket (e.g. |

#### Example: Load

```ts
const calendar = await client.Calendar().load({ id: 1, from_timestamp: 'from_timestamp', to_timestamp: 'to_timestamp' })
```


### CalendarViewExample

Create an instance: `const calendar_view_example = client.CalendarViewExample()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hidden` | `boolean` | Whether or not the field should be hidden in the card. |
| `order` | `number` | The order that the field has in the view. |

#### Example: List

```ts
const calendar_view_examples = await client.CalendarViewExample().list({ calendar_id: "example", from_timestamp: "example", to_timestamp: "example" })
```


### Callback

Create an instance: `const callback = client.Callback()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const callback = await client.Callback().load({ id: 1 })
```


### Cancel

Create an instance: `const cancel = client.Cancel()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `messages` | `any[]` |  |

#### Example: List

```ts
const cancels = await client.Cancel().list({ chat_id: "example" })
```


### ColorTypographyButtonImagePageInputTableLinklinkActiveText

Create an instance: `const color_typography_button_image_page_input_table_linklink_active_text = client.ColorTypographyButtonImagePageInputTableLinklinkActiveText()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body_font_family` | `string` |  |
| `body_font_size` | `number` |  |
| `body_font_weight` | `string` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `body_text_alignment` | `string` | * `left` - Left * `center` - Center * `right` - Right |
| `body_text_color` | `string` |  |
| `border_color` | `string` |  |
| `button_active_background_color` | `string` | The background color of buttons when active |
| `button_active_border_color` | `string` | The border color of buttons when active |
| `button_active_text_color` | `string` | The text color of buttons when active |
| `button_alignment` | `string` | * `left` - Left * `center` - Center * `right` - Right |
| `button_background_color` | `string` | The background color of buttons |
| `button_border_color` | `string` | The border color of buttons |
| `button_border_radius` | `number` | Button border radius |
| `button_border_size` | `number` | Button border size |
| `button_font_family` | `string` |  |
| `button_font_size` | `number` |  |
| `button_font_weight` | `string` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `button_horizontal_padding` | `number` | Button horizontal padding |
| `button_hover_background_color` | `string` | The background color of buttons when hovered |
| `button_hover_border_color` | `string` | The border color of buttons when hovered |
| `button_hover_text_color` | `string` | The text color of buttons when hovered |
| `button_text_alignment` | `string` | * `left` - Left * `center` - Center * `right` - Right |
| `button_text_color` | `string` | The text color of buttons |
| `button_vertical_padding` | `number` | Button vertical padding |
| `button_width` | `string` | * `auto` - Auto * `full` - Full |
| `custom_colors` | `any` |  |
| `heading_1_font_family` | `string` |  |
| `heading_1_font_size` | `number` |  |
| `heading_1_font_weight` | `string` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `heading_1_text_alignment` | `string` | * `left` - Left * `center` - Center * `right` - Right |
| `heading_1_text_color` | `string` |  |
| `heading_1_text_decoration` | `any[]` | Text decoration: [underline, stroke, uppercase, italic] |
| `heading_2_font_family` | `string` |  |
| `heading_2_font_size` | `number` |  |
| `heading_2_font_weight` | `string` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `heading_2_text_alignment` | `string` | * `left` - Left * `center` - Center * `right` - Right |
| `heading_2_text_color` | `string` |  |
| `heading_2_text_decoration` | `any[]` | Text decoration: [underline, stroke, uppercase, italic] |
| `heading_3_font_family` | `string` |  |
| `heading_3_font_size` | `number` |  |
| `heading_3_font_weight` | `string` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `heading_3_text_alignment` | `string` | * `left` - Left * `center` - Center * `right` - Right |
| `heading_3_text_color` | `string` |  |
| `heading_3_text_decoration` | `any[]` | Text decoration: [underline, stroke, uppercase, italic] |
| `heading_4_font_family` | `string` |  |
| `heading_4_font_size` | `number` |  |
| `heading_4_font_weight` | `string` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `heading_4_text_alignment` | `string` | * `left` - Left * `center` - Center * `right` - Right |
| `heading_4_text_color` | `string` |  |
| `heading_4_text_decoration` | `any[]` | Text decoration: [underline, stroke, uppercase, italic] |
| `heading_5_font_family` | `string` |  |
| `heading_5_font_size` | `number` |  |
| `heading_5_font_weight` | `string` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `heading_5_text_alignment` | `string` | * `left` - Left * `center` - Center * `right` - Right |
| `heading_5_text_color` | `string` |  |
| `heading_5_text_decoration` | `any[]` | Text decoration: [underline, stroke, uppercase, italic] |
| `heading_6_font_family` | `string` |  |
| `heading_6_font_size` | `number` |  |
| `heading_6_font_weight` | `string` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `heading_6_text_alignment` | `string` | * `left` - Left * `center` - Center * `right` - Right |
| `heading_6_text_color` | `string` |  |
| `heading_6_text_decoration` | `any[]` | Text decoration: [underline, stroke, uppercase, italic] |
| `image_alignment` | `string` | * `left` - Left * `center` - Center * `right` - Right |
| `image_border_radius` | `number` | The border radius for this image element. |
| `image_constraint` | `string` | The image constraint to apply to this image * `cover` - Cover * `contain` - Contain * `full-width` - Full Width |
| `image_max_height` | `number` | The image max height |
| `image_max_width` | `number` | The max-width for this image element. |
| `input_background_color` | `string` | The background color of the input |
| `input_border_color` | `string` | The color of the input border |
| `input_border_radius` | `number` | Input border radius |
| `input_border_size` | `number` | Input border size |
| `input_font_family` | `string` | The font family of the input |
| `input_font_size` | `number` |  |
| `input_font_weight` | `string` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `input_horizontal_padding` | `number` | Input horizontal padding |
| `input_text_color` | `string` | The text color of the input |
| `input_vertical_padding` | `number` | Input vertical padding |
| `label_font_family` | `string` | The font family of the label |
| `label_font_size` | `number` | The font size of the label |
| `label_font_weight` | `string` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `label_text_color` | `string` | The text color of the label |
| `link_active_text_color` | `string` | The hover color of links when active |
| `link_active_text_decoration` | `any[]` | Active text decoration: [underline, stroke, uppercase, italic] |
| `link_default_text_decoration` | `any[]` | Default text decoration: [underline, stroke, uppercase, italic] |
| `link_font_family` | `string` |  |
| `link_font_size` | `number` |  |
| `link_font_weight` | `string` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `link_hover_text_color` | `string` | The hover color of links when hovered |
| `link_hover_text_decoration` | `any[]` | Hover text decoration: [underline, stroke, uppercase, italic] |
| `link_text_alignment` | `string` | * `left` - Left * `center` - Center * `right` - Right |
| `link_text_color` | `string` | The text color of links |
| `main_error_color` | `string` |  |
| `main_success_color` | `string` |  |
| `main_warning_color` | `string` |  |
| `page_background_color` | `string` | The background color of the page |
| `page_background_file` | `any` | The image file |
| `page_background_mode` | `string` | The mode of the background image * `tile` - Tile * `fill` - Fill * `fit` - Fit |
| `primary_color` | `string` |  |
| `secondary_color` | `string` |  |
| `table_border_color` | `string` | The color of the table border |
| `table_border_radius` | `number` | Table border radius |
| `table_border_size` | `number` | Table border size |
| `table_cell_alignment` | `string` | * `left` - Left * `center` - Center * `right` - Right |
| `table_cell_alternate_background_color` | `string` | The alternate background color of the table cells |
| `table_cell_background_color` | `string` | The background color of the table cells |
| `table_cell_horizontal_padding` | `number` | Table cell horizontal padding |
| `table_cell_vertical_padding` | `number` | Table cell vertical padding |
| `table_header_background_color` | `string` | The background color of the table header cells |
| `table_header_font_family` | `string` | The font family of the table header cells |
| `table_header_font_size` | `number` | The font size of the header cells |
| `table_header_font_weight` | `string` | * `thin` - Thin * `extra-light` - Extra Light * `light` - Light * `regular` - Regular * `medium` - Medium * `semi-bold` - Semi Bold * `bold` - Bold * `extra-bold` - Extra Bold * `heavy` - Heavy * `black` - Black * `extra-black` - Extra… |
| `table_header_text_alignment` | `string` | * `left` - Left * `center` - Center * `right` - Right |
| `table_header_text_color` | `string` | The text color of the table header cells |
| `table_horizontal_separator_color` | `string` | The color of the table horizontal separator |
| `table_horizontal_separator_size` | `number` | Table horizontal separator size |
| `table_vertical_separator_color` | `string` | The color of the table vertical separator |
| `table_vertical_separator_size` | `number` | Table vertical separator size |


### CoreWebhook

Create an instance: `const core_webhook = client.CoreWebhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `patch(data)` | Change part of an existing entity. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const core_webhook = await client.CoreWebhook().load({ id: 'core_webhook_id' })
```

#### Example: Create

```ts
const core_webhook = await client.CoreWebhook().create({
  id: 'example_id',
})
```


### DashboardDataSource

Create an instance: `const dashboard_data_source = client.DashboardDataSource()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const dashboard_data_source = await client.DashboardDataSource().create({
  data_source_id: 1,
})
```


### DashboardWidget

Create an instance: `const dashboard_widget = client.DashboardWidget()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DashboardWidgetWidget

Create an instance: `const dashboard_widget_widget = client.DashboardWidgetWidget()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `widgets` | `any[]` | The complete layout of the dashboard widgets visible to the current user. |

#### Example: List

```ts
const dashboard_widget_widgets = await client.DashboardWidgetWidget().list({ id: 1 })
```

#### Example: Create

```ts
const dashboard_widget_widget = await client.DashboardWidgetWidget().create({
  id: 1,
})
```


### DataScan

Create an instance: `const data_scan = client.DataScan()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `frequency` | `string` | * `manual` - Manual * `hourly` - Hourly * `daily` - Daily * `weekly` - Weekly |
| `id` | `number` |  |
| `is_running` | `boolean` |  |
| `last_error` | `string` |  |
| `last_run_finished_at` | `string` |  |
| `last_run_started_at` | `string` |  |
| `list_items` | `string` |  |
| `name` | `string` |  |
| `pattern` | `string` |  |
| `results_count` | `string` |  |
| `scan_all_workspaces` | `boolean` |  |
| `scan_type` | `string` | * `pattern` - Pattern * `list_of_values` - List of values * `list_table` - List Table |
| `source_database_id` | `string` |  |
| `source_field_id` | `string` |  |
| `source_table_id` | `string` |  |
| `source_workspace_id` | `string` |  |
| `updated_on` | `string` |  |
| `whole_words` | `boolean` |  |
| `workspace_ids` | `string` |  |

#### Example: Load

```ts
const data_scan = await client.DataScan().load({ id: 'data_scan_id' })
```

#### Example: List

```ts
const data_scans = await client.DataScan().list()
```

#### Example: Create

```ts
const data_scan = await client.DataScan().create({
  name: 'example_name',
  scan_type: 'example_scan_type',
})
```


### DataSync

Create an instance: `const data_sync = client.DataSync()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auto_add_new_properties` | `boolean` | If enabled and new properties are detected on sync, then they're automatically added. |
| `database_id` | `string` |  |
| `delete_unmatched_rows` | `boolean` | If enabled, rows that are no longer present in the source are deleted from the synced table on every sync. |
| `id` | `number` |  |
| `last_error` | `string` |  |
| `last_sync` | `string` | Timestamp when the table was last synced. |
| `synced_properties` | `any[]` |  |
| `table_id` | `number` | The table where the data is synced into. |
| `two_way_sync` | `boolean` | If enabled, then it's possible to make changes to the synced table. |
| `type` | `string` |  |

#### Example: Load

```ts
const data_sync = await client.DataSync().load({ id: 1 })
```


### DatabaseTable

Create an instance: `const database_table = client.DatabaseTable()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `configuration` | `Record<string, any>` | Additional table import configuration. |
| `created_on` | `string` |  |
| `data` | `any[]` | A list of rows you want to add to the specified table. |
| `data_sync` | `any` |  |
| `database_id` | `number` | Database id where the table will be created. |
| `duplicated_table` | `any` |  |
| `error_code` | `string` | A machine readable error code indicating why the job failed. |
| `first_row_header` | `boolean` |  |
| `human_readable_error` | `string` | A human readable error message indicating what went wrong. |
| `id` | `number` |  |
| `importer_type` | `string` | The frontend importer identifier used to parse the file. |
| `name` | `string` | The name of the new table. |
| `original_file_name` | `string` | The original name of the uploaded file. |
| `original_table` | `any` |  |
| `progress_percentage` | `number` | A percentage indicating how far along the job is. |
| `report` | `any` | Import error report. |
| `state` | `string` | Indicates the state of the import job. |
| `table_id` | `number` | Table id where the data will be imported. |
| `triggered_by` | `string` | Whether this sync run was started manually or periodically. |
| `type` | `string` | The type of the job. |
| `updated_on` | `string` |  |
| `user_name` | `string` | The name of the user that started this sync run. |

#### Example: Create

```ts
const database_table = await client.DatabaseTable().create({
  data_sync_id: 1,
  data: [],
  database_id: 1,
  progress_percentage: 1,
  report: 'example_report',
  state: 'example_state',
})
```


### DatabaseTableField

Create an instance: `const database_table_field = client.DatabaseTableField()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `duplicated_field` | `any` |  |
| `element_id` | `number` | The element the workflow actions belong to |
| `error_code` | `string` | A machine readable error code indicating why the job failed. |
| `field_id` | `number` | The ID of the AI field to generate values for. |
| `human_readable_error` | `string` | A human readable error message indicating what went wrong. |
| `id` | `number` |  |
| `is_auto_update` | `boolean` | Indicates if the job has been created because values in a dependent field changed. |
| `only_empty` | `boolean` | Whether to only generate AI values for rows where the field is empty. |
| `original_field` | `any` |  |
| `progress_percentage` | `number` | A percentage indicating how far along the job is. |
| `row_ids` | `any[]` | The IDs of the rows to generate AI values for. |
| `state` | `string` | Indicates the state of the import job. |
| `type` | `string` | The type of the job. |
| `updated_on` | `string` |  |
| `view_id` | `number` | The ID of the view to generate AI values for. |
| `workflow_action_ids` | `any[]` | The ids of the workflow actions in the order they are supposed to be set in |

#### Example: Create

```ts
const database_table_field = await client.DatabaseTableField().create({
  field_id: 1,
  progress_percentage: 1,
  row_ids: [],
  state: 'example_state',
  workflow_action_ids: [],
})
```


### DatabaseTableGridView

Create an instance: `const database_table_grid_view = client.DatabaseTableGridView()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `field_id` | `string` |  |
| `total` | `number` | The total value count. |
| `value` | `any` |  |

#### Example: Load

```ts
const database_table_grid_view = await client.DatabaseTableGridView().load({ grid_id: 1 })
```


### DatabaseTableRow

Create an instance: `const database_table_row = client.DatabaseTableRow()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `items` | `any[]` |  |
| `mode` | `string` | The mode to use to receive notifications for new comments on a table row. |
| `row_id` | `string` | the name of the row with id `row_id` from table with id `table_id`. |

#### Example: Load

```ts
const database_table_row = await client.DatabaseTableRow().load()
```

#### Example: Create

```ts
const database_table_row = await client.DatabaseTableRow().create({
  table_id: 1,
  items: [],
})
```


### DatabaseTableView

Create an instance: `const database_table_view = client.DatabaseTableView()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `view_ids` | `any[]` | View ids in the desired order. |

#### Example: Load

```ts
const database_table_view = await client.DatabaseTableView().load({ ical_slug: 'ical_slug' })
```

#### Example: Create

```ts
const database_table_view = await client.DatabaseTableView().create({
  table_id: 1,
  view_ids: [],
})
```


### DatabaseTableViewDecoration

Create an instance: `const database_table_view_decoration = client.DatabaseTableViewDecoration()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DatabaseTableViewFilter

Create an instance: `const database_table_view_filter = client.DatabaseTableViewFilter()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DatabaseTableViewGrouping

Create an instance: `const database_table_view_grouping = client.DatabaseTableViewGrouping()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `view_group_by_ids` | `any[]` | View group by ids in the desired priority order. |

#### Example: Create

```ts
const database_table_view_grouping = await client.DatabaseTableViewGrouping().create({
  view_id: 1,
  view_group_by_ids: [],
})
```


### DatabaseTableViewSorting

Create an instance: `const database_table_view_sorting = client.DatabaseTableViewSorting()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `view_sort_ids` | `any[]` | View sort ids in the desired priority order. |

#### Example: Create

```ts
const database_table_view_sorting = await client.DatabaseTableViewSorting().create({
  view_id: 1,
  view_sort_ids: [],
})
```


### DatabaseTableWebhook

Create an instance: `const database_table_webhook = client.DatabaseTableWebhook()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### DatabaseToken

Create an instance: `const database_token = client.DatabaseToken()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const database_token = await client.DatabaseToken().load({ id: 'database_token_id' })
```


### DatabaseWorkflowActionTypeDatabaseWorkflowAction

Create an instance: `const database_workflow_action_type_database_workflow_action = client.DatabaseWorkflowActionTypeDatabaseWorkflowAction()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```ts
const database_workflow_action_type_database_workflow_actions = await client.DatabaseWorkflowActionTypeDatabaseWorkflowAction().list({ field_id: 1 })
```

#### Example: Create

```ts
const database_workflow_action_type_database_workflow_action = await client.DatabaseWorkflowActionTypeDatabaseWorkflowAction().create({
  field_id: 1,
})
```


### DecoratorValueProviderTypeViewDecoration

Create an instance: `const decorator_value_provider_type_view_decoration = client.DecoratorValueProviderTypeViewDecoration()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const decorator_value_provider_type_view_decoration = await client.DecoratorValueProviderTypeViewDecoration().load({ id: 1 })
```

#### Example: List

```ts
const decorator_value_provider_type_view_decorations = await client.DecoratorValueProviderTypeViewDecoration().list({ view_id: 1 })
```

#### Example: Create

```ts
const decorator_value_provider_type_view_decoration = await client.DecoratorValueProviderTypeViewDecoration().create({
  view_id: 1,
})
```


### Dispatch

Create an instance: `const dispatch = client.Dispatch()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_actions` | `any` | Actions the browser runs itself, in order, after the server actions have completed. |
| `results` | `any[]` |  |
| `row_id` | `number` | The id of the row the button was clicked on. |

#### Example: Create

```ts
const dispatch = await client.Dispatch().create({
  field_id: 1,
  row_id: 1,
})
```


### Domain

Create an instance: `const domain = client.Domain()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `domain_name` | `string` |  |
| `id` | `string` |  |
| `type` | `string` | The type of the domain. |

#### Example: List

```ts
const domains = await client.Domain().list({ builder_id: 1 })
```

#### Example: Create

```ts
const domain = await client.Domain().create({
  builder_id: 1,
})
```


### Duplicate

Create an instance: `const duplicate = client.Duplicate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `elements` | `any[]` | The duplicated elements. |
| `graph` | `string` | The updated page graph. |
| `workflow_actions` | `any[]` | The duplicated workflow actions |

#### Example: Create

```ts
const duplicate = await client.Duplicate().create({
  element_id: 1,
})
```


### Element

Create an instance: `const element = client.Element()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```ts
const elements = await client.Element().list({ page_id: 1 })
```

#### Example: Create

```ts
const element = await client.Element().create({
  page_id: 1,
})
```


### ElementTypeElement

Create an instance: `const element_type_element = client.ElementTypeElement()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Email

Create an instance: `const email = client.Email()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `error` | `string` | A short message describing the error that occured if the test email failed |
| `error_stack` | `string` | The full stack trace and error message if the test email failed. |
| `error_type` | `string` | The type of error that occurred if the test email failed. |
| `succeeded` | `boolean` | Whether or not the test email was sent successfully. |
| `target_email` | `string` |  |

#### Example: Create

```ts
const email = await client.Email().create({
  target_email: 'example_target_email',
})
```


### ExampleBatchRow

Create an instance: `const example_batch_row = client.ExampleBatchRow()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `items` | `any[]` |  |

#### Example: Create

```ts
const example_batch_row = await client.ExampleBatchRow().create({
  table_id: 1,
  items: [],
})
```


### ExampleBatchUpdateRow

Create an instance: `const example_batch_update_row = client.ExampleBatchUpdateRow()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `items` | `any[]` |  |
| `metadata` | `any` | An optional object containing metadata information about the operation |


### ExamplePublicRowResponseSerializerWithUserFieldName

Create an instance: `const example_public_row_response_serializer_with_user_field_name = client.ExamplePublicRowResponseSerializerWithUserFieldName()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `field_1` | `string` | This field represents the `text` field. |
| `field_10` | `any` | This field represents the `last_modified_by` field. |
| `field_11` | `string` | This field represents the `created_on` field. |
| `field_12` | `any` | This field represents the `created_by` field. |
| `field_13` | `number` | This field represents the `duration` field. |
| `field_14` | `any[]` | This field represents the `link_row` field. |
| `field_15` | `any[]` | This field represents the `file` field. |
| `field_16` | `any` | This field represents the `single_select` field. |
| `field_17` | `any[]` | This field represents the `multiple_select` field. |
| `field_18` | `string` | This field represents the `phone_number` field. |
| `field_19` | `string` | This field represents the `formula` field. |
| `field_2` | `string` | This field represents the `long_text` field. |
| `field_20` | `string` | This field represents the `count` field. |
| `field_21` | `string` | This field represents the `rollup` field. |
| `field_22` | `string` | This field represents the `lookup` field. |
| `field_23` | `any[]` | This field represents the `multiple_collaborators` field. |
| `field_24` | `string` | This field represents the `uuid` field. |
| `field_25` | `number` | This field represents the `autonumber` field. |
| `field_26` | `boolean` | This field represents the `password` field. |
| `field_27` | `string` | This field represents the `form_view_edit_row` field. |
| `field_28` | `string` | This field represents the `button` field. |
| `field_29` | `string` | This field represents the `ai` field. |
| `field_3` | `string` | This field represents the `url` field. |
| `field_4` | `string` | This field represents the `email` field. |
| `field_5` | `string` | This field represents the `number` field. |
| `field_6` | `number` | This field represents the `rating` field. |
| `field_7` | `boolean` | This field represents the `boolean` field. |
| `field_8` | `string` | This field represents the `date` field. |
| `field_9` | `string` | This field represents the `last_modified` field. |
| `id` | `number` | The unique identifier of the row in the table. |
| `order` | `string` | Indicates the position of the row, lowest first and highest last. |

#### Example: Load

```ts
const example_public_row_response_serializer_with_user_field_name = await client.ExamplePublicRowResponseSerializerWithUserFieldName().load({ row_id: 1, view_id: 'view_id' })
```


### ExampleRow

Create an instance: `const example_row = client.ExampleRow()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `field_1` | `string` | This field represents the `text` field. |
| `field_10` | `any` | This field represents the `last_modified_by` field. |
| `field_11` | `string` | This field represents the `created_on` field. |
| `field_12` | `any` | This field represents the `created_by` field. |
| `field_13` | `number` | This field represents the `duration` field. |
| `field_14` | `any[]` | This field represents the `link_row` field. |
| `field_15` | `any[]` | This field represents the `file` field. |
| `field_16` | `any` | This field represents the `single_select` field. |
| `field_17` | `any[]` | This field represents the `multiple_select` field. |
| `field_18` | `string` | This field represents the `phone_number` field. |
| `field_19` | `string` | This field represents the `formula` field. |
| `field_2` | `string` | This field represents the `long_text` field. |
| `field_20` | `string` | This field represents the `count` field. |
| `field_21` | `string` | This field represents the `rollup` field. |
| `field_22` | `string` | This field represents the `lookup` field. |
| `field_23` | `any[]` | This field represents the `multiple_collaborators` field. |
| `field_24` | `string` | This field represents the `uuid` field. |
| `field_25` | `number` | This field represents the `autonumber` field. |
| `field_26` | `boolean` | This field represents the `password` field. |
| `field_27` | `string` | This field represents the `form_view_edit_row` field. |
| `field_28` | `string` | This field represents the `button` field. |
| `field_29` | `string` | This field represents the `ai` field. |
| `field_3` | `string` | This field represents the `url` field. |
| `field_4` | `string` | This field represents the `email` field. |
| `field_5` | `string` | This field represents the `number` field. |
| `field_6` | `number` | This field represents the `rating` field. |
| `field_7` | `boolean` | This field represents the `boolean` field. |
| `field_8` | `string` | This field represents the `date` field. |
| `field_9` | `string` | This field represents the `last_modified` field. |
| `field_ids` | `any[]` | Only the fields related to the provided ids are added to the response. |
| `id` | `number` | The unique identifier of the row in the table. |
| `metadata` | `any` | Additional metadata for the row, if `include=metadata' is provided as query parameter. |
| `order` | `string` | Indicates the position of the row, lowest first and highest last. |
| `row_ids` | `any[]` | Only rows related to the provided ids are added to the response. |

#### Example: Load

```ts
const example_row = await client.ExampleRow().load({ form_id: 'form_id', row_token: 'row_token' })
```

#### Example: Create

```ts
const example_row = await client.ExampleRow().create({
  view_id: 1,
  row_ids: [],
})
```


### ExampleRowResponseSerializerWithUserFieldName

Create an instance: `const example_row_response_serializer_with_user_field_name = client.ExampleRowResponseSerializerWithUserFieldName()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `baserow_id` | `number` | The unique identifier of the row in the table. |
| `field_1` | `string` | This field represents the `text` field. |
| `field_10` | `any` | This field represents the `last_modified_by` field. |
| `field_11` | `string` | This field represents the `created_on` field. |
| `field_12` | `any` | This field represents the `created_by` field. |
| `field_13` | `number` | This field represents the `duration` field. |
| `field_14` | `any[]` | This field represents the `link_row` field. |
| `field_15` | `any[]` | This field represents the `file` field. |
| `field_16` | `any` | This field represents the `single_select` field. |
| `field_17` | `any[]` | This field represents the `multiple_select` field. |
| `field_18` | `string` | This field represents the `phone_number` field. |
| `field_19` | `string` | This field represents the `formula` field. |
| `field_2` | `string` | This field represents the `long_text` field. |
| `field_20` | `string` | This field represents the `count` field. |
| `field_21` | `string` | This field represents the `rollup` field. |
| `field_22` | `string` | This field represents the `lookup` field. |
| `field_23` | `any[]` | This field represents the `multiple_collaborators` field. |
| `field_24` | `string` | This field represents the `uuid` field. |
| `field_25` | `number` | This field represents the `autonumber` field. |
| `field_26` | `boolean` | This field represents the `password` field. |
| `field_27` | `string` | This field represents the `form_view_edit_row` field. |
| `field_28` | `string` | This field represents the `button` field. |
| `field_29` | `string` | This field represents the `ai` field. |
| `field_3` | `string` | This field represents the `url` field. |
| `field_4` | `string` | This field represents the `email` field. |
| `field_5` | `string` | This field represents the `number` field. |
| `field_6` | `number` | This field represents the `rating` field. |
| `field_7` | `boolean` | This field represents the `boolean` field. |
| `field_8` | `string` | This field represents the `date` field. |
| `field_9` | `string` | This field represents the `last_modified` field. |
| `id` | `string` | The unique identifier of the row in the table. |
| `metadata` | `any` | Additional metadata for the row, if `include=metadata' is provided as query parameter. |
| `order` | `string` | Indicates the position of the row, lowest first and highest last. |

#### Example: Load

```ts
const example_row_response_serializer_with_user_field_name = await client.ExampleRowResponseSerializerWithUserFieldName().load({ row_id: 1, table_id: 1 })
```

#### Example: List

```ts
const example_row_response_serializer_with_user_field_names = await client.ExampleRowResponseSerializerWithUserFieldName().list({ row_id: 1, table_id: 1 })
```

#### Example: Create

```ts
const example_row_response_serializer_with_user_field_name = await client.ExampleRowResponseSerializerWithUserFieldName().create({
  table_id: 1,
})
```


### Export

Create an instance: `const export_ = client.Export()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `created_on` | `string` |  |
| `error_code` | `string` | A machine readable error code indicating why the job failed. |
| `exported_file_name` | `string` |  |
| `exporter_type` | `string` |  |
| `human_readable_error` | `string` | A human readable error message indicating what went wrong. |
| `id` | `number` |  |
| `progress_percentage` | `number` | A percentage indicating how far along the job is. |
| `state` | `string` | * `pending` - pending * `exporting` - exporting * `cancelled` - cancelled * `finished` - finished * `failed` - failed * `expired` - expired |
| `status` | `string` | DEPRECATED: Use state instead |
| `table` | `number` |  |
| `type` | `string` | The type of the job. |
| `updated_on` | `string` |  |
| `url` | `string` |  |
| `view` | `number` |  |
| `workspace_id` | `number` | The workspace that the applications are going to be exported from. |

#### Example: Load

```ts
const export_ = await client.Export().load({ id: 1 })
```

#### Example: List

```ts
const export_s = await client.Export().list({ workspace_id: 1 })
```


### ExportJob

Create an instance: `const export_job = client.ExportJob()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `exported_file_name` | `string` |  |
| `exporter_type` | `string` |  |
| `id` | `number` |  |
| `progress_percentage` | `number` |  |
| `state` | `string` | * `pending` - pending * `exporting` - exporting * `cancelled` - cancelled * `finished` - finished * `failed` - failed * `expired` - expired |
| `status` | `string` | DEPRECATED: Use state instead |
| `table` | `number` |  |
| `url` | `string` |  |
| `view` | `number` |  |

#### Example: Load

```ts
const export_job = await client.ExportJob().load({ job_id: 'job_id' })
```

#### Example: Create

```ts
const export_job = await client.ExportJob().create({
  table_id: 1,
  exporter_type: 'example_exporter_type',
})
```


### Field

Create an instance: `const field = client.Field()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const field = await client.Field().load({ id: 1 })
```


### FieldField

Create an instance: `const field_field = client.FieldField()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `new_primary_field_id` | `number` | The ID of the new primary field. |

#### Example: Load

```ts
const field_field = await client.FieldField().load({ table_id: 1 })
```

#### Example: Create

```ts
const field_field = await client.FieldField().create({
  table_id: 1,
  new_primary_field_id: 1,
})
```


### FieldFieldSerializerWithRelatedField

Create an instance: `const field_field_serializer_with_related_field = client.FieldFieldSerializerWithRelatedField()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const field_field_serializer_with_related_field = await client.FieldFieldSerializerWithRelatedField().create({
  table_id: 1,
})
```


### FieldPermissionSubjectOption

Create an instance: `const field_permission_subject_option = client.FieldPermissionSubjectOption()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```ts
const field_permission_subject_options = await client.FieldPermissionSubjectOption().list({ id: "example" })
```


### FieldRule

Create an instance: `const field_rule = client.FieldRule()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const field_rule = await client.FieldRule().load({ id: 1 })
```

#### Example: Create

```ts
const field_rule = await client.FieldRule().create({
  id: 1,
})
```


### FieldRulesResponseFieldRule

Create an instance: `const field_rules_response_field_rule = client.FieldRulesResponseFieldRule()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### FormViewSubmitted

Create an instance: `const form_view_submitted = client.FormViewSubmitted()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `field_1` | `string` | This field represents the `text` field. |
| `field_13` | `number` | This field represents the `duration` field. |
| `field_14` | `any[]` | This field represents the `link_row` field. |
| `field_15` | `any[]` | This field represents the `file` field. |
| `field_16` | `number` | Accepts one of the following option ids as integer value This field accepts an `integer` representing the chosen select option id related to the field. |
| `field_17` | `any[]` | This field represents the `multiple_select` field. |
| `field_18` | `string` | This field represents the `phone_number` field. |
| `field_2` | `string` | This field represents the `long_text` field. |
| `field_23` | `any[]` | This field represents the `multiple_collaborators` field. |
| `field_26` | `string` | This field represents the `password` field. |
| `field_29` | `string` | This field represents the `ai` field. |
| `field_3` | `string` | This field represents the `url` field. |
| `field_4` | `string` | This field represents the `email` field. |
| `field_5` | `string` | This field represents the `number` field. |
| `field_6` | `number` | This field represents the `rating` field. |
| `field_7` | `boolean` | This field represents the `boolean` field. |
| `field_8` | `string` | This field represents the `date` field. |
| `row_id` | `number` |  |
| `submit_action` | `string` | The action that must be performed after the visitor has filled out the form. |
| `submit_action_message` | `string` | If the `submit_action` is MESSAGE, then this message will be shown to the visitor after submitting the form. |
| `submit_action_redirect_url` | `any` | If the `submit_action` is REDIRECT,then the visitors will be redirected to the this URL after submitting the form. |

#### Example: Create

```ts
const form_view_submitted = await client.FormViewSubmitted().create({
  slug: 'example_slug',
})
```


### Full

Create an instance: `const full = client.Full()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `celery_export_queue_size` | `number` | The number of enqueued celery export worker tasks. |
| `celery_queue_size` | `number` | The number of enqueued celery tasks. |
| `checks` | `Record<string, any>` | An object keyed by the name of the health check and the value being the result. |
| `passing` | `boolean` | False if any of the critical service health checks are failing, true otherwise. |

#### Example: Load

```ts
const full = await client.Full().load()
```


### GenerateFormulaWithAi

Create an instance: `const generate_formula_with_ai = client.GenerateFormulaWithAi()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_model` | `string` | The AI model that must be used when generating the formula. |
| `ai_prompt` | `string` | The human readable input used to generate the formula. |
| `ai_temperature` | `number` | Between 0 and 2, adjusts response randomness—lower values yield focused answers, while higher values increase creativity. |
| `ai_type` | `string` | The AI model type that must be used when generating the formula. |
| `formula` | `string` | The formula generated by the AI. |

#### Example: Create

```ts
const generate_formula_with_ai = await client.GenerateFormulaWithAi().create({
  table_id: 1,
  ai_model: 'example_ai_model',
  ai_prompt: 'example_ai_prompt',
  ai_type: 'example_ai_type',
})
```


### GridViewGroupByData

Create an instance: `const grid_view_group_by_data = client.GridViewGroupByData()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `group_count` | `number` |  |
| `groups` | `any[]` |  |
| `id` | `string` |  |
| `limit` | `number` |  |
| `offset` | `number` |  |
| `parent` | `Record<string, any>` | The serialized parent group path requested for this page. |

#### Example: List

```ts
const grid_view_group_by_datas = await client.GridViewGroupByData().list({ id: 1 })
```


### Health

Create an instance: `const health = client.Health()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const health = await client.Health().load()
```


### InboundEmail

Create an instance: `const inbound_email = client.InboundEmail()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const inbound_email = await client.InboundEmail().create({
})
```


### Install

Create an instance: `const install = client.Install()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const install = await client.Install().create({
  template_id: 1,
  workspace_id: 1,
})
```


### InstanceId

Create an instance: `const instance_id = client.InstanceId()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `instance_id` | `string` |  |

#### Example: Load

```ts
const instance_id = await client.InstanceId().load()
```


### Integration

Create an instance: `const integration = client.Integration()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```ts
const integrations = await client.Integration().list({ application_id: 1 })
```

#### Example: Create

```ts
const integration = await client.Integration().create({
  application_id: 1,
})
```


### IntegrationIntegration

Create an instance: `const integration_integration = client.IntegrationIntegration()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### IntegrationServiceDashboardDataSource

Create an instance: `const integration_service_dashboard_data_source = client.IntegrationServiceDashboardDataSource()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```ts
const integration_service_dashboard_data_sources = await client.IntegrationServiceDashboardDataSource().list({ dashboard_id: 1 })
```


### IntegrationServiceDataSource

Create an instance: `const integration_service_data_source = client.IntegrationServiceDataSource()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `before_id` | `number` | If provided, the data_source is moved before the data_source with this Id. |
| `id` | `string` |  |

#### Example: List

```ts
const integration_service_data_sources = await client.IntegrationServiceDataSource().list({ page_id: 1 })
```

#### Example: Create

```ts
const integration_service_data_source = await client.IntegrationServiceDataSource().create({
  page_id: 1,
})
```


### IntegrationServicePublicDataSource

Create an instance: `const integration_service_public_data_source = client.IntegrationServicePublicDataSource()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ts
const integration_service_public_data_sources = await client.IntegrationServicePublicDataSource().list({ page_id: 1 })
```


### InvalidRow

Create an instance: `const invalid_row = client.InvalidRow()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |

#### Example: List

```ts
const invalid_rows = await client.InvalidRow().list({ field_rule_id: 1 })
```


### Job

Create an instance: `const job = client.Job()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` | The number of matching jobs, or null when polling explicit job IDs. |
| `created_on` | `string` |  |
| `error_code` | `string` | A machine readable error code indicating why the job failed. |
| `human_readable_error` | `string` | A human readable error message indicating what went wrong. |
| `id` | `number` |  |
| `jobs` | `any[]` |  |
| `progress_percentage` | `number` | A percentage indicating how far along the job is. |
| `state` | `string` | Indicates the state of the import job. |
| `type` | `string` | The type of the job. |
| `updated_on` | `string` |  |

#### Example: Load

```ts
const job = await client.Job().load({ id: 1 })
```

#### Example: List

```ts
const jobs = await client.Job().list()
```

#### Example: Create

```ts
const job = await client.Job().create({
  count: 1,
  jobs: [],
  progress_percentage: 1,
  state: 'example_state',
})
```


### JobTypeJob

Create an instance: `const job_type_job = client.JobTypeJob()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Create

```ts
const job_type_job = await client.JobTypeJob().create({
  id: 1,
})
```


### Kanban

Create an instance: `const kanban = client.Kanban()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `field_options` | `any[]` |  |
| `id` | `string` |  |
| `row_metadata` | `Record<string, any>` | An object keyed by row id with a value being an object containing additional metadata about that row. |
| `rows` | `Record<string, any>` | Every select option related to the view's single select field can have its own entry like this. |

#### Example: Load

```ts
const kanban = await client.Kanban().load({ id: 1 })
```


### KanbanViewExample

Create an instance: `const kanban_view_example = client.KanbanViewExample()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `hidden` | `boolean` | Whether or not the field should be hidden in the card. |
| `order` | `number` | The order that the field has in the view. |

#### Example: List

```ts
const kanban_view_examples = await client.KanbanViewExample().list({ kanban_id: "example" })
```


### LastViewedItem

Create an instance: `const last_viewed_item = client.LastViewedItem()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application` | `Record<string, any>` |  |
| `item` | `any` | The `id` and `name` of the item, plus what the type adds. |
| `last_viewed` | `string` |  |
| `sub_type` | `string` | Set for polymorphic types, like the view type of a database view. |
| `type` | `string` |  |
| `workspace` | `Record<string, any>` |  |

#### Example: List

```ts
const last_viewed_items = await client.LastViewedItem().list()
```


### License

Create an instance: `const license = client.License()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `application_users` | `number` | The amount of application builder users permitted in this license. |
| `application_users_taken` | `number` | The amount of application builder users used so far in this license. |
| `email` | `string` |  |
| `first_name` | `string` |  |
| `free_users_count` | `number` | The amount of free users that are currently using the license. |
| `id` | `number` |  |
| `is_active` | `boolean` | Indicates if the backend deems the license valid. |
| `issued_on` | `string` | The date when the license was issued. |
| `issued_to_email` | `string` | Indicates to which email address the license has been issued. |
| `issued_to_name` | `string` | Indicates to whom the license has been issued. |
| `last_check` | `string` |  |
| `license_id` | `string` | Unique identifier of the license. |
| `product_code` | `string` | The product code that indicates what the license unlocks. |
| `seats` | `number` | The maximum amount of users that can use the license. |
| `seats_taken` | `number` | The amount of users that are currently using the license. |
| `users` | `any[]` |  |
| `valid_from` | `string` | From which timestamp the license becomes active. |
| `valid_through` | `string` | Until which timestamp the license is active. |

#### Example: Load

```ts
const license = await client.License().load({ id: 1 })
```

#### Example: Create

```ts
const license = await client.License().create({
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


### LicenseUser

Create an instance: `const license_user = client.LicenseUser()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Create

```ts
const license_user = await client.LicenseUser().create({
  id: 1,
})
```


### LicenseUserLookup

Create an instance: `const license_user_lookup = client.LicenseUserLookup()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `value` | `string` | The name and the email address of the user. |

#### Example: List

```ts
const license_user_lookups = await client.LicenseUserLookup().list({ id: 1 })
```


### LicenseWithUser

Create an instance: `const license_with_user = client.LicenseWithUser()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```ts
const license_with_users = await client.LicenseWithUser().list({ id: 1 })
```


### ListDataSyncProperty

Create an instance: `const list_data_sync_property = client.ListDataSyncProperty()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `field_type` | `string` |  |
| `initially_selected` | `boolean` |  |
| `key` | `string` |  |
| `name` | `string` |  |
| `unique_primary` | `boolean` |  |

#### Example: List

```ts
const list_data_sync_propertys = await client.ListDataSyncProperty().list({ data_sync_id: 1 })
```

#### Example: Create

```ts
const list_data_sync_property = await client.ListDataSyncProperty().create({
  database_id: 1,
})
```


### Login

Create an instance: `const login = client.Login()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const login = await client.Login().load({ id: 1 })
```


### McpEndpoint

Create an instance: `const mcp_endpoint = client.McpEndpoint()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `string` |  |
| `id` | `number` |  |
| `key` | `string` | The unique endpoint key that can be used to authorize for the MCP service. |
| `name` | `string` | The human readable name of the MCP endpoint for the user. |
| `workspace_id` | `number` |  |
| `workspace_name` | `string` |  |

#### Example: Load

```ts
const mcp_endpoint = await client.McpEndpoint().load({ id: 'mcp_endpoint_id' })
```

#### Example: List

```ts
const mcp_endpoints = await client.McpEndpoint().list()
```

#### Example: Create

```ts
const mcp_endpoint = await client.McpEndpoint().create({
  name: 'example_name',
})
```


### Message

Create an instance: `const message = client.Message()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `messages` | `any[]` |  |

#### Example: List

```ts
const messages = await client.Message().list({ chat_id: "example" })
```


### Notification

Create an instance: `const notification = client.Notification()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `baserow_id` | `number` | The id of the notification. |
| `created_on` | `string` | The date and time that the notification was created. |
| `data` | `any` | The data associated with the notification. |
| `id` | `string` | The id of the notification. |
| `read` | `boolean` | If True, then the notification has been read by the user. |
| `sender` | `any` | The user that sent the notification. |
| `type` | `string` | The type of notification |
| `workspace` | `string` | The workspace that the notification is in (if any). |

#### Example: Create

```ts
const notification = await client.Notification().create({
  id: 1,
  baserow_id: 1,
  created_on: 'example_created_on',
  data: 'example_data',
  sender: 'example_sender',
  type: 'example_type',
})
```


### OnboardingPromptSuggestion

Create an instance: `const onboarding_prompt_suggestion = client.OnboardingPromptSuggestion()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `industry` | `string` | The industry the user works in. |
| `language` | `string` | ISO 639 language code the suggestions must be written in. |
| `suggestions` | `any[]` |  |
| `team` | `string` | The team the user is part of. |

#### Example: Create

```ts
const onboarding_prompt_suggestion = await client.OnboardingPromptSuggestion().create({
})
```


### OpenApiRoleAssignment

Create an instance: `const open_api_role_assignment = client.OpenApiRoleAssignment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `items` | `any[]` |  |
| `role` | `string` | The uid of the role assigned to the user or team in the given workspace. |
| `scope_id` | `number` | The unique scope ID. |
| `scope_type` | `string` | The type of the scope object. |
| `subject` | `any` | The structure of the subject field depends on the subject typereturned and will have additional fields accordingly |
| `subject_id` | `number` | The subject ID. |
| `subject_type` | `string` | The subject type. |

#### Example: Load

```ts
const open_api_role_assignment = await client.OpenApiRoleAssignment().load({ workspace_id: 1 })
```

#### Example: Create

```ts
const open_api_role_assignment = await client.OpenApiRoleAssignment().create({
  workspace_id: 1,
  items: [],
  role: 'example_role',
  scope_id: 1,
  scope_type: 'example_scope_type',
  subject_id: 1,
  subject_type: 'example_subject_type',
})
```


### Page

Create an instance: `const page = client.Page()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `builder_id` | `number` |  |
| `graph` | `any` | A JSON serialized graph containing the points and edges. |
| `id` | `number` |  |
| `name` | `string` |  |
| `order` | `number` | Lowest first. |
| `path` | `string` |  |
| `path_params` | `any[]` |  |
| `query_params` | `any[]` |  |
| `role_type` | `string` | Role type is used in conjunction with roles to control access to this page. |
| `roles` | `any` | List of user roles that are associated with this page. |
| `shared` | `boolean` |  |
| `visibility` | `string` | Controls the page's visibility. |

#### Example: Create

```ts
const page = await client.Page().create({
  builder_id: 1,
  name: 'example_name',
  path: 'example_path',
})
```


### PaginationSerializerExampleRowResponseSerializerWithUser

Create an instance: `const pagination_serializer_example_row_response_serializer_with_user = client.PaginationSerializerExampleRowResponseSerializerWithUser()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` | The total amount of results. |
| `next` | `string` | URL to the next page. |
| `previous` | `string` | URL to the previous page. |
| `results` | `any[]` |  |

#### Example: Load

```ts
const pagination_serializer_example_row_response_serializer_with_user = await client.PaginationSerializerExampleRowResponseSerializerWithUser().load({ table_id: 1 })
```


### PaginationSerializerLinkRowValue

Create an instance: `const pagination_serializer_link_row_value = client.PaginationSerializerLinkRowValue()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` | The total amount of results. |
| `next` | `string` | URL to the next page. |
| `previous` | `string` | URL to the previous page. |
| `results` | `any[]` |  |

#### Example: Load

```ts
const pagination_serializer_link_row_value = await client.PaginationSerializerLinkRowValue().load({ field_id: 1, view_id: 'view_id' })
```


### PaginationSerializerNotificationRecipient

Create an instance: `const pagination_serializer_notification_recipient = client.PaginationSerializerNotificationRecipient()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` | The total amount of results. |
| `next` | `string` | URL to the next page. |
| `previous` | `string` | URL to the previous page. |
| `results` | `any[]` |  |

#### Example: Load

```ts
const pagination_serializer_notification_recipient = await client.PaginationSerializerNotificationRecipient().load({ workspace_id: 1 })
```


### PaginationSerializerRowComment

Create an instance: `const pagination_serializer_row_comment = client.PaginationSerializerRowComment()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` | The total amount of results. |
| `id` | `string` |  |
| `next` | `string` | URL to the next page. |
| `previous` | `string` | URL to the previous page. |
| `results` | `any[]` |  |

#### Example: Load

```ts
const pagination_serializer_row_comment = await client.PaginationSerializerRowComment().load({ row_id: 1, table_id: 1 })
```


### PaginationSerializerTrashContent

Create an instance: `const pagination_serializer_trash_content = client.PaginationSerializerTrashContent()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` | The total amount of results. |
| `next` | `string` | URL to the next page. |
| `previous` | `string` | URL to the previous page. |
| `results` | `any[]` |  |

#### Example: Load

```ts
const pagination_serializer_trash_content = await client.PaginationSerializerTrashContent().load({ workspace_id: 1 })
```


### PaginationSerializerWithGalleryViewFieldOptionsExampleRow

Create an instance: `const pagination_serializer_with_gallery_view_field_options_example_row = client.PaginationSerializerWithGalleryViewFieldOptionsExampleRow()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` | The total amount of results. |
| `field_options` | `Record<string, any>` | An object containing the field id as key and the properties related to view as value. |
| `next` | `string` | URL to the next page. |
| `previous` | `string` | URL to the previous page. |
| `results` | `any[]` |  |
| `row_metadata` | `Record<string, any>` | An object keyed by row id with a value being an object containing additional metadata about that row. |

#### Example: Load

```ts
const pagination_serializer_with_gallery_view_field_options_example_row = await client.PaginationSerializerWithGalleryViewFieldOptionsExampleRow().load({ view_id: 1 })
```


### PaginationSerializerWithGridViewFieldOptionsExampleRow

Create an instance: `const pagination_serializer_with_grid_view_field_options_example_row = client.PaginationSerializerWithGridViewFieldOptionsExampleRow()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` | The total amount of results. |
| `field_options` | `Record<string, any>` | An object containing the field id as key and the properties related to view as value. |
| `next` | `string` | URL to the next page. |
| `previous` | `string` | URL to the previous page. |
| `results` | `any[]` |  |
| `row_metadata` | `Record<string, any>` | An object keyed by row id with a value being an object containing additional metadata about that row. |

#### Example: Load

```ts
const pagination_serializer_with_grid_view_field_options_example_row = await client.PaginationSerializerWithGridViewFieldOptionsExampleRow().load({ view_id: 1 })
```


### PaginationSerializerWithTimelineViewFieldOptionsExampleRow

Create an instance: `const pagination_serializer_with_timeline_view_field_options_example_row = client.PaginationSerializerWithTimelineViewFieldOptionsExampleRow()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` | The total amount of results. |
| `field_options` | `Record<string, any>` | An object containing the field id as key and the properties related to view as value. |
| `next` | `string` | URL to the next page. |
| `previous` | `string` | URL to the previous page. |
| `results` | `any[]` |  |
| `row_metadata` | `Record<string, any>` | An object keyed by row id with a value being an object containing additional metadata about that row. |

#### Example: Load

```ts
const pagination_serializer_with_timeline_view_field_options_example_row = await client.PaginationSerializerWithTimelineViewFieldOptionsExampleRow().load({ view_id: 1 })
```


### PasswordFieldAuthentication

Create an instance: `const password_field_authentication = client.PasswordFieldAuthentication()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `field_id` | `number` | The field where to check the password for. |
| `is_correct` | `boolean` | Indicates whether the provided password is correct. |
| `password` | `string` | The password to check. |
| `row_id` | `number` | The row where to check the password for. |

#### Example: Create

```ts
const password_field_authentication = await client.PasswordFieldAuthentication().create({
  field_id: 1,
  password: 'example_password',
  row_id: 1,
})
```


### PeriodicDataSyncInterval

Create an instance: `const periodic_data_sync_interval = client.PeriodicDataSyncInterval()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `automatically_deactivated` | `boolean` | Indicates whether the periodic data sync has been deactivated. |
| `interval` | `string` | * `MANUAL` - MANUAL * `DAILY` - DAILY * `HOURLY` - HOURLY |
| `when` | `string` |  |

#### Example: Load

```ts
const periodic_data_sync_interval = await client.PeriodicDataSyncInterval().load({ data_sync_id: 1 })
```


### Permission

Create an instance: `const permission = client.Permission()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | The permission manager name. |
| `permissions` | `any` | The content of the permission object for this permission manager. |

#### Example: List

```ts
const permissions = await client.Permission().list({ workspace_id: 1 })
```


### PublicBuilderWorkflowActionTypeBuilderWorkflowAction

Create an instance: `const public_builder_workflow_action_type_builder_workflow_action = client.PublicBuilderWorkflowActionTypeBuilderWorkflowAction()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ts
const public_builder_workflow_action_type_builder_workflow_actions = await client.PublicBuilderWorkflowActionTypeBuilderWorkflowAction().list({ page_id: 1 })
```


### PublicFormView

Create an instance: `const public_form_view = client.PublicFormView()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condition_groups` | `any[]` |  |
| `condition_type` | `string` | Indicates whether all (AND) or any (OR) of the conditions should match before shown. |
| `conditions` | `any[]` |  |
| `description` | `string` | If provided, then this value be will be shown under the field name. |
| `field` | `any` | The properties of the related field. |
| `field_component` | `string` | Indicates which field input component is used in the form. |
| `groups` | `any[]` |  |
| `name` | `string` | If provided, then this value will be visible above the field input. |
| `order` | `number` | The order that the field has in the form. |
| `required` | `boolean` | Indicates whether the field is required for the visitor to fill out. |
| `show_when_matching_conditions` | `boolean` | Indicates whether this field is visible when the conditions are met. |

#### Example: List

```ts
const public_form_views = await client.PublicFormView().list({ slug: "example" })
```


### PublicPaginationSerializerWithGalleryViewFieldOptions

Create an instance: `const public_pagination_serializer_with_gallery_view_field_options = client.PublicPaginationSerializerWithGalleryViewFieldOptions()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `field_1` | `string` | This field represents the `text` field. |
| `field_10` | `any` | This field represents the `last_modified_by` field. |
| `field_11` | `string` | This field represents the `created_on` field. |
| `field_12` | `any` | This field represents the `created_by` field. |
| `field_13` | `number` | This field represents the `duration` field. |
| `field_14` | `any[]` | This field represents the `link_row` field. |
| `field_15` | `any[]` | This field represents the `file` field. |
| `field_16` | `any` | This field represents the `single_select` field. |
| `field_17` | `any[]` | This field represents the `multiple_select` field. |
| `field_18` | `string` | This field represents the `phone_number` field. |
| `field_19` | `string` | This field represents the `formula` field. |
| `field_2` | `string` | This field represents the `long_text` field. |
| `field_20` | `string` | This field represents the `count` field. |
| `field_21` | `string` | This field represents the `rollup` field. |
| `field_22` | `string` | This field represents the `lookup` field. |
| `field_23` | `any[]` | This field represents the `multiple_collaborators` field. |
| `field_24` | `string` | This field represents the `uuid` field. |
| `field_25` | `number` | This field represents the `autonumber` field. |
| `field_26` | `boolean` | This field represents the `password` field. |
| `field_27` | `string` | This field represents the `form_view_edit_row` field. |
| `field_28` | `string` | This field represents the `button` field. |
| `field_29` | `string` | This field represents the `ai` field. |
| `field_3` | `string` | This field represents the `url` field. |
| `field_4` | `string` | This field represents the `email` field. |
| `field_5` | `string` | This field represents the `number` field. |
| `field_6` | `number` | This field represents the `rating` field. |
| `field_7` | `boolean` | This field represents the `boolean` field. |
| `field_8` | `string` | This field represents the `date` field. |
| `field_9` | `string` | This field represents the `last_modified` field. |
| `id` | `number` | The unique identifier of the row in the table. |
| `metadata` | `any` | Additional metadata for the row, if `include=metadata' is provided as query parameter. |
| `order` | `string` | Indicates the position of the row, lowest first and highest last. |

#### Example: List

```ts
const public_pagination_serializer_with_gallery_view_field_optionss = await client.PublicPaginationSerializerWithGalleryViewFieldOptions().list({ gallery_id: "example" })
```


### PublicPaginationSerializerWithGridViewFieldOptionsExample

Create an instance: `const public_pagination_serializer_with_grid_view_field_options_example = client.PublicPaginationSerializerWithGridViewFieldOptionsExample()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `field_1` | `string` | This field represents the `text` field. |
| `field_10` | `any` | This field represents the `last_modified_by` field. |
| `field_11` | `string` | This field represents the `created_on` field. |
| `field_12` | `any` | This field represents the `created_by` field. |
| `field_13` | `number` | This field represents the `duration` field. |
| `field_14` | `any[]` | This field represents the `link_row` field. |
| `field_15` | `any[]` | This field represents the `file` field. |
| `field_16` | `any` | This field represents the `single_select` field. |
| `field_17` | `any[]` | This field represents the `multiple_select` field. |
| `field_18` | `string` | This field represents the `phone_number` field. |
| `field_19` | `string` | This field represents the `formula` field. |
| `field_2` | `string` | This field represents the `long_text` field. |
| `field_20` | `string` | This field represents the `count` field. |
| `field_21` | `string` | This field represents the `rollup` field. |
| `field_22` | `string` | This field represents the `lookup` field. |
| `field_23` | `any[]` | This field represents the `multiple_collaborators` field. |
| `field_24` | `string` | This field represents the `uuid` field. |
| `field_25` | `number` | This field represents the `autonumber` field. |
| `field_26` | `boolean` | This field represents the `password` field. |
| `field_27` | `string` | This field represents the `form_view_edit_row` field. |
| `field_28` | `string` | This field represents the `button` field. |
| `field_29` | `string` | This field represents the `ai` field. |
| `field_3` | `string` | This field represents the `url` field. |
| `field_4` | `string` | This field represents the `email` field. |
| `field_5` | `string` | This field represents the `number` field. |
| `field_6` | `number` | This field represents the `rating` field. |
| `field_7` | `boolean` | This field represents the `boolean` field. |
| `field_8` | `string` | This field represents the `date` field. |
| `field_9` | `string` | This field represents the `last_modified` field. |
| `id` | `number` | The unique identifier of the row in the table. |
| `metadata` | `any` | Additional metadata for the row, if `include=metadata' is provided as query parameter. |
| `order` | `string` | Indicates the position of the row, lowest first and highest last. |

#### Example: List

```ts
const public_pagination_serializer_with_grid_view_field_options_examples = await client.PublicPaginationSerializerWithGridViewFieldOptionsExample().list({ grid_id: "example" })
```


### PublicPaginationSerializerWithTimelineViewFieldOptions

Create an instance: `const public_pagination_serializer_with_timeline_view_field_options = client.PublicPaginationSerializerWithTimelineViewFieldOptions()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `field_1` | `string` | This field represents the `text` field. |
| `field_10` | `any` | This field represents the `last_modified_by` field. |
| `field_11` | `string` | This field represents the `created_on` field. |
| `field_12` | `any` | This field represents the `created_by` field. |
| `field_13` | `number` | This field represents the `duration` field. |
| `field_14` | `any[]` | This field represents the `link_row` field. |
| `field_15` | `any[]` | This field represents the `file` field. |
| `field_16` | `any` | This field represents the `single_select` field. |
| `field_17` | `any[]` | This field represents the `multiple_select` field. |
| `field_18` | `string` | This field represents the `phone_number` field. |
| `field_19` | `string` | This field represents the `formula` field. |
| `field_2` | `string` | This field represents the `long_text` field. |
| `field_20` | `string` | This field represents the `count` field. |
| `field_21` | `string` | This field represents the `rollup` field. |
| `field_22` | `string` | This field represents the `lookup` field. |
| `field_23` | `any[]` | This field represents the `multiple_collaborators` field. |
| `field_24` | `string` | This field represents the `uuid` field. |
| `field_25` | `number` | This field represents the `autonumber` field. |
| `field_26` | `boolean` | This field represents the `password` field. |
| `field_27` | `string` | This field represents the `form_view_edit_row` field. |
| `field_28` | `string` | This field represents the `button` field. |
| `field_29` | `string` | This field represents the `ai` field. |
| `field_3` | `string` | This field represents the `url` field. |
| `field_4` | `string` | This field represents the `email` field. |
| `field_5` | `string` | This field represents the `number` field. |
| `field_6` | `number` | This field represents the `rating` field. |
| `field_7` | `boolean` | This field represents the `boolean` field. |
| `field_8` | `string` | This field represents the `date` field. |
| `field_9` | `string` | This field represents the `last_modified` field. |
| `id` | `number` | The unique identifier of the row in the table. |
| `metadata` | `any` | Additional metadata for the row, if `include=metadata' is provided as query parameter. |
| `order` | `string` | Indicates the position of the row, lowest first and highest last. |

#### Example: List

```ts
const public_pagination_serializer_with_timeline_view_field_optionss = await client.PublicPaginationSerializerWithTimelineViewFieldOptions().list({ timeline_id: "example" })
```


### PublicViewAuth

Create an instance: `const public_view_auth = client.PublicViewAuth()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_token` | `string` |  |
| `password` | `string` |  |

#### Example: Create

```ts
const public_view_auth = await client.PublicViewAuth().create({
  view_id: 'example_view_id',
  password: 'example_password',
})
```


### PublicViewInfo

Create an instance: `const public_view_info = client.PublicViewInfo()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `database_id` | `number` |  |
| `db_index` | `boolean` | If true, then an index will be added to the Baserow field to increase lookup and filter speed. |
| `description` | `string` | Field description |
| `field_constraints` | `string` | The constraints applied to this field. |
| `id` | `number` |  |
| `immutable_properties` | `boolean` | Indicates whether the field properties are immutable. |
| `immutable_type` | `boolean` | Indicates whether the field type is immutable. |
| `name` | `string` |  |
| `order` | `number` | Lowest first. |
| `primary` | `boolean` | Indicates if the field is a primary field. |
| `read_only` | `boolean` | Indicates whether the field is a read only field. |
| `table_id` | `number` |  |
| `type` | `string` | The type of the related field. |
| `workspace_id` | `number` |  |

#### Example: List

```ts
const public_view_infos = await client.PublicViewInfo().list({ view_id: "example" })
```


### RelatedField

Create an instance: `const related_field = client.RelatedField()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### RowComment

Create an instance: `const row_comment = client.RowComment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `edited` | `string` |  |
| `first_name` | `string` |  |
| `id` | `number` |  |
| `message` | `string` | The rich text comment content. |
| `row_id` | `number` | The id of the row the comment is for. |
| `table_id` | `number` | The table the row this comment is for is found in. |
| `trashed` | `boolean` |  |
| `updated_on` | `string` |  |
| `user_id` | `number` | The user who made the comment. |

#### Example: Create

```ts
const row_comment = await client.RowComment().create({
  row_id: 1,
  table_id: 1,
})
```


### RowHistory

Create an instance: `const row_history = client.RowHistory()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_command_type` | `string` | The type of command that was performed. |
| `action_type` | `string` | The type of the action that was performed. |
| `after` | `any` | The mapping between field_ids and values for the row after the action was performed. |
| `before` | `any` | The mapping between field_ids and values for the row before the action was performed. |
| `fields_metadata` | `any` | The metadata of the fields that were changed. |
| `id` | `number` |  |
| `timestamp` | `string` | The timestamp of the action that was performed. |
| `user` | `any` | The user that performed the action. |

#### Example: List

```ts
const row_historys = await client.RowHistory().list({ row_id: 1, table_id: 1 })
```


### SecureFileServe

Create an instance: `const secure_file_serve = client.SecureFileServe()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const secure_file_serve = await client.SecureFileServe().load({ signed_data: 'signed_data' })
```


### Setting

Create an instance: `const setting = client.Setting()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_deletion_grace_delay` | `number` | Number of days after the last login for an account pending deletion to be deleted |
| `allow_global_workspace_creation` | `boolean` | Indicates whether all users can create workspaces, or just staff. |
| `allow_new_signups` | `boolean` | Indicates whether new users can create a new account when signing up. |
| `allow_reporting_abuse` | `boolean` | Indicates whether anonymous visitors can report publicly shared resources, like views and forms, for abuse. |
| `allow_reset_password` | `boolean` | Indicates whether users can request a password reset link. |
| `allow_signups_via_workspace_invitations` | `boolean` | Indicates whether invited users can create an account when signing up, even if allow_new_signups is disabled. |
| `co_branding_logo` | `any` | Co-branding logo that's placed next to the Baserow logo (176x29). |
| `email_verification` | `any` | Controls whether user email addresses have to be verified. |
| `inbound_email_enabled` | `boolean` | Whether this instance is configured to receive inbound email for the automation email trigger. |
| `show_admin_signup_page` | `boolean` | Indicates that there are no admin users in the database yet, so in the frontend the signup form will be shown instead of the login page. |
| `show_baserow_help_request` | `boolean` | Indicates whether the `We need your help!` message will be shown on the dashboard |
| `track_workspace_usage` | `boolean` | Runs a job once per day which calculates per workspace row counts and file storage usage, displayed on the admin workspace page. |
| `verify_import_signature` | `boolean` | Indicates whether the signature of imported files should be verified. |

#### Example: Load

```ts
const setting = await client.Setting().load()
```


### Snapshot

Create an instance: `const snapshot = client.Snapshot()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `created_by` | `any` |  |
| `created_on` | `string` |  |
| `error_code` | `string` | A machine readable error code indicating why the job failed. |
| `human_readable_error` | `string` | A human readable error message indicating what went wrong. |
| `id` | `number` |  |
| `name` | `string` |  |
| `progress_percentage` | `number` | A percentage indicating how far along the job is. |
| `snapshot_from_application` | `number` |  |
| `state` | `string` | Indicates the state of the import job. |
| `type` | `string` | The type of the job. |
| `updated_on` | `string` |  |

#### Example: Load

```ts
const snapshot = await client.Snapshot().load({ application_id: 1 })
```

#### Example: Create

```ts
const snapshot = await client.Snapshot().create({
  application_id: 1,
  name: 'example_name',
})
```


### Table

Create an instance: `const table = client.Table()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Indicates whether the web hook is active. |
| `calls` | `any[]` | All the calls that this webhook made. |
| `created_on` | `string` |  |
| `data` | `any[]` | A list of rows that needs to be created as initial table data. |
| `data_sync` | `Record<string, any>` |  |
| `database_id` | `number` |  |
| `event_config` | `any[]` | A list containing the addition event options. |
| `events` | `Record<string, any>` | A list containing the events that will trigger this webhook. |
| `failed_triggers` | `number` | The amount of failed webhook calls. |
| `first_row_header` | `boolean` | Indicates if the first provided row is the header. |
| `headers` | `Record<string, any>` | The additional headers as an object where the key is the name and the value the value. |
| `id` | `number` |  |
| `importer_type` | `string` | The frontend importer identifier used to parse the file. |
| `include_all_events` | `boolean` | Indicates whether this webhook should listen to all events. |
| `name` | `string` | An internal name of the webhook. |
| `order` | `number` | Lowest first. |
| `original_file_name` | `string` | The original name of the uploaded file. |
| `request_method` | `string` | The request method that be used when the event occurs. |
| `updated_on` | `string` |  |
| `url` | `string` | The URL that must be called when the webhook is triggered. |
| `use_user_field_names` | `boolean` | Indicates whether the field names must be used as payload key instead of the id. |

#### Example: Load

```ts
const table = await client.Table().load({ id: 1 })
```

#### Example: Create

```ts
const table = await client.Table().create({
  database_id: 1,
  name: 'example_name',
  url: 'example_url',
})
```


### TableWebhook

Create an instance: `const table_webhook = client.TableWebhook()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` | Indicates whether the web hook is active. |
| `calls` | `any[]` | All the calls that this webhook made. |
| `created_on` | `string` |  |
| `event_config` | `any[]` | A list containing the addition event options. |
| `events` | `Record<string, any>` | A list containing the events that will trigger this webhook. |
| `failed_triggers` | `number` | The amount of failed webhook calls. |
| `headers` | `Record<string, any>` | The additional headers as an object where the key is the name and the value the value. |
| `id` | `number` |  |
| `include_all_events` | `boolean` | Indicates whether this webhook should listen to all events. |
| `name` | `string` | An internal name of the webhook. |
| `request_method` | `string` | The request method that be used when the event occurs. |
| `updated_on` | `string` |  |
| `url` | `string` | The URL that must be called when the webhook is triggered. |
| `use_user_field_names` | `boolean` | Indicates whether the field names must be used as payload key instead of the id. |

#### Example: Load

```ts
const table_webhook = await client.TableWebhook().load({ id: 1 })
```


### TableWebhookTestCall

Create an instance: `const table_webhook_test_call = client.TableWebhookTestCall()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `event_type` | `string` | The event type that must be used for the test call. |
| `headers` | `Record<string, any>` | The additional headers as an object where the key is the name and the value the value. |
| `id` | `string` |  |
| `is_unreachable` | `boolean` | Indicates whether the provided URL could be reached. |
| `request` | `string` | A text copy of the request headers and body. |
| `request_method` | `string` | The request method that be used when the event occurs. |
| `response` | `string` | A text copy of the response headers and body. |
| `status_code` | `number` | The HTTP response status code. |
| `url` | `string` | The URL that must be called when the webhook is triggered. |
| `use_user_field_names` | `boolean` | Indicates whether the field names must be used as payload key instead of the id. |

#### Example: Create

```ts
const table_webhook_test_call = await client.TableWebhookTestCall().create({
  id: 1,
  event_type: 'example_event_type',
  url: 'example_url',
})
```


### TableWithoutDataSync

Create an instance: `const table_without_data_sync = client.TableWithoutDataSync()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `database_id` | `number` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `order` | `number` | Lowest first. |

#### Example: List

```ts
const table_without_data_syncs = await client.TableWithoutDataSync().list()
```


### Team

Create an instance: `const team = client.Team()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `default_role` | `string` | The uid of the role this team has in its workspace. |
| `id` | `number` |  |
| `name` | `string` | A human friendly name for this team. |
| `subject_count` | `number` | The amount of subjects (e.g. |
| `subject_sample` | `any[]` | A sample, by default 10, of the most recent subjects to join this team. |
| `subjects` | `any[]` | An array of subject ID/type objects to be used during team create and update. |
| `updated_on` | `string` |  |
| `workspace` | `number` | The workspace that this team belongs to. |

#### Example: Load

```ts
const team = await client.Team().load({ id: 1 })
```

#### Example: Create

```ts
const team = await client.Team().create({
  workspace_id: 'example_workspace_id',
  name: 'example_name',
})
```


### TeamSubject

Create an instance: `const team_subject = client.TeamSubject()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `subject_id` | `number` | The unique subject ID. |
| `subject_type` | `string` | Returns the TeamSubject's `subject_type` natural key. |
| `subject_user_email` | `string` | The user subject's email address. |
| `team` | `number` | The team this subject belongs to. |

#### Example: Load

```ts
const team_subject = await client.TeamSubject().load({ id: 1, team_id: 'team_id' })
```

#### Example: List

```ts
const team_subjects = await client.TeamSubject().list({ id: "example" })
```

#### Example: Create

```ts
const team_subject = await client.TeamSubject().create({
  id: 'example_id',
})
```


### Template

Create an instance: `const template = client.Template()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `error_code` | `string` | A machine readable error code indicating why the job failed. |
| `human_readable_error` | `string` | A human readable error message indicating what went wrong. |
| `id` | `number` |  |
| `installed_applications` | `any` |  |
| `name` | `string` |  |
| `progress_percentage` | `number` | A percentage indicating how far along the job is. |
| `state` | `string` | Indicates the state of the import job. |
| `template` | `any` |  |
| `templates` | `any[]` |  |
| `type` | `string` | The type of the job. |
| `updated_on` | `string` |  |
| `workspace` | `any` |  |

#### Example: List

```ts
const templates = await client.Template().list()
```

#### Example: Create

```ts
const template = await client.Template().create({
  install_id: 1,
  template_id: 1,
  name: 'example_name',
  progress_percentage: 1,
  state: 'example_state',
})
```


### Token

Create an instance: `const token = client.Token()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `key` | `string` | The unique token key that can be used to authorize for the table row endpoints. |
| `name` | `string` | The human readable name of the database token for the user. |
| `permissions` | `Record<string, any>` | Indicates per operation which permissions the database token has within the whole workspace. |
| `rotate_key` | `boolean` | Indicates if a new key must be generated. |
| `workspace` | `number` | Only the tables of the workspace can be accessed. |

#### Example: Load

```ts
const token = await client.Token().load({ id: 1 })
```

#### Example: List

```ts
const tokens = await client.Token().list()
```

#### Example: Create

```ts
const token = await client.Token().create({
  name: 'example_name',
  workspace: 1,
})
```


### Trash

Create an instance: `const trash = client.Trash()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `applications` | `any[]` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `trashed` | `boolean` |  |

#### Example: List

```ts
const trashs = await client.Trash().list()
```


### TwoFactorAuthTypeTwoFactorAuth

Create an instance: `const two_factor_auth_type_two_factor_auth = client.TwoFactorAuthTypeTwoFactorAuth()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const two_factor_auth_type_two_factor_auth = await client.TwoFactorAuthTypeTwoFactorAuth().load()
```

#### Example: Create

```ts
const two_factor_auth_type_two_factor_auth = await client.TwoFactorAuthTypeTwoFactorAuth().create({
})
```


### Type

Create an instance: `const type = client.Type()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `array_formula_type` | `any` |  |
| `date_force_timezone` | `string` | Force a timezone for the field overriding user profile settings. |
| `date_format` | `any` | EU (day/month/year), US (month/day/year), or ISO (year-month-day) * `EU` - European (D/M/Y) * `US` - US (M/D/Y) * `ISO` - ISO (Y-M-D) |
| `date_include_time` | `boolean` | Indicates if the field also includes a time. |
| `date_show_tzinfo` | `boolean` | Indicates if the time zone should be shown. |
| `date_time_format` | `any` | 24 (14:30) or 12 (02:30 PM) * `24` - 24 hour * `12` - 12 hour |
| `duration_format` | `any` | The format of the duration. |
| `error` | `string` |  |
| `formula` | `string` |  |
| `formula_type` | `string` | * `invalid` - invalid * `text` - text * `char` - char * `button` - button * `link` - link * `date_interval` - date_interval * `duration` - duration * `date` - date * `boolean` - boolean * `number` - number * `array` - array *… |
| `name` | `string` |  |
| `nullable` | `boolean` |  |
| `number_decimal_places` | `any` | The amount of digits allowed after the point. |
| `number_prefix` | `string` | The prefix to use for the field. |
| `number_separator` | `any` | The thousand and decimal separator to use for the field. |
| `number_suffix` | `string` | The suffix to use for the field. |

#### Example: Create

```ts
const type = await client.Type().create({
  formula_id: 1,
  formula: 'example_formula',
  name: 'example_name',
})
```


### UniqueRowValue

Create an instance: `const unique_row_value = client.UniqueRowValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `values` | `any[]` |  |

#### Example: List

```ts
const unique_row_values = await client.UniqueRowValue().list({ field_id: 1 })
```


### UpdateFieldPermission

Create an instance: `const update_field_permission = client.UpdateFieldPermission()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_in_forms` | `boolean` | Whether to allow this field to be shown in forms. |
| `can_write_values` | `boolean` | Whether the user can write values to this field. |
| `field_id` | `number` | The ID of the field whose permissions were updated. |
| `id` | `string` |  |
| `role` | `string` | The role required to update the data for this field. |
| `subjects` | `any[]` |  |

#### Example: Load

```ts
const update_field_permission = await client.UpdateFieldPermission().load({ id: 1 })
```


### User

Create an instance: `const user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authenticate` | `boolean` | Indicates whether an authentication JWT should be generated and be included in the response. |
| `captcha_token` | `string` | The captcha response token, required when captcha is enabled. |
| `date_joined` | `string` |  |
| `email` | `string` | The email address is also going to be the username. |
| `id` | `number` |  |
| `is_active` | `boolean` | Designates whether this user should be treated as active. |
| `is_staff` | `boolean` | Designates whether this user is an admin and has access to all workspaces and Baserow's admin areas. |
| `language` | `string` | An ISO 639 language code (with optional variant) selected by the user. |
| `last_login` | `string` |  |
| `name` | `string` |  |
| `password` | `string` |  |
| `template_id` | `number` | The id of the template that must be installed after creating the account. |
| `two_factor_auth` | `Record<string, any>` | The user's two factor auth provider state, or null when no provider is configured. |
| `username` | `string` |  |
| `workspace_invitation_token` | `string` | If provided and valid, the user accepts the workspace invitation and will have access to the workspace after signing up. |
| `workspaces` | `any[]` |  |

#### Example: List

```ts
const users = await client.User().list()
```

#### Example: Create

```ts
const user = await client.User().create({
  email: 'example_email',
  name: 'example_name',
  password: 'example_password',
  username: 'example_username',
})
```


### UserFile

Create an instance: `const user_file = client.UserFile()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `image_height` | `number` |  |
| `image_width` | `number` |  |
| `is_image` | `boolean` |  |
| `mime_type` | `string` |  |
| `name` | `string` |  |
| `original_name` | `string` |  |
| `size` | `number` |  |
| `thumbnails` | `Record<string, any>` |  |
| `uploaded_at` | `string` |  |
| `url` | `string` |  |

#### Example: Create

```ts
const user_file = await client.UserFile().create({
  slug: 'example_slug',
  original_name: 'example_original_name',
  size: 1,
})
```


### UserSource

Create an instance: `const user_source = client.UserSource()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `RelayState` | `string` | The frontend URL where redirect the authenticated user. |
| `SAMLResponse` | `string` | The encoded SAML response from the IdP. |
| `access_token` | `string` | 'access_token' can be used to authorize for other endpoints that require authorization. |
| `id` | `string` |  |
| `refresh` | `string` |  |

#### Example: Load

```ts
const user_source = await client.UserSource().load({ id: 1 })
```

#### Example: List

```ts
const user_sources = await client.UserSource().list({ application_id: 1 })
```

#### Example: Create

```ts
const user_source = await client.UserSource().create({
  RelayState: 'example_RelayState',
  SAMLResponse: 'example_SAMLResponse',
  refresh: 'example_refresh',
})
```


### UserSourceUserSource

Create an instance: `const user_source_user_source = client.UserSourceUserSource()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### UserSourceUserSourceRole

Create an instance: `const user_source_user_source_role = client.UserSourceUserSourceRole()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const user_source_user_source_role = await client.UserSourceUserSourceRole().load({ application_id: 1 })
```


### UserWorkspaceInvitation

Create an instance: `const user_workspace_invitation = client.UserWorkspaceInvitation()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `email` | `string` | The email address of the user that the invitation is meant for. |
| `email_exists` | `boolean` |  |
| `id` | `number` |  |
| `invited_by` | `string` |  |
| `workspace` | `string` |  |
| `workspace_id` | `number` |  |

#### Example: Load

```ts
const user_workspace_invitation = await client.UserWorkspaceInvitation().load({ token: 'token' })
```


### UsersPerUserSource

Create an instance: `const users_per_user_source = client.UsersPerUserSource()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const users_per_user_source = await client.UsersPerUserSource().load({ application_id: 1 })
```


### View

Create an instance: `const view = client.View()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_public_export` | `boolean` | Indicates whether it's allowed to export a publicly shared view. |
| `decorations` | `any[]` |  |
| `default_row_values` | `any[]` |  |
| `filter_groups` | `any[]` |  |
| `filter_type` | `string` | Indicates whether all the rows should apply to all filters (AND) or to any filter (OR). |
| `filters` | `any[]` |  |
| `filters_disabled` | `boolean` | Allows users to see results unfiltered while still keeping the filters saved for the view. |
| `group_bys` | `any[]` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `order` | `number` |  |
| `owned_by_id` | `number` |  |
| `ownership_type` | `string` |  |
| `public_view_has_password` | `boolean` | Indicates whether the public view is password protected or not. |
| `show_logo` | `boolean` |  |
| `sortings` | `any[]` |  |
| `table` | `Record<string, any>` |  |
| `table_id` | `number` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const view = await client.View().load({ id: 1 })
```


### ViewDefaultValue

Create an instance: `const view_default_value = client.ViewDefaultValue()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `view_default_values` | `any[]` |  |


### ViewFieldOption

Create an instance: `const view_field_option = client.ViewFieldOption()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const view_field_option = await client.ViewFieldOption().load({ id: 1 })
```


### ViewFilter

Create an instance: `const view_filter = client.ViewFilter()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `field` | `number` | The field of which the value must be compared to the filter value. |
| `group` | `number` | The id of the filter group this filter belongs to. |
| `id` | `number` |  |
| `preload_values` | `Record<string, any>` | Can contain unique preloaded values per filter. |
| `type` | `string` | Indicates how the field's value must be compared to the filter's value. |
| `value` | `string` | The filter value that must be compared to the field's value. |
| `view` | `number` | The view to which the filter applies. |

#### Example: Load

```ts
const view_filter = await client.ViewFilter().load({ id: 1 })
```

#### Example: List

```ts
const view_filters = await client.ViewFilter().list({ id: 1 })
```

#### Example: Create

```ts
const view_filter = await client.ViewFilter().create({
  id: 1,
  field: 1,
  type: 'example_type',
})
```


### ViewFilterGroup

Create an instance: `const view_filter_group = client.ViewFilterGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `filter_type` | `string` | Indicates whether all the rows should apply to all filters (AND) or to any filter (OR) in the group to be shown. |
| `id` | `number` |  |
| `parent_group` | `number` |  |
| `view` | `number` | The view to which the filter group applies to. |

#### Example: Load

```ts
const view_filter_group = await client.ViewFilterGroup().load({ id: 1 })
```

#### Example: Create

```ts
const view_filter_group = await client.ViewFilterGroup().create({
  id: 1,
})
```


### ViewGroupBy

Create an instance: `const view_group_by = client.ViewGroupBy()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `field` | `number` | The field that must be grouped by. |
| `id` | `number` |  |
| `order` | `string` | Indicates the sort order direction. |
| `priority` | `number` | Position of this group by in the ordering chain. |
| `type` | `string` | Indicates the sort type. |
| `view` | `number` | The view to which the group by applies. |
| `width` | `number` | The pixel width of the group by in the related view. |

#### Example: Load

```ts
const view_group_by = await client.ViewGroupBy().load({ id: 1 })
```

#### Example: List

```ts
const view_group_bys = await client.ViewGroupBy().list({ id: 1 })
```

#### Example: Create

```ts
const view_group_by = await client.ViewGroupBy().create({
  id: 1,
  field: 1,
})
```


### ViewSort

Create an instance: `const view_sort = client.ViewSort()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `field` | `number` | The field that must be sorted on. |
| `id` | `number` |  |
| `order` | `string` | Indicates the sort order direction. |
| `priority` | `number` | Position of this sorting in the ordering chain. |
| `type` | `string` | Indicates the sort type. |
| `view` | `number` | The view to which the sort applies. |

#### Example: Load

```ts
const view_sort = await client.ViewSort().load({ id: 1 })
```

#### Example: List

```ts
const view_sorts = await client.ViewSort().list({ id: 1 })
```

#### Example: Create

```ts
const view_sort = await client.ViewSort().create({
  id: 1,
  field: 1,
})
```


### ViewView

Create an instance: `const view_view = client.ViewView()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const view_view = await client.ViewView().load({ table_id: 1 })
```

#### Example: Create

```ts
const view_view = await client.ViewView().create({
  table_id: 1,
})
```


### Workspace

Create an instance: `const workspace = client.Workspace()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_features` | `string` |  |
| `base_url` | `string` | The base URL where the user can publicly accept his invitation. |
| `captcha_token` | `string` | The captcha response token, required when captcha is enabled. |
| `created_on` | `string` |  |
| `email` | `string` | The email address of the user that the invitation is meant for. |
| `generative_ai_models_enabled` | `string` | Generative AI models available in this workspace. |
| `has_more` | `boolean` | Whether there are more results available for pagination |
| `highest_role_uid` | `string` | Enterprise or advanced only: the highest role uid assigned to this user in this workspace on anything, including roles from teams. |
| `id` | `number` | Workspace id. |
| `name` | `string` | User defined name. |
| `order` | `number` | The requesting user's order within the workspace users. |
| `permissions` | `string` | The permissions that the user is going to get within the workspace after accepting the invitation. |
| `results` | `any[]` | Priority-ordered search results |
| `role_uid` | `string` | Enterprise or advanced only: the uid of the role that is assigned to this workspace user in this workspace. |
| `teams` | `any[]` | Enterprise only: a list of team IDs and names, which this workspace user belongs to in this workspace. |
| `to_be_deleted` | `boolean` | True if user account is pending deletion. |
| `two_factor_auth` | `string` |  |
| `unread_notifications_count` | `number` | The number of unread notifications for the requesting user. |
| `user_id` | `number` | The user that has access to the workspace. |
| `users` | `any[]` | List of all workspace users. |
| `workspace` | `number` | The workspace that the user will get access to once the invitation is accepted. |

#### Example: Load

```ts
const workspace = await client.Workspace().load({ id: 1 })
```

#### Example: List

```ts
const workspaces = await client.Workspace().list()
```

#### Example: Create

```ts
const workspace = await client.Workspace().create({
  id: 1,
  base_url: 'example_base_url',
})
```


### WorkspaceInvitation

Create an instance: `const workspace_invitation = client.WorkspaceInvitation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `email` | `string` | The email address of the user that the invitation is meant for. |
| `id` | `number` |  |
| `permissions` | `string` | The permissions that the user is going to get within the workspace after accepting the invitation. |
| `workspace` | `number` | The workspace that the user will get access to once the invitation is accepted. |

#### Example: Load

```ts
const workspace_invitation = await client.WorkspaceInvitation().load({ id: 1 })
```

#### Example: Create

```ts
const workspace_invitation = await client.WorkspaceInvitation().create({
  invitation_id: 1,
  email: 'example_email',
  workspace: 1,
})
```


### WorkspaceStructure

Create an instance: `const workspace_structure = client.WorkspaceStructure()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `name` | `string` |  |
| `tables` | `string` |  |

#### Example: Load

```ts
const workspace_structure = await client.WorkspaceStructure().load({ id: 'workspace_structure_id' })
```


### WorkspaceUser

Create an instance: `const workspace_user = client.WorkspaceUser()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_on` | `string` |  |
| `email` | `string` | User email. |
| `id` | `number` |  |
| `name` | `string` | User defined name. |
| `permissions` | `string` | The permissions that the user has within the workspace. |
| `to_be_deleted` | `boolean` | True if user account is pending deletion. |
| `two_factor_auth` | `string` |  |
| `user_id` | `number` | The user that has access to the workspace. |
| `workspace` | `number` | The workspace that the user has access to. |


### WorkspaceUserWorkspace

Create an instance: `const workspace_user_workspace = client.WorkspaceUserWorkspace()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_features` | `string` |  |
| `generative_ai_models_enabled` | `string` | Generative AI models available in this workspace. |
| `id` | `number` | Workspace id. |
| `name` | `string` | Workspace name. |
| `order` | `number` | The requesting user's order within the workspace users. |
| `permissions` | `string` | The requesting user's permissions for the workspace. |
| `unread_notifications_count` | `number` | The number of unread notifications for the requesting user. |
| `users` | `any[]` | List of all workspace users. |

#### Example: Create

```ts
const workspace_user_workspace = await client.WorkspaceUserWorkspace().create({
})
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Open types

3 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `database_table_grid_view` | `field_id` | 4 | 0 levels |
| `database_table_grid_view` | `value` | 4 | 0 levels |
| `last_viewed_item` | `item` | 4 | 2 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
baserow/
├── src/
│   ├── BaserowSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { BaserowSDK } from '@voxgig-sdk/baserow-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const aiprovidertype = client.AiProviderType()
await aiprovidertype.list()

// aiprovidertype.data() now returns the aiprovidertype data from the last `list`
// aiprovidertype.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
