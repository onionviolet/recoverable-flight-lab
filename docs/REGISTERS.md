# Risk, decision, and question registers

Audience: team and reviewers. Type: current state. Updated: 2026-09-08.

## Decisions

| ID | Status | Record | Revisit trigger |
|---|---|---|---|
| D01 | User requested | Preserve the concept in a GitHub project with user vision, long-term specification, and diagram | User changes project ownership or direction |
| D02 | Setup default | Working name Recoverable Flight Lab; private repository; no team invitations | Owner selects name, visibility, or collaborators |
| D03 | Proposed | Conventional rocket and independent glider before integration | G0 review and team priorities |
| D04 | Proposed | Commercial certified rocket motor for the rocket baseline | A different mission is explicitly selected |
| D05 | Unresolved | Final dimensions, module count, active control, and propulsion | Mass, site, budget, and reviewer evidence |
| D06 | User-suggested candidate | Evaluate Mach 1 among tentative achievements; see achievement-goal owner | G0 priorities, qualified review, and quantitative feasibility |
| D07 | Proposed after audit | OpenRocket and FreeCAD first; RocketPy next; OpenVSP/JSBSim conditional for glider work. Simulation plan owns the current recommendation. | Reference-example results, team experience, and compatibility evidence |

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

## Questions for the first review

1. What is the primary achievement: recovery, wing deployment, measurement, or speed?
2. What budget ceiling and deadline can the team support?
3. What prior rocket, aircraft, CAD, electronics, and workshop experience is available?
4. Who can mentor the project, and which workshop and flight sites can approve it?
5. Are the original dimensions essential for flight, or can they belong to an inert showcase model?

## Ownership rules

Open-source audit findings OS01–OS05 and evaluation packets E1–E5 are recorded in [the dated audit](OPEN-SOURCE-AUDIT-2026-09-08.md). Documentation reconciliation is complete; tool execution and physical validation are pending.

Roles are placeholders, not assignments to people in the whiteboard photo. Close an item only with evidence, a decision date, and a named responsible person. Preserve superseded decisions in git history and dated review records. An open question is not approval.
