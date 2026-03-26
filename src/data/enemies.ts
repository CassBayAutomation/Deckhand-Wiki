export interface Enemy {
  name: string;
  slug: string;
  image?: string;
  /** Additional sprites — shown alongside main image on inner page */
  images?: string[];
  /** HP value — to be added */
  hp?: number;
  /** Turn pattern description — to be added */
  turnPattern?: string;
  boss?: boolean;
}

export const enemies: Enemy[] = [
  {
    name: 'Biologist',
    slug: 'biologist',
    image: '/images/Enemies/Biologist_Idle.png',
  },
  {
    name: 'Butterbiscuit',
    slug: 'butterbiscuit',
    image: '/images/Enemies/Butterbiscuit_Idle.png',
    boss: true,
  },
  {
    name: 'Cannon Officer',
    slug: 'cannon-officer',
    image: '/images/Enemies/Cannon Officer.png',
  },
  {
    name: 'Cook',
    slug: 'cook',
    image: '/images/Enemies/Cook_Idle.png',
  },
  {
    name: 'Crab (Low Level, Armor)',
    slug: 'crab-low-armor',
    image: '/images/Enemies/Mini_Crab_4_Idle.png',
  },
  {
    name: 'Crab (Low Level, Strength)',
    slug: 'crab-low-strength',
    image: '/images/Enemies/Mini_Crab_1_Idle.png',
  },
  {
    name: 'Crab (High Level, Armor)',
    slug: 'crab-high-armor',
    image: '/images/Enemies/Mini_Crab_3_Idle.png',
  },
  {
    name: 'Crab (High Level, Strength)',
    slug: 'crab-high-strength',
    image: '/images/Enemies/Mini_Crab_2_Idle.png',
  },
  {
    name: 'Drunkard',
    slug: 'drunkard',
    image: '/images/Enemies/Drunk.png',
  },
  {
    name: 'Greedy Octopus',
    slug: 'greedy-octopus',
    image: '/images/Enemies/Octopus_Idle.png',
  },
  {
    name: 'Mary Read',
    slug: 'mary-read-boss',
    image: '/images/Enemies/Mary_Read_Swordpose_Idle.png',
    boss: true,
  },
  {
    name: 'Massive Crab',
    slug: 'massive-crab',
    image: '/images/Enemies/Giant_Crab_Idle.png',
    boss: true,
  },
  {
    name: 'Mermaid',
    slug: 'mermaid',
    image: '/images/Enemies/MermaidNormalC_Idle_Purple.png',
    images: ['/images/Enemies/MermaidNormalC_Idle_Purple.png', '/images/Enemies/MermaidMonsterC_Idle_Purple.png'],
  },
  {
    name: 'Mermaid (Toxic)',
    slug: 'mermaid-toxic',
    image: '/images/Enemies/MermaidNormalA_Idle_Green.png',
    images: ['/images/Enemies/MermaidNormalA_Idle_Green.png', '/images/Enemies/MermaidMonsterA_Idle_Green.png'],
  },
  {
    name: 'Orange Beard',
    slug: 'orange-beard',
    image: '/images/Enemies/Redbeard_Idle.png',
  },
  {
    name: 'Pirate Hunter',
    slug: 'pirate-hunter',
    image: '/images/Enemies/Pirate_Hunter_Idle.png',
  },
  {
    name: 'Rich Boy',
    slug: 'rich-boy',
    image: '/images/Enemies/Richboy_Idle.png',
  },
  {
    name: 'Sea Swine',
    slug: 'sea-swine',
    image: '/images/Enemies/SeaSwineA_Idle_Green.png',
    boss: true,
  },
  {
    name: 'Snob',
    slug: 'snob',
    image: '/images/Enemies/Snob_Officer_Idle.png',
  },
  {
    name: 'Strongman',
    slug: 'strongman',
    image: '/images/Enemies/Strongman_Idle.png',
  },
  {
    name: 'Wokou',
    slug: 'wokou',
    image: '/images/Enemies/Wokou_Idle.png',
  },
];
