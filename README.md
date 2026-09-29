[Current state](STATE.md) · [Physical roadmap](docs/ROADMAP.md) · [Drone track](docs/DRONE-TRACK.md) · [Decision register](docs/REGISTERS.md) · [Optional interactive site](https://onionviolet.github.io/recoverable-flight-lab/)

# Recoverable Flight Lab

Build a student flight project that is impressive to watch, clear to explain, and recoverable enough to demonstrate again. Explore folding wings, aircraft-like descent, drones, flight measurement, and simulation through a series of reviewable experiments.

The repository is the team’s planning surface. [User vision](USER-VISION.md) preserves the ambition; the track plans explain what would need to be learned before choosing a build.

## Two paths to explore

| Path | What the team could show | First choice to review | Plan |
|---|---|---|---|
| Rocket, glider, and recovery | A wing-deployment demonstration, measured rocket flight, and a separate glider, with integration considered later | Which single achievement should come first? | [Rocket roadmap · G0](docs/ROADMAP.md#milestones) |
| Drone flight lab | FPV, endurance, speed, mapping, or a simulated autonomy demonstration | One primary mission and at most one extension | [Drone track · D0](docs/DRONE-TRACK.md#workstreams-and-evidence-gates) |

These are proposed routes. The integrated folding-wing vehicle remains an aspiration; no architecture, airframe, or simulator route is selected. The tracks can share measurement and simulation work without becoming one vehicle.

**Where we are:** G0 and D0 are open. No manufacture-ready vehicle, executed simulation, flight qualification, or project flight result exists. The next useful result is an agreed first demonstration with a budget, consenting owner, reviewer, test access route, and evidence criterion. [Current handoff](STATE.md)

## Bring one choice to the first review

1. Read [the vision](USER-VISION.md) and choose the rocket or drone track to discuss first.
2. Use the relevant track plan to propose one demonstration and name what is outside its scope.
3. Capture the agreed constraints, evidence criterion, and one bounded next packet in [the first-review record](docs/REGISTERS.md#first-review-record).

The record is still unfilled. For a rocket-specific comparison, use the existing [G0 first-article review sheet](docs/G0-FIRST-ARTICLE-REVIEW.md). This reading route does not choose a mission or close a gate. Accepted decisions belong in the register and the relevant track plan. For questions or ideas from outside the team, use [the contribution guide](CONTRIBUTING.md).

## Explore the optional ideaboard

[Open the interactive site](https://onionviolet.github.io/recoverable-flight-lab/) to explore the spatial concept and connected ideas. It is an optional discussion aid; browser-local cards do not update the plan or establish engineering evidence. The September 29 presentation is published and live-verified, including the review tools and drone ideas. [Workspace guide](workspace/README.md) · [Planning-first decision](docs/DECISION-2026-09-21-PLANNING-FIRST.md)

## Find the supporting detail

Start with the track plan. Open these references when a specific question needs more detail.

| Question | Owning document |
|---|---|
| What is current, and what blocks the next review? | [Current state](STATE.md) |
| What did the team ask for? | [User vision](USER-VISION.md) |
| Which achievements could be worth pursuing? | [Tentative achievement goals](docs/ACHIEVEMENT-GOALS.md) |
| What are the rocket requirements and interfaces? | [System specification](docs/SYSTEM-SPEC.md) |
| What evidence would support the next physical stage? | [Development roadmap](docs/ROADMAP.md) |
| How do the drone missions and platform candidates compare? | [Drone track](docs/DRONE-TRACK.md) |
| What should be modeled, and how would it be checked? | [Simulation plan](docs/SIMULATION-PLAN.md) |
| Should we extend, fork, or build a simulator? | [Simulator development scope](docs/SIMULATOR-DEVELOPMENT-SPEC.md) |
| What did the earlier tool research establish? | [Dated open-source audit](docs/OPEN-SOURCE-AUDIT-2026-09-08.md) |
| What propulsion and recovery alternatives need review? | [Trade studies](docs/TRADE-STUDIES.md) |
| What is decided, unresolved, or risky? | [Decision and risk register](docs/REGISTERS.md) |
| Where do the external claims come from? | [Sources](docs/SOURCES.md) |

Optional-site records: [scope](docs/DIGITAL-WORKSPACE-SCOPE.md), [implementation evidence](docs/DIGITAL-WORKSPACE-IMPLEMENTATION.md), and [run/use guide](workspace/README.md). These describe software rather than physical readiness.

## Working conventions

Keep user aspirations distinct from accepted engineering decisions. Record each new decision with its evidence and revisit trigger.

Keep geometry editable. Record units, assumptions, source versions, and measured values with every analysis. Mark illustrations and synthetic data clearly.

Markdown owners are authoritative. The optional site may organize or present questions, drafts, and links, but it does not update decisions automatically. Physical gate status comes only from reviewed test records and the roadmap.

Use commercial certified motors through a qualified mentor and approved launch process. This repository contains no custom engine fabrication, propellant recipes, ignition procedures, or operational ascent-guidance implementation.

The repository and the earlier GitHub Pages workspace publication are authorized. This work does not verify the current public site's parity with local changes. Team membership and repository licensing remain owner decisions. Third-party software keeps its own license.
