# Recoverable Flight Lab workspace

A fresh local spatial canvas with a procedural 3D concept, connected project cards, and side-panel field notes. Built from the current project vision and the user's whiteboard ideas. The private photograph is not an application asset.

## Run

From this directory:

```sh
npm ci
npm run dev -- --port 4174
```

Open http://127.0.0.1:4174. The server binds to loopback only. `npm run build` produces `dist/`; no deployment is configured. `npm test` runs the data, persistence, and illustrative geometry checks.

## Use

- Drag blank canvas to pan, and card headers to arrange. Use Fit board, Focus, or the outline to find a record. Arrange arrow buttons provide a non-drag path.
- Inspect 3D enables orbit. Use Stow wings, Cutaway, Explode, and named camera views. Stowing automatically opens the cutaway. These are illustrative poses; a continuous mechanism path is unresolved.
- Add local questions, hypotheses, experiments, or decisions with +. Connect uses typed relationship menus. Canonical source records are read-only; local proposals are editable.
- Autosave stays in this browser. Export a portable JSON copy. Import validates a project and commits it before replacing the active board, after an export opportunity. Unreadable saved data opens an explicit recovery path that retains its original bytes. Concurrent-tab revision changes block overwrites.
- Present follows up to five record IDs. Use Story to reorder/add/remove stops, or add/remove a selected record from Arrange & present. Exit returns to the previous working selection/view.

## Sources and assets

All model geometry, layout, CSS, icons-as-text, and seed prose were authored in this task. No rejected site, model, generated diagram, screenshot, or old website prompt was retrieved or reused. No photograph, private names, credentials, fonts, remote textures, analytics, or CDN dependencies ship with the application.

`src/model.js` owns the fresh procedural geometry. Cylinder units are feet; the drawing uses a nominal 7.5 ft length and approximately 3.5 ft deployed span within the aspirational ranges. The stowed segmented volumes are an illustrative arrangement, not a mechanically validated folding path. Surface materials are visual choices, not specified flight materials.

`src/data.js` owns seed records and the local project contract. `public/sources/` contains permitted project-text snapshots and a SHA-256 source manifest. `npm run sources` regenerates them from the source docs and fails on workstation paths. Snapshot updates do not automatically accept local proposals or edit canonical project decisions. Import rejects changed canonical source content; a manifest mismatch with compatible content requires explicit source review.

Dependencies: Three.js 0.186.0 and Vite 8.2.2, MIT package metadata verified at implementation. See [Three.js documentation](https://threejs.org/docs/) and [Vite guide](https://vite.dev/guide/). `package-lock.json` pins the dependency graph. The application renders on demand and loads the 3D module separately; the 3D chunk is still approximately 590 kB before gzip.

## Verification and limits

See [the implementation record](../docs/DIGITAL-WORKSPACE-IMPLEMENTATION.md). This is a reviewable first implementation, not user visual acceptance, a full accessibility certification, a CAD tool, or a simulator. Shared editing and evidence ingestion/replay remain out of scope.
