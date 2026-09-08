# Simulation and validation plan

Audience: model builders and reviewers. Type: current state. Updated: 2026-09-08.

## Objective

Answer feasibility questions before committing to flight hardware. Begin with conventional rocket recovery and an independent glider. No simulations have been executed in this repository.

## Tentative tool choices after the open-source audit

Proposed initial pair: OpenRocket for the conventional rocket and FreeCAD for inert geometry and packaging. Add RocketPy for scripted analysis after a reference case is understood. Evaluate OpenVSP plus JSBSim for the independent glider when aerodynamic inputs are available.

ArduPilot SITL is conditional on an aircraft-software requirement. Project Chrono is conditional on a mechanism-dynamics question that simpler methods do not resolve. SU2 is conditional on a focused aerodynamic study with appropriate review.

These are recommendations, not accepted team selections. No package is installed or tested by this project yet. Match documentation to selected releases and evaluate compatibility in an isolated environment. The inspected system Python is not a working simulation environment.

The [dated open-source audit](OPEN-SOURCE-AUDIT-2026-09-08.md) records eight candidate repositories, two reference ecosystems, release/license evidence, local inventory limits, and five pending evaluation packets. No integrated transition model has been validated.

## Model ladder

| Layer | Tool or method | Outputs | Limit |
|---|---|---|---|
| Analytical | Spreadsheet or inspectable Python calculations | Mass, balance, units, basic force and energy estimates | Simplified assumptions must be visible |
| Conventional rocket | OpenRocket; RocketPy where additional analysis is justified | Flight state, recovery behavior, sensitivity | Unusual configurations need independent aerodynamic evidence |
| Independent aircraft | JSBSim or equivalent validated aircraft model | Glider stability and response within a stated envelope | Does not validate release from a rocket |
| Focused physics | CFD for an aerodynamic question; FEA for a structural question | Loads or coefficients for the specific validated setup | Mesh convergence and boundary-condition review required |
| Uncertainty and validation | Parameter sweeps, Monte Carlo, test comparison | Spread of outcomes, sensitivities, residuals | Results depend on justified input distributions and model validity |

RocketPy supports six-degree-of-freedom rocket trajectories with variable mass and parachute descent. JSBSim provides six-degree-of-freedom aircraft dynamics. These capabilities do not automatically supply accurate aerodynamics for the proposed vehicle. See [sources](SOURCES.md).

Six degrees of freedom means three translations and three rotations. It does not imply resolved fluid flow, flexible structures, collision dynamics, combustion, or accurate separation physics.

## Required input contract

Each input records name, unit, value or range, evidence source, uncertainty, applicable configuration, and date. Unknown inputs remain unknown or become explicitly labeled exploratory ranges.

Required groups are geometry and mass properties; authorized commercial motor reference data for the conventional baseline; aerodynamic assumptions; recovery characteristics; and environmental conditions. Aircraft work also needs wing area, aerodynamic response, mass distribution, and control-surface definitions where applicable.

Use named coordinate frames. Record sign conventions and conversions. Include the mass of mechanisms and recovery equipment. Never present an assumed coefficient as measured.

## Initial analyses

| Question | Comparison | Evidence needed |
|---|---|---|
| Is the concept packaging plausible? | Original envelope versus actual components | Mass ledger and inert mockup |
| Is winged recovery useful? | Complete winged module versus conventional recovery | Mass, descent assumptions, recovery environment |
| Can the nose be an aircraft? | Original cone concept versus a purpose-shaped glider | Lift, stability, mass distribution, independent test evidence |
| Which unknown matters most? | Sensitivity to uncertain mass, aerodynamics, and weather | Justified ranges and repeatable analysis |
| Does the model agree with reality? | Predicted versus measured independent tests | Raw measurements and uncertainty estimates |

## Guidance and control scope

Navigation estimates motion. Guidance selects a desired flight state or path. Control applies corrections.

Initial work covers passive rocket stability, telemetry, educational control explanations, and independently tested recovery-aircraft behavior. The phrase self-orientation must be resolved into a specific behavior before selection of actuators or software.

Do not infer rocket-ascent suitability from an aircraft autopilot. This plan does not include operational guided-rocket control code or trajectory targeting. Any later flight-control scope requires a separate review with the responsible technical team.

## Validation requirements

Check dimensional consistency and simple limiting cases. Compare a conventional reference case with an established simulator. Record solver settings and convergence where relevant. Use fixed seeds for reproducible stochastic analyses.

Separate parameter fitting from validation: data used to tune the model cannot be its only independent evidence. Report prediction errors and uncertainty against additional test data.

Agreement between two models is useful but can reflect shared incorrect assumptions. Physical measurements remain necessary. A three-dimensional animation is a presentation output, not a validation result.

## Deliverable format

Every report states its question, configuration, input table, model/software version, assumptions, plots with units, uncertainty, validation status, and resulting decision. Preserve scripts, data provenance, and reproducible run instructions when executable models are added.

## Expanding this into working simulations

The first deliverable should be a reproducible conventional reference model, followed by independently tested rocket, glider, and mechanism models. An integrated model is a later research task. Define the questions and operating envelope before selecting fidelity.

User clarification: this scope includes improving existing simulators, maintaining a fork, and building a new simulator from scratch. The [simulator development specification](SIMULATOR-DEVELOPMENT-SPEC.md) owns those routes, architecture boundaries, software milestones, and effort allowances. The work packages below describe vehicle-analysis needs regardless of implementation route.

The proposed [digital workspace](DIGITAL-WORKSPACE-SCOPE.md) is separate from solver implementation. Its camera movement, exploded views, and folding-wing animation are illustrations. They are not solver outputs unless a future, documented data import supplies them.

### Five work packages

| Package | Deliverables | Required inputs | Exit evidence |
|---|---|---|---|
| S1: Reproducible foundation | Isolated environment, pinned versions, upstream reference example, versioned outputs, basic checks | Approved tool choice and accessible reference data | Another contributor can reproduce the reference result from recorded instructions |
| S2: Conventional flight model | Measured component ledger, baseline model, uncertainty study, report | Geometry, actual mass/balance, justified aerodynamic and recovery inputs, environmental assumptions, mentor-reviewed commercial propulsion data | Unit/frame checks, reference comparison, model limitations, and a prediction frozen before independent testing |
| S3: Separate glider and inert mechanism | Glider aerodynamic/dynamics model and independent mechanism model | Wing area, mass distribution, aerodynamic evidence, mechanism geometry, measured bench behavior | Each model explains independent test data within preselected tolerances; failures are recorded |
| S4: Focused higher-fidelity studies | Only the necessary structural, aerodynamic, or mechanism-dynamics investigation | A specific unresolved question, boundary conditions, material/load data, an experienced reviewer | Convergence checks, comparison case, uncertainty, and evidence that the result changes or supports a design decision |
| S5: Integration research | Reviewed interface model and comparison with staged physical evidence | Independently validated subsystems, agreed scope, relevant transition data | Model-state transfer checks, justified transition assumptions, and independent physical evidence within the claimed envelope |

S5 is not an instruction to implement guided rocket control or a detailed release system. It identifies the additional research needed before an integrated feasibility claim.

### Proposed software organization when implementation begins

| Area | Contents and ownership |
|---|---|
| `models/` | Configuration-specific geometry references, mass inputs, and model parameters |
| `simulations/` | Small adapters and run entry points for selected existing solvers |
| `data/` | Provenance and permitted reference/test data; raw inputs remain unchanged |
| `tests/` | Unit/frame checks, limiting cases, reproducibility, and reference regressions |
| `reports/` | Question, model revision, input snapshot, plots, uncertainty, validation status, and conclusion |

This is a proposed layout, not directories or runnable code already created. Compare existing solver capabilities with the requirements before selecting reuse, extension, or original implementation. Record software version, configuration ID, input provenance, seed where applicable, and solver settings for every run.

Share data through explicit units and coordinate frames. When models exchange coefficients, record reference area, length, origin, and applicable conditions. A shared geometry file does not carry these assumptions automatically.

### Time, people, and resources

The following are provisional planning allowances, not measured estimates or commitments. They assume a contributor who already understands Python or CAD, an available advisor, and accessible reference cases. Student learning time and waiting for physical tests are additional.

| Work | Initial planning allowance | Main driver |
|---|---|---|
| S1 reference environment and reproduction | 8–20 person-hours | Package compatibility and quality of upstream instructions |
| First S2 conventional model and report | 20–60 person-hours | Availability and quality of measured inputs |
| Initial S3 independent model studies | 40–120 person-hours | Aerodynamic data, mechanism complexity, and team skills; physical validation excluded |
| S4 specialist studies | Estimate after a bounded question is defined | Meshing, boundary conditions, reviewer expertise, and compute needs |
| S5 integrated validated model | No credible estimate yet | Unresolved architecture and acquisition of relevant physical evidence |

Do not sum these into a promised completion date. Build/test schedules, hardware revisions, and model validity can dominate calendar time. A complete coupled simulation of fluids, flexible structures, contact, sensors, and controls could become a research program of its own.

Initial reference models should be evaluated on the existing Mac. Measure runtime before requesting additional compute. Large CFD meshes or parameter sweeps may justify university workstations or a cluster, but no hardware purchase is justified by the present evidence.

The team needs responsibility for software/reproducibility, mass and mechanical measurements, and test-data interpretation. A qualified advisor must review the physical model and flight-related scope. One person can cover several roles; the required expertise still needs coverage.

### What prevents a credible full-vehicle answer today

There is no measured mass distribution, selected airframe, agreed wing geometry, aerodynamic dataset, chosen recovery configuration, or validated transition evidence. More computation cannot replace those inputs.

For the Mach 1 candidate, document model validity across the relevant regime before interpreting its numerical predictions. For the winged candidate, establish independent aircraft and mechanism behavior first. These are separate feasibility questions.

Immediate start: reproduce an upstream conventional reference and create a mass-ledger template. Work that depends on the actual vehicle waits for measured inputs. All five packages above remain unstarted.
