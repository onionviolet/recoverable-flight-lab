# User vision

Audience: student team and faculty advisor. Type: current state. Updated: 2026-09-08.

## Intent

Build a real university engineering project that is visually impressive, technically explainable, and developed through increasing levels of achievement. Recover useful hardware and explore deployment mechanisms, flight measurement, simulation, and aircraft-like descent. The digital project experience should communicate an ambitious visual and mechanical idea, with feasibility questions available as layered detail. This presentation priority does not relax evidence requirements for a physical build.

The team wants to understand the physics while building in person. The result should include a working physical demonstrator, readable design records, simulation evidence, and a presentation that shows how the vehicle works.

## Original concept, preserved as aspirations

| Element | User description | Engineering status |
|---|---|---|
| Overall envelope | Length 7–8 ft; cylindrical body diameter 1 ft | Aspirational envelope, not a selected flight size |
| Deployed wingspan | 3–4 ft total, including the 1 ft body | Wing area, mass, and flight speed unknown |
| Propulsion section | Fighter-jet-inspired thruster; two smaller aft fins | Engine architecture and fin arrangement unresolved |
| Middle section | Fuel body with two wings that stow inside the cylindrical body and emerge on a motor-driven gear-and-axle hinge | Packaging concept; no deployment or aerodynamic validation |
| Nose section | Cone with altimeter and other hardware; two fins; detached glide recovery | Glider feasibility unresolved; cone shape does not establish lift or control |
| Separation | Propulsion and middle sections detach from the nose | Number of independently recovered pieces unresolved |
| Self-orientation | Movable fins or wings that orient themselves | Desired behavior must be defined before actuator or controller selection |
| Drone payload | Explore easier recovery using a carried drone | Optional research direction, not baseline |

The source is the team's spoken description and whiteboard image supplied on 2026-09-08. Whiteboard labels are ideas, not approved instructions. The original photo is not published with this repository.

This document owns user intent. The [digital workspace scope](docs/DIGITAL-WORKSPACE-SCOPE.md) now owns product recommendations; the [scoping prompt](docs/DIGITAL-WORKSPACE-PROMPT.md) preserves the task constraints. The user rejected and explicitly requested scrapping the entire showcase website, including the redesigned site. Its implementation, screenshots, old website prompt, and generated concept diagram were removed from the working tree. They must not be reused as design references. The user's original whiteboard and underlying engineering ideas remain source context, not a layout to copy.

## What should feel impressive

The team can show an understandable transformation, explain measured flight behavior, recover the hardware, and demonstrate it again. Appearance matters alongside engineering evidence.

Potential directions are speed, reusable recovery, deployable wings, telemetry, and a drone payload. The team has not selected their priority order. Recovery and measurement are the proposed initial emphasis.

The user now wants the digital product scoped from scratch, beyond a traditional website. The intended experience is a comprehensive, expanded digital version of the project whiteboard: spatial, explorable, and properly organized. Dragging around a canvas, inspecting an impressive 3D concept, hovering/selecting modules, and exploring connected ideas are desired qualities. A space backdrop is a visual preference, not evidence of orbital capability. Wings must stow inside the cylinder, not remain attached outside when folded.

A spatial project workspace connecting concepts, questions, sources, experiments, and evidence is the proposed product interpretation. A proposed feature, interaction, and persistence scope is now documented, but not accepted by the user. Technology remains unselected. The user subsequently authorized a first implementation using the original whiteboard as concept reference, with text alongside the canvas. This does not accept a final physical architecture or publication. The rejected site is not a starter shell, a template, or an accepted visual direction. See the [decision record](docs/DECISION-2026-09-08-DIGITAL-RESET.md) for the explicit reset and handoff.

Follow-up on 2026-09-08: the user named Mach 1 as a tentative goal and asked for additional impressive achievements. [Achievement goals](docs/ACHIEVEMENT-GOALS.md) owns those candidates and their evidence criteria. This request does not freeze a speed requirement or establish feasibility.

Further clarification on 2026-09-08: simulation work includes expanding and improving existing software or building a new simulator from scratch. The [simulator development specification](docs/SIMULATOR-DEVELOPMENT-SPEC.md) compares those routes. The earlier request for a showcase website has been superseded by the digital workspace reset above.

## Proposed development interpretation

Start with conventional rocketry and a separate lightweight glider. Demonstrate wing deployment on an inert model. Keep the original large integrated vehicle as a later option.

This recommendation does not establish team acceptance of a final architecture. The engine, dimensions, autonomy level, budget, schedule, and performance goals remain open.

## Success experience

At a review, a teammate should be able to point to a component, explain its function, show its evidence, and identify its failure behavior. Visitors should be able to understand the project from the interactive concept canvas and an inert mechanism demonstration.

Completed recovery, measured results, and a reusable article count as achievements. A rendered flight or planned test must not be reported as an actual flight.
