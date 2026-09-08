# Simulator development scope

Audience: student team, software builders, and technical reviewers. Type: current state. Updated: 2026-09-08.

## User intent and status

The user explicitly wants to consider expanding existing simulators, improving their capabilities, and building a new simulator from scratch. The project is therefore not limited to installing and using existing tools.

This document scopes that software effort. No development route is selected, and no simulator code or benchmark has been produced. The [simulation plan](SIMULATION-PLAN.md) owns vehicle questions and physical validation. This document owns simulator architecture, build-versus-extend decisions, and software-development milestones.

## Intended outcome

Develop a simulation workbench that represents the configurations the team actually studies, explains its assumptions, and produces reproducible evidence. It should eventually connect geometry and mass data, flight dynamics, mechanisms, uncertainty studies, and visual replay.

The original modular vehicle is a motivating use case. It is not a claim that the first version will accurately simulate every transition or physical effect. A new simulator can begin with conventional reference cases and acquire additional capabilities as they are validated.

Success means the software makes a previously difficult question answerable with traceable evidence. A larger interface or more animation alone does not establish a better simulator.

## Development routes to compare

| Route | What the team builds | Benefits | Costs and decision gate |
|---|---|---|---|
| Existing tools plus an orchestration layer | Shared configuration, adapters, batch runs, reports, and replay around existing solvers | Reuses documented physics and gives a common project workflow | Different solvers may have incompatible assumptions; select if their core physics covers the required cases |
| Upstream extension | A bounded feature, import/export path, validation case, or reporting capability in an existing project | Improvements can benefit other users and reduce long-term private maintenance | Requires compatible architecture and contribution process; evaluate maintainer guidance and license before committing to a patch |
| Maintained fork | Changes that an extension interface cannot express or upstream does not accept | More control over internal models and release timing | Team owns merges, regression testing, documentation, and divergence; justify with a concrete capability gap |
| New simulation kernel | Original equations implementation, integration, state handling, model APIs, and test suite | Full control over architecture; substantial numerical-methods learning | Team owns numerical correctness and validation; justify with learning goals or requirements poorly served by existing architectures |
| Hybrid platform | A new kernel for selected phenomena, with established tools supplying reference solutions or external data | Allows focused new work while preserving comparison evidence | Explicit coupling contracts and error budgets are required; avoid pretending separate models form a coupled solution automatically |

No route is rejected in advance. Proposed starting point: define common reference cases and an input/output contract, then compare an adapter prototype with a small original kernel. This produces evidence for the architecture choice without committing to a permanent fork first.

Do not build all five routes in parallel. Evaluate the smallest prototypes that distinguish the promising alternatives. A clean-sheet kernel remains a valid choice when learning numerical simulation is itself an accepted project goal.

## Candidate capability boundaries

| Capability | Initial scope | Later extension | Validation requirement |
|---|---|---|---|
| Geometry and mass properties | Explicit configurations with measured or labeled assumed mass properties | Geometry import, articulated assemblies, time-varying configuration | Analytic shapes, measured balance, and traceable transformations |
| Rigid-body motion | Conventional reference bodies and flight cases | Additional independently modeled bodies and configuration changes | Analytic limiting cases, conservation checks where applicable, convergence, and reference comparison |
| Aerodynamics | Replaceable data/model interface with stated validity envelope | CFD-derived tables or more specialized aerodynamic models | Source provenance, interpolation checks, and independent aerodynamic or flight evidence |
| Environment | Explicit gravity, atmosphere, and wind assumptions | More detailed environmental inputs | Unit checks, documented reference profiles, and sensitivity analysis |
| Mechanisms | Inert articulated-wing geometry and prescribed illustrative poses outside the solver | Joint dynamics, friction, contact, and structural response where justified | Bench measurements; a pose animation is not a dynamics model |
| Recovery | Established independent descent cases | Multiple independently recovered components within reviewed scope | Comparison with relevant measurements and failure cases |
| Sensors and logs | Recorded-data import with timestamps, units, and quality flags | Synthetic measurement models with documented noise and limits | Calibration/reference data and explicit synthetic-data labels |
| Uncertainty | Repeatable parameter sweeps | Monte Carlo and sensitivity reporting | Justified parameter ranges/distributions, seeds, and enough samples for the reported statistic |
| Visualization | Offline playback of logged state and explanatory geometry | Browser inspection and side-by-side comparison | Display matches the source data and identifies missing/interpolated values |

Engine internals, combustion, complete fluid/structure/contact coupling, and autonomous powered-flight guidance are not assumed initial capabilities. Any added research area needs its own requirements and validation scope.

## Proposed architecture

The layers below are software boundaries, not independently selected products.

| Layer | Responsibility | Contract |
|---|---|---|
| Scenario and configuration | Vehicle configuration, units, initial conditions, environment, model selection | Versioned schema; reject missing required inputs rather than invent them |
| Physics models | Forces, moments, mass properties, and applicable model assumptions | Explicit frames, reference quantities, validity range, and parameter provenance |
| Simulation kernel | Advance state, coordinate events, and report numerical status | Stable state definition; documented solver settings and error handling |
| Adapters and data | Import/export, upstream tool execution, measured data, and external coefficients | Versioned formats; transformations and units recorded |
| Analysis and presentation | Comparisons, uncertainty, reports, and replay | Read run artifacts; do not silently substitute animation for computed results |

Keep the kernel usable without the website. Browser interaction should load an existing run or request a clearly identified new computation. Camera movements and label animations must not modify the physics state.

Use Python for an initial inspectable prototype if compatible with the team's selected dependencies. Consider compiled components only after profiling a representative workload. Do not choose a language solely from expected speed before measuring the actual bottleneck.

Avoid creating a universal plug-in framework before two concrete models need the abstraction. Keep model implementations testable independently of plotting and the interface.

## Five simulator-development milestones

| Gate | Deliverable | Observable acceptance condition |
|---|---|---|
| SD0: Requirements and reference suite | Named physics questions, validity envelope, candidate routes, and permitted reference cases | Every requirement has a test or an explicit evidence gap; the team chooses the first bounded implementation |
| SD1: Working vertical slice | One scenario runs through configuration, calculation, log, and replay; compare adapter and original-kernel prototypes if both remain candidates | Reproducible run, correct units, stated assumptions, and agreement with a suitable reference within predeclared tolerances |
| SD2: Useful engine or extension | The selected route implements a capability the project needs; regression suite covers the existing supported cases | Capability demonstrated; prior supported cases remain correct; software/model version recorded |
| SD3: Validated independent models | Separate conventional flight, glider, or inert mechanism capabilities as selected | Numerical verification plus independent physical validation for each claimed domain; limitations published |
| SD4: Integration research and stable release | Only the justified combined capabilities, uncertainty reports, documented APIs, and reproducible release | State/data exchange verified, failures observable, physical evidence supports the advertised envelope, and a second contributor reproduces a result |

These milestones can support either an upstream extension, fork, or new codebase. SD4 does not mean every possible phenomenon is modeled.

## Verification versus validation

Verification asks whether the software correctly solves its stated equations. Use analytic cases, units and coordinate-frame checks, timestep/solver convergence, reproducible seeds, and regression tests. Apply conservation laws only where the modeled system should conserve the quantity.

Validation asks whether those equations and inputs adequately describe reality in a stated domain. Use measurements withheld from parameter fitting, uncertainty estimates, and published comparison cases with understood provenance.

Cross-simulator agreement is useful but is not independent physical validation. Two implementations can share the same aerodynamic assumptions. A new solver's successful test suite does not establish flight readiness.

Do not set numerical tolerances after seeing the result. Record expected behavior, acceptable error, and the reason before running an acceptance test. Distinguish a solver failure from a physically adverse outcome; neither may silently disappear from a batch report.

## Extending or forking responsibly

Before selecting an upstream project, inspect the relevant module, tests, extension points, release branch, contribution instructions, and exact license. The earlier audit is a shortlist, not a code-level architecture assessment.

Candidate bounded improvements include better provenance, importing measured data, reproducible scenario exchange, validation fixtures, or explicit unsupported-model warnings. These can be valuable even if the full simulator is ultimately original.

For a fork, record the upstream revision, patch purpose, merge policy, and regression commands. For an upstream contribution, scope one reviewable change and preserve the project's conventions. No external issue, pull request, or maintainer message is authorized merely by this planning document.

For a clean-sheet implementation, write original code or comply with the licenses of reused code. Record mathematical references, test-data rights, and model provenance. A public repository without an identified license is not assumed reusable code.

## Effort and staffing

The following are provisional engineering allowances for discussing scope. They are not estimates based on this codebase, because no code exists yet. Assume one contributor already comfortable with the required programming and an available technical reviewer. Training and waiting for physical evidence are additional.

| Deliverable | Planning allowance | Main uncertainty |
|---|---|---|
| SD0 plus upstream architecture inspection | 12–30 person-hours | Requirement clarity and complexity of candidate internals |
| Adapter-based vertical slice | 20–60 person-hours | Data compatibility and reference-example quality |
| Bounded upstream extension or fork patch | 40–120 person-hours | Change size, tests, and integration requirements |
| Original conventional rigid-body kernel with numerical verification | 100–300 person-hours | Numerical experience and supported model scope; excludes physical validation and full multiphysics |
| Integrated, physically validated modular-vehicle research simulator | No credible estimate before SD0–SD3 | Coupling assumptions, physical data, revisions, and specialist availability |

These alternatives overlap and must not be added into a single schedule. A prototype can be built before it is trustworthy enough for engineering decisions. The website can be built independently while physics work proceeds.

Required responsibilities are numerical/software implementation, physical-model review, measured-data acquisition, and reproducibility review. Evaluate existing university equipment before buying compute. Profile serial reference cases before planning parallel or GPU work.

## First decision to make

Choose whether the principal outcome is understanding the team's vehicle, learning simulator engineering, or serving future users with a reusable simulator. These goals can coexist, but their priority changes the build-versus-extend decision.

The next bounded task is SD0: write the first five required behaviors and select reference evidence for them. Do not freeze a clean-sheet architecture or fork merely because it is available.
