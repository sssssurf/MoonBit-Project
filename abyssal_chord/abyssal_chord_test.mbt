// Blackbox tests for abyssal_chord library

test "pollution_levels" {
  let l0 = @abyssal_chord.get_pollution_level(0)
  assert_eq(l0.name, "寂静期")

  let l1 = @abyssal_chord.get_pollution_level(30)
  assert_eq(l1.name, "低鸣期")

  let l2 = @abyssal_chord.get_pollution_level(50)
  assert_eq(l2.name, "共振期")

  let l3 = @abyssal_chord.get_pollution_level(80)
  assert_eq(l3.name, "咆哮期")

  let l4 = @abyssal_chord.get_pollution_level(95)
  assert_eq(l4.name, "终焉和弦")
}

test "pollution_max" {
  assert_eq(@abyssal_chord.is_pollution_max(100), true)
  assert_eq(@abyssal_chord.is_pollution_max(50), false)
  assert_eq(@abyssal_chord.max_pollution(), 100)
  assert_eq(@abyssal_chord.initial_pollution(), 0)
}

test "card_count" {
  let cards = @abyssal_chord.zhong_lv_cards()
  assert_eq(cards.length(), 20)
}

test "initial_hand" {
  let hand = @abyssal_chord.initial_hand()
  assert_eq(hand.length(), 6)
}

test "character_data" {
  let zl = @abyssal_chord.zhong_lv()
  assert_eq(zl.name, "钟律")
  assert_eq(zl.max_hp, 80)

  let xy = @abyssal_chord.xian_yin()
  assert_eq(xy.name, "弦音")
  assert_eq(xy.max_hp, 55)
}

test "enemy_data" {
  let hd = @abyssal_chord.howling_drifter()
  assert_eq(hd.name, "嘶鸣游荡者")
  assert_eq(hd.hp_1p, 18)
  assert_eq(hd.is_boss, false)

  let sm = @abyssal_chord.silent_mimic()
  assert_eq(sm.name, "静默拟态体")
  assert_eq(sm.hp_1p, 22)

  let m = @abyssal_chord.mutos()
  assert_eq(m.name, "深渊颂歌·穆托斯")
  assert_eq(m.is_boss, true)
  assert_eq(m.has_phase2, true)
}

test "battle_init" {
  let char = @abyssal_chord.zhong_lv()
  let enemy = @abyssal_chord.howling_drifter()
  let b = @abyssal_chord.init_battle(char, enemy)

  assert_eq(b.player.hp, 80)
  assert_eq(b.player.ap, 3)
  assert_eq(b.enemy.hp, 18)
  assert_eq(b.turn_number, 1)
  assert_eq(b.pollution, 0)
  assert_eq(b.player.hand.length(), 6)
}

test "play_card_and_deal_damage" {
  let char = @abyssal_chord.zhong_lv()
  let enemy = @abyssal_chord.howling_drifter()
  let b = @abyssal_chord.init_battle(char, enemy)

  // Play first card (重频打击, 5 damage)
  let b2 = @abyssal_chord.play_card(b, 0)
  // Enemy should have taken damage
  assert_eq(b2.enemy.hp < b.enemy.hp, true)
  // Card removed from hand
  assert_eq(b2.player.hand.length(), 5)
  // AP spent
  assert_eq(b2.player.ap, 2)
}

test "sonic_boom_damage" {
  let char = @abyssal_chord.zhong_lv()
  let enemy = @abyssal_chord.howling_drifter()
  let mut b = @abyssal_chord.init_battle(char, enemy)

  // Add sonic boom
  b = @abyssal_chord.add_sonic_boom(b, 3)
  // Enemy should have 3 sonic boom stacks
  let mut found = false
  let mut i = 0
  while i < b.enemy.debuffs.length() {
    // Check sonic boom exists
    i = i + 1
  }
  // Settle sonic boom
  let b2 = @abyssal_chord.settle_sonic_boom(b)
  // Enemy should have taken 6 damage (3 stacks * 2)
  assert_eq(b2.enemy.hp, b.enemy.hp - 6)
}
