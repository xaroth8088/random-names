export default function magic_shops() {
  const nm1 = ['Abracapothecary', 'Abrakadabra', 'Ace High', 'Angels and Demons', 'Arcane Affinity', 'Arcane Infinity', 'Arcane Minded', 'Augury and Alchemy', 'Bona Fida', 'Botanica Magica', 'Breaking Point', 'Celestial Spell', 'Cures and Curses', 'Darkness and Lightness', 'Demons and Daemons', 'Dispel and That Spell', 'Doves and Pigeons', 'Dragonfire', 'Eagle\'s Eye', 'Embers and Ashes', 'Faerie Fire', 'Fantasma', 'Fortunes and Luck', 'Genie\'s Lantern', 'Genius in a Bottle', 'Ghosts \'n Stuff', 'Ghosts and Phantoms', 'Gobl-Inn', 'Gorgons and Gremlins', 'Griffins and Gargoyles', 'Heaven\'s Door', 'Hell\'s Gate', 'Herbs and Lotions', 'Hexes and Jinxes', 'Hocus Pocus', 'Hocusses and Pocusses', 'Horoscopes and Heroscopes', 'Illuminations', 'Invisibility and Invincibility', 'Ki and Chi', 'Nostrum Arcade', 'Omnipharmacon', 'Orbs and Talismans', 'Palindrome', 'Pandora', 'Pandora\'s Box', 'Pharmagician', 'Pixie Dust', 'Polymorph', 'Portable Potents', 'Potions and Cauldrons', 'Potions and Lotions', 'Rainbows and Sunshine', 'Runes and Relics', 'Runes and Rods', 'Shades and Shadows', 'Shifted Polarity', 'Siphons and Souls', 'Smoke and Mirrors', 'Solutions', 'Solutions and Answers', 'Spellbound', 'Spellunking', 'Spheres and Orbs', 'Sprites and Spirits', 'Staves and Stoves', 'Sticks and Stones', 'Taboos and Voodoos', 'Telekinesis and Telepathy', 'The Acolyte', 'The Alchemist', 'The Animorph', 'The Arcane Barrier', 'The Arcane Gateway', 'The Arcane Scroll', 'The Archangel', 'The Banished Beast', 'The Banshee\'s Scream', 'The Belly of the Beast', 'The Black Couldron', 'The Blink', 'The Blissful Blizzard', 'The Blood Pact', 'The Bloodstone', 'The Blue Moon', 'The Book of Riddles', 'The Bound Tome', 'The Bramble Staff', 'The Broken Vial', 'The Cat In The Hat', 'The Champion\'s Scroll', 'The Charm', 'The Cloak and Dagger', 'The Cloak of Invisibility', 'The Companion', 'The Cone of Cold', 'The Conjured Refreshment', 'The Counterspell', 'The Crystal Ball', 'The Dark Flame', 'The Daydream', 'The Decoy', 'The Devil\'s Key', 'The Dew Drop', 'The Double Whammy', 'The Dragon Aspect', 'The Dragon Dungeon', 'The Dragon Seal', 'The Dragon Slayer', 'The Dragon\'s Breath', 'The Dragonhide', 'The Dusty Tome', 'The Dwarven Beard', 'The Ectoplasm', 'The Elder Scroll', 'The Elemental Fury', 'The Equinox', 'The Ethereal', 'The Evil Eye', 'The Eye of Newt', 'The Falling Feather', 'The Familiar', 'The Faulty Dice', 'The Fel Steed', 'The Fifth Element', 'The Final Form', 'The Fireball', 'The Flying Carpet', 'The Force Field', 'The Frosty Finger', 'The Giant Gnome', 'The Golden Lead', 'The Grey Beard', 'The Halberdashery', 'The Holy Grail', 'The Hourglass', 'The Illusion', 'The Last Spell', 'The Laughing Leprichaun', 'The Laughing Skull', 'The Life Drain', 'The Little Bunyip', 'The Little Pixie', 'The Living Statue', 'The Magic Box', 'The Magic Dart', 'The Magnet', 'The Minotaur Maze', 'The Mirage', 'The Mirror Image', 'The Mistletoe', 'The Mithril Mantle', 'The Mystery', 'The Mystic Mythic', 'The Nether and Void', 'The Nightmare', 'The Ninth Life', 'The Pegasus', 'The Pestle and Mortar', 'The Philosopher\'s Stone', 'The Phoenix Feather', 'The Plane Walker', 'The Portal', 'The Prophecy', 'The Quiet Ritual', 'The Raven\'s Message', 'The Raven\'s Quill', 'The Red Slippers', 'The Revelation', 'The Ring of Life', 'The Risen Phoenix', 'The Royal Frog', 'The Rune', 'The Second Chance', 'The Shooting Star', 'The Silver Bullet', 'The Silver Spoon', 'The Siphon', 'The Siren\'s Song', 'The Skeleton Closet', 'The Sleeping Owl', 'The Sleight of Hand', 'The Soothsayer', 'The Sorcerer\'s Source', 'The Soul Apothecary', 'The Soulstone', 'The Spell Counter', 'The Sphere', 'The Spirit Walk', 'The Stone in the Sword', 'The Summoned Goods', 'The Summoning Scroll', 'The Sword in the Stone', 'The Talisman', 'The Tenth Ring', 'The Third Wish', 'The Time Warp', 'The Tinkered Tiara', 'The Trick Sleeve', 'The Twilight Zone', 'The Twinkle Star', 'The Twisting Nether', 'The Unicorn', 'The Unicorn\'s Horn', 'The Vision', 'The Voodoo Doll', 'The Wand\'s Want', 'The Water Elemental', 'The White Beard', 'The White Dove', 'The Wishbone', 'The Witch\'s Nose', 'The Wooden Stake', 'The Wyrm and the Worm', 'Tinctures \'n Tonics', 'Tomes and Tiaras', 'Trident Trinity', 'Trinkets and Tronkets', 'Triton\'s Tident', 'Wizard\'s Mail'];
  const nm2 = ['Adorable', 'Affordable', 'Aggressive', 'Amazing', 'Amusing', 'Ancient', 'Angry', 'Antique', 'Awesome', 'Awkward', 'Baby', 'Bathing', 'Big', 'Bigger', 'Bitter', 'Ebon', 'Bleeding', 'Blind', 'Blushing', 'Brass', 'Bright', 'Brilliant', 'Bronze', 'Brown', 'Cheap', 'Cheating', 'Cheering', 'Clean', 'Clever', 'Common', 'Corrupt', 'Corrupted', 'Crafty', 'Crazy', 'Creeping', 'Cuddly', 'Curly', 'Dancing', 'Dapper', 'Dark', 'Dirty', 'Dizzy', 'Dreaming', 'Eager', 'Early', 'Elder', 'Elegant', 'Elementary', 'Evil', 'Exalted', 'Expert', 'Fading', 'Fair', 'Fake', 'False', 'Famous', 'Fancy', 'Fantastic', 'Fast', 'Flimsy', 'Fluffy', 'Forsaken', 'Frozen', 'Gentle', 'Glass', 'Glowing', 'Golden', 'Graceful', 'Greedy', 'Green', 'Grim', 'Grumpy', 'Hairy', 'Happy', 'Haunting', 'Heavy', 'Hidden', 'Huge', 'Humble', 'Hungry', 'Invincible', 'Invisible', 'Iron', 'Jolly', 'Kind', 'Large', 'Last', 'Laughing', 'Lazy', 'Light', 'Little', 'Lonely', 'Loving', 'Lucky', 'Mad', 'Majestic', 'Mellow', 'Merry', 'Naughty', 'Needy', 'New', 'Nutty', 'Old', 'Phony', 'Plain', 'Pretty', 'Quick', 'Quiet', 'Rapid', 'Rare', 'Royal', 'Scary', 'Screaming', 'Second', 'Secret', 'Serene', 'Shady', 'Silly', 'Silver', 'Sleeping', 'Small', 'Sneaky', 'Steel', 'Storm', 'Striped', 'Tall', 'Thunder', 'Tiny', 'Tired', 'Weeping', 'Wicked', 'Wild', 'Wise'];
  const nm3 = ['Amulet', 'Angel', 'Artifact', 'Banshee', 'Basilisk', 'Beacon', 'Bigfoot', 'Blade', 'Book', 'Boots', 'Branch', 'Bunyip', 'Cauldron', 'Centaur', 'Cerberus', 'Chimera', 'Chupacabra', 'Cloak', 'Cockatrice', 'Codex', 'Crown', 'Cupid', 'Cyclops', 'Demon', 'Dragon', 'Draugr', 'Dryad', 'Dwarf', 'Elemental', 'Elf', 'Ent', 'Fairy', 'Faun', 'Feathered Serpent', 'Focus', 'Gargoyle', 'Gauntlet', 'Genie', 'Ghost', 'Giant', 'Gnome', 'Gorgon (Medussa)', 'Gremlin', 'Griffin', 'Grim Reaper', 'Hag', 'Harpy', 'Hellhound', 'Hippocampus', 'Hippogriff', 'Hobbit', 'Hobgoblin', 'Hourglass', 'Human', 'Hydra', 'Imp', 'Incubus/Succubus', 'Jackalope', 'Key', 'Kobold', 'Kraken', 'Leprechaun', 'Lich', 'Lute', 'Manticore', 'Marker', 'Mermaid', 'Minotaur', 'Mummy', 'Naga', 'Nymph', 'Ogre', 'Orb', 'Pegasus', 'Phoenix', 'Pixie', 'Poltergeist', 'Quill', 'Ring', 'Robe', 'Roc', 'Rune', 'Sandman', 'Sasquatch', 'Satyr', 'Scepter', 'Scroll', 'Seal', 'Shapeshifter', 'Shield', 'Siren', 'Skeleton', 'Skull', 'Sphere', 'Sphinx', 'Spriggan', 'Sprite', 'Staff', 'Stone', 'Sword', 'Talisman', 'Tiara', 'Tome', 'Troll', 'Unicorn', 'Valkyrie', 'Vampire', 'Vial', 'Wand', 'Wendigo', 'Werecat', 'Werewolf', 'White Stag', 'Winged Lion', 'Winged Unicorn', 'Wisp', 'Wolpertinger', 'World Turtle', 'Wraith', 'Wyvern', 'Yeti', 'Zombie'];


  i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      rnd = Math.floor(Math.random() * nm1.length);
      names = nm1[rnd];
    } else {
      rnd = Math.floor(Math.random() * nm2.length);
      rnd2 = Math.floor(Math.random() * nm3.length);
      names = `The ${nm2[rnd]} ${nm3[rnd2]}`;
    }
    return names;
  }
}
