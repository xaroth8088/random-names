export default function guilds() {
  let rnd;

  let rnd2;


  let names;

  const nm1 = ['Acts', 'Affliction', 'Agony', 'Allies', 'Ambition', 'Angels', 'Anger', 'Anguish', 'Anomalies', 'Archers', 'Army', 'Assassins', 'Association', 'Attack', 'Avengers', 'Avenging', 'Ban', 'Bandits', 'Bane', 'Beasts', 'Betrayal', 'Blaze', 'Blessing', 'Blood', 'Bond', 'Boon', 'Bounty', 'Brigade', 'Burden', 'Butchers', 'Champions', 'Children', 'Citizens', 'Civilians', 'Commandos', 'Companions', 'Conquerers', 'Contract', 'Corruption', 'Courage', 'Crew', 'Crushers', 'Cry', 'Curse', 'Damnation', 'Dawn', 'Deceivers', 'Demons', 'Desire', 'Disciples', 'Disruption', 'Distrubance', 'Division', 'Dreams', 'Duty', 'End', 'Enemies', 'Enigmas', 'Entities', 'Executioners', 'Faith', 'Fame', 'Favor', 'Fiends', 'Fight', 'Fighters', 'Flames', 'Flash', 'Flight', 'Force', 'Forgiveness', 'Fortune', 'Freaks', 'Frenzy', 'Gang', 'Genocide', 'Ghosts', 'Gift', 'Gladiators', 'Glory', 'Grace', 'Grieve', 'Grudge', 'Guardians', 'Guards', 'Hammers', 'Harbingers', 'Harmony', 'Harvesters', 'Hate', 'Hell', 'Heralds', 'Heroes', 'Home', 'Honor', 'Hope', 'Horde', 'Host', 'House', 'Howl', 'Hunters', 'Illusions', 'Immortals', 'Justice', 'Keepers', 'Killers', 'Knights', 'Last', 'Legacy', 'Legion', 'Light', 'Mages', 'Masters', 'Memories', 'Men', 'Mercenaries', 'Messengers', 'Might', 'Minds', 'Misery', 'Monsters', 'Mysteries', 'Mystery', 'Mystics', 'Nightmares', 'Oath', 'Oracles', 'Order', 'Outcasts', 'Outlaws', 'Outsiders', 'Overseers', 'Pact', 'Pain', 'Paladins', 'Passion', 'Patience', 'Peace', 'Phantoms', 'Plague', 'Promise', 'Prophecies', 'Prophets', 'Protection', 'Protectors', 'Punishment', 'Quiet', 'Rage', 'Raiders', 'Rebels', 'Recruits', 'Refugees', 'Rejects', 'Relics', 'Residents', 'Retaliation', 'Retribution', 'Revelations', 'Revenge', 'Riddles', 'Riders', 'Rise', 'Rivals', 'Roar', 'Rogues', 'Ruins', 'Rumours', 'Sacrifice', 'Safety', 'Scourge', 'Scouts', 'Screams', 'Screech', 'Secret', 'Secrets', 'Seducers', 'Seekers', 'Seers', 'Sentinels', 'Serenity', 'Service', 'Shades', 'Shadows', 'Shamans', 'Shame', 'Shephers', 'Shields', 'Silence', 'Sinners', 'Smiles', 'Society', 'Soldiers', 'Sorcerers', 'Spears', 'Specters', 'Spirits', 'Spite', 'Squad', 'Stalkers', 'Stewards', 'Storm', 'Strangers', 'Strength', 'Struggle', 'Survivors', 'Swarm', 'Swords', 'Tears', 'Tempest', 'Templars', 'Terror', 'Thieves', 'Thugs', 'Thunder', 'Tirade', 'Torment', 'Tradition', 'Traitors', 'Tranquillity', 'Treasure', 'Trial', 'Trust', 'Vengeance', 'Venom', 'Victims', 'Vigor', 'Vikings', 'Villains', 'Vision', 'Visions', 'Visitors', 'Voice', 'Voices', 'Wards', 'Warlords', 'Warriors', 'Wealth', 'Weapons', 'Weight', 'Whisper', 'Whispers', 'Widdows', 'Witches', 'Wizards', 'Women', 'Workers', 'Wound', 'Wraiths', 'Wrath', 'Yell', 'Vendetta', 'Rebellion', 'Requiem', 'Myth', 'Destiny', 'Evolution', 'Rangers', 'Redemption', 'Rebirth', 'Atonement', 'Purification', 'Pursuit', 'Recovery'];
  const nm2 = ['of the Abandoned', 'of the Alligator', 'of the Ambitious', 'of the Angelic', 'of the Angry', 'of the Ape', 'of the Badger', 'of the Bear', 'of the Betrayed', 'of the Bitter', 'of the Boar', 'of the Bold', 'of the Bound', 'of the Brave', 'of the Buffalo', 'of the Bull', 'of the Carious', 'of the Cheeky', 'of the Classified', 'of the Claw', 'of the Clean', 'of the Cobra', 'of the Collapsed', 'of the Concealed', 'of the Corrupt', 'of the Corrupted', 'of the Cosmos', 'of the Cougar', 'of the Covert', 'of the Crocodile', 'of the Crooked', 'of the Crow', 'of the Crumbled', 'of the Damned', 'of the Dark', 'of the Dead', 'of the Decayed', 'of the Deceased', 'of the Deceived', 'of the Defiant', 'of the Deluded', 'of the Demonic', 'of the Departed', 'of the Depraved', 'of the Deserted', 'of the Desired', 'of the Despicable', 'of the Devoted', 'of the Discarded', 'of the Diseased', 'of the Disgraceful', 'of the Dishonest', 'of the Dissipated', 'of the Dog', 'of the Dove', 'of the Dragon', 'of the Dragonfly', 'of the Eager', 'of the Eagle', 'of the Earth', 'of the Ended', 'of the Enraged', 'of the Extinct', 'of the Faithful', 'of the Fallen', 'of the Fearless', 'of the Feeble', 'of the Fierce', 'of the Forbidden', 'of the Forest', 'of the Forgotten', 'of the Forsaken', 'of the Fortunate', 'of the Fox', 'of the Furious', 'of the Galaxy', 'of the Gorilla', 'of the Grave', 'of the Ground', 'of the Hallowed', 'of the Hateful', 'of the Hawk', 'of the Heroic', 'of the Hidden', 'of the Holy', 'of the Honest', 'of the Honored', 'of the Hopeful', 'of the Horse', 'of the Humble', 'of the Ill', 'of the Immoral', 'of the Impure', 'of the Infernal', 'of the Innocent', 'of the Jackal', 'of the Jaguar', 'of the Joyful', 'of the Joyous', 'of the Jungle', 'of the Lake', 'of the Lamb', 'of the Land', 'of the Last Age', 'of the Lewd', 'of the Light', 'of the Lion', 'of the Living', 'of the Lost', 'of the Lost Age', 'of the Loyal', 'of the Lynx', 'of the Mace', 'of the Meek', 'of the Mental', 'of the Mighty', 'of the Mislead', 'of the Moon', 'of the Mountain', 'of the Mysterious', 'of the Mystical', 'of the Natural', 'of the Nefarious', 'of the Night', 'of the Noble', 'of the Obscene', 'of the Obscure', 'of the Ocean', 'of the Owl', 'of the Passive', 'of the Patient', 'of the Perished', 'of the Pious', 'of the Poor', 'of the Pristine', 'of the Profane', 'of the Promised', 'of the Pure', 'of the Putrid', 'of the Ram', 'of the Rat', 'of the Raven', 'of the Reckless', 'of the Rejected', 'of the Resolute', 'of the Revenant', 'of the Rhino', 'of the Rich', 'of the Right', 'of the Righteous', 'of the Rotten', 'of the Ruined', 'of the Sacred', 'of the Sacrificed', 'of the Scorpion', 'of the Sea', 'of the Seduced', 'of the Serene', 'of the Serpent', 'of the Shadows', 'of the Shameless', 'of the Shark', 'of the Sheep', 'of the Shield', 'of the Sick', 'of the Sincere', 'of the Skull', 'of the Snake', 'of the Sophisticated', 'of the Spear', 'of the Spider', 'of the Stag', 'of the Stars', 'of the Stout', 'of the Strong', 'of the Sun', 'of the Sword', 'of the Taboo', 'of the Tainted', 'of the Talon', 'of the Tame', 'of the Tiger', 'of the Tricked', 'of the Trusted', 'of the Undead', 'of the Universe', 'of the Unknown', 'of the Valiant', 'of the Vanquished', 'of the Vicious', 'of the Vigorous', 'of the Virtuous', 'of the Void', 'of the Vulture', 'of the Wasted', 'of the Weak', 'of the Weasel', 'of the Wicked', 'of the Withered', 'of the Wolf', 'of the Wolves', 'of the Woods', 'of the World', 'of the Wretched', 'of the Wrong', 'of Abandonment', 'of Ambition', 'of Angels', 'of Anger', 'of Betrayal', 'of Courage', 'of Claws', 'of Corruption', 'of Damnation', 'of Darkness', 'of Death', 'of Decay', 'of Deceivance', 'of Defiance', 'of Delusion', 'of Desire', 'of Devotion', 'of Disease', 'of Nature', 'of Ending', 'of Extinction', 'of Faith', 'of Fear', 'of Forests', 'of Fortune', 'of Fury', 'of Hate', 'of Heroes', 'of Honor', 'of Hope', 'of Impurity', 'of Innocence', 'of Joy', 'of Light', 'of Life', 'of Loyalty', 'of Might', 'of Mountains', 'of Mystery', 'of Mystics', 'of Nature', 'of Darkness', 'of Oceans', 'of Patience', 'of Promises', 'of Purity', 'of Rejects', 'of Seduction', 'of Serenity', 'of Shadows', 'of Shame', 'of Skulls', 'of Strength', 'of Tricks', 'of Trust', 'of Vigor', 'of Virtue', 'of Wolves', 'from the Grave', 'from the Ocean', 'from the Sea', 'from the Mountains', 'from the Woods', 'from the Forest', 'from the Empire', 'from the People'];
  const nm3 = ['Aqua', 'Arm', 'Banner', 'Battle', 'Bellow', 'Black', 'Blood', 'Blue', 'Bone', 'Boulder', 'Bright', 'Bronze', 'Burning', 'Chaos', 'Char', 'Cold', 'Cunning', 'Dark', 'Dashing', 'Doom', 'Drum', 'Earth', 'Ebon', 'Fallen', 'Fel', 'Fire', 'Forge', 'Forsaken', 'Frost', 'Gentle', 'Golden', 'Gray', 'Hallow', 'Hell', 'High', 'Hollow', 'Howling', 'Humming', 'Iron', 'Ivory', 'Jade', 'Killing', 'Lightning', 'Low', 'Mad', 'Magic', 'Marble', 'Metal', 'Midnight', 'Monster', 'Moon', 'Night', 'Poison', 'Quick', 'Rain', 'Raven', 'Red', 'Rumble', 'Running', 'Shadow', 'Shatter', 'Shimmer', 'Shiver', 'Silver', 'Snow', 'Solar', 'Split', 'Steel', 'Stone', 'Storm', 'Sun', 'Swift', 'Thunder', 'Tremble', 'Twin', 'Venom', 'Water', 'White', 'Wind', 'Wrecking'];
  const nm4 = [' Assault', ' Dragons', ' Eagles', ' Foxes', ' Hawks', ' Hearts', ' Lust', ' Maggots', ' Oath', ' Rage', ' Rats', ' Wolves', 'arrows', 'bane', 'beards', 'blades', 'bow', 'brand', 'brawlers', 'breaker', 'brows', 'cloaks', 'clouds', 'crawlers', 'crushers', 'cry', 'dawn', 'death', 'fall', 'field', 'fists', 'flags', 'flayers', 'force', 'ford', 'forge', 'fury', 'garde', 'glades', 'guard', 'guards', 'hammers', 'hands', 'hoods', 'landers', 'laws', 'light', 'manes', 'mantles', 'might', 'pikes', 'roses', 'scars', 'shade', 'shapers', 'shields', 'shifters', 'shroud', 'sins', 'skulls', 'smiths', 'song', 'stars', 'stand', 'striders', 'swords', 'talons', 'thorn', 'tops', 'tips', 'vale', 'well'];
  const nm5 = ['Abandoned', 'Accurate', 'Alchemy', 'Alpha', 'Ambitious', 'Amused', 'Angelic', 'Angry', 'Arcane', 'Aspiring', 'Assassins', 'Assorted', 'Awful', 'Banished', 'Betrayed', 'Bite-sized', 'Bitter', 'Black', 'Blades', 'Blue', 'Bold', 'Bound', 'Bounty', 'Brave', 'Broken', 'Burning', 'Chosen', 'Clean', 'Closed', 'Collapsed', 'Common', 'Concealed', 'Contract', 'Corrupt', 'Corrupted', 'Crescent', 'Crimson', 'Crumbled', 'Cutlass', 'Damned', 'Dark', 'Dazzling', 'Decayed', 'Deceased', 'Deceived', 'Defiant', 'Delicate', 'Deluded', 'Demolition', 'Demonic', 'Departed', 'Depraved', 'Deserted', 'Desired', 'Despicable', 'Devoted', 'Discarded', 'Diseased', 'Disgraceful', 'Dishonest', 'Dispensable', 'Divided', 'Electric', 'Elite', 'Emerald', 'Encircling', 'Enraged', 'Eternal', 'Ethereal', 'Extra-Small', 'Faded', 'Fallen', 'Famous', 'Fast', 'Fearless', 'Fierce', 'Flesh', 'Fluttering', 'Forbidden', 'Forgotten', 'Forsaken', 'Fortunate', 'Funny', 'Furious', 'Golden', 'Grave', 'Grouchy', 'Grubby', 'Hallowed', 'Harmonious', 'Heavens', 'Hellfire', 'Heroic', 'Hidden', 'High', 'Holy', 'Honest', 'Honored', 'Hopeful', 'Humble', 'Icky', 'Ill', 'Immoral', 'Impure', 'Independent', 'Infamous', 'Infernal', 'Innocent', 'Iron', 'Itchy', 'Jolly', 'Joyful', 'Joyous', 'Jumpy', 'Large', 'Last', 'Living', 'Lost', 'Macabre', 'Massive', 'Mental', 'Mighty', 'Mini', 'Mislead', 'Moonlight', 'Mortal', 'Mysterious', 'Mystic', 'Mystical', 'Nameless', 'Nefarious', 'Noble', 'Nocturnal', 'Obscene', 'Obscure', 'Omega', 'Ominous', 'Open', 'Ordained', 'Ordinary', 'Perished', 'Phobic', 'Pious', 'Power', 'Pristine', 'Profane', 'Promised', 'Pure', 'Purple', 'Putrid', 'Reckless', 'Red', 'Rejected', 'Resolute', 'Revenant', 'Righteous', 'Rising', 'Roaring', 'Robust', 'Rogue', 'Rotten', 'Royal', 'Ruined', 'Sacred', 'Sacrificed', 'Scarlet', 'Scary', 'Scourge', 'Sealed', 'Searing', 'Sedated', 'Shaded', 'Shadow', 'Shameless', 'Shattered', 'Shivering', 'Sightless', 'Silent', 'Sleeping', 'Sore', 'Super', 'Tainted', 'Tasty', 'Tempest', 'Templar', 'Tricked', 'Trusted', 'Twilight', 'Tyranny', 'Ugly', 'Unarmed', 'Unknown', 'Unseen', 'Valiant', 'Vanquished', 'Vicious', 'Vigorous', 'Virtuous', 'Vulgar', 'Wasted', 'Weak', 'Wicked', 'Winged', 'Withered', 'World', 'Worthless', 'Wretched', 'Wrong', 'Grim'];
  const nm6 = ['Admirals', 'Alliance', 'Ancients', 'Anomalies', 'Apocalypse', 'Ashes', 'Assailant', 'Assassins', 'Assault', 'Berserkers', 'Blow', 'Brigade', 'Brothers', 'Butchers', 'Champions', 'Chaos', 'Criminals', 'Crossfire', 'Crusaders', 'Death', 'Defeat', 'Demons', 'Devils', 'Discipline', 'Domination', 'Dominion', 'Doom', 'Dust', 'Dynasty', 'Embers', 'End', 'Enemy', 'Entities', 'Executors', 'Exiles', 'Exterminators', 'Fall', 'Feast', 'Force', 'Gang', 'Gangsters', 'Genesis', 'Genocide', 'Gods', 'Grave', 'Gunslingers', 'Harvesters', 'Headhunters', 'Helix', 'Honour', 'Hooligans', 'Hunters', 'Illusions', 'Immortals', 'Inferno', 'Intent', 'Jackals', 'Killers', 'Knights', 'Legacy', 'Legion', 'Liquidators', 'Mafia', 'Maggots', 'Moguls', 'Nightmare', 'Noobs', 'Oblivion', 'Occupation', 'Outlaws', 'Paradox', 'Perception', 'Pergatory', 'Plague', 'Power', 'Predation', 'Predators', 'Prestige', 'Primeval', 'Privilege', 'Punished', 'Punks', 'Rage', 'Rebels', 'Regiment', 'Sacrament', 'Saints', 'Serenity', 'Shadow', 'Shadows', 'Sharpshooters', 'Singularity', 'Slayers', 'Soldiers', 'Squad', 'Strategy', 'Supremacy', 'Switchblades', 'Syndicate', 'Synergy', 'Thugs', 'Thunder', 'Titans', 'Tyranny', 'Valor', 'Vanguard', 'Vanguardians', 'Vanguards', 'Vengeance', 'Veterans', 'Vigor', 'Vigorous', 'Vikings', 'Vitality', 'Voltiac', 'Vultures', 'War', 'Warfare', 'Warheads', 'Widowmakers', 'Wolverines', 'Wound', 'Incarnation'];


  const i = Math.floor(Math.random() * 10);
  {
    if (i < 3) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      names = `${nm5[rnd]} ${nm6[rnd2]}`;
    } else if (i < 7) {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      names = `${nm1[rnd]} ${nm2[rnd2]}`;
    } else {
      rnd = Math.floor(Math.random() * nm3.length);
      rnd2 = Math.floor(Math.random() * nm4.length);
      names = nm3[rnd] + nm4[rnd2];
    }
    return names;
  }
}