# Next builder packet: first local workspace

Audience: next builder and reviewer. Type: bounded implementation packet. Updated: 2026-09-08.

Status: executed for a first local implementation after the user explicitly requested building from the whiteboard reference with side text. See [the implementation record](DIGITAL-WORKSPACE-IMPLEMENTATION.md) for passed checks and remaining review. The original packet below remains the scope reference, not proof that every acceptance check has passed.

## Outcome and context

Implement W1 from [the scope](DIGITAL-WORKSPACE-SCOPE.md), a local spatial thinking workspace with a fresh original-concept 3D inspector and an end-to-end question-to-test-to-presentation session. Read current [vision](../USER-VISION.md), [state](../STATE.md), [reset](DECISION-2026-09-08-DIGITAL-RESET.md), and the full scope first. Inspect live worktree changes and applicable instructions before editing. If the user changes scope, reconcile the owner document before building.

The entire former site and redesign were rejected. Do not retrieve their code, generated model, screenshots, diagram, or website-builder prompt from Git or another worktree as references. The original concept remains aspirational. Wings stow inside the cylinder; deployed span includes the body. Baseline tracks and all digital design choices labeled recommendations remain proposals unless the user accepts them.

## Ownership and execution

OWNER: user owns product priorities, final architecture, and publication. Engineering approval remains with the qualified team.

BUILDER: one capable integrator using efficient-agent-routing. Prefer balanced capability and medium effort for implementation; any authorized helper gets a disjoint bounded lane. Follow the skill's model caps. No delegation is necessary by default.

VERIFIER: builder runs functional checks; a separate reviewer may inspect evidence. Owner visual review is separate and must not be claimed from automated checks. Report who actually reviewed what.

SCOPE: create a fresh `workspace/` application and its tests/fixtures, plus narrow updates to this scope and project state. Use a maintained browser stack after checking current official documentation and licenses. Do not treat a framework choice as a user requirement. Seed from repository-owned text and generic role names only. Keep canonical source data separate from mutable local proposals.

DO NOT TOUCH: unrelated engineering records, simulator code, source photos, accounts, hosting, deployment, repository visibility/access, external messages, propulsion hardware, powered-flight guidance, or source worktrees. No paid services. No remote analytics or background uploads.

## Build sequence

1. Establish typed records/edges, canonical seed provenance, local proposal editing, outline/search, and the working board. Implement validation and portable export/import before expanding content.
2. Create an original concept model and explicit inspection mode, internal wing poses, cutaway and exploded views. Keep unresolved kinematics explicit. Establish labeled fallback illustrations and keyboard/touch equivalents.
3. Connect the entire session in the scope, including source inspection, proposed test, local save/reload/export/import, and five-stop story navigation. Add later slices only through a new scoped decision.
4. Run the acceptance checks below and inspect the rendered experience. Present the local artifact for user review with limitations and unresolved choices. Do not deploy or start another task automatically.

## Observable gate

Trace A1–A12 in the scope to changed files and observed checks. Demonstrate the full wing-packaging session with no preexisting measured evidence. Record at least these checks:

| Check | Required observation |
|---|---|
| Functional session | Question/hypothesis/proposed experiment and links survive reload and export/import; selecting story stops refers to current record content |
| Data recovery | Failed storage write shows unsaved state and permits export; corrupt/unsupported import preserves current project; second-tab revision conflict does not overwrite silently |
| Interaction access | Pointer, keyboard-only, touch-sized controls, no-hover use, reduced motion, named camera presets, and 3D failure fallback cover the session; no drag-only operation |
| Geometry and truth | Stowed wing vertices remain within the declared cylinder envelope; rendered cutaway is legible; full deployed width matches illustrative span including body; no fabricated flight/approval or solved-transition implication |
| State boundaries | View resets preserve records; deleting a referenced proposal resolves its links; read-only source/accepted records cannot be overwritten; local proposals never close G0–G4 |
| Visual/performance | Inspect declared desktop and narrow viewport, selection readability, module differentiation, label collisions, and loading/error states; measure the proposed performance targets on named hardware/browser; request owner visual acceptance without claiming it already occurred |

Use meaningful automated checks for schema, references, persistence failure/import, mode isolation, and geometry envelopes; supplement with actual rendered/manual observations. A mesh-bound check establishes only the illustration's envelope, not engineering fit. Do not report unrun tests as passed. Record any accessibility checks not performed; these checks alone are not a WCAG certification.

RETURN: changed paths, runnable local instructions, screenshot or local preview, acceptance evidence, actual review status, and unresolved defects. Stop at a reviewable W1. No auto-deployment, simulator integration, or next task.
