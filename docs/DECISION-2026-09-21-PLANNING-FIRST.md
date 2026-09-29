# Planning-first repository decision · 2026-09-21

Audience: future contributors. Type: decision record. Authority: direct user request.

## Decision

Recoverable Flight Lab is now a dedicated planning repository for rocket, glider, drone, simulation, recovery, and evidence work. The repository documents the vision, alternatives, gates, decisions, sources, test plans, and eventual results.

The interactive workspace under `workspace/` is an optional presentation and discussion aid. It is not the project’s main product, canonical planner, gate authority, or required interface.

## What this supersedes

The September 8 digital reset correctly rejected the original showcase and led to a useful spatial ideaboard. Later work treated that ideaboard as the repository’s accepted central product. This decision supersedes that product hierarchy, not the software itself.

The ideaboard remains available as an extra surface. Its local proposals do not update planning documents automatically. Current-state Markdown owners control scope and gate status; dated decision and implementation records preserve the software history.

## Planning structure

- `README.md` is the project entrance and owner map.
- `STATE.md` is the current handoff.
- `USER-VISION.md` owns accepted intent and project identity.
- `docs/ROADMAP.md` owns shared physical gates and sequencing.
- `docs/DRONE-TRACK.md` owns fixed-wing, FPV, speed, autonomy, and mission planning for drones.
- `docs/REGISTERS.md` owns live decisions, risks, and first-review questions.
- Simulation, trade-study, source, and achievement documents keep their existing ownership.
- `workspace/` remains the optional interactive site.

## Immediate effect

Planning changes land in their Markdown owner first. The site may later mirror selected planning records, but no site change can accept an architecture, close a gate, or replace a reviewed record.
