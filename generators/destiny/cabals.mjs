import { sample } from 'lodash-es';

export default function cabals() {
  let names;
  let rnd2;
  const nm1 = ['d', 'dh', 'g', 'gh', 'k', 'kh', 'm', 'n', 'sh', 't', 'th', 'tl', 'v', 'z', 'zh'];
  const nm2 = ['a\'au', 'au\'ua', 'o\'ou', 'u\'u', 'u\'ua', 'u\'uo', 'ua\'au'];
  const nm2b = ['a', 'o', 'u'];
  const nm3 = ['d', 'g', 'l', 'm', 'n', 'r', 'v', 'z'];
  const nm4 = ['c', 'ch', 'g', 'l', 'm', 'n', 'r', 'v', 'z'];
  const nm5 = ['c', 'd', 'k', 'l', 'lk', 'll', 'm', 'n', 'rc', 'rd', 'rg', 'rk', 'rn'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      names = sample(nm1) + sample(nm2) + sample(nm5);
    } else if (i < 7) {
      rnd2 = Math.floor(Math.random() * nm2b.length);
      names = sample(nm1) + nm2b[rnd2] + sample(nm4);
    } else {
      rnd2 = Math.floor(Math.random() * nm2b.length);
      names = sample(nm1) + nm2b[rnd2] + sample(nm3) + nm2b[rnd2] + sample(nm4);
    }
    return names;
  }
}
