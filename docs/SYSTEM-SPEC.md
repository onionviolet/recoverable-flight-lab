# Preliminary system specification

Audience: team and technical reviewers. Type: current state. Updated: 2026-09-08.

Status: proposed requirements for review, not flight approval. No dimensions beyond the user concept are frozen. SI units are the analysis standard.

## Configurations

| ID | Configuration | Purpose | Status |
|---|---|---|---|
| C0 | Inert display article with folding wings | Explain packaging and demonstrate mechanism repeatability | Proposed first physical article |
| C1 | Smaller conventional rocket; fixed stabilizing surfaces; certified motor; established recovery and tracking | Establish rocket building and data recovery capability | Proposed flight baseline |
| C2 | Separate lightweight glider | Establish aircraft stability and recoverability without rocket integration | Proposed parallel track |
| C3 | Rocket carrying a previously validated recovery experiment | Investigate integration only after C1 and C2 evidence | Deferred, review required |
| C4 | Original large modular concept | Preserve long-term design ambition | Unvalidated aspiration |

The motor and propellant are a propulsion system. A conventional commercial solid motor does not require the separate fuel tank shown in the original sketch. The middle section can instead be a payload/recovery bay. Separate modules are not automatically separate propulsion stages.

## Requirements and evidence

| ID | Proposed requirement | Acceptance evidence |
|---|---|---|
| R01 | Each flight configuration has a recorded mass, center of gravity, geometry, and configuration identifier | Measured configuration sheet and reviewer sign-off |
| R02 | Every separated piece has an explicit descent and recovery plan | Review covering nominal descent, deployment failure, and landing area |
| R03 | Conventional ascent stability is assessed with the actual configuration | Model report, assumptions, measured balance, mentor review |
| R04 | The glider is assessed independently of the rocket | Aircraft model and supervised test evidence within an agreed envelope |
| R05 | Wing deployment is distinct from flight control | Separate function definitions, mechanism evidence, control-authority assessment |
| R06 | No single experimental feature is assumed to guarantee recovery | Failure review, independent recovery provisions where applicable, range acceptance |
| R07 | Instrumentation records enough data to answer the selected experiment | Bench demonstration, units, timestamps, missing-data behavior, retrievable logs |
| R08 | Power, sensors, and communications have defined failure behavior | Bench evidence and written abort/no-go criteria |
| R09 | Flight hardware has traceable materials, assembly state, and inspections | Build traveler, inspection records, change history |
| R10 | Flight authorization is confirmed for the actual rocket and any aircraft operation | Faculty, site, and applicable operator/range approvals |
| R11 | Performance claims identify evidence type | Each result labeled measured, simulated, estimated, or unknown |
| R12 | Experimental integration follows separate subsystem validation | Gate review referencing completed records, not calendar time alone |

Thresholds such as acceptable landing speed, wind limit, stability margin, and deployment reliability must be set with the mentor before relevant tests. An unset threshold means the gate is open. This document does not supply fabricated values.

## Interface contract

| Interface | Information to define before integration |
|---|---|
| Mechanical | Envelope, attachment, loads, assembly tolerances, inspectability, clearances |
| Mass properties | Mass and center of gravity for each module and configuration; uncertainty; inertia when needed |
| Electrical | Voltage and power budget, connectors, isolation, startup and loss-of-power behavior |
| Data | Sensor identity, units, coordinate frame, timestamp source, sampling assumptions, log schema |
| Separation/recovery | Authorized event definitions, independent recovery responsibilities, non-nominal state review |
| Human operations | Named responsible person, inspection handoff, exclusion area, no-go authority, recovery process |

Detailed release mechanisms and powered-flight control implementations are outside this preliminary specification.

## Mass and packaging ledger

Record component ID, module, quantity, estimated mass, measured mass, position reference, uncertainty, source, and date. Include fasteners, adhesives, wiring, batteries, recovery equipment, and reinforcement.

Track dry and flight-ready configurations separately. Do not copy a center of gravity from the assembled vehicle into a detached module. Compare complete recovery systems, including support hardware.

## Definition of an integrated success

All required permissions are current. The approved configuration completes its selected mission. Every piece is accounted for. Data can be recovered and interpreted. Post-flight inspection explains damage and determines whether reuse is permitted.

No speed, altitude, endurance, recovery radius, or vehicle mass target is selected yet.
