declare namespace match {
   interface Chat {
    time: number;
    type: string;
    key: string;
    slot: number;
    player_slot: number;
    unit: string;
  }

   interface DraftTiming {
    order: number;
    pick: boolean;
    active_team: number;
    hero_id: number;
    player_slot?: number;
    extra_time: number;
    total_time_taken: number;
  }

   interface Objective {
    time: number;
    type: string;
    slot: number;
    key: any;
    player_slot: number;
    unit: string;
    team?: number;
  }

   interface PicksBan {
    is_pick: boolean;
    hero_id: number;
    team: number;
    order: number;
    ord: number;
    match_id: any;
  }

   interface AbilityUses {
    necrolyte_reapers_scythe: number;
    necrolyte_death_pulse: number;
    alchemist_acid_spray?: number;
    alchemist_chemical_rage?: number;
    venomancer_venomous_gale?: number;
    venomancer_plague_ward?: number;
    crystal_maiden_crystal_nova?: number;
    crystal_maiden_frostbite?: number;
    naga_siren_mirror_image?: number;
    naga_siren_rip_tide?: number;
    weaver_shukuchi?: number;
    weaver_the_swarm?: number;
    undying_decay?: number;
    undying_tombstone?: number;
    vengefulspirit_magic_missile?: number;
    vengefulspirit_wave_of_terror?: number;
    vengefulspirit_nether_swap?: number;
    nyx_assassin_impale?: number;
    nyx_assassin_mana_burn?: number;
    nyx_assassin_spiked_carapace?: number;
    shredder_whirling_death?: number;
    shredder_chakram?: number;
    shredder_timber_chain?: number;
    shredder_return_chakram?: number;
    necrolyte_sadist?: number;
    alchemist_unstable_concoction?: number;
    alchemist_unstable_concoction_throw?: number;
    crystal_maiden_freezing_field?: number;
    naga_siren_ensnare?: number;
    weaver_time_lapse?: number;
    undying_flesh_golem?: number;
    venomancer_poison_nova?: number;
    naga_siren_song_of_the_siren?: number;
    naga_siren_song_of_the_siren_cancel?: number;
    undying_soul_rip?: number;
    nyx_assassin_vendetta?: number;
  }

   interface ItemUses {
    tpscroll: number;
    power_treads?: number;
    magic_stick?: number;
    tango?: number;
    magic_wand?: number;
    smoke_of_deceit?: number;
    ward_observer?: number;
    arcane_boots?: number;
    bottle?: number;
    hood_of_defiance?: number;
    dagon_2?: number;
    veil_of_discord?: number;
    blink?: number;
    manta?: number;
    ward_dispenser?: number;
    pipe?: number;
    hurricane_pike?: number;
    lotus_orb?: number;
    dagon_5?: number;
    solar_crest?: number;
    shivas_guard?: number;
    shadow_amulet?: number;
    urn_of_shadows?: number;
    silver_edge?: number;
    glimmer_cape?: number;
    rod_of_atos?: number;
    black_king_bar?: number;
    dust?: number;
    invis_sword?: number;
    spirit_vessel?: number;
    clarity?: number;
  }

   interface Killed {
    npc_dota_hero_undying: number;
    npc_dota_hero_naga_siren?: number;
    npc_dota_hero_venomancer?: number;
    npc_dota_hero_nyx_assassin?: number;
    npc_dota_hero_weaver?: number;
    npc_dota_hero_vengefulspirit?: number;
    npc_dota_hero_crystal_maiden?: number;
    npc_dota_hero_shredder?: number;
    npc_dota_hero_necrolyte?: number;
  }

  //  interface Player {
  //   deaths_pos: any;
  //   ability_uses: AbilityUses;
  //   ability_targets: any;
  //   item_uses: ItemUses;
  //   killed: Killed;
  //   deaths: number;
  //   buybacks: number;
  //   damage: number;
  //   healing: number;
  //   gold_delta: number;
  //   xp_delta: number;
  //   xp_start: number;
  //   xp_end: number;
  // }

   interface Teamfight {
    start: number;
    end: number;
    last_death: number;
    deaths: number;
    players: Player[];
  }

   interface League {
    leagueid: number;
    ticket: string;
    banner: string;
    tier: string;
    name: string;
  }

   interface RadiantTeam {
    team_id: number;
    name: string;
    tag: string;
    logo_url?: any;
  }

   interface DireTeam {
    team_id: number;
    name: string;
    tag: string;
    logo_url?: any;
  }

   interface NecrolyteReapersScythe {
    npc_dota_hero_undying: number;
    npc_dota_hero_nyx_assassin: number;
    npc_dota_hero_vengefulspirit: number;
    npc_dota_hero_shredder: number;
    npc_dota_hero_weaver: number;
  }

   interface AlchemistUnstableConcoctionThrow {
    npc_dota_hero_vengefulspirit: number;
    npc_dota_hero_undying: number;
    npc_dota_hero_weaver: number;
    npc_dota_hero_nyx_assassin: number;
    npc_dota_hero_shredder: number;
  }

   interface CrystalMaidenFrostbite {
    npc_dota_hero_weaver: number;
    npc_dota_hero_nyx_assassin: number;
    npc_dota_hero_shredder: number;
    npc_dota_hero_vengefulspirit: number;
    npc_dota_hero_undying: number;
  }

   interface NagaSirenEnsnare {
    npc_dota_hero_vengefulspirit: number;
    npc_dota_hero_undying: number;
    npc_dota_hero_nyx_assassin: number;
    npc_dota_hero_shredder: number;
    npc_dota_hero_weaver: number;
  }

   interface UndyingSoulRip {
    npc_dota_hero_alchemist: number;
    npc_dota_hero_vengefulspirit: number;
  }

   interface VengefulspiritMagicMissile {
    npc_dota_hero_naga_siren: number;
    npc_dota_hero_venomancer: number;
    npc_dota_hero_crystal_maiden: number;
    npc_dota_hero_alchemist: number;
    npc_dota_hero_necrolyte: number;
  }

   interface VengefulspiritNetherSwap {
    npc_dota_hero_venomancer: number;
    npc_dota_hero_crystal_maiden: number;
    npc_dota_hero_naga_siren: number;
    npc_dota_hero_necrolyte: number;
    npc_dota_hero_alchemist: number;
  }

   interface NyxAssassinManaBurn {
    npc_dota_hero_necrolyte: number;
    npc_dota_hero_alchemist: number;
    npc_dota_hero_venomancer: number;
    npc_dota_hero_naga_siren: number;
    npc_dota_hero_crystal_maiden: number;
  }

   interface AbilityTargets2 {
    necrolyte_reapers_scythe: NecrolyteReapersScythe;
    alchemist_unstable_concoction_throw: AlchemistUnstableConcoctionThrow;
    crystal_maiden_frostbite: CrystalMaidenFrostbite;
    naga_siren_ensnare: NagaSirenEnsnare;
    undying_soul_rip: UndyingSoulRip;
    vengefulspirit_magic_missile: VengefulspiritMagicMissile;
    vengefulspirit_nether_swap: VengefulspiritNetherSwap;
    nyx_assassin_mana_burn: NyxAssassinManaBurn;
  }

   interface AbilityUses2 {
    necrolyte_death_pulse: number;
    necrolyte_sadist: number;
    necrolyte_reapers_scythe: number;
    alchemist_acid_spray?: number;
    alchemist_chemical_rage?: number;
    alchemist_unstable_concoction?: number;
    alchemist_unstable_concoction_throw?: number;
    venomancer_venomous_gale?: number;
    venomancer_plague_ward?: number;
    venomancer_poison_nova?: number;
    crystal_maiden_crystal_nova?: number;
    crystal_maiden_frostbite?: number;
    crystal_maiden_freezing_field?: number;
    naga_siren_ensnare?: number;
    naga_siren_mirror_image?: number;
    naga_siren_rip_tide?: number;
    naga_siren_song_of_the_siren?: number;
    naga_siren_song_of_the_siren_cancel?: number;
    weaver_shukuchi?: number;
    weaver_the_swarm?: number;
    weaver_time_lapse?: number;
    undying_decay?: number;
    undying_tombstone?: number;
    undying_flesh_golem?: number;
    undying_soul_rip?: number;
    vengefulspirit_wave_of_terror?: number;
    vengefulspirit_magic_missile?: number;
    vengefulspirit_nether_swap?: number;
    nyx_assassin_impale?: number;
    nyx_assassin_mana_burn?: number;
    nyx_assassin_spiked_carapace?: number;
    nyx_assassin_vendetta?: number;
    shredder_whirling_death?: number;
    shredder_chakram?: number;
    shredder_return_chakram?: number;
    shredder_timber_chain?: number;
  }

   interface Actions {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    10: number;
    11: number;
    16: number;
    17: number;
    19: number;
    23: number;
    27: number;
    33: number;
    12?: number;
    13?: number;
    14?: number;
    15?: number;
    9?: number;
    20?: number;
    24?: number;
    36?: number;
    31?: number;
    32?: number;
    18?: number;
  }

   interface BuybackLog {
    time: number;
    slot: number;
    type: string;
    player_slot: number;
  }

   interface Damage {
    npc_dota_hero_weaver: number;
    npc_dota_creep_badguys_melee: number;
    npc_dota_creep_badguys_ranged: number;
    npc_dota_creep_goodguys_melee: number;
    npc_dota_creep_goodguys_ranged: number;
    npc_dota_hero_nyx_assassin: number;
    npc_dota_neutral_centaur_khan: number;
    npc_dota_badguys_siege: number;
    npc_dota_weaver_swarm: number;
    npc_dota_hero_undying: number;
    npc_dota_hero_vengefulspirit: number;
    npc_dota_neutral_dark_troll_warlord: number;
    npc_dota_badguys_tower1_top: number;
    npc_dota_hero_shredder: number;
    npc_dota_neutral_alpha_wolf: number;
    npc_dota_badguys_tower1_mid: number;
    npc_dota_neutral_mud_golem: number;
    npc_dota_neutral_mud_golem_split: number;
    npc_dota_badguys_tower1_bot: number;
    npc_dota_neutral_dark_troll: number;
    npc_dota_dark_troll_warlord_skeleton_warrior: number;
    npc_dota_neutral_centaur_outrunner: number;
    npc_dota_neutral_ogre_magi: number;
    npc_dota_neutral_ogre_mauler: number;
    npc_dota_observer_wards: number;
    npc_dota_neutral_polar_furbolg_ursa_warrior: number;
    npc_dota_neutral_polar_furbolg_champion: number;
    npc_dota_badguys_tower2_mid: number;
    npc_dota_neutral_harpy_scout: number;
    npc_dota_neutral_harpy_storm: number;
    npc_dota_neutral_kobold: number;
    npc_dota_neutral_kobold_taskmaster: number;
    npc_dota_neutral_kobold_tunneler: number;
    npc_dota_neutral_satyr_trickster: number;
    npc_dota_neutral_satyr_hellcaller: number;
    npc_dota_neutral_satyr_soulstealer: number;
    npc_dota_neutral_prowler_shaman: number;
    npc_dota_neutral_prowler_acolyte: number;
    npc_dota_neutral_forest_troll_berserker: number;
    npc_dota_unit_tombstone4: number;
    npc_dota_unit_undying_zombie_torso: number;
    npc_dota_badguys_tower2_bot: number;
    npc_dota_neutral_black_dragon: number;
    npc_dota_neutral_black_drake: number;
    npc_dota_badguys_range_rax_mid: number;
    npc_dota_badguys_tower4: number;
    npc_dota_badguys_fort: number;
    illusion_npc_dota_hero_shredder?: number;
    npc_dota_neutral_rock_golem?: number;
    npc_dota_neutral_granite_golem?: number;
    npc_dota_neutral_enraged_wildkin?: number;
    npc_dota_neutral_wildkin?: number;
    npc_dota_neutral_giant_wolf?: number;
    npc_dota_neutral_forest_troll_high_priest?: number;
    npc_dota_hero_alchemist?: number;
    npc_dota_neutral_fel_beast?: number;
    npc_dota_neutral_ghost?: number;
    npc_dota_badguys_tower3_mid?: number;
    npc_dota_badguys_melee_rax_mid?: number;
    npc_dota_unit_undying_zombie?: number;
    npc_dota_badguys_healers?: number;
    npc_dota_roshan?: number;
    npc_dota_unit_tombstone1?: number;
    npc_dota_unit_tombstone2?: number;
    npc_dota_neutral_big_thunder_lizard?: number;
    npc_dota_neutral_small_thunder_lizard?: number;
    npc_dota_goodguys_tower1_mid?: number;
    npc_dota_sentry_wards?: number;
    npc_dota_badguys_fillers?: number;
    npc_dota_hero_naga_siren?: number;
    npc_dota_hero_necrolyte?: number;
    npc_dota_hero_crystal_maiden?: number;
    npc_dota_goodguys_siege?: number;
    npc_dota_venomancer_plague_ward_2?: number;
    npc_dota_neutral_gnoll_assassin?: number;
    npc_dota_venomancer_plague_ward_3?: number;
    npc_dota_hero_venomancer?: number;
    npc_dota_goodguys_tower1_top?: number;
    illusion_npc_dota_hero_alchemist?: number;
    illusion_npc_dota_hero_naga_siren?: number;
    npc_dota_venomancer_plague_ward_4?: number;
    npc_dota_goodguys_tower2_mid?: number;
    npc_dota_creep_goodguys_melee_upgraded?: number;
    npc_dota_venomancer_plague_ward_1?: number;
    npc_dota_goodguys_tower1_bot?: number;
    npc_dota_goodguys_tower2_bot?: number;
    npc_dota_goodguys_tower3_bot?: number;
  }

   interface DamageInflictor {
    null: number;
    necrolyte_death_pulse: number;
    necrolyte_heartstopper_aura: number;
    necrolyte_reapers_scythe: number;
    dagon_2: number;
    dagon_4: number;
    dagon_5: number;
    alchemist_acid_spray?: number;
    alchemist_unstable_concoction_throw?: number;
    radiance?: number;
    shivas_guard?: number;
    venomancer_poison_sting?: number;
    venomancer_venomous_gale?: number;
    venomancer_poison_nova?: number;
    crystal_maiden_crystal_nova?: number;
    crystal_maiden_frostbite?: number;
    crystal_maiden_freezing_field?: number;
    naga_siren_rip_tide?: number;
    weaver_shukuchi?: number;
    weaver_the_swarm?: number;
    undying_decay?: number;
    undying_tombstone?: number;
    undying_soul_rip?: number;
    vengefulspirit_wave_of_terror?: number;
    vengefulspirit_magic_missile?: number;
    nyx_assassin_impale?: number;
    nyx_assassin_mana_burn?: number;
    nyx_assassin_vendetta?: number;
    nyx_assassin_spiked_carapace?: number;
    spirit_vessel?: number;
    shredder_whirling_death?: number;
    shredder_chakram?: number;
    shredder_timber_chain?: number;
  }

   interface DamageInflictorReceived {
    weaver_shukuchi: number;
    null: number;
    nyx_assassin_impale: number;
    nyx_assassin_mana_burn: number;
    weaver_the_swarm: number;
    undying_decay: number;
    vengefulspirit_wave_of_terror: number;
    nyx_assassin_vendetta: number;
    nyx_assassin_spiked_carapace: number;
    shredder_timber_chain: number;
    shredder_whirling_death: number;
    undying_tombstone: number;
    shredder_chakram: number;
    vengefulspirit_magic_missile: number;
    spirit_vessel: number;
    dagon_5: number;
    shivas_guard: number;
    alchemist_unstable_concoction_throw?: number;
    undying_soul_rip?: number;
    crystal_maiden_frostbite?: number;
    crystal_maiden_crystal_nova?: number;
    necrolyte_death_pulse?: number;
    necrolyte_heartstopper_aura?: number;
    naga_siren_rip_tide?: number;
    venomancer_venomous_gale?: number;
    venomancer_poison_sting?: number;
    crystal_maiden_freezing_field?: number;
    radiance?: number;
    alchemist_acid_spray?: number;
    necrolyte_reapers_scythe?: number;
    venomancer_poison_nova?: number;
    dagon_4?: number;
    dagon_2?: number;
  }

   interface DamageTaken {
    npc_dota_creep_badguys_melee: number;
    npc_dota_creep_badguys_ranged: number;
    npc_dota_hero_weaver: number;
    npc_dota_hero_nyx_assassin: number;
    npc_dota_badguys_siege: number;
    npc_dota_badguys_tower1_top: number;
    npc_dota_hero_undying: number;
    npc_dota_hero_vengefulspirit: number;
    npc_dota_hero_shredder: number;
    npc_dota_neutral_mud_golem: number;
    npc_dota_neutral_mud_golem_split: number;
    npc_dota_badguys_tower1_bot: number;
    npc_dota_neutral_dark_troll: number;
    npc_dota_dark_troll_warlord_skeleton_warrior: number;
    npc_dota_neutral_dark_troll_warlord: number;
    npc_dota_neutral_centaur_khan: number;
    npc_dota_neutral_centaur_outrunner: number;
    npc_dota_neutral_polar_furbolg_ursa_warrior: number;
    npc_dota_neutral_polar_furbolg_champion: number;
    npc_dota_neutral_ogre_mauler: number;
    npc_dota_badguys_tower2_mid: number;
    npc_dota_neutral_harpy_storm: number;
    npc_dota_neutral_harpy_scout: number;
    npc_dota_neutral_kobold_tunneler: number;
    npc_dota_neutral_satyr_soulstealer: number;
    npc_dota_neutral_satyr_trickster: number;
    npc_dota_neutral_prowler_acolyte: number;
    npc_dota_neutral_prowler_shaman: number;
    npc_dota_neutral_forest_troll_berserker: number;
    npc_dota_neutral_kobold_taskmaster: number;
    npc_dota_badguys_tower2_bot: number;
    npc_dota_badguys_tower4: number;
    npc_dota_neutral_satyr_hellcaller: number;
    npc_dota_neutral_black_dragon: number;
    npc_dota_neutral_black_drake: number;
    npc_dota_neutral_ogre_magi?: number;
    npc_dota_neutral_wildkin?: number;
    npc_dota_neutral_enraged_wildkin?: number;
    npc_dota_neutral_giant_wolf?: number;
    npc_dota_neutral_alpha_wolf?: number;
    npc_dota_badguys_tower1_mid?: number;
    npc_dota_badguys_tower2_top?: number;
    npc_dota_neutral_forest_troll_high_priest?: number;
    npc_dota_hero_alchemist?: number;
    npc_dota_neutral_fel_beast?: number;
    npc_dota_neutral_ghost?: number;
    npc_dota_badguys_tower3_mid?: number;
    npc_dota_roshan?: number;
    dota_fountain?: number;
    npc_dota_neutral_granite_golem?: number;
    npc_dota_neutral_rock_golem?: number;
    npc_dota_neutral_kobold?: number;
    npc_dota_neutral_small_thunder_lizard?: number;
    npc_dota_neutral_big_thunder_lizard?: number;
    npc_dota_badguys_tower3_top?: number;
    npc_dota_hero_necrolyte?: number;
    npc_dota_creep_goodguys_melee?: number;
    npc_dota_hero_crystal_maiden?: number;
    npc_dota_creep_goodguys_ranged?: number;
    npc_dota_goodguys_siege?: number;
    npc_dota_hero_naga_siren?: number;
    npc_dota_hero_venomancer?: number;
    npc_dota_neutral_gnoll_assassin?: number;
    dota_unknown?: number;
    npc_dota_goodguys_tower2_mid?: number;
    npc_dota_creep_goodguys_melee_upgraded?: number;
    npc_dota_goodguys_tower1_bot?: number;
    npc_dota_goodguys_tower1_mid?: number;
    npc_dota_goodguys_tower1_top?: number;
  }

   interface Null {
    npc_dota_hero_weaver: number;
    npc_dota_hero_nyx_assassin: number;
    npc_dota_hero_vengefulspirit: number;
    npc_dota_hero_undying: number;
    npc_dota_hero_shredder: number;
    npc_dota_hero_necrolyte?: number;
    npc_dota_hero_crystal_maiden?: number;
    npc_dota_hero_naga_siren?: number;
    npc_dota_hero_venomancer?: number;
    npc_dota_hero_alchemist?: number;
  }

   interface NecrolyteDeathPulse {
    npc_dota_hero_weaver: number;
    npc_dota_hero_nyx_assassin: number;
    npc_dota_hero_vengefulspirit: number;
    npc_dota_hero_undying: number;
    npc_dota_hero_shredder: number;
  }

   interface NecrolyteHeartstopperAura {
    npc_dota_hero_undying: number;
    npc_dota_hero_weaver: number;
    npc_dota_hero_nyx_assassin: number;
    npc_dota_hero_shredder: number;
    npc_dota_hero_vengefulspirit: number;
  }

   interface NecrolyteReapersScythe2 {
    npc_dota_hero_undying: number;
    npc_dota_hero_nyx_assassin: number;
    npc_dota_hero_vengefulspirit: number;
    npc_dota_hero_shredder: number;
    npc_dota_hero_weaver: number;
  }

   interface Dagon2 {
    npc_dota_hero_shredder: number;
  }

   interface Dagon4 {
    npc_dota_hero_undying: number;
  }

   interface Dagon5 {
    npc_dota_hero_weaver: number;
    npc_dota_hero_shredder: number;
    npc_dota_hero_undying: number;
    npc_dota_hero_vengefulspirit: number;
    npc_dota_hero_necrolyte?: number;
  }

   interface AlchemistAcidSpray {
    npc_dota_hero_shredder: number;
    npc_dota_hero_vengefulspirit: number;
    npc_dota_hero_undying: number;
    npc_dota_hero_nyx_assassin: number;
    npc_dota_hero_weaver: number;
  }

   interface AlchemistUnstableConcoctionThrow2 {
    npc_dota_hero_vengefulspirit: number;
    npc_dota_hero_undying: number;
    npc_dota_hero_shredder: number;
    npc_dota_hero_weaver: number;
    npc_dota_hero_alchemist: number;
    npc_dota_hero_nyx_assassin: number;
  }

   interface Radiance {
    npc_dota_hero_shredder: number;
    npc_dota_hero_undying: number;
    npc_dota_hero_nyx_assassin: number;
    npc_dota_hero_vengefulspirit: number;
    npc_dota_hero_weaver: number;
  }

   interface ShivasGuard {
    npc_dota_hero_vengefulspirit: number;
    npc_dota_hero_undying: number;
    npc_dota_hero_shredder: number;
    npc_dota_hero_weaver: number;
    npc_dota_hero_alchemist?: number;
    npc_dota_hero_naga_siren?: number;
    npc_dota_hero_crystal_maiden?: number;
    npc_dota_hero_necrolyte?: number;
  }

   interface VenomancerPoisonSting {
    npc_dota_hero_vengefulspirit: number;
    npc_dota_hero_undying: number;
    npc_dota_hero_nyx_assassin: number;
    npc_dota_hero_shredder: number;
    npc_dota_hero_weaver: number;
  }

   interface VenomancerVenomousGale {
    npc_dota_hero_vengefulspirit: number;
    npc_dota_hero_undying: number;
    npc_dota_hero_nyx_assassin: number;
    npc_dota_hero_shredder: number;
    npc_dota_hero_weaver: number;
  }

   interface VenomancerPoisonNova {
    npc_dota_hero_shredder: number;
    npc_dota_hero_nyx_assassin: number;
    npc_dota_hero_vengefulspirit: number;
    npc_dota_hero_weaver: number;
    npc_dota_hero_undying: number;
  }

   interface CrystalMaidenCrystalNova {
    npc_dota_hero_weaver: number;
    npc_dota_hero_nyx_assassin: number;
    npc_dota_hero_shredder: number;
    npc_dota_hero_vengefulspirit: number;
    npc_dota_hero_undying: number;
  }

   interface CrystalMaidenFrostbite2 {
    npc_dota_hero_weaver: number;
    npc_dota_hero_nyx_assassin: number;
    npc_dota_hero_shredder: number;
    npc_dota_hero_vengefulspirit: number;
    npc_dota_hero_undying: number;
    npc_dota_hero_crystal_maiden?: number;
  }

   interface CrystalMaidenFreezingField {
    npc_dota_hero_shredder: number;
    npc_dota_hero_weaver: number;
    npc_dota_hero_undying: number;
    npc_dota_hero_vengefulspirit: number;
    npc_dota_hero_nyx_assassin: number;
  }

   interface NagaSirenRipTide {
    npc_dota_hero_vengefulspirit: number;
    npc_dota_hero_undying: number;
    npc_dota_hero_nyx_assassin: number;
    npc_dota_hero_shredder: number;
    npc_dota_hero_weaver: number;
  }

   interface WeaverShukuchi {
    npc_dota_hero_naga_siren: number;
    npc_dota_hero_necrolyte: number;
    npc_dota_hero_crystal_maiden: number;
    npc_dota_hero_venomancer: number;
    npc_dota_hero_alchemist: number;
  }

   interface WeaverTheSwarm {
    npc_dota_hero_crystal_maiden: number;
    npc_dota_hero_necrolyte: number;
    npc_dota_hero_venomancer: number;
    npc_dota_hero_naga_siren: number;
    npc_dota_hero_alchemist: number;
  }

   interface UndyingDecay {
    npc_dota_hero_venomancer: number;
    npc_dota_hero_naga_siren: number;
    npc_dota_hero_necrolyte: number;
    npc_dota_hero_alchemist: number;
    npc_dota_hero_crystal_maiden: number;
  }

   interface UndyingTombstone {
    npc_dota_hero_naga_siren: number;
    npc_dota_hero_venomancer: number;
    npc_dota_hero_crystal_maiden: number;
    npc_dota_hero_necrolyte: number;
    npc_dota_hero_alchemist: number;
  }

   interface UndyingSoulRip2 {
    npc_dota_hero_nyx_assassin: number;
    npc_dota_hero_weaver: number;
    npc_dota_hero_alchemist: number;
  }

   interface VengefulspiritWaveOfTerror {
    npc_dota_hero_venomancer: number;
    npc_dota_hero_naga_siren: number;
    npc_dota_hero_necrolyte: number;
    npc_dota_hero_crystal_maiden: number;
    npc_dota_hero_alchemist: number;
  }

   interface VengefulspiritMagicMissile2 {
    npc_dota_hero_naga_siren: number;
    npc_dota_hero_venomancer: number;
    npc_dota_hero_crystal_maiden: number;
    npc_dota_hero_alchemist: number;
    npc_dota_hero_necrolyte: number;
  }

   interface NyxAssassinImpale {
    npc_dota_hero_crystal_maiden: number;
    npc_dota_hero_necrolyte: number;
    npc_dota_hero_alchemist: number;
    npc_dota_hero_naga_siren: number;
    npc_dota_hero_venomancer: number;
  }

   interface NyxAssassinManaBurn2 {
    npc_dota_hero_necrolyte: number;
    npc_dota_hero_alchemist: number;
    npc_dota_hero_venomancer: number;
    npc_dota_hero_naga_siren: number;
    npc_dota_hero_crystal_maiden: number;
  }

   interface NyxAssassinVendetta {
    npc_dota_hero_venomancer: number;
    npc_dota_hero_necrolyte: number;
    npc_dota_hero_naga_siren: number;
    npc_dota_hero_alchemist: number;
  }

   interface NyxAssassinSpikedCarapace {
    npc_dota_hero_necrolyte: number;
    npc_dota_hero_naga_siren: number;
    npc_dota_hero_alchemist: number;
    npc_dota_hero_venomancer: number;
    npc_dota_hero_crystal_maiden: number;
  }

   interface SpiritVessel {
    npc_dota_hero_necrolyte: number;
    npc_dota_hero_alchemist: number;
    npc_dota_hero_naga_siren: number;
  }

   interface ShredderWhirlingDeath {
    npc_dota_hero_alchemist: number;
    npc_dota_hero_naga_siren: number;
    npc_dota_hero_venomancer: number;
    npc_dota_hero_crystal_maiden: number;
    npc_dota_hero_necrolyte: number;
  }

   interface ShredderChakram {
    npc_dota_hero_alchemist: number;
    npc_dota_hero_naga_siren: number;
    npc_dota_hero_crystal_maiden: number;
    npc_dota_hero_venomancer: number;
    npc_dota_hero_necrolyte: number;
  }

   interface ShredderTimberChain {
    npc_dota_hero_alchemist: number;
    npc_dota_hero_naga_siren: number;
    npc_dota_hero_crystal_maiden: number;
    npc_dota_hero_necrolyte: number;
    npc_dota_hero_venomancer: number;
  }

   interface DamageTargets {
    null: Null;
    necrolyte_death_pulse: NecrolyteDeathPulse;
    necrolyte_heartstopper_aura: NecrolyteHeartstopperAura;
    necrolyte_reapers_scythe: NecrolyteReapersScythe2;
    dagon_2: Dagon2;
    dagon_4: Dagon4;
    dagon_5: Dagon5;
    alchemist_acid_spray: AlchemistAcidSpray;
    alchemist_unstable_concoction_throw: AlchemistUnstableConcoctionThrow2;
    radiance: Radiance;
    shivas_guard: ShivasGuard;
    venomancer_poison_sting: VenomancerPoisonSting;
    venomancer_venomous_gale: VenomancerVenomousGale;
    venomancer_poison_nova: VenomancerPoisonNova;
    crystal_maiden_crystal_nova: CrystalMaidenCrystalNova;
    crystal_maiden_frostbite: CrystalMaidenFrostbite2;
    crystal_maiden_freezing_field: CrystalMaidenFreezingField;
    naga_siren_rip_tide: NagaSirenRipTide;
    weaver_shukuchi: WeaverShukuchi;
    weaver_the_swarm: WeaverTheSwarm;
    undying_decay: UndyingDecay;
    undying_tombstone: UndyingTombstone;
    undying_soul_rip: UndyingSoulRip2;
    vengefulspirit_wave_of_terror: VengefulspiritWaveOfTerror;
    vengefulspirit_magic_missile: VengefulspiritMagicMissile2;
    nyx_assassin_impale: NyxAssassinImpale;
    nyx_assassin_mana_burn: NyxAssassinManaBurn2;
    nyx_assassin_vendetta: NyxAssassinVendetta;
    nyx_assassin_spiked_carapace: NyxAssassinSpikedCarapace;
    spirit_vessel: SpiritVessel;
    shredder_whirling_death: ShredderWhirlingDeath;
    shredder_chakram: ShredderChakram;
    shredder_timber_chain: ShredderTimberChain;
  }

   interface GoldReasons {
    0: number;
    1: number;
    2: number;
    6: number;
    11: number;
    12: number;
    13: number;
    14: number;
    5?: number;
  }

   interface HeroHits {
    null: number;
    necrolyte_death_pulse: number;
    necrolyte_heartstopper_aura: number;
    necrolyte_reapers_scythe: number;
    dagon_2: number;
    dagon_4: number;
    dagon_5: number;
    alchemist_acid_spray?: number;
    alchemist_unstable_concoction_throw?: number;
    radiance?: number;
    shivas_guard?: number;
    venomancer_poison_sting?: number;
    venomancer_venomous_gale?: number;
    venomancer_poison_nova?: number;
    crystal_maiden_crystal_nova?: number;
    crystal_maiden_frostbite?: number;
    crystal_maiden_freezing_field?: number;
    naga_siren_rip_tide?: number;
    weaver_shukuchi?: number;
    weaver_the_swarm?: number;
    undying_decay?: number;
    undying_tombstone?: number;
    undying_soul_rip?: number;
    vengefulspirit_wave_of_terror?: number;
    vengefulspirit_magic_missile?: number;
    nyx_assassin_impale?: number;
    nyx_assassin_mana_burn?: number;
    nyx_assassin_vendetta?: number;
    nyx_assassin_spiked_carapace?: number;
    spirit_vessel?: number;
    shredder_whirling_death?: number;
    shredder_chakram?: number;
    shredder_timber_chain?: number;
  }

   interface ItemUses2 {
    tango: number;
    flask: number;
    magic_wand: number;
    tpscroll: number;
    power_treads: number;
    veil_of_discord: number;
    dagon_2: number;
    hood_of_defiance: number;
    dagon_4: number;
    dagon_5: number;
    branches?: number;
    tango_single?: number;
    quelling_blade?: number;
    faerie_fire?: number;
    ward_sentry?: number;
    manta?: number;
    blink?: number;
    shivas_guard?: number;
    ultimate_scepter?: number;
    ward_observer?: number;
    magic_stick?: number;
    tome_of_knowledge?: number;
    ring_of_aquila?: number;
    medallion_of_courage?: number;
    solar_crest?: number;
    silver_edge?: number;
    clarity?: number;
    enchanted_mango?: number;
    ward_dispenser?: number;
    glimmer_cape?: number;
    smoke_of_deceit?: number;
    rod_of_atos?: number;
    black_king_bar?: number;
    dust?: number;
    pipe?: number;
    force_staff?: number;
    hurricane_pike?: number;
    shadow_amulet?: number;
    invis_sword?: number;
    urn_of_shadows?: number;
    spirit_vessel?: number;
    bottle?: number;
    arcane_boots?: number;
    lotus_orb?: number;
  }

   interface KillStreaks {
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    9: number;
    10?: number;
    11?: number;
    12?: number;
  }

   interface Killed2 {
    npc_dota_creep_badguys_melee: number;
    npc_dota_creep_badguys_ranged: number;
    npc_dota_creep_goodguys_ranged: number;
    npc_dota_badguys_siege: number;
    npc_dota_creep_goodguys_melee: number;
    npc_dota_weaver_swarm: number;
    npc_dota_hero_undying: number;
    npc_dota_hero_nyx_assassin: number;
    npc_dota_neutral_mud_golem: number;
    npc_dota_neutral_mud_golem_split: number;
    npc_dota_hero_vengefulspirit: number;
    npc_dota_dark_troll_warlord_skeleton_warrior: number;
    npc_dota_neutral_dark_troll_warlord: number;
    npc_dota_neutral_dark_troll: number;
    npc_dota_neutral_centaur_outrunner: number;
    npc_dota_neutral_centaur_khan: number;
    npc_dota_observer_wards: number;
    npc_dota_neutral_ogre_magi: number;
    npc_dota_neutral_polar_furbolg_champion: number;
    npc_dota_neutral_ogre_mauler: number;
    npc_dota_hero_shredder: number;
    npc_dota_badguys_tower2_mid: number;
    npc_dota_neutral_harpy_scout: number;
    npc_dota_neutral_harpy_storm: number;
    npc_dota_neutral_kobold: number;
    npc_dota_neutral_kobold_taskmaster: number;
    npc_dota_neutral_kobold_tunneler: number;
    npc_dota_neutral_satyr_trickster: number;
    npc_dota_neutral_satyr_soulstealer: number;
    npc_dota_neutral_prowler_acolyte: number;
    npc_dota_neutral_prowler_shaman: number;
    npc_dota_hero_weaver: number;
    npc_dota_neutral_forest_troll_berserker: number;
    npc_dota_unit_tombstone4: number;
    npc_dota_unit_undying_zombie_torso: number;
    npc_dota_neutral_satyr_hellcaller: number;
    npc_dota_neutral_black_dragon: number;
    npc_dota_neutral_black_drake: number;
    npc_dota_neutral_wildkin?: number;
    npc_dota_neutral_enraged_wildkin?: number;
    npc_dota_neutral_polar_furbolg_ursa_warrior?: number;
    npc_dota_neutral_giant_wolf?: number;
    npc_dota_neutral_alpha_wolf?: number;
    npc_dota_neutral_forest_troll_high_priest?: number;
    npc_dota_neutral_fel_beast?: number;
    npc_dota_neutral_ghost?: number;
    npc_dota_unit_undying_zombie?: number;
    npc_dota_roshan?: number;
    npc_dota_badguys_tower4?: number;
    npc_dota_unit_tombstone1?: number;
    npc_dota_unit_tombstone2?: number;
    npc_dota_neutral_rock_golem?: number;
    npc_dota_badguys_tower1_top?: number;
    npc_dota_badguys_tower1_mid?: number;
    npc_dota_neutral_granite_golem?: number;
    npc_dota_neutral_small_thunder_lizard?: number;
    npc_dota_neutral_big_thunder_lizard?: number;
    npc_dota_goodguys_tower1_mid?: number;
    npc_dota_sentry_wards?: number;
    npc_dota_badguys_range_rax_mid?: number;
    npc_dota_badguys_melee_rax_mid?: number;
    npc_dota_hero_crystal_maiden?: number;
    npc_dota_goodguys_siege?: number;
    npc_dota_venomancer_plague_ward_2?: number;
    npc_dota_neutral_gnoll_assassin?: number;
    npc_dota_venomancer_plague_ward_3?: number;
    npc_dota_hero_venomancer?: number;
    npc_dota_venomancer_plague_ward_4?: number;
    npc_dota_hero_naga_siren?: number;
    npc_dota_creep_goodguys_melee_upgraded?: number;
    npc_dota_hero_necrolyte?: number;
    npc_dota_venomancer_plague_ward_1?: number;
    npc_dota_goodguys_tower1_bot?: number;
    npc_dota_badguys_tower1_bot?: number;
    npc_dota_hero_alchemist?: number;
  }

   interface KilledBy {
    npc_dota_hero_shredder: number;
    npc_dota_hero_vengefulspirit: number;
    npc_dota_hero_weaver: number;
    npc_dota_hero_undying?: number;
    npc_dota_hero_nyx_assassin?: number;
    npc_dota_hero_crystal_maiden?: number;
    npc_dota_hero_necrolyte?: number;
    npc_dota_hero_alchemist?: number;
    npc_dota_hero_venomancer?: number;
    npc_dota_hero_naga_siren?: number;
  }

   interface KillsLog {
    time: number;
    key: string;
  }

   interface LanePos {
    72: 722;
    74: 742;
    76: 762;
    78: 782;
    80: 802;
    82: 822;
    84: 843;
    86: 862;
    88: 883;
    90: 902;
    92: 923;
    94: 943;
    96: 962;
    98: 982;
    100: 1003;
    160: 1603;
    162: 1623;
    164: 1642;
    166: 1662;
    168: 1683;
    170: 1703;
    172: 1723;
    174: 1743;
    176: 1763;
    178: 1782;
    180: 1802;
    182: 1822;
    184: 1842;
    102: 1022;
    104: 1042;
    106: 1062;
    108: 1082;
    110: 1102;
    112: 1122;
    114: 1142;
    116: 1162;
    118: 1182;
    120: 1202;
    122: 1222;
    124: 1242;
    126: 1262;
    128: 1282;
    130: 1302;
    132: 1322;
    134: 1342;
    136: 1362;
    138: 1383;
    140: 1403;
    144: 1443;
    146: 1463;
    148: 1483;
    150: 1503;
    152: 1523;
    154: 1542;
    156: 1562;
    158: 1583;
    70: 702;
    142: 1422;
  }

   interface LifeState {
    0: number;
    1: number;
    2: number;
  }

   interface MaxHeroHit {
    type: string;
    time: number;
    max: boolean;
    inflictor: string;
    unit: string;
    key: string;
    value: number;
    slot: number;
    player_slot: number;
  }

   interface MultiKills {
    2: number;
  }

   interface Obs {
    170: 1704;
    82: 823;
    100: 1004;
    112: 1123;
    114: 1143;
    134: 1343;
    136: 1363;
    146: 1464;
    150: 1504;
    156: 1563;
    166: 1663;
    174: 1744;
    88: 884;
    126: 1263;
    142: 1423;
    94: 944;
    144: 1444;
    172: 1724;
    84: 844;
    102: 1023;
    116: 1163;
    120: 1203;
    130: 1303;
  }

   interface ObsLeftLog {
    time: number;
    type: string;
    key: string;
    slot: number;
    x: number;
    y: number;
    z: number;
    entityleft: boolean;
    ehandle: number;
    player_slot: number;
  }

   interface ObsLog {
    time: number;
    type: string;
    key: string;
    slot: number;
    x: number;
    y: number;
    z: number;
    entityleft: boolean;
    ehandle: number;
    player_slot: number;
  }

   interface PermanentBuff {
    permanent_buff: number;
    stack_count: number;
  }

   interface Purchase {
    tango: number;
    flask: number;
    circlet: number;
    branches: number;
    tpscroll: number;
    mantle: number;
    recipe_null_talisman: number;
    null_talisman: number;
    recipe_veil_of_discord: number;
    magic_stick: number;
    recipe_magic_wand: number;
    magic_wand: number;
    boots: number;
    helm_of_iron_will: number;
    gloves: number;
    power_treads: number;
    belt_of_strength: number;
    veil_of_discord: number;
    cloak: number;
    ring_of_health: number;
    ring_of_regen: number;
    hood_of_defiance: number;
    staff_of_wizardry: number;
    dagon: number;
    recipe_dagon: number;
    dagon_2: number;
    dagon_3: number;
    dagon_4: number;
    dagon_5: number;
    smoke_of_deceit: number;
    dust?: number;
    tango_single?: number;
    quelling_blade?: number;
    faerie_fire?: number;
    stout_shield?: number;
    slippers?: number;
    wraith_band?: number;
    recipe_wraith_band?: number;
    ring_of_protection?: number;
    sobi_mask?: number;
    ring_of_basilius?: number;
    ring_of_aquila?: number;
    infused_raindrop?: number;
    ward_sentry?: number;
    relic?: number;
    recipe_radiance?: number;
    radiance?: number;
    blade_of_alacrity?: number;
    boots_of_elves?: number;
    yasha?: number;
    recipe_yasha?: number;
    recipe_manta?: number;
    manta?: number;
    ultimate_orb?: number;
    blink?: number;
    vitality_booster?: number;
    energy_booster?: number;
    soul_booster?: number;
    point_booster?: number;
    octarine_core?: number;
    mystic_staff?: number;
    recipe_shivas_guard?: number;
    platemail?: number;
    shivas_guard?: number;
    ogre_axe?: number;
    ultimate_scepter?: number;
    travel_boots?: number;
    recipe_travel_boots?: number;
    tome_of_knowledge?: number;
    chainmail?: number;
    blight_stone?: number;
    medallion_of_courage?: number;
    talisman_of_evasion?: number;
    solar_crest?: number;
    shadow_amulet?: number;
    recipe_silver_edge?: number;
    claymore?: number;
    invis_sword?: number;
    silver_edge?: number;
    clarity?: number;
    ward_observer?: number;
    enchanted_mango?: number;
    ward_dispenser?: number;
    wind_lace?: number;
    tranquil_boots?: number;
    glimmer_cape?: number;
    gauntlets?: number;
    bracer?: number;
    recipe_bracer?: number;
    recipe_rod_of_atos?: number;
    rod_of_atos?: number;
    gem?: number;
    dragon_lance?: number;
    demon_edge?: number;
    javelin?: number;
    quarterstaff?: number;
    monkey_king_bar?: number;
    mithril_hammer?: number;
    recipe_black_king_bar?: number;
    black_king_bar?: number;
    headdress?: number;
    recipe_headdress?: number;
    recipe_pipe?: number;
    pipe?: number;
    robe?: number;
    recipe_force_staff?: number;
    force_staff?: number;
    hurricane_pike?: number;
    urn_of_shadows?: number;
    recipe_urn_of_shadows?: number;
    recipe_spirit_vessel?: number;
    spirit_vessel?: number;
    bottle?: number;
    arcane_boots?: number;
    void_stone?: number;
    pers?: number;
    lotus_orb?: number;
  }

   interface PurchaseLog {
    time: number;
    key: string;
  }

   interface Runes {
    2?: number;
    3?: number;
    5?: number;
    1?: number;
    6?: number;
    0?: number;
    4?: number;
  }

   interface RunesLog {
    time: number;
    key: number;
  }

   interface SenLeftLog {
    time: number;
    type: string;
    key: string;
    slot: number;
    x: number;
    y: number;
    z: number;
    entityleft: boolean;
    ehandle: number;
    player_slot: number;
  }

   interface SenLog {
    time: number;
    type: string;
    key: string;
    slot: number;
    x: number;
    y: number;
    z: number;
    entityleft: boolean;
    ehandle: number;
    player_slot: number;
  }

   interface XpReasons {
    0: number;
    1: number;
    2: number;
    3?: number;
  }

   interface PurchaseTime {
    tango: number;
    flask: number;
    circlet: number;
    branches: number;
    tpscroll: number;
    mantle: number;
    null_talisman: number;
    magic_stick: number;
    magic_wand: number;
    boots: number;
    helm_of_iron_will: number;
    gloves: number;
    power_treads: number;
    belt_of_strength: number;
    veil_of_discord: number;
    cloak: number;
    ring_of_health: number;
    ring_of_regen: number;
    hood_of_defiance: number;
    staff_of_wizardry: number;
    dagon: number;
    dagon_2: number;
    dagon_3: number;
    dagon_4: number;
    dagon_5: number;
    smoke_of_deceit: number;
    tango_single?: number;
    quelling_blade?: number;
    faerie_fire?: number;
    stout_shield?: number;
    slippers?: number;
    wraith_band?: number;
    ring_of_protection?: number;
    sobi_mask?: number;
    ring_of_basilius?: number;
    ring_of_aquila?: number;
    infused_raindrop?: number;
    ward_sentry?: number;
    relic?: number;
    radiance?: number;
    blade_of_alacrity?: number;
    boots_of_elves?: number;
    yasha?: number;
    manta?: number;
    ultimate_orb?: number;
    blink?: number;
    vitality_booster?: number;
    energy_booster?: number;
    soul_booster?: number;
    point_booster?: number;
    octarine_core?: number;
    mystic_staff?: number;
    platemail?: number;
    shivas_guard?: number;
    ogre_axe?: number;
    ultimate_scepter?: number;
    travel_boots?: number;
    tome_of_knowledge?: number;
    chainmail?: number;
    blight_stone?: number;
    medallion_of_courage?: number;
    talisman_of_evasion?: number;
    solar_crest?: number;
    shadow_amulet?: number;
    claymore?: number;
    invis_sword?: number;
    silver_edge?: number;
    clarity?: number;
    ward_observer?: number;
    enchanted_mango?: number;
    wind_lace?: number;
    tranquil_boots?: number;
    glimmer_cape?: number;
    gauntlets?: number;
    bracer?: number;
    rod_of_atos?: number;
    gem?: number;
    dragon_lance?: number;
    demon_edge?: number;
    javelin?: number;
    quarterstaff?: number;
    monkey_king_bar?: number;
    mithril_hammer?: number;
    black_king_bar?: number;
    dust?: number;
    headdress?: number;
    pipe?: number;
    robe?: number;
    force_staff?: number;
    hurricane_pike?: number;
    urn_of_shadows?: number;
    spirit_vessel?: number;
    bottle?: number;
    arcane_boots?: number;
    void_stone?: number;
    pers?: number;
    lotus_orb?: number;
  }

   interface FirstPurchaseTime {
    tango: number;
    flask: number;
    circlet: number;
    branches: number;
    tpscroll: number;
    mantle: number;
    null_talisman: number;
    magic_stick: number;
    magic_wand: number;
    boots: number;
    helm_of_iron_will: number;
    gloves: number;
    power_treads: number;
    belt_of_strength: number;
    veil_of_discord: number;
    cloak: number;
    ring_of_health: number;
    ring_of_regen: number;
    hood_of_defiance: number;
    staff_of_wizardry: number;
    dagon: number;
    dagon_2: number;
    dagon_3: number;
    dagon_4: number;
    dagon_5: number;
    smoke_of_deceit: number;
    tango_single?: number;
    quelling_blade?: number;
    faerie_fire?: number;
    stout_shield?: number;
    slippers?: number;
    wraith_band?: number;
    ring_of_protection?: number;
    sobi_mask?: number;
    ring_of_basilius?: number;
    ring_of_aquila?: number;
    infused_raindrop?: number;
    ward_sentry?: number;
    relic?: number;
    radiance?: number;
    blade_of_alacrity?: number;
    boots_of_elves?: number;
    yasha?: number;
    manta?: number;
    ultimate_orb?: number;
    blink?: number;
    vitality_booster?: number;
    energy_booster?: number;
    soul_booster?: number;
    point_booster?: number;
    octarine_core?: number;
    mystic_staff?: number;
    platemail?: number;
    shivas_guard?: number;
    ogre_axe?: number;
    ultimate_scepter?: number;
    travel_boots?: number;
    tome_of_knowledge?: number;
    chainmail?: number;
    blight_stone?: number;
    medallion_of_courage?: number;
    talisman_of_evasion?: number;
    solar_crest?: number;
    shadow_amulet?: number;
    claymore?: number;
    invis_sword?: number;
    silver_edge?: number;
    clarity?: number;
    ward_observer?: number;
    enchanted_mango?: number;
    wind_lace?: number;
    tranquil_boots?: number;
    glimmer_cape?: number;
    gauntlets?: number;
    bracer?: number;
    rod_of_atos?: number;
    gem?: number;
    dragon_lance?: number;
    demon_edge?: number;
    javelin?: number;
    quarterstaff?: number;
    monkey_king_bar?: number;
    mithril_hammer?: number;
    black_king_bar?: number;
    dust?: number;
    headdress?: number;
    pipe?: number;
    robe?: number;
    force_staff?: number;
    hurricane_pike?: number;
    urn_of_shadows?: number;
    spirit_vessel?: number;
    bottle?: number;
    arcane_boots?: number;
    void_stone?: number;
    pers?: number;
    lotus_orb?: number;
  }

   interface ItemWin {
    tango: number;
    flask: number;
    circlet: number;
    branches: number;
    tpscroll: number;
    mantle: number;
    null_talisman: number;
    magic_stick: number;
    magic_wand: number;
    boots: number;
    helm_of_iron_will: number;
    gloves: number;
    power_treads: number;
    belt_of_strength: number;
    veil_of_discord: number;
    cloak: number;
    ring_of_health: number;
    ring_of_regen: number;
    hood_of_defiance: number;
    staff_of_wizardry: number;
    dagon: number;
    dagon_2: number;
    dagon_3: number;
    dagon_4: number;
    dagon_5: number;
    smoke_of_deceit: number;
    tango_single?: number;
    quelling_blade?: number;
    faerie_fire?: number;
    stout_shield?: number;
    slippers?: number;
    wraith_band?: number;
    ring_of_protection?: number;
    sobi_mask?: number;
    ring_of_basilius?: number;
    ring_of_aquila?: number;
    infused_raindrop?: number;
    ward_sentry?: number;
    relic?: number;
    radiance?: number;
    blade_of_alacrity?: number;
    boots_of_elves?: number;
    yasha?: number;
    manta?: number;
    ultimate_orb?: number;
    blink?: number;
    vitality_booster?: number;
    energy_booster?: number;
    soul_booster?: number;
    point_booster?: number;
    octarine_core?: number;
    mystic_staff?: number;
    platemail?: number;
    shivas_guard?: number;
    ogre_axe?: number;
    ultimate_scepter?: number;
    travel_boots?: number;
    tome_of_knowledge?: number;
    chainmail?: number;
    blight_stone?: number;
    medallion_of_courage?: number;
    talisman_of_evasion?: number;
    solar_crest?: number;
    shadow_amulet?: number;
    claymore?: number;
    invis_sword?: number;
    silver_edge?: number;
    clarity?: number;
    ward_observer?: number;
    enchanted_mango?: number;
    wind_lace?: number;
    tranquil_boots?: number;
    glimmer_cape?: number;
    gauntlets?: number;
    bracer?: number;
    rod_of_atos?: number;
    gem?: number;
    dragon_lance?: number;
    demon_edge?: number;
    javelin?: number;
    quarterstaff?: number;
    monkey_king_bar?: number;
    mithril_hammer?: number;
    black_king_bar?: number;
    dust?: number;
    headdress?: number;
    pipe?: number;
    robe?: number;
    force_staff?: number;
    hurricane_pike?: number;
    urn_of_shadows?: number;
    spirit_vessel?: number;
    bottle?: number;
    arcane_boots?: number;
    void_stone?: number;
    pers?: number;
    lotus_orb?: number;
  }

   interface ItemUsage {
    tango: number;
    flask: number;
    circlet: number;
    branches: number;
    tpscroll: number;
    mantle: number;
    null_talisman: number;
    magic_stick: number;
    magic_wand: number;
    boots: number;
    helm_of_iron_will: number;
    gloves: number;
    power_treads: number;
    belt_of_strength: number;
    veil_of_discord: number;
    cloak: number;
    ring_of_health: number;
    ring_of_regen: number;
    hood_of_defiance: number;
    staff_of_wizardry: number;
    dagon: number;
    dagon_2: number;
    dagon_3: number;
    dagon_4: number;
    dagon_5: number;
    smoke_of_deceit: number;
    tango_single?: number;
    quelling_blade?: number;
    faerie_fire?: number;
    stout_shield?: number;
    slippers?: number;
    wraith_band?: number;
    ring_of_protection?: number;
    sobi_mask?: number;
    ring_of_basilius?: number;
    ring_of_aquila?: number;
    infused_raindrop?: number;
    ward_sentry?: number;
    relic?: number;
    radiance?: number;
    blade_of_alacrity?: number;
    boots_of_elves?: number;
    yasha?: number;
    manta?: number;
    ultimate_orb?: number;
    blink?: number;
    vitality_booster?: number;
    energy_booster?: number;
    soul_booster?: number;
    point_booster?: number;
    octarine_core?: number;
    mystic_staff?: number;
    platemail?: number;
    shivas_guard?: number;
    ogre_axe?: number;
    ultimate_scepter?: number;
    travel_boots?: number;
    tome_of_knowledge?: number;
    chainmail?: number;
    blight_stone?: number;
    medallion_of_courage?: number;
    talisman_of_evasion?: number;
    solar_crest?: number;
    shadow_amulet?: number;
    claymore?: number;
    invis_sword?: number;
    silver_edge?: number;
    clarity?: number;
    ward_observer?: number;
    enchanted_mango?: number;
    wind_lace?: number;
    tranquil_boots?: number;
    glimmer_cape?: number;
    gauntlets?: number;
    bracer?: number;
    rod_of_atos?: number;
    gem?: number;
    dragon_lance?: number;
    demon_edge?: number;
    javelin?: number;
    quarterstaff?: number;
    monkey_king_bar?: number;
    mithril_hammer?: number;
    black_king_bar?: number;
    dust?: number;
    headdress?: number;
    pipe?: number;
    robe?: number;
    force_staff?: number;
    hurricane_pike?: number;
    urn_of_shadows?: number;
    spirit_vessel?: number;
    bottle?: number;
    arcane_boots?: number;
    void_stone?: number;
    pers?: number;
    lotus_orb?: number;
  }

   interface Cosmetic {
    item_id: number;
    name: string;
    prefab: string;
    creation_date?: Date;
    image_inventory: string;
    image_path: string;
    item_description: string;
    item_name: string;
    item_rarity: string;
    item_type_name: string;
    used_by_heroes: string;
  }

   interface GoldPerMin {
    raw: number;
    pct: number;
  }

   interface XpPerMin {
    raw: number;
    pct: number;
  }

   interface KillsPerMin {
    raw: number;
    pct: number;
  }

   interface LastHitsPerMin {
    raw: number;
    pct: number;
  }

   interface HeroDamagePerMin {
    raw: number;
    pct: number;
  }

   interface HeroHealingPerMin {
    raw: number;
    pct: number;
  }

   interface TowerDamage {
    raw: number;
    pct: number;
  }

   interface StunsPerMin {
    raw: number;
    pct: number;
  }

   interface Lhten {
    raw: number;
    pct: number;
  }

   interface Benchmarks {
    gold_per_min: GoldPerMin;
    xp_per_min: XpPerMin;
    kills_per_min: KillsPerMin;
    last_hits_per_min: LastHitsPerMin;
    hero_damage_per_min: HeroDamagePerMin;
    hero_healing_per_min: HeroHealingPerMin;
    tower_damage: TowerDamage;
    stuns_per_min: StunsPerMin;
    lhten: Lhten;
  }

   export interface Player {
    match_id: any;
    player_slot: number;
    ability_targets: AbilityTargets2;
    ability_upgrades_arr: number[];
    ability_uses: AbilityUses2;
    account_id: number;
    actions: Actions;
    additional_units?: any;
    assists: number;
    backpack_0: number;
    backpack_1: number;
    backpack_2: number;
    buyback_log: BuybackLog[];
    camps_stacked: number;
    creeps_stacked: number;
    damage: Damage;
    damage_inflictor: DamageInflictor;
    damage_inflictor_received: DamageInflictorReceived;
    damage_taken: DamageTaken;
    damage_targets: DamageTargets;
    deaths: number;
    denies: number;
    dn_t: number[];
    firstblood_claimed: number;
    gold: number;
    gold_per_min: number;
    gold_reasons: GoldReasons;
    gold_spent: number;
    gold_t: number[];
    hero_damage: number;
    hero_healing: number;
    hero_hits: HeroHits;
    hero_id: number;
    item_0: number;
    item_1: number;
    item_2: number;
    item_3: number;
    item_4: number;
    item_5: number;
    item_uses: ItemUses2;
    kill_streaks: KillStreaks;
    killed: Killed2;
    killed_by: KilledBy;
    kills: number;
    kills_log: KillsLog[];
    lane_pos: LanePos;
    last_hits: number;
    leaver_status: number;
    level: number;
    lh_t: number[];
    life_state: LifeState;
    max_hero_hit: MaxHeroHit;
    multi_kills: MultiKills;
    obs: Obs;
    obs_left_log: ObsLeftLog[];
    obs_log: ObsLog[];
    obs_placed: number;
    party_id: number;
    party_size: number;
    performance_others?: any;
    permanent_buffs: PermanentBuff[];
    pings: number;
    pred_vict: boolean;
    purchase: Purchase;
    purchase_log: PurchaseLog[];
    randomed: boolean;
    repicked?: any;
    roshans_killed: number;
    rune_pickups: number;
    runes: Runes;
    runes_log: RunesLog[];
    sen: any;
    sen_left_log: SenLeftLog[];
    sen_log: SenLog[];
    sen_placed: number;
    stuns: number;
    teamfight_participation: number;
    times: number[];
    tower_damage: number;
    towers_killed: number;
    xp_per_min: number;
    xp_reasons: XpReasons;
    xp_t: number[];
    personaname: string;
    name?: any;
    last_login?: Date;
    radiant_win: boolean;
    start_time: number;
    duration: number;
    cluster: number;
    lobby_type: number;
    game_mode: number;
    patch: number;
    region: number;
    isRadiant: boolean;
    win: number;
    lose: number;
    total_gold: number;
    total_xp: number;
    kills_per_min: number;
    kda: number;
    abandons: number;
    neutral_kills: number;
    tower_kills: number;
    courier_kills: number;
    lane_kills: number;
    hero_kills: number;
    observer_kills: number;
    sentry_kills: number;
    roshan_kills: number;
    necronomicon_kills: number;
    ancient_kills: number;
    buyback_count: number;
    observer_uses: number;
    sentry_uses: number;
    lane_efficiency: number;
    lane_efficiency_pct: number;
    lane: number;
    lane_role: number;
    is_roaming: boolean;
    purchase_time: PurchaseTime;
    first_purchase_time: FirstPurchaseTime;
    item_win: ItemWin;
    item_usage: ItemUsage;
    purchase_tpscroll: number;
    actions_per_min: number;
    life_state_dead: number;
    rank_tier?: number;
    cosmetics: Cosmetic[];
    benchmarks: Benchmarks;
    purchase_ward_sentry?: number;
    purchase_ward_observer?: number;
    purchase_gem?: number;
  }

   interface AllWordCounts {
    mi: number;
    equipo: number;
    no: number;
    tiene: number;
    ni: number;
    compendio: number;
    quiteo: number;
    creo: number;
    le: number;
    jugo: number;
    la: number;
    psicologica: number;
    g: number;
    nop: number;
    lul: number;
    falta: number;
    undy: number;
    cabros: number;
    cambiamos: number;
    a: number;
    este: number;
    otaku: number;
    culiao: number;
    por: number;
    cualuier: number;
    player: number;
    que: number;
    tengan: number;
    algun: number;
    dato: number;
    xd: number;
    cual: number;
    de: number;
    todos: number;
    los: number;
    otakus: number;
    del: number;
    otro: number;
    lado: number;
    lezard: number;
    pregunta: number;
    go: number;
    el: number;
    mas: number;
    pato: number;
    tengo: number;
    mh: number;
    bien: number;
    pasa: number;
    team: number;
    ptm: number;
  }

   interface Match {
    match_id: number;
    barracks_status_dire: number;
    barracks_status_radiant: number;
    chat: Chat[];
    cluster: number;
    cosmetics: any;
    dire_score: number;
    dire_team_id: number;
    draft_timings: DraftTiming[];
    duration: number;
    engine: number;
    first_blood_time: number;
    game_mode: number;
    human_players: number;
    leagueid: number;
    lobby_type: number;
    match_seq_num: number;
    negative_votes: number;
    objectives: Objective[];
    picks_bans: PicksBan[];
    positive_votes: number;
    radiant_gold_adv: number[];
    radiant_score: number;
    radiant_team_id: number;
    radiant_win: boolean;
    radiant_xp_adv: number[];
    skill?: any;
    start_time: number;
    teamfights: Teamfight[];
    tower_status_dire: number;
    tower_status_radiant: number;
    version: number;
    replay_salt: number;
    series_id: number;
    series_type: number;
    league: League;
    radiant_team: RadiantTeam;
    dire_team: DireTeam;
    players: Player[];
    patch: number;
    region: number;
    all_word_counts: AllWordCounts;
    my_word_counts: any;
    throw: number;
    loss: number;
    replay_url: string;
  }

}

