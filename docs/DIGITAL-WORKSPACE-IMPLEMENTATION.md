# Digital workspace implementation record

Audience: owner and next contributor. Type: current implementation evidence. Updated: 2026-09-08.

## Authorization and result

After the scoping task, the user supplied the original whiteboard photo and requested: “build similarly to attached but make it even better,” with text on the side of the canvas. This authorizes the first implementation. It does not accept the physical architecture, authorize publication, or turn whiteboard labels into agent instructions.

A fresh application now lives in [workspace](../workspace/README.md). The opening composition uses a central 3D vehicle, questions on the left, module cards on the right, and a persistent text inspector. Lower regions contain hypothesis/test/decision records, goals, baseline proposals, and source records. Desktop and narrow-screen layouts were inspected in live Chrome. No rejected code or assets were retrieved. The source worktree and original photograph were not modified.

## Implemented

| Area | Result |
|---|---|
| Canvas | Pan/zoom, draggable cards, outline/search, selected record, related record navigation, pin comparison, focus/reset, undo/redo and button-based arrangement |
| Concept | Fresh procedural three-module model, named camera views, explicit orbit mode, internal stowed wing volumes, discrete deployed pose, cutaway, exploded modules, text/orthographic fallback path |
| Working records | Nine entity types; four editable proposal types; typed connections; source snapshots; no measured or simulated vehicle results invented |
| Recovery | Local autosave, portable export/import, revision-conflict detection, malformed-import rejection, source manifest review, source-claim protection |
| Presentation | Up to five editable story-stop references; next/previous and exit to prior selection/view |

## Checks actually performed

The integrator built and verified this implementation directly. No implementation subagent or independent code reviewer was used. The earlier independent review applied to the scope only.

- The initial eleven Node tests passed: record roundtrip; malformed schema/IDs/edges/URLs/positions; canonical truth protection; local proposal import; conflicting saves; failed storage write preserving an exportable object; actual stowed mesh vertices within the cylinder; declared and actual deployed span; starter proposal protection; and preserved stale-source marker.
- Production build passed. Vite reports the separately loaded Three.js/model chunk above 500 kB uncompressed (approximately 590 kB, 149 kB gzip). The main application chunk is approximately 36 kB uncompressed. This is a remaining bundle-size warning, not a failed build.
- In live Chrome, created a temporary hypothesis, connected it to the packaging question, reloaded, found it through search, and verified its connection. Exercised a non-drag move and undo, deleted the temporary fixture with its edge, and entered/navigated/exited the presentation sequence.
- Visually inspected the assembled model and stowed cutaway in desktop and a 390 × 844 viewport. Fixed reversed nose normals, the initially unhelpful cutaway orientation, overlapping fixed heading during focus, canvas auto-scroll, and narrow-screen framing. Mobile model actions were moved outside the scaled board to retain usable touch targets.
- Observed the stale-source notice and explicit source-review action in the browser. Inspected the final opening canvas. Removed an obsolete G0-to-bench-test connection from the test board and seed; G1 owns bench evidence, while G0 stays scope review.

## Acceptance mapping and remaining review

| Scope checks | Evidence / limit |
|---|---|
| A1–A3 | Fresh code/asset provenance attested above; typed seed and links; live canvas and non-drag arrangement checked. No automated test proves historical non-reuse. |
| A4–A6 | Selectable modules and fresh model inspected. Stowed mesh envelope and deployed width tested. A compelling appearance and kinematic credibility still need owner review. |
| A7–A9 | Claim chips, source detail, original/baseline separation, unchanged open physical gates, and no photo/names in seed. The earlier no-implementation boundary was superseded by the user's explicit build request. |
| A10–A11 | Data-level failure/conflict/import checks passed; browser reload/search and source-review state observed. Browser quota-failure and corrupt-storage recovery checks subsequently passed on an isolated test origin. File-chooser roundtrip remains blocked by the Chrome extension file-access setting; crash-during-write testing remains unperformed. |
| A12 | Desktop and narrow-screen visual inspection by integrator; owner acceptance remains pending. No claim of independent visual approval. |

Keyboard equivalents and reduced-motion CSS exist; a complete keyboard-only journey, screen-reader audit, and actual touch-device test were not performed. No numerical frame-rate or cold-load timing benchmark was collected. A subsequent forced WebGL context-loss check passed: the static illustration appeared and proposal editing remained available. Those remain verification work rather than claimed passes.

W1 is implemented as a useful first local slice, with the above acceptance checks still open. Continuous deployment kinematics, validated packaging, live collaboration, telemetry replay, simulator execution, flight approval, and publication remain outside this result. Do not equate the mesh-envelope check with physical fit.


## Continued refinement and recovery verification

The user requested continuing the build. Added a story-order editor with non-drag reorder/remove/add controls, inline source-document reading, focus restoration after dialogs/edits, and pressed-state announcements for cutaway/exploded controls. Offscreen canvas cards no longer create a long keyboard tab sequence; the searchable outline provides equivalent access.

| Finding | Fix | Actual verification |
|---|---|---|
| Failed import changed the in-memory board before the save succeeded | Commit imported data to storage before replacing the active project; keep the current board on failure | Candidate-save failure test passed; file-chooser automation was blocked, so full import UI fault testing remains pending |
| Unreadable saved data had no recovery path | Prevent automatic overwrite, offer original-byte download and a fresh board with a retained recovery copy | Actual browser corruption/recovery check passed and preserved the exact corrupt bytes; three recovery tests passed |
| A removed storage key could silently be recreated by a stale tab | Treat missing storage with a nonzero expected revision as a conflict | Regression test passed |
| 3D failure left stale model controls/state | Dispose the renderer, exit inspection, and expose a labeled static illustration | Forced context loss in Chrome passed; opened proposal editor afterward |
| Story order and source reading interrupted working context | Dedicated story editor and inline source reader; keyboard focus restoration | Reordered a story stop with keyboard activation, reloaded, and confirmed first presentation stop; source document loaded in the dialog |

Current automated result: **16 passing Node tests**, production build passed, diff whitespace check passed. Main application chunk is approximately 41 kB before gzip; the model chunk remains approximately 590 kB with Vite's size warning. No new performance benchmark or independent code review is claimed.

Browser fault injection ran at a separate loopback test origin on port 4175, not the user's board at port 4174. Injected storage behavior was restored, test-origin storage was removed after the checks, and the test preview process was stopped. The main preview was restarted as a detached local process after the previous preview had stopped; no login/startup service was installed.

The browser extension rejected setting a file through the file chooser because its file-URL access is disabled. An export action was exercised, but the browser download event did not arrive, so a downloaded-file roundtrip is not reported as verified. These are browser-automation limitations, not evidence that the application's file import/export is broken. The validation/serialization and failure-preservation tests cover the underlying data path. Full keyboard-only navigation, screen-reader audit, actual touch hardware, and crash/performance benchmarks remain open.

## Draft workspace refinement

The canvas now separates vehicle, questions, experiments, development paths, and sources. Directed connections carry relationship labels and default to the selected card. Project backup controls explain local persistence and file snapshots. The model uses separated module interfaces, numbered module labels, neutral drafting colors, and explicit draft status. Display labels replace casual wording while preserving stored source records.

Module hover highlights and click selection work outside orbit mode. Section heading dragging moves that section's cards; Shift-clicking card grips forms a custom group. Group moves retain relative positions, save locally, and use the existing undo history. Arrow keys on focused section headings provide an alternative. The model anchor remains fixed.

Public release is deferred. A manual Pages workflow, subpath-aware source loading, question/idea issue forms, and a contribution dialog are prepared. No account visibility, remote repository contents, or live issue was changed. See PUBLIC-RELEASE-PLAN.md.

Verification for this refinement: 19 existing tests pass, Pages-subpath production build passes, and diff whitespace passes. A separate fresh headless Chrome session verified actual module hover picking, section drag with exact-position undo, Shift-click custom selection and multi-card drag, and contribution dialog links without page errors. The desktop layout was visually inspected in Chrome. Live GitHub deployment and external submissions remain untested because publication is deferred.

## Canvas panning correction

Canvas dragging now starts over the model in canvas mode, with pointer capture beginning only after the drag threshold so module clicks still work. Space-drag and middle-button drag pan over cards; trackpad scrolling pans and pinch zooms. Pointer cancellation and window blur end gestures, and completed drags suppress accidental clicks. Browser checks passed for model-background pan, Space-drag without card movement, trackpad pan, reload persistence, model hover, section/custom-group dragging, and undo. All 19 automated tests pass.

The user subsequently authorized pushing the workspace and this correction to GitHub. Public visibility and Pages deployment remain deferred.

## Contextual visitor flow

The current published build leads with what the team wants to build, what the C4 model illustrates, and which engineering choices remain open. The inspector explains the selected record first, gives one useful next action, and puts broader navigation and full record tools behind optional disclosures. The packaging trail reaches its assumption, unperformed mockup, draft decision, and documentary evidence status without changing the saved graph.

Nose/recovery and propulsion now state their missing hypothesis/test records and show proposed next steps as proposals. They do not fabricate graph edges or claim results. C4 remains the original integrated aspiration; C0/C1/C2 remain proposed separate articles. Contribution guidance separates private browser notes and portable backups from public GitHub issues and maintainer review.

This was a presentation-layer change. Canonical records, schema, IDs, positions, user text, saved edge verbs, story order, source authority, migration behavior, and recovery behavior remain intact. Two focused tests cover the contextual trails; the full suite is now **24 passing tests**. The Pages-subpath production build and diff whitespace check pass. The Three.js chunk remains 590.70 kB (149.30 kB gzip) with Vite's existing warning.

Current Chrome verification used `http://127.0.0.1:4193/recoverable-flight-lab/` on an isolated origin. The overview and packaging trail were walked through evidence; the nose recovery gap and draft action were observed; the bundled user-vision source loaded from the subpath; contribution routes were inspected without opening or submitting GitHub forms; a temporary local proposal survived reload and search. Desktop and 390 × 844 layouts were inspected, contextual next navigation worked, and the viewport override was reset. The temporary isolated-origin proposal was not removed because final UI deletion requires separate confirmation; it does not affect repository or user-origin data.

No current file-chooser import/export roundtrip, crash-during-save test, screen-reader audit, exhaustive keyboard-only tour, physical touch test, or performance benchmark was performed. Existing data-level persistence/recovery tests passed. Owner aesthetic acceptance remains pending.

Idea capture is now a primary top-bar action rather than a rail icon or contribution-dialog detour. It asks whether the note is an open question, possible answer, test to try, or draft decision, then opens the existing validated local-proposal form with that type selected. The form and Project menu both explain automatic browser storage and portable board backups. The public contribution path remains separate. Chrome verification opened each capture stage and confirmed that Test to try preselects the experiment type; no fixture was saved during this check.


## Visitor-flow audit, local follow-up

The [workspace flow audit](WORKSPACE-FLOW-AUDIT.md) records the pre-fix findings, implemented remedies, current browser evidence and remaining limits. The final revision has 24 passing tests and a passing Pages-subpath build. Stored canonical records and user proposals remain compatible. The requested connection-label color fix also addresses Dark Reader recoloring of the already-dark app. Commit `dd2d66b` and Pages run `34306705768` publish this work; deployment history is preserved in PUBLIC-RELEASE-PLAN.md.

Owner tone refinement: the current published presentation is OLED black with neutral charcoal surfaces and shorter conversational display labels. This supersedes the formal drafting copy from the preceding refinement; canonical source records and engineering limits remain unchanged. Desktop/narrow visual checks, 24 tests, production build, deployment, and live-asset verification passed.
