# Recoverable Flight Lab: digital workspace scope

Audience: students, owner, and next builder. Type: proposed product scope. Updated: 2026-09-08.

Status: proposed scope with a first local implementation now authorized by the user and recorded in [implementation evidence](DIGITAL-WORKSPACE-IMPLEMENTATION.md). Final visual acceptance and the unselected architecture decisions remain open. The [user vision](../USER-VISION.md) owns intent; the [reset decision](DECISION-2026-09-08-DIGITAL-RESET.md) supersedes the entire former site. This document owns the proposed digital product and its release boundary. Physical requirements remain in the [system specification](SYSTEM-SPEC.md), physical gates in the [roadmap](ROADMAP.md), and simulator development in its [separate specification](SIMULATOR-DEVELOPMENT-SPEC.md).

## Product definition

Build a project thinking space where students can move from an ambitious vehicle idea to a question, a test plan, and an explainable decision without losing the original idea. A whiteboard captures connections but cannot reliably carry source provenance, configuration context, or the difference between a planned result and a measured one. The workspace should make those distinctions easy to inspect while keeping the vehicle visually compelling.

Primary users are student teammates preparing a working review. A faculty advisor is a secondary reader; visitors use a curated presentation view. Proposed primary session: a teammate opens the project before a meeting, inspects one module, adds a question and test proposal, saves the discussion, and walks the group through the unresolved chain. This is a proposed session design, not an observed usability result.

| Credible shape | What it does well | Cost or limitation | Disposition |
|---|---|---|---|
| 3D model with annotation drawers | Immediate understanding of parts and transformation | Research and decisions become buried in drawers | Use as an inspection mode |
| Free spatial whiteboard with embedded model | Flexible thinking and visible connections | Unbounded boards become cluttered; weak evidence structure | Use a bounded, typed version as the primary workspace |
| Structured engineering notebook with linked 3D viewer | Strong records and readable review sequences | Spatial exploration becomes secondary | Use its outline and record structure as an equivalent navigation view |

Recommended direction: a spatial board with typed cards, a central concept anchor, and an explicit 3D inspection mode. The outline, board, and inspector select the same records. It helps students think by exposing unanswered relationships, build by turning questions into proposed experiments, and explain by arranging a short evidence-aware story. A browser-delivered local application is recommended; no hosting, account system, or framework is selected by this scope.

## Requirements and traceability

U rows are accepted user requirements from the reset and packet, not acceptance of our proposed implementation. A criteria are future implementation checks, not checks passed in this task.

| ID | User requirement | Proposed interaction | Acceptance criterion |
|---|---|---|---|
| U1 | Start fresh; scrap the whole site | Workspace entry with board, outline, inspector, and working records | A1: builder supplies an asset/code provenance manifest and fresh creation record, reviewer checks it against reset exclusions without reopening discarded assets; entry has no marketing-page section sequence. Historical non-reuse also requires builder attestation, not an automated proof |
| U2 | Comprehensive, organized expansion of the whiteboard | Typed relationship graph plus searchable outline | A2: all nine entity types below are reachable and relationships have readable labels; comprehensive coverage does not require every later feature in release one |
| U3 | Spatial exploration and dragging | Pan/zoom board, move cards, fit selection and fit board | A3: position changes persist and have button/keyboard alternatives; board and model gestures never act together |
| U4 | Impressive, understandable 3D; hover and selection | Dedicated orbit view with selectable modules and persistent detail | A4: all three modules can be selected by pointer, touch, or outline; user review assesses visual quality rather than inferring it from build success |
| U5 | Wings stow inside body | Stowed, cutaway, and deployed illustrative poses | A5: both stowed wing meshes are inside the cylinder envelope; deployed span label includes the body; visible interference is disclosed, not hidden as a solved mechanism |
| U6 | Preserve ambitious original concept | Original vision layer with all stated features and candidate goals | A6: original length, diameter, span, cone payload/two fins, middle wings, and aft styling/two fins remain inspectable; no engine selection implied |
| U7 | Feasibility available in detail, without overwhelming the experience | Short status chip plus expandable question/evidence chain | A7: first view is concept-led; every performance or test claim exposes its provenance and status within one detail opening |
| U8 | Preserve options and evidence truth | Separate proposed baseline layer and candidate branches | A8: no goal priority, baseline acceptance, flight result, G0–G4 completion, or simulator route is fabricated |
| U9 | Scope before building, preserve reset and privacy | This scope, reset note, and bounded builder packet | A9: no replacement application built in this task; no private photograph, personal names, credentials, or local source paths in future seed content |

Recommendations, not user requirements: local single-user editing, typed cards, a bounded opening board, an explicit orbit toggle, five-stop story mode, JSON export/import, and the release order below. Final physical architecture, publication, priority order, and shared collaboration remain owner choices.

## Information model

Records have stable IDs, type, title, short summary, detailed text, provenance, revision, and applicable concept/configuration. Spatial position is view state, never a technical relationship. Edges have IDs, source/target IDs, and a typed verb. All links appear textually in the outline/inspector, even when offscreen on the board.

| Entity | Meaning and minimum extra fields | Relationships |
|---|---|---|
| Vehicle concept | Original C4 aspiration or proposed C0/C1/C2 track; dimensions with units and certainty | contains modules; motivates questions; constrained by decisions |
| Module | Named functional part; role and configuration-specific geometry reference | belongs to concept; raises questions; referenced by experiments |
| Question | An answerable unknown; open/answered/deferred, owner role or unassigned | concerns module/concept; investigated by hypothesis and experiment |
| Source | Document or permitted external reference; title, locator, date/version, provenance | informs questions/hypotheses; cited by evidence and decisions |
| Hypothesis | Testable proposed answer; assumptions and applicable configuration | answers question provisionally; tested by experiment |
| Experiment | Proposed test record; criterion set before test, setup summary, authorization status, article revision | tests hypothesis; addresses question; produces evidence only when available |
| Evidence | Existing artifact and its origin, units where relevant, date, configuration, uncertainty/limits | produced by experiment or derived from source; supports or challenges hypothesis/decision |
| Decision | Proposed/accepted/superseded; rationale, authority, date, revisit trigger | cites evidence; resolves or defers question; affects concept and milestone |
| Milestone | Reference to G0–G4 or SD0–SD4 owner, required evidence, recorded disposition | requires decisions/evidence; never closes merely because cards exist |

Keep claim class separate from workflow status. Claim classes: concept (illustrated aspiration), proposal (suggested action), estimated (assumptions/calculation), simulated (identified model/run), measured (identified observation/raw artifact), unknown. A source describing another vehicle does not become measured evidence for this project. “Completed experiment” needs an outcome, including fail or inconclusive; it does not imply accepted design or gate closure.

Initial content contains no synthetic telemetry, placeholder measured results, or success percentages. A source record for the system specification is real documentation; the first wing experiment remains proposed with no result. Every module has a recovery-responsibility question, including pieces that might separate.

## Opening board and interaction blueprint

Low-cost layout sketch, not a finished visual or inherited design:

```text
[Project / Original vision] [Search] [Board | Inspect 3D | Outline] [Save / Export]
+----------------------+-----------------------------------+--------------------+
| Outline              | Question: internal packaging     | Selected record    |
| Original concept     |       investigates               | short explanation  |
|   Nose payload       | Hypothesis -> Proposed test      | status + source    |
|   Middle wing bay    |       \                          | linked records     |
|   Propulsion concept |   [3D concept anchor]            | details / edit     |
| Proposed baseline    |       /                          | pin comparison     |
| Goals and gates      | Recovery question -> G0          |                    |
+----------------------+-----------------------------------+--------------------+
[Back] [Fit board] [Fit selection] [Zoom - / +] [Arrange selected] [Present]
```

Open at a curated overview with three module nodes, a goals cluster, and a next-question cluster. The model anchor is an entry to inspection, not a miniature second interactive camera. Deeper records appear through “show connections,” with a visible count and collapse control. Avoid laying every record onto the opening board. First use shows one dismissible gesture hint; subsequent use restores the last saved view.

| Surface/action | Contract |
|---|---|
| Board | Drag empty background or Space+drag pans; wheel/trackpad scroll pans; explicit zoom controls and pinch zoom. Drag card header moves a card; click selects. No 3D orbit in this mode. |
| Inspect 3D | Explicit entry replaces the board center with the model viewer and shows “Orbit mode.” Drag rotates; zoom controls adjust camera; named Front/Side/Top/Home views provide alternatives. Exit restores the board camera and selection. |
| Hover/select/pin | Hover previews a name only; selection opens persistent detail and is mirrored in outline and model. Pin keeps one comparison record visible while selection changes. Escape dismisses transient UI, then exits inspection; it never deletes work. |
| Connections | “Connect” opens source, verb, and target selectors; validate compatible types. No drag-only edge creation. Removing an edge leaves both records; referenced records require link resolution before deletion. |
| Navigation/search | Search titles, summaries, IDs, and types; results include concept and status. Choosing a result selects/reveals it with a breadcrumb and Back history. Filters do not change records; hidden connections have counts. |
| Progressive detail | Title, role, claim chip first; summary and connected questions second; source locator, assumptions, failure questions, and history on explicit expansion. A sticky claim chip remains visible during model animation. |
| Keyboard | Tab follows toolbars, outline, then inspector, not thousands of scene objects. Enter selects; Space activates controls. Arrow keys navigate outline; position fields or Move left/right/up/down buttons arrange selected cards. All viewer actions have named controls. Visible focus and no keyboard trap. |
| Touch/small screens | Tap selects; no hover dependency. Pan on blank board, move via selected-card handle or Arrange controls. On narrow screens show board, outline, or inspector one at a time with a persistent selected-record breadcrumb. Pin becomes a comparison tab. |
| Reset/recovery | Fit board affects camera only. Home view resets 3D camera only. Restore starter layout resets positions only with undo. Clear local project is a separate explicit destructive action offering export; never attached to a view reset. |

Use text and shapes as well as color for statuses; respect reduced-motion preference with direct pose changes and no ambient camera drift. If 3D fails, keep the outline, editing, sources, and labeled orthographic illustration available. Screen-reader descriptions explain each pose and its limits.

## One end-to-end session

1. Open Original vision. Select Middle wing bay from the board or outline. Its inspector says “concept,” shows the 1 ft body diameter and 3–4 ft total deployed span, and names internal packaging as unresolved. Enter Inspect 3D; choose Cutaway and Stowed. The model reveals interior wing volumes and a labeled conceptual actuator/gear/axle region.
2. Choose Deployed. Both wing poses become visible; no launch or glide sequence plays. Expand “What remains unknown?” and open Q-WING-PACK: “Can both wings and the required hardware fit without interference?” The source is the captured user vision, not a CAD validation report.
3. Add H-WING-PACK as a proposal: “An internal arrangement may fit; component dimensions and clearances remain unknown.” Connect it to Q-WING-PACK and create X-WING-MOCKUP, a proposed inert packaging review. Its criterion is explicitly “not set, requires mechanical review”; it cannot be marked ready. Link the system specification and G1 requirements. Do not invent successful test evidence.
4. Add a proposed decision to keep packaging unresolved until measured mockup evidence exists; link the hypothesis and test. Save locally, then export a project file. Reload and verify the question, connections, positions, and proposal statuses survive. Failure to persist must leave the project available for export with an unsaved indicator.
5. Present a five-stop sequence: original silhouette, internal wing question, proposed test chain, proposed independent development tracks, and open G0 choice. Each stop stores record IDs and view state, not a copy of facts. Exit presentation and return to the same working selection. The coherent story is ambition → unknown → test → proposed path → next decision, with no fabricated ending.

## Persistence and editing boundary

Release one recommends one local project, one user, no accounts or server. The repository documents remain canonical for captured intent and engineering decisions. Imported seed records retain document/section provenance and source revision; local edits are workspace proposals, not silent edits to repository truth. Existing accepted-source assertions and gate dispositions are read-only. Users can add/edit questions, hypotheses, proposed experiments, proposed decisions, and their typed links, arrange cards, and edit the presentation sequence. No result uploader or “accept decision” control in release one.

Use a versioned project JSON file containing records, typed edges, view state, and story stops. Autosave to browser storage after edits, show saved/unsaved/error state, and expose explicit Export and Import. An export is the portable recovery copy; browser storage alone is not a backup. Import validates schema, IDs, references, size limits, and allowed URL schemes before mutation; show a summary and require choosing a new local copy or replacing the current one after export. No merging in release one. Reject unsupported versions and malformed files without losing current work. Treat text as text, not executable HTML; do not fetch arbitrary embedded content.

Undo/redo covers this session's edits and layout changes; persisted state restores the current project, not necessarily the full undo stack. Close/reload behavior, failed writes, duplicate-tab conflict detection, and a stale-source revision notice are acceptance cases. If a second tab changes the revision, stop overwriting and offer reload or export of the local branch. Resetting the camera must never erase records. Store no secret credentials, original photo, analytics, or personal contact data in the seed.

## Fresh visual and concept-model brief

Proposed art direction: a quiet orbital workshop, with deep blue-black space behind a readable graphite board, warm off-white typography, restrained cyan selection, and amber unresolved-question marks. Sparse stars suggest depth; no orbital track, planet-scale vehicle, flame spectacle, or fake instrumentation. Opaque inspector panels preserve legibility. Semantic colors are paired with labels; source links look like citations, not glowing mission controls.

The vehicle should feel like a considered industrial concept through silhouette, panel seams, layered shell thickness, and controlled highlights. Use matte ceramic-like outer surfaces, darker internal structure, and a restrained metallic axle/gear region to explain roles. These are illustrative materials, not chosen flight materials. A broad key light and subtle rim light reveal curvature and cavities; avoid mirrors and bloom that hide mechanism geometry.

Preserve the original proportions: 7–8 ft length, 1 ft cylinder diameter, 3–4 ft total deployed span including the body. Store ranges and display “aspirational”; if a nominal 7.5 ft length and 3.5 ft span are used for drawing, label them illustrative midpoints. Include a scale ruler in ft and m, with consistent conversions. Do not assign unknown baseline dimensions or imply that differently zoomed views are at equal scale.

Model three recognizable selectable modules. The nose contains an altimeter/hardware volume and two fins; its intended detached glide is an aspiration. The middle carries two internally stowed wing volumes and a conceptual motor/gear/axle region. The aft section has two smaller fins and fighter-jet-inspired thruster styling labeled “propulsion unresolved.” No turbine blades, fuel lines, motor model, detailed release hardware, or working flight controller need to be invented.

Require a purpose-built model, not externally folded slabs. Start with a declared cylinder envelope, design two internal wing poses, and show them in a cross-section with interior hardware envelopes. Explain unresolved occupied volume with visible callouts. If a believable continuous path cannot be represented, use discrete stowed/deployed poses and state “motion path unresolved” rather than clipping through the shell or teleporting parts in a supposedly solved animation. Satisfying the illustrative envelope is a visual check, not manufacturing clearance verification.

Cutaway removes a selected shell region without deleting payload/wing volumes. Exploded view moves the three modules apart along the vehicle axis with dashed relationship guides and a “concept separation, recovery unresolved” caption. It explains anatomy, not separation dynamics. Wing pose, cutaway, and exploded state are independent controls with a Restore assembled action. No automatic playback on entry; a later continuous mechanism animation requires its own review.

Original vision and Proposed development tracks are separate named layers, with persistent labels and different record IDs. The proposed C0 inert mechanism, C1 conventional rocket, and C2 independent glider appear as separate artifacts, never as a validated transformation of C4. For release one, baseline cards and modest labeled silhouettes suffice; do not spend effort inventing three detailed alternative vehicles. The compelling 3D effort goes into the original concept.

## Staged scope and evidence plan

| Slice | Included outcome | Acceptance/evidence before advancing |
|---|---|---|
| W1: Local thinking workspace | Typed seeded board/outline, fresh original 3D concept, explicit inspection, discrete poses/cutaway/exploded view, local proposal editing and connections, autosave/export/import, five-stop presentation | A1–A12 plus the full session above; keyboard/touch and 3D-fallback checks; owner visual review remains required for acceptance |
| W2: Durable project records | Evidence attachments/references, source refresh/reconciliation, proposed-to-accepted decision workflow with authority, revision history | Real permitted artifact roundtrip, source changes exposed, no local proposal silently promoted; define attachment rights/storage policy first |
| W3: Recorded replay and comparisons | Import of a selected recorded-data format, quality-aware timeline, video alignment, prediction versus held-out data | Execute audit E5; preserve units/timestamps/gaps, identify derived values, verify against raw channels; no demo synthetic log represented as this team's flight |
| W4: Optional shared or solver-connected workspace | Collaboration or simulator run integration only for an accepted need | Separate permissions/conflict/hosting scope for sharing; SD gates and run contracts for solver connection; choose one justified extension at a time |

W1 exclusions: live collaboration, login, deployment/public sharing, CAD editing/manufacturing export, live sensors, solver execution, telemetry replay, accepted-decision writes, autonomous flight control, custom propulsion, drone operation, full fluid/structure/contact simulation, mobile-native apps, and an exhaustive project-management suite. Search and visible source references are included; a general document ingestion pipeline is not.

Proposed performance target for W1: usable board within 3 seconds on a declared development laptop with local assets; responsive dragging/orbit at 30 fps or better on a declared test scene capped at 100 visible cards. Measure and report hardware/browser and scene size, not an unsupported universal claim. Lazy-load the 3D view and stop rendering when idle. If the model misses the target, simplify hidden geometry before removing meaningful explanatory structure. These targets are recommendations, not measured results.

## Engineering literacy in the workspace

Use short expandable learning cards linked to questions. Navigation estimates current motion; guidance describes a desired state/path; control changes behavior toward it. Deployment changes configuration and is a separate function. “Self-orientation” therefore opens a question about the desired behavior, sensing, failure behavior, and independent aircraft evidence rather than an autopilot selector. No powered-flight guidance algorithms or targeting controls belong here. The [simulation plan](SIMULATION-PLAN.md) owns this boundary. The high-level distinction is supported by [NASA navigation and guidance terminology](https://ntrs.nasa.gov/api/citations/19710029210/downloads/19710029210.pdf); no implementation detail is transferred from that historical reference.

The feasibility cluster asks which demonstration matters first; what mass and packaging evidence exists; how each separated piece returns; whether the cone can support the desired aircraft behavior; and what budget, facilities, mentor, and site route exist. It displays unanswered fields plainly rather than assigning scores. Mach 1 stays a candidate with a separate measurement/feasibility review, not a speed slider. Held-out prediction is a future evidence relationship: prediction revision frozen before the test, then compared with independently acquired measurements.

For optional drone recovery, compare a separate search drone with a carried aircraft and conventional tracking. A carried aircraft adds packaging, mass/power, release/transition, and a separate recovery responsibility; a search drone avoids carriage but adds an aircraft operation and does not replace tracking. Keep these as proposed trade questions from [trade studies](TRADE-STUDIES.md), with no automatic recommendation to operate either. The product does not issue flight authorization. The [FAA educational users page](https://www.faa.gov/uas/educational_users), checked 2026-09-08, describes distinct applicable operating frameworks; educational use alone does not select or satisfy one. No carried-aircraft permission assessment was performed.

G0 remains open: digital scoping is not advisor agreement to a physical mission. G1 requires actual independent models/bench records; G2 requires independent flight evidence; G3 is the integration decision; G4 requires the approved integration/reuse evidence. Show requirement lists with “evidence not yet recorded,” never filled progress bars. Physical gate truth remains in the roadmap and reviewed records, not a completion button.

## Reuse and technical evidence

The [dated open-source audit](OPEN-SOURCE-AUDIT-2026-09-08.md) is inspiration, not a dependency decision. Preserve OS01 evaluation order, OS02 version matching, OS03 independent model boundaries, OS04 unverified runtime readiness, and OS05 replay reuse review. E1–E5 remain unexecuted by this task. Do not copy release/license snapshots into current product requirements or select an entire tool stack here.

OpenRocket/RocketPy can inform future run provenance; FreeCAD informs a possible later geometry source; OpenVSP/JSBSim belong to independent aircraft study. No integration follows merely from displaying their names. AltOS E5 is especially relevant before custom replay because the product needs trustworthy channels and gaps, not a novel plotting library. Verified primary-source findings and review dispositions follow below.

## Decisions, unknowns, and revisit triggers

| Choice | Current recommendation or unknown | Owner / trigger |
|---|---|---|
| Main product use | Working team review first, presentation derived from the same records | User; revisit if intended use is mainly visitors |
| Storage | One local user plus portable export for W1 | User; shared simultaneous work would change the architecture before building it |
| Visual direction | Quiet orbital workshop; discrete explanatory mechanism poses first | User visual review of fresh W1 prototype; failed internal-stowage or clarity check reopens model work |
| Physical priority and architecture | Unselected; proposed baseline remains a recommendation | User and qualified team at G0; does not block illustrating options |
| Stack and simulator route | Unselected; choose maintained browser tools only when implementation starts | Builder verifies current primary docs/licenses; SD0 owns solver route |

Only three product choices materially benefit from user input before committing a full build: working-session versus presentation emphasis, whether simultaneous shared editing is required immediately, and whether the proposed art direction fits. W1 is scoped using the stated recommendations; silence does not make them accepted. Budget/mission questions continue through G0 separately.

## Reconciliation and review record

The integrator owns all repository writes. A bounded Luna-medium source-check lane verifies accessibility, persistence, and replay sources without a duplicate repository scan. The same bounded reader independently reviewed the draft scope and returned five findings. This is an independent document reading, not an independent engineering or visual approval; the integrator resolved the findings below. Source reset documents were read from the handoff worktree and reconciled here; that source worktree was not edited. The obsolete website prompt and generated diagram inherited in this checkout were removed. No application was created.

See the [next builder packet](DIGITAL-WORKSPACE-BUILDER-PACKET.md) for executable scope. This document is a recommendation ready for review, not authorization to launch another task or implement automatically.


### Additional W1 acceptance contracts

| ID | Required implementation evidence |
|---|---|
| A10: Recovery | Exercise failed autosave, reload after successful save, corrupt and unsupported import, duplicate-tab conflict, export/import roundtrip, and stale-source mismatch. Each preserves the prior valid project or exposes a recoverable unsaved copy. Close/reload during a pending write must not claim that unsaved changes were saved. |
| A11: Source revision | Seed manifest records document-relative locator, section, and content hash plus capture date. Each saved project records its seed manifest ID. On opening/importing a project, compare against the bundled manifest. Mismatch shows “source snapshot differs; review before relying on this record,” preserves proposals, and links the affected records. W1 does not monitor live repository edits or external sites. Test with two fixture manifests, not a network poll. |
| A12: Visual review | Capture assembled, internal-stowed cutaway, deployed, exploded, and proposed-baseline comparison views plus narrow-screen inspector. Owner reviews module recognition, internal stowage readability, silhouette/material quality, legible scale/status labels, and distinction between aspiration and baseline. Record accepted/revise/pending with reasons for each. A build pass cannot substitute for this review. |

### Primary-source check, 2026-09-08

These are verified source statements followed by our product recommendations, not installed-library or compatibility claims.

| Finding | Primary source | Disposition |
|---|---|---|
| S01: Dragging needs a single-pointer alternative; keyboard operation is also required by the corresponding WCAG criterion | [W3C dragging technique](https://www.w3.org/WAI/WCAG22/Techniques/general/G219), [keyboard criterion](https://www.w3.org/TR/wcag/#keyboard) | Incorporated Arrange buttons/position controls and keyboard outline; keyboard alone is not the single-pointer alternative. No WCAG conformance audit occurred. |
| S02: Reduced-motion preference is exposed by the browser; nonessential ongoing motion needs appropriate controls | [MDN reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion), [W3C pause/stop/hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) | W1 uses discrete poses, no ambient camera motion, and reduced-motion handling. Later replay must be controllable. |
| S03: Browser storage can be evicted and private-session storage is transient | [MDN storage quotas and eviction](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria), [Web Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) | Portable export, explicit error state, and A10 recovery checks are required. No claim of permanent local storage. |
| S04: AltOS documents stored flight replay, graphing, and CSV export; received telemetry can omit data | [AltOS manual](https://altusmetrum.org/AltOS/doc/altusmetrum.html) | W3 must evaluate E5 before custom replay, preserve raw provenance, and show gaps. Tool execution and sample-log verification remain pending. |

### Independent draft review disposition

| ID / severity | Finding | Resolution and owner | Revisit |
|---|---|---|---|
| V01 / high | Persistence behaviors were not explicit in the W1 gate | Integrator added A10 and linked W1 to A1–A12; builder packet contains recovery checks | W1 observed failure tests |
| V02 / high | Draft promised primary-source findings without recording them | Integrator added S01–S04 and citations, plus NASA/FAA references for literacy boundaries | Recheck technical dependencies when implementing |
| V03 / medium | Historical non-reuse cannot be proven by a generic acceptance line | Integrator added provenance manifest, fresh creation record, review, and attestation limits to A1 | Builder asset review |
| V04 / medium | Visual acceptance lacked views and rubric | Integrator added A12 with explicit views and owner disposition | Owner W1 review, currently pending |
| V05 / medium | Stale-source detection was undefined | Integrator added A11 bundled-manifest comparison and explicit no-live-monitoring limit | Import/source revision fixtures |

All five findings are addressed in the scope, not validated in software. The integrator checked their disposition against the final text. The reader did not run a second review or approve a future model. No hardware, simulation, usability, browser, or application tests were run in this documentation-only task.
