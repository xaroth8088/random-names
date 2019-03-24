export default function space_fleets() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abyss', 'Alliance', 'Anarchist', 'Angel', 'Annihilation', 'Arachnid', 'Archangel', 'Assassination', 'Astral', 'August', 'Aurora', 'Babylon', 'Ballistics', 'Bane', 'Banshee', 'Bastion', 'Blaze', 'Bombardment', 'Bulldozer', 'Bulwark', 'Buster', 'Cardinal', 'Carnage', 'Cataclysm', 'Celestial', 'Cerberus', 'Champion', 'Chaos', 'Citadel', 'Climax', 'Coalition', 'Cobra', 'Colonial', 'Concord', 'Confederacy', 'Confederation', 'Crimson', 'Crossbone', 'Crucifix', 'Crucifixion', 'Curator', 'Custodian', 'Daemon', 'Dawn', 'Death', 'Defiance', 'Deluge', 'Demolition', 'Demon', 'Destiny', 'Devil', 'Diabolical', 'Dimension', 'Divine', 'Doom', 'Dread', 'Ebon', 'Eidolon', 'Elimination', 'Enigma', 'Eos', 'Eradication', 'Eternal', 'Ethereal', 'Exalted', 'Execution', 'Exile', 'Expansion', 'Expedition', 'Extermination', 'Extinction', 'Federation', 'Fire', 'Forsaken', 'Frenzy', 'Fury', 'Fusillade', 'Genie', 'Ghost', 'Glory', 'Grand', 'Guardian', 'Guerrilla', 'Hallowed', 'Havoc', 'Hell', 'Heresy', 'Hollow', 'Honor', 'Horde', 'Horror', 'Howler', 'Hunter', 'Huntress', 'Hurricane', 'Immolation', 'Immortal', 'Imperial', 'Infernal', 'Inferno', 'Infinity', 'Innovation', 'Insurgent', 'Judge', 'Judgment', 'Justice', 'Legend', 'Legion', 'Lightning', 'Lightyear', 'Limbo', 'Martyr', 'Matriarch', 'Mayhem', 'Miracle', 'Moira', 'Myriad', 'Mythic', 'Neo', 'Nether', 'Nova', 'Obisidian', 'Obliteration', 'Onyx', 'Oracle', 'Overlord', 'Overseer', 'Paladin', 'Patriarch', 'Phantom', 'Phoenix', 'Pinnacle', 'Plague', 'Prestige', 'Primal', 'Prime', 'Prodigy', 'Prophecy', 'Purgatory', 'Purity', 'Radical', 'Ravage', 'Raven', 'Rebel', 'Renegade', 'Republic', 'Revelation', 'Revenant', 'Revolution', 'Rogue', 'Royal', 'Ruthless', 'Sacred', 'Sanguine', 'Scourge', 'Sentinel', 'Sentry', 'Separatist', 'Seraph', 'Serpent', 'Shade', 'Shadow', 'Shepherd', 'Sinister', 'Sinner', 'Specter', 'Spirit', 'Stalker', 'Star', 'Star Alliance', 'Star League', 'Star Shield', 'Star Treaty', 'Stealth', 'Storm', 'Sundry', 'Supernova', 'Supreme', 'Syndicate', 'Tempest', 'Terminal', 'Terror', 'Thunder', 'Titan', 'Torment', 'Treasure', 'Triumph', 'Union', 'Unity', 'Valliance', 'Valor', 'Vanquisher', 'Velvet', 'Venom', 'Viper', 'Void', 'Warden', 'Wraith', 'Wreckage', 'Zion'];
  const nm2 = ['Armada', 'Attack Force', 'Corps', 'Defense Force', 'Division', 'Fleet', 'Flotilla', 'Force', 'Military', 'Navy', 'Space Corps', 'Space Force', 'Space Navy', 'Space Service', 'Squadron', 'Star Division', 'Star Forces', 'Vanguard'];


  i = Math.floor(Math.random() * 10);
  {
    rnd = Math.floor(Math.random() * nm1.length);
    rnd2 = Math.floor(Math.random() * nm2.length);
    names = `${nm1[rnd]} ${nm2[rnd2]}`;
    return names;
  }
}
