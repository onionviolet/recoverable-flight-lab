# Current state

Audience: next contributor. Type: current state. Updated: 2026-09-25.

## Repository role

Recoverable Flight Lab is a planning repository for rocket, glider, drone, recovery, simulation, and evidence work. [User vision](USER-VISION.md) owns accepted intent. [The roadmap](docs/ROADMAP.md) owns shared physical gates, [the drone track](docs/DRONE-TRACK.md) owns Flightory Stallion, Neuronaut NX-2, FPV, high-speed, autonomy, VTOL, endurance, and mission planning, and [the register](docs/REGISTERS.md) owns live decisions and risks.

The interactive ideaboard in `workspace/` is an optional extra. It can present the concept, organize browser-local proposals, and produce review briefs, but it is not the canonical plan or a gate authority. The September 25 Pages release includes the review tools and drone cards; [the planning-first decision](docs/DECISION-2026-09-21-PLANNING-FIRST.md) still owns the hierarchy.

## Active planning tracks

| Track | Current state | Next gate |
|---|---|---|
| Rocket and recovery | Integrated folding-wing vehicle remains aspirational; conventional rocket, inert mechanism, and separate glider are proposed articles | G0 mission, budget, mentor/site, owners, and evidence criteria |
| Drone flight lab | Stallion, NX-2, FPV, high speed, autonomy, VTOL, endurance, mapping, and search are documented options; no platform or operation is selected | D0 selects one primary mission and one optional extension |
| Simulation and data | Candidate tools and development routes are documented; none has been executed or selected | Choose one reference case after the mission is fixed |
| Optional site | Spatial ideaboard, review tools, and drone cards are published on Pages | Owner visual acceptance and broader accessibility/touch checks remain open |

## Evidence boundary

The original integrated vehicle is an aspiration. Conventional rocketry, a separate glider, an inert wing demonstrator, and all drone directions are proposed. Manufacturer pages, planning tables, simulations, renders, and site cards are not physical test evidence.

No manufacture-ready CAD, executable flight model, validated aerodynamics, physical prototype, selected propulsion or drone stack, approved operation, or flight result exists. The [simulation plan](docs/SIMULATION-PLAN.md) and [simulator scope](docs/SIMULATOR-DEVELOPMENT-SPEC.md) describe candidate routes; none is selected. The [September 8 tool audit](docs/OPEN-SOURCE-AUDIT-2026-09-08.md) is dated research, not current readiness.

## Repository and release

The September 25 commits preserve the pre-existing site review work and include the planning-first documents, drone track, public-repository correction, and bounded G0 review sheet. The manual Pages workflow published the updated site from `main`; see [the release record](docs/PUBLIC-RELEASE-PLAN.md) for its scope.

The [workspace review record](docs/WORKSPACE-REVIEW-UPGRADE.md), [implementation record](docs/DIGITAL-WORKSPACE-IMPLEMENTATION.md), and [flow audit](docs/WORKSPACE-FLOW-AUDIT.md) remain software evidence only.

September 25 source checks: 49/49 Node tests passed after installing the locked dependencies; the Pages-subpath build and isolated Chromium browser smoke test passed. Live verification found matching built assets and source snapshots, working Board and Review desk views, and no browser page errors. These checks do not establish owner visual acceptance, full accessibility, simulation validity, or physical readiness.

## Resume here

1. Use the [G0 first-article review sheet](docs/G0-FIRST-ARTICLE-REVIEW.md) to compare measured rocket recovery with the team's preferred alternative. If the team chooses drone work first, run D0 as an independent mission review.
2. Name one primary demonstration, budget ceiling, reviewer, test access route, owner, and evidence criterion.
3. Record accepted answers in [the register](docs/REGISTERS.md), then update the relevant track plan. An incomplete review leaves its gate open.

The current blocker is mission selection. The repository has many compelling branches and no accepted first article.
