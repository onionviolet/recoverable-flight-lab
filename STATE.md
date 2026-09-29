# Current state

Audience: next contributor. Type: current state. Updated: 2026-09-29.

The next useful result is an agreed first demonstration. Mission selection is the current blocker; G0 and D0 remain open.

## Resume here

1. Choose whether the first planning review is G0 for the rocket track or D0 for the drone track.
2. Fill the [first-review record](docs/REGISTERS.md#first-review-record) with one primary demonstration, budget ceiling, consenting owner, reviewer, test access route, evidence criterion, and bounded next packet.
3. Record the accepted answers in [the register](docs/REGISTERS.md), then update the relevant track plan.

## Repository role

Recoverable Flight Lab is a planning repository for rocket, glider, drone, recovery, simulation, and evidence work. [User vision](USER-VISION.md) owns accepted intent. [The roadmap](docs/ROADMAP.md) owns shared physical gates, [the drone track](docs/DRONE-TRACK.md) owns Flightory Stallion, Neuronaut NX-2, FPV, high-speed, autonomy, VTOL, endurance, and mission planning, and [the register](docs/REGISTERS.md) owns live decisions and risks.

The interactive ideaboard in `workspace/` is an optional extra. It can present the concept, organize browser-local proposals, and produce review briefs, but it is not the canonical plan or a gate authority. The September 29 presentation update is published and live-verified, including the earlier review tools and drone cards. [The planning-first decision](docs/DECISION-2026-09-21-PLANNING-FIRST.md) owns this hierarchy.

## Active planning tracks

| Track | Current state | Next gate |
|---|---|---|
| Rocket and recovery | Integrated folding-wing vehicle remains aspirational; conventional rocket, inert mechanism, and separate glider are proposed articles | G0 mission, budget, mentor/site, owners, and evidence criteria |
| Drone flight lab | Stallion, NX-2, FPV, high speed, autonomy, VTOL, endurance, mapping, and search are documented options; no platform or operation is selected | D0 selects one primary mission and at most one optional extension |
| Simulation and data | Candidate tools and development routes are documented; none has been executed or selected | Choose one reference case after the mission is fixed |
| Optional site | Both planning paths, canonical plan links, review tools, and drone cards are published and live-verified | Owner visual acceptance and broader accessibility/touch checks remain open |

## Evidence boundary

The original integrated vehicle is an aspiration. Conventional rocketry, a separate glider, an inert wing demonstrator, and all drone directions are proposed. Manufacturer pages, planning tables, simulations, renders, and site cards are not physical test evidence.

No manufacture-ready CAD, executable flight model, validated aerodynamics, physical prototype, selected propulsion or drone stack, approved operation, or flight result exists. The [simulation plan](docs/SIMULATION-PLAN.md) and [simulator scope](docs/SIMULATOR-DEVELOPMENT-SPEC.md) describe candidate routes; none is selected. The [September 8 tool audit](docs/OPEN-SOURCE-AUDIT-2026-09-08.md) is dated research, not current readiness.

## Repository and release

The repository already had uncommitted site review changes before the September 21 planning restructure. The September 25 release committed and published those changes. The September 29 audit adds a first-review record, gate change-control rules, drone workstream dependencies, and consistent contribution/notebook ownership. No commit, push, Pages run, or live-site verification occurred in this audit.

The [workspace review record](docs/WORKSPACE-REVIEW-UPGRADE.md), [implementation record](docs/DIGITAL-WORKSPACE-IMPLEMENTATION.md), and [flow audit](docs/WORKSPACE-FLOW-AUDIT.md) remain software evidence only.

## September 29 planning audit

Verified against the current local owners, not the deployed site:

| Finding | Revision |
|---|---|
| First review had questions but no reusable decision record | Added an unfilled review template to the register with constraints, consenting responsibility, evidence, disposition, and one bounded next packet |
| Gate acceptance lacked explicit change-control rules | Roadmap now requires a dated, scope-specific evidence review and reopening affected gates after material changes |
| Drone table could imply all workstreams were prerequisites for every mission | Drone owner now distinguishes selected workstreams and software-only results from physical evidence |
| Contribution and notebook guidance competed with Markdown ownership | Both now route accepted decisions to the existing Markdown owners |
| D02 retained the original private-setup assumption | Reconciled it with accepted public-repository intent and preserved the original wording in the register |

Verification: 49/49 workspace tests pass; GitHub Pages-mode local build passes; changed-document local link targets and `git diff --check` pass. The existing approximately 591 kB model-chunk advisory remains. No application behavior or accepted user vision was changed in this audit. Browser behavior, current third-party specifications/rules, live repository settings, deployed parity, and physical readiness were not reverified. The build regenerated existing source snapshots and their manifest from the owners, including the revised system specification; no new planning document was added to the public snapshot set. Existing browser-local boards were not opened or migrated. A changed source revision uses the existing explicit source-review/recovery behavior.

Follow-up corrections: the system specification now scopes its requirements to rocket/glider/mechanism articles and requires requirement-to-evidence mapping. Simulator gates now depend on a named purpose/question and retain separate numerical and physical status. The optional-site scope points to the current tool evaluation instead of retaining the superseded OS01 order. The publication record below is explicitly historical. No mission, platform, threshold, or team assignment was inferred from these edits.


## September 29 presentation adjustment

The README now leads with the ambition, compares the two planning paths, and provides a short first-review route before the reference index. This handoff puts the next review first; the rocket roadmap leads with its proposed demonstration, and the drone track puts mission selection and evidence workstreams before platform specifications. These are local documentation changes. Links and heading anchors were checked; no application behavior, mission choice, physical gate, commit, or deployed site changed.

The remote September 25 release history was merged before this publication. [Pages run 36197160176](https://github.com/onionviolet/recoverable-flight-lab/actions/runs/36197160176) deployed commit `898c752`; its verification remains dated software evidence. The [G0 first-article review sheet](docs/G0-FIRST-ARTICLE-REVIEW.md) is preserved as an optional rocket comparison packet; the register owns the shared G0/D0 review record.

## September 29 publication

User-authorized update published from commit `b79b33b` through [Pages run 36633267696](https://github.com/onionviolet/recoverable-flight-lab/actions/runs/36633267696). All 49 tests and the Pages build passed. Isolated live browser checks passed for both planning paths, drone selection, G0/D0 review text, phone width, and absence of page errors. Served JS, CSS, and source snapshots matched the local production build byte-for-byte. Local persistence/recovery and JSON import/export browser smoke passed before deployment. 58 local documentation links and anchors passed. No private board or notebook record was published; no physical gate or mission choice changed.
