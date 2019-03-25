export default function shistavanens() {
  let namelast;
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd7;
  let rnd8;
  let rnd9;
  let rnd10;
  let rnd11;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['b', 'bl', 'c', 'd', 'g', 'h', 'k', 'l', 'm', 'n', 'phl', 'r',
    's', 't', 'v', 'y'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'u', 'o', 'a', 'a', 'e', 'i', 'o', 'u',
    'u', 'o', 'a', 'oo', 'aa', 'uu'];
  const nm3 = ['cv', 'cd', 'dv', 'dr', 'd', 'dd', 'gv', 'gr', 'gg', 'g', 'gn',
    'k', 'kk', 'kv', 'kl', 'kr', 'kt', 'kd', 'lv', 'lr', 'mr', 'mv', 'nv',
    'nr', 'nd', 'ndr', 'nst', 'r', 'rd', 'rt', 'vr', 'v', 'vr', 'vg', 'vgr',
    'vd'];
  const nm4 = ['', 'c', 'd', 'f', 'gg', 'k', 'l', 'm', 'n', 'q', 'r', 's', 'tt',
    'v', 'z'];
  const nm5 = ['c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'r', 's', 'sh', 't',
    'th', 'v', 'z'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'ae', 'ea', 'ie'];
  const nm8 = ['c', 'f', 'ft', 'l', 'm', 'n', 'nn', 'r', 's', 'sh', 't', 'v',
    'z'];
  const nm9 = ['b', 'br', 'c', 'cr', 'd', 'dr', 'dh', 'f', 'g', 'gr', 'k', 'kr',
    'l', 'm', 'n', 'r', 's', 'sh', 'shr', 's', 'v', 'z'];
  const nm10 = ['a', 'e', 'i', 'o', 'u', 'a', 'o', 'u', 'a', 'e', 'i', 'o', 'u',
    'a', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'o', 'u', 'a', 'e', 'i', 'o',
    'u', 'a', 'o', 'u', 'ie', 'oa', 'ae', 'oo', 'aa'];
  const nm11 = ['c', 'd', 'dr', 'dv', 'h', 'hr', 'hx', 'hv', 'kv', 'kr', 'kd',
    'n', 'r', 'rr', 'v', 'vr', 'vg', 'x', 'z'];
  const nm12 = ['', 'c', 'd', 'ft', 'g', 'k', 'l', 'm', 'n', 'nn', 'p', 'q',
    'r', 'rr', 't', 'v', 'vl'];
  const i = Math.floor(Math.random() * 10);
  {
    rnd7 = Math.floor(Math.random() * nm9.length);
    rnd8 = Math.floor(Math.random() * nm10.length);
    rnd10 = Math.floor(Math.random() * nm12.length);
    if (i % 2 !== 0) {
      while (rnd10 === 0) {
        rnd10 = Math.floor(Math.random() * nm12.length);
      }
      namelast = nm9[rnd7] + nm10[rnd8] + nm12[rnd10];
    } else {
      rnd9 = Math.floor(Math.random() * nm10.length);
      rnd11 = Math.floor(Math.random() * nm11.length);
      namelast = nm9[rnd7] + nm10[rnd8] + nm11[rnd11] + nm10[rnd9] + nm12[rnd10];
    }
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      rnd5 = Math.floor(Math.random() * nm8.length);
      names = `${nm5[rnd] + nm6[rnd2] + nm8[rnd5]}  ${namelast}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 6) {
        while (rnd5 === 0) {
          rnd5 = Math.floor(Math.random() * nm4.length);
        }
        names = `${nm1[rnd] + nm2[rnd2] + nm4[rnd5]}  ${namelast}`;
      } else {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5]}  ${namelast}`;
      }
    }
    return names;
  }
}
