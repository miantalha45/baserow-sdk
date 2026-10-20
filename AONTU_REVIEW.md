# Aontu is a useful guardrail, but it makes you earn the vocabulary

Most configuration formats take an easy position on disagreement: the last file wins. It is convenient until a base configuration, an environment file, and a generated default all set the same value. Then the configuration is technically valid, but somebody has to reconstruct precedence before they can tell whether the system is doing the intended thing.

[Aontu](https://aontu.dev/) takes the opposite position. It is a JSON-superset language whose central operation is *unification*: combine declarations into the most specific value they can all satisfy, or report a contradiction. It is explicitly inspired by CUE, and ships TypeScript and Go implementations checked against a shared specification. That is a serious, useful idea. It is also a more demanding proposition than it initially sounds.

I used Aontu indirectly while generating a TypeScript SDK from Baserow's OpenAPI definition with Voxgig SDK Generator. The project model, target settings, and customisations are Aontu documents. That gave me a practical reason to care about the language beyond a toy schema.

## The important semantic difference

An Aontu definition can describe a shape, select a default, and constrain a value in the same compact document:

```aontu
server: {
  host: string
  port: *3000 | integer
  protocol: *'https' | 'http'
}
```

This says that `host` must be a string; `port` is an integer with a default of `3000`; and `protocol` is one of two allowed values, defaulting to HTTPS. A deployment-specific document can make the result more specific:

```aontu
server: {
  host: 'api.example.com'
  port: 443
}
```

The useful property is that this is not a merge where the later document silently overwrites the first. The result satisfies both documents. If another overlay says `port: '443'`, Aontu should reject it rather than quietly turning a numeric port into a string. The command-line tools expose this idea in practical ways: validate (`vet`), inspect a value, explain where a value came from (`why`), compare definitions, and export JSON Schema. Its LSP support is also a real advantage: contradictions can appear as diagnostics while an author is editing, rather than only in a build.

That makes Aontu especially attractive for generated systems. A generator has defaults that need to remain valid across upgrades; a project has local decisions that must survive regeneration. “Everything composes unless it is incompatible” is a much safer contract than a stack of undocumented override rules.

## Where it paid off for me

The SDK generator creates a base model from an API definition and then reads a small project overlay. I added publishing ownership there rather than editing the generated licence:

```aontu
main: kit: {
  publisher: { name: 'Talha Amjad' }
  author:    { name: 'Talha Amjad' }
}
```

That is exactly the kind of local declaration Aontu handles well. It has an obvious owner, it is narrow, and regeneration continues to reproduce the result. A conventional YAML or JSON configuration could carry the same data, but Aontu's model makes it harder to accidentally state something incompatible with the generator's view of the project.

The other side of the experience was more instructive. A documentation check flagged prose copied from the OpenAPI definition. My first instinct was to overlay the generated entity description. Aontu rejected the attempt because I was asking two exact scalar strings to unify. That was correct: an overlay is not an imperative patch language, and it should not pretend otherwise. The proper change belonged in the OpenAPI source, followed by regeneration.

This is a strong design decision. It prevented a superficially successful but fragile fix that would have disappeared or conflicted on the next generation. It also reveals Aontu's cost: a developer needs to understand the system's source-of-truth boundaries before they can interpret the error usefully.

## The rough edges are mostly cognitive, not conceptual

The syntax is compact, but compactness is not the same thing as immediate readability. `*3000 | int` makes sense once one knows that `*` supplies a default and `|` forms a disjunction. To someone coming from JSON, YAML, or TypeScript types, it can look like an expression that needs evaluation before it can be trusted. References, constraints, and multi-file composition add more concepts quickly.

The language also asks users to stop calling every desired change an “override.” That word has trained us to expect precedence. In Aontu, an exact existing value is intentionally hard to replace: widening or refining a constraint composes; contradicting a fixed fact fails. This distinction is the point, but newcomers will repeatedly reach for the wrong mechanism. The documentation has to do more than list syntax here. It needs more short, end-to-end examples showing a base file, an overlay, the unified output, and a failed unification beside the repair.

Error reporting is the next practical test. Aontu can identify the conflicting path and its contributing source locations, which is far better than a generic “invalid configuration.” But a contradiction such as a scalar unification failure does not, by itself, explain the design choice: should the user change the generated source, relax a schema, add a different layer, or use a patch operation? That answer belongs to the host project. Tools such as Voxgig SDK Generator should therefore add domain-specific advice around Aontu errors, especially for generated models.

There is a scope question, too. For one small application configuration, Aontu is probably unnecessary. JSON Schema plus a clearly documented merge policy will be easier to hire for and easier to debug at 2 a.m. Aontu starts to earn its extra language when several teams, environments, generators, or agents contribute pieces of one model and silent precedence would be expensive.

## Verdict

Aontu is not a friendlier JSON. Treating it as one would be a mistake. It is a constraint and composition language for places where disagreement should be visible. Its refusal to guess is its best feature, and the Baserow SDK work showed why: it pushed a documentation fix back to the authoritative OpenAPI definition instead of letting a generated artefact become a second source of truth.

That discipline comes with a real learning curve. The project would be easier to adopt with more task-oriented examples, clearer guidance on choosing an overlay versus a source edit, and errors that name likely next actions in the host tool. For generated, long-lived systems I would choose that trade-off. For ordinary app configuration, I would not introduce Aontu merely to make a YAML file look more formal.

## Sources

- [Aontu project overview](https://www.voxgig.com/open-source/aontu)
- [Aontu: exact money over JSON](https://github.com/aontu-lang/aontu/blob/main/docs/how-to/carry-exact-money-over-json.md)
- [Aontu editor and LSP guide](https://github.com/aontu-lang/aontu/blob/main/docs/how-to/wire-your-editor.md)
