# Embedded & Control

## STM32 control board philosophy
- Avoid conflicts between periodic motor/sensor reads and writes
- DMA-based UART/SPI/ADC
- watchdog/ping for connection health

## Motor communication
- Dynamixel Protocol v1 experience
- Half-duplex UART with direction control pin for TX/RX switching

## Data streaming
- USB CDC telemetry streaming to host
- Command reception triggers motor writes
- Synchronization strategies:
  - ring buffers
  - sequence IDs
  - drop detection

## Safety
- torque limits, joint limits, thermal/power monitoring (where available)
- fall/collision detection → safe posture or torque-off
