# Drone flight track

Audience: student team and advisor. Type: current state. Updated: 2026-09-21.

This document owns drone planning for Recoverable Flight Lab. Drone work is a parallel flight-learning track, not a payload requirement for the rocket and not evidence that the integrated rocket concept is feasible.

## Scope

The track covers five related directions:

1. Fixed-wing platforms, beginning with a source-backed comparison of the Flightory Stallion and Neuronaut NX-2.
2. FPV as a complete video, control, telemetry, recording, and pilot-workload system.
3. High-speed quadcopter and fixed-wing experiments with credible measurement and recovery evidence.
4. Flight control and autonomy through software-in-the-loop before any aircraft claim.
5. Useful missions such as endurance, VTOL transition, photogrammetry, aerial video, search support, and swappable sensors.

No airframe, FPV stack, autopilot, frequency plan, speed target, purchase, or flight operation is selected.

## Reference platform: Flightory Stallion

Flightory describes Stallion as a modular 3D-printed twin-motor fixed-wing UAV with a 1,340 mm wingspan, 1,500 to 3,000 g all-up mass range, detachable nose, 19 × 19 mm FPV camera provision, and optional VTOL file pack. The manufacturer states an efficient 60 to 70 km/h cruise range and publishes a build manual, component list, and selected STEP files. The design files are sold under a personal-use license. [Flightory Stallion](https://flightory.com/product/stallion/)

Treat Stallion as a reference study first. Compare its mission, material and printer requirements, repair path, payload interface, control options, license, and available evidence with the team’s actual facilities. Manufacturer specifications and CFD images are not local validation, and purchased files must not be copied into this repository.

## Reference platform: Neuronaut NX-2

Neuronautics presents the NX-2 as a high-aspect-ratio, modular 3D-printed flying wing developed from a 16-variable aerodynamic optimization. The listing says AeroSandbox vortex-lattice analysis was checked against CFD and recommends a 2212-class motor near 920 KV, a 9 to 10 inch propeller, 20 to 30 A ESC, 3S Li-ion or LiPo battery, Matek H743-Wing-class flight controller, GPS, small digital servos, ELRS receiver, and optional DJI O4 FPV. The paid package currently lists full airframe STL files, five assembly drawings, and STEP files for two nose variants. [NX-2 files](https://cults3d.com/en/3d-model/gadget/neuronaut-nx-2-ai-optimized-organic-flying-wing)

The creator’s July 2026 flight-test video reports a best configuration near 0.32 Wh/km, about 32 percent lower energy use per kilometer than the starting configuration. Its roughly 120 km estimate with a typical 3S pack and 200-plus km lightweight estimate are theoretical extrapolations, not completed range flights. The useful workflow is the combination of propulsion bench testing, short autonomous loiter missions, telemetry logging, and Python post-processing. [NX-2 flight-test video](https://www.youtube.com/watch?v=m2O8MBCbXy0)

Treat NX-2 as an endurance and measurement reference first, and as a possible licensed airframe build only after D0. It is not a complete open-source package. The seller provides files as-is without individual build support, and the public listing does not establish an ArduPilot parameter set or a locally validated print profile. Buyer comments specifically report a missing tuning-parameter file and unresolved printer-profile questions. [NX-2 buyer comments](https://cults3d.com/en/users/Neuronautics/comments)

The practical reproduction route is staged: compare the airframe and installed cost, prove manual flight and recovery margin, establish the autopilot tune in simulation and controlled local tests, then measure energy per kilometer through repeated visual-line-of-sight loiter flights. Use those logs for a range estimate. Do not treat a casual 120 to 200 km mission as the test plan because the FAA recreational baseline requires visual line of sight or a co-located visual observer, and a qualifying aircraft at or above 250 g also requires registration and Remote ID outside a FRIA.

## Workstreams and evidence gates

| Track | First planning artifact | Evidence before hardware or flight planning |
|---|---|---|
| D0: Mission | One-page choice of FPV trainer, Stallion study, speed, endurance, VTOL, mapping, search, or simulated autonomy | One primary mission, one optional extension, budget ceiling, owner, reviewer, and test access |
| D1: Platform | Stallion, NX-2, or another source-backed platform trade | Mass and capability table, fabrication access, repair approach, license check, installed cost, and reasons for the choice |
| D2: FPV | System block diagram covering camera, video, display, control, telemetry, recording, and fallback | Bench method, latency and loss observations, interference notes, operator roles, and current rule review |
| D3: Simulation | One documented software-in-the-loop mission and replay | Tool/version, inputs, expected behavior, logs, mismatch analysis, and next evidence |
| D4: Performance | Speed, endurance, mapping, or transition measurement plan | Repeatable method, uncertainty, synchronized records, control margin, recovery condition, and reviewer-set criteria |

Simulation, bench work, and manufacturer documentation do not authorize flight. The operating purpose, airspace, aircraft, campus policy, pilot qualification, visual-observer plan, registration, Remote ID, and radio use must be checked for the actual activity.

## FPV planning checklist

An FPV plan covers the whole link: camera field of view, video latency and quality, transmitter and receiver, goggles or display, on-screen information, control link, telemetry, recording, antenna placement, interference, loss indication, fallback behavior, pilot workload, and observer roles. ArduPilot’s overview is a useful systems checklist, not a selected implementation. [ArduPilot FPV overview](https://ardupilot.org/plane/docs/common-fpv-first-person-view.html)

The FAA recreational baseline requires TRUST, applicable registration and Remote ID, airspace compliance, and visual line of sight or a co-located visual observer in direct communication. A university project may instead fall under another operating framework, so classify the purpose before applying the recreational route. [FAA recreational flyers](https://www.faa.gov/uas/recreational_flyers)

## High-speed branch

Keep racing quadcopters and fast fixed wings separate because their structures, control behavior, energy use, and recovery needs differ. A credible speed result names the vehicle class, course, measurement source, sampling behavior, uncertainty, synchronized video or logs, control and video margin, thermal observations, and condition after recovery. A single on-screen maximum is not enough.

The first deliverable is a measurement and review plan using recorded or simulated data. Do not combine a first airframe, first FPV system, first control tune, and headline speed attempt into one test.

## First review

Answer these before selecting parts:

1. Which single mission should the drone track prove first?
2. Are Stallion and NX-2 useful references, plausible licensed build candidates, or neither?
3. Should the first hands-on result be an FPV bench, simulator mission, or inert fabrication study?
4. What operating route, site, reviewer, and evidence standard apply?
5. What budget and repair reserve can the team support?

Record the accepted answers in the decision register. Until then, every branch remains proposed.
