# WingtraRAY recreation study

Audience: Weibao and the student team. Type: proposed design and research study. Checked: 2026-10-11. Parent owner: [Drone track](DRONE-TRACK.md).

The request is to investigate recreating the aircraft in AirShaper's [How To Design The Ultimate Drone](https://www.youtube.com/watch?v=TTX6gkR_CdM), published October 7, 2026. Asked which part, the user answered “everything?” This study therefore covers appearance, aircraft structure, VTOL behavior, cruise efficiency, modular payloads, survey workflow, telemetry, recovery, and the development process. It does not select a physical article, component purchase, operating site, or performance requirement.

## Recommendation

Aim for a complete functional recreation through a custom, documented twin-motor tailsitter. Use a reference tailsitter to establish control behavior while developing the WingtraRAY-inspired geometry and payload architecture. Preserve a proven reference aircraft configuration as a comparison; change one subsystem at a time and record its effects.

Two parallel digital deliverables make sense: an editable geometric reconstruction from public dimensions and images, and a runnable autopilot reference. Their connection must use explicit mass, inertia, aerodynamic, propulsion, and control inputs. A CAD model alone does not give a controller simulator correct aircraft physics.

The earlier paper-tube rocket is a separate artifact. Its latest model, notes, and validation record remain in Downloads/Photo-Rocket-Model. Twelve superseded files were moved to macOS Trash at the user's request. OpenRocket remains useful for that rocket; the drone needs aircraft geometry and flight-control tools.

## What the reference establishes

F1. WingtraRAY is a tailsitter: the whole aircraft rotates between upright VTOL and horizontal fixed-wing flight. The video shows two fixed propellers, a broad lifting body/wing, control flaps, winglets, and a landing fin. It describes propeller interaction, changing payload CG, and portability as coupled design problems. Relevant video intervals are 0:20–1:55 for architecture and 2:00–3:20 for tradeoffs. The exported captions are auto-generated, so wording and technical details should be checked against the imagery and manufacturer documents.

F2. Wingtra lists a 1,250 mm wingspan, a 1,250 × 680 × 120 mm envelope excluding the landing fin, 5.2 kg maximum takeoff mass, 1.25 kg payload capacity, and a pair of 99 Wh batteries. These are comparison benchmarks, not predicted performance for a recreation. [Manufacturer specification PDF](https://wingtra.com/wp-content/uploads/WingtraRAY-Technical-Specifications.pdf), hardware table, PDF page 8.

F3. AirShaper reports over 180 variants evaluated in six months, with improvements including 12% lift-to-drag efficiency and 56% payload mass capacity. Its written case labels the 20% improvement **field efficiency**; the video captions call it fuel efficiency. Do not use that figure as a battery-energy target without resolving the metric. The video's 4:40–6:45 discussion describes rotating-propeller CFD and prior wind-tunnel comparison. These are vendor-reported development results, not data we have reproduced. [AirShaper case study](https://airshaper.com/cases/wingtra-rapid-aerodynamic-development).

F4. The sources reviewed do not supply a complete WingtraRAY engineering package: exact airfoil sections, twist, detailed internal structure, actuator sizing, component mass distribution, and controller tuning are still missing. A visually similar model can be reconstructed; its aerodynamic and structural details will be our design assumptions until supported by measurements or a documented reference.

## Full-system recreation map

The following are proposed substitutes and acceptance evidence, not claims that the reference already delivers them.

| Code | Capability to recreate | Proposed route | Evidence needed |
|---|---|---|---|
| S1 | Recognizable shape and structure | Parameterized CAD: broad wing/body, motor positions, elevons, removable nose, landing fin, winglets, payload bay; public envelope as the initial reference | Dimensioned drawing, labeled inferred sections, mass/inertia budget, packaging and load-path review |
| S2 | Hover, transition, cruise, and landing | Two fixed electric motors, separate ESCs, two elevon servos, and a supported autopilot. ArduPilot is the first comparison candidate because both DIY references use it | Simulator logs, correct axes and actuator directions, propulsion measurements, CG and control-authority checks, then repeatable physical demonstrations |
| S3 | Swappable sensing payloads | Removable tray, repeatable mounting datum, defined connector/power budget and payload mass/CG envelope | Fit and retention checks, repeatable mass/CG records, camera alignment and vibration observations |
| S4 | Survey missions and map products | Camera triggering through the autopilot, geotagging and timestamp records, ground-control or corrected-GNSS workflow, and OpenDroneMap processing | A complete sample dataset; independently checked map errors and metadata. A nice-looking map does not establish survey accuracy |
| S5 | Telemetry and power management | Control/telemetry links, battery monitoring, logs and mission status; evaluate independent redundancy and LTE only after baseline behavior is understood | Bench observations of link loss, low battery and sensor faults; recorded response of the selected firmware |
| S6 | Recovery and maintainability | Stable landing contacts, replaceable wear parts, return/abort behavior, and an optional independent recovery module | Repeated landing/inspection records and mechanism tests. Parachute software support alone does not validate deployment or descent |
| S7 | Aerodynamic optimization | Reproduce a reference case, compare a small number of geometry variants, then examine propeller/wing interaction and the transition envelope | Comparable inputs, convergence evidence, uncertainty and physical comparison; separate cruise optimization from hover/transition behavior |
| S8 | Endurance, payload and environmental performance | Measure the complete aircraft and work outward from a demonstrated baseline | Measured energy use, flight duration, payload configurations and operating envelope. Manufacturer range/endurance numbers are benchmarks only |

Wingtra's [getting-started guide](https://knowledge.wingtra.com/en/getting-started-with-wingtraray) documents removable landing parts, magnetic nose access, a latched payload mount, survey planning, geotagging, and an optional parachute. Those features motivate S3–S6; the table's substitute implementations and checks are engineering proposals.

ArduPilot documents [non-vectored dual-motor tailsitters](https://ardupilot.org/plane/docs/guide-tailsitter.html), [survey grid and camera triggers](https://ardupilot.org/plane/docs/common-camera-control-and-auto-missions-in-mission-planner.html), and [parachute control](https://ardupilot.org/plane/docs/common-parachute.html). [OpenDroneMap](https://docs.opendronemap.org/) documents orthophotos, point clouds, textured models and accuracy workflows. These capabilities do not guarantee integration with our hardware or Wingtra-level mapping accuracy.

## Reusable references

| Code | Reference | Useful evidence | Cost or gap | Disposition |
|---|---|---|---|---|
| O1 | [Eclipson E-VTOL-1](https://www.eclipson-airplanes.com/e-vtol-1) and [build guide](https://www.eclipson-airplanes.com/stepbystep) | Documented 1,065 mm span, two motors/two servos, printable parts and assembly/setup sequence. Vendor lists 800 g takeoff mass in LW-PLA or 1,100 g in PLA | Paid files and hardware; print material strongly affects mass. The supplied shape differs from WingtraRAY; changes require fresh evaluation | Trial as a working VTOL reference and fabrication learning route |
| O2 | [eXploraVTOL](https://github.com/robustini/eXploraVTOL) | GPL-3.0 project with STEP, STL and 3MF files, BOM, flight-test links, ArduPilot parameters and a RealFlight model | README explicitly says documentation/specifications are incomplete. BOM uses larger propulsion and excludes some hardware. Sole listed parameter file is dated 2022-10-17 and must not be assumed compatible or tuned for a new aircraft | Adapt as the strongest editable engineering reference; inspect before selecting hardware |
| O3 | Custom WingtraRAY-inspired aircraft | Greatest freedom to match appearance, packaging and mission | We must develop missing geometry, mass/inertia, loads, aerodynamic inputs and tuning. A public envelope is insufficient to select motors or guarantee payload | Pursue as the full-system design direction after a bounded reference comparison |

eXplora revision inspected through GitHub's API: `1da97a4172505b71aa9e709a2d7ab6e27e3a97a8`, committed June 7, 2026. Its `resources/BOM.md`, `parameters/Ardupilot/`, and `simulation/` were inspected. The simulation directory contains a RealFlight `.RFX` model, not evidence of a ready-made ArduPilot SITL physics model. No source/design files were imported or executed.

The eXplora BOM includes two motors, two ESCs, two elevon servos, an autopilot/power module, GNSS/compass, airspeed sensor, servo power supply, telemetry and carbon tubes. Battery choice, omitted small parts, printer access, radio equipment and repair reserve still require a complete costed inventory. No reliable total quote is established here.

PX4 also [supports duo tailsitters](https://docs.px4.io/main/en/frames_vtol/tailsitter). Its documentation calls out difficult hover/transition tuning, especially in wind. Compare it if the chosen hardware/reference favors PX4; using both autopilots for the first prototype would add an unnecessary integration task.

## Recreating the design process

Start with an explicit reference configuration. Record its geometry, mass distribution, propeller data, actuator limits, flight conditions and the outputs to compare. Choose a few independent design variables, such as span, chord distribution, winglet shape, motor position or elevon extent. Change one variable at a time before running a combined search. Compare payload-CG cases alongside a nominal operating point.

Use inexpensive geometric and analytical screening to reject packaging or mass failures. Choose a focused aerodynamic question before paying for CFD or building a large solver stack. The interesting AirShaper mechanism is its modeled propeller interaction, not merely a colored airflow picture. A cruise lift-to-drag result cannot by itself establish hover control, transition behavior, structural strength, or endurance.

The existing [simulation plan](SIMULATION-PLAN.md#tool-evaluation-after-the-wl-mathworks-license-discovery) calls for comparison of an appropriate MathWorks reference with an open-source reference, not an automatic OpenVSP → JSBSim pipeline. Retain that choice: CAD handles geometry; the chosen autopilot's simulator handles software behavior; an aircraft dynamics/CFD model needs defensible physics inputs. Campus license activation and this Mac's compatibility remain unverified for this task.

## Proposed execution sequence

### Shape and simulation follow-up

F5. The visible shape can be parameterized as a broad wing with a thick central payload/body region, two leading propeller installations, trailing control surfaces, winglets and a landing fin. This description is an interpretation of the video imagery, not identification of the exact airfoil. Trace the planform against the published span, then define root/intermediate/tip sections, chord, sweep, thickness, twist, elevon geometry and motor placement. Label inferred sections explicitly. A matching outline leaves the section profiles, trim, structure and propeller interaction unresolved.

F6. In Wingtra's earlier [benchmarking account](https://airshaper.com/validation/wingtra-fixed-wing-drone-benchmarking), the team describes using XFLR5 for initial concepts after earlier CFD correlated poorly with tests. They later evaluated AirShaper and compared lift, drag and moments with wind-tunnel data, correcting for density, tunnel blockage and mounting effects. Their reference workflow is therefore fast concept screening, more detailed simulation, controlled measurement, and aircraft testing. The RAY case adds the reported 180-plus variants in six months; it does not establish that every variant was a full maneuver simulation or that an automated optimizer generated the entire aircraft.

| Code | Tool | Best use for this question | Important boundary |
|---|---|---|---|
| O4 | [OpenVSP](https://openvsp.org/learn.shtml) with VSPAERO | Editable aircraft geometry and aerodynamic comparisons. VSPAERO supports panel/vortex-lattice analysis and [propeller/actuator-disk setup](https://openvsp.org/api_docs/3.35.0/group___v_s_p_a_e_r_o_disk_and_prop.html) | Appropriate model selection and inputs are needed; a potential-flow comparison is not a demonstrated hover/transition envelope |
| O5 | [AeroSandbox](https://github.com/peterdsharpe/AeroSandbox) and [NeuralFoil](https://github.com/peterdsharpe/NeuralFoil) | Scriptable aircraft/airfoil analysis and constrained shape optimization. Compare geometry, lift, drag and pitching moment over several conditions | Section predictions and simplified aircraft models do not replace a validated complete propeller/wing model |
| O6 | [AirShaper](https://airshaper.com/cases/wingtra-rapid-aerodynamic-development) | Detailed CFD closest to the workflow in the video, including modeled propeller interaction | Paid cloud service. Public [pricing](https://airshaper.com/pricing), checked October 11, lists propellers in Professional at EUR 2,990/year excluding VAT, with 100 credits; Discovery lacks propeller elements. Academic arrangements were not verified |
| O7 | [ArduPilot SITL](https://ardupilot.org/dev/docs/using-sitl-for-ardupilot-testing.html), or the chosen PX4 simulator | Controller modes, missions and transitions using a documented reference physics model | Giving a simulator a new visual mesh does not give it that aircraft's actual aerodynamic behavior |
| O8 | [MATLAB/Simulink UAV and Aerospace tools](https://www.mathworks.com/help/uav/ug/customize-vtol-configuration.html) | Explicit dynamics, propulsion and control modeling, with supported reference applications | The documented VTOL template is a tiltrotor, not a drop-in Wingtra tailsitter. It needs adaptation; this user's license/toolbox activation and Mac setup remain unchecked |

D1. For the specific shape question, the proposed first comparison is an editable OpenVSP geometry and a small, constrained AeroSandbox study. Keep required lift, trim and a payload-CG range in the comparison instead of maximizing lift-to-drag at one point alone. Use detailed CFD for the shortlisted geometries and propeller-interaction questions; use the selected autopilot simulator for controller behavior. This is a proposed tool trial, not an installed or accepted project stack. No new simulation was run for this follow-up.

1. **A1: Reference and digital baseline.** Create a dimensioned WingtraRAY-inspired layout and an assumptions register. Compare O1/O2 against available fabrication equipment and a budget. Select one reusable control reference. First acceptance: editable geometry, complete proposed component/mass inventory, and a reproducible reference simulator run with logs.
2. **A2: Structure and propulsion.** Develop an inert airframe/payload mockup, measure CG/inertia or justify their estimation, and characterize the proposed propulsion and power supply. First acceptance: measured inputs and reviewed load/packaging evidence; no automatic promotion from a CAD render.
3. **A3: Aircraft behavior.** Evaluate actuator directions, controller modes, transitions and failure responses in the reference simulator and bench setup. Develop the physical flight plan separately with the applicable reviewer and site. First acceptance for flight behavior: repeated transition/cruise/return observations on the actual article, not just software traces.
4. **A4: Payload and mapping.** Add a documented camera module and a sample-data pipeline. Establish timestamp/geotag behavior, then quantify map errors with independent checks. First acceptance: an end-to-end dataset and measured accuracy report.
5. **A5: Full-system refinement.** Optimize geometry and energy use against the measured baseline; add further sensors, redundant links/power, recovery and transport refinements one at a time. First acceptance: comparable before/after records demonstrating each claimed improvement.

Each step moves toward the full system. The reference aircraft is a learning and comparison article, not a replacement for the ambition. No performance target, complete budget, printer/material selection, hardware purchase, simulator installation, CFD upload, prototype or physical test was performed in this study.

## State and next input

Completed: video identity/description/transcript inspection, manufacturer and autopilot research, DIY reference comparison, public repository metadata/BOM inspection, and this local report. Current drone geometry, mass budget, costed BOM, simulator and flight results are not yet created. The next inputs that change the build route are available fabrication equipment, budget, and intended first payload; they do not prevent the digital layout/reference comparison.

Saved conclusions are proposals. [Drone track](DRONE-TRACK.md) and [registers](REGISTERS.md) remain the owners for later accepted mission/platform decisions. Existing dirty files were preserved; no commit, push or publication was performed.
