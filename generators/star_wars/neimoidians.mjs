export default function neimoidians() {
  let namelast;
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let rnd7;
  let rnd8;
  let rnd9;
  let rnd10;
  let rnd11;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', '', 'b', 'bl', 'br', 'c', 'ch', 'd', 'dr', 'f',
    'g', 'gr', 'h', 'j', 'k', 'kl', 'kr', 'l', 'm', 'n', 'p', 'pr', 'r', 's',
    'sm', 't', 'th', 'v', 'y', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i',
    'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i',
    'o', 'u', 'i', 'u', 'i', 'u', 'u', 'u', 'ai', 'au', 'oo', 'ee', 'ui',
    'oa', 'uu'];
  const nm3 = ['b', 'bm', 'd', 'dm', 'dml', 'dr', 'f', 'g', 'gr', 'hv', 'k',
    'kv', 'l', 'lf', 'lv', 'lr', 'lt', 'm', 'md', 'mv', 'n', 'nv', 'nd',
    'ndd', 'nj', 'nr', 'nt', 'p', 'r', 'rg', 'rl', 'rr', 'sh', 'shr', 'ss',
    't', 'th', 'w', 'z'];
  const nm4 = ['', '', '', '', '', 'b', 'f', 'gh', 'hn', 'k', 'l', 'lb', 'll',
    'n', 'nd', 'p', 'ph', 'r', 'rs', 's', 'sk', 't', 'th', 'tt', 'v', 'x', 'y',
  ];
  const nm5 = ['', '', '', '', 'b', 'bl', 'f', 'h', 'l', 'm', 'n', 'p', 'pl',
    'ph', 'r', 's', 'sh', 'sn', 'sm', 't', 'th', 'v', 'y', 'z'];
  const nm6 = ['a', 'a', 'e', 'i', 'o', 'u', 'i', 'u', 'a', 'e', 'i', 'o', 'u',
    'i', 'u', 'e', 'i', 'o', 'u', 'i', 'u', 'a', 'e', 'i', 'o', 'u', 'i', 'u',
    'uu', 'ia', 'ai', 'ee', 'ue', 'ui'];
  const nm7 = ['d', 'f', 'ff', 'fn', 'g', 'gg', 'h', 'hv', 'l', 'll', 'm', 'mm',
    'mv', 'md', 'n', 'nn', 'nv', 'nd', 'ph', 's', 'sh', 'ss', 'th', 'r', 'rr',
    'rh', 'rv', 'rl', 'rs', 'v', 'w', 'z'];
  const nm8 = ['', '', '', '', '', '', '', '', '', '', 'b', 'f', 'ff', 'h', 'l',
    'll', 'n', 'ph', 'rn', 's', 'ss', 'th', 'y'];
  const nm9 = ['', '', '', '', '', 'b', 'br', 'c', 'ch', 'd', 'dr', 'dr', 'f',
    'g', 'gr', 'k', 'kr', 'kh', 'm', 'n', 'p', 'pr', 'pl', 'r', 's', 'sr',
    'sh', 't', 'tr', 'v', 'z', 'zr'];
  const nm10 = ['a', 'e', 'i', 'o', 'u', 'i', 'o', 'a', 'a', 'e', 'i', 'o', 'u',
    'i', 'o', 'a', 'a', 'e', 'i', 'o', 'u', 'i', 'o', 'a', 'a', 'e', 'i', 'o',
    'u', 'i', 'o', 'a', 'a', 'e', 'i', 'o', 'u', 'i', 'o', 'a', 'ii', 'io',
    'ai', 'ui', 'iu', 'ee'];
  const nm11 = ['f', 'ff', 'fr', 'fd', 'g', 'gg', 'gr', 'gn', 'gb', 'k', 'kk',
    'kv', 'kr', 'll', 'lv', 'lr', 'my', 'm', 'md', 'mm', 'mv', 'mr', 'n',
    'nn', 'nv', 'nd', 'nk', 'nkk', 'rt', 'tb', 'tr', 'th', 't', 'tt', 'tz',
    'tg', 'tf'];
  const nm12 = ['', '', '', '', '', '', '', '', '', '', 'b', 'd', 'm', 'n', 'p',
    'r', 's', 't', 'th', 'y', 'x'];
  const i = Math.floor(Math.random() * 10);
  {
    rnd7 = Math.floor(Math.random() * nm9.length);
    rnd8 = Math.floor(Math.random() * nm10.length);
    rnd10 = Math.floor(Math.random() * nm12.length);
    rnd9 = Math.floor(Math.random() * nm10.length);
    rnd11 = Math.floor(Math.random() * nm11.length);
    namelast = nm9[rnd7] + nm10[rnd8] + nm11[rnd11] + nm10[rnd9] + nm12[rnd10];
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      rnd5 = Math.floor(Math.random() * nm8.length);
      if (i < 5) {
        while (rnd < 4) {
          rnd = Math.floor(Math.random() * nm5.length);
        }
        names = `${nm5[rnd] + nm6[rnd2] + nm8[rnd5]}  ${namelast}`;
      } else {
        rnd3 = Math.floor(Math.random() * nm7.length);
        rnd4 = Math.floor(Math.random() * nm6.length);
        names = `${nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5]}  ${namelast}`;
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 4) {
        while (rnd < 5) {
          rnd = Math.floor(Math.random() * nm1.length);
        }
        while (rnd5 < 5) {
          rnd5 = Math.floor(Math.random() * nm4.length);
        }
        names = `${nm1[rnd] + nm2[rnd2] + nm4[rnd5]}  ${namelast}`;
      } else if (i < 8) {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5]}  ${namelast}`;
      } else {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        rnd6 = Math.floor(Math.random() * nm3.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5]}  ${namelast}`;
      }
    }
    return names;
  }
}
