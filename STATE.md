# Current state

Audience: next contributor. Type: current state. Updated: 2026-10-01.

Editable [Revival-01 trainer](outputs/revival-01/README.md) and [Revival-X performance candidate](outputs/revival-x/README.md) now exist for rocket-team revival. Revival-X predicts 3.10 km / Mach 1.059 on its baseline commercial motor reference and 3.42 km / Mach 1.122 in a comparison, from unmeasured inputs. The larger physical project still needs an agreed first demonstration; G0 and D0 remain open.

## Resume here

The next physical input for either rocket candidate is a mentor-reviewed stock, mass/CG and recovery-fit record, plus the team's scope, budget and range/access choice. Match any reviewed article to measured inputs before freezing a prediction. Revival-X is a separate performance study; the trainer workshop remains a proposed team activity.

1. Review the [three first-demonstration candidates](docs/G0-FIRST-ARTICLE-REVIEW.md): manual inert wings (recommended proposal), sensing bench, or synthetic drone-log analysis. Choose G0 or D0 scope.
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
| Simulation and data | OpenRocket 24.12 executed for Revival-01 and Revival-X; RocketPy 1.13.0 trajectory comparison executed with shared drag; independent transonic aero review remains open | Replace assumed inputs with measured parts; reconcile recovery/aero limits and choose G0/D0 scope separately |
| Optional site | Both planning paths, canonical plan links, review tools, and drone cards are published and live-verified | Owner visual acceptance and broader accessibility/touch checks remain open |

## Evidence boundary

The original integrated vehicle is an aspiration. Conventional rocketry, a separate glider, an inert wing demonstrator, and all drone directions are proposed. Manufacturer pages, planning tables, simulations, renders, and site cards are not physical test evidence.

The executable Revival-01 and Revival-X models use assumed geometry/material masses and bundled commercial motor references. No manufacture-ready CAD, physically validated aerodynamics, physical prototype, selected hardware propulsion or drone stack, approved operation, or flight result exists. The [simulation plan](docs/SIMULATION-PLAN.md) owns the local software evidence; the [simulator scope](docs/SIMULATOR-DEVELOPMENT-SPEC.md) retains the wider candidate routes. The [September 8 tool audit](docs/OPEN-SOURCE-AUDIT-2026-09-08.md) is dated research, not current readiness.

## October 1 OpenRocket training candidate

User-requested early rocket-team artifact created locally in [outputs/revival-01](outputs/revival-01/README.md). Both .ork files save full traces and reload without warnings; eight runs completed, the finer-timestep comparison passed, and independent scripted reruns produced identical metrics. The baseline was opened in the installed OpenRocket app and its geometry, A8-3 default, mass, stability and calm apogee were visually verified. The packet includes provisional inputs, component/stock inventory, effort and cost allowances, workshop sequence, sources and reproducible data. It has not been committed, pushed, deployed or physically built. Existing dirty planning work was retained.

## October 1 Revival-X performance candidate

User-authorized digital exploration created locally in [outputs/revival-x](outputs/revival-x/README.md), separate from the unchanged trainer. It adapts the exact GPL-3.0-or-later OpenRocket 24.12 dual-deployment example into a 2.337 m, 76.2 mm conventional fiberglass candidate with a complete 4.66 kg dry mass budget and 250 g payload allowance. Thirteen OpenRocket and twelve RocketPy cases executed; independent fresh-process repetitions agree exactly. Full simulation data save/reload, mass/CG and trace/event checks, analytical descent check, and halved-timestep comparison passed. Native installed-app geometry, statistics, simulation table and baseline trajectory were visually inspected.

The Mach crossing is a model hypothesis with little mass margin, not a verified capability. Shared drag limits the independent trajectory comparison; RASAero aerodynamic execution, flutter/strength/opening loads, measured packing and physical flight evidence remain open. The packet records source motor discrepancies, high-wind and recovery-failure cases, costs, source license/hash, plots, and reproduction scripts. No G0/D0 acceptance, procurement, contact, commit, push, site change or publication occurred.

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

## September 29 first-demonstration packet

Local proposed comparison now includes deliverables, measurement questions, dependencies, provisional effort/spending envelopes, and observable criteria for three bench/software candidates. WING-BENCH-01 gives the recommended inert wing option a drawing/inventory checkpoint and ten-cycle measurement procedure. [The register draft](docs/REGISTERS.md#september-29-first-demonstration-review-draft) retains unresolved owner, reviewer, access, budget and date. No team choice, G0/D0 acceptance, procurement, physical work, simulator run, site change or publication occurred. Estimates are unquoted allowances; resources remain unverified.
