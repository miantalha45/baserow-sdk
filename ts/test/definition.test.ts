import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "abuse_report",
    "accessor": "AbuseReport",
    "op": "create",
    "method": "POST",
    "path": "/api/abuse-reports/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin",
    "accessor": "Admin",
    "op": "create",
    "method": "POST",
    "path": "/api/licenses/{id}/remove-all-users/",
    "args": [
      {
        "name": "license_id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin",
    "accessor": "Admin",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/licenses/{id}/{user_id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      },
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin",
    "accessor": "Admin",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/licenses/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin",
    "accessor": "Admin",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/admin/workspaces/{workspace_id}/",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_dashboard",
    "accessor": "AdminDashboard",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/dashboard/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "total_users": 1,
      "total_workspaces": 1,
      "total_applications": 1,
      "new_users_last_24_hours": 1,
      "new_users_last_7_days": 1,
      "new_users_last_30_days": 1,
      "previous_new_users_last_24_hours": 1,
      "previous_new_users_last_7_days": 1,
      "previous_new_users_last_30_days": 1,
      "active_users_last_24_hours": 1,
      "active_users_last_7_days": 1,
      "active_users_last_30_days": 1,
      "previous_active_users_last_24_hours": 1,
      "previous_active_users_last_7_days": 1,
      "previous_active_users_last_30_days": 1,
      "new_users_per_day": [
        {
          "date": "2026-01-01",
          "count": 1
        }
      ],
      "active_users_per_day": [
        {
          "date": "2026-01-01",
          "count": 1
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "admin_data_scanner",
    "accessor": "AdminDataScanner",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/data-scanner/scans/{scan_id}/trigger/",
    "args": [
      {
        "name": "scan_id",
        "wire": "scan_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 202,
    "sample": {
      "id": 1,
      "name": "x",
      "scan_type": "pattern",
      "pattern": "x",
      "frequency": "manual",
      "scan_all_workspaces": true,
      "workspace_ids": "x",
      "is_running": true,
      "last_run_started_at": "2026-01-01T00:00:00Z",
      "last_run_finished_at": "2026-01-01T00:00:00Z",
      "last_error": "x",
      "list_items": "x",
      "results_count": "x",
      "source_table_id": "x",
      "source_field_id": "x",
      "whole_words": true,
      "source_workspace_id": "x",
      "source_database_id": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "admin_data_scanner",
    "accessor": "AdminDataScanner",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/data-scanner/results/export/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 202,
    "sample": {
      "url": "x",
      "export_charset": "utf-8",
      "csv_column_separator": ",",
      "csv_first_row_header": true,
      "filter_scan_id": 1,
      "created_on": "2026-01-01T00:00:00Z",
      "exported_file_name": "x"
    },
    "idField": "id"
  },
  {
    "entity": "admin_data_scanner",
    "accessor": "AdminDataScanner",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/data-scanner/results/",
    "args": [],
    "select": {
      "ids": "v1",
      "page": "v1",
      "search": "v1",
      "size": "v1",
      "sort": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "ids",
      "page",
      "search",
      "size",
      "sorts"
    ],
    "queryArgs": [
      {
        "name": "ids",
        "wire": "ids"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "size",
        "wire": "size"
      },
      {
        "name": "sort",
        "wire": "sorts"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "id": 1,
          "scan_id": 1,
          "scan_name": "x",
          "workspace_name": "x",
          "database_id": "x",
          "database_name": "x",
          "table_id": 1,
          "table_name": "x",
          "field_name": "x",
          "row_id": 1,
          "matched_value": "x",
          "first_identified_on": "2026-01-01T00:00:00Z",
          "last_identified_on": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "admin_data_scanner",
    "accessor": "AdminDataScanner",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/admin/data-scanner/results/{result_id}/",
    "args": [
      {
        "name": "result_id",
        "wire": "result_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_data_scanner",
    "accessor": "AdminDataScanner",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/admin/data-scanner/scans/{scan_id}/",
    "args": [
      {
        "name": "scan_id",
        "wire": "scan_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "admin_view",
    "accessor": "AdminView",
    "op": "create",
    "method": "POST",
    "path": "/api/database/admin/views/{view_id}/rotate-slug/",
    "args": [
      {
        "name": "view_id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "slug": "x",
      "type": "x",
      "table_id": 1,
      "table_name": "x",
      "database_id": 1,
      "database_name": "x",
      "workspace_id": 1,
      "workspace_name": "x",
      "public": true,
      "public_view_has_password": true,
      "owned_by_id": 1,
      "owned_by_username": "x",
      "ownership_type": "x",
      "created_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "admin_view",
    "accessor": "AdminView",
    "op": "list",
    "method": "GET",
    "path": "/api/database/admin/views/",
    "args": [],
    "select": {
      "ids": "v1",
      "only_public": "v1",
      "page": "v1",
      "search": "v1",
      "size": "v1",
      "sort": "v1",
      "workspace_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "ids",
      "only_public",
      "page",
      "search",
      "size",
      "sorts",
      "workspace_id"
    ],
    "queryArgs": [
      {
        "name": "ids",
        "wire": "ids"
      },
      {
        "name": "only_public",
        "wire": "only_public"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "size",
        "wire": "size"
      },
      {
        "name": "sort",
        "wire": "sorts"
      },
      {
        "name": "workspace_id",
        "wire": "workspace_id"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "id": 1,
          "name": "x",
          "slug": "x",
          "type": "x",
          "table_id": 1,
          "table_name": "x",
          "database_id": 1,
          "database_name": "x",
          "workspace_id": 1,
          "workspace_name": "x",
          "public": true,
          "public_view_has_password": true,
          "owned_by_id": 1,
          "owned_by_username": "x",
          "ownership_type": "x",
          "created_on": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "admin_view",
    "accessor": "AdminView",
    "op": "update",
    "method": "PATCH",
    "path": "/api/database/admin/views/{view_id}/",
    "args": [
      {
        "name": "id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "slug": "x",
      "type": "x",
      "table_id": 1,
      "table_name": "x",
      "database_id": 1,
      "database_name": "x",
      "workspace_id": 1,
      "workspace_name": "x",
      "public": true,
      "public_view_has_password": true,
      "owned_by_id": 1,
      "owned_by_username": "x",
      "ownership_type": "x",
      "created_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "admin_workspace_option",
    "accessor": "AdminWorkspaceOption",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/workspaces/options/",
    "args": [],
    "select": {
      "ids": "v1",
      "page": "v1",
      "search": "v1",
      "size": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "ids",
      "page",
      "search",
      "size"
    ],
    "queryArgs": [
      {
        "name": "ids",
        "wire": "ids"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "size",
        "wire": "size"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "id": 1,
          "value": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "agent",
    "accessor": "Agent",
    "op": "create",
    "method": "POST",
    "path": "/api/agents/workspace/{workspace_id}/",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "workspace_id": 1,
      "name": "x",
      "role_uid": "x",
      "last_active": "2026-01-01T00:00:00Z",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "teams": [
        {
          "id": 1,
          "name": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "agent",
    "accessor": "Agent",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/agents/{agent_id}/",
    "args": [
      {
        "name": "id",
        "wire": "agent_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "agent",
    "accessor": "Agent",
    "op": "update",
    "method": "PATCH",
    "path": "/api/agents/{agent_id}/",
    "args": [
      {
        "name": "id",
        "wire": "agent_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "workspace_id": 1,
      "name": "x",
      "role_uid": "x",
      "last_active": "2026-01-01T00:00:00Z",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "teams": [
        {
          "id": 1,
          "name": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "agent_pagination_agent",
    "accessor": "AgentPaginationAgent",
    "op": "load",
    "method": "GET",
    "path": "/api/agents/workspace/{workspace_id}/",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {
      "page": "v1",
      "search": "v1",
      "size": "v1",
      "sort": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page",
      "search",
      "size",
      "sorts"
    ],
    "queryArgs": [
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "size",
        "wire": "size"
      },
      {
        "name": "sort",
        "wire": "sorts"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "id": 1,
          "workspace_id": 1,
          "name": "x",
          "role_uid": "x",
          "last_active": "2026-01-01T00:00:00Z",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "teams": [
            {
              "id": 1,
              "name": "x"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "ai_assistant",
    "accessor": "AiAssistant",
    "op": "update",
    "method": "PUT",
    "path": "/assistant/messages/{message_id}/feedback/",
    "args": [
      {
        "name": "message_id",
        "wire": "message_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "ai_provider",
    "accessor": "AiProvider",
    "op": "create",
    "method": "POST",
    "path": "/api/ai-providers/",
    "args": [],
    "select": {
      "workspace_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "workspace_id"
    ],
    "queryArgs": [],
    "auth": null,
    "status": 201,
    "sample": {
      "id": 1,
      "provider_type": "x",
      "is_active": true,
      "models": [
        {
          "id": 1,
          "model_identifier": "x",
          "is_enabled": true,
          "last_test_at": "2026-01-01T00:00:00Z",
          "last_test_status": "success",
          "last_test_error": "x",
          "last_test_feature_results": [
            {
              "feature_type": "x",
              "status": "success",
              "error": "x"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "ai_provider",
    "accessor": "AiProvider",
    "op": "list",
    "method": "GET",
    "path": "/api/ai-providers/",
    "args": [],
    "select": {
      "workspace_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "workspace_id"
    ],
    "queryArgs": [
      {
        "name": "workspace_id",
        "wire": "workspace_id"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "provider_type": "x",
        "is_active": true,
        "models": [
          {
            "id": 1,
            "model_identifier": "x",
            "is_enabled": true,
            "last_test_at": "2026-01-01T00:00:00Z",
            "last_test_status": "success",
            "last_test_error": "x",
            "last_test_feature_results": [
              {}
            ]
          }
        ]
      }
    ],
    "idField": "id"
  },
  {
    "entity": "ai_provider",
    "accessor": "AiProvider",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/ai-providers/{provider_id}/",
    "args": [
      {
        "name": "id",
        "wire": "provider_id",
        "value": "p1"
      }
    ],
    "select": {
      "workspace_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "query": [
      "workspace_id"
    ],
    "queryArgs": [
      {
        "name": "workspace_id",
        "wire": "workspace_id"
      }
    ],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "ai_provider",
    "accessor": "AiProvider",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/ai-providers/models/{model_id}/",
    "args": [
      {
        "name": "model_id",
        "wire": "model_id",
        "value": "p1"
      }
    ],
    "select": {
      "workspace_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "query": [
      "workspace_id"
    ],
    "queryArgs": [
      {
        "name": "workspace_id",
        "wire": "workspace_id"
      }
    ],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "ai_provider",
    "accessor": "AiProvider",
    "op": "update",
    "method": "PATCH",
    "path": "/api/ai-providers/{provider_id}/",
    "args": [
      {
        "name": "id",
        "wire": "provider_id",
        "value": "p1"
      }
    ],
    "select": {
      "workspace_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "workspace_id"
    ],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "provider_type": "x",
      "is_active": true,
      "models": [
        {
          "id": 1,
          "model_identifier": "x",
          "is_enabled": true,
          "last_test_at": "2026-01-01T00:00:00Z",
          "last_test_status": "success",
          "last_test_error": "x",
          "last_test_feature_results": [
            {
              "feature_type": "x",
              "status": "success",
              "error": "x"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "ai_provider_feature_setting",
    "accessor": "AiProviderFeatureSetting",
    "op": "list",
    "method": "GET",
    "path": "/api/ai-providers/features/",
    "args": [],
    "select": {
      "workspace_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "workspace_id"
    ],
    "queryArgs": [
      {
        "name": "workspace_id",
        "wire": "workspace_id"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "feature_type": "x",
        "mode": "inherit",
        "state": "configured",
        "model": {
          "id": 1,
          "model_identifier": "x",
          "provider_type": "x",
          "inherited": true
        },
        "inherited_model": {
          "id": 1,
          "model_identifier": "x",
          "provider_type": "x",
          "inherited": true
        },
        "inherited_state": "configured"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "ai_provider_feature_setting",
    "accessor": "AiProviderFeatureSetting",
    "op": "update",
    "method": "PUT",
    "path": "/api/ai-providers/features/{feature_type}/",
    "args": [
      {
        "name": "feature_type",
        "wire": "feature_type",
        "value": "p1"
      }
    ],
    "select": {
      "workspace_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "workspace_id"
    ],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "feature_type": "x",
      "mode": "inherit",
      "state": "configured",
      "model": {
        "id": 1,
        "model_identifier": "x",
        "provider_type": "x",
        "inherited": true
      },
      "inherited_model": {
        "id": 1,
        "model_identifier": "x",
        "provider_type": "x",
        "inherited": true
      },
      "inherited_state": "configured"
    },
    "idField": "id"
  },
  {
    "entity": "ai_provider_model",
    "accessor": "AiProviderModel",
    "op": "create",
    "method": "POST",
    "path": "/api/ai-providers/{provider_id}/models/",
    "args": [
      {
        "name": "id",
        "wire": "provider_id",
        "value": "p1"
      }
    ],
    "select": {
      "workspace_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "workspace_id"
    ],
    "queryArgs": [],
    "auth": null,
    "status": 201,
    "sample": {
      "id": 1,
      "model_identifier": "x",
      "is_enabled": true,
      "last_test_at": "2026-01-01T00:00:00Z",
      "last_test_status": "success",
      "last_test_error": "x",
      "last_test_feature_results": [
        {
          "feature_type": "x",
          "status": "success",
          "error": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "ai_provider_model",
    "accessor": "AiProviderModel",
    "op": "update",
    "method": "PATCH",
    "path": "/api/ai-providers/models/{model_id}/",
    "args": [
      {
        "name": "id",
        "wire": "model_id",
        "value": "p1"
      }
    ],
    "select": {
      "workspace_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "workspace_id"
    ],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "model_identifier": "x",
      "is_enabled": true,
      "last_test_at": "2026-01-01T00:00:00Z",
      "last_test_status": "success",
      "last_test_error": "x",
      "last_test_feature_results": [
        {
          "feature_type": "x",
          "status": "success",
          "error": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "ai_provider_model_discovery",
    "accessor": "AiProviderModelDiscovery",
    "op": "list",
    "method": "GET",
    "path": "/api/ai-providers/models/discover/",
    "args": [],
    "select": {
      "provider_type": "v1",
      "workspace_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "provider_type",
      "workspace_id"
    ],
    "queryArgs": [
      {
        "name": "provider_type",
        "wire": "provider_type"
      },
      {
        "name": "workspace_id",
        "wire": "workspace_id"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "models": [
        "x"
      ],
      "supported": true
    },
    "idField": "id"
  },
  {
    "entity": "ai_provider_model_usage_entry",
    "accessor": "AiProviderModelUsageEntry",
    "op": "list",
    "method": "GET",
    "path": "/api/ai-providers/models/{model_id}/usage/",
    "args": [
      {
        "name": "model_id",
        "wire": "model_id",
        "value": "p1"
      }
    ],
    "select": {
      "workspace_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "workspace_id"
    ],
    "queryArgs": [
      {
        "name": "workspace_id",
        "wire": "workspace_id"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "usage": [
        {
          "feature_type": "x",
          "count": 1
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "ai_provider_models_test",
    "accessor": "AiProviderModelsTest",
    "op": "create",
    "method": "POST",
    "path": "/api/ai-providers/models/test/",
    "args": [],
    "select": {
      "workspace_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "workspace_id"
    ],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "results": [
        {
          "model_id": 1,
          "status": "success",
          "error": "x",
          "tested_at": "2026-01-01T00:00:00Z",
          "feature_results": [
            {
              "feature_type": "x",
              "status": "success",
              "error": "x"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "ai_provider_type",
    "accessor": "AiProviderType",
    "op": "list",
    "method": "GET",
    "path": "/api/ai-providers/types/",
    "args": [],
    "select": {
      "workspace_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "workspace_id"
    ],
    "queryArgs": [
      {
        "name": "workspace_id",
        "wire": "workspace_id"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "type": "x",
        "name": "x",
        "uses_api_key": true,
        "extra_fields": [
          {
            "name": "x",
            "required": true,
            "allow_blank": true
          }
        ]
      }
    ],
    "idField": "id"
  },
  {
    "entity": "application",
    "accessor": "Application",
    "op": "create",
    "method": "POST",
    "path": "/api/applications/{application_id}/duplicate/async/",
    "action": "duplicate_async",
    "args": [
      {
        "name": "id",
        "wire": "application_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 202,
    "sample": {
      "id": 1,
      "type": "x",
      "progress_percentage": 1,
      "state": "x",
      "human_readable_error": "x",
      "error_code": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "original_application": {
        "id": 1,
        "name": "x",
        "order": 1,
        "type": "x",
        "workspace": {
          "id": 1,
          "name": "x",
          "generative_ai_models_enabled": "x"
        },
        "created_on": "2026-01-01T00:00:00Z",
        "last_viewed": "2026-01-01T00:00:00Z",
        "tables": [
          {
            "id": 1,
            "name": "x",
            "order": 1,
            "database_id": 1,
            "data_sync": {}
          }
        ]
      },
      "duplicated_application": {
        "id": 1,
        "name": "x",
        "order": 1,
        "type": "x",
        "workspace": {
          "id": 1,
          "name": "x",
          "generative_ai_models_enabled": "x"
        },
        "created_on": "2026-01-01T00:00:00Z",
        "last_viewed": "2026-01-01T00:00:00Z",
        "tables": [
          {
            "id": 1,
            "name": "x",
            "order": 1,
            "database_id": 1,
            "data_sync": {}
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "application",
    "accessor": "Application",
    "op": "create",
    "method": "POST",
    "path": "/api/applications/workspace/{workspace_id}/order/",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "application",
    "accessor": "Application",
    "op": "list",
    "method": "GET",
    "path": "/api/applications/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "name": "x",
        "order": 1,
        "type": "x",
        "workspace": {
          "id": 1,
          "name": "x",
          "generative_ai_models_enabled": "x"
        },
        "created_on": "2026-01-01T00:00:00Z",
        "last_viewed": "2026-01-01T00:00:00Z",
        "tables": [
          {
            "id": 1,
            "name": "x",
            "order": 1,
            "database_id": 1,
            "data_sync": {
              "id": 1,
              "type": "x",
              "table_id": 1,
              "database_id": "x",
              "synced_properties": [],
              "last_sync": "2026-01-01T00:00:00Z",
              "last_error": "x",
              "auto_add_new_properties": true,
              "delete_unmatched_rows": true,
              "two_way_sync": true
            }
          }
        ]
      }
    ],
    "idField": "id"
  },
  {
    "entity": "application",
    "accessor": "Application",
    "op": "load",
    "method": "GET",
    "path": "/api/applications/{application_id}/",
    "args": [
      {
        "name": "id",
        "wire": "application_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "order": 1,
      "type": "x",
      "workspace": {
        "id": 1,
        "name": "x",
        "generative_ai_models_enabled": "x"
      },
      "created_on": "2026-01-01T00:00:00Z",
      "last_viewed": "2026-01-01T00:00:00Z",
      "tables": [
        {
          "id": 1,
          "name": "x",
          "order": 1,
          "database_id": 1,
          "data_sync": {
            "id": 1,
            "type": "x",
            "table_id": 1,
            "database_id": "x",
            "synced_properties": [
              {}
            ],
            "last_sync": "2026-01-01T00:00:00Z",
            "last_error": "x",
            "auto_add_new_properties": true,
            "delete_unmatched_rows": true,
            "two_way_sync": true
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "application",
    "accessor": "Application",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/applications/{application_id}/",
    "args": [
      {
        "name": "id",
        "wire": "application_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "application",
    "accessor": "Application",
    "op": "update",
    "method": "PATCH",
    "path": "/api/applications/{application_id}/",
    "args": [
      {
        "name": "id",
        "wire": "application_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "order": 1,
      "type": "x",
      "workspace": {
        "id": 1,
        "name": "x",
        "generative_ai_models_enabled": "x"
      },
      "created_on": "2026-01-01T00:00:00Z",
      "last_viewed": "2026-01-01T00:00:00Z",
      "tables": [
        {
          "id": 1,
          "name": "x",
          "order": 1,
          "database_id": 1,
          "data_sync": {
            "id": 1,
            "type": "x",
            "table_id": 1,
            "database_id": "x",
            "synced_properties": [
              {}
            ],
            "last_sync": "2026-01-01T00:00:00Z",
            "last_error": "x",
            "auto_add_new_properties": true,
            "delete_unmatched_rows": true,
            "two_way_sync": true
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "application_application",
    "accessor": "ApplicationApplication",
    "op": "create",
    "method": "POST",
    "path": "/api/applications/workspace/{workspace_id}/",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "order": 1,
      "type": "x",
      "workspace": {
        "id": 1,
        "name": "x",
        "generative_ai_models_enabled": "x"
      },
      "created_on": "2026-01-01T00:00:00Z",
      "last_viewed": "2026-01-01T00:00:00Z",
      "tables": [
        {
          "id": 1,
          "name": "x",
          "order": 1,
          "database_id": 1,
          "data_sync": {
            "id": 1,
            "type": "x",
            "table_id": 1,
            "database_id": "x",
            "synced_properties": [
              {}
            ],
            "last_sync": "2026-01-01T00:00:00Z",
            "last_error": "x",
            "auto_add_new_properties": true,
            "delete_unmatched_rows": true,
            "two_way_sync": true
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "application_application",
    "accessor": "ApplicationApplication",
    "op": "load",
    "method": "GET",
    "path": "/api/applications/workspace/{workspace_id}/",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": [
      {
        "id": 1,
        "name": "x",
        "order": 1,
        "type": "x",
        "workspace": {
          "id": 1,
          "name": "x",
          "generative_ai_models_enabled": "x"
        },
        "created_on": "2026-01-01T00:00:00Z",
        "last_viewed": "2026-01-01T00:00:00Z",
        "tables": [
          {
            "id": 1,
            "name": "x",
            "order": 1,
            "database_id": 1,
            "data_sync": {
              "id": 1,
              "type": "x",
              "table_id": 1,
              "database_id": "x",
              "synced_properties": [],
              "last_sync": "2026-01-01T00:00:00Z",
              "last_error": "x",
              "auto_add_new_properties": true,
              "delete_unmatched_rows": true,
              "two_way_sync": true
            }
          }
        ]
      }
    ],
    "idField": "id"
  },
  {
    "entity": "assistant_chat",
    "accessor": "AssistantChat",
    "op": "list",
    "method": "GET",
    "path": "/assistant/chat/",
    "args": [],
    "select": {
      "workspace_id": "v1",
      "limit": 100,
      "offset": 0
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "workspace_id"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "workspace_id",
        "wire": "workspace_id"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "uuid": "x",
          "user_id": 1,
          "workspace_id": 1,
          "title": "x",
          "status": "idle",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "auth",
    "accessor": "Auth",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/admin/auth-provider/{auth_provider_id}/",
    "args": [
      {
        "name": "auth_provider_id",
        "wire": "auth_provider_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "authentication_provider_auth_provider",
    "accessor": "AuthenticationProviderAuthProvider",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/auth-provider/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "type": "x",
      "domain": "x",
      "enabled": true
    },
    "idField": "id"
  },
  {
    "entity": "authentication_provider_auth_provider",
    "accessor": "AuthenticationProviderAuthProvider",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/auth-provider/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "type": "x",
        "domain": "x",
        "enabled": true
      }
    ],
    "idField": "id"
  },
  {
    "entity": "authentication_provider_auth_provider",
    "accessor": "AuthenticationProviderAuthProvider",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/auth-provider/{auth_provider_id}/",
    "args": [
      {
        "name": "id",
        "wire": "auth_provider_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "type": "x",
      "domain": "x",
      "enabled": true
    },
    "idField": "id"
  },
  {
    "entity": "authentication_provider_auth_provider",
    "accessor": "AuthenticationProviderAuthProvider",
    "op": "update",
    "method": "PATCH",
    "path": "/api/admin/auth-provider/{auth_provider_id}/",
    "args": [
      {
        "name": "id",
        "wire": "auth_provider_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "type": "x",
      "domain": "x",
      "enabled": true
    },
    "idField": "id"
  },
  {
    "entity": "automation_node",
    "accessor": "AutomationNode",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/automation/node/{node_id}/",
    "args": [
      {
        "name": "id",
        "wire": "node_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "automation_node_history",
    "accessor": "AutomationNodeHistory",
    "op": "list",
    "method": "GET",
    "path": "/api/automation/workflow_histories/{workflow_history_id}/node_histories/",
    "args": [
      {
        "name": "workflow_history_id",
        "wire": "workflow_history_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "started_on": "2026-01-01T00:00:00Z",
        "completed_on": "2026-01-01T00:00:00Z",
        "message": "x",
        "status": "success",
        "workflow_history": 1,
        "node": 1,
        "node_type": "x",
        "node_label": "x",
        "parent_node_id": 1,
        "iteration": 1,
        "iteration_path": "x",
        "edge_label": "x",
        "destination_node_id": 1,
        "destination_node_type": "x",
        "destination_label": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "automation_node_result",
    "accessor": "AutomationNodeResult",
    "op": "load",
    "method": "GET",
    "path": "/api/automation/node_histories/{node_history_id}/result/",
    "args": [
      {
        "name": "node_history_id",
        "wire": "node_history_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "automation_node_type_automation_node",
    "accessor": "AutomationNodeTypeAutomationNode",
    "op": "create",
    "method": "POST",
    "path": "/api/automation/workflow/{workflow_id}/nodes/",
    "args": [
      {
        "name": "workflow_id",
        "wire": "workflow_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "label": "x",
      "service": {
        "id": 1,
        "integration_id": 1,
        "type": "x",
        "schema": {},
        "context_data": {},
        "context_data_schema": {},
        "table_id": 1,
        "view_id": 1,
        "filter_type": "AND",
        "search_query": {},
        "row_id": {}
      },
      "workflow": 1,
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "automation_node_type_automation_node",
    "accessor": "AutomationNodeTypeAutomationNode",
    "op": "list",
    "method": "GET",
    "path": "/api/automation/workflow/{workflow_id}/nodes/",
    "args": [
      {
        "name": "workflow_id",
        "wire": "workflow_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": [
      {
        "id": 1,
        "label": "x",
        "service": {
          "id": 1,
          "integration_id": 1,
          "type": "x",
          "schema": {},
          "context_data": {},
          "context_data_schema": {},
          "table_id": 1,
          "view_id": 1,
          "filter_type": "AND",
          "search_query": {},
          "row_id": {}
        },
        "workflow": 1,
        "type": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "automation_node_type_automation_node",
    "accessor": "AutomationNodeTypeAutomationNode",
    "op": "update",
    "method": "PATCH",
    "path": "/api/automation/node/{node_id}/",
    "args": [
      {
        "name": "id",
        "wire": "node_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "label": "x",
      "service": {
        "id": 1,
        "integration_id": 1,
        "type": "x",
        "schema": {},
        "context_data": {},
        "context_data_schema": {},
        "table_id": 1,
        "view_id": 1,
        "filter_type": "AND",
        "search_query": {},
        "row_id": {}
      },
      "workflow": 1,
      "type": "x"
    },
    "idField": "id"
  },
  {
    "entity": "automation_workflow",
    "accessor": "AutomationWorkflow",
    "op": "create",
    "method": "POST",
    "path": "/api/automation/{automation_id}/workflows/order/",
    "args": [
      {
        "name": "automation_id",
        "wire": "automation_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "automation_workflow",
    "accessor": "AutomationWorkflow",
    "op": "create",
    "method": "POST",
    "path": "/api/automation/{automation_id}/workflows/",
    "args": [
      {
        "name": "id",
        "wire": "automation_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "order": 1,
      "automation_id": 1,
      "allow_test_run_until": "2026-01-01T00:00:00Z",
      "simulate_until_node_id": 1,
      "published_on": "x",
      "state": "x",
      "notification_recipient_ids": [
        1
      ],
      "immediate_dispatch": true
    },
    "idField": "id"
  },
  {
    "entity": "automation_workflow",
    "accessor": "AutomationWorkflow",
    "op": "load",
    "method": "GET",
    "path": "/api/automation/workflows/{workflow_id}/",
    "args": [
      {
        "name": "id",
        "wire": "workflow_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "order": 1,
      "automation_id": 1,
      "allow_test_run_until": "2026-01-01T00:00:00Z",
      "simulate_until_node_id": 1,
      "published_on": "x",
      "state": "x",
      "notification_recipient_ids": [
        1
      ],
      "immediate_dispatch": true
    },
    "idField": "id"
  },
  {
    "entity": "automation_workflow",
    "accessor": "AutomationWorkflow",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/automation/workflows/{workflow_id}/",
    "args": [
      {
        "name": "id",
        "wire": "workflow_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "automation_workflow",
    "accessor": "AutomationWorkflow",
    "op": "update",
    "method": "PATCH",
    "path": "/api/automation/workflows/{workflow_id}/",
    "args": [
      {
        "name": "id",
        "wire": "workflow_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "order": 1,
      "automation_id": 1,
      "allow_test_run_until": "2026-01-01T00:00:00Z",
      "simulate_until_node_id": 1,
      "published_on": "x",
      "state": "x",
      "notification_recipient_ids": [
        1
      ],
      "immediate_dispatch": true
    },
    "idField": "id"
  },
  {
    "entity": "automation_workflow_history",
    "accessor": "AutomationWorkflowHistory",
    "op": "create",
    "method": "POST",
    "path": "/api/automation/workflow_histories/{workflow_history_id}/cancel/",
    "args": [
      {
        "name": "workflow_history_id",
        "wire": "workflow_history_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "started_on": "2026-01-01T00:00:00Z",
      "completed_on": "2026-01-01T00:00:00Z",
      "message": "x",
      "status": "success",
      "is_test_run": true,
      "simulate_until_node": 1,
      "cancellation_requested_on": "2026-01-01T00:00:00Z",
      "plugin_data": {},
      "triggered_by": {
        "id": 1,
        "type": "x",
        "name": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "automation_workflow_history",
    "accessor": "AutomationWorkflowHistory",
    "op": "list",
    "method": "GET",
    "path": "/api/automation/workflows/{workflow_id}/history/",
    "args": [
      {
        "name": "workflow_id",
        "wire": "workflow_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "success_count": 1,
      "fail_count": 1,
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "id": 1,
          "started_on": "2026-01-01T00:00:00Z",
          "completed_on": "2026-01-01T00:00:00Z",
          "message": "x",
          "status": "success",
          "is_test_run": true,
          "simulate_until_node": 1,
          "cancellation_requested_on": "2026-01-01T00:00:00Z",
          "plugin_data": {},
          "triggered_by": {
            "id": 1,
            "type": "x",
            "name": "x"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "builder_data_source",
    "accessor": "BuilderDataSource",
    "op": "load",
    "method": "GET",
    "path": "/api/builder/data-source/{data_source_id}/record-names/",
    "args": [
      {
        "name": "data_source_id",
        "wire": "data_source_id",
        "value": "p1"
      }
    ],
    "select": {
      "record_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "record_ids"
    ],
    "queryArgs": [
      {
        "name": "record_id",
        "wire": "record_ids"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "1": "Record name 1",
      "2": "Record name 2",
      "key$": "example"
    },
    "idField": "id"
  },
  {
    "entity": "builder_data_source",
    "accessor": "BuilderDataSource",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/builder/data-source/{data_source_id}/",
    "args": [
      {
        "name": "id",
        "wire": "data_source_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "builder_domain",
    "accessor": "BuilderDomain",
    "op": "create",
    "method": "POST",
    "path": "/api/builder/{builder_id}/domains/order/",
    "args": [
      {
        "name": "builder_id",
        "wire": "builder_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "builder_domain",
    "accessor": "BuilderDomain",
    "op": "create",
    "method": "POST",
    "path": "/api/builder/domains/{domain_id}/publish/async/",
    "args": [
      {
        "name": "domain_id",
        "wire": "domain_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "builder_domain",
    "accessor": "BuilderDomain",
    "op": "load",
    "method": "GET",
    "path": "/api/builder/domains/ask-public-domain-exists/",
    "args": [],
    "select": {
      "domain": "v1"
    },
    "headers": [],
    "cookies": [],
    "query": [
      "domain"
    ],
    "queryArgs": [
      {
        "name": "domain",
        "wire": "domain"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "builder_domain",
    "accessor": "BuilderDomain",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/builder/domains/{domain_id}/",
    "args": [
      {
        "name": "id",
        "wire": "domain_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "builder_element",
    "accessor": "BuilderElement",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/builder/element/{element_id}/",
    "args": [
      {
        "name": "id",
        "wire": "element_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "builder_page",
    "accessor": "BuilderPage",
    "op": "create",
    "method": "POST",
    "path": "/api/builder/{builder_id}/pages/order/",
    "args": [
      {
        "name": "builder_id",
        "wire": "builder_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "builder_page",
    "accessor": "BuilderPage",
    "op": "create",
    "method": "POST",
    "path": "/api/builder/pages/{page_id}/duplicate/async/",
    "args": [
      {
        "name": "page_id",
        "wire": "page_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 202,
    "sample": {
      "id": 1,
      "type": "x",
      "progress_percentage": 1,
      "state": "x",
      "human_readable_error": "x",
      "error_code": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "original_page": {
        "id": 1,
        "name": "x",
        "path": "x",
        "path_params": [
          {
            "name": "x",
            "type": "text"
          }
        ],
        "order": 1,
        "builder_id": 1,
        "shared": true,
        "visibility": "all",
        "role_type": "allow_all",
        "query_params": [
          {
            "name": "x",
            "type": "text"
          }
        ]
      },
      "duplicated_page": {
        "id": 1,
        "name": "x",
        "path": "x",
        "path_params": [
          {
            "name": "x",
            "type": "text"
          }
        ],
        "order": 1,
        "builder_id": 1,
        "shared": true,
        "visibility": "all",
        "role_type": "allow_all",
        "query_params": [
          {
            "name": "x",
            "type": "text"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "builder_page",
    "accessor": "BuilderPage",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/builder/pages/{page_id}/",
    "args": [
      {
        "name": "id",
        "wire": "page_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "builder_preview",
    "accessor": "BuilderPreview",
    "op": "load",
    "method": "GET",
    "path": "/api/builder/preview/exchange/{token}/",
    "args": [
      {
        "name": "token",
        "wire": "token",
        "value": "p1"
      }
    ],
    "select": {
      "redirect": "v1"
    },
    "headers": [],
    "cookies": [],
    "query": [
      "redirect"
    ],
    "queryArgs": [
      {
        "name": "redirect",
        "wire": "redirect"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "builder_preview_grant",
    "accessor": "BuilderPreviewGrant",
    "op": "create",
    "method": "POST",
    "path": "/api/builder/preview/{builder_id}/grant/",
    "args": [
      {
        "name": "preview_id",
        "wire": "builder_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "url": "x"
    },
    "idField": "id"
  },
  {
    "entity": "builder_preview_handoff",
    "accessor": "BuilderPreviewHandoff",
    "op": "create",
    "method": "POST",
    "path": "/api/builder/preview/handoff/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "preview_session": "x",
      "expires_in": 1,
      "builder_id": 1
    },
    "idField": "id"
  },
  {
    "entity": "builder_workflow_action",
    "accessor": "BuilderWorkflowAction",
    "op": "create",
    "method": "POST",
    "path": "/api/builder/page/{page_id}/workflow_actions/order/",
    "args": [
      {
        "name": "page_id",
        "wire": "page_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "builder_workflow_action",
    "accessor": "BuilderWorkflowAction",
    "op": "create",
    "method": "POST",
    "path": "/api/builder/workflow_action/{workflow_action_id}/dispatch/",
    "args": [
      {
        "name": "workflow_action_id",
        "wire": "workflow_action_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "builder_workflow_action",
    "accessor": "BuilderWorkflowAction",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/builder/workflow_action/{workflow_action_id}/",
    "args": [
      {
        "name": "id",
        "wire": "workflow_action_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "builder_workflow_action_type_builder_workflow_action",
    "accessor": "BuilderWorkflowActionTypeBuilderWorkflowAction",
    "op": "create",
    "method": "POST",
    "path": "/api/builder/page/{page_id}/workflow_actions/",
    "args": [
      {
        "name": "page_id",
        "wire": "page_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "order": 1,
      "element_id": 1,
      "type": "x",
      "event": "x",
      "title": {},
      "description": {}
    },
    "idField": "id"
  },
  {
    "entity": "builder_workflow_action_type_builder_workflow_action",
    "accessor": "BuilderWorkflowActionTypeBuilderWorkflowAction",
    "op": "list",
    "method": "GET",
    "path": "/api/builder/page/{page_id}/workflow_actions/",
    "args": [
      {
        "name": "page_id",
        "wire": "page_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": [
      {
        "id": 1,
        "order": 1,
        "element_id": 1,
        "type": "x",
        "event": "x",
        "title": {},
        "description": {}
      }
    ],
    "idField": "id"
  },
  {
    "entity": "builder_workflow_action_type_builder_workflow_action",
    "accessor": "BuilderWorkflowActionTypeBuilderWorkflowAction",
    "op": "update",
    "method": "PATCH",
    "path": "/api/builder/workflow_action/{workflow_action_id}/",
    "args": [
      {
        "name": "id",
        "wire": "workflow_action_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "order": 1,
      "element_id": 1,
      "type": "x",
      "event": "x",
      "title": {},
      "description": {}
    },
    "idField": "id"
  },
  {
    "entity": "by_id",
    "accessor": "ById",
    "op": "load",
    "method": "GET",
    "path": "/api/builder/domains/published/by_id/{builder_id}/",
    "args": [
      {
        "name": "id",
        "wire": "builder_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "order": 1,
      "type": "x",
      "workspace": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "last_viewed": "2026-01-01T00:00:00Z",
      "favicon_file": {
        "size": 1,
        "mime_type": "x",
        "is_image": true,
        "image_width": 1,
        "image_height": 1,
        "uploaded_at": "2026-01-01T00:00:00Z",
        "url": "x",
        "thumbnails": {},
        "name": "x",
        "original_name": "x"
      },
      "login_page_id": 1,
      "breakpoints": {},
      "pages": [
        {
          "id": 1,
          "name": "x",
          "path": "x",
          "path_params": [
            {
              "name": "x",
              "type": "text"
            }
          ],
          "shared": true,
          "visibility": "all",
          "role_type": "allow_all",
          "query_params": [
            {
              "name": "x",
              "type": "text"
            }
          ]
        }
      ],
      "theme": {
        "primary_color": "x",
        "secondary_color": "x",
        "border_color": "x",
        "main_success_color": "x",
        "main_warning_color": "x",
        "main_error_color": "x",
        "heading_1_text_decoration": [
          true
        ],
        "heading_2_text_decoration": [
          true
        ],
        "heading_3_text_decoration": [
          true
        ],
        "heading_4_text_decoration": [
          true
        ],
        "heading_5_text_decoration": [
          true
        ],
        "heading_6_text_decoration": [
          true
        ],
        "body_font_family": "x",
        "body_font_size": 1,
        "body_font_weight": "thin",
        "body_text_color": "x",
        "body_text_alignment": "left",
        "heading_1_font_family": "x",
        "heading_1_font_size": 1,
        "heading_1_font_weight": "thin",
        "heading_1_text_color": "x",
        "heading_1_text_alignment": "left",
        "heading_2_font_family": "x",
        "heading_2_font_size": 1,
        "heading_2_font_weight": "thin",
        "heading_2_text_color": "x",
        "heading_2_text_alignment": "left",
        "heading_3_font_family": "x",
        "heading_3_font_size": 1,
        "heading_3_font_weight": "thin",
        "heading_3_text_color": "x",
        "heading_3_text_alignment": "left",
        "heading_4_font_family": "x",
        "heading_4_font_size": 1,
        "heading_4_font_weight": "thin",
        "heading_4_text_color": "x",
        "heading_4_text_alignment": "left",
        "heading_5_font_family": "x",
        "heading_5_font_size": 1,
        "heading_5_font_weight": "thin",
        "heading_5_text_color": "x",
        "heading_5_text_alignment": "left",
        "heading_6_font_family": "x",
        "heading_6_font_size": 1,
        "heading_6_font_weight": "thin",
        "heading_6_text_color": "x",
        "heading_6_text_alignment": "left",
        "button_font_family": "x",
        "button_font_size": 1,
        "button_font_weight": "thin",
        "button_alignment": "left",
        "button_text_alignment": "left",
        "button_width": "auto",
        "button_background_color": "x",
        "button_text_color": "x",
        "button_border_color": "x",
        "button_border_size": 1,
        "button_border_radius": 1,
        "button_vertical_padding": 1,
        "button_horizontal_padding": 1,
        "button_hover_background_color": "x",
        "button_hover_text_color": "x",
        "button_hover_border_color": "x",
        "button_active_background_color": "x",
        "button_active_text_color": "x",
        "button_active_border_color": "x",
        "image_max_height": 1,
        "image_alignment": "left",
        "image_max_width": 1,
        "image_border_radius": 1,
        "image_constraint": "cover",
        "page_background_file": {
          "size": 1,
          "mime_type": "x",
          "is_image": true,
          "image_width": 1,
          "image_height": 1,
          "uploaded_at": "2026-01-01T00:00:00Z",
          "url": "x",
          "thumbnails": {},
          "name": "x",
          "original_name": "x"
        },
        "page_background_color": "x",
        "page_background_mode": "tile",
        "label_font_family": "x",
        "label_text_color": "x",
        "label_font_size": 1,
        "label_font_weight": "thin",
        "input_font_family": "x",
        "input_font_size": 1,
        "input_font_weight": "thin",
        "input_text_color": "x",
        "input_background_color": "x",
        "input_border_color": "x",
        "input_border_size": 1,
        "input_border_radius": 1,
        "input_vertical_padding": 1,
        "input_horizontal_padding": 1,
        "table_border_color": "x",
        "table_border_size": 1,
        "table_border_radius": 1,
        "table_header_background_color": "x",
        "table_header_text_color": "x",
        "table_header_font_size": 1,
        "table_header_font_weight": "thin",
        "table_header_font_family": "x",
        "table_header_text_alignment": "left",
        "table_cell_background_color": "x",
        "table_cell_alternate_background_color": "x",
        "table_cell_alignment": "left",
        "table_cell_vertical_padding": 1,
        "table_cell_horizontal_padding": 1,
        "table_vertical_separator_color": "x",
        "table_vertical_separator_size": 1,
        "table_horizontal_separator_color": "x",
        "table_horizontal_separator_size": 1,
        "link_default_text_decoration": [
          true
        ],
        "link_hover_text_decoration": [
          true
        ],
        "link_active_text_decoration": [
          true
        ],
        "link_font_family": "x",
        "link_font_size": 1,
        "link_font_weight": "thin",
        "link_text_alignment": "left",
        "link_text_color": "x",
        "link_hover_text_color": "x",
        "link_active_text_color": "x"
      },
      "user_sources": [
        {
          "id": 1,
          "uid": "x",
          "type": "x",
          "name": "x",
          "order": "x",
          "auth_providers": [],
          "table_id": 1,
          "email_field_id": 1,
          "name_field_id": 1,
          "role_field_id": 1
        }
      ],
      "scripts": [
        {
          "id": 1,
          "type": "stylesheet",
          "url": "x",
          "load_type": "defer",
          "crossorigin": "anonymous"
        }
      ],
      "custom_code": {
        "css": "x",
        "js": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "by_name",
    "accessor": "ByName",
    "op": "load",
    "method": "GET",
    "path": "/api/builder/domains/published/by_name/{domain_name}/",
    "args": [
      {
        "name": "id",
        "wire": "domain_name",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "order": 1,
      "type": "x",
      "workspace": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "last_viewed": "2026-01-01T00:00:00Z",
      "favicon_file": {
        "size": 1,
        "mime_type": "x",
        "is_image": true,
        "image_width": 1,
        "image_height": 1,
        "uploaded_at": "2026-01-01T00:00:00Z",
        "url": "x",
        "thumbnails": {},
        "name": "x",
        "original_name": "x"
      },
      "login_page_id": 1,
      "breakpoints": {},
      "pages": [
        {
          "id": 1,
          "name": "x",
          "path": "x",
          "path_params": [
            {
              "name": "x",
              "type": "text"
            }
          ],
          "shared": true,
          "visibility": "all",
          "role_type": "allow_all",
          "query_params": [
            {
              "name": "x",
              "type": "text"
            }
          ]
        }
      ],
      "theme": {
        "primary_color": "x",
        "secondary_color": "x",
        "border_color": "x",
        "main_success_color": "x",
        "main_warning_color": "x",
        "main_error_color": "x",
        "heading_1_text_decoration": [
          true
        ],
        "heading_2_text_decoration": [
          true
        ],
        "heading_3_text_decoration": [
          true
        ],
        "heading_4_text_decoration": [
          true
        ],
        "heading_5_text_decoration": [
          true
        ],
        "heading_6_text_decoration": [
          true
        ],
        "body_font_family": "x",
        "body_font_size": 1,
        "body_font_weight": "thin",
        "body_text_color": "x",
        "body_text_alignment": "left",
        "heading_1_font_family": "x",
        "heading_1_font_size": 1,
        "heading_1_font_weight": "thin",
        "heading_1_text_color": "x",
        "heading_1_text_alignment": "left",
        "heading_2_font_family": "x",
        "heading_2_font_size": 1,
        "heading_2_font_weight": "thin",
        "heading_2_text_color": "x",
        "heading_2_text_alignment": "left",
        "heading_3_font_family": "x",
        "heading_3_font_size": 1,
        "heading_3_font_weight": "thin",
        "heading_3_text_color": "x",
        "heading_3_text_alignment": "left",
        "heading_4_font_family": "x",
        "heading_4_font_size": 1,
        "heading_4_font_weight": "thin",
        "heading_4_text_color": "x",
        "heading_4_text_alignment": "left",
        "heading_5_font_family": "x",
        "heading_5_font_size": 1,
        "heading_5_font_weight": "thin",
        "heading_5_text_color": "x",
        "heading_5_text_alignment": "left",
        "heading_6_font_family": "x",
        "heading_6_font_size": 1,
        "heading_6_font_weight": "thin",
        "heading_6_text_color": "x",
        "heading_6_text_alignment": "left",
        "button_font_family": "x",
        "button_font_size": 1,
        "button_font_weight": "thin",
        "button_alignment": "left",
        "button_text_alignment": "left",
        "button_width": "auto",
        "button_background_color": "x",
        "button_text_color": "x",
        "button_border_color": "x",
        "button_border_size": 1,
        "button_border_radius": 1,
        "button_vertical_padding": 1,
        "button_horizontal_padding": 1,
        "button_hover_background_color": "x",
        "button_hover_text_color": "x",
        "button_hover_border_color": "x",
        "button_active_background_color": "x",
        "button_active_text_color": "x",
        "button_active_border_color": "x",
        "image_max_height": 1,
        "image_alignment": "left",
        "image_max_width": 1,
        "image_border_radius": 1,
        "image_constraint": "cover",
        "page_background_file": {
          "size": 1,
          "mime_type": "x",
          "is_image": true,
          "image_width": 1,
          "image_height": 1,
          "uploaded_at": "2026-01-01T00:00:00Z",
          "url": "x",
          "thumbnails": {},
          "name": "x",
          "original_name": "x"
        },
        "page_background_color": "x",
        "page_background_mode": "tile",
        "label_font_family": "x",
        "label_text_color": "x",
        "label_font_size": 1,
        "label_font_weight": "thin",
        "input_font_family": "x",
        "input_font_size": 1,
        "input_font_weight": "thin",
        "input_text_color": "x",
        "input_background_color": "x",
        "input_border_color": "x",
        "input_border_size": 1,
        "input_border_radius": 1,
        "input_vertical_padding": 1,
        "input_horizontal_padding": 1,
        "table_border_color": "x",
        "table_border_size": 1,
        "table_border_radius": 1,
        "table_header_background_color": "x",
        "table_header_text_color": "x",
        "table_header_font_size": 1,
        "table_header_font_weight": "thin",
        "table_header_font_family": "x",
        "table_header_text_alignment": "left",
        "table_cell_background_color": "x",
        "table_cell_alternate_background_color": "x",
        "table_cell_alignment": "left",
        "table_cell_vertical_padding": 1,
        "table_cell_horizontal_padding": 1,
        "table_vertical_separator_color": "x",
        "table_vertical_separator_size": 1,
        "table_horizontal_separator_color": "x",
        "table_horizontal_separator_size": 1,
        "link_default_text_decoration": [
          true
        ],
        "link_hover_text_decoration": [
          true
        ],
        "link_active_text_decoration": [
          true
        ],
        "link_font_family": "x",
        "link_font_size": 1,
        "link_font_weight": "thin",
        "link_text_alignment": "left",
        "link_text_color": "x",
        "link_hover_text_color": "x",
        "link_active_text_color": "x"
      },
      "user_sources": [
        {
          "id": 1,
          "uid": "x",
          "type": "x",
          "name": "x",
          "order": "x",
          "auth_providers": [],
          "table_id": 1,
          "email_field_id": 1,
          "name_field_id": 1,
          "role_field_id": 1
        }
      ],
      "scripts": [
        {
          "id": 1,
          "type": "stylesheet",
          "url": "x",
          "load_type": "defer",
          "crossorigin": "anonymous"
        }
      ],
      "custom_code": {
        "css": "x",
        "js": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "calendar",
    "accessor": "Calendar",
    "op": "load",
    "method": "GET",
    "path": "/api/database/views/calendar/{view_id}/",
    "args": [
      {
        "name": "id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {
      "from_timestamp": "v1",
      "to_timestamp": "v1",
      "filter": "v1",
      "filter_type": "v1",
      "filter_{field}_{filter}": "v1",
      "include": "v1",
      "limit": "v1",
      "limit_linked_item": "v1",
      "offset": 0,
      "search": "v1",
      "search_mode": "v1",
      "user_timezone": "UTC"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "filter__{field}__{filter}",
      "filter_type",
      "filters",
      "from_timestamp",
      "include",
      "limit",
      "limit_linked_items",
      "offset",
      "search",
      "search_mode",
      "to_timestamp",
      "user_timezone"
    ],
    "queryArgs": [
      {
        "name": "filter",
        "wire": "filters"
      },
      {
        "name": "filter_type",
        "wire": "filter_type"
      },
      {
        "name": "filter_{field}_{filter}",
        "wire": "filter__{field}__{filter}"
      },
      {
        "name": "from_timestamp",
        "wire": "from_timestamp"
      },
      {
        "name": "include",
        "wire": "include"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "limit_linked_item",
        "wire": "limit_linked_items"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "search_mode",
        "wire": "search_mode"
      },
      {
        "name": "to_timestamp",
        "wire": "to_timestamp"
      },
      {
        "name": "user_timezone",
        "wire": "user_timezone"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "rows": {},
      "field_options": [
        {
          "hidden": true,
          "order": 1
        }
      ],
      "row_metadata": {}
    },
    "idField": "id"
  },
  {
    "entity": "calendar_view_example",
    "accessor": "CalendarViewExample",
    "op": "list",
    "method": "GET",
    "path": "/api/database/views/calendar/{slug}/public/rows/",
    "args": [
      {
        "name": "calendar_id",
        "wire": "slug",
        "value": "p1"
      }
    ],
    "select": {
      "from_timestamp": "v1",
      "to_timestamp": "v1",
      "filter": "v1",
      "filter_type": "v1",
      "filter_{field}_{filter}": "v1",
      "limit": "v1",
      "limit_linked_item": "v1",
      "offset": "v1",
      "user_timezone": "UTC"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "filter__{field}__{filter}",
      "filter_type",
      "filters",
      "from_timestamp",
      "limit",
      "limit_linked_items",
      "offset",
      "to_timestamp",
      "user_timezone"
    ],
    "queryArgs": [
      {
        "name": "filter",
        "wire": "filters"
      },
      {
        "name": "filter_type",
        "wire": "filter_type"
      },
      {
        "name": "filter_{field}_{filter}",
        "wire": "filter__{field}__{filter}"
      },
      {
        "name": "from_timestamp",
        "wire": "from_timestamp"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "limit_linked_item",
        "wire": "limit_linked_items"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "to_timestamp",
        "wire": "to_timestamp"
      },
      {
        "name": "user_timezone",
        "wire": "user_timezone"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "rows": {},
      "field_options": [
        {
          "hidden": true,
          "order": 1
        }
      ],
      "row_metadata": {}
    },
    "idField": "id"
  },
  {
    "entity": "callback",
    "accessor": "Callback",
    "op": "load",
    "method": "GET",
    "path": "/api/sso/oauth2/callback/{provider_id}/",
    "args": [
      {
        "name": "id",
        "wire": "provider_id",
        "value": "p1"
      }
    ],
    "select": {
      "code": "v1"
    },
    "headers": [],
    "cookies": [],
    "query": [
      "code"
    ],
    "queryArgs": [
      {
        "name": "code",
        "wire": "code"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "cancel",
    "accessor": "Cancel",
    "op": "list",
    "method": "GET",
    "path": "/assistant/chat/{chat_uuid}/cancel/",
    "args": [
      {
        "name": "chat_id",
        "wire": "chat_uuid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "messages": [
        {
          "type": "x",
          "content": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "color_typography_button_image_page_input_table_linklink_active_text",
    "accessor": "ColorTypographyButtonImagePageInputTableLinklinkActiveText",
    "op": "update",
    "method": "PATCH",
    "path": "/api/builder/{builder_id}/theme/",
    "args": [
      {
        "name": "builder_id",
        "wire": "builder_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "primary_color": "x",
      "secondary_color": "x",
      "border_color": "x",
      "main_success_color": "x",
      "main_warning_color": "x",
      "main_error_color": "x",
      "heading_1_text_decoration": [
        true
      ],
      "heading_2_text_decoration": [
        true
      ],
      "heading_3_text_decoration": [
        true
      ],
      "heading_4_text_decoration": [
        true
      ],
      "heading_5_text_decoration": [
        true
      ],
      "heading_6_text_decoration": [
        true
      ],
      "body_font_family": "x",
      "body_font_size": 1,
      "body_font_weight": "thin",
      "body_text_color": "x",
      "body_text_alignment": "left",
      "heading_1_font_family": "x",
      "heading_1_font_size": 1,
      "heading_1_font_weight": "thin",
      "heading_1_text_color": "x",
      "heading_1_text_alignment": "left",
      "heading_2_font_family": "x",
      "heading_2_font_size": 1,
      "heading_2_font_weight": "thin",
      "heading_2_text_color": "x",
      "heading_2_text_alignment": "left",
      "heading_3_font_family": "x",
      "heading_3_font_size": 1,
      "heading_3_font_weight": "thin",
      "heading_3_text_color": "x",
      "heading_3_text_alignment": "left",
      "heading_4_font_family": "x",
      "heading_4_font_size": 1,
      "heading_4_font_weight": "thin",
      "heading_4_text_color": "x",
      "heading_4_text_alignment": "left",
      "heading_5_font_family": "x",
      "heading_5_font_size": 1,
      "heading_5_font_weight": "thin",
      "heading_5_text_color": "x",
      "heading_5_text_alignment": "left",
      "heading_6_font_family": "x",
      "heading_6_font_size": 1,
      "heading_6_font_weight": "thin",
      "heading_6_text_color": "x",
      "heading_6_text_alignment": "left",
      "button_font_family": "x",
      "button_font_size": 1,
      "button_font_weight": "thin",
      "button_alignment": "left",
      "button_text_alignment": "left",
      "button_width": "auto",
      "button_background_color": "x",
      "button_text_color": "x",
      "button_border_color": "x",
      "button_border_size": 1,
      "button_border_radius": 1,
      "button_vertical_padding": 1,
      "button_horizontal_padding": 1,
      "button_hover_background_color": "x",
      "button_hover_text_color": "x",
      "button_hover_border_color": "x",
      "button_active_background_color": "x",
      "button_active_text_color": "x",
      "button_active_border_color": "x",
      "image_max_height": 1,
      "image_alignment": "left",
      "image_max_width": 1,
      "image_border_radius": 1,
      "image_constraint": "cover",
      "page_background_file": {
        "size": 1,
        "mime_type": "x",
        "is_image": true,
        "image_width": 1,
        "image_height": 1,
        "uploaded_at": "2026-01-01T00:00:00Z",
        "url": "x",
        "thumbnails": {},
        "name": "x",
        "original_name": "x"
      },
      "page_background_color": "x",
      "page_background_mode": "tile",
      "label_font_family": "x",
      "label_text_color": "x",
      "label_font_size": 1,
      "label_font_weight": "thin",
      "input_font_family": "x",
      "input_font_size": 1,
      "input_font_weight": "thin",
      "input_text_color": "x",
      "input_background_color": "x",
      "input_border_color": "x",
      "input_border_size": 1,
      "input_border_radius": 1,
      "input_vertical_padding": 1,
      "input_horizontal_padding": 1,
      "table_border_color": "x",
      "table_border_size": 1,
      "table_border_radius": 1,
      "table_header_background_color": "x",
      "table_header_text_color": "x",
      "table_header_font_size": 1,
      "table_header_font_weight": "thin",
      "table_header_font_family": "x",
      "table_header_text_alignment": "left",
      "table_cell_background_color": "x",
      "table_cell_alternate_background_color": "x",
      "table_cell_alignment": "left",
      "table_cell_vertical_padding": 1,
      "table_cell_horizontal_padding": 1,
      "table_vertical_separator_color": "x",
      "table_vertical_separator_size": 1,
      "table_horizontal_separator_color": "x",
      "table_horizontal_separator_size": 1,
      "link_default_text_decoration": [
        true
      ],
      "link_hover_text_decoration": [
        true
      ],
      "link_active_text_decoration": [
        true
      ],
      "link_font_family": "x",
      "link_font_size": 1,
      "link_font_weight": "thin",
      "link_text_alignment": "left",
      "link_text_color": "x",
      "link_hover_text_color": "x",
      "link_active_text_color": "x"
    },
    "idField": "id"
  },
  {
    "entity": "core_webhook",
    "accessor": "CoreWebhook",
    "op": "create",
    "method": "POST",
    "path": "/api/webhooks/{webhook_uid}/",
    "args": [
      {
        "name": "id",
        "wire": "webhook_uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "core_webhook",
    "accessor": "CoreWebhook",
    "op": "load",
    "method": "GET",
    "path": "/api/webhooks/{webhook_uid}/",
    "args": [
      {
        "name": "id",
        "wire": "webhook_uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "core_webhook",
    "accessor": "CoreWebhook",
    "op": "patch",
    "method": "PATCH",
    "path": "/api/webhooks/{webhook_uid}/",
    "args": [
      {
        "name": "id",
        "wire": "webhook_uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "core_webhook",
    "accessor": "CoreWebhook",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/webhooks/{webhook_uid}/",
    "args": [
      {
        "name": "id",
        "wire": "webhook_uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "core_webhook",
    "accessor": "CoreWebhook",
    "op": "update",
    "method": "PUT",
    "path": "/api/webhooks/{webhook_uid}/",
    "args": [
      {
        "name": "id",
        "wire": "webhook_uid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "dashboard_data_source",
    "accessor": "DashboardDataSource",
    "op": "create",
    "method": "POST",
    "path": "/api/dashboard/data-sources/{data_source_id}/dispatch/",
    "args": [
      {
        "name": "data_source_id",
        "wire": "data_source_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "dashboard_widget",
    "accessor": "DashboardWidget",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/dashboard/widgets/{widget_id}/",
    "args": [
      {
        "name": "id",
        "wire": "widget_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "dashboard_widget_widget",
    "accessor": "DashboardWidgetWidget",
    "op": "create",
    "method": "POST",
    "path": "/api/dashboard/{dashboard_id}/widgets/",
    "args": [
      {
        "name": "id",
        "wire": "dashboard_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "title": "x",
      "description": "x",
      "dashboard_id": 1,
      "type": "x",
      "order": "x",
      "grid_x": 1,
      "grid_y": 1,
      "grid_width": 1,
      "grid_height": 1,
      "grid_layout": {
        "default_width": 1,
        "default_height": 1,
        "min_width": 1,
        "min_height": 1,
        "max_width": 1,
        "max_height": 1
      },
      "data_source_id": 1
    },
    "idField": "id"
  },
  {
    "entity": "dashboard_widget_widget",
    "accessor": "DashboardWidgetWidget",
    "op": "list",
    "method": "GET",
    "path": "/api/dashboard/{dashboard_id}/widgets/",
    "args": [
      {
        "name": "id",
        "wire": "dashboard_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "title": "x",
        "description": "x",
        "dashboard_id": 1,
        "type": "x",
        "order": "x",
        "grid_x": 1,
        "grid_y": 1,
        "grid_width": 1,
        "grid_height": 1,
        "grid_layout": {
          "default_width": 1,
          "default_height": 1,
          "min_width": 1,
          "min_height": 1,
          "max_width": 1,
          "max_height": 1
        },
        "data_source_id": 1
      }
    ],
    "idField": "id"
  },
  {
    "entity": "dashboard_widget_widget",
    "accessor": "DashboardWidgetWidget",
    "op": "update",
    "method": "PATCH",
    "path": "/api/dashboard/{dashboard_id}/widgets/layout/",
    "args": [
      {
        "name": "dashboard_id",
        "wire": "dashboard_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "title": "x",
        "description": "x",
        "dashboard_id": 1,
        "type": "x",
        "order": "x",
        "grid_x": 1,
        "grid_y": 1,
        "grid_width": 1,
        "grid_height": 1,
        "grid_layout": {
          "default_width": 1,
          "default_height": 1,
          "min_width": 1,
          "min_height": 1,
          "max_width": 1,
          "max_height": 1
        },
        "data_source_id": 1
      }
    ],
    "idField": "id"
  },
  {
    "entity": "dashboard_widget_widget",
    "accessor": "DashboardWidgetWidget",
    "op": "update",
    "method": "PATCH",
    "path": "/api/dashboard/widgets/{widget_id}/",
    "args": [
      {
        "name": "id",
        "wire": "widget_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "title": "x",
      "description": "x",
      "dashboard_id": 1,
      "type": "x",
      "order": "x",
      "grid_x": 1,
      "grid_y": 1,
      "grid_width": 1,
      "grid_height": 1,
      "grid_layout": {
        "default_width": 1,
        "default_height": 1,
        "min_width": 1,
        "min_height": 1,
        "max_width": 1,
        "max_height": 1
      },
      "data_source_id": 1
    },
    "idField": "id"
  },
  {
    "entity": "data_scan",
    "accessor": "DataScan",
    "op": "create",
    "method": "POST",
    "path": "/api/admin/data-scanner/scans/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "scan_type": "pattern",
      "pattern": "x",
      "frequency": "manual",
      "scan_all_workspaces": true,
      "workspace_ids": "x",
      "is_running": true,
      "last_run_started_at": "2026-01-01T00:00:00Z",
      "last_run_finished_at": "2026-01-01T00:00:00Z",
      "last_error": "x",
      "list_items": "x",
      "results_count": "x",
      "source_table_id": "x",
      "source_field_id": "x",
      "whole_words": true,
      "source_workspace_id": "x",
      "source_database_id": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "data_scan",
    "accessor": "DataScan",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/data-scanner/scans/",
    "args": [],
    "select": {
      "ids": "v1",
      "page": "v1",
      "search": "v1",
      "size": "v1",
      "sort": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "ids",
      "page",
      "search",
      "size",
      "sorts"
    ],
    "queryArgs": [
      {
        "name": "ids",
        "wire": "ids"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "size",
        "wire": "size"
      },
      {
        "name": "sort",
        "wire": "sorts"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "id": 1,
          "name": "x",
          "scan_type": "pattern",
          "pattern": "x",
          "frequency": "manual",
          "scan_all_workspaces": true,
          "workspace_ids": "x",
          "is_running": true,
          "last_run_started_at": "2026-01-01T00:00:00Z",
          "last_run_finished_at": "2026-01-01T00:00:00Z",
          "last_error": "x",
          "list_items": "x",
          "results_count": "x",
          "source_table_id": "x",
          "source_field_id": "x",
          "whole_words": true,
          "source_workspace_id": "x",
          "source_database_id": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "data_scan",
    "accessor": "DataScan",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/data-scanner/scans/{scan_id}/",
    "args": [
      {
        "name": "id",
        "wire": "scan_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "scan_type": "pattern",
      "pattern": "x",
      "frequency": "manual",
      "scan_all_workspaces": true,
      "workspace_ids": "x",
      "is_running": true,
      "last_run_started_at": "2026-01-01T00:00:00Z",
      "last_run_finished_at": "2026-01-01T00:00:00Z",
      "last_error": "x",
      "list_items": "x",
      "results_count": "x",
      "source_table_id": "x",
      "source_field_id": "x",
      "whole_words": true,
      "source_workspace_id": "x",
      "source_database_id": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "data_scan",
    "accessor": "DataScan",
    "op": "update",
    "method": "PATCH",
    "path": "/api/admin/data-scanner/scans/{scan_id}/",
    "args": [
      {
        "name": "id",
        "wire": "scan_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "scan_type": "pattern",
      "pattern": "x",
      "frequency": "manual",
      "scan_all_workspaces": true,
      "workspace_ids": "x",
      "is_running": true,
      "last_run_started_at": "2026-01-01T00:00:00Z",
      "last_run_finished_at": "2026-01-01T00:00:00Z",
      "last_error": "x",
      "list_items": "x",
      "results_count": "x",
      "source_table_id": "x",
      "source_field_id": "x",
      "whole_words": true,
      "source_workspace_id": "x",
      "source_database_id": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "data_sync",
    "accessor": "DataSync",
    "op": "load",
    "method": "GET",
    "path": "/api/database/data-sync/{data_sync_id}/",
    "args": [
      {
        "name": "id",
        "wire": "data_sync_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "type": "x",
      "table_id": 1,
      "database_id": "x",
      "synced_properties": [
        {
          "field_id": 1,
          "key": "x",
          "unique_primary": true
        }
      ],
      "last_sync": "2026-01-01T00:00:00Z",
      "last_error": "x",
      "auto_add_new_properties": true,
      "delete_unmatched_rows": true,
      "two_way_sync": true,
      "ical_url": "x"
    },
    "idField": "id"
  },
  {
    "entity": "data_sync",
    "accessor": "DataSync",
    "op": "update",
    "method": "PATCH",
    "path": "/api/database/data-sync/{data_sync_id}/",
    "args": [
      {
        "name": "id",
        "wire": "data_sync_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "type": "x",
      "table_id": 1,
      "database_id": "x",
      "synced_properties": [
        {
          "field_id": 1,
          "key": "x",
          "unique_primary": true
        }
      ],
      "last_sync": "2026-01-01T00:00:00Z",
      "last_error": "x",
      "auto_add_new_properties": true,
      "delete_unmatched_rows": true,
      "two_way_sync": true
    },
    "idField": "id"
  },
  {
    "entity": "database_table",
    "accessor": "DatabaseTable",
    "op": "create",
    "method": "POST",
    "path": "/api/database/data-sync/{data_sync_id}/sync/async/",
    "args": [
      {
        "name": "data_sync_id",
        "wire": "data_sync_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 202,
    "sample": {
      "id": 1,
      "type": "x",
      "progress_percentage": 1,
      "state": "x",
      "human_readable_error": "x",
      "error_code": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "data_sync": {
        "id": 1,
        "type": "x",
        "table_id": 1,
        "database_id": "x",
        "synced_properties": [
          {
            "field_id": 1,
            "key": "x",
            "unique_primary": true
          }
        ],
        "last_sync": "2026-01-01T00:00:00Z",
        "last_error": "x",
        "auto_add_new_properties": true,
        "delete_unmatched_rows": true,
        "two_way_sync": true
      },
      "triggered_by": "x",
      "user_name": "x"
    },
    "idField": "id"
  },
  {
    "entity": "database_table",
    "accessor": "DatabaseTable",
    "op": "create",
    "method": "POST",
    "path": "/api/database/tables/database/{database_id}/async/",
    "action": "async",
    "args": [
      {
        "name": "id",
        "wire": "database_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 202,
    "sample": {
      "id": 1,
      "type": "x",
      "progress_percentage": 1,
      "state": "x",
      "human_readable_error": "x",
      "error_code": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "database_id": 1,
      "name": "x",
      "table_id": 1,
      "first_row_header": true,
      "importer_type": "x",
      "original_file_name": "x",
      "report": {
        "failing_rows": {}
      }
    },
    "idField": "id"
  },
  {
    "entity": "database_table",
    "accessor": "DatabaseTable",
    "op": "create",
    "method": "POST",
    "path": "/api/database/tables/database/{database_id}/order/",
    "action": "order",
    "args": [
      {
        "name": "id",
        "wire": "database_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "database_table",
    "accessor": "DatabaseTable",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/database/tables/{table_id}/",
    "args": [
      {
        "name": "id",
        "wire": "table_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "database_table_field",
    "accessor": "DatabaseTableField",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/database/workflow_action/{workflow_action_id}/",
    "args": [
      {
        "name": "workflow_action_id",
        "wire": "workflow_action_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "database_table_grid_view",
    "accessor": "DatabaseTableGridView",
    "op": "load",
    "method": "GET",
    "path": "/api/database/views/grid/{view_id}/aggregation/{field_id}/",
    "args": [
      {
        "name": "field_id",
        "wire": "field_id",
        "value": "p1"
      },
      {
        "name": "grid_id",
        "wire": "view_id",
        "value": "p2"
      }
    ],
    "select": {
      "include": "v1",
      "type": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "include",
      "type"
    ],
    "queryArgs": [
      {
        "name": "include",
        "wire": "include"
      },
      {
        "name": "type",
        "wire": "type"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "value": 5,
      "total": 7
    },
    "idField": "id"
  },
  {
    "entity": "database_table_row",
    "accessor": "DatabaseTableRow",
    "op": "create",
    "method": "POST",
    "path": "/api/database/rows/table/{table_id}/batch-delete/",
    "args": [
      {
        "name": "table_id",
        "wire": "table_id",
        "value": "p1"
      }
    ],
    "select": {
      "send_webhook_event": "v1",
      "view": "v1"
    },
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "query": [
      "send_webhook_events",
      "view"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "database_table_row",
    "accessor": "DatabaseTableRow",
    "op": "load",
    "method": "GET",
    "path": "/api/database/rows/names/",
    "args": [],
    "select": {
      "table_{id}": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "table__{id}"
    ],
    "queryArgs": [
      {
        "name": "table_{id}",
        "wire": "table__{id}"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "{table_id}*": {
        "{row_id}*": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "database_table_row",
    "accessor": "DatabaseTableRow",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/database/rows/table/{table_id}/{row_id}/",
    "args": [
      {
        "name": "row_id",
        "wire": "row_id",
        "value": "p1"
      },
      {
        "name": "table_id",
        "wire": "table_id",
        "value": "p2"
      }
    ],
    "select": {
      "send_webhook_event": "v1",
      "view": "v1"
    },
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "query": [
      "send_webhook_events",
      "view"
    ],
    "queryArgs": [
      {
        "name": "send_webhook_event",
        "wire": "send_webhook_events"
      },
      {
        "name": "view",
        "wire": "view"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "database_table_row",
    "accessor": "DatabaseTableRow",
    "op": "update",
    "method": "PUT",
    "path": "/api/row_comments/{table_id}/{row_id}/notification-mode/",
    "args": [
      {
        "name": "row_comment_id",
        "wire": "table_id",
        "value": "p1"
      },
      {
        "name": "row_id",
        "wire": "row_id",
        "value": "p2"
      }
    ],
    "select": {
      "view": "v1"
    },
    "headers": [],
    "cookies": [],
    "query": [
      "view"
    ],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "database_table_view",
    "accessor": "DatabaseTableView",
    "op": "create",
    "method": "POST",
    "path": "/api/database/views/table/{table_id}/order/",
    "args": [
      {
        "name": "table_id",
        "wire": "table_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "database_table_view",
    "accessor": "DatabaseTableView",
    "op": "load",
    "method": "GET",
    "path": "/api/database/views/calendar/{ical_slug}.ics",
    "args": [
      {
        "name": "ical_slug",
        "wire": "ical_slug",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "text/calendar"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "database_table_view",
    "accessor": "DatabaseTableView",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/database/views/{view_id}/",
    "args": [
      {
        "name": "id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "database_table_view_decoration",
    "accessor": "DatabaseTableViewDecoration",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/database/views/decoration/{view_decoration_id}/",
    "args": [
      {
        "name": "id",
        "wire": "view_decoration_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "database_table_view_filter",
    "accessor": "DatabaseTableViewFilter",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/database/views/filter/{view_filter_id}/",
    "args": [
      {
        "name": "id",
        "wire": "view_filter_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "database_table_view_filter",
    "accessor": "DatabaseTableViewFilter",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/database/views/filter-group/{view_filter_group_id}/",
    "args": [
      {
        "name": "view_filter_group_id",
        "wire": "view_filter_group_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "database_table_view_grouping",
    "accessor": "DatabaseTableViewGrouping",
    "op": "create",
    "method": "POST",
    "path": "/api/database/views/{view_id}/group_bys/prioritize/",
    "args": [
      {
        "name": "view_id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "database_table_view_grouping",
    "accessor": "DatabaseTableViewGrouping",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/database/views/group_by/{view_group_by_id}/",
    "args": [
      {
        "name": "view_group_by_id",
        "wire": "view_group_by_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "database_table_view_sorting",
    "accessor": "DatabaseTableViewSorting",
    "op": "create",
    "method": "POST",
    "path": "/api/database/views/{view_id}/sortings/prioritize/",
    "args": [
      {
        "name": "view_id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "database_table_view_sorting",
    "accessor": "DatabaseTableViewSorting",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/database/views/sort/{view_sort_id}/",
    "args": [
      {
        "name": "view_sort_id",
        "wire": "view_sort_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "database_table_webhook",
    "accessor": "DatabaseTableWebhook",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/database/webhooks/{webhook_id}/",
    "args": [
      {
        "name": "id",
        "wire": "webhook_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "database_token",
    "accessor": "DatabaseToken",
    "op": "load",
    "method": "GET",
    "path": "/api/database/tokens/check/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "database_token",
    "accessor": "DatabaseToken",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/database/tokens/{token_id}/",
    "args": [
      {
        "name": "id",
        "wire": "token_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "database_workflow_action_type_database_workflow_action",
    "accessor": "DatabaseWorkflowActionTypeDatabaseWorkflowAction",
    "op": "create",
    "method": "POST",
    "path": "/api/database/field/{field_id}/workflow_actions/",
    "args": [
      {
        "name": "field_id",
        "wire": "field_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "order": 1,
      "field_id": 1,
      "type": "x",
      "service": {
        "id": 1,
        "integration_id": 1,
        "type": "x",
        "schema": {},
        "context_data": {},
        "context_data_schema": {},
        "table_accessible": true,
        "table_id": 1,
        "view_id": 1,
        "filter_type": "AND",
        "search_query": {},
        "row_id": {}
      },
      "requires_reconfiguration": true
    },
    "idField": "id"
  },
  {
    "entity": "database_workflow_action_type_database_workflow_action",
    "accessor": "DatabaseWorkflowActionTypeDatabaseWorkflowAction",
    "op": "list",
    "method": "GET",
    "path": "/api/database/field/{field_id}/workflow_actions/",
    "args": [
      {
        "name": "field_id",
        "wire": "field_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "order": 1,
        "field_id": 1,
        "type": "x",
        "service": {
          "id": 1,
          "integration_id": 1,
          "type": "x",
          "schema": {},
          "context_data": {},
          "context_data_schema": {},
          "table_accessible": true,
          "table_id": 1,
          "view_id": 1,
          "filter_type": "AND",
          "search_query": {},
          "row_id": {}
        },
        "requires_reconfiguration": true
      }
    ],
    "idField": "id"
  },
  {
    "entity": "database_workflow_action_type_database_workflow_action",
    "accessor": "DatabaseWorkflowActionTypeDatabaseWorkflowAction",
    "op": "update",
    "method": "PATCH",
    "path": "/api/database/workflow_action/{workflow_action_id}/",
    "args": [
      {
        "name": "id",
        "wire": "workflow_action_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "order": 1,
      "field_id": 1,
      "type": "x",
      "service": {
        "id": 1,
        "integration_id": 1,
        "type": "x",
        "schema": {},
        "context_data": {},
        "context_data_schema": {},
        "table_accessible": true,
        "table_id": 1,
        "view_id": 1,
        "filter_type": "AND",
        "search_query": {},
        "row_id": {}
      },
      "requires_reconfiguration": true
    },
    "idField": "id"
  },
  {
    "entity": "decorator_value_provider_type_view_decoration",
    "accessor": "DecoratorValueProviderTypeViewDecoration",
    "op": "create",
    "method": "POST",
    "path": "/api/database/views/{view_id}/decorations/",
    "args": [
      {
        "name": "view_id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "view": 1,
      "type": "x",
      "value_provider_type": "x",
      "value_provider_conf": {
        "field_id": 1
      },
      "order": 1
    },
    "idField": "id"
  },
  {
    "entity": "decorator_value_provider_type_view_decoration",
    "accessor": "DecoratorValueProviderTypeViewDecoration",
    "op": "list",
    "method": "GET",
    "path": "/api/database/views/{view_id}/decorations/",
    "args": [
      {
        "name": "view_id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "view": 1,
        "type": "x",
        "value_provider_type": "x",
        "value_provider_conf": {
          "field_id": 1
        },
        "order": 1
      }
    ],
    "idField": "id"
  },
  {
    "entity": "decorator_value_provider_type_view_decoration",
    "accessor": "DecoratorValueProviderTypeViewDecoration",
    "op": "load",
    "method": "GET",
    "path": "/api/database/views/decoration/{view_decoration_id}/",
    "args": [
      {
        "name": "id",
        "wire": "view_decoration_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "view": 1,
      "type": "x",
      "value_provider_type": "x",
      "value_provider_conf": {
        "field_id": 1
      },
      "order": 1
    },
    "idField": "id"
  },
  {
    "entity": "decorator_value_provider_type_view_decoration",
    "accessor": "DecoratorValueProviderTypeViewDecoration",
    "op": "update",
    "method": "PATCH",
    "path": "/api/database/views/decoration/{view_decoration_id}/",
    "args": [
      {
        "name": "id",
        "wire": "view_decoration_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "view": 1,
      "type": "x",
      "value_provider_type": "x",
      "value_provider_conf": {
        "field_id": 1
      },
      "order": 1
    },
    "idField": "id"
  },
  {
    "entity": "dispatch",
    "accessor": "Dispatch",
    "op": "create",
    "method": "POST",
    "path": "/api/database/field/{field_id}/workflow_actions/dispatch/",
    "args": [
      {
        "name": "field_id",
        "wire": "field_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "results": [
        {
          "workflow_action_id": 1,
          "order": 1,
          "position": 1,
          "status": "x",
          "field_names": {}
        }
      ],
      "client_actions": {
        "id": 1,
        "order": 1,
        "field_id": 1,
        "type": "x",
        "position": 1,
        "service": {},
        "requires_reconfiguration": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "domain",
    "accessor": "Domain",
    "op": "create",
    "method": "POST",
    "path": "/api/builder/{builder_id}/domains/",
    "args": [
      {
        "name": "builder_id",
        "wire": "builder_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "type": "x",
      "domain_name": "x",
      "order": 1,
      "builder_id": 1,
      "last_published": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "domain",
    "accessor": "Domain",
    "op": "list",
    "method": "GET",
    "path": "/api/builder/{builder_id}/domains/",
    "args": [
      {
        "name": "builder_id",
        "wire": "builder_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "type": "x",
        "domain_name": "x",
        "order": 1,
        "builder_id": 1,
        "last_published": "2026-01-01T00:00:00Z"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "domain",
    "accessor": "Domain",
    "op": "update",
    "method": "PATCH",
    "path": "/api/builder/domains/{domain_id}/",
    "args": [
      {
        "name": "id",
        "wire": "domain_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "type": "x",
      "domain_name": "x",
      "order": 1,
      "builder_id": 1,
      "last_published": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "duplicate",
    "accessor": "Duplicate",
    "op": "create",
    "method": "POST",
    "path": "/api/builder/element/{element_id}/duplicate/",
    "args": [
      {
        "name": "element_id",
        "wire": "element_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "elements": [
        {
          "id": 1,
          "page_id": 1,
          "type": "x",
          "css_classes": "x",
          "visibility": "all",
          "visibility_condition": {},
          "style_border_top_color": "x",
          "style_border_top_size": 1,
          "style_padding_top": 1,
          "style_margin_top": 1,
          "style_border_bottom_color": "x",
          "style_border_bottom_size": 1,
          "style_padding_bottom": 1,
          "style_margin_bottom": 1,
          "style_border_left_color": "x",
          "style_border_left_size": 1,
          "style_padding_left": 1,
          "style_margin_left": 1,
          "style_border_right_color": "x",
          "style_border_right_size": 1,
          "style_padding_right": 1,
          "style_margin_right": 1,
          "style_background_radius": 1,
          "style_border_radius": 1,
          "style_background": "none",
          "style_background_color": "x",
          "style_background_file": {
            "size": 1,
            "mime_type": "x",
            "is_image": true,
            "image_width": 1,
            "image_height": 1,
            "uploaded_at": "2026-01-01T00:00:00Z",
            "url": "x",
            "thumbnails": {},
            "name": "x",
            "original_name": "x"
          },
          "style_background_mode": "tile",
          "style_width": "full",
          "style_width_child": "normal",
          "role_type": "allow_all"
        }
      ],
      "workflow_actions": [
        {
          "id": 1,
          "order": 1,
          "element_id": 1,
          "type": "x",
          "event": "x"
        }
      ],
      "graph": "x"
    },
    "idField": "id"
  },
  {
    "entity": "element",
    "accessor": "Element",
    "op": "create",
    "method": "POST",
    "path": "/api/builder/page/{page_id}/elements/",
    "args": [
      {
        "name": "page_id",
        "wire": "page_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "page_id": 1,
      "type": "x",
      "css_classes": "x",
      "visibility": "all",
      "visibility_condition": {},
      "styles": {
        "typography": {
          "heading_1_text_decoration": [
            true
          ],
          "heading_2_text_decoration": [
            true
          ],
          "heading_3_text_decoration": [
            true
          ],
          "heading_4_text_decoration": [
            true
          ],
          "heading_5_text_decoration": [
            true
          ],
          "heading_6_text_decoration": [
            true
          ],
          "body_font_family": "x",
          "body_font_size": 1,
          "body_font_weight": "thin",
          "body_text_color": "x",
          "body_text_alignment": "left",
          "heading_1_font_family": "x",
          "heading_1_font_size": 1,
          "heading_1_font_weight": "thin",
          "heading_1_text_color": "x",
          "heading_1_text_alignment": "left",
          "heading_2_font_family": "x",
          "heading_2_font_size": 1,
          "heading_2_font_weight": "thin",
          "heading_2_text_color": "x",
          "heading_2_text_alignment": "left",
          "heading_3_font_family": "x",
          "heading_3_font_size": 1,
          "heading_3_font_weight": "thin",
          "heading_3_text_color": "x",
          "heading_3_text_alignment": "left",
          "heading_4_font_family": "x",
          "heading_4_font_size": 1,
          "heading_4_font_weight": "thin",
          "heading_4_text_color": "x",
          "heading_4_text_alignment": "left",
          "heading_5_font_family": "x",
          "heading_5_font_size": 1,
          "heading_5_font_weight": "thin",
          "heading_5_text_color": "x",
          "heading_5_text_alignment": "left",
          "heading_6_font_family": "x",
          "heading_6_font_size": 1,
          "heading_6_font_weight": "thin",
          "heading_6_text_color": "x",
          "heading_6_text_alignment": "left"
        }
      },
      "style_border_top_color": "x",
      "style_border_top_size": 1,
      "style_padding_top": 1,
      "style_margin_top": 1,
      "style_border_bottom_color": "x",
      "style_border_bottom_size": 1,
      "style_padding_bottom": 1,
      "style_margin_bottom": 1,
      "style_border_left_color": "x",
      "style_border_left_size": 1,
      "style_padding_left": 1,
      "style_margin_left": 1,
      "style_border_right_color": "x",
      "style_border_right_size": 1,
      "style_padding_right": 1,
      "style_margin_right": 1,
      "style_background_radius": 1,
      "style_border_radius": 1,
      "style_background": "none",
      "style_background_color": "x",
      "style_background_file": {
        "size": 1,
        "mime_type": "x",
        "is_image": true,
        "image_width": 1,
        "image_height": 1,
        "uploaded_at": "2026-01-01T00:00:00Z",
        "url": "x",
        "thumbnails": {},
        "name": "x",
        "original_name": "x"
      },
      "style_background_mode": "tile",
      "style_width": "full",
      "style_width_child": "normal",
      "role_type": "allow_all",
      "value": {},
      "level": 1
    },
    "idField": "id"
  },
  {
    "entity": "element",
    "accessor": "Element",
    "op": "update",
    "method": "PATCH",
    "path": "/api/builder/element/{element_id}/",
    "args": [
      {
        "name": "id",
        "wire": "element_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "page_id": 1,
      "type": "x",
      "css_classes": "x",
      "visibility": "all",
      "visibility_condition": {},
      "styles": {
        "typography": {
          "heading_1_text_decoration": [
            true
          ],
          "heading_2_text_decoration": [
            true
          ],
          "heading_3_text_decoration": [
            true
          ],
          "heading_4_text_decoration": [
            true
          ],
          "heading_5_text_decoration": [
            true
          ],
          "heading_6_text_decoration": [
            true
          ],
          "body_font_family": "x",
          "body_font_size": 1,
          "body_font_weight": "thin",
          "body_text_color": "x",
          "body_text_alignment": "left",
          "heading_1_font_family": "x",
          "heading_1_font_size": 1,
          "heading_1_font_weight": "thin",
          "heading_1_text_color": "x",
          "heading_1_text_alignment": "left",
          "heading_2_font_family": "x",
          "heading_2_font_size": 1,
          "heading_2_font_weight": "thin",
          "heading_2_text_color": "x",
          "heading_2_text_alignment": "left",
          "heading_3_font_family": "x",
          "heading_3_font_size": 1,
          "heading_3_font_weight": "thin",
          "heading_3_text_color": "x",
          "heading_3_text_alignment": "left",
          "heading_4_font_family": "x",
          "heading_4_font_size": 1,
          "heading_4_font_weight": "thin",
          "heading_4_text_color": "x",
          "heading_4_text_alignment": "left",
          "heading_5_font_family": "x",
          "heading_5_font_size": 1,
          "heading_5_font_weight": "thin",
          "heading_5_text_color": "x",
          "heading_5_text_alignment": "left",
          "heading_6_font_family": "x",
          "heading_6_font_size": 1,
          "heading_6_font_weight": "thin",
          "heading_6_text_color": "x",
          "heading_6_text_alignment": "left"
        }
      },
      "style_border_top_color": "x",
      "style_border_top_size": 1,
      "style_padding_top": 1,
      "style_margin_top": 1,
      "style_border_bottom_color": "x",
      "style_border_bottom_size": 1,
      "style_padding_bottom": 1,
      "style_margin_bottom": 1,
      "style_border_left_color": "x",
      "style_border_left_size": 1,
      "style_padding_left": 1,
      "style_margin_left": 1,
      "style_border_right_color": "x",
      "style_border_right_size": 1,
      "style_padding_right": 1,
      "style_margin_right": 1,
      "style_background_radius": 1,
      "style_border_radius": 1,
      "style_background": "none",
      "style_background_color": "x",
      "style_background_file": {
        "size": 1,
        "mime_type": "x",
        "is_image": true,
        "image_width": 1,
        "image_height": 1,
        "uploaded_at": "2026-01-01T00:00:00Z",
        "url": "x",
        "thumbnails": {},
        "name": "x",
        "original_name": "x"
      },
      "style_background_mode": "tile",
      "style_width": "full",
      "style_width_child": "normal",
      "role_type": "allow_all",
      "value": {},
      "level": 1
    },
    "idField": "id"
  },
  {
    "entity": "element_type_element",
    "accessor": "ElementTypeElement",
    "op": "update",
    "method": "PATCH",
    "path": "/api/builder/element/{element_id}/move/",
    "action": "move",
    "args": [
      {
        "name": "id",
        "wire": "element_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "page_id": 1,
      "type": "x",
      "css_classes": "x",
      "visibility": "all",
      "visibility_condition": {},
      "styles": {
        "typography": {
          "heading_1_text_decoration": [
            true
          ],
          "heading_2_text_decoration": [
            true
          ],
          "heading_3_text_decoration": [
            true
          ],
          "heading_4_text_decoration": [
            true
          ],
          "heading_5_text_decoration": [
            true
          ],
          "heading_6_text_decoration": [
            true
          ],
          "body_font_family": "x",
          "body_font_size": 1,
          "body_font_weight": "thin",
          "body_text_color": "x",
          "body_text_alignment": "left",
          "heading_1_font_family": "x",
          "heading_1_font_size": 1,
          "heading_1_font_weight": "thin",
          "heading_1_text_color": "x",
          "heading_1_text_alignment": "left",
          "heading_2_font_family": "x",
          "heading_2_font_size": 1,
          "heading_2_font_weight": "thin",
          "heading_2_text_color": "x",
          "heading_2_text_alignment": "left",
          "heading_3_font_family": "x",
          "heading_3_font_size": 1,
          "heading_3_font_weight": "thin",
          "heading_3_text_color": "x",
          "heading_3_text_alignment": "left",
          "heading_4_font_family": "x",
          "heading_4_font_size": 1,
          "heading_4_font_weight": "thin",
          "heading_4_text_color": "x",
          "heading_4_text_alignment": "left",
          "heading_5_font_family": "x",
          "heading_5_font_size": 1,
          "heading_5_font_weight": "thin",
          "heading_5_text_color": "x",
          "heading_5_text_alignment": "left",
          "heading_6_font_family": "x",
          "heading_6_font_size": 1,
          "heading_6_font_weight": "thin",
          "heading_6_text_color": "x",
          "heading_6_text_alignment": "left"
        }
      },
      "style_border_top_color": "x",
      "style_border_top_size": 1,
      "style_padding_top": 1,
      "style_margin_top": 1,
      "style_border_bottom_color": "x",
      "style_border_bottom_size": 1,
      "style_padding_bottom": 1,
      "style_margin_bottom": 1,
      "style_border_left_color": "x",
      "style_border_left_size": 1,
      "style_padding_left": 1,
      "style_margin_left": 1,
      "style_border_right_color": "x",
      "style_border_right_size": 1,
      "style_padding_right": 1,
      "style_margin_right": 1,
      "style_background_radius": 1,
      "style_border_radius": 1,
      "style_background": "none",
      "style_background_color": "x",
      "style_background_file": {
        "size": 1,
        "mime_type": "x",
        "is_image": true,
        "image_width": 1,
        "image_height": 1,
        "uploaded_at": "2026-01-01T00:00:00Z",
        "url": "x",
        "thumbnails": {},
        "name": "x",
        "original_name": "x"
      },
      "style_background_mode": "tile",
      "style_width": "full",
      "style_width_child": "normal",
      "role_type": "allow_all",
      "value": {},
      "level": 1
    },
    "idField": "id"
  },
  {
    "entity": "email",
    "accessor": "Email",
    "op": "create",
    "method": "POST",
    "path": "/api/_health/email/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "succeeded": true,
      "error_stack": "x",
      "error_type": "x",
      "error": "x"
    },
    "idField": "id"
  },
  {
    "entity": "example_batch_row",
    "accessor": "ExampleBatchRow",
    "op": "create",
    "method": "POST",
    "path": "/api/database/rows/table/{table_id}/batch/",
    "args": [
      {
        "name": "table_id",
        "wire": "table_id",
        "value": "p1"
      }
    ],
    "select": {
      "before": "v1",
      "include_metadata": "v1",
      "send_webhook_event": "v1",
      "user_field_name": "v1",
      "view": "v1"
    },
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "before",
      "include_metadata",
      "send_webhook_events",
      "user_field_names",
      "view"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "items": [
        {
          "field_1": "x",
          "field_2": "x",
          "field_3": "x",
          "field_4": "x",
          "field_5": "x",
          "field_6": 1,
          "field_7": true,
          "field_8": "2026-01-01",
          "field_13": 1,
          "field_14": [
            1
          ],
          "field_15": [],
          "field_16": 1,
          "field_17": [
            1
          ],
          "field_18": "x",
          "field_23": [
            1
          ],
          "field_26": "x",
          "field_29": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "example_batch_update_row",
    "accessor": "ExampleBatchUpdateRow",
    "op": "update",
    "method": "PATCH",
    "path": "/api/database/rows/table/{table_id}/batch/",
    "args": [
      {
        "name": "table_id",
        "wire": "table_id",
        "value": "p1"
      }
    ],
    "select": {
      "include_metadata": "v1",
      "send_webhook_event": "v1",
      "user_field_name": "v1",
      "view": "v1"
    },
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "include_metadata",
      "send_webhook_events",
      "user_field_names",
      "view"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "items": [
        {
          "id": 1,
          "field_1": "x",
          "field_2": "x",
          "field_3": "x",
          "field_4": "x",
          "field_5": "x",
          "field_6": 1,
          "field_7": true,
          "field_8": "2026-01-01",
          "field_13": 1,
          "field_14": [
            1
          ],
          "field_15": [],
          "field_16": 1,
          "field_17": [
            1
          ],
          "field_18": "x",
          "field_23": [
            1
          ],
          "field_26": "x",
          "field_29": "x"
        }
      ],
      "metadata": {
        "updated_field_ids": [
          1
        ],
        "cascade_update": {
          "rows": [
            {
              "id": 1,
              "field_1": "x",
              "field_2": "x",
              "field_3": "x",
              "field_4": "x",
              "field_5": "x",
              "field_6": 1,
              "field_7": true,
              "field_8": "2026-01-01",
              "field_13": 1,
              "field_14": [],
              "field_15": [],
              "field_16": 1,
              "field_17": [],
              "field_18": "x",
              "field_23": [],
              "field_26": "x",
              "field_29": "x"
            }
          ],
          "field_ids": [
            1
          ]
        },
        "hidden_row_ids": [
          1
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "example_public_row_response_serializer_with_user_field_name",
    "accessor": "ExamplePublicRowResponseSerializerWithUserFieldName",
    "op": "load",
    "method": "GET",
    "path": "/api/database/views/{slug}/row/{row_id}/",
    "args": [
      {
        "name": "row_id",
        "wire": "row_id",
        "value": "p1"
      },
      {
        "name": "view_id",
        "wire": "slug",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "order": "x",
      "field_1": "x",
      "field_2": "x",
      "field_3": "x",
      "field_4": "x",
      "field_5": "x",
      "field_6": 1,
      "field_7": true,
      "field_8": "2026-01-01",
      "field_9": "2026-01-01T00:00:00Z",
      "field_10": {
        "id": 1,
        "name": "x"
      },
      "field_11": "2026-01-01T00:00:00Z",
      "field_12": {
        "id": 1,
        "name": "x"
      },
      "field_13": 1,
      "field_14": [
        {
          "id": 1,
          "value": "x",
          "order": "x"
        }
      ],
      "field_15": [
        {
          "url": "x",
          "thumbnails": {},
          "visible_name": "x",
          "name": "x",
          "size": 1,
          "mime_type": "x",
          "is_image": true,
          "image_width": 1,
          "image_height": 1,
          "uploaded_at": "2026-01-01T00:00:00Z"
        }
      ],
      "field_16": {
        "id": 1,
        "value": "x",
        "color": "x"
      },
      "field_17": [
        {
          "id": 1,
          "value": "x",
          "color": "x"
        }
      ],
      "field_18": "x",
      "field_19": "x",
      "field_20": "x",
      "field_21": "x",
      "field_22": "x",
      "field_23": [
        {
          "id": 1,
          "name": "x"
        }
      ],
      "field_24": "x",
      "field_25": 1,
      "field_26": true,
      "field_27": "x",
      "field_28": "x",
      "field_29": "x"
    },
    "idField": "id"
  },
  {
    "entity": "example_row",
    "accessor": "ExampleRow",
    "op": "create",
    "method": "POST",
    "path": "/api/database/views/grid/{view_id}/",
    "args": [
      {
        "name": "view_id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "order": "x",
        "metadata": {
          "row_comment_count": 1,
          "row_comments_notification_mode": "all"
        },
        "field_1": "x",
        "field_2": "x",
        "field_3": "x",
        "field_4": "x",
        "field_5": "x",
        "field_6": 1,
        "field_7": true,
        "field_8": "2026-01-01",
        "field_9": "2026-01-01T00:00:00Z",
        "field_10": {
          "id": 1,
          "name": "x"
        },
        "field_11": "2026-01-01T00:00:00Z",
        "field_12": {
          "id": 1,
          "name": "x"
        },
        "field_13": 1,
        "field_14": [
          {
            "id": 1,
            "value": "x",
            "order": "x"
          }
        ],
        "field_15": [
          {
            "url": "x",
            "thumbnails": {},
            "visible_name": "x",
            "name": "x",
            "size": 1,
            "mime_type": "x",
            "is_image": true,
            "image_width": 1,
            "image_height": 1,
            "uploaded_at": "2026-01-01T00:00:00Z"
          }
        ],
        "field_16": {
          "id": 1,
          "value": "x",
          "color": "x"
        },
        "field_17": [
          {
            "id": 1,
            "value": "x",
            "color": "x"
          }
        ],
        "field_18": "x",
        "field_19": "x",
        "field_20": "x",
        "field_21": "x",
        "field_22": "x",
        "field_23": [
          {
            "id": 1,
            "name": "x"
          }
        ],
        "field_24": "x",
        "field_25": 1,
        "field_26": true,
        "field_27": "x",
        "field_28": "x",
        "field_29": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "example_row",
    "accessor": "ExampleRow",
    "op": "load",
    "method": "GET",
    "path": "/api/database/views/form/{slug}/edit-row/{row_token}/",
    "args": [
      {
        "name": "form_id",
        "wire": "slug",
        "value": "p1"
      },
      {
        "name": "row_token",
        "wire": "row_token",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "order": "x",
      "metadata": {
        "row_comment_count": 1,
        "row_comments_notification_mode": "all"
      },
      "field_1": "x",
      "field_2": "x",
      "field_3": "x",
      "field_4": "x",
      "field_5": "x",
      "field_6": 1,
      "field_7": true,
      "field_8": "2026-01-01",
      "field_9": "2026-01-01T00:00:00Z",
      "field_10": {
        "id": 1,
        "name": "x"
      },
      "field_11": "2026-01-01T00:00:00Z",
      "field_12": {
        "id": 1,
        "name": "x"
      },
      "field_13": 1,
      "field_14": [
        {
          "id": 1,
          "value": "x",
          "order": "x"
        }
      ],
      "field_15": [
        {
          "url": "x",
          "thumbnails": {},
          "visible_name": "x",
          "name": "x",
          "size": 1,
          "mime_type": "x",
          "is_image": true,
          "image_width": 1,
          "image_height": 1,
          "uploaded_at": "2026-01-01T00:00:00Z"
        }
      ],
      "field_16": {
        "id": 1,
        "value": "x",
        "color": "x"
      },
      "field_17": [
        {
          "id": 1,
          "value": "x",
          "color": "x"
        }
      ],
      "field_18": "x",
      "field_19": "x",
      "field_20": "x",
      "field_21": "x",
      "field_22": "x",
      "field_23": [
        {
          "id": 1,
          "name": "x"
        }
      ],
      "field_24": "x",
      "field_25": 1,
      "field_26": true,
      "field_27": "x",
      "field_28": "x",
      "field_29": "x"
    },
    "idField": "id"
  },
  {
    "entity": "example_row_response_serializer_with_user_field_name",
    "accessor": "ExampleRowResponseSerializerWithUserFieldName",
    "op": "create",
    "method": "POST",
    "path": "/api/database/rows/table/{table_id}/",
    "args": [
      {
        "name": "table_id",
        "wire": "table_id",
        "value": "p1"
      }
    ],
    "select": {
      "before": "v1",
      "send_webhook_event": "v1",
      "user_field_name": "v1",
      "view": "v1"
    },
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "before",
      "send_webhook_events",
      "user_field_names",
      "view"
    ],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": 1,
      "order": "x",
      "metadata": {
        "row_comment_count": 1,
        "row_comments_notification_mode": "all"
      },
      "field_1": "x",
      "field_2": "x",
      "field_3": "x",
      "field_4": "x",
      "field_5": "x",
      "field_6": 1,
      "field_7": true,
      "field_8": "2026-01-01",
      "field_9": "2026-01-01T00:00:00Z",
      "field_10": {
        "id": 1,
        "name": "x"
      },
      "field_11": "2026-01-01T00:00:00Z",
      "field_12": {
        "id": 1,
        "name": "x"
      },
      "field_13": 1,
      "field_14": [
        {
          "id": 1,
          "value": "x",
          "order": "x"
        }
      ],
      "field_15": [
        {
          "url": "x",
          "thumbnails": {},
          "visible_name": "x",
          "name": "x",
          "size": 1,
          "mime_type": "x",
          "is_image": true,
          "image_width": 1,
          "image_height": 1,
          "uploaded_at": "2026-01-01T00:00:00Z"
        }
      ],
      "field_16": {
        "id": 1,
        "value": "x",
        "color": "x"
      },
      "field_17": [
        {
          "id": 1,
          "value": "x",
          "color": "x"
        }
      ],
      "field_18": "x",
      "field_19": "x",
      "field_20": "x",
      "field_21": "x",
      "field_22": "x",
      "field_23": [
        {
          "id": 1,
          "name": "x"
        }
      ],
      "field_24": "x",
      "field_25": 1,
      "field_26": true,
      "field_27": "x",
      "field_28": "x",
      "field_29": "x"
    },
    "idField": "id"
  },
  {
    "entity": "example_row_response_serializer_with_user_field_name",
    "accessor": "ExampleRowResponseSerializerWithUserFieldName",
    "op": "list",
    "method": "GET",
    "path": "/api/database/rows/table/{table_id}/{row_id}/adjacent/",
    "args": [
      {
        "name": "row_id",
        "wire": "row_id",
        "value": "p1"
      },
      {
        "name": "table_id",
        "wire": "table_id",
        "value": "p2"
      }
    ],
    "select": {
      "previous": "v1",
      "search": "v1",
      "search_mode": "v1",
      "user_field_name": "v1",
      "view_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "previous",
      "search",
      "search_mode",
      "user_field_names",
      "view_id"
    ],
    "queryArgs": [
      {
        "name": "previous",
        "wire": "previous"
      },
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "search_mode",
        "wire": "search_mode"
      },
      {
        "name": "user_field_name",
        "wire": "user_field_names"
      },
      {
        "name": "view_id",
        "wire": "view_id"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "order": "x",
      "metadata": {
        "row_comment_count": 1,
        "row_comments_notification_mode": "all"
      },
      "field_1": "x",
      "field_2": "x",
      "field_3": "x",
      "field_4": "x",
      "field_5": "x",
      "field_6": 1,
      "field_7": true,
      "field_8": "2026-01-01",
      "field_9": "2026-01-01T00:00:00Z",
      "field_10": {
        "id": 1,
        "name": "x"
      },
      "field_11": "2026-01-01T00:00:00Z",
      "field_12": {
        "id": 1,
        "name": "x"
      },
      "field_13": 1,
      "field_14": [
        {
          "id": 1,
          "value": "x",
          "order": "x"
        }
      ],
      "field_15": [
        {
          "url": "x",
          "thumbnails": {},
          "visible_name": "x",
          "name": "x",
          "size": 1,
          "mime_type": "x",
          "is_image": true,
          "image_width": 1,
          "image_height": 1,
          "uploaded_at": "2026-01-01T00:00:00Z"
        }
      ],
      "field_16": {
        "id": 1,
        "value": "x",
        "color": "x"
      },
      "field_17": [
        {
          "id": 1,
          "value": "x",
          "color": "x"
        }
      ],
      "field_18": "x",
      "field_19": "x",
      "field_20": "x",
      "field_21": "x",
      "field_22": "x",
      "field_23": [
        {
          "id": 1,
          "name": "x"
        }
      ],
      "field_24": "x",
      "field_25": 1,
      "field_26": true,
      "field_27": "x",
      "field_28": "x",
      "field_29": "x"
    },
    "idField": "id"
  },
  {
    "entity": "example_row_response_serializer_with_user_field_name",
    "accessor": "ExampleRowResponseSerializerWithUserFieldName",
    "op": "load",
    "method": "GET",
    "path": "/api/database/rows/table/{table_id}/{row_id}/",
    "args": [
      {
        "name": "row_id",
        "wire": "row_id",
        "value": "p1"
      },
      {
        "name": "table_id",
        "wire": "table_id",
        "value": "p2"
      }
    ],
    "select": {
      "include": "v1",
      "user_field_name": "v1",
      "view": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "include",
      "user_field_names",
      "view"
    ],
    "queryArgs": [
      {
        "name": "include",
        "wire": "include"
      },
      {
        "name": "user_field_name",
        "wire": "user_field_names"
      },
      {
        "name": "view",
        "wire": "view"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": 1,
      "order": "x",
      "metadata": {
        "row_comment_count": 1,
        "row_comments_notification_mode": "all"
      },
      "field_1": "x",
      "field_2": "x",
      "field_3": "x",
      "field_4": "x",
      "field_5": "x",
      "field_6": 1,
      "field_7": true,
      "field_8": "2026-01-01",
      "field_9": "2026-01-01T00:00:00Z",
      "field_10": {
        "id": 1,
        "name": "x"
      },
      "field_11": "2026-01-01T00:00:00Z",
      "field_12": {
        "id": 1,
        "name": "x"
      },
      "field_13": 1,
      "field_14": [
        {
          "id": 1,
          "value": "x",
          "order": "x"
        }
      ],
      "field_15": [
        {
          "url": "x",
          "thumbnails": {},
          "visible_name": "x",
          "name": "x",
          "size": 1,
          "mime_type": "x",
          "is_image": true,
          "image_width": 1,
          "image_height": 1,
          "uploaded_at": "2026-01-01T00:00:00Z"
        }
      ],
      "field_16": {
        "id": 1,
        "value": "x",
        "color": "x"
      },
      "field_17": [
        {
          "id": 1,
          "value": "x",
          "color": "x"
        }
      ],
      "field_18": "x",
      "field_19": "x",
      "field_20": "x",
      "field_21": "x",
      "field_22": "x",
      "field_23": [
        {
          "id": 1,
          "name": "x"
        }
      ],
      "field_24": "x",
      "field_25": 1,
      "field_26": true,
      "field_27": "x",
      "field_28": "x",
      "field_29": "x"
    },
    "idField": "id"
  },
  {
    "entity": "export",
    "accessor": "Export",
    "op": "list",
    "method": "GET",
    "path": "/api/workspaces/{workspace_id}/export/",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "results": [
        {
          "id": 1,
          "type": "x",
          "progress_percentage": 1,
          "state": "x",
          "human_readable_error": "x",
          "error_code": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "exported_file_name": "x",
          "url": "x",
          "workspace_id": 1
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "export",
    "accessor": "Export",
    "op": "load",
    "method": "GET",
    "path": "/api/database/export/{job_id}/",
    "args": [
      {
        "name": "id",
        "wire": "job_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "table": 1,
      "view": 1,
      "exporter_type": "x",
      "state": "pending",
      "status": "x",
      "exported_file_name": "x",
      "created_at": "2026-01-01T00:00:00Z",
      "progress_percentage": 1,
      "url": "x"
    },
    "idField": "id"
  },
  {
    "entity": "export_job",
    "accessor": "ExportJob",
    "op": "create",
    "method": "POST",
    "path": "/api/database/view/{slug}/export-public-view/",
    "args": [
      {
        "name": "slug",
        "wire": "slug",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "table": 1,
      "view": 1,
      "exporter_type": "x",
      "state": "pending",
      "status": "x",
      "exported_file_name": "x",
      "created_at": "2026-01-01T00:00:00Z",
      "progress_percentage": 1,
      "url": "x"
    },
    "idField": "id"
  },
  {
    "entity": "export_job",
    "accessor": "ExportJob",
    "op": "create",
    "method": "POST",
    "path": "/api/database/export/table/{table_id}/",
    "args": [
      {
        "name": "table_id",
        "wire": "table_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "table": 1,
      "view": 1,
      "exporter_type": "x",
      "state": "pending",
      "status": "x",
      "exported_file_name": "x",
      "created_at": "2026-01-01T00:00:00Z",
      "progress_percentage": 1,
      "url": "x"
    },
    "idField": "id"
  },
  {
    "entity": "export_job",
    "accessor": "ExportJob",
    "op": "load",
    "method": "GET",
    "path": "/api/database/view/get-public-view-export/{job_id}/",
    "args": [
      {
        "name": "job_id",
        "wire": "job_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "table": 1,
      "view": 1,
      "exporter_type": "x",
      "state": "pending",
      "status": "x",
      "exported_file_name": "x",
      "created_at": "2026-01-01T00:00:00Z",
      "progress_percentage": 1,
      "url": "x"
    },
    "idField": "id"
  },
  {
    "entity": "field",
    "accessor": "Field",
    "op": "load",
    "method": "GET",
    "path": "/api/database/fields/{field_id}/",
    "args": [
      {
        "name": "id",
        "wire": "field_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "table_id": 1,
      "name": "x",
      "order": 1,
      "type": "x",
      "primary": true,
      "read_only": true,
      "immutable_type": true,
      "immutable_properties": true,
      "description": "x",
      "database_id": 1,
      "workspace_id": 1,
      "db_index": true,
      "field_constraints": "x",
      "text_default": "x"
    },
    "idField": "id"
  },
  {
    "entity": "field",
    "accessor": "Field",
    "op": "update",
    "method": "PATCH",
    "path": "/api/database/fields/{field_id}/",
    "args": [
      {
        "name": "id",
        "wire": "field_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "table_id": 1,
      "name": "x",
      "order": 1,
      "type": "x",
      "primary": true,
      "read_only": true,
      "immutable_type": true,
      "immutable_properties": true,
      "description": "x",
      "database_id": 1,
      "workspace_id": 1,
      "db_index": true,
      "field_constraints": "x",
      "related_fields": [
        {
          "id": 1,
          "table_id": 1,
          "name": "x",
          "order": 1,
          "type": "x",
          "primary": true,
          "read_only": true,
          "immutable_type": true,
          "immutable_properties": true,
          "description": "x",
          "database_id": 1,
          "workspace_id": 1,
          "db_index": true,
          "field_constraints": "x"
        }
      ],
      "text_default": "x"
    },
    "idField": "id"
  },
  {
    "entity": "field_field",
    "accessor": "FieldField",
    "op": "create",
    "method": "POST",
    "path": "/api/database/fields/table/{table_id}/change-primary-field/",
    "args": [
      {
        "name": "table_id",
        "wire": "table_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "table_id": 1,
      "name": "x",
      "order": 1,
      "type": "x",
      "primary": true,
      "read_only": true,
      "immutable_type": true,
      "immutable_properties": true,
      "description": "x",
      "database_id": 1,
      "workspace_id": 1,
      "db_index": true,
      "field_constraints": "x",
      "text_default": "x"
    },
    "idField": "id"
  },
  {
    "entity": "field_field",
    "accessor": "FieldField",
    "op": "load",
    "method": "GET",
    "path": "/api/database/fields/table/{table_id}/",
    "args": [
      {
        "name": "table_id",
        "wire": "table_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": [
      {
        "id": 1,
        "table_id": 1,
        "name": "x",
        "order": 1,
        "type": "x",
        "primary": true,
        "read_only": true,
        "immutable_type": true,
        "immutable_properties": true,
        "description": "x",
        "database_id": 1,
        "workspace_id": 1,
        "db_index": true,
        "field_constraints": "x",
        "text_default": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "field_field_serializer_with_related_field",
    "accessor": "FieldFieldSerializerWithRelatedField",
    "op": "create",
    "method": "POST",
    "path": "/api/database/fields/table/{table_id}/",
    "args": [
      {
        "name": "table_id",
        "wire": "table_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "id": 1,
      "table_id": 1,
      "name": "x",
      "order": 1,
      "type": "x",
      "primary": true,
      "read_only": true,
      "immutable_type": true,
      "immutable_properties": true,
      "description": "x",
      "database_id": 1,
      "workspace_id": 1,
      "db_index": true,
      "field_constraints": "x",
      "related_fields": [
        {
          "id": 1,
          "table_id": 1,
          "name": "x",
          "order": 1,
          "type": "x",
          "primary": true,
          "read_only": true,
          "immutable_type": true,
          "immutable_properties": true,
          "description": "x",
          "database_id": 1,
          "workspace_id": 1,
          "db_index": true,
          "field_constraints": "x"
        }
      ],
      "text_default": "x"
    },
    "idField": "id"
  },
  {
    "entity": "field_permission_subject_option",
    "accessor": "FieldPermissionSubjectOption",
    "op": "list",
    "method": "GET",
    "path": "/api/field-permissions/{field_id}/subjects/",
    "action": "subjects",
    "args": [
      {
        "name": "id",
        "wire": "field_id",
        "value": "p1"
      }
    ],
    "select": {
      "exclude_agent_id": "v1",
      "exclude_team_id": "v1",
      "exclude_user_id": "v1",
      "page": 1,
      "search": "v1",
      "size": 20
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "exclude_agent_ids",
      "exclude_team_ids",
      "exclude_user_ids",
      "page",
      "search",
      "size"
    ],
    "queryArgs": [
      {
        "name": "exclude_agent_id",
        "wire": "exclude_agent_ids"
      },
      {
        "name": "exclude_team_id",
        "wire": "exclude_team_ids"
      },
      {
        "name": "exclude_user_id",
        "wire": "exclude_user_ids"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "size",
        "wire": "size"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "subject_id": 1,
          "subject_type": "auth.User",
          "name": "x",
          "email": "x",
          "subject_count": 1
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "field_rule",
    "accessor": "FieldRule",
    "op": "create",
    "method": "POST",
    "path": "/api/database/field-rules/{table_id}/",
    "args": [
      {
        "name": "id",
        "wire": "table_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "table_id": 1,
        "is_valid": true,
        "error_text": "x",
        "is_active": true,
        "type": "date_dependency",
        "start_date_field_id": 1,
        "end_date_field_id": 1,
        "duration_field_id": 1,
        "dependency_linkrow_field_id": 1
      }
    ],
    "idField": "id"
  },
  {
    "entity": "field_rule",
    "accessor": "FieldRule",
    "op": "load",
    "method": "GET",
    "path": "/api/database/field-rules/{table_id}/",
    "args": [
      {
        "name": "id",
        "wire": "table_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "table_id": 1,
        "is_valid": true,
        "error_text": "x",
        "is_active": true,
        "type": "date_dependency",
        "start_date_field_id": 1,
        "end_date_field_id": 1,
        "duration_field_id": 1,
        "dependency_linkrow_field_id": 1
      }
    ],
    "idField": "id"
  },
  {
    "entity": "field_rule",
    "accessor": "FieldRule",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/database/field-rules/{table_id}/rule/{rule_id}/",
    "args": [
      {
        "name": "id",
        "wire": "table_id",
        "value": "p1"
      },
      {
        "name": "rule_id",
        "wire": "rule_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "field_rules_response_field_rule",
    "accessor": "FieldRulesResponseFieldRule",
    "op": "update",
    "method": "PUT",
    "path": "/api/database/field-rules/{table_id}/rule/{rule_id}/",
    "args": [
      {
        "name": "field_rule_id",
        "wire": "table_id",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "rule_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "table_id": 1,
        "is_valid": true,
        "error_text": "x",
        "is_active": true,
        "type": "date_dependency",
        "start_date_field_id": 1,
        "end_date_field_id": 1,
        "duration_field_id": 1,
        "dependency_linkrow_field_id": 1
      }
    ],
    "idField": "id"
  },
  {
    "entity": "form_view_submitted",
    "accessor": "FormViewSubmitted",
    "op": "create",
    "method": "POST",
    "path": "/api/database/views/form/{slug}/submit/",
    "args": [
      {
        "name": "slug",
        "wire": "slug",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "submit_action": "MESSAGE",
      "submit_action_message": "x",
      "submit_action_redirect_url": "x",
      "row_id": 1
    },
    "idField": "id"
  },
  {
    "entity": "form_view_submitted",
    "accessor": "FormViewSubmitted",
    "op": "update",
    "method": "PATCH",
    "path": "/api/database/views/form/{slug}/edit-row/{row_token}/",
    "args": [
      {
        "name": "row_token",
        "wire": "row_token",
        "value": "p1"
      },
      {
        "name": "slug",
        "wire": "slug",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "submit_action": "MESSAGE",
      "submit_action_message": "x",
      "submit_action_redirect_url": "x",
      "row_id": 1
    },
    "idField": "id"
  },
  {
    "entity": "full",
    "accessor": "Full",
    "op": "load",
    "method": "GET",
    "path": "/api/_health/full/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "passing": true,
      "checks": {},
      "celery_queue_size": 1,
      "celery_export_queue_size": 1
    },
    "idField": "id"
  },
  {
    "entity": "generate_formula_with_ai",
    "accessor": "GenerateFormulaWithAi",
    "op": "create",
    "method": "POST",
    "path": "/api/database/fields/table/{table_id}/generate-ai-formula/",
    "args": [
      {
        "name": "table_id",
        "wire": "table_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "formula": "x"
    },
    "idField": "id"
  },
  {
    "entity": "grid_view_group_by_data",
    "accessor": "GridViewGroupByData",
    "op": "list",
    "method": "GET",
    "path": "/api/database/views/grid/{slug}/public/group-by-data/",
    "args": [
      {
        "name": "grid_id",
        "wire": "slug",
        "value": "p1"
      }
    ],
    "select": {
      "aggregations_only": "v1",
      "depth": "v1",
      "descendant_limit": "v1",
      "descendant_row_budget": "v1",
      "filter": "v1",
      "filter_type": "v1",
      "filter_{field}_{filter}": "v1",
      "group_by": "v1",
      "include_descendant": "v1",
      "include_total": "v1",
      "limit": "v1",
      "offset": "v1",
      "parent": "v1",
      "search": "v1",
      "search_mode": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "aggregations_only",
      "depth",
      "descendant_limit",
      "descendant_row_budget",
      "filter__{field}__{filter}",
      "filter_type",
      "filters",
      "group_by",
      "include_descendants",
      "include_totals",
      "limit",
      "offset",
      "parents",
      "search",
      "search_mode"
    ],
    "queryArgs": [
      {
        "name": "aggregations_only",
        "wire": "aggregations_only"
      },
      {
        "name": "depth",
        "wire": "depth"
      },
      {
        "name": "descendant_limit",
        "wire": "descendant_limit"
      },
      {
        "name": "descendant_row_budget",
        "wire": "descendant_row_budget"
      },
      {
        "name": "filter",
        "wire": "filters"
      },
      {
        "name": "filter_type",
        "wire": "filter_type"
      },
      {
        "name": "filter_{field}_{filter}",
        "wire": "filter__{field}__{filter}"
      },
      {
        "name": "group_by",
        "wire": "group_by"
      },
      {
        "name": "include_descendant",
        "wire": "include_descendants"
      },
      {
        "name": "include_total",
        "wire": "include_totals"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "parent",
        "wire": "parents"
      },
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "search_mode",
        "wire": "search_mode"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "pages": [
        {
          "parent": {},
          "groups": [
            {
              "path": {},
              "display": {},
              "depth": 1,
              "row_count": 1,
              "children_count": 1,
              "sibling_index": 1,
              "row_offset": 1,
              "aggregations": {}
            }
          ],
          "offset": 1,
          "limit": 1,
          "group_count": 1
        }
      ],
      "truncated": true,
      "aggregations": {}
    },
    "idField": "id"
  },
  {
    "entity": "grid_view_group_by_data",
    "accessor": "GridViewGroupByData",
    "op": "list",
    "method": "GET",
    "path": "/api/database/views/grid/{view_id}/group-by-data/",
    "args": [
      {
        "name": "id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {
      "aggregations_only": "v1",
      "depth": "v1",
      "descendant_limit": "v1",
      "descendant_row_budget": "v1",
      "filter": "v1",
      "filter_type": "v1",
      "filter_{field}_{filter}": "v1",
      "group_by": "v1",
      "include_descendant": "v1",
      "include_total": "v1",
      "limit": "v1",
      "offset": "v1",
      "parent": "v1",
      "search": "v1",
      "search_mode": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "aggregations_only",
      "depth",
      "descendant_limit",
      "descendant_row_budget",
      "filter__{field}__{filter}",
      "filter_type",
      "filters",
      "group_by",
      "include_descendants",
      "include_totals",
      "limit",
      "offset",
      "parents",
      "search",
      "search_mode"
    ],
    "queryArgs": [
      {
        "name": "aggregations_only",
        "wire": "aggregations_only"
      },
      {
        "name": "depth",
        "wire": "depth"
      },
      {
        "name": "descendant_limit",
        "wire": "descendant_limit"
      },
      {
        "name": "descendant_row_budget",
        "wire": "descendant_row_budget"
      },
      {
        "name": "filter",
        "wire": "filters"
      },
      {
        "name": "filter_type",
        "wire": "filter_type"
      },
      {
        "name": "filter_{field}_{filter}",
        "wire": "filter__{field}__{filter}"
      },
      {
        "name": "group_by",
        "wire": "group_by"
      },
      {
        "name": "include_descendant",
        "wire": "include_descendants"
      },
      {
        "name": "include_total",
        "wire": "include_totals"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "parent",
        "wire": "parents"
      },
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "search_mode",
        "wire": "search_mode"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "pages": [
        {
          "parent": {},
          "groups": [
            {
              "path": {},
              "display": {},
              "depth": 1,
              "row_count": 1,
              "children_count": 1,
              "sibling_index": 1,
              "row_offset": 1,
              "aggregations": {}
            }
          ],
          "offset": 1,
          "limit": 1,
          "group_count": 1
        }
      ],
      "truncated": true,
      "aggregations": {}
    },
    "idField": "id"
  },
  {
    "entity": "health",
    "accessor": "Health",
    "op": "load",
    "method": "GET",
    "path": "/api/_health/celery-queue/",
    "action": "celery_queue",
    "args": [],
    "select": {
      "queue": "v1"
    },
    "headers": [],
    "cookies": [],
    "query": [
      "queue"
    ],
    "queryArgs": [
      {
        "name": "queue",
        "wire": "queue"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "inbound_email",
    "accessor": "InboundEmail",
    "op": "create",
    "method": "POST",
    "path": "/api/inbound-email/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "install",
    "accessor": "Install",
    "op": "create",
    "method": "POST",
    "path": "/api/templates/install/{workspace_id}/{template_id}/",
    "args": [
      {
        "name": "template_id",
        "wire": "template_id",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "name": "x",
        "order": 1,
        "type": "x",
        "workspace": {
          "id": 1,
          "name": "x",
          "generative_ai_models_enabled": "x"
        },
        "created_on": "2026-01-01T00:00:00Z",
        "last_viewed": "2026-01-01T00:00:00Z",
        "tables": [
          {
            "id": 1,
            "name": "x",
            "order": 1,
            "database_id": 1,
            "data_sync": {
              "id": 1,
              "type": "x",
              "table_id": 1,
              "database_id": "x",
              "synced_properties": [],
              "last_sync": "2026-01-01T00:00:00Z",
              "last_error": "x",
              "auto_add_new_properties": true,
              "delete_unmatched_rows": true,
              "two_way_sync": true
            }
          }
        ]
      }
    ],
    "idField": "id"
  },
  {
    "entity": "instance_id",
    "accessor": "InstanceId",
    "op": "load",
    "method": "GET",
    "path": "/api/settings/instance-id/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "instance_id": "x"
    },
    "idField": "id"
  },
  {
    "entity": "integration",
    "accessor": "Integration",
    "op": "create",
    "method": "POST",
    "path": "/api/application/{application_id}/integrations/",
    "args": [
      {
        "name": "application_id",
        "wire": "application_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "application_id": 1,
      "type": "x",
      "name": "x",
      "order": "x",
      "context_data": {
        "databases": [
          {
            "id": 1,
            "name": "x",
            "order": 1,
            "type": "x",
            "created_on": "2026-01-01T00:00:00Z",
            "last_viewed": "2026-01-01T00:00:00Z",
            "tables": [],
            "views": []
          }
        ]
      },
      "authorized_user": {
        "id": 1,
        "username": "x",
        "first_name": "x",
        "email": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "integration",
    "accessor": "Integration",
    "op": "list",
    "method": "GET",
    "path": "/api/application/{application_id}/integrations/",
    "args": [
      {
        "name": "application_id",
        "wire": "application_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": [
      {
        "id": 1,
        "application_id": 1,
        "type": "x",
        "name": "x",
        "order": "x",
        "context_data": {
          "databases": [
            {}
          ]
        },
        "authorized_user": {
          "id": 1,
          "username": "x",
          "first_name": "x",
          "email": "x"
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "integration",
    "accessor": "Integration",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/integration/{integration_id}/",
    "args": [
      {
        "name": "id",
        "wire": "integration_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "integration",
    "accessor": "Integration",
    "op": "update",
    "method": "PATCH",
    "path": "/api/integration/{integration_id}/",
    "args": [
      {
        "name": "id",
        "wire": "integration_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "application_id": 1,
      "type": "x",
      "name": "x",
      "order": "x",
      "context_data": {
        "databases": [
          {
            "id": 1,
            "name": "x",
            "order": 1,
            "type": "x",
            "created_on": "2026-01-01T00:00:00Z",
            "last_viewed": "2026-01-01T00:00:00Z",
            "tables": [],
            "views": []
          }
        ]
      },
      "authorized_user": {
        "id": 1,
        "username": "x",
        "first_name": "x",
        "email": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "integration_integration",
    "accessor": "IntegrationIntegration",
    "op": "update",
    "method": "PATCH",
    "path": "/api/integration/{integration_id}/move/",
    "action": "move",
    "args": [
      {
        "name": "id",
        "wire": "integration_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "application_id": 1,
      "type": "x",
      "name": "x",
      "order": "x",
      "context_data": {
        "databases": [
          {
            "id": 1,
            "name": "x",
            "order": 1,
            "type": "x",
            "created_on": "2026-01-01T00:00:00Z",
            "last_viewed": "2026-01-01T00:00:00Z",
            "tables": [],
            "views": []
          }
        ]
      },
      "authorized_user": {
        "id": 1,
        "username": "x",
        "first_name": "x",
        "email": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "integration_service_dashboard_data_source",
    "accessor": "IntegrationServiceDashboardDataSource",
    "op": "list",
    "method": "GET",
    "path": "/api/dashboard/{dashboard_id}/data-sources/",
    "args": [
      {
        "name": "dashboard_id",
        "wire": "dashboard_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "integration_id": 1,
        "type": "x",
        "schema": {},
        "context_data": {},
        "context_data_schema": {},
        "name": "x",
        "dashboard_id": 1,
        "order": "x",
        "table_id": 1,
        "view_id": 1,
        "filter_type": "AND",
        "search_query": {},
        "row_id": {}
      }
    ],
    "idField": "id"
  },
  {
    "entity": "integration_service_dashboard_data_source",
    "accessor": "IntegrationServiceDashboardDataSource",
    "op": "update",
    "method": "PATCH",
    "path": "/api/dashboard/data-sources/{data_source_id}/",
    "args": [
      {
        "name": "id",
        "wire": "data_source_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "integration_id": 1,
      "type": "x",
      "schema": {},
      "context_data": {},
      "context_data_schema": {},
      "name": "x",
      "dashboard_id": 1,
      "order": "x",
      "table_id": 1,
      "view_id": 1,
      "filter_type": "AND",
      "search_query": {},
      "row_id": {}
    },
    "idField": "id"
  },
  {
    "entity": "integration_service_data_source",
    "accessor": "IntegrationServiceDataSource",
    "op": "create",
    "method": "POST",
    "path": "/api/builder/page/{page_id}/data-sources/",
    "args": [
      {
        "name": "page_id",
        "wire": "page_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "integration_id": 1,
      "type": "x",
      "schema": {},
      "context_data": {},
      "context_data_schema": {},
      "name": "x",
      "page_id": 1,
      "order": 1,
      "table_id": 1,
      "view_id": 1,
      "filter_type": "AND",
      "search_query": {},
      "row_id": {}
    },
    "idField": "id"
  },
  {
    "entity": "integration_service_data_source",
    "accessor": "IntegrationServiceDataSource",
    "op": "list",
    "method": "GET",
    "path": "/api/builder/page/{page_id}/data-sources/",
    "args": [
      {
        "name": "page_id",
        "wire": "page_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": [
      {
        "id": 1,
        "integration_id": 1,
        "type": "x",
        "schema": {},
        "context_data": {},
        "context_data_schema": {},
        "name": "x",
        "page_id": 1,
        "order": 1,
        "table_id": 1,
        "view_id": 1,
        "filter_type": "AND",
        "search_query": {},
        "row_id": {}
      }
    ],
    "idField": "id"
  },
  {
    "entity": "integration_service_data_source",
    "accessor": "IntegrationServiceDataSource",
    "op": "update",
    "method": "PATCH",
    "path": "/api/builder/data-source/{data_source_id}/move/",
    "args": [
      {
        "name": "data_source_id",
        "wire": "data_source_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "integration_id": 1,
      "type": "x",
      "schema": {},
      "context_data": {},
      "context_data_schema": {},
      "name": "x",
      "page_id": 1,
      "order": 1,
      "table_id": 1,
      "view_id": 1,
      "filter_type": "AND",
      "search_query": {},
      "row_id": {}
    },
    "idField": "id"
  },
  {
    "entity": "integration_service_data_source",
    "accessor": "IntegrationServiceDataSource",
    "op": "update",
    "method": "PATCH",
    "path": "/api/builder/data-source/{data_source_id}/",
    "args": [
      {
        "name": "id",
        "wire": "data_source_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "integration_id": 1,
      "type": "x",
      "schema": {},
      "context_data": {},
      "context_data_schema": {},
      "name": "x",
      "page_id": 1,
      "order": 1,
      "table_id": 1,
      "view_id": 1,
      "filter_type": "AND",
      "search_query": {},
      "row_id": {}
    },
    "idField": "id"
  },
  {
    "entity": "integration_service_public_data_source",
    "accessor": "IntegrationServicePublicDataSource",
    "op": "list",
    "method": "GET",
    "path": "/api/builder/domains/published/page/{page_id}/data_sources/",
    "args": [
      {
        "name": "page_id",
        "wire": "page_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": [
      {
        "id": 1,
        "type": "x",
        "schema": {},
        "name": "x",
        "page_id": 1,
        "order": 1,
        "context_data": {},
        "table_id": 1,
        "integration_id": 1,
        "view_id": 1,
        "filter_type": "AND",
        "search_query": {},
        "row_id": {}
      }
    ],
    "idField": "id"
  },
  {
    "entity": "invalid_row",
    "accessor": "InvalidRow",
    "op": "list",
    "method": "GET",
    "path": "/api/database/field-rules/{table_id}/invalid-rows/",
    "args": [
      {
        "name": "field_rule_id",
        "wire": "table_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "id": 1
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "job",
    "accessor": "Job",
    "op": "create",
    "method": "POST",
    "path": "/api/snapshots/{snapshot_id}/restore/",
    "args": [
      {
        "name": "snapshot_id",
        "wire": "snapshot_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "type": "x",
      "progress_percentage": 1,
      "state": "x",
      "human_readable_error": "x",
      "error_code": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "job",
    "accessor": "Job",
    "op": "create",
    "method": "POST",
    "path": "/api/jobs/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "type": "x",
      "progress_percentage": 1,
      "state": "x",
      "human_readable_error": "x",
      "error_code": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "original_application": {
        "id": 1,
        "name": "x",
        "order": 1,
        "type": "x",
        "workspace": {},
        "created_on": "2026-01-01T00:00:00Z",
        "last_viewed": "2026-01-01T00:00:00Z",
        "tables": [
          {}
        ]
      },
      "duplicated_application": {
        "id": 1,
        "name": "x",
        "order": 1,
        "type": "x",
        "workspace": {},
        "created_on": "2026-01-01T00:00:00Z",
        "last_viewed": "2026-01-01T00:00:00Z",
        "tables": [
          {}
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "job",
    "accessor": "Job",
    "op": "list",
    "method": "GET",
    "path": "/api/jobs/",
    "args": [],
    "select": {
      "generate_ai_values_field_id": "v1",
      "job_id": "v1",
      "limit": 20,
      "offset": "v1",
      "state": "v1",
      "sync_data_sync_table_data_sync_id": "v1",
      "type": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "generate_ai_values_field_id",
      "job_ids",
      "limit",
      "offset",
      "states",
      "sync_data_sync_table_data_sync_id",
      "type"
    ],
    "queryArgs": [
      {
        "name": "generate_ai_values_field_id",
        "wire": "generate_ai_values_field_id"
      },
      {
        "name": "job_id",
        "wire": "job_ids"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "state",
        "wire": "states"
      },
      {
        "name": "sync_data_sync_table_data_sync_id",
        "wire": "sync_data_sync_table_data_sync_id"
      },
      {
        "name": "type",
        "wire": "type"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "jobs": [
        {
          "id": 1,
          "type": "x",
          "progress_percentage": 1,
          "state": "x",
          "human_readable_error": "x",
          "error_code": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "original_application": {},
          "duplicated_application": {}
        }
      ],
      "count": 1
    },
    "idField": "id"
  },
  {
    "entity": "job",
    "accessor": "Job",
    "op": "load",
    "method": "GET",
    "path": "/api/jobs/{job_id}/",
    "args": [
      {
        "name": "id",
        "wire": "job_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "type": "x",
      "progress_percentage": 1,
      "state": "x",
      "human_readable_error": "x",
      "error_code": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "original_application": {
        "id": 1,
        "name": "x",
        "order": 1,
        "type": "x",
        "workspace": {},
        "created_on": "2026-01-01T00:00:00Z",
        "last_viewed": "2026-01-01T00:00:00Z",
        "tables": [
          {}
        ]
      },
      "duplicated_application": {
        "id": 1,
        "name": "x",
        "order": 1,
        "type": "x",
        "workspace": {},
        "created_on": "2026-01-01T00:00:00Z",
        "last_viewed": "2026-01-01T00:00:00Z",
        "tables": [
          {}
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "job_type_job",
    "accessor": "JobTypeJob",
    "op": "create",
    "method": "POST",
    "path": "/api/jobs/{job_id}/cancel/",
    "action": "cancel",
    "args": [
      {
        "name": "id",
        "wire": "job_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "type": "x",
      "progress_percentage": 1,
      "state": "x",
      "human_readable_error": "x",
      "error_code": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "original_application": {
        "id": 1,
        "name": "x",
        "order": 1,
        "type": "x",
        "workspace": {},
        "created_on": "2026-01-01T00:00:00Z",
        "last_viewed": "2026-01-01T00:00:00Z",
        "tables": [
          {}
        ]
      },
      "duplicated_application": {
        "id": 1,
        "name": "x",
        "order": 1,
        "type": "x",
        "workspace": {},
        "created_on": "2026-01-01T00:00:00Z",
        "last_viewed": "2026-01-01T00:00:00Z",
        "tables": [
          {}
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "kanban",
    "accessor": "Kanban",
    "op": "load",
    "method": "GET",
    "path": "/api/database/views/kanban/{view_id}/",
    "args": [
      {
        "name": "id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {
      "filter": "v1",
      "filter_type": "v1",
      "filter_{field}_{filter}": "v1",
      "include": "v1",
      "limit": "v1",
      "limit_linked_item": "v1",
      "offset": "v1",
      "select_option": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "filter__{field}__{filter}",
      "filter_type",
      "filters",
      "include",
      "limit",
      "limit_linked_items",
      "offset",
      "select_option"
    ],
    "queryArgs": [
      {
        "name": "filter",
        "wire": "filters"
      },
      {
        "name": "filter_type",
        "wire": "filter_type"
      },
      {
        "name": "filter_{field}_{filter}",
        "wire": "filter__{field}__{filter}"
      },
      {
        "name": "include",
        "wire": "include"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "limit_linked_item",
        "wire": "limit_linked_items"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "select_option",
        "wire": "select_option"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "rows": {},
      "field_options": [
        {
          "hidden": true,
          "order": 1
        }
      ],
      "row_metadata": {}
    },
    "idField": "id"
  },
  {
    "entity": "kanban_view_example",
    "accessor": "KanbanViewExample",
    "op": "list",
    "method": "GET",
    "path": "/api/database/views/kanban/{slug}/public/rows/",
    "args": [
      {
        "name": "kanban_id",
        "wire": "slug",
        "value": "p1"
      }
    ],
    "select": {
      "filter": "v1",
      "filter_type": "v1",
      "filter_{field}_{filter}": "v1",
      "limit": "v1",
      "limit_linked_item": "v1",
      "offset": "v1",
      "order_by": "v1",
      "select_option": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "filter__{field}__{filter}",
      "filter_type",
      "filters",
      "limit",
      "limit_linked_items",
      "offset",
      "order_by",
      "select_option"
    ],
    "queryArgs": [
      {
        "name": "filter",
        "wire": "filters"
      },
      {
        "name": "filter_type",
        "wire": "filter_type"
      },
      {
        "name": "filter_{field}_{filter}",
        "wire": "filter__{field}__{filter}"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "limit_linked_item",
        "wire": "limit_linked_items"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "order_by",
        "wire": "order_by"
      },
      {
        "name": "select_option",
        "wire": "select_option"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "rows": {},
      "field_options": [
        {
          "hidden": true,
          "order": 1
        }
      ],
      "row_metadata": {}
    },
    "idField": "id"
  },
  {
    "entity": "last_viewed_item",
    "accessor": "LastViewedItem",
    "op": "list",
    "method": "GET",
    "path": "/api/last-viewed/items/",
    "args": [],
    "select": {
      "cursor": "v1",
      "limit": "v1",
      "type": "v1",
      "workspace_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "cursor",
      "limit",
      "types",
      "workspace_ids"
    ],
    "queryArgs": [
      {
        "name": "cursor",
        "wire": "cursor"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "type",
        "wire": "types"
      },
      {
        "name": "workspace_id",
        "wire": "workspace_ids"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "results": [
        {
          "type": "x",
          "sub_type": "x",
          "last_viewed": "2026-01-01T00:00:00Z",
          "application": {
            "id": 1,
            "name": "x",
            "type": "x"
          },
          "workspace": {
            "id": 1,
            "name": "x"
          },
          "item": {
            "id": 1,
            "name": "x"
          }
        }
      ],
      "next_cursor": "x"
    },
    "idField": "id"
  },
  {
    "entity": "license",
    "accessor": "License",
    "op": "create",
    "method": "POST",
    "path": "/api/licenses/{id}/{user_id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      },
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "first_name": "x",
      "email": "x"
    },
    "idField": "id"
  },
  {
    "entity": "license",
    "accessor": "License",
    "op": "load",
    "method": "GET",
    "path": "/api/licenses/{id}/",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "license_id": "x",
      "is_active": true,
      "last_check": "2026-01-01T00:00:00Z",
      "valid_from": "2026-01-01T00:00:00Z",
      "valid_through": "2026-01-01T00:00:00Z",
      "free_users_count": 1,
      "seats_taken": 1,
      "seats": 1,
      "application_users_taken": 1,
      "application_users": 1,
      "product_code": "x",
      "issued_on": "2026-01-01T00:00:00Z",
      "issued_to_email": "x",
      "issued_to_name": "x",
      "users": [
        {
          "id": 1,
          "first_name": "x",
          "email": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "license_user",
    "accessor": "LicenseUser",
    "op": "create",
    "method": "POST",
    "path": "/api/licenses/{id}/fill-seats/",
    "action": "fill-seats",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "first_name": "x",
        "email": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "license_user_lookup",
    "accessor": "LicenseUserLookup",
    "op": "list",
    "method": "GET",
    "path": "/api/licenses/{id}/lookup-users/",
    "action": "lookup-users",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {
      "page": "v1",
      "search": "v1",
      "size": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page",
      "search",
      "size"
    ],
    "queryArgs": [
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "size",
        "wire": "size"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "id": 1,
          "value": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "license_with_user",
    "accessor": "LicenseWithUser",
    "op": "list",
    "method": "GET",
    "path": "/api/licenses/{id}/check/",
    "action": "check",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "license_id": "x",
      "is_active": true,
      "last_check": "2026-01-01T00:00:00Z",
      "valid_from": "2026-01-01T00:00:00Z",
      "valid_through": "2026-01-01T00:00:00Z",
      "free_users_count": 1,
      "seats_taken": 1,
      "seats": 1,
      "application_users_taken": 1,
      "application_users": 1,
      "product_code": "x",
      "issued_on": "2026-01-01T00:00:00Z",
      "issued_to_email": "x",
      "issued_to_name": "x",
      "users": [
        {
          "id": 1,
          "first_name": "x",
          "email": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "list_data_sync_property",
    "accessor": "ListDataSyncProperty",
    "op": "create",
    "method": "POST",
    "path": "/api/database/data-sync/database/{database_id}/properties/",
    "args": [
      {
        "name": "database_id",
        "wire": "database_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "unique_primary": true,
        "key": "x",
        "name": "x",
        "field_type": "x",
        "initially_selected": true
      }
    ],
    "idField": "id"
  },
  {
    "entity": "list_data_sync_property",
    "accessor": "ListDataSyncProperty",
    "op": "list",
    "method": "GET",
    "path": "/api/database/data-sync/{data_sync_id}/properties/",
    "args": [
      {
        "name": "data_sync_id",
        "wire": "data_sync_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "unique_primary": true,
        "key": "x",
        "name": "x",
        "field_type": "x",
        "initially_selected": true
      }
    ],
    "idField": "id"
  },
  {
    "entity": "login",
    "accessor": "Login",
    "op": "load",
    "method": "GET",
    "path": "/api/sso/oauth2/login/{provider_id}/",
    "args": [
      {
        "name": "id",
        "wire": "provider_id",
        "value": "p1"
      }
    ],
    "select": {
      "original": "v1",
      "workspace_invitation_token": "v1"
    },
    "headers": [],
    "cookies": [],
    "query": [
      "original",
      "workspace_invitation_token"
    ],
    "queryArgs": [
      {
        "name": "original",
        "wire": "original"
      },
      {
        "name": "workspace_invitation_token",
        "wire": "workspace_invitation_token"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "mcp_endpoint",
    "accessor": "McpEndpoint",
    "op": "create",
    "method": "POST",
    "path": "/api/mcp/endpoints/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "key": "x",
      "workspace_id": 1,
      "workspace_name": "x",
      "created": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "mcp_endpoint",
    "accessor": "McpEndpoint",
    "op": "list",
    "method": "GET",
    "path": "/api/mcp/endpoints/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "name": "x",
        "key": "x",
        "workspace_id": 1,
        "workspace_name": "x",
        "created": "2026-01-01T00:00:00Z"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "mcp_endpoint",
    "accessor": "McpEndpoint",
    "op": "load",
    "method": "GET",
    "path": "/api/mcp/endpoint/{endpoint_id}/",
    "args": [
      {
        "name": "id",
        "wire": "endpoint_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "key": "x",
      "workspace_id": 1,
      "workspace_name": "x",
      "created": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "mcp_endpoint",
    "accessor": "McpEndpoint",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/mcp/endpoint/{endpoint_id}/",
    "args": [
      {
        "name": "id",
        "wire": "endpoint_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "mcp_endpoint",
    "accessor": "McpEndpoint",
    "op": "update",
    "method": "PATCH",
    "path": "/api/mcp/endpoint/{endpoint_id}/",
    "args": [
      {
        "name": "id",
        "wire": "endpoint_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "key": "x",
      "workspace_id": 1,
      "workspace_name": "x",
      "created": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "message",
    "accessor": "Message",
    "op": "list",
    "method": "GET",
    "path": "/assistant/chat/{chat_uuid}/messages/",
    "args": [
      {
        "name": "chat_id",
        "wire": "chat_uuid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "messages": [
        {
          "type": "x",
          "content": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "notification",
    "accessor": "Notification",
    "op": "create",
    "method": "POST",
    "path": "/api/notifications/{workspace_id}/mark-all-as-read/",
    "action": "mark_all_as_read",
    "args": [
      {
        "name": "id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "notification",
    "accessor": "Notification",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/notifications/{workspace_id}/",
    "args": [
      {
        "name": "id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "notification",
    "accessor": "Notification",
    "op": "update",
    "method": "PATCH",
    "path": "/api/notifications/{workspace_id}/{notification_id}/",
    "args": [
      {
        "name": "notification_id",
        "wire": "notification_id",
        "value": "p1"
      },
      {
        "name": "workspace_id",
        "wire": "workspace_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "type": "x",
      "sender": {
        "id": 1,
        "username": "x",
        "first_name": "x"
      },
      "workspace": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "read": true
    },
    "idField": "id"
  },
  {
    "entity": "onboarding_prompt_suggestion",
    "accessor": "OnboardingPromptSuggestion",
    "op": "create",
    "method": "POST",
    "path": "/assistant/onboarding/prompt-suggestions/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "suggestions": [
        {
          "name": "x",
          "prompt": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "open_api_role_assignment",
    "accessor": "OpenApiRoleAssignment",
    "op": "load",
    "method": "GET",
    "path": "/api/role/{workspace_id}/",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {
      "scope_id": "v1",
      "scope_type": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "scope_id",
      "scope_type"
    ],
    "queryArgs": [
      {
        "name": "scope_id",
        "wire": "scope_id"
      },
      {
        "name": "scope_type",
        "wire": "scope_type"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "role": "x",
        "subject": {
          "id": 1
        },
        "subject_id": 1,
        "scope_id": 1,
        "subject_type": "auth.User",
        "scope_type": "core"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "page",
    "accessor": "Page",
    "op": "create",
    "method": "POST",
    "path": "/api/builder/{builder_id}/pages/",
    "args": [
      {
        "name": "builder_id",
        "wire": "builder_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "path": "x",
      "path_params": [
        {
          "name": "x",
          "type": "text"
        }
      ],
      "order": 1,
      "builder_id": 1,
      "shared": true,
      "visibility": "all",
      "role_type": "allow_all",
      "query_params": [
        {
          "name": "x",
          "type": "text"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "page",
    "accessor": "Page",
    "op": "update",
    "method": "PATCH",
    "path": "/api/builder/pages/{page_id}/",
    "args": [
      {
        "name": "id",
        "wire": "page_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "path": "x",
      "path_params": [
        {
          "name": "x",
          "type": "text"
        }
      ],
      "order": 1,
      "builder_id": 1,
      "shared": true,
      "visibility": "all",
      "role_type": "allow_all",
      "query_params": [
        {
          "name": "x",
          "type": "text"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pagination_serializer_example_row_response_serializer_with_user",
    "accessor": "PaginationSerializerExampleRowResponseSerializerWithUser",
    "op": "load",
    "method": "GET",
    "path": "/api/database/rows/table/{table_id}/",
    "args": [
      {
        "name": "table_id",
        "wire": "table_id",
        "value": "p1"
      }
    ],
    "select": {
      "exclude": "v1",
      "filter": "v1",
      "filter_type": "v1",
      "filter_{field}_{filter}": "v1",
      "include": "v1",
      "order_by": "v1",
      "page": "v1",
      "search": "v1",
      "search_mode": "v1",
      "size": "v1",
      "user_field_name": "v1",
      "view_id": "v1",
      "{link_row_field}_join={target_field},{target_field2}": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "exclude",
      "filter__{field}__{filter}",
      "filter_type",
      "filters",
      "include",
      "order_by",
      "page",
      "search",
      "search_mode",
      "size",
      "user_field_names",
      "view_id",
      "{link_row_field}__join={target_field},{target_field2}"
    ],
    "queryArgs": [
      {
        "name": "exclude",
        "wire": "exclude"
      },
      {
        "name": "filter",
        "wire": "filters"
      },
      {
        "name": "filter_type",
        "wire": "filter_type"
      },
      {
        "name": "filter_{field}_{filter}",
        "wire": "filter__{field}__{filter}"
      },
      {
        "name": "include",
        "wire": "include"
      },
      {
        "name": "order_by",
        "wire": "order_by"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "search_mode",
        "wire": "search_mode"
      },
      {
        "name": "size",
        "wire": "size"
      },
      {
        "name": "user_field_name",
        "wire": "user_field_names"
      },
      {
        "name": "view_id",
        "wire": "view_id"
      },
      {
        "name": "{link_row_field}_join={target_field},{target_field2}",
        "wire": "{link_row_field}__join={target_field},{target_field2}"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "id": 1,
          "order": "x",
          "metadata": {
            "row_comment_count": 1,
            "row_comments_notification_mode": "all"
          },
          "field_1": "x",
          "field_2": "x",
          "field_3": "x",
          "field_4": "x",
          "field_5": "x",
          "field_6": 1,
          "field_7": true,
          "field_8": "2026-01-01",
          "field_9": "2026-01-01T00:00:00Z",
          "field_10": {
            "id": 1,
            "name": "x"
          },
          "field_11": "2026-01-01T00:00:00Z",
          "field_12": {
            "id": 1,
            "name": "x"
          },
          "field_13": 1,
          "field_14": [
            {
              "id": 1,
              "value": "x",
              "order": "x"
            }
          ],
          "field_15": [
            {
              "url": "x",
              "thumbnails": {},
              "visible_name": "x",
              "name": "x",
              "size": 1,
              "mime_type": "x",
              "is_image": true,
              "image_width": 1,
              "image_height": 1,
              "uploaded_at": "2026-01-01T00:00:00Z"
            }
          ],
          "field_16": {
            "id": 1,
            "value": "x",
            "color": "x"
          },
          "field_17": [
            {
              "id": 1,
              "value": "x",
              "color": "x"
            }
          ],
          "field_18": "x",
          "field_19": "x",
          "field_20": "x",
          "field_21": "x",
          "field_22": "x",
          "field_23": [
            {
              "id": 1,
              "name": "x"
            }
          ],
          "field_24": "x",
          "field_25": 1,
          "field_26": true,
          "field_27": "x",
          "field_28": "x",
          "field_29": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pagination_serializer_link_row_value",
    "accessor": "PaginationSerializerLinkRowValue",
    "op": "load",
    "method": "GET",
    "path": "/api/database/views/{slug}/link-row-field-lookup/{field_id}/",
    "args": [
      {
        "name": "field_id",
        "wire": "field_id",
        "value": "p1"
      },
      {
        "name": "view_id",
        "wire": "slug",
        "value": "p2"
      }
    ],
    "select": {
      "search": "v1",
      "search_mode": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "search",
      "search_mode"
    ],
    "queryArgs": [
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "search_mode",
        "wire": "search_mode"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "id": 1,
          "value": "x",
          "order": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pagination_serializer_notification_recipient",
    "accessor": "PaginationSerializerNotificationRecipient",
    "op": "load",
    "method": "GET",
    "path": "/api/notifications/{workspace_id}/",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {
      "limit": "v1",
      "offset": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "id": 1,
          "type": "x",
          "sender": {
            "id": 1,
            "username": "x",
            "first_name": "x"
          },
          "workspace": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "read": true
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pagination_serializer_row_comment",
    "accessor": "PaginationSerializerRowComment",
    "op": "load",
    "method": "GET",
    "path": "/api/row_comments/{table_id}/{row_id}/",
    "args": [
      {
        "name": "row_id",
        "wire": "row_id",
        "value": "p1"
      },
      {
        "name": "table_id",
        "wire": "table_id",
        "value": "p2"
      }
    ],
    "select": {
      "limit": "v1",
      "offset": "v1",
      "page": "v1",
      "size": "v1",
      "view": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset",
      "page",
      "size",
      "view"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "size",
        "wire": "size"
      },
      {
        "name": "view",
        "wire": "view"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "id": 1,
          "user_id": 1,
          "first_name": "x",
          "table_id": 1,
          "row_id": 1,
          "message": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "updated_on": "2026-01-01T00:00:00Z",
          "edited": "x",
          "trashed": true
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pagination_serializer_trash_content",
    "accessor": "PaginationSerializerTrashContent",
    "op": "load",
    "method": "GET",
    "path": "/api/trash/workspace/{workspace_id}/",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {
      "application_id": "v1",
      "page": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "application_id",
      "page"
    ],
    "queryArgs": [
      {
        "name": "application_id",
        "wire": "application_id"
      },
      {
        "name": "page",
        "wire": "page"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "id": 1,
          "user_who_trashed": "x",
          "trash_item_type": "x",
          "trash_item_id": 1,
          "parent_trash_item_id": 1,
          "trashed_at": "2026-01-01T00:00:00Z",
          "application": 1,
          "workspace": 1,
          "name": "x",
          "names": [
            "x"
          ],
          "parent_name": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pagination_serializer_with_gallery_view_field_options_example_row",
    "accessor": "PaginationSerializerWithGalleryViewFieldOptionsExampleRow",
    "op": "load",
    "method": "GET",
    "path": "/api/database/views/gallery/{view_id}/",
    "args": [
      {
        "name": "view_id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {
      "count": "v1",
      "exclude_count": "v1",
      "filter": "v1",
      "filter_type": "v1",
      "filter_{field}_{filter}": "v1",
      "include": "v1",
      "limit": "v1",
      "limit_linked_item": "v1",
      "offset": "v1",
      "order_by": "v1",
      "search": "v1",
      "search_mode": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "count",
      "exclude_count",
      "filter__{field}__{filter}",
      "filter_type",
      "filters",
      "include",
      "limit",
      "limit_linked_items",
      "offset",
      "order_by",
      "search",
      "search_mode"
    ],
    "queryArgs": [
      {
        "name": "count",
        "wire": "count"
      },
      {
        "name": "exclude_count",
        "wire": "exclude_count"
      },
      {
        "name": "filter",
        "wire": "filters"
      },
      {
        "name": "filter_type",
        "wire": "filter_type"
      },
      {
        "name": "filter_{field}_{filter}",
        "wire": "filter__{field}__{filter}"
      },
      {
        "name": "include",
        "wire": "include"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "limit_linked_item",
        "wire": "limit_linked_items"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "order_by",
        "wire": "order_by"
      },
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "search_mode",
        "wire": "search_mode"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "field_options": {},
      "row_metadata": {},
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "id": 1,
          "order": "x",
          "metadata": {
            "row_comment_count": 1,
            "row_comments_notification_mode": "all"
          },
          "field_1": "x",
          "field_2": "x",
          "field_3": "x",
          "field_4": "x",
          "field_5": "x",
          "field_6": 1,
          "field_7": true,
          "field_8": "2026-01-01",
          "field_9": "2026-01-01T00:00:00Z",
          "field_10": {
            "id": 1,
            "name": "x"
          },
          "field_11": "2026-01-01T00:00:00Z",
          "field_12": {
            "id": 1,
            "name": "x"
          },
          "field_13": 1,
          "field_14": [
            {
              "id": 1,
              "value": "x",
              "order": "x"
            }
          ],
          "field_15": [
            {
              "url": "x",
              "thumbnails": {},
              "visible_name": "x",
              "name": "x",
              "size": 1,
              "mime_type": "x",
              "is_image": true,
              "image_width": 1,
              "image_height": 1,
              "uploaded_at": "2026-01-01T00:00:00Z"
            }
          ],
          "field_16": {
            "id": 1,
            "value": "x",
            "color": "x"
          },
          "field_17": [
            {
              "id": 1,
              "value": "x",
              "color": "x"
            }
          ],
          "field_18": "x",
          "field_19": "x",
          "field_20": "x",
          "field_21": "x",
          "field_22": "x",
          "field_23": [
            {
              "id": 1,
              "name": "x"
            }
          ],
          "field_24": "x",
          "field_25": 1,
          "field_26": true,
          "field_27": "x",
          "field_28": "x",
          "field_29": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pagination_serializer_with_grid_view_field_options_example_row",
    "accessor": "PaginationSerializerWithGridViewFieldOptionsExampleRow",
    "op": "load",
    "method": "GET",
    "path": "/api/database/views/grid/{view_id}/",
    "args": [
      {
        "name": "view_id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {
      "count": "v1",
      "exclude_count": "v1",
      "exclude_field": "v1",
      "filter": "v1",
      "filter_type": "v1",
      "filter_{field}_{filter}": "v1",
      "group_by": "v1",
      "include": "v1",
      "include_field": "v1",
      "limit": "v1",
      "limit_linked_item": "v1",
      "offset": "v1",
      "order_by": "v1",
      "page": "v1",
      "search": "v1",
      "search_mode": "v1",
      "size": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "count",
      "exclude_count",
      "exclude_fields",
      "filter__{field}__{filter}",
      "filter_type",
      "filters",
      "group_by",
      "include",
      "include_fields",
      "limit",
      "limit_linked_items",
      "offset",
      "order_by",
      "page",
      "search",
      "search_mode",
      "size"
    ],
    "queryArgs": [
      {
        "name": "count",
        "wire": "count"
      },
      {
        "name": "exclude_count",
        "wire": "exclude_count"
      },
      {
        "name": "exclude_field",
        "wire": "exclude_fields"
      },
      {
        "name": "filter",
        "wire": "filters"
      },
      {
        "name": "filter_type",
        "wire": "filter_type"
      },
      {
        "name": "filter_{field}_{filter}",
        "wire": "filter__{field}__{filter}"
      },
      {
        "name": "group_by",
        "wire": "group_by"
      },
      {
        "name": "include",
        "wire": "include"
      },
      {
        "name": "include_field",
        "wire": "include_fields"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "limit_linked_item",
        "wire": "limit_linked_items"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "order_by",
        "wire": "order_by"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "search_mode",
        "wire": "search_mode"
      },
      {
        "name": "size",
        "wire": "size"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "field_options": {},
      "row_metadata": {},
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "id": 1,
          "order": "x",
          "metadata": {
            "row_comment_count": 1,
            "row_comments_notification_mode": "all"
          },
          "field_1": "x",
          "field_2": "x",
          "field_3": "x",
          "field_4": "x",
          "field_5": "x",
          "field_6": 1,
          "field_7": true,
          "field_8": "2026-01-01",
          "field_9": "2026-01-01T00:00:00Z",
          "field_10": {
            "id": 1,
            "name": "x"
          },
          "field_11": "2026-01-01T00:00:00Z",
          "field_12": {
            "id": 1,
            "name": "x"
          },
          "field_13": 1,
          "field_14": [
            {
              "id": 1,
              "value": "x",
              "order": "x"
            }
          ],
          "field_15": [
            {
              "url": "x",
              "thumbnails": {},
              "visible_name": "x",
              "name": "x",
              "size": 1,
              "mime_type": "x",
              "is_image": true,
              "image_width": 1,
              "image_height": 1,
              "uploaded_at": "2026-01-01T00:00:00Z"
            }
          ],
          "field_16": {
            "id": 1,
            "value": "x",
            "color": "x"
          },
          "field_17": [
            {
              "id": 1,
              "value": "x",
              "color": "x"
            }
          ],
          "field_18": "x",
          "field_19": "x",
          "field_20": "x",
          "field_21": "x",
          "field_22": "x",
          "field_23": [
            {
              "id": 1,
              "name": "x"
            }
          ],
          "field_24": "x",
          "field_25": 1,
          "field_26": true,
          "field_27": "x",
          "field_28": "x",
          "field_29": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pagination_serializer_with_timeline_view_field_options_example_row",
    "accessor": "PaginationSerializerWithTimelineViewFieldOptionsExampleRow",
    "op": "load",
    "method": "GET",
    "path": "/api/database/views/timeline/{view_id}/",
    "args": [
      {
        "name": "view_id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {
      "count": "v1",
      "exclude_count": "v1",
      "exclude_field": "v1",
      "filter": "v1",
      "filter_type": "v1",
      "filter_{field}_{filter}": "v1",
      "include": "v1",
      "include_field": "v1",
      "limit": "v1",
      "limit_linked_item": "v1",
      "offset": "v1",
      "order_by": "v1",
      "page": "v1",
      "search": "v1",
      "search_mode": "v1",
      "size": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "count",
      "exclude_count",
      "exclude_fields",
      "filter__{field}__{filter}",
      "filter_type",
      "filters",
      "include",
      "include_fields",
      "limit",
      "limit_linked_items",
      "offset",
      "order_by",
      "page",
      "search",
      "search_mode",
      "size"
    ],
    "queryArgs": [
      {
        "name": "count",
        "wire": "count"
      },
      {
        "name": "exclude_count",
        "wire": "exclude_count"
      },
      {
        "name": "exclude_field",
        "wire": "exclude_fields"
      },
      {
        "name": "filter",
        "wire": "filters"
      },
      {
        "name": "filter_type",
        "wire": "filter_type"
      },
      {
        "name": "filter_{field}_{filter}",
        "wire": "filter__{field}__{filter}"
      },
      {
        "name": "include",
        "wire": "include"
      },
      {
        "name": "include_field",
        "wire": "include_fields"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "limit_linked_item",
        "wire": "limit_linked_items"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "order_by",
        "wire": "order_by"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "search_mode",
        "wire": "search_mode"
      },
      {
        "name": "size",
        "wire": "size"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "field_options": {},
      "row_metadata": {},
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "id": 1,
          "order": "x",
          "metadata": {
            "row_comment_count": 1,
            "row_comments_notification_mode": "all"
          },
          "field_1": "x",
          "field_2": "x",
          "field_3": "x",
          "field_4": "x",
          "field_5": "x",
          "field_6": 1,
          "field_7": true,
          "field_8": "2026-01-01",
          "field_9": "2026-01-01T00:00:00Z",
          "field_10": {
            "id": 1,
            "name": "x"
          },
          "field_11": "2026-01-01T00:00:00Z",
          "field_12": {
            "id": 1,
            "name": "x"
          },
          "field_13": 1,
          "field_14": [
            {
              "id": 1,
              "value": "x",
              "order": "x"
            }
          ],
          "field_15": [
            {
              "url": "x",
              "thumbnails": {},
              "visible_name": "x",
              "name": "x",
              "size": 1,
              "mime_type": "x",
              "is_image": true,
              "image_width": 1,
              "image_height": 1,
              "uploaded_at": "2026-01-01T00:00:00Z"
            }
          ],
          "field_16": {
            "id": 1,
            "value": "x",
            "color": "x"
          },
          "field_17": [
            {
              "id": 1,
              "value": "x",
              "color": "x"
            }
          ],
          "field_18": "x",
          "field_19": "x",
          "field_20": "x",
          "field_21": "x",
          "field_22": "x",
          "field_23": [
            {
              "id": 1,
              "name": "x"
            }
          ],
          "field_24": "x",
          "field_25": 1,
          "field_26": true,
          "field_27": "x",
          "field_28": "x",
          "field_29": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "password_field_authentication",
    "accessor": "PasswordFieldAuthentication",
    "op": "create",
    "method": "POST",
    "path": "/api/database/fields/password-authentication/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "is_correct": true
    },
    "idField": "id"
  },
  {
    "entity": "periodic_data_sync_interval",
    "accessor": "PeriodicDataSyncInterval",
    "op": "load",
    "method": "GET",
    "path": "/api/data-sync/{data_sync_id}/periodic-interval/",
    "args": [
      {
        "name": "data_sync_id",
        "wire": "data_sync_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "interval": "MANUAL",
      "when": "x",
      "automatically_deactivated": true
    },
    "idField": "id"
  },
  {
    "entity": "periodic_data_sync_interval",
    "accessor": "PeriodicDataSyncInterval",
    "op": "update",
    "method": "PATCH",
    "path": "/api/data-sync/{data_sync_id}/periodic-interval/",
    "args": [
      {
        "name": "data_sync_id",
        "wire": "data_sync_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "interval": "MANUAL",
      "when": "x",
      "automatically_deactivated": true
    },
    "idField": "id"
  },
  {
    "entity": "permission",
    "accessor": "Permission",
    "op": "list",
    "method": "GET",
    "path": "/api/workspaces/{workspace_id}/permissions/",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "name": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "public_builder_workflow_action_type_builder_workflow_action",
    "accessor": "PublicBuilderWorkflowActionTypeBuilderWorkflowAction",
    "op": "list",
    "method": "GET",
    "path": "/api/builder/domains/published/page/{page_id}/workflow_actions/",
    "args": [
      {
        "name": "page_id",
        "wire": "page_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": [
      {
        "id": 1,
        "name": "x",
        "order": 1,
        "type": "x",
        "workspace": "x",
        "created_on": "2026-01-01T00:00:00Z",
        "last_viewed": "2026-01-01T00:00:00Z",
        "favicon_file": {
          "size": 1,
          "mime_type": "x",
          "is_image": true,
          "image_width": 1,
          "image_height": 1,
          "uploaded_at": "2026-01-01T00:00:00Z",
          "url": "x",
          "thumbnails": {},
          "name": "x",
          "original_name": "x"
        },
        "login_page_id": 1,
        "breakpoints": {},
        "pages": [
          {
            "id": 1,
            "name": "x",
            "path": "x",
            "path_params": [
              {}
            ],
            "shared": true,
            "visibility": "all",
            "role_type": "allow_all",
            "query_params": [
              {}
            ]
          }
        ],
        "theme": {
          "primary_color": "x",
          "secondary_color": "x",
          "border_color": "x",
          "main_success_color": "x",
          "main_warning_color": "x",
          "main_error_color": "x",
          "heading_1_text_decoration": [
            true
          ],
          "heading_2_text_decoration": [
            true
          ],
          "heading_3_text_decoration": [
            true
          ],
          "heading_4_text_decoration": [
            true
          ],
          "heading_5_text_decoration": [
            true
          ],
          "heading_6_text_decoration": [
            true
          ],
          "body_font_family": "x",
          "body_font_size": 1,
          "body_font_weight": "thin",
          "body_text_color": "x",
          "body_text_alignment": "left",
          "heading_1_font_family": "x",
          "heading_1_font_size": 1,
          "heading_1_font_weight": "thin",
          "heading_1_text_color": "x",
          "heading_1_text_alignment": "left",
          "heading_2_font_family": "x",
          "heading_2_font_size": 1,
          "heading_2_font_weight": "thin",
          "heading_2_text_color": "x",
          "heading_2_text_alignment": "left",
          "heading_3_font_family": "x",
          "heading_3_font_size": 1,
          "heading_3_font_weight": "thin",
          "heading_3_text_color": "x",
          "heading_3_text_alignment": "left",
          "heading_4_font_family": "x",
          "heading_4_font_size": 1,
          "heading_4_font_weight": "thin",
          "heading_4_text_color": "x",
          "heading_4_text_alignment": "left",
          "heading_5_font_family": "x",
          "heading_5_font_size": 1,
          "heading_5_font_weight": "thin",
          "heading_5_text_color": "x",
          "heading_5_text_alignment": "left",
          "heading_6_font_family": "x",
          "heading_6_font_size": 1,
          "heading_6_font_weight": "thin",
          "heading_6_text_color": "x",
          "heading_6_text_alignment": "left",
          "button_font_family": "x",
          "button_font_size": 1,
          "button_font_weight": "thin",
          "button_alignment": "left",
          "button_text_alignment": "left",
          "button_width": "auto",
          "button_background_color": "x",
          "button_text_color": "x",
          "button_border_color": "x",
          "button_border_size": 1,
          "button_border_radius": 1,
          "button_vertical_padding": 1,
          "button_horizontal_padding": 1,
          "button_hover_background_color": "x",
          "button_hover_text_color": "x",
          "button_hover_border_color": "x",
          "button_active_background_color": "x",
          "button_active_text_color": "x",
          "button_active_border_color": "x",
          "image_max_height": 1,
          "image_alignment": "left",
          "image_max_width": 1,
          "image_border_radius": 1,
          "image_constraint": "cover",
          "page_background_file": {},
          "page_background_color": "x",
          "page_background_mode": "tile",
          "label_font_family": "x",
          "label_text_color": "x",
          "label_font_size": 1,
          "label_font_weight": "thin",
          "input_font_family": "x",
          "input_font_size": 1,
          "input_font_weight": "thin",
          "input_text_color": "x",
          "input_background_color": "x",
          "input_border_color": "x",
          "input_border_size": 1,
          "input_border_radius": 1,
          "input_vertical_padding": 1,
          "input_horizontal_padding": 1,
          "table_border_color": "x",
          "table_border_size": 1,
          "table_border_radius": 1,
          "table_header_background_color": "x",
          "table_header_text_color": "x",
          "table_header_font_size": 1,
          "table_header_font_weight": "thin",
          "table_header_font_family": "x",
          "table_header_text_alignment": "left",
          "table_cell_background_color": "x",
          "table_cell_alternate_background_color": "x",
          "table_cell_alignment": "left",
          "table_cell_vertical_padding": 1,
          "table_cell_horizontal_padding": 1,
          "table_vertical_separator_color": "x",
          "table_vertical_separator_size": 1,
          "table_horizontal_separator_color": "x",
          "table_horizontal_separator_size": 1,
          "link_default_text_decoration": [
            true
          ],
          "link_hover_text_decoration": [
            true
          ],
          "link_active_text_decoration": [
            true
          ],
          "link_font_family": "x",
          "link_font_size": 1,
          "link_font_weight": "thin",
          "link_text_alignment": "left",
          "link_text_color": "x",
          "link_hover_text_color": "x",
          "link_active_text_color": "x"
        },
        "user_sources": [
          {
            "id": 1,
            "uid": "x",
            "type": "x",
            "name": "x",
            "order": "x",
            "auth_providers": [],
            "table_id": 1,
            "email_field_id": 1,
            "name_field_id": 1,
            "role_field_id": 1
          }
        ],
        "scripts": [
          {
            "id": 1,
            "type": "stylesheet",
            "url": "x",
            "load_type": "defer",
            "crossorigin": "anonymous"
          }
        ],
        "custom_code": {
          "css": "x",
          "js": "x"
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "public_form_view",
    "accessor": "PublicFormView",
    "op": "list",
    "method": "GET",
    "path": "/api/database/views/form/{slug}/submit/",
    "args": [
      {
        "name": "slug",
        "wire": "slug",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "title": "x",
      "description": "x",
      "mode": "form",
      "cover_image": {
        "size": 1,
        "mime_type": "x",
        "is_image": true,
        "image_width": 1,
        "image_height": 1,
        "uploaded_at": "2026-01-01T00:00:00Z",
        "url": "x",
        "thumbnails": {},
        "name": "x",
        "original_name": "x"
      },
      "logo_image": {
        "size": 1,
        "mime_type": "x",
        "is_image": true,
        "image_width": 1,
        "image_height": 1,
        "uploaded_at": "2026-01-01T00:00:00Z",
        "url": "x",
        "thumbnails": {},
        "name": "x",
        "original_name": "x"
      },
      "submit_text": "x",
      "fields": [
        {
          "name": "x",
          "description": "x",
          "required": true,
          "order": 1,
          "field": {
            "id": 1,
            "name": "x",
            "type": "x"
          },
          "show_when_matching_conditions": true,
          "condition_type": "AND",
          "conditions": [
            {
              "id": 1,
              "field": 1,
              "type": "x",
              "value": "x",
              "group": 1
            }
          ],
          "condition_groups": [
            {
              "id": 1,
              "filter_type": "AND",
              "parent_group": 1
            }
          ],
          "groups": [
            {
              "id": 1,
              "filter_type": "AND",
              "parent_group": 1
            }
          ],
          "field_component": "x"
        }
      ],
      "show_logo": true,
      "allow_public_export": true
    },
    "idField": "id"
  },
  {
    "entity": "public_pagination_serializer_with_gallery_view_field_options",
    "accessor": "PublicPaginationSerializerWithGalleryViewFieldOptions",
    "op": "list",
    "method": "GET",
    "path": "/api/database/views/gallery/{slug}/public/rows/",
    "args": [
      {
        "name": "gallery_id",
        "wire": "slug",
        "value": "p1"
      }
    ],
    "select": {
      "count": "v1",
      "exclude_field": "v1",
      "filter": "v1",
      "filter_type": "v1",
      "filter_{field}_{filter}": "v1",
      "include": "v1",
      "include_field": "v1",
      "limit": "v1",
      "limit_linked_item": "v1",
      "offset": "v1",
      "order_by": "v1",
      "page": "v1",
      "search": "v1",
      "search_mode": "v1",
      "size": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "count",
      "exclude_fields",
      "filter__{field}__{filter}",
      "filter_type",
      "filters",
      "include",
      "include_fields",
      "limit",
      "limit_linked_items",
      "offset",
      "order_by",
      "page",
      "search",
      "search_mode",
      "size"
    ],
    "queryArgs": [
      {
        "name": "count",
        "wire": "count"
      },
      {
        "name": "exclude_field",
        "wire": "exclude_fields"
      },
      {
        "name": "filter",
        "wire": "filters"
      },
      {
        "name": "filter_type",
        "wire": "filter_type"
      },
      {
        "name": "filter_{field}_{filter}",
        "wire": "filter__{field}__{filter}"
      },
      {
        "name": "include",
        "wire": "include"
      },
      {
        "name": "include_field",
        "wire": "include_fields"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "limit_linked_item",
        "wire": "limit_linked_items"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "order_by",
        "wire": "order_by"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "search_mode",
        "wire": "search_mode"
      },
      {
        "name": "size",
        "wire": "size"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "field_options": {},
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "id": 1,
          "order": "x",
          "metadata": {
            "row_comment_count": 1,
            "row_comments_notification_mode": "all"
          },
          "field_1": "x",
          "field_2": "x",
          "field_3": "x",
          "field_4": "x",
          "field_5": "x",
          "field_6": 1,
          "field_7": true,
          "field_8": "2026-01-01",
          "field_9": "2026-01-01T00:00:00Z",
          "field_10": {
            "id": 1,
            "name": "x"
          },
          "field_11": "2026-01-01T00:00:00Z",
          "field_12": {
            "id": 1,
            "name": "x"
          },
          "field_13": 1,
          "field_14": [
            {
              "id": 1,
              "value": "x",
              "order": "x"
            }
          ],
          "field_15": [
            {
              "url": "x",
              "thumbnails": {},
              "visible_name": "x",
              "name": "x",
              "size": 1,
              "mime_type": "x",
              "is_image": true,
              "image_width": 1,
              "image_height": 1,
              "uploaded_at": "2026-01-01T00:00:00Z"
            }
          ],
          "field_16": {
            "id": 1,
            "value": "x",
            "color": "x"
          },
          "field_17": [
            {
              "id": 1,
              "value": "x",
              "color": "x"
            }
          ],
          "field_18": "x",
          "field_19": "x",
          "field_20": "x",
          "field_21": "x",
          "field_22": "x",
          "field_23": [
            {
              "id": 1,
              "name": "x"
            }
          ],
          "field_24": "x",
          "field_25": 1,
          "field_26": true,
          "field_27": "x",
          "field_28": "x",
          "field_29": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "public_pagination_serializer_with_grid_view_field_options_example",
    "accessor": "PublicPaginationSerializerWithGridViewFieldOptionsExample",
    "op": "list",
    "method": "GET",
    "path": "/api/database/views/grid/{slug}/public/rows/",
    "args": [
      {
        "name": "grid_id",
        "wire": "slug",
        "value": "p1"
      }
    ],
    "select": {
      "count": "v1",
      "exclude_count": "v1",
      "exclude_field": "v1",
      "filter": "v1",
      "filter_type": "v1",
      "filter_{field}_{filter}": "v1",
      "group_by": "v1",
      "include": "v1",
      "include_field": "v1",
      "limit": "v1",
      "limit_linked_item": "v1",
      "offset": "v1",
      "order_by": "v1",
      "page": "v1",
      "search": "v1",
      "search_mode": "v1",
      "size": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "count",
      "exclude_count",
      "exclude_fields",
      "filter__{field}__{filter}",
      "filter_type",
      "filters",
      "group_by",
      "include",
      "include_fields",
      "limit",
      "limit_linked_items",
      "offset",
      "order_by",
      "page",
      "search",
      "search_mode",
      "size"
    ],
    "queryArgs": [
      {
        "name": "count",
        "wire": "count"
      },
      {
        "name": "exclude_count",
        "wire": "exclude_count"
      },
      {
        "name": "exclude_field",
        "wire": "exclude_fields"
      },
      {
        "name": "filter",
        "wire": "filters"
      },
      {
        "name": "filter_type",
        "wire": "filter_type"
      },
      {
        "name": "filter_{field}_{filter}",
        "wire": "filter__{field}__{filter}"
      },
      {
        "name": "group_by",
        "wire": "group_by"
      },
      {
        "name": "include",
        "wire": "include"
      },
      {
        "name": "include_field",
        "wire": "include_fields"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "limit_linked_item",
        "wire": "limit_linked_items"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "order_by",
        "wire": "order_by"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "search_mode",
        "wire": "search_mode"
      },
      {
        "name": "size",
        "wire": "size"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "field_options": {},
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "id": 1,
          "order": "x",
          "metadata": {
            "row_comment_count": 1,
            "row_comments_notification_mode": "all"
          },
          "field_1": "x",
          "field_2": "x",
          "field_3": "x",
          "field_4": "x",
          "field_5": "x",
          "field_6": 1,
          "field_7": true,
          "field_8": "2026-01-01",
          "field_9": "2026-01-01T00:00:00Z",
          "field_10": {
            "id": 1,
            "name": "x"
          },
          "field_11": "2026-01-01T00:00:00Z",
          "field_12": {
            "id": 1,
            "name": "x"
          },
          "field_13": 1,
          "field_14": [
            {
              "id": 1,
              "value": "x",
              "order": "x"
            }
          ],
          "field_15": [
            {
              "url": "x",
              "thumbnails": {},
              "visible_name": "x",
              "name": "x",
              "size": 1,
              "mime_type": "x",
              "is_image": true,
              "image_width": 1,
              "image_height": 1,
              "uploaded_at": "2026-01-01T00:00:00Z"
            }
          ],
          "field_16": {
            "id": 1,
            "value": "x",
            "color": "x"
          },
          "field_17": [
            {
              "id": 1,
              "value": "x",
              "color": "x"
            }
          ],
          "field_18": "x",
          "field_19": "x",
          "field_20": "x",
          "field_21": "x",
          "field_22": "x",
          "field_23": [
            {
              "id": 1,
              "name": "x"
            }
          ],
          "field_24": "x",
          "field_25": 1,
          "field_26": true,
          "field_27": "x",
          "field_28": "x",
          "field_29": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "public_pagination_serializer_with_timeline_view_field_options",
    "accessor": "PublicPaginationSerializerWithTimelineViewFieldOptions",
    "op": "list",
    "method": "GET",
    "path": "/api/database/views/timeline/{slug}/public/rows/",
    "args": [
      {
        "name": "timeline_id",
        "wire": "slug",
        "value": "p1"
      }
    ],
    "select": {
      "count": "v1",
      "exclude_field": "v1",
      "filter": "v1",
      "filter_type": "v1",
      "filter_{field}_{filter}": "v1",
      "include": "v1",
      "include_field": "v1",
      "limit": "v1",
      "limit_linked_item": "v1",
      "offset": "v1",
      "order_by": "v1",
      "page": "v1",
      "search": "v1",
      "search_mode": "v1",
      "size": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "count",
      "exclude_fields",
      "filter__{field}__{filter}",
      "filter_type",
      "filters",
      "include",
      "include_fields",
      "limit",
      "limit_linked_items",
      "offset",
      "order_by",
      "page",
      "search",
      "search_mode",
      "size"
    ],
    "queryArgs": [
      {
        "name": "count",
        "wire": "count"
      },
      {
        "name": "exclude_field",
        "wire": "exclude_fields"
      },
      {
        "name": "filter",
        "wire": "filters"
      },
      {
        "name": "filter_type",
        "wire": "filter_type"
      },
      {
        "name": "filter_{field}_{filter}",
        "wire": "filter__{field}__{filter}"
      },
      {
        "name": "include",
        "wire": "include"
      },
      {
        "name": "include_field",
        "wire": "include_fields"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "limit_linked_item",
        "wire": "limit_linked_items"
      },
      {
        "name": "offset",
        "wire": "offset"
      },
      {
        "name": "order_by",
        "wire": "order_by"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "search_mode",
        "wire": "search_mode"
      },
      {
        "name": "size",
        "wire": "size"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": {
      "field_options": {},
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "id": 1,
          "order": "x",
          "metadata": {
            "row_comment_count": 1,
            "row_comments_notification_mode": "all"
          },
          "field_1": "x",
          "field_2": "x",
          "field_3": "x",
          "field_4": "x",
          "field_5": "x",
          "field_6": 1,
          "field_7": true,
          "field_8": "2026-01-01",
          "field_9": "2026-01-01T00:00:00Z",
          "field_10": {
            "id": 1,
            "name": "x"
          },
          "field_11": "2026-01-01T00:00:00Z",
          "field_12": {
            "id": 1,
            "name": "x"
          },
          "field_13": 1,
          "field_14": [
            {
              "id": 1,
              "value": "x",
              "order": "x"
            }
          ],
          "field_15": [
            {
              "url": "x",
              "thumbnails": {},
              "visible_name": "x",
              "name": "x",
              "size": 1,
              "mime_type": "x",
              "is_image": true,
              "image_width": 1,
              "image_height": 1,
              "uploaded_at": "2026-01-01T00:00:00Z"
            }
          ],
          "field_16": {
            "id": 1,
            "value": "x",
            "color": "x"
          },
          "field_17": [
            {
              "id": 1,
              "value": "x",
              "color": "x"
            }
          ],
          "field_18": "x",
          "field_19": "x",
          "field_20": "x",
          "field_21": "x",
          "field_22": "x",
          "field_23": [
            {
              "id": 1,
              "name": "x"
            }
          ],
          "field_24": "x",
          "field_25": 1,
          "field_26": true,
          "field_27": "x",
          "field_28": "x",
          "field_29": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "public_view_auth",
    "accessor": "PublicViewAuth",
    "op": "create",
    "method": "POST",
    "path": "/api/database/views/{slug}/public/auth/",
    "args": [
      {
        "name": "view_id",
        "wire": "slug",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "access_token": "x"
    },
    "idField": "id"
  },
  {
    "entity": "public_view_info",
    "accessor": "PublicViewInfo",
    "op": "list",
    "method": "GET",
    "path": "/api/database/views/{slug}/public/info/",
    "args": [
      {
        "name": "view_id",
        "wire": "slug",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "fields": [
        {
          "id": 1,
          "table_id": 1,
          "name": "x",
          "order": 1,
          "type": "x",
          "primary": true,
          "read_only": true,
          "immutable_type": true,
          "immutable_properties": true,
          "description": "x",
          "database_id": 1,
          "workspace_id": 1,
          "db_index": true,
          "field_constraints": "x"
        }
      ],
      "view": {
        "id": "x",
        "table": {
          "id": 1,
          "database_id": 1
        },
        "name": "x",
        "order": 1,
        "type": "x",
        "sortings": [
          {
            "id": 1,
            "view": "x",
            "field": 1,
            "order": "ASC",
            "type": "x",
            "priority": 1
          }
        ],
        "group_bys": [
          {
            "id": 1,
            "view": "x",
            "field": 1,
            "order": "ASC",
            "width": 1,
            "type": "x",
            "priority": 1
          }
        ],
        "public": true,
        "slug": "x",
        "show_logo": true,
        "allow_public_export": true,
        "ownership_type": "x"
      }
    },
    "idField": "id"
  },
  {
    "entity": "related_field",
    "accessor": "RelatedField",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/database/fields/{field_id}/",
    "args": [
      {
        "name": "id",
        "wire": "field_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "related_fields": [
        {
          "id": 1,
          "table_id": 1,
          "name": "x",
          "order": 1,
          "type": "x",
          "primary": true,
          "read_only": true,
          "immutable_type": true,
          "immutable_properties": true,
          "description": "x",
          "database_id": 1,
          "workspace_id": 1,
          "db_index": true,
          "field_constraints": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "row_comment",
    "accessor": "RowComment",
    "op": "create",
    "method": "POST",
    "path": "/api/row_comments/{table_id}/{row_id}/",
    "args": [
      {
        "name": "row_id",
        "wire": "row_id",
        "value": "p1"
      },
      {
        "name": "table_id",
        "wire": "table_id",
        "value": "p2"
      }
    ],
    "select": {
      "view": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "view"
    ],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "user_id": 1,
      "first_name": "x",
      "table_id": 1,
      "row_id": 1,
      "message": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "edited": "x",
      "trashed": true
    },
    "idField": "id"
  },
  {
    "entity": "row_comment",
    "accessor": "RowComment",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/row_comments/{table_id}/comment/{comment_id}/",
    "args": [
      {
        "name": "comment_id",
        "wire": "comment_id",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "table_id",
        "value": "p2"
      }
    ],
    "select": {
      "view": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "view"
    ],
    "queryArgs": [
      {
        "name": "view",
        "wire": "view"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "user_id": 1,
      "first_name": "x",
      "table_id": 1,
      "row_id": 1,
      "message": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "edited": "x",
      "trashed": true
    },
    "idField": "id"
  },
  {
    "entity": "row_comment",
    "accessor": "RowComment",
    "op": "update",
    "method": "PATCH",
    "path": "/api/row_comments/{table_id}/comment/{comment_id}/",
    "args": [
      {
        "name": "comment_id",
        "wire": "comment_id",
        "value": "p1"
      },
      {
        "name": "id",
        "wire": "table_id",
        "value": "p2"
      }
    ],
    "select": {
      "view": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "view"
    ],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "user_id": 1,
      "first_name": "x",
      "table_id": 1,
      "row_id": 1,
      "message": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "edited": "x",
      "trashed": true
    },
    "idField": "id"
  },
  {
    "entity": "row_history",
    "accessor": "RowHistory",
    "op": "list",
    "method": "GET",
    "path": "/api/database/rows/table/{table_id}/{row_id}/history/",
    "args": [
      {
        "name": "row_id",
        "wire": "row_id",
        "value": "p1"
      },
      {
        "name": "table_id",
        "wire": "table_id",
        "value": "p2"
      }
    ],
    "select": {
      "limit": "v1",
      "offset": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "offset"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "offset",
        "wire": "offset"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "id": 1,
          "action_type": "x",
          "action_command_type": "DO",
          "user": {
            "id": 1,
            "name": "x"
          },
          "timestamp": "2026-01-01T00:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "secure_file_serve",
    "accessor": "SecureFileServe",
    "op": "load",
    "method": "GET",
    "path": "/api/files/{signed_data}",
    "args": [
      {
        "name": "signed_data",
        "wire": "signed_data",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/octet-stream"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "setting",
    "accessor": "Setting",
    "op": "load",
    "method": "GET",
    "path": "/api/settings/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "allow_new_signups": true,
      "allow_signups_via_workspace_invitations": true,
      "allow_reset_password": true,
      "allow_global_workspace_creation": true,
      "account_deletion_grace_delay": 1,
      "show_admin_signup_page": true,
      "track_workspace_usage": true,
      "show_baserow_help_request": true,
      "co_branding_logo": {
        "size": 1,
        "mime_type": "x",
        "is_image": true,
        "image_width": 1,
        "image_height": 1,
        "uploaded_at": "2026-01-01T00:00:00Z",
        "url": "x",
        "thumbnails": {},
        "name": "x",
        "original_name": "x"
      },
      "email_verification": "no_verification",
      "verify_import_signature": true,
      "allow_reporting_abuse": true,
      "inbound_email_enabled": true
    },
    "idField": "id"
  },
  {
    "entity": "setting",
    "accessor": "Setting",
    "op": "update",
    "method": "PATCH",
    "path": "/api/settings/update/",
    "action": "update",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "allow_new_signups": true,
      "allow_signups_via_workspace_invitations": true,
      "allow_reset_password": true,
      "allow_global_workspace_creation": true,
      "account_deletion_grace_delay": 1,
      "show_admin_signup_page": true,
      "track_workspace_usage": true,
      "show_baserow_help_request": true,
      "co_branding_logo": {
        "size": 1,
        "mime_type": "x",
        "is_image": true,
        "image_width": 1,
        "image_height": 1,
        "uploaded_at": "2026-01-01T00:00:00Z",
        "url": "x",
        "thumbnails": {},
        "name": "x",
        "original_name": "x"
      },
      "email_verification": "no_verification",
      "verify_import_signature": true,
      "allow_reporting_abuse": true,
      "inbound_email_enabled": true
    },
    "idField": "id"
  },
  {
    "entity": "snapshot",
    "accessor": "Snapshot",
    "op": "create",
    "method": "POST",
    "path": "/api/snapshots/application/{application_id}/",
    "args": [
      {
        "name": "application_id",
        "wire": "application_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 202,
    "sample": {
      "id": 1,
      "type": "x",
      "progress_percentage": 1,
      "state": "x",
      "human_readable_error": "x",
      "error_code": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "snapshot",
    "accessor": "Snapshot",
    "op": "load",
    "method": "GET",
    "path": "/api/snapshots/application/{application_id}/",
    "args": [
      {
        "name": "application_id",
        "wire": "application_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "name": "x",
        "snapshot_from_application": 1,
        "created_at": "2026-01-01T00:00:00Z",
        "created_by": {
          "username": "x"
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "snapshot",
    "accessor": "Snapshot",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/snapshots/{snapshot_id}/",
    "args": [
      {
        "name": "id",
        "wire": "snapshot_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "table",
    "accessor": "Table",
    "op": "create",
    "method": "POST",
    "path": "/api/database/webhooks/table/{table_id}/",
    "args": [
      {
        "name": "id",
        "wire": "table_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "events": {},
      "event_config": [
        {
          "event_type": "rows.created",
          "fields": [
            1
          ],
          "views": [
            1
          ]
        }
      ],
      "headers": {},
      "calls": [
        {
          "id": 1,
          "event_id": "x",
          "event_type": "x",
          "called_time": "2026-01-01T00:00:00Z",
          "called_url": "x",
          "request": "x",
          "response": "x",
          "response_status": 1,
          "error": "x"
        }
      ],
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "use_user_field_names": true,
      "url": "x",
      "request_method": "POST",
      "name": "x",
      "include_all_events": true,
      "failed_triggers": 1,
      "active": true
    },
    "idField": "id"
  },
  {
    "entity": "table",
    "accessor": "Table",
    "op": "load",
    "method": "GET",
    "path": "/api/database/tables/database/{database_id}/",
    "args": [
      {
        "name": "database_id",
        "wire": "database_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "name": "x",
        "order": 1,
        "database_id": 1,
        "data_sync": {
          "id": 1,
          "type": "x",
          "table_id": 1,
          "database_id": "x",
          "synced_properties": [
            {
              "field_id": 1,
              "key": "x",
              "unique_primary": true
            }
          ],
          "last_sync": "2026-01-01T00:00:00Z",
          "last_error": "x",
          "auto_add_new_properties": true,
          "delete_unmatched_rows": true,
          "two_way_sync": true
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "table",
    "accessor": "Table",
    "op": "update",
    "method": "PATCH",
    "path": "/api/database/tables/{table_id}/",
    "args": [
      {
        "name": "id",
        "wire": "table_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "order": 1,
      "database_id": 1,
      "data_sync": {
        "id": 1,
        "type": "x",
        "table_id": 1,
        "database_id": "x",
        "synced_properties": [
          {
            "field_id": 1,
            "key": "x",
            "unique_primary": true
          }
        ],
        "last_sync": "2026-01-01T00:00:00Z",
        "last_error": "x",
        "auto_add_new_properties": true,
        "delete_unmatched_rows": true,
        "two_way_sync": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "table_webhook",
    "accessor": "TableWebhook",
    "op": "load",
    "method": "GET",
    "path": "/api/database/webhooks/{webhook_id}/",
    "args": [
      {
        "name": "id",
        "wire": "webhook_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "events": {},
      "event_config": [
        {
          "event_type": "rows.created",
          "fields": [
            1
          ],
          "views": [
            1
          ]
        }
      ],
      "headers": {},
      "calls": [
        {
          "id": 1,
          "event_id": "x",
          "event_type": "x",
          "called_time": "2026-01-01T00:00:00Z",
          "called_url": "x",
          "request": "x",
          "response": "x",
          "response_status": 1,
          "error": "x"
        }
      ],
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "use_user_field_names": true,
      "url": "x",
      "request_method": "POST",
      "name": "x",
      "include_all_events": true,
      "failed_triggers": 1,
      "active": true
    },
    "idField": "id"
  },
  {
    "entity": "table_webhook",
    "accessor": "TableWebhook",
    "op": "update",
    "method": "PATCH",
    "path": "/api/database/webhooks/{webhook_id}/",
    "args": [
      {
        "name": "id",
        "wire": "webhook_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "events": {},
      "event_config": [
        {
          "event_type": "rows.created",
          "fields": [
            1
          ],
          "views": [
            1
          ]
        }
      ],
      "headers": {},
      "calls": [
        {
          "id": 1,
          "event_id": "x",
          "event_type": "x",
          "called_time": "2026-01-01T00:00:00Z",
          "called_url": "x",
          "request": "x",
          "response": "x",
          "response_status": 1,
          "error": "x"
        }
      ],
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "use_user_field_names": true,
      "url": "x",
      "request_method": "POST",
      "name": "x",
      "include_all_events": true,
      "failed_triggers": 1,
      "active": true
    },
    "idField": "id"
  },
  {
    "entity": "table_webhook_test_call",
    "accessor": "TableWebhookTestCall",
    "op": "create",
    "method": "POST",
    "path": "/api/database/webhooks/table/{table_id}/test-call/",
    "args": [
      {
        "name": "id",
        "wire": "table_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "request": "x",
      "response": "x",
      "status_code": 1,
      "is_unreachable": true
    },
    "idField": "id"
  },
  {
    "entity": "table_without_data_sync",
    "accessor": "TableWithoutDataSync",
    "op": "list",
    "method": "GET",
    "path": "/api/database/tables/all-tables/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": [
      {
        "id": 1,
        "name": "x",
        "order": 1,
        "database_id": 1
      }
    ],
    "idField": "id"
  },
  {
    "entity": "team",
    "accessor": "Team",
    "op": "create",
    "method": "POST",
    "path": "/api/teams/workspace/{workspace_id}/",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "workspace": 1,
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "default_role": "x",
      "subject_count": 1,
      "subject_sample": [
        {
          "subject_id": 1,
          "subject_type": "auth.User",
          "subject_label": "x",
          "team_subject_id": 1
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "team",
    "accessor": "Team",
    "op": "load",
    "method": "GET",
    "path": "/api/teams/{team_id}/",
    "args": [
      {
        "name": "id",
        "wire": "team_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "workspace": 1,
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "default_role": "x",
      "subject_count": 1,
      "subject_sample": [
        {
          "subject_id": 1,
          "subject_type": "auth.User",
          "subject_label": "x",
          "team_subject_id": 1
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "team",
    "accessor": "Team",
    "op": "load",
    "method": "GET",
    "path": "/api/teams/workspace/{workspace_id}/",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {
      "search": "v1",
      "sort": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "search",
      "sorts"
    ],
    "queryArgs": [
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "sort",
        "wire": "sorts"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "name": "x",
        "workspace": 1,
        "created_on": "2026-01-01T00:00:00Z",
        "updated_on": "2026-01-01T00:00:00Z",
        "default_role": "x",
        "subject_count": 1,
        "subject_sample": [
          {
            "subject_id": 1,
            "subject_type": "auth.User",
            "subject_label": "x",
            "team_subject_id": 1
          }
        ]
      }
    ],
    "idField": "id"
  },
  {
    "entity": "team",
    "accessor": "Team",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/teams/{team_id}/subjects/{subject_id}/",
    "args": [
      {
        "name": "id",
        "wire": "team_id",
        "value": "p1"
      },
      {
        "name": "subject_id",
        "wire": "subject_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "team",
    "accessor": "Team",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/teams/{team_id}/",
    "args": [
      {
        "name": "id",
        "wire": "team_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "team",
    "accessor": "Team",
    "op": "update",
    "method": "PUT",
    "path": "/api/teams/{team_id}/",
    "args": [
      {
        "name": "id",
        "wire": "team_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "workspace": 1,
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "default_role": "x",
      "subject_count": 1,
      "subject_sample": [
        {
          "subject_id": 1,
          "subject_type": "auth.User",
          "subject_label": "x",
          "team_subject_id": 1
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "team_subject",
    "accessor": "TeamSubject",
    "op": "create",
    "method": "POST",
    "path": "/api/teams/{team_id}/subjects/",
    "args": [
      {
        "name": "id",
        "wire": "team_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "subject_id": 1,
      "subject_type": "x",
      "team": 1
    },
    "idField": "id"
  },
  {
    "entity": "team_subject",
    "accessor": "TeamSubject",
    "op": "list",
    "method": "GET",
    "path": "/api/teams/{team_id}/subjects/",
    "args": [
      {
        "name": "id",
        "wire": "team_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "subject_id": 1,
        "subject_type": "x",
        "team": 1
      }
    ],
    "idField": "id"
  },
  {
    "entity": "team_subject",
    "accessor": "TeamSubject",
    "op": "load",
    "method": "GET",
    "path": "/api/teams/{team_id}/subjects/{subject_id}/",
    "args": [
      {
        "name": "id",
        "wire": "subject_id",
        "value": "p1"
      },
      {
        "name": "team_id",
        "wire": "team_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "subject_id": 1,
      "subject_type": "x",
      "team": 1
    },
    "idField": "id"
  },
  {
    "entity": "template",
    "accessor": "Template",
    "op": "create",
    "method": "POST",
    "path": "/api/templates/install/{workspace_id}/{template_id}/async/",
    "args": [
      {
        "name": "install_id",
        "wire": "workspace_id",
        "value": "p1"
      },
      {
        "name": "template_id",
        "wire": "template_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 202,
    "sample": {
      "id": 1,
      "type": "x",
      "progress_percentage": 1,
      "state": "x",
      "human_readable_error": "x",
      "error_code": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "workspace": {
        "id": 1,
        "name": "x",
        "generative_ai_models_enabled": "x"
      },
      "template": {
        "id": 1,
        "name": "x",
        "slug": "x",
        "icon": "x",
        "keywords": "x",
        "workspace_id": 1,
        "is_default": "x",
        "open_application": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "template",
    "accessor": "Template",
    "op": "list",
    "method": "GET",
    "path": "/api/templates/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": [
      {
        "id": 1,
        "name": "x",
        "templates": [
          {
            "id": 1,
            "name": "x",
            "slug": "x",
            "icon": "x",
            "keywords": "x",
            "workspace_id": 1,
            "is_default": "x",
            "open_application": 1
          }
        ]
      }
    ],
    "idField": "id"
  },
  {
    "entity": "token",
    "accessor": "Token",
    "op": "create",
    "method": "POST",
    "path": "/api/database/tokens/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "workspace": 1,
      "key": "x",
      "permissions": {
        "create": true,
        "read": true,
        "update": true,
        "delete": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "token",
    "accessor": "Token",
    "op": "list",
    "method": "GET",
    "path": "/api/database/tokens/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "name": "x",
        "workspace": 1,
        "key": "x",
        "permissions": {
          "create": true,
          "read": true,
          "update": true,
          "delete": true
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "token",
    "accessor": "Token",
    "op": "load",
    "method": "GET",
    "path": "/api/database/tokens/{token_id}/",
    "args": [
      {
        "name": "id",
        "wire": "token_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "workspace": 1,
      "key": "x",
      "permissions": {
        "create": true,
        "read": true,
        "update": true,
        "delete": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "token",
    "accessor": "Token",
    "op": "update",
    "method": "PATCH",
    "path": "/api/database/tokens/{token_id}/",
    "args": [
      {
        "name": "id",
        "wire": "token_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "workspace": 1,
      "key": "x",
      "permissions": {
        "create": true,
        "read": true,
        "update": true,
        "delete": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "trash",
    "accessor": "Trash",
    "op": "list",
    "method": "GET",
    "path": "/api/trash/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "workspaces": [
        {
          "id": 1,
          "trashed": true,
          "name": "x",
          "applications": [
            {
              "id": 1,
              "name": "x",
              "trashed": true,
              "type": "x"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "trash",
    "accessor": "Trash",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/trash/workspace/{workspace_id}/",
    "args": [
      {
        "name": "workspace_id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {
      "application_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "query": [
      "application_id"
    ],
    "queryArgs": [
      {
        "name": "application_id",
        "wire": "application_id"
      }
    ],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "trash",
    "accessor": "Trash",
    "op": "update",
    "method": "PATCH",
    "path": "/api/trash/restore/",
    "action": "restore",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "two_factor_auth_type_two_factor_auth",
    "accessor": "TwoFactorAuthTypeTwoFactorAuth",
    "op": "create",
    "method": "POST",
    "path": "/api/two-factor-auth/configuration/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "type": "x",
      "is_enabled": true,
      "provisioning_url": "x",
      "provisioning_qr_code": "x",
      "backup_codes": [
        "x"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "two_factor_auth_type_two_factor_auth",
    "accessor": "TwoFactorAuthTypeTwoFactorAuth",
    "op": "load",
    "method": "GET",
    "path": "/api/two-factor-auth/configuration/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "type": "x",
      "is_enabled": true,
      "provisioning_url": "x",
      "provisioning_qr_code": "x",
      "backup_codes": [
        "x"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "type",
    "accessor": "Type",
    "op": "create",
    "method": "POST",
    "path": "/api/database/formula/{table_id}/type/",
    "args": [
      {
        "name": "formula_id",
        "wire": "table_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "date_force_timezone": "x",
      "date_include_time": true,
      "number_suffix": "x",
      "formula_type": "invalid",
      "date_show_tzinfo": true,
      "number_decimal_places": 0,
      "date_time_format": "24",
      "nullable": true,
      "formula": "x",
      "date_format": "EU",
      "duration_format": "h:mm",
      "number_separator": "SPACE_COMMA",
      "array_formula_type": "invalid",
      "number_prefix": "x",
      "error": "x"
    },
    "idField": "id"
  },
  {
    "entity": "unique_row_value",
    "accessor": "UniqueRowValue",
    "op": "list",
    "method": "GET",
    "path": "/api/database/fields/{field_id}/unique_row_values/",
    "args": [
      {
        "name": "field_id",
        "wire": "field_id",
        "value": "p1"
      }
    ],
    "select": {
      "limit": "v1",
      "split_comma_separated": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "limit",
      "split_comma_separated"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "split_comma_separated",
        "wire": "split_comma_separated"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "values": [
        "x"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "update_field_permission",
    "accessor": "UpdateFieldPermission",
    "op": "load",
    "method": "GET",
    "path": "/api/field-permissions/{field_id}/",
    "args": [
      {
        "name": "id",
        "wire": "field_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "role": "ADMIN",
      "allow_in_forms": true,
      "subjects": [
        {
          "subject_id": 1,
          "subject_type": "auth.User"
        }
      ],
      "field_id": 1,
      "can_write_values": true
    },
    "idField": "id"
  },
  {
    "entity": "update_field_permission",
    "accessor": "UpdateFieldPermission",
    "op": "update",
    "method": "PATCH",
    "path": "/api/field-permissions/{field_id}/",
    "args": [
      {
        "name": "id",
        "wire": "field_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "role": "ADMIN",
      "allow_in_forms": true,
      "subjects": [
        {
          "subject_id": 1,
          "subject_type": "auth.User"
        }
      ],
      "field_id": 1,
      "can_write_values": true
    },
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "create",
    "method": "POST",
    "path": "/api/user/change-email/",
    "action": "change_email",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "create",
    "method": "POST",
    "path": "/api/user/change-password/",
    "action": "change_password",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "create",
    "method": "POST",
    "path": "/api/user/reset-password/",
    "action": "reset_password",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "create",
    "method": "POST",
    "path": "/api/user/schedule-account-deletion/",
    "action": "schedule_account_deletion",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "create",
    "method": "POST",
    "path": "/api/user/send-change-email-confirmation/",
    "action": "send_change_email_confirmation",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "create",
    "method": "POST",
    "path": "/api/user/send-reset-password-email/",
    "action": "send_reset_password_email",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "create",
    "method": "POST",
    "path": "/api/user/send-verify-email/",
    "action": "send_verify_email",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "create",
    "method": "POST",
    "path": "/api/user/token-auth/",
    "action": "token_auth",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "user": {
        "first_name": "x",
        "username": "x",
        "language": "x",
        "preferences": {
          "all_workspaces_sort_by": "created",
          "all_workspaces_view_mode": "expanded",
          "recently_viewed_view_mode": "table",
          "workspace_recently_viewed_view_mode": "table"
        }
      },
      "token": "x",
      "access_token": "x",
      "refresh_token": "x"
    },
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "create",
    "method": "POST",
    "path": "/api/user/token-blacklist/",
    "action": "token_blacklist",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "create",
    "method": "POST",
    "path": "/api/user/token-refresh/",
    "action": "token_refresh",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "user": {
        "first_name": "x",
        "username": "x",
        "language": "x",
        "preferences": {
          "all_workspaces_sort_by": "created",
          "all_workspaces_view_mode": "expanded",
          "recently_viewed_view_mode": "table",
          "workspace_recently_viewed_view_mode": "table"
        }
      },
      "token": "x",
      "access_token": "x"
    },
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "create",
    "method": "POST",
    "path": "/api/user/token-verify/",
    "action": "token_verify",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "user": {
        "first_name": "x",
        "username": "x",
        "language": "x",
        "preferences": {
          "all_workspaces_sort_by": "created",
          "all_workspaces_view_mode": "expanded",
          "recently_viewed_view_mode": "table",
          "workspace_recently_viewed_view_mode": "table"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "create",
    "method": "POST",
    "path": "/api/user/verify-email/",
    "action": "verify_email",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "user": {
        "first_name": "x",
        "username": "x",
        "language": "x",
        "preferences": {
          "all_workspaces_sort_by": "created",
          "all_workspaces_view_mode": "expanded",
          "recently_viewed_view_mode": "table",
          "workspace_recently_viewed_view_mode": "table"
        }
      },
      "token": "x",
      "access_token": "x",
      "refresh_token": "x"
    },
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "list",
    "method": "GET",
    "path": "/api/admin/users/",
    "args": [],
    "select": {
      "ids": "v1",
      "page": "v1",
      "search": "v1",
      "size": "v1",
      "sort": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "ids",
      "page",
      "search",
      "size",
      "sorts"
    ],
    "queryArgs": [
      {
        "name": "ids",
        "wire": "ids"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "search",
        "wire": "search"
      },
      {
        "name": "size",
        "wire": "size"
      },
      {
        "name": "sort",
        "wire": "sorts"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "count": 1,
      "next": "x",
      "previous": "x",
      "results": [
        {
          "id": 1,
          "username": "x",
          "name": "x",
          "workspaces": [
            {
              "id": 1,
              "name": "x",
              "permissions": "x"
            }
          ],
          "last_login": "2026-01-01T00:00:00Z",
          "date_joined": "2026-01-01T00:00:00Z",
          "is_active": true,
          "is_staff": true,
          "two_factor_auth": {
            "type": "x",
            "is_enabled": true
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "list",
    "method": "GET",
    "path": "/api/user/dashboard/",
    "action": "dashboard",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "workspace_invitations": [
        {
          "id": 1,
          "invited_by": "x",
          "workspace": "x",
          "workspace_id": 1,
          "email": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "email_exists": true
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "update",
    "method": "PATCH",
    "path": "/api/user/redo/",
    "action": "redo",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "actions": [
        {
          "action_type": "x",
          "action_scope": "x"
        }
      ],
      "result_code": "x"
    },
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "update",
    "method": "PATCH",
    "path": "/api/user/undo/",
    "action": "undo",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "actions": [
        {
          "action_type": "x",
          "action_scope": "x"
        }
      ],
      "result_code": "x"
    },
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "update",
    "method": "PATCH",
    "path": "/api/admin/users/{user_id}/",
    "args": [
      {
        "name": "id",
        "wire": "user_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "username": "x",
      "name": "x",
      "workspaces": [
        {
          "id": 1,
          "name": "x",
          "permissions": "x"
        }
      ],
      "last_login": "2026-01-01T00:00:00Z",
      "date_joined": "2026-01-01T00:00:00Z",
      "is_active": true,
      "is_staff": true,
      "two_factor_auth": {
        "type": "x",
        "is_enabled": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "update",
    "method": "PATCH",
    "path": "/api/user/account/",
    "action": "account",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "first_name": "x",
      "language": "x",
      "email_notification_frequency": "instant",
      "completed_onboarding": true,
      "completed_guided_tours": [
        "x"
      ]
    },
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "update",
    "method": "PATCH",
    "path": "/api/user/preferences/",
    "action": "preference",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "all_workspaces_sort_by": "created",
      "all_workspaces_view_mode": "expanded",
      "recently_viewed_view_mode": "table",
      "workspace_recently_viewed_view_mode": "table"
    },
    "idField": "id"
  },
  {
    "entity": "user_file",
    "accessor": "UserFile",
    "op": "create",
    "method": "POST",
    "path": "/api/database/views/form/{slug}/upload-file/",
    "args": [
      {
        "name": "slug",
        "wire": "slug",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "size": 1,
      "mime_type": "x",
      "is_image": true,
      "image_width": 1,
      "image_height": 1,
      "uploaded_at": "2026-01-01T00:00:00Z",
      "url": "x",
      "thumbnails": {},
      "name": "x",
      "original_name": "x"
    },
    "idField": "id"
  },
  {
    "entity": "user_file",
    "accessor": "UserFile",
    "op": "create",
    "method": "POST",
    "path": "/api/user-files/upload-file/",
    "action": "upload_file",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "mime_type": "x",
      "is_image": true,
      "image_width": 1,
      "image_height": 1,
      "uploaded_at": "2026-01-01T00:00:00Z",
      "url": "x",
      "thumbnails": {},
      "name": "x",
      "original_name": "x"
    },
    "idField": "id"
  },
  {
    "entity": "user_file",
    "accessor": "UserFile",
    "op": "create",
    "method": "POST",
    "path": "/api/user-files/upload-via-url/",
    "action": "upload_via_url",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "size": 1,
      "mime_type": "x",
      "is_image": true,
      "image_width": 1,
      "image_height": 1,
      "uploaded_at": "2026-01-01T00:00:00Z",
      "url": "x",
      "thumbnails": {},
      "name": "x",
      "original_name": "x"
    },
    "idField": "id"
  },
  {
    "entity": "user_source",
    "accessor": "UserSource",
    "op": "create",
    "method": "POST",
    "path": "/api/application/{application_id}/user-sources/",
    "args": [
      {
        "name": "application_id",
        "wire": "application_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "uid": "x",
      "application_id": 1,
      "integration_id": 1,
      "type": "x",
      "name": "x",
      "order": "x",
      "auth_providers": [
        {
          "type": "x",
          "id": 1,
          "domain": "x",
          "password_field_id": 1
        }
      ],
      "user_count": 1,
      "user_count_updated_at": "2026-01-01T00:00:00Z",
      "table_id": 1,
      "email_field_id": 1,
      "name_field_id": 1,
      "role_field_id": 1
    },
    "idField": "id"
  },
  {
    "entity": "user_source",
    "accessor": "UserSource",
    "op": "create",
    "method": "POST",
    "path": "/api/user-source/{user_source_id}/force-token-auth",
    "action": "force_token_auth",
    "args": [
      {
        "name": "id",
        "wire": "user_source_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "access_token": "x",
      "refresh_token": "x"
    },
    "idField": "id"
  },
  {
    "entity": "user_source",
    "accessor": "UserSource",
    "op": "create",
    "method": "POST",
    "path": "/api/user-source/{user_source_id}/token-auth",
    "action": "token_auth",
    "args": [
      {
        "name": "id",
        "wire": "user_source_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "access_token": "x",
      "refresh_token": "x"
    },
    "idField": "id"
  },
  {
    "entity": "user_source",
    "accessor": "UserSource",
    "op": "list",
    "method": "GET",
    "path": "/api/application/{application_id}/user-sources/",
    "args": [
      {
        "name": "application_id",
        "wire": "application_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": [
      {
        "id": 1,
        "uid": "x",
        "application_id": 1,
        "integration_id": 1,
        "type": "x",
        "name": "x",
        "order": "x",
        "auth_providers": [
          {
            "type": "x",
            "id": 1,
            "domain": "x",
            "password_field_id": 1
          }
        ],
        "user_count": 1,
        "user_count_updated_at": "2026-01-01T00:00:00Z",
        "table_id": 1,
        "email_field_id": 1,
        "name_field_id": 1,
        "role_field_id": 1
      }
    ],
    "idField": "id"
  },
  {
    "entity": "user_source",
    "accessor": "UserSource",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/user-source/{user_source_id}/",
    "args": [
      {
        "name": "id",
        "wire": "user_source_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "user_source",
    "accessor": "UserSource",
    "op": "update",
    "method": "PATCH",
    "path": "/api/user-source/{user_source_id}/",
    "args": [
      {
        "name": "id",
        "wire": "user_source_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "uid": "x",
      "application_id": 1,
      "integration_id": 1,
      "type": "x",
      "name": "x",
      "order": "x",
      "auth_providers": [
        {
          "type": "x",
          "id": 1,
          "domain": "x",
          "password_field_id": 1
        }
      ],
      "user_count": 1,
      "user_count_updated_at": "2026-01-01T00:00:00Z",
      "table_id": 1,
      "email_field_id": 1,
      "name_field_id": 1,
      "role_field_id": 1
    },
    "idField": "id"
  },
  {
    "entity": "user_source_user_source",
    "accessor": "UserSourceUserSource",
    "op": "update",
    "method": "PATCH",
    "path": "/api/user-source/{user_source_id}/move/",
    "action": "move",
    "args": [
      {
        "name": "id",
        "wire": "user_source_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "uid": "x",
      "application_id": 1,
      "integration_id": 1,
      "type": "x",
      "name": "x",
      "order": "x",
      "auth_providers": [
        {
          "type": "x",
          "id": 1,
          "domain": "x",
          "password_field_id": 1
        }
      ],
      "user_count": 1,
      "user_count_updated_at": "2026-01-01T00:00:00Z",
      "table_id": 1,
      "email_field_id": 1,
      "name_field_id": 1,
      "role_field_id": 1
    },
    "idField": "id"
  },
  {
    "entity": "user_source_user_source_role",
    "accessor": "UserSourceUserSourceRole",
    "op": "load",
    "method": "GET",
    "path": "/api/application/{application_id}/user-sources/roles/",
    "args": [
      {
        "name": "application_id",
        "wire": "application_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "roles": [
        "x"
      ],
      "table_id": 1,
      "email_field_id": 1,
      "name_field_id": 1,
      "role_field_id": 1
    },
    "idField": "id"
  },
  {
    "entity": "user_workspace_invitation",
    "accessor": "UserWorkspaceInvitation",
    "op": "load",
    "method": "GET",
    "path": "/api/workspaces/invitations/token/{token}/",
    "args": [
      {
        "name": "token",
        "wire": "token",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "id": 1,
      "invited_by": "x",
      "workspace": "x",
      "workspace_id": 1,
      "email": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "email_exists": true
    },
    "idField": "id"
  },
  {
    "entity": "users_per_user_source",
    "accessor": "UsersPerUserSource",
    "op": "load",
    "method": "GET",
    "path": "/api/application/{application_id}/list-user-source-users/",
    "args": [
      {
        "name": "application_id",
        "wire": "application_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "users_per_user_sources": {}
    },
    "idField": "id"
  },
  {
    "entity": "view",
    "accessor": "View",
    "op": "load",
    "method": "GET",
    "path": "/api/database/views/{view_id}/",
    "args": [
      {
        "name": "id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {
      "include": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "include"
    ],
    "queryArgs": [
      {
        "name": "include",
        "wire": "include"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "table_id": 1,
      "name": "x",
      "order": 1,
      "type": "x",
      "table": {
        "id": 1,
        "name": "x",
        "order": 1,
        "database_id": 1
      },
      "filter_type": "AND",
      "filters": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "type": "x",
          "value": "x",
          "preload_values": {},
          "group": 1
        }
      ],
      "filter_groups": [
        {
          "id": 1,
          "filter_type": "AND",
          "view": 1,
          "parent_group": 1
        }
      ],
      "sortings": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "order": "ASC",
          "type": "x",
          "priority": 1
        }
      ],
      "group_bys": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "order": "ASC",
          "width": 1,
          "type": "x",
          "priority": 1
        }
      ],
      "decorations": [
        {
          "id": 1,
          "view": 1,
          "type": "x",
          "value_provider_type": "x",
          "order": 1
        }
      ],
      "default_row_values": [
        {
          "id": 1,
          "field": 1,
          "enabled": true,
          "field_type": "x",
          "function": "x"
        }
      ],
      "filters_disabled": true,
      "public_view_has_password": true,
      "show_logo": true,
      "allow_public_export": true,
      "ownership_type": "x",
      "owned_by_id": 1,
      "row_identifier_type": "id",
      "row_height_size": "small",
      "frozen_column_count": 1,
      "group_by_layout": "section",
      "public": true,
      "slug": "x"
    },
    "idField": "id"
  },
  {
    "entity": "view",
    "accessor": "View",
    "op": "update",
    "method": "PATCH",
    "path": "/api/database/view/{view_id}/premium",
    "action": "premium",
    "args": [
      {
        "name": "id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "table_id": 1,
      "name": "x",
      "order": 1,
      "type": "x",
      "table": {
        "id": 1,
        "name": "x",
        "order": 1,
        "database_id": 1
      },
      "filter_type": "AND",
      "filters": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "type": "x",
          "value": "x",
          "preload_values": {},
          "group": 1
        }
      ],
      "filter_groups": [
        {
          "id": 1,
          "filter_type": "AND",
          "view": 1,
          "parent_group": 1
        }
      ],
      "sortings": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "order": "ASC",
          "type": "x",
          "priority": 1
        }
      ],
      "group_bys": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "order": "ASC",
          "width": 1,
          "type": "x",
          "priority": 1
        }
      ],
      "decorations": [
        {
          "id": 1,
          "view": 1,
          "type": "x",
          "value_provider_type": "x",
          "order": 1
        }
      ],
      "default_row_values": [
        {
          "id": 1,
          "field": 1,
          "enabled": true,
          "field_type": "x",
          "function": "x"
        }
      ],
      "filters_disabled": true,
      "public_view_has_password": true,
      "show_logo": true,
      "allow_public_export": true,
      "ownership_type": "x",
      "owned_by_id": 1
    },
    "idField": "id"
  },
  {
    "entity": "view",
    "accessor": "View",
    "op": "update",
    "method": "PATCH",
    "path": "/api/database/views/{view_id}/",
    "args": [
      {
        "name": "id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {
      "include": "v1"
    },
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "include"
    ],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "table_id": 1,
      "name": "x",
      "order": 1,
      "type": "x",
      "table": {
        "id": 1,
        "name": "x",
        "order": 1,
        "database_id": 1
      },
      "filter_type": "AND",
      "filters": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "type": "x",
          "value": "x",
          "preload_values": {},
          "group": 1
        }
      ],
      "filter_groups": [
        {
          "id": 1,
          "filter_type": "AND",
          "view": 1,
          "parent_group": 1
        }
      ],
      "sortings": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "order": "ASC",
          "type": "x",
          "priority": 1
        }
      ],
      "group_bys": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "order": "ASC",
          "width": 1,
          "type": "x",
          "priority": 1
        }
      ],
      "decorations": [
        {
          "id": 1,
          "view": 1,
          "type": "x",
          "value_provider_type": "x",
          "order": 1
        }
      ],
      "default_row_values": [
        {
          "id": 1,
          "field": 1,
          "enabled": true,
          "field_type": "x",
          "function": "x"
        }
      ],
      "filters_disabled": true,
      "public_view_has_password": true,
      "show_logo": true,
      "allow_public_export": true,
      "ownership_type": "x",
      "owned_by_id": 1,
      "row_identifier_type": "id",
      "row_height_size": "small",
      "frozen_column_count": 1,
      "group_by_layout": "section",
      "public": true,
      "slug": "x"
    },
    "idField": "id"
  },
  {
    "entity": "view_default_value",
    "accessor": "ViewDefaultValue",
    "op": "update",
    "method": "PATCH",
    "path": "/api/database/views/{view_id}/default-values/",
    "args": [
      {
        "name": "id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {
      "view_default_values": "v1"
    },
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "field": 1,
        "enabled": true,
        "field_type": "x",
        "function": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "view_field_option",
    "accessor": "ViewFieldOption",
    "op": "load",
    "method": "GET",
    "path": "/api/database/views/{view_id}/field-options/",
    "args": [
      {
        "name": "id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "field_options": {}
    },
    "idField": "id"
  },
  {
    "entity": "view_field_option",
    "accessor": "ViewFieldOption",
    "op": "update",
    "method": "PATCH",
    "path": "/api/database/views/{view_id}/field-options/",
    "args": [
      {
        "name": "id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "field_options": {}
    },
    "idField": "id"
  },
  {
    "entity": "view_filter",
    "accessor": "ViewFilter",
    "op": "create",
    "method": "POST",
    "path": "/api/database/views/{view_id}/filters/",
    "args": [
      {
        "name": "id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "view": 1,
      "field": 1,
      "type": "x",
      "value": "x",
      "preload_values": {},
      "group": 1
    },
    "idField": "id"
  },
  {
    "entity": "view_filter",
    "accessor": "ViewFilter",
    "op": "list",
    "method": "GET",
    "path": "/api/database/views/{view_id}/filters/",
    "args": [
      {
        "name": "id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "view": 1,
        "field": 1,
        "type": "x",
        "value": "x",
        "preload_values": {},
        "group": 1
      }
    ],
    "idField": "id"
  },
  {
    "entity": "view_filter",
    "accessor": "ViewFilter",
    "op": "load",
    "method": "GET",
    "path": "/api/database/views/filter/{view_filter_id}/",
    "args": [
      {
        "name": "id",
        "wire": "view_filter_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "view": 1,
      "field": 1,
      "type": "x",
      "value": "x",
      "preload_values": {},
      "group": 1
    },
    "idField": "id"
  },
  {
    "entity": "view_filter",
    "accessor": "ViewFilter",
    "op": "update",
    "method": "PATCH",
    "path": "/api/database/views/filter/{view_filter_id}/",
    "args": [
      {
        "name": "id",
        "wire": "view_filter_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "view": 1,
      "field": 1,
      "type": "x",
      "value": "x",
      "preload_values": {},
      "group": 1
    },
    "idField": "id"
  },
  {
    "entity": "view_filter_group",
    "accessor": "ViewFilterGroup",
    "op": "create",
    "method": "POST",
    "path": "/api/database/views/{view_id}/filter-groups/",
    "args": [
      {
        "name": "id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "filter_type": "AND",
      "view": 1,
      "parent_group": 1
    },
    "idField": "id"
  },
  {
    "entity": "view_filter_group",
    "accessor": "ViewFilterGroup",
    "op": "load",
    "method": "GET",
    "path": "/api/database/views/filter-group/{view_filter_group_id}/",
    "args": [
      {
        "name": "id",
        "wire": "view_filter_group_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "filter_type": "AND",
      "view": 1,
      "parent_group": 1
    },
    "idField": "id"
  },
  {
    "entity": "view_filter_group",
    "accessor": "ViewFilterGroup",
    "op": "update",
    "method": "PATCH",
    "path": "/api/database/views/filter-group/{view_filter_group_id}/",
    "args": [
      {
        "name": "id",
        "wire": "view_filter_group_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "filter_type": "AND",
      "view": 1,
      "parent_group": 1
    },
    "idField": "id"
  },
  {
    "entity": "view_group_by",
    "accessor": "ViewGroupBy",
    "op": "create",
    "method": "POST",
    "path": "/api/database/views/{view_id}/group_bys/",
    "args": [
      {
        "name": "id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "view": 1,
      "field": 1,
      "order": "ASC",
      "width": 1,
      "type": "x",
      "priority": 1
    },
    "idField": "id"
  },
  {
    "entity": "view_group_by",
    "accessor": "ViewGroupBy",
    "op": "list",
    "method": "GET",
    "path": "/api/database/views/{view_id}/group_bys/",
    "args": [
      {
        "name": "id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "view": 1,
        "field": 1,
        "order": "ASC",
        "width": 1,
        "type": "x",
        "priority": 1
      }
    ],
    "idField": "id"
  },
  {
    "entity": "view_group_by",
    "accessor": "ViewGroupBy",
    "op": "load",
    "method": "GET",
    "path": "/api/database/views/group_by/{view_group_by_id}/",
    "args": [
      {
        "name": "id",
        "wire": "view_group_by_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "view": 1,
      "field": 1,
      "order": "ASC",
      "width": 1,
      "type": "x",
      "priority": 1
    },
    "idField": "id"
  },
  {
    "entity": "view_group_by",
    "accessor": "ViewGroupBy",
    "op": "update",
    "method": "PATCH",
    "path": "/api/database/views/group_by/{view_group_by_id}/",
    "args": [
      {
        "name": "id",
        "wire": "view_group_by_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "view": 1,
      "field": 1,
      "order": "ASC",
      "width": 1,
      "type": "x",
      "priority": 1
    },
    "idField": "id"
  },
  {
    "entity": "view_sort",
    "accessor": "ViewSort",
    "op": "create",
    "method": "POST",
    "path": "/api/database/views/{view_id}/sortings/",
    "action": "sortings",
    "args": [
      {
        "name": "id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "view": 1,
      "field": 1,
      "order": "ASC",
      "type": "x",
      "priority": 1
    },
    "idField": "id"
  },
  {
    "entity": "view_sort",
    "accessor": "ViewSort",
    "op": "list",
    "method": "GET",
    "path": "/api/database/views/{view_id}/sortings/",
    "action": "sortings",
    "args": [
      {
        "name": "id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "view": 1,
        "field": 1,
        "order": "ASC",
        "type": "x",
        "priority": 1
      }
    ],
    "idField": "id"
  },
  {
    "entity": "view_sort",
    "accessor": "ViewSort",
    "op": "load",
    "method": "GET",
    "path": "/api/database/views/sort/{view_sort_id}/",
    "args": [
      {
        "name": "id",
        "wire": "view_sort_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "view": 1,
      "field": 1,
      "order": "ASC",
      "type": "x",
      "priority": 1
    },
    "idField": "id"
  },
  {
    "entity": "view_sort",
    "accessor": "ViewSort",
    "op": "update",
    "method": "PATCH",
    "path": "/api/database/views/sort/{view_sort_id}/",
    "args": [
      {
        "name": "id",
        "wire": "view_sort_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "view": 1,
      "field": 1,
      "order": "ASC",
      "type": "x",
      "priority": 1
    },
    "idField": "id"
  },
  {
    "entity": "view_view",
    "accessor": "ViewView",
    "op": "create",
    "method": "POST",
    "path": "/api/database/views/calendar/{view_id}/ical_slug_rotate/",
    "args": [
      {
        "name": "calendar_id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "table_id": 1,
      "name": "x",
      "order": 1,
      "type": "x",
      "table": {
        "id": 1,
        "name": "x",
        "order": 1,
        "database_id": 1
      },
      "filter_type": "AND",
      "filters": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "type": "x",
          "value": "x",
          "preload_values": {},
          "group": 1
        }
      ],
      "filter_groups": [
        {
          "id": 1,
          "filter_type": "AND",
          "view": 1,
          "parent_group": 1
        }
      ],
      "sortings": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "order": "ASC",
          "type": "x",
          "priority": 1
        }
      ],
      "group_bys": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "order": "ASC",
          "width": 1,
          "type": "x",
          "priority": 1
        }
      ],
      "decorations": [
        {
          "id": 1,
          "view": 1,
          "type": "x",
          "value_provider_type": "x",
          "order": 1
        }
      ],
      "default_row_values": [
        {
          "id": 1,
          "field": 1,
          "enabled": true,
          "field_type": "x",
          "function": "x"
        }
      ],
      "filters_disabled": true,
      "public_view_has_password": true,
      "show_logo": true,
      "allow_public_export": true,
      "ownership_type": "x",
      "owned_by_id": 1,
      "row_identifier_type": "id",
      "row_height_size": "small",
      "frozen_column_count": 1,
      "group_by_layout": "section",
      "public": true,
      "slug": "x"
    },
    "idField": "id"
  },
  {
    "entity": "view_view",
    "accessor": "ViewView",
    "op": "create",
    "method": "POST",
    "path": "/api/database/views/{view_id}/copy-configuration/",
    "action": "copy-configuration",
    "args": [
      {
        "name": "id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "table_id": 1,
      "name": "x",
      "order": 1,
      "type": "x",
      "table": {
        "id": 1,
        "name": "x",
        "order": 1,
        "database_id": 1
      },
      "filter_type": "AND",
      "filters": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "type": "x",
          "value": "x",
          "preload_values": {},
          "group": 1
        }
      ],
      "filter_groups": [
        {
          "id": 1,
          "filter_type": "AND",
          "view": 1,
          "parent_group": 1
        }
      ],
      "sortings": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "order": "ASC",
          "type": "x",
          "priority": 1
        }
      ],
      "group_bys": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "order": "ASC",
          "width": 1,
          "type": "x",
          "priority": 1
        }
      ],
      "decorations": [
        {
          "id": 1,
          "view": 1,
          "type": "x",
          "value_provider_type": "x",
          "order": 1
        }
      ],
      "default_row_values": [
        {
          "id": 1,
          "field": 1,
          "enabled": true,
          "field_type": "x",
          "function": "x"
        }
      ],
      "filters_disabled": true,
      "public_view_has_password": true,
      "show_logo": true,
      "allow_public_export": true,
      "ownership_type": "x",
      "owned_by_id": 1,
      "row_identifier_type": "id",
      "row_height_size": "small",
      "frozen_column_count": 1,
      "group_by_layout": "section",
      "public": true,
      "slug": "x"
    },
    "idField": "id"
  },
  {
    "entity": "view_view",
    "accessor": "ViewView",
    "op": "create",
    "method": "POST",
    "path": "/api/database/views/{view_id}/duplicate/",
    "action": "duplicate",
    "args": [
      {
        "name": "id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "table_id": 1,
      "name": "x",
      "order": 1,
      "type": "x",
      "table": {
        "id": 1,
        "name": "x",
        "order": 1,
        "database_id": 1
      },
      "filter_type": "AND",
      "filters": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "type": "x",
          "value": "x",
          "preload_values": {},
          "group": 1
        }
      ],
      "filter_groups": [
        {
          "id": 1,
          "filter_type": "AND",
          "view": 1,
          "parent_group": 1
        }
      ],
      "sortings": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "order": "ASC",
          "type": "x",
          "priority": 1
        }
      ],
      "group_bys": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "order": "ASC",
          "width": 1,
          "type": "x",
          "priority": 1
        }
      ],
      "decorations": [
        {
          "id": 1,
          "view": 1,
          "type": "x",
          "value_provider_type": "x",
          "order": 1
        }
      ],
      "default_row_values": [
        {
          "id": 1,
          "field": 1,
          "enabled": true,
          "field_type": "x",
          "function": "x"
        }
      ],
      "filters_disabled": true,
      "public_view_has_password": true,
      "show_logo": true,
      "allow_public_export": true,
      "ownership_type": "x",
      "owned_by_id": 1,
      "row_identifier_type": "id",
      "row_height_size": "small",
      "frozen_column_count": 1,
      "group_by_layout": "section",
      "public": true,
      "slug": "x"
    },
    "idField": "id"
  },
  {
    "entity": "view_view",
    "accessor": "ViewView",
    "op": "create",
    "method": "POST",
    "path": "/api/database/views/{view_id}/rotate-slug/",
    "action": "rotate-slug",
    "args": [
      {
        "name": "id",
        "wire": "view_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "table_id": 1,
      "name": "x",
      "order": 1,
      "type": "x",
      "table": {
        "id": 1,
        "name": "x",
        "order": 1,
        "database_id": 1
      },
      "filter_type": "AND",
      "filters": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "type": "x",
          "value": "x",
          "preload_values": {},
          "group": 1
        }
      ],
      "filter_groups": [
        {
          "id": 1,
          "filter_type": "AND",
          "view": 1,
          "parent_group": 1
        }
      ],
      "sortings": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "order": "ASC",
          "type": "x",
          "priority": 1
        }
      ],
      "group_bys": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "order": "ASC",
          "width": 1,
          "type": "x",
          "priority": 1
        }
      ],
      "decorations": [
        {
          "id": 1,
          "view": 1,
          "type": "x",
          "value_provider_type": "x",
          "order": 1
        }
      ],
      "default_row_values": [
        {
          "id": 1,
          "field": 1,
          "enabled": true,
          "field_type": "x",
          "function": "x"
        }
      ],
      "filters_disabled": true,
      "public_view_has_password": true,
      "show_logo": true,
      "allow_public_export": true,
      "ownership_type": "x",
      "owned_by_id": 1,
      "row_identifier_type": "id",
      "row_height_size": "small",
      "frozen_column_count": 1,
      "group_by_layout": "section",
      "public": true,
      "slug": "x"
    },
    "idField": "id"
  },
  {
    "entity": "view_view",
    "accessor": "ViewView",
    "op": "create",
    "method": "POST",
    "path": "/api/database/views/table/{table_id}/",
    "args": [
      {
        "name": "table_id",
        "wire": "table_id",
        "value": "p1"
      }
    ],
    "select": {
      "include": "v1"
    },
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "include"
    ],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "table_id": 1,
      "name": "x",
      "order": 1,
      "type": "x",
      "table": {
        "id": 1,
        "name": "x",
        "order": 1,
        "database_id": 1
      },
      "filter_type": "AND",
      "filters": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "type": "x",
          "value": "x",
          "preload_values": {},
          "group": 1
        }
      ],
      "filter_groups": [
        {
          "id": 1,
          "filter_type": "AND",
          "view": 1,
          "parent_group": 1
        }
      ],
      "sortings": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "order": "ASC",
          "type": "x",
          "priority": 1
        }
      ],
      "group_bys": [
        {
          "id": 1,
          "view": 1,
          "field": 1,
          "order": "ASC",
          "width": 1,
          "type": "x",
          "priority": 1
        }
      ],
      "decorations": [
        {
          "id": 1,
          "view": 1,
          "type": "x",
          "value_provider_type": "x",
          "order": 1
        }
      ],
      "default_row_values": [
        {
          "id": 1,
          "field": 1,
          "enabled": true,
          "field_type": "x",
          "function": "x"
        }
      ],
      "filters_disabled": true,
      "public_view_has_password": true,
      "show_logo": true,
      "allow_public_export": true,
      "ownership_type": "x",
      "owned_by_id": 1,
      "row_identifier_type": "id",
      "row_height_size": "small",
      "frozen_column_count": 1,
      "group_by_layout": "section",
      "public": true,
      "slug": "x"
    },
    "idField": "id"
  },
  {
    "entity": "view_view",
    "accessor": "ViewView",
    "op": "load",
    "method": "GET",
    "path": "/api/database/views/table/{table_id}/",
    "args": [
      {
        "name": "table_id",
        "wire": "table_id",
        "value": "p1"
      }
    ],
    "select": {
      "include": "v1",
      "limit": "v1",
      "type": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "include",
      "limit",
      "type"
    ],
    "queryArgs": [
      {
        "name": "include",
        "wire": "include"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "type",
        "wire": "type"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": [
      {
        "id": 1,
        "table_id": 1,
        "name": "x",
        "order": 1,
        "type": "x",
        "table": {
          "id": 1,
          "name": "x",
          "order": 1,
          "database_id": 1
        },
        "filter_type": "AND",
        "filters": [
          {
            "id": 1,
            "view": 1,
            "field": 1,
            "type": "x",
            "value": "x",
            "preload_values": {},
            "group": 1
          }
        ],
        "filter_groups": [
          {
            "id": 1,
            "filter_type": "AND",
            "view": 1,
            "parent_group": 1
          }
        ],
        "sortings": [
          {
            "id": 1,
            "view": 1,
            "field": 1,
            "order": "ASC",
            "type": "x",
            "priority": 1
          }
        ],
        "group_bys": [
          {
            "id": 1,
            "view": 1,
            "field": 1,
            "order": "ASC",
            "width": 1,
            "type": "x",
            "priority": 1
          }
        ],
        "decorations": [
          {
            "id": 1,
            "view": 1,
            "type": "x",
            "value_provider_type": "x",
            "order": 1
          }
        ],
        "default_row_values": [
          {
            "id": 1,
            "field": 1,
            "enabled": true,
            "field_type": "x",
            "function": "x"
          }
        ],
        "filters_disabled": true,
        "public_view_has_password": true,
        "show_logo": true,
        "allow_public_export": true,
        "ownership_type": "x",
        "owned_by_id": 1,
        "row_identifier_type": "id",
        "row_height_size": "small",
        "frozen_column_count": 1,
        "group_by_layout": "section",
        "public": true,
        "slug": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "workspace",
    "accessor": "Workspace",
    "op": "create",
    "method": "POST",
    "path": "/api/workspaces/invitations/workspace/{workspace_id}/",
    "args": [
      {
        "name": "id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "workspace": 1,
      "email": "x",
      "permissions": "x",
      "created_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "workspace",
    "accessor": "Workspace",
    "op": "create",
    "method": "POST",
    "path": "/api/workspaces/{workspace_id}/export/async/",
    "action": "export_async",
    "args": [
      {
        "name": "id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 202,
    "sample": {
      "id": 1,
      "type": "x",
      "progress_percentage": 1,
      "state": "x",
      "human_readable_error": "x",
      "error_code": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "exported_file_name": "x",
      "url": "x",
      "workspace_id": 1
    },
    "idField": "id"
  },
  {
    "entity": "workspace",
    "accessor": "Workspace",
    "op": "create",
    "method": "POST",
    "path": "/api/workspaces/{workspace_id}/import/async/",
    "action": "import_async",
    "args": [
      {
        "name": "id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 202,
    "sample": {
      "id": 1,
      "type": "x",
      "progress_percentage": 1,
      "state": "x",
      "human_readable_error": "x",
      "error_code": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "updated_on": "2026-01-01T00:00:00Z",
      "workspace_id": 1,
      "resource": {
        "id": 1,
        "name": "x",
        "size": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "workspace",
    "accessor": "Workspace",
    "op": "create",
    "method": "POST",
    "path": "/api/workspaces/{workspace_id}/import/upload-file/",
    "action": "import_upload_file",
    "args": [
      {
        "name": "id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 202,
    "sample": {
      "id": 1,
      "name": "x",
      "size": 1
    },
    "idField": "id"
  },
  {
    "entity": "workspace",
    "accessor": "Workspace",
    "op": "create",
    "method": "POST",
    "path": "/api/workspaces/{workspace_id}/leave/",
    "action": "leave",
    "args": [
      {
        "name": "id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "workspace",
    "accessor": "Workspace",
    "op": "create",
    "method": "POST",
    "path": "/api/workspaces/",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "users": [
        {
          "id": 1,
          "name": "x",
          "email": "x",
          "workspace": 1,
          "permissions": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "user_id": 1,
          "to_be_deleted": true,
          "two_factor_auth": "x"
        }
      ],
      "order": 1,
      "permissions": "x",
      "unread_notifications_count": 1,
      "generative_ai_models_enabled": "x",
      "ai_features": "x"
    },
    "idField": "id"
  },
  {
    "entity": "workspace",
    "accessor": "Workspace",
    "op": "create",
    "method": "POST",
    "path": "/api/workspaces/order/",
    "action": "order",
    "args": [],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "workspace",
    "accessor": "Workspace",
    "op": "list",
    "method": "GET",
    "path": "/api/workspaces/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "name": "x",
        "users": [
          {
            "id": 1,
            "name": "x",
            "email": "x",
            "workspace": 1,
            "permissions": "x",
            "created_on": "2026-01-01T00:00:00Z",
            "user_id": 1,
            "to_be_deleted": true,
            "two_factor_auth": "x"
          }
        ],
        "order": 1,
        "permissions": "x",
        "unread_notifications_count": 1,
        "generative_ai_models_enabled": "x",
        "ai_features": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "workspace",
    "accessor": "Workspace",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/workspaces/{workspace_id}/import/{resource_id}/",
    "args": [
      {
        "name": "id",
        "wire": "workspace_id",
        "value": "p1"
      },
      {
        "name": "resource_id",
        "wire": "resource_id",
        "value": "p2"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "workspace",
    "accessor": "Workspace",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/workspaces/{workspace_id}/",
    "args": [
      {
        "name": "id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "workspace",
    "accessor": "Workspace",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/workspaces/users/{workspace_user_id}/",
    "args": [
      {
        "name": "workspace_user_id",
        "wire": "workspace_user_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "workspace",
    "accessor": "Workspace",
    "op": "update",
    "method": "PATCH",
    "path": "/api/workspaces/{workspace_id}/",
    "args": [
      {
        "name": "id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [
      {
        "name": "client_session_id",
        "wire": "ClientSessionId",
        "value": "h1"
      },
      {
        "name": "client_undo_redo_action_group_id",
        "wire": "ClientUndoRedoActionGroupId",
        "value": "h2"
      }
    ],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "generative_ai_models_enabled": "x"
    },
    "idField": "id"
  },
  {
    "entity": "workspace_invitation",
    "accessor": "WorkspaceInvitation",
    "op": "create",
    "method": "POST",
    "path": "/api/workspaces/invitations/{workspace_invitation_id}/reject/",
    "args": [
      {
        "name": "invitation_id",
        "wire": "workspace_invitation_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "workspace_invitation",
    "accessor": "WorkspaceInvitation",
    "op": "load",
    "method": "GET",
    "path": "/api/workspaces/invitations/{workspace_invitation_id}/",
    "args": [
      {
        "name": "id",
        "wire": "workspace_invitation_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "workspace": 1,
      "email": "x",
      "permissions": "x",
      "created_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "workspace_invitation",
    "accessor": "WorkspaceInvitation",
    "op": "remove",
    "method": "DELETE",
    "path": "/api/workspaces/invitations/{workspace_invitation_id}/",
    "args": [
      {
        "name": "id",
        "wire": "workspace_invitation_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "workspace_invitation",
    "accessor": "WorkspaceInvitation",
    "op": "update",
    "method": "PATCH",
    "path": "/api/workspaces/invitations/{workspace_invitation_id}/",
    "args": [
      {
        "name": "id",
        "wire": "workspace_invitation_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "workspace": 1,
      "email": "x",
      "permissions": "x",
      "created_on": "2026-01-01T00:00:00Z"
    },
    "idField": "id"
  },
  {
    "entity": "workspace_structure",
    "accessor": "WorkspaceStructure",
    "op": "load",
    "method": "GET",
    "path": "/api/admin/data-scanner/workspace-structure/{workspace_id}/",
    "args": [
      {
        "name": "id",
        "wire": "workspace_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "name": "x",
        "tables": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "workspace_user",
    "accessor": "WorkspaceUser",
    "op": "update",
    "method": "PATCH",
    "path": "/api/workspaces/users/{workspace_user_id}/",
    "args": [
      {
        "name": "id",
        "wire": "workspace_user_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "email": "x",
      "workspace": 1,
      "permissions": "x",
      "created_on": "2026-01-01T00:00:00Z",
      "user_id": 1,
      "to_be_deleted": true,
      "two_factor_auth": "x"
    },
    "idField": "id"
  },
  {
    "entity": "workspace_user_workspace",
    "accessor": "WorkspaceUserWorkspace",
    "op": "create",
    "method": "POST",
    "path": "/api/workspaces/invitations/{workspace_invitation_id}/accept/",
    "args": [
      {
        "name": "invitation_id",
        "wire": "workspace_invitation_id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "users": [
        {
          "id": 1,
          "name": "x",
          "email": "x",
          "workspace": 1,
          "permissions": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "user_id": 1,
          "to_be_deleted": true,
          "two_factor_auth": "x"
        }
      ],
      "order": 1,
      "permissions": "x",
      "unread_notifications_count": 1,
      "generative_ai_models_enabled": "x",
      "ai_features": "x"
    },
    "idField": "id"
  },
  {
    "entity": "workspace_user_workspace",
    "accessor": "WorkspaceUserWorkspace",
    "op": "create",
    "method": "POST",
    "path": "/api/workspaces/create-initial-workspace/",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "x",
      "users": [
        {
          "id": 1,
          "name": "x",
          "email": "x",
          "workspace": 1,
          "permissions": "x",
          "created_on": "2026-01-01T00:00:00Z",
          "user_id": 1,
          "to_be_deleted": true,
          "two_factor_auth": "x"
        }
      ],
      "order": 1,
      "permissions": "x",
      "unread_notifications_count": 1,
      "generative_ai_models_enabled": "x",
      "ai_features": "x"
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
