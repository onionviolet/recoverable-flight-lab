# Open-source tooling and reference-project audit

Audience: team and technical reviewers. Type: chronological audit snapshot. Audited: 2026-09-08.

## Conclusion

Use OpenRocket as the proposed first rocket simulator and FreeCAD for the inert mechanism and packaging. Add RocketPy for reproducible analysis after a conventional reference case is understood. Investigate OpenVSP and JSBSim together for the separate glider, because aircraft dynamics need aerodynamic inputs.

ArduPilot SITL, Project Chrono, and SU2 are conditional additions. They address specific later questions. Installing the whole catalog would not establish an accurate integrated model.

These are recommendations, not accepted team selections. This audit inspected documentation, public repository metadata, selected license files, releases, and a limited local runtime inventory. It did not install software, execute examples, inspect whole codebases, audit security, validate this vehicle, or measure simulator performance.

Current proposed choices live in [the simulation plan](SIMULATION-PLAN.md). This dated report preserves the evidence behind them.

## Scope and method

The reviewed needs are conventional rocket flight, independent glider flight, folding-wing mechanisms, structure, telemetry/replay, and future high-speed analysis. The original modules and achievement goals remain the requirements context.

Assessment dimensions: mission fit, required inputs, documented limits, release availability, maintenance signals, source/license availability, local compatibility, and an observable evaluation gate. No numerical ranking is assigned where no benchmark was run.

Eight software repositories were checked through the GitHub API. Two reference ecosystems were inspected through primary project pages. Release dates and last-push dates are snapshots; activity is not proof of correctness or support quality.

## Candidate matrix

| Project | Suitable job | Evidence and limitation | Disposition |
|---|---|---|---|
| [OpenRocket](https://github.com/openrocket/openrocket) | Conventional rocket geometry, mass, stability, and flight plots | Its guide explicitly discusses mismatch from real mass, weather, and component behavior. Automatic warnings are not exhaustive. [Guide](https://openrocket.readthedocs.io/en/latest/user_guide/basic_flight_simulation.html) | Evaluate first for C1 |
| [RocketPy](https://github.com/RocketPy-Team/RocketPy) | Scripted trajectory studies, uncertainty analysis, comparison with recorded flight data | Six-degree-of-freedom capability and published flight examples provide a useful reference. Example agreement does not transfer to the team's unusual geometry. [Documentation](https://docs.rocketpy.org/en/latest/index.html), [flight examples](https://docs.rocketpy.org/en/latest/examples/index.html) | Add after a reference model exists |
| [FreeCAD](https://github.com/FreeCAD/FreeCAD) | Editable parts, assemblies, inert packaging, and structural-analysis preparation | FEM uses a separate solver workflow, including CalculiX. CAD movement or a stress plot does not establish mechanism reliability or flight qualification. [FEM tutorial](https://github.com/FreeCAD/FreeCAD-documentation/blob/main/wiki/FEM_tutorial.md) | Evaluate first for C0; structural analysis later |
| [OpenVSP / VSPAERO](https://github.com/OpenVSP/OpenVSP) | Aircraft conceptual geometry and aerodynamic estimates for a conventional glider | NASA describes VSPAERO as a potential-flow tool and warns that major solver changes made older tutorials incomplete. Do not infer accurate stall, shock, or transition physics from a rendered solution. [NASA guide](https://www.nasa.gov/reference/openvsp-vspaero-basics/) | Conditional glider aerodynamic candidate |
| [JSBSim](https://github.com/JSBSim-Team/jsbsim) | Time-domain aircraft dynamics using supplied forces and moments | Aerodynamic coefficients/functions come from data or other analysis. Importing a silhouette does not generate validated aerodynamics. [Forces and moments](https://jsbsim-team.github.io/jsbsim-reference-manual/user/concepts/forces-and-moments/) | Conditional glider dynamics candidate |
| [ArduPilot SITL](https://github.com/ArduPilot/ardupilot) | Testing aircraft software behavior without aircraft hardware | SITL can run Plane/Copter/Rover, but the selected physics model must match the aircraft. It does not qualify rocket ascent or deployment transitions. [SITL](https://ardupilot.ardupilot.org/dev/docs/sitl-simulator-software-in-the-loop.html), [model selection](https://ardupilot.org/dev/docs/using-sitl-for-ardupilot-testing.html) | Only after an independent aircraft requirement exists |
| [Project Chrono](https://github.com/projectchrono/chrono) | Detailed mechanism motion, constraints, motors, contact, and flexible components | Its multibody capabilities suit an inert mechanism question. Hinge friction, contact, and loads still need evidence. It is not a ready-made rocket/aircraft solver. [Project description](https://www.projectchrono.org/) | Defer unless simpler kinematics and bench tests leave a named gap |
| [SU2](https://github.com/su2code/SU2) | Focused CFD investigation with an experienced reviewer | Provides compressible-flow analysis and related numerical tools. Setup, mesh quality, convergence, and comparison data determine credibility. [Project description](https://su2code.github.io/) | Defer; candidate for a specific reviewed aerodynamic question |

FreeCAD is a candidate for manufacturing geometry; OpenVSP is a candidate for aerodynamic geometry. They serve different purposes. Do not assume their models remain synchronized automatically.

## Release, maintenance, and license snapshot

All eight repositories reported `archived: false`. The latest-release endpoint is one signal; some projects distribute elsewhere or have multiple release families.

| Project | Release observed | Release date | Last repository push, UTC date | License signal |
|---|---|---|---|---|
| OpenRocket | release-24.12 | 2025-07-27 | 2026-09-06 | GPL-3.0-or-later with additional permission; read LICENSE.TXT |
| RocketPy | v1.13.0 | 2026-07-22 | 2026-09-08 | MIT, GitHub metadata |
| FreeCAD | 1.1.3 | 2026-07-25 | 2026-09-08 | LGPL-2.1, GitHub metadata |
| OpenVSP | 3.51.3, official download page | Not established in this audit | 2026-08-30 | NASA Open Source Agreement 1.3; read LICENSE |
| JSBSim | v1.3.1 | 2026-05-17 | 2026-09-07 | LGPL-2.1, GitHub metadata |
| ArduPilot | Plane-4.7.1, API latest release | 2026-09-03 | 2026-09-08 | GPL-3.0, GitHub metadata |
| Project Chrono | 10.0.0 | 2026-04-07 | 2026-09-08 | BSD-3-Clause, GitHub metadata |
| SU2 | v8.5.0 | 2026-04-27 | 2026-09-08 | LGPL-2.1; read LICENSE.md and official site |

Release pages: [OpenRocket](https://github.com/openrocket/openrocket/releases/tag/release-24.12), [RocketPy](https://github.com/RocketPy-Team/RocketPy/releases/tag/v1.13.0), [FreeCAD](https://github.com/FreeCAD/FreeCAD/releases/tag/1.1.3), [JSBSim](https://github.com/JSBSim-Team/jsbsim/releases/tag/v1.3.1), [ArduPilot](https://github.com/ArduPilot/ardupilot/releases/tag/Plane-4.7.1), [Chrono](https://github.com/projectchrono/chrono/releases/tag/10.0.0), [SU2](https://github.com/su2code/SU2/releases/tag/v8.5.0), [OpenVSP downloads](https://openvsp.org/download.php).

GitHub returned no latest release for OpenVSP, but its official site lists current downloads. That API response is not evidence that the project lacks releases. GitHub reported NOASSERTION for OpenRocket, OpenVSP, and SU2 licenses; direct license files resolved those labels.

License references: [OpenRocket](https://github.com/openrocket/openrocket/blob/unstable/LICENSE.TXT), [OpenVSP](https://github.com/OpenVSP/OpenVSP/blob/main/LICENSE), [SU2](https://github.com/su2code/SU2/blob/master/LICENSE.md). This inventory is not a full dependency-license audit. Record the exact source revision and applicable notices when reusing third-party code or hardware files. No third-party source was copied into this repository.

## Reference projects worth studying

| Reference | Useful inspiration | What not to assume |
|---|---|---|
| [Altus Metrum TeleMetrum / AltOS](https://altusmetrum.org/TeleMetrum/) | Onboard logging, radio telemetry, post-flight CSV export, and desktop replay. Hardware and software sources are available. The product page identifies TAPR OHL for hardware and GPLv2 for software. | A source tree is not a selected or qualified flight component. Match documentation to hardware revision and check the applicable radio requirements. No hardware or firmware audit was performed. |
| [Portland State Aerospace Society](https://github.com/psas), [archived introduction](https://archive.psas.pdx.edu/Introduction/) | How a student team publishes CAD, schematics, software, and incremental test work | The inspected introduction is historical. Neither current team activity nor per-repository compatibility/license was audited. Use the organization as a lead for documentation patterns, not a ready-to-copy vehicle. |

The user's flight-replay achievement already has useful precedent in AltOS. Investigate importing documented CSV before commissioning a new ground station. Keep the presentation layer independent from recovery-critical functions.

## Local readiness

Verified on this Mac: ARM64 architecture and `python3` reporting 3.14.7. In that interpreter, RocketPy, JSBSim, NumPy, SciPy, and Matplotlib were not importable. No apps were found at the three exact paths `/Applications/OpenRocket.app`, `/Applications/FreeCAD.app`, and `/Applications/OpenVSP.app`.

This was a limited inventory. Other environments, app names, or directories were not searched. It does not establish that the tools are absent everywhere on the computer.

OpenRocket's release includes a macOS Apple Silicon installer. OpenVSP's site lists ARM64 packages paired with Python 3.11 or 3.13. RocketPy's inspected project metadata says Python >=3.10, which does not prove every dependency works with local Python 3.14. JSBSim's inspected GitHub release assets did not list a Mac installer; package/build routes were not tested.

Recommendation: use an isolated, supported environment after checking the selected package versions. Python 3.11 is a compatibility candidate for evaluation, not a tested choice. Do not alter system Python to satisfy this project. No installation or environment change occurred during the audit.

## Findings and dispositions

| ID | Finding | Disposition | Proposed owner | Next evidence / revisit trigger |
|---|---|---|---|---|
| OS01 | The earlier plan named tools but did not define an evaluation order | Documented a tentative sequence in the simulation plan | Systems lead | Revisit after the first reference example |
| OS02 | Documentation can describe a different version than the selected release | Require matching versions; OpenRocket docs identify 23.09 while the inspected release is 24.12; NASA warns of VSPAERO solver changes | Simulation lead | Verify each required feature in the pinned version before relying on it |
| OS03 | Aircraft dynamics software needs aerodynamic data; no validated integrated transition model was established | Keep separate rocket, glider, and inert-mechanism models; integration remains open | Aircraft/mechanical leads | Measured inputs and independent tests; separate transition review |
| OS04 | The inspected local interpreter cannot currently run the proposed Python stack | Compatibility trial remains pending; no readiness claim | Software lead | Isolated installation and a reproducible upstream example |
| OS05 | The planned telemetry replay may duplicate existing open-source capabilities | Evaluate documented AltOS exports before deciding on a custom viewer | Avionics/data lead | Inspect a permitted sample log and demonstrate labeled replay |

All five findings have a disposition and next evidence. Only documentation reconciliation is complete. Software evaluation, compatibility, model validation, and hardware review remain open.

## Five bounded evaluation packets

| Packet | Work | Acceptance gate | Status |
|---|---|---|---|
| E1: Conventional reference | Evaluate OpenRocket using an upstream conventional example without selecting propulsion for the team's vehicle | Save version, provenance, model, plots, and known limitations; explain the outputs | Not started |
| E2: Inert geometry | Evaluate FreeCAD with a non-propulsive wing-envelope mockup | Editable dimensions, assembly clearances, mass assumptions, and export verified | Not started |
| E3: Scripted analysis | Evaluate RocketPy against an upstream reference and documented measured data where reuse is permitted | Reproducible run, input provenance, and comparison report; no team-vehicle feasibility claim | Not started |
| E4: Independent glider | Evaluate OpenVSP and JSBSim with a conventional reference aircraft and explicit aerodynamic inputs | Unit/frame mapping, coefficient provenance, and a verified reference response | Not started |
| E5: Replay | Inspect documented AltOS CSV/replay capabilities and a permitted example log | Show measured channels, timestamps, missing data, and provenance without controlling flight hardware | Not started |

These are recommended follow-up tasks. This audit request did not require installing or executing the tools, and none of these packets is marked complete.

## Mach 1 and full-physics boundary

A simulator that outputs Mach number is not thereby validated across the transonic regime. The optional speed goal still needs appropriate aerodynamic evidence, structure review, measurement uncertainty, and range review. No Mach-targeted optimization was conducted.

SU2 is a candidate for focused aerodynamic research, not an instruction to begin a full-vehicle CFD campaign. A steady aerodynamic model, a structural solver, and a rigid-body model do not automatically form a verified coupled simulation. FreeCAD, Chrono, OpenVSP, and flight-dynamics tools cannot exchange all required assumptions merely by exporting a shape.

No evidence in this bounded audit establishes an off-the-shelf model that faithfully simulates the exact three-module concept, contact during separation, asymmetric deployment, flexible wings, and recovered aircraft motion together. This is an evidence gap, not a claim that no research system could do it.

## Alternatives outside the shortlist

OpenFOAM, XFLR5, FlightGear, PX4/Gazebo, and proprietary rocketry tools were not audited. Their absence is not a rejection. Revisit a category if a selected candidate fails a documented requirement or the team already has expertise in an alternative. Avoid adding a second overlapping stack solely to expand the catalog.
