# Workspace flow audit

Date: 2026-09-08. Scope: visitor comprehension and the existing workspace, not physical engineering validation. Baseline: fetched origin/main and clean HEAD both at 418f7c6. No repository AGENTS.md found; supplied task instructions apply. Publication remains a separate step.

## Before implementation

Read USER-VISION.md, STATE.md, digital scope, implementation record and release plan; inspected the published app in Chrome and its implementation. The private whiteboard was neither available nor needed.

Proposed first visit: understand that this is an illustrative original aspiration → inspect one module → follow the packaging question → read its provisional hypothesis → inspect the unperformed test and missing criteria → read the draft decision and documentary evidence limits → compare the separate development proposal → choose a local note/backup or public GitHub submission.

The five highest-value fixes are F01–F05. This inventory was written before fixes. Severity describes visitor impact, not flight risk.

| ID / severity | Classification / location | Concrete difficulty and evidence | Specific remedy | Initial disposition |
|---|---|---|---|---|
| F01 / high | Verified presentation + design judgment; opening and inspector | Published opening selects wing; purpose paragraph is hidden by CSS. Start here has only a broad section list. Visitor must infer what C4 means and where the question-to-decision chain starts. | Open with concept overview; persistent compact reading-path links and record-specific next-reading context. Make aspirations and illustrative dimensions explicit. | Planned |
| F02 / high | Verified semantics; labels and relationships | Source vision displayed as “Project concept requirements”; incoming edge text omits its subject. Documentary evidence “supports” a decision despite no test result. | Label intent accurately, display complete directed sentences and documentary qualification. Separate suggested reading links from saved technical edges. | Planned |
| F03 / medium | Verified implementation; search and display aliases | Search matches stored original wording, while UI displays renamed titles, so “packaging feasibility” cannot find the visible card. Generic escaping also translates user text in editing forms. | Separate escaping from canonical display aliases; search displayed and original text; preserve editable proposal wording. | Planned |
| F04 / high | Browser verified; keyboard | Project menu → Escape → Space leaves focused Project button closed. Global Space handler prevents native button activation. | Restrict pan shortcut to canvas/noninteractive targets; retain card panning and edge keyboard activation. | Planned |
| F05 / medium | Verified implementation; canvas endpoints and restoration | Concept edges use an inset hard-coded box instead of model-card boundary. Restore starter layout restores the obsolete seed layout despite five-section organization. | Use actual model/card dimensions for endpoints; restore current section organization with undo. | Planned |
| F06 / medium | Verified structure + design judgment; development paths | Baseline, goals, gate, guidance, drone and simulator cards have no typed edges. Existing verb types cannot express all these relations faithfully. | Add clearly labeled reading context/navigation without inventing technical relationships or rewriting saved edges. | Included in F01; graph schema expansion deferred |
| F07 / medium | Untested concern; input/recovery/device behavior | Previous tests are historical evidence only. Full keyboard, touch hardware, browser fault and performance coverage is not established by source reading. | Run bounded current browser checks and Node/build checks; retain precise limits. | Needs evidence |
| F08 / low | Design judgment; 3D engineering presentation | Module separation, dimensions, internal stowage and schematic mechanism may appear more mature than they are. Existing source already discloses unresolved continuous deployment and physical fit. | Add visible aspirational dimension wording; retain geometry tests and model limits. Do not invent CAD, simulation or results. | Included in F01; physical validation outside scope |

## Verification and final dispositions

Implemented locally; no push, deployment, visibility change, or public submission occurred.

| Finding | Final disposition |
|---|---|
| F01 | Fixed: concept is the initial selection; visible purpose line, contextual inspector headings, explicit aspirational dimensions, and a seven-record suggested reading path. Record title remains above the guide. Selection resets inspector scroll. |
| F02 | Fixed: “Recorded project intent”; full subject/verb/object relationship sentences; the placeholder evidence edge reads “provides documentary context for.” Stored verbs and source content remain unchanged. |
| F03 | Fixed: display aliases apply only to matching starter fields, never arbitrary user text. Search includes original and displayed wording; form values use plain escaping. Three focused regression tests added. |
| F04 | Fixed: Space no longer intercepts focused buttons/links/summary/role buttons. Browser Space activation, Enter search selection, arrow section movement, and Enter edge inspection passed. |
| F05 | Fixed: concept endpoints derive from the model-card box; current section layout restoration replaces obsolete seed coordinates and remains undoable. Exact restore/undo verified. |
| F06 | Fixed for reading flow: baseline and gate links plus per-record branch context. Typed graph expansion deferred because the current verb schema does not describe all branch relationships; no fabricated links added. |
| F07 | Partial evidence obtained below. Complete keyboard-only journey, screen reader, actual touch hardware, crash/performance and full browser recovery fault matrix still need evidence. |
| F08 | Presentation fixed; physical fit, continuous deployment, module boundaries as manufactured interfaces, and all performance validation remain outside scope. No model geometry or source authority was changed. |
| F09 / high | User-reported connection-label contrast, added during implementation. Reproduced with browser-injected Dark Reader: light SVG background and light text. Fixed native theme declaration and explicit label foreground/background in normal/hover/focus states. Final observed colors #f4f7fa on #172633 give 14.35:1 contrast. Browser extension settings were not modified. |

The native dark page now includes Dark Reader’s documented site opt-out, avoiding a second color transformation. See [Dark Reader integration guidance](https://github.com/darkreader/darkreader/blob/main/CONTRIBUTING.md#disabling-dark-reader-on-your-site). It applies to this app page; raw source documents remain separate. This does not claim compatibility with every theme extension.

### Current verification

- `npm test`: 22/22 pass, including preserved canonical/import/recovery/geometry contracts and three presentation regressions. `GITHUB_PAGES=true npm run build` and `git diff --check` pass. Remaining Vite warning: Three.js/model chunk 590.70 kB (149.30 kB gzip); no performance benchmark claimed.
- Published baseline inspected read-only in Chrome. Local production app tested at `http://127.0.0.1:4187/recoverable-flight-lab/`, a separate origin from existing previews and the live site. Initial preview configuration omitted the Pages base and returned HTML for scripts; corrected the preview environment to match the build and then verified the working subpath. No product source-routing defect was found.
- Browser: all three actual mesh hover and click picks; individual card drag; section group drag; Shift-click custom two-card drag; exact position undo; middle-button pan over cards without moving them; background pan; wheel pan and Ctrl-wheel zoom; front view, stowed/cutaway controls and Escape back to canvas; keyboard section movement; connection dialog and endpoint navigation; button-based move and layout restore/undo.
- Browser: Space opens Project menu; visible-title search and Enter selection; question → hypothesis → test → decision → evidence reading chain; source document loaded from the production subpath; public contribution dialog explains review and local-note boundaries. Links inspected without submitting anything.
- Browser: temporary local question saved, survived reload/search, then deleted through the UI on the isolated origin. No existing user-origin board was cleared or imported over. Seed records, schema, canonical source snapshots, saved edge verbs, and layout-version contract remain unchanged.
- Desktop and 390 × 844 viewport inspected. Narrow inspector reading links and presentation controls work. Toolbar now scrolls horizontally so trailing controls remain reachable; viewport override reset afterward. Narrow section overview is intentionally zoomed out; use record focus/outline for readable detail. No actual touch-device test claimed.
- No browser errors logged during the final production run. Dark Reader no longer transforms the app; computed SVG foreground/background match the intended pair and labels are visibly readable over the model.

### Remaining limits and review

Space-drag itself was not reverified: the available raw key-down testing call was rejected by the browser tool. Native Space button activation and middle-button pan were verified; the existing Space-drag implementation remains, but historical evidence is not counted as a current pass. No full import/export file-chooser roundtrip, crash-during-save, screen-reader audit, exhaustive keyboard-only tour, or physical touch test was performed. Existing data-level recovery tests passed. Owner aesthetic acceptance remains pending.

The graph still contains intentionally unconnected research branches, now contextualized by suggested reading navigation. A richer typed graph requires a separate schema and saved-board migration design. No validated flight simulation, manufacturing design, approved architecture, engineering result, or hardware approval exists.

### Local review

[Open local production preview](http://127.0.0.1:4187/recoverable-flight-lab/). If stopped, run `GITHUB_PAGES=true npm run build` then `GITHUB_PAGES=true npx vite preview --host 127.0.0.1 --port 4187` from `workspace/`. Publication still requires a subsequent user request.

## Owner-requested tone and OLED follow-up

The owner subsequently asked for a less serious, more conversational feel and OLED black. The current local presentation now uses a black canvas, charcoal cards and neutral text. Display copy is shorter (for example, “Can everything fit?”), claim chips retain “Concept”, “Proposed” and “Open”, and detailed source records remain intact. This supersedes the earlier formal drafting-language direction, not its evidence boundaries. Connection labels now use #fafafa on #111; the native dark-theme protection remains. Desktop and 390 × 844 views were inspected, reading navigation worked, and 22 tests plus the production build passed. Saved records and layouts were preserved; publication remains deferred.

## Contextual flow implementation pass

Replaced the repeated seven-button reading menu with an explanation-first inspector, one contextual next action, an explicit back action, and optional broader navigation. Full record text and tools remain available in a disclosure. The opening guide now explains the build aspiration, the illustrative role of C4, the undecided engineering work, the recommended first trail, and the unaccepted status of C0/C1/C2.

The packaging trail now reads: folding-wing function → packaging unknown → working assumption → unperformed inert mockup → draft decision → documentary evidence only. Nose/recovery states that no hypothesis or test record exists and proposes a piece-by-piece recovery table plus a separately reviewed low-energy descent test. Propulsion states that no architecture is selected and proposes requirements, commercial-data comparison, and an advisor-reviewed test plan. These are presentation suggestions and local draft actions, not new canonical records, saved edges, results, requirements, or accepted choices.

Current verification on the isolated production origin `http://127.0.0.1:4193/recoverable-flight-lab/`:

- Walked the overview and complete packaging trail through the evidence status. Observed the nose recovery gap and its draft action. Unit coverage also asserts the propulsion proposal and both module trails.
- Loaded the bundled user-vision source from `/recoverable-flight-lab/`. Inspected local-note/backup and public GitHub/review routes without opening or submitting a public form.
- Created a temporary local proposal, reloaded, searched, and found it. It remains only in this disposable test origin because final deletion through browser UI requires separate confirmation. No repository or existing user-origin board contains it.
- Inspected desktop and 390 × 844. Contextual next navigation, inspector scrolling, horizontally reachable top/section controls, the model controls, and readable connection labels were observed. Reset the viewport override afterward.
- `npm test` passes 24/24. `GITHUB_PAGES=true npm run build` and `git diff --check` pass. The known Three.js chunk warning remains 590.70 kB (149.30 kB gzip).

The existing source records, IDs, positions, edges, story, schema, authority rules, autosave, import validation, and recovery code were not changed by this pass. No richer graph was invented for unconnected branches. No validated simulation, manufacturing design, approved architecture, physical result, push, deploy, visibility change, or public message exists. Current gaps remain full file-chooser recovery, crash/performance testing, screen reader, exhaustive keyboard-only review, actual touch hardware, and owner aesthetic acceptance.

Current local preview: [http://127.0.0.1:4193/recoverable-flight-lab/](http://127.0.0.1:4193/recoverable-flight-lab/).

### Quick idea capture follow-up

Added a primary Add idea action with four plain-language choices: open question, possible answer, test to try, and draft decision. Each opens the existing local-proposal form with the matching type selected. The UI now states in both the form and Project menu that edits autosave in the current browser, while Download board backup creates the portable copy. Share / contribute remains the distinct public GitHub review path.

Chrome verification opened the chooser and confirmed that Test to try selects the experiment type and retains the unreviewed/local explanation. No test record was saved. The 24-test suite, Pages-subpath production build, and diff whitespace check pass after this follow-up. No persistence schema, validation rule, canonical record, saved relationship, or migration behavior changed.
