# Roadmap (RoboCup 2026)

Our goal is a **fully autonomous, tournament-ready team** that stays operational under real match conditions.

The following phases are being developed **in parallel**, with continuous
iteration and feedback between simulation and hardware.

## Phase 0 — Baseline (Ongoing)
- Stabilize hardware platform (actuation/sensors/communications)
- Build logging + replay pipeline
- Align simulator models (MuJoCo XML / USD)

## Phase 1 — Single-robot soccer loop (Ongoing)
- (1) detect ball → (2) approach → (3) kick → (4) reset/scan
- Basic stability using IMU + foot contact
- Automation: success rate, time-to-kick, energy metrics

## Phase 2 — Perception & localization upgrade (Ongoing)
- Add goal/line perception + field-frame alignment
- VSLAM or particle-filter localization
- Compensate camera/inference latency

## Phase 3 — Multi-robot behaviors
- Role assignment (striker/defender/keeper)
- Collision avoidance / spacing control
- Set-plays (kickoff/free-kick)

## Phase 4 — Tournament hardening
- Robustness to falls, sensor drops, communication issues
- Safe stop/restart protocol
- Deliverables: TDP, videos, checklists
