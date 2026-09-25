# Risk, decision, and question registers

Audience: team and reviewers. Type: current state. Updated: 2026-09-25.

## Decisions

| ID | Status | Record | Revisit trigger |
|---|---|---|---|
| D01 | User requested | Preserve the concept in a GitHub project with user vision, long-term specification, and diagram | User changes project ownership or direction |
| D02 | Superseded setup default | The repository began private and is now public; the [September 8 release record](PUBLIC-RELEASE-PLAN.md) records the visibility change. Collaborator access was not checked in this review. | Owner changes visibility or collaborator policy |
| D03 | Proposed | Conventional rocket and independent glider before integration | G0 review and team priorities |
| D04 | Proposed | Commercial certified rocket motor for the rocket baseline | A different mission is explicitly selected |
| D05 | Unresolved | Final dimensions, module count, active control, and propulsion | Mass, site, budget, and reviewer evidence |
| D06 | User-suggested candidate | Evaluate Mach 1 among tentative achievements; see achievement-goal owner | G0 priorities, qualified review, and quantitative feasibility |
| D07 | Proposed after audit | OpenRocket and FreeCAD first; RocketPy next; OpenVSP/JSBSim conditional for glider work. Simulation plan owns the current recommendation. | Reference-example results, team experience, and compatibility evidence |
| D08 | User clarified scope | Simulator work includes upstream improvements, a fork, or original simulator development; route remains open | SD0 requirements and reference-suite review |
| D09 | Superseded | Former website request retired by the [digital reset](DECISION-2026-09-08-DIGITAL-RESET.md); no old implementation is a design reference | User explicitly changes direction |
| D10 | Superseded as project hierarchy | The spatial workspace was scoped and built; it is now an optional site under D12 | User makes the site primary again |
| D11 | Optional site direction | [Digital scope](DIGITAL-WORKSPACE-SCOPE.md) describes a local typed board, separate 3D inspection, and portable project export | A named site need changes its scope |
| D12 | User requested | The repository is the dedicated planning product; the interactive site is an optional extra | User changes the project hierarchy |
| D13 | User requested | Add a parallel drone track covering Flightory Stallion, FPV, high-speed work, autonomy/simulation, VTOL, endurance, and useful missions | D0 mission review |
| D14 | User requested candidate | Record the Neuronaut NX-2 and its efficiency-testing workflow as a comparison candidate; no airframe, purchase, or operation is selected | D0 mission review, licensing check, and installed-cost comparison |

The first physical mission remains undecided. Use the [G0 first-article review sheet](G0-FIRST-ARTICLE-REVIEW.md) to compare a measured-recovery conventional rocket with the team's preferred alternative. The sheet is a proposal for review, not an accepted D03 decision or a flight authorization. D0 remains open for the independent drone track.

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

## Questions for the first review

1. What is the primary achievement: recovery, wing deployment, measurement, or speed?
2. What budget ceiling and deadline can the team support?
3. What prior rocket, aircraft, CAD, electronics, and workshop experience is available?
4. Who can mentor the project, and which workshop and flight sites can approve it?
5. Are the original dimensions essential for flight, or can they belong to an inert showcase model?

## Ownership rules

Open-source audit findings OS01–OS05 and evaluation packets E1–E5 are recorded in [the dated audit](OPEN-SOURCE-AUDIT-2026-09-08.md). Documentation reconciliation is complete; tool execution and physical validation are pending.

Roles are placeholders, not assignments to people in the whiteboard photo. Close an item only with evidence, a decision date, and a named responsible person. Preserve superseded decisions in git history and dated review records. An open question is not approval.
