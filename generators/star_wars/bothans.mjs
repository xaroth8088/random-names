export default function bothans() {
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
  const nm1 = ['', '', 'b', 'c', 'd', 'g', 'gr', 'h', 'k', 'n', 'r', 'tr', 'v', 'y', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ae', 'aa', 'ee', 'ai', 'ia'];
  const nm3 = ['b', 'br', 'c', 'ct', 'd', 'dr', 'g', 'h', 'kr', 'k', 'm', 'nt', 'r', 'ry', 'tr', 'v'];
  const nm4 = ['c', 'g', 'gt', 'k', 'm', 'n', 'r', 'rc', 'rd', 'rsk', 'sc', 'sk', 'st', 'th'];
  const nm5 = ['', '', '', 'c', 'dh', 'g', 'gn', 'gl', 'h', 'k', 'kn', 'l', 'm', 'n', 's', 'th', 'v', 'y'];
  const nm6 = ['c', 'g', 'h', 'kh', 'l', 'm', 'n', 'nt', 'nd', 'q', 'qh', 'r', 'rr', 's', 't', 'th', 'tr', 'v'];
  const nm7 = ['h', 'l', 'm', 'n', 'nn', 'r', 's', 't', 'th'];
  const nm8 = ['bw', 'd', 'f', 'g', 'gr', 'h', 'k', 'kr', 'l', 'm', 'n', 's', 'tr', 'v'];
  const nm9 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ae', 'aa', 'ee', 'ai', 'ia', 'ua', 'ea'];
  const nm10 = ['d', 'd\'h', 'f\'l', '\'f', 'h\'r', 'h', '\'h', 'k', '\'k', 'l', '\'l', 'n', 'n\'d', 'nr', 'n\'q', 'nd', 'n\'n', 'q', 'r', 'rr', '\'r', 's', 's\'', '\'t', 't', 'th', 'v\'', 'y\'l'];
  const nm11 = ['h', 'l', 'm', 'n', 'r', 's', 't', 'v'];
  const nm12 = ['', '', '', '', '', 'a', 'e', 'i', 'o', 'u'];
  const i = Math.floor(Math.random() * 10);
  {
    rnd6 = Math.floor(Math.random() * nm8.length);
    rnd7 = Math.floor(Math.random() * nm9.length);
    rnd8 = Math.floor(Math.random() * nm10.length);
    rnd9 = Math.floor(Math.random() * nm9.length);
    rnd10 = Math.floor(Math.random() * nm11.length);
    rnd11 = Math.floor(Math.random() * nm12.length);
    namelast = nm8[rnd6] + nm9[rnd7] + nm10[rnd8] + nm9[rnd9] + nm11[rnd10] + nm12[rnd11];
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm7.length);
      if (i < 7) {
        names = `${nm5[rnd] + nm2[rnd2] + nm7[rnd5]}  ${namelast}`;
      } else {
        rnd3 = Math.floor(Math.random() * nm6.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        names = `${nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd4] + nm7[rnd5]}  ${namelast}`;
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 7) {
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
