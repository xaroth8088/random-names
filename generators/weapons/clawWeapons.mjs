export default function clawWeapons() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd;
  let rnd2;
  let
    rnd3;
  let names;
  const nm1 = ['Abomination', 'Advisary', 'Allowance', 'Alpha', 'Amnesia', 'Angerfist', 'Anguish', 'Appointment', 'Armageddon', 'Blackeye', 'Blacktalon', 'Blade Dance', 'Blinder', 'Blindstrike', 'Blinkstrike', 'Bloodfist', 'Bloodfury', 'Bloodrage', 'Bloodspiller', 'Brawler', 'Bruiser', 'Brutality', 'Brutalizer', 'Brute', 'Brutus', 'Bully', 'Can Opener', 'Carnage', 'Carver', 'Cat', 'Chaos', 'Checkpoint', 'Chillspike', 'Creature', 'Creep', 'Critter', 'Dawnbreaker', 'Death\'s Touch', 'Deathraze', 'Deception', 'Decimation', 'Delirium', 'Devourer', 'Dissector', 'Doom', 'Doom\'s Fist', 'Doom\'s Punch', 'Doombringer', 'Drillbit', 'Echo', 'Eclipse', 'Enigma', 'Epilogue', 'Etcher', 'Facebreaker', 'Facepalm', 'Faceplant', 'Faceslicer', 'Fistbumper', 'Frenzy', 'Fury', 'Gargoyle', 'Gash', 'Gladiator', 'Glutton', 'Greed', 'Grieve', 'Gripe', 'Grizzly', 'Gutpuncher', 'Hacker', 'Heartseeker', 'Hell\'s Fist', 'Hell\'s Fury', 'Hole In One', 'Homage', 'Honor\'s Hand', 'Hurricane', 'Infamy', 'Infinity', 'Insanity', 'Itch', 'Jaeger', 'Jawbreaker', 'Lacerator', 'Lament', 'Lance', 'Lazarus', 'Limbo', 'Lobster', 'Malevolence', 'Malice', 'Marrowstrike', 'Massacre', 'Masticator', 'Mitigator', 'Narcoleptic', 'Needle', 'Needles', 'Nibble', 'Nibbler', 'Night\'s Reach', 'Nightbane', 'Nightfall', 'Oathbinder', 'Oathbreaker', 'Oathkeeper', 'Oblivion', 'Omega', 'Paws', 'Perforator', 'Permeater', 'Phoenix', 'Pierce', 'Piercer', 'Piety', 'Pincer', 'Pincey', 'Pique', 'Predator', 'Prick', 'Prickler', 'Pride', 'Puncturer', 'Quota', 'Rage', 'Raptor', 'Rapture', 'Reflex', 'Reign', 'Requiem', 'Rodent', 'Ruthless', 'Savage', 'Savagery', 'Scar', 'Scratches', 'Scratchy', 'Scyther', 'Seism', 'Severance', 'Shadowfury', 'Shadowstrike', 'Shards', 'Shredder', 'Silence', 'Skinner', 'Skirmisher', 'Slice of Life', 'Snip', 'Spike', 'Spikey', 'Spite', 'Splinter', 'Stalker', 'Sting', 'Storm', 'Striker', 'Stripper', 'Sunder', 'Tenderizer', 'Terror', 'Thunder', 'Thunderstrike', 'Tickles', 'Tingle', 'Torment', 'Trickster', 'Trinity', 'Twister', 'Vacancy', 'Valkyrie', 'Vermin', 'Vice', 'Vile', 'Whirlwind', 'Wicked', 'Widow Maker', 'Willbreaker'];
  const nm2 = ['Ancient', 'Antique', 'Apocalypse', 'Apocalyptic', 'Arcane', 'Arched', 'Atuned', 'Bandit\'s', 'Baneful', 'Banished', 'Barbarian', 'Barbaric', 'Battleworn', 'Blazefury', 'Blood Infused', 'Blood-Forged', 'Bloodcursed', 'Bloodied', 'Bloodlord\'s', 'Bloodsurge', 'Bloodvenom', 'Bonecarvin', 'Brutal', 'Brutality', 'Burnished', 'Cataclysm', 'Cataclysmic', 'Challenger', 'Challenger\'s', 'Champion', 'Champion\'s', 'Cold-Forged', 'Conqueror', 'Conqueror\'s', 'Corroded', 'Corrupted', 'Crazed', 'Crying', 'Cursed', 'Curved', 'Dancing', 'Dark', 'Darkness', 'Defender', 'Defender\'s', 'Defiled', 'Defiling', 'Deluded', 'Demonic', 'Deserted', 'Desire\'s', 'Desolation', 'Destiny\'s', 'Diabolical', 'Dire', 'Doom', 'Doom\'s', 'Dragon\'s', 'Dragonbreath', 'Eerie', 'Enchanted', 'Engraved', 'Enlightened', 'Eternal', 'Exiled', 'Extinction', 'Faith\'s', 'Faithful', 'Fancy', 'Fearful', 'Feral', 'Ferocious', 'Fierce', 'Fiery', 'Fire Infused', 'Fireguard', 'Firesoul', 'Firestorm', 'Flaming', 'Flimsy', 'Forsaken', 'Fortune\'s', 'Foul', 'Fragile', 'Frail', 'Frenzied', 'Frost', 'Frozen', 'Furious', 'Fusion', 'Ghastly', 'Ghost', 'Ghost-Forged', 'Ghostly', 'Gladiator', 'Gladiator\'s', 'Gleaming', 'Glinting', 'Greedy', 'Grieving', 'Grim', 'Guard\'s', 'Guardian\'s', 'Hailstorm', 'Harmonized', 'Hateful', 'Haunted', 'Heartless', 'Heinous', 'Hero', 'Hero\'s', 'Hollow', 'Holy', 'Honed', 'Honor\'s', 'Hope\'s', 'Hopeless', 'Howling', 'Hungering', 'Improved', 'Impure', 'Incarnated', 'Infused', 'Inherited', 'Isolated', 'Jade Infused', 'Judgement', 'Keeper\'s', 'Knightly', 'Knight\'s', 'Legionnaire\'s', 'Liar\'s', 'Lich', 'Lightning', 'Lonely', 'Loyal', 'Lustful', 'Lusting', 'Malevolent', 'Malicious', 'Malificent', 'Malignant', 'Massive', 'Mended', 'Mercenary', 'Military', 'Misfortune\'s', 'Misty', 'Moonlit', 'Mourning', 'Nightmare', 'Oathkeeper\'s', 'Ominous', 'Peacekeeper', 'Peacekeeper\'s', 'Phantom', 'Polished', 'Possessed', 'Pride\'s', 'Prideful', 'Primal', 'Prime', 'Primitive', 'Promised', 'Protector\'s', 'Proud', 'Pure', 'Putrid', 'Raging', 'Recruit\'s', 'Refined', 'Reforged', 'Reincarnated', 'Relentless', 'Remorseful', 'Renewed', 'Renovated', 'Replica', 'Restored', 'Retribution', 'Ritual', 'Roaring', 'Ruby Infused', 'Rune-Forged', 'Runed', 'Rusty', 'Savage', 'Sentinel', 'Shadow', 'Shamanic', 'Sharpened', 'Silent', 'Singed', 'Singing', 'Sinister', 'Skyfall', 'Smooth', 'Soldier\'s', 'Solitude\'s', 'Sorcerer\'s', 'Sorrow\'s', 'Soul', 'Soul Infused', 'Soul-Forged', 'Soulcursed', 'Soulless', 'Spectral', 'Spectral-Forged', 'Spiteful', 'Storm', 'Storm-Forged', 'Stormfury', 'Stormguard', 'Terror', 'Thirsting', 'Thirsty', 'Thunder', 'Thunder-Forged', 'Thunderfury', 'Thunderguard', 'Thundersoul', 'Thunderstorm', 'Timeworn', 'Tormented', 'Trainee\'s', 'Treachery\'s', 'Twilight', 'Twilight\'s', 'Twisted', 'Tyrannical', 'Undead', 'Unholy', 'Vanquisher', 'Vengeance', 'Vengeful', 'Venom', 'Vicious', 'Victor', 'Vile', 'Vindication', 'Vindicator', 'Vindictive', 'Void', 'Volcanic', 'Vowed', 'War', 'War-Forged', 'Warden\'s', 'Warlord\'s', 'Warp', 'Warped', 'Warrior', 'Warrior\'s', 'Whistling', 'Wicked', 'Wind\'s', 'Wind-Forged', 'Windsong', 'Woeful', 'Wrathful', 'Wretched', 'Yearning', 'Zealous'];
  const nm3 = ['Adamantite', 'Mithril', 'Obsidian', 'Silver', 'Skeletal', 'Steel', 'Ebon', 'Ivory', 'Ironbark', 'Ebonsteel', 'Ebony', 'Onyx', 'Shadowsteel'];
  const nm4 = ['Bruiser', 'Claw', 'Maul', 'Paw', 'Razor', 'Render', 'Ripper', 'Slasher', 'Talon', 'Razors', 'Blades', 'Fangs', 'Grapple'];
  const nm5 = ['Bruiser', 'Claw', 'Maul', 'Paw', 'Razor', 'Render', 'Ripper', 'Slasher', 'Talon', 'Razors', 'Blades', 'Fangs', 'Grapple', 'Allegiance', 'Annihilation', 'Betrayer', 'Bond', 'Boon', 'Breaker', 'Bringer', 'Bruiser', 'Call', 'Champion', 'Conqueror', 'Crusader', 'Cry', 'Cunning', 'Dawn', 'Defender', 'Defiler', 'Destroyer', 'Destruction', 'Edge', 'Ender', 'Executioner', 'Fan', 'Favor', 'Ferocity', 'Foe', 'Gift', 'Glory', 'Guardian', 'Heirloom', 'Hope', 'Incarnation', 'Last Hope', 'Last Stand', 'Legacy', 'Memory', 'Might', 'Oath', 'Pact', 'Pledge', 'Promise', 'Prophecy', 'Protector', 'Ravager', 'Reach', 'Sculptor', 'Secret', 'Slayer', 'Soul', 'Terror', 'Token', 'Touch', 'Tribute', 'Vengeance', 'Voice', 'Whisper', 'Wit'];
  const nm6 = ['of Agony', 'of Ancient Power', 'of Anguish', 'of Ashes', 'of Assassins', 'of Black Magic', 'of Blessed Fortune', 'of Blessings', 'of Blight', 'of Blood', 'of Bloodlust', 'of Broken Bones', 'of Broken Dreams', 'of Broken Families', 'of Burdens', 'of Chaos', 'of Closing Eyes', 'of Conquered Worlds', 'of Corruption', 'of Cruelty', 'of Cunning', 'of Dark Magic', 'of Dark Souls', 'of Darkness', 'of Decay', 'of Deception', 'of Degradation', 'of Delusions', 'of Denial', 'of Desecration', 'of Diligence', 'of Dismay', 'of Dragonsouls', 'of Due Diligence', 'of Echoes', 'of Ended Dreams', 'of Ending Hope', 'of Ending Misery', 'of Eternal Bloodlust', 'of Eternal Damnation', 'of Eternal Glory', 'of Eternal Justice', 'of Eternal Rest', 'of Eternal Sorrow', 'of Eternal Struggles', 'of Eternity', 'of Executions', 'of Faded Memories', 'of Fallen Souls', 'of Fools', 'of Frost', 'of Frozen Hells', 'of Fury', 'of Giants', 'of Giantslaying', 'of Grace', 'of Grieving Widows', 'of Hate', 'of Hatred', 'of Hell\'s Games', 'of Hellish Torment', 'of Heroes', 'of Holy Might', 'of Honor', 'of Hope', 'of Horrid Dreams', 'of Horrors', 'of Illuminated Dreams', 'of Illumination', 'of Immortality', 'of Inception', 'of Infinite Trials', 'of Insanity', 'of Invocation', 'of Justice', 'of Light\'s Hope', 'of Lost Comrades', 'of Lost Hope', 'of Lost Voices', 'of Lost Worlds', 'of Magic', 'of Mercy', 'of Misery', 'of Mountains', 'of Mourning', 'of Mystery', 'of Necromancy', 'of Nightmares', 'of Oblivion', 'of Perdition', 'of Phantoms', 'of Power', 'of Pride', 'of Pride\'s Fall', 'of Putrefaction', 'of Reckoning', 'of Redemption', 'of Regret', 'of Riddles', 'of Secrecy', 'of Secrets', 'of Shadow Strikes', 'of Shadows', 'of Shifting Sands', 'of Shifting Worlds', 'of Silence', 'of Slaughter', 'of Souls', 'of Stealth', 'of Storms', 'of Subtlety', 'of Suffering', 'of Suffering\'s End', 'of Summoning', 'of Terror', 'of Thunder', 'of Time-Lost Memories', 'of Timeless Battles', 'of Titans', 'of Torment', 'of Traitors', 'of Trembling Hands', 'of Trials', 'of Truth', 'of Twilight\'s End', 'of Twisted Visions', 'of Unholy Blight', 'of Unholy Might', 'of Vengeance', 'of Visions', 'of Wasted Time', 'of Widows', 'of Wizardry', 'of Woe', 'of Wraiths', 'of Zeal', 'of the Ancients', 'of the Banished', 'of the Basilisk', 'of the Beast', 'of the Blessed', 'of the Breaking Storm', 'of the Brotherhood', 'of the Burning Sun', 'of the Caged Mind', 'of the Cataclysm', 'of the Champion', 'of the Claw', 'of the Corrupted', 'of the Covenant', 'of the Crown', 'of the Damned', 'of the Daywalker', 'of the Dead', 'of the Depth', 'of the Dreadlord', 'of the Earth', 'of the East', 'of the Emperor', 'of the Empty Void', 'of the End', 'of the Enigma', 'of the Fallen', 'of the Falling Sky', 'of the Flame', 'of the Forest', 'of the Forgotten', 'of the Forsaken', 'of the Gladiator', 'of the Harvest', 'of the Immortal', 'of the Incoming Storm', 'of the Insane', 'of the King', 'of the Lasting Night', 'of the Leviathan', 'of the Light', 'of the Lion', 'of the Lionheart', 'of the Lone Victor', 'of the Lone Wolf', 'of the Lost', 'of the Moon', 'of the Moonwalker', 'of the Night Sky', 'of the Night', 'of the Nightstalker', 'of the North', 'of the Occult', 'of the Oracle', 'of the Phoenix', 'of the Plague', 'of the Prince', 'of the Protector', 'of the Queen', 'of the Serpent', 'of the Setting Sun', 'of the Shadows', 'of the Sky', 'of the South', 'of the Stars', 'of the Storm', 'of the Summoner', 'of the Sun', 'of the Sunwalker', 'of the Talon', 'of the Undying', 'of the Victor', 'of the Void', 'of the West', 'of the Whispers', 'of the Wicked', 'of the Wind', 'of the Wolf', 'of the World', 'of the Wretched'];
  const i = Math.floor(Math.random() * 10); {
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
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm5.length);
      rnd3 = Math.floor(Math.random() * nm6.length);
      names = `${nm1[rnd]}, ${nm5[rnd2]} ${nm6[rnd3]}`;
    }
    return names;
  }
}
