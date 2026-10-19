# Voxgig SDK Generator observations — Baserow

Date: 2026-10-19

## Scope

I generated an unofficial TypeScript SDK for the public Baserow REST API using
Voxgig's `create-sdkgen` and `sdkgen` tools. Baserow was absent from the
Voxgig catalogue when checked through its public catalogue API (`0` matches).
The input is Baserow's official OpenAPI 3.0.3 document, version 2.4.1.

The generated project is MIT licensed. The durable project model identifies
Talha Amjad as its publisher and author, so regenerated root and TypeScript
licences carry the appropriate copyright notice.

## What worked

- The generator scaffolded the SDK project and accepted the OpenAPI JSON.
- The TypeScript target and `test` feature were added through the generated
  toolchain.
- Generation completed from a 6.5 MB document with 312 paths and 424 methods,
  producing 173 semantic entities plus documentation, CI and release-workflow
  files.
- `npm run build` passes for the generated TypeScript package.
- `voxgig-sdkgen doctor` passes: `.sdk matches the scaffold (0 additive)`.
- The generated offline test transport exercised the large majority of the
  generated definition tests without an API key or network access.

## Findings

1. The toolchain requires Node 24 or newer. This environment also exposed a
   system Node 22 through the default `npm`, so I had to explicitly use the
   installed Node 24 path. Failing early with the detected executable and a
   remediation command would make this smoother.
2. `npm create` option forwarding is sensitive. The initial command error was
   helpful and stated the required placement of `--`. A subsequent scaffold
   left the `.sdk` toolchain installed but did not add the requested `ts` and
   `test` selections; invoking `voxgig-sdkgen target add ts` and
   `voxgig-sdkgen feature add test` worked immediately.
3. The Baserow document has no top-level `servers` URL. The generated client
   correctly exposes `server.base` rather than silently guessing a host, but
   it makes the quickstart less ready-to-run.
4. The model conversion reported 30 ambiguous operation selectors and 65
   unreachable generated flow steps. These stem from the API document's broad
   endpoint shapes: several unrelated paths map to the same entity operation
   and required-parameter selector. The generator reports these clearly and
   points to `guide.aontu` as the correct customization point.
5. One generated offline direct-route test fails:
   `DatabaseTableViewDirect / direct-load-database_table_view`. It calls
   `GET api/database/views/calendar/{ical_slug}.ics` with an empty `params`
   object, although `ical_slug` is required. The mock therefore returns a
   non-success result. This is reproducible with:

   ```sh
   cd ts
   node --enable-source-maps --test dist-test/entity/database_table_view/DatabaseTableViewDirect.test.js
   ```

   The entity SDK itself builds. I did not remove the endpoint or hand-edit
   generated tests merely to obtain a green suite; the failure is preserved as
   a generator/test-fixture issue for follow-up.

## Verification summary

| Check | Result |
| --- | --- |
| Scaffold and model generation | Completed, with source-model warnings noted above |
| `ts: npm run build` | Passed |
| `.sdk: npx voxgig-sdkgen doctor` | Passed |
| `ts: npm test` | Blocked by the one reproducible direct-route fixture failure |

