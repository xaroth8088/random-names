import { sample } from 'lodash-es';

export default function rivers() {
  let names;
  const nm1 = ['Alligator', 'Amazon', 'Arching', 'Arctic', 'Arrowhead', 'Bamboo', 'Black', 'Bland', 'Blue', 'Bogbeast', 'Boundless', 'Brilliant', 'Bursting', 'Calm', 'Charmed', 'Choral', 'Climbing', 'Cobalt', 'Cold', 'Coral', 'Crocodile', 'Crystal', 'Cursed', 'Dancing', 'Dark', 'Darkest', 'Dead', 'Deep', 'Distant', 'Dragonfly', 'Dread', 'Dreaded', 'Eastern', 'Emerald', 'Empty', 'Enchanted', 'Ethereal', 'Ever Reaching', 'Fair', 'Flowing', 'Foaming', 'Forbidden', 'Frothy', 'Frozen', 'Glassy', 'Gleaming', 'Glistening', 'Gray', 'Green', 'Harmony', 'Heaving', 'Homeless', 'Hungry', 'Infernal', 'Infinite', 'Invisible', 'Iris', 'Isolated', 'Jade', 'Laughing', 'Lifeless', 'Lilypad', 'Lion\'s Tail', 'Living', 'Lonely', 'Lotus', 'Lucent', 'Majestic', 'Mesmerizing', 'Mighty', 'Mirrored', 'Misty', 'Moaning', 'Molten', 'Moon-lit', 'Motionless', 'Moving', 'Narrow', 'New', 'Northern', 'Peaceful', 'Perfumed', 'Pleasant', 'Quiet', 'Raging', 'Rainy', 'Red', 'Restless', 'Rippling', 'Rocking', 'Rolling', 'Rough', 'Rushing', 'Sandy', 'Sanguine', 'Savage', 'Serene', 'Serpent', 'Shimmering', 'Silent', 'Sleeping', 'Slumbrous', 'Soundless', 'Southern', 'Sparkling', 'Sterile', 'Stern', 'Straitened', 'Sunny', 'Surging', 'Tadpole', 'Teal', 'Throbbing', 'Thundering', 'Tinted', 'Tortoise', 'Tossing', 'Tranquil', 'Treacherous', 'Troubled', 'Turbulent', 'Turquoise', 'Turtle', 'Uncanny', 'Unknown', 'Violent', 'Waveless', 'Western', 'Whispering', 'White', 'Wild', 'Windy', 'Wondering', 'Wrinkled'];
  const nm2 = ['Creek', 'River', 'Stream', 'Brook', 'Run', 'Tributary', 'Canal', 'Channel', 'Beck', 'Rill'];
  const nm3 = ['b', 'br', 'bl', 'c', 'cl', 'cr', 'd', 'dr', 'f', 'fr', 'fl', 'g', 'gr', 'gl', 'gn', 'h', 'j', 'k', 'kr', 'kl', 'kn', 'm', 'n', 'p', 'pr', 'pl', 'q', 'qr', 'ql', 'r', 's', 'st', 'sr', 'str', 'sl', 't', 'tr', 'tl', 'v', 'vl', 'vr', 'w', 'wr', 'x', 'z', '', '', '', '', ''];
  const nm4 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'y'];
  const nm5 = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z', '', '', '', '', '', ''];
  const nm7 = ['b', 'd', 'g', 'gh', 'h', 'hr', 'hs', 'ht', 'hst', 'hsh', 'hn', 'hm', 'hl', 'hz', 'hx', 'hq', 'k', 'ks', 'kx', 'l', 'll', 'lk', 'ln', 'lm', 'lz', 'lp', 'lt', 'ls', 'lst', 'lf', 'm', 'mn', 'mm', 'mt', 'ms', 'n', 'nn', 'nt', 'ns', 'p', 'ps', 'pt', 'ph', 'q', 'r', 'rs', 'rt', 'rst', 'rq', 'rk', 'rc', 'rf', 'rb', 'rd', 's', 'st', 'ss', 'sh', 'sk', 'sp', 't', 'th', 'ts', 'w', 'wth', 'x', 'z'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 4) {
      names = `${sample(nm1)} ${sample(nm2)}`;
    } else if (i < 7) {
      names = `${sample(nm3) + sample(nm4) + sample(nm7)} ${sample(nm2)}`;
    } else {
      names = `${sample(nm3) + sample(nm4) + sample(nm5) + sample(nm4) + sample(nm7)} ${sample(nm2)}`;
    }
    return names;
  }
}
