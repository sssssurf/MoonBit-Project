const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function _M0TP212moonbit__dev14abyssal__chord11BattleState(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.player = param0;
  this.enemy = param1;
  this.player_char = param2;
  this.enemy_data = param3;
  this.phase = param4;
  this.turn_number = param5;
  this.pollution = param6;
  this.log = param7;
}
function _M0TP212moonbit__dev14abyssal__chord11PlayerState(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15, param16, param17, param18, param19, param20) {
  this.id = param0;
  this.name = param1;
  this.hp = param2;
  this.max_hp = param3;
  this.armor = param4;
  this.ap = param5;
  this.max_ap = param6;
  this.hand = param7;
  this.deck = param8;
  this.discard = param9;
  this.exiled = param10;
  this.permanent_abilities = param11;
  this.damage_bonus = param12;
  this.armor_per_turn = param13;
  this.extra_damage_per_armor = param14;
  this.cards_played_this_turn = param15;
  this.has_taken_self_damage = param16;
  this.next_attack_bonus = param17;
  this.harmonic_active = param18;
  this.free_second_attack = param19;
  this.debuffs = param20;
}
function _M0TPB8MutLocalGbE(param0) {
  this.val = param0;
}
function _M0TP212moonbit__dev14abyssal__chord6Debuff(param0, param1) {
  this.debuff_type = param0;
  this.stacks = param1;
}
function _M0TP212moonbit__dev14abyssal__chord10EnemyState(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
  this.id = param0;
  this.name = param1;
  this.hp = param2;
  this.max_hp = param3;
  this.armor = param4;
  this.is_boss = param5;
  this.is_phase2 = param6;
  this.phase2_triggered = param7;
  this.summoned_minion = param8;
  this.reflect_active = param9;
  this.debuffs = param10;
}
function _M0TPB8MutLocalGRP212moonbit__dev14abyssal__chord11BattleStateE(param0) {
  this.val = param0;
}
function _M0TP212moonbit__dev14abyssal__chord14PollutionLevel(param0, param1, param2, param3, param4, param5, param6) {
  this.min_val = param0;
  this.max_val = param1;
  this.name = param2;
  this.name_en = param3;
  this.damage_bonus = param4;
  this.armor_per_turn = param5;
  this.player_piercing_dmg = param6;
}
function _M0TP212moonbit__dev14abyssal__chord11EnemyAction(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11) {
  this.dice_min = param0;
  this.dice_max = param1;
  this.name = param2;
  this.name_en = param3;
  this.action_type = param4;
  this.effect = param5;
  this.damage = param6;
  this.armor = param7;
  this.sonic_boom = param8;
  this.pollution_increase = param9;
  this.piercing = param10;
  this.special = param11;
}
function _M0TP212moonbit__dev14abyssal__chord5Enemy(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13) {
  this.id = param0;
  this.name = param1;
  this.name_en = param2;
  this.lore = param3;
  this.hp_1p = param4;
  this.hp_2p = param5;
  this.hp_3p = param6;
  this.hp_4p = param7;
  this.actions = param8;
  this.is_boss = param9;
  this.has_phase2 = param10;
  this.phase2_actions = param11;
  this.phase2_trigger = param12;
  this.phase2_effect = param13;
}
function _M0TP212moonbit__dev14abyssal__chord4Card(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14, param15) {
  this.id = param0;
  this.name = param1;
  this.name_en = param2;
  this.card_type = param3;
  this.archetype = param4;
  this.cost = param5;
  this.target = param6;
  this.effect = param7;
  this.design_note = param8;
  this.base_damage = param9;
  this.base_armor = param10;
  this.self_damage = param11;
  this.sonic_boom = param12;
  this.pollution_modifier = param13;
  this.exhaust = param14;
  this.retain = param15;
}
function _M0TP212moonbit__dev14abyssal__chord9Character(param0, param1, param2, param3, param4, param5, param6, param7, param8, param9) {
  this.id = param0;
  this.name = param1;
  this.name_en = param2;
  this.title = param3;
  this.title_en = param4;
  this.max_hp = param5;
  this.relic = param6;
  this.relic_en = param7;
  this.relic_effect = param8;
  this.lore = param9;
}
function _M0TP212moonbit__dev14abyssal__chord13ActiveAbility(param0, param1, param2, param3) {
  this.id = param0;
  this.card_id = param1;
  this.name = param2;
  this.effect = param3;
}
const _M0FP212moonbit__dev14abyssal__chord11initial__ap = 3;
const _M0FP212moonbit__dev14abyssal__chord17turn__draw__count = 3;
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC16double6Double7to__int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function _M0FPB7printlnGsE(input) {
  console.log(_M0IPC16string6StringPB4Show10to__string(input));
}
function _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(self, index) {
  const len = self.length;
  if (index >= 0 && index < len) {
    $bound_check(self, index);
    return self[index];
  } else {
    return $panic();
  }
}
function _M0IP212moonbit__dev14abyssal__chord8CardTypePB2Eq5equal(_x_474, _x_475) {
  switch (_x_474) {
    case 0: {
      if (_x_475 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_475 === 1) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_475 === 2) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0IP212moonbit__dev14abyssal__chord10DebuffTypePB2Eq5equal(_x_466, _x_467) {
  switch (_x_466) {
    case 0: {
      if (_x_467 === 0) {
        return true;
      } else {
        return false;
      }
    }
    case 1: {
      if (_x_467 === 1) {
        return true;
      } else {
        return false;
      }
    }
    case 2: {
      if (_x_467 === 2) {
        return true;
      } else {
        return false;
      }
    }
    case 3: {
      if (_x_467 === 3) {
        return true;
      } else {
        return false;
      }
    }
    case 4: {
      if (_x_467 === 4) {
        return true;
      } else {
        return false;
      }
    }
    default: {
      if (_x_467 === 5) {
        return true;
      } else {
        return false;
      }
    }
  }
}
function _M0FP212moonbit__dev14abyssal__chord8add__log(state, msg) {
  const nl = [];
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < state.log.length) {
      _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(nl, _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(state.log, i.val));
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(nl, msg);
  return new _M0TP212moonbit__dev14abyssal__chord11BattleState(state.player, state.enemy, state.player_char, state.enemy_data, state.phase, state.turn_number, state.pollution, nl);
}
function _M0FP212moonbit__dev14abyssal__chord18add__player__armor(state, amount) {
  const _tmp = state.player;
  return new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp.id, _tmp.name, _tmp.hp, _tmp.max_hp, state.player.armor + amount | 0, _tmp.ap, _tmp.max_ap, _tmp.hand, _tmp.deck, _tmp.discard, _tmp.exiled, _tmp.permanent_abilities, _tmp.damage_bonus, _tmp.armor_per_turn, _tmp.extra_damage_per_armor, _tmp.cards_played_this_turn, _tmp.has_taken_self_damage, _tmp.next_attack_bonus, _tmp.harmonic_active, _tmp.free_second_attack, _tmp.debuffs), state.enemy, state.player_char, state.enemy_data, state.phase, state.turn_number, state.pollution, state.log);
}
function _M0FP212moonbit__dev14abyssal__chord16add__sonic__boom(state, stacks) {
  const nd = [];
  const found = new _M0TPB8MutLocalGbE(false);
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < state.enemy.debuffs.length) {
      const d = _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(state.enemy.debuffs, i.val);
      if (_M0IP212moonbit__dev14abyssal__chord10DebuffTypePB2Eq5equal(d.debuff_type, 0)) {
        _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(nd, new _M0TP212moonbit__dev14abyssal__chord6Debuff(d.debuff_type, d.stacks + stacks | 0));
        found.val = true;
      } else {
        _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(nd, d);
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (!found.val) {
    _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(nd, new _M0TP212moonbit__dev14abyssal__chord6Debuff(0, stacks));
  }
  const _tmp = state.enemy;
  return new _M0TP212moonbit__dev14abyssal__chord11BattleState(state.player, new _M0TP212moonbit__dev14abyssal__chord10EnemyState(_tmp.id, _tmp.name, _tmp.hp, _tmp.max_hp, _tmp.armor, _tmp.is_boss, _tmp.is_phase2, _tmp.phase2_triggered, _tmp.summoned_minion, _tmp.reflect_active, nd), state.player_char, state.enemy_data, state.phase, state.turn_number, state.pollution, state.log);
}
function _M0FP212moonbit__dev14abyssal__chord23deal__damage__to__enemy(state, raw_damage, piercing) {
  if (raw_damage <= 0) {
    return state;
  }
  const actual = new _M0TPB8MutLocalGiE(raw_damage);
  const ea = new _M0TPB8MutLocalGiE(state.enemy.armor);
  if (!piercing && ea.val > 0) {
    if (ea.val >= actual.val) {
      ea.val = ea.val - actual.val | 0;
      actual.val = 0;
    } else {
      actual.val = actual.val - ea.val | 0;
      ea.val = 0;
    }
  }
  const nh = actual.val > 0 ? ((state.enemy.hp - actual.val | 0) < 0 ? 0 : state.enemy.hp - actual.val | 0) : state.enemy.hp;
  const _tmp = state.enemy;
  return new _M0TP212moonbit__dev14abyssal__chord11BattleState(state.player, new _M0TP212moonbit__dev14abyssal__chord10EnemyState(_tmp.id, _tmp.name, nh, _tmp.max_hp, ea.val, _tmp.is_boss, _tmp.is_phase2, _tmp.phase2_triggered, _tmp.summoned_minion, _tmp.reflect_active, _tmp.debuffs), state.player_char, state.enemy_data, state.phase, state.turn_number, state.pollution, state.log);
}
function _M0FP212moonbit__dev14abyssal__chord13shuffle__deck(state) {
  if (state.player.deck.length > 0) {
    return state;
  }
  if (state.player.discard.length === 0) {
    return state;
  }
  const _tmp = state.player;
  return new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp.id, _tmp.name, _tmp.hp, _tmp.max_hp, _tmp.armor, _tmp.ap, _tmp.max_ap, _tmp.hand, state.player.discard, [], _tmp.exiled, _tmp.permanent_abilities, _tmp.damage_bonus, _tmp.armor_per_turn, _tmp.extra_damage_per_armor, _tmp.cards_played_this_turn, _tmp.has_taken_self_damage, _tmp.next_attack_bonus, _tmp.harmonic_active, _tmp.free_second_attack, _tmp.debuffs), state.enemy, state.player_char, state.enemy_data, state.phase, state.turn_number, state.pollution, state.log);
}
function _M0FP212moonbit__dev14abyssal__chord11draw__cards(state, count) {
  const s = new _M0TPB8MutLocalGRP212moonbit__dev14abyssal__chord11BattleStateE(state);
  const drawn = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (drawn.val < count) {
      if (s.val.player.hand.length >= 6) {
        break;
      }
      s.val = _M0FP212moonbit__dev14abyssal__chord13shuffle__deck(s.val);
      if (s.val.player.deck.length === 0) {
        break;
      }
      const card = _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(s.val.player.deck, 0);
      const nd = [];
      const j = new _M0TPB8MutLocalGiE(1);
      while (true) {
        if (j.val < s.val.player.deck.length) {
          _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(nd, _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(s.val.player.deck, j.val));
          j.val = j.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const nh = [];
      const k = new _M0TPB8MutLocalGiE(0);
      while (true) {
        if (k.val < s.val.player.hand.length) {
          _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(nh, _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(s.val.player.hand, k.val));
          k.val = k.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(nh, card);
      const _tmp = s.val;
      const _tmp$2 = s.val.player;
      s.val = new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp$2.id, _tmp$2.name, _tmp$2.hp, _tmp$2.max_hp, _tmp$2.armor, _tmp$2.ap, _tmp$2.max_ap, nh, nd, _tmp$2.discard, _tmp$2.exiled, _tmp$2.permanent_abilities, _tmp$2.damage_bonus, _tmp$2.armor_per_turn, _tmp$2.extra_damage_per_armor, _tmp$2.cards_played_this_turn, _tmp$2.has_taken_self_damage, _tmp$2.next_attack_bonus, _tmp$2.harmonic_active, _tmp$2.free_second_attack, _tmp$2.debuffs), _tmp.enemy, _tmp.player_char, _tmp.enemy_data, _tmp.phase, _tmp.turn_number, _tmp.pollution, _tmp.log);
      drawn.val = drawn.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return s.val;
}
function _M0FP212moonbit__dev14abyssal__chord17pollution__levels() {
  return [new _M0TP212moonbit__dev14abyssal__chord14PollutionLevel(0, 15, "寂静期", "Silent", 0, 0, 0), new _M0TP212moonbit__dev14abyssal__chord14PollutionLevel(16, 40, "低鸣期", "Humming", 2, 0, 0), new _M0TP212moonbit__dev14abyssal__chord14PollutionLevel(41, 70, "共振期", "Resonance", 4, 3, 0), new _M0TP212moonbit__dev14abyssal__chord14PollutionLevel(71, 90, "咆哮期", "Roaring", 6, 5, 3), new _M0TP212moonbit__dev14abyssal__chord14PollutionLevel(91, 100, "终焉和弦", "Finale", 10, 5, 5)];
}
function _M0FP212moonbit__dev14abyssal__chord21get__pollution__level(pollution) {
  const levels = _M0FP212moonbit__dev14abyssal__chord17pollution__levels();
  return pollution >= 91 ? _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(levels, 4) : pollution >= 71 ? _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(levels, 3) : pollution >= 41 ? _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(levels, 2) : pollution >= 16 ? _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(levels, 1) : _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(levels, 0);
}
function _M0FP212moonbit__dev14abyssal__chord16howling__drifter() {
  const _bind = "howling-drifter";
  const _bind$2 = "嘶鸣游荡者";
  const _bind$3 = "Howling Drifter";
  const _bind$4 = "曾是人类，被旧日回音侵蚀后声带异化为可发射次声波的器官。";
  const _bind$5 = 18;
  const _bind$6 = 26;
  const _bind$7 = 34;
  const _bind$8 = 42;
  const _bind$9 = false;
  const _bind$10 = false;
  const _bind$11 = "";
  const _bind$12 = "";
  const _bind$13 = [new _M0TP212moonbit__dev14abyssal__chord11EnemyAction(1, 2, "次声冲撞", "Infrasonic Charge", 0, "造成 6 点伤害", 6, 0, 0, 0, false, ""), new _M0TP212moonbit__dev14abyssal__chord11EnemyAction(3, 3, "撕裂嘶鸣", "Tearing Howl", 1, "造成 4 点伤害，附加 2 层声爆", 4, 0, 2, 0, false, ""), new _M0TP212moonbit__dev14abyssal__chord11EnemyAction(4, 4, "声波蓄积", "Wave Accumulation", 2, "获得 8 点护甲，污染度 +5", 0, 8, 0, 5, false, ""), new _M0TP212moonbit__dev14abyssal__chord11EnemyAction(5, 5, "共振增幅", "Resonance Amplify", 4, "本回合伤害 +3，再次掷骰", 0, 0, 0, 0, false, "reroll_with_bonus_3"), new _M0TP212moonbit__dev14abyssal__chord11EnemyAction(6, 6, "低频感染", "Low Frequency Infection", 3, "对全体造成 3 点伤害，附加 1 层声爆", 3, 0, 1, 0, false, "")];
  const _bind$14 = [];
  return new _M0TP212moonbit__dev14abyssal__chord5Enemy(_bind, _bind$2, _bind$3, _bind$4, _bind$5, _bind$6, _bind$7, _bind$8, _bind$13, _bind$9, _bind$10, _bind$14, _bind$11, _bind$12);
}
function _M0FP212moonbit__dev14abyssal__chord11init__enemy(enemy_data) {
  return new _M0TP212moonbit__dev14abyssal__chord10EnemyState(enemy_data.id, enemy_data.name, enemy_data.hp_1p, enemy_data.hp_1p, 0, enemy_data.is_boss, false, false, false, false, []);
}
function _M0FP212moonbit__dev14abyssal__chord16zhong__lv__cards() {
  return [new _M0TP212moonbit__dev14abyssal__chord4Card("zl-basic-01", "重频打击", "Heavy Frequency Strike", 0, 0, 1, 0, "造成 5 点伤害", "基准攻击牌", 5, 0, 0, 0, 0, false, false), new _M0TP212moonbit__dev14abyssal__chord4Card("zl-basic-02", "重频打击", "Heavy Frequency Strike", 0, 0, 1, 0, "造成 5 点伤害", "基准攻击牌", 5, 0, 0, 0, 0, false, false), new _M0TP212moonbit__dev14abyssal__chord4Card("zl-basic-03", "重频打击", "Heavy Frequency Strike", 0, 0, 1, 0, "造成 5 点伤害", "基准攻击牌", 5, 0, 0, 0, 0, false, false), new _M0TP212moonbit__dev14abyssal__chord4Card("zl-basic-04", "重频打击", "Heavy Frequency Strike", 0, 0, 1, 0, "造成 5 点伤害", "基准攻击牌", 5, 0, 0, 0, 0, false, false), new _M0TP212moonbit__dev14abyssal__chord4Card("zl-basic-05", "声学壁垒", "Acoustic Barrier", 1, 0, 1, 1, "获得 5 点护甲", "基准防御牌", 0, 5, 0, 0, 0, false, false), new _M0TP212moonbit__dev14abyssal__chord4Card("zl-basic-06", "声学壁垒", "Acoustic Barrier", 1, 0, 1, 1, "获得 5 点护甲", "基准防御牌", 0, 5, 0, 0, 0, false, false), new _M0TP212moonbit__dev14abyssal__chord4Card("zl-basic-07", "声学壁垒", "Acoustic Barrier", 1, 0, 1, 1, "获得 5 点护甲", "基准防御牌", 0, 5, 0, 0, 0, false, false), new _M0TP212moonbit__dev14abyssal__chord4Card("zl-basic-08", "声学壁垒", "Acoustic Barrier", 1, 0, 1, 1, "获得 5 点护甲", "基准防御牌", 0, 5, 0, 0, 0, false, false), new _M0TP212moonbit__dev14abyssal__chord4Card("zl-basic-09", "稳频调谐", "Stable Frequency Tuning", 1, 0, 1, 1, "获得 3 点护甲，降低 10 点污染度", "防御+净化", 0, 3, 0, 0, -10, false, false), new _M0TP212moonbit__dev14abyssal__chord4Card("zl-basic-10", "余音震击", "Resonant Shock", 0, 0, 1, 0, "造成 3 点伤害，附加 1 层声爆", "3伤害+1声爆", 3, 0, 0, 1, 0, false, false), new _M0TP212moonbit__dev14abyssal__chord4Card("zl-fortress-01", "共振壁垒", "Resonance Bulwark", 1, 1, 2, 1, "获得 14 点护甲。若护甲超过20，对敌人造成溢出伤害", "以守为攻核心", 0, 14, 0, 0, 0, false, false), new _M0TP212moonbit__dev14abyssal__chord4Card("zl-fortress-02", "谐波叠加", "Harmonic Stack", 1, 1, 1, 1, "获得 3 点护甲。本回合每打出一张牌再获得 2 点护甲", "高密度出牌", 0, 3, 0, 0, 0, false, false), new _M0TP212moonbit__dev14abyssal__chord4Card("zl-fortress-03", "次声崩塌", "Infrasonic Collapse", 0, 1, 3, 2, "造成等于护甲50%的伤害，失去一半护甲", "护甲转化伤害", 0, 0, 0, 0, 0, false, false), new _M0TP212moonbit__dev14abyssal__chord4Card("zl-overload-01", "过载轰鸣", "Overload Roar", 0, 2, 2, 0, "造成 16 点伤害，对自身造成 5 点伤害", "血线换杀线", 16, 0, 5, 0, 0, false, false), new _M0TP212moonbit__dev14abyssal__chord4Card("zl-overload-02", "反馈回路", "Feedback Loop", 0, 2, 1, 0, "造成 4 点伤害。若本回合已受自伤，伤害翻倍并可免费再打一次", "Combo核心", 4, 0, 0, 0, 0, false, false), new _M0TP212moonbit__dev14abyssal__chord4Card("zl-overload-03", "断弦极限", "Broken String Limit", 0, 2, 0, 1, "失去 10 点生命值。获得 2 AP。下一张攻击牌伤害 +10", "0AP爆发启动", 0, 0, 10, 0, 0, false, false), new _M0TP212moonbit__dev14abyssal__chord4Card("zl-ability-01", "频率锚定", "Frequency Anchor", 2, 1, 1, 1, "【永久】每回合开始时获得 3 点护甲", "长期投资", 0, 0, 0, 0, 0, false, false), new _M0TP212moonbit__dev14abyssal__chord4Card("zl-ability-02", "低频共振", "Low Frequency Resonance", 2, 1, 2, 1, "【永久】每获得 5 点护甲，对敌人造成 3 点伤害", "叠甲=攻击", 0, 0, 0, 0, 0, false, false), new _M0TP212moonbit__dev14abyssal__chord4Card("zl-ability-03", "痛觉回响", "Pain Echo", 2, 2, 1, 1, "【永久】每受1点自伤，下一张攻击牌+1伤害(最多+8)", "自伤转增伤", 0, 0, 0, 0, 0, false, false), new _M0TP212moonbit__dev14abyssal__chord4Card("zl-ability-04", "终末定音", "Final Tuning", 2, 2, 3, 1, "【永久】HP<20时，所有攻击牌+5伤害，每回合受2穿透伤害", "背水一战", 0, 0, 0, 0, 0, false, false)];
}
function _M0FP212moonbit__dev14abyssal__chord13initial__hand() {
  const all = _M0FP212moonbit__dev14abyssal__chord16zhong__lv__cards();
  return [_M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(all, 0), _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(all, 1), _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(all, 4), _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(all, 5), _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(all, 8), _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(all, 9)];
}
function _M0FP212moonbit__dev14abyssal__chord12init__player(character) {
  const all = _M0FP212moonbit__dev14abyssal__chord16zhong__lv__cards();
  const init_hand = _M0FP212moonbit__dev14abyssal__chord13initial__hand();
  const deck = [];
  const i = new _M0TPB8MutLocalGiE(6);
  while (true) {
    if (i.val < all.length) {
      _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(deck, _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(all, i.val));
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0TP212moonbit__dev14abyssal__chord11PlayerState(character.id, character.name, character.max_hp, character.max_hp, 0, _M0FP212moonbit__dev14abyssal__chord11initial__ap, _M0FP212moonbit__dev14abyssal__chord11initial__ap, init_hand, deck, [], [], [], 0, 0, 0, 0, false, 0, false, false, []);
}
function _M0FP212moonbit__dev14abyssal__chord18initial__pollution() {
  return 0;
}
function _M0FP212moonbit__dev14abyssal__chord12init__battle(player_char, enemy_data) {
  return new _M0TP212moonbit__dev14abyssal__chord11BattleState(_M0FP212moonbit__dev14abyssal__chord12init__player(player_char), _M0FP212moonbit__dev14abyssal__chord11init__enemy(enemy_data), player_char, enemy_data, 0, 1, _M0FP212moonbit__dev14abyssal__chord18initial__pollution(), []);
}
function _M0FP212moonbit__dev14abyssal__chord18is__pollution__max(pollution) {
  return pollution >= 100;
}
function _M0FP212moonbit__dev14abyssal__chord9zhong__lv() {
  return new _M0TP212moonbit__dev14abyssal__chord9Character("zhong-lv", "钟律", "Zhong Lu", "重装和弦师", "Heavy Chordist", 80, "过载音叉", "Overload Tuning Fork", "每回合第一次打出 Cost >= 2 的卡牌时，获得 1 点临时行动力", "前锚点塔声学工程师，在一次锚点塔过载事故中被超低频共振波直接冲击全身。");
}
function _M0FP212moonbit__dev14abyssal__chord9get__hand(state) {
  return state.player.hand;
}
function _M0FP212moonbit__dev14abyssal__chord10roll__dice() {
  return 3;
}
function _M0FP212moonbit__dev14abyssal__chord12pick__action(actions, dice) {
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < actions.length) {
      const a = _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(actions, i.val);
      if (dice >= a.dice_min && dice <= a.dice_max) {
        return a;
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(actions, 0);
}
function _M0FP212moonbit__dev14abyssal__chord17add__enemy__armor(state, amount) {
  const _tmp = state.enemy;
  return new _M0TP212moonbit__dev14abyssal__chord11BattleState(state.player, new _M0TP212moonbit__dev14abyssal__chord10EnemyState(_tmp.id, _tmp.name, _tmp.hp, _tmp.max_hp, state.enemy.armor + amount | 0, _tmp.is_boss, _tmp.is_phase2, _tmp.phase2_triggered, _tmp.summoned_minion, _tmp.reflect_active, _tmp.debuffs), state.player_char, state.enemy_data, state.phase, state.turn_number, state.pollution, state.log);
}
function _M0FP212moonbit__dev14abyssal__chord13check__defeat(state) {
  return state.player.hp <= 0 ? new _M0TP212moonbit__dev14abyssal__chord11BattleState(state.player, state.enemy, state.player_char, state.enemy_data, 3, state.turn_number, state.pollution, state.log) : _M0FP212moonbit__dev14abyssal__chord18is__pollution__max(state.pollution) ? new _M0TP212moonbit__dev14abyssal__chord11BattleState(state.player, state.enemy, state.player_char, state.enemy_data, 3, state.turn_number, state.pollution, state.log) : state;
}
function _M0FP212moonbit__dev14abyssal__chord24deal__damage__to__player(state, damage, piercing) {
  if (piercing) {
    const nh = (state.player.hp - damage | 0) < 0 ? 0 : state.player.hp - damage | 0;
    const _tmp = state.player;
    return new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp.id, _tmp.name, nh, _tmp.max_hp, _tmp.armor, _tmp.ap, _tmp.max_ap, _tmp.hand, _tmp.deck, _tmp.discard, _tmp.exiled, _tmp.permanent_abilities, _tmp.damage_bonus, _tmp.armor_per_turn, _tmp.extra_damage_per_armor, _tmp.cards_played_this_turn, _tmp.has_taken_self_damage, _tmp.next_attack_bonus, _tmp.harmonic_active, _tmp.free_second_attack, _tmp.debuffs), state.enemy, state.player_char, state.enemy_data, state.phase, state.turn_number, state.pollution, state.log);
  }
  const actual = new _M0TPB8MutLocalGiE(damage);
  const pa = new _M0TPB8MutLocalGiE(state.player.armor);
  if (pa.val > 0) {
    if (pa.val >= actual.val) {
      pa.val = pa.val - actual.val | 0;
      actual.val = 0;
    } else {
      actual.val = actual.val - pa.val | 0;
      pa.val = 0;
    }
  }
  const nh = actual.val > 0 ? ((state.player.hp - actual.val | 0) < 0 ? 0 : state.player.hp - actual.val | 0) : state.player.hp;
  const _tmp = state.player;
  return new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp.id, _tmp.name, nh, _tmp.max_hp, pa.val, _tmp.ap, _tmp.max_ap, _tmp.hand, _tmp.deck, _tmp.discard, _tmp.exiled, _tmp.permanent_abilities, _tmp.damage_bonus, _tmp.armor_per_turn, _tmp.extra_damage_per_armor, _tmp.cards_played_this_turn, _tmp.has_taken_self_damage, _tmp.next_attack_bonus, _tmp.harmonic_active, _tmp.free_second_attack, _tmp.debuffs), state.enemy, state.player_char, state.enemy_data, state.phase, state.turn_number, state.pollution, state.log);
}
function _M0FP212moonbit__dev14abyssal__chord19increase__pollution(state, amount) {
  const np = state.pollution + amount | 0;
  return new _M0TP212moonbit__dev14abyssal__chord11BattleState(state.player, state.enemy, state.player_char, state.enemy_data, state.phase, state.turn_number, np > 100 ? 100 : np, state.log);
}
function _M0FP212moonbit__dev14abyssal__chord16start__new__turn(state) {
  const _tmp = state.player;
  const s1 = new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp.id, _tmp.name, _tmp.hp, _tmp.max_hp, state.player.armor + state.player.armor_per_turn | 0, state.player.max_ap, _tmp.max_ap, _tmp.hand, _tmp.deck, _tmp.discard, _tmp.exiled, _tmp.permanent_abilities, _tmp.damage_bonus, _tmp.armor_per_turn, _tmp.extra_damage_per_armor, 0, false, 0, false, false, _tmp.debuffs), state.enemy, state.player_char, state.enemy_data, state.phase, state.turn_number, state.pollution, state.log);
  const s2 = _M0FP212moonbit__dev14abyssal__chord11draw__cards(s1, _M0FP212moonbit__dev14abyssal__chord17turn__draw__count);
  return new _M0TP212moonbit__dev14abyssal__chord11BattleState(s2.player, s2.enemy, s2.player_char, s2.enemy_data, s2.phase, s2.turn_number + 1 | 0, s2.pollution, s2.log);
}
function _M0FP212moonbit__dev14abyssal__chord20execute__enemy__turn(state) {
  const s = new _M0TPB8MutLocalGRP212moonbit__dev14abyssal__chord11BattleStateE(state);
  if (s.val.enemy.is_boss && !s.val.enemy.phase2_triggered) {
    if (2 === 0) {
      $panic();
    }
    const threshold = s.val.enemy.max_hp / 2 | 0;
    if (s.val.enemy.hp <= threshold && s.val.enemy_data.has_phase2) {
      const _tmp = s.val;
      const _tmp$2 = s.val.enemy;
      s.val = new _M0TP212moonbit__dev14abyssal__chord11BattleState(_tmp.player, new _M0TP212moonbit__dev14abyssal__chord10EnemyState(_tmp$2.id, _tmp$2.name, _tmp$2.hp, _tmp$2.max_hp, _tmp$2.armor, _tmp$2.is_boss, true, true, _tmp$2.summoned_minion, _tmp$2.reflect_active, _tmp$2.debuffs), _tmp.player_char, _tmp.enemy_data, _tmp.phase, _tmp.turn_number, _tmp.pollution, _tmp.log);
      const _tmp$3 = s.val;
      const _tmp$4 = s.val.player;
      s.val = new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp$4.id, _tmp$4.name, _tmp$4.hp, _tmp$4.max_hp, 0, _tmp$4.ap, _tmp$4.max_ap, _tmp$4.hand, _tmp$4.deck, _tmp$4.discard, _tmp$4.exiled, _tmp$4.permanent_abilities, _tmp$4.damage_bonus, _tmp$4.armor_per_turn, _tmp$4.extra_damage_per_armor, _tmp$4.cards_played_this_turn, _tmp$4.has_taken_self_damage, _tmp$4.next_attack_bonus, _tmp$4.harmonic_active, _tmp$4.free_second_attack, _tmp$4.debuffs), _tmp$3.enemy, _tmp$3.player_char, _tmp$3.enemy_data, _tmp$3.phase, _tmp$3.turn_number, _tmp$3.pollution, _tmp$3.log);
      const np2 = s.val.pollution + 25 | 0;
      const _tmp$5 = s.val;
      s.val = new _M0TP212moonbit__dev14abyssal__chord11BattleState(_tmp$5.player, _tmp$5.enemy, _tmp$5.player_char, _tmp$5.enemy_data, _tmp$5.phase, _tmp$5.turn_number, np2 > 100 ? 100 : np2, _tmp$5.log);
      s.val = _M0FP212moonbit__dev14abyssal__chord8add__log(s.val, "!!! MUTOS PHASE 2 !!!");
    }
  }
  const act_table = s.val.enemy.is_phase2 && s.val.enemy_data.phase2_actions.length > 0 ? s.val.enemy_data.phase2_actions : s.val.enemy_data.actions;
  const dice = _M0FP212moonbit__dev14abyssal__chord10roll__dice();
  const act = _M0FP212moonbit__dev14abyssal__chord12pick__action(act_table, dice);
  s.val = _M0FP212moonbit__dev14abyssal__chord8add__log(s.val, `Enemy: ${act.name}`);
  const lv = _M0FP212moonbit__dev14abyssal__chord21get__pollution__level(s.val.pollution);
  const _bind = act.action_type;
  switch (_bind) {
    case 0: {
      const phase2_bonus = s.val.enemy.is_phase2 ? 5 : 0;
      const dmg = (act.damage + phase2_bonus | 0) + lv.damage_bonus | 0;
      if (lv.player_piercing_dmg > 0) {
        s.val = _M0FP212moonbit__dev14abyssal__chord24deal__damage__to__player(s.val, lv.player_piercing_dmg, true);
      }
      s.val = _M0FP212moonbit__dev14abyssal__chord24deal__damage__to__player(s.val, dmg, act.piercing);
      break;
    }
    case 1: {
      s.val = _M0FP212moonbit__dev14abyssal__chord24deal__damage__to__player(s.val, act.damage, act.piercing);
      if (act.sonic_boom > 0) {
        s.val = _M0FP212moonbit__dev14abyssal__chord16add__sonic__boom(s.val, act.sonic_boom);
      }
      break;
    }
    case 2: {
      if (act.armor > 0) {
        s.val = _M0FP212moonbit__dev14abyssal__chord17add__enemy__armor(s.val, act.armor);
      }
      if (act.pollution_increase > 0) {
        const phase2_bonus$2 = s.val.enemy.is_phase2 ? 5 : 0;
        const amt = act.pollution_increase + phase2_bonus$2 | 0;
        s.val = _M0FP212moonbit__dev14abyssal__chord19increase__pollution(s.val, amt);
      }
      break;
    }
    case 3: {
      s.val = _M0FP212moonbit__dev14abyssal__chord24deal__damage__to__player(s.val, act.damage, act.piercing);
      if (act.sonic_boom > 0) {
        s.val = _M0FP212moonbit__dev14abyssal__chord16add__sonic__boom(s.val, act.sonic_boom);
      }
      if (act.pollution_increase > 0) {
        s.val = _M0FP212moonbit__dev14abyssal__chord19increase__pollution(s.val, act.pollution_increase);
      }
      break;
    }
    case 4: {
      if (act.pollution_increase > 0) {
        const phase2_bonus$2 = s.val.enemy.is_phase2 ? 5 : 0;
        s.val = _M0FP212moonbit__dev14abyssal__chord19increase__pollution(s.val, act.pollution_increase + phase2_bonus$2 | 0);
      }
      if (act.special === "reflect_50_percent") {
        const _tmp = s.val;
        const _tmp$2 = s.val.enemy;
        s.val = new _M0TP212moonbit__dev14abyssal__chord11BattleState(_tmp.player, new _M0TP212moonbit__dev14abyssal__chord10EnemyState(_tmp$2.id, _tmp$2.name, _tmp$2.hp, _tmp$2.max_hp, _tmp$2.armor, _tmp$2.is_boss, _tmp$2.is_phase2, _tmp$2.phase2_triggered, _tmp$2.summoned_minion, true, _tmp$2.debuffs), _tmp.player_char, _tmp.enemy_data, _tmp.phase, _tmp.turn_number, _tmp.pollution, _tmp.log);
      }
      if (act.special === "discard_1_card" && s.val.player.hand.length > 0) {
        const nh = [];
        const j = new _M0TPB8MutLocalGiE(1);
        while (true) {
          if (j.val < s.val.player.hand.length) {
            _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(nh, _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(s.val.player.hand, j.val));
            j.val = j.val + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const _tmp = s.val;
        const _tmp$2 = s.val.player;
        s.val = new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp$2.id, _tmp$2.name, _tmp$2.hp, _tmp$2.max_hp, _tmp$2.armor, _tmp$2.ap, _tmp$2.max_ap, nh, _tmp$2.deck, _tmp$2.discard, _tmp$2.exiled, _tmp$2.permanent_abilities, _tmp$2.damage_bonus, _tmp$2.armor_per_turn, _tmp$2.extra_damage_per_armor, _tmp$2.cards_played_this_turn, _tmp$2.has_taken_self_damage, _tmp$2.next_attack_bonus, _tmp$2.harmonic_active, _tmp$2.free_second_attack, _tmp$2.debuffs), _tmp.enemy, _tmp.player_char, _tmp.enemy_data, _tmp.phase, _tmp.turn_number, _tmp.pollution, _tmp.log);
      }
      break;
    }
    default: {
      if (act.pollution_increase > 0) {
        s.val = _M0FP212moonbit__dev14abyssal__chord19increase__pollution(s.val, act.pollution_increase);
      }
      s.val = _M0FP212moonbit__dev14abyssal__chord24deal__damage__to__player(s.val, 4, false);
    }
  }
  if (lv.armor_per_turn > 0) {
    s.val = _M0FP212moonbit__dev14abyssal__chord17add__enemy__armor(s.val, lv.armor_per_turn);
  }
  if (s.val.enemy.is_phase2) {
    s.val = _M0FP212moonbit__dev14abyssal__chord17add__enemy__armor(s.val, 8);
  }
  const _tmp = s.val;
  s.val = new _M0TP212moonbit__dev14abyssal__chord11BattleState(_tmp.player, _tmp.enemy, _tmp.player_char, _tmp.enemy_data, 0, _tmp.turn_number, _tmp.pollution, _tmp.log);
  s.val = _M0FP212moonbit__dev14abyssal__chord16start__new__turn(s.val);
  return _M0FP212moonbit__dev14abyssal__chord13check__defeat(s.val);
}
function _M0FP212moonbit__dev14abyssal__chord20get__playable__cards(state) {
  const r = [];
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < state.player.hand.length) {
      const c = _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(state.player.hand, i.val);
      if (state.player.free_second_attack || c.cost <= state.player.ap) {
        _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(r, c);
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return r;
}
function _M0FP212moonbit__dev14abyssal__chord23phase__is__player__turn(state) {
  const _bind = state.phase;
  if (_bind === 0) {
    return true;
  } else {
    return false;
  }
}
function _M0FP212moonbit__dev14abyssal__chord22phase__is__enemy__turn(state) {
  const _bind = state.phase;
  if (_bind === 1) {
    return true;
  } else {
    return false;
  }
}
function _M0FP212moonbit__dev14abyssal__chord18phase__is__victory(state) {
  const _bind = state.phase;
  if (_bind === 2) {
    return true;
  } else {
    return false;
  }
}
function _M0FP212moonbit__dev14abyssal__chord17phase__is__defeat(state) {
  const _bind = state.phase;
  if (_bind === 3) {
    return true;
  } else {
    return false;
  }
}
function _M0FP212moonbit__dev14abyssal__chord15is__sonic__boom(d) {
  const _bind = d.debuff_type;
  if (_bind === 0) {
    return true;
  } else {
    return false;
  }
}
function _M0FP212moonbit__dev14abyssal__chord14check__victory(state) {
  return state.enemy.hp <= 0 ? new _M0TP212moonbit__dev14abyssal__chord11BattleState(state.player, state.enemy, state.player_char, state.enemy_data, 2, state.turn_number, state.pollution, state.log) : state;
}
function _M0FP212moonbit__dev14abyssal__chord19apply__card__effect(state, card) {
  const s = new _M0TPB8MutLocalGRP212moonbit__dev14abyssal__chord11BattleStateE(state);
  const lv = _M0FP212moonbit__dev14abyssal__chord21get__pollution__level(s.val.pollution);
  const ed = lv.damage_bonus;
  const _bind = card.id;
  switch (_bind) {
    case "zl-fortress-01": {
      s.val = _M0FP212moonbit__dev14abyssal__chord18add__player__armor(s.val, 14);
      if (s.val.player.armor > 20) {
        s.val = _M0FP212moonbit__dev14abyssal__chord23deal__damage__to__enemy(s.val, s.val.player.armor - 20 | 0, false);
      }
      return s.val;
    }
    case "zl-fortress-02": {
      s.val = _M0FP212moonbit__dev14abyssal__chord18add__player__armor(s.val, 3);
      const _tmp = s.val;
      const _tmp$2 = s.val.player;
      return new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp$2.id, _tmp$2.name, _tmp$2.hp, _tmp$2.max_hp, _tmp$2.armor, _tmp$2.ap, _tmp$2.max_ap, _tmp$2.hand, _tmp$2.deck, _tmp$2.discard, _tmp$2.exiled, _tmp$2.permanent_abilities, _tmp$2.damage_bonus, _tmp$2.armor_per_turn, _tmp$2.extra_damage_per_armor, _tmp$2.cards_played_this_turn, _tmp$2.has_taken_self_damage, _tmp$2.next_attack_bonus, true, _tmp$2.free_second_attack, _tmp$2.debuffs), _tmp.enemy, _tmp.player_char, _tmp.enemy_data, _tmp.phase, _tmp.turn_number, _tmp.pollution, _tmp.log);
    }
    case "zl-fortress-03": {
      if (2 === 0) {
        $panic();
      }
      const hd = s.val.player.armor / 2 | 0;
      if (hd > 0) {
        s.val = _M0FP212moonbit__dev14abyssal__chord23deal__damage__to__enemy(s.val, hd, false);
      }
      const _tmp$3 = s.val;
      const _tmp$4 = s.val.player;
      if (2 === 0) {
        $panic();
      }
      return new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp$4.id, _tmp$4.name, _tmp$4.hp, _tmp$4.max_hp, s.val.player.armor / 2 | 0, _tmp$4.ap, _tmp$4.max_ap, _tmp$4.hand, _tmp$4.deck, _tmp$4.discard, _tmp$4.exiled, _tmp$4.permanent_abilities, _tmp$4.damage_bonus, _tmp$4.armor_per_turn, _tmp$4.extra_damage_per_armor, _tmp$4.cards_played_this_turn, _tmp$4.has_taken_self_damage, _tmp$4.next_attack_bonus, _tmp$4.harmonic_active, _tmp$4.free_second_attack, _tmp$4.debuffs), _tmp$3.enemy, _tmp$3.player_char, _tmp$3.enemy_data, _tmp$3.phase, _tmp$3.turn_number, _tmp$3.pollution, _tmp$3.log);
    }
    case "zl-overload-01": {
      const total = ((16 + s.val.player.damage_bonus | 0) + ed | 0) + s.val.player.next_attack_bonus | 0;
      s.val = _M0FP212moonbit__dev14abyssal__chord23deal__damage__to__enemy(s.val, total, false);
      s.val = _M0FP212moonbit__dev14abyssal__chord24deal__damage__to__player(s.val, 5, true);
      const _tmp$5 = s.val;
      const _tmp$6 = s.val.player;
      return new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp$6.id, _tmp$6.name, _tmp$6.hp, _tmp$6.max_hp, _tmp$6.armor, _tmp$6.ap, _tmp$6.max_ap, _tmp$6.hand, _tmp$6.deck, _tmp$6.discard, _tmp$6.exiled, _tmp$6.permanent_abilities, _tmp$6.damage_bonus, _tmp$6.armor_per_turn, _tmp$6.extra_damage_per_armor, _tmp$6.cards_played_this_turn, true, _tmp$6.next_attack_bonus, _tmp$6.harmonic_active, _tmp$6.free_second_attack, _tmp$6.debuffs), _tmp$5.enemy, _tmp$5.player_char, _tmp$5.enemy_data, _tmp$5.phase, _tmp$5.turn_number, _tmp$5.pollution, _tmp$5.log);
    }
    case "zl-overload-02": {
      const base = new _M0TPB8MutLocalGiE(((4 + s.val.player.damage_bonus | 0) + ed | 0) + s.val.player.next_attack_bonus | 0);
      if (s.val.player.has_taken_self_damage) {
        base.val = Math.imul(base.val, 2) | 0;
        const _tmp$7 = s.val;
        const _tmp$8 = s.val.player;
        s.val = new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp$8.id, _tmp$8.name, _tmp$8.hp, _tmp$8.max_hp, _tmp$8.armor, _tmp$8.ap, _tmp$8.max_ap, _tmp$8.hand, _tmp$8.deck, _tmp$8.discard, _tmp$8.exiled, _tmp$8.permanent_abilities, _tmp$8.damage_bonus, _tmp$8.armor_per_turn, _tmp$8.extra_damage_per_armor, _tmp$8.cards_played_this_turn, _tmp$8.has_taken_self_damage, _tmp$8.next_attack_bonus, _tmp$8.harmonic_active, true, _tmp$8.debuffs), _tmp$7.enemy, _tmp$7.player_char, _tmp$7.enemy_data, _tmp$7.phase, _tmp$7.turn_number, _tmp$7.pollution, _tmp$7.log);
      }
      return _M0FP212moonbit__dev14abyssal__chord23deal__damage__to__enemy(s.val, base.val, false);
    }
    case "zl-overload-03": {
      s.val = _M0FP212moonbit__dev14abyssal__chord24deal__damage__to__player(s.val, 10, true);
      const nap = s.val.player.ap + 2 | 0;
      const nbonus = s.val.player.next_attack_bonus + 10 | 0;
      const _tmp$7 = s.val;
      const _tmp$8 = s.val.player;
      return new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp$8.id, _tmp$8.name, _tmp$8.hp, _tmp$8.max_hp, _tmp$8.armor, nap, _tmp$8.max_ap, _tmp$8.hand, _tmp$8.deck, _tmp$8.discard, _tmp$8.exiled, _tmp$8.permanent_abilities, _tmp$8.damage_bonus, _tmp$8.armor_per_turn, _tmp$8.extra_damage_per_armor, _tmp$8.cards_played_this_turn, _tmp$8.has_taken_self_damage, nbonus, _tmp$8.harmonic_active, _tmp$8.free_second_attack, _tmp$8.debuffs), _tmp$7.enemy, _tmp$7.player_char, _tmp$7.enemy_data, _tmp$7.phase, _tmp$7.turn_number, _tmp$7.pollution, _tmp$7.log);
    }
    case "zl-basic-09": {
      s.val = _M0FP212moonbit__dev14abyssal__chord18add__player__armor(s.val, 3);
      s.val = _M0FP212moonbit__dev14abyssal__chord11draw__cards(s.val, 1);
      const np = (s.val.pollution - 10 | 0) < 0 ? 0 : s.val.pollution - 10 | 0;
      const _tmp$9 = s.val;
      return new _M0TP212moonbit__dev14abyssal__chord11BattleState(_tmp$9.player, _tmp$9.enemy, _tmp$9.player_char, _tmp$9.enemy_data, _tmp$9.phase, _tmp$9.turn_number, np, _tmp$9.log);
    }
    case "zl-basic-10": {
      const dmg = ((3 + s.val.player.damage_bonus | 0) + ed | 0) + s.val.player.next_attack_bonus | 0;
      s.val = _M0FP212moonbit__dev14abyssal__chord23deal__damage__to__enemy(s.val, dmg, false);
      return _M0FP212moonbit__dev14abyssal__chord16add__sonic__boom(s.val, 1);
    }
    case "zl-ability-01": {
      const ab = new _M0TP212moonbit__dev14abyssal__chord13ActiveAbility("FREQ_ANCHOR", card.id, card.name, card.effect);
      const abs = [];
      const a = new _M0TPB8MutLocalGiE(0);
      while (true) {
        if (a.val < s.val.player.permanent_abilities.length) {
          _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(abs, _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(s.val.player.permanent_abilities, a.val));
          a.val = a.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(abs, ab);
      const _tmp$10 = s.val;
      const _tmp$11 = s.val.player;
      return new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp$11.id, _tmp$11.name, _tmp$11.hp, _tmp$11.max_hp, _tmp$11.armor, _tmp$11.ap, _tmp$11.max_ap, _tmp$11.hand, _tmp$11.deck, _tmp$11.discard, _tmp$11.exiled, abs, _tmp$11.damage_bonus, s.val.player.armor_per_turn + 3 | 0, _tmp$11.extra_damage_per_armor, _tmp$11.cards_played_this_turn, _tmp$11.has_taken_self_damage, _tmp$11.next_attack_bonus, _tmp$11.harmonic_active, _tmp$11.free_second_attack, _tmp$11.debuffs), _tmp$10.enemy, _tmp$10.player_char, _tmp$10.enemy_data, _tmp$10.phase, _tmp$10.turn_number, _tmp$10.pollution, _tmp$10.log);
    }
    case "zl-ability-02": {
      const ab$2 = new _M0TP212moonbit__dev14abyssal__chord13ActiveAbility("LOW_FREQ_RES", card.id, card.name, card.effect);
      const abs$2 = [];
      const a$2 = new _M0TPB8MutLocalGiE(0);
      while (true) {
        if (a$2.val < s.val.player.permanent_abilities.length) {
          _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(abs$2, _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(s.val.player.permanent_abilities, a$2.val));
          a$2.val = a$2.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(abs$2, ab$2);
      const _tmp$12 = s.val;
      const _tmp$13 = s.val.player;
      return new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp$13.id, _tmp$13.name, _tmp$13.hp, _tmp$13.max_hp, _tmp$13.armor, _tmp$13.ap, _tmp$13.max_ap, _tmp$13.hand, _tmp$13.deck, _tmp$13.discard, _tmp$13.exiled, abs$2, _tmp$13.damage_bonus, _tmp$13.armor_per_turn, s.val.player.extra_damage_per_armor + 0.6, _tmp$13.cards_played_this_turn, _tmp$13.has_taken_self_damage, _tmp$13.next_attack_bonus, _tmp$13.harmonic_active, _tmp$13.free_second_attack, _tmp$13.debuffs), _tmp$12.enemy, _tmp$12.player_char, _tmp$12.enemy_data, _tmp$12.phase, _tmp$12.turn_number, _tmp$12.pollution, _tmp$12.log);
    }
    case "zl-ability-03": {
      const ab$3 = new _M0TP212moonbit__dev14abyssal__chord13ActiveAbility("PAIN_ECHO", card.id, card.name, card.effect);
      const abs$3 = [];
      const a$3 = new _M0TPB8MutLocalGiE(0);
      while (true) {
        if (a$3.val < s.val.player.permanent_abilities.length) {
          _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(abs$3, _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(s.val.player.permanent_abilities, a$3.val));
          a$3.val = a$3.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(abs$3, ab$3);
      const _tmp$14 = s.val;
      const _tmp$15 = s.val.player;
      return new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp$15.id, _tmp$15.name, _tmp$15.hp, _tmp$15.max_hp, _tmp$15.armor, _tmp$15.ap, _tmp$15.max_ap, _tmp$15.hand, _tmp$15.deck, _tmp$15.discard, _tmp$15.exiled, abs$3, _tmp$15.damage_bonus, _tmp$15.armor_per_turn, _tmp$15.extra_damage_per_armor, _tmp$15.cards_played_this_turn, _tmp$15.has_taken_self_damage, _tmp$15.next_attack_bonus, _tmp$15.harmonic_active, _tmp$15.free_second_attack, _tmp$15.debuffs), _tmp$14.enemy, _tmp$14.player_char, _tmp$14.enemy_data, _tmp$14.phase, _tmp$14.turn_number, _tmp$14.pollution, _tmp$14.log);
    }
    case "zl-ability-04": {
      const ab$4 = new _M0TP212moonbit__dev14abyssal__chord13ActiveAbility("FINAL_NOTE", card.id, card.name, card.effect);
      const abs$4 = [];
      const a$4 = new _M0TPB8MutLocalGiE(0);
      while (true) {
        if (a$4.val < s.val.player.permanent_abilities.length) {
          _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(abs$4, _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(s.val.player.permanent_abilities, a$4.val));
          a$4.val = a$4.val + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(abs$4, ab$4);
      const bonus = s.val.player.hp < 20 ? 5 : 0;
      const _tmp$16 = s.val;
      const _tmp$17 = s.val.player;
      return new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp$17.id, _tmp$17.name, _tmp$17.hp, _tmp$17.max_hp, _tmp$17.armor, _tmp$17.ap, _tmp$17.max_ap, _tmp$17.hand, _tmp$17.deck, _tmp$17.discard, _tmp$17.exiled, abs$4, s.val.player.damage_bonus + bonus | 0, _tmp$17.armor_per_turn, _tmp$17.extra_damage_per_armor, _tmp$17.cards_played_this_turn, _tmp$17.has_taken_self_damage, _tmp$17.next_attack_bonus, _tmp$17.harmonic_active, _tmp$17.free_second_attack, _tmp$17.debuffs), _tmp$16.enemy, _tmp$16.player_char, _tmp$16.enemy_data, _tmp$16.phase, _tmp$16.turn_number, _tmp$16.pollution, _tmp$16.log);
    }
    default: {
      if (card.base_damage > 0) {
        const dmg$2 = new _M0TPB8MutLocalGiE(((card.base_damage + s.val.player.damage_bonus | 0) + ed | 0) + s.val.player.next_attack_bonus | 0);
        if (s.val.player.extra_damage_per_armor > 0) {
          const extra = _M0MPC16double6Double7to__int((s.val.player.armor + 0) * s.val.player.extra_damage_per_armor);
          dmg$2.val = dmg$2.val + extra | 0;
        }
        s.val = _M0FP212moonbit__dev14abyssal__chord23deal__damage__to__enemy(s.val, dmg$2.val, false);
      }
      if (card.self_damage > 0) {
        s.val = _M0FP212moonbit__dev14abyssal__chord24deal__damage__to__player(s.val, card.self_damage, true);
        const pb = card.self_damage <= 8 ? card.self_damage : 8;
        const _tmp$18 = s.val;
        const _tmp$19 = s.val.player;
        s.val = new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp$19.id, _tmp$19.name, _tmp$19.hp, _tmp$19.max_hp, _tmp$19.armor, _tmp$19.ap, _tmp$19.max_ap, _tmp$19.hand, _tmp$19.deck, _tmp$19.discard, _tmp$19.exiled, _tmp$19.permanent_abilities, _tmp$19.damage_bonus, _tmp$19.armor_per_turn, _tmp$19.extra_damage_per_armor, _tmp$19.cards_played_this_turn, true, s.val.player.next_attack_bonus + pb | 0, _tmp$19.harmonic_active, _tmp$19.free_second_attack, _tmp$19.debuffs), _tmp$18.enemy, _tmp$18.player_char, _tmp$18.enemy_data, _tmp$18.phase, _tmp$18.turn_number, _tmp$18.pollution, _tmp$18.log);
      }
      if (card.base_armor > 0) {
        s.val = _M0FP212moonbit__dev14abyssal__chord18add__player__armor(s.val, card.base_armor);
      }
      if (card.sonic_boom > 0) {
        s.val = _M0FP212moonbit__dev14abyssal__chord16add__sonic__boom(s.val, card.sonic_boom);
      }
      if (card.pollution_modifier !== 0) {
        const np$2 = s.val.pollution + card.pollution_modifier | 0;
        const cl = np$2 < 0 ? 0 : np$2 > 100 ? 100 : np$2;
        const _tmp$18 = s.val;
        s.val = new _M0TP212moonbit__dev14abyssal__chord11BattleState(_tmp$18.player, _tmp$18.enemy, _tmp$18.player_char, _tmp$18.enemy_data, _tmp$18.phase, _tmp$18.turn_number, cl, _tmp$18.log);
      }
      return s.val;
    }
  }
}
function _M0FP212moonbit__dev14abyssal__chord10play__card(state, card_index) {
  if (card_index < 0 || card_index >= state.player.hand.length) {
    return _M0FP212moonbit__dev14abyssal__chord8add__log(state, "Invalid card");
  }
  const card = _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(state.player.hand, card_index);
  const free = state.player.free_second_attack;
  if (!free && card.cost > state.player.ap) {
    return _M0FP212moonbit__dev14abyssal__chord8add__log(state, "Not enough AP");
  }
  const s = new _M0TPB8MutLocalGRP212moonbit__dev14abyssal__chord11BattleStateE(state);
  const nh = [];
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < s.val.player.hand.length) {
      if (i.val !== card_index) {
        _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(nh, _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(s.val.player.hand, i.val));
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp = s.val;
  const _tmp$2 = s.val.player;
  s.val = new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp$2.id, _tmp$2.name, _tmp$2.hp, _tmp$2.max_hp, _tmp$2.armor, _tmp$2.ap, _tmp$2.max_ap, nh, _tmp$2.deck, _tmp$2.discard, _tmp$2.exiled, _tmp$2.permanent_abilities, _tmp$2.damage_bonus, _tmp$2.armor_per_turn, _tmp$2.extra_damage_per_armor, _tmp$2.cards_played_this_turn, _tmp$2.has_taken_self_damage, _tmp$2.next_attack_bonus, _tmp$2.harmonic_active, _tmp$2.free_second_attack, _tmp$2.debuffs), _tmp.enemy, _tmp.player_char, _tmp.enemy_data, _tmp.phase, _tmp.turn_number, _tmp.pollution, _tmp.log);
  if (card.exhaust) {
    const ne = [];
    const j = new _M0TPB8MutLocalGiE(0);
    while (true) {
      if (j.val < s.val.player.exiled.length) {
        _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(ne, _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(s.val.player.exiled, j.val));
        j.val = j.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(ne, card);
    const _tmp$3 = s.val;
    const _tmp$4 = s.val.player;
    s.val = new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp$4.id, _tmp$4.name, _tmp$4.hp, _tmp$4.max_hp, _tmp$4.armor, _tmp$4.ap, _tmp$4.max_ap, _tmp$4.hand, _tmp$4.deck, _tmp$4.discard, ne, _tmp$4.permanent_abilities, _tmp$4.damage_bonus, _tmp$4.armor_per_turn, _tmp$4.extra_damage_per_armor, _tmp$4.cards_played_this_turn, _tmp$4.has_taken_self_damage, _tmp$4.next_attack_bonus, _tmp$4.harmonic_active, _tmp$4.free_second_attack, _tmp$4.debuffs), _tmp$3.enemy, _tmp$3.player_char, _tmp$3.enemy_data, _tmp$3.phase, _tmp$3.turn_number, _tmp$3.pollution, _tmp$3.log);
  } else {
    const nd = [];
    const k = new _M0TPB8MutLocalGiE(0);
    while (true) {
      if (k.val < s.val.player.discard.length) {
        _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(nd, _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(s.val.player.discard, k.val));
        k.val = k.val + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(nd, card);
    const _tmp$3 = s.val;
    const _tmp$4 = s.val.player;
    s.val = new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp$4.id, _tmp$4.name, _tmp$4.hp, _tmp$4.max_hp, _tmp$4.armor, _tmp$4.ap, _tmp$4.max_ap, _tmp$4.hand, _tmp$4.deck, nd, _tmp$4.exiled, _tmp$4.permanent_abilities, _tmp$4.damage_bonus, _tmp$4.armor_per_turn, _tmp$4.extra_damage_per_armor, _tmp$4.cards_played_this_turn, _tmp$4.has_taken_self_damage, _tmp$4.next_attack_bonus, _tmp$4.harmonic_active, _tmp$4.free_second_attack, _tmp$4.debuffs), _tmp$3.enemy, _tmp$3.player_char, _tmp$3.enemy_data, _tmp$3.phase, _tmp$3.turn_number, _tmp$3.pollution, _tmp$3.log);
  }
  if (free) {
    const _tmp$3 = s.val;
    const _tmp$4 = s.val.player;
    s.val = new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp$4.id, _tmp$4.name, _tmp$4.hp, _tmp$4.max_hp, _tmp$4.armor, _tmp$4.ap, _tmp$4.max_ap, _tmp$4.hand, _tmp$4.deck, _tmp$4.discard, _tmp$4.exiled, _tmp$4.permanent_abilities, _tmp$4.damage_bonus, _tmp$4.armor_per_turn, _tmp$4.extra_damage_per_armor, _tmp$4.cards_played_this_turn, _tmp$4.has_taken_self_damage, _tmp$4.next_attack_bonus, _tmp$4.harmonic_active, false, _tmp$4.debuffs), _tmp$3.enemy, _tmp$3.player_char, _tmp$3.enemy_data, _tmp$3.phase, _tmp$3.turn_number, _tmp$3.pollution, _tmp$3.log);
  } else {
    const _tmp$3 = s.val;
    const _tmp$4 = s.val.player;
    s.val = new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp$4.id, _tmp$4.name, _tmp$4.hp, _tmp$4.max_hp, _tmp$4.armor, s.val.player.ap - card.cost | 0, _tmp$4.max_ap, _tmp$4.hand, _tmp$4.deck, _tmp$4.discard, _tmp$4.exiled, _tmp$4.permanent_abilities, _tmp$4.damage_bonus, _tmp$4.armor_per_turn, _tmp$4.extra_damage_per_armor, _tmp$4.cards_played_this_turn, _tmp$4.has_taken_self_damage, _tmp$4.next_attack_bonus, _tmp$4.harmonic_active, _tmp$4.free_second_attack, _tmp$4.debuffs), _tmp$3.enemy, _tmp$3.player_char, _tmp$3.enemy_data, _tmp$3.phase, _tmp$3.turn_number, _tmp$3.pollution, _tmp$3.log);
  }
  s.val = _M0FP212moonbit__dev14abyssal__chord19apply__card__effect(s.val, card);
  const _tmp$3 = s.val;
  const _tmp$4 = s.val.player;
  s.val = new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp$4.id, _tmp$4.name, _tmp$4.hp, _tmp$4.max_hp, _tmp$4.armor, _tmp$4.ap, _tmp$4.max_ap, _tmp$4.hand, _tmp$4.deck, _tmp$4.discard, _tmp$4.exiled, _tmp$4.permanent_abilities, _tmp$4.damage_bonus, _tmp$4.armor_per_turn, _tmp$4.extra_damage_per_armor, s.val.player.cards_played_this_turn + 1 | 0, _tmp$4.has_taken_self_damage, _tmp$4.next_attack_bonus, _tmp$4.harmonic_active, _tmp$4.free_second_attack, _tmp$4.debuffs), _tmp$3.enemy, _tmp$3.player_char, _tmp$3.enemy_data, _tmp$3.phase, _tmp$3.turn_number, _tmp$3.pollution, _tmp$3.log);
  if (s.val.player.harmonic_active && _M0IP016_24default__implPB2Eq10not__equalGsE(card.id, "zl-fortress-02")) {
    s.val = _M0FP212moonbit__dev14abyssal__chord18add__player__armor(s.val, 2);
  }
  if (_M0IP212moonbit__dev14abyssal__chord8CardTypePB2Eq5equal(card.card_type, 0) && _M0IP016_24default__implPB2Eq10not__equalGsE(card.id, "zl-overload-03")) {
    const _tmp$5 = s.val;
    const _tmp$6 = s.val.player;
    s.val = new _M0TP212moonbit__dev14abyssal__chord11BattleState(new _M0TP212moonbit__dev14abyssal__chord11PlayerState(_tmp$6.id, _tmp$6.name, _tmp$6.hp, _tmp$6.max_hp, _tmp$6.armor, _tmp$6.ap, _tmp$6.max_ap, _tmp$6.hand, _tmp$6.deck, _tmp$6.discard, _tmp$6.exiled, _tmp$6.permanent_abilities, _tmp$6.damage_bonus, _tmp$6.armor_per_turn, _tmp$6.extra_damage_per_armor, _tmp$6.cards_played_this_turn, _tmp$6.has_taken_self_damage, 0, _tmp$6.harmonic_active, _tmp$6.free_second_attack, _tmp$6.debuffs), _tmp$5.enemy, _tmp$5.player_char, _tmp$5.enemy_data, _tmp$5.phase, _tmp$5.turn_number, _tmp$5.pollution, _tmp$5.log);
  }
  s.val = _M0FP212moonbit__dev14abyssal__chord14check__victory(s.val);
  s.val = _M0FP212moonbit__dev14abyssal__chord13check__defeat(s.val);
  return _M0FP212moonbit__dev14abyssal__chord8add__log(s.val, `Play: ${card.name}`);
}
function _M0FP212moonbit__dev14abyssal__chord17end__player__turn(state) {
  const s = new _M0TPB8MutLocalGRP212moonbit__dev14abyssal__chord11BattleStateE(state);
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < s.val.player.permanent_abilities.length) {
      if (_M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(s.val.player.permanent_abilities, i.val).id === "FINAL_NOTE") {
        if (s.val.player.hp < 20) {
          s.val = _M0FP212moonbit__dev14abyssal__chord24deal__damage__to__player(s.val, 2, true);
        }
        break;
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp = s.val;
  return new _M0TP212moonbit__dev14abyssal__chord11BattleState(_tmp.player, _tmp.enemy, _tmp.player_char, _tmp.enemy_data, 1, _tmp.turn_number, _tmp.pollution, _tmp.log);
}
function _M0FP212moonbit__dev14abyssal__chord19settle__sonic__boom(state) {
  const s = new _M0TPB8MutLocalGRP212moonbit__dev14abyssal__chord11BattleStateE(state);
  const rest = [];
  const i = new _M0TPB8MutLocalGiE(0);
  while (true) {
    if (i.val < s.val.enemy.debuffs.length) {
      const d = _M0MPC15array5Array2atGRP212moonbit__dev14abyssal__chord4CardE(s.val.enemy.debuffs, i.val);
      if (_M0IP212moonbit__dev14abyssal__chord10DebuffTypePB2Eq5equal(d.debuff_type, 0) && d.stacks > 0) {
        const dmg = Math.imul(d.stacks, 2) | 0;
        const nh = (s.val.enemy.hp - dmg | 0) < 0 ? 0 : s.val.enemy.hp - dmg | 0;
        const _tmp = s.val;
        const _tmp$2 = s.val.enemy;
        s.val = new _M0TP212moonbit__dev14abyssal__chord11BattleState(_tmp.player, new _M0TP212moonbit__dev14abyssal__chord10EnemyState(_tmp$2.id, _tmp$2.name, nh, _tmp$2.max_hp, _tmp$2.armor, _tmp$2.is_boss, _tmp$2.is_phase2, _tmp$2.phase2_triggered, _tmp$2.summoned_minion, _tmp$2.reflect_active, _tmp$2.debuffs), _tmp.player_char, _tmp.enemy_data, _tmp.phase, _tmp.turn_number, _tmp.pollution, _tmp.log);
      } else {
        _M0MPC15array5Array4pushGRP212moonbit__dev14abyssal__chord4CardE(rest, d);
      }
      i.val = i.val + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _tmp = s.val;
  const _tmp$2 = s.val.enemy;
  s.val = new _M0TP212moonbit__dev14abyssal__chord11BattleState(_tmp.player, new _M0TP212moonbit__dev14abyssal__chord10EnemyState(_tmp$2.id, _tmp$2.name, _tmp$2.hp, _tmp$2.max_hp, _tmp$2.armor, _tmp$2.is_boss, _tmp$2.is_phase2, _tmp$2.phase2_triggered, _tmp$2.summoned_minion, _tmp$2.reflect_active, rest), _tmp.player_char, _tmp.enemy_data, _tmp.phase, _tmp.turn_number, _tmp.pollution, _tmp.log);
  return _M0FP212moonbit__dev14abyssal__chord14check__victory(s.val);
}
export const zhong_lv_cards = _M0FP212moonbit__dev14abyssal__chord16zhong__lv__cards;
export const initial_hand = _M0FP212moonbit__dev14abyssal__chord13initial__hand;
export const howling_drifter = _M0FP212moonbit__dev14abyssal__chord16howling__drifter;
export const zhong_lv = _M0FP212moonbit__dev14abyssal__chord9zhong__lv;
export const get_pollution_level = _M0FP212moonbit__dev14abyssal__chord21get__pollution__level;
export const pollution_levels = _M0FP212moonbit__dev14abyssal__chord17pollution__levels;
export const init_battle = _M0FP212moonbit__dev14abyssal__chord12init__battle;
export const play_card = _M0FP212moonbit__dev14abyssal__chord10play__card;
export const get_hand = _M0FP212moonbit__dev14abyssal__chord9get__hand;
export const get_playable_cards = _M0FP212moonbit__dev14abyssal__chord20get__playable__cards;
export const draw_cards = _M0FP212moonbit__dev14abyssal__chord11draw__cards;
export const end_player_turn = _M0FP212moonbit__dev14abyssal__chord17end__player__turn;
export const settle_sonic_boom = _M0FP212moonbit__dev14abyssal__chord19settle__sonic__boom;
export const execute_enemy_turn = _M0FP212moonbit__dev14abyssal__chord20execute__enemy__turn;
export const phase_is_player_turn = _M0FP212moonbit__dev14abyssal__chord23phase__is__player__turn;
export const phase_is_victory = _M0FP212moonbit__dev14abyssal__chord18phase__is__victory;
export const phase_is_defeat = _M0FP212moonbit__dev14abyssal__chord17phase__is__defeat;
export const deal_damage_to_player = _M0FP212moonbit__dev14abyssal__chord24deal__damage__to__player;
export const deal_damage_to_enemy = _M0FP212moonbit__dev14abyssal__chord23deal__damage__to__enemy;
export const add_player_armor = _M0FP212moonbit__dev14abyssal__chord18add__player__armor;
export const add_sonic_boom = _M0FP212moonbit__dev14abyssal__chord16add__sonic__boom;
export const increase_pollution = _M0FP212moonbit__dev14abyssal__chord19increase__pollution;
export const phase_is_enemy_turn = _M0FP212moonbit__dev14abyssal__chord22phase__is__enemy__turn;
export const start_new_turn = _M0FP212moonbit__dev14abyssal__chord16start__new__turn;
