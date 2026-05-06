export interface Section {
  name: string;
  slug: string;
  description: string;
  icon: string;
  subsections?: { label: string; href: string; mobileHide?: boolean }[];
}

export const sections: Section[] = [
  {
    name: 'About',
    slug: 'about',
    description: 'Learn about the game, sign up for the playtest, and join the community.',
    icon: '⚑',
    subsections: [
      { label: 'About the Game', href: '/about' },
      { label: 'Get Involved', href: '/about#get-involved' },
    ],
  },
  {
    name: 'How to Play',
    slug: 'tutorial',
    description: 'Learn the stance and counter-attack system at the heart of Davy Jones\' Deckhand.',
    icon: '📖',
    subsections: [
      { label: 'How to Play', href: '/tutorial' },
      { label: 'The Stance System', href: '/tutorial#the-stance-system' },
      { label: 'Defending Against Attacks', href: '/tutorial#defending-against-attacks' },
      { label: 'How to Counter-Attack', href: '/tutorial#how-to-counter-attack' },
    ],
  },
  {
    name: 'Cards',
    slug: 'cards',
    description: 'Browse all cards by type — curse, technique, attack, and advantage.',
    icon: '♠',
    subsections: [
      { label: 'All Cards', href: '/cards' },
      { label: 'Stance', href: '/cards/stances' },
      { label: 'Attack', href: '/cards/attack' },
      { label: 'Technique', href: '/cards/technique' },
      { label: 'Advantage', href: '/cards/advantage' },
      { label: 'Curse', href: '/cards/curse' },
    ],
  },
  {
    name: 'Weapons',
    slug: 'weapons',
    description: 'Each weapon comes with its own starter deck and unique stances.',
    icon: '🗡',
    subsections: [
      { label: 'All Weapons', href: '/weapons' },
    ],
  },
  {
    name: 'Stances',
    slug: 'stances',
    description: 'Weapon-specific fighting stances — the heart of the counter-attack system.',
    icon: '⚡',
    subsections: [
      { label: 'How Stances Work', href: '/stances' },
      { label: 'Stances by Weapon', href: '/stances#stances-by-weapon' },
    ],
  },
  {
    name: 'Artefacts',
    slug: 'artefacts',
    description: 'Powerful items that synergise with your deck for passive voyage buffs.',
    icon: '⚱',
    subsections: [
      { label: 'All Artefacts', href: '/artefacts' },
    ],
  },
  {
    name: 'Keywords',
    slug: 'keywords',
    description: 'Shared mechanics and terms that appear across cards, artefacts, status effects, and more.',
    icon: '❖',
    subsections: [
      { label: 'All Keywords', href: '/keywords' },
    ],
  },
  {
    name: 'Status Effects',
    slug: 'status-effects',
    description: 'Buffs and debuffs applied to player stances and enemies during combat.',
    icon: '✦',
    subsections: [
      { label: 'All Status Effects', href: '/status-effects' },
    ],
  },
  {
    name: 'Enemies',
    slug: 'enemies',
    description: 'The pirates, monsters, and sea creatures standing between you and the Leviathan.',
    icon: '⚔',
    subsections: [
      { label: 'All Enemies', href: '/enemies' },
      { label: 'Bosses', href: '/enemies/bosses' },
    ],
  },
  {
    name: 'Locations',
    slug: 'locations',
    description: 'Islands, biomes, and the dark waters between them.',
    icon: '⚓',
    subsections: [
      { label: 'All Locations', href: '/locations' },
    ],
  },
  {
    name: 'Characters',
    slug: 'characters',
    description: 'Tom Essex, Davy Jones, Mary Read, and the souls you meet at sea.',
    icon: '👤',
    subsections: [
      { label: 'All Characters', href: '/characters' },
      { label: 'Thomas Essex', href: '/characters/thomas-essex' },
      { label: 'Davy Jones', href: '/characters/davy-jones' },
      { label: 'Mary Read', href: '/characters/mary-read' },
    ],
  },
  {
    name: 'Devlog',
    slug: 'devlog',
    description: 'Development updates and behind-the-scenes from Cass Bay Games.',
    icon: '📋',
    subsections: [
      { label: 'All Devlogs', href: '/devlog' },
      { label: 'April 2026', href: '/devlog/april-2026', mobileHide: true },
      { label: 'March 2026', href: '/devlog/march-2026', mobileHide: true },
      { label: 'February 2026', href: '/devlog/february-2026', mobileHide: true },
      { label: 'November 2025', href: '/devlog/november-2025', mobileHide: true },
      { label: 'October 2025', href: '/devlog/october-2025', mobileHide: true },
      { label: 'September 2025', href: '/devlog/september-2025', mobileHide: true },
      { label: 'August 2025', href: '/devlog/august-2025', mobileHide: true },
      { label: 'July 2025', href: '/devlog/july-2025', mobileHide: true },
      { label: 'June 2025', href: '/devlog/june-2025', mobileHide: true },
      { label: 'May 2025', href: '/devlog/may-2025', mobileHide: true },
      { label: 'April 2025', href: '/devlog/april-2025', mobileHide: true },
      { label: 'March 2025', href: '/devlog/march-2025', mobileHide: true },
      { label: 'February 2025', href: '/devlog/february-2025', mobileHide: true },
      { label: 'January 2025', href: '/devlog/january-2025', mobileHide: true },
      { label: 'December 2024', href: '/devlog/december-2024', mobileHide: true },
      { label: 'November 2024', href: '/devlog/november-2024', mobileHide: true },
      { label: 'October 2024', href: '/devlog/october-2024', mobileHide: true },
      { label: 'September 2024', href: '/devlog/september-2024', mobileHide: true },
    ],
  },
];

export function getSectionBySlug(slug: string): Section | undefined {
  return sections.find(s => s.slug === slug);
}
