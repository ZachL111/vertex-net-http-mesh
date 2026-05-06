# vertex-net-http-mesh

`vertex-net-http-mesh` explores networking with a small TypeScript codebase and local fixtures. The technical goal is to design a TypeScript verification harness for http systems, covering incremental indexing, append-only fixtures, and failure-oriented tests.

## Use Case

I want this repository to be useful as a quick reading exercise: fixtures first, implementation second, verifier last.

## Vertex Net HTTP Mesh Review Notes

`stress` and `edge` are the cases worth reading first. They show the optimistic and cautious ends of the fixture.

## Highlights

- `fixtures/domain_review.csv` adds cases for packet span and retry pressure.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/vertex-net-http-walkthrough.md` walks through the case spread.
- The TypeScript code includes a review path for `retry pressure` and `route drift`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Code Layout

The fixture data drives the tests. The code stays thin, while `metadata/domain-review.json` and `config/review-profile.json` explain what each case is meant to protect.

The TypeScript implementation avoids hidden state so fixture changes are easy to reason about.

## Run The Check

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Regression Path

The check exercises the source code and the review fixture. `stress` is the high score at 216; `edge` is the low score at 151.

## Future Work

The repository is intentionally scoped to local checks. I would expand it by adding adversarial fixtures before adding features.
