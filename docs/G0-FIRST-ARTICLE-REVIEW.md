# First-demonstration comparison for G0 / D0

Audience: student team and faculty advisor. Type: proposed review packet. Updated: 2026-09-29. Decision status: open.

## Decision to make

Choose one first demonstration, its consenting owner, reviewer, access route, and resource ceiling. **Recommend A: a manual inert wing-deployment mockup**, because it directly tests the distinctive transformation in [user vision](../USER-VISION.md) without depending on a selected flight vehicle. This is a proposed first bench result, not a change to the accepted vision or an accepted G0 decision. The [register](REGISTERS.md#first-review-record) owns the shared review record.

## Three candidates

| Candidate | Deliverable and measurement question | Dependencies | Planning allowance | Proposed observable acceptance |
|---|---|---|---|---|
| A: Inert wing deployment, recommended | Small manual mockup with two wings fully inside a cylindrical envelope when stowed; cycle video, angle table, dimensions and mass. Can both wings reach the same endpoint repeatedly without interference? | Available soft mockup materials, ruler/protractor, camera, scale if available; consenting maker and bench reviewer; suitable workspace. No motor, propulsion, separation or flight loads. | 6–12 person-hours; $0–40 incremental materials allowance plus $0–20 replacement reserve, assuming borrowed tools. | Ten consecutive recorded stow/deploy cycles on one unchanged revision; both wings stow inside; each endpoint within ±5° of its frozen target and left/right difference ≤5°; no jam, visible damage or unplanned adjustment. |
| B: Narrow sensing bench | Existing phone tilt logger compared with an independent protractor fixture; original logs, reference readings and residual plot. Does reported static tilt agree with reference angle? | Existing phone with exportable angle readings, known axis/units, repeatable fixture and protractor; analyst and reviewer. App/export availability is unverified. | 4–8 person-hours; $0–20 fixture allowance plus $0–10 reserve with borrowed phone/tools. Paid app or new sensor excluded. | Five reference angles, three readings each after settling; absolute error ≤5° at every angle; monotonic timestamps and explicit missing-data flags. Reference uncertainty ≤2° or outcome is inconclusive. |
| C: Drone mission-log demonstration | Synthetic fixed-wing waypoint trace, documented coordinates/units, replay and tracking-error report. Can the analysis correctly distinguish an on-path trace from a deliberately offset trace? | Existing computer and inspectable calculation/plotting tool; analyst and reviewer. No selected airframe, license or simulator required. | 4–8 person-hours; $0 incremental software/hardware assuming existing tools; $0 reserve. New license/computer excluded. | Straight 100 m reference segment with ten interior samples each on-path and 5 m laterally offset; report 0 m and 5 m cross-track errors within 0.01 m, flag one missing sample, and reproduce results from saved inputs. Label every output synthetic. |

All thresholds above are **proposed classroom demonstration criteria**, not engineering standards or evidence of flight suitability. Freeze or revise them with the reviewer before collecting test data. C is currently the least hardware-dependent drone candidate, inferred from the absence of a selected platform/tool in [the drone track](DRONE-TRACK.md) and [simulation plan](SIMULATION-PLAN.md). It tests analysis only, not autopilot behavior, endurance or autonomy. A simulator reference mission remains a later conditional alternative.

### Estimate evidence and uncertainty

These are author-generated planning allowances, not supplier quotes, verified inventory, or measured build times. A allocates 1–2 hours to scope/drawing, 2–4 to mockup preparation, 1–2 to measurement and 2–4 to evidence/rework. B and C each allocate 1–2 hours to setup, 1–2 to records and 2–4 to analysis/reproduction. Beginner learning and access delays are additional; calendar dates remain open.

Dollar bands are provisional spending envelopes for simple consumables, with explicit replacement reserve, not researched market prices. Before accepting a budget, inventory borrowed materials, price the actual missing items including tax/shipping, and re-estimate. If tools, export access or facilities are missing, the estimates do not apply. No purchase is requested or authorized by this packet.

## A: First measurement packet

Proposed packet ID: WING-BENCH-01. Owner, reviewer and date: **unassigned**. Effort cap: 12 person-hours, with a checkpoint after two hours of inventory and drawing. Stop there if access, material suitability or measurable geometry remains unresolved.

1. Freeze a small mockup drawing with measured cylinder diameter/length, wing outline, hinge locations, endpoint targets and revision ID. Choose dimensions from available materials; the original full-size envelope is not a requirement. Inventory camera, measuring tools and materials. Have the reviewer confirm the bench scope and criteria before making or testing it.
2. Prepare a soft, manually operated mockup under the applicable workspace procedures. Mark it inert. Keep camera and fixed angle references visible; do not introduce springs, motors, stored-energy deployment or loading in this packet. Record material, actual dimensions and mass, or mark mass unmeasured if no scale is available.
3. Predict the two endpoint angles from the drawing before testing. Record ten complete cycles without changing the revision. For each, retain cycle ID, left/right endpoint angles, stow result, jam/damage observations and video frame references. Record every attempt, including failures; changes start a new revision and new series.
4. Compare predictions with measurements; report maximum endpoint error, maximum left/right difference, cycle success count and measurement uncertainty. Repeat angle readings on three frames to estimate reading spread; if angle uncertainty exceeds 2°, improve the measurement or report inconclusive rather than claiming a pass.
5. Review the unchanged raw video, cycle table and short result together. Pass means only the stated unloaded packaging/repeatability question passed. A failure or inconclusive result produces one proposed revision and a new effort estimate; do not proceed to powered or flight hardware from this result.

Evidence package: drawing, inventory/assumptions, original video, cycle table, derived summary and dated reviewer disposition, using the [roadmap test-record fields](ROADMAP.md#test-record-template). Agree the storage path before collecting personal video; private records must not enter public assets automatically. No article has been made and no test has run.

## Review disposition still needed

Choose A, B or C; confirm or revise thresholds; name consenting owner/reviewer; verify resources/access; set the budget ceiling with reserve and review date. G0 and D0 remain open. Choosing a bench packet does not supply the missing mentor/site route or accept later flight work.

## Earlier recommendation, preserved

The September 25 packet recommended: “The recommended **first flight goal for review** is recovery of a conventional rocket with interpretable measured data.” That remains a possible later flight goal; this September 29 packet compares the first bench/software demonstration instead. Separate glider and conventional rocket options remain in [the roadmap](ROADMAP.md). No team acceptance of either recommendation is recorded.
