export interface Artefact {
  name: string;
  slug: string;
  effect: string;
  upgradedEffect: string;
  image?: string;
}

export const artefacts: Artefact[] = [
  { name: 'Antidote', slug: 'antidote', effect: 'Reduces any poison by 1 at the start of your turn and clears it entirely after each wave.', upgradedEffect: 'Halves any poison you have at the start of your turn and clears it entirely after each wave.', image: '/images/artefacts/antidote.png' },
  { name: 'Bad Knot', slug: 'bad-knot', effect: 'Heal 3 HP when you perform a lethal counter attack.', upgradedEffect: 'Heal 1 HP for every counter attack.', image: '/images/artefacts/bad-knot.png' },
  { name: 'Blue Candle', slug: 'blue-candle', effect: 'Whenever a card EXHAUSTS secondary stance gains STRENGTH.', upgradedEffect: 'Whenever a card EXHAUSTS secondary stance gains 2 STRENGTH.', image: '/images/artefacts/blue-candle.png' },
  { name: "Bosun's Whistle", slug: 'bosuns-whistle', effect: 'Artefacts in your cargo can appear again in loot rewards.', upgradedEffect: 'Artefacts can show up multiple times in loot.', image: '/images/artefacts/bosuns-whistle.png' },
  { name: 'Broken Blade', slug: 'broken-blade', effect: 'If a stance BREAKS, the other gains LEEWAY.', upgradedEffect: 'If a stance loses PARRY it gains LEEWAY.', image: '/images/artefacts/broken-blade.png' },
  { name: 'Broken Glasses', slug: 'broken-glasses', effect: 'If a stance BREAKS, the other\'s STRENGTH is doubled.', upgradedEffect: 'If a stance BREAKS, the other\'s STRENGTH is tripled.', image: '/images/artefacts/broken-glasses.png' },
  { name: 'Broken Jar', slug: 'broken-jar', effect: 'If a stance BREAKS, the other gains STRENGTH.', upgradedEffect: 'If a stance BREAKS, the other gains 2 STRENGTH.', image: '/images/artefacts/broken-jar.png' },
  { name: 'Broken Mirror', slug: 'broken-mirror', effect: 'If one stance BREAKS, transfer its STRENGTH to the other.', upgradedEffect: 'If one stance BREAKS, transfer its STRENGTH and POISE to the other.', image: '/images/artefacts/broken-mirror.png' },
  { name: 'Broken Pendant', slug: 'broken-pendant', effect: 'When a stance BREAKS, draw a card.', upgradedEffect: 'When a stance BREAKS, draw 2 cards.', image: '/images/artefacts/broken-pendant.png' },
  { name: 'Compass', slug: 'compass', effect: 'Whenever stances SWITCH from a card, draw a card.', upgradedEffect: 'Whenever stances SWITCH, draw a card.', image: '/images/artefacts/compass.png' },
  { name: 'Coral Encrusted Brooch', slug: 'coral-encrusted-brooch', effect: 'When The Black Spot is played, PRIMARY gains 2 POISE.', upgradedEffect: 'When The Black Spot is drawn, PRIMARY gains 2 POISE.', image: '/images/artefacts/coral-encrusted-brooch.png' },
  { name: "Davy's Journal", slug: 'davys-journal', effect: 'When Black Spot played, SECONDARY gains 3 STRENGTH.', upgradedEffect: 'When Black Spot played, SECONDARY gains 5 STRENGTH.', image: '/images/artefacts/davys-journal.png' },
  { name: 'Flotsam', slug: 'flotsam', effect: 'Heal 2 HP at the end of each encounter.', upgradedEffect: 'Heal 10% of Max HP at the end of each encounter.', image: '/images/artefacts/flotsam.png' },
  { name: 'Green Candle', slug: 'green-candle', effect: 'Whenever a card EXHAUSTS heal 1 HP.', upgradedEffect: 'Whenever a card EXHAUSTS heal 2 HP.', image: '/images/artefacts/green-candle.png' },
  { name: 'Hardtack', slug: 'hardtack', effect: 'Increase Max HP by 10.', upgradedEffect: 'Increase Max HP by 15.', image: '/images/artefacts/hardtack.png' },
  { name: 'Jetsam', slug: 'jetsam', effect: 'Heal 1 HP at the end of each wave.', upgradedEffect: 'Heal 5% of max HP at the end of each wave.', image: '/images/artefacts/jetsam.png' },
  { name: 'Lantern', slug: 'lantern', effect: 'Stances gain LEEWAY when switching into primary position.', upgradedEffect: 'Stances gain 2 LEEWAY when switching into primary position.', image: '/images/artefacts/lantern.png' },
  { name: 'Miracle Elixir', slug: 'miracle-elixir', effect: 'At the start of combat apply OPEN to a random enemy.', upgradedEffect: 'At the start of combat apply OPEN to all enemies.', image: '/images/artefacts/miracle-elixir.png' },
  { name: 'Ornate Tea Set', slug: 'ornate-tea-set', effect: 'Enemies with OPEN take +50% damage from all attacks.', upgradedEffect: 'Enemies with OPEN take +100% damage from all attacks.', image: '/images/artefacts/ornate-tea-set.png' },
  { name: 'Peg Leg', slug: 'peg-leg', effect: 'Attacks from SECONDARY deal double damage.', upgradedEffect: 'Attacks from SECONDARY deal triple damage.', image: '/images/artefacts/peg-leg.png' },
  { name: "Prophet's Mask", slug: 'prophets-mask', effect: 'When stances lose PARRY, they gain POISE.', upgradedEffect: '—' },
  { name: 'Red Candle', slug: 'red-candle', effect: 'Whenever a card EXHAUSTS apply OPEN to a random enemy.', upgradedEffect: 'Whenever a card EXHAUSTS apply OPEN to all enemies.', image: '/images/artefacts/red-candle.png' },
  { name: 'Reef Serpent Fang', slug: 'reef-serpent-fang', effect: '+50% damage while poisoned.', upgradedEffect: 'Deal double damage while poisoned.', image: '/images/artefacts/reef-serpent-fang.png' },
  { name: 'Ring of Return', slug: 'ring-of-return', effect: 'Lethal counter-attacks grant +1 STAMINA next turn.', upgradedEffect: 'Lethal counter-attacks grant +2 STAMINA next turn.', image: '/images/artefacts/ring-of-return.png' },
  { name: 'Ring of Riposte', slug: 'ring-of-riposte', effect: 'Lethal counter-attacks grant 2 LEEWAY.', upgradedEffect: 'Lethal counter-attacks grant 2 LEEWAY and 2 POISE.', image: '/images/artefacts/ring-of-riposte.png' },
  { name: 'Ring of Roi', slug: 'ring-of-roi', effect: 'Lethal counter-attacks increase coin looted.', upgradedEffect: 'Lethal counter-attacks increase coin looted by 2 per counter-attack.' },
  { name: 'Scroll in a Jar', slug: 'scroll-in-a-jar', effect: 'Whenever you play The Black Spot, gain 2 STAMINA.', upgradedEffect: 'Whenever you draw The Black Spot, gain 1 STAMINA.', image: '/images/artefacts/scroll-in-a-jar.png' },
  { name: 'Scrimshaw Charm', slug: 'scrimshaw-charm', effect: 'Playing a curse card clears all WEAK from your stances.', upgradedEffect: 'The bearer cannot be weakened.', image: '/images/artefacts/scrimshaw-charm.png' },
  { name: 'Scurvy Boost', slug: 'scurvy-boost', effect: 'Whenever you play a CURSE card, draw a card.', upgradedEffect: 'Whenever you draw a CURSE card, draw another card.', image: '/images/artefacts/scurvy-boost.png' },
  { name: 'Scurvy Cure', slug: 'scurvy-cure', effect: 'Whenever you play a CURSE card, primary stance gains 1 LEEWAY.', upgradedEffect: 'Whenever you draw a CURSE card, primary stance gains 1 LEEWAY.', image: '/images/artefacts/scurvy-cure.png' },
  { name: 'Scurvy Tonic', slug: 'scurvy-tonic', effect: 'Whenever you play a CURSE card, heal 1 HP.', upgradedEffect: 'Whenever you draw a CURSE card, heal 1 HP.', image: '/images/artefacts/scurvy-tonic.png' },
  { name: "Shark's Tooth Necklace", slug: 'sharks-tooth-necklace', effect: 'When stances lose PARRY they gain POISE.', upgradedEffect: 'When stances lose PARRY they gain POISE and LEEWAY.' },
  { name: 'Sharpening Stone', slug: 'sharpening-stone', effect: 'Every 3rd counter-attack deals +100% damage. Resets each encounter.', upgradedEffect: 'Every 3rd counter-attack deals +100% damage.', image: '/images/artefacts/sharpening-stone.png' },
  { name: 'Sharpening Wheel', slug: 'sharpening-wheel', effect: 'Every 4th counter-attack deals +200% damage. Resets when taking damage.', upgradedEffect: 'Every 4th counter-attack deals +300% damage. Resets when taking damage.', image: '/images/artefacts/sharpening-wheel.png' },
  { name: 'Shovel', slug: 'shovel', effect: 'Good for digging. Increases coin looted by 10%.', upgradedEffect: 'Good for digging. Increases coin looted by 20%.', image: '/images/artefacts/shovel.png' },
  { name: "Stoker's Blade", slug: 'stokers-blade', effect: 'Dealing PIERCING damage heals 1 HP.', upgradedEffect: 'Dealing PIERCING damage heals 10% of damage inflicted.', image: '/images/artefacts/stokers-blade.png' },
  { name: 'Strange Trinket', slug: 'strange-trinket', effect: 'When The Black Spot is drawn, draw 2 more cards.', upgradedEffect: 'When The Black Spot is drawn or played, draw 2 cards.', image: '/images/artefacts/strange-trinket.png' },
  { name: 'Tentacle', slug: 'tentacle', effect: 'Whenever you take damage, draw a card.', upgradedEffect: 'Whenever you take damage, draw a card and heal 1 HP.', image: '/images/artefacts/tentacle.png' },
  { name: 'Whale Oil', slug: 'whale-oil', effect: 'LEEWAY also increases counter-attack damage.', upgradedEffect: 'LEEWAY also increases attack and counter-attack damage.', image: '/images/artefacts/whale-oil.png' },
  { name: 'Wooden Idol', slug: 'wooden-idol', effect: 'If half of your max STAMINA is unused, start the next turn with +1.', upgradedEffect: 'Unused STAMINA will be added to your next turn (will not count stamina above max).', image: '/images/artefacts/wooden-idol.png' },
  { name: 'Yellow Candle', slug: 'yellow-candle', effect: 'Whenever a card EXHAUSTS primary stance gains POISE.', upgradedEffect: 'Whenever a card EXHAUSTS both stances gain POISE.', image: '/images/artefacts/yellow-candle.png' },
];
