import { sample } from 'lodash-es';

export default function fireLands() {
  let names;
  const nm1 = ['Agni', 'Ash', 'Ashen', 'Barrage', 'Berserk', 'Blazing', 'Blister', 'Blistering', 'Blustering', 'Boiling', 'Branded', 'Brimstone', 'Broiling', 'Burning', 'Caustic', 'Charcoal', 'Charred', 'Charring', 'Cherufe', 'Combustion', 'Conflagration', 'Crimson', 'Dragon', 'Dragonfire', 'Ebon', 'Efreet', 'Ember', 'Fiery', 'Firewhirl', 'Flaming', 'Flaring', 'Frenzied', 'Frenzy', 'Fume', 'Fuming', 'Furious', 'Furnace', 'Glowing', 'Grime', 'Hell', 'Inferno', 'Kindle', 'Lampad', 'Lava', 'Mad', 'Magma', 'Nether', 'Nightmare', 'Obsidian', 'Onyx', 'Parching', 'Phoenix', 'Pitch', 'Pyre', 'Pyro', 'Rabid', 'Raging', 'Raving', 'Roasting', 'Ruined', 'Sanguine', 'Scalding', 'Scaled', 'Scarlet', 'Scorching', 'Searing', 'Singed', 'Sizzling', 'Smoking', 'Smouldering', 'Smudge', 'Solar', 'Soot', 'Spark', 'Steaming', 'Sultry', 'Tempest', 'Thermo', 'Torch', 'Torment', 'Torrid', 'Turbulent', 'Violent', 'Volcanic', 'Volcano', 'Wicked', 'Wild'];
  const nm2 = ['Badlands', 'Barrens', 'Desert', 'Domain', 'Dominion', 'Expanse', 'Field', 'Fields', 'Land', 'Lands', 'Plains', 'Range', 'Terrain', 'Territory', 'Wastes', 'Wilderness', 'Wilds'];
  const nm3 = ['b', 'br', 'bl', 'c', 'cl', 'cr', 'd', 'dr', 'f', 'fr', 'fl', 'g', 'gr', 'gl', 'gn', 'h', 'j', 'k', 'kr', 'kl', 'kn', 'm', 'n', 'p', 'pr', 'pl', 'q', 'qr', 'ql', 'r', 's', 'st', 'sr', 'str', 'sl', 't', 'tr', 'tl', 'v', 'vl', 'vr', 'w', 'wr', 'x', 'z', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const nm4 = ['a', 'e', 'i', 'o', 'u', 'y'];
  const nm5 = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'y'];
  const nm7 = ['b', 'd', 'g', 'gh', 'h', 'hr', 'hs', 'ht', 'hst', 'hsh', 'hn', 'hm', 'hl', 'hz', 'hx', 'hq', 'k', 'ks', 'kx', 'l', 'll', 'lk', 'ln', 'lm', 'lz', 'lp', 'lt', 'ls', 'lst', 'lf', 'm', 'mn', 'mm', 'mt', 'ms', 'n', 'nn', 'nt', 'ns', 'p', 'ps', 'pt', 'ph', 'q', 'r', 'rs', 'rt', 'rst', 'rq', 'rk', 'rc', 'rf', 'rb', 'rd', 's', 'st', 'ss', 'sh', 'sk', 'sp', 't', 'th', 'ts', 'w', 'wth', 'x', 'z'];
  const nm8 = ['Badlands', 'Barrens', 'Desert', 'Domain', 'Dominion', 'Expanse', 'Field', 'Fields', 'Land', 'Lands', 'Plains', 'Range', 'Terrain', 'Territory', 'Wastes', 'Wilderness', 'Wilds', 'Fireland', 'Firelands', 'Fire Fields', 'Flamelands', 'Flame Fields', 'Ashlands', 'Ash Fields', 'Emberlands', 'Ember Lands'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = `The ${sample(nm1)} ${sample(nm2)}`;
    } else {
      names = `The ${sample(nm3)}${sample(nm4)}${sample(nm5)}${sample(nm6)}${sample(nm7)} ${sample(nm8)}`;
    }
    return names;
  }
}
