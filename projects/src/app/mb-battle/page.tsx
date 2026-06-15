"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sword, Shield, Zap, Skull, Sparkles, Swords, RefreshCw } from "lucide-react";

let MB: any = null;

// ═══════════ MoonBit Engine Types ═══════════
const CARD_TYPE = { 0: "攻击", 1: "技能", 2: "能力" } as const;
const TYPE_STYLE: Record<number, { bg: string; border: string; text: string; glow: string }> = {
  0: { bg: "from-red-950/90 to-red-900/70", border: "border-red-500/60", text: "text-red-400", glow: "shadow-red-500/20" },
  1: { bg: "from-blue-950/90 to-blue-900/70", border: "border-blue-500/60", text: "text-blue-400", glow: "shadow-blue-500/20" },
  2: { bg: "from-purple-950/90 to-purple-900/70", border: "border-purple-500/60", text: "text-purple-400", glow: "shadow-purple-500/20" },
};
const P_COLORS = ["#34d399", "#fbbf24", "#fb923c", "#ef4444", "#a855f7"];

const StatDisplay = ({ icon: Icon, label, value, max, color }: any) => (
  <div className="bg-black/60 backdrop-blur rounded-xl p-3 border border-white/5">
    <div className="flex items-center gap-2 mb-1">
      {Icon && <Icon className="w-3.5 h-3.5" style={{ color }} />}
      <span className="text-[10px] uppercase tracking-wider text-gray-500">{label}</span>
    </div>
    <div className="text-xl font-black" style={{ color }}>{value}{max ? `/${max}` : ""}</div>
    {max ? (
      <div className="mt-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div className="h-full rounded-full" style={{ background: color }}
          animate={{ width: `${(value / max) * 100}%` }} transition={{ duration: 0.4 }} />
      </div>
    ) : null}
  </div>
);

export default function MBBattle() {
  const [ready, setReady] = useState(false);
  const [b, setB] = useState<any>(null);
  const [flipIdx, setFlipIdx] = useState(-1);

  useEffect(() => {
    import("@/lib/moonbit_engine.mjs").then((m) => {
      MB = m;
      const ch = MB.zhong_lv();
      const en = MB.howling_drifter();
      setB(MB.init_battle(ch, en));
      setReady(true);
    });
  }, []);

  const phase = !b ? "loading" :
    MB.phase_is_victory(b) ? "victory" :
    MB.phase_is_defeat(b) ? "defeat" :
    MB.phase_is_player_turn(b) ? "player" : "enemy";

  const playCard = useCallback((idx: number) => {
    if (!b || phase !== "player") return;
    const card = b.player.hand[idx];
    if (!card || card.cost > b.player.ap) return;
    setFlipIdx(idx);
    setTimeout(() => {
      const s = MB.play_card(b, idx);
      setB(s);
      setFlipIdx(-1);
    }, 150);
  }, [b, phase]);

  const endTurn = useCallback(() => {
    if (!b || phase !== "player") return;
    let s = MB.settle_sonic_boom(b);
    if (MB.phase_is_victory(s)) { setB(s); return; }
    s = MB.end_player_turn(s);
    setB(s);
    setTimeout(() => setB(MB.execute_enemy_turn(s)), 800);
  }, [b, phase]);

  const restart = useCallback(() => {
    setB(MB.init_battle(MB.zhong_lv(), MB.howling_drifter()));
    setFlipIdx(-1);
  }, []);

  if (!ready || !b) return (
    <div className="min-h-screen bg-[#0a0a14] flex items-center justify-center">
      <motion.div animate={{ opacity: [0.2,1,0.2] }} transition={{ duration:1.5, repeat:Infinity }}
        className="text-purple-400/60 text-lg">Loading MoonBit Engine...</motion.div>
    </div>
  );

  const pLv = MB.get_pollution_level(b.pollution);
  const pIdx = b.pollution >= 91 ? 4 : b.pollution >= 71 ? 3 : b.pollution >= 41 ? 2 : b.pollution >= 16 ? 1 : 0;

  // ─── Sonic Boom stacks ───
  let sonicStacks = 0;
  for (let i = 0; i < (b.enemy.debuffs?.length || 0); i++) {
    if (b.enemy.debuffs[i].debuff_type === 0) sonicStacks = b.enemy.debuffs[i].stacks;
  }

  return (
    <div className="min-h-screen bg-[#0a0a14] text-white overflow-hidden relative">
      {/* ═══ Background ═══ */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14] via-[#12122a] to-[#0a0a1e] pointer-events-none" />
      {[0,1,2].map(i => (
        <motion.div key={i}
          className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/20 pointer-events-none"
          initial={{ width:100, height:100, opacity:0.25 }}
          animate={{ width:700, height:700, opacity:0 }}
          transition={{ duration:5, repeat:Infinity, delay:i*1.5, ease:"easeOut" }} />
      ))}

      {/* ═══ Main Layout ═══ */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-8 pb-32">

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400"
            style={{ filter: "drop-shadow(0 0 30px rgba(139,92,246,0.5))" }}>
            深渊协奏
          </h1>
          <p className="text-purple-400/40 text-xs tracking-[0.3em] mt-1">MOONBIT ENGINE</p>
        </div>

        {/* ═══ Top: Enemy + Player Stats ═══ */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Enemy */}
          <motion.div
            className="bg-[#12122a]/80 backdrop-blur-xl rounded-2xl border p-6 relative overflow-hidden"
            animate={{ borderColor: phase === "enemy" ? ["rgba(239,68,68,0.15)","rgba(239,68,68,0.5)","rgba(239,68,68,0.15)"] : "rgba(239,68,68,0.15)" }}
            transition={phase==="enemy"?{duration:1,repeat:Infinity}:{}}
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-red-500/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Skull className="w-6 h-6 text-red-400" />
                <span className="text-xl font-bold">{b.enemy.name}</span>
                {b.enemy.is_phase2 && <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">🔥 P2</span>}
              </div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-red-400/80">HP {b.enemy.hp}/{b.enemy.maxHp}</span>
                <span className="text-blue-400/80">{b.enemy.armor > 0 ? `🛡 ${b.enemy.armor}` : ""}</span>
              </div>
              <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div className="h-full rounded-full bg-gradient-to-r from-red-500 to-red-400"
                  animate={{ width: `${Math.max(0, (b.enemy.hp / b.enemy.maxHp) * 100)}%` }} transition={{ duration: 0.4 }} />
              </div>
              {sonicStacks > 0 && (
                <div className="mt-3">
                  <span className="text-[11px] bg-yellow-500/10 text-yellow-400 border border-yellow-500/25 px-3 py-1 rounded-full">
                    🔊 声爆 ×{sonicStacks}
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Player */}
          <div className="bg-[#12122a]/80 backdrop-blur-xl rounded-2xl border border-blue-500/15 p-6 relative overflow-hidden">
            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Sword className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold text-blue-400">{b.player.name}</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <StatDisplay icon={null} label="HP" value={b.player.hp} max={b.player.maxHp} color="#ef4444" />
                <StatDisplay icon={Zap} label="AP" value={b.player.ap} max={b.player.maxAp} color="#fbbf24" />
                <StatDisplay icon={Shield} label="护甲" value={b.player.armor} color="#60a5fa" />
              </div>
              <div className="text-[10px] text-gray-600 mt-3">
                牌库:{b.player.deck?.length ?? 0} · 弃牌:{b.player.discard?.length ?? 0} · 移出:{b.player.exiled?.length ?? 0}
              </div>
              {(b.player.permanent_abilities?.length ?? 0) > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {b.player.permanent_abilities.map((a: any, i: number) => (
                    <span key={i} className="text-[10px] text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full">
                      🔮 {a.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ═══ Pollution Bar ═══ */}
        <div className="bg-[#12122a]/60 backdrop-blur rounded-2xl border border-white/5 p-5 mb-6">
          <div className="flex justify-between mb-2 text-sm">
            <span className="font-semibold text-gray-400">🌫️ 污染度</span>
            <span style={{ color: P_COLORS[pIdx] }} className="font-medium">{pLv?.name ?? "寂静期"} · +{pLv?.damage_bonus ?? 0}伤害</span>
          </div>
          <div className="h-4 bg-white/5 rounded-full overflow-hidden relative">
            <motion.div className="h-full rounded-full" style={{ background: P_COLORS[pIdx] }}
              animate={{ width: `${b.pollution}%` }} transition={{ duration: 0.5 }} />
            {/* Tick marks */}
            {[16, 41, 71, 91].map(t => (
              <div key={t} className="absolute top-0 bottom-0 w-px bg-white/10" style={{ left: `${t}%` }} />
            ))}
          </div>
          <div className="text-center text-[11px] text-gray-500 mt-1.5">
            {b.pollution}/100 · 第 {b.turn_number} 回合 · {phase === "player" ? "🟢 你的回合" : phase === "enemy" ? "🔴 敌方回合" : ""}
          </div>
        </div>

        {/* ═══ Hand Cards ═══ */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              🃏 手牌 ({b.player.hand?.length ?? 0}/6)
            </span>
            {phase !== "player" && <span className="text-[10px] text-gray-600">— 等待中</span>}
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            {b.player.hand?.map((card: any, i: number) => {
              const canPlay = phase === "player" && card.cost <= b.player.ap;
              const ts = TYPE_STYLE[card.card_type] ?? TYPE_STYLE[0];
              const isFlipping = flipIdx === i;
              return (
                <motion.div key={i}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: canPlay ? 1 : 0.5, rotateY: isFlipping ? 90 : 0 }}
                  whileHover={canPlay ? { y: -12, scale: 1.06, rotateY: 0 } : {}}
                  onClick={() => canPlay && playCard(i)}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className={`relative w-40 h-56 rounded-xl border-2 bg-gradient-to-br cursor-pointer select-none overflow-hidden
                    ${canPlay ? ts.border + " " + ts.glow + " hover:shadow-xl cursor-pointer" : "border-gray-700/30 cursor-not-allowed"}
                    ${ts.bg}`}
                >
                  {/* Cost badge */}
                  <div className="absolute -top-1.5 -left-1.5 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-sm font-black shadow-lg border-2 border-purple-400/30 z-10">
                    {card.cost}
                  </div>
                  {/* Type label */}
                  <div className={`absolute -bottom-1.5 -left-1.5 px-2.5 py-0.5 rounded-lg text-[10px] font-bold shadow-lg z-10 ${ts.bg} ${ts.text} border ${ts.border}`}>
                    {CARD_TYPE[card.card_type as keyof typeof CARD_TYPE] ?? "基础"}
                  </div>
                  {/* Card content */}
                  <div className="p-4 pt-6 h-full flex flex-col">
                    <h3 className="text-sm font-bold truncate">{card.name}</h3>
                    <div className="flex-1 text-[11px] text-gray-400 mt-2 leading-relaxed">{card.effect}</div>
                    {card.base_damage > 0 && <div className="text-xs text-red-400 mt-2">⚔ {card.base_damage} 伤害</div>}
                    {card.base_armor > 0 && <div className="text-xs text-blue-400 mt-1">🛡 {card.base_armor} 护甲</div>}
                    {card.sonic_boom > 0 && <div className="text-xs text-yellow-400 mt-1">🔊 声爆 +{card.sonic_boom}</div>}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ═══ Controls ═══ */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-4">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={endTurn}
            disabled={phase !== "player"}
            className="flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl font-bold text-white shadow-xl shadow-purple-500/25 disabled:opacity-25 disabled:cursor-not-allowed transition-all text-base"
          >
            <Swords className="w-4 h-4" /> 结束回合
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={restart}
            className="flex items-center gap-2 px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-gray-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <RefreshCw className="w-4 h-4" /> 重新开始
          </motion.button>
        </div>
      </div>

      {/* ═══ Game Over Overlay ═══ */}
      <AnimatePresence>
        {(phase === "victory" || phase === "defeat") && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
            <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-[#12122a] border-2 border-purple-500/30 rounded-3xl p-10 text-center shadow-2xl shadow-purple-500/10 max-w-sm w-full">
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
                className="text-6xl mb-4">{phase === "victory" ? "🎉" : "💀"}</motion.div>
              <h2 className={`text-3xl font-black mb-6 ${phase === "victory" ? "text-yellow-400" : "text-red-400"}`}>
                {phase === "victory" ? "胜利!" : "失败"}
              </h2>
              <div className="text-gray-400 space-y-1.5 mb-8 text-sm">
                <p>回合: {b.turn_number} · HP: {b.player.hp}/{b.player.maxHp}</p>
                <p>污染度: {b.pollution}/100 · {pLv?.name}</p>
              </div>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={restart}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl font-bold text-white shadow-lg transition-all"
              >🔄 再来一局</motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
