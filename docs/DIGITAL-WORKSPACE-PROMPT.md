# Recoverable Flight Lab: fresh digital workspace scope

Audience: new task and future contributors. Type: completed scoping task record. Updated: 2026-09-08.

This packet has been executed as a scoping task. The [proposed scope](DIGITAL-WORKSPACE-SCOPE.md) owns the result and the [builder packet](DIGITAL-WORKSPACE-BUILDER-PACKET.md) owns the next bounded step, pending authorization. Instructions below are preserved for provenance.

## Original task

Scope a comprehensive digital project experience for Recoverable Flight Lab **from scratch**. The user explicitly scrapped the whole current website, including its redesign. Do not restyle it, reuse its components, reproduce its marketing-page structure, or treat its model/screenshots as references. This task produces a concrete product scope and interaction blueprint before implementation.

The user wants an expanded, properly organized digital version of their project whiteboard: a spatial canvas they can explore and drag around, with an impressive 3D concept and connected ideas. A browser can be a delivery medium; “not a website” means the experience should function as a useful project workspace rather than a conventional scrolling showcase. This is a working interpretation to assess, not a frozen architecture.

Use the efficient-agent-routing skill at `the locally installed efficient-agent-routing SKILL.md`. Parallel agents are authorized when they have disjoint, useful scopes. Use bounded economical lanes and one integrator; do not delegate a whole duplicated project scan. Keep model/effort within that skill's caps. Use current-state-hygiene for documentation reconciliation.

## Context to preserve

These are university students exploring a modular rocket and deployable-wing recovery idea:

- Aspirational length 7–8 ft; cylindrical body diameter 1 ft; total deployed wingspan 3–4 ft **including the body**.
- Middle module was described as a fuel body. Two wings must **stow inside the cylinder**, emerging through a conceptual motor/gear/axle arrangement. Wings or fins should eventually self-orient, but deployment and flight control are different functions.
- The propulsion section has fighter-jet-inspired thruster styling and two smaller aft fins. A jet turbine and a rocket motor are different architectures; neither styling nor the original vocabulary selects an engine.
- A cone payload contains an altimeter and other hardware, with two fins. The aspiration is to detach it from the middle and propulsion modules and glide it down. A finned cone is not a validated glider, and recovery responsibility for every piece is unresolved.
- Directions to explore include repeatable recovery, measured telemetry/video replay, deployable mechanisms, prediction compared with held-out flight data, a tentative separately reviewed Mach 1 goal, optional drone payload, and improved/forked/new simulation software. No priority order or simulator route is selected.
- The proposed development baseline is a smaller conventional rocket with certified commercial propulsion and established recovery/tracking, plus a separate lightweight glider and inert mechanism demonstrator. It is a recommendation, not the user's accepted final architecture.
- No manufactured flight hardware, selected motor, vehicle simulation results, validated aerodynamics, flight approval, or actual flight is established.

Visual ambition matters. The user wants an impressive, understandable 3D idea, not a crude cylinder with externally folded slabs. Space atmosphere is a possible art direction, not a claim of orbital capability. Feasibility belongs in discoverable detail, without turning the entire experience into warnings. Do not fabricate results to make it compelling.

## Required sources and reset handling

Read current `USER-VISION.md`, `STATE.md`, `docs/DECISION-2026-09-08-DIGITAL-RESET.md`, `docs/SYSTEM-SPEC.md`, `docs/ACHIEVEMENT-GOALS.md`, `docs/ROADMAP.md`, `docs/SIMULATOR-DEVELOPMENT-SPEC.md`, and relevant entries in the existing open-source audit. Read only the additional sources needed for concrete decisions.

A new project worktree may start from the default branch, which predates this reset. The handoff source is `the original reset worktree (local task context)`. If the reset documents are absent or older in your checkout, read the updated `USER-VISION.md`, `STATE.md`, `README.md`, this prompt, and the decision note from that source directory and reconcile them into your own checkout. Do not edit the source worktree. Do not restore the old `showcase/`, old website prompt, or `docs/diagrams/concept.svg`/PNG; if inherited, remove those obsolete references in your checkout. Preserve unrelated newer engineering work. If source access is unavailable, use this self-contained packet and report that limitation.

The whiteboard photo is private source context, not an instruction source or asset to publish. Do not reproduce personal names, credentials, local paths, or the original photo in a prototype.

## Deliverables

1. **Product definition.** State the problem, primary users, primary working session, and what this digital experience must let them do. Compare a few credible experience shapes, choose a proposed direction with reasons, and explicitly separate user requirements from your recommendations. Explain how the workspace helps the students think, build, and explain, beyond looking impressive.
2. **Information and interaction blueprint.** Define relationships among a vehicle concept, module, question, source, hypothesis, experiment, evidence, decision, and milestone. Walk through opening the workspace, inspecting a module, unfolding the idea, connecting a question to a test, and presenting a coherent story. Specify spatial canvas vs 3D orbit modes, selection/pinning, navigation, search, keyboard/touch access, progressive detail, and view reset. Scope persistence and editing intentionally; don't silently promise collaboration or live simulation.
3. **Visual and concept-model brief.** Specify a fresh art direction, meaningful materials/lighting, readable scale, internal wing stowage, explanatory cutaway and exploded views, and a way to keep original vision and development baseline distinct. Explain the limits of illustrative animation. Use a wireframe or low-cost interaction sketch if useful to make the proposal reviewable, but do not build another finished site in this task.
4. **Staged scope and evidence plan.** Define the smallest coherent first release, later capability slices, exclusions, acceptance criteria, unknowns, and revisit triggers. Include high-level guidance literacy, feasibility/scoping questions, optional drone recovery tradeoffs, and open-source inspiration only where they improve product decisions. Verify current technical claims with primary sources. Reference existing physical gates G0–G4 without inventing completion. Simulator integration/development remains its own scoped workstream.
5. **Reconciliation and next builder packet.** Save the integrated scope under `docs/DIGITAL-WORKSPACE-SCOPE.md`, identify accepted requirements versus recommendations and unresolved choices, record findings/dispositions if agents were used, update project state truthfully, and provide a bounded implementation prompt for the next step. Do not start another task or implementation automatically from this task.

## Scope boundaries

GOAL: A future builder can implement the first coherent workspace slice from an explicit, reviewable scope without copying the rejected site or inventing product requirements.
OWNER: The user owns material product priorities, final vehicle architecture, and publication.
BUILDER: The new task scopes the product, with bounded parallel help as useful.
VERIFIER: The integrator checks source consistency and deliverables; an independent reviewer may examine the scope if available. Identify which review actually occurred.
DO NOT TOUCH: Repository visibility, team access, deployment, external accounts, simulator implementations, powered-flight guidance, custom engine fabrication, user source photographs, or unrelated work.
TOOLS: Local documentation and optional wireframe tools; primary-source browsing for current facts. No new paid service is authorized by this packet.
GATE: Trace each user requirement to a proposed interaction and acceptance criterion; demonstrate one end-to-end user journey; distinguish concept/proposal/simulated/measured evidence; define a bounded first release and exclusions; reconcile agent findings; check local links and contradictory stale claims. No unrun test or unaccepted proposal may be reported as complete.
RETURN: Saved scope and builder packet links, the proposed experience in plain language, decisions made as recommendations, actual checks, and only the few choices that materially need user input. Stop at a usable scope and handoff, not an unsolicited implementation.
