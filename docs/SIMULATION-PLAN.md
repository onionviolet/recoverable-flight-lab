# Simulation and validation plan

Audience: model builders and reviewers. Type: current state. Updated: 2026-09-08.

## Objective

Answer feasibility questions before committing to flight hardware. Begin with conventional rocket recovery and an independent glider. No simulations have been executed in this repository.

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
