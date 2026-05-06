# Vertex Net HTTP Mesh Walkthrough

This note is the quickest way to read the extra review model in `vertex-net-http-mesh`.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | packet span | 205 | ship |
| stress | retry pressure | 216 | ship |
| edge | route drift | 151 | ship |
| recovery | socket risk | 213 | ship |
| stale | packet span | 204 | ship |

Start with `stress` and `edge`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

If `edge` becomes less cautious without a clear reason, I would inspect the drag input first.
