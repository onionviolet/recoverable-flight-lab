# Recoverable Flight Lab optional workspace

A secondary spatial viewer with a procedural 3D concept, connected project cards, and side-panel field notes. The repository's Markdown plans are authoritative; this site helps explore and present selected ideas. It does not replace the roadmap, registers, track plans, or reviewed evidence. The private whiteboard photograph is not an application asset.

## Run

From this directory:

```sh
npm ci
npm run dev -- --port 4174
```

Open http://127.0.0.1:4174. The server binds to loopback only. `npm run build` produces `dist/`. GitHub Pages uses the workflow in `.github/workflows/pages.yml`; use `GITHUB_PAGES=true npm run build` to check the production subpath. A local build does not publish it. `npm test` runs the data, persistence, geometry, presentation, workflow, and review-helper checks.

## Use

- Choose **Board** for spatial exploration, **Logic map** for the connected question-to-evidence trail, **3D tour** for a guided concept walkthrough, or **Review desk** to plan a session. Presentation order and board backups live in **Project**.
- The logic map follows saved connections for folding wings, recovery, and propulsion. Empty stages offer a draft when a prerequisite exists. Its arrows show reading order, and documentary context never counts as a test result. Saving a draft can add the relationship shown in its form; Undo restores the previous board. Where several prerequisite cards exist, select the relevant question or possible answer before drafting the next step.
- Drag blank canvas to pan, and card headers to arrange. Use Fit board, Focus, or the outline to find a record. Arrange arrow buttons provide a non-drag path.
- Inspect 3D enables orbit. Use Stow wings, Cutaway, Explode, and named camera views. Stowing automatically opens the cutaway. These are illustrative poses; a continuous mechanism path is unresolved.
- Add local questions, hypotheses, experiments, or decisions with +. Connect uses typed relationship menus. Canonical source records are read-only; local proposals are editable.
- Autosave stays in this browser. Export a portable JSON copy. Every save validates the candidate before writing. Failed saves retain the previous stored board and label the in-tab changes as unsaved. Import validates a project and commits it before replacing the active board, after an export opportunity. Unreadable saved data opens an explicit recovery path that retains its original bytes. Concurrent-tab revision changes block overwrites.
- Present follows up to five record IDs. Use Project → Edit presentation order to reorder/add/remove stops, or add/remove a selected record from Arrange & present. Exit returns to the previous working selection/view.

Saved boards keep their card positions when opened, including boards from an earlier layout. **Organize board** is an explicit, undoable action. Only a fresh board receives the starter arrangement automatically.

## Review and notebook workflow

The workspace navigation separates Board, Logic map, 3D tour, and Review desk. The logic map reads existing typed connections and exposes missing steps. The four-stop tour explains the original concept and restores the board view when closed.

The review desk offers five mission prompts and four optional project templates: flight replay, a swappable payload bay, an inert wing demonstrator, and prediction versus observation. These create editable proposals only after the user saves them. They are candidate work, not implemented engineering tools or accepted decisions.

Use **Add an idea about this** to draft against the selected record. The relationship menu offers only valid existing verb/type combinations, with an explicit choice to keep the idea separate. When the record types have no supported relationship, the form says so instead of showing an empty connection menu. Review prompts start as standalone questions with a proposed-answer section in their notes; project templates start as separate test proposals. A review brief previews selected card text and relationships before copy or Markdown download. Review local notes before sharing them.

**Link OneNote** stores an HTTPS OneNote/SharePoint shortcut in this browser only. It is separate from board JSON and review briefs. The app does not read or sync the notebook. Keep owners, meeting notes, and evidence references in OneNote, then deliberately update the board after review.

## Sources and assets

All model geometry, layout, CSS, icons-as-text, and seed prose were authored in this task. No rejected site, model, generated diagram, screenshot, or old website prompt was retrieved or reused. No photograph, private names, credentials, fonts, remote textures, analytics, or CDN dependencies ship with the application.

`src/model.js` owns the fresh procedural geometry. Cylinder units are feet; the drawing uses a nominal 7.5 ft length and approximately 3.5 ft deployed span within the aspirational ranges. The stowed segmented volumes are an illustrative arrangement, not a mechanically validated folding path. Surface materials are visual choices, not specified flight materials.

`src/data.js` owns seed records and the local project contract. `public/sources/` contains permitted project-text snapshots and a SHA-256 source manifest. `npm run sources` regenerates them from the source docs and fails on workstation paths. Snapshot updates do not automatically accept local proposals or edit canonical project decisions. Import rejects changed canonical source content; a manifest mismatch with compatible content requires explicit source review.

`src/workflow.js` derives the logic map without changing project state; `src/workflow-view.js` renders the stages and prepares optional drafts. `src/workspace-ui.css` owns the shared shell dimensions, view navigation, and responsive map layout.

Dependencies: Three.js 0.186.0 and Vite 8.2.2, MIT package metadata verified at implementation. See [Three.js documentation](https://threejs.org/docs/) and [Vite guide](https://vite.dev/guide/). `package-lock.json` pins the dependency graph. The application renders on demand and loads the 3D module separately; the 3D chunk is still approximately 590 kB before gzip.

## Verification and limits

See [the implementation record](../docs/DIGITAL-WORKSPACE-IMPLEMENTATION.md) and [September 19 review workflow checks](../docs/WORKSPACE-REVIEW-UPGRADE.md). This is a reviewable first implementation, not user visual acceptance, a full accessibility certification, a CAD tool, or a simulator. Shared editing and evidence ingestion/replay remain out of scope.


### Browser regression check

With the dev server running on port 4175, run `node tests/browser/smoke.mjs` using an installed Playwright runtime and Chromium. If Playwright is supplied outside this package, set `PLAYWRIGHT_MODULE` to its absolute `index.mjs` path. `RFL_BASE_URL` can override the local dev URL. This optional check is separate from `npm test` and uses a fresh browser context.

It exercises saved-draft reload, standalone review context, selected-branch drafting, failed-save messaging and export, a 320 × 568 tour, and a downloaded board's file-input import/reload roundtrip. No user browser profile is opened.
