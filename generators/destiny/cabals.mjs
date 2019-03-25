export default function cabals() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd5;
  const nm1 = ['d', 'dh', 'g', 'gh', 'k', 'kh', 'm', 'n', 'sh', 't', 'th', 'tl',
    'v', 'z', 'zh'];
  const nm2 = ['a\'au', 'au\'ua', 'o\'ou', 'u\'u', 'u\'ua', 'u\'uo', 'ua\'au'];
  const nm2b = ['a', 'o', 'u'];
  const nm3 = ['d', 'g', 'l', 'm', 'n', 'r', 'v', 'z'];
  const nm4 = ['c', 'ch', 'g', 'l', 'm', 'n', 'r', 'v', 'z'];
  const nm5 = ['c', 'd', 'k', 'l', 'lk', 'll', 'm', 'n', 'rc', 'rd', 'rg', 'rk',
    'rn'];
  const i = Math.floor(Math.random() * 10);
  {
    rnd = Math.floor(Math.random() * nm1.length);
    if (i < 5) {
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm5.length);
      names = nm1[rnd] + nm2[rnd2] + nm5[rnd3];
    } else if (i < 7) {
      rnd2 = Math.floor(Math.random() * nm2b.length);
      rnd3 = Math.floor(Math.random() * nm4.length);
      names = nm1[rnd] + nm2b[rnd2] + nm4[rnd3];
    } else {
      rnd2 = Math.floor(Math.random() * nm2b.length);
      rnd3 = Math.floor(Math.random() * nm4.length);
      rnd5 = Math.floor(Math.random() * nm3.length);
      names = nm1[rnd] + nm2b[rnd2] + nm3[rnd5] + nm2b[rnd2] + nm4[rnd3];
    }
    return names;
  }
}
