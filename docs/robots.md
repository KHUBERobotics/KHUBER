# Robots (Hardware)

## Target: Small Robot Division
We design and operate within:
- **Height < 110 cm**
- **Weight < 15 kg**

## Actuation
Dynamixel-based actuation experience:
- AX-18 baseline robot validated for basic motions via MCU
- Considering/using higher-torque lines (e.g., MX-64 class) as needed

## Sensors
- **Stereo camera** (e.g., Intel RealSense D455) for perception and SLAM experiments
- **IMU** for stabilization and state estimation
- **Foot contact/pressure** sensing (toe/heel multi-point, sim + hardware co-design)

## Compute & communications
- On-robot compute: Jetson Orin NX (16GB class) for ROS2 integration
- Low-level: STM32 controller board (motor/sensor I/O + RTOS)
- Host interface: USB CDC for telemetry and command streaming

## Mechanical goals
- Lightweight yet stiff structure (reduce backlash and flex)
- Fall protection: impact mitigation, cable strain relief
- Maintainability: modular replacement for fast repairs

## Files
- Simulation: MuJoCo XML (`robot_mx.xml` family), mesh (STL)
- Isaac: USD conversion/validation pipeline
