# Risk, decision, and question registers

Audience: team and reviewers. Type: current state. Updated: 2026-10-11.

## Decisions

| ID | Status | Record | Revisit trigger |
|---|---|---|---|
| D01 | User requested | Preserve the concept in a GitHub project with user vision, long-term specification, and diagram | User changes project ownership or direction |
| D02 | Setup default partly superseded | Working name Recoverable Flight Lab. The accepted public-repository direction in [user vision](../USER-VISION.md) supersedes the initial private setup; collaborator membership remains an owner decision. Live hosting settings were not checked in this audit. | Owner changes name, visibility, or collaborators |
| D03 | Proposed | Conventional rocket and independent glider before integration | G0 review and team priorities |
| D04 | Proposed | Commercial certified rocket motor for the rocket baseline | A different mission is explicitly selected |
| D05 | Unresolved | Final dimensions, module count, active control, and propulsion | Mass, site, budget, and reviewer evidence |
| D06 | User-suggested candidate | Evaluate Mach 1 among tentative achievements; see achievement-goal owner | G0 priorities, qualified review, and quantitative feasibility |
| D07 | Reopened 2026-09-24 | The September 8 open-source order was a proposal made before the W&L MathWorks license was considered. The [simulation plan](SIMULATION-PLAN.md) now compares UAV Toolbox and Aerospace Blockset with open-source references for the first selected G0 or D0 question; no broader team tool is selected. October 1 local OpenRocket/RocketPy exercises are recorded in the simulation owner. | Signed-in license and platform check, reproducible reference examples, team experience, and a named mission question |
| D08 | User clarified scope | Simulator work includes upstream improvements, a fork, or original simulator development; route remains open | SD0 requirements and reference-suite review |
| D09 | Superseded | Former website request retired by the [digital reset](DECISION-2026-09-08-DIGITAL-RESET.md); no old implementation is a design reference | User explicitly changes direction |
| D10 | Superseded as project hierarchy | The spatial workspace was scoped and built; it is now an optional site under D12 | User makes the site primary again |
| D11 | Optional site direction | [Digital scope](DIGITAL-WORKSPACE-SCOPE.md) describes a local typed board, separate 3D inspection, and portable project export | A named site need changes its scope |
| D12 | User requested | The repository is the dedicated planning product; the interactive site is an optional extra | User changes the project hierarchy |
| D13 | User requested | Add a parallel drone track covering Flightory Stallion, FPV, high-speed work, autonomy/simulation, VTOL, endurance, and useful missions | D0 mission review |
| D14 | User requested candidate | Record the Neuronaut NX-2 and its efficiency-testing workflow as a comparison candidate; no airframe, purchase, or operation is selected | D0 mission review, licensing check, and installed-cost comparison |
| D15 | User-authorized local exploration, 2026-10-01 | Create the separate [Revival-X](../outputs/revival-x/README.md) conventional performance candidate, source-labeled editable model, sensitivities and digital verification. No physical motor/design/entry or G0/D0 choice is accepted. | Measured parts/mass/CG, source reconciliation, independent transonic aero, loads/recovery evidence, qualified mentor and team scope/budget/access review |
| D16 | User requested idea capture, 2026-10-11 | Preserve the [WingtraRAY recreation idea](DRONE-TRACK.md#idea-candidate-wingtraray-recreation), including the user's “everything?” scope: shape, VTOL/cruise, modular payloads, mapping, reliability/recovery and simulation-led aerodynamic development. [Detailed study](WINGTRARAY-RECREATION-STUDY-2026-10-11.md) records references and proposed tools. No platform, stack, purchase or physical first demonstration is selected. | D0 mission choice, fabrication access, budget, first payload and reproducible geometry/control references |

## Risk register

Likelihood and severity scores are not assigned without a defined configuration. The table identifies review needs, not a completed safety case.

| ID | Concern | Evidence/action needed | Proposed owner | State |
|---|---|---|---|---|
| H01 | A detached piece has uncontrolled descent | Review recovery for every piece and failure case | Recovery lead | Open |
| H02 | Glider has inadequate lift or stability | Independent model and supervised tests | Aircraft lead | Open |
| H03 | Wing mechanism jams or deploys asymmetrically | Inert test record, loading review, failure disposition | Mechanical lead | Open |
| H04 | Separation causes contact or an unsuitable aircraft state | Separate transition review after independent validation | Systems lead | Deferred to G3 |
| H05 | Electronics lose power, saturate, or produce misleading data | Bench tests and explicit data-quality flags | Avionics lead | Open |
| H06 | Additional mass invalidates the model | Measured configuration ledger and change review | Systems lead | Open |
| H07 | Structure or materials do not suit the environment | Documented loads, materials, inspections, mentor review | Structures lead | Open |
| H08 | Model assumptions conceal unsafe behavior | Validation evidence and uncertainty review | Simulation lead | Open |
| H09 | Site or operational permissions do not cover the mission | Written scope confirmation before flight planning | Flight lead | Open |
| H10 | Procurement exceeds budget or operator eligibility | Scope and quote review before orders | Project lead | Open |
| H11 | Handling introduces pinch, battery, heat, or propulsion hazards | Applicable facility/manufacturer procedures and supervised work | Lab supervisor | Open |
| H12 | Drone scope combines incompatible missions into one first aircraft | Select one primary mission and one optional extension at D0 | Drone systems lead | Open |
| H13 | FPV video is treated as the complete control and safety system | Review video, control, telemetry, recording, fallback, observer roles, and applicable rules together | Drone avionics lead | Open |
| H14 | A speed claim lacks repeatable evidence or recovery margin | Freeze the course, method, uncertainty, logs, control margin, and recovery criteria before a test | Performance lead | Open |
| H15 | Theoretical endurance is reported as demonstrated range | Keep measured energy use, battery assumptions, reserve, wind, route, and actual flown distance separate | Performance lead | Open |
| H16 | One approval is mistaken for all legal and safety gates | Treat export control (ITAR Category IV, foreign-person and cloud sharing), propulsion (27 CFR 555), airspace (14 CFR 101), radio (47 CFR 97), W&L EHS possession, land use and launch as separate gates. An OpenRocket simulation is never build, launch or safety approval | Project lead | Open |

## Questions for the first review

1. What is the primary achievement: recovery, wing deployment, measurement, or speed?
2. What budget ceiling and deadline can the team support?
3. What prior rocket, aircraft, CAD, electronics, and workshop experience is available?
4. Who can mentor the project, and which workshop and flight sites can approve it?
5. Are the original dimensions essential for flight, or can they belong to an inert showcase model?

## First-review record

The [first-demonstration packet](G0-FIRST-ARTICLE-REVIEW.md) compares inert wings, a sensing bench, and synthetic drone-log analysis; this register owns the shared review record and accepted decisions.

Status: **unfilled proposal**. Copy this table into a dated review record under `docs/reviews/` when a review occurs, then link the result here. That directory and a completed review do not exist yet. Do not fill unknowns with assumed commitments.

| Field | Review entry |
|---|---|
| Review identity | Date, participants, track (G0 or D0), and record author |
| Primary result | One demonstration or question; optional extension; explicit exclusions |
| Constraints | Budget ceiling including repair/retest reserve, target review date, available skills and facilities |
| Responsibility and access | Consenting owner, named reviewer, mentor/site route, and unresolved access questions |
| Acceptance | Observable result, evidence required, criterion fixed before testing, and stop/re-scope condition |
| Next bounded packet | One deliverable, owner, effort limit, dependencies, and review date |
| Disposition | Proposed, accepted, deferred, or declined; who agreed; evidence links; revisit trigger |

After review, add the accepted decision to this register, update the applicable track, and refresh `STATE.md`. If there is no agreement, record the unresolved choice and its next evidence step. A meeting or a completed table alone does not close G0 or D0.

## September 29 first-demonstration review draft

Status: **proposed, no review held**. This fills candidate scope, not unknown commitments. The blank template above remains reusable for the eventual dated review.

| Field | Proposed review entry |
|---|---|
| Review identity | Prepared 2026-09-29; participants and review date unresolved; G0 if A/B supports the rocket/mechanism track, D0 if C is selected |
| Primary result | Recommend A, manual inert wing packaging/repeatability; compare B sensing bench and C synthetic drone-log analysis in the [packet](G0-FIRST-ARTICLE-REVIEW.md). No motor, propulsion, separation, flight or platform selection. |
| Constraints | A: 6–12 person-hours and $0–60 total provisional consumables/reserve envelope with borrowed tools; budget not approved, inventory and quotes absent; target review date and available skills/facilities unresolved |
| Responsibility and access | Owner, reviewer and permitted bench workspace unassigned/unverified; no mentor/site agreement inferred |
| Acceptance | Proposed ten-cycle wing criteria and uncertainty rule in the packet; reviewer must freeze them before testing |
| Next bounded packet | WING-BENCH-01, drawing/inventory then unloaded manual-cycle evidence; cap 12 person-hours, checkpoint after two; owner and review date unresolved |
| Disposition | Proposed recommendation only; no team agreement, test evidence or accepted gate. Revisit after inventory, scope review or a different mission choice. |

## Ownership rules

Open-source audit findings OS01–OS05 and evaluation packets E1–E5 are recorded in [the dated audit](OPEN-SOURCE-AUDIT-2026-09-08.md). Documentation reconciliation is complete; tool execution and physical validation are pending.

Roles are placeholders, not assignments to people in the whiteboard photo. Close an item only with evidence, a decision date, and a named responsible person. Preserve superseded decisions in git history and dated review records. An open question is not approval.


## Superseded setup history

D02 originally read: “Working name Recoverable Flight Lab; private repository; no team invitations.” This preserves the initial setup wording. The accepted public-repository direction supersedes its visibility assumption; it does not establish current collaborator membership.
