import sample from 'lodash/sample';

export default function lakes() {
  let names;
  const nm1 = ['Abysmal', 'Alligator', 'Amazon', 'Arctic', 'Arrowhead', 'Bamboo', 'Barren', 'Black', 'Bland', 'Blue', 'Bogbeast', 'Boiling', 'Bottomless', 'Brilliant', 'Bursting', 'Calm', 'Calmest', 'Charmed', 'Cheerless', 'Cobalt', 'Cold', 'Coral', 'Crocodile', 'Crystal', 'Cursed', 'Dancing', 'Dark', 'Darkest', 'Dead', 'Deep', 'Deepest', 'Dense', 'Depraved', 'Distant', 'Dragonfly', 'Dread', 'Dreaded', 'Eastern', 'Emerald', 'Empty', 'Enchanted', 'Ethereal', 'Fair', 'Flat', 'Flowing', 'Fluorescent', 'Foaming', 'Forbidden', 'Frothy', 'Frozen', 'Furthest', 'Glassy', 'Gleaming', 'Glistening', 'Grave', 'Gray', 'Green', 'Harmonious', 'Harmony', 'Heartless', 'Heaving', 'Hungry', 'Infernal', 'Infinite', 'Invisible', 'Iris', 'Isolated', 'Jade', 'Laughing', 'Lifeless', 'Lilypad', 'Living', 'Lonely', 'Lotus', 'Lucent', 'Majestic', 'Mesmerizing', 'Midnight', 'Mighty', 'Mirror', 'Mirrored', 'Misty', 'Moaning', 'Moon-lit', 'Motionless', 'Moving', 'Narrow', 'Neglected', 'New', 'Northern', 'Peaceful', 'Perfumed', 'Pleasant', 'Primeval', 'Pristine', 'Quiet', 'Raging', 'Rainy', 'Red', 'Reflecting', 'Relaxing', 'Restless', 'Rippling', 'Rocking', 'Rolling', 'Rough', 'Rushing', 'Salty', 'Sandy', 'Sanguine', 'Sapphire', 'Savage', 'Serene', 'Shaded', 'Shadow', 'Shady', 'Shimmering', 'Silent', 'Sleeping', 'Soundless', 'Southern', 'Spacious', 'Sparkling', 'Sterile', 'Sunny', 'Surging', 'Tadpole', 'Teal', 'Thundering', 'Tinted', 'Tortoise', 'Tranquil', 'Tropic', 'Troubled', 'Turbulent', 'Turquoise', 'Turtle', 'Ugly', 'Uncanny', 'Unknown', 'Unstable', 'Vast', 'Violent', 'Walled', 'Wasted', 'Wasteful', 'Wasting', 'Waveless', 'Western', 'Whispering', 'White', 'Wild', 'Windy', 'Wondering', 'Wrinkled', 'Yearning'];
  const nm2 = ['Basin', 'Cove', 'Depths', 'Domain', 'Expanse', 'Gorge', 'Lagoon', 'Lake', 'Loch', 'Pond', 'Reservoir', 'Shallows', 'Waters'];
  const nm3 = ['b', 'br', 'bl', 'c', 'cl', 'cr', 'd', 'dr', 'f', 'fr', 'fl', 'g', 'gr', 'gl', 'gn', 'h', 'j', 'k', 'kr', 'kl', 'kn', 'm', 'n', 'p', 'pr', 'pl', 'q', 'qr', 'ql', 'r', 's', 'st', 'sr', 'str', 'sl', 't', 'tr', 'tl', 'v', 'vl', 'vr', 'w', 'wr', 'x', 'z', '', '', '', '', ''];
  const nm4 = ['a', 'e', 'i', 'o', 'u', 'y'];
  const nm5 = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z', '', '', '', '', '', ''];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'y'];
  const nm7 = ['b', 'd', 'g', 'gh', 'h', 'hr', 'hs', 'ht', 'hst', 'hsh', 'hn', 'hm', 'hl', 'hz', 'hx', 'hq', 'k', 'ks', 'kx', 'l', 'll', 'lk', 'ln', 'lm', 'lz', 'lp', 'lt', 'ls', 'lst', 'lf', 'm', 'mn', 'mm', 'mt', 'ms', 'n', 'nn', 'nt', 'ns', 'p', 'ps', 'pt', 'ph', 'q', 'r', 'rs', 'rt', 'rst', 'rq', 'rk', 'rc', 'rf', 'rb', 'rd', 's', 'st', 'ss', 'sh', 'sk', 'sp', 't', 'th', 'ts', 'w', 'wth', 'x', 'z'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 4) {
      names = `${sample(nm1)} ${sample(nm2)}`;
    } else if (i < 7) {
      names = `${sample(nm3) + sample(nm4) + sample(nm7)} ${sample(nm2)}`;
    } else {
      names = `${sample(nm3) + sample(nm4) + sample(nm5) + sample(nm6) + sample(nm7)} ${sample(nm2)}`;
    }
    return names;
  }
}
