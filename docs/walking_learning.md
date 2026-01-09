# Walking & Learning

## Approach: Reference + Residual RL
KHUBER actively experiments with a **reference-motion baseline** plus **residual policy**:

- **Reference**: gait cycles derived from AMASS/SMPL and processed into joint trajectories
- **Residual**: policy outputs corrections (typically leg joints first)
- **Stabilization**: action filtering, rate limiting, safety clamps

## Why residual?
- Faster convergence and more stable early training
- Residual learns adaptation to friction/mass/latency changes

## Observations (typical)
- leg joint positions/velocities
- IMU acceleration/gyro
- foot contact/pressure (toe/heel multi-point)
- filtered action state
- phase encoding (sin/cos)
- `go_cmd` (desired speed / playback rate command)

## Training & evaluation
- Primary algorithm: PPO-style RL (stable, easy to iterate)
- Metrics:
  - speed tracking
  - fall/recovery rate
  - energy cost
  - slip / lateral drift
  - step timing consistency

!!! tip "Sim-to-real checklist"
    - domain randomization (friction/mass/delay) + system identification  
    - replay hardware logs to analyze failure modes
