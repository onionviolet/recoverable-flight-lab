# Interactive showcase website: builder prompt

Audience: website builder and reviewer. Type: current-state work packet. Updated: 2026-09-08.

Status: prompt only. No website has been built or deployed. "Gsp" is interpreted as GSAP. "Canvas" may mean a coding-preview environment or HTML Canvas; the prompt supports either.

Copy the prompt below into the website builder. It includes the essential project context so it also works without access to the private repository.

---

## Prompt begins

Build a working, polished, interactive website called **Recoverable Flight Lab**. It should feel like an engineering exhibit visitors can explore. The main experience is a large, hoverable vehicle model with clear annotations, folding-wing illustration, an exploded view, and a comparison between the original vision and the proposed first build.

Deliver runnable code and a tested preview, not only a design description. Keep the first implementation focused on the showcase. Do not implement flight dynamics, rocket guidance, authentication, telemetry connections, or a backend.

### Work packet

GOAL: A visitor can inspect every major module, understand the user vision, compare it with the development baseline, and see what remains unvalidated.

OWNER: The user decides final vehicle architecture, branding changes, publication, and any material scope change.

BUILDER: A capable frontend builder with a local or Canvas preview environment.

VERIFIER: Review the actual preview and interaction evidence. An independent reviewer should check the result if available; do not claim independent verification when only the builder tested it.

SCOPE: In the project repository, create the showcase under `showcase/`. In a standalone Canvas environment, create its equivalent runnable preview. Preserve unrelated files.

DO NOT TOUCH: Existing user vision, engineering decisions, simulation results, repository visibility, team access, or external services. Do not publish or deploy. Do not ingest private files, credentials, personal names, or the original whiteboard photograph.

TOOLS NEEDED: The available frontend runtime and a browser preview. Prefer React, TypeScript, Three.js for WebGL rendering inside a canvas, and GSAP for motion. If the environment cannot run those dependencies, use SVG/HTML with equivalent interactions and state the fallback. Do not stop merely because a 3D dependency is unavailable.

### Project context, authoritative for this prompt

We are university students exploring a reusable, modular rocket and a deployable-wing recovery concept. We want something physically buildable, visually memorable, understandable through physics, and developed through staged tests.

The original concept is 7–8 feet long, with a cylindrical body 1 foot in diameter and a deployed wingspan of 3–4 feet. These are aspirational dimensions. They are not approved flight dimensions.

The original three modules are:

| Module | Original idea | Required explanation |
|---|---|---|
| Nose payload | Cone with an altimeter and other hardware; two small fins; intended to detach and glide | A cone with fins is not yet a validated glider |
| Middle body | Originally called the fuel section; two folding wings moved by a motor, gears, and axles | Fuel architecture is unresolved; this could instead be payload/recovery space. Wing deployment and flight control are different functions |
| Propulsion section | Fighter-jet-inspired thruster appearance and two smaller aft fins | Rocket motors and air-breathing turbines are different architectures. No engine or final fin arrangement is selected |

The proposed first development path is a smaller conventional rocket with commercial certified propulsion, fixed stabilizing surfaces, recovery equipment, and tracking. A lightweight glider and an inert wing-deployment demonstrator develop separately. Integration is a later decision.

No actual vehicle simulation, selected motor, manufactured flight hardware, test flight, or flight approval is established. Preserve this status throughout the site.

The team is also considering improving existing simulators, maintaining a fork, or developing a new simulator from scratch. Include this as a proposed research capability in the roadmap details. None of those routes is selected or implemented. This website task remains a showcase; do not silently expand it into building the simulation engine.

Tentative achievements are reusable recovery across three authorized flights; measured telemetry/video replay; a deployable-wing demonstration and independent glider; prediction compared with held-out flight data; and a separately reviewed Mach 1 stretch goal. These are candidates, not completed milestones. Three flights is a proposed project target, not a reliability certification.

### Visual direction

Use a dark graphite background, off-white type, muted teal for the proposed baseline, and restrained amber for unresolved ideas. Use crisp outlines and matte surfaces with readable lighting. Create visual interest through geometry, depth, and purposeful motion.

The vehicle should occupy the majority of the initial desktop viewport. Place a concise introduction and the main controls nearby. Use generous spacing and compact technical annotations. Avoid a generic grid of marketing cards, artificial launch countdowns, random gauges, invented performance figures, or decorative starfields that obscure the hardware.

Use system or locally available fonts. Build the conceptual geometry from primitives or original vector paths. The model should look like the described vehicle, not an unrelated stock space rocket. It is an explanatory schematic, not a manufacturing model.

For an original-concept side view, the body length should read as roughly seven to eight body diameters. A top view should make the proposed total wingspan understandable. Clearly label the view as conceptual. The deployed wingspan includes the body; do not show 3–4 feet per wing.

### Five essential experiences

1. **Inspect the concept.** Hovering a module highlights it and previews its label. Clicking or tapping pins an information panel. Each panel explains purpose, original idea, current status, and the next evidence needed. Include nose hardware, middle bay, wings, conceptual drive mechanism, separation boundaries, propulsion, and recovery/tracking. Use DOM controls for the same selections.
2. **Explore the geometry.** Provide assembled/exploded, folded/deployed, labels on/off, and reset-view controls. Use GSAP to animate camera and illustrative poses. Wings must pivot about a consistent illustrated hinge rather than slide through the body. Exploded view is a tabletop explanation of modules, not a simulated release trajectory. Keep a visible "Illustrative motion" label.
3. **Compare vision and baseline.** A persistent toggle switches between "Original vision" and "Proposed first build." The latter shows the conventional rocket alongside a separate glider and inert mechanism demonstration. Change the labels with the geometry. Never suggest that the separate glider is already integrated.
4. **Explore achievement paths.** Let visitors select the five tentative achievements. Explain the visible result, evidence needed, and current status for each. The Mach 1 card is marked "Stretch goal: feasibility unproven." Do not provide a motor selector, a speed-optimization interface, or a fake live Mach readout.
5. **Understand the roadmap.** Show G0 scope/mentor, G1 models/bench, G2 independent tests, G3 integration review, and G4 approved experiment/reuse assessment. Selecting a gate reveals its deliverables and exit evidence. All engineering gates are pending; only planning documentation is complete.

A selected part should stay selected while the visitor moves to its panel. Escape closes a panel or clears selection. Clicking empty scene space may clear selection. Selection must not depend on hover alone. Keep the page scrollable without trapping mobile gestures in the scene.

### Hover-panel content model

Keep the content in one typed configuration or plain data object with stable IDs. Use fields such as label, purpose, originalConcept, proposal, status, nextEvidence, and source. A component selection, keyboard selection, and mobile tap must resolve to the same record.

Use textual status labels: "User vision", "Proposed", "Unvalidated", and "Documented". Color reinforces the words. Do not represent unvalidated components with green pass marks.

Use layered detail: a short label on hover, a readable explanation on selection, and a secondary source/details disclosure. Keep jargon out of the primary labels.

### Animation, accessibility, and performance

Use GSAP for scene transitions and interface reveals. Use Three.js for rendering if available. GSAP's animation is visual interpolation, not physics simulation.

Provide play/pause for any repeating motion, and disable automatic orbit or continuous movement by default. Respect `prefers-reduced-motion`; state changes must remain available without motion. Avoid scroll hijacking.

All controls must work with keyboard and touch, have visible focus, and expose meaningful accessible names. Put readable explanations outside the canvas in semantic HTML. Provide an equivalent component list so the entire concept is understandable without WebGL or a mouse.

Resize the renderer to its container. Bound device pixel ratio, avoid unnecessary continuous renders, and release resources on teardown. If WebGL fails, show an annotated SVG or static schematic with the same component controls. Keep text readable at 200% zoom and prevent horizontal overflow on a narrow phone viewport.

### Evidence and content boundaries

Always distinguish original aspiration, recommendation, simulated evidence, and measured evidence. Currently there are no simulated or measured vehicle results to display. Use "Not yet available" where a future result belongs, or omit the result panel.

Do not fabricate CG/CP locations, structural margins, actuator torque, trajectory, deployment timing, altitude, speed, recovery radius, or reliability. Do not imply that the illustrated nose will glide safely or that every separated module has a solved recovery system.

Optional branch descriptions may mention a jet engine, carried drone, high speed, and full-size inert showcase. Explain each as a possible direction. A jet is a different propulsion architecture, not an automatic upgrade.

If repository access is available, read `USER-VISION.md`, `STATE.md`, `docs/SYSTEM-SPEC.md`, `docs/ACHIEVEMENT-GOALS.md`, and `docs/diagrams/concept.svg` before building. Use the drawing as a content reference. Preserve current source distinctions if documents have evolved. Do not expose local filesystem paths in the website.

### Acceptance gate

| Check | Required observable result |
|---|---|
| Build | Documented install/start/build commands appropriate to the environment; the build passes |
| Module inspection | Each major part can be selected with mouse, keyboard, and touch; panel content matches the selected part |
| State consistency | Repeated mode switches and reset restore correct geometry, labels, and selection state |
| Geometry illustration | Folding uses stable pivots; exploded parts remain identifiable; no claim of simulated separation |
| Mobile and accessibility | Inspect at approximately 390 px and 1440 px widths; no clipped controls; reduced-motion and keyboard paths work |
| Fallback | WebGL-disabled or failed rendering still exposes the schematic and all explanatory content |
| Evidence honesty | No invented performance data or completed flight milestones; Mach 1 remains tentative |
| Runtime | No uncaught console errors during the interaction path; no missing assets |
| Review record | Screenshots of original, deployed/exploded, baseline, and mobile views; concise verification notes |

RETURN: Changed files, working local preview instructions, screenshots, actual check results, assumptions, and remaining limitations. Do not claim a test passed unless it was run. Do not deploy, create an external account, or change repository visibility.

## Prompt ends

---

## Implementation references

Checked 2026-09-08: [GSAP matchMedia and reduced motion](https://gsap.com/docs/v3/GSAP/gsap.matchMedia%28%29/), [Three.js responsive rendering](https://threejs.org/manual/en/responsive.html), [W3C keyboard accessibility](https://www.w3.org/WAI/WCAG21/Understanding/keyboard-accessible).

The prompt is self-contained for a separate builder. It does not execute the build or grant publication authority.
