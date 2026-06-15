# 深渊协奏 (Abyssal Chord)

A MoonBit card battle game engine inspired by the web-based "Abyssal Chord" game. This is a MoonBit-native implementation of the core battle mechanics, featuring a complete card system, enemy AI, pollution mechanics, and a CLI demo.

## Overview

深渊协奏 is a turn-based card battle game where players take on the role of "Tuners" (调音师) fighting against aberrations born from ancient sonic frequencies. The game features:

- **26 unique cards** across 3 archetypes (Basic, Fortress, Overload)
- **3 enemy types** including 1 boss with phase transitions
- **Pollution system** with 5 tiers affecting global battle parameters
- **Sonic Boom** debuff stacking mechanics
- **Armor/AP resource management**
- **Permanent ability cards** that evolve your strategy

## Quick Start

### Prerequisites

- [MoonBit](https://www.moonbitlang.com/download/) toolchain (latest)

### Build & Run

```bash
# Clone the repository
git clone https://github.com/surf/MoonBit-Project.git
cd MoonBit-Project/abyssal_chord

# Build
moon build

# Run the CLI demo
moon run cmd/main

# Run tests
moon test
```

## Project Structure

```
abyssal_chord/
├── moon.mod                # Module definition
├── types.mbt               # Core type definitions (Card, Enemy, BattleState, etc.)
├── card_data.mbt           # Card library (26 cards for Zhong Lü)
├── character_data.mbt      # Character definitions (2 characters)
├── enemy_data.mbt          # Enemy definitions (3 enemies including boss)
├── pollution.mbt           # Pollution level system (5 tiers)
├── battle_state.mbt        # Battle state management & initialization
├── battle_effect.mbt       # Card effect resolution engine
├── enemy_ai.mbt            # Dice-driven enemy AI
├── cmd/main/
│   ├── main.mbt            # CLI game demo entry point
│   └── moon.pkg
├── abyssal_chord.mbt       # Library root
├── abyssal_chord_test.mbt  # Unit tests
└── .github/workflows/      # CI configuration
```

## Game Mechanics

### Cards

Cards are categorized by:
- **Type**: Attack (⚔️), Skill (🛡️), Ability (🔮)
- **Archetype**: Basic, Fortress (低频堡垒), Overload (过载冲击)
- **Cost**: AP required to play (0-3)
- **Target**: Single, Self, AoE

### Characters

| Character | Title | Max HP | Playstyle |
|-----------|-------|--------|-----------|
| 钟律 (Zhong Lü) | 重装和弦师 | 80 | Tank/Overload hybrid |
| 弦音 (Xian Yin) | 频率猎手 | 55 | High-frequency assassin |

### Enemies

| Enemy | HP | Type |
|-------|-----|------|
| 嘶鸣游荡者 (Howling Drifter) | 18-42 | Normal |
| 静默拟态体 (Silent Mimic) | 22-46 | Normal |
| 深渊颂歌·穆托斯 (Mutos) | 80-200 | Boss (Phase 2) |

### Pollution System

| Tier | Range | Enemy Dmg Bonus | Effect |
|------|-------|-----------------|--------|
| Silent (寂静期) | 0-15 | 0 | Normal |
| Humming (低鸣期) | 16-40 | +2 | - |
| Resonance (共振期) | 41-70 | +4 | Enemy +3 armor/turn |
| Roaring (咆哮期) | 71-90 | +6 | Player takes +3 pierce dmg |
| Finale (终焉和弦) | 91-100 | +10 | Player takes +5 pierce dmg |

## Development

```bash
# Type check
moon check

# Build with warnings
moon build

# Format code
moon fmt

# Run specific test
moon test --package moonbit_dev/abyssal_chord
```

## License

Apache-2.0

## Acknowledgments

This project is a MoonBit port of the game logic from the web-based Abyssal Chord (深渊协奏) card battle game, originally implemented in TypeScript/Next.js.
