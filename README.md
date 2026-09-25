[Current state](STATE.md) · [Physical roadmap](docs/ROADMAP.md) · [Drone track](docs/DRONE-TRACK.md) · [Decision register](docs/REGISTERS.md) · [Optional interactive site](https://onionviolet.github.io/recoverable-flight-lab/)

# Recoverable Flight Lab

Planning repository for student rocketry, gliders, drones, recovery, simulation, and evidence-backed flight projects.

**Physical status: no vehicle has been designed for manufacture, simulated, flight-qualified, or flown by this project.** The integrated folding-wing concept remains an aspiration. A conventional rocket, separate glider, and inert wing mechanism are proposed development articles, pending G0 scope decisions.

**Planning status: G0 and D0 are open.** The primary demonstration, budget, mentor and reviewer coverage, test access, and evidence criteria still need owners. The rocket and drone branches are planning tracks, not selected builds. The [G0 first-article review sheet](docs/G0-FIRST-ARTICLE-REVIEW.md) is a proposed way to make the first physical choice.

**Site status: extra.** The spatial ideaboard in [`workspace/`](workspace/README.md) remains a useful optional viewer and discussion tool. It is not the canonical project planner, and its cards cannot close an engineering gate. The [planning-first decision](docs/DECISION-2026-09-21-PLANNING-FIRST.md) records this change.

## Plan the project

Start in [current state](STATE.md), choose the relevant track, and record accepted changes in the owning document. Use [the roadmap](docs/ROADMAP.md) for shared physical gates, [the drone track](docs/DRONE-TRACK.md) for Flightory Stallion, FPV, speed, autonomy, and mission work, and [the register](docs/REGISTERS.md) for decisions and risks.

## Read the project

| Document | Owns |
|---|---|
| [Current state](STATE.md) | Current handoff, active blockers, and next review |
| [User vision](USER-VISION.md) | Accepted intent, physical aspirations, and project identity |
| [Tentative achievement goals](docs/ACHIEVEMENT-GOALS.md) | Reuse, flight replay, wing demonstration, prediction, and a Mach 1 stretch option |
| [System specification](docs/SYSTEM-SPEC.md) | Configuration, requirements, interfaces, acceptance evidence |
| [Development roadmap](docs/ROADMAP.md) | Proposed physical milestones, roles, budget structure, and test records |
| [G0 first-article review sheet](docs/G0-FIRST-ARTICLE-REVIEW.md) | One bounded mission decision and its exit evidence |
| [Drone track](docs/DRONE-TRACK.md) | Flightory Stallion, FPV, high speed, autonomy, VTOL, endurance, and mission planning |
| [Simulation plan](docs/SIMULATION-PLAN.md) | Model fidelity, inputs, validation, guidance scope |
| [Simulator development scope](docs/SIMULATOR-DEVELOPMENT-SPEC.md) | Extending upstream, maintaining a fork, or building a new simulator; architecture and development gates |
| [Open-source audit](docs/OPEN-SOURCE-AUDIT-2026-09-08.md) | Dated tool comparison, release/license evidence, local readiness, and evaluation packets |
| [Digital workspace scope](docs/DIGITAL-WORKSPACE-SCOPE.md) | Historical scope and boundaries for the optional site |
| [Digital workspace implementation](docs/DIGITAL-WORKSPACE-IMPLEMENTATION.md) | Site implementation evidence and remaining review limits |
| [Workspace guide](workspace/README.md) | Optional site run, use, storage, and software limits |
| [Propulsion and recovery choices](docs/TRADE-STUDIES.md) | Engine acquisition, jet comparison, visual presentation, alternatives |
| [Risk and decision register](docs/REGISTERS.md) | Open questions, hazards, decisions, next owners |
| [Sources](docs/SOURCES.md) | Primary references and their limits |
| [Planning-first decision](docs/DECISION-2026-09-21-PLANNING-FIRST.md) | Why Markdown planning now leads and the site is secondary |

## Working conventions

Keep user aspirations distinct from accepted engineering decisions. Record each new decision with its evidence and revisit trigger.

Keep geometry editable. Record units, assumptions, source versions, and measured values with every analysis. Mark illustrations and synthetic data clearly.

Markdown owners are authoritative. The optional site may organize or present questions, drafts, and links, but it does not update decisions automatically. Physical gate status comes only from reviewed test records and the roadmap.

Use commercial certified motors through a qualified mentor and approved launch process. This repository contains no custom engine fabrication, propellant recipes, ignition procedures, or operational ascent-guidance implementation.

The repository and GitHub Pages workspace are public. The September 25 Pages release was checked against its built assets and source snapshot; see the [release record](docs/PUBLIC-RELEASE-PLAN.md). Team membership and repository licensing remain owner decisions. Third-party software keeps its own license.
