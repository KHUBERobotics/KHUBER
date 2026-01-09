# Software (Stack)

## Architecture
- **Perception**: camera input → detection/tracking → world projection
- **State estimation**: IMU + vision fusion
- **Locomotion**: walking/posture + safety constraints
- **Behavior/strategy**: FSM + roles/tactics
- **Hardware interface**: motor bus + sensors + watchdog

## Middleware
- ROS 2 (Humble-focused) integration
- Timestamped topics for synchronization across modules

## Simulation
- MuJoCo: fast iteration for RL training and debugging (XML-based)
- Isaac Sim/Lab: USD-based, GPU acceleration and domain randomization

## CI / reproducibility
- Docker-based development environment
- GitHub Actions for documentation/site deployment
