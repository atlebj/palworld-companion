// AUTO-EXPANDED from mlg404/palworld-paldex-api (MIT license).
// https://github.com/mlg404/palworld-paldex-api/blob/main/src/item.json
// Regenerate with /tmp/tld/import_items.py against a fresh clone.

export type ItemCategory = 'Accessory' | 'Ammo' | 'Armor' | 'Consumable' | 'Food' | 'Glider' | 'Key Item' | 'Material' | 'Schematic' | 'Sphere' | 'Weapon';

export interface ItemData {
  id: string;
  name: string;
  category: ItemCategory;
  description?: string;
  image: string;
  weight: number;
  gold: number;
}

export const items: ItemData[] = [
  {
    id: 'giga_sphere',
    name: 'Giga Sphere',
    category: 'Sphere',
    description: 'A high-grade sphere. Good for capturing strong Pals.',
    image: '/images/items/giga-sphere.png',
    weight: 0,
    gold: 1520
  },
  {
    id: 'hyper_sphere',
    name: 'Hyper Sphere',
    category: 'Sphere',
    description: 'A very high-grade sphere. Essential for late-game captures.',
    image: '/images/items/hyper-sphere.png',
    weight: 0,
    gold: 4240
  },
  {
    id: 'legendary_sphere',
    name: 'Legendary Sphere',
    category: 'Sphere',
    description: 'The ultimate sphere. Almost guarantees capture of any Pal.',
    image: '/images/items/legendary-sphere.png',
    weight: 0,
    gold: 45200
  },
  {
    id: 'mega_sphere',
    name: 'Mega Sphere',
    category: 'Sphere',
    description: 'A stronger sphere. Capable of capturing mid-level Pals.',
    image: '/images/items/mega-sphere.png',
    weight: 0,
    gold: 920
  },
  {
    id: 'pal_sphere',
    name: 'Pal Sphere',
    category: 'Sphere',
    description: 'A device for capturing Pals. Low success rate for higher level Pals.',
    image: '/images/items/pal-sphere.png',
    weight: 0,
    gold: 120
  },
  {
    id: 'radar_sphere',
    name: 'Radar Sphere',
    category: 'Sphere',
    image: '/images/items/radar-sphere.png',
    weight: 1,
    gold: 5500
  },
  {
    id: 'ultra_sphere',
    name: 'Ultra Sphere',
    category: 'Sphere',
    description: 'An extremely powerful sphere. Even high-level Pals are hard to miss.',
    image: '/images/items/ultra-sphere.png',
    weight: 0,
    gold: 9880
  },
  {
    id: 'assault_rifle',
    name: 'Assault Rifle',
    category: 'Weapon',
    image: '/images/items/assault-rifle.png',
    weight: 15,
    gold: 82400
  },
  {
    id: 'axe4',
    name: 'Axe4',
    category: 'Weapon',
    image: '/images/items/axe4.png',
    weight: 25,
    gold: 33000
  },
  {
    id: 'bat',
    name: 'Bat',
    category: 'Weapon',
    image: '/images/items/bat.png',
    weight: 3,
    gold: 80
  },
  {
    id: 'beegarde_s_spear',
    name: 'Beegarde\'s Spear',
    category: 'Weapon',
    image: '/images/items/beegarde-s-spear.png',
    weight: 15,
    gold: 20000
  },
  {
    id: 'crossbow',
    name: 'Crossbow',
    category: 'Weapon',
    image: '/images/items/crossbow.png',
    weight: 13,
    gold: 25200
  },
  {
    id: 'decal_gun_1',
    name: 'Decal Gun 1',
    category: 'Weapon',
    image: '/images/items/decal-gun-1.png',
    weight: 8,
    gold: 33000
  },
  {
    id: 'decal_gun_2',
    name: 'Decal Gun 2',
    category: 'Weapon',
    image: '/images/items/decal-gun-2.png',
    weight: 8,
    gold: 33000
  },
  {
    id: 'decal_gun_3',
    name: 'Decal Gun 3',
    category: 'Weapon',
    image: '/images/items/decal-gun-3.png',
    weight: 8,
    gold: 33000
  },
  {
    id: 'decal_gun_4',
    name: 'Decal Gun 4',
    category: 'Weapon',
    image: '/images/items/decal-gun-4.png',
    weight: 8,
    gold: 33000
  },
  {
    id: 'decal_gun_5',
    name: 'Decal Gun 5',
    category: 'Weapon',
    image: '/images/items/decal-gun-5.png',
    weight: 8,
    gold: 33000
  },
  {
    id: 'double_barreled_shotgun',
    name: 'Double-barreled Shotgun',
    category: 'Weapon',
    image: '/images/items/double-barreled-shotgun.png',
    weight: 24,
    gold: 55200
  },
  {
    id: 'elizabee_s_staff',
    name: 'Elizabee\'s Staff',
    category: 'Weapon',
    image: '/images/items/elizabee-s-staff.png',
    weight: 20,
    gold: 20000
  },
  {
    id: 'fire_arrow_crossbow',
    name: 'Fire Arrow Crossbow',
    category: 'Weapon',
    image: '/images/items/fire-arrow-crossbow.png',
    weight: 13,
    gold: 25200
  },
  {
    id: 'fire_bow',
    name: 'Fire Bow',
    category: 'Weapon',
    image: '/images/items/fire-bow.png',
    weight: 6,
    gold: 480
  },
  {
    id: 'fishing_rod_good',
    name: 'Fishing Rod_Good',
    category: 'Weapon',
    image: '/images/items/fishing-rod-good.png',
    weight: 15,
    gold: 10
  },
  {
    id: 'fishing_rod_legendary',
    name: 'Fishing Rod_Legendary',
    category: 'Weapon',
    image: '/images/items/fishing-rod-legendary.png',
    weight: 15,
    gold: 10
  },
  {
    id: 'fishing_rod_old',
    name: 'Fishing Rod_Old',
    category: 'Weapon',
    image: '/images/items/fishing-rod-old.png',
    weight: 15,
    gold: 10
  },
  {
    id: 'fishing_rod_super',
    name: 'Fishing Rod_Super',
    category: 'Weapon',
    image: '/images/items/fishing-rod-super.png',
    weight: 15,
    gold: 10
  },
  {
    id: 'five_shot_bow',
    name: 'Five Shot Bow',
    category: 'Weapon',
    image: '/images/items/five-shot-bow.png',
    weight: 8,
    gold: 10
  },
  {
    id: 'frag_grenade',
    name: 'Frag Grenade',
    category: 'Weapon',
    image: '/images/items/frag-grenade.png',
    weight: 0,
    gold: 10
  },
  {
    id: 'hand_held_torch',
    name: 'Hand-held Torch',
    category: 'Weapon',
    image: '/images/items/hand-held-torch.png',
    weight: 5,
    gold: 80
  },
  {
    id: 'handgun',
    name: 'Handgun',
    category: 'Weapon',
    image: '/images/items/handgun.png',
    weight: 8,
    gold: 33000
  },
  {
    id: 'homing_sphere_launcher',
    name: 'Homing Sphere Launcher',
    category: 'Weapon',
    image: '/images/items/homing-sphere-launcher.png',
    weight: 30,
    gold: 460000
  },
  {
    id: 'ice_grenade',
    name: 'Ice Grenade',
    category: 'Weapon',
    image: '/images/items/ice-grenade.png',
    weight: 0,
    gold: 10
  },
  {
    id: 'incendiary_grenade',
    name: 'Incendiary Grenade',
    category: 'Weapon',
    image: '/images/items/incendiary-grenade.png',
    weight: 0,
    gold: 10
  },
  {
    id: 'lily_s_spear',
    name: 'Lily\'s Spear',
    category: 'Weapon',
    image: '/images/items/lily-s-spear.png',
    weight: 10,
    gold: 20000
  },
  {
    id: 'makeshift_handgun',
    name: 'Makeshift Handgun',
    category: 'Weapon',
    image: '/images/items/makeshift-handgun.png',
    weight: 10,
    gold: 16600
  },
  {
    id: 'meat_cleaver',
    name: 'Meat Cleaver',
    category: 'Weapon',
    image: '/images/items/meat-cleaver.png',
    weight: 10,
    gold: 100
  },
  {
    id: 'metal_axe',
    name: 'Metal Axe',
    category: 'Weapon',
    image: '/images/items/metal-axe.png',
    weight: 15,
    gold: 2800
  },
  {
    id: 'metal_pickaxe',
    name: 'Metal Pickaxe',
    category: 'Weapon',
    image: '/images/items/metal-pickaxe.png',
    weight: 15,
    gold: 2800
  },
  {
    id: 'metal_spear',
    name: 'Metal Spear',
    category: 'Weapon',
    image: '/images/items/metal-spear.png',
    weight: 15,
    gold: 8780
  },
  {
    id: 'musket',
    name: 'Musket',
    category: 'Weapon',
    image: '/images/items/musket.png',
    weight: 20,
    gold: 37600
  },
  {
    id: 'old_bow',
    name: 'Old Bow',
    category: 'Weapon',
    image: '/images/items/old-bow.png',
    weight: 6,
    gold: 360
  },
  {
    id: 'poison_arrow_crossbow',
    name: 'Poison Arrow Crossbow',
    category: 'Weapon',
    image: '/images/items/poison-arrow-crossbow.png',
    weight: 13,
    gold: 25200
  },
  {
    id: 'poison_bow',
    name: 'Poison Bow',
    category: 'Weapon',
    image: '/images/items/poison-bow.png',
    weight: 6,
    gold: 480
  },
  {
    id: 'pump_action_shotgun',
    name: 'Pump-action Shotgun',
    category: 'Weapon',
    image: '/images/items/pump-action-shotgun.png',
    weight: 20,
    gold: 153600
  },
  {
    id: 'refined_metal_axe',
    name: 'Refined Metal Axe',
    category: 'Weapon',
    image: '/images/items/refined-metal-axe.png',
    weight: 20,
    gold: 7000
  },
  {
    id: 'refined_metal_pickaxe',
    name: 'Refined Metal Pickaxe',
    category: 'Weapon',
    image: '/images/items/refined-metal-pickaxe.png',
    weight: 20,
    gold: 7000
  },
  {
    id: 'refined_metal_spear',
    name: 'Refined Metal Spear',
    category: 'Weapon',
    image: '/images/items/refined-metal-spear.png',
    weight: 20,
    gold: 13880
  },
  {
    id: 'rocket_launcher',
    name: 'Rocket Launcher',
    category: 'Weapon',
    image: '/images/items/rocket-launcher.png',
    weight: 30,
    gold: 324000
  },
  {
    id: 'scatter_sphere_launcher',
    name: 'Scatter Sphere Launcher',
    category: 'Weapon',
    image: '/images/items/scatter-sphere-launcher.png',
    weight: 30,
    gold: 44000
  },
  {
    id: 'shock_grenade',
    name: 'Shock Grenade',
    category: 'Weapon',
    image: '/images/items/shock-grenade.png',
    weight: 0,
    gold: 10
  },
  {
    id: 'single_shot_rifle',
    name: 'Single-shot Rifle',
    category: 'Weapon',
    image: '/images/items/single-shot-rifle.png',
    weight: 20,
    gold: 37600
  },
  {
    id: 'single_shot_sphere_launcher',
    name: 'Single-shot Sphere Launcher',
    category: 'Weapon',
    image: '/images/items/single-shot-sphere-launcher.png',
    weight: 30,
    gold: 109200
  },
  {
    id: 'stone_axe',
    name: 'Stone Axe',
    category: 'Weapon',
    image: '/images/items/stone-axe.png',
    weight: 10,
    gold: 200
  },
  {
    id: 'stone_pickaxe',
    name: 'Stone Pickaxe',
    category: 'Weapon',
    image: '/images/items/stone-pickaxe.png',
    weight: 10,
    gold: 200
  },
  {
    id: 'stone_spear',
    name: 'Stone Spear',
    category: 'Weapon',
    image: '/images/items/stone-spear.png',
    weight: 10,
    gold: 480
  },
  {
    id: 'stun_baton',
    name: 'Stun Baton',
    category: 'Weapon',
    image: '/images/items/stun-baton.png',
    weight: 10,
    gold: 19000
  },
  {
    id: 'sword',
    name: 'Sword',
    category: 'Weapon',
    image: '/images/items/sword.png',
    weight: 10,
    gold: 10440
  },
  {
    id: 'three_shot_bow',
    name: 'Three Shot Bow',
    category: 'Weapon',
    image: '/images/items/three-shot-bow.png',
    weight: 8,
    gold: 1000
  },
  {
    id: 'wooden_club',
    name: 'Wooden Club',
    category: 'Weapon',
    image: '/images/items/wooden-club.png',
    weight: 5,
    gold: 80
  },
  {
    id: 'arrow',
    name: 'Arrow',
    category: 'Ammo',
    image: '/images/items/arrow.png',
    weight: 0,
    gold: 5
  },
  {
    id: 'assault_rifle_ammo',
    name: 'Assault Rifle Ammo',
    category: 'Ammo',
    image: '/images/items/assault-rifle-ammo.png',
    weight: 0,
    gold: 150
  },
  {
    id: 'coarse_ammo',
    name: 'Coarse Ammo',
    category: 'Ammo',
    image: '/images/items/coarse-ammo.png',
    weight: 0,
    gold: 120
  },
  {
    id: 'decal_ink',
    name: 'Decal Ink',
    category: 'Ammo',
    image: '/images/items/decal-ink.png',
    weight: 0,
    gold: 10
  },
  {
    id: 'fire_arrow',
    name: 'Fire Arrow',
    category: 'Ammo',
    image: '/images/items/fire-arrow.png',
    weight: 0,
    gold: 15
  },
  {
    id: 'handgun_ammo',
    name: 'Handgun Ammo',
    category: 'Ammo',
    image: '/images/items/handgun-ammo.png',
    weight: 0,
    gold: 120
  },
  {
    id: 'machine_gun_ammo',
    name: 'Machine Gun Ammo',
    category: 'Ammo',
    image: '/images/items/machine-gun-ammo.png',
    weight: 0,
    gold: 150
  },
  {
    id: 'magnum_ammo',
    name: 'Magnum Ammo',
    category: 'Ammo',
    image: '/images/items/magnum-ammo.png',
    weight: 0,
    gold: 150
  },
  {
    id: 'poison_arrow',
    name: 'Poison Arrow',
    category: 'Ammo',
    image: '/images/items/poison-arrow.png',
    weight: 0,
    gold: 15
  },
  {
    id: 'rifle_ammo',
    name: 'Rifle Ammo',
    category: 'Ammo',
    image: '/images/items/rifle-ammo.png',
    weight: 0,
    gold: 220
  },
  {
    id: 'rocket_ammo',
    name: 'Rocket Ammo',
    category: 'Ammo',
    image: '/images/items/rocket-ammo.png',
    weight: 1,
    gold: 400
  },
  {
    id: 'shotgun_shells',
    name: 'Shotgun Shells',
    category: 'Ammo',
    image: '/images/items/shotgun-shells.png',
    weight: 0,
    gold: 220
  },
  {
    id: 'bowler_hat',
    name: 'Bowler Hat',
    category: 'Armor',
    image: '/images/items/bowler-hat.png',
    weight: 4,
    gold: 180
  },
  {
    id: 'cloth_outfit',
    name: 'Cloth Outfit',
    category: 'Armor',
    image: '/images/items/cloth-outfit.png',
    weight: 4,
    gold: 320
  },
  {
    id: 'cold_resistant_metal_armor',
    name: 'Cold Resistant Metal Armor',
    category: 'Armor',
    image: '/images/items/cold-resistant-metal-armor.png',
    weight: 30,
    gold: 4920
  },
  {
    id: 'cold_resistant_pal_metal_armor',
    name: 'Cold Resistant Pal Metal Armor',
    category: 'Armor',
    image: '/images/items/cold-resistant-pal-metal-armor.png',
    weight: 40,
    gold: 32300
  },
  {
    id: 'cold_resistant_pelt_armor',
    name: 'Cold Resistant Pelt Armor',
    category: 'Armor',
    image: '/images/items/cold-resistant-pelt-armor.png',
    weight: 10,
    gold: 3000
  },
  {
    id: 'cold_resistant_refined_metal_armor',
    name: 'Cold Resistant Refined Metal Armor',
    category: 'Armor',
    image: '/images/items/cold-resistant-refined-metal-armor.png',
    weight: 35,
    gold: 9840
  },
  {
    id: 'common_shield',
    name: 'Common Shield',
    category: 'Armor',
    image: '/images/items/common-shield.png',
    weight: 5,
    gold: 800
  },
  {
    id: 'explorer_cap',
    name: 'Explorer Cap',
    category: 'Armor',
    image: '/images/items/explorer-cap.png',
    weight: 3,
    gold: 180
  },
  {
    id: 'farming_hat',
    name: 'Farming Hat',
    category: 'Armor',
    image: '/images/items/farming-hat.png',
    weight: 3,
    gold: 180
  },
  {
    id: 'feathered_hair_band',
    name: 'Feathered Hair Band',
    category: 'Armor',
    image: '/images/items/feathered-hair-band.png',
    weight: 5,
    gold: 180
  },
  {
    id: 'giga_shield',
    name: 'Giga Shield',
    category: 'Armor',
    image: '/images/items/giga-shield.png',
    weight: 5,
    gold: 62000
  },
  {
    id: 'golden_crown',
    name: 'Golden Crown',
    category: 'Armor',
    image: '/images/items/golden-crown.png',
    weight: 6,
    gold: 180
  },
  {
    id: 'graduation_cap',
    name: 'Graduation cap',
    category: 'Armor',
    image: '/images/items/graduation-cap.png',
    weight: 5,
    gold: 180
  },
  {
    id: 'grinning_tocotoco_cap',
    name: 'Grinning Tocotoco Cap',
    category: 'Armor',
    image: '/images/items/grinning-tocotoco-cap.png',
    weight: 4,
    gold: 180
  },
  {
    id: 'gumoss_cap',
    name: 'Gumoss Cap',
    category: 'Armor',
    image: '/images/items/gumoss-cap.png',
    weight: 4,
    gold: 180
  },
  {
    id: 'heat_resistant_metal_armor',
    name: 'Heat Resistant Metal Armor',
    category: 'Armor',
    image: '/images/items/heat-resistant-metal-armor.png',
    weight: 30,
    gold: 4920
  },
  {
    id: 'heat_resistant_pal_metal_armor',
    name: 'Heat Resistant Pal Metal Armor',
    category: 'Armor',
    image: '/images/items/heat-resistant-pal-metal-armor.png',
    weight: 40,
    gold: 32300
  },
  {
    id: 'heat_resistant_pelt_armor',
    name: 'Heat Resistant Pelt Armor',
    category: 'Armor',
    image: '/images/items/heat-resistant-pelt-armor.png',
    weight: 10,
    gold: 3000
  },
  {
    id: 'heat_resistant_refined_metal_armor',
    name: 'Heat Resistant Refined Metal Armor',
    category: 'Armor',
    image: '/images/items/heat-resistant-refined-metal-armor.png',
    weight: 35,
    gold: 9840
  },
  {
    id: 'helmet',
    name: 'Helmet',
    category: 'Armor',
    image: '/images/items/helmet.png',
    weight: 8,
    gold: 180
  },
  {
    id: 'hyper_shield',
    name: 'Hyper Shield',
    category: 'Armor',
    image: '/images/items/hyper-shield.png',
    weight: 5,
    gold: 104000
  },
  {
    id: 'katress_cap',
    name: 'Katress Cap',
    category: 'Armor',
    image: '/images/items/katress-cap.png',
    weight: 4,
    gold: 180
  },
  {
    id: 'lightz_helmet',
    name: 'Lightz Helmet',
    category: 'Armor',
    image: '/images/items/lightz-helmet.png',
    weight: 7,
    gold: 180
  },
  {
    id: 'long_eared_headband',
    name: 'Long-eared Headband',
    category: 'Armor',
    image: '/images/items/long-eared-headband.png',
    weight: 2,
    gold: 180
  },
  {
    id: 'mega_shield',
    name: 'Mega Shield',
    category: 'Armor',
    image: '/images/items/mega-shield.png',
    weight: 5,
    gold: 31200
  },
  {
    id: 'metal_armor',
    name: 'Metal Armor',
    category: 'Armor',
    image: '/images/items/metal-armor.png',
    weight: 30,
    gold: 4920
  },
  {
    id: 'metal_helm',
    name: 'Metal Helm',
    category: 'Armor',
    image: '/images/items/metal-helm.png',
    weight: 10,
    gold: 2460
  },
  {
    id: 'monarch_s_crown',
    name: 'Monarch\'s Crown',
    category: 'Armor',
    image: '/images/items/monarch-s-crown.png',
    weight: 7,
    gold: 180
  },
  {
    id: 'pal_metal_armor',
    name: 'Pal Metal Armor',
    category: 'Armor',
    image: '/images/items/pal-metal-armor.png',
    weight: 40,
    gold: 32300
  },
  {
    id: 'pal_metal_helm',
    name: 'Pal Metal Helm',
    category: 'Armor',
    image: '/images/items/pal-metal-helm.png',
    weight: 15,
    gold: 16180
  },
  {
    id: 'pelt_armor',
    name: 'Pelt Armor',
    category: 'Armor',
    image: '/images/items/pelt-armor.png',
    weight: 10,
    gold: 360
  },
  {
    id: 'penking_cap',
    name: 'Penking Cap',
    category: 'Armor',
    image: '/images/items/penking-cap.png',
    weight: 4,
    gold: 180
  },
  {
    id: 'refined_metal_armor',
    name: 'Refined Metal Armor',
    category: 'Armor',
    image: '/images/items/refined-metal-armor.png',
    weight: 35,
    gold: 9840
  },
  {
    id: 'refined_metal_helm',
    name: 'Refined Metal Helm',
    category: 'Armor',
    image: '/images/items/refined-metal-helm.png',
    weight: 12,
    gold: 5240
  },
  {
    id: 'silk_hat',
    name: 'Silk Hat',
    category: 'Armor',
    image: '/images/items/silk-hat.png',
    weight: 4,
    gold: 180
  },
  {
    id: 'soft_hat',
    name: 'Soft Hat',
    category: 'Armor',
    image: '/images/items/soft-hat.png',
    weight: 3,
    gold: 180
  },
  {
    id: 'tocotoco_cap',
    name: 'Tocotoco Cap',
    category: 'Armor',
    image: '/images/items/tocotoco-cap.png',
    weight: 4,
    gold: 180
  },
  {
    id: 'tricorne',
    name: 'Tricorne',
    category: 'Armor',
    image: '/images/items/tricorne.png',
    weight: 5,
    gold: 180
  },
  {
    id: 'tropical_outfit',
    name: 'Tropical Outfit',
    category: 'Armor',
    image: '/images/items/tropical-outfit.png',
    weight: 4,
    gold: 320
  },
  {
    id: 'tundra_outfit',
    name: 'Tundra Outfit',
    category: 'Armor',
    image: '/images/items/tundra-outfit.png',
    weight: 4,
    gold: 320
  },
  {
    id: 'witch_hat',
    name: 'Witch Hat',
    category: 'Armor',
    image: '/images/items/witch-hat.png',
    weight: 4,
    gold: 180
  },
  {
    id: 'attack_pendant',
    name: 'Attack Pendant',
    category: 'Accessory',
    image: '/images/items/attack-pendant.png',
    weight: 2,
    gold: 1000
  },
  {
    id: 'attack_pendant_plus_1',
    name: 'Attack Pendant +1',
    category: 'Accessory',
    image: '/images/items/attack-pendant-1.png',
    weight: 2,
    gold: 4000
  },
  {
    id: 'attack_pendant_plus_2',
    name: 'Attack Pendant +2',
    category: 'Accessory',
    image: '/images/items/attack-pendant-2.png',
    weight: 2,
    gold: 7000
  },
  {
    id: 'defense_pendant',
    name: 'Defense Pendant',
    category: 'Accessory',
    image: '/images/items/defense-pendant.png',
    weight: 2,
    gold: 1000
  },
  {
    id: 'defense_pendant_plus_1',
    name: 'Defense Pendant +1',
    category: 'Accessory',
    image: '/images/items/defense-pendant-1.png',
    weight: 2,
    gold: 4000
  },
  {
    id: 'defense_pendant_plus_2',
    name: 'Defense Pendant +2',
    category: 'Accessory',
    image: '/images/items/defense-pendant-2.png',
    weight: 2,
    gold: 7000
  },
  {
    id: 'gas_mask',
    name: 'Gas Mask',
    category: 'Accessory',
    image: '/images/items/gas-mask.png',
    weight: 2,
    gold: 1500
  },
  {
    id: 'heat_resistant_underwear',
    name: 'Heat Resistant Underwear',
    category: 'Accessory',
    image: '/images/items/heat-resistant-underwear.png',
    weight: 2,
    gold: 1000
  },
  {
    id: 'heat_resistant_underwear_plus_1',
    name: 'Heat Resistant Underwear +1',
    category: 'Accessory',
    image: '/images/items/heat-resistant-underwear-1.png',
    weight: 2,
    gold: 4000
  },
  {
    id: 'heat_resistant_underwear_plus_2',
    name: 'Heat Resistant Underwear +2',
    category: 'Accessory',
    image: '/images/items/heat-resistant-underwear-2.png',
    weight: 2,
    gold: 7000
  },
  {
    id: 'life_pendant',
    name: 'Life Pendant',
    category: 'Accessory',
    image: '/images/items/life-pendant.png',
    weight: 2,
    gold: 1000
  },
  {
    id: 'life_pendant_plus_1',
    name: 'Life Pendant +1',
    category: 'Accessory',
    image: '/images/items/life-pendant-1.png',
    weight: 2,
    gold: 4000
  },
  {
    id: 'life_pendant_plus_2',
    name: 'Life Pendant +2',
    category: 'Accessory',
    image: '/images/items/life-pendant-2.png',
    weight: 2,
    gold: 7000
  },
  {
    id: 'night_vision_goggles',
    name: 'Night Vision Goggles',
    category: 'Accessory',
    image: '/images/items/night-vision-goggles.png',
    weight: 2,
    gold: 1500
  },
  {
    id: 'pendant_of_diligence',
    name: 'Pendant of Diligence',
    category: 'Accessory',
    image: '/images/items/pendant-of-diligence.png',
    weight: 2,
    gold: 1000
  },
  {
    id: 'pendant_of_diligence_plus_1',
    name: 'Pendant of Diligence +1',
    category: 'Accessory',
    image: '/images/items/pendant-of-diligence-1.png',
    weight: 2,
    gold: 4000
  },
  {
    id: 'pendant_of_diligence_plus_2',
    name: 'Pendant of Diligence +2',
    category: 'Accessory',
    image: '/images/items/pendant-of-diligence-2.png',
    weight: 2,
    gold: 7000
  },
  {
    id: 'ring_of_dark_resistance',
    name: 'Ring of Dark Resistance',
    category: 'Accessory',
    image: '/images/items/ring-of-dark-resistance.png',
    weight: 2,
    gold: 1000
  },
  {
    id: 'ring_of_dark_resistance_plus_1',
    name: 'Ring of Dark Resistance +1',
    category: 'Accessory',
    image: '/images/items/ring-of-dark-resistance-1.png',
    weight: 2,
    gold: 4000
  },
  {
    id: 'ring_of_dark_resistance_plus_2',
    name: 'Ring of Dark Resistance +2',
    category: 'Accessory',
    image: '/images/items/ring-of-dark-resistance-2.png',
    weight: 2,
    gold: 7000
  },
  {
    id: 'ring_of_dragon_resistance',
    name: 'Ring of Dragon Resistance',
    category: 'Accessory',
    image: '/images/items/ring-of-dragon-resistance.png',
    weight: 2,
    gold: 1000
  },
  {
    id: 'ring_of_dragon_resistance_plus_1',
    name: 'Ring of Dragon Resistance +1',
    category: 'Accessory',
    image: '/images/items/ring-of-dragon-resistance-1.png',
    weight: 2,
    gold: 4000
  },
  {
    id: 'ring_of_dragon_resistance_plus_2',
    name: 'Ring of Dragon Resistance +2',
    category: 'Accessory',
    image: '/images/items/ring-of-dragon-resistance-2.png',
    weight: 2,
    gold: 7000
  },
  {
    id: 'ring_of_earth_resistance',
    name: 'Ring of Earth Resistance',
    category: 'Accessory',
    image: '/images/items/ring-of-earth-resistance.png',
    weight: 2,
    gold: 1000
  },
  {
    id: 'ring_of_earth_resistance_plus_1',
    name: 'Ring of Earth Resistance +1',
    category: 'Accessory',
    image: '/images/items/ring-of-earth-resistance-1.png',
    weight: 2,
    gold: 4000
  },
  {
    id: 'ring_of_earth_resistance_plus_2',
    name: 'Ring of Earth Resistance +2',
    category: 'Accessory',
    image: '/images/items/ring-of-earth-resistance-2.png',
    weight: 2,
    gold: 7000
  },
  {
    id: 'ring_of_flame_resistance',
    name: 'Ring of Flame Resistance',
    category: 'Accessory',
    image: '/images/items/ring-of-flame-resistance.png',
    weight: 2,
    gold: 1000
  },
  {
    id: 'ring_of_flame_resistance_plus_1',
    name: 'Ring of Flame Resistance +1',
    category: 'Accessory',
    image: '/images/items/ring-of-flame-resistance-1.png',
    weight: 2,
    gold: 4000
  },
  {
    id: 'ring_of_flame_resistance_plus_2',
    name: 'Ring of Flame Resistance +2',
    category: 'Accessory',
    image: '/images/items/ring-of-flame-resistance-2.png',
    weight: 2,
    gold: 7000
  },
  {
    id: 'ring_of_grass_resistance',
    name: 'Ring of Grass Resistance',
    category: 'Accessory',
    image: '/images/items/ring-of-grass-resistance.png',
    weight: 2,
    gold: 1000
  },
  {
    id: 'ring_of_grass_resistance_plus_1',
    name: 'Ring of Grass Resistance +1',
    category: 'Accessory',
    image: '/images/items/ring-of-grass-resistance-1.png',
    weight: 2,
    gold: 4000
  },
  {
    id: 'ring_of_grass_resistance_plus_2',
    name: 'Ring of Grass Resistance +2',
    category: 'Accessory',
    image: '/images/items/ring-of-grass-resistance-2.png',
    weight: 2,
    gold: 7000
  },
  {
    id: 'ring_of_ice_resistance',
    name: 'Ring of Ice Resistance',
    category: 'Accessory',
    image: '/images/items/ring-of-ice-resistance.png',
    weight: 2,
    gold: 1000
  },
  {
    id: 'ring_of_ice_resistance_plus_1',
    name: 'Ring of Ice Resistance +1',
    category: 'Accessory',
    image: '/images/items/ring-of-ice-resistance-1.png',
    weight: 2,
    gold: 4000
  },
  {
    id: 'ring_of_ice_resistance_plus_2',
    name: 'Ring of Ice Resistance +2',
    category: 'Accessory',
    image: '/images/items/ring-of-ice-resistance-2.png',
    weight: 2,
    gold: 7000
  },
  {
    id: 'ring_of_lightning_resistance',
    name: 'Ring of Lightning Resistance',
    category: 'Accessory',
    image: '/images/items/ring-of-lightning-resistance.png',
    weight: 2,
    gold: 1000
  },
  {
    id: 'ring_of_lightning_resistance_plus_1',
    name: 'Ring of Lightning Resistance +1',
    category: 'Accessory',
    image: '/images/items/ring-of-lightning-resistance-1.png',
    weight: 2,
    gold: 4000
  },
  {
    id: 'ring_of_lightning_resistance_plus_2',
    name: 'Ring of Lightning Resistance +2',
    category: 'Accessory',
    image: '/images/items/ring-of-lightning-resistance-2.png',
    weight: 2,
    gold: 7000
  },
  {
    id: 'ring_of_resistance',
    name: 'Ring of Resistance',
    category: 'Accessory',
    image: '/images/items/ring-of-resistance.png',
    weight: 2,
    gold: 1000
  },
  {
    id: 'ring_of_resistance_plus_1',
    name: 'Ring of Resistance +1',
    category: 'Accessory',
    image: '/images/items/ring-of-resistance-1.png',
    weight: 2,
    gold: 4000
  },
  {
    id: 'ring_of_resistance_plus_2',
    name: 'Ring of Resistance +2',
    category: 'Accessory',
    image: '/images/items/ring-of-resistance-2.png',
    weight: 2,
    gold: 7000
  },
  {
    id: 'ring_of_water_resistance',
    name: 'Ring of Water Resistance',
    category: 'Accessory',
    image: '/images/items/ring-of-water-resistance.png',
    weight: 2,
    gold: 1000
  },
  {
    id: 'ring_of_water_resistance_plus_1',
    name: 'Ring of Water Resistance +1',
    category: 'Accessory',
    image: '/images/items/ring-of-water-resistance-1.png',
    weight: 2,
    gold: 4000
  },
  {
    id: 'ring_of_water_resistance_plus_2',
    name: 'Ring of Water Resistance +2',
    category: 'Accessory',
    image: '/images/items/ring-of-water-resistance-2.png',
    weight: 2,
    gold: 7000
  },
  {
    id: 'thermal_underwear',
    name: 'Thermal Underwear',
    category: 'Accessory',
    image: '/images/items/thermal-underwear.png',
    weight: 2,
    gold: 1000
  },
  {
    id: 'thermal_underwear_plus_1',
    name: 'Thermal Underwear +1',
    category: 'Accessory',
    image: '/images/items/thermal-underwear-1.png',
    weight: 2,
    gold: 4000
  },
  {
    id: 'thermal_underwear_plus_2',
    name: 'Thermal Underwear +2',
    category: 'Accessory',
    image: '/images/items/thermal-underwear-2.png',
    weight: 2,
    gold: 7000
  },
  {
    id: 'ancient_civilization_parts',
    name: 'Ancient Civilization Parts',
    category: 'Material',
    description: 'Rare parts found in dungeons and from bosses.',
    image: '/images/items/ancient-civilization-parts.png',
    weight: 1,
    gold: 1000
  },
  {
    id: 'animal_skin',
    name: 'Animal Skin',
    category: 'Material',
    image: '/images/items/animal-skin.png',
    weight: 1,
    gold: 140
  },
  {
    id: 'berry_seeds',
    name: 'Berry Seeds',
    category: 'Material',
    image: '/images/items/berry-seeds.png',
    weight: 0,
    gold: 50
  },
  {
    id: 'bone',
    name: 'Bone',
    category: 'Material',
    image: '/images/items/bone.png',
    weight: 1,
    gold: 100
  },
  {
    id: 'carbon_fiber',
    name: 'Carbon Fiber',
    category: 'Material',
    image: '/images/items/carbon-fiber.png',
    weight: 0,
    gold: 120
  },
  {
    id: 'cement',
    name: 'Cement',
    category: 'Material',
    image: '/images/items/cement.png',
    weight: 5,
    gold: 220
  },
  {
    id: 'charcoal',
    name: 'Charcoal',
    category: 'Material',
    image: '/images/items/charcoal.png',
    weight: 2,
    gold: 20
  },
  {
    id: 'circuit_board',
    name: 'Circuit Board',
    category: 'Material',
    image: '/images/items/circuit-board.png',
    weight: 2,
    gold: 1000
  },
  {
    id: 'claw',
    name: 'Claw',
    category: 'Material',
    image: '/images/items/claw.png',
    weight: 1,
    gold: 120
  },
  {
    id: 'cloth',
    name: 'Cloth',
    category: 'Material',
    image: '/images/items/cloth.png',
    weight: 1,
    gold: 80
  },
  {
    id: 'coal',
    name: 'Coal',
    category: 'Material',
    image: '/images/items/coal.png',
    weight: 5,
    gold: 30
  },
  {
    id: 'common_egg',
    name: 'Common Egg',
    category: 'Material',
    image: '/images/items/common-egg.png',
    weight: 10,
    gold: 10
  },
  {
    id: 'computer',
    name: 'Computer',
    category: 'Material',
    image: '/images/items/computer.png',
    weight: 1,
    gold: 298000
  },
  {
    id: 'crude_oil',
    name: 'Crude Oil',
    category: 'Material',
    image: '/images/items/crude-oil.png',
    weight: 1,
    gold: 100
  },
  {
    id: 'damp_egg',
    name: 'Damp Egg',
    category: 'Material',
    image: '/images/items/damp-egg.png',
    weight: 10,
    gold: 10
  },
  {
    id: 'dark_egg',
    name: 'Dark Egg',
    category: 'Material',
    image: '/images/items/dark-egg.png',
    weight: 10,
    gold: 10
  },
  {
    id: 'diamond',
    name: 'Diamond',
    category: 'Material',
    image: '/images/items/diamond.png',
    weight: 5,
    gold: 12500
  },
  {
    id: 'dragon_egg',
    name: 'Dragon Egg',
    category: 'Material',
    image: '/images/items/dragon-egg.png',
    weight: 10,
    gold: 10
  },
  {
    id: 'dung',
    name: 'Dung',
    category: 'Material',
    image: '/images/items/dung.png',
    weight: 1,
    gold: 1
  },
  {
    id: 'electric_egg',
    name: 'Electric Egg',
    category: 'Material',
    image: '/images/items/electric-egg.png',
    weight: 10,
    gold: 10
  },
  {
    id: 'electric_organ',
    name: 'Electric Organ',
    category: 'Material',
    image: '/images/items/electric-organ.png',
    weight: 1,
    gold: 200
  },
  {
    id: 'emerald',
    name: 'Emerald',
    category: 'Material',
    image: '/images/items/emerald.png',
    weight: 5,
    gold: 10000
  },
  {
    id: 'fang',
    name: 'Fang',
    category: 'Material',
    image: '/images/items/fang.png',
    weight: 1,
    gold: 120
  },
  {
    id: 'fiber',
    name: 'Fiber',
    category: 'Material',
    image: '/images/items/fiber.png',
    weight: 1,
    gold: 10
  },
  {
    id: 'flame_organ',
    name: 'Flame Organ',
    category: 'Material',
    image: '/images/items/flame-organ.png',
    weight: 1,
    gold: 100
  },
  {
    id: 'flour',
    name: 'Flour',
    category: 'Material',
    image: '/images/items/flour.png',
    weight: 0,
    gold: 20
  },
  {
    id: 'frozen_egg',
    name: 'Frozen Egg',
    category: 'Material',
    image: '/images/items/frozen-egg.png',
    weight: 10,
    gold: 10
  },
  {
    id: 'gold_coin',
    name: 'Gold Coin',
    category: 'Material',
    image: '/images/items/gold-coin.png',
    weight: 0,
    gold: 1
  },
  {
    id: 'gumoss_leaf',
    name: 'Gumoss Leaf',
    category: 'Material',
    image: '/images/items/gumoss-leaf.png',
    weight: 0,
    gold: 300
  },
  {
    id: 'gunpowder',
    name: 'Gunpowder',
    category: 'Material',
    image: '/images/items/gunpowder.png',
    weight: 0,
    gold: 10
  },
  {
    id: 'high_quality_cloth',
    name: 'High Quality Cloth',
    category: 'Material',
    image: '/images/items/high-quality-cloth.png',
    weight: 1,
    gold: 400
  },
  {
    id: 'high_quality_pal_oil',
    name: 'High Quality Pal Oil',
    category: 'Material',
    description: 'Obtained from certain Pals. Used for making polymers.',
    image: '/images/items/high-quality-pal-oil.png',
    weight: 0,
    gold: 300
  },
  {
    id: 'horn',
    name: 'Horn',
    category: 'Material',
    image: '/images/items/horn.png',
    weight: 1,
    gold: 300
  },
  {
    id: 'huge_common_egg',
    name: 'Huge Common Egg',
    category: 'Material',
    image: '/images/items/huge-common-egg.png',
    weight: 50,
    gold: 10
  },
  {
    id: 'huge_damp_egg',
    name: 'Huge Damp Egg',
    category: 'Material',
    image: '/images/items/huge-damp-egg.png',
    weight: 50,
    gold: 10
  },
  {
    id: 'huge_dark_egg',
    name: 'Huge Dark Egg',
    category: 'Material',
    image: '/images/items/huge-dark-egg.png',
    weight: 50,
    gold: 10
  },
  {
    id: 'huge_dragon_egg',
    name: 'Huge Dragon Egg',
    category: 'Material',
    image: '/images/items/huge-dragon-egg.png',
    weight: 50,
    gold: 10
  },
  {
    id: 'huge_dung_pile',
    name: 'Huge Dung Pile',
    category: 'Material',
    image: '/images/items/huge-dung-pile.png',
    weight: 2,
    gold: 1
  },
  {
    id: 'huge_electric_egg',
    name: 'Huge Electric Egg',
    category: 'Material',
    image: '/images/items/huge-electric-egg.png',
    weight: 50,
    gold: 10
  },
  {
    id: 'huge_frozen_egg',
    name: 'Huge Frozen Egg',
    category: 'Material',
    image: '/images/items/huge-frozen-egg.png',
    weight: 50,
    gold: 10
  },
  {
    id: 'huge_rocky_egg',
    name: 'Huge Rocky Egg',
    category: 'Material',
    image: '/images/items/huge-rocky-egg.png',
    weight: 50,
    gold: 10
  },
  {
    id: 'huge_scorching_egg',
    name: 'Huge Scorching Egg',
    category: 'Material',
    image: '/images/items/huge-scorching-egg.png',
    weight: 50,
    gold: 10
  },
  {
    id: 'huge_verdant_egg',
    name: 'Huge Verdant Egg',
    category: 'Material',
    image: '/images/items/huge-verdant-egg.png',
    weight: 50,
    gold: 10
  },
  {
    id: 'ice_organ',
    name: 'Ice Organ',
    category: 'Material',
    image: '/images/items/ice-organ.png',
    weight: 1,
    gold: 100
  },
  {
    id: 'ingot',
    name: 'Ingot',
    category: 'Material',
    image: '/images/items/ingot.png',
    weight: 5,
    gold: 200
  },
  {
    id: 'katress_hair',
    name: 'Katress Hair',
    category: 'Material',
    image: '/images/items/katress-hair.png',
    weight: 0,
    gold: 300
  },
  {
    id: 'large_common_egg',
    name: 'Large Common Egg',
    category: 'Material',
    image: '/images/items/large-common-egg.png',
    weight: 25,
    gold: 10
  },
  {
    id: 'large_damp_egg',
    name: 'Large Damp Egg',
    category: 'Material',
    image: '/images/items/large-damp-egg.png',
    weight: 25,
    gold: 10
  },
  {
    id: 'large_dark_egg',
    name: 'Large Dark Egg',
    category: 'Material',
    image: '/images/items/large-dark-egg.png',
    weight: 25,
    gold: 10
  },
  {
    id: 'large_dragon_egg',
    name: 'Large Dragon Egg',
    category: 'Material',
    image: '/images/items/large-dragon-egg.png',
    weight: 25,
    gold: 10
  },
  {
    id: 'large_electric_egg',
    name: 'Large Electric Egg',
    category: 'Material',
    image: '/images/items/large-electric-egg.png',
    weight: 25,
    gold: 10
  },
  {
    id: 'large_frozen_egg',
    name: 'Large Frozen Egg',
    category: 'Material',
    image: '/images/items/large-frozen-egg.png',
    weight: 25,
    gold: 10
  },
  {
    id: 'large_pal_soul',
    name: 'Large Pal Soul',
    category: 'Material',
    image: '/images/items/large-pal-soul.png',
    weight: 0,
    gold: 10
  },
  {
    id: 'large_rocky_egg',
    name: 'Large Rocky Egg',
    category: 'Material',
    image: '/images/items/large-rocky-egg.png',
    weight: 25,
    gold: 10
  },
  {
    id: 'large_scorching_egg',
    name: 'Large Scorching Egg',
    category: 'Material',
    image: '/images/items/large-scorching-egg.png',
    weight: 25,
    gold: 10
  },
  {
    id: 'large_verdant_egg',
    name: 'Large Verdant Egg',
    category: 'Material',
    image: '/images/items/large-verdant-egg.png',
    weight: 25,
    gold: 10
  },
  {
    id: 'leather',
    name: 'Leather',
    category: 'Material',
    image: '/images/items/leather.png',
    weight: 2,
    gold: 150
  },
  {
    id: 'lettuce_seeds',
    name: 'Lettuce Seeds',
    category: 'Material',
    image: '/images/items/lettuce-seeds.png',
    weight: 0,
    gold: 200
  },
  {
    id: 'medium_pal_soul',
    name: 'Medium Pal Soul',
    category: 'Material',
    image: '/images/items/medium-pal-soul.png',
    weight: 0,
    gold: 10
  },
  {
    id: 'nail',
    name: 'Nail',
    category: 'Material',
    image: '/images/items/nail.png',
    weight: 2,
    gold: 1600
  },
  {
    id: 'ore',
    name: 'Ore',
    category: 'Material',
    description: 'Raw metal ore. Can be smelted into Ingots.',
    image: '/images/items/ore.png',
    weight: 8,
    gold: 50
  },
  {
    id: 'pal_fluids',
    name: 'Pal Fluids',
    category: 'Material',
    description: 'Obtained from Water-type Pals. Used for making cement.',
    image: '/images/items/pal-fluids.png',
    weight: 0,
    gold: 300
  },
  {
    id: 'pal_metal_ingot',
    name: 'Pal Metal Ingot',
    category: 'Material',
    image: '/images/items/pal-metal-ingot.png',
    weight: 5,
    gold: 800
  },
  {
    id: 'paldium_clump',
    name: 'Paldium Clump',
    category: 'Material',
    image: '/images/items/paldium-clump.png',
    weight: 3,
    gold: 1000
  },
  {
    id: 'paldium_fragment',
    name: 'Paldium Fragment',
    category: 'Material',
    image: '/images/items/paldium-fragment.png',
    weight: 1,
    gold: 20
  },
  {
    id: 'penking_plume',
    name: 'Penking Plume',
    category: 'Material',
    image: '/images/items/penking-plume.png',
    weight: 0,
    gold: 300
  },
  {
    id: 'plastic',
    name: 'Plastic',
    category: 'Material',
    image: '/images/items/plastic.png',
    weight: 1,
    gold: 200
  },
  {
    id: 'polymer',
    name: 'Polymer',
    category: 'Material',
    image: '/images/items/polymer.png',
    weight: 1,
    gold: 1200
  },
  {
    id: 'potatoseedpotatoes',
    name: 'PotatoSeedPotatoes',
    category: 'Material',
    image: '/images/items/potatoseedpotatoes.png',
    weight: 0,
    gold: 10
  },
  {
    id: 'precious_claw',
    name: 'Precious Claw',
    category: 'Material',
    image: '/images/items/precious-claw.png',
    weight: 0,
    gold: 6500
  },
  {
    id: 'precious_dragon_stone',
    name: 'Precious Dragon Stone',
    category: 'Material',
    image: '/images/items/precious-dragon-stone.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'precious_entrails',
    name: 'Precious Entrails',
    category: 'Material',
    image: '/images/items/precious-entrails.png',
    weight: 0,
    gold: 8500
  },
  {
    id: 'precious_pelt',
    name: 'Precious Pelt',
    category: 'Material',
    image: '/images/items/precious-pelt.png',
    weight: 0,
    gold: 5000
  },
  {
    id: 'precious_plume',
    name: 'Precious Plume',
    category: 'Material',
    image: '/images/items/precious-plume.png',
    weight: 0,
    gold: 7500
  },
  {
    id: 'pure_quartz',
    name: 'Pure Quartz',
    category: 'Material',
    image: '/images/items/pure-quartz.png',
    weight: 5,
    gold: 100
  },
  {
    id: 'refined_ingot',
    name: 'Refined Ingot',
    category: 'Material',
    image: '/images/items/refined-ingot.png',
    weight: 5,
    gold: 320
  },
  {
    id: 'rocky_egg',
    name: 'Rocky Egg',
    category: 'Material',
    image: '/images/items/rocky-egg.png',
    weight: 10,
    gold: 10
  },
  {
    id: 'ruby',
    name: 'Ruby',
    category: 'Material',
    image: '/images/items/ruby.png',
    weight: 5,
    gold: 5000
  },
  {
    id: 'sapphire',
    name: 'Sapphire',
    category: 'Material',
    image: '/images/items/sapphire.png',
    weight: 5,
    gold: 7500
  },
  {
    id: 'scorching_egg',
    name: 'Scorching Egg',
    category: 'Material',
    image: '/images/items/scorching-egg.png',
    weight: 10,
    gold: 10
  },
  {
    id: 'silicon',
    name: 'Silicon',
    category: 'Material',
    image: '/images/items/silicon.png',
    weight: 0,
    gold: 80
  },
  {
    id: 'small_pal_soul',
    name: 'Small Pal Soul',
    category: 'Material',
    image: '/images/items/small-pal-soul.png',
    weight: 0,
    gold: 10
  },
  {
    id: 'stone',
    name: 'Stone',
    category: 'Material',
    description: 'Basic building material obtained from rocks.',
    image: '/images/items/stone.png',
    weight: 3,
    gold: 10
  },
  {
    id: 'sulfur',
    name: 'Sulfur',
    category: 'Material',
    image: '/images/items/sulfur.png',
    weight: 3,
    gold: 70
  },
  {
    id: 'tocotoco_feather',
    name: 'Tocotoco Feather',
    category: 'Material',
    image: '/images/items/tocotoco-feather.png',
    weight: 0,
    gold: 300
  },
  {
    id: 'tomato_seeds',
    name: 'Tomato Seeds',
    category: 'Material',
    image: '/images/items/tomato-seeds.png',
    weight: 0,
    gold: 200
  },
  {
    id: 'venom_gland',
    name: 'Venom Gland',
    category: 'Material',
    image: '/images/items/venom-gland.png',
    weight: 1,
    gold: 100
  },
  {
    id: 'verdant_egg',
    name: 'Verdant Egg',
    category: 'Material',
    image: '/images/items/verdant-egg.png',
    weight: 10,
    gold: 10
  },
  {
    id: 'wheat_seeds',
    name: 'Wheat Seeds',
    category: 'Material',
    image: '/images/items/wheat-seeds.png',
    weight: 0,
    gold: 100
  },
  {
    id: 'wood',
    name: 'Wood',
    category: 'Material',
    description: 'Basic building material obtained from trees.',
    image: '/images/items/wood.png',
    weight: 3,
    gold: 10
  },
  {
    id: 'wool',
    name: 'Wool',
    category: 'Material',
    image: '/images/items/wool.png',
    weight: 1,
    gold: 100
  },
  {
    id: 'baked_berries',
    name: 'Baked Berries',
    category: 'Food',
    image: '/images/items/baked-berries.png',
    weight: 0,
    gold: 100
  },
  {
    id: 'baked_mushroom',
    name: 'Baked Mushroom',
    category: 'Food',
    image: '/images/items/baked-mushroom.png',
    weight: 1,
    gold: 100
  },
  {
    id: 'beautiful_flower',
    name: 'Beautiful Flower',
    category: 'Food',
    image: '/images/items/beautiful-flower.png',
    weight: 0,
    gold: 240
  },
  {
    id: 'beer',
    name: 'Beer',
    category: 'Food',
    image: '/images/items/beer.png',
    weight: 2,
    gold: 100
  },
  {
    id: 'bolognese_sauce',
    name: 'Bolognese Sauce',
    category: 'Food',
    image: '/images/items/bolognese-sauce.png',
    weight: 1,
    gold: 2250
  },
  {
    id: 'bread',
    name: 'Bread',
    category: 'Food',
    image: '/images/items/bread.png',
    weight: 0,
    gold: 200
  },
  {
    id: 'broiled_dumud',
    name: 'Broiled Dumud',
    category: 'Food',
    image: '/images/items/broiled-dumud.png',
    weight: 2,
    gold: 700
  },
  {
    id: 'broncherry_meat',
    name: 'Broncherry Meat',
    category: 'Food',
    image: '/images/items/broncherry-meat.png',
    weight: 5,
    gold: 1800
  },
  {
    id: 'broncherry_rib_roast',
    name: 'Broncherry Rib Roast',
    category: 'Food',
    image: '/images/items/broncherry-rib-roast.png',
    weight: 5,
    gold: 2520
  },
  {
    id: 'burrito',
    name: 'Burrito',
    category: 'Food',
    image: '/images/items/burrito.png',
    weight: 0,
    gold: 3000
  },
  {
    id: 'cake',
    name: 'Cake',
    category: 'Food',
    description: 'Required for breeding Pals. Pals love it!',
    image: '/images/items/cake.png',
    weight: 1,
    gold: 10000
  },
  {
    id: 'caprity_meat',
    name: 'Caprity Meat',
    category: 'Food',
    image: '/images/items/caprity-meat.png',
    weight: 3,
    gold: 570
  },
  {
    id: 'carbonara',
    name: 'Carbonara',
    category: 'Food',
    image: '/images/items/carbonara.png',
    weight: 1,
    gold: 800
  },
  {
    id: 'cheeseburger',
    name: 'Cheeseburger',
    category: 'Food',
    image: '/images/items/cheeseburger.png',
    weight: 0,
    gold: 3400
  },
  {
    id: 'chikipi_poultry',
    name: 'Chikipi Poultry',
    category: 'Food',
    image: '/images/items/chikipi-poultry.png',
    weight: 1,
    gold: 100
  },
  {
    id: 'chikipi_saut',
    name: 'Chikipi Saut챕',
    category: 'Food',
    image: '/images/items/chikipi-saut.png',
    weight: 1,
    gold: 920
  },
  {
    id: 'corn_soup',
    name: 'Corn Soup',
    category: 'Food',
    image: '/images/items/corn-soup.png',
    weight: 1,
    gold: 100
  },
  {
    id: 'cotton_candy',
    name: 'Cotton Candy',
    category: 'Food',
    image: '/images/items/cotton-candy.png',
    weight: 0,
    gold: 250
  },
  {
    id: 'curry',
    name: 'Curry',
    category: 'Food',
    image: '/images/items/curry.png',
    weight: 1,
    gold: 50
  },
  {
    id: 'dumud_chowder',
    name: 'Dumud Chowder',
    category: 'Food',
    image: '/images/items/dumud-chowder.png',
    weight: 1,
    gold: 1700
  },
  {
    id: 'egg',
    name: 'Egg',
    category: 'Food',
    image: '/images/items/egg.png',
    weight: 1,
    gold: 50
  },
  {
    id: 'eikthyrdeer_loco_moco',
    name: 'Eikthyrdeer Loco Moco',
    category: 'Food',
    image: '/images/items/eikthyrdeer-loco-moco.png',
    weight: 1,
    gold: 1740
  },
  {
    id: 'eikthyrdeer_stew',
    name: 'Eikthyrdeer Stew',
    category: 'Food',
    image: '/images/items/eikthyrdeer-stew.png',
    weight: 1,
    gold: 2120
  },
  {
    id: 'eikthyrdeer_venison',
    name: 'Eikthyrdeer Venison',
    category: 'Food',
    image: '/images/items/eikthyrdeer-venison.png',
    weight: 2,
    gold: 500
  },
  {
    id: 'fried_chikipi',
    name: 'Fried Chikipi',
    category: 'Food',
    image: '/images/items/fried-chikipi.png',
    weight: 1,
    gold: 1080
  },
  {
    id: 'fried_egg',
    name: 'Fried Egg',
    category: 'Food',
    image: '/images/items/fried-egg.png',
    weight: 1,
    gold: 100
  },
  {
    id: 'fried_kelpsea',
    name: 'Fried Kelpsea',
    category: 'Food',
    image: '/images/items/fried-kelpsea.png',
    weight: 1,
    gold: 1080
  },
  {
    id: 'galeclaw_poultry',
    name: 'Galeclaw Poultry',
    category: 'Food',
    image: '/images/items/galeclaw-poultry.png',
    weight: 1,
    gold: 150
  },
  {
    id: 'grape',
    name: 'Grape',
    category: 'Food',
    image: '/images/items/grape.png',
    weight: 1,
    gold: 2000
  },
  {
    id: 'grilled_chikipi',
    name: 'Grilled Chikipi',
    category: 'Food',
    image: '/images/items/grilled-chikipi.png',
    weight: 1,
    gold: 500
  },
  {
    id: 'grilled_fish',
    name: 'Grilled Fish',
    category: 'Food',
    image: '/images/items/grilled-fish.png',
    weight: 1,
    gold: 100
  },
  {
    id: 'grilled_galeclaw',
    name: 'Grilled Galeclaw',
    category: 'Food',
    image: '/images/items/grilled-galeclaw.png',
    weight: 1,
    gold: 500
  },
  {
    id: 'grilled_kelpsea',
    name: 'Grilled Kelpsea',
    category: 'Food',
    image: '/images/items/grilled-kelpsea.png',
    weight: 1,
    gold: 500
  },
  {
    id: 'grilled_lamball',
    name: 'Grilled Lamball',
    category: 'Food',
    image: '/images/items/grilled-lamball.png',
    weight: 1,
    gold: 1470
  },
  {
    id: 'grilled_meat',
    name: 'Grilled Meat',
    category: 'Food',
    image: '/images/items/grilled-meat.png',
    weight: 1,
    gold: 100
  },
  {
    id: 'hamburger',
    name: 'Hamburger',
    category: 'Food',
    image: '/images/items/hamburger.png',
    weight: 0,
    gold: 3250
  },
  {
    id: 'herb_roasted_caprity',
    name: 'Herb Roasted Caprity',
    category: 'Food',
    image: '/images/items/herb-roasted-caprity.png',
    weight: 3,
    gold: 800
  },
  {
    id: 'herb_roasted_lamball',
    name: 'Herb Roasted Lamball',
    category: 'Food',
    image: '/images/items/herb-roasted-lamball.png',
    weight: 1,
    gold: 940
  },
  {
    id: 'high_grade_medical_supplies',
    name: 'High Grade Medical Supplies',
    category: 'Food',
    image: '/images/items/high-grade-medical-supplies.png',
    weight: 0,
    gold: 3000
  },
  {
    id: 'honey',
    name: 'Honey',
    category: 'Food',
    image: '/images/items/honey.png',
    weight: 0,
    gold: 250
  },
  {
    id: 'hop',
    name: 'Hop',
    category: 'Food',
    image: '/images/items/hop.png',
    weight: 2,
    gold: 2000
  },
  {
    id: 'hot_dog',
    name: 'Hot Dog',
    category: 'Food',
    image: '/images/items/hot-dog.png',
    weight: 1,
    gold: 300
  },
  {
    id: 'hot_milk',
    name: 'Hot Milk',
    category: 'Food',
    image: '/images/items/hot-milk.png',
    weight: 2,
    gold: 100
  },
  {
    id: 'jam_filled_bun',
    name: 'Jam-filled Bun',
    category: 'Food',
    image: '/images/items/jam-filled-bun.png',
    weight: 0,
    gold: 600
  },
  {
    id: 'lamball_kebab',
    name: 'Lamball Kebab',
    category: 'Food',
    image: '/images/items/lamball-kebab.png',
    weight: 1,
    gold: 520
  },
  {
    id: 'lamball_mutton',
    name: 'Lamball Mutton',
    category: 'Food',
    image: '/images/items/lamball-mutton.png',
    weight: 1,
    gold: 100
  },
  {
    id: 'lettuce',
    name: 'Lettuce',
    category: 'Food',
    image: '/images/items/lettuce.png',
    weight: 1,
    gold: 150
  },
  {
    id: 'low_grade_medical_supplies',
    name: 'Low Grade Medical Supplies',
    category: 'Food',
    image: '/images/items/low-grade-medical-supplies.png',
    weight: 0,
    gold: 240
  },
  {
    id: 'luxuryomelette',
    name: 'LuxuryOmelette',
    category: 'Food',
    image: '/images/items/luxuryomelette.png',
    weight: 1,
    gold: 100
  },
  {
    id: 'mammorest_meat',
    name: 'Mammorest Meat',
    category: 'Food',
    image: '/images/items/mammorest-meat.png',
    weight: 5,
    gold: 1800
  },
  {
    id: 'mammorest_steak',
    name: 'Mammorest Steak',
    category: 'Food',
    image: '/images/items/mammorest-steak.png',
    weight: 5,
    gold: 2520
  },
  {
    id: 'marinated_mushrooms',
    name: 'Marinated Mushrooms',
    category: 'Food',
    image: '/images/items/marinated-mushrooms.png',
    weight: 1,
    gold: 300
  },
  {
    id: 'medical_supplies',
    name: 'Medical Supplies',
    category: 'Food',
    image: '/images/items/medical-supplies.png',
    weight: 0,
    gold: 800
  },
  {
    id: 'memory_wiping_medicine',
    name: 'Memory Wiping Medicine',
    category: 'Food',
    image: '/images/items/memory-wiping-medicine.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'milk',
    name: 'Milk',
    category: 'Food',
    image: '/images/items/milk.png',
    weight: 2,
    gold: 50
  },
  {
    id: 'mind_control_meds',
    name: 'Mind Control Meds',
    category: 'Food',
    image: '/images/items/mind-control-meds.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'mozzarina_cheeseburger',
    name: 'Mozzarina Cheeseburger',
    category: 'Food',
    image: '/images/items/mozzarina-cheeseburger.png',
    weight: 1,
    gold: 2880
  },
  {
    id: 'mozzarina_hamburger',
    name: 'Mozzarina Hamburger',
    category: 'Food',
    image: '/images/items/mozzarina-hamburger.png',
    weight: 1,
    gold: 1620
  },
  {
    id: 'mozzarina_meat',
    name: 'Mozzarina Meat',
    category: 'Food',
    image: '/images/items/mozzarina-meat.png',
    weight: 3,
    gold: 570
  },
  {
    id: 'mozzarina_steak',
    name: 'Mozzarina Steak',
    category: 'Food',
    image: '/images/items/mozzarina-steak.png',
    weight: 3,
    gold: 800
  },
  {
    id: 'mushroom',
    name: 'Mushroom',
    category: 'Food',
    image: '/images/items/mushroom.png',
    weight: 1,
    gold: 50
  },
  {
    id: 'mushroom_soup',
    name: 'Mushroom Soup',
    category: 'Food',
    image: '/images/items/mushroom-soup.png',
    weight: 1,
    gold: 300
  },
  {
    id: 'mushroom_stew',
    name: 'Mushroom Stew',
    category: 'Food',
    image: '/images/items/mushroom-stew.png',
    weight: 1,
    gold: 2500
  },
  {
    id: 'omelet',
    name: 'Omelet',
    category: 'Food',
    image: '/images/items/omelet.png',
    weight: 1,
    gold: 300
  },
  {
    id: 'pancake',
    name: 'Pancake',
    category: 'Food',
    image: '/images/items/pancake.png',
    weight: 1,
    gold: 300
  },
  {
    id: 'pizza',
    name: 'Pizza',
    category: 'Food',
    image: '/images/items/pizza.png',
    weight: 1,
    gold: 2900
  },
  {
    id: 'potage',
    name: 'Potage',
    category: 'Food',
    image: '/images/items/potage.png',
    weight: 0,
    gold: 50
  },
  {
    id: 'raw_dumud',
    name: 'Raw Dumud',
    category: 'Food',
    image: '/images/items/raw-dumud.png',
    weight: 2,
    gold: 500
  },
  {
    id: 'raw_kelpsea',
    name: 'Raw Kelpsea',
    category: 'Food',
    image: '/images/items/raw-kelpsea.png',
    weight: 1,
    gold: 100
  },
  {
    id: 'raw_meat',
    name: 'Raw Meat',
    category: 'Food',
    image: '/images/items/raw-meat.png',
    weight: 1,
    gold: 100
  },
  {
    id: 'red_berries',
    name: 'Red Berries',
    category: 'Food',
    image: '/images/items/red-berries.png',
    weight: 0,
    gold: 50
  },
  {
    id: 'reindrix_stew',
    name: 'Reindrix Stew',
    category: 'Food',
    image: '/images/items/reindrix-stew.png',
    weight: 1,
    gold: 1320
  },
  {
    id: 'reindrix_venison',
    name: 'Reindrix Venison',
    category: 'Food',
    image: '/images/items/reindrix-venison.png',
    weight: 2,
    gold: 640
  },
  {
    id: 'roast_eikthyrdeer',
    name: 'Roast Eikthyrdeer',
    category: 'Food',
    image: '/images/items/roast-eikthyrdeer.png',
    weight: 2,
    gold: 700
  },
  {
    id: 'roast_reindrix',
    name: 'Roast Reindrix',
    category: 'Food',
    image: '/images/items/roast-reindrix.png',
    weight: 2,
    gold: 2520
  },
  {
    id: 'roast_rushoar',
    name: 'Roast Rushoar',
    category: 'Food',
    image: '/images/items/roast-rushoar.png',
    weight: 2,
    gold: 600
  },
  {
    id: 'rushoar_bacon_n_eggs',
    name: 'Rushoar Bacon \'n\' Eggs',
    category: 'Food',
    image: '/images/items/rushoar-bacon-n-eggs.png',
    weight: 1,
    gold: 1670
  },
  {
    id: 'rushoar_hot_dog',
    name: 'Rushoar Hot Dog',
    category: 'Food',
    image: '/images/items/rushoar-hot-dog.png',
    weight: 1,
    gold: 1400
  },
  {
    id: 'rushoar_pork',
    name: 'Rushoar Pork',
    category: 'Food',
    image: '/images/items/rushoar-pork.png',
    weight: 2,
    gold: 430
  },
  {
    id: 'salad',
    name: 'Salad',
    category: 'Food',
    image: '/images/items/salad.png',
    weight: 0,
    gold: 1200
  },
  {
    id: 'sandwich',
    name: 'Sandwich',
    category: 'Food',
    image: '/images/items/sandwich.png',
    weight: 1,
    gold: 100
  },
  {
    id: 'seafood_soup',
    name: 'Seafood Soup',
    category: 'Food',
    image: '/images/items/seafood-soup.png',
    weight: 1,
    gold: 100
  },
  {
    id: 'stew',
    name: 'Stew',
    category: 'Food',
    image: '/images/items/stew.png',
    weight: 1,
    gold: 100
  },
  {
    id: 'stewed_galeclaw',
    name: 'Stewed Galeclaw',
    category: 'Food',
    image: '/images/items/stewed-galeclaw.png',
    weight: 1,
    gold: 920
  },
  {
    id: 'stir_fried_veggies',
    name: 'Stir-fried Veggies',
    category: 'Food',
    image: '/images/items/stir-fried-veggies.png',
    weight: 1,
    gold: 300
  },
  {
    id: 'strange_juice',
    name: 'Strange Juice',
    category: 'Food',
    image: '/images/items/strange-juice.png',
    weight: 0,
    gold: 40000
  },
  {
    id: 'suspicious_juice',
    name: 'Suspicious Juice',
    category: 'Food',
    image: '/images/items/suspicious-juice.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'tomato',
    name: 'Tomato',
    category: 'Food',
    image: '/images/items/tomato.png',
    weight: 1,
    gold: 150
  },
  {
    id: 'wheat',
    name: 'Wheat',
    category: 'Food',
    image: '/images/items/wheat.png',
    weight: 0,
    gold: 100
  },
  {
    id: 'wine',
    name: 'Wine',
    category: 'Food',
    image: '/images/items/wine.png',
    weight: 2,
    gold: 100
  },
  {
    id: 'antibiotic_good',
    name: 'Antibiotic_Good',
    category: 'Consumable',
    image: '/images/items/antibiotic-good.png',
    weight: 1,
    gold: 10
  },
  {
    id: 'antibiotic_normal',
    name: 'Antibiotic_Normal',
    category: 'Consumable',
    image: '/images/items/antibiotic-normal.png',
    weight: 1,
    gold: 10
  },
  {
    id: 'antibiotic_super',
    name: 'Antibiotic_Super',
    category: 'Consumable',
    image: '/images/items/antibiotic-super.png',
    weight: 1,
    gold: 10
  },
  {
    id: 'copper_key',
    name: 'Copper Key',
    category: 'Consumable',
    image: '/images/items/copper-key.png',
    weight: 0,
    gold: 1
  },
  {
    id: 'dark_skill_fruit_dark_laser',
    name: 'Dark Skill Fruit: Dark Laser',
    category: 'Consumable',
    image: '/images/items/dark-skill-fruit-dark-laser.png',
    weight: 0,
    gold: 5000
  },
  {
    id: 'dark_skill_fruit_nightmare_ball',
    name: 'Dark Skill Fruit: Nightmare Ball',
    category: 'Consumable',
    image: '/images/items/dark-skill-fruit-nightmare-ball.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'dark_skill_fruit_poison_blast',
    name: 'Dark Skill Fruit: Poison Blast',
    category: 'Consumable',
    image: '/images/items/dark-skill-fruit-poison-blast.png',
    weight: 0,
    gold: 1500
  },
  {
    id: 'dark_skill_fruit_psycho_gravity',
    name: 'Dark Skill Fruit: Psycho Gravity',
    category: 'Consumable',
    image: '/images/items/dark-skill-fruit-psycho-gravity.png',
    weight: 0,
    gold: 3500
  },
  {
    id: 'dark_skill_fruit_shadow_burst',
    name: 'Dark Skill Fruit: Shadow Burst',
    category: 'Consumable',
    image: '/images/items/dark-skill-fruit-shadow-burst.png',
    weight: 0,
    gold: 1000
  },
  {
    id: 'dark_skill_fruit_spirit_flame',
    name: 'Dark Skill Fruit: Spirit Flame',
    category: 'Consumable',
    image: '/images/items/dark-skill-fruit-spirit-flame.png',
    weight: 0,
    gold: 2000
  },
  {
    id: 'dragon_skill_fruit_draconic_breath',
    name: 'Dragon Skill Fruit: Draconic Breath',
    category: 'Consumable',
    image: '/images/items/dragon-skill-fruit-draconic-breath.png',
    weight: 0,
    gold: 4000
  },
  {
    id: 'dragon_skill_fruit_dragon_burst',
    name: 'Dragon Skill Fruit: Dragon Burst',
    category: 'Consumable',
    image: '/images/items/dragon-skill-fruit-dragon-burst.png',
    weight: 0,
    gold: 3000
  },
  {
    id: 'dragon_skill_fruit_dragon_cannon',
    name: 'Dragon Skill Fruit: Dragon Cannon',
    category: 'Consumable',
    image: '/images/items/dragon-skill-fruit-dragon-cannon.png',
    weight: 0,
    gold: 2000
  },
  {
    id: 'dragon_skill_fruit_dragon_meteor',
    name: 'Dragon Skill Fruit: Dragon Meteor',
    category: 'Consumable',
    image: '/images/items/dragon-skill-fruit-dragon-meteor.png',
    weight: 0,
    gold: 5000
  },
  {
    id: 'earth_skill_fruit_rock_lance',
    name: 'Earth Skill Fruit: Rock Lance',
    category: 'Consumable',
    image: '/images/items/earth-skill-fruit-rock-lance.png',
    weight: 0,
    gold: 5000
  },
  {
    id: 'earth_skill_fruit_sand_blast',
    name: 'Earth Skill Fruit: Sand Blast',
    category: 'Consumable',
    image: '/images/items/earth-skill-fruit-sand-blast.png',
    weight: 0,
    gold: 1500
  },
  {
    id: 'earth_skill_fruit_sand_tornado',
    name: 'Earth Skill Fruit: Sand Tornado',
    category: 'Consumable',
    image: '/images/items/earth-skill-fruit-sand-tornado.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'earth_skill_fruit_stone_blast',
    name: 'Earth Skill Fruit: Stone Blast',
    category: 'Consumable',
    image: '/images/items/earth-skill-fruit-stone-blast.png',
    weight: 0,
    gold: 2000
  },
  {
    id: 'earth_skill_fruit_stone_cannon',
    name: 'Earth Skill Fruit: Stone Cannon',
    category: 'Consumable',
    image: '/images/items/earth-skill-fruit-stone-cannon.png',
    weight: 0,
    gold: 1000
  },
  {
    id: 'electric_skill_fruit_electric_ball',
    name: 'Electric Skill Fruit: Electric Ball',
    category: 'Consumable',
    image: '/images/items/electric-skill-fruit-electric-ball.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'electric_skill_fruit_lightning_bolt',
    name: 'Electric Skill Fruit: Lightning Bolt',
    category: 'Consumable',
    image: '/images/items/electric-skill-fruit-lightning-bolt.png',
    weight: 0,
    gold: 5000
  },
  {
    id: 'electric_skill_fruit_lightning_streak',
    name: 'Electric Skill Fruit: Lightning Streak',
    category: 'Consumable',
    image: '/images/items/electric-skill-fruit-lightning-streak.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'electric_skill_fruit_lightning_strike',
    name: 'Electric Skill Fruit: Lightning Strike',
    category: 'Consumable',
    image: '/images/items/electric-skill-fruit-lightning-strike.png',
    weight: 0,
    gold: 5000
  },
  {
    id: 'electric_skill_fruit_lock_on_laser',
    name: 'Electric Skill Fruit: Lock-on Laser',
    category: 'Consumable',
    image: '/images/items/electric-skill-fruit-lock-on-laser.png',
    weight: 0,
    gold: 3000
  },
  {
    id: 'electric_skill_fruit_plasma_tornado',
    name: 'Electric Skill Fruit: Plasma Tornado',
    category: 'Consumable',
    image: '/images/items/electric-skill-fruit-plasma-tornado.png',
    weight: 0,
    gold: 2000
  },
  {
    id: 'electric_skill_fruit_shockwave',
    name: 'Electric Skill Fruit: Shockwave',
    category: 'Consumable',
    image: '/images/items/electric-skill-fruit-shockwave.png',
    weight: 0,
    gold: 1000
  },
  {
    id: 'electric_skill_fruit_spark_blast',
    name: 'Electric Skill Fruit: Spark Blast',
    category: 'Consumable',
    image: '/images/items/electric-skill-fruit-spark-blast.png',
    weight: 0,
    gold: 1500
  },
  {
    id: 'electric_skill_fruit_tri_lightning',
    name: 'Electric Skill Fruit: Tri-Lightning',
    category: 'Consumable',
    image: '/images/items/electric-skill-fruit-tri-lightning.png',
    weight: 0,
    gold: 3500
  },
  {
    id: 'fire_skill_fruit_fire_ball',
    name: 'Fire Skill Fruit: Fire Ball',
    category: 'Consumable',
    image: '/images/items/fire-skill-fruit-fire-ball.png',
    weight: 0,
    gold: 5000
  },
  {
    id: 'fire_skill_fruit_flare_arrow',
    name: 'Fire Skill Fruit: Flare Arrow',
    category: 'Consumable',
    image: '/images/items/fire-skill-fruit-flare-arrow.png',
    weight: 0,
    gold: 1500
  },
  {
    id: 'fire_skill_fruit_flare_storm',
    name: 'Fire Skill Fruit: Flare Storm',
    category: 'Consumable',
    image: '/images/items/fire-skill-fruit-flare-storm.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'fire_skill_fruit_ignis_blast',
    name: 'Fire Skill Fruit: Ignis Blast',
    category: 'Consumable',
    image: '/images/items/fire-skill-fruit-ignis-blast.png',
    weight: 0,
    gold: 1000
  },
  {
    id: 'fire_skill_fruit_ignis_breath',
    name: 'Fire Skill Fruit: Ignis Breath',
    category: 'Consumable',
    image: '/images/items/fire-skill-fruit-ignis-breath.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'fire_skill_fruit_ignis_rage',
    name: 'Fire Skill Fruit: Ignis Rage',
    category: 'Consumable',
    image: '/images/items/fire-skill-fruit-ignis-rage.png',
    weight: 0,
    gold: 4000
  },
  {
    id: 'fire_skill_fruit_spirit_fire',
    name: 'Fire Skill Fruit: Spirit Fire',
    category: 'Consumable',
    image: '/images/items/fire-skill-fruit-spirit-fire.png',
    weight: 0,
    gold: 2000
  },
  {
    id: 'future_technical_manual',
    name: 'Future Technical Manual',
    category: 'Consumable',
    image: '/images/items/future-technical-manual.png',
    weight: 0,
    gold: 1
  },
  {
    id: 'gold_key',
    name: 'Gold Key',
    category: 'Consumable',
    image: '/images/items/gold-key.png',
    weight: 0,
    gold: 1
  },
  {
    id: 'grass_skill_fruit_grass_tornado',
    name: 'Grass Skill Fruit: Grass Tornado',
    category: 'Consumable',
    image: '/images/items/grass-skill-fruit-grass-tornado.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'grass_skill_fruit_seed_machine_gun',
    name: 'Grass Skill Fruit: Seed Machine Gun',
    category: 'Consumable',
    image: '/images/items/grass-skill-fruit-seed-machine-gun.png',
    weight: 0,
    gold: 1500
  },
  {
    id: 'grass_skill_fruit_seed_mine',
    name: 'Grass Skill Fruit: Seed Mine',
    category: 'Consumable',
    image: '/images/items/grass-skill-fruit-seed-mine.png',
    weight: 0,
    gold: 2000
  },
  {
    id: 'grass_skill_fruit_solar_blast',
    name: 'Grass Skill Fruit: Solar Blast',
    category: 'Consumable',
    image: '/images/items/grass-skill-fruit-solar-blast.png',
    weight: 0,
    gold: 5000
  },
  {
    id: 'grass_skill_fruit_spine_vine',
    name: 'Grass Skill Fruit: Spine Vine',
    category: 'Consumable',
    image: '/images/items/grass-skill-fruit-spine-vine.png',
    weight: 0,
    gold: 3000
  },
  {
    id: 'grass_skill_fruit_wind_cutter',
    name: 'Grass Skill Fruit: Wind Cutter',
    category: 'Consumable',
    image: '/images/items/grass-skill-fruit-wind-cutter.png',
    weight: 0,
    gold: 1000
  },
  {
    id: 'high_grade_technical_manual',
    name: 'High Grade Technical Manual',
    category: 'Consumable',
    image: '/images/items/high-grade-technical-manual.png',
    weight: 0,
    gold: 1
  },
  {
    id: 'ice_skill_fruit_blizzard_spike',
    name: 'Ice Skill Fruit: Blizzard Spike',
    category: 'Consumable',
    image: '/images/items/ice-skill-fruit-blizzard-spike.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'ice_skill_fruit_cryst_breath',
    name: 'Ice Skill Fruit: Cryst Breath',
    category: 'Consumable',
    image: '/images/items/ice-skill-fruit-cryst-breath.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'ice_skill_fruit_ice_missile',
    name: 'Ice Skill Fruit: Ice Missile',
    category: 'Consumable',
    image: '/images/items/ice-skill-fruit-ice-missile.png',
    weight: 0,
    gold: 1000
  },
  {
    id: 'ice_skill_fruit_iceberg',
    name: 'Ice Skill Fruit: Iceberg',
    category: 'Consumable',
    image: '/images/items/ice-skill-fruit-iceberg.png',
    weight: 0,
    gold: 3000
  },
  {
    id: 'ice_skill_fruit_icicle_cutter',
    name: 'Ice Skill Fruit: Icicle Cutter',
    category: 'Consumable',
    image: '/images/items/ice-skill-fruit-icicle-cutter.png',
    weight: 0,
    gold: 3000
  },
  {
    id: 'innovative_technical_manual',
    name: 'Innovative Technical Manual',
    category: 'Consumable',
    image: '/images/items/innovative-technical-manual.png',
    weight: 0,
    gold: 1
  },
  {
    id: 'repair_kit',
    name: 'Repair Kit',
    category: 'Consumable',
    image: '/images/items/repair-kit.png',
    weight: 1,
    gold: 200
  },
  {
    id: 'silver_key',
    name: 'Silver Key',
    category: 'Consumable',
    image: '/images/items/silver-key.png',
    weight: 0,
    gold: 1
  },
  {
    id: 'skill_fruit_air_cannon',
    name: 'Skill Fruit: Air Cannon',
    category: 'Consumable',
    image: '/images/items/skill-fruit-air-cannon.png',
    weight: 0,
    gold: 1500
  },
  {
    id: 'skill_fruit_implode',
    name: 'Skill Fruit: Implode',
    category: 'Consumable',
    image: '/images/items/skill-fruit-implode.png',
    weight: 0,
    gold: 5000
  },
  {
    id: 'skill_fruit_pal_blast',
    name: 'Skill Fruit: Pal Blast',
    category: 'Consumable',
    image: '/images/items/skill-fruit-pal-blast.png',
    weight: 0,
    gold: 5000
  },
  {
    id: 'skill_fruit_power_bomb',
    name: 'Skill Fruit: Power Bomb',
    category: 'Consumable',
    image: '/images/items/skill-fruit-power-bomb.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'skill_fruit_power_shot',
    name: 'Skill Fruit: Power Shot',
    category: 'Consumable',
    image: '/images/items/skill-fruit-power-shot.png',
    weight: 0,
    gold: 1000
  },
  {
    id: 'water_skill_fruit_acid_rain',
    name: 'Water Skill Fruit: Acid Rain',
    category: 'Consumable',
    image: '/images/items/water-skill-fruit-acid-rain.png',
    weight: 0,
    gold: 3000
  },
  {
    id: 'water_skill_fruit_aqua_burst',
    name: 'Water Skill Fruit: Aqua Burst',
    category: 'Consumable',
    image: '/images/items/water-skill-fruit-aqua-burst.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'water_skill_fruit_aqua_gun',
    name: 'Water Skill Fruit: Aqua Gun',
    category: 'Consumable',
    image: '/images/items/water-skill-fruit-aqua-gun.png',
    weight: 0,
    gold: 1000
  },
  {
    id: 'water_skill_fruit_bubble_blast',
    name: 'Water Skill Fruit: Bubble Blast',
    category: 'Consumable',
    image: '/images/items/water-skill-fruit-bubble-blast.png',
    weight: 0,
    gold: 2000
  },
  {
    id: 'water_skill_fruit_hydro_jet',
    name: 'Water Skill Fruit: Hydro Jet',
    category: 'Consumable',
    image: '/images/items/water-skill-fruit-hydro-jet.png',
    weight: 0,
    gold: 1500
  },
  {
    id: 'water_skill_fruit_hydro_laser',
    name: 'Water Skill Fruit: Hydro Laser',
    category: 'Consumable',
    image: '/images/items/water-skill-fruit-hydro-laser.png',
    weight: 0,
    gold: 5000
  },
  {
    id: '5_blueprints_of_long_eared_headband',
    name: '5 Blueprints of Long-eared Headband',
    category: 'Schematic',
    image: '/images/items/5-blueprints-of-long-eared-headband.png',
    weight: 0,
    gold: 2500
  },
  {
    id: '5_blueprints_of_naemochi_hat',
    name: '5 Blueprints of Naemochi Hat',
    category: 'Schematic',
    image: '/images/items/5-blueprints-of-naemochi-hat.png',
    weight: 0,
    gold: 2500
  },
  {
    id: '5_diagrams_of_agricultural_hat',
    name: '5 Diagrams of Agricultural Hat',
    category: 'Schematic',
    image: '/images/items/5-diagrams-of-agricultural-hat.png',
    weight: 0,
    gold: 2500
  },
  {
    id: '5_schematic_diagrams_of_the_silk_hat',
    name: '5 Schematic Diagrams of the Silk Hat',
    category: 'Schematic',
    image: '/images/items/5-schematic-diagrams-of-the-silk-hat.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'assault_rifle_schematic_1',
    name: 'Assault Rifle Schematic 1',
    category: 'Schematic',
    image: '/images/items/assault-rifle-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'assault_rifle_schematic_2',
    name: 'Assault Rifle Schematic 2',
    category: 'Schematic',
    image: '/images/items/assault-rifle-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'assault_rifle_schematic_3',
    name: 'Assault Rifle Schematic 3',
    category: 'Schematic',
    image: '/images/items/assault-rifle-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'assault_rifle_schematic_4',
    name: 'Assault Rifle Schematic 4',
    category: 'Schematic',
    description: 'Legendary schematic for crafting a powerful Assault Rifle.',
    image: '/images/items/assault-rifle-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'blueprint_5_of_university_hat',
    name: 'Blueprint 5 of University Hat',
    category: 'Schematic',
    image: '/images/items/blueprint-5-of-university-hat.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'blueprint_of_bowler_hat_5',
    name: 'Blueprint of Bowler Hat 5',
    category: 'Schematic',
    image: '/images/items/blueprint-of-bowler-hat-5.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'blueprint_of_capppen_hat_5',
    name: 'Blueprint of Capppen Hat 5',
    category: 'Schematic',
    image: '/images/items/blueprint-of-capppen-hat-5.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'blueprint_of_exploration_hat_5',
    name: 'Blueprint of Exploration Hat 5',
    category: 'Schematic',
    image: '/images/items/blueprint-of-exploration-hat-5.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'blueprint_of_helmet_5',
    name: 'Blueprint of Helmet 5',
    category: 'Schematic',
    image: '/images/items/blueprint-of-helmet-5.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'blueprint_of_soft_hat_5',
    name: 'Blueprint of Soft Hat 5',
    category: 'Schematic',
    image: '/images/items/blueprint-of-soft-hat-5.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'blueprint_of_the_king_s_crown_5',
    name: 'Blueprint of the King\'s Crown 5',
    category: 'Schematic',
    image: '/images/items/blueprint-of-the-king-s-crown-5.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'blueprint_of_the_tricorn_hat_5',
    name: 'Blueprint of the Tricorn Hat 5',
    category: 'Schematic',
    image: '/images/items/blueprint-of-the-tricorn-hat-5.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'bowler_hat_schematic_1',
    name: 'Bowler Hat Schematic 1',
    category: 'Schematic',
    image: '/images/items/bowler-hat-schematic-1.png',
    weight: 0,
    gold: 500
  },
  {
    id: 'bowler_hat_schematic_2',
    name: 'Bowler Hat Schematic 2',
    category: 'Schematic',
    image: '/images/items/bowler-hat-schematic-2.png',
    weight: 0,
    gold: 800
  },
  {
    id: 'bowler_hat_schematic_3',
    name: 'Bowler Hat Schematic 3',
    category: 'Schematic',
    image: '/images/items/bowler-hat-schematic-3.png',
    weight: 0,
    gold: 1300
  },
  {
    id: 'bowler_hat_schematic_4',
    name: 'Bowler Hat Schematic 4',
    category: 'Schematic',
    image: '/images/items/bowler-hat-schematic-4.png',
    weight: 0,
    gold: 1800
  },
  {
    id: 'cloth_outfit_schematic_1',
    name: 'Cloth Outfit Schematic 1',
    category: 'Schematic',
    image: '/images/items/cloth-outfit-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'cloth_outfit_schematic_2',
    name: 'Cloth Outfit Schematic 2',
    category: 'Schematic',
    image: '/images/items/cloth-outfit-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'cloth_outfit_schematic_3',
    name: 'Cloth Outfit Schematic 3',
    category: 'Schematic',
    image: '/images/items/cloth-outfit-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'cloth_outfit_schematic_4',
    name: 'Cloth Outfit Schematic 4',
    category: 'Schematic',
    image: '/images/items/cloth-outfit-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'cold_resistant_metal_armor_schematic_1',
    name: 'Cold Resistant Metal Armor Schematic 1',
    category: 'Schematic',
    image: '/images/items/cold-resistant-metal-armor-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'cold_resistant_metal_armor_schematic_2',
    name: 'Cold Resistant Metal Armor Schematic 2',
    category: 'Schematic',
    image: '/images/items/cold-resistant-metal-armor-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'cold_resistant_metal_armor_schematic_3',
    name: 'Cold Resistant Metal Armor Schematic 3',
    category: 'Schematic',
    image: '/images/items/cold-resistant-metal-armor-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'cold_resistant_metal_armor_schematic_4',
    name: 'Cold Resistant Metal Armor Schematic 4',
    category: 'Schematic',
    image: '/images/items/cold-resistant-metal-armor-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'cold_resistant_pal_metal_armor_schematic_1',
    name: 'Cold Resistant Pal Metal Armor Schematic 1',
    category: 'Schematic',
    image: '/images/items/cold-resistant-pal-metal-armor-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'cold_resistant_pal_metal_armor_schematic_2',
    name: 'Cold Resistant Pal Metal Armor Schematic 2',
    category: 'Schematic',
    image: '/images/items/cold-resistant-pal-metal-armor-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'cold_resistant_pal_metal_armor_schematic_3',
    name: 'Cold Resistant Pal Metal Armor Schematic 3',
    category: 'Schematic',
    image: '/images/items/cold-resistant-pal-metal-armor-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'cold_resistant_pal_metal_armor_schematic_4',
    name: 'Cold Resistant Pal Metal Armor Schematic 4',
    category: 'Schematic',
    image: '/images/items/cold-resistant-pal-metal-armor-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'cold_resistant_pelt_armor_schematic_1',
    name: 'Cold Resistant Pelt Armor Schematic 1',
    category: 'Schematic',
    image: '/images/items/cold-resistant-pelt-armor-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'cold_resistant_pelt_armor_schematic_2',
    name: 'Cold Resistant Pelt Armor Schematic 2',
    category: 'Schematic',
    image: '/images/items/cold-resistant-pelt-armor-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'cold_resistant_pelt_armor_schematic_3',
    name: 'Cold Resistant Pelt Armor Schematic 3',
    category: 'Schematic',
    image: '/images/items/cold-resistant-pelt-armor-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'cold_resistant_pelt_armor_schematic_4',
    name: 'Cold Resistant Pelt Armor Schematic 4',
    category: 'Schematic',
    image: '/images/items/cold-resistant-pelt-armor-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'cold_resistant_refined_metal_armor_schematic_1',
    name: 'Cold Resistant Refined Metal Armor Schematic 1',
    category: 'Schematic',
    image: '/images/items/cold-resistant-refined-metal-armor-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'cold_resistant_refined_metal_armor_schematic_2',
    name: 'Cold Resistant Refined Metal Armor Schematic 2',
    category: 'Schematic',
    image: '/images/items/cold-resistant-refined-metal-armor-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'cold_resistant_refined_metal_armor_schematic_3',
    name: 'Cold Resistant Refined Metal Armor Schematic 3',
    category: 'Schematic',
    image: '/images/items/cold-resistant-refined-metal-armor-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'cold_resistant_refined_metal_armor_schematic_4',
    name: 'Cold Resistant Refined Metal Armor Schematic 4',
    category: 'Schematic',
    image: '/images/items/cold-resistant-refined-metal-armor-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'crossbow_schematic_1',
    name: 'Crossbow Schematic 1',
    category: 'Schematic',
    image: '/images/items/crossbow-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'crossbow_schematic_2',
    name: 'Crossbow Schematic 2',
    category: 'Schematic',
    image: '/images/items/crossbow-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'crossbow_schematic_3',
    name: 'Crossbow Schematic 3',
    category: 'Schematic',
    image: '/images/items/crossbow-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'crossbow_schematic_4',
    name: 'Crossbow Schematic 4',
    category: 'Schematic',
    image: '/images/items/crossbow-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'design_blueprint_of_clemence_hat_5',
    name: 'Design Blueprint of Clemence Hat 5',
    category: 'Schematic',
    image: '/images/items/design-blueprint-of-clemence-hat-5.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'design_plan_5_for_the_crutchli_hat',
    name: 'Design Plan 5 for the Crutchli Hat',
    category: 'Schematic',
    image: '/images/items/design-plan-5-for-the-crutchli-hat.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'design_of_witch_hat_no_5',
    name: 'Design of Witch Hat No. 5',
    category: 'Schematic',
    image: '/images/items/design-of-witch-hat-no-5.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'exploration_cap_schematic_1',
    name: 'Exploration Cap Schematic 1',
    category: 'Schematic',
    image: '/images/items/exploration-cap-schematic-1.png',
    weight: 0,
    gold: 500
  },
  {
    id: 'exploration_cap_schematic_2',
    name: 'Exploration Cap Schematic 2',
    category: 'Schematic',
    image: '/images/items/exploration-cap-schematic-2.png',
    weight: 0,
    gold: 800
  },
  {
    id: 'exploration_cap_schematic_3',
    name: 'Exploration Cap Schematic 3',
    category: 'Schematic',
    image: '/images/items/exploration-cap-schematic-3.png',
    weight: 0,
    gold: 1300
  },
  {
    id: 'exploration_cap_schematic_4',
    name: 'Exploration Cap Schematic 4',
    category: 'Schematic',
    image: '/images/items/exploration-cap-schematic-4.png',
    weight: 0,
    gold: 1800
  },
  {
    id: 'farming_hat_schematic_1',
    name: 'Farming Hat Schematic 1',
    category: 'Schematic',
    image: '/images/items/farming-hat-schematic-1.png',
    weight: 0,
    gold: 500
  },
  {
    id: 'farming_hat_schematic_2',
    name: 'Farming Hat Schematic 2',
    category: 'Schematic',
    image: '/images/items/farming-hat-schematic-2.png',
    weight: 0,
    gold: 800
  },
  {
    id: 'farming_hat_schematic_3',
    name: 'Farming Hat Schematic 3',
    category: 'Schematic',
    image: '/images/items/farming-hat-schematic-3.png',
    weight: 0,
    gold: 1300
  },
  {
    id: 'farming_hat_schematic_4',
    name: 'Farming Hat Schematic 4',
    category: 'Schematic',
    image: '/images/items/farming-hat-schematic-4.png',
    weight: 0,
    gold: 1800
  },
  {
    id: 'feathered_hair_band_schematic_1',
    name: 'Feathered Hair Band Schematic 1',
    category: 'Schematic',
    image: '/images/items/feathered-hair-band-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'feathered_hair_band_schematic_2',
    name: 'Feathered Hair Band Schematic 2',
    category: 'Schematic',
    image: '/images/items/feathered-hair-band-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'feathered_hair_band_schematic_3',
    name: 'Feathered Hair Band Schematic 3',
    category: 'Schematic',
    image: '/images/items/feathered-hair-band-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'feathered_hair_band_schematic_4',
    name: 'Feathered Hair Band Schematic 4',
    category: 'Schematic',
    image: '/images/items/feathered-hair-band-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'golden_crown_schematic_1',
    name: 'Golden Crown Schematic 1',
    category: 'Schematic',
    image: '/images/items/golden-crown-schematic-1.png',
    weight: 0,
    gold: 500
  },
  {
    id: 'golden_crown_schematic_2',
    name: 'Golden Crown Schematic 2',
    category: 'Schematic',
    image: '/images/items/golden-crown-schematic-2.png',
    weight: 0,
    gold: 800
  },
  {
    id: 'golden_crown_schematic_3',
    name: 'Golden Crown Schematic 3',
    category: 'Schematic',
    image: '/images/items/golden-crown-schematic-3.png',
    weight: 0,
    gold: 1300
  },
  {
    id: 'golden_crown_schematic_4',
    name: 'Golden Crown Schematic 4',
    category: 'Schematic',
    image: '/images/items/golden-crown-schematic-4.png',
    weight: 0,
    gold: 1800
  },
  {
    id: 'graduate_cap_schematic_1',
    name: 'Graduate Cap Schematic 1',
    category: 'Schematic',
    image: '/images/items/graduate-cap-schematic-1.png',
    weight: 0,
    gold: 500
  },
  {
    id: 'graduate_cap_schematic_2',
    name: 'Graduate Cap Schematic 2',
    category: 'Schematic',
    image: '/images/items/graduate-cap-schematic-2.png',
    weight: 0,
    gold: 800
  },
  {
    id: 'graduate_cap_schematic_3',
    name: 'Graduate Cap Schematic 3',
    category: 'Schematic',
    image: '/images/items/graduate-cap-schematic-3.png',
    weight: 0,
    gold: 1300
  },
  {
    id: 'graduate_cap_schematic_4',
    name: 'Graduate Cap Schematic 4',
    category: 'Schematic',
    image: '/images/items/graduate-cap-schematic-4.png',
    weight: 0,
    gold: 1800
  },
  {
    id: 'grinning_curly_hat_blueprint_5',
    name: 'Grinning Curly Hat Blueprint 5',
    category: 'Schematic',
    image: '/images/items/grinning-curly-hat-blueprint-5.png',
    weight: 0,
    gold: 2500
  },
  {
    id: 'grinning_tocotoco_cap_schematic_1',
    name: 'Grinning Tocotoco Cap Schematic 1',
    category: 'Schematic',
    image: '/images/items/grinning-tocotoco-cap-schematic-1.png',
    weight: 0,
    gold: 500
  },
  {
    id: 'grinning_tocotoco_cap_schematic_2',
    name: 'Grinning Tocotoco Cap Schematic 2',
    category: 'Schematic',
    image: '/images/items/grinning-tocotoco-cap-schematic-2.png',
    weight: 0,
    gold: 800
  },
  {
    id: 'grinning_tocotoco_cap_schematic_3',
    name: 'Grinning Tocotoco Cap Schematic 3',
    category: 'Schematic',
    image: '/images/items/grinning-tocotoco-cap-schematic-3.png',
    weight: 0,
    gold: 1300
  },
  {
    id: 'grinning_tocotoco_cap_schematic_4',
    name: 'Grinning Tocotoco Cap Schematic 4',
    category: 'Schematic',
    image: '/images/items/grinning-tocotoco-cap-schematic-4.png',
    weight: 0,
    gold: 1800
  },
  {
    id: 'gumoss_cap_schematic_1',
    name: 'Gumoss Cap Schematic 1',
    category: 'Schematic',
    image: '/images/items/gumoss-cap-schematic-1.png',
    weight: 0,
    gold: 500
  },
  {
    id: 'gumoss_cap_schematic_2',
    name: 'Gumoss Cap Schematic 2',
    category: 'Schematic',
    image: '/images/items/gumoss-cap-schematic-2.png',
    weight: 0,
    gold: 800
  },
  {
    id: 'gumoss_cap_schematic_3',
    name: 'Gumoss Cap Schematic 3',
    category: 'Schematic',
    image: '/images/items/gumoss-cap-schematic-3.png',
    weight: 0,
    gold: 1300
  },
  {
    id: 'gumoss_cap_schematic_4',
    name: 'Gumoss Cap Schematic 4',
    category: 'Schematic',
    image: '/images/items/gumoss-cap-schematic-4.png',
    weight: 0,
    gold: 1800
  },
  {
    id: 'handgun_schematic_1',
    name: 'Handgun Schematic 1',
    category: 'Schematic',
    image: '/images/items/handgun-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'handgun_schematic_2',
    name: 'Handgun Schematic 2',
    category: 'Schematic',
    image: '/images/items/handgun-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'handgun_schematic_3',
    name: 'Handgun Schematic 3',
    category: 'Schematic',
    image: '/images/items/handgun-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'handgun_schematic_4',
    name: 'Handgun Schematic 4',
    category: 'Schematic',
    image: '/images/items/handgun-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'heat_resistant_metal_armor_schematic_1',
    name: 'Heat Resistant Metal Armor Schematic 1',
    category: 'Schematic',
    image: '/images/items/heat-resistant-metal-armor-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'heat_resistant_metal_armor_schematic_2',
    name: 'Heat Resistant Metal Armor Schematic 2',
    category: 'Schematic',
    image: '/images/items/heat-resistant-metal-armor-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'heat_resistant_metal_armor_schematic_3',
    name: 'Heat Resistant Metal Armor Schematic 3',
    category: 'Schematic',
    image: '/images/items/heat-resistant-metal-armor-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'heat_resistant_metal_armor_schematic_4',
    name: 'Heat Resistant Metal Armor Schematic 4',
    category: 'Schematic',
    image: '/images/items/heat-resistant-metal-armor-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'heat_resistant_pal_metal_armor_schematic_1',
    name: 'Heat Resistant Pal Metal Armor Schematic 1',
    category: 'Schematic',
    image: '/images/items/heat-resistant-pal-metal-armor-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'heat_resistant_pal_metal_armor_schematic_2',
    name: 'Heat Resistant Pal Metal Armor Schematic 2',
    category: 'Schematic',
    image: '/images/items/heat-resistant-pal-metal-armor-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'heat_resistant_pal_metal_armor_schematic_3',
    name: 'Heat Resistant Pal Metal Armor Schematic 3',
    category: 'Schematic',
    image: '/images/items/heat-resistant-pal-metal-armor-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'heat_resistant_pal_metal_armor_schematic_4',
    name: 'Heat Resistant Pal Metal Armor Schematic 4',
    category: 'Schematic',
    image: '/images/items/heat-resistant-pal-metal-armor-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'heat_resistant_pelt_armor_schematic_1',
    name: 'Heat Resistant Pelt Armor Schematic 1',
    category: 'Schematic',
    image: '/images/items/heat-resistant-pelt-armor-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'heat_resistant_pelt_armor_schematic_2',
    name: 'Heat Resistant Pelt Armor Schematic 2',
    category: 'Schematic',
    image: '/images/items/heat-resistant-pelt-armor-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'heat_resistant_pelt_armor_schematic_3',
    name: 'Heat Resistant Pelt Armor Schematic 3',
    category: 'Schematic',
    image: '/images/items/heat-resistant-pelt-armor-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'heat_resistant_pelt_armor_schematic_4',
    name: 'Heat Resistant Pelt Armor Schematic 4',
    category: 'Schematic',
    image: '/images/items/heat-resistant-pelt-armor-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'heat_resistant_refined_metal_armor_schematic_1',
    name: 'Heat Resistant Refined Metal Armor Schematic 1',
    category: 'Schematic',
    image: '/images/items/heat-resistant-refined-metal-armor-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'heat_resistant_refined_metal_armor_schematic_2',
    name: 'Heat Resistant Refined Metal Armor Schematic 2',
    category: 'Schematic',
    image: '/images/items/heat-resistant-refined-metal-armor-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'heat_resistant_refined_metal_armor_schematic_3',
    name: 'Heat Resistant Refined Metal Armor Schematic 3',
    category: 'Schematic',
    image: '/images/items/heat-resistant-refined-metal-armor-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'heat_resistant_refined_metal_armor_schematic_4',
    name: 'Heat Resistant Refined Metal Armor Schematic 4',
    category: 'Schematic',
    image: '/images/items/heat-resistant-refined-metal-armor-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'helmet_schematic_1',
    name: 'Helmet Schematic 1',
    category: 'Schematic',
    image: '/images/items/helmet-schematic-1.png',
    weight: 0,
    gold: 500
  },
  {
    id: 'helmet_schematic_2',
    name: 'Helmet Schematic 2',
    category: 'Schematic',
    image: '/images/items/helmet-schematic-2.png',
    weight: 0,
    gold: 800
  },
  {
    id: 'helmet_schematic_3',
    name: 'Helmet Schematic 3',
    category: 'Schematic',
    image: '/images/items/helmet-schematic-3.png',
    weight: 0,
    gold: 1300
  },
  {
    id: 'helmet_schematic_4',
    name: 'Helmet Schematic 4',
    category: 'Schematic',
    image: '/images/items/helmet-schematic-4.png',
    weight: 0,
    gold: 1800
  },
  {
    id: 'katress_cap_schematic_1',
    name: 'Katress Cap Schematic 1',
    category: 'Schematic',
    image: '/images/items/katress-cap-schematic-1.png',
    weight: 0,
    gold: 500
  },
  {
    id: 'katress_cap_schematic_2',
    name: 'Katress Cap Schematic 2',
    category: 'Schematic',
    image: '/images/items/katress-cap-schematic-2.png',
    weight: 0,
    gold: 800
  },
  {
    id: 'katress_cap_schematic_3',
    name: 'Katress Cap Schematic 3',
    category: 'Schematic',
    image: '/images/items/katress-cap-schematic-3.png',
    weight: 0,
    gold: 1300
  },
  {
    id: 'katress_cap_schematic_4',
    name: 'Katress Cap Schematic 4',
    category: 'Schematic',
    image: '/images/items/katress-cap-schematic-4.png',
    weight: 0,
    gold: 1800
  },
  {
    id: 'long_eared_headband_schematic_1',
    name: 'Long-eared Headband Schematic 1',
    category: 'Schematic',
    image: '/images/items/long-eared-headband-schematic-1.png',
    weight: 0,
    gold: 500
  },
  {
    id: 'long_eared_headband_schematic_2',
    name: 'Long-eared Headband Schematic 2',
    category: 'Schematic',
    image: '/images/items/long-eared-headband-schematic-2.png',
    weight: 0,
    gold: 800
  },
  {
    id: 'long_eared_headband_schematic_3',
    name: 'Long-eared Headband Schematic 3',
    category: 'Schematic',
    image: '/images/items/long-eared-headband-schematic-3.png',
    weight: 0,
    gold: 1300
  },
  {
    id: 'long_eared_headband_schematic_4',
    name: 'Long-eared Headband Schematic 4',
    category: 'Schematic',
    image: '/images/items/long-eared-headband-schematic-4.png',
    weight: 0,
    gold: 1800
  },
  {
    id: 'metal_armor_schematic_1',
    name: 'Metal Armor Schematic 1',
    category: 'Schematic',
    image: '/images/items/metal-armor-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'metal_armor_schematic_2',
    name: 'Metal Armor Schematic 2',
    category: 'Schematic',
    image: '/images/items/metal-armor-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'metal_armor_schematic_3',
    name: 'Metal Armor Schematic 3',
    category: 'Schematic',
    image: '/images/items/metal-armor-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'metal_armor_schematic_4',
    name: 'Metal Armor Schematic 4',
    category: 'Schematic',
    image: '/images/items/metal-armor-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'metal_helm_schematic_1',
    name: 'Metal Helm Schematic 1',
    category: 'Schematic',
    image: '/images/items/metal-helm-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'metal_helm_schematic_2',
    name: 'Metal Helm Schematic 2',
    category: 'Schematic',
    image: '/images/items/metal-helm-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'metal_helm_schematic_3',
    name: 'Metal Helm Schematic 3',
    category: 'Schematic',
    image: '/images/items/metal-helm-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'metal_helm_schematic_4',
    name: 'Metal Helm Schematic 4',
    category: 'Schematic',
    image: '/images/items/metal-helm-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'monarch_s_crown_schematic_1',
    name: 'Monarch\'s Crown Schematic 1',
    category: 'Schematic',
    image: '/images/items/monarch-s-crown-schematic-1.png',
    weight: 0,
    gold: 500
  },
  {
    id: 'monarch_s_crown_schematic_2',
    name: 'Monarch\'s Crown Schematic 2',
    category: 'Schematic',
    image: '/images/items/monarch-s-crown-schematic-2.png',
    weight: 0,
    gold: 800
  },
  {
    id: 'monarch_s_crown_schematic_3',
    name: 'Monarch\'s Crown Schematic 3',
    category: 'Schematic',
    image: '/images/items/monarch-s-crown-schematic-3.png',
    weight: 0,
    gold: 1300
  },
  {
    id: 'monarch_s_crown_schematic_4',
    name: 'Monarch\'s Crown Schematic 4',
    category: 'Schematic',
    image: '/images/items/monarch-s-crown-schematic-4.png',
    weight: 0,
    gold: 1800
  },
  {
    id: 'old_bow_schematic_1',
    name: 'Old Bow Schematic 1',
    category: 'Schematic',
    image: '/images/items/old-bow-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'old_bow_schematic_2',
    name: 'Old Bow Schematic 2',
    category: 'Schematic',
    image: '/images/items/old-bow-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'old_bow_schematic_3',
    name: 'Old Bow Schematic 3',
    category: 'Schematic',
    image: '/images/items/old-bow-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'old_bow_schematic_4',
    name: 'Old Bow Schematic 4',
    category: 'Schematic',
    image: '/images/items/old-bow-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'pal_metal_armor_schematic_1',
    name: 'Pal Metal Armor Schematic 1',
    category: 'Schematic',
    image: '/images/items/pal-metal-armor-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'pal_metal_armor_schematic_2',
    name: 'Pal Metal Armor Schematic 2',
    category: 'Schematic',
    image: '/images/items/pal-metal-armor-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'pal_metal_armor_schematic_3',
    name: 'Pal Metal Armor Schematic 3',
    category: 'Schematic',
    image: '/images/items/pal-metal-armor-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'pal_metal_armor_schematic_4',
    name: 'Pal Metal Armor Schematic 4',
    category: 'Schematic',
    image: '/images/items/pal-metal-armor-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'pal_metal_helm_schematic_1',
    name: 'Pal Metal Helm Schematic 1',
    category: 'Schematic',
    image: '/images/items/pal-metal-helm-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'pal_metal_helm_schematic_2',
    name: 'Pal Metal Helm Schematic 2',
    category: 'Schematic',
    image: '/images/items/pal-metal-helm-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'pal_metal_helm_schematic_3',
    name: 'Pal Metal Helm Schematic 3',
    category: 'Schematic',
    image: '/images/items/pal-metal-helm-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'pal_metal_helm_schematic_4',
    name: 'Pal Metal Helm Schematic 4',
    category: 'Schematic',
    image: '/images/items/pal-metal-helm-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'pelt_armor_schematic_1',
    name: 'Pelt Armor Schematic 1',
    category: 'Schematic',
    image: '/images/items/pelt-armor-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'pelt_armor_schematic_2',
    name: 'Pelt Armor Schematic 2',
    category: 'Schematic',
    image: '/images/items/pelt-armor-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'pelt_armor_schematic_3',
    name: 'Pelt Armor Schematic 3',
    category: 'Schematic',
    image: '/images/items/pelt-armor-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'pelt_armor_schematic_4',
    name: 'Pelt Armor Schematic 4',
    category: 'Schematic',
    image: '/images/items/pelt-armor-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'penking_cap_schematic_1',
    name: 'Penking Cap Schematic 1',
    category: 'Schematic',
    image: '/images/items/penking-cap-schematic-1.png',
    weight: 0,
    gold: 500
  },
  {
    id: 'penking_cap_schematic_2',
    name: 'Penking Cap Schematic 2',
    category: 'Schematic',
    image: '/images/items/penking-cap-schematic-2.png',
    weight: 0,
    gold: 800
  },
  {
    id: 'penking_cap_schematic_3',
    name: 'Penking Cap Schematic 3',
    category: 'Schematic',
    image: '/images/items/penking-cap-schematic-3.png',
    weight: 0,
    gold: 1300
  },
  {
    id: 'penking_cap_schematic_4',
    name: 'Penking Cap Schematic 4',
    category: 'Schematic',
    image: '/images/items/penking-cap-schematic-4.png',
    weight: 0,
    gold: 1800
  },
  {
    id: 'pump_action_shotgun_schematic_1',
    name: 'Pump-Action Shotgun Schematic 1',
    category: 'Schematic',
    image: '/images/items/pump-action-shotgun-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'pump_action_shotgun_schematic_2',
    name: 'Pump-Action Shotgun Schematic 2',
    category: 'Schematic',
    image: '/images/items/pump-action-shotgun-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'pump_action_shotgun_schematic_3',
    name: 'Pump-Action Shotgun Schematic 3',
    category: 'Schematic',
    image: '/images/items/pump-action-shotgun-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'pump_action_shotgun_schematic_4',
    name: 'Pump-Action Shotgun Schematic 4',
    category: 'Schematic',
    image: '/images/items/pump-action-shotgun-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'refined_metal_armor_schematic_1',
    name: 'Refined Metal Armor Schematic 1',
    category: 'Schematic',
    image: '/images/items/refined-metal-armor-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'refined_metal_armor_schematic_2',
    name: 'Refined Metal Armor Schematic 2',
    category: 'Schematic',
    image: '/images/items/refined-metal-armor-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'refined_metal_armor_schematic_3',
    name: 'Refined Metal Armor Schematic 3',
    category: 'Schematic',
    image: '/images/items/refined-metal-armor-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'refined_metal_armor_schematic_4',
    name: 'Refined Metal Armor Schematic 4',
    category: 'Schematic',
    image: '/images/items/refined-metal-armor-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'refined_metal_helm_schematic_1',
    name: 'Refined Metal Helm Schematic 1',
    category: 'Schematic',
    image: '/images/items/refined-metal-helm-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'refined_metal_helm_schematic_2',
    name: 'Refined Metal Helm Schematic 2',
    category: 'Schematic',
    image: '/images/items/refined-metal-helm-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'refined_metal_helm_schematic_3',
    name: 'Refined Metal Helm Schematic 3',
    category: 'Schematic',
    image: '/images/items/refined-metal-helm-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'refined_metal_helm_schematic_4',
    name: 'Refined Metal Helm Schematic 4',
    category: 'Schematic',
    image: '/images/items/refined-metal-helm-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'rocket_launcher_schematic_1',
    name: 'Rocket Launcher Schematic 1',
    category: 'Schematic',
    image: '/images/items/rocket-launcher-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'rocket_launcher_schematic_2',
    name: 'Rocket Launcher Schematic 2',
    category: 'Schematic',
    image: '/images/items/rocket-launcher-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'rocket_launcher_schematic_3',
    name: 'Rocket Launcher Schematic 3',
    category: 'Schematic',
    image: '/images/items/rocket-launcher-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'rocket_launcher_schematic_4',
    name: 'Rocket Launcher Schematic 4',
    category: 'Schematic',
    image: '/images/items/rocket-launcher-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'silk_hat_schematic_1',
    name: 'Silk Hat Schematic 1',
    category: 'Schematic',
    image: '/images/items/silk-hat-schematic-1.png',
    weight: 0,
    gold: 500
  },
  {
    id: 'silk_hat_schematic_2',
    name: 'Silk Hat Schematic 2',
    category: 'Schematic',
    image: '/images/items/silk-hat-schematic-2.png',
    weight: 0,
    gold: 800
  },
  {
    id: 'silk_hat_schematic_3',
    name: 'Silk Hat Schematic 3',
    category: 'Schematic',
    image: '/images/items/silk-hat-schematic-3.png',
    weight: 0,
    gold: 1300
  },
  {
    id: 'silk_hat_schematic_4',
    name: 'Silk Hat Schematic 4',
    category: 'Schematic',
    image: '/images/items/silk-hat-schematic-4.png',
    weight: 0,
    gold: 1800
  },
  {
    id: 'soft_hat_schematic_1',
    name: 'Soft Hat Schematic 1',
    category: 'Schematic',
    image: '/images/items/soft-hat-schematic-1.png',
    weight: 0,
    gold: 500
  },
  {
    id: 'soft_hat_schematic_2',
    name: 'Soft Hat Schematic 2',
    category: 'Schematic',
    image: '/images/items/soft-hat-schematic-2.png',
    weight: 0,
    gold: 800
  },
  {
    id: 'soft_hat_schematic_3',
    name: 'Soft Hat Schematic 3',
    category: 'Schematic',
    image: '/images/items/soft-hat-schematic-3.png',
    weight: 0,
    gold: 1300
  },
  {
    id: 'soft_hat_schematic_4',
    name: 'Soft Hat Schematic 4',
    category: 'Schematic',
    image: '/images/items/soft-hat-schematic-4.png',
    weight: 0,
    gold: 1800
  },
  {
    id: 'tocotoco_cap_schematic_1',
    name: 'Tocotoco Cap Schematic 1',
    category: 'Schematic',
    image: '/images/items/tocotoco-cap-schematic-1.png',
    weight: 0,
    gold: 500
  },
  {
    id: 'tocotoco_cap_schematic_2',
    name: 'Tocotoco Cap Schematic 2',
    category: 'Schematic',
    image: '/images/items/tocotoco-cap-schematic-2.png',
    weight: 0,
    gold: 800
  },
  {
    id: 'tocotoco_cap_schematic_3',
    name: 'Tocotoco Cap Schematic 3',
    category: 'Schematic',
    image: '/images/items/tocotoco-cap-schematic-3.png',
    weight: 0,
    gold: 1300
  },
  {
    id: 'tocotoco_cap_schematic_4',
    name: 'Tocotoco Cap Schematic 4',
    category: 'Schematic',
    image: '/images/items/tocotoco-cap-schematic-4.png',
    weight: 0,
    gold: 1800
  },
  {
    id: 'tricorne_schematic_1',
    name: 'Tricorne Schematic 1',
    category: 'Schematic',
    image: '/images/items/tricorne-schematic-1.png',
    weight: 0,
    gold: 500
  },
  {
    id: 'tricorne_schematic_2',
    name: 'Tricorne Schematic 2',
    category: 'Schematic',
    image: '/images/items/tricorne-schematic-2.png',
    weight: 0,
    gold: 800
  },
  {
    id: 'tricorne_schematic_3',
    name: 'Tricorne Schematic 3',
    category: 'Schematic',
    image: '/images/items/tricorne-schematic-3.png',
    weight: 0,
    gold: 1300
  },
  {
    id: 'tricorne_schematic_4',
    name: 'Tricorne Schematic 4',
    category: 'Schematic',
    image: '/images/items/tricorne-schematic-4.png',
    weight: 0,
    gold: 1800
  },
  {
    id: 'tropical_outfit_schematic_1',
    name: 'Tropical Outfit Schematic 1',
    category: 'Schematic',
    image: '/images/items/tropical-outfit-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'tropical_outfit_schematic_2',
    name: 'Tropical Outfit Schematic 2',
    category: 'Schematic',
    image: '/images/items/tropical-outfit-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'tropical_outfit_schematic_3',
    name: 'Tropical Outfit Schematic 3',
    category: 'Schematic',
    image: '/images/items/tropical-outfit-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'tropical_outfit_schematic_4',
    name: 'Tropical Outfit Schematic 4',
    category: 'Schematic',
    image: '/images/items/tropical-outfit-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'tundra_outfit_schematic_1',
    name: 'Tundra Outfit Schematic 1',
    category: 'Schematic',
    image: '/images/items/tundra-outfit-schematic-1.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'tundra_outfit_schematic_2',
    name: 'Tundra Outfit Schematic 2',
    category: 'Schematic',
    image: '/images/items/tundra-outfit-schematic-2.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'tundra_outfit_schematic_3',
    name: 'Tundra Outfit Schematic 3',
    category: 'Schematic',
    image: '/images/items/tundra-outfit-schematic-3.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'tundra_outfit_schematic_4',
    name: 'Tundra Outfit Schematic 4',
    category: 'Schematic',
    image: '/images/items/tundra-outfit-schematic-4.png',
    weight: 0,
    gold: 10000
  },
  {
    id: 'witch_hat_schematic_1',
    name: 'Witch Hat Schematic 1',
    category: 'Schematic',
    image: '/images/items/witch-hat-schematic-1.png',
    weight: 0,
    gold: 500
  },
  {
    id: 'witch_hat_schematic_2',
    name: 'Witch Hat Schematic 2',
    category: 'Schematic',
    image: '/images/items/witch-hat-schematic-2.png',
    weight: 0,
    gold: 800
  },
  {
    id: 'witch_hat_schematic_3',
    name: 'Witch Hat Schematic 3',
    category: 'Schematic',
    image: '/images/items/witch-hat-schematic-3.png',
    weight: 0,
    gold: 1300
  },
  {
    id: 'witch_hat_schematic_4',
    name: 'Witch Hat Schematic 4',
    category: 'Schematic',
    image: '/images/items/witch-hat-schematic-4.png',
    weight: 0,
    gold: 1800
  },
  {
    id: 'giga_glider',
    name: 'Giga Glider',
    category: 'Glider',
    image: '/images/items/giga-glider.png',
    weight: 20,
    gold: 13200
  },
  {
    id: 'hyper_glider',
    name: 'Hyper Glider',
    category: 'Glider',
    image: '/images/items/hyper-glider.png',
    weight: 25,
    gold: 45200
  },
  {
    id: 'mega_glider',
    name: 'Mega Glider',
    category: 'Glider',
    image: '/images/items/mega-glider.png',
    weight: 15,
    gold: 3000
  },
  {
    id: 'normal_parachute',
    name: 'Normal Parachute',
    category: 'Glider',
    image: '/images/items/normal-parachute.png',
    weight: 10,
    gold: 1200
  },
  {
    id: 'aquadon_terra_saddle',
    name: 'Aquadon Terra Saddle',
    category: 'Key Item',
    image: '/images/items/aquadon-terra-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'arsox_saddle',
    name: 'Arsox Saddle',
    category: 'Key Item',
    image: '/images/items/arsox-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'astegon_saddle',
    name: 'Astegon Saddle',
    category: 'Key Item',
    image: '/images/items/astegon-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'average_feed_bag',
    name: 'Average Feed Bag',
    category: 'Key Item',
    image: '/images/items/average-feed-bag.png',
    weight: 0,
    gold: 1
  },
  {
    id: 'azurobe_saddle',
    name: 'Azurobe Saddle',
    category: 'Key Item',
    image: '/images/items/azurobe-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'beakon_saddle',
    name: 'Beakon Saddle',
    category: 'Key Item',
    image: '/images/items/beakon-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'blazamut_saddle',
    name: 'Blazamut Saddle',
    category: 'Key Item',
    image: '/images/items/blazamut-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'blazehowl_saddle',
    name: 'Blazehowl Saddle',
    category: 'Key Item',
    image: '/images/items/blazehowl-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'boltmane_saddle',
    name: 'Boltmane Saddle',
    category: 'Key Item',
    image: '/images/items/boltmane-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'broncherry_saddle',
    name: 'Broncherry Saddle',
    category: 'Key Item',
    image: '/images/items/broncherry-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'celaray_s_gloves',
    name: 'Celaray\'s Gloves',
    category: 'Key Item',
    image: '/images/items/celaray-s-gloves.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'chillet_saddle',
    name: 'Chillet Saddle',
    category: 'Key Item',
    image: '/images/items/chillet-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'daedream_s_necklace',
    name: 'Daedream\'s Necklace',
    category: 'Key Item',
    image: '/images/items/daedream-s-necklace.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'dark_kingferno_saddle',
    name: 'Dark Kingferno Saddle',
    category: 'Key Item',
    image: '/images/items/dark-kingferno-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'dark_pyrin_saddle',
    name: 'Dark Pyrin Saddle',
    category: 'Key Item',
    image: '/images/items/dark-pyrin-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'dazzi_s_necklace',
    name: 'Dazzi\'s Necklace',
    category: 'Key Item',
    image: '/images/items/dazzi-s-necklace.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'digtoise_s_headband',
    name: 'Digtoise\'s Headband',
    category: 'Key Item',
    image: '/images/items/digtoise-s-headband.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'dinossom_lux_saddle',
    name: 'Dinossom Lux Saddle',
    category: 'Key Item',
    image: '/images/items/dinossom-lux-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'dinossom_saddle',
    name: 'Dinossom Saddle',
    category: 'Key Item',
    image: '/images/items/dinossom-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'direhowl_s_saddled_harness',
    name: 'Direhowl\'s Saddled Harness',
    category: 'Key Item',
    image: '/images/items/direhowl-s-saddled-harness.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'dragostrophe_s_shotgun',
    name: 'Dragostrophe\'s Shotgun',
    category: 'Key Item',
    image: '/images/items/dragostrophe-s-shotgun.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'eikthyrdeer_saddle',
    name: 'Eikthyrdeer Saddle',
    category: 'Key Item',
    image: '/images/items/eikthyrdeer-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'eikthyrdeer_terra_saddle',
    name: 'Eikthyrdeer Terra Saddle',
    category: 'Key Item',
    image: '/images/items/eikthyrdeer-terra-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'elphidran_saddle',
    name: 'Elphidran Saddle',
    category: 'Key Item',
    image: '/images/items/elphidran-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'faleris_saddle',
    name: 'Faleris Saddle',
    category: 'Key Item',
    image: '/images/items/faleris-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'fenglope_saddle',
    name: 'Fenglope Saddle',
    category: 'Key Item',
    image: '/images/items/fenglope-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'flopie_s_necklace',
    name: 'Flopie\'s Necklace',
    category: 'Key Item',
    image: '/images/items/flopie-s-necklace.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'foxparks_s_harness',
    name: 'Foxparks\'s Harness',
    category: 'Key Item',
    image: '/images/items/foxparks-s-harness.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'frostallion_noct_saddle',
    name: 'Frostallion Noct Saddle',
    category: 'Key Item',
    image: '/images/items/frostallion-noct-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'frostallion_saddle',
    name: 'Frostallion Saddle',
    category: 'Key Item',
    image: '/images/items/frostallion-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'galeclaw_s_gloves',
    name: 'Galeclaw\'s Gloves',
    category: 'Key Item',
    image: '/images/items/galeclaw-s-gloves.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'giant_feed_bag',
    name: 'Giant Feed Bag',
    category: 'Key Item',
    image: '/images/items/giant-feed-bag.png',
    weight: 0,
    gold: 1
  },
  {
    id: 'grintale_saddle',
    name: 'Grintale Saddle',
    category: 'Key Item',
    image: '/images/items/grintale-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'grizzbolt_s_minigun',
    name: 'Grizzbolt\'s Minigun',
    category: 'Key Item',
    image: '/images/items/grizzbolt-s-minigun.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'hangyu_cryst_s_glove',
    name: 'Hangyu Cryst\'s Glove',
    category: 'Key Item',
    image: '/images/items/hangyu-cryst-s-glove.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'hangyu_s_gloves',
    name: 'Hangyu\'s Gloves',
    category: 'Key Item',
    image: '/images/items/hangyu-s-gloves.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'helzephyr_saddle',
    name: 'Helzephyr Saddle',
    category: 'Key Item',
    image: '/images/items/helzephyr-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'hip_lantern',
    name: 'Hip Lantern',
    category: 'Key Item',
    image: '/images/items/hip-lantern.png',
    weight: 0,
    gold: 1
  },
  {
    id: 'huge_feed_bag',
    name: 'Huge Feed Bag',
    category: 'Key Item',
    image: '/images/items/huge-feed-bag.png',
    weight: 0,
    gold: 1
  },
  {
    id: 'ice_kingpaca_saddle',
    name: 'Ice Kingpaca Saddle',
    category: 'Key Item',
    image: '/images/items/ice-kingpaca-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'ice_reptyro_saddle',
    name: 'Ice Reptyro Saddle',
    category: 'Key Item',
    image: '/images/items/ice-reptyro-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'jetragon_s_missile_launcher',
    name: 'Jetragon\'s Missile Launcher',
    category: 'Key Item',
    image: '/images/items/jetragon-s-missile-launcher.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'jolthog_cryst_s_gloves',
    name: 'Jolthog Cryst\'s Gloves',
    category: 'Key Item',
    image: '/images/items/jolthog-cryst-s-gloves.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'jolthog_s_gloves',
    name: 'Jolthog\'s Gloves',
    category: 'Key Item',
    image: '/images/items/jolthog-s-gloves.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'jormuntide_ignis_saddle',
    name: 'Jormuntide Ignis Saddle',
    category: 'Key Item',
    image: '/images/items/jormuntide-ignis-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'jormuntide_saddle',
    name: 'Jormuntide Saddle',
    category: 'Key Item',
    image: '/images/items/jormuntide-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'killamari_s_gloves',
    name: 'Killamari\'s Gloves',
    category: 'Key Item',
    image: '/images/items/killamari-s-gloves.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'kingpaca_saddle',
    name: 'Kingpaca Saddle',
    category: 'Key Item',
    image: '/images/items/kingpaca-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'kitsun_saddle',
    name: 'Kitsun Saddle',
    category: 'Key Item',
    image: '/images/items/kitsun-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'large_feed_bag',
    name: 'Large Feed Bag',
    category: 'Key Item',
    image: '/images/items/large-feed-bag.png',
    weight: 0,
    gold: 1
  },
  {
    id: 'lifmunk_effigy',
    name: 'Lifmunk Effigy',
    category: 'Key Item',
    image: '/images/items/lifmunk-effigy.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'lifmunk_s_submachine_gun',
    name: 'Lifmunk\'s Submachine Gun',
    category: 'Key Item',
    image: '/images/items/lifmunk-s-submachine-gun.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'mammorest_cryst_saddle',
    name: 'Mammorest Cryst Saddle',
    category: 'Key Item',
    image: '/images/items/mammorest-cryst-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'mammorest_saddle',
    name: 'Mammorest Saddle',
    category: 'Key Item',
    image: '/images/items/mammorest-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'maraith_saddle',
    name: 'Maraith Saddle',
    category: 'Key Item',
    image: '/images/items/maraith-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'melpaca_saddle',
    name: 'Melpaca Saddle',
    category: 'Key Item',
    image: '/images/items/melpaca-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'mossanda_lux_s_grenade_launcher',
    name: 'Mossanda Lux\'s Grenade Launcher',
    category: 'Key Item',
    image: '/images/items/mossanda-lux-s-grenade-launcher.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'mossanda_s_grenade_launcher',
    name: 'Mossanda\'s Grenade Launcher',
    category: 'Key Item',
    image: '/images/items/mossanda-s-grenade-launcher.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'necromus_saddle',
    name: 'Necromus Saddle',
    category: 'Key Item',
    image: '/images/items/necromus-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'nitewing_saddle',
    name: 'Nitewing Saddle',
    category: 'Key Item',
    image: '/images/items/nitewing-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'paladius_saddle',
    name: 'Paladius Saddle',
    category: 'Key Item',
    image: '/images/items/paladius-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'pengullet_s_rocket_launcher',
    name: 'Pengullet\'s Rocket Launcher',
    category: 'Key Item',
    image: '/images/items/pengullet-s-rocket-launcher.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'pyrin_saddle',
    name: 'Pyrin Saddle',
    category: 'Key Item',
    image: '/images/items/pyrin-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'quivern_saddle',
    name: 'Quivern Saddle',
    category: 'Key Item',
    image: '/images/items/quivern-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'ragnahawk_saddle',
    name: 'Ragnahawk Saddle',
    category: 'Key Item',
    image: '/images/items/ragnahawk-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'rayhound_saddle',
    name: 'Rayhound Saddle',
    category: 'Key Item',
    image: '/images/items/rayhound-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'reindrix_saddle',
    name: 'Reindrix Saddle',
    category: 'Key Item',
    image: '/images/items/reindrix-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'relaxaurus_lux_s_missile_launcher',
    name: 'Relaxaurus Lux\'s Missile Launcher',
    category: 'Key Item',
    image: '/images/items/relaxaurus-lux-s-missile-launcher.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'relaxaurus_s_missile_launcher',
    name: 'Relaxaurus\'s Missile Launcher',
    category: 'Key Item',
    image: '/images/items/relaxaurus-s-missile-launcher.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'reptyro_saddle',
    name: 'Reptyro Saddle',
    category: 'Key Item',
    image: '/images/items/reptyro-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'rushoar_saddle',
    name: 'Rushoar Saddle',
    category: 'Key Item',
    image: '/images/items/rushoar-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'shadowbeak_saddle',
    name: 'Shadowbeak Saddle',
    category: 'Key Item',
    image: '/images/items/shadowbeak-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'small_feed_bag',
    name: 'Small Feed Bag',
    category: 'Key Item',
    image: '/images/items/small-feed-bag.png',
    weight: 0,
    gold: 1
  },
  {
    id: 'surfent_saddle',
    name: 'Surfent Saddle',
    category: 'Key Item',
    image: '/images/items/surfent-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'suzaku_saddle',
    name: 'Suzaku Saddle',
    category: 'Key Item',
    image: '/images/items/suzaku-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'sweepa_saddle',
    name: 'Sweepa Saddle',
    category: 'Key Item',
    image: '/images/items/sweepa-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'tanzee_s_assault_rifle',
    name: 'Tanzee\'s Assault Rifle',
    category: 'Key Item',
    image: '/images/items/tanzee-s-assault-rifle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'tocotoco_s_gloves',
    name: 'Tocotoco\'s Gloves',
    category: 'Key Item',
    image: '/images/items/tocotoco-s-gloves.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'univolt_saddle',
    name: 'Univolt Saddle',
    category: 'Key Item',
    image: '/images/items/univolt-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'vanwyrm_cryst_saddle',
    name: 'Vanwyrm Cryst Saddle',
    category: 'Key Item',
    image: '/images/items/vanwyrm-cryst-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'vanwyrm_saddle',
    name: 'Vanwyrm Saddle',
    category: 'Key Item',
    image: '/images/items/vanwyrm-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'water_broncherry_saddle',
    name: 'Water Broncherry Saddle',
    category: 'Key Item',
    image: '/images/items/water-broncherry-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'water_elphidran_saddle',
    name: 'Water Elphidran Saddle',
    category: 'Key Item',
    image: '/images/items/water-elphidran-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'water_suzaku_saddle',
    name: 'Water Suzaku Saddle',
    category: 'Key Item',
    image: '/images/items/water-suzaku-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'wumpo_botan_saddle',
    name: 'Wumpo Botan Saddle',
    category: 'Key Item',
    image: '/images/items/wumpo-botan-saddle.png',
    weight: 0,
    gold: 0
  },
  {
    id: 'wumpo_saddle',
    name: 'Wumpo Saddle',
    category: 'Key Item',
    image: '/images/items/wumpo-saddle.png',
    weight: 0,
    gold: 0
  },
];
