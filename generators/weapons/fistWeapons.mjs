export default function fistWeapons() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  const nm1 = ['Abomination', 'Advisary', 'Agatha', 'Allegiance', 'Alpha', 'Amnesia', 'Anduril', 'Anger\'s Punch', 'Angerfist', 'Anguish', 'Apocalypse', 'Appointment', 'Armageddon', 'Arondite', 'Ash', 'Ashes', 'Ashrune', 'Betrayal', 'Betrayer', 'Black Bruise', 'Blackeye', 'Blackfury', 'Blackout', 'Blacktalon', 'Blazefury', 'Blazeguard', 'Blind Justice', 'Blinder', 'Blindstrike', 'Blinkstrike', 'Bloodbound', 'Bloodfall', 'Bloodfist', 'Bloodfury', 'Bloodrage', 'Bloodspiller', 'Bloodweep', 'Brawler', 'Broken Promise', 'Bruiser', 'Brutality', 'Brutalizer', 'Bully', 'Cataclysm', 'Catastrophe', 'Celeste', 'Chance', 'Chaos', 'Checkpoint', 'Chillspike', 'Comet', 'Corruption', 'Crimson', 'Cyclone', 'Darkness', 'Dawn', 'Dawn\'s Punch', 'Dawnbreaker', 'Death\'s Touch', 'Deathraze', 'Deathspade', 'Deception', 'Decimation', 'Depravity', 'Desolation', 'Despair', 'Destiny', 'Devastation', 'Devine', 'Devotion', 'Devourer', 'Diplomacy', 'Disappointment', 'Dominance', 'Dominion', 'Doom', 'Doom\'s Fist', 'Doom\'s Punch', 'Doombringer', 'Doorknocker', 'Due Diligence', 'Echo', 'Eclipse', 'Emergency', 'Enigma', 'Epilogue', 'Eternity', 'Extermination', 'Extinction', 'Facebreaker', 'Facepalm', 'Faceplant', 'Faithkeeper', 'Fate', 'Finality', 'Fist of Death', 'Fist of Eternity', 'Fist of Fury', 'Fist of Infinity', 'Fist of Life', 'Fist of Madness', 'Fist of Misery', 'Fist of Reason', 'Fist of Ruins', 'Fistbumper', 'Freak\'s Fist', 'Frenzy', 'Fury', 'Fury\'s Fist', 'Greed', 'Gutpuncher', 'Hail', 'Hand of Eternity', 'Hand of God', 'Hand of Hope', 'Hand of Infinity', 'Hand of Justice', 'Hand of Life', 'Hand of Madness', 'Hand of Midas', 'Hand of Misery', 'Hand of Reason', 'Hand of Time', 'Harbinger', 'Hatred', 'Hatred\'s Fist', 'Hatred\'s Punch', 'Heartseeker', 'Hell\'s Fist', 'Hell\'s Fury', 'Hell\'s Punch', 'Homage', 'Honor\'s Hand', 'Honorbound', 'Hope\'s End', 'Hope\'s Hand', 'Hurricane', 'Infamy', 'Infinity', 'Jaeger', 'Jawbreaker', 'Justice', 'Justifier', 'King\'s Defender', 'King\'s Legacy', 'Kingpin', 'Kinslayer', 'Kneader', 'Knight\'s Fall', 'Knight\'s Honor', 'Knightfall', 'Lament', 'Last Chance', 'Last Laugh', 'Last Resort', 'Last Rites', 'Last Words', 'Lazarus', 'Legacy', 'Lightning', 'Limbo', 'Malice', 'Marrowstrike', 'Massacre', 'Masticator', 'Mercy', 'Midnight', 'Misery\'s End', 'Mitigator', 'Narcoleptic', 'Nethersbane', 'Night\'s Fall', 'Night\'s Reach', 'Nightbane', 'Nightfall', 'Nighthorror', 'Nightterror', 'Nighttime', 'Nirvana', 'Oathbinder', 'Oathbreaker', 'Oathkeeper', 'Oblivion', 'Omega', 'Orbit', 'Party Pooper', 'Peacekeeper', 'Peacemaker', 'Perforator', 'Persuader', 'Persuasion', 'Piety', 'Pride', 'Prophecy', 'Rage', 'Rapture', 'Reckoning', 'Reign', 'Remorse', 'Requiem', 'Rigormortis', 'Savagery', 'Scar', 'Seism', 'Severance', 'Shadowfury', 'Shadowmoon', 'Shadowstrike', 'Silence', 'Skirmisher', 'Spite', 'Stalker', 'Storm', 'Stormbringer', 'Stormcaller', 'Stormcrow', 'Stormrider', 'Supernova', 'Supremacy', 'Suspension', 'Tankard', 'Tenderizer', 'Termination', 'Terror\'s Reach', 'The End', 'The Oculus', 'The Oracle', 'The Void', 'Thunder', 'Thunderstrike', 'Treachery', 'Tremor', 'Trickster', 'Trinity', 'Twister', 'Typhoon', 'Undoing', 'Vacancy', 'Valkyrie', 'Vanquisher', 'Vengeance', 'Warbringer', 'Warmonger', 'Whirlwind', 'Wicked', 'Widow Maker', 'Willbreaker', 'Wolf'];
  const nm2 = ['Ancient', 'Antique', 'Apocalypse', 'Apocalyptic', 'Arcane', 'Arched', 'Atuned', 'Bandit\'s', 'Baneful', 'Banished', 'Barbarian', 'Barbaric', 'Battleworn', 'Blazefury', 'Blood Infused', 'Blood-Forged', 'Bloodcursed', 'Bloodied', 'Bloodlord\'s', 'Bloodsurge', 'Bloodvenom', 'Bonecarvin', 'Brutal', 'Brutality', 'Burnished', 'Cataclysm', 'Cataclysmic', 'Challenger', 'Challenger\'s', 'Champion', 'Champion\'s', 'Cold-Forged', 'Conqueror', 'Conqueror\'s', 'Corroded', 'Corrupted', 'Crazed', 'Crying', 'Cursed', 'Curved', 'Dancing', 'Dark', 'Darkness', 'Defender', 'Defender\'s', 'Defiled', 'Defiling', 'Deluded', 'Demonic', 'Deserted', 'Desire\'s', 'Desolation', 'Destiny\'s', 'Diabolical', 'Dire', 'Doom', 'Doom\'s', 'Dragon\'s', 'Dragonbreath', 'Eerie', 'Enchanted', 'Engraved', 'Enlightened', 'Eternal', 'Exiled', 'Extinction', 'Faith\'s', 'Faithful', 'Fancy', 'Fearful', 'Feral', 'Ferocious', 'Fierce', 'Fiery', 'Fire Infused', 'Fireguard', 'Firesoul', 'Firestorm', 'Flaming', 'Flimsy', 'Forsaken', 'Fortune\'s', 'Foul', 'Fragile', 'Frail', 'Frenzied', 'Frost', 'Frozen', 'Furious', 'Fusion', 'Ghastly', 'Ghost', 'Ghost-Forged', 'Ghostly', 'Gladiator', 'Gladiator\'s', 'Gleaming', 'Glinting', 'Greedy', 'Grieving', 'Grim', 'Guard\'s', 'Guardian\'s', 'Hailstorm', 'Harmonized', 'Hateful', 'Haunted', 'Heartless', 'Heinous', 'Hero', 'Hero\'s', 'Hollow', 'Holy', 'Honed', 'Honor\'s', 'Hope\'s', 'Hopeless', 'Howling', 'Hungering', 'Improved', 'Impure', 'Incarnated', 'Infused', 'Inherited', 'Isolated', 'Jade Infused', 'Judgement', 'Keeper\'s', 'Knightly', 'Knight\'s', 'Legionnaire\'s', 'Liar\'s', 'Lich', 'Lightning', 'Lonely', 'Loyal', 'Lustful', 'Lusting', 'Malevolent', 'Malicious', 'Malificent', 'Malignant', 'Massive', 'Mended', 'Mercenary', 'Military', 'Misfortune\'s', 'Misty', 'Moonlit', 'Mourning', 'Nightmare', 'Oathkeeper\'s', 'Ominous', 'Peacekeeper', 'Peacekeeper\'s', 'Phantom', 'Polished', 'Possessed', 'Pride\'s', 'Prideful', 'Primal', 'Prime', 'Primitive', 'Promised', 'Protector\'s', 'Proud', 'Pure', 'Putrid', 'Raging', 'Recruit\'s', 'Refined', 'Reforged', 'Reincarnated', 'Relentless', 'Remorseful', 'Renewed', 'Renovated', 'Replica', 'Restored', 'Retribution', 'Ritual', 'Roaring', 'Ruby Infused', 'Rune-Forged', 'Runed', 'Rusty', 'Savage', 'Sentinel', 'Shadow', 'Shamanic', 'Sharpened', 'Silent', 'Singed', 'Singing', 'Sinister', 'Skyfall', 'Smooth', 'Soldier\'s', 'Solitude\'s', 'Sorcerer\'s', 'Sorrow\'s', 'Soul', 'Soul Infused', 'Soul-Forged', 'Soulcursed', 'Soulless', 'Spectral', 'Spectral-Forged', 'Spiteful', 'Storm', 'Storm-Forged', 'Stormfury', 'Stormguard', 'Terror', 'Thirsting', 'Thirsty', 'Thunder', 'Thunder-Forged', 'Thunderfury', 'Thunderguard', 'Thundersoul', 'Thunderstorm', 'Timeworn', 'Tormented', 'Trainee\'s', 'Treachery\'s', 'Twilight', 'Twilight\'s', 'Twisted', 'Tyrannical', 'Undead', 'Unholy', 'Vanquisher', 'Vengeance', 'Vengeful', 'Venom', 'Vicious', 'Victor', 'Vile', 'Vindication', 'Vindicator', 'Vindictive', 'Void', 'Volcanic', 'Vowed', 'War', 'War-Forged', 'Warden\'s', 'Warlord\'s', 'Warp', 'Warped', 'Warrior', 'Warrior\'s', 'Whistling', 'Wicked', 'Wind\'s', 'Wind-Forged', 'Windsong', 'Woeful', 'Wrathful', 'Wretched', 'Yearning', 'Zealous'];
  const nm3 = ['Adamantite', 'Mithril', 'Obsidian', 'Silver', 'Skeletal', 'Steel', 'Ebon', 'Ivory', 'Ironbark', 'Oak', 'Maple', 'Yew', 'Ashwood', 'Warpwood', 'Ebonsteel', 'Ebony', 'Onyx', 'Shadowsteel'];
  const nm4 = ['Bladed Fan', 'Bruiser', 'Fan', 'Fist', 'Grasp', 'Grip', 'Hand', 'Knuckles', 'Touch'];
  const nm5 = ['Allegiance', 'Annihilation', 'Betrayer', 'Bladed Fan', 'Bond', 'Boon', 'Breaker', 'Bringer', 'Bruiser', 'Call', 'Champion', 'Claw', 'Conqueror', 'Crusader', 'Cry', 'Cunning', 'Dawn', 'Defender', 'Defiler', 'Destroyer', 'Destruction', 'Edge', 'Ender', 'Executioner', 'Fan', 'Favor', 'Ferocity', 'Fist', 'Foe', 'Gift', 'Glory', 'Grasp', 'Grip', 'Guardian', 'Hand', 'Heirloom', 'Hope', 'Incarnation', 'Jaws', 'Knuckles', 'Last Hope', 'Last Stand', 'Legacy', 'Maul', 'Memory', 'Might', 'Oath', 'Pact', 'Paw', 'Pledge', 'Promise', 'Prophecy', 'Protector', 'Ravager', 'Razor', 'Reach', 'Reaper', 'Reaver', 'Render', 'Ripper', 'Sculptor', 'Secret', 'Slasher', 'Slayer', 'Soul', 'Talon', 'Terror', 'Token', 'Touch', 'Tribute', 'Trident', 'Vengeance', 'Voice', 'Whisper', 'Wit'];
  const nm6 = ['of Agony', 'of Ancient Power', 'of Anguish', 'of Ashes', 'of Assassins', 'of Black Magic', 'of Blessed Fortune', 'of Blessings', 'of Blight', 'of Blood', 'of Bloodlust', 'of Broken Bones', 'of Broken Dreams', 'of Broken Families', 'of Burdens', 'of Chaos', 'of Closing Eyes', 'of Conquered Worlds', 'of Corruption', 'of Cruelty', 'of Cunning', 'of Dark Magic', 'of Dark Souls', 'of Darkness', 'of Decay', 'of Deception', 'of Degradation', 'of Delusions', 'of Denial', 'of Desecration', 'of Diligence', 'of Dismay', 'of Dragonsouls', 'of Due Diligence', 'of Echoes', 'of Ended Dreams', 'of Ending Hope', 'of Ending Misery', 'of Eternal Bloodlust', 'of Eternal Damnation', 'of Eternal Glory', 'of Eternal Justice', 'of Eternal Rest', 'of Eternal Sorrow', 'of Eternal Struggles', 'of Eternity', 'of Executions', 'of Faded Memories', 'of Fallen Souls', 'of Fools', 'of Frost', 'of Frozen Hells', 'of Fury', 'of Giants', 'of Giantslaying', 'of Grace', 'of Grieving Widows', 'of Hate', 'of Hatred', 'of Hell\'s Games', 'of Hellish Torment', 'of Heroes', 'of Holy Might', 'of Honor', 'of Hope', 'of Horrid Dreams', 'of Horrors', 'of Illuminated Dreams', 'of Illumination', 'of Immortality', 'of Inception', 'of Infinite Trials', 'of Insanity', 'of Invocation', 'of Justice', 'of Light\'s Hope', 'of Lost Comrades', 'of Lost Hope', 'of Lost Voices', 'of Lost Worlds', 'of Magic', 'of Mercy', 'of Misery', 'of Mountains', 'of Mourning', 'of Mystery', 'of Necromancy', 'of Nightmares', 'of Oblivion', 'of Perdition', 'of Phantoms', 'of Power', 'of Pride', 'of Pride\'s Fall', 'of Putrefaction', 'of Reckoning', 'of Redemption', 'of Regret', 'of Riddles', 'of Secrecy', 'of Secrets', 'of Shadow Strikes', 'of Shadows', 'of Shifting Sands', 'of Shifting Worlds', 'of Silence', 'of Slaughter', 'of Souls', 'of Stealth', 'of Storms', 'of Subtlety', 'of Suffering', 'of Suffering\'s End', 'of Summoning', 'of Terror', 'of Thunder', 'of Time-Lost Memories', 'of Timeless Battles', 'of Titans', 'of Torment', 'of Traitors', 'of Trembling Hands', 'of Trials', 'of Truth', 'of Twilight\'s End', 'of Twisted Visions', 'of Unholy Blight', 'of Unholy Might', 'of Vengeance', 'of Visions', 'of Wasted Time', 'of Widows', 'of Wizardry', 'of Woe', 'of Wraiths', 'of Zeal', 'of the Ancients', 'of the Banished', 'of the Basilisk', 'of the Beast', 'of the Blessed', 'of the Breaking Storm', 'of the Brotherhood', 'of the Burning Sun', 'of the Caged Mind', 'of the Cataclysm', 'of the Champion', 'of the Claw', 'of the Corrupted', 'of the Covenant', 'of the Crown', 'of the Damned', 'of the Daywalker', 'of the Dead', 'of the Depth', 'of the Dreadlord', 'of the Earth', 'of the East', 'of the Emperor', 'of the Empty Void', 'of the End', 'of the Enigma', 'of the Fallen', 'of the Falling Sky', 'of the Flame', 'of the Forest', 'of the Forgotten', 'of the Forsaken', 'of the Gladiator', 'of the Harvest', 'of the Immortal', 'of the Incoming Storm', 'of the Insane', 'of the King', 'of the Lasting Night', 'of the Leviathan', 'of the Light', 'of the Lion', 'of the Lionheart', 'of the Lone Victor', 'of the Lone Wolf', 'of the Lost', 'of the Moon', 'of the Moonwalker', 'of the Night Sky', 'of the Night', 'of the Nightstalker', 'of the North', 'of the Occult', 'of the Oracle', 'of the Phoenix', 'of the Plague', 'of the Prince', 'of the Protector', 'of the Queen', 'of the Serpent', 'of the Setting Sun', 'of the Shadows', 'of the Sky', 'of the South', 'of the Stars', 'of the Storm', 'of the Summoner', 'of the Sun', 'of the Sunwalker', 'of the Talon', 'of the Undying', 'of the Victor', 'of the Void', 'of the West', 'of the Whispers', 'of the Wicked', 'of the Wind', 'of the Wolf', 'of the World', 'of the Wretched'];
  const nm7 = ['Abomination', 'Advisary', 'Agatha', 'Allegiance', 'Alpha', 'Amnesia', 'Anduril', 'Anger\'s Punch', 'Angerfist', 'Anguish', 'Apocalypse', 'Appointment', 'Armageddon', 'Arondite', 'Ash', 'Ashes', 'Ashrune', 'Betrayal', 'Betrayer', 'Black Bruise', 'Blackeye', 'Blackfury', 'Blackout', 'Blacktalon', 'Blazefury', 'Blazeguard', 'Blind Justice', 'Blinder', 'Blindstrike', 'Blinkstrike', 'Bloodbound', 'Bloodfall', 'Bloodfist', 'Bloodfury', 'Bloodrage', 'Bloodspiller', 'Bloodweep', 'Brawler', 'Broken Promise', 'Bruiser', 'Brutality', 'Brutalizer', 'Bully', 'Cataclysm', 'Catastrophe', 'Celeste', 'Chance', 'Chaos', 'Checkpoint', 'Chillspike', 'Comet', 'Corruption', 'Crimson', 'Cyclone', 'Darkness', 'Dawn', 'Dawn\'s Punch', 'Dawnbreaker', 'Death\'s Touch', 'Deathraze', 'Deathspade', 'Deception', 'Decimation', 'Depravity', 'Desolation', 'Despair', 'Destiny', 'Devastation', 'Devine', 'Devotion', 'Devourer', 'Diplomacy', 'Disappointment', 'Dominance', 'Dominion', 'Doom', 'Doom\'s Fist', 'Doom\'s Punch', 'Doombringer', 'Doorknocker', 'Due Diligence', 'Echo', 'Eclipse', 'Emergency', 'Enigma', 'Epilogue', 'Eternity', 'Extermination', 'Extinction', 'Facebreaker', 'Facepalm', 'Faceplant', 'Faithkeeper', 'Fate', 'Finality', 'Fistbumper', 'Freak\'s Fist', 'Frenzy', 'Fury', 'Fury\'s Fist', 'Greed', 'Gutpuncher', 'Hail', 'Harbinger', 'Hatred', 'Hatred\'s Fist', 'Hatred\'s Punch', 'Heartseeker', 'Hell\'s Fist', 'Hell\'s Fury', 'Hell\'s Punch', 'Homage', 'Honor\'s Hand', 'Honorbound', 'Hope\'s End', 'Hope\'s Hand', 'Hurricane', 'Infamy', 'Infinity', 'Jaeger', 'Jawbreaker', 'Justice', 'Justifier', 'King\'s Defender', 'King\'s Legacy', 'Kingpin', 'Kinslayer', 'Kneader', 'Knight\'s Fall', 'Knight\'s Honor', 'Knightfall', 'Lament', 'Last Chance', 'Last Laugh', 'Last Resort', 'Last Rites', 'Last Words', 'Lazarus', 'Legacy', 'Lightning', 'Limbo', 'Malice', 'Marrowstrike', 'Massacre', 'Masticator', 'Mercy', 'Midnight', 'Misery\'s End', 'Mitigator', 'Narcoleptic', 'Nethersbane', 'Night\'s Fall', 'Night\'s Reach', 'Nightbane', 'Nightfall', 'Nighthorror', 'Nightterror', 'Nighttime', 'Nirvana', 'Oathbinder', 'Oathbreaker', 'Oathkeeper', 'Oblivion', 'Omega', 'Orbit', 'Party Pooper', 'Peacekeeper', 'Peacemaker', 'Perforator', 'Persuader', 'Persuasion', 'Piety', 'Pride', 'Prophecy', 'Rage', 'Rapture', 'Reckoning', 'Reign', 'Remorse', 'Requiem', 'Rigormortis', 'Savagery', 'Scar', 'Seism', 'Severance', 'Shadowfury', 'Shadowmoon', 'Shadowstrike', 'Silence', 'Skirmisher', 'Spite', 'Stalker', 'Storm', 'Stormbringer', 'Stormcaller', 'Stormcrow', 'Stormrider', 'Supernova', 'Supremacy', 'Suspension', 'Tankard', 'Tenderizer', 'Termination', 'Terror\'s Reach', 'The End', 'The Oculus', 'The Oracle', 'The Void', 'Thunder', 'Thunderstrike', 'Treachery', 'Tremor', 'Trickster', 'Trinity', 'Twister', 'Typhoon', 'Undoing', 'Vacancy', 'Valkyrie', 'Vanquisher', 'Vengeance', 'Warbringer', 'Warmonger', 'Whirlwind', 'Wicked', 'Widow Maker', 'Willbreaker', 'Wolf'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 3) {
      rnd = Math.floor(Math.random() * nm1.length);
      names = nm1[rnd];
    } else if (i < 5) {
      rnd = Math.floor(Math.random() * nm2.length);
      rnd2 = Math.floor(Math.random() * nm4.length);
      names = `${nm2[rnd]} ${nm4[rnd2]}`;
    } else if (i < 7) {
      rnd = Math.floor(Math.random() * nm2.length);
      rnd2 = Math.floor(Math.random() * nm3.length);
      rnd3 = Math.floor(Math.random() * nm4.length);
      names = `${nm2[rnd]} ${nm3[rnd2]} ${nm4[rnd3]}`;
    } else {
      rnd = Math.floor(Math.random() * nm7.length);
      rnd2 = Math.floor(Math.random() * nm5.length);
      rnd3 = Math.floor(Math.random() * nm6.length);
      names = `${nm7[rnd]}, ${nm5[rnd2]} ${nm6[rnd3]}`;
    }
    return names;
  }
}
