# Mission & Overview

## Mission
KHUBER aims to build **humanoid soccer robots that stay reliable in the real world**.  
Not just “kicking once”, but **seeing (perception), staying upright (locomotion), and cooperating (teamwork)** continuously.

## Why soccer?
Soccer forces almost every core challenge of humanoid autonomy:

- Dynamic multi-agent environments with frequent occlusions  
- Fast turning, collisions, changing contacts and friction  
- Real-world latency, noise, slips, and hardware variability  
- Team-level tactics and rule compliance, not just single-robot skills  

## Design principles
1. **Simulation-first, reality-validated**: learn big in sim, validate fast on hardware  
2. **Residual + safety**: keep a strong baseline, let policy add residual adaptation  
3. **Observability**: logs, replay, and metrics for every experiment  
4. **Modular stack**: independent improvement of perception/locomotion/strategy/firmware  

## Public outputs
- Open documentation (and open source where possible)  
- RoboCup deliverables (TDP, demo videos, checklists)  
- Reproducible environments (containers / requirements)  
