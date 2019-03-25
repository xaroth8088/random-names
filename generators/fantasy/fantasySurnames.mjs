export default function fantasySurnames() {
  let names;
  let rnd;
  let rnd2;
  const nm1 = ['Axe', 'Glow', 'Blade', 'Blood', 'Bone', 'Cloud', 'Crag',
    'Crest', 'Doom', 'Dream', 'Coven', 'Elf', 'Fern', 'Feather', 'Fire',
    'Fist', 'Flame', 'Forest', 'Hammer', 'Heart', 'Hell', 'Leaf', 'Light',
    'Moon', 'Rage', 'River', 'Rock', 'Shade', 'Shadow', 'Shield', 'Snow',
    'Spirit', 'Star', 'Steel', 'Stone', 'Swift', 'Tree', 'Whisper', 'Wind',
    'Wolf', 'Wood', 'Gloom', 'Glory', 'Orb', 'Ash', 'Blaze', 'Amber',
    'Autumn', 'Barley', 'Battle', 'Bear', 'Black', 'Blue', 'Boulder',
    'Bright', 'Bronze', 'Burning', 'Cask', 'Chest', 'Cinder', 'Clan', 'Claw',
    'Clear', 'Cliff', 'Cold', 'Common', 'Crystal', 'Dark', 'Dawn', 'Day',
    'Dead', 'Death', 'Deep', 'Dew', 'Dirge', 'Distant', 'Down', 'Dragon',
    'Dusk', 'Dust', 'Eagle', 'Earth', 'Ember', 'Even', 'Far', 'Flat', 'Flint',
    'Fog', 'Fore', 'Four', 'Free', 'Frost', 'Frozen', 'Full', 'Fuse', 'Gold',
    'Horse', 'Gore', 'Grand', 'Gray', 'Grass', 'Great', 'Green', 'Grizzly',
    'Hallow', 'Hallowed', 'Hard', 'Hawk', 'Haze', 'Heavy', 'Haven', 'High',
    'Hill', 'Holy', 'Honor', 'Forest', 'Humble', 'Hydra', 'Ice', 'Iron',
    'Keen', 'Laughing', 'Lightning', 'Lion', 'Lone', 'Long', 'Low', 'Luna',
    'Marble', 'Meadow', 'Mild', 'Mirth', 'Mist', 'Molten', 'Monster',
    'Morning', 'Moss', 'Mountain', 'Moon', 'Mourn', 'Mourning', 'Night',
    'Noble', 'Nose', 'Oat', 'Ocean', 'Pale', 'Peace', 'Phoenix', 'Pine',
    'Plain', 'Pride', 'Proud', 'Pyre', 'Rain', 'Rapid', 'Raven', 'Red',
    'Regal', 'Rich', 'Rose', 'Rough', 'Rumble', 'Rune', 'Sacred', 'Sage',
    'Saur', 'Sea', 'Serpent', 'Sharp', 'Silent', 'Silver', 'Simple', 'Single',
    'Skull', 'Sky', 'Slate', 'Smart', 'Snake', 'Soft', 'Solid', 'Spider',
    'Spring', 'Stag', 'Star', 'Stern', 'Still', 'Storm', 'Stout', 'Strong',
    'Summer', 'Sun', 'Tall', 'Three', 'Thunder', 'Titan', 'True', 'Truth',
    'Marsh', 'Tusk', 'Twilight', 'Two', 'Void', 'War', 'Wheat', 'Whit',
    'White', 'Wild', 'Winter', 'Wise', 'Wyvern', 'Young', 'Alpen', 'Crest',
    'Crow', 'Fallen', 'Farrow', 'Haven', 'Master', 'Nether', 'Nickle',
    'Raven', 'River', 'Stone', 'Tarren', 'Terra', 'Water', 'Willow', 'Wooden'];
  const nm2 = ['axe', 'glow', 'beam', 'blade', 'blood', 'bone', 'cloud', 'dane',
    'crag', 'crest', 'doom', 'dream', 'feather', 'fire', 'fist', 'flame',
    'forest', 'hammer', 'heart', 'hell', 'leaf', 'light', 'moon', 'rage',
    'river', 'rock', 'shade', 'claw', 'shadow', 'shield', 'snow', 'spirit',
    'star', 'steel', 'stone', 'swift', 'tree', 'whisper', 'wind', 'wolf',
    'wood', 'gloom', 'glory', 'orb', 'ash', 'blaze', 'arm', 'arrow', 'bane',
    'bash', 'basher', 'beard', 'belly', 'bend', 'bender', 'binder', 'bleeder',
    'blight', 'bloom', 'blossom', 'blower', 'glade', 'bluff', 'bough', 'bow',
    'brace', 'braid', 'branch', 'brand', 'breaker', 'breath', 'breeze',
    'brew', 'bringer', 'brook', 'brow', 'caller', 'chaser', 'reaper',
    'chewer', 'cleaver', 'creek', 'crusher', 'cut', 'cutter', 'dancer', 'dew',
    'down', 'draft', 'dreamer', 'drifter', 'dust', 'eye', 'eyes', 'fall',
    'fang', 'flare', 'flaw', 'flayer', 'flow', 'follower', 'flower', 'force',
    'forge', 'fury', 'gaze', 'gazer', 'gem', 'gleam', 'glide', 'grain',
    'grip', 'grove', 'guard', 'gust', 'hair', 'hand', 'helm', 'hide', 'horn',
    'hunter', 'jumper', 'keep', 'keeper', 'killer', 'lance', 'lash', 'less',
    'mane', 'mantle', 'mark', 'maul', 'maw', 'might', 'more', 'mourn', 'oak',
    'ore', 'peak', 'pelt', 'pike', 'punch', 'reaver', 'rider', 'ridge',
    'ripper', 'roar', 'run', 'runner', 'scar', 'scream', 'scribe', 'seeker',
    'shaper', 'shard', 'shot', 'shout', 'singer', 'sky', 'slayer', 'snarl',
    'snout', 'soar', 'song', 'sorrow', 'spark', 'spear', 'spell', 'spire',
    'splitter', 'sprinter', 'stalker', 'steam', 'stream', 'strength',
    'stride', 'strider', 'strike', 'striker', 'sun', 'surge', 'sword',
    'sworn', 'tail', 'taker', 'talon', 'thorn', 'tide', 'toe', 'track',
    'trap', 'trapper', 'vale', 'valor', 'vigor', 'walker', 'ward', 'watcher',
    'water', 'weaver', 'whirl', 'whisk', 'winds', 'wing', 'woods', 'wound',
    'brooke', 'fall', 'fallow', 'horn', 'root', 'shine', 'swallow', 'thorne',
    'willow', 'wood']; {
    rnd = Math.floor(Math.random() * nm1.length);
    rnd2 = Math.floor(Math.random() * nm2.length);
    while (rnd === rnd2) {
      rnd2 = Math.floor(Math.random() * nm2.length);
    }
    names = nm1[rnd] + nm2[rnd2];
    return names;
  }
}