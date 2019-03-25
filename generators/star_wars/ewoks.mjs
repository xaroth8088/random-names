export default function ewoks() {
  let namelast;
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let rnd7;
  let rnd8;
  let
    rnd9;
  let rnd10;
  let
    rnd11;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', 'b', 'ch', 'c', 'd', 'gr', 'g', 'k', 'kr', 'l', 'm', 'n', 'p', 'r', 't', 'tr', 'w'];
  const nm2 = ['a', 'e', 'i', 'a', 'e', 'i', 'a', 'e', 'i', 'a', 'e', 'i', 'ee', 'oo', 'aa', 'y'];
  const nm3 = ['b', 'ck', 'd', 'dr', 'gr', 'gl', 'g', 'k', 'kk', 'l', 'll', 'm', 'n', 'pl', 'rf', 'rp', 'rph', 'rr', 'st', 'str'];
  const nm4 = ['', '', '', '', '', '', 'c', 'ck', 'k', 'l', 'm', 'n', 'ng', 't'];
  const nm5 = ['', '', 'b', 'ch', 'd', 'f', 'g', 'gl', 'gn', 'k', 'kn', 'l', 'm', 'n', 'p', 'r', 't', 'tr'];
  const nm6 = ['ck', 'd', 'gr', 'gl', 'gn', 'k', 'l', 'll', 'm', 'n', 'p', 'pr', 'r', 'rph', 'rp', 'rr', 's', 'sh', 'st', 't', 'zz'];
  const nm7 = ['b', 'd', 'f', 'g', 'gr', 'gl', 'j', 'k', 'kr', 'l', 'm', 'n', 'r', 't', 'tr', 'w', 'z'];
  const nm8 = ['dr', 'dd', 'gr', 'k', 'kk', 'l', 'll', 'lr', 'm', 'mr', 'mn', 'n', 'nr', 'nl', 'nt', 'r', 'rr', 'rl', 'st', 'str'];
  const nm9 = ['c', 'ck', 'k', 'l', 'm', 'n', 'ng', 't'];
  const i = Math.floor(Math.random() * 10); {
    rnd6 = Math.floor(Math.random() * nm7.length);
    rnd7 = Math.floor(Math.random() * nm2.length);
    rnd8 = Math.floor(Math.random() * nm8.length);
    rnd10 = Math.floor(Math.random() * nm2.length);
    if (i % 2 === 0) {
      rnd9 = Math.floor(Math.random() * nm9.length);
      namelast = nm7[rnd6] + nm2[rnd7] + nm8[rnd8] + nm2[rnd10] + nm9[rnd9];
    } else {
      rnd9 = Math.floor(Math.random() * nm8.length);
      rnd11 = Math.floor(Math.random() * nm2.length);
      namelast = nm7[rnd6] + nm2[rnd7] + nm8[rnd8] + nm2[rnd10] + nm8[rnd9] + nm2[rnd11];
    }
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm6.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      if (i < 6) {
        names = `${nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd4]}  ${namelast}`;
      } else {
        rnd5 = Math.floor(Math.random() * nm6.length);
        rnd6 = Math.floor(Math.random() * nm2.length);
        names = `${nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd4] + nm6[rnd5] + nm2[rnd6]}  ${namelast}`;
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5]}  ${namelast}`;
    }
    return names;
  }
}
