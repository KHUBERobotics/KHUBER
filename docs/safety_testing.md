# Safety & Testing

## Safety goals
- Minimize damage during falls
- Immediate safe-stop during hazardous situations

## Testing checklist
- sensor calibration (IMU bias, camera intrinsics)
- foot contact/pressure sanity checks
- motor direction/limits verification
- power/thermal checks
- network + ROS2 clock sync
- emergency stop procedure

## Logs & debugging
- consistent log formats for every run
- automated success/failure labeling
- reproducible seeds/configs
