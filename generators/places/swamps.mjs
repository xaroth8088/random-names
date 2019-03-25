import sample from 'lodash/sample';

export default function swamps() {
  let names;
  const nm1 = ['Abysmal', 'Alligator', 'Amazon', 'Ancient', 'Arching', 'Arrowhead', 'Bamboo', 'Barren', 'Billowy', 'Black', 'Bland', 'Blue', 'Bogbeast', 'Boiling', 'Boundless', 'Brown', 'Bursting', 'Calm', 'Calmest', 'Charmed', 'Cheerless', 'Clouded', 'Cobalt', 'Cold', 'Coral', 'Crocodile', 'Crystal', 'Cursed', 'Dancing', 'Dark', 'Darkest', 'Dead', 'Deep', 'Deepest', 'Dense', 'Depraved', 'Distant', 'Dragonfly', 'Dread', 'Dreaded', 'Drowning', 'Dying', 'Eastern', 'Emerald', 'Empty', 'Enchanted', 'Ethereal', 'Ever Reaching', 'Flat', 'Flowing', 'Foaming', 'Foggy', 'Forbidden', 'Frog', 'Frozen', 'Furthest', 'Gleaming', 'Glistening', 'Grave', 'Gray', 'Green', 'Harmonious', 'Harmony', 'Heartless', 'Heaving', 'Hidden', 'Homeless', 'Hungry', 'Infernal', 'Infested', 'Infinite', 'Invisible', 'Isolated', 'Jade', 'Laughing', 'Lifeless', 'Lilypad', 'Living', 'Lonely', 'Lotus', 'Lucent', 'Majestic', 'Mesmerizing', 'Mighty', 'Mirrored', 'Misty', 'Moaning', 'Molten', 'Moon-lit', 'Mosquito', 'Motionless', 'Moving', 'Mushy', 'Narrow', 'Neglected', 'New', 'Northern', 'Peaceful', 'Perfumed', 'Piranha', 'Pleasant', 'Primeval', 'Quiet', 'Raging', 'Rainy', 'Red', 'Restless', 'Rippling', 'Rocking', 'Rolling', 'Rough', 'Rushing', 'Sandy', 'Sanguine', 'Savage', 'Serene', 'Serpent', 'Shimmering', 'Silent', 'Sleeping', 'Slumbrous', 'Soundless', 'Southern', 'Spacious', 'Sparkling', 'Sterile', 'Sunny', 'Surging', 'Thundering', 'Tinted', 'Toad', 'Tortoise', 'Tossing', 'Toxic', 'Tranquil', 'Treacherous', 'Tropic', 'Troubled', 'Turbulent', 'Turquoise', 'Turtle', 'Uncanny', 'Unfathomed', 'Unknown', 'Unstable', 'Vast', 'Venom', 'Violent', 'Walled', 'Wasted', 'Wasteful', 'Western', 'Whispering', 'White', 'Wild', 'Willow', 'Windy', 'Wondering', 'Wrinkled', 'Yearning'];
  const nm2 = ['Abyss', 'Basin', 'Bog', 'Bowels', 'Cove', 'Glades', 'Labyrinth', 'Mangrove', 'Marsh', 'Mire', 'Morass', 'Polder', 'Quag', 'Quagmire', 'Slough', 'Swamp', 'Waters', 'Wetlands'];
  const nm3 = ['b', 'br', 'bl', 'c', 'cl', 'cr', 'd', 'dr', 'f', 'fr', 'fl', 'g', 'gr', 'gl', 'gn', 'h', 'j', 'k', 'kr', 'kl', 'kn', 'm', 'n', 'p', 'pr', 'pl', 'q', 'qr', 'ql', 'r', 's', 'st', 'sr', 'str', 'sl', 't', 'tr', 'tl', 'v', 'vl', 'vr', 'w', 'wr', 'x', 'z', '', '', '', '', ''];
  const nm4 = ['a', 'e', 'i', 'o', 'u', 'y'];
  const nm5 = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z', '', '', '', '', '', ''];
  const nm6 = ['b', 'd', 'g', 'gh', 'h', 'hr', 'hs', 'ht', 'hst', 'hsh', 'hn', 'hm', 'hl', 'hz', 'hx', 'hq', 'k', 'ks', 'kx', 'l', 'll', 'lk', 'ln', 'lm', 'lz', 'lp', 'lt', 'ls', 'lst', 'lf', 'm', 'mn', 'mm', 'mt', 'ms', 'n', 'nn', 'nt', 'ns', 'p', 'ps', 'pt', 'ph', 'q', 'r', 'rs', 'rt', 'rst', 'rq', 'rk', 'rc', 'rf', 'rb', 'rd', 's', 'st', 'ss', 'sh', 'sk', 'sp', 't', 'th', 'ts', 'w', 'wth', 'x', 'z'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 2) {
      names = `The ${sample(nm1)} ${sample(nm2)}`;
    } else if (i < 4) {
      names = `${sample(nm1)} ${sample(nm2)}`;
    } else if (i < 7) {
      names = `${sample(nm3) + sample(nm4) + sample(nm6)} ${sample(nm2)}`;
    } else {
      names = `${sample(nm3) + sample(nm4) + sample(nm5) + sample(nm4) + sample(nm6)} ${sample(nm2)}`;
    }
    return names;
  }
}
