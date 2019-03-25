export default function epithets() {
  let names;
  let rnd;
  let rnd;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Academic', 'Acclaimed', 'Accurate', 'Acrobat', 'Adept', 'Admirable', 'Admired', 'Adorable', 'Adored', 'Affectionate', 'Agile', 'Alert', 'Ambitious', 'Amused', 'Ancient', 'Angel', 'Angelic', 'Aromatic', 'Arrow', 'Artist', 'Artistic', 'Athletic', 'Austere', 'Authentic', 'Awkward', 'Baby', 'Babyface', 'Bald', 'Bear', 'Bearclaw', 'Beast', 'Beautiful', 'Behemoth', 'Beloved', 'Big Spender', 'Blessed', 'Blind', 'Blind Visionary', 'Blissful', 'Blond', 'Blushing', 'Bold', 'Brave', 'Bright', 'Brilliant', 'Brilliant Mind', 'Bronze', 'Bull', 'Bullet', 'Calm', 'Carefree', 'Careless', 'Cautious', 'Celebrated', 'Charming', 'Chaste', 'Chubby', 'Clean', 'Clever', 'Cloud', 'Colorful', 'Common', 'Commoner', 'Competent', 'Complex', 'Composed', 'Concerned', 'Content', 'Crafty', 'Cuddle', 'Cuddly', 'Cuddly Bear', 'Cunning', 'Cute', 'Dapper', 'Deaf', 'Decent', 'Defiant', 'Devoted', 'Devotee', 'Digital', 'Diligent', 'Dirty', 'Discrete', 'Disfigured', 'Disguised', 'Duke', 'Eager', 'Eagle Eyes', 'Early', 'Earnest', 'Easy-going', 'Ecstatic', 'Edge', 'Educated', 'Elegant', 'Emotional', 'Enchanted', 'Enchanting', 'Enigma', 'Enlightened', 'Enormous', 'Equal', 'Eternal Hunger', 'Euphoric', 'Exalted', 'Example', 'Expert', 'Fair', 'Fairy', 'Famous', 'Fancy', 'Fearless', 'Feisty', 'Feline', 'Feminine', 'Flamboyant', 'Flawed', 'Flawless', 'Forgiving', 'Free', 'Friend', 'Frozen', 'Funny', 'Fury', 'Fuzzy', 'Generous', 'Gentle', 'Gentle Giant', 'Gentle Heart', 'Genuine', 'Giant', 'Gifted', 'Giving', 'Glorious', 'Good', 'Graceful', 'Grand', 'Gray', 'Great', 'Guardian', 'Handsome', 'Harmless', 'Hermit', 'Holy', 'Honest', 'Honorable', 'Honored', 'Hospitable', 'Humble', 'Hungry', 'Idealist', 'Illustrious', 'Immortal', 'Incredible', 'Infamous', 'Infant', 'Infinite', 'Innocent', 'Ironclad', 'Jester', 'Jolly', 'Just', 'Juvenile', 'Keen', 'Kind', 'Knowing', 'Last', 'Late', 'Lawful', 'Lean', 'Learned', 'Light', 'Light Lord', 'Lion', 'Lionheart', 'Lionroar', 'Little', 'Lone Wolf', 'Loud', 'Love Fool', 'Loving', 'Loyal', 'Loyal Heart', 'Luxurious', 'Magnificent', 'Majestic', 'Mammoth', 'Marked', 'Marvelous', 'Masculine', 'Massive', 'Mellow', 'Merciful', 'Merry', 'Mighty', 'Mild', 'Mind Bender', 'Modern', 'Modest', 'Moral', 'Mouse', 'Muse', 'Mute', 'Naughty', 'Nightowl', 'Nimble', 'Nimble Mind', 'Nocturnal', 'Nurse', 'Old', 'Oracle', 'Ornate', 'Paladin', 'Paragon', 'Passionate', 'Patient', 'Peaceful', 'Perfumed', 'Pious', 'Plain', 'Pleasant', 'Powerful', 'Precious', 'Prestigious', 'Prime', 'Proud', 'Quaint', 'Quick', 'Quiet', 'Quirky', 'Realist', 'Rebellious', 'Red', 'Reliable', 'Rich', 'Risen Commoner', 'Rose', 'Round', 'Saint', 'Scented', 'Secret', 'Secret Master', 'Serene', 'Shield', 'Short', 'Shy', 'Silent', 'Sinless', 'Sleepy', 'Small', 'Sneaky', 'Sophisticated', 'Spider', 'Stark', 'Stout', 'Strict', 'Strong', 'Swift', 'Sympathetic', 'Tall', 'Terrific', 'Thirsty', 'Thoughtful', 'Tiny', 'Treasure', 'Treasured', 'Turbulent', 'Tyrant', 'Unfortunate', 'Unlucky', 'Unsung Hero', 'Valiant', 'Vengeful', 'Victorious', 'Vigilant', 'Virgin', 'Warrior', 'Weird', 'Whisper', 'White', 'Wild', 'Wise', 'Wolf', 'Wonderful', 'Wrathful', 'Young', 'Youthful', 'Zealous', 'Actor', 'Animal', 'Architect', 'Artist', 'Assassin', 'Baker', 'Beard', 'Boar', 'Bodyguard', 'Butcher', 'Butterfly', 'Conjurer', 'Cook', 'Cub', 'Dancer', 'Doctor', 'Enforcer', 'Executioner', 'Falconer', 'Fang', 'Fish', 'Fox', 'Grasshopper', 'Guest', 'Hawk', 'Hawker', 'Hen', 'Hound', 'Hunter', 'Inventor', 'Jigsaw', 'Judge', 'Kid', 'Kitten', 'Lamb', 'Mage', 'Master', 'Medic', 'Mole', 'Nightingale', 'Ox', 'Physician', 'Prophet', 'Razor', 'Scar', 'Scientist', 'Snowflake', 'Soothsayer', 'Speaker', 'Specialist', 'Stalker', 'Student', 'Surgeon', 'Warlock', 'Watcher', 'White Knight', 'Wizard'];
  const nm2 = ['Abandonded', 'Aggressive', 'Aggressor', 'Alert', 'Angry', 'Anguished', 'Ant', 'Anxious', 'Awful', 'Awkward', 'Baby', 'Babyface', 'Bad', 'Bald', 'Beast', 'Behemoth', 'Bewitched', 'Big Spender', 'Bitter', 'Bland', 'Blind', 'Blissful', 'Bloodied', 'Bony', 'Boring', 'Broken', 'Brute', 'Bull', 'Bullet', 'Careless', 'Chaste', 'Cheap', 'Cheap Shot', 'Chicken', 'Chubby', 'Clueless', 'Cold', 'Common', 'Commoner', 'Concerned', 'Confused', 'Corrupt', 'Corrupted', 'Corruptor', 'Coward', 'Crafty', 'Crazy', 'Creep', 'Criminal', 'Crooked', 'Cruel', 'Cunning', 'Cursed', 'Damaged', 'Damned', 'Dangerous', 'Dark', 'Dark Lord', 'Dark One', 'Dead', 'Dead Mind', 'Deaf', 'Defiant', 'Delayed', 'Delirious', 'Demon', 'Demonic', 'Deserter', 'Devil', 'Dimwitted', 'Dirty', 'Disfigured', 'Disloyal', 'Dreary', 'Droopy', 'Dull', 'Early', 'Edge', 'Emotional', 'Enchanted', 'Enormous', 'Envious', 'Eternal Hunger', 'Evil', 'Failure', 'Faint', 'Fake', 'Fake King', 'False', 'Fat', 'Feeble Mind', 'Feisty', 'Feminine', 'Fickle', 'Flamboyant', 'Flawed', 'Fool', 'Forsaken', 'Frozen', 'Fury', 'Giant', 'Gloomy', 'Grave', 'Gray', 'Greedy', 'Grim', 'Gross', 'Grotesque', 'Grumpy', 'Guilty', 'Hairy', 'Halfman', 'Harmless', 'Harsh', 'Hasty', 'Hermit', 'Hideous', 'Hollow', 'Hungry', 'Idle', 'Ignorant', 'Ill Tempered', 'Impure', 'Inborn', 'Infamous', 'Infant', 'Infantile', 'Inferior', 'Insane', 'Insecure', 'Insomniac', 'Jaded', 'Jealous', 'Jester', 'Joke', 'Juvenile', 'Lame', 'Last', 'Late', 'Lazy', 'Lean', 'Limp', 'Little', 'Lone Wolf', 'Lonely', 'Loner', 'Loser', 'Lost', 'Lost Mind', 'Lost One', 'Loud', 'Love Fool', 'Mad', 'Mammoth', 'Marked', 'Masculine', 'Massive', 'Meager', 'Meek', 'Mellow', 'Menace', 'Merciful', 'Mild', 'Misguided', 'Mouse', 'Mute', 'Naive', 'Naughty', 'Needy', 'Nervous', 'Nightowl', 'Numb', 'Numb Mind', 'Old', 'Overprotective', 'Pale', 'Penny Pincher', 'Perfumed', 'Phony', 'Pious', 'Plain', 'Puny', 'Pygmy', 'Quaint', 'Quiet', 'Rash', 'Rat', 'Rebellious', 'Reckless', 'Red', 'Rogue', 'Rotten', 'Round', 'Rude', 'Sarcastic', 'Scrawny', 'Secret', 'Secret Master', 'Serpent', 'Shady', 'Shallow', 'Shamed', 'Shameless', 'Short', 'Shy', 'Sickly', 'Silent', 'Simple', 'Simple-minded', 'Sinner', 'Skeleton', 'Skinny', 'Sleepy', 'Small', 'Snake', 'Sneaky', 'Spider', 'Stark', 'Strict', 'Stupid', 'Tame', 'Terrible', 'Thief', 'Thirsty', 'Thoughtless', 'Tiny', 'Tragic Eyes', 'Trivial', 'Turbulent', 'Ugly', 'Unfit', 'Unfortunate', 'Unlucky', 'Useless', 'Vain', 'Vengeful', 'Vicious', 'Violent', 'Virgin', 'Wandering Mind', 'Warmonger', 'Weak', 'Weary', 'Weasel', 'Weird', 'Whimp', 'Wicked', 'Wild', 'Witch', 'Worthless', 'Wrathful', 'Wretched', 'Actor', 'Animal', 'Assassin', 'Baboon', 'Bastard', 'Black Knight', 'Boar', 'Butcher', 'Cook', 'Cub', 'Dog', 'Eliminator', 'Enforcer', 'Executioner', 'Fang', 'Fish', 'Fox', 'Guest', 'Hen', 'Hound', 'Hunter', 'Jigsaw', 'Kid', 'Kitten', 'Lamb', 'Maneater', 'Maniac', 'Manslayer', 'Moaner', 'Mole', 'Necromancer', 'Nobody', 'Oaf', 'Pickpocket', 'Prophet', 'Puppy', 'Quack', 'Scar', 'Servant', 'Sheep', 'Silencer', 'Slayer', 'Soothsayer', 'Stalker', 'Surgeon', 'Vulture', 'Warlock', 'Whelp', 'Worm', 'Wreckage']; {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = `The ${nm2[rnd]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = `The ${nm1[rnd]}`;
    }
    return names;
  }
}
