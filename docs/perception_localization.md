# Perception & Localization

## Perception pipeline
Camera → rectify → detection → tracking → world projection  
Targets:
- ball
- goal posts / goal area
- field lines / intersections
- robots (teammate/opponent)

## Localization
- VSLAM + IMU fusion experiments (robust to lighting variation)
- Match-time robustness requires:
  - re-localization triggers
  - drift detection
  - fail-safe behaviors (stop/scan/reset)

## Performance goals
- 30–60 FPS perception pipeline
- compensate camera + inference + ROS2 latency
