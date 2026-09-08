# Digital experience reset · 2026-09-08

Audience: future contributors. Type: decision record. Authority: direct user requests in this task.

## Accepted direction

The user first rejected the simple 3D showcase and asked for a more impressive 3D concept with a space backdrop, hover inspection, and a canvas that could be dragged around. They clarified that the wings fold **inside** the cylindrical body. The original aspiration remains 7–8 ft long, 1 ft in body diameter, and 3–4 ft total deployed span including the body.

The user then superseded that redesign: “rather than a website … scope it from scratch” and “the current site should be scrapped entirely.” They requested a new prompt, a new task, and proper notes for future reference. This latest instruction controls future work.

## Removed and retained

- Removed the whole `showcase/` implementation, dependencies, tests, and screenshots; stopped its local preview at port 4174. Both the initial site and its redesign are discarded. No site was deployed.
- Removed the old website-builder prompt and generated `concept.svg`/PNG from live references. The tracked files remain recoverable through Git history, but must not be used to seed the replacement.
- Retained the original user ideas and engineering source records. The original whiteboard photo was never copied into the site or repository. Do not delete the user's source photograph or publish its personal names.
- Updated `USER-VISION.md`, `STATE.md`, and the project README to point to the fresh scoping task.

Earlier browser/build passes applied to discarded code. They are not product acceptance, an endorsement of its design, or replacement validation. A reviewer inspected the discarded redesign; no independent reviewer has approved a new product scope.

## Desired experience versus proposals

**User direction:** a comprehensive, expanded, properly scoped digital project experience; a spatial/draggable canvas; compelling 3D concept inspection; hover and selection; internal wing stowage; preserve ambitious ideas even before feasibility is known. Do not default to a conventional scrolling marketing website.

**Proposed interpretation, not yet accepted:** a project workspace connecting vehicle concepts, modules, research questions, evidence, experiment stages, and decisions. Editable notes, saved workspaces, collaboration, simulation integration, and precise application architecture are options to scope, not promised features.

**Physical aspirations, not accepted engineering:** jet-inspired thruster appearance, an originally described fuel body, two gear/axle/motor-driven wings with desired self-orientation, detachable cone payload with altimeter/hardware and two fins intended to glide, two smaller aft fins, reuse, telemetry, speed/Mach 1 exploration, and an optional drone payload. No integrated flight, glide, packaging, recovery, or speed feasibility is established.

## Next owner and acceptance

The new task owns a product brief, information/interaction model, staged scope, and risk/open-question reconciliation. The user owns material product priorities and final architecture. The next task must not implement another website before establishing its scope. See `DIGITAL-WORKSPACE-PROMPT.md` for the executable handoff.

## Dispatch record

The saved packet was submitted as a new project task titled “Scope the Recoverable Flight digital workspace.” Worktree setup was queued at dispatch. The next task must reconcile the updated source-worktree documents as instructed in its self-contained prompt. Dispatch is not completion of the product scope.

## Scoping follow-through

The new worktree reconciled the reset and produced a [proposed scope](DIGITAL-WORKSPACE-SCOPE.md) and [builder packet](DIGITAL-WORKSPACE-BUILDER-PACKET.md). Scoping completion does not mean user acceptance or implementation authorization. The original dispatch record above remains historical.
