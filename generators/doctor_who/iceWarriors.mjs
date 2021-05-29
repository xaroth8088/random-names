import { sample } from 'lodash-es';

export default function iceWarriors() {
  let names;
  const nm1 = ['h', 'gr', 'g', 'gl', 'k', 'kr', 'kl', 'r', 'sk', 'sl', 'ss', 'sr', 'sz', 'v', 'vr', 'xz', 'x', 'xr', 'xzn', 'z'];
  const nm2 = ['a', 'i', 'o', 'e', 'aa', 'a', 'u', 'a', 'y', 'a'];
  const nm3 = ['d', 'dr', 'kss', 'ld', 'm', 'nt', 'r', 'rt', 'rd', 'rn', 'rg', 'sb', 'sr', 'sz', 'szr', 'zr', 'ssb', 'x', 'xl', 'z', 'zd'];
  const nm4 = ['d', 'dz', 'k', 'kz', 'l', 'lk', 'n', 'r', 'rd', 'rzz', 'rz', 'rs', 'x', 'z'];
  const nm5 = ['a', '', '', '', '', '', ''];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = sample(nm5) + sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    } else {
      names = sample(nm5) + sample(nm1) + sample(nm2) + sample(nm4);
    }
    return names;
  }
}
