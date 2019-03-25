export default function creatures() {
  let names;
  let rnd;
  let rnd2;
  const nm1 = ['Aldabra', 'Almond', 'Alpine', 'Amazon', 'Amber', 'Ambush', 'Amphibian', 'Ancient', 'Aqua', 'Arctic', 'Armored', 'Ash', 'Ashen', 'Assassin', 'Autumn', 'Awoken', 'Azure', 'Banded', 'Bearded', 'Black', 'Blazing', 'Blind', 'Blonde', 'Copper', 'Blood', 'Blue', 'Bleeding', 'Blushing', 'Bog', 'Brass', 'Bright', 'Brilliant', 'Bronze', 'Brown', 'Bull', 'Burrowing', 'Camouflaged', 'Cavalier', 'Cave', 'Cavern', 'Chaos', 'Chaotic', 'Cloaked', 'Clockwork', 'Clouded', 'Coastal', 'Coiled', 'Collared', 'Common', 'Covert', 'Creeping', 'Crested', 'Crimson', 'Crossed', 'Crowned', 'Dark', 'Dawn', 'Deaf', 'Deathlord', 'Den', 'Desert', 'Diamond', 'Dire', 'Dread', 'Dreaming', 'Dusk', 'Dwarf', 'Eastern', 'Ebony', 'Eerie', 'Elder', 'Electric', 'Elegant', 'Emerald', 'Emperor', 'Enraged', 'Eternal', 'Exalted', 'Fake', 'Feathered', 'Fiery', 'Fire', 'Flame', 'Flaming', 'Fluorescent', 'Flying', 'Forest', 'Forsaken', 'Burnt', 'Frigid', 'Frilled', 'Frost', 'Furry', 'Fury', 'Furious', 'Fuzzy', 'Ghost', 'Giant', 'Gilded', 'Glacial', 'Glass', 'Glorious', 'Glow', 'Glowing', 'Gold', 'Golden', 'Graceful', 'Gracious', 'Grand', 'Granite', 'Gray', 'Great', 'Greater', 'Green', 'Grey', 'Grizzly', 'Groaning', 'Grotto', 'Growling', 'Hairless', 'Hairy', 'Hallowed', 'Harlequin', 'Haunted', 'Haunting', 'Hell', 'Hermit', 'Hidden', 'Highland', 'Hollow', 'Horn', 'Horned', 'Howler', 'Hunting', 'Ice', 'Icy', 'Skeletal', 'Immortal', 'Imperial', 'Inferior', 'Insane', 'Invincible', 'Invisible', 'Iron', 'Isolated', 'Ivory', 'Jade', 'Jasmine', 'Jasper', 'Jester', 'Jumbo', 'Jungle', 'Killer', 'Labyrinth', 'Lake', 'Land', 'Laughing', 'Lava', 'Leopard', 'Legendary', 'Liberty', 'Light', 'Lion', 'Little', 'Livid', 'Lonely', 'Lurking', 'Lusting', 'Majestic', 'Malachite', 'Mammoth', 'Marine', 'Maroon', 'Marsh', 'Masked', 'Matriarch', 'Mellow', 'Midget', 'Mimic', 'Mini', 'Mire', 'Mirror', 'Mithril', 'Moaning', 'Mocking', 'Moon', 'Moss', 'Mountain', 'Mud', 'Night', 'Noble', 'Mysterious', 'Mystery', 'Nomadic', 'Northern', 'Nordic', 'Occult', 'Ocean', 'Onyx', 'Overlord', 'Painted', 'Pale', 'Paradise', 'Passive', 'Patriarch', 'Pink', 'Pixy', 'Platinum', 'Polar', 'Preying', 'Proud', 'Purple', 'Pygmy', 'Quiet', 'Rainbow', 'Red', 'Redwood', 'Regal', 'Restless', 'Revived', 'Rigid', 'River', 'Roaming', 'Roaring', 'Rock', 'Rosewood', 'Royal', 'Ruby', 'Rust', 'Sabre-Toothed', 'Saint', 'Sand', 'Sapphire', 'Scaled', 'Scarlet', 'Scorpion', 'Sea', 'Serpent', 'Shadow', 'Shocking', 'Shore', 'Silent', 'Silver', 'Single-Horned', 'Slayer', 'Slaying', 'Slender', 'Slow', 'Snow', 'Solitary', 'Southern', 'Spring', 'Stalking', 'Star', 'Steel', 'Storm', 'Striped', 'Stunning', 'Summer', 'Sun', 'Sunglow', 'Sunray', 'Sunset', 'Superior', 'Supple', 'Supreme', 'Swamp', 'Tailed', 'Terra Cotta', 'Terror', 'Thicket', 'Thistle', 'Thorny', 'Tiger', 'Timber', 'Timberwolf', 'Timeless', 'Titan', 'Tracker', 'Tracking', 'Tree', 'Tundra', 'Two-Headed', 'Two-Tailed', 'Undead', 'Underground', 'Unseen', 'Venomous', 'Violet', 'Wandering', 'Water', 'Weeping', 'Western', 'Wetland', 'Whimpering', 'Whiskered', 'Whistling', 'White', 'Wight', 'Wild', 'Winter', 'Wolf', 'Wood', 'Woodlands', 'Yellow'];
  const nm2 = ['Oxbeast', 'Ancients', 'Angels', 'Aliens', 'Anomalies', 'Anubis', 'Atranochs', 'Banshees', 'Basilisks', 'Beastmen', 'Beasts', 'Behemoths', 'Berserkers', 'Bigfoots', 'Biters', 'Bogeymen', 'Bunyips', 'Catfolk', 'Centaurs', 'Cerberuses', 'Changelings', 'Chimeras', 'Chupacabra', 'Cockatrice', 'Corruptions', 'Crawlers', 'Cupids', 'Cyborgs', 'Cyclopes', 'Daemons', 'Daywalkers', 'Demons', 'Devils', 'Doppelgangers', 'Dragonborn', 'Dragons', 'Drakes', 'Draugr', 'Dryads', 'Dwarves', 'Elementals', 'Elves', 'Ents', 'Ethereals', 'Fairies', 'Fauns', 'Fiends', 'Gargoyles', 'Genies', 'Ghosts', 'Ghouls', 'Giants', 'Gnolls', 'Gnomes', 'Goblins', 'Golems', 'Goliaths', 'Gorgons', 'Gremlins', 'Grendels', 'Griffins', 'Hags', 'Hagravens', 'Halflings', 'Harpies', 'Hellhounds', 'Hippocampi', 'Hippogriffs', 'Hobgoblins', 'Howlers', 'Humans', 'Hydras', 'Imps', 'Incubi', 'Infernals', 'Inugami', 'Jackalopes', 'Kobolds', 'Kraken', 'Leapers', 'Leprechauns', 'Leviathans', 'Liches', 'Lynxes', 'Medusas', 'Melusines', 'Mermaids', 'Minotaurs', 'Mongrels', 'Monsters', 'Mummies', 'Myrmidons', 'Menace', 'Walkers', 'Night Stalkers', 'Nightmares', 'Nightwalkers', 'Nymphs', 'Newts', 'Ogres', 'Orcs', 'Pegasi', 'Phantoms', 'Phoenix', 'Pisces', 'Pixies', 'Reapers', 'Reptilians', 'Rocs', 'Sandmen', 'Satyrs', 'Scourge', 'Shades', 'Shadows', 'Shapeshifters', 'Shifters', 'Sirens', 'Skeletons', 'Slimes', 'Souleaters', 'Souls', 'Spectres', 'Sphinxes', 'Spirits', 'Spriggans', 'Sprites', 'Succubi', 'Taurens', 'Terrors', 'Titans', 'Troglodytes', 'Trolls', 'Undeads', 'Unicorns', 'Valkyries', 'Vampires', 'Walkers', 'Wendigos', 'Werecats', 'Werewolves', 'Wispmother', 'Wisps', 'Wolpertingers', 'Wraiths', 'Wyrms', 'Wyverns', 'Yetis', 'Zombies'];
  {
    rnd = Math.floor(Math.random() * nm1.length);
    rnd2 = Math.floor(Math.random() * nm2.length);
    names = `${nm1[rnd]} ${nm2[rnd2]}`;
    return names;
  }
}
