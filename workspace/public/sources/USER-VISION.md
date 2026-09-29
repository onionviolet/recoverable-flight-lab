# User vision

Audience: student team and faculty advisor. Type: current state. Updated: 2026-09-21.

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

This document owns user intent. The [roadmap](docs/ROADMAP.md), [drone track](docs/DRONE-TRACK.md), and subject-specific plans own project recommendations. The earlier digital scope and implementation records now describe the optional site only. The user rejected and explicitly requested scrapping the former showcase website, including its redesign. Its removed implementation and assets must not be reused as design references. The user's original whiteboard and underlying engineering ideas remain source context, not a layout to copy.

## What should feel impressive

The team can show an understandable transformation, explain measured flight behavior, recover the hardware, and demonstrate it again. Appearance matters alongside engineering evidence.

Potential directions are speed, reusable recovery, deployable wings, telemetry, and a drone payload. The team has not selected their priority order. Recovery and measurement are the proposed initial emphasis.

The September 8 digital task scoped an experience beyond a traditional website: a spatial, explorable version of the project whiteboard with a 3D concept, module inspection, and connected ideas. Those remain preferences for the optional site. A space backdrop is a visual preference, not evidence of orbital capability. Wings must stow inside the cylinder, not remain attached outside when folded.

A spatial workspace connecting concepts, questions, sources, experiments, and evidence was implemented and published. On September 21, the user changed the hierarchy: the repository is the dedicated planning product, while the site remains an extra. Neither decision accepts a final physical architecture. See the [digital reset](docs/DECISION-2026-09-08-DIGITAL-RESET.md) and [planning-first decision](docs/DECISION-2026-09-21-PLANNING-FIRST.md).

## Accepted repository direction

Recoverable Flight Lab is a dedicated planning repository. It should make the physical vision, rocket and drone tracks, open choices, evidence gates, sources, test plans, and current state easy for a student team and advisor to review. Markdown planning records are the canonical project surface.

The interactive workspace is an optional extra for exploring and presenting selected ideas. Keep it available, but do not make planning work depend on it and do not treat a site card as a decision, assignment, test record, or gate result. The [planning-first decision](docs/DECISION-2026-09-21-PLANNING-FIRST.md) supersedes the earlier site-first hierarchy.

Drone work is now a first-class parallel planning track. It includes Flightory Stallion research, fixed-wing and multirotor FPV, high-speed evidence, simulation and autonomy, VTOL, endurance, mapping, search support, and swappable sensing payloads. These directions remain independent of the rocket baseline unless a later reviewed decision connects them. [Drone track](docs/DRONE-TRACK.md) owns the current plan.

## Optional interactive workspace direction

The optional site is an explorable idea board, not a conventional showcase site. Keep the spatial canvas, selectable 3D concept, module cards, typed project relationships, contextual inspector, outline/search, editing, arrangement, presentation sequence, and recovery controls. Preserve the OLED-black and charcoal palette, high-contrast connection labels, and short casual language. The tone can be playful; claim status must remain exact.

A first-time visitor should be able to explain the overall aspiration, choose a module, follow its biggest unknown toward a possible answer, proposed test, decision condition, and evidence status, then understand how to contribute. Explanations come before tools. Suggested navigation is reading guidance, not a saved engineering relationship.

Adding an idea should be obvious. Local additions are unreviewed questions, possible answers, tests to try, or draft decisions. They autosave in that browser, remain editable, and can be moved or connected without changing canonical sources. A downloaded board backup is the portable recovery and device-transfer route. Public GitHub questions and ideas are a separate review route and never receive local notes automatically.

Preserve saved boards, stable IDs, positions, user text, edges, story order, source authority, import validation, conflict detection, and recovery behavior across presentation changes. Do not silently migrate or replace user edits. Shared accounts or cloud collaboration are not part of the accepted current scope; they require a separate privacy, permissions, conflict, and recovery decision.

The public repository and GitHub Pages workspace are authorized. Publication does not establish a physical design, engineering approval, test result, or license beyond what the repository explicitly states.

Follow-up on 2026-09-08: the user named Mach 1 as a tentative goal and asked for additional impressive achievements. [Achievement goals](docs/ACHIEVEMENT-GOALS.md) owns those candidates and their evidence criteria. This request does not freeze a speed requirement or establish feasibility.

Further clarification on 2026-09-08: simulation work includes expanding and improving existing software or building a new simulator from scratch. The [simulator development specification](docs/SIMULATOR-DEVELOPMENT-SPEC.md) compares those routes. The earlier request for a showcase website has been superseded by the digital workspace reset above.

## Proposed development interpretation

Start with conventional rocketry and a separate lightweight glider. Demonstrate wing deployment on an inert model. Keep the original large integrated vehicle as a later option.

This recommendation does not establish team acceptance of a final architecture. The engine, dimensions, autonomy level, budget, schedule, and performance goals remain open.

## Success experience

At a review, a teammate should be able to point to a component, explain its function, show its evidence, and identify its failure behavior. Visitors should be able to understand the project from the interactive concept canvas and an inert mechanism demonstration.

Completed recovery, measured results, and a reusable article count as achievements. A rendered flight or planned test must not be reported as an actual flight.
