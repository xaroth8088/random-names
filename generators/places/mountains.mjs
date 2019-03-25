import sample from 'lodash/sample';

export default function mountains() {
  let names;
  const nm1 = ['Adamantine', 'Ancient', 'Angry', 'Arctic', 'Arid', 'Bare', 'Barren', 'Beholding', 'Bellowing', 'Black', 'Bronze', 'Burning', 'Calm', 'Calmest', 'Charmed', 'Cold', 'Collapsing', 'Colorless', 'Colossal', 'Cursed', 'Dangerous', 'Dark', 'Darkest', 'Dead', 'Decayed', 'Decaying', 'Deserted', 'Desolate', 'Desolated', 'Diamond', 'Disintegrated', 'Distant', 'Dominating', 'Eastern', 'Empty', 'Enchanted', 'Enormous', 'Eroded', 'Ethereal', 'Ever Reaching', 'Everlasting', 'Fabled', 'Faraway', 'Feared', 'Fearsome', 'Flaring', 'Forbidden', 'Forested', 'Fractured', 'Frightening', 'Frozen', 'Gargantuan', 'Giant', 'Gigantic', 'Gloomy', 'Gold', 'Golden', 'Gray', 'Grim', 'Haunted', 'Heaven-reaching', 'Hollow', 'Homeless', 'Hopeless', 'Huge', 'Humongous', 'Hungry', 'Ice-crowned', 'Immense', 'Infernal', 'Iron', 'Isolated', 'Jagged', 'Laughing', 'Lifeless', 'Light', 'Lightest', 'Lonely', 'Mammoth', 'Mighty', 'Mirrored', 'Misty', 'Moaning', 'Monstrous', 'Moonlit', 'Motionless', 'Mysterious', 'Naked', 'Narrow', 'Neverending', 'New', 'Northern', 'Overhanging', 'Plain', 'Prickly', 'Quiet', 'Raging', 'Red', 'Relentless', 'Remote', 'Restless', 'Rocky', 'Round-topped', 'Rugged', 'Sad', 'Savage', 'Scarlet', 'Severed', 'Shadowed', 'Shadowy', 'Sharp-peaked', 'Shimmering', 'Silver', 'Slumbering', 'Snowy', 'Southern', 'Steep', 'Symmetrical', 'Terraced', 'Thundering', 'Titanic', 'Towering', 'Unresting', 'Unscaled', 'Unwelcoming', 'Vast', 'Violent', 'Voiceless', 'Volcanic', 'Welcoming', 'Western', 'Whispering', 'White', 'Windless', 'Windy', 'Wintry', 'Withered', 'Yelling'];
  const nm2 = ['Bluff', 'Heights', 'Highland', 'Highlands', 'Hill', 'Hills', 'Hillside', 'Mountain', 'Mountains', 'Peaks', 'Pinnacle', 'Rise', 'Slopes', 'Summit', 'Tips', 'Tops', 'Volcano'];
  const nm3 = ['b', 'br', 'bl', 'c', 'cl', 'cr', 'd', 'dr', 'f', 'fr', 'fl', 'g', 'gr', 'gl', 'gn', 'h', 'j', 'k', 'kr', 'kl', 'kn', 'm', 'n', 'p', 'pr', 'pl', 'q', 'qr', 'ql', 'r', 's', 'st', 'sr', 'str', 'sl', 't', 'tr', 'tl', 'v', 'vl', 'vr', 'w', 'wr', 'x', 'z', '', '', '', '', ''];
  const nm4 = ['a', 'e', 'i', 'o', 'u', 'y'];
  const nm5 = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z', '', '', '', '', '', ''];
  const nm6 = ['b', 'd', 'g', 'gh', 'h', 'hr', 'hs', 'ht', 'hst', 'hsh', 'hn', 'hm', 'hl', 'hz', 'hx', 'hq', 'k', 'ks', 'kx', 'l', 'll', 'lk', 'ln', 'lm', 'lz', 'lp', 'lt', 'ls', 'lst', 'lf', 'm', 'mn', 'mm', 'mt', 'ms', 'n', 'nn', 'nt', 'ns', 'p', 'ps', 'pt', 'ph', 'q', 'r', 'rs', 'rt', 'rst', 'rq', 'rk', 'rc', 'rf', 'rb', 'rd', 's', 'st', 'ss', 'sh', 'sk', 'sp', 't', 'th', 'ts', 'w', 'wth', 'x', 'z'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 4) {
      names = `The ${sample(nm1)} ${sample(nm2)}`;
    } else if (i < 7) {
      names = `${sample(nm3) + sample(nm4) + sample(nm6)} ${sample(nm2)}`;
    } else {
      names = `${sample(nm3) + sample(nm4) + sample(nm5) + sample(nm4) + sample(nm6)} ${sample(nm2)}`;
    }
    return names;
  }
}
