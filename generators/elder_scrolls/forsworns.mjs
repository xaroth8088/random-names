export default function forsworns() {
  let nameLast;
  let names;
  let rnd8a;
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
  let rnd12;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', '', 'b', 'br', 'd', 'dr', 'g', 'gr', 'h', 'k', 'm', 'n', 'p', 'pr', 'r', 's', 't', 'tr', 'v', 'w'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'y', 'ey', 'ay', 'ai', 'ua', 'uu', 'uo', 'au'];
  const nm3 = ['br', 'bb', 'cc', 'cr', 'cd', 'd', 'dv', 'dr', 'dl', 'gv', 'gl', 'gm', 'gn', 'gr', 'l', 'lr', 'lm', 'ln', 'lk', 'lv', 'ld', 'lc', 'mr', 'ml', 'mm', 'mv', 'md', 'n', 'nn', 'nd', 'nb', 'nv', 'nr', 'ng', 'r', 'rk', 'rv', 'rg', 'rd', 'rb', 'rt', 'st', 'sl', 'sr', 'v', 'vv', 'vr', 'vl'];
  const nm4 = ['c', 'ch', 'd', 'g', 'l', 'n', 'r', 's'];
  const nm5 = ['b', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'r', 's', 't', 'v', 'w'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'o'];
  const nm7 = ['uai', 'aie', 'eia', 'uae', 'iae', 'iea', 'ai', 'ua', 'ea', 'ia', 'ei'];
  const nm8 = ['d', 'f', 'g', 'h', 'l', 'm', 'n', 'r', 's', 't', 'v', 'w', 'z'];
  const nm9 = ['', '', '', '', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'o'];
  const nm10 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'b', 'br', 'd', 'dr', 'g', 'gr', 'h', 'k', 'm', 'n', 'p', 'pr', 'r', 's', 't', 'tr', 'v', 'w'];
  const i = Math.floor(Math.random() * 10);
  {
    rnd8a = Math.floor(Math.random() * nm10.length);
    rnd8 = Math.floor(Math.random() * nm6.length);
    rnd9 = Math.floor(Math.random() * nm3.length);
    rnd10 = Math.floor(Math.random() * nm6.length);
    rnd11 = Math.floor(Math.random() * nm8.length);
    rnd12 = Math.floor(Math.random() * nm9.length);
    nameLast = nm10[rnd8a] + nm6[rnd8] + nm3[rnd9] + nm6[rnd10] + nm8[rnd11] + nm9[rnd12];
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm7.length);
      if (i < 3) {
        names = `${nm5[rnd] + nm7[rnd2]}  ${nameLast}`;
      } else if (i < 7) {
        rnd2 = Math.floor(Math.random() * nm6.length);
        rnd3 = Math.floor(Math.random() * nm8.length);
        rnd4 = Math.floor(Math.random() * nm6.length);
        names = `${nm5[rnd] + nm6[rnd2] + nm8[rnd3] + nm6[rnd4]} ${nameLast}`;
      } else {
        rnd = Math.floor(Math.random() * nm6.length);
        rnd3 = Math.floor(Math.random() * nm8.length);
        names = `${nm7[rnd2] + nm8[rnd3] + nm6[rnd]} ${nameLast}`;
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 5) {
        while (rnd < 5) {
          rnd = Math.floor(Math.random() * nm1.length);
        }
        names = `${nm1[rnd] + nm2[rnd2] + nm4[rnd5]}  ${nameLast}`;
      } else if (i < 8) {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5]} ${nameLast}`;
      } else {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        rnd6 = Math.floor(Math.random() * nm3.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5]} ${nameLast}`;
      }
    }
    return names;
  }
}
