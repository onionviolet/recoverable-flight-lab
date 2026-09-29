# Workspace review upgrade

Date: 2026-09-19. Scope: a more useful local ideaboard and matching OneNote guidance. No flight engineering or deployment is claimed.

## Current behavior

- Board, Logic map, 3D tour, and Review desk have separate navigation. The logic map derives module/question/hypothesis/experiment/decision/evidence membership from saved typed edges. Missing stages remain missing.
- The tour has four illustrative stops, including a stowed cutaway. Closing it restores the previous board view, model camera and pose, selection, outline visibility, and inspector collapse state. Logic-map visits also preserve board panel state; map selection keeps keyboard focus on the selected card.
- The review desk includes the five open mission prompts and four optional experiment templates: flight replay, a swappable payload bay, an inert wing demonstrator, and prediction versus observation. Saving a template creates an editable proposal, without accepting a decision or assigning anyone.
- Contextual capture offers valid typed relationships to an anchor, or no relationship. Briefs include only the chosen records and relationships between those records. The exact Markdown is visible before copying/downloading, and draft-note inclusion is disclosed.
- The optional OneNote shortcut is validated for HTTPS OneNote/SharePoint destinations and stored separately from board JSON. It does not grant permissions, upload notes, or sync notebook contents.

## OneNote result

The supplied blank Revival page became **Flight Lab: ideas to evidence**. The guide connects the existing restart plan and resource library to four candidate tracks, a board/draft/review/update loop, a 45-minute team session, a reusable dated review card, and clear page ownership. The original longer-term vehicle aspiration remains separate from proposed small demonstrations. It links to the public app and repository while explicitly saying the new app tools are local pending publication.

Verified in the signed-in editor: all five main sections occur once, no pasted HTML remains, and the sync dialog reported **Page saved** and **Page last synced just now**. Existing notebook pages were used as context; their content was not replaced. Private notebook addresses and team details were not added to source snapshots.

## Verification

`npm test`: **36/36 pass**. `GITHUB_PAGES=true npm run build`: pass. The lazy model chunk remains about 591 kB minified / 149 kB gzip, producing Vite's size advisory. No dependency was added.

Browser checks used a separate local origin for test drafts, preserving the user's normal preview board. Verified:

- All four tour stops, the cutaway, return to review, and outline/inspector restoration. Logic-map card selection retains focus and visiting the map restores the board panels.
- A template draft survives reload/search; a contextual question saved with an explicit relationship appears in the correct logic-map track.
- Brief inclusion/exclusion updates the exact preview; copied text excludes the unchecked local draft. Helper tests cover current edited text, relationship filtering, nonmutation, and canonical preservation.
- Unsupported notebook URL rejected. The real notebook shortcut is configured in the user-facing local preview and remains after reload. Its storage is outside the exported project contract.
- Desktop and 390 × 844 rendering inspected. At 320 px, document width matches the viewport and navigation remains reachable. Mobile notebook routing was adjusted to avoid squeezing its description. Temporary viewport overrides were reset. No browser console errors appeared in the QA run.

## Boundaries

The application changes are local and uncommitted. No push or deployment was performed. OneNote edits are saved. Shared editing, notebook synchronization, executable replay, simulation, measured hardware results, and flight approval are not implemented by these changes. No physical architecture or G0 choice was accepted.

The current check does not establish owner aesthetic acceptance, real touch-device behavior, screen-reader compatibility, a complete backup/import file-chooser roundtrip, crash tolerance, or measured performance. Existing persistence contract tests pass; these broader checks remain separate work.

## Follow-up audit and fixes

Date: 2026-09-19. This pass audited the existing local changes and preserved the canonical project contract and the earlier work above.

| Finding | Improvement | Evidence |
|---|---|---|
| Drafts could join the first prerequisite even after another branch was selected | Use the selected prerequisite; when a branch is ambiguous, require selecting a question or possible answer first | Workflow regression and browser save-to-second-branch check |
| Review prompts said “Draft an answer” while creating separate questions; unsupported connections appeared as empty menus | Say “Work through this question,” keep proposed answers in notes, preserve context text, and explicitly explain separate proposals | Browser check of form labels, context, and absent empty selector |
| Failed saves could still show “Idea saved”; invalid app state could overwrite a readable board | Keep failure messaging, validate each candidate before writing, retain the last valid saved bytes, and clamp short-screen 3D zoom to the project range | Storage regression tests, simulated browser quota failure, export of the unsaved draft |
| Edited starter proposals retained explanations of their original text; recovery drafting skipped its prerequisite | Show an edited-proposal explanation, draft a recovery hypothesis connected to its question, and connect propulsion questions to their module | Presentation regressions; supported relationship contracts preserved |
| Imported text could become Markdown headings, links, or HTML in a brief | Serialize literal text with escaping or adaptive fences and preserve whitespace inside fenced notes | Import-based tests for headings, lists, HTML, multiline titles, indentation, and backticks |

The root README, current state, roadmap, and workspace guide now separate accepted intent, implemented local tools, prior publication, and proposed physical work. Historical implementation and notebook results remain recorded above. This audit did not change OneNote, commit, push, or publish.

### Follow-up verification

- `npm test`: **46/46 pass**. `GITHUB_PAGES=true npm run build`: pass. The existing 591 kB model-chunk advisory remains.
- `tests/browser/smoke.mjs`: pass in a fresh standalone Chromium context against the local dev server. It covers draft reload, standalone review context, selecting the second of two recovery branches, failed-save messaging with unchanged stored bytes, exporting the unsaved draft, short-screen tour export, and actual downloaded-JSON import through the file input followed by reload. Records, edges, and story survive the roundtrip.
- Desktop logic-map rendering at 1440 × 1000, phone map at 390 × 844, and tour at 320 × 568 were visually inspected. The short-screen document width is 320 px and its tour zoom remains valid. No page errors occurred in the browser regression run.
- `git diff --check` and local Markdown link checks passed. No dependency or canonical source snapshot was changed.

The Chrome extension control connection was unavailable, so UI verification used bundled Playwright with an isolated Chromium profile. This closes a browser file-input roundtrip check, not every native file-chooser, crash, accessibility, touch, or performance scenario. Prior notebook/save/sync observations were not reverified. Owner visual acceptance and current public-site parity remain open.
