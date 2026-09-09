# Current state

Audience: next contributor. Type: current state. Updated: 2026-09-08.

## Completed

Initial user vision, preliminary requirements, development gates, physical build plan, propulsion trade study, simulation plan, and registers are documented. The former generated concept diagram is retired.

An earlier task recorded a local/GitHub commit match; remote parity was not checked in this scoping task. The [achievement goals](docs/ACHIEVEMENT-GOALS.md) now capture reuse, measured flight replay, wing demonstration, prediction validation, and the user-suggested Mach 1 stretch option. Research and comparisons are qualitative; numerical feasibility has not been analyzed.

The [open-source audit](docs/OPEN-SOURCE-AUDIT-2026-09-08.md) inspected eight software repositories and two reference ecosystems. It recorded capabilities, release/license evidence, local inventory limits, and five findings with dispositions. Tentative tool choices now live in the simulation plan. The five tool-evaluation packets have not been executed.

The simulation plan includes five implementation packages, required inputs, validation gates, proposed code organization, and provisional effort allowances. A showcase website was implemented and a redesign attempted, then the user explicitly rejected the entire site. The source task reports removing its implementation/screenshots and stopping its preview. This checkout inherited only the old website-builder prompt and generated diagram; those are now removed here, and no `showcase/` directory exists. Earlier website build/test results do not establish acceptance and do not apply to any replacement.

A fresh [digital workspace scope](docs/DIGITAL-WORKSPACE-SCOPE.md) now defines the proposed product, interactions, information model, visual brief, first release, and acceptance checks. [User vision](USER-VISION.md) owns intent; the [reset decision](docs/DECISION-2026-09-08-DIGITAL-RESET.md) preserves the rejection. The [builder packet](docs/DIGITAL-WORKSPACE-BUILDER-PACKET.md) was executed in this task after the user authorized building. The user subsequently authorized a first build using the supplied whiteboard as concept reference, with text beside the canvas. A fresh local application now exists under `workspace/`; see the [implementation evidence](docs/DIGITAL-WORKSPACE-IMPLEMENTATION.md). Product visual acceptance remains pending.

The user clarified that simulator work includes upstream improvements, a maintained fork, or a new simulator from scratch. The [simulator development specification](docs/SIMULATOR-DEVELOPMENT-SPEC.md) scopes those choices, model boundaries, development milestones, numerical verification, physical validation, and provisional effort. No implementation route is selected.

## Not completed

No CAD suitable for manufacture, executable flight model, validated aerodynamics, motor selection, procurement, physical prototype, flight approval, or flight test exists. The integrated concept remains unvalidated. Role assignments and budget are open.

No validated glide performance, deployment timing, actuator behavior, structural margin, or flight performance exists. Any future 3D visual is a concept presentation, not engineering evidence.

## Next bounded tasks

Digital workspace: review the running local canvas and the [implementation record](docs/DIGITAL-WORKSPACE-IMPLEMENTATION.md). Nineteen data/geometry/recovery tests and a production build pass. Live browser checks cover the basic working loop, desktop/narrow layout, reordered story persistence, source reading, quota failure, corrupt-data recovery, and forced 3D context loss. File-chooser automation remains blocked by the browser extension setting. Remaining accessibility, browser-failure, and performance checks are listed explicitly. The user has now authorized public repository visibility and GitHub Pages publication. The manual deployment workflow, external question/idea forms, and visitor guide are ready for release. See [release preparation](docs/PUBLIC-RELEASE-PLAN.md).

Physical project:

Complete G0 using the five questions in [the register](docs/REGISTERS.md). Start with the primary demonstration and budget ceiling. Then build a measured mass and packaging ledger for a conventional baseline and separate glider.

Do not treat the original envelope or suggested development architecture as an accepted final design. Keep the vision owner separate from engineering recommendations.

## Scoping verification

One bounded Luna-medium lane checked primary sources and independently read the draft scope. Its five findings are reconciled in the scope; the integrator checked the final dispositions, local Markdown links, retired references, and diff whitespace. That review covered the scope only. The later implementation and its distinct verification status are recorded above; no visual acceptance, engineering validation, or physical gate completion is claimed.
