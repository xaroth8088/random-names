export default function bomb_missiles() {
  let rnd;

  let rnd2;
  let
    rnd3;


  let names;

  const nm1 = ['Active', 'Adjustable', 'Agony', 'Orbital', 'Allegiance', 'Alpha', 'Amnesia', 'Anarchy', 'Anti-Personnel', 'Anti-Tank', 'Apocalypse', 'Apocalyptic', 'Armageddon', 'Ash', 'Astral', 'Atomic', 'Attuned', 'Augmented', 'Bandit\'s', 'Battlecruiser', 'Battlestar', 'Blackout', 'Brutal', 'Carbon', 'Cataclysm', 'Cataclysmic', 'Chaos', 'Close-Defence', 'Comet', 'Conqueror', 'Conqueror\'s', 'Cosmic', 'Cosmos', 'Crimson', 'Cruel', 'Cruiser', 'Cyclone', 'Dancing', 'Dark', 'Decimation', 'Defender', 'Defender\'s', 'Desolation', 'Diabolical', 'Dire', 'Discharge', 'Divine', 'Doom', 'Doom\'s', 'Ebon', 'Echo', 'Eclipse', 'Electromagnetic', 'Energized', 'Enhanced', 'Eternal', 'Extinction', 'Fancy', 'Feral', 'Ferocious', 'Fireguard', 'Firestorm', 'Frenzied', 'Frenzy', 'Furious', 'Fury', 'Gladiator', 'Grieving', 'Grim', 'Guard\'s', 'Guardian\'s', 'Harbinger', 'Heavy', 'High-Power', 'High-Speed', 'Honed', 'Howling', 'Hungering', 'Infantry', 'Infantry\'s', 'Infused', 'Judgement', 'Light', 'Lightning', 'Limbo', 'Long-Range', 'Low-Power', 'Low-Speed', 'Maleficent', 'Malevolent', 'Malice', 'Malicious', 'Massive', 'Mercenary', 'Merciless', 'Mercy', 'Meteor', 'Midnight', 'Military', 'Mourning', 'Nightfall', 'Nightmare', 'Nightwatch', 'Nuclear', 'Oblivion', 'Obsidian', 'Omega', 'Pendulum', 'Phantom', 'Planetary', 'Polarized', 'Powered', 'Prime', 'Primitive', 'Protector\'s', 'Pure', 'Raging', 'Rapture', 'Refined', 'Renewed', 'Requiem', 'Retribution', 'Roaring', 'Ruthless', 'Savage', 'Self-Guided', 'Sentinel', 'Shadow', 'Short-Range', 'Silent', 'Singing', 'Soldier\'s', 'Spectral', 'Standard', 'Storm', 'Stormbringer', 'Stormfury', 'Stormguard', 'Supernova', 'Thunder', 'Thunderfury', 'Thunderguard', 'Thunderstorm', 'Trans-Warp', 'Trauma', 'Tremor', 'Trinity', 'Twilight', 'Twilight\'s', 'Twisted', 'Typhoon', 'Unguided', 'Valkyrie', 'Vanquisher', 'Vengeance', 'Void', 'Vortex', 'War-Forged', 'Warbringer', 'Warlord\'s', 'Warmonger', 'Warmonger\'s', 'Warp', 'Warped', 'Whispering', 'Whistling'];
  const nm2 = ['Beam', 'Bomb', 'Cannon', 'Charge', 'Device', 'Explosive', 'Grenade', 'Launcher', 'Mine', 'Missile', 'Modulator', 'Ray', 'Ripper', 'Rocket', 'Shell', 'Sphere', 'Torpedo', 'Wave'];
  const nm3 = ['Anti-Matter', 'Bouncing', 'Bunker', 'Cluster', 'Electron', 'Flux', 'Fusion', 'Gravity', 'Meson', 'Smoke', 'Stink', 'Barrel', 'Dirty', 'Cobalt', 'Neutron', 'Hydrogen', 'Phase', 'Photon', 'Plasma', 'Proton', 'Pulse'];
  const nm4 = ['Allegiance', 'Annihilation', 'Betrayer', 'Bond', 'Boon', 'Breaker', 'Bringer', 'Bruiser', 'Butcher', 'Call', 'Champion', 'Conqueror', 'Crusader', 'Crusher', 'Cry', 'Cunning', 'Dawn', 'Defender', 'Defiler', 'Destroyer', 'Disposer', 'Ender', 'Executioner', 'Favor', 'Ferocity', 'Foe', 'Gift', 'Glory', 'Guardian', 'Heirloom', 'Hope', 'Incarnation', 'Last Hope', 'Last Stand', 'Legacy', 'Memory', 'Might', 'Oath', 'Pact', 'Pledge', 'Pounder', 'Promise', 'Prophecy', 'Protector', 'Queller', 'Ravager', 'Reach', 'Reaper', 'Sculptor', 'Secret', 'Slayer', 'Smasher', 'Soul', 'Suppressor', 'Terror', 'Token', 'Tribute', 'Vengeance', 'Voice', 'Whisper', 'Wit', 'Beam', 'Bomb', 'Cannon', 'Charge', 'Device', 'Explosive', 'Grenade', 'Launcher', 'Mine', 'Missile', 'Modulator', 'Ray', 'Ripper', 'Rocket', 'Shell', 'Sphere', 'Torpedo', 'Wave', 'Equalizer', 'Disintegrator', 'Eraser', 'Emissary', 'Agent', 'Bearer', 'Carrier', 'Messenger', 'Courier', 'Crier', 'Ambassador', 'Harbinger', 'Herald', 'Envoy', 'Dispatcher', 'Delegate'];
  const nm5 = ['of Agony', 'of Anguish', 'of Ashes', 'of Blight', 'of Blood', 'of Chaos', 'of Corruption', 'of Cruelty', 'of Cunning', 'of Darkness', 'of Decay', 'of Deception', 'of Degradation', 'of Delusions', 'of Denial', 'of Desecration', 'of Dismay', 'of Echoes', 'of Ended Dreams', 'of Ending Hope', 'of Ending Misery', 'of Eternal Bloodlust', 'of Eternal Damnation', 'of Eternal Glory', 'of Eternal Justice', 'of Eternal Rest', 'of Eternal Sorrow', 'of Eternal Struggles', 'of Eternity', 'of Executions', 'of Faded Memories', 'of Fallen Souls', 'of Fools', 'of Frozen Hells', 'of Fury', 'of Grace', 'of Grieving Widows', 'of Hate', 'of Hatred', 'of Hellish Torment', 'of Heroes', 'of Honor', 'of Hope', 'of Horrors', 'of Insanity', 'of Justice', 'of Lost Comrades', 'of Lost Hope', 'of Lost Voices', 'of Lost Worlds', 'of Mercy', 'of Misery', 'of Mourning', 'of Mystery', 'of Nightmares', 'of Oblivion', 'of Power', 'of Pride', 'of Reckoning', 'of Redemption', 'of Regret', 'of Riddles', 'of Secrecy', 'of Secrets', 'of Shadows', 'of Silence', 'of Souls', 'of Storms', 'of Subtlety', 'of Suffering', 'of Terror', 'of Thunder', 'of Torment', 'of Traitors', 'of Trembling Hands', 'of Trials', 'of Truth', 'of Vengeance', 'of Widows', 'of Woe', 'of Zeal', 'of the Burning Sun', 'of the Cataclysm', 'of the Champion', 'of the Covenant', 'of the Crown', 'of the Damned', 'of the Emperor', 'of the Void', 'of the End', 'of the Fallen', 'of the Forgotten', 'of the Forsaken', 'of the Incoming Storm', 'of the King', 'of the Lone Victor', 'of the Lone Wolf', 'of the Lost', 'of the Moon', 'of the Night Sky', 'of the Night', 'of the Phoenix', 'of the Protector', 'of the Setting Sun', 'of the Shadows', 'of the Sky', 'of the Stars', 'of the Storm', 'of the Sun', 'of the Victor', 'of the Void', 'of the Whispers', 'of the Wicked'];
  const nm6 = ['Abomination', 'Agony', 'Allegiance', 'Alpha', 'Amigo', 'Amnesia', 'Apocalypse', 'Armageddon', 'Ashes', 'Atomic Annie', 'Baby', 'Bad Medicine', 'Battery', 'Betrayal', 'Betrayer', 'Betty', 'Big Bertha', 'Big Daddy', 'Big Game', 'Big Rhonda', 'Blackout', 'Bloodfury', 'Bloodmoon', 'Bloodrage', 'Bloodspiller', 'Bloodweep', 'Bombardment', 'Boomer', 'Brutality', 'Brutalizer', 'Bulldog', 'Burn', 'Cataclysm', 'Catastrophe', 'Chance', 'Chaos', 'Comet', 'Corpsemaker', 'Corruption', 'Cosmos', 'Crash', 'Crimson', 'Crowd Control', 'Cruiser', 'Crush', 'Cyclone', 'Daddy', 'Damnation', 'Darkness', 'Dawn', 'Deathbringer', 'Deathmark', 'Deathraze', 'Decimation', 'Demise', 'Desolation', 'Despair', 'Destiny', 'Devastation', 'Devotion', 'Devourer', 'Dominance', 'Dominion', 'Doom', 'Dragonmaw', 'Dragonroar', 'Dragonstrike', 'Dreamcrusher', 'Dreamhunter', 'Due Diligence', 'Early Retirement', 'Echo', 'Eclipse', 'Emergency', 'End of Dreams', 'Endbringer', 'Enigma', 'Enterprise', 'Envy', 'Epilogue', 'Equality', 'Equalizer', 'Eternal Rest', 'Eternity', 'Eveningstar', 'Extermination', 'Extinction', 'Falling Star', 'Fate', 'Finality', 'Frankenstein', 'Frenzy', 'Fury', 'Gov\'ner', 'Grace', 'Harbinger', 'Harmony', 'Hatred', 'Headhunter', 'Heat', 'Hell\'s Scream', 'Homage', 'Honor\'s Call', 'Hope\'s End', 'Infamy', 'Infinity', 'Interrogator', 'Intervention', 'Jaeger', 'Judas', 'Judge', 'Justice', 'Justifier', 'King of Nines', 'Lament', 'Last Chance', 'Last Laugh', 'Last Rites', 'Last Word', 'Last Words', 'Lazarus', 'Legacy', 'Legionnaire', 'Life\'s Limit', 'Lightning', 'Lightningflash', 'Limbo', 'Lion\'s Roar', 'Lockjaw', 'Lupus', 'Magma', 'Malice', 'Maneater', 'Massacre', 'Matilda', 'Mercy', 'Meteor', 'Midnight', 'Mighty Mouse', 'Misery\'s End', 'Moonsight', 'Mortality', 'Narcoleptic', 'Night\'s Fall', 'Nightbane', 'Nightfall', 'Nightmare', 'Nighttime', 'Nightwatch', 'Nirvana', 'Oathbreaker', 'Oathkeeper', 'Oblivion', 'Ole Betsy', 'Omega', 'Optimist', 'Orbit', 'Party Pooper', 'Patience', 'Peacekeeper', 'Peacemaker', 'Pendulum', 'Perfect Storm', 'Persuasion', 'Piety', 'Pink Mist', 'Pride', 'Prophecy', 'Pulse', 'Punisher', 'Purifier', 'Quick Fix', 'Rage', 'Rapture', 'Rattlesnake', 'Reckoning', 'Reign', 'Remorse', 'Requiem', 'Retirement', 'Rigormortis', 'Salvation', 'Salvo', 'Scar', 'Serenity', 'Severance', 'Shadowfury', 'Shadowmoon', 'Shooting Star', 'Silence', 'Snake', 'Soulburn', 'Stalker', 'Storm', 'Storm Breaker', 'Storm-Weaver', 'Stormbringer', 'Stormrider', 'Sugar', 'Sunshine', 'Supernova', 'Supremacy', 'Suspension', 'Swan Song', 'Sweetie', 'Syndrome', 'Termination', 'The Ambassador', 'The Chancellor', 'The End', 'The Judge', 'The Light', 'The Oculus', 'The Oracle', 'The Pig', 'The Void', 'Thunder', 'Thundercall', 'Toots', 'Trauma', 'Treachery', 'Tremor', 'Tribunal', 'Tribute', 'Trinity', 'Trouble', 'Twilight', 'Typhoon', 'Ubiquity', 'Undoing', 'Vacancy', 'Valkyrie', 'Vanquisher', 'Vengeance', 'Warbringer', 'Warmonger', 'Whispers', 'Whisperwind', 'Wicked', 'Widow Maker', 'Willbreaker', 'Wit\'s End', 'Wolf'];


  const i = Math.floor(Math.random() * 10);
  {
    if (i < 6) {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm3.length);
      rnd3 = Math.floor(Math.random() * nm2.length);
      names = `${nm1[rnd]} ${nm3[rnd2]} ${nm2[rnd3]}`;
    } else if (i < 8) {
      rnd = Math.floor(Math.random() * nm6.length);
      names = nm6[rnd];
    } else {
      rnd = Math.floor(Math.random() * nm6.length);
      rnd2 = Math.floor(Math.random() * nm4.length);
      rnd3 = Math.floor(Math.random() * nm5.length);
      names = `${nm6[rnd]}, ${nm4[rnd2]} ${nm5[rnd3]}`;
    }
    return names;
  }
}