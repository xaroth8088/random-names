import { sample } from 'lodash-es';

export default function hives() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['b', 'cr', 'd', 'g', 'gr', 'k', 'kr', 'm', 'n', 'r', 's', 'tr', 'z'];
  const nm2 = ['a', 'e', 'o', 'u', 'a', 'e', 'o', 'u', 'a', 'e', 'o', 'u', 'oo'];
  const nm3 = ['c', 'cr', 'gr', 'k', 'kr', 'm', 'n', 'nd', 'r', 'rd', 'rg', 'rn', 'rv', 'rz', 't', 'tr', 'v', 'z'];
  const nm4 = ['', 'c', 'k', 'k', 'n', 'r', 'x'];
  const nm5 = ['c', 'ch', 'h', 'm', 'n', 'ph', 's', 'sh', 'th', 'v', 'z', 'zh'];
  const nm6 = ['a', 'e', 'i', 'e', 'i', 'o'];
  const nm7 = ['g', 'lk', 'lm', 'ln', 'm', 'mn', 'n', 'nl', 'nr', 'rm', 'sh', 'sm', 'sn', 'sr', 'st', 'th', 'tr', 'v', 'vn', 'vr', 'z', 'zd', 'zl', 'zn'];
  const nm8 = ['', '', '', '', 'h', 'l', 's', 'th'];
  {
    if (type === 1) {
      names = sample(nm5) + sample(nm6) + sample(nm7) + sample(nm6) + sample(nm8);
    } else {
      names = sample(nm1) + sample(nm2) + sample(nm3) + sample(nm2) + sample(nm4);
    }
    return names;
  }
}
