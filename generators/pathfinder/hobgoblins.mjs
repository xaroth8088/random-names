export default function hobgoblins() {
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
  let
    rnd7;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', 'b', 'd', 'dr', 'f', 'g', 'gr', 'h', 'k', 'kr', 'm', 'n', 'p', 'pr', 'r', 's', 't', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u'];
  const nm3 = ['d', 'dr', 'gl', 'gr', 'gt', 'gh', 'kr', 'kt', 'kh', 'kl', 'l', 'lgr', 'lt', 'ld', 'ldr', 'lg', 'lb', 'lbr', 'll', 'r', 'rg', 'rd', 'rt', 'rdr', 'rgr', 'rk', 'rl', 'th', 'tt', 'tr', 'thr', 'vl', 'vr', 'vt'];
  const nm4 = ['', 'd', 'g', 'k', 'm', 'n', 'ng', 'r', 't'];
  const nm5 = ['', '', '', '', 'b', 'c', 'd', 'f', 'h', 'k', 'm', 'n', 'ph', 'r', 's', 't', 'v', 'w', 'z'];
  const nm7 = ['cl', 'cn', 'cm', 'cd', 'f', 'ff', 'fn', 'fm', 'fl', 'kl', 'kr', 'kn', 'km', 'kd', 'kt', 'ks', 'l', 'lz', 'ln', 'lm', 'ld', 'lg', 'm', 'mz', 'ms', 'mr', 'md', 'mg', 'mk', 'n', 'ns', 'nd', 'nr', 'ng', 'ns', 'nk', 'r', 'rm', 'rg', 'rn', 'rd', 'rk', 's', 'sm', 'st', 'ss', 'sz', 'sm', 'sn', 'sd', 'sg', 'th', 'tr', 'tn', 'tz', 'ts', 'yd', 'yn', 'yg', 'yk', 'yr', 'yz'];
  const nm8 = ['', '', '', '', '', '', '', '', '', '', 'f', 'h', 'l', 'm', 'n', 's', 't'];
  const i = Math.floor(Math.random() * 10); {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm7.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm8.length);
      if (i < 8) {
        names = nm5[rnd] + nm2[rnd2] + nm7[rnd3] + nm2[rnd4] + nm8[rnd5];
      } else {
        rnd6 = Math.floor(Math.random() * nm7.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = nm5[rnd] + nm2[rnd2] + nm7[rnd3] + nm2[rnd4] + nm7[rnd6] + nm2[rnd7] + nm8[rnd5];
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (rnd < 3) {
        while (rnd5 === 0) {
          rnd5 = Math.floor(Math.random() * nm4.length);
        }
      }
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
    }
    return names;
  }
}
