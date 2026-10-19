"use strict";
// Baserow Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.BaserowSDK = exports.BaserowEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AbuseReportEntity_1 = require("./entity/AbuseReportEntity");
const AdminEntity_1 = require("./entity/AdminEntity");
const AdminDashboardEntity_1 = require("./entity/AdminDashboardEntity");
const AdminDataScannerEntity_1 = require("./entity/AdminDataScannerEntity");
const AdminViewEntity_1 = require("./entity/AdminViewEntity");
const AdminWorkspaceOptionEntity_1 = require("./entity/AdminWorkspaceOptionEntity");
const AgentEntity_1 = require("./entity/AgentEntity");
const AgentPaginationAgentEntity_1 = require("./entity/AgentPaginationAgentEntity");
const AiAssistantEntity_1 = require("./entity/AiAssistantEntity");
const AiProviderEntity_1 = require("./entity/AiProviderEntity");
const AiProviderFeatureSettingEntity_1 = require("./entity/AiProviderFeatureSettingEntity");
const AiProviderModelEntity_1 = require("./entity/AiProviderModelEntity");
const AiProviderModelDiscoveryEntity_1 = require("./entity/AiProviderModelDiscoveryEntity");
const AiProviderModelUsageEntryEntity_1 = require("./entity/AiProviderModelUsageEntryEntity");
const AiProviderModelsTestEntity_1 = require("./entity/AiProviderModelsTestEntity");
const AiProviderTypeEntity_1 = require("./entity/AiProviderTypeEntity");
const ApplicationEntity_1 = require("./entity/ApplicationEntity");
const ApplicationApplicationEntity_1 = require("./entity/ApplicationApplicationEntity");
const AssistantChatEntity_1 = require("./entity/AssistantChatEntity");
const AuditLogEntity_1 = require("./entity/AuditLogEntity");
const AuditLogActionTypeEntity_1 = require("./entity/AuditLogActionTypeEntity");
const AuditLogUserEntity_1 = require("./entity/AuditLogUserEntity");
const AuthEntity_1 = require("./entity/AuthEntity");
const AuthenticationProviderAuthProviderEntity_1 = require("./entity/AuthenticationProviderAuthProviderEntity");
const AutomationNodeEntity_1 = require("./entity/AutomationNodeEntity");
const AutomationNodeHistoryEntity_1 = require("./entity/AutomationNodeHistoryEntity");
const AutomationNodeResultEntity_1 = require("./entity/AutomationNodeResultEntity");
const AutomationNodeTypeAutomationNodeEntity_1 = require("./entity/AutomationNodeTypeAutomationNodeEntity");
const AutomationWorkflowEntity_1 = require("./entity/AutomationWorkflowEntity");
const AutomationWorkflowHistoryEntity_1 = require("./entity/AutomationWorkflowHistoryEntity");
const BuilderDataSourceEntity_1 = require("./entity/BuilderDataSourceEntity");
const BuilderDomainEntity_1 = require("./entity/BuilderDomainEntity");
const BuilderElementEntity_1 = require("./entity/BuilderElementEntity");
const BuilderPageEntity_1 = require("./entity/BuilderPageEntity");
const BuilderPreviewEntity_1 = require("./entity/BuilderPreviewEntity");
const BuilderPreviewGrantEntity_1 = require("./entity/BuilderPreviewGrantEntity");
const BuilderPreviewHandoffEntity_1 = require("./entity/BuilderPreviewHandoffEntity");
const BuilderPublicEntity_1 = require("./entity/BuilderPublicEntity");
const BuilderWorkflowActionEntity_1 = require("./entity/BuilderWorkflowActionEntity");
const BuilderWorkflowActionTypeBuilderWorkflowActionEntity_1 = require("./entity/BuilderWorkflowActionTypeBuilderWorkflowActionEntity");
const ByIdEntity_1 = require("./entity/ByIdEntity");
const ByNameEntity_1 = require("./entity/ByNameEntity");
const CalendarEntity_1 = require("./entity/CalendarEntity");
const CalendarViewExampleEntity_1 = require("./entity/CalendarViewExampleEntity");
const CallbackEntity_1 = require("./entity/CallbackEntity");
const CancelEntity_1 = require("./entity/CancelEntity");
const ColorTypographyButtonImagePageInputTableLinklinkActiveTextEntity_1 = require("./entity/ColorTypographyButtonImagePageInputTableLinklinkActiveTextEntity");
const CoreWebhookEntity_1 = require("./entity/CoreWebhookEntity");
const DashboardDataSourceEntity_1 = require("./entity/DashboardDataSourceEntity");
const DashboardWidgetEntity_1 = require("./entity/DashboardWidgetEntity");
const DashboardWidgetWidgetEntity_1 = require("./entity/DashboardWidgetWidgetEntity");
const DataScanEntity_1 = require("./entity/DataScanEntity");
const DataSyncEntity_1 = require("./entity/DataSyncEntity");
const DatabaseTableEntity_1 = require("./entity/DatabaseTableEntity");
const DatabaseTableFieldEntity_1 = require("./entity/DatabaseTableFieldEntity");
const DatabaseTableGridViewEntity_1 = require("./entity/DatabaseTableGridViewEntity");
const DatabaseTableRowEntity_1 = require("./entity/DatabaseTableRowEntity");
const DatabaseTableViewEntity_1 = require("./entity/DatabaseTableViewEntity");
const DatabaseTableViewDecorationEntity_1 = require("./entity/DatabaseTableViewDecorationEntity");
const DatabaseTableViewFilterEntity_1 = require("./entity/DatabaseTableViewFilterEntity");
const DatabaseTableViewGroupingEntity_1 = require("./entity/DatabaseTableViewGroupingEntity");
const DatabaseTableViewSortingEntity_1 = require("./entity/DatabaseTableViewSortingEntity");
const DatabaseTableWebhookEntity_1 = require("./entity/DatabaseTableWebhookEntity");
const DatabaseTokenEntity_1 = require("./entity/DatabaseTokenEntity");
const DatabaseWorkflowActionTypeDatabaseWorkflowActionEntity_1 = require("./entity/DatabaseWorkflowActionTypeDatabaseWorkflowActionEntity");
const DecoratorValueProviderTypeViewDecorationEntity_1 = require("./entity/DecoratorValueProviderTypeViewDecorationEntity");
const DispatchEntity_1 = require("./entity/DispatchEntity");
const DomainEntity_1 = require("./entity/DomainEntity");
const DuplicateEntity_1 = require("./entity/DuplicateEntity");
const ElementEntity_1 = require("./entity/ElementEntity");
const ElementTypeElementEntity_1 = require("./entity/ElementTypeElementEntity");
const EmailEntity_1 = require("./entity/EmailEntity");
const ExampleBatchRowEntity_1 = require("./entity/ExampleBatchRowEntity");
const ExampleBatchUpdateRowEntity_1 = require("./entity/ExampleBatchUpdateRowEntity");
const ExamplePublicRowResponseSerializerWithUserFieldNameEntity_1 = require("./entity/ExamplePublicRowResponseSerializerWithUserFieldNameEntity");
const ExampleRowEntity_1 = require("./entity/ExampleRowEntity");
const ExampleRowResponseSerializerWithUserFieldNameEntity_1 = require("./entity/ExampleRowResponseSerializerWithUserFieldNameEntity");
const ExportEntity_1 = require("./entity/ExportEntity");
const ExportJobEntity_1 = require("./entity/ExportJobEntity");
const FieldEntity_1 = require("./entity/FieldEntity");
const FieldFieldEntity_1 = require("./entity/FieldFieldEntity");
const FieldFieldSerializerWithRelatedFieldEntity_1 = require("./entity/FieldFieldSerializerWithRelatedFieldEntity");
const FieldPermissionSubjectOptionEntity_1 = require("./entity/FieldPermissionSubjectOptionEntity");
const FieldRuleEntity_1 = require("./entity/FieldRuleEntity");
const FieldRulesResponseFieldRuleEntity_1 = require("./entity/FieldRulesResponseFieldRuleEntity");
const FormViewSubmittedEntity_1 = require("./entity/FormViewSubmittedEntity");
const FullEntity_1 = require("./entity/FullEntity");
const GenerateFormulaWithAiEntity_1 = require("./entity/GenerateFormulaWithAiEntity");
const GridViewGroupByDataEntity_1 = require("./entity/GridViewGroupByDataEntity");
const HealthEntity_1 = require("./entity/HealthEntity");
const InboundEmailEntity_1 = require("./entity/InboundEmailEntity");
const InstallEntity_1 = require("./entity/InstallEntity");
const InstanceIdEntity_1 = require("./entity/InstanceIdEntity");
const IntegrationEntity_1 = require("./entity/IntegrationEntity");
const IntegrationIntegrationEntity_1 = require("./entity/IntegrationIntegrationEntity");
const IntegrationServiceDashboardDataSourceEntity_1 = require("./entity/IntegrationServiceDashboardDataSourceEntity");
const IntegrationServiceDataSourceEntity_1 = require("./entity/IntegrationServiceDataSourceEntity");
const IntegrationServicePublicDataSourceEntity_1 = require("./entity/IntegrationServicePublicDataSourceEntity");
const InvalidRowEntity_1 = require("./entity/InvalidRowEntity");
const JobEntity_1 = require("./entity/JobEntity");
const JobTypeJobEntity_1 = require("./entity/JobTypeJobEntity");
const KanbanEntity_1 = require("./entity/KanbanEntity");
const KanbanViewExampleEntity_1 = require("./entity/KanbanViewExampleEntity");
const LastViewedItemEntity_1 = require("./entity/LastViewedItemEntity");
const LicenseEntity_1 = require("./entity/LicenseEntity");
const LicenseUserEntity_1 = require("./entity/LicenseUserEntity");
const LicenseUserLookupEntity_1 = require("./entity/LicenseUserLookupEntity");
const LicenseWithUserEntity_1 = require("./entity/LicenseWithUserEntity");
const ListDataSyncPropertyEntity_1 = require("./entity/ListDataSyncPropertyEntity");
const LoginEntity_1 = require("./entity/LoginEntity");
const McpEndpointEntity_1 = require("./entity/McpEndpointEntity");
const MessageEntity_1 = require("./entity/MessageEntity");
const NotificationEntity_1 = require("./entity/NotificationEntity");
const OnboardingPromptSuggestionEntity_1 = require("./entity/OnboardingPromptSuggestionEntity");
const OpenApiRoleAssignmentEntity_1 = require("./entity/OpenApiRoleAssignmentEntity");
const PageEntity_1 = require("./entity/PageEntity");
const PaginationSerializerExampleRowResponseSerializerWithUserEntity_1 = require("./entity/PaginationSerializerExampleRowResponseSerializerWithUserEntity");
const PaginationSerializerLinkRowValueEntity_1 = require("./entity/PaginationSerializerLinkRowValueEntity");
const PaginationSerializerNotificationRecipientEntity_1 = require("./entity/PaginationSerializerNotificationRecipientEntity");
const PaginationSerializerRowCommentEntity_1 = require("./entity/PaginationSerializerRowCommentEntity");
const PaginationSerializerTrashContentEntity_1 = require("./entity/PaginationSerializerTrashContentEntity");
const PaginationSerializerWithGalleryViewFieldOptionsExampleRowEntity_1 = require("./entity/PaginationSerializerWithGalleryViewFieldOptionsExampleRowEntity");
const PaginationSerializerWithGridViewFieldOptionsExampleRowEntity_1 = require("./entity/PaginationSerializerWithGridViewFieldOptionsExampleRowEntity");
const PaginationSerializerWithTimelineViewFieldOptionsExampleRowEntity_1 = require("./entity/PaginationSerializerWithTimelineViewFieldOptionsExampleRowEntity");
const PasswordFieldAuthenticationEntity_1 = require("./entity/PasswordFieldAuthenticationEntity");
const PeriodicDataSyncIntervalEntity_1 = require("./entity/PeriodicDataSyncIntervalEntity");
const PermissionEntity_1 = require("./entity/PermissionEntity");
const PublicBuilderWorkflowActionTypeBuilderWorkflowActionEntity_1 = require("./entity/PublicBuilderWorkflowActionTypeBuilderWorkflowActionEntity");
const PublicFormViewEntity_1 = require("./entity/PublicFormViewEntity");
const PublicPaginationSerializerWithGalleryViewFieldOptionsEntity_1 = require("./entity/PublicPaginationSerializerWithGalleryViewFieldOptionsEntity");
const PublicPaginationSerializerWithGridViewFieldOptionsExampleEntity_1 = require("./entity/PublicPaginationSerializerWithGridViewFieldOptionsExampleEntity");
const PublicPaginationSerializerWithTimelineViewFieldOptionsEntity_1 = require("./entity/PublicPaginationSerializerWithTimelineViewFieldOptionsEntity");
const PublicViewAuthEntity_1 = require("./entity/PublicViewAuthEntity");
const PublicViewInfoEntity_1 = require("./entity/PublicViewInfoEntity");
const RelatedFieldEntity_1 = require("./entity/RelatedFieldEntity");
const RowCommentEntity_1 = require("./entity/RowCommentEntity");
const RowHistoryEntity_1 = require("./entity/RowHistoryEntity");
const SecureFileServeEntity_1 = require("./entity/SecureFileServeEntity");
const SettingEntity_1 = require("./entity/SettingEntity");
const SnapshotEntity_1 = require("./entity/SnapshotEntity");
const TableEntity_1 = require("./entity/TableEntity");
const TableWebhookEntity_1 = require("./entity/TableWebhookEntity");
const TableWebhookTestCallEntity_1 = require("./entity/TableWebhookTestCallEntity");
const TableWithoutDataSyncEntity_1 = require("./entity/TableWithoutDataSyncEntity");
const TeamEntity_1 = require("./entity/TeamEntity");
const TeamSubjectEntity_1 = require("./entity/TeamSubjectEntity");
const TemplateEntity_1 = require("./entity/TemplateEntity");
const TokenEntity_1 = require("./entity/TokenEntity");
const TrashEntity_1 = require("./entity/TrashEntity");
const TwoFactorAuthTypeTwoFactorAuthEntity_1 = require("./entity/TwoFactorAuthTypeTwoFactorAuthEntity");
const TypeEntity_1 = require("./entity/TypeEntity");
const UniqueRowValueEntity_1 = require("./entity/UniqueRowValueEntity");
const UpdateFieldPermissionEntity_1 = require("./entity/UpdateFieldPermissionEntity");
const UserEntity_1 = require("./entity/UserEntity");
const UserFileEntity_1 = require("./entity/UserFileEntity");
const UserSourceEntity_1 = require("./entity/UserSourceEntity");
const UserSourceUserSourceEntity_1 = require("./entity/UserSourceUserSourceEntity");
const UserSourceUserSourceRoleEntity_1 = require("./entity/UserSourceUserSourceRoleEntity");
const UserWorkspaceInvitationEntity_1 = require("./entity/UserWorkspaceInvitationEntity");
const UsersPerUserSourceEntity_1 = require("./entity/UsersPerUserSourceEntity");
const ViewEntity_1 = require("./entity/ViewEntity");
const ViewDefaultValueEntity_1 = require("./entity/ViewDefaultValueEntity");
const ViewFieldOptionEntity_1 = require("./entity/ViewFieldOptionEntity");
const ViewFilterEntity_1 = require("./entity/ViewFilterEntity");
const ViewFilterGroupEntity_1 = require("./entity/ViewFilterGroupEntity");
const ViewGroupByEntity_1 = require("./entity/ViewGroupByEntity");
const ViewSortEntity_1 = require("./entity/ViewSortEntity");
const ViewViewEntity_1 = require("./entity/ViewViewEntity");
const WorkspaceEntity_1 = require("./entity/WorkspaceEntity");
const WorkspaceInvitationEntity_1 = require("./entity/WorkspaceInvitationEntity");
const WorkspaceStructureEntity_1 = require("./entity/WorkspaceStructureEntity");
const WorkspaceUserEntity_1 = require("./entity/WorkspaceUserEntity");
const WorkspaceUserWorkspaceEntity_1 = require("./entity/WorkspaceUserWorkspaceEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const BaserowEntityBase_1 = require("./BaserowEntityBase");
Object.defineProperty(exports, "BaserowEntityBase", { enumerable: true, get: function () { return BaserowEntityBase_1.BaserowEntityBase; } });
const Utility_1 = require("./utility/Utility");
const ResultBodyUtility_1 = require("./utility/ResultBodyUtility");
const MakeRequestUtility_1 = require("./utility/MakeRequestUtility");
const PrepareMethodUtility_1 = require("./utility/PrepareMethodUtility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class BaserowSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        for (const key of ['_options', '_rootctx', '_features']) {
            Object.defineProperty(this, key, {
                value: this[key], enumerable: false, writable: true, configurable: true
            });
        }
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const method = String(fetchargs.method || 'GET').toUpperCase();
        if (!(0, PrepareMethodUtility_1.allowed)(options.allow.method, method)) {
            return ctx.error('spec_method_allow', 'Method "' + method +
                '" not allowed by SDK option allow.method value: "' + options.allow.method + '"');
        }
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method,
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!(0, PrepareMethodUtility_1.allowed)(this._options.allow.op, 'direct')) {
            return {
                ok: false,
                err: new Error('BaserowSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return { ok: false, err: utility.clean(this._rootctx, fetchdef) };
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            if (true === fetchdef.signal?.aborted) {
                throw fetchdef.signal.reason;
            }
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: utility.clean(ctx, (0, MakeRequestUtility_1.abortError)(ctx, fetched)) };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            let err = undefined;
            if (!noBody) {
                let text = undefined;
                try {
                    const raw = fetched;
                    if ('function' === typeof raw.text) {
                        text = await raw.text();
                        json = '' === text.trim() ? undefined : JSON.parse(text);
                    }
                    else {
                        json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                    }
                }
                catch (parseErr) {
                    if ('SyntaxError' !== parseErr?.name) {
                        throw parseErr;
                    }
                    err = (0, ResultBodyUtility_1.unreadableBody)(ctx, {
                        status, headers, text: text ?? parseErr.text, sent: fetchdef.headers,
                        failed: 200 <= status && status < 300 ? undefined :
                            ctx.error('request_status', 'request: ' + status + ': ' + fetched.statusText),
                    });
                }
            }
            return {
                ok: null == err && status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
                ...(null == err ? {} : { err: utility.clean(ctx, err) }),
            };
        }
        catch (err) {
            return { ok: false, err: utility.clean(ctx, (0, MakeRequestUtility_1.abortError)(ctx, err)) };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!(0, PrepareMethodUtility_1.allowed)(options.allow.op, 'graphql')) {
            return {
                ok: false,
                err: new Error('BaserowSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('BaserowSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.AbuseReport().list()` / `client.AbuseReport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AbuseReport(entopts) {
        const self = this;
        return new AbuseReportEntity_1.AbuseReportEntity(self, entopts);
    }
    // Entity access: `client.Admin().list()` / `client.Admin().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Admin(entopts) {
        const self = this;
        return new AdminEntity_1.AdminEntity(self, entopts);
    }
    // Entity access: `client.AdminDashboard().list()` / `client.AdminDashboard().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminDashboard(entopts) {
        const self = this;
        return new AdminDashboardEntity_1.AdminDashboardEntity(self, entopts);
    }
    // Entity access: `client.AdminDataScanner().list()` / `client.AdminDataScanner().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminDataScanner(entopts) {
        const self = this;
        return new AdminDataScannerEntity_1.AdminDataScannerEntity(self, entopts);
    }
    // Entity access: `client.AdminView().list()` / `client.AdminView().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminView(entopts) {
        const self = this;
        return new AdminViewEntity_1.AdminViewEntity(self, entopts);
    }
    // Entity access: `client.AdminWorkspaceOption().list()` / `client.AdminWorkspaceOption().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AdminWorkspaceOption(entopts) {
        const self = this;
        return new AdminWorkspaceOptionEntity_1.AdminWorkspaceOptionEntity(self, entopts);
    }
    // Entity access: `client.Agent().list()` / `client.Agent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Agent(entopts) {
        const self = this;
        return new AgentEntity_1.AgentEntity(self, entopts);
    }
    // Entity access: `client.AgentPaginationAgent().list()` / `client.AgentPaginationAgent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AgentPaginationAgent(entopts) {
        const self = this;
        return new AgentPaginationAgentEntity_1.AgentPaginationAgentEntity(self, entopts);
    }
    // Entity access: `client.AiAssistant().list()` / `client.AiAssistant().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiAssistant(entopts) {
        const self = this;
        return new AiAssistantEntity_1.AiAssistantEntity(self, entopts);
    }
    // Entity access: `client.AiProvider().list()` / `client.AiProvider().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiProvider(entopts) {
        const self = this;
        return new AiProviderEntity_1.AiProviderEntity(self, entopts);
    }
    // Entity access: `client.AiProviderFeatureSetting().list()` / `client.AiProviderFeatureSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiProviderFeatureSetting(entopts) {
        const self = this;
        return new AiProviderFeatureSettingEntity_1.AiProviderFeatureSettingEntity(self, entopts);
    }
    // Entity access: `client.AiProviderModel().list()` / `client.AiProviderModel().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiProviderModel(entopts) {
        const self = this;
        return new AiProviderModelEntity_1.AiProviderModelEntity(self, entopts);
    }
    // Entity access: `client.AiProviderModelDiscovery().list()` / `client.AiProviderModelDiscovery().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiProviderModelDiscovery(entopts) {
        const self = this;
        return new AiProviderModelDiscoveryEntity_1.AiProviderModelDiscoveryEntity(self, entopts);
    }
    // Entity access: `client.AiProviderModelUsageEntry().list()` / `client.AiProviderModelUsageEntry().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiProviderModelUsageEntry(entopts) {
        const self = this;
        return new AiProviderModelUsageEntryEntity_1.AiProviderModelUsageEntryEntity(self, entopts);
    }
    // Entity access: `client.AiProviderModelsTest().list()` / `client.AiProviderModelsTest().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiProviderModelsTest(entopts) {
        const self = this;
        return new AiProviderModelsTestEntity_1.AiProviderModelsTestEntity(self, entopts);
    }
    // Entity access: `client.AiProviderType().list()` / `client.AiProviderType().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AiProviderType(entopts) {
        const self = this;
        return new AiProviderTypeEntity_1.AiProviderTypeEntity(self, entopts);
    }
    // Entity access: `client.Application().list()` / `client.Application().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Application(entopts) {
        const self = this;
        return new ApplicationEntity_1.ApplicationEntity(self, entopts);
    }
    // Entity access: `client.ApplicationApplication().list()` / `client.ApplicationApplication().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApplicationApplication(entopts) {
        const self = this;
        return new ApplicationApplicationEntity_1.ApplicationApplicationEntity(self, entopts);
    }
    // Entity access: `client.AssistantChat().list()` / `client.AssistantChat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssistantChat(entopts) {
        const self = this;
        return new AssistantChatEntity_1.AssistantChatEntity(self, entopts);
    }
    // Entity access: `client.AuditLog().list()` / `client.AuditLog().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AuditLog(entopts) {
        const self = this;
        return new AuditLogEntity_1.AuditLogEntity(self, entopts);
    }
    // Entity access: `client.AuditLogActionType().list()` / `client.AuditLogActionType().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AuditLogActionType(entopts) {
        const self = this;
        return new AuditLogActionTypeEntity_1.AuditLogActionTypeEntity(self, entopts);
    }
    // Entity access: `client.AuditLogUser().list()` / `client.AuditLogUser().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AuditLogUser(entopts) {
        const self = this;
        return new AuditLogUserEntity_1.AuditLogUserEntity(self, entopts);
    }
    // Entity access: `client.Auth().list()` / `client.Auth().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Auth(entopts) {
        const self = this;
        return new AuthEntity_1.AuthEntity(self, entopts);
    }
    // Entity access: `client.AuthenticationProviderAuthProvider().list()` / `client.AuthenticationProviderAuthProvider().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AuthenticationProviderAuthProvider(entopts) {
        const self = this;
        return new AuthenticationProviderAuthProviderEntity_1.AuthenticationProviderAuthProviderEntity(self, entopts);
    }
    // Entity access: `client.AutomationNode().list()` / `client.AutomationNode().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AutomationNode(entopts) {
        const self = this;
        return new AutomationNodeEntity_1.AutomationNodeEntity(self, entopts);
    }
    // Entity access: `client.AutomationNodeHistory().list()` / `client.AutomationNodeHistory().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AutomationNodeHistory(entopts) {
        const self = this;
        return new AutomationNodeHistoryEntity_1.AutomationNodeHistoryEntity(self, entopts);
    }
    // Entity access: `client.AutomationNodeResult().list()` / `client.AutomationNodeResult().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AutomationNodeResult(entopts) {
        const self = this;
        return new AutomationNodeResultEntity_1.AutomationNodeResultEntity(self, entopts);
    }
    // Entity access: `client.AutomationNodeTypeAutomationNode().list()` / `client.AutomationNodeTypeAutomationNode().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AutomationNodeTypeAutomationNode(entopts) {
        const self = this;
        return new AutomationNodeTypeAutomationNodeEntity_1.AutomationNodeTypeAutomationNodeEntity(self, entopts);
    }
    // Entity access: `client.AutomationWorkflow().list()` / `client.AutomationWorkflow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AutomationWorkflow(entopts) {
        const self = this;
        return new AutomationWorkflowEntity_1.AutomationWorkflowEntity(self, entopts);
    }
    // Entity access: `client.AutomationWorkflowHistory().list()` / `client.AutomationWorkflowHistory().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AutomationWorkflowHistory(entopts) {
        const self = this;
        return new AutomationWorkflowHistoryEntity_1.AutomationWorkflowHistoryEntity(self, entopts);
    }
    // Entity access: `client.BuilderDataSource().list()` / `client.BuilderDataSource().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BuilderDataSource(entopts) {
        const self = this;
        return new BuilderDataSourceEntity_1.BuilderDataSourceEntity(self, entopts);
    }
    // Entity access: `client.BuilderDomain().list()` / `client.BuilderDomain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BuilderDomain(entopts) {
        const self = this;
        return new BuilderDomainEntity_1.BuilderDomainEntity(self, entopts);
    }
    // Entity access: `client.BuilderElement().list()` / `client.BuilderElement().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BuilderElement(entopts) {
        const self = this;
        return new BuilderElementEntity_1.BuilderElementEntity(self, entopts);
    }
    // Entity access: `client.BuilderPage().list()` / `client.BuilderPage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BuilderPage(entopts) {
        const self = this;
        return new BuilderPageEntity_1.BuilderPageEntity(self, entopts);
    }
    // Entity access: `client.BuilderPreview().list()` / `client.BuilderPreview().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BuilderPreview(entopts) {
        const self = this;
        return new BuilderPreviewEntity_1.BuilderPreviewEntity(self, entopts);
    }
    // Entity access: `client.BuilderPreviewGrant().list()` / `client.BuilderPreviewGrant().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BuilderPreviewGrant(entopts) {
        const self = this;
        return new BuilderPreviewGrantEntity_1.BuilderPreviewGrantEntity(self, entopts);
    }
    // Entity access: `client.BuilderPreviewHandoff().list()` / `client.BuilderPreviewHandoff().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BuilderPreviewHandoff(entopts) {
        const self = this;
        return new BuilderPreviewHandoffEntity_1.BuilderPreviewHandoffEntity(self, entopts);
    }
    // Entity access: `client.BuilderPublic().list()` / `client.BuilderPublic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BuilderPublic(entopts) {
        const self = this;
        return new BuilderPublicEntity_1.BuilderPublicEntity(self, entopts);
    }
    // Entity access: `client.BuilderWorkflowAction().list()` / `client.BuilderWorkflowAction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BuilderWorkflowAction(entopts) {
        const self = this;
        return new BuilderWorkflowActionEntity_1.BuilderWorkflowActionEntity(self, entopts);
    }
    // Entity access: `client.BuilderWorkflowActionTypeBuilderWorkflowAction().list()` / `client.BuilderWorkflowActionTypeBuilderWorkflowAction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BuilderWorkflowActionTypeBuilderWorkflowAction(entopts) {
        const self = this;
        return new BuilderWorkflowActionTypeBuilderWorkflowActionEntity_1.BuilderWorkflowActionTypeBuilderWorkflowActionEntity(self, entopts);
    }
    // Entity access: `client.ById().list()` / `client.ById().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ById(entopts) {
        const self = this;
        return new ByIdEntity_1.ByIdEntity(self, entopts);
    }
    // Entity access: `client.ByName().list()` / `client.ByName().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ByName(entopts) {
        const self = this;
        return new ByNameEntity_1.ByNameEntity(self, entopts);
    }
    // Entity access: `client.Calendar().list()` / `client.Calendar().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Calendar(entopts) {
        const self = this;
        return new CalendarEntity_1.CalendarEntity(self, entopts);
    }
    // Entity access: `client.CalendarViewExample().list()` / `client.CalendarViewExample().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CalendarViewExample(entopts) {
        const self = this;
        return new CalendarViewExampleEntity_1.CalendarViewExampleEntity(self, entopts);
    }
    // Entity access: `client.Callback().list()` / `client.Callback().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Callback(entopts) {
        const self = this;
        return new CallbackEntity_1.CallbackEntity(self, entopts);
    }
    // Entity access: `client.Cancel().list()` / `client.Cancel().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Cancel(entopts) {
        const self = this;
        return new CancelEntity_1.CancelEntity(self, entopts);
    }
    // Entity access: `client.ColorTypographyButtonImagePageInputTableLinklinkActiveText().list()` / `client.ColorTypographyButtonImagePageInputTableLinklinkActiveText().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ColorTypographyButtonImagePageInputTableLinklinkActiveText(entopts) {
        const self = this;
        return new ColorTypographyButtonImagePageInputTableLinklinkActiveTextEntity_1.ColorTypographyButtonImagePageInputTableLinklinkActiveTextEntity(self, entopts);
    }
    // Entity access: `client.CoreWebhook().list()` / `client.CoreWebhook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CoreWebhook(entopts) {
        const self = this;
        return new CoreWebhookEntity_1.CoreWebhookEntity(self, entopts);
    }
    // Entity access: `client.DashboardDataSource().list()` / `client.DashboardDataSource().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DashboardDataSource(entopts) {
        const self = this;
        return new DashboardDataSourceEntity_1.DashboardDataSourceEntity(self, entopts);
    }
    // Entity access: `client.DashboardWidget().list()` / `client.DashboardWidget().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DashboardWidget(entopts) {
        const self = this;
        return new DashboardWidgetEntity_1.DashboardWidgetEntity(self, entopts);
    }
    // Entity access: `client.DashboardWidgetWidget().list()` / `client.DashboardWidgetWidget().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DashboardWidgetWidget(entopts) {
        const self = this;
        return new DashboardWidgetWidgetEntity_1.DashboardWidgetWidgetEntity(self, entopts);
    }
    // Entity access: `client.DataScan().list()` / `client.DataScan().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DataScan(entopts) {
        const self = this;
        return new DataScanEntity_1.DataScanEntity(self, entopts);
    }
    // Entity access: `client.DataSync().list()` / `client.DataSync().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DataSync(entopts) {
        const self = this;
        return new DataSyncEntity_1.DataSyncEntity(self, entopts);
    }
    // Entity access: `client.DatabaseTable().list()` / `client.DatabaseTable().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DatabaseTable(entopts) {
        const self = this;
        return new DatabaseTableEntity_1.DatabaseTableEntity(self, entopts);
    }
    // Entity access: `client.DatabaseTableField().list()` / `client.DatabaseTableField().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DatabaseTableField(entopts) {
        const self = this;
        return new DatabaseTableFieldEntity_1.DatabaseTableFieldEntity(self, entopts);
    }
    // Entity access: `client.DatabaseTableGridView().list()` / `client.DatabaseTableGridView().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DatabaseTableGridView(entopts) {
        const self = this;
        return new DatabaseTableGridViewEntity_1.DatabaseTableGridViewEntity(self, entopts);
    }
    // Entity access: `client.DatabaseTableRow().list()` / `client.DatabaseTableRow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DatabaseTableRow(entopts) {
        const self = this;
        return new DatabaseTableRowEntity_1.DatabaseTableRowEntity(self, entopts);
    }
    // Entity access: `client.DatabaseTableView().list()` / `client.DatabaseTableView().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DatabaseTableView(entopts) {
        const self = this;
        return new DatabaseTableViewEntity_1.DatabaseTableViewEntity(self, entopts);
    }
    // Entity access: `client.DatabaseTableViewDecoration().list()` / `client.DatabaseTableViewDecoration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DatabaseTableViewDecoration(entopts) {
        const self = this;
        return new DatabaseTableViewDecorationEntity_1.DatabaseTableViewDecorationEntity(self, entopts);
    }
    // Entity access: `client.DatabaseTableViewFilter().list()` / `client.DatabaseTableViewFilter().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DatabaseTableViewFilter(entopts) {
        const self = this;
        return new DatabaseTableViewFilterEntity_1.DatabaseTableViewFilterEntity(self, entopts);
    }
    // Entity access: `client.DatabaseTableViewGrouping().list()` / `client.DatabaseTableViewGrouping().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DatabaseTableViewGrouping(entopts) {
        const self = this;
        return new DatabaseTableViewGroupingEntity_1.DatabaseTableViewGroupingEntity(self, entopts);
    }
    // Entity access: `client.DatabaseTableViewSorting().list()` / `client.DatabaseTableViewSorting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DatabaseTableViewSorting(entopts) {
        const self = this;
        return new DatabaseTableViewSortingEntity_1.DatabaseTableViewSortingEntity(self, entopts);
    }
    // Entity access: `client.DatabaseTableWebhook().list()` / `client.DatabaseTableWebhook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DatabaseTableWebhook(entopts) {
        const self = this;
        return new DatabaseTableWebhookEntity_1.DatabaseTableWebhookEntity(self, entopts);
    }
    // Entity access: `client.DatabaseToken().list()` / `client.DatabaseToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DatabaseToken(entopts) {
        const self = this;
        return new DatabaseTokenEntity_1.DatabaseTokenEntity(self, entopts);
    }
    // Entity access: `client.DatabaseWorkflowActionTypeDatabaseWorkflowAction().list()` / `client.DatabaseWorkflowActionTypeDatabaseWorkflowAction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DatabaseWorkflowActionTypeDatabaseWorkflowAction(entopts) {
        const self = this;
        return new DatabaseWorkflowActionTypeDatabaseWorkflowActionEntity_1.DatabaseWorkflowActionTypeDatabaseWorkflowActionEntity(self, entopts);
    }
    // Entity access: `client.DecoratorValueProviderTypeViewDecoration().list()` / `client.DecoratorValueProviderTypeViewDecoration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DecoratorValueProviderTypeViewDecoration(entopts) {
        const self = this;
        return new DecoratorValueProviderTypeViewDecorationEntity_1.DecoratorValueProviderTypeViewDecorationEntity(self, entopts);
    }
    // Entity access: `client.Dispatch().list()` / `client.Dispatch().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Dispatch(entopts) {
        const self = this;
        return new DispatchEntity_1.DispatchEntity(self, entopts);
    }
    // Entity access: `client.Domain().list()` / `client.Domain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Domain(entopts) {
        const self = this;
        return new DomainEntity_1.DomainEntity(self, entopts);
    }
    // Entity access: `client.Duplicate().list()` / `client.Duplicate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Duplicate(entopts) {
        const self = this;
        return new DuplicateEntity_1.DuplicateEntity(self, entopts);
    }
    // Entity access: `client.Element().list()` / `client.Element().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Element(entopts) {
        const self = this;
        return new ElementEntity_1.ElementEntity(self, entopts);
    }
    // Entity access: `client.ElementTypeElement().list()` / `client.ElementTypeElement().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ElementTypeElement(entopts) {
        const self = this;
        return new ElementTypeElementEntity_1.ElementTypeElementEntity(self, entopts);
    }
    // Entity access: `client.Email().list()` / `client.Email().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Email(entopts) {
        const self = this;
        return new EmailEntity_1.EmailEntity(self, entopts);
    }
    // Entity access: `client.ExampleBatchRow().list()` / `client.ExampleBatchRow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ExampleBatchRow(entopts) {
        const self = this;
        return new ExampleBatchRowEntity_1.ExampleBatchRowEntity(self, entopts);
    }
    // Entity access: `client.ExampleBatchUpdateRow().list()` / `client.ExampleBatchUpdateRow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ExampleBatchUpdateRow(entopts) {
        const self = this;
        return new ExampleBatchUpdateRowEntity_1.ExampleBatchUpdateRowEntity(self, entopts);
    }
    // Entity access: `client.ExamplePublicRowResponseSerializerWithUserFieldName().list()` / `client.ExamplePublicRowResponseSerializerWithUserFieldName().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ExamplePublicRowResponseSerializerWithUserFieldName(entopts) {
        const self = this;
        return new ExamplePublicRowResponseSerializerWithUserFieldNameEntity_1.ExamplePublicRowResponseSerializerWithUserFieldNameEntity(self, entopts);
    }
    // Entity access: `client.ExampleRow().list()` / `client.ExampleRow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ExampleRow(entopts) {
        const self = this;
        return new ExampleRowEntity_1.ExampleRowEntity(self, entopts);
    }
    // Entity access: `client.ExampleRowResponseSerializerWithUserFieldName().list()` / `client.ExampleRowResponseSerializerWithUserFieldName().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ExampleRowResponseSerializerWithUserFieldName(entopts) {
        const self = this;
        return new ExampleRowResponseSerializerWithUserFieldNameEntity_1.ExampleRowResponseSerializerWithUserFieldNameEntity(self, entopts);
    }
    // Entity access: `client.Export().list()` / `client.Export().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Export(entopts) {
        const self = this;
        return new ExportEntity_1.ExportEntity(self, entopts);
    }
    // Entity access: `client.ExportJob().list()` / `client.ExportJob().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ExportJob(entopts) {
        const self = this;
        return new ExportJobEntity_1.ExportJobEntity(self, entopts);
    }
    // Entity access: `client.Field().list()` / `client.Field().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Field(entopts) {
        const self = this;
        return new FieldEntity_1.FieldEntity(self, entopts);
    }
    // Entity access: `client.FieldField().list()` / `client.FieldField().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FieldField(entopts) {
        const self = this;
        return new FieldFieldEntity_1.FieldFieldEntity(self, entopts);
    }
    // Entity access: `client.FieldFieldSerializerWithRelatedField().list()` / `client.FieldFieldSerializerWithRelatedField().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FieldFieldSerializerWithRelatedField(entopts) {
        const self = this;
        return new FieldFieldSerializerWithRelatedFieldEntity_1.FieldFieldSerializerWithRelatedFieldEntity(self, entopts);
    }
    // Entity access: `client.FieldPermissionSubjectOption().list()` / `client.FieldPermissionSubjectOption().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FieldPermissionSubjectOption(entopts) {
        const self = this;
        return new FieldPermissionSubjectOptionEntity_1.FieldPermissionSubjectOptionEntity(self, entopts);
    }
    // Entity access: `client.FieldRule().list()` / `client.FieldRule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FieldRule(entopts) {
        const self = this;
        return new FieldRuleEntity_1.FieldRuleEntity(self, entopts);
    }
    // Entity access: `client.FieldRulesResponseFieldRule().list()` / `client.FieldRulesResponseFieldRule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FieldRulesResponseFieldRule(entopts) {
        const self = this;
        return new FieldRulesResponseFieldRuleEntity_1.FieldRulesResponseFieldRuleEntity(self, entopts);
    }
    // Entity access: `client.FormViewSubmitted().list()` / `client.FormViewSubmitted().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FormViewSubmitted(entopts) {
        const self = this;
        return new FormViewSubmittedEntity_1.FormViewSubmittedEntity(self, entopts);
    }
    // Entity access: `client.Full().list()` / `client.Full().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Full(entopts) {
        const self = this;
        return new FullEntity_1.FullEntity(self, entopts);
    }
    // Entity access: `client.GenerateFormulaWithAi().list()` / `client.GenerateFormulaWithAi().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GenerateFormulaWithAi(entopts) {
        const self = this;
        return new GenerateFormulaWithAiEntity_1.GenerateFormulaWithAiEntity(self, entopts);
    }
    // Entity access: `client.GridViewGroupByData().list()` / `client.GridViewGroupByData().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GridViewGroupByData(entopts) {
        const self = this;
        return new GridViewGroupByDataEntity_1.GridViewGroupByDataEntity(self, entopts);
    }
    // Entity access: `client.Health().list()` / `client.Health().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Health(entopts) {
        const self = this;
        return new HealthEntity_1.HealthEntity(self, entopts);
    }
    // Entity access: `client.InboundEmail().list()` / `client.InboundEmail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    InboundEmail(entopts) {
        const self = this;
        return new InboundEmailEntity_1.InboundEmailEntity(self, entopts);
    }
    // Entity access: `client.Install().list()` / `client.Install().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Install(entopts) {
        const self = this;
        return new InstallEntity_1.InstallEntity(self, entopts);
    }
    // Entity access: `client.InstanceId().list()` / `client.InstanceId().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    InstanceId(entopts) {
        const self = this;
        return new InstanceIdEntity_1.InstanceIdEntity(self, entopts);
    }
    // Entity access: `client.Integration().list()` / `client.Integration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Integration(entopts) {
        const self = this;
        return new IntegrationEntity_1.IntegrationEntity(self, entopts);
    }
    // Entity access: `client.IntegrationIntegration().list()` / `client.IntegrationIntegration().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IntegrationIntegration(entopts) {
        const self = this;
        return new IntegrationIntegrationEntity_1.IntegrationIntegrationEntity(self, entopts);
    }
    // Entity access: `client.IntegrationServiceDashboardDataSource().list()` / `client.IntegrationServiceDashboardDataSource().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IntegrationServiceDashboardDataSource(entopts) {
        const self = this;
        return new IntegrationServiceDashboardDataSourceEntity_1.IntegrationServiceDashboardDataSourceEntity(self, entopts);
    }
    // Entity access: `client.IntegrationServiceDataSource().list()` / `client.IntegrationServiceDataSource().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IntegrationServiceDataSource(entopts) {
        const self = this;
        return new IntegrationServiceDataSourceEntity_1.IntegrationServiceDataSourceEntity(self, entopts);
    }
    // Entity access: `client.IntegrationServicePublicDataSource().list()` / `client.IntegrationServicePublicDataSource().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IntegrationServicePublicDataSource(entopts) {
        const self = this;
        return new IntegrationServicePublicDataSourceEntity_1.IntegrationServicePublicDataSourceEntity(self, entopts);
    }
    // Entity access: `client.InvalidRow().list()` / `client.InvalidRow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    InvalidRow(entopts) {
        const self = this;
        return new InvalidRowEntity_1.InvalidRowEntity(self, entopts);
    }
    // Entity access: `client.Job().list()` / `client.Job().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Job(entopts) {
        const self = this;
        return new JobEntity_1.JobEntity(self, entopts);
    }
    // Entity access: `client.JobTypeJob().list()` / `client.JobTypeJob().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    JobTypeJob(entopts) {
        const self = this;
        return new JobTypeJobEntity_1.JobTypeJobEntity(self, entopts);
    }
    // Entity access: `client.Kanban().list()` / `client.Kanban().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Kanban(entopts) {
        const self = this;
        return new KanbanEntity_1.KanbanEntity(self, entopts);
    }
    // Entity access: `client.KanbanViewExample().list()` / `client.KanbanViewExample().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    KanbanViewExample(entopts) {
        const self = this;
        return new KanbanViewExampleEntity_1.KanbanViewExampleEntity(self, entopts);
    }
    // Entity access: `client.LastViewedItem().list()` / `client.LastViewedItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LastViewedItem(entopts) {
        const self = this;
        return new LastViewedItemEntity_1.LastViewedItemEntity(self, entopts);
    }
    // Entity access: `client.License().list()` / `client.License().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    License(entopts) {
        const self = this;
        return new LicenseEntity_1.LicenseEntity(self, entopts);
    }
    // Entity access: `client.LicenseUser().list()` / `client.LicenseUser().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LicenseUser(entopts) {
        const self = this;
        return new LicenseUserEntity_1.LicenseUserEntity(self, entopts);
    }
    // Entity access: `client.LicenseUserLookup().list()` / `client.LicenseUserLookup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LicenseUserLookup(entopts) {
        const self = this;
        return new LicenseUserLookupEntity_1.LicenseUserLookupEntity(self, entopts);
    }
    // Entity access: `client.LicenseWithUser().list()` / `client.LicenseWithUser().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LicenseWithUser(entopts) {
        const self = this;
        return new LicenseWithUserEntity_1.LicenseWithUserEntity(self, entopts);
    }
    // Entity access: `client.ListDataSyncProperty().list()` / `client.ListDataSyncProperty().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListDataSyncProperty(entopts) {
        const self = this;
        return new ListDataSyncPropertyEntity_1.ListDataSyncPropertyEntity(self, entopts);
    }
    // Entity access: `client.Login().list()` / `client.Login().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Login(entopts) {
        const self = this;
        return new LoginEntity_1.LoginEntity(self, entopts);
    }
    // Entity access: `client.McpEndpoint().list()` / `client.McpEndpoint().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    McpEndpoint(entopts) {
        const self = this;
        return new McpEndpointEntity_1.McpEndpointEntity(self, entopts);
    }
    // Entity access: `client.Message().list()` / `client.Message().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Message(entopts) {
        const self = this;
        return new MessageEntity_1.MessageEntity(self, entopts);
    }
    // Entity access: `client.Notification().list()` / `client.Notification().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Notification(entopts) {
        const self = this;
        return new NotificationEntity_1.NotificationEntity(self, entopts);
    }
    // Entity access: `client.OnboardingPromptSuggestion().list()` / `client.OnboardingPromptSuggestion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OnboardingPromptSuggestion(entopts) {
        const self = this;
        return new OnboardingPromptSuggestionEntity_1.OnboardingPromptSuggestionEntity(self, entopts);
    }
    // Entity access: `client.OpenApiRoleAssignment().list()` / `client.OpenApiRoleAssignment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OpenApiRoleAssignment(entopts) {
        const self = this;
        return new OpenApiRoleAssignmentEntity_1.OpenApiRoleAssignmentEntity(self, entopts);
    }
    // Entity access: `client.Page().list()` / `client.Page().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Page(entopts) {
        const self = this;
        return new PageEntity_1.PageEntity(self, entopts);
    }
    // Entity access: `client.PaginationSerializerExampleRowResponseSerializerWithUser().list()` / `client.PaginationSerializerExampleRowResponseSerializerWithUser().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginationSerializerExampleRowResponseSerializerWithUser(entopts) {
        const self = this;
        return new PaginationSerializerExampleRowResponseSerializerWithUserEntity_1.PaginationSerializerExampleRowResponseSerializerWithUserEntity(self, entopts);
    }
    // Entity access: `client.PaginationSerializerLinkRowValue().list()` / `client.PaginationSerializerLinkRowValue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginationSerializerLinkRowValue(entopts) {
        const self = this;
        return new PaginationSerializerLinkRowValueEntity_1.PaginationSerializerLinkRowValueEntity(self, entopts);
    }
    // Entity access: `client.PaginationSerializerNotificationRecipient().list()` / `client.PaginationSerializerNotificationRecipient().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginationSerializerNotificationRecipient(entopts) {
        const self = this;
        return new PaginationSerializerNotificationRecipientEntity_1.PaginationSerializerNotificationRecipientEntity(self, entopts);
    }
    // Entity access: `client.PaginationSerializerRowComment().list()` / `client.PaginationSerializerRowComment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginationSerializerRowComment(entopts) {
        const self = this;
        return new PaginationSerializerRowCommentEntity_1.PaginationSerializerRowCommentEntity(self, entopts);
    }
    // Entity access: `client.PaginationSerializerTrashContent().list()` / `client.PaginationSerializerTrashContent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginationSerializerTrashContent(entopts) {
        const self = this;
        return new PaginationSerializerTrashContentEntity_1.PaginationSerializerTrashContentEntity(self, entopts);
    }
    // Entity access: `client.PaginationSerializerWithGalleryViewFieldOptionsExampleRow().list()` / `client.PaginationSerializerWithGalleryViewFieldOptionsExampleRow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginationSerializerWithGalleryViewFieldOptionsExampleRow(entopts) {
        const self = this;
        return new PaginationSerializerWithGalleryViewFieldOptionsExampleRowEntity_1.PaginationSerializerWithGalleryViewFieldOptionsExampleRowEntity(self, entopts);
    }
    // Entity access: `client.PaginationSerializerWithGridViewFieldOptionsExampleRow().list()` / `client.PaginationSerializerWithGridViewFieldOptionsExampleRow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginationSerializerWithGridViewFieldOptionsExampleRow(entopts) {
        const self = this;
        return new PaginationSerializerWithGridViewFieldOptionsExampleRowEntity_1.PaginationSerializerWithGridViewFieldOptionsExampleRowEntity(self, entopts);
    }
    // Entity access: `client.PaginationSerializerWithTimelineViewFieldOptionsExampleRow().list()` / `client.PaginationSerializerWithTimelineViewFieldOptionsExampleRow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PaginationSerializerWithTimelineViewFieldOptionsExampleRow(entopts) {
        const self = this;
        return new PaginationSerializerWithTimelineViewFieldOptionsExampleRowEntity_1.PaginationSerializerWithTimelineViewFieldOptionsExampleRowEntity(self, entopts);
    }
    // Entity access: `client.PasswordFieldAuthentication().list()` / `client.PasswordFieldAuthentication().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PasswordFieldAuthentication(entopts) {
        const self = this;
        return new PasswordFieldAuthenticationEntity_1.PasswordFieldAuthenticationEntity(self, entopts);
    }
    // Entity access: `client.PeriodicDataSyncInterval().list()` / `client.PeriodicDataSyncInterval().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PeriodicDataSyncInterval(entopts) {
        const self = this;
        return new PeriodicDataSyncIntervalEntity_1.PeriodicDataSyncIntervalEntity(self, entopts);
    }
    // Entity access: `client.Permission().list()` / `client.Permission().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Permission(entopts) {
        const self = this;
        return new PermissionEntity_1.PermissionEntity(self, entopts);
    }
    // Entity access: `client.PublicBuilderWorkflowActionTypeBuilderWorkflowAction().list()` / `client.PublicBuilderWorkflowActionTypeBuilderWorkflowAction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PublicBuilderWorkflowActionTypeBuilderWorkflowAction(entopts) {
        const self = this;
        return new PublicBuilderWorkflowActionTypeBuilderWorkflowActionEntity_1.PublicBuilderWorkflowActionTypeBuilderWorkflowActionEntity(self, entopts);
    }
    // Entity access: `client.PublicFormView().list()` / `client.PublicFormView().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PublicFormView(entopts) {
        const self = this;
        return new PublicFormViewEntity_1.PublicFormViewEntity(self, entopts);
    }
    // Entity access: `client.PublicPaginationSerializerWithGalleryViewFieldOptions().list()` / `client.PublicPaginationSerializerWithGalleryViewFieldOptions().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PublicPaginationSerializerWithGalleryViewFieldOptions(entopts) {
        const self = this;
        return new PublicPaginationSerializerWithGalleryViewFieldOptionsEntity_1.PublicPaginationSerializerWithGalleryViewFieldOptionsEntity(self, entopts);
    }
    // Entity access: `client.PublicPaginationSerializerWithGridViewFieldOptionsExample().list()` / `client.PublicPaginationSerializerWithGridViewFieldOptionsExample().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PublicPaginationSerializerWithGridViewFieldOptionsExample(entopts) {
        const self = this;
        return new PublicPaginationSerializerWithGridViewFieldOptionsExampleEntity_1.PublicPaginationSerializerWithGridViewFieldOptionsExampleEntity(self, entopts);
    }
    // Entity access: `client.PublicPaginationSerializerWithTimelineViewFieldOptions().list()` / `client.PublicPaginationSerializerWithTimelineViewFieldOptions().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PublicPaginationSerializerWithTimelineViewFieldOptions(entopts) {
        const self = this;
        return new PublicPaginationSerializerWithTimelineViewFieldOptionsEntity_1.PublicPaginationSerializerWithTimelineViewFieldOptionsEntity(self, entopts);
    }
    // Entity access: `client.PublicViewAuth().list()` / `client.PublicViewAuth().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PublicViewAuth(entopts) {
        const self = this;
        return new PublicViewAuthEntity_1.PublicViewAuthEntity(self, entopts);
    }
    // Entity access: `client.PublicViewInfo().list()` / `client.PublicViewInfo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PublicViewInfo(entopts) {
        const self = this;
        return new PublicViewInfoEntity_1.PublicViewInfoEntity(self, entopts);
    }
    // Entity access: `client.RelatedField().list()` / `client.RelatedField().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RelatedField(entopts) {
        const self = this;
        return new RelatedFieldEntity_1.RelatedFieldEntity(self, entopts);
    }
    // Entity access: `client.RowComment().list()` / `client.RowComment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RowComment(entopts) {
        const self = this;
        return new RowCommentEntity_1.RowCommentEntity(self, entopts);
    }
    // Entity access: `client.RowHistory().list()` / `client.RowHistory().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RowHistory(entopts) {
        const self = this;
        return new RowHistoryEntity_1.RowHistoryEntity(self, entopts);
    }
    // Entity access: `client.SecureFileServe().list()` / `client.SecureFileServe().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SecureFileServe(entopts) {
        const self = this;
        return new SecureFileServeEntity_1.SecureFileServeEntity(self, entopts);
    }
    // Entity access: `client.Setting().list()` / `client.Setting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Setting(entopts) {
        const self = this;
        return new SettingEntity_1.SettingEntity(self, entopts);
    }
    // Entity access: `client.Snapshot().list()` / `client.Snapshot().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Snapshot(entopts) {
        const self = this;
        return new SnapshotEntity_1.SnapshotEntity(self, entopts);
    }
    // Entity access: `client.Table().list()` / `client.Table().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Table(entopts) {
        const self = this;
        return new TableEntity_1.TableEntity(self, entopts);
    }
    // Entity access: `client.TableWebhook().list()` / `client.TableWebhook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TableWebhook(entopts) {
        const self = this;
        return new TableWebhookEntity_1.TableWebhookEntity(self, entopts);
    }
    // Entity access: `client.TableWebhookTestCall().list()` / `client.TableWebhookTestCall().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TableWebhookTestCall(entopts) {
        const self = this;
        return new TableWebhookTestCallEntity_1.TableWebhookTestCallEntity(self, entopts);
    }
    // Entity access: `client.TableWithoutDataSync().list()` / `client.TableWithoutDataSync().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TableWithoutDataSync(entopts) {
        const self = this;
        return new TableWithoutDataSyncEntity_1.TableWithoutDataSyncEntity(self, entopts);
    }
    // Entity access: `client.Team().list()` / `client.Team().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Team(entopts) {
        const self = this;
        return new TeamEntity_1.TeamEntity(self, entopts);
    }
    // Entity access: `client.TeamSubject().list()` / `client.TeamSubject().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TeamSubject(entopts) {
        const self = this;
        return new TeamSubjectEntity_1.TeamSubjectEntity(self, entopts);
    }
    // Entity access: `client.Template().list()` / `client.Template().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Template(entopts) {
        const self = this;
        return new TemplateEntity_1.TemplateEntity(self, entopts);
    }
    // Entity access: `client.Token().list()` / `client.Token().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Token(entopts) {
        const self = this;
        return new TokenEntity_1.TokenEntity(self, entopts);
    }
    // Entity access: `client.Trash().list()` / `client.Trash().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Trash(entopts) {
        const self = this;
        return new TrashEntity_1.TrashEntity(self, entopts);
    }
    // Entity access: `client.TwoFactorAuthTypeTwoFactorAuth().list()` / `client.TwoFactorAuthTypeTwoFactorAuth().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TwoFactorAuthTypeTwoFactorAuth(entopts) {
        const self = this;
        return new TwoFactorAuthTypeTwoFactorAuthEntity_1.TwoFactorAuthTypeTwoFactorAuthEntity(self, entopts);
    }
    // Entity access: `client.Type().list()` / `client.Type().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Type(entopts) {
        const self = this;
        return new TypeEntity_1.TypeEntity(self, entopts);
    }
    // Entity access: `client.UniqueRowValue().list()` / `client.UniqueRowValue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UniqueRowValue(entopts) {
        const self = this;
        return new UniqueRowValueEntity_1.UniqueRowValueEntity(self, entopts);
    }
    // Entity access: `client.UpdateFieldPermission().list()` / `client.UpdateFieldPermission().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateFieldPermission(entopts) {
        const self = this;
        return new UpdateFieldPermissionEntity_1.UpdateFieldPermissionEntity(self, entopts);
    }
    // Entity access: `client.User().list()` / `client.User().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    User(entopts) {
        const self = this;
        return new UserEntity_1.UserEntity(self, entopts);
    }
    // Entity access: `client.UserFile().list()` / `client.UserFile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UserFile(entopts) {
        const self = this;
        return new UserFileEntity_1.UserFileEntity(self, entopts);
    }
    // Entity access: `client.UserSource().list()` / `client.UserSource().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UserSource(entopts) {
        const self = this;
        return new UserSourceEntity_1.UserSourceEntity(self, entopts);
    }
    // Entity access: `client.UserSourceUserSource().list()` / `client.UserSourceUserSource().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UserSourceUserSource(entopts) {
        const self = this;
        return new UserSourceUserSourceEntity_1.UserSourceUserSourceEntity(self, entopts);
    }
    // Entity access: `client.UserSourceUserSourceRole().list()` / `client.UserSourceUserSourceRole().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UserSourceUserSourceRole(entopts) {
        const self = this;
        return new UserSourceUserSourceRoleEntity_1.UserSourceUserSourceRoleEntity(self, entopts);
    }
    // Entity access: `client.UserWorkspaceInvitation().list()` / `client.UserWorkspaceInvitation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UserWorkspaceInvitation(entopts) {
        const self = this;
        return new UserWorkspaceInvitationEntity_1.UserWorkspaceInvitationEntity(self, entopts);
    }
    // Entity access: `client.UsersPerUserSource().list()` / `client.UsersPerUserSource().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UsersPerUserSource(entopts) {
        const self = this;
        return new UsersPerUserSourceEntity_1.UsersPerUserSourceEntity(self, entopts);
    }
    // Entity access: `client.View().list()` / `client.View().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    View(entopts) {
        const self = this;
        return new ViewEntity_1.ViewEntity(self, entopts);
    }
    // Entity access: `client.ViewDefaultValue().list()` / `client.ViewDefaultValue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ViewDefaultValue(entopts) {
        const self = this;
        return new ViewDefaultValueEntity_1.ViewDefaultValueEntity(self, entopts);
    }
    // Entity access: `client.ViewFieldOption().list()` / `client.ViewFieldOption().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ViewFieldOption(entopts) {
        const self = this;
        return new ViewFieldOptionEntity_1.ViewFieldOptionEntity(self, entopts);
    }
    // Entity access: `client.ViewFilter().list()` / `client.ViewFilter().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ViewFilter(entopts) {
        const self = this;
        return new ViewFilterEntity_1.ViewFilterEntity(self, entopts);
    }
    // Entity access: `client.ViewFilterGroup().list()` / `client.ViewFilterGroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ViewFilterGroup(entopts) {
        const self = this;
        return new ViewFilterGroupEntity_1.ViewFilterGroupEntity(self, entopts);
    }
    // Entity access: `client.ViewGroupBy().list()` / `client.ViewGroupBy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ViewGroupBy(entopts) {
        const self = this;
        return new ViewGroupByEntity_1.ViewGroupByEntity(self, entopts);
    }
    // Entity access: `client.ViewSort().list()` / `client.ViewSort().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ViewSort(entopts) {
        const self = this;
        return new ViewSortEntity_1.ViewSortEntity(self, entopts);
    }
    // Entity access: `client.ViewView().list()` / `client.ViewView().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ViewView(entopts) {
        const self = this;
        return new ViewViewEntity_1.ViewViewEntity(self, entopts);
    }
    // Entity access: `client.Workspace().list()` / `client.Workspace().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Workspace(entopts) {
        const self = this;
        return new WorkspaceEntity_1.WorkspaceEntity(self, entopts);
    }
    // Entity access: `client.WorkspaceInvitation().list()` / `client.WorkspaceInvitation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkspaceInvitation(entopts) {
        const self = this;
        return new WorkspaceInvitationEntity_1.WorkspaceInvitationEntity(self, entopts);
    }
    // Entity access: `client.WorkspaceStructure().list()` / `client.WorkspaceStructure().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkspaceStructure(entopts) {
        const self = this;
        return new WorkspaceStructureEntity_1.WorkspaceStructureEntity(self, entopts);
    }
    // Entity access: `client.WorkspaceUser().list()` / `client.WorkspaceUser().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkspaceUser(entopts) {
        const self = this;
        return new WorkspaceUserEntity_1.WorkspaceUserEntity(self, entopts);
    }
    // Entity access: `client.WorkspaceUserWorkspace().list()` / `client.WorkspaceUserWorkspace().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkspaceUserWorkspace(entopts) {
        const self = this;
        return new WorkspaceUserWorkspaceEntity_1.WorkspaceUserWorkspaceEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new BaserowSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return BaserowSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Baserow' };
    }
    toString() {
        return 'Baserow ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.BaserowSDK = BaserowSDK;
const SDK = BaserowSDK;
exports.SDK = SDK;
//# sourceMappingURL=BaserowSDK.js.map