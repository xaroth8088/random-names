export default function tieflings() {
  let lastName;
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
  let rnd11;
  let rnd12;
  let rnd13;
  let
    rnd14;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', '', 'b', 'cr', 'd', 'g', 'h', 'k', 'kr', 'm', 'r', 's', 'sh', 't', 'v', 'y', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'y', 'ia', 'io'];
  const nm3 = ['c', 'cr', 'cn', 'd', 'dr', 'g', 'gr', 'gg', 'k', 'kr', 'l', 'ldr', 'lv', 'll', 'm', 'nst', 'nv', 'nr', 'r', 'rn', 'rd', 'rk', 'rrd', 'rt', 'rv', 's', 'sr', 'sk', 't', 'tr', 'v', 'c', 'd', 'g', 'k', 'l', 'm', 'n', 'r', 's', 't', 'v'];
  const nm4 = ['', '', '', 'c', 'k', 'n', 'r', 's', 't', 'th'];
  const nm5 = ['d', 'f', 'h', 'k', 'kh', 'l', 'm', 'n', 'r', 's', 'sh', 'str', 't', 'th', 'v', 'z'];
  const nm6 = ['a', 'e', 'i', 'o', 'a', 'a', 'e', 'a', 'e', 'i', 'o', 'a', 'a', 'e', 'a', 'o', 'e', 'a', 'o', 'e', 'i', 'i', 'ei', 'ia', 'ea', 'ai'];
  const nm7 = ['d', 'dr', 'f', 'fr', 'ff', 'l', 'll', 'ld', 'ldr', 'lr', 'ln', 'ls', 'm', 'mr', 'mdr', 'ms', 'nd', 'ndr', 'nn', 'n', 'nz', 'r', 'rdr', 'rr', 'rs', 'rz', 's', 'sh', 'sz', 'sr', 't', 'tr', 'v', 'vr', 'y', 'zs', 'd', 'f', 'l', 'm', 'n', 'r', 's', 't', 'v', 'y'];
  const nm8 = ['h', 'l', 'n', 's', 'th'];
  const nm9 = ['', '', '', '', 'b', 'br', 'd', 'dr', 'f', 'g', 'h', 'l', 'm', 'n', 'p', 'r', 's', 'sh', 't', 'v', 'z'];
  const nm10 = ['a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'a', 'e', 'e', 'i', 'aa', 'ae', 'ia', 'ea'];
  const nm11 = ['b', 'br', 'c', 'd', 'dr', 'fr', 'g', 'gg', 'gr', 'gv', 'k', 'l', 'll', 'lr', 'lv', 'ldr', 'm', 'mm', 'mr', 'mdr', 'n', 'nd', 'ng', 'ndr', 'nst', 'nv', 'nr', 'r', 'rh', 'rv', 'rr', 'rz', 'rd', 'rdr', 's', 'ss', 'sr', 'sh', 'st', 't', 'tr', 'v', 'vr', 'b', 'c', 'd', 'g', 'k', 'l', 'm', 'n', 'r', 's', 't', 'v'];
  const nm12 = ['', '', '', '', '', '', '', '', '', '', 'd', 'ld', 'lt', 'm', 'n', 'nd', 'r', 'rd', 's', 't', 'th'];
  const i = Math.floor(Math.random() * 10); {
    rnd8 = Math.floor(Math.random() * nm9.length);
    rnd9 = Math.floor(Math.random() * nm10.length);
    rnd10 = Math.floor(Math.random() * nm11.length);
    rnd11 = Math.floor(Math.random() * nm10.length);
    rnd12 = Math.floor(Math.random() * nm12.length);
    if (i % 2 === 0) {
      lastName = nm9[rnd8] + nm10[rnd9] + nm11[rnd10] + nm10[rnd11] + nm12[rnd12];
    } else {
      rnd13 = Math.floor(Math.random() * nm11.length);
      rnd14 = Math.floor(Math.random() * nm10.length);
      lastName = nm9[rnd8] + nm10[rnd9] + nm11[rnd10] + nm10[rnd11] + nm11[rnd13] + nm10[rnd14] + nm12[rnd12];
    }
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      rnd3 = Math.floor(Math.random() * nm7.length);
      rnd4 = Math.floor(Math.random() * nm6.length);
      rnd5 = Math.floor(Math.random() * nm8.length);
      if (i < 5) {
        names = `${nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5]} ${lastName}`;
      } else {
        rnd6 = Math.floor(Math.random() * nm7.length);
        rnd7 = Math.floor(Math.random() * nm6.length);
        names = `${nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd7] + nm8[rnd5]} ${lastName}`;
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 5) {
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5]} ${lastName}`;
      } else {
        rnd6 = Math.floor(Math.random() * nm3.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5]} ${lastName}`;
      }
    }
    return names;
  }
}
