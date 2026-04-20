export interface StatusEffect {
  name: string;
  slug: string;
  variant?: string;
  appliedTo: 'Enemy' | 'Stance' | 'Player';
  description: string;
  image?: string;
}

export const statusEffects: StatusEffect[] = [
  {
    name: 'Bound',
    slug: 'bound',
    appliedTo: 'Stance',
    description: 'Stance cannot attack for X turns.',
    image: '/images/keywords/bound.png',
  },
  {
    name: 'Charm',
    slug: 'charm',
    appliedTo: 'Enemy',
    description: 'When you attack this enemy both stances get weakened.',
    image: '/images/keywords/charm.png',
  },
  {
    name: 'Combo',
    slug: 'combo',
    appliedTo: 'Enemy',
    description: 'Will perform a dangerous FINISHER when combo reaches zero. Can be cleared with a counter-attack.',
    image: '/images/keywords/combo.png',
  },
  {
    name: 'Exposed',
    slug: 'exposed',
    appliedTo: 'Stance',
    description: 'Stance cannot gain PARRY points for X turns.',
    image: '/images/keywords/exposed.png',
  },
  {
    name: 'Hexed',
    slug: 'hexed',
    appliedTo: 'Stance',
    description: 'Attacks from this stance cause X HP damage. Stack reduced at end of turn.',
    image: '/images/keywords/hexed.png',
  },
  {
    name: 'Leeway',
    slug: 'leeway',
    appliedTo: 'Stance',
    description: 'Allows counter-attacks to trigger while PARRY is 1 off from a perfect match.',
    image: '/images/keywords/leeway.png',
  },
  {
    name: 'Open',
    slug: 'open',
    appliedTo: 'Enemy',
    description: 'When you play an attack against an enemy with OPEN, the cost of the attack card is refunded.',
    image: '/images/keywords/open.png',
  },
  {
    name: 'Parry',
    slug: 'parry',
    appliedTo: 'Stance',
    description: 'Deflects ATTACK FORCE of enemy attacks and can be used to trigger a counter-attack.',
    image: '/images/keywords/parry.png',
  },
  {
    name: 'Poise',
    slug: 'poise',
    appliedTo: 'Stance',
    description: "This stance's next X counter-attacks deal +50% damage. Stack reduced by 1 at start of turn.",
    image: '/images/keywords/poise.png',
  },
  {
    name: 'Strength',
    slug: 'strength-stance',
    variant: 'Stance',
    appliedTo: 'Stance',
    description: 'Increases attack and counter-attack damage of stance.',
    image: '/images/keywords/strength.png',
  },
  {
    name: 'Strength',
    slug: 'strength-enemy',
    variant: 'Enemy',
    appliedTo: 'Enemy',
    description: 'Increases ATTACK FORCE and ATTACK DAMAGE.',
    image: '/images/keywords/strength.png',
  },
  {
    name: 'Toxic',
    slug: 'toxic',
    appliedTo: 'Enemy',
    description: 'When you attack this enemy you get poisoned. Clears after their next attack.',
    image: '/images/keywords/toxic.png',
  },
  {
    name: 'Weak',
    slug: 'weak-enemy',
    variant: 'Enemy',
    appliedTo: 'Enemy',
    description: 'Negative STRENGTH. Weakens ATTACK FORCE and ATTACK DAMAGE (to a minimum of 1). Reduced by 1 each turn.',
    image: '/images/keywords/weak.png',
  },
  {
    name: 'Weak',
    slug: 'weak-stance',
    variant: 'Stance',
    appliedTo: 'Stance',
    description: 'Negative STRENGTH. Weakens attack and counter-attack damage. Reduced by 1 each turn.',
    image: '/images/keywords/weak.png',
  },
];
