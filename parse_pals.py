import json
import os
import re

def process_pals():
    with open('public/pals.json', 'r') as f:
        data = json.load(f)

    out = []
    out.append("export interface PalStats {")
    out.append("  hp: number;")
    out.append("  attack: { melee: number, ranged: number };")
    out.append("  defense: number;")
    out.append("  speed: { ride: number, run: number, walk: number };")
    out.append("  stamina: number;")
    out.append("  support: number;")
    out.append("  food: number;")
    out.append("}")
    out.append("")
    out.append("export interface WorkSuitability {")
    out.append("  kindling?: number;")
    out.append("  watering?: number;")
    out.append("  planting?: number;")
    out.append("  generating_electricity?: number;")
    out.append("  handiwork?: number;")
    out.append("  gathering?: number;")
    out.append("  lumbering?: number;")
    out.append("  mining?: number;")
    out.append("  medicine_production?: number;")
    out.append("  cooling?: number;")
    out.append("  transporting?: number;")
    out.append("  farming?: number;")
    out.append("}")
    out.append("")
    out.append("export interface PalAura {")
    out.append("  name: string;")
    out.append("  description: string;")
    out.append("  tech?: string | null;")
    out.append("}")
    out.append("")
    out.append("export interface PalSkill {")
    out.append("  level: number;")
    out.append("  name: string;")
    out.append("  type: string;")
    out.append("  cooldown: number;")
    out.append("  power: number;")
    out.append("  description: string;")
    out.append("}")
    out.append("")
    out.append("export interface PalData {")
    out.append("  id: number | string;")
    out.append("  key: string;")
    out.append("  name: string;")
    out.append("  types: string[];")
    out.append("  stats: PalStats;")
    out.append("  suitability: WorkSuitability;")
    out.append("  breedingPower: number;")
    out.append("  description: string;")
    out.append("  image: string;")
    out.append("  aura: PalAura;")
    out.append("  skills: PalSkill[];")
    out.append("}")
    out.append("")
    out.append("export const pals: PalData[] = [")

    for p in data:
        # Some items don't have id, they are collab pals. Give them empty string id or handle appropriately.
        id_val = p.get('id', '""')
        if isinstance(id_val, str) and not id_val:
            id_val = '""'
        elif isinstance(id_val, str):
            id_val = f'"{id_val}"'

        key = p.get('key', '')
        name = p.get('name', '')
        types = json.dumps([t.capitalize() for t in p.get('types', [])])

        # Build image path based on name matching
        image_name = p.get('image', '').replace('/images/pals/', '')
        if not image_name:
            image_path = f"'/images/pals/{name.replace(' ', '_').replace('-', '_')}.webp'"
        else:
            image_path = f"'/images/pals/{image_name}'"

        description = p.get('description', '').replace('"', '\\"').replace('\n', ' ')

        out.append("  {")
        out.append(f"    id: {id_val},")
        out.append(f"    key: '{key}',")
        out.append(f"    name: '{name}',")
        out.append(f"    types: {types},")

        suitability = []
        for s in p.get('suitability', []):
            sType = s.get('type', '').lower()
            if sType == 'generating electricity':
                sType = 'generating_electricity'
            if sType == 'medicine production':
                sType = 'medicine_production'
            sLevel = s.get('level', 1)
            suitability.append(f"{sType}: {sLevel}")
        out.append(f"    suitability: {{ {', '.join(suitability)} }},")
        out.append(f"    breedingPower: {p.get('breeding', {}).get('rank', 0)},")

        stats = p.get('stats', {})
        speed = stats.get('speed', {})
        out.append("    stats: {")
        out.append(f"      hp: {stats.get('hp', 0)},")
        out.append(f"      attack: {{ melee: {stats.get('attack', {}).get('melee', 0)}, ranged: {stats.get('attack', {}).get('ranged', 0)} }},")
        out.append(f"      defense: {stats.get('defense', 0)},")
        out.append(f"      speed: {{ ride: {speed.get('ride', 0)}, run: {speed.get('run', 0)}, walk: {speed.get('walk', 0)} }},")
        out.append(f"      stamina: {stats.get('stamina', 0)},")
        out.append(f"      support: {stats.get('support', 0)},")
        out.append(f"      food: {stats.get('food', 0)}")
        out.append("    },")

        aura = p.get('aura', {})
        aura_tech = f"'{aura.get('tech')}'" if aura.get('tech') else "null"

        escaped_aura_name = aura.get('name', '').replace("'", "\\'")
        escaped_aura_desc = aura.get('description', '').replace("'", "\\'")

        out.append("    aura: {")
        out.append(f"      name: '{escaped_aura_name}',")
        out.append(f"      description: '{escaped_aura_desc}',")
        out.append(f"      tech: {aura_tech}")
        out.append("    },")

        out.append("    skills: [")
        for sk in p.get('skills', []):
            escaped_sk_name = sk.get('name', '').replace("'", "\\'")
            escaped_sk_desc = sk.get('description', '').replace("'", "\\'")
            out.append("      {")
            out.append(f"        level: {sk.get('level', 1)},")
            out.append(f"        name: '{escaped_sk_name}',")
            out.append(f"        type: '{sk.get('type', '').capitalize()}',")
            out.append(f"        cooldown: {sk.get('cooldown', 0)},")
            out.append(f"        power: {sk.get('power', 0)},")
            out.append(f"        description: '{escaped_sk_desc}'")
            out.append("      },")
        out.append("    ],")

        out.append(f"    description: \"{description}\",")
        out.append(f"    image: {image_path},")
        out.append("  },")

    out.append("];")

    with open('src/data/pals.ts', 'w') as f:
        f.write('\n'.join(out))

    print(f"Written src/data/pals.ts with {len(data)} items")

if __name__ == '__main__':
    process_pals()
