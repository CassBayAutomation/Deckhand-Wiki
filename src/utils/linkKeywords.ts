import { keywords } from '../data/keywords';
import { statusEffects } from '../data/status-effects';
import { artefacts } from '../data/artefacts';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function titleCase(str: string): string {
  return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

// Page-level links — phrases that should link to a specific page anywhere they appear
const PAGE_LINKS: Array<{ term: string; href: string }> = [
  { term: 'CURSE CARDS',     href: '/cards/curse' },
  { term: 'ATTACK CARDS',    href: '/cards/attack' },
  { term: 'TECHNIQUE CARDS', href: '/cards/technique' },
  { term: 'STANCE CARDS',    href: '/cards/stances' },
  { term: 'ADVANTAGE CARDS', href: '/cards/advantage' },
];

type TermEntry =
  | { kind: 'keyword'; slug: string; name: string; variant?: string; statusEffect?: boolean; statusEffectSlug?: string; description: string; image?: string }
  | { kind: 'artefact'; slug: string; name: string; effect: string; image?: string }
  | { kind: 'pagelink'; href: string; name: string };

export function getStatusEffectTags(text: string): Array<{ name: string; href: string; description: string; image?: string }> {
  if (!text) return [];
  const seSlugSet = new Set(statusEffects.map(se => se.slug));
  const tags: Array<{ name: string; href: string; description: string; image?: string }> = [];
  const seen = new Set<string>();

  for (const kw of keywords) {
    if (!kw.statusEffect || kw.terms.length === 0) continue;
    for (const term of kw.terms) {
      const termRegex = new RegExp(`\\b${escapeRegex(term)}\\b`, 'i');
      if (termRegex.test(text)) {
        if (!seen.has(kw.slug)) {
          seen.add(kw.slug);

          let seSlug = (kw as any).statusEffectSlug ?? kw.slug;
          let desc = kw.description;
          let img = kw.image;

          // Disambiguate Strength: if "enemy" or "enemies" appears in the same
          // line as the term, this refers to enemy Strength, not stance Strength.
          if (kw.name.toLowerCase() === 'strength') {
            const enemyContext = text.split('\n').some(line =>
              termRegex.test(line) && /\benemy\b|\benemies\b/i.test(line)
            );
            if (enemyContext) {
              const enemyKw = keywords.find(k => k.slug === 'strength-enemy');
              if (enemyKw) {
                seSlug = 'strength-enemy';
                desc = enemyKw.description;
                img = (enemyKw as any).image;
              }
            }
          }

          const href = seSlugSet.has(seSlug) ? `/status-effects#${seSlug}` : `/keywords#${kw.slug}`;
          tags.push({ name: kw.name, href, description: desc, image: img });
        }
        break;
      }
    }
  }
  return tags;
}

export function linkKeywords(text: string, selfSlug?: string, excludeTerms?: string[]): string {
  const escaped = escapeHtml(text);

  const statusEffectSlugs = new Set(statusEffects.map(se => se.slug));

  const termMap = new Map<string, TermEntry>();

  // Keywords (matched uppercase)
  for (const kw of keywords) {
    for (const term of kw.terms) {
      if (!termMap.has(term)) {
        termMap.set(term, { kind: 'keyword', slug: kw.slug, name: kw.name, variant: kw.variant, statusEffect: kw.statusEffect, statusEffectSlug: kw.statusEffectSlug, description: kw.description, image: kw.image });
      }
    }
  }

  // Artefacts (matched by name, stored as-is for case-insensitive lookup)
  for (const art of artefacts) {
    const key = art.name.toUpperCase();
    if (!termMap.has(key)) {
      termMap.set(key, { kind: 'artefact', slug: art.slug, name: art.name, effect: art.effect, image: art.image });
    }
  }

  // Page links — multi-word phrases that link to a specific page
  for (const pl of PAGE_LINKS) {
    if (!termMap.has(pl.term)) {
      termMap.set(pl.term, { kind: 'pagelink', href: pl.href, name: titleCase(pl.term) });
    }
  }

  if (termMap.size === 0) return escaped;

  // Single-pass replacement — longest terms first to avoid partial matches
  const allTerms = [...termMap.keys()].sort((a, b) => b.length - a.length);
  const pattern = allTerms.map(t => `\\b${escapeRegex(t)}\\b`).join('|');
  const regex = new RegExp(pattern, 'gi');

  return escaped.replace(regex, (match, offset: number, string: string) => {
    let entry = termMap.get(match.toUpperCase());
    if (!entry) return match;

    // Don't link ATTACK DAMAGE when it's part of "counter-attack damage"
    if (match.toUpperCase() === 'ATTACK DAMAGE' && offset > 0 && string[offset - 1] === '-') {
      return match;
    }

    // Disambiguate STRENGTH: if "enemy" or "enemies" appears on the same line, use enemy variant
    if (match.toUpperCase() === 'STRENGTH' && entry.kind === 'keyword' && entry.slug === 'strength') {
      const lineStart = string.lastIndexOf('\n', offset - 1) + 1;
      const lineEnd = string.indexOf('\n', offset);
      const line = string.slice(lineStart, lineEnd === -1 ? undefined : lineEnd);
      if (/\benemy\b|\benemies\b/i.test(line)) {
        const enemyKw = keywords.find(k => k.slug === 'strength-enemy');
        if (enemyKw) {
          entry = { kind: 'keyword', slug: enemyKw.slug, name: enemyKw.name, variant: enemyKw.variant, statusEffect: enemyKw.statusEffect, statusEffectSlug: enemyKw.statusEffectSlug, description: enemyKw.description, image: enemyKw.image };
        }
      }
    }

    if (selfSlug && entry.kind !== 'pagelink' && entry.slug === selfSlug) return titleCase(match);
    if (excludeTerms?.includes(match.toUpperCase())) return match;

    if (entry.kind === 'pagelink') {
      return `<a href="${entry.href}">${escapeHtml(titleCase(match))}</a>`;
    }

    if (entry.kind === 'artefact') {
      const imgHtml = entry.image
        ? `<img src="${entry.image}" alt="${escapeHtml(entry.name)}" class="keyword-tip-img" />`
        : '';
      const tagHtml = `<span class="keyword-tip-tag keyword-tip-tag--artefact">Artefact</span>`;
      const descHtml = `<span class="keyword-tip-desc">${escapeHtml(entry.effect)}</span>`;
      return `<a href="/artefacts/${entry.slug}" class="keyword-tip">${escapeHtml(match)}<span class="keyword-tip-popup">${imgHtml}${tagHtml}${descHtml}</span></a>`;
    }

    // keyword
    const kw = entry;
    const imgHtml = kw.image
      ? `<img src="${kw.image}" alt="${escapeHtml(kw.name)}" class="keyword-tip-img" />`
      : '';
    const tagsHtml = [
      kw.statusEffect ? `<span class="keyword-tip-tag keyword-tip-tag--status">Status Effect</span>` : '',
      kw.variant ? `<span class="keyword-tip-variant">${escapeHtml(kw.variant)}</span>` : '',
    ].filter(Boolean).join('');
    const descHtml = tagsHtml
      ? `<span class="keyword-tip-desc">${escapeHtml(kw.description)}</span>`
      : escapeHtml(kw.description);
    const seSlug = kw.statusEffectSlug ?? kw.slug;
    const href = kw.statusEffect && statusEffectSlugs.has(seSlug)
      ? `/status-effects#${seSlug}`
      : `/keywords#${kw.slug}`;
    return `<a href="${href}" class="keyword-tip">${titleCase(match)}<span class="keyword-tip-popup">${imgHtml}${tagsHtml}${descHtml}</span></a>`;
  });
}
