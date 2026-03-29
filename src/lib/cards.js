import attackRaw from '../data/cards/attack.json';
import techniqueRaw from '../data/cards/technique.json';
import advantageRaw from '../data/cards/advantage.json';
import curseRaw from '../data/cards/curse.json';
import stancesRaw from '../data/cards/stances.json';

function slugify(title, assetIndex) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '-' + assetIndex;
}

function imageUrl(title, assetIndex) {
  const filename = `${title.replace(/'/g, '_')}_${assetIndex}.png`;
  return `/images/cards/${encodeURIComponent(filename)}`;
}

function parseRows(values, type, extraFields) {
  const [headers, ...rows] = values;
  return rows.map(row => {
    const obj = {};
    headers.forEach((h, i) => { obj[h] = row[i] ?? ''; });

    const title = obj['Title'] || '';
    const assetIndex = String(obj['Asset Index'] ?? obj['Asset index'] ?? '');
    const rawDesc = obj['Description'] ?? '';
    const description = rawDesc === '#ERROR!' ? '' : rawDesc;
    const rawCost = obj['Stamina Cost'];
    const staminaCost = (rawCost === '' || rawCost === undefined) ? null : Number(rawCost);

    const card = {
      title,
      assetIndex,
      description,
      staminaCost,
      image: imageUrl(title, assetIndex),
      slug: slugify(title, assetIndex),
      type,
    };

    return extraFields ? { ...card, ...extraFields(obj) } : card;
  });
}

export function getAttackCards() {
  return parseRows(attackRaw, 'attack');
}

export function getTechniqueCards() {
  return parseRows(techniqueRaw, 'technique');
}

export function getAdvantageCards() {
  return parseRows(advantageRaw, 'advantage');
}

export function getCurseCards() {
  return parseRows(curseRaw, 'curse');
}

export function getStanceCards() {
  return parseRows(stancesRaw, 'stances', obj => ({
    counterAttackDamage: obj['Counter-attack Damage'] || '',
    maxParry: obj['Max Parry'] || '',
    attackDamage: obj['Attack Damage'] || '',
    counterAttackType: obj['Counter-Attack Type'] || '',
    weapons: (obj['Weapon'] || '').split(',').map(w => w.trim()).filter(Boolean),
    note: obj['Note'] || '',
  }));
}

export function getAllCards() {
  return {
    attack: getAttackCards(),
    technique: getTechniqueCards(),
    advantage: getAdvantageCards(),
    curse: getCurseCards(),
    stances: getStanceCards(),
  };
}
