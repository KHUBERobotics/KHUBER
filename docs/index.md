# KHUBER
**Kyung Hee University Biomedical Engineering Robotics**

KHUBER is a robotics team based at Kyung Hee University, building **autonomous humanoid soccer robots** for the  
**RoboCup Humanoid Soccer League (HSL)** — targeting **RoboCup 2026 (Incheon, South Korea)** in the **Small Robot Division**.

!!! tip "RoboCup 2026 Goal"
    Compete at **RoboCup 2026 (Incheon, South Korea)**  
    **HSL — Small Robot Division** *(height < 110 cm, weight < 15 kg)*

## What we build
=== "Soccer Autonomy"
    - Real-time **ball / goal / line / robot perception** with tracking  
    - **Localization & mapping** (VSLAM + IMU fusion)  
    - **Behavior & strategy**: FSM, roles/tactics, set-plays, team coordination

=== "Biped Locomotion"
    - **Walking**: simulation-first RL + sim-to-real  
    - **Stability**: IMU + foot contact/pressure sensing  
    - **Recovery**: fall detection and recovery driven by rewards + safety logic

=== "Hardware & Embedded"
    - **Actuation**: Dynamixel-based joint actuation (AX/MX experience)  
    - **Control board**: STM32 with real-time motor/sensor logging  
    - **Streaming**: USB CDC for synchronized host (PC/Jetson) control & telemetry

## Current stack snapshot
| Layer | Stack |
|---|---|
| On-robot compute | Jetson Orin NX 16GB |
| OS/Middleware | Ubuntu + ROS 2 (Humble-focused) |
| Perception | OpenCV + DL inference inference (YOLO, ONNX) |
| Sensors | Stereo camera (RealSense D405), IMU, foot contact/pressure |
| Simulation | MuJoCo (XML), Isaac Sim/Lab (USD) |
| Learning | PPO/SAC-style RL with base motion + residual learning |
| Firmware | STM32 firmware with UART (Dynamixel), USB, and DMA/RTOS-based task design |

## Links
- GitHub: [KHUBERobotics](https://github.com/KHUBERobotics)
- Videos: [Demo video](https://www.youtube.com/watch?v=cC_jY2EgsNI)

## Latest updates
- 2026-01-09: Initial KHUBER public website draft
- (add)
